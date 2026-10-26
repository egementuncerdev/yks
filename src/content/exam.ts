/* YKS yapısı. Kaynak: 2026 YKS kılavuzu (test ve ders başına soru sayıları).
   2027 kılavuzu ve takvimi yayımlanınca bu dosya güncellenir. */

export type ExamId = 'tyt' | 'ayt' | 'ydt';
export type ScoreType = 'say' | 'ea' | 'soz' | 'dil' | 'tyt';

export const EXAMS: Record<ExamId, { name: string; questions: number; minutes: number }> = {
  tyt: { name: 'TYT', questions: 120, minutes: 165 },
  ayt: { name: 'AYT', questions: 160, minutes: 180 },
  ydt: { name: 'YDT', questions: 80, minutes: 120 }
};

/** ÖSYM 2027 takvimini açıklamadı; bu tarih tahmindir ve arayüzde öyle gösterilir. */
export const DEFAULT_EXAM_DATE = '2027-06-19';
export const EXAM_DATE_IS_OFFICIAL = false;

export const SCORE_TYPES: { id: ScoreType; name: string; desc: string; exams: ExamId[] }[] = [
  { id: 'say', name: 'Sayısal', desc: 'TYT + AYT Matematik ve Fen', exams: ['tyt', 'ayt'] },
  { id: 'ea', name: 'Eşit Ağırlık', desc: 'TYT + AYT Matematik, Edebiyat, Tarih-1, Coğrafya-1', exams: ['tyt', 'ayt'] },
  { id: 'soz', name: 'Sözel', desc: 'TYT + AYT Edebiyat ve Sosyal Bilimler', exams: ['tyt', 'ayt'] },
  { id: 'dil', name: 'Dil', desc: 'TYT + YDT (İngilizce)', exams: ['tyt', 'ydt'] },
  { id: 'tyt', name: 'Yalnız TYT', desc: 'Ön lisans programları', exams: ['tyt'] }
];

/** Testler ve içlerindeki dersler (soru sayıları kılavuzdan) */
export const TESTS = [
  { id: 'tyt-tr', exam: 'tyt', name: 'Türkçe', questions: 40, parts: [{ subject: 'tyt-tr', q: 40 }] },
  { id: 'tyt-sos', exam: 'tyt', name: 'Sosyal Bilimler', questions: 20, parts: [{ subject: 'tyt-tar', q: 5 }, { subject: 'tyt-cog', q: 5 }, { subject: 'tyt-fel', q: 5 }, { subject: 'tyt-din', q: 5 }] },
  { id: 'tyt-mat', exam: 'tyt', name: 'Temel Matematik', questions: 40, parts: [{ subject: 'tyt-mat', q: 40 }] },
  { id: 'tyt-fen', exam: 'tyt', name: 'Fen Bilimleri', questions: 20, parts: [{ subject: 'tyt-fiz', q: 7 }, { subject: 'tyt-kim', q: 7 }, { subject: 'tyt-bio', q: 6 }] },
  { id: 'ayt-mat', exam: 'ayt', name: 'Matematik', questions: 40, parts: [{ subject: 'ayt-mat', q: 40 }] },
  { id: 'ayt-fen', exam: 'ayt', name: 'Fen Bilimleri', questions: 40, parts: [{ subject: 'ayt-fiz', q: 14 }, { subject: 'ayt-kim', q: 13 }, { subject: 'ayt-bio', q: 13 }] },
  { id: 'ayt-sos1', exam: 'ayt', name: 'Türk Dili ve Edebiyatı – Sosyal Bilimler-1', questions: 40, parts: [{ subject: 'ayt-edb', q: 24 }, { subject: 'ayt-tar', q: 10 }, { subject: 'ayt-cog', q: 6 }] },
  { id: 'ayt-sos2', exam: 'ayt', name: 'Sosyal Bilimler-2', questions: 40, parts: [{ subject: 'ayt-tar', q: 11 }, { subject: 'ayt-cog', q: 11 }, { subject: 'ayt-fel', q: 12 }, { subject: 'ayt-din', q: 6 }] },
  { id: 'ydt', exam: 'ydt', name: 'Yabancı Dil (İngilizce)', questions: 80, parts: [{ subject: 'ydt-ing', q: 80 }] }
] as const;

export type TestId = (typeof TESTS)[number]['id'];

/** Puan türüne göre çözülen testler */
export const TESTS_BY_SCORE: Record<ScoreType, TestId[]> = {
  say: ['tyt-tr', 'tyt-sos', 'tyt-mat', 'tyt-fen', 'ayt-mat', 'ayt-fen'],
  ea: ['tyt-tr', 'tyt-sos', 'tyt-mat', 'tyt-fen', 'ayt-mat', 'ayt-sos1'],
  soz: ['tyt-tr', 'tyt-sos', 'tyt-mat', 'tyt-fen', 'ayt-sos1', 'ayt-sos2'],
  dil: ['tyt-tr', 'tyt-sos', 'tyt-mat', 'tyt-fen', 'ydt'],
  tyt: ['tyt-tr', 'tyt-sos', 'tyt-mat', 'tyt-fen']
};

/** Puan türünde dersin soru sayısı (planlamada dersin ağırlığı). Ders yoksa 0. */
export function questionsFor(scoreType: ScoreType, subjectId: string): number {
  let n = 0;
  for (const t of TESTS) if ((TESTS_BY_SCORE[scoreType] as readonly string[]).includes(t.id)) for (const p of t.parts) if (p.subject === subjectId) n += p.q;
  return n;
}

/** Net = doğru − yanlış / 4 */
export const net = (correct: number, wrong: number) => Math.round((correct - wrong / 4) * 100) / 100;
