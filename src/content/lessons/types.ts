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
);
