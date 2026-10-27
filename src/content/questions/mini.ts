/* Netlik mini denemesi: gerçek sınavın dörtte biri büyüklüğünde, ders dağılımı kılavuza oranlı.
   Her ders için soru olan konulardan dönüşümlü seçilir; süre de dörtte birine indirilir. */
import { EXAMS, TESTS, TESTS_BY_SCORE, type ExamId, type ScoreType, type TestId } from '../exam';
import { questionsFor, topicsWithQuestions, type Question } from './index';
import { rng, shuffle } from './core';

export type MiniKind = 'tyt' | 'ayt-say' | 'ayt-ea' | 'ayt-soz' | 'ydt';
export const MINI_KINDS: { id: MiniKind; exam: ExamId; name: string; score?: ScoreType }[] = [
  { id: 'tyt', exam: 'tyt', name: 'TYT' },
  { id: 'ayt-say', exam: 'ayt', name: 'AYT Sayısal', score: 'say' },
  { id: 'ayt-ea', exam: 'ayt', name: 'AYT Eşit Ağırlık', score: 'ea' },
  { id: 'ayt-soz', exam: 'ayt', name: 'AYT Sözel', score: 'soz' },
  { id: 'ydt', exam: 'ydt', name: 'YDT İngilizce' }
];

export const SCALE = 4;
export interface MiniQuestion extends Question { testId: TestId }

export function miniTests(kind: MiniKind) {
  const k = MINI_KINDS.find((x) => x.id === kind)!;
  const ids: readonly string[] = k.score ? TESTS_BY_SCORE[k.score] : TESTS.map((t) => t.id);
  return TESTS.filter((t) => t.exam === k.exam && ids.includes(t.id)).map((t) => ({ ...t, parts: t.parts.map((p) => ({ ...p, q: Math.max(1, Math.round(p.q / SCALE)) })) }));
}

export const miniCount = (kind: MiniKind) => miniTests(kind).reduce((a, t) => a + t.parts.reduce((b, p) => b + p.q, 0), 0);

/** Sınav süresinin, soru sayısıyla orantılı kısmı (5 dakikaya yuvarlanmış) */
export function miniMinutes(kind: MiniKind) {
  const k = MINI_KINDS.find((x) => x.id === kind)!;
  const full = TESTS.filter((t) => t.exam === k.exam && (!k.score || (TESTS_BY_SCORE[k.score] as readonly string[]).includes(t.id))).reduce((a, t) => a + t.questions, 0);
  const mini = miniTests(kind).reduce((a, t) => a + t.parts.reduce((b, p) => b + p.q, 0), 0);
  return Math.max(10, Math.round((EXAMS[k.exam].minutes * (mini / (k.exam === 'ayt' ? full : EXAMS[k.exam].questions))) / 5) * 5);
}

export function buildMini(kind: MiniKind, seed = Date.now()): MiniQuestion[] {
  const r = rng(seed);
  const out: MiniQuestion[] = [];
  for (const t of miniTests(kind)) for (const p of t.parts) {
    const topics = shuffle(r, topicsWithQuestions(p.subject).map((x) => x.id));
    if (!topics.length) continue;
    const got: Question[] = [];
    for (let i = 0; got.length < p.q && i < p.q * 6; i++) {
      const q = questionsFor(topics[i % topics.length]!, 1, Math.floor(r() * 2 ** 31))[0];
      if (q && !got.some((x) => x.id === q.id || x.stem === q.stem) && !out.some((x) => x.id === q.id)) got.push(q);
    }
    out.push(...got.map((q) => ({ ...q, testId: t.id })));
  }
  return out;
}
