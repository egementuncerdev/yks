/* TYT Matematik ve Geometri: parametreli soru üreticileri. Cevaplar kodla hesaplanır. */
import { Frac, gcd, int, lcm, num, numChoices, choices, pick, type Generator } from './core';

const g = (stem: string, correct: number, wrong: number[], solution: string, r: () => number) => ({ stem, ...numChoices(r, correct, wrong), solution });

export const TYT_MAT: Record<string, Generator[]> = {
  'Temel Kavramlar': [
    (r) => {
      const m = int(r, 6, 30); const S = 3 * 2 * m; // a, b, c ardışık çift: b = 2m → a+b+c = 6m
      const c = 2 * m + 2;
      return g(`a, b, c ardışık çift sayılar ve a < b < c olmak üzere a + b + c = ${S} ise c kaçtır?`, c, [c - 2, c - 4, c + 2, S / 3], `Ortadaki sayı b = ${S} ÷ 3 = ${2 * m}. Ardışık çift sayılarda c = b + 2 = ${c}.`, r);
    },
    (r) => {
      const N = pick(r, [24, 36, 48, 60, 72, 90, 96, 120]);
      let best = Infinity, bx = 0;
      for (let x = 1; x <= N; x++) if (N % x === 0 && x + N / x < best) { best = x + N / x; bx = x; }
      return g(`x ve y pozitif tam sayılar ve x · y = ${N} ise x + y toplamı en az kaçtır?`, best, [N + 1, best + 2, best - 1, 2 * Math.round(Math.sqrt(N))], `Toplamın en küçük olması için çarpanlar birbirine en yakın seçilir: ${bx} · ${N / bx} = ${N}, toplam ${best}.`, r);
    }
  ],
  'Sayı Basamakları': [
    (r) => {
      const k = int(r, 1, 7); const A = int(r, k + 1, 9); const B = A - k;
      return g(`AB ve BA iki basamaklı sayılardır. AB − BA = ${9 * k} ise A − B kaçtır?`, k, [9 * k, k + 1, k - 1 || 9, 11 * k], `AB − BA = (10A + B) − (10B + A) = 9(A − B) = ${9 * k} → A − B = ${k}. (Örnek: ${A}${B} − ${B}${A})`, r);
    },
    (r) => {
      const k = int(r, 5, 17);
      return g(`AB ve BA iki basamaklı sayılardır. AB + BA = ${11 * k} ise A + B kaçtır?`, k, [11 * k, k + 1, k - 1, 2 * k], `AB + BA = 11(A + B) = ${11 * k} → A + B = ${k}.`, r);
    }
  ],
  'Bölme ve Bölünebilme': [
    (r) => {
      const m = pick(r, [5, 6, 7, 8, 9, 11]); const k = int(r, 1, m - 1); const a = int(r, 2, 9); const b = int(r, 1, 9);
      const ans = (a * k + b) % m;
      return g(`x sayısı ${m} ile bölündüğünde kalan ${k} oluyor. ${a}x + ${b} sayısı ${m} ile bölündüğünde kalan kaç olur?`, ans, [a * k + b, (ans + 1) % m, (a + b) % m, k], `Kalanlarla işlem yapılır: ${a} · ${k} + ${b} = ${a * k + b}; ${a * k + b} sayısının ${m} ile bölümünden kalan ${ans}.`, r);
    },
    (r) => {
      // 4 basamaklı 3A52 sayısı 9 ile bölünebiliyorsa A
      const b = int(r, 1, 9), c = int(r, 0, 9), d = int(r, 0, 9);
      const A = (9 - ((b + c + d) % 9)) % 9;
      return g(`Dört basamaklı ${b}A${c}${d} sayısı 9 ile tam bölünebiliyorsa A rakamı kaçtır? (A ≠ 9)`, A, [(A + 3) % 9, (A + 1) % 9, 9 - A === A ? (A + 2) % 9 : 9 - A, (A + 5) % 9], `9 ile bölünebilme için rakamlar toplamı 9’un katı olmalı: ${b} + A + ${c} + ${d} = ${b + c + d} + A → A = ${A}.`, r);
    }
  ],
  'EBOB – EKOK': [
    (r) => {
      const a = pick(r, [8, 10, 12, 15, 18, 20, 24]); let b = pick(r, [6, 9, 14, 16, 30, 36, 40]); if (b === a) b += 2;
      const L = lcm(a, b);
      return g(`Bir duraktan A otobüsü ${a} dakikada bir, B otobüsü ${b} dakikada bir kalkıyor. İkisi saat 08.00’de birlikte kalktıktan en az kaç dakika sonra yeniden birlikte kalkarlar?`, L, [a * b, gcd(a, b), L / 2, a + b], `Birlikte kalkış için iki sürenin ortak katı gerekir: EKOK(${a}, ${b}) = ${L} dakika.`, r);
    },
    (r) => {
      const k = pick(r, [6, 8, 9, 12, 15]); const x = pick(r, [2, 3, 4]); let y = pick(r, [3, 5, 7]); if (gcd(x, y) !== 1) y = 5;
      const a = k * x, b = k * y;
      return g(`Kenarları ${a} cm ve ${b} cm olan dikdörtgen biçimindeki bir kâğıt, hiç artmayacak şekilde eş karelere bölünecektir. Karenin bir kenarı en çok kaç cm olabilir?`, k, [lcm(a, b), k / 2 > 1 ? k / 2 : k + 3, a - b > 0 ? a - b : b - a, x * y], `Karenin kenarı iki kenarı da tam bölmeli ve en büyük olmalı: EBOB(${a}, ${b}) = ${k}.`, r);
    }
  ],
  'Rasyonel Sayılar': [
    (r) => {
      const a = new Frac(int(r, 1, 5), int(r, 2, 6)), b = new Frac(int(r, 1, 5), int(r, 2, 7));
      let c = new Frac(int(r, 1, 4), int(r, 2, 5)); if (c.d === 1) c = new Frac(c.n, c.n + 1);
      const ans = a.add(b).div(c);
      const w = [a.add(b).mul(c), a.add(b.div(c)), new Frac(a.n + b.n, a.d + b.d).div(c), ans.add(new Frac(1))];
      return { stem: `(${a} + ${b}) ÷ ${c} işleminin sonucu kaçtır?`, ...choices(r, ans.toString(), w.map(String), (i) => ans.add(new Frac(i, ans.d * 2)).toString()), solution: `${a} + ${b} = ${a.add(b)}; bölme işleminde ikinci kesir ters çevrilip çarpılır: ${a.add(b)} · ${new Frac(c.d, c.n)} = ${ans}.` };
    }
  ],
  'Basit Eşitsizlikler': [
    (r) => {
      const lo = int(r, -6, -1), hi = int(r, 3, 9); const a = int(r, 2, 4), b = int(r, 1, 7);
      const max = a * (hi - 1) - b, min = a * (lo + 1) - b;
      return g(`${num(lo)} < x < ${hi} olmak üzere x bir tam sayıdır. ${a}x − ${b} ifadesinin alabileceği en büyük değer ile en küçük değerin toplamı kaçtır?`, max + min, [a * hi - b + a * lo - b, max, min, max - min], `x tam sayı: en büyük x = ${hi - 1}, en küçük x = ${lo + 1}. En büyük değer ${max}, en küçük değer ${min}; toplam ${max + min}.`, r);
    }
  ],
  'Mutlak Değer': [
    (r) => {
      const a = int(r, 1, 9), b = int(r, 2, 9);
      return g(`|x − ${a}| = ${b} denklemini sağlayan x değerlerinin toplamı kaçtır?`, 2 * a, [a, b, 2 * b, a + b], `x − ${a} = ${b} → x = ${a + b}; x − ${a} = −${b} → x = ${a - b}. Toplam ${2 * a}.`, r);
    },
    (r) => {
      const a = int(r, 1, 6), b = int(r, 1, 6);
      const n = 2 * b + 1;
      return g(`|x − ${a}| ≤ ${b} eşitsizliğini sağlayan kaç tane x tam sayısı vardır?`, n, [2 * b, b + 1, n + 1, 2 * a + 1 === n ? n + 2 : 2 * a + 1], `−${b} ≤ x − ${a} ≤ ${b} → ${a - b} ≤ x ≤ ${a + b}. Bu aralıkta ${n} tam sayı var.`, r);
    }
  ],
  'Üslü Sayılar': [
    (r) => {
      const a = int(r, 2, 7), b = int(r, 1, 4), c = int(r, 1, 5);
      const e = a + 3 * b - 2 * c;
      return { stem: `{2^{${a}} · 8^{${b}}/4^{${c}}} ifadesi 2’nin kaçıncı kuvvetine eşittir?`, ...numChoices(r, e, [a + b - c, a + 3 * b + 2 * c, a * 3 * b - 2 * c, a + 8 * b - 4 * c]), solution: `8 = 2^{3}, 4 = 2^{2}: 2^{${a}} · 2^{${3 * b}} ÷ 2^{${2 * c}} = 2^{${a} + ${3 * b} − ${2 * c}} = 2^{${e}}.` };
    }
  ],
  'Köklü Sayılar': [
    (r) => {
      const m = pick(r, [2, 3, 5]); const ks = [int(r, 2, 3), int(r, 2, 4), int(r, 3, 5)];
      const parts = ks.map((k) => k * k * m);
      const s = ks.reduce((a, b) => a + b, 0);
      return { stem: `√{${parts[0]}} + √{${parts[1]}} + √{${parts[2]}} toplamı kaçtır?`, ...choices(r, `${s}√{${m}}`, [`${s + 1}√{${m}}`, `√{${parts.reduce((a, b) => a + b, 0)}}`, `${s * m}`, `${s - 1}√{${m}}`], (i) => `${s + i + 1}√{${m}}`), solution: ks.map((k, i) => `√{${parts[i]}} = ${k}√{${m}}`).join(', ') + `. Toplam ${s}√{${m}}.` };
    }
  ],
  'Çarpanlara Ayırma': [
    (r) => {
      const a = int(r, 1, 9), b = int(r, 1, 9); const s = a + b, p = a * b;
      return g(`a + b = ${s} ve a · b = ${p} ise a² + b² kaçtır?`, s * s - 2 * p, [s * s, s * s + 2 * p, s * s - p, 2 * s - p], `a² + b² = (a + b)² − 2ab = ${s * s} − ${2 * p} = ${s * s - 2 * p}.`, r);
    },
    (r) => {
      const x = int(r, 6, 15), y = int(r, 1, x - 2);
      return g(`x² − y² = ${x * x - y * y} ve x − y = ${x - y} ise x + y kaçtır?`, x + y, [x * x - y * y - (x - y), x, (x - y) * 2, x + y + 2], `x² − y² = (x − y)(x + y) → ${x * x - y * y} = ${x - y} · (x + y) → x + y = ${x + y}.`, r);
    }
  ],
  'Oran – Orantı': [
    (r) => {
      const p = int(r, 2, 5), q = int(r, p + 1, 9); const k = int(r, 2, 8);
      return g(`{a/b} = {${p}/${q}} ve a + b = ${(p + q) * k} ise b kaçtır?`, q * k, [p * k, (p + q) * k - p, q * (k + 1), (q - p) * k], `a = ${p}k, b = ${q}k → ${p + q}k = ${(p + q) * k} → k = ${k}, b = ${q * k}.`, r);
    },
    (r) => {
      const n = int(r, 4, 9), d = int(r, 6, 15); const m = n * int(r, 2, 3);
      const ans = (n * d) / (n * d % m === 0 ? m : m) ;
      const days = (n * d) / m;
      if (!Number.isInteger(days)) return TYT_MAT['Oran – Orantı']![0]!(r);
      return g(`Aynı hızda çalışan ${n} işçi bir işi ${d} günde bitiriyor. Aynı işi ${m} işçi kaç günde bitirir?`, days, [d * m / n, d - (m - n), ans * 2, d + (m - n)], `İşçi sayısı ile süre ters orantılıdır: ${n} · ${d} = ${m} · t → t = ${days}.`, r);
    }
  ],
  'Denklem Çözme': [
    (r) => {
      const x = int(r, 1, 12), a = int(r, 3, 6), b = int(r, 1, 5), c = int(r, 1, 9); const d = int(r, 1, a - 1);
      const e = a * (x - b) + c - d * x;
      return g(`${a}(x − ${b}) + ${c} = ${d}x ${e >= 0 ? '+' : '−'} ${Math.abs(e)} denkleminin çözümü kaçtır?`, x, [x + 1, x - 1, x + b, -x], `${a}x − ${a * b} + ${c} = ${d}x ${e >= 0 ? '+' : '−'} ${Math.abs(e)} → ${a - d}x = ${e + a * b - c} → x = ${x}.`, r);
    }
  ],
  'Sayı ve Kesir Problemleri': [
    (r) => {
      const d = pick(r, [3, 4, 5]); const n = int(r, 1, d - 1); const k = int(r, 3, 12); const x = d * k; const add = int(r, 5, 20);
      return g(`x sayısının {${n}/${d}} ile çarpımının ${add} fazlası ${n * k + add} ise x kaçtır?`, x, [n * k, (n * k + add) * d / n, x + add, x - d], `{${n}/${d}} · x + ${add} = ${n * k + add} → {${n}/${d}}x = ${n * k} → x = ${x}.`, r);
    }
  ],
  'Yaş Problemleri': [
    (r) => {
      // anne = k·çocuk; t yıl sonra anne = j·(çocuk + t)
      for (;;) {
        const k = int(r, 3, 5), j = int(r, 2, k - 1), t = pick(r, [4, 5, 6, 8, 10, 12]);
        const c = (t * (j - 1)) / (k - j);
        if (!Number.isInteger(c) || c < 3 || c > 15) continue;
        const m = k * c;
        return g(`Bir annenin yaşı çocuğunun yaşının ${k} katıdır. ${t} yıl sonra annenin yaşı çocuğunun yaşının ${j} katı olacaktır. Anne bugün kaç yaşındadır?`, m, [c, m + t, j * c, m - t], `Çocuk x, anne ${k}x: ${k}x + ${t} = ${j}(x + ${t}) → ${k}x + ${t} = ${j}x + ${j * t} → x = ${c}; anne ${m}.`, r);
      }
    }
  ],
  'Hareket Problemleri': [
    (r) => {
      const v1 = pick(r, [40, 50, 60, 70, 80]), v2 = pick(r, [30, 45, 50, 60, 90]), t = int(r, 2, 5);
      const D = (v1 + v2) * t;
      return g(`Aralarında ${D} km olan iki araç birbirine doğru aynı anda ${v1} km/sa ve ${v2} km/sa hızlarla yola çıkıyor. Kaç saat sonra karşılaşırlar?`, t, [D / v1, t + 1, t - 1 || t + 2, D / (Math.abs(v1 - v2) || 1)], `Birbirine doğru hareket eden araçların yaklaşma hızı ${v1} + ${v2} = ${v1 + v2} km/sa. Süre = ${D} ÷ ${v1 + v2} = ${t} saat.`, r);
    }
  ],
  'İşçi ve Havuz Problemleri': [
    (r) => {
      const [a, b] = pick(r, [[3, 6], [4, 12], [6, 12], [10, 15], [12, 24], [6, 3 * 1], [20, 30], [12, 4]] as [number, number][]);
      const t = (a * b) / (a + b);
      return g(`Ali bir işi tek başına ${a} günde, Berk aynı işi tek başına ${b} günde bitiriyor. İkisi birlikte bu işi kaç günde bitirir?`, t, [(a + b) / 2, a + b, Math.abs(a - b), Math.min(a, b) - 1], `Bir günde yapılan iş: {1/${a}} + {1/${b}} = {${a + b}/${a * b}}. Süre = {${a * b}/${a + b}} = ${t} gün.`, r);
    }
  ],
  'Yüzde, Kâr – Zarar Problemleri': [
    (r) => {
      const M = pick(r, [200, 250, 400, 500, 800, 1200]), p = pick(r, [10, 20, 25, 30, 40, 50]);
      const S = (M * (100 + p)) / 100;
      return g(`Maliyeti ${M} TL olan bir ürün %${p} kârla satılıyor. Satış fiyatı kaç TL’dir?`, S, [M + p, (M * (100 - p)) / 100, (M * p) / 100, S + M / 10], `Kâr = ${M} · {${p}/100} = ${M * p / 100} TL. Satış fiyatı ${M} + ${M * p / 100} = ${S} TL.`, r);
    },
    (r) => {
      const F = pick(r, [400, 500, 800, 1000, 2000]), a = pick(r, [10, 20, 25]), b = pick(r, [10, 20, 50]);
      const F1 = (F * (100 - a)) / 100; const S = (F1 * (100 - b)) / 100;
      return g(`Etiket fiyatı ${F} TL olan bir ürüne önce %${a}, sonra kalan fiyat üzerinden %${b} indirim yapılıyor. Ürünün son fiyatı kaç TL’dir?`, S, [(F * (100 - a - b)) / 100, F1, (F * (a + b)) / 100, S + 10], `İlk indirimden sonra ${F} · {${100 - a}/100} = ${num(F1)} TL; ikinci indirimden sonra ${num(F1)} · {${100 - b}/100} = ${num(S)} TL. İndirimler toplanmaz.`, r);
    }
  ],
  'Karışım Problemleri': [
    (r) => {
      for (;;) {
        const a = pick(r, [10, 20, 30, 40]), b = pick(r, [5, 15, 25, 50, 60]), x = pick(r, [100, 200, 300, 400]), y = pick(r, [100, 200, 300]);
        const p = (a * x + b * y) / (x + y);
        if (!Number.isInteger(p) || a === b) continue;
        return g(`Tuz oranı %${a} olan ${x} gram tuzlu su ile tuz oranı %${b} olan ${y} gram tuzlu su karıştırılıyor. Yeni karışımın tuz oranı yüzde kaçtır?`, p, [(a + b) / 2, a + b, Math.max(a, b), p + 5], `Tuz miktarları: ${x} · {${a}/100} = ${a * x / 100} g ve ${y} · {${b}/100} = ${b * y / 100} g. Toplam ${(a * x + b * y) / 100} g tuz, ${x + y} g karışım → %${p}.`, r);
      }
    }
  ],
  'Kümeler ve Kartezyen Çarpım': [
    (r) => {
      const c = int(r, 2, 6), a = c + int(r, 2, 8), b = c + int(r, 2, 8);
      return g(`s(A) = ${a}, s(B) = ${b} ve s(A ∩ B) = ${c} ise s(A ∪ B) kaçtır?`, a + b - c, [a + b, a + b - 2 * c, a + b + c, a * b], `s(A ∪ B) = s(A) + s(B) − s(A ∩ B) = ${a} + ${b} − ${c} = ${a + b - c}.`, r);
    },
    (r) => {
      const n = int(r, 3, 7);
      return g(`${n} elemanlı bir kümenin kaç tane alt kümesi vardır?`, 2 ** n, [2 * n, n * n, 2 ** n - 1, 2 ** (n - 1)], `n elemanlı kümenin alt küme sayısı 2^{n}: 2^{${n}} = ${2 ** n}. (Boş küme ve kümenin kendisi de sayılır.)`, r);
    }
  ],
  'Fonksiyonlar': [
    (r) => {
      const a = int(r, 2, 5), b = int(r, -6, 8), x1 = int(r, 1, 3), x2 = int(r, 4, 6), x3 = int(r, 7, 12);
      return g(`f doğrusal bir fonksiyondur. f(${x1}) = ${num(a * x1 + b)} ve f(${x2}) = ${num(a * x2 + b)} ise f(${x3}) kaçtır?`, a * x3 + b, [a * x3, a * x3 - b, (a + 1) * x3 + b, a * x2 + b + x3], `f(x) = ax + b: a = (${num(a * x2 + b)} − ${num(a * x1 + b)}) ÷ (${x2} − ${x1}) = ${a}, b = ${num(b)}. f(${x3}) = ${a} · ${x3} ${b >= 0 ? '+' : '−'} ${Math.abs(b)} = ${num(a * x3 + b)}.`, r);
    },
    (r) => {
      const a = int(r, 2, 4), b = int(r, 1, 5), c = int(r, 1, 3), d = int(r, -3, 4), x = int(r, 1, 3);
      const inner = c * x + d; const ans = a * inner + b;
      return g(`f(x) = ${a}x + ${b} ve g(x) = ${c}x ${d >= 0 ? '+' : '−'} ${Math.abs(d)} ise (f ∘ g)(${x}) kaçtır?`, ans, [c * (a * x + b) + d, a * x + b + inner, a * c * x, ans + a], `Önce g(${x}) = ${num(inner)}, sonra f(${num(inner)}) = ${a} · ${num(inner)} + ${b} = ${num(ans)}.`, r);
    }
  ],
  'Polinomlar': [
    (r) => {
      const b = int(r, -4, 4), d = int(r, -5, 6), a = int(r, -5, 8), k = pick(r, [1, 2, -1]);
      const R = k ** 3 + b * k * k + a * k + d;
      return g(`P(x) = x³ ${b >= 0 ? '+' : '−'} ${Math.abs(b)}x² + ax ${d >= 0 ? '+' : '−'} ${Math.abs(d)} polinomunun x ${k >= 0 ? '−' : '+'} ${Math.abs(k)} ile bölümünden kalan ${num(R)} ise a kaçtır?`, a, [a + 1, -a, R - d, a - 2], `x ${k >= 0 ? '−' : '+'} ${Math.abs(k)} ile bölümden kalan P(${num(k)}) değeridir: ${num(k ** 3)} ${b * k * k >= 0 ? '+' : '−'} ${Math.abs(b * k * k)} ${k > 0 ? '+' : '−'} ${Math.abs(k) === 1 ? '' : Math.abs(k)}a ${d >= 0 ? '+' : '−'} ${Math.abs(d)} = ${num(R)} → a = ${a}.`, r);
    }
  ],
  'İkinci Dereceden Denklemler': [
    (r) => {
      const x1 = int(r, 1, 6), x2 = int(r, 1, 7); const s = x1 + x2, p = x1 * x2;
      return { stem: `x² − ${s}x + ${p} = 0 denkleminin kökleri x₁ ve x₂ ise {1/x₁} + {1/x₂} kaçtır?`, ...choices(r, new Frac(s, p).toString(), [new Frac(p, s).toString(), String(s + p), new Frac(1, s).toString(), new Frac(s, p * 2).toString()], (i) => new Frac(s + i, p).toString()), solution: `{1/x₁} + {1/x₂} = {x₁ + x₂/x₁ · x₂}. Kökler toplamı ${s}, çarpımı ${p} → ${new Frac(s, p)}.` };
    }
  ],
  'Permütasyon ve Kombinasyon': [
    (r) => {
      const n = int(r, 5, 9), k = int(r, 2, 3);
      const C = (a: number, b: number) => { let x = 1; for (let i = 0; i < b; i++) x = (x * (a - i)) / (i + 1); return x; };
      const P = (a: number, b: number) => { let x = 1; for (let i = 0; i < b; i++) x *= a - i; return x; };
      return g(`${n} kişilik bir sınıftan ${k} kişilik bir temsilci grubu kaç farklı şekilde seçilebilir?`, C(n, k), [P(n, k), n * k, C(n, k - 1), C(n, k) * 2], `Sıra önemli değil: C(${n}, ${k}) = {${P(n, k)}/${P(k, k)}} = ${C(n, k)}.`, r);
    },
    (r) => {
      const n = int(r, 4, 6); const f = (m: number): number => (m <= 1 ? 1 : m * f(m - 1));
      return g(`${n} farklı kitap bir rafa yan yana dizilecektir. Belirli iki kitabın yan yana olduğu kaç farklı dizilim vardır?`, 2 * f(n - 1), [f(n), f(n - 1), f(n) - 2 * f(n - 1), 2 * f(n - 2)], `İki kitabı tek kitap gibi düşün: ${n - 1} nesne ${n - 1}! = ${f(n - 1)} şekilde dizilir; ikisi kendi arasında 2 şekilde yer değiştirir: 2 · ${f(n - 1)} = ${2 * f(n - 1)}.`, r);
    }
  ],
  'Olasılık': [
    (r) => {
      const a = int(r, 2, 7), b = int(r, 2, 7);
      const ans = new Frac(a, a + b);
      return { stem: `Bir torbada ${a} kırmızı ve ${b} mavi top vardır. Torbadan rastgele çekilen bir topun kırmızı olma olasılığı kaçtır?`, ...choices(r, ans.toString(), [new Frac(b, a + b).toString(), new Frac(a, b).toString(), new Frac(1, a + b).toString(), new Frac(1, 2).toString()], (i) => new Frac(a + i, a + b + i).toString()), solution: `İstenen durum ${a}, bütün durumlar ${a + b}: olasılık ${ans}.` };
    },
    (r) => {
      const a = int(r, 3, 6), b = int(r, 2, 5);
      const ans = new Frac(a * (a - 1), (a + b) * (a + b - 1));
      return { stem: `Bir torbada ${a} kırmızı ve ${b} mavi top vardır. Torbadan art arda, geri atılmadan iki top çekiliyor. İkisinin de kırmızı olma olasılığı kaçtır?`, ...choices(r, ans.toString(), [new Frac(a * a, (a + b) ** 2).toString(), new Frac(a, a + b).toString(), new Frac(a - 1, a + b - 1).toString(), new Frac(2 * a, a + b).toString()], (i) => new Frac(a * (a - 1) + i, (a + b) * (a + b - 1)).toString()), solution: `İlk çekişte {${a}/${a + b}}, ikincide {${a - 1}/${a + b - 1}}: çarpım ${ans}.` };
    }
  ],
  'Veri ve İstatistik': [
    (r) => {
      const xs = Array.from({ length: 5 }, () => int(r, 2, 20));
      const sum = xs.reduce((a, b) => a + b, 0); const adj = (5 - (sum % 5)) % 5; xs[4] = xs[4]! + adj;
      const mean = (sum + adj) / 5; const sorted = [...xs].sort((a, b) => a - b); const med = sorted[2]!; const range = sorted[4]! - sorted[0]!;
      return g(`${xs.join(', ')} veri grubunun aritmetik ortalaması ile açıklığının toplamı kaçtır?`, mean + range, [mean + med, med + range, mean, sum + adj], `Ortalama ${sum + adj} ÷ 5 = ${mean}; açıklık en büyük − en küçük = ${sorted[4]} − ${sorted[0]} = ${range}. Toplam ${mean + range}.`, r);
    }
  ],

  /* ---- Geometri ---- */
  'Doğruda ve Üçgende Açılar': [
    (r) => {
      for (;;) {
        const [a, b, c] = [int(r, 1, 5), int(r, 1, 6), int(r, 2, 7)]; const s = a + b + c;
        if (180 % s !== 0) continue;
        const x = 180 / s;
        return g(`Bir üçgenin iç açılarının ölçüleri ${a}x, ${b}x ve ${c}x’tir. En büyük açının ölçüsü kaç derecedir?`, Math.max(a, b, c) * x, [x, Math.min(a, b, c) * x, 180 - Math.max(a, b, c) * x, 90], `${a}x + ${b}x + ${c}x = 180° → x = ${x}°. En büyük açı ${Math.max(a, b, c)} · ${x} = ${Math.max(a, b, c) * x}°.`, r);
      }
    }
  ],
  'Dik ve Özel Üçgenler': [
    (r) => {
      const [p, q, h] = pick(r, [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [6, 8, 10], [9, 12, 15]] as [number, number, number][]); const k = pick(r, [1, 2, 3]);
      return g(`Dik kenarları ${p * k} cm ve ${q * k} cm olan dik üçgenin hipotenüsü kaç cm’dir?`, h * k, [(p + q) * k, h * k + 1, q * k + 1, h * k - 2], `Pisagor: ${p * k}² + ${q * k}² = ${(p * k) ** 2 + (q * k) ** 2} = ${h * k}² → hipotenüs ${h * k} cm.`, r);
    }
  ],
  'Üçgende Alan': [
    (r) => {
      const a = int(r, 4, 16), h = 2 * int(r, 2, 9);
      return g(`Bir kenarı ${a} cm ve bu kenara ait yüksekliği ${h} cm olan üçgenin alanı kaç cm²’dir?`, (a * h) / 2, [a * h, a + h, (a * h) / 4, (a + h) * 2], `Alan = {taban · yükseklik/2} = {${a} · ${h}/2} = ${(a * h) / 2} cm².`, r);
    }
  ],
  'Üçgende Benzerlik': [
    (r) => {
      const p = int(r, 1, 3), q = int(r, p + 1, 5); const A = p * p * int(r, 2, 6);
      const B = (A / (p * p)) * q * q;
      return g(`Benzerlik oranı {${p}/${q}} olan iki üçgenden küçüğünün alanı ${A} cm² ise büyüğünün alanı kaç cm²’dir?`, B, [(A * q) / p, A * q, B / 2, A + q * q], `Benzer üçgenlerde alanlar oranı benzerlik oranının karesidir: {${p * p}/${q * q}}. ${A} · {${q * q}/${p * p}} = ${B} cm².`, r);
    }
  ],
  'Çokgenler ve Dörtgenler': [
    (r) => {
      const n = pick(r, [5, 6, 8, 9, 10, 12]);
      return g(`Düzgün bir ${n}-genin bir iç açısı kaç derecedir?`, ((n - 2) * 180) / n, [360 / n, (n - 2) * 180, 180 - ((n - 2) * 180) / n === 360 / n ? 120 : 180 - ((n - 2) * 180) / n, (n * 180) / n], `İç açılar toplamı (n − 2) · 180° = ${(n - 2) * 180}°. Düzgün çokgende bir iç açı ${(n - 2) * 180} ÷ ${n} = ${((n - 2) * 180) / n}°.`, r);
    },
    (r) => {
      const n = int(r, 5, 12);
      return g(`${n} kenarlı bir çokgenin kaç köşegeni vardır?`, (n * (n - 3)) / 2, [n * (n - 3), n - 3, (n * (n - 1)) / 2, n], `Köşegen sayısı {n(n − 3)/2} = {${n} · ${n - 3}/2} = ${(n * (n - 3)) / 2}.`, r);
    }
  ],
  'Çember ve Daire': [
    (r) => {
      const rr = int(r, 2, 10);
      return g(`Yarıçapı ${rr} cm olan bir dairenin alanı kaç cm²’dir? (π = 3 alınız)`, 3 * rr * rr, [6 * rr, 3 * rr, 6 * rr * rr, 9 * rr], `Alan = πr² = 3 · ${rr}² = ${3 * rr * rr} cm². (Çevre 2πr = ${6 * rr} cm olurdu.)`, r);
    }
  ],
  'Noktanın ve Doğrunun Analitiği': [
    (r) => {
      const [dx, dy, d] = pick(r, [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 6, 10]] as [number, number, number][]);
      const x1 = int(r, -4, 4), y1 = int(r, -4, 4);
      return g(`A(${num(x1)}, ${num(y1)}) ve B(${num(x1 + dx)}, ${num(y1 + dy)}) noktaları arasındaki uzaklık kaç birimdir?`, d, [dx + dy, d * d, Math.abs(dx - dy) + d, d + 1], `|AB| = √{(${dx})² + (${dy})²} = √{${d * d}} = ${d}.`, r);
    },
    (r) => {
      const x1 = int(r, -3, 3), y1 = int(r, -3, 3), m = pick(r, [-3, -2, -1, 1, 2, 3]), dx = int(r, 1, 4);
      return { stem: `A(${num(x1)}, ${num(y1)}) ve B(${num(x1 + dx)}, ${num(y1 + m * dx)}) noktalarından geçen doğrunun eğimi kaçtır?`, ...numChoices(r, m, [-m, m * dx, dx, m === 1 ? 2 : 1 / m]), solution: `Eğim = {y₂ − y₁/x₂ − x₁} = {${num(m * dx)}/${dx}} = ${num(m)}.` };
    }
  ],
  'Katı Cisimler': [
    (r) => {
      const a = int(r, 2, 9), b = int(r, 2, 9), c = int(r, 2, 9);
      return g(`Ayrıt uzunlukları ${a} cm, ${b} cm ve ${c} cm olan dikdörtgenler prizmasının yüzey alanı kaç cm²’dir?`, 2 * (a * b + a * c + b * c), [a * b * c, a * b + a * c + b * c, 4 * (a + b + c), 2 * a * b * c], `Yüzey alanı = 2(ab + ac + bc) = 2(${a * b} + ${a * c} + ${b * c}) = ${2 * (a * b + a * c + b * c)} cm². (Hacim ${a * b * c} cm³ olurdu.)`, r);
    },
    (r) => {
      const a = int(r, 2, 8);
      return g(`Bir ayrıtı ${a} cm olan küpün hacmi kaç cm³’tür?`, a ** 3, [6 * a * a, a * a, 12 * a, 3 * a], `Küpün hacmi a³ = ${a}³ = ${a ** 3} cm³.`, r);
    }
  ]
};
