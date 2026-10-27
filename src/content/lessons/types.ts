/* Konu anlatımı biçimi. Metinlerde MathText işaretleri kullanılabilir: {a/b}, ^{}, _{}, √{}, **kalın**. */
export interface Lesson {
  /** 1–3 cümlelik özet: konu ne, sınavda nasıl sorulur */
  intro: string;
  /** başlıklı bölümler: bilmen gerekenler */
  parts: { h: string; items: string[] }[];
  /** sık yapılan hatalar, karıştırılanlar */
  traps?: string[];
  /** çözümlü örnek */
  example?: { q: string; a: string };
}
/** Bir dersin anlatımları: anahtar konu ADI (subjects.ts ile birebir; test kontrol eder) */
export type LessonSet = Record<string, Lesson>;

/** Konu anlatımına eklenen görsel ya da şema. `at`: hangi bölümden (parts indeksi) sonra gösterilir; yoksa bölümlerin sonunda. */
export type Figure = { title: string; caption?: string; at?: number } & (
  | { kind: 'svg'; svg: string }
  | { kind: 'table'; head: string[]; rows: string[][] }
  | { kind: 'timeline'; items: [when: string, what: string][] }
  | { kind: 'flow'; steps: string[] }
  | { kind: 'punnett'; mother: [string, string]; father: [string, string]; note?: string }
  /** yatay çubuk grafik: [etiket, değer]; vurgulanacak etiket isteğe bağlı */
  | { kind: 'bars'; items: [label: string, value: number][]; unit?: string; highlight?: string }
  /** çizgi grafik: en çok iki seri; işaretler (x, etiket) dikey kesikli çizgiyle gösterilir */
  | { kind: 'line'; series: { name: string; points: [x: number, y: number][] }[]; x: string; y: string; marks?: [x: number, label: string][]; steps?: boolean }
  /** formül kartları: [ad, formül] */
  | { kind: 'formulas'; items: [name: string, formula: string][] }
  /** akılda tutma kutusu */
  | { kind: 'note'; text: string }
);
