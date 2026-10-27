/* Soru kaydı: konu → üreticiler + elle yazılmış sorular. Kimlikten soru yeniden üretilebilir. */
import { SUBJECT_BY_ID, TOPIC_BY_ID } from '../subjects';
import { rng, shuffle, tidy, type Generator, type Question } from './core';
import { TYT_MAT } from './tytMat';
import { AYT_MAT, BIYOLOJI, COGRAFYA, FIZIK, KIMYA } from './science';
import { BANK as BANK1 } from './bank';
import { BANK2 } from './bank2';
import { HINTS } from './hints';
import { BANK3 } from './bank3';

/** Bütün elle yazılmış sorular. Yeni sorular yalnız SONA eklenir (kimlikler sıra numarasıdır). */
export const BANK = [...BANK1, ...BANK2, ...BANK3.map(([a, b, c, d, e]) => [a, b, c, d, e] as (typeof BANK1)[number])];
/** BANK ile aynı sırada ipuçları */
export const ALL_HINTS = [...HINTS, ...BANK3.map((x) => x[5])];
import { MATH_MORE } from './mathMore';
import { SCIENCE_MORE } from './scienceMore';
import { SCIENCE_EXTRA } from './scienceExtra';

export type { Question };

const topicId = (subjectId: string, name: string) => {
  const t = SUBJECT_BY_ID[subjectId]?.topics.find((x) => x.name === name);
  if (!t) throw new Error(`Konu yok: ${subjectId} / ${name}`);
  return t.id;
};

/** konu id → üreticiler */
export const GENERATORS = new Map<string, Generator[]>();
const add = (subjectId: string, table: Record<string, Generator[]>, alias: Record<string, string> = {}) => {
  for (const [name, gens] of Object.entries(table)) GENERATORS.set(topicId(subjectId, alias[name] ?? name), [...(GENERATORS.get(topicId(subjectId, alias[name] ?? name)) ?? []), ...gens]);
};
add('tyt-mat', TYT_MAT);
add('ayt-mat', AYT_MAT);
// AYT’de de geçen TYT üreticileri
add('ayt-mat', {
  'Fonksiyonlar (İleri)': TYT_MAT['Fonksiyonlar']!, 'Polinomlar ve Denklemler': TYT_MAT['Polinomlar']!,
  'İkinci Dereceden Denklemler ve Eşitsizlikler': TYT_MAT['İkinci Dereceden Denklemler']!, 'Olasılık': TYT_MAT['Olasılık']!,
  'Çember ve Daire': TYT_MAT['Çember ve Daire']!, 'Doğrunun Analitiği': TYT_MAT['Noktanın ve Doğrunun Analitiği']!, 'Katı Cisimler': TYT_MAT['Katı Cisimler']!,
  'Çokgenler ve Dörtgenler (Tekrar)': TYT_MAT['Çokgenler ve Dörtgenler']!
});
for (const [sid, table] of Object.entries({ ...MATH_MORE })) add(sid, table);
for (const [sid, table] of Object.entries(SCIENCE_MORE)) add(sid, table);
for (const [sid, table] of Object.entries(SCIENCE_EXTRA)) add(sid, table);
add('tyt-fiz', FIZIK);
add('ayt-fiz', { 'İş, Enerji ve Güç': FIZIK['İş, Güç ve Enerji']! });
add('tyt-kim', KIMYA);
add('tyt-bio', BIYOLOJI);
add('tyt-cog', COGRAFYA);

/** konu id → elle yazılmış soru indeksleri */
export const BANK_BY_TOPIC = new Map<string, number[]>();
/* Aynı içerik AYT’de de soruluyor: TYT konusundaki elle yazılmış sorular bu AYT konularında da kullanılır */
const SHARED: Record<string, string[]> = {
  'tyt-tar:Tarih ve Zaman': ['ayt-tar:Tarih Bilimi ve İlk Çağ'],
  'tyt-tar:İnsanlığın İlk Dönemleri': ['ayt-tar:Tarih Bilimi ve İlk Çağ'],
  'tyt-tar:İlk ve Orta Çağlarda Türk Dünyası': ['ayt-tar:İlk ve Orta Çağlarda Türk Dünyası'],
  'tyt-tar:İslam Medeniyetinin Doğuşu': ['ayt-tar:İslam Tarihi ve Türk-İslam Devletleri'],
  'tyt-tar:İlk Türk-İslam Devletleri': ['ayt-tar:İslam Tarihi ve Türk-İslam Devletleri'],
  'tyt-tar:Selçuklu Türkiyesi': ['ayt-tar:Selçuklu Türkiyesi'],
  'tyt-tar:Beylikten Devlete Osmanlı': ['ayt-tar:Osmanlı Kuruluş ve Yükselme'],
  'tyt-tar:Dünya Gücü Osmanlı': ['ayt-tar:Osmanlı Kuruluş ve Yükselme'],
  'tyt-tar:Değişim Çağında Osmanlı ve Avrupa': ['ayt-tar:Değişen Dünya Dengeleri ve Osmanlı'],
  'tyt-tar:Milli Mücadele': ['ayt-tar:Milli Mücadele'],
  'tyt-tar:Atatürkçülük ve Türk İnkılabı': ['ayt-tar:Atatürkçülük ve İnkılaplar'],
  'tyt-cog:Nüfus ve Göç': ['ayt-cog:Türkiye’de Nüfus ve Yerleşme'],
  'tyt-cog:Ekonomik Faaliyetler': ['ayt-cog:Türkiye Ekonomisi']
};
BANK.forEach(([sid, name], i) => {
  for (const key of [`${sid}:${name}`, ...(SHARED[`${sid}:${name}`] ?? [])]) {
    const [s2, ...rest] = key.split(':');
    const id = topicId(s2!, rest.join(':'));
    BANK_BY_TOPIC.set(id, [...(BANK_BY_TOPIC.get(id) ?? []), i]);
  }
});

export const hasQuestions = (topic: string) => GENERATORS.has(topic) || BANK_BY_TOPIC.has(topic);
export const questionCount = (topic: string): number | 'sınırsız' => (GENERATORS.has(topic) ? 'sınırsız' : BANK_BY_TOPIC.get(topic)?.length ?? 0);

function fromBank(i: number): Question {
  const [sid, name, stem, opts, solution] = BANK[i]!;
  const r = rng(i * 7919 + 13);
  const options = shuffle(r, [...opts]);
  return { id: `b|${i}`, topicId: topicId(sid, name), stem, options, answer: options.indexOf(opts[0]), solution, hint: ALL_HINTS[i] };
}
function fromGen(topic: string, gi: number, seed: number): Question {
  const gen = GENERATORS.get(topic)![gi]!;
  const q = gen(rng(seed));
  return { id: `g|${topic}|${gi}|${seed}`, topicId: topic, stem: tidy(q.stem), options: q.options.map(tidy), answer: q.answer, solution: tidy(q.solution), ...(q.hint ? { hint: tidy(q.hint) } : {}) };
}

/** Kimlikten soruyu yeniden kur (yanlışlar listesi için) */
export function questionById(id: string): Question | null {
  const [kind, a, b, c] = id.split('|');
  try {
    if (kind === 'b') return BANK[Number(a)] ? fromBank(Number(a)) : null;
    if (kind === 'g' && a && GENERATORS.get(a)?.[Number(b)]) return fromGen(a, Number(b), Number(c));
  } catch { /* içerik değiştiyse */ }
  return null;
}

/** Bir konudan n soru: önce elle yazılanlar (karışık), sonra üreticilerden dönüşümlü */
export function questionsFor(topic: string, n: number, seed = Date.now()): Question[] {
  const r = rng(seed);
  const out: Question[] = shuffle(r, BANK_BY_TOPIC.get(topic) ?? []).slice(0, n).map(fromBank);
  const gens = GENERATORS.get(topic) ?? [];
  for (let i = 0; out.length < n && gens.length && i < n * 4; i++) {
    const q = fromGen(topic, i % gens.length, Math.floor(r() * 2 ** 31));
    if (!out.some((x) => x.stem === q.stem)) out.push(q);
  }
  return out;
}

/** Bir dersin soru olan konuları */
export const topicsWithQuestions = (subjectId: string) => SUBJECT_BY_ID[subjectId]?.topics.filter((t) => hasQuestions(t.id)) ?? [];
export const topicName = (id: string) => TOPIC_BY_ID[id]?.name ?? id;
