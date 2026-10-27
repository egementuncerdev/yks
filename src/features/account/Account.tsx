/* /hesap — giriş, hesap oluşturma, şifre sıfırlama (kurtarma koduyla) ve hesap yönetimi.
   E-posta istenmez: kullanıcı adı + şifre. Kurtarma kodu yalnız bir kez gösterilir. */
import { useState, type FormEvent, type ReactNode } from 'react';
import { Link, useNavigate } from 'react-router';
import { Check, Cloud, CloudOff, Copy, KeyRound, LogOut, RefreshCcw, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui';
import { api, ApiError } from '@/lib/account';
import { afterLogin, logout, pull, resolve, useSync } from '@/lib/sync';
import { useTitle } from '@/lib/title';

type Mode = 'login' | 'register' | 'reset';
const input = 'h-11 w-full rounded-xl border border-line-2 bg-surface px-3 text-[15px] placeholder:text-muted';

function Field({ label, hint, children }: { label: string; hint?: string; children: ReactNode }) {
  return <label className="block"><span className="mb-1 block text-sm font-medium">{label}</span>{children}{hint && <span className="mt-1 block text-[13px] text-muted">{hint}</span>}</label>;
}
const Err = ({ text }: { text: string }) => (text ? <p className="rounded-lg bg-bad-soft px-3 py-2 text-[14px] text-bad" role="alert">{text}</p> : null);

export default function Account() {
  useTitle('Hesap');
  const sync = useSync();
  const [code, setCode] = useState<string | null>(null);
  if (sync.user === undefined) return <p className="py-20 text-center text-muted" role="status">Yükleniyor…</p>;
  return (
    <div className="mx-auto max-w-md">
      {code ? <RecoveryCode code={code} onDone={() => setCode(null)} />
        : sync.user ? <Signed />
          : <Auth onCode={setCode} />}
      <Privacy />
    </div>
  );
}

function Auth({ onCode }: { onCode: (c: string) => void }) {
  const [mode, setMode] = useState<Mode>('login');
  const [u, setU] = useState(''); const [p, setP] = useState(''); const [p2, setP2] = useState(''); const [rc, setRc] = useState('');
  const [err, setErr] = useState(''); const [busy, setBusy] = useState(false);
  const navigate = useNavigate();

  const submit = async (e: FormEvent) => {
    e.preventDefault(); setErr('');
    if (mode !== 'login' && p !== p2) return setErr('Şifreler aynı değil.');
    setBusy(true);
    try {
      const name = u.trim().toLowerCase();
      if (mode === 'register') { const r = await api.register(name, p); await afterLogin(r.username); onCode(r.recoveryCode); }
      else if (mode === 'reset') { const r = await api.reset(name, rc, p); await afterLogin(r.username); onCode(r.recoveryCode); }
      else { const r = await api.login(name, p); const res = await afterLogin(r.username); if (res === 'synced') navigate('/'); }
    } catch (x) { setErr(x instanceof ApiError ? x.message : 'Bir şeyler ters gitti.'); }
    setBusy(false);
  };
  const tab = (m: Mode, t: string) => <button type="button" aria-pressed={mode === m} onClick={() => { setMode(m); setErr(''); }} className={`flex-1 rounded-lg px-3 py-2 text-[14.5px] ${mode === m ? 'bg-surface font-semibold shadow-[0_0_0_1px_var(--line-2)]' : 'text-ink-2'}`}>{t}</button>;

  return (
    <>
      <h1 className="display text-[1.75rem] leading-tight">{mode === 'register' ? 'Hesap oluştur' : mode === 'reset' ? 'Şifreni sıfırla' : 'Giriş yap'}</h1>
      <p className="mt-1 text-ink-2">Hesabınla programın, konuların, testlerin ve denemelerin her cihazda aynı olur. E-posta gerekmez.</p>
      {mode !== 'reset' && <div className="mt-5 flex gap-1 rounded-xl bg-sunken p-1" role="group" aria-label="Giriş ya da kayıt">{tab('login', 'Giriş yap')}{tab('register', 'Hesap oluştur')}</div>}
      <form onSubmit={(e) => void submit(e)} className="mt-5 space-y-4">
        <Field label="Kullanıcı adı" hint={mode === 'register' ? '3–24 karakter: küçük harf (a–z), rakam, nokta, tire, alt çizgi. Gerçek adını kullanman gerekmez.' : undefined}>
          <input className={input} value={u} onChange={(e) => setU(e.target.value)} autoComplete="username" autoCapitalize="none" spellCheck={false} required minLength={3} maxLength={24} />
        </Field>
        {mode === 'reset' && (
          <Field label="Kurtarma kodu" hint="Hesap oluştururken verilen 16 karakterlik kod.">
            <input className={`${input} num uppercase`} value={rc} onChange={(e) => setRc(e.target.value)} placeholder="ABCD-EFGH-JKLM-NPQR" autoComplete="one-time-code" required />
          </Field>
        )}
        <Field label={mode === 'reset' ? 'Yeni şifre' : 'Şifre'} hint={mode !== 'login' ? 'En az 8 karakter.' : undefined}>
          <input className={input} type="password" value={p} onChange={(e) => setP(e.target.value)} autoComplete={mode === 'login' ? 'current-password' : 'new-password'} required minLength={mode === 'login' ? 1 : 8} maxLength={128} />
        </Field>
        {mode !== 'login' && (
          <Field label="Şifre (tekrar)">
            <input className={input} type="password" value={p2} onChange={(e) => setP2(e.target.value)} autoComplete="new-password" required minLength={8} maxLength={128} />
          </Field>
        )}
        <Err text={err} />
        <Button type="submit" size="lg" className="w-full" disabled={busy}>{busy ? 'Bekle…' : mode === 'register' ? 'Hesap oluştur' : mode === 'reset' ? 'Şifreyi sıfırla' : 'Giriş yap'}</Button>
        {mode === 'register' && <p className="text-[13px] text-muted">Hesap oluşturmadan önce neler saklandığını <Link to="/gizlilik" className="underline decoration-line-2 underline-offset-4">Gizlilik</Link> sayfasında okuyabilirsin.</p>}
      </form>
      <p className="mt-4 text-center text-sm text-muted">
        {mode === 'reset' ? <button type="button" className="underline decoration-line-2 underline-offset-4" onClick={() => setMode('login')}>Girişe dön</button>
          : <button type="button" className="underline decoration-line-2 underline-offset-4" onClick={() => { setMode('reset'); setErr(''); }}>Şifremi unuttum</button>}
      </p>
    </>
  );
}

function RecoveryCode({ code, onDone }: { code: string; onDone: () => void }) {
  const [copied, setCopied] = useState(false);
  const [ok, setOk] = useState(false);
  return (
    <section aria-labelledby="rc-h">
      <h1 id="rc-h" className="display text-[1.75rem] leading-tight">Kurtarma kodunu sakla</h1>
      <p className="mt-2 text-ink-2">Şifreni unutursan hesabına yalnız bu kodla girebilirsin. Kod bir daha gösterilmez; ekran görüntüsü al ya da bir yere yaz.</p>
      <div className="mt-5 flex items-center justify-between gap-3 rounded-2xl border border-line-2 bg-surface px-5 py-4">
        <span className="num whitespace-nowrap text-[1.05rem] font-semibold tracking-wide sm:text-[1.25rem] sm:tracking-wider">{code}</span>
        <Button variant="secondary" size="sm" onClick={async () => { try { await navigator.clipboard.writeText(code); setCopied(true); } catch { /* izin yok */ } }}>{copied ? <><Check className="size-4" /> Kopyalandı</> : <><Copy className="size-4" /> Kopyala</>}</Button>
      </div>
      <label className="mt-5 flex items-start gap-3 text-[15px]"><input type="checkbox" className="mt-1 size-4 accent-[var(--primary)]" checked={ok} onChange={(e) => setOk(e.target.checked)} /> Kurtarma kodunu güvenli bir yere kaydettim.</label>
      <Button className="mt-5 w-full" size="lg" disabled={!ok} onClick={onDone}>Devam et</Button>
    </section>
  );
}

function Signed() {
  const sync = useSync();
  const navigate = useNavigate();
  const [busy, setBusy] = useState(false);
  const [panel, setPanel] = useState<'' | 'pass' | 'delete' | 'logout'>('');
  const when = sync.lastSync ? new Date(sync.lastSync).toLocaleString('tr-TR', { day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' }) : '';
  const status = { idle: 'Bekleniyor', saving: 'Kaydediliyor…', saved: `Bütün değişiklikler hesabına kaydedildi${when ? ` · ${when}` : ''}`, offline: 'Çevrimdışısın. Bağlantı gelince kaydedilecek.', conflict: sync.message ?? 'Çakışma var.', error: sync.message ?? 'Kaydedilemedi.' }[sync.status];

  return (
    <>
      <h1 className="display text-[1.75rem] leading-tight">Hesabın</h1>
      <p className="mt-1 text-ink-2">Giriş yaptığın her cihazda aynı program ve ilerleme.</p>
      <div className="mt-5 rounded-2xl border border-line-2 bg-surface p-5">
        <p className="text-sm text-muted">Kullanıcı adı</p>
        <p className="mt-0.5 text-lg font-semibold">{sync.user}</p>
        <p className={`mt-3 flex items-start gap-2 text-[14.5px] ${sync.status === 'conflict' || sync.status === 'error' ? 'text-bad' : 'text-ink-2'}`} role="status">
          {sync.status === 'offline' || sync.status === 'error' ? <CloudOff className="mt-0.5 size-4 shrink-0" /> : <Cloud className="mt-0.5 size-4 shrink-0" />}{status}
        </p>
        {sync.status === 'conflict' && <Conflict />}
        {sync.status !== 'conflict' && <Button variant="secondary" size="sm" className="mt-4" disabled={busy || sync.status === 'saving'} onClick={async () => { setBusy(true); await pull(); setBusy(false); }}><RefreshCcw className="size-4" /> Şimdi eşitle</Button>}
      </div>

      <div className="mt-6 divide-y divide-line rounded-2xl border border-line bg-surface">
        <Row icon={<KeyRound className="size-4" />} title="Şifreyi değiştir" open={panel === 'pass'} onToggle={() => setPanel(panel === 'pass' ? '' : 'pass')}><ChangePassword onDone={() => setPanel('')} /></Row>
        <Row icon={<LogOut className="size-4" />} title="Çıkış yap" open={panel === 'logout'} onToggle={() => setPanel(panel === 'logout' ? '' : 'logout')}>
          <p className="text-[14.5px] text-ink-2">Verilerin hesabında kalır. Bu cihazdaki kopya ne olsun?</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <Button variant="secondary" size="sm" onClick={async () => { await logout(false); navigate('/'); }}>Bu cihazda kalsın</Button>
            <Button variant="secondary" size="sm" onClick={async () => { await logout(true); navigate('/'); }}>Bu cihazdan sil (ortak bilgisayar)</Button>
          </div>
        </Row>
        <Row icon={<Trash2 className="size-4" />} title="Hesabı sil" danger open={panel === 'delete'} onToggle={() => setPanel(panel === 'delete' ? '' : 'delete')}><DeleteAccount /></Row>
      </div>
    </>
  );
}

export function Conflict() {
  const [busy, setBusy] = useState(false);
  const go = async (k: 'account' | 'device') => { setBusy(true); await resolve(k); setBusy(false); };
  return (
    <div className="mt-3">
      <p className="text-[14.5px] text-ink-2">Hangisi kalsın? Seçmediğin taraf bunun üzerine yazılır.</p>
      <div className="mt-3 flex flex-wrap gap-2">
        <Button size="sm" disabled={busy} onClick={() => void go('account')}>Hesabımdaki veriler</Button>
        <Button size="sm" variant="secondary" disabled={busy} onClick={() => void go('device')}>Bu cihazdaki veriler</Button>
      </div>
    </div>
  );
}

function Row({ icon, title, danger, open, onToggle, children }: { icon: ReactNode; title: string; danger?: boolean; open: boolean; onToggle: () => void; children: ReactNode }) {
  return (
    <div>
      <button type="button" aria-expanded={open} onClick={onToggle} className={`flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-sunken/60 ${danger ? 'text-bad' : ''}`}>{icon}<span className="flex-1">{title}</span><span className="text-muted" aria-hidden="true">{open ? '−' : '+'}</span></button>
      {open && <div className="border-t border-line px-4 py-4">{children}</div>}
    </div>
  );
}

function ChangePassword({ onDone }: { onDone: () => void }) {
  const [o, setO] = useState(''); const [p, setP] = useState(''); const [p2, setP2] = useState(''); const [err, setErr] = useState(''); const [ok, setOk] = useState(false);
  return (
    <form className="space-y-3" onSubmit={async (e) => { e.preventDefault(); setErr(''); if (p !== p2) return setErr('Yeni şifreler aynı değil.'); try { await api.changePassword(o, p); setOk(true); setTimeout(onDone, 1200); } catch (x) { setErr((x as Error).message); } }}>
      <Field label="Mevcut şifre"><input className={input} type="password" value={o} onChange={(e) => setO(e.target.value)} autoComplete="current-password" required /></Field>
      <Field label="Yeni şifre" hint="En az 8 karakter."><input className={input} type="password" value={p} onChange={(e) => setP(e.target.value)} autoComplete="new-password" required minLength={8} /></Field>
      <Field label="Yeni şifre (tekrar)"><input className={input} type="password" value={p2} onChange={(e) => setP2(e.target.value)} autoComplete="new-password" required minLength={8} /></Field>
      <Err text={err} />
      {ok ? <p className="text-[14.5px] text-good" role="status">Şifre değiştirildi.</p> : <Button type="submit" size="sm">Değiştir</Button>}
    </form>
  );
}

function DeleteAccount() {
  const navigate = useNavigate();
  const [p, setP] = useState(''); const [err, setErr] = useState('');
  return (
    <form className="space-y-3" onSubmit={async (e) => { e.preventDefault(); setErr(''); if (!confirm('Hesabın ve hesaptaki bütün verilerin kalıcı olarak silinsin mi?')) return; try { await api.deleteAccount(p); await logout(false); navigate('/'); } catch (x) { setErr((x as Error).message); } }}>
      <p className="text-[14.5px] text-ink-2">Hesabın ve sunucudaki verilerin kalıcı olarak silinir. Bu cihazdaki kopya kalır; istersen Ayarlar’dan silebilirsin.</p>
      <Field label="Şifren"><input className={input} type="password" value={p} onChange={(e) => setP(e.target.value)} autoComplete="current-password" required /></Field>
      <Err text={err} />
      <Button type="submit" size="sm" variant="secondary" className="text-bad">Hesabı kalıcı olarak sil</Button>
    </form>
  );
}

function Privacy() {
  return (
    <details className="group mt-10 border-t border-line pt-5 text-[14px] text-ink-2">
      <summary className="cursor-pointer list-none font-medium text-ink [&::-webkit-details-marker]:hidden">Hesapta neler saklanır? <span className="text-muted group-open:hidden">+</span></summary>
      <ul className="mt-3 space-y-1.5">
        <li>· Kullanıcı adın ve şifrenin geri çözülemeyen özeti (şifrenin kendisi saklanmaz).</li>
        <li>· Çalışma verilerin: kurulum cevapların, program, konu durumları, test ve deneme sonuçların.</li>
        <li>· E-posta, telefon, ad soyad istenmez. Veriler reklam ya da başka bir amaçla kullanılmaz, kimseyle paylaşılmaz.</li>
        <li>· Hesabını istediğin an <span className="font-medium">Hesabı sil</span> ile kalıcı olarak silebilirsin.</li>
      </ul>
      <p className="mt-3">Hesap açmak zorunlu değil; açmazsan veriler yalnız bu tarayıcıda kalır. <Link to="/ayarlar" className="underline decoration-line-2 underline-offset-4">Ayarlar</Link>’dan yedek de alabilirsin. Ayrıntılar: <Link to="/gizlilik" className="underline decoration-line-2 underline-offset-4">Gizlilik</Link>.</p>
    </details>
  );
}
