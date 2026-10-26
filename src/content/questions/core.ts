/* Soru motoru çekirdeği: tohumlu rastgele sayı, kesir, şık üretimi.
   Metin işaretleri (MathText bileşeni çizer):  {3/4} kesir · ^{2} üs · _{n} alt simge · √{12} kök */

export interface Question {
  id: string;
  topicId: string;
  stem: string;
  /** 5 şık (A–E) */
  options: string[];
  answer: number;
  solution: string;
}

export type Rnd = () => number;
/** mulberry32: aynı tohum → aynı soru (yanlışlar listesi soruyu kimliğinden yeniden üretir) */
export function rng(seed: number): Rnd {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
export const int = (r: Rnd, lo: number, hi: number) => lo + Math.floor(r() * (hi - lo + 1));
export const pick = <T,>(r: Rnd, xs: readonly T[]): T => xs[Math.floor(r() * xs.length)]!;
export function shuffle<T>(r: Rnd, xs: T[]): T[] {
  const a = [...xs];
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [a[i], a[j]] = [a[j]!, a[i]!]; }
  return a;
}

export const gcd = (a: number, b: number): number => (b === 0 ? Math.abs(a) : gcd(b, a % b));
export const lcm = (a: number, b: number) => Math.abs(a * b) / gcd(a, b);

/** Kesir: her zaman sadeleşmiş, payda pozitif */
export class Frac {
  readonly n: number; readonly d: number;
  constructor(n: number, d = 1) {
    if (d === 0) throw new Error('payda 0');
    const g = gcd(n, d) || 1;
    const s = d < 0 ? -1 : 1;
    this.n = (s * n) / g; this.d = (s * d) / g;
  }
  add(o: Frac) { return new Frac(this.n * o.d + o.n * this.d, this.d * o.d); }
  sub(o: Frac) { return new Frac(this.n * o.d - o.n * this.d, this.d * o.d); }
  mul(o: Frac) { return new Frac(this.n * o.n, this.d * o.d); }
  div(o: Frac) { return new Frac(this.n * o.d, this.d * o.n); }
  eq(o: Frac) { return this.n === o.n && this.d === o.d; }
  toString() { return this.d === 1 ? String(this.n) : `${this.n < 0 ? '−' : ''}{${Math.abs(this.n)}/${this.d}}`; }
}

/** Sayıyı Türkçe biçimde yaz: eksi işareti, ondalık virgül */
export const num = (x: number) => {
  const s = Number.isInteger(x) ? String(Math.abs(x)) : String(Math.round(Math.abs(x) * 100) / 100).replace('.', ',');
  return x < 0 ? `−${s}` : s;
};

/** Doğru cevap + çeldiriciler → 5 farklı şık. Eksik çeldirici yakın değerlerle tamamlanır. */
export function choices(r: Rnd, correct: string, wrong: string[], filler?: (i: number) => string): { options: string[]; answer: number } {
  const set: string[] = [correct];
  for (const w of wrong) if (w && !set.includes(w) && set.length < 5) set.push(w);
  for (let i = 1; set.length < 5 && i < 60; i++) {
    const f = filler?.(i);
    if (f && !set.includes(f)) set.push(f);
  }
  if (set.length < 5) throw new Error(`şık üretilemedi: ${correct}`);
  const options = shuffle(r, set);
  return { options, answer: options.indexOf(correct) };
}

/** Sayısal cevap için kısayol: çeldiriciler sayı, eksikler ±1, ±2 … */
export function numChoices(r: Rnd, correct: number, wrong: number[]) {
  const near = (i: number) => num(correct + (i % 2 ? 1 : -1) * Math.ceil(i / 2) * (Math.abs(correct) >= 40 ? Math.max(1, Math.round(Math.abs(correct) / 20)) : 1));
  return choices(r, num(correct), wrong.filter((w) => Number.isFinite(w)).map(num), near);
}

export const LETTERS = ['A', 'B', 'C', 'D', 'E'];

/** Üretilen metni düzelt: kayan nokta artığı, eksi işareti, "1x" → "x" */
export const tidy = (s: string) => s
  .replace(/-?\d+\.\d{4,}/g, (m) => num(Math.round(Number(m) * 100) / 100))
  .replace(/(^|[\s(=,{>])-(?=\d)/g, '$1−')
  .replace(/(^|[^\d,.\p{L}])1(?=[a-z])/gu, '$1');

export type Generator = (r: Rnd) => Omit<Question, 'id' | 'topicId'>;
