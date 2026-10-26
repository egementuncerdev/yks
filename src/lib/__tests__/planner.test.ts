import { describe, expect, it } from 'vitest';
import { buildPlan, applyToggle, subjectsFor, topicSessions, finalWeeks } from '@/lib/planner';
import { SUBJECT_BY_ID } from '@/content/subjects';
import type { Profile, TopicState } from '@/types';
import { weekday } from '@/lib/dates';

const base: Profile = {
  id: 'me', scoreType: 'say', status: '12', examDate: '2027-06-19', examDateCustom: false,
  hours: [5, 5, 5, 5, 5, 8, 7], sessionMin: 40, levels: {}, nets: {}, denemePerWeek: { tyt: 1, ayt: 1 },
  routines: true, createdAt: '', updatedAt: ''
};
const today = '2026-10-26';
const tasks = (plan: ReturnType<typeof buildPlan>) => plan.days.flatMap((d) => d.tasks);

describe('program', () => {
  const plan = buildPlan(base, new Map(), today);

  it('bugünden sınavın bir gün öncesine kadar her gün var', () => {
    expect(plan.days[0]!.date).toBe(today);
    expect(plan.days.at(-1)!.date).toBe('2027-06-18');
  });

  it('hiçbir gün ayrılan süreyi aşmıyor (deneme günleri hariç)', () => {
    for (const d of plan.days) {
      const cap = base.hours[weekday(d.date)]! * 60;
      const used = d.tasks.reduce((a, t) => a + t.minutes, 0);
      if (!d.tasks.some((t) => t.kind === 'exam')) expect(used, d.date).toBeLessThanOrEqual(cap);
    }
  });

  it('puan türündeki bütün konular programda; başka türün dersi yok', () => {
    const planned = new Set(tasks(plan).filter((t) => t.kind === 'topic').map((t) => t.topicId));
    for (const s of subjectsFor(base)) for (const t of s.topics) expect(planned.has(t.id), t.id).toBe(true);
    expect(tasks(plan).some((t) => t.subjectId === 'ayt-edb')).toBe(false);
  });

  it('konular son dönemden önce bitiyor, son dönemde deneme ve soru çözümü', () => {
    expect(plan.fit).toBe(1);
    const lastTopic = plan.days.filter((d) => d.tasks.some((t) => t.kind === 'topic')).at(-1)!.date;
    expect(lastTopic <= plan.topicsEnd).toBe(true);
    const finalDays = plan.days.filter((d) => d.date > plan.topicsEnd);
    expect(finalDays.length).toBe(finalWeeks(plan.days.length) * 7);
    expect(finalDays.flatMap((d) => d.tasks).some((t) => t.kind === 'exam')).toBe(true);
  });

  it('konu parçaları sırayla ve eksiksiz', () => {
    const byTopic = new Map<string, number[]>();
    for (const t of tasks(plan)) if (t.kind === 'topic') byTopic.set(t.topicId!, [...(byTopic.get(t.topicId!) ?? []), t.part![0]]);
    for (const [id, parts] of byTopic) {
      expect(parts, id).toEqual(parts.map((_, i) => i + 1));
      const total = tasks(plan).find((t) => t.topicId === id && t.kind === 'topic')!.part![1];
      expect(parts.length, id).toBe(total);
    }
  });

  it('dersler dönüşümlü: ilk iki haftada en az 6 farklı ders', () => {
    const first = plan.days.slice(0, 14).flatMap((d) => d.tasks).filter((t) => t.kind === 'topic');
    expect(new Set(first.map((t) => t.subjectId)).size).toBeGreaterThanOrEqual(6);
  });

  it('haftalık deneme sayısı ve haftalık tekrar', () => {
    const week = plan.days.slice(6, 13).flatMap((d) => d.tasks); // 2. tam hafta (Pzt 2 Kasım)
    expect(week.filter((t) => t.kind === 'exam').map((t) => t.title).sort()).toEqual(['AYT denemesi', 'TYT denemesi']);
    expect(week.some((t) => t.kind === 'review')).toBe(true);
  });

  it('görev kimlikleri benzersiz', () => {
    const ids = tasks(plan).map((t) => t.id);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('zaman yetmezse sıkıştırır ve fit < 1 bildirir; bütün konular yine programda', () => {
    const tight = buildPlan({ ...base, hours: [3, 3, 3, 3, 3, 5, 5] }, new Map(), today);
    expect(tight.fit).toBeLessThan(1);
    expect(tight.dropped).toEqual([]);
    const planned = new Set(tasks(tight).filter((t) => t.kind === 'topic').map((t) => t.topicId));
    for (const s of subjectsFor(base)) for (const t of s.topics) expect(planned.has(t.id), t.id).toBe(true);
  });

  it('bir oturum bile sığmıyorsa önce sık sorulmayan konular dışarıda kalır', () => {
    const tiny = buildPlan({ ...base, examDate: '2027-01-20', hours: [1, 1, 1, 1, 1, 2, 2] }, new Map(), today);
    expect(tiny.dropped.length).toBeGreaterThan(0);
    const planned = tasks(tiny).filter((t) => t.kind === 'topic').map((t) => t.topicId!);
    const droppedFrequent = tiny.dropped.filter((id) => SUBJECT_BY_ID[id.split(':')[0]!]!.topics.find((t) => t.id === id)!.frequent);
    const plannedNonFrequent = planned.filter((id) => !SUBJECT_BY_ID[id.split(':')[0]!]!.topics.find((t) => t.id === id)!.frequent);
    expect(droppedFrequent.length === 0 || plannedNonFrequent.length === 0).toBe(true);
  });

  it('seviye ve bitmiş konular oturum sayısını azaltır', () => {
    const t = SUBJECT_BY_ID['tyt-tr']!.topics.find((x) => x.name === 'Paragraf')!;
    const lo = topicSessions(base, t).total;
    const hi = topicSessions({ ...base, levels: { 'tyt-tr': 2 } }, t).total;
    expect(hi).toBeLessThan(lo);
    expect(topicSessions(base, t, { topicId: t.id, status: 'done', doneSessions: 3, updatedAt: '' }).remaining).toBe(0);
  });

  it('sık sorulan konu aynı hacimdeki diğerinden uzun', () => {
    const tr = SUBJECT_BY_ID['tyt-tr']!.topics;
    const f = tr.find((x) => x.name === 'Sözcükte Anlam')!; // 2, sık
    const n = tr.find((x) => x.name === 'Sözcükte Yapı ve Ekler')!; // 2
    expect(topicSessions(base, f).total).toBeGreaterThan(topicSessions(base, n).total);
  });

  it('yeniden oluşturma: geçmiş günler ve bugün bitirilenler korunur, biten konu tekrar planlanmaz', () => {
    const t0 = plan.days[0]!.tasks.find((t) => t.kind === 'topic')!;
    const prev = structuredClone(plan);
    prev.days[0]!.tasks.find((t) => t.id === t0.id)!.done = true;
    const st = new Map<string, TopicState>([[t0.topicId!, { topicId: t0.topicId!, status: 'done', doneSessions: 1, updatedAt: '' }]]);
    const next = buildPlan(base, st, today, prev);
    expect(next.days[0]!.tasks.find((t) => t.id === t0.id)?.done).toBe(true);
    expect(tasks(next).filter((t) => t.kind === 'topic' && t.topicId === t0.topicId && !t.done)).toHaveLength(0);
    const later = buildPlan(base, st, '2026-10-28', prev);
    expect(later.days[0]!.date).toBe(today);
    expect(later.from).toBe(today);
  });

  it('yalnız TYT: AYT denemesi yok; Dil: YDT denemesi', () => {
    expect(tasks(buildPlan({ ...base, scoreType: 'tyt' }, new Map(), today)).some((t) => t.title.startsWith('AYT'))).toBe(false);
    expect(tasks(buildPlan({ ...base, scoreType: 'dil' }, new Map(), today)).some((t) => t.title === 'YDT denemesi')).toBe(true);
  });

  it('sınav geçmişse boş program', () => {
    expect(buildPlan({ ...base, examDate: '2026-10-01' }, new Map(), today).days).toHaveLength(0);
  });
});

describe('işaretleme', () => {
  it('son parça bitince konu tamamlandı, geri alınca devam ediyor', () => {
    const task = { id: 'x', kind: 'topic' as const, minutes: 40, title: 'X', topicId: 'a', part: [2, 2] as [number, number] };
    const s1 = applyToggle(task, true, { topicId: 'a', status: 'doing', doneSessions: 1, updatedAt: '' })!;
    expect(s1).toMatchObject({ status: 'done', doneSessions: 2 });
    expect(applyToggle(task, false, s1)).toMatchObject({ status: 'doing', doneSessions: 1 });
    expect(applyToggle({ ...task, kind: 'practice' }, true, undefined)).toBeNull();
  });
});
