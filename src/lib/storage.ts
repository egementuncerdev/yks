/* IndexedDB (Dexie). Bileşenler yalnız bu dosyadaki fonksiyonları kullanır. */
import Dexie, { type EntityTable } from 'dexie';
import type { Attempt, Plan, Profile, Task, TopicState, TopicStatus, WrongItem } from '@/types';
import { applyToggle, buildPlan } from './planner';
import { dayKey } from './dates';

export class YksDB extends Dexie {
  profile!: EntityTable<Profile, 'id'>;
  topics!: EntityTable<TopicState, 'topicId'>;
  plan!: EntityTable<Plan, 'id'>;
  attempts!: EntityTable<Attempt, 'id'>;
  wrongs!: EntityTable<WrongItem, 'qid'>;
  constructor(name = 'netlik') {
    super(name);
    this.version(1).stores({ profile: 'id', topics: 'topicId, status', plan: 'id' });
    this.version(2).stores({ attempts: '++id, source, date', wrongs: 'qid, topicId' });
  }
}

export const db = new YksDB();
const today = () => dayKey(new Date());

async function statesMap(d: YksDB) {
  return new Map((await d.topics.toArray()).map((s) => [s.topicId, s]));
}

/** Profili kaydet ve programı (bugünden itibaren) yeniden oluştur */
export async function saveProfile(p: Profile, d: YksDB = db, on = today()) {
  await d.transaction('rw', d.profile, d.topics, d.plan, async () => {
    await d.profile.put({ ...p, updatedAt: new Date().toISOString() });
    const prev = await d.plan.get('current');
    await d.plan.put(buildPlan(p, await statesMap(d), on, prev));
  });
}

export async function replan(d: YksDB = db, on = today()) {
  const p = await d.profile.get('me');
  if (!p) return;
  await d.plan.put(buildPlan(p, await statesMap(d), on, await d.plan.get('current')));
}

/** Görevi işaretle; konu oturumuysa konu ilerlemesi de güncellenir */
export async function toggleTask(date: string, taskId: string, done: boolean, d: YksDB = db) {
  await d.transaction('rw', d.plan, d.topics, async () => {
    const plan = await d.plan.get('current');
    const day = plan?.days.find((x) => x.date === date);
    const task = day?.tasks.find((t) => t.id === taskId);
    if (!plan || !task || !!task.done === done) return;
    task.done = done;
    const next = applyToggle(task, done, task.topicId ? await d.topics.get(task.topicId) : undefined);
    if (next) await d.topics.put(next);
    await d.plan.put(plan);
  });
}

export async function setTopicStatus(topicId: string, status: TopicStatus, d: YksDB = db) {
  const cur = await d.topics.get(topicId);
  await d.topics.put({ topicId, status, doneSessions: status === 'todo' ? 0 : cur?.doneSessions ?? 0, updatedAt: new Date().toISOString() });
}

export const findTask = (plan: Plan | undefined, id: string): Task | undefined => plan?.days.flatMap((x) => x.tasks).find((t) => t.id === id);

/* ---- Testler ---- */
export interface AnswerRecord { qid: string; topicId: string; result: 'correct' | 'wrong' | 'empty' }

/** Testi kaydet: yanlış ve boşlar listeye girer, doğru çözülenler listeden çıkar.
    Konu testinde başarı %50'nin altındaysa ve konu bitmemişse konu "zorlandım" olur. Döner: konu zorlandım yapıldı mı */
export async function saveAttempt(source: string, answers: AnswerRecord[], d: YksDB = db, now = new Date()): Promise<{ markedWeak: boolean }> {
  const at = now.toISOString();
  const count = (r: AnswerRecord['result']) => answers.filter((a) => a.result === r).length;
  let markedWeak = false;
  await d.transaction('rw', d.attempts, d.wrongs, d.topics, async () => {
    await d.attempts.add({ source, at, date: dayKey(now), correct: count('correct'), wrong: count('wrong'), empty: count('empty'), total: answers.length });
    for (const a of answers) {
      if (a.result === 'correct') await d.wrongs.delete(a.qid);
      else {
        const prev = await d.wrongs.get(a.qid);
        await d.wrongs.put({ qid: a.qid, topicId: a.topicId, at, times: (prev?.times ?? 0) + 1 });
      }
    }
    if (!source.includes(':') || source.startsWith('mix:') || source === 'wrongs') return;
    const st = await d.topics.get(source);
    if (answers.length >= 5 && count('correct') / answers.length < 0.5 && st?.status !== 'done' && st?.status !== 'weak') {
      await d.topics.put({ topicId: source, status: 'weak', doneSessions: st?.doneSessions ?? 0, updatedAt: at });
      markedWeak = true;
    }
  });
  return { markedWeak };
}

/* ---- Yedek ---- */
export interface Backup { app: 'netlik'; version: 1; exportedAt: string; profile: Profile | null; topics: TopicState[]; plan: Plan | null; attempts?: Attempt[]; wrongs?: WrongItem[] }

export async function exportData(d: YksDB = db): Promise<Backup> {
  return { app: 'netlik', version: 1, exportedAt: new Date().toISOString(), profile: (await d.profile.get('me')) ?? null, topics: await d.topics.toArray(), plan: (await d.plan.get('current')) ?? null, attempts: await d.attempts.toArray(), wrongs: await d.wrongs.toArray() };
}

export class BackupError extends Error {}
export function validateBackup(x: unknown): Backup {
  const b = x as Partial<Backup>;
  if (!b || b.app !== 'netlik' || b.version !== 1) throw new BackupError('Bu dosya bir Netlik yedeği değil.');
  if (!Array.isArray(b.topics)) throw new BackupError('Yedekte konu listesi eksik.');
  for (const t of b.topics) if (typeof t?.topicId !== 'string' || !['todo', 'doing', 'done', 'weak'].includes(t.status)) throw new BackupError('Yedekteki konu kayıtları bozuk.');
  if (b.profile && (b.profile.id !== 'me' || !Array.isArray(b.profile.hours) || b.profile.hours.length !== 7)) throw new BackupError('Yedekteki profil bozuk.');
  if (b.plan && (b.plan.id !== 'current' || !Array.isArray(b.plan.days))) throw new BackupError('Yedekteki program bozuk.');
  return b as Backup;
}

export async function importData(raw: unknown, d: YksDB = db) {
  const b = validateBackup(raw);
  await d.transaction('rw', [d.profile, d.topics, d.plan, d.attempts, d.wrongs], async () => {
    await Promise.all([d.profile.clear(), d.topics.clear(), d.plan.clear(), d.attempts.clear(), d.wrongs.clear()]);
    if (b.profile) await d.profile.put(b.profile);
    await d.topics.bulkPut(b.topics);
    if (b.plan) await d.plan.put(b.plan);
    if (Array.isArray(b.attempts)) await d.attempts.bulkPut(b.attempts);
    if (Array.isArray(b.wrongs)) await d.wrongs.bulkPut(b.wrongs);
  });
}

export async function resetAll(d: YksDB = db) {
  await Promise.all([d.profile.clear(), d.topics.clear(), d.plan.clear(), d.attempts.clear(), d.wrongs.clear()]);
}
