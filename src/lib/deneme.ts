/* Deneme hesapları: saf fonksiyonlar (testli). Net = doğru − yanlış ÷ 4. */
import { TESTS, TESTS_BY_SCORE, net, type ExamId, type ScoreType, type TestId } from '@/content/exam';
import type { Deneme, DenemeResult } from '@/types';

export const testById = (id: TestId) => TESTS.find((t) => t.id === id)!;
const r2 = (x: number) => Math.round(x * 100) / 100;

/** Sınavda öğrencinin çözdüğü testler; puan türü verilmezse sınavın bütün testleri */
export function testsFor(exam: ExamId, scoreType?: ScoreType): TestId[] {
  const all: TestId[] = TESTS.filter((t) => t.exam === exam).map((t) => t.id);
  if (!scoreType || exam === 'tyt') return all;
  const mine = TESTS_BY_SCORE[scoreType].filter((id) => all.includes(id));
  return mine.length ? mine : all;
}

/** Hata metni ya da null. Boş alanlar 0 sayılır. */
export function checkResult(testId: TestId, r: DenemeResult): string | null {
  const q = testById(testId).questions;
  if (![r.c, r.w].every((x) => Number.isInteger(x) && x >= 0)) return 'Doğru ve yanlış sayısı 0 ya da pozitif tam sayı olmalı.';
  if (r.c + r.w > q) return `${testById(testId).name} testinde ${q} soru var; doğru ve yanlış toplamı en fazla ${q} olabilir.`;
  return null;
}

export const denemeNets = (d: Pick<Deneme, 'results'>) =>
  Object.fromEntries(Object.entries(d.results).map(([k, r]) => [k, net(r!.c, r!.w)])) as Partial<Record<TestId, number>>;

export const totalNet = (d: Pick<Deneme, 'results'>) => r2(Object.values(denemeNets(d)).reduce((a, b) => a + (b ?? 0), 0));

/** Bir sınavın denemeleri, eskiden yeniye */
export const byExam = (list: Deneme[], exam: ExamId) =>
  list.filter((d) => d.exam === exam).sort((a, b) => a.date.localeCompare(b.date) || a.createdAt.localeCompare(b.createdAt));

/** Testin son neti, bir öncekine göre değişim ve son üç denemenin ortalaması */
export function testSummary(sorted: Deneme[], testId: TestId) {
  const nets = sorted.filter((d) => d.results[testId]).map((d) => denemeNets(d)[testId]!);
  const last = nets.at(-1), prev = nets.at(-2), recent = nets.slice(-3);
  return {
    last, change: last !== undefined && prev !== undefined ? r2(last - prev) : undefined,
    avg3: recent.length ? r2(recent.reduce((a, b) => a + b, 0) / recent.length) : undefined, count: nets.length
  };
}

/** Son denemede soru sayısına göre en düşük oranlı test: en çok net kazanılabilecek yer */
export function biggestGap(d: Pick<Deneme, 'results'>) {
  const rows = Object.entries(denemeNets(d)).map(([id, n]) => {
    const q = testById(id as TestId).questions;
    return { test: id as TestId, net: n!, questions: q, room: r2(q - n!), ratio: n! / q };
  });
  return rows.sort((a, b) => a.ratio - b.ratio || b.room - a.room)[0];
}
