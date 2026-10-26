/* Program oluşturucu. Saf fonksiyon: profil + konu durumları + bugün → gün gün görevler.

   1. Sınava kalan süre "konu dönemi" ve son haftalardaki "tekrar ve deneme dönemi"ne bölünür.
   2. Her gün: önce denemeler (hafta içinde en uzun günlere), sonra kısa rutinler (paragraf, problem),
      kalan süre oturumlara (varsayılan 40 dk) bölünür.
   3. Her konunun oturum sayısı = hacim × seviye × net etkisi. Konular dersler arasında dönüşümlü,
      derslerin aynı anda biteceği oranda dağıtılır. Zaman yetmiyorsa konular orantılı sıkıştırılır;
      artarsa boş oturumlar soru çözümüne gider.
   4. Konu döneminde her haftanın sonuna o haftanın konularının tekrarı eklenir. */
import { EXAMS, SCORE_TYPES, TESTS, TESTS_BY_SCORE, questionsFor, type ExamId } from '@/content/exam';
import { SUBJECTS, type Subject, type Topic } from '@/content/subjects';
import { addDays, diffDays, weekday, weekStart } from './dates';
import type { Plan, PlanDay, Profile, Task, TopicState } from '@/types';

export const SIZE_HOURS: Record<Topic['size'], number> = { 1: 3, 2: 6, 3: 10 };
export const LEVEL_FACTOR = [1, 0.65, 0.35] as const;
export const ROUTINE_MIN = 20;
export const ANALYSIS_MIN = 40;
/** sık sorulan konulara ek süre */
export const FREQUENT_FACTOR = 1.15;

export const subjectsFor = (p: Pick<Profile, 'scoreType'>): Subject[] => SUBJECTS.filter((s) => questionsFor(p.scoreType, s.id) > 0);

/** Son deneme netine göre ders çarpanı: düşük netli derse daha çok zaman */
export function netFactor(p: Pick<Profile, 'scoreType' | 'nets'>, subjectId: string): number {
  const test = TESTS.find((t) => (TESTS_BY_SCORE[p.scoreType] as readonly string[]).includes(t.id) && t.parts.some((x) => x.subject === subjectId));
  const n = test ? p.nets[test.id] : undefined;
  if (n === undefined || !test) return 1;
  const r = n / test.questions;
  return r < 0.3 ? 1.25 : r < 0.6 ? 1 : 0.8;
}

/** Konunun toplam ve kalan oturum sayısı */
export function topicSessions(p: Profile, t: Topic, st?: TopicState): { total: number; remaining: number } {
  const level = p.levels[t.subjectId] ?? 1;
  const hours = SIZE_HOURS[t.size] * LEVEL_FACTOR[level] * netFactor(p, t.subjectId) * (st?.status === 'weak' ? 1.2 : 1) * (t.frequent ? FREQUENT_FACTOR : 1);
  const total = Math.max(1, Math.round((hours * 60) / p.sessionMin));
  if (st?.status === 'done') return { total, remaining: 0 };
  const done = st?.doneSessions ?? 0;
  const remaining = done > 0 ? Math.max(1, total - done) : total;
  return { total: Math.max(total, done + remaining), remaining };
}

/** Son dönem uzunluğu (hafta): uzun hazırlıkta 4, kısa hazırlıkta daha az */
export const finalWeeks = (days: number) => (days >= 16 * 7 ? 4 : days >= 8 * 7 ? 2 : days >= 21 ? 1 : 0);

const secondExam = (p: Pick<Profile, 'scoreType'>): ExamId | null =>
  (SCORE_TYPES.find((s) => s.id === p.scoreType)!.exams.find((e) => e !== 'tyt') ?? null);

interface Unit { subjectId: string; topicId: string; part: [number, number]; title: string }

/** Ağırlıklı dönüşüm: her adımda hedef payının en çok gerisinde kalan dersi seçer */
function interleave<T>(queues: Map<string, T[]>, weights: Map<string, number>) {
  const W = [...weights.values()].reduce((a, b) => a + b, 0) || 1;
  const assigned = new Map<string, number>();
  let k = 0;
  return (): T | null => {
    let best: string | null = null;
    let bestScore = -Infinity;
    for (const [id, q] of queues) {
      if (!q.length) continue;
      const score = ((weights.get(id) ?? 0) / W) * (k + 1) - (assigned.get(id) ?? 0);
      if (score > bestScore) { bestScore = score; best = id; }
    }
    if (!best) return null;
    k++;
    assigned.set(best, (assigned.get(best) ?? 0) + 1);
    return queues.get(best)!.shift()!;
  };
}

/** AYT/YDT konularının başlama noktası (konu döneminin oranı): önce TYT temeli */
export const AYT_START: Record<Profile['status'], number> = { '11': 0.4, '12': 0.3, mezun: 0.1 };

/** Konu sıralayıcı: her ders kendi başlangıç noktasından konu döneminin sonuna kadar eşit hızda ilerler.
    Seçilen dersten art arda en çok `block` oturum alınır (gün içinde daha az ders değişimi). */
function topicScheduler(queues: Map<string, Unit[]>, starts: Map<string, number>, totalUnits: number, block: number) {
  const size = new Map([...queues].map(([id, q]) => [id, q.length]));
  const assigned = new Map<string, number>();
  let k = 0;
  let current: string | null = null;
  let run = 0;
  const ideal = (id: string, x: number) => {
    const f0 = starts.get(id) ?? 0;
    return (size.get(id) ?? 0) * Math.min(1, Math.max(0, (x - f0) / (1 - f0)));
  };
  return (): Unit | null => {
    const x = (k + 1) / Math.max(1, totalUnits);
    const behind = (id: string) => ideal(id, x) - (assigned.get(id) ?? 0);
    let pick: string | null = null;
    if (current && run < block && queues.get(current)!.length && behind(current) > -block) pick = current;
    else {
      let best = -Infinity;
      // başlama noktasına gelmemiş dersler, başka seçenek kalmadıkça beklemede
      const open = [...queues].filter(([id, q]) => q.length && x >= (starts.get(id) ?? 0));
      for (const [id] of open.length ? open : [...queues].filter(([, q]) => q.length)) {
        const sc = behind(id);
        if (sc > best) { best = sc; pick = id; }
      }
    }
    if (!pick) return null;
    if (pick !== current) { current = pick; run = 0; }
    run++;
    k++;
    assigned.set(pick, (assigned.get(pick) ?? 0) + 1);
    return queues.get(pick)!.shift()!;
  };
}

export function buildPlan(p: Profile, states: Map<string, TopicState>, today: string, prev?: Plan, now = new Date()): Plan {
  const last = addDays(p.examDate, -1);
  const subjects = subjectsFor(p);
  const S = p.sessionMin;
  const totalDays = Math.max(0, diffDays(last, today) + 1);
  const fw = finalWeeks(totalDays);
  const topicsEnd = totalDays ? (fw ? addDays(p.examDate, -fw * 7 - 1) : last) : today;
  const second = secondExam(p);
  const hasTr = subjects.some((s) => s.id === 'tyt-tr');

  // Bugün daha önce tamamlanan görevler korunur
  const keptToday = prev?.days.find((d) => d.date === today)?.tasks.filter((t) => t.done) ?? [];

  /* ---- 1. Gün iskeletleri ve denemeler ---- */
  type Slot = { date: string; cap: number; tasks: Task[] };
  const days: Slot[] = [];
  for (let i = 0; i < totalDays; i++) {
    const date = addDays(today, i);
    const kept = date === today ? keptToday : [];
    days.push({ date, cap: Math.max(0, (p.hours[weekday(date)] ?? 0) * 60 - kept.reduce((a, t) => a + t.minutes, 0)), tasks: [...kept] });
  }
  const weeks = new Map<string, Slot[]>();
  for (const d of days) weeks.set(weekStart(d.date), [...(weeks.get(weekStart(d.date)) ?? []), d]);

  for (const [, wdays] of weeks) {
    const final = wdays[0]!.date > topicsEnd;
    const want: ExamId[] = [];
    const nT = final ? Math.max(p.denemePerWeek.tyt, 1) : p.denemePerWeek.tyt;
    const nA = second ? (final ? Math.max(p.denemePerWeek.ayt, 1) : p.denemePerWeek.ayt) : 0;
    for (let i = 0; i < nT; i++) want.push('tyt');
    for (let i = 0; i < nA; i++) want.push(second!);
    // en uzun günler, eşitlikte hafta sonu önce
    const order = [...wdays].filter((d) => d.cap >= 120).sort((a, b) => b.cap - a.cap || weekday(b.date) - weekday(a.date));
    want.forEach((exam, i) => {
      const d = order[i];
      if (!d) return;
      const e = EXAMS[exam];
      d.tasks.push({ id: '', kind: 'exam', minutes: e.minutes, title: `${e.name} denemesi` });
      d.tasks.push({ id: '', kind: 'analysis', minutes: ANALYSIS_MIN, title: `${e.name} deneme analizi`, });
      d.cap = Math.max(0, d.cap - e.minutes - ANALYSIS_MIN);
    });
  }

  /* ---- 2. Rutinler ve oturum sayısı ---- */
  for (const d of days) {
    if (p.routines && d.cap >= 90) {
      if (hasTr) { d.tasks.push({ id: '', kind: 'routine', minutes: ROUTINE_MIN, title: 'Paragraf rutini: 10 soru', subjectId: 'tyt-tr' }); d.cap -= ROUTINE_MIN; }
      d.tasks.push({ id: '', kind: 'routine', minutes: ROUTINE_MIN, title: 'Problem rutini: 10 soru', subjectId: 'tyt-mat' }); d.cap -= ROUTINE_MIN;
    }
  }
  const slotsOf = (d: Slot) => Math.floor(d.cap / S);

  // Haftalık tekrar için yer ayır: konu dönemindeki her haftanın son iki çalışma gününde, ~12 oturumda 1 (en çok 3)
  const reviewAt = new Map<string, number>();
  for (const [, wdays] of weeks) {
    if (wdays[0]!.date > topicsEnd) continue;
    const w = wdays.filter((d) => d.date <= topicsEnd && slotsOf(d) > 0);
    const total = w.reduce((a, d) => a + slotsOf(d), 0);
    if (total < 4) continue;
    let left = Math.min(3, Math.max(1, Math.round(total / 12)));
    for (const d of [...w].reverse().slice(0, 2)) {
      const r = Math.min(left, 2, slotsOf(d));
      if (r > 0) reviewAt.set(d.date, r);
      left -= r;
    }
  }
  const freeSlots = (d: Slot) => slotsOf(d) - (reviewAt.get(d.date) ?? 0);
  const A = days.filter((d) => d.date <= topicsEnd).reduce((a, d) => a + freeSlots(d), 0);
  const ALL = days.reduce((a, d) => a + freeSlots(d), 0);

  /* ---- 3. Konu oturumları ---- */
  const need = new Map<string, { t: Topic; total: number; remaining: number }>();
  for (const s of subjects) for (const t of s.topics) {
    const x = topicSessions(p, t, states.get(t.id));
    if (x.remaining > 0) need.set(t.id, { t, ...x });
  }
  // Bir oturum bile sığmıyorsa önce sık sorulmayan konular, sonra müfredatın sonundakiler dışarıda kalır
  const dropped: string[] = [];
  if (need.size > ALL) {
    const order = [...need.values()].sort((a, b) => Number(b.t.frequent ?? false) - Number(a.t.frequent ?? false));
    for (const x of order.slice(Math.max(0, ALL))) { need.delete(x.t.id); dropped.push(x.t.id); }
  }
  const N = [...need.values()].reduce((a, x) => a + x.remaining, 0);
  const fit = N > A && N > 0 ? A / N : 1;
  const queues = new Map<string, Unit[]>();
  const starts = new Map<string, number>();
  let topicUnits = 0;
  for (const s of subjects) {
    const units: Unit[] = [];
    for (const t of s.topics) {
      const x = need.get(t.id);
      if (!x) continue;
      // sıkıştırmada sık sorulan konular daha az kısalır
      const f = fit < 1 ? Math.min(1, t.frequent ? fit * 1.2 : fit * 0.9) : 1;
      const n = fit < 1 ? Math.max(1, Math.floor(x.remaining * f)) : x.remaining;
      const done = x.total - x.remaining;
      const total = done + n;
      for (let i = 0; i < n; i++) units.push({ subjectId: s.id, topicId: t.id, part: [done + i + 1, total], title: t.name });
    }
    if (units.length) { queues.set(s.id, units); starts.set(s.id, s.exam === 'tyt' ? 0 : AYT_START[p.status]); topicUnits += units.length; }
  }
  const nextUnit = topicScheduler(queues, starts, topicUnits, S <= 25 ? 3 : 2);

  // Soru çözümü oturumları: puan türündeki soru sayısı × net etkisi
  const practiceQ = new Map(subjects.map((s) => [s.id, Array.from({ length: 10_000 }, () => s.id)]));
  const practiceW = new Map(subjects.map((s) => [s.id, questionsFor(p.scoreType, s.id) * netFactor(p, s.id)]));
  const nextPractice = interleave(practiceQ, practiceW);
  const rot = new Map<string, number>();
  const subjectTopics = (sid: string) => {
    const s = subjects.find((x) => x.id === sid)!;
    const weak = s.topics.filter((t) => states.get(t.id)?.status === 'weak');
    const done = s.topics.filter((t) => states.get(t.id)?.status === 'done');
    // önce zorlanılanlar, sonra bitmiş konulardan sık sorulanlar
    const pool = weak.length ? weak : [...done.filter((t) => t.frequent), ...done.filter((t) => !t.frequent)];
    const list = pool.length ? pool : s.topics.filter((t) => t.frequent);
    const start = (rot.get(sid) ?? 0) % Math.max(1, list.length);
    rot.set(sid, start + 3);
    return [...list.slice(start), ...list.slice(0, start)].slice(0, 3).map((t) => t.id);
  };
  const practiceTask = (): Task => {
    const sid = nextPractice()!;
    const s = subjects.find((x) => x.id === sid)!;
    return { id: '', kind: 'practice', minutes: S, title: `Soru çözümü: ${s.short}`, subjectId: sid, topicIds: subjectTopics(sid) };
  };

  let placedStudy = 0;
  let placedUnits = 0;
  let weekTopics: string[] = [];
  let currentWeek = '';
  for (const d of days) {
    if (weekStart(d.date) !== currentWeek) { currentWeek = weekStart(d.date); weekTopics = []; }
    const n = freeSlots(d);
    const inStudy = d.date <= topicsEnd;
    for (let i = 0; i < n; i++) {
      // Konular konu döneminin sonuna yayılır; ara oturumlar soru çözümü. Bitmeyen konular son döneme taşar.
      const due = inStudy ? Math.floor(((placedStudy + 1) * Math.min(topicUnits, A)) / Math.max(A, 1)) : Infinity;
      const u = placedUnits < due ? nextUnit() : null;
      if (u) {
        placedUnits++;
        weekTopics.push(u.topicId);
        d.tasks.push({ id: '', kind: 'topic', minutes: S, title: u.title, subjectId: u.subjectId, topicId: u.topicId, part: u.part });
      } else d.tasks.push(practiceTask());
      if (inStudy) placedStudy++;
    }
    /* ---- 4. Haftalık tekrar: ayrılan oturumlar, o haftanın konularıyla ---- */
    const r = reviewAt.get(d.date) ?? 0;
    const ids = [...new Set(weekTopics)];
    for (let k = 0; k < r; k++) {
      const size = Math.ceil(ids.length / r);
      d.tasks.push({ id: '', kind: 'review', minutes: S, title: 'Haftalık tekrar', topicIds: ids.slice(k * size, (k + 1) * size) });
    }
    d.cap -= (n + r) * S;
  }

  /* ---- 5. Sırala ve kimlik ver ---- */
  const ORDER: Record<Task['kind'], number> = { exam: 0, analysis: 1, routine: 2, topic: 3, practice: 4, review: 5 };
  const out: PlanDay[] = days.map((d) => ({
    date: d.date,
    tasks: d.tasks
      .map((t, i) => ({ t, i }))
      .sort((a, b) => (a.t.done === b.t.done ? 0 : a.t.done ? -1 : 1) || ORDER[a.t.kind] - ORDER[b.t.kind] || (a.t.kind === 'topic' || a.t.kind === 'practice' ? a.i - b.i : 0))
      .map(({ t }, i) => ({ ...t, id: t.id || `${d.date}-${i}` }))
  }));
  // konu ve soru çözümü oturumları üretim sırasını korur (dönüşüm bozulmasın)
  const past = prev ? prev.days.filter((d) => d.date < today) : [];
  return {
    id: 'current',
    createdAt: now.toISOString(),
    from: prev?.from && prev.from < today ? prev.from : today,
    examDate: p.examDate,
    days: [...past, ...out],
    topicsEnd,
    fit: Math.round(fit * 100) / 100,
    dropped,
    totals: {
      studyMinutes: out.reduce((a, d) => a + d.tasks.reduce((b, t) => b + t.minutes, 0), 0),
      topicSessions: out.reduce((a, d) => a + d.tasks.filter((t) => t.kind === 'topic').length, 0)
    }
  };
}

/** Görev işaretlenince konu durumu: son parça bitince konu "tamamlandı" */
export function applyToggle(task: Task, done: boolean, st: TopicState | undefined, now = new Date()): TopicState | null {
  if (task.kind !== 'topic' || !task.topicId || !task.part) return null;
  const doneSessions = Math.max(0, (st?.doneSessions ?? 0) + (done ? 1 : -1));
  const status = done && task.part[0] >= task.part[1] ? 'done' : st?.status === 'weak' ? 'weak' : doneSessions > 0 ? 'doing' : 'todo';
  return { topicId: task.topicId, status, doneSessions, updatedAt: now.toISOString() };
}
