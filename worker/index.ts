/* Netlik API (Cloudflare Worker). Statik site ASSETS'ten gelir; yalnız /api/* buraya düşer.
   Hesap: kullanıcı adı + şifre (PBKDF2-SHA256), oturum çerezi (HttpOnly), kurtarma kodu ile şifre sıfırlama.
   Veri: kullanıcının yedeği tek satırda; sürüm numarasıyla çakışma kontrolü (iyimser kilit). */

interface Env { DB: D1Database; ASSETS: Fetcher }

const COOKIE = 'netlik_oturum';
const SESSION_DAYS = 90;
const MAX_BODY = 1_500_000;
const ITER = 100_000;
const USER_RE = /^[a-z0-9._-]{3,24}$/;

const enc = new TextEncoder();
const hex = (b: ArrayBuffer | Uint8Array) => [...new Uint8Array(b)].map((x) => x.toString(16).padStart(2, '0')).join('');
const unhex = (s: string) => new Uint8Array(s.match(/../g)!.map((h) => parseInt(h, 16)));
const rand = (n: number) => crypto.getRandomValues(new Uint8Array(n));
const sha256 = async (s: string) => hex(await crypto.subtle.digest('SHA-256', enc.encode(s)));

async function pbkdf2(secret: string, salt: Uint8Array) {
  const key = await crypto.subtle.importKey('raw', enc.encode(secret), 'PBKDF2', false, ['deriveBits']);
  return hex(await crypto.subtle.deriveBits({ name: 'PBKDF2', hash: 'SHA-256', salt, iterations: ITER }, key, 256));
}
/** "tuz:özet" biçiminde saklanır */
async function hashSecret(secret: string) { const salt = rand(16); return `${hex(salt)}:${await pbkdf2(secret, salt)}`; }
async function verifySecret(secret: string, stored: string) {
  const [salt, want] = stored.split(':');
  if (!salt || !want) return false;
  const got = await pbkdf2(secret, unhex(salt));
  let diff = got.length ^ want.length;
  for (let i = 0; i < Math.min(got.length, want.length); i++) diff |= got.charCodeAt(i) ^ want.charCodeAt(i);
  return diff === 0;
}
/** Okunaklı kurtarma kodu: ABCD-EFGH-JKLM-NPQR (karışan harfler yok) */
function recoveryCode() {
  const A = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
  const r = rand(16);
  return [0, 4, 8, 12].map((o) => [...r.slice(o, o + 4)].map((x) => A[x % A.length]).join('')).join('-');
}
const normCode = (s: string) => s.toUpperCase().replace(/[^A-Z0-9]/g, '').replace(/(.{4})(?=.)/g, '$1-');

const json = (body: unknown, status = 200, headers: Record<string, string> = {}) =>
  new Response(JSON.stringify(body), { status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store', ...headers } });
const fail = (status: number, message: string) => json({ error: message }, status);

const cookieOf = (req: Request) => req.headers.get('cookie')?.split(/;\s*/).find((c) => c.startsWith(`${COOKIE}=`))?.slice(COOKIE.length + 1);
const setCookie = (token: string, maxAge: number) => `${COOKIE}=${token}; Path=/api; HttpOnly; Secure; SameSite=Lax; Max-Age=${maxAge}`;

async function newSession(env: Env, userId: number) {
  const token = hex(rand(32));
  await env.DB.prepare('INSERT INTO sessions (token_hash, user_id, expires_at) VALUES (?, ?, ?)').bind(await sha256(token), userId, Date.now() + SESSION_DAYS * 864e5).run();
  return setCookie(token, SESSION_DAYS * 86400);
}
async function currentUser(env: Env, req: Request): Promise<{ id: number; username: string } | null> {
  const token = cookieOf(req);
  if (!token || !/^[0-9a-f]{64}$/.test(token)) return null;
  return env.DB.prepare('SELECT u.id, u.username FROM sessions s JOIN users u ON u.id = s.user_id WHERE s.token_hash = ? AND s.expires_at > ?').bind(await sha256(token), Date.now()).first();
}

/** Basit sınırlama: anahtar başına pencerede en çok n deneme */
async function limited(env: Env, key: string, n: number, windowMs: number) {
  const now = Date.now();
  const row = await env.DB.prepare('SELECT count, window_start FROM rate_limits WHERE key = ?').bind(key).first<{ count: number; window_start: number }>();
  if (!row || now - row.window_start > windowMs) { await env.DB.prepare('INSERT OR REPLACE INTO rate_limits (key, count, window_start) VALUES (?, 1, ?)').bind(key, now).run(); return false; }
  if (row.count >= n) return true;
  await env.DB.prepare('UPDATE rate_limits SET count = count + 1 WHERE key = ?').bind(key).run();
  return false;
}

async function body<T>(req: Request): Promise<T | null> {
  const len = Number(req.headers.get('content-length') ?? 0);
  if (len > MAX_BODY) return null;
  const text = await req.text();
  if (text.length > MAX_BODY) return null;
  try { return JSON.parse(text) as T; } catch { return null; }
}
const checkCreds = (u: unknown, p: unknown) =>
  typeof u !== 'string' || !USER_RE.test(u) ? 'Kullanıcı adı 3–24 karakter olmalı; yalnız küçük harf (a–z), rakam, nokta, tire ve alt çizgi.'
    : typeof p !== 'string' || p.length < 8 || p.length > 128 ? 'Şifre en az 8 karakter olmalı.' : null;

async function api(req: Request, env: Env, path: string): Promise<Response> {
  const ip = req.headers.get('cf-connecting-ip') ?? 'yerel';
  const write = req.method !== 'GET';
  /* Başka sitelerden gelen istekleri ele: tarayıcı bu başlığı yalnız aynı kökenden gönderebilir */
  if (write && req.headers.get('x-netlik') !== '1') return fail(403, 'Geçersiz istek.');

  if (path === '/api/kayit' && req.method === 'POST') {
    const b = await body<{ username: string; password: string }>(req);
    const err = checkCreds(b?.username?.toLowerCase(), b?.password);
    if (!b || err) return fail(400, err ?? 'Geçersiz istek.');
    if (await limited(env, `kayit:${ip}`, 5, 36e5)) return fail(429, 'Çok fazla deneme. Bir saat sonra tekrar dene.');
    const username = b.username.toLowerCase();
    if (await env.DB.prepare('SELECT 1 FROM users WHERE username = ?').bind(username).first()) return fail(409, 'Bu kullanıcı adı alınmış.');
    const code = recoveryCode();
    const r = await env.DB.prepare('INSERT INTO users (username, pass_hash, recovery_hash, created_at) VALUES (?, ?, ?, ?)').bind(username, await hashSecret(b.password), await hashSecret(code), new Date().toISOString()).run();
    const id = Number(r.meta.last_row_id);
    return json({ username, recoveryCode: code }, 201, { 'set-cookie': await newSession(env, id) });
  }

  if (path === '/api/giris' && req.method === 'POST') {
    const b = await body<{ username: string; password: string }>(req);
    if (!b || typeof b.username !== 'string' || typeof b.password !== 'string') return fail(400, 'Geçersiz istek.');
    const username = b.username.toLowerCase().trim();
    if (await limited(env, `giris:${ip}`, 20, 9e5) || await limited(env, `giris-u:${username}`, 10, 9e5)) return fail(429, 'Çok fazla deneme. 15 dakika sonra tekrar dene.');
    const u = await env.DB.prepare('SELECT id, pass_hash FROM users WHERE username = ?').bind(username).first<{ id: number; pass_hash: string }>();
    if (!u || !(await verifySecret(b.password, u.pass_hash))) return fail(401, 'Kullanıcı adı ya da şifre yanlış.');
    await env.DB.prepare('DELETE FROM sessions WHERE user_id = ? AND expires_at < ?').bind(u.id, Date.now()).run();
    return json({ username }, 200, { 'set-cookie': await newSession(env, u.id) });
  }

  if (path === '/api/sifre-sifirla' && req.method === 'POST') {
    const b = await body<{ username: string; recoveryCode: string; password: string }>(req);
    const err = checkCreds(b?.username?.toLowerCase(), b?.password);
    if (!b || err || typeof b.recoveryCode !== 'string') return fail(400, err ?? 'Geçersiz istek.');
    const username = b.username.toLowerCase();
    if (await limited(env, `sifirla:${ip}`, 10, 36e5) || await limited(env, `sifirla-u:${username}`, 5, 36e5)) return fail(429, 'Çok fazla deneme. Bir saat sonra tekrar dene.');
    const u = await env.DB.prepare('SELECT id, recovery_hash FROM users WHERE username = ?').bind(username).first<{ id: number; recovery_hash: string }>();
    if (!u || !(await verifySecret(normCode(b.recoveryCode), u.recovery_hash))) return fail(401, 'Kullanıcı adı ya da kurtarma kodu yanlış.');
    const code = recoveryCode();
    await env.DB.batch([
      env.DB.prepare('UPDATE users SET pass_hash = ?, recovery_hash = ? WHERE id = ?').bind(await hashSecret(b.password), await hashSecret(code), u.id),
      env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(u.id)
    ]);
    return json({ username, recoveryCode: code }, 200, { 'set-cookie': await newSession(env, u.id) });
  }

  if (path === '/api/cikis' && req.method === 'POST') {
    const token = cookieOf(req);
    if (token) await env.DB.prepare('DELETE FROM sessions WHERE token_hash = ?').bind(await sha256(token)).run();
    return json({ ok: true }, 200, { 'set-cookie': setCookie('', 0) });
  }

  const me = await currentUser(env, req);
  if (path === '/api/ben' && req.method === 'GET') return me ? json({ username: me.username }) : fail(401, 'Giriş yapılmadı.');
  if (!me) return fail(401, 'Giriş yapılmadı.');

  if (path === '/api/veri' && req.method === 'GET') {
    const row = await env.DB.prepare('SELECT body, version, updated_at FROM user_data WHERE user_id = ?').bind(me.id).first<{ body: string; version: number; updated_at: string }>();
    return json(row ? { version: row.version, updatedAt: row.updated_at, data: JSON.parse(row.body) } : { version: 0, updatedAt: null, data: null });
  }

  if (path === '/api/veri' && req.method === 'PUT') {
    const b = await body<{ baseVersion: number; data: { app?: string } ; force?: boolean }>(req);
    if (!b || typeof b.baseVersion !== 'number' || !b.data || b.data.app !== 'netlik') return fail(400, 'Veri okunamadı ya da çok büyük.');
    const row = await env.DB.prepare('SELECT version FROM user_data WHERE user_id = ?').bind(me.id).first<{ version: number }>();
    const cur = row?.version ?? 0;
    if (cur !== b.baseVersion && !b.force) return json({ error: 'Başka bir cihazda daha yeni değişiklik var.', version: cur }, 409);
    const version = cur + 1, at = new Date().toISOString();
    await env.DB.prepare('INSERT INTO user_data (user_id, body, version, updated_at) VALUES (?, ?, ?, ?) ON CONFLICT(user_id) DO UPDATE SET body = excluded.body, version = excluded.version, updated_at = excluded.updated_at')
      .bind(me.id, JSON.stringify(b.data), version, at).run();
    return json({ version, updatedAt: at });
  }

  if (path === '/api/sifre' && req.method === 'POST') {
    const b = await body<{ oldPassword: string; password: string }>(req);
    const err = checkCreds(me.username, b?.password);
    if (!b || err || typeof b.oldPassword !== 'string') return fail(400, err ?? 'Geçersiz istek.');
    if (await limited(env, `sifre-u:${me.id}`, 10, 9e5)) return fail(429, 'Çok fazla deneme. 15 dakika sonra tekrar dene.');
    const u = await env.DB.prepare('SELECT pass_hash FROM users WHERE id = ?').bind(me.id).first<{ pass_hash: string }>();
    if (!u || !(await verifySecret(b.oldPassword, u.pass_hash))) return fail(401, 'Mevcut şifre yanlış.');
    await env.DB.prepare('UPDATE users SET pass_hash = ? WHERE id = ?').bind(await hashSecret(b.password), me.id).run();
    return json({ ok: true });
  }

  if (path === '/api/hesap' && req.method === 'DELETE') {
    const b = await body<{ password: string }>(req);
    if (await limited(env, `sil-u:${me.id}`, 10, 9e5)) return fail(429, 'Çok fazla deneme. 15 dakika sonra tekrar dene.');
    const u = await env.DB.prepare('SELECT pass_hash FROM users WHERE id = ?').bind(me.id).first<{ pass_hash: string }>();
    if (!b || typeof b.password !== 'string' || !u || !(await verifySecret(b.password, u.pass_hash))) return fail(401, 'Şifre yanlış.');
    await env.DB.batch([
      env.DB.prepare('DELETE FROM user_data WHERE user_id = ?').bind(me.id),
      env.DB.prepare('DELETE FROM sessions WHERE user_id = ?').bind(me.id),
      env.DB.prepare('DELETE FROM users WHERE id = ?').bind(me.id)
    ]);
    return json({ ok: true }, 200, { 'set-cookie': setCookie('', 0) });
  }

  return fail(404, 'Bulunamadı.');
}

export default {
  async fetch(req: Request, env: Env): Promise<Response> {
    const url = new URL(req.url);
    if (url.pathname.startsWith('/api/')) {
      try { return await api(req, env, url.pathname); }
      catch (e) { console.error(e); return fail(500, 'Sunucuda bir hata oluştu. Biraz sonra tekrar dene.'); }
    }
    return env.ASSETS.fetch(req);
  }
} satisfies ExportedHandler<Env>;
