/* Hesapla eşitleme. Bu cihazdaki IndexedDB asıl kaynaktır; giriş yapılmışsa her değişiklik birkaç saniye sonra
   hesaba yüklenir, başka cihazdaki değişiklikler açılışta, sekmeye dönünce ve dakikada bir çekilir.
   Çakışma (iki tarafta da kaydedilmemiş farklı veri) olursa öğrenci hangisinin kalacağını seçer. */
import Dexie from 'dexie';
import { useSyncExternalStore } from 'react';
import { api, ApiError } from './account';
import { db, exportData, importData } from './storage';

export type SyncStatus = 'idle' | 'saving' | 'saved' | 'offline' | 'conflict' | 'error';
export interface SyncState { user: string | null | undefined; status: SyncStatus; lastSync?: string; message?: string }

const META = 'netlik.sync';
interface Meta { user: string | null; version: number; dirty: boolean }
const readMeta = (): Meta => { try { return { user: null, version: 0, dirty: false, ...JSON.parse(localStorage.getItem(META) ?? '{}') }; } catch { return { user: null, version: 0, dirty: false }; } };
const writeMeta = (m: Partial<Meta>) => { try { localStorage.setItem(META, JSON.stringify({ ...readMeta(), ...m })); } catch { /* özel pencere */ } };

let state: SyncState = { user: undefined, status: 'idle' };
const subs = new Set<() => void>();
const set = (s: Partial<SyncState>) => { state = { ...state, ...s }; subs.forEach((f) => f()); };
export const useSync = () => useSyncExternalStore((f) => { subs.add(f); return () => subs.delete(f); }, () => state);
export const getSync = () => state;

let applying = 0;
let timer: ReturnType<typeof setTimeout> | undefined;
let started = false;

/** Bu cihazda kayda değer veri var mı? */
export async function hasLocalData() {
  const [p, t, a, d] = await Promise.all([db.profile.count(), db.topics.count(), db.attempts.count(), db.denemeler.count()]);
  return p + t + a + d > 0;
}

async function applyRemote(data: unknown, version: number) {
  applying++;
  try { await importData(data); } finally { setTimeout(() => { applying--; }, 300); }
  writeMeta({ version, dirty: false });
  set({ status: 'saved', lastSync: new Date().toISOString(), message: undefined });
}

export async function push(force = false) {
  if (!state.user) return;
  clearTimeout(timer);
  set({ status: 'saving' });
  try {
    const r = await api.putData(readMeta().version, await exportData(), force);
    writeMeta({ version: r.version, dirty: false });
    set({ status: 'saved', lastSync: r.updatedAt, message: undefined });
  } catch (e) {
    if (e instanceof ApiError && e.status === 409) return set({ status: 'conflict', message: 'Başka bir cihazda daha yeni değişiklik var.' });
    if (e instanceof ApiError && e.status === 401) return signedOut();
    set({ status: e instanceof ApiError && e.status === 0 ? 'offline' : 'error', message: (e as Error).message });
  }
}

/** Hesaptaki veriyi kontrol et; yeniyse al, bu cihazda kaydedilmemiş değişiklik varsa çakışma bildir */
export async function pull() {
  if (!state.user) return;
  try {
    const r = await api.getData();
    const m = readMeta();
    if (r.version === 0) { if (await hasLocalData()) await push(); else set({ status: 'saved' }); return; }
    if (r.version > m.version) return m.dirty ? set({ status: 'conflict', message: 'Hem bu cihazda hem hesabında farklı değişiklikler var.' }) : applyRemote(r.data, r.version);
    if (m.dirty) return push();
    set({ status: 'saved', lastSync: r.updatedAt ?? undefined });
  } catch (e) {
    if (e instanceof ApiError && e.status === 401) return signedOut();
    set({ status: e instanceof ApiError && e.status === 0 ? 'offline' : 'error', message: (e as Error).message });
  }
}

/** Çakışmada seçim: hesaptaki veri ya da bu cihazdaki veri kalır */
export async function resolve(keep: 'account' | 'device') {
  if (keep === 'device') return push(true);
  const r = await api.getData();
  if (r.data) await applyRemote(r.data, r.version);
}

/** Giriş ya da kayıttan sonra: hesap boşsa bu cihazdakini yükle; doluysa ve cihazda da veri varsa sor */
export async function afterLogin(username: string): Promise<'synced' | 'choose'> {
  const m = readMeta();
  set({ user: username });
  const sameUser = m.user === username;
  writeMeta({ user: username, ...(sameUser ? {} : { version: 0, dirty: false }) });
  const r = await api.getData();
  if (r.version === 0) { if (await hasLocalData()) await push(true); else set({ status: 'saved' }); return 'synced'; }
  if (sameUser && !m.dirty) { if (r.version > m.version) await applyRemote(r.data, r.version); else set({ status: 'saved' }); return 'synced'; }
  if (!(await hasLocalData())) { await applyRemote(r.data, r.version); return 'synced'; }
  set({ status: 'conflict', message: 'Bu cihazda da hesabında da veri var.' });
  return 'choose';
}

function signedOut() {
  writeMeta({ user: null, version: 0, dirty: false });
  set({ user: null, status: 'idle', message: undefined });
}

export async function logout(clearDevice: boolean) {
  try { await api.logout(); } catch { /* çevrimdışı: yerel olarak çık */ }
  signedOut();
  if (clearDevice) { const { resetAll } = await import('./storage'); applying++; await resetAll(); setTimeout(() => { applying--; }, 300); }
}

/** Uygulama açılışında bir kez */
export async function startSync() {
  if (started) return;
  started = true;
  /* Tarayıcıdan verileri kendiliğinden silmemesini iste (hesap olmasa da) */
  try { await navigator.storage?.persist?.(); } catch { /* desteklenmiyor */ }
  Dexie.on('storagemutated', () => {
    if (applying || !state.user) return;
    writeMeta({ dirty: true });
    clearTimeout(timer);
    timer = setTimeout(() => void push(), 2500);
  });
  try {
    const me = await api.me();
    const m = readMeta();
    if (m.user && m.user !== me.username) writeMeta({ version: 0, dirty: false });
    writeMeta({ user: me.username });
    set({ user: me.username });
    await pull();
  } catch (e) {
    /* Çevrimdışıysa önceki girişi koru; bağlantı gelince eşitlenir */
    const m = readMeta();
    if (e instanceof ApiError && e.status === 0 && m.user) set({ user: m.user, status: 'offline', message: (e as Error).message });
    else { if (m.user) writeMeta({ user: null, version: 0, dirty: false }); set({ user: null }); }
  }
  document.addEventListener('visibilitychange', () => { if (document.visibilityState === 'visible') void pull(); });
  setInterval(() => { if (document.visibilityState === 'visible' && state.status !== 'saving' && state.status !== 'conflict') void pull(); }, 60_000);
  window.addEventListener('online', () => void pull());
}
