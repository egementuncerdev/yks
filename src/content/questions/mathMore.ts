/* Ek matematik ve geometri üreticileri (TYT + AYT). Cevaplar kodla hesaplanır. */
import { Frac, gcd, int, lcm, num, numChoices, choices, pick, shuffle, type Generator, type Rnd } from './core';

const g = (r: Rnd, stem: string, correct: number, wrong: number[], solution: string) => ({ stem, ...numChoices(r, correct, wrong), solution });
const fq = (r: Rnd, stem: string, ans: Frac, wrong: Frac[], solution: string) =>
  ({ stem, ...choices(r, ans.toString(), wrong.map(String), (i) => ans.add(new Frac(i, ans.d + 1)).toString()), solution });
const sgn = (x: number) => (x >= 0 ? `+ ${x}` : `− ${-x}`);
const fact = (n: number): number => (n <= 1 ? 1 : n * fact(n - 1));
const C = (n: number, k: number) => { let x = 1; for (let i = 0; i < k; i++) x = (x * (n - i)) / (i + 1); return x; };
const P = (n: number, k: number) => { let x = 1; for (let i = 0; i < k; i++) x *= n - i; return x; };

export const MATH_MORE: Record<string, Record<string, Generator[]>> = {
  'tyt-mat': {
    'Temel Kavramlar': [
      (r) => {
        const a = int(r, 3, 9), b = int(r, 2, 8), c = int(r, 2, 6);
        const v = a * b - c * (a - b);
        return g(r, `a = ${a} ve b = ${b} için a · b − ${c}(a − b) ifadesinin değeri kaçtır?`, v, [a * b - c * a - b, a * b + c * (a - b), (a - c) * b, v + c], `${a} · ${b} − ${c} · (${a} − ${b}) = ${a * b} − ${c * (a - b)} = ${num(v)}.`);
      },
      (r) => {
        const n = int(r, 3, 9); const s = (n * (n + 1));
        return g(r, `1’den ${2 * n}’ye kadar olan çift sayıların toplamı kaçtır?`, s, [n * n, s / 2, s + 2 * n, 2 * n * n], `2 + 4 + … + ${2 * n} = 2(1 + 2 + … + ${n}) = 2 · {${n} · ${n + 1}/2} = ${s}.`);
      },
      (r) => {
        const a = int(r, 1, 9);
        const xs = [a, a + 1, a + 2, a + 3, a + 4];
        return g(r, `Ardışık beş doğal sayının toplamı ${5 * a + 10} ise en büyüğü kaçtır?`, a + 4, [a + 2, a, a + 5, a + 3], `Ortadaki sayı ${5 * a + 10} ÷ 5 = ${a + 2}; sayılar ${xs.join(', ')}. En büyüğü ${a + 4}.`);
      }
    ],
    'Sayı Basamakları': [
      (r) => {
        const a = int(r, 1, 9), b = int(r, 0, 9), c = int(r, 0, 9);
        return g(r, `${a}${b}${c} sayısının rakamlarının basamak değerleri toplamı kaçtır?`, a * 100 + b * 10 + c, [a + b + c, a * 100 + b + c, a + b * 10 + c * 100, a * 10 + b * 10 + c], `Basamak değerleri ${a * 100}, ${b * 10} ve ${c}; toplamları sayının kendisidir: ${a * 100 + b * 10 + c}.`);
      },
      (r) => {
        const d = pick(r, [3, 4]);
        const big = d === 3 ? 987 : 9876, small = d === 3 ? 102 : 1023;
        return g(r, `Rakamları birbirinden farklı ${d} basamaklı en büyük sayı ile en küçük sayının farkı kaçtır?`, big - small, [big - (d === 3 ? 100 : 1000), (d === 3 ? 999 : 9999) - small, big + small, big - small + 9], `En büyük: ${big}, en küçük: ${small} (ilk basamak 0 olamaz). Fark ${big - small}.`);
      }
    ],
    'Bölme ve Bölünebilme': [
      (r) => {
        const b = int(r, 4, 12), q = int(r, 3, 15), k = int(r, 1, b - 1);
        const a = b * q + k;
        return g(r, `Bir doğal sayı ${b} ile bölündüğünde bölüm ${q}, kalan ${k} oluyor. Bu sayı kaçtır?`, a, [b * q, b * q - k, b * (q + k), a + b], `Bölünen = bölen · bölüm + kalan = ${b} · ${q} + ${k} = ${a}.`);
      },
      (r) => {
        const a = int(r, 1, 9), b = int(r, 0, 9), n = int(r, 1, 9);
        return g(r, `Dört basamaklı ${n}${a}${b}A sayısı hem 2 hem 5 ile tam bölünebiliyorsa A kaçtır?`, 0, [5, 2, 1, 4], `Hem 2 hem 5 ile bölünebilen sayı 10 ile bölünür; son basamak 0 olmalı: A = 0.`);
      },
      (r) => {
        const a = int(r, 1, 9), b = int(r, 0, 9);
        const rem = (a * 10 + b) % 4;
        const A = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter((x) => (b * 10 + x) % 4 === 0);
        return g(r, `${a}${b}A üç basamaklı sayısı 4 ile tam bölünebiliyorsa A’nın alabileceği değerlerin toplamı kaçtır?`, A.reduce((s, x) => s + x, 0), [A.length, A.reduce((s, x) => s + x, 0) + 4, 20, 0 + rem], `4 ile bölünebilme için son iki basamak (${b}A) 4’ün katı olmalı: A ∈ {${A.join(', ')}}. Toplam ${A.reduce((s, x) => s + x, 0)}.`);
      }
    ],
    'EBOB – EKOK': [
      (r) => {
        const k = pick(r, [2, 3, 4, 5, 6]); const x = pick(r, [2, 3, 5]); let y = pick(r, [3, 4, 7]); if (gcd(x, y) !== 1) y = 7;
        const a = k * x, b = k * y;
        return g(r, `EBOB(${a}, ${b}) + EKOK(${a}, ${b}) kaçtır?`, k + lcm(a, b), [a * b, k * x * y, lcm(a, b), a + b], `EBOB = ${k}, EKOK = ${lcm(a, b)}. Toplam ${k + lcm(a, b)}.`);
      },
      (r) => {
        const a = pick(r, [12, 15, 18]), b = pick(r, [20, 24, 30]);
        const m = lcm(a, b);
        return g(r, `${a} ile de ${b} ile de bölündüğünde 3 kalanını veren, 3’ten büyük en küçük doğal sayı kaçtır?`, m + 3, [m, m - 3, a * b + 3, m + 6], `Sayı − 3, iki sayının ortak katıdır: EKOK(${a}, ${b}) = ${m}. En küçük sayı ${m} + 3 = ${m + 3}.`);
      }
    ],
    'Rasyonel Sayılar': [
      (r) => {
        let a = new Frac(int(r, 1, 4), int(r, 2, 5)), b = new Frac(int(r, 1, 4), int(r, 2, 5));
        if (a.d === 1) a = new Frac(a.n, a.n + 1); if (b.d === 1) b = new Frac(b.n, b.n + 2);
        const ans = a.mul(b).add(new Frac(1));
        return fq(r, `${a} · ${b} + 1 işleminin sonucu kaçtır?`, ans, [a.mul(b), a.add(b), a.mul(b.add(new Frac(1))), ans.add(new Frac(1))], `${a} · ${b} = ${a.mul(b)}; 1 eklenince ${ans}.`);
      },
      (r) => {
        const d = pick(r, [4, 5, 8, 10, 20, 25]); const n = int(r, 1, d - 1);
        const v = n / d;
        return g(r, `{${n}/${d}} kesrinin ondalık gösterimi kaçtır?`, v, [d / n, n / (d * 10), v * 10, Math.round((v + 0.1) * 100) / 100], `${n} ÷ ${d} = ${num(v)}.`);
      }
    ],
    'Basit Eşitsizlikler': [
      (r) => {
        const a = int(r, 2, 5), b = int(r, 1, 9), c = int(r, 10, 30);
        const lim = Math.floor((c - b - 1) / a);
        return g(r, `${a}x + ${b} < ${c} eşitsizliğini sağlayan en büyük x tam sayısı kaçtır?`, lim, [lim + 1, Math.floor((c + b) / a), lim - 1, Math.ceil((c - b) / a)], `${a}x < ${c - b} → x < {${c - b}/${a}} = ${num((c - b) / a)}. En büyük tam sayı ${lim}.`);
      }
    ],
    'Mutlak Değer': [
      (r) => {
        const a = int(r, -9, -1), b = int(r, 2, 9);
        return g(r, `|${num(a)}| + |${b} − ${b + 4}| − |${num(a + b)}| işleminin sonucu kaçtır?`, Math.abs(a) + 4 - Math.abs(a + b), [Math.abs(a) - 4 - Math.abs(a + b), a + 4 - (a + b), Math.abs(a) + 4 + Math.abs(a + b), 4], `|${num(a)}| = ${-a}, |${b} − ${b + 4}| = 4, |${num(a + b)}| = ${Math.abs(a + b)}. Sonuç ${-a} + 4 − ${Math.abs(a + b)} = ${num(Math.abs(a) + 4 - Math.abs(a + b))}.`);
      }
    ],
    'Üslü Sayılar': [
      (r) => {
        const a = int(r, 2, 5), n = int(r, 2, 4);
        return g(r, `${a} tane ${a}^{${n}} sayısının toplamı ${a}^{k} biçiminde yazılırsa k kaçtır?`, n + 1, [n, n * a, n + a, 2 * n], `${a} tane ${a}^{${n}} toplamı ${a} · ${a}^{${n}} = ${a}^{${n + 1}}.`);
      },
      (r) => {
        const x = int(r, 2, 5), base = pick(r, [2, 3]);
        const k = pick(r, [2, 3]);
        return g(r, `${base ** k}^{x} = ${base}^{${k * x + 0}} ise x kaçtır?`, x, [k * x, x + k, x - 1, k], `${base ** k} = ${base}^{${k}} → ${base}^{${k}x} = ${base}^{${k * x}} → ${k}x = ${k * x} → x = ${x}.`);
      },
      (r) => {
        const n = int(r, 2, 6);
        return g(r, `(−1)^{${2 * n}} + (−1)^{${2 * n + 1}} + 1^{${n}} toplamı kaçtır?`, 1, [3, -1, 0, 2], `Çift kuvvet 1, tek kuvvet −1 verir: 1 + (−1) + 1 = 1.`);
      }
    ],
    'Köklü Sayılar': [
      (r) => {
        const a = int(r, 2, 9), b = int(r, 2, 9);
        return g(r, `√{${a * a}} · √{${b * b}} − √{${a * a * b * b}} işleminin sonucu kaçtır?`, 0, [a * b, 2 * a * b, a + b, a * a * b * b], `√{${a * a}} = ${a}, √{${b * b}} = ${b}, √{${a * a * b * b}} = ${a * b}. ${a * b} − ${a * b} = 0.`);
      },
      (r) => {
        const m = pick(r, [2, 3, 5, 6, 7]); const k = int(r, 2, 6);
        return { stem: `√{${k * k * m}} ifadesinin en sade biçimi hangisidir?`, ...choices(r, `${k}√{${m}}`, [`${m}√{${k}}`, `${k * k}√{${m}}`, `${k}√{${m * k}}`, `√{${k}} · ${m}`], (i) => `${k + i}√{${m}}`), solution: `${k * k * m} = ${k * k} · ${m} → √{${k * k}} · √{${m}} = ${k}√{${m}}.` };
      }
    ],
    'Çarpanlara Ayırma': [
      (r) => {
        const a = int(r, 1, 9), b = int(r, 1, 9);
        return { stem: `x² + ${a + b}x + ${a * b} ifadesinin çarpanlarından biri hangisidir?`, ...choices(r, `x + ${a}`, [`x − ${a}`, `x + ${a + b}`, `x + ${a * b}`, `x − ${b}`].filter((s) => s !== `x + ${b}`), (i) => `x + ${a + b + i}`), solution: `Toplamı ${a + b}, çarpımı ${a * b} olan sayılar ${a} ve ${b}: (x + ${a})(x + ${b}).` };
      },
      (r) => {
        const a = int(r, 11, 59);
        return g(r, `${a}² − ${a - 1}² işleminin sonucu kaçtır?`, 2 * a - 1, [1, 2 * a, a * a, 2 * a + 1], `İki kare farkı: (${a} − ${a - 1})(${a} + ${a - 1}) = 1 · ${2 * a - 1} = ${2 * a - 1}.`);
      }
    ],
    'Oran – Orantı': [
      (r) => {
        const k = int(r, 2, 9); const [a, b, c] = [int(r, 1, 4), int(r, 2, 5), int(r, 3, 6)];
        return g(r, `Bir miktar para Ali, Burak ve Can arasında ${a}, ${b} ve ${c} ile orantılı paylaştırılıyor. Can, Ali’den ${(c - a) * k * 10} TL fazla aldığına göre toplam para kaç TL’dir?`, (a + b + c) * k * 10, [(c - a) * k * 10 * 3, (a + b + c) * k, c * k * 10, (a + b + c) * (k + 1) * 10], `Paylar ${a}k, ${b}k, ${c}k. ${c}k − ${a}k = ${(c - a) * k * 10} → k = ${k * 10}. Toplam ${a + b + c}k = ${(a + b + c) * k * 10} TL.`);
      }
    ],
    'Denklem Çözme': [
      (r) => {
        const x = int(r, 2, 12), y = int(r, 1, 9);
        return g(r, `x + y = ${x + y} ve x − y = ${x - y} ise x · y kaçtır?`, x * y, [x + y, x - y, x * x, (x + y) * (x - y)], `Taraf tarafa toplanırsa 2x = ${2 * x} → x = ${x}, y = ${y}. x · y = ${x * y}.`);
      },
      (r) => {
        const d = pick(r, [2, 3, 4, 5]); const x = d * int(r, 1, 6); const e = pick(r, [2, 3]); const a = int(r, 1, 8);
        const rhs = x / d + a;
        if (!Number.isInteger(rhs)) return MATH_MORE['tyt-mat']!['Denklem Çözme']![0]!(r);
        return g(r, `{x/${d}} + ${a} = ${rhs} ise ${e}x kaçtır?`, e * x, [x, x / d, e * (x + d), e * rhs], `{x/${d}} = ${rhs - a} → x = ${x} → ${e}x = ${e * x}.`);
      }
    ],
    'Sayı ve Kesir Problemleri': [
      (r) => {
        const n = pick(r, [2, 3, 4]); const total = n * pick(r, [6, 8, 10, 12, 15, 20]);
        const spent = total / n; const left = total - spent;
        return g(r, `Ayşe’nin ${total} TL’si vardı. Parasının {1/${n}}’ini harcadı. Kaç TL’si kaldı?`, left, [spent, total - n, total / (n + 1), left - spent], `Harcanan {1/${n}} · ${total} = ${spent} TL. Kalan ${total} − ${spent} = ${left} TL.`);
      },
      (r) => {
        const a = int(r, 3, 12), d = int(r, 1, 6);
        return g(r, `İki sayının toplamı ${2 * a + d}, farkı ${d} ise büyük sayı kaçtır?`, a + d, [a, 2 * a, a + 2 * d, d], `Büyük sayı = (toplam + fark) ÷ 2 = (${2 * a + d} + ${d}) ÷ 2 = ${a + d}.`);
      }
    ],
    'Yaş Problemleri': [
      (r) => {
        const s = int(r, 30, 60); const n = int(r, 2, 4); const t = int(r, 3, 8);
        return g(r, `Bugün yaşları toplamı ${s} olan ${n} kardeşin ${t} yıl sonra yaşları toplamı kaç olur?`, s + n * t, [s + t, s * t, s + n + t, s + (n - 1) * t], `Her kardeş ${t} yaş büyür: ${s} + ${n} · ${t} = ${s + n * t}.`);
      }
    ],
    'Hareket Problemleri': [
      (r) => {
        const v = pick(r, [60, 70, 80, 90, 100]), t = pick(r, [2, 3, 4, 5]);
        return g(r, `Sabit ${v} km/sa hızla giden bir otomobil ${t} saatte kaç km yol alır?`, v * t, [v + t, v / t, v * (t + 1), v * t / 2], `Yol = hız · zaman = ${v} · ${t} = ${v * t} km.`);
      },
      (r) => {
        const v1 = pick(r, [50, 60, 70]), v2 = v1 + pick(r, [10, 20, 30]), t = int(r, 2, 6);
        const gap = (v2 - v1) * t;
        return g(r, `Aynı noktadan aynı yöne aynı anda ${v1} km/sa ve ${v2} km/sa hızlarla iki araç hareket ediyor. ${t} saat sonra aralarındaki uzaklık kaç km olur?`, gap, [(v1 + v2) * t, v2 * t, gap / 2, v2 - v1], `Aynı yönde uzaklaşma hızı ${v2} − ${v1} = ${v2 - v1} km/sa. ${t} saatte ${gap} km.`);
      },
      (r) => {
        const D = pick(r, [120, 180, 240, 300]); const v = pick(r, [40, 60]); const w = v * 2;
        const t = D / v + D / w;
        return g(r, `Bir araç ${D} km’lik yolu ${v} km/sa hızla gidip ${w} km/sa hızla dönüyor. Gidiş-dönüş toplam kaç saat sürer?`, t, [(2 * D) / ((v + w) / 2), D / v, D / w, t + 1], `Gidiş ${D} ÷ ${v} = ${D / v} saat, dönüş ${D} ÷ ${w} = ${D / w} saat. Toplam ${num(t)} saat. (Hızların ortalaması kullanılamaz.)`);
      }
    ],
    'İşçi ve Havuz Problemleri': [
      (r) => {
        const [a, b] = pick(r, [[6, 12], [4, 12], [10, 15], [12, 24], [20, 30], [8, 24], [3, 6]] as [number, number][]);
        const fill = (a * b) / (b - a);
        return g(r, `Bir musluk boş havuzu ${a} saatte dolduruyor, alttaki bir delik dolu havuzu ${b} saatte boşaltıyor. İkisi birlikte açılırsa boş havuz kaç saatte dolar?`, fill, [(a * b) / (a + b), b - a, a + b, fill / 2], `Saatte dolan kısım {1/${a}} − {1/${b}} = {${b - a}/${a * b}}. Süre {${a * b}/${b - a}} = ${num(fill)} saat.`);
      }
    ],
    'Yüzde, Kâr – Zarar Problemleri': [
      (r) => {
        const n = pick(r, [200, 300, 400, 500, 800, 1200]), p = pick(r, [5, 10, 15, 20, 25, 30, 40]);
        return g(r, `${n} sayısının yüzde ${p} oranındaki kısmı kaçtır?`, (n * p) / 100, [n * p, n / p, (n * (100 - p)) / 100, (n * p) / 10], `${n} · {${p}/100} = ${(n * p) / 100}.`);
      },
      (r) => {
        const M = pick(r, [100, 200, 400, 500]), p = pick(r, [10, 20, 25, 50]);
        const S = (M * (100 - p)) / 100;
        return g(r, `Bir ürün ${S} TL’ye satıldığında %${p} zarar ediliyor. Ürünün maliyeti kaç TL’dir?`, M, [S + p, (S * (100 + p)) / 100, S - (S * p) / 100, M + p], `Zararla satışta fiyat, maliyetin yüzde ${100 - p} oranındadır: M · {${100 - p}/100} = ${S} → M = ${M} TL.`);
      }
    ],
    'Karışım Problemleri': [
      (r) => {
        const x = pick(r, [200, 300, 400, 500]), p = pick(r, [10, 20, 25, 30]);
        const salt = (x * p) / 100;
        return g(r, `Tuz oranı %${p} olan ${x} gram tuzlu suda kaç gram su vardır?`, x - salt, [salt, x, x + salt, x - 2 * salt], `Tuz ${x} · {${p}/100} = ${salt} g; su ${x} − ${salt} = ${x - salt} g.`);
      }
    ],
    'Kümeler ve Kartezyen Çarpım': [
      (r) => {
        const a = int(r, 2, 5), b = int(r, 2, 5);
        return g(r, `s(A) = ${a} ve s(B) = ${b} ise A × B kartezyen çarpımının eleman sayısı kaçtır?`, a * b, [a + b, 2 ** (a + b), a * b * 2, 2 ** a * 2 ** b === a * b ? 1 : a ** b], `s(A × B) = s(A) · s(B) = ${a} · ${b} = ${a * b}.`);
      },
      (r) => {
        const n = int(r, 3, 7), k = int(r, 1, 2);
        return g(r, `${n} elemanlı bir kümenin ${k} elemanlı kaç alt kümesi vardır?`, C(n, k), [2 ** n, n * k, P(n, k), C(n, k) + 1], `C(${n}, ${k}) = ${C(n, k)}.`);
      }
    ],
    'Mantık': [
      (r) => {
        const cases = [
          { e: 'p ∧ q', v: (p: boolean, q: boolean) => p && q },
          { e: 'p ∨ q', v: (p: boolean, q: boolean) => p || q },
          { e: 'p ⇒ q', v: (p: boolean, q: boolean) => !p || q },
          { e: 'p ⇔ q', v: (p: boolean, q: boolean) => p === q },
          { e: 'p′ ∨ q', v: (p: boolean, q: boolean) => !p || q },
          { e: 'p ∧ q′', v: (p: boolean, q: boolean) => p && !q }
        ];
        const pv = r() < 0.5, qv = r() < 0.5;
        const T = (b: boolean) => (b ? '1' : '0');
        const truths = cases.map((c) => ({ e: c.e, t: c.v(pv, qv) }));
        const one = truths.filter((x) => x.t), zero = truths.filter((x) => !x.t);
        const ask = zero.length >= 4 && one.length ? 1 : one.length >= 4 && zero.length ? 0 : -1;
        if (ask < 0) return MATH_MORE['tyt-mat']!['Mantık']![0]!(r);
        const ans = pick(r, ask ? one : zero);
        return { stem: `p ≡ ${T(pv)} ve q ≡ ${T(qv)} olduğuna göre aşağıdaki önermelerden hangisinin doğruluk değeri ${ask}’dır?`.replace('1’dır', '1’dir').replace('0’dır', '0’dır'), ...choices(r, ans.e, (ask ? zero : one).map((x) => x.e)), solution: `p = ${T(pv)}, q = ${T(qv)} için ${ans.e} ≡ ${ask}; diğer şıkların değeri ${1 - ask}. (p ⇒ q yalnız 1 ⇒ 0 durumunda 0’dır; p ⇔ q iki taraf aynıysa 1’dir.)` };
      }
    ],
    'Fonksiyonlar': [
      (r) => {
        const a = int(r, 2, 5), b = int(r, 1, 9);
        const y = int(r, 10, 40);
        const x = new Frac(y - b, a);
        return fq(r, `f(x) = ${a}x + ${b} ise f⁻¹(${y}) kaçtır?`, x, [new Frac(a * y + b), new Frac(y + b, a), new Frac(y - b), new Frac(y, a)], `f⁻¹(x) = {x − ${b}/${a}} → f⁻¹(${y}) = {${y - b}/${a}}${x.toString() === `{${y - b}/${a}}` ? '' : ` = ${x}`}.`);
      },
      (r) => {
        const a = int(r, 1, 3), b = int(r, -4, 4) || 1, c = int(r, -5, 5), x = int(r, -2, 3);
        const v = a * x * x + b * x + c;
        return g(r, `f(x) = ${a === 1 ? '' : a}x² ${sgn(b)}x${c ? ` ${sgn(c)}` : ''} ise f(${num(x)}) kaçtır?`, v, [a * x * x - b * x + c, a * x + b * x + c, v + c, -v], `f(${num(x)}) = ${a} · ${x * x} ${sgn(b * x)} ${sgn(c)} = ${num(v)}.`);
      }
    ],
    'Polinomlar': [
      (r) => {
        const n = int(r, 3, 7), a = int(r, 2, 6);
        return g(r, `P(x) = ${a}x^{${n}} − x^{${n - 1}} + 4x − 9 polinomunun derecesi ile baş katsayısının toplamı kaçtır?`, n + a, [n, a, n - 1 + a, n + a - 9], `Derece ${n}, baş katsayı ${a}. Toplam ${n + a}.`);
      },
      (r) => {
        const a = int(r, 1, 5), b = int(r, -6, 6), c = int(r, -9, 9);
        return g(r, `P(x) = ${a}x² ${sgn(b)}x ${sgn(c)} polinomunun katsayılar toplamı kaçtır?`, a + b + c, [c, a + b, a - b + c, a * b * c], `Katsayılar toplamı P(1) = ${a} ${sgn(b)} ${sgn(c)} = ${num(a + b + c)}.`);
      }
    ],
    'İkinci Dereceden Denklemler': [
      (r) => {
        const x1 = int(r, -6, 6), x2 = int(r, -6, 6);
        const s = x1 + x2, p = x1 * x2;
        return g(r, `x² ${sgn(-s)}x ${sgn(p)} = 0 denkleminin kökler toplamı ile kökler çarpımının toplamı kaçtır?`, s + p, [s - p, -s + p, p, s], `Kökler toplamı ${num(s)}, çarpımı ${num(p)}; toplam ${num(s + p)}.`);
      },
      (r) => {
        const x1 = int(r, 1, 7), x2 = int(r, x1 + 1, 9);
        return g(r, `x² − ${x1 + x2}x + ${x1 * x2} = 0 denkleminin büyük kökü kaçtır?`, x2, [x1, x1 + x2, x1 * x2, x2 - x1], `(x − ${x1})(x − ${x2}) = 0 → kökler ${x1} ve ${x2}; büyük kök ${x2}.`);
      },
      (r) => {
        const b = int(r, 2, 8); const c = int(r, -5, 20);
        const D = b * b - 4 * c;
        const n = D > 0 ? 2 : D === 0 ? 1 : 0;
        return { stem: `x² + ${b}x ${sgn(c)} = 0 denkleminin kaç farklı gerçek kökü vardır?`, ...choices(r, String(n), ['0', '1', '2', '3', '4'].filter((x) => x !== String(n))), solution: `Δ = b² − 4ac = ${b * b} − ${4 * c} = ${num(D)}. Δ ${D > 0 ? '> 0: iki farklı kök' : D === 0 ? '= 0: çakışık (tek) kök' : '< 0: gerçek kök yok'}.` };
      }
    ],
    'Permütasyon ve Kombinasyon': [
      (r) => {
        const n = int(r, 4, 7);
        return g(r, `${n} kişi düz bir sıraya kaç farklı şekilde dizilebilir?`, fact(n), [n * n, fact(n - 1), 2 ** n, n * (n - 1)], `${n}! = ${fact(n)}.`);
      },
      (r) => {
        const n = int(r, 4, 7);
        return g(r, `${n} kişi yuvarlak bir masa etrafına kaç farklı şekilde oturabilir?`, fact(n - 1), [fact(n), fact(n - 2), n * (n - 1), fact(n) / 2], `Dairesel sıralamada (n − 1)! = ${n - 1}! = ${fact(n - 1)}.`);
      },
      (r) => {
        const d = pick(r, [3, 4]);
        const digits = [1, 2, 3, 4, 5, 6].slice(0, int(r, 4, 6));
        const k = digits.length;
        return g(r, `${digits.join(', ')} rakamları kullanılarak rakamları farklı ${d} basamaklı kaç sayı yazılabilir?`, P(k, d), [k ** d, C(k, d), fact(k), P(k, d - 1)], `İlk basamak ${k}, ikinci ${k - 1}${d > 2 ? `, üçüncü ${k - 2}` : ''}${d > 3 ? `, dördüncü ${k - 3}` : ''} seçenek: ${P(k, d)}.`);
      }
    ],
    'Olasılık': [
      (r) => {
        const target = int(r, 2, 12);
        let n = 0; for (let a = 1; a <= 6; a++) for (let b = 1; b <= 6; b++) if (a + b === target) n++;
        return fq(r, `İki zar birlikte atılıyor. Üst yüze gelen sayıların toplamının ${target} olma olasılığı kaçtır?`, new Frac(n, 36), [new Frac(1, 6), new Frac(1, 12), new Frac(n + 1, 36), new Frac(1, 36)].filter((x) => !x.eq(new Frac(n, 36))), `36 eşit olası durumdan toplamı ${target} olan ${n} tane var: ${new Frac(n, 36)}.`);
      },
      (r) => {
        const n = pick(r, [2, 3]);
        return fq(r, `Bir madeni para ${n} kez atılıyor. Hepsinin yazı gelme olasılığı kaçtır?`, new Frac(1, 2 ** n), [new Frac(1, 2), new Frac(1, n), new Frac(n, 2 ** n), new Frac(1, 2 * n)].filter((x) => !x.eq(new Frac(1, 2 ** n))), `Her atış {1/2}: ({1/2})^{${n}} = ${new Frac(1, 2 ** n)}.`);
      }
    ],
    'Veri ve İstatistik': [
      (r) => {
        const xs = Array.from({ length: 7 }, () => int(r, 1, 30)).sort((a, b) => a - b);
        return g(r, `${shuffle(r, xs).join(', ')} sayı dizisinin ortancası (medyanı) kaçtır?`, xs[3]!, [xs[2]!, xs[4]!, Math.round(xs.reduce((a, b) => a + b, 0) / 7), xs[6]! - xs[0]!], `Sıralı dizide ortadaki (4.) değer: ${xs[3]}.`);
      },
      (r) => {
        const m = int(r, 3, 15); const xs = [m, m, m, int(r, 16, 25), int(r, 1, 2), int(r, 26, 30)];
        return g(r, `${xs.join(', ')} veri grubunun tepe değeri (modu) kaçtır?`, m, [xs[3]!, xs[5]! - xs[4]!, Math.round(xs.reduce((a, b) => a + b, 0) / 6), m + 1], `En çok tekrar eden değer ${m} (3 kez).`);
      }
    ],
    'Doğruda ve Üçgende Açılar': [
      (r) => {
        const x = int(r, 25, 80);
        return g(r, `Bir doğru üzerinde komşu bütünler iki açıdan biri ${x}° ise diğeri kaç derecedir?`, 180 - x, [90 - x, 360 - x, x, 180 + x], `Bütünler açıların toplamı 180°: 180 − ${x} = ${180 - x}°.`);
      },
      (r) => {
        const a = int(r, 30, 80), b = int(r, 30, 80);
        if (a + b >= 170) return MATH_MORE['tyt-mat']!['Doğruda ve Üçgende Açılar']![0]!(r);
        return g(r, `Bir üçgenin iki iç açısı ${a}° ve ${b}° ise üçüncü açısının dış açısı kaç derecedir?`, a + b, [180 - a - b, 360 - a - b, a + b - 90, 90], `Dış açı, kendisine komşu olmayan iki iç açının toplamıdır: ${a} + ${b} = ${a + b}°.`);
      }
    ],
    'Dik ve Özel Üçgenler': [
      (r) => {
        const k = int(r, 2, 9);
        return { stem: `30°–60°–90° üçgeninde 30°’nin karşısındaki kenar ${k} cm ise hipotenüs kaç cm’dir?`, ...numChoices(r, 2 * k, [k, 3 * k, k * k, 4 * k]), solution: `30°–60°–90° üçgeninde kenarlar k, k√{3}, 2k oranındadır; hipotenüs 2 · ${k} = ${2 * k} cm.` };
      },
      (r) => {
        const k = int(r, 2, 9);
        return { stem: `İkizkenar dik üçgende dik kenarlardan biri ${k} cm ise hipotenüs kaç cm’dir?`, ...choices(r, `${k}√{2}`, [`${2 * k}`, `${k}√{3}`, `${k * 2}√{2}`, `${k}`], (i) => `${k + i}√{2}`), solution: `45°–45°–90° üçgeninde hipotenüs dik kenarın √{2} katıdır: ${k}√{2} cm.` };
      }
    ],
    'Açıortay ve Kenarortay': [
      (r) => {
        const b = int(r, 4, 12), c = int(r, 4, 12); const k = int(r, 1, 3);
        const a = (b + c) * k;
        const m = (c * a) / (b + c);
        return g(r, `ABC üçgeninde [AD] A açısının açıortayıdır. |AB| = ${c}, |AC| = ${b} ve |BC| = ${a} ise |BD| kaç birimdir?`, m, [(b * a) / (b + c), a / 2, c, m + 1], `İç açıortay teoremi: {|BD|/|DC|} = {|AB|/|AC|} = {${c}/${b}}. |BD| = ${a} · {${c}/${b + c}} = ${num(m)}.`);
      },
      (r) => {
        const a = 2 * int(r, 3, 10);
        return g(r, `Dik üçgende hipotenüs ${a} cm ise hipotenüse ait kenarortayın uzunluğu kaç cm’dir?`, a / 2, [a, a / 4, a * 2, a / 2 + 1], `Dik üçgende hipotenüse ait kenarortay hipotenüsün yarısıdır: ${a / 2} cm.`);
      }
    ],
    'Üçgende Alan': [
      (r) => {
        const [p, q, h] = pick(r, [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15]] as [number, number, number][]);
        return g(r, `Dik kenarları ${p} cm ve ${q} cm olan dik üçgenin alanı kaç cm²’dir?`, (p * q) / 2, [p * q, (p * h) / 2, p + q + h, (q * h) / 2], `Dik üçgende alan = {dik kenarlar çarpımı/2} = {${p} · ${q}/2} = ${(p * q) / 2} cm².`);
      },
      (r) => {
        const a = 2 * int(r, 2, 6);
        return { stem: `Bir kenarı ${a} cm olan eşkenar üçgenin alanı kaç cm²’dir?`, ...choices(r, `${(a * a) / 4}√{3}`, [`${(a * a) / 2}√{3}`, `${a * a}`, `${(a * a) / 4}`, `${a}√{3}`], (i) => `${(a * a) / 4 + i}√{3}`), solution: `Eşkenar üçgende alan {a²√{3}/4} = {${a * a}√{3}/4} = ${(a * a) / 4}√{3} cm².` };
      }
    ],
    'Üçgende Benzerlik': [
      (r) => {
        const k = int(r, 2, 4), a = int(r, 3, 8), b = int(r, 3, 8);
        return g(r, `Benzer iki üçgenden küçüğünün kenarları ${a} ve ${b} cm’dir. Büyük üçgende ${a} cm’lik kenara karşılık gelen kenar ${a * k} cm ise ${b} cm’lik kenara karşılık gelen kenar kaç cm’dir?`, b * k, [b + a * (k - 1), b * k * k, a * k, b + k], `Benzerlik oranı {${a * k}/${a}} = ${k}. Karşılık gelen kenar ${b} · ${k} = ${b * k} cm.`);
      }
    ],
    'Çokgenler ve Dörtgenler': [
      (r) => {
        const a = int(r, 4, 12), h = int(r, 2, 9);
        return g(r, `Bir kenarı ${a} cm ve bu kenara ait yüksekliği ${h} cm olan paralelkenarın alanı kaç cm²’dir?`, a * h, [(a * h) / 2, 2 * (a + h), a + h, a * h * 2], `Paralelkenarın alanı taban · yükseklik = ${a} · ${h} = ${a * h} cm².`);
      },
      (r) => {
        const a = int(r, 4, 10), c = int(r, 11, 18), h = 2 * int(r, 2, 5);
        return g(r, `Tabanları ${a} cm ve ${c} cm, yüksekliği ${h} cm olan yamuğun alanı kaç cm²’dir?`, ((a + c) * h) / 2, [(a + c) * h, a * c, ((c - a) * h) / 2, (a + c) / 2], `Yamuğun alanı {(a + c) · h/2} = {(${a} + ${c}) · ${h}/2} = ${((a + c) * h) / 2} cm².`);
      },
      (r) => {
        const e = 2 * int(r, 2, 8), f = 2 * int(r, 2, 8);
        return g(r, `Köşegen uzunlukları ${e} cm ve ${f} cm olan eşkenar dörtgenin alanı kaç cm²’dir?`, (e * f) / 2, [e * f, e + f, (e * f) / 4, 2 * (e + f)], `Eşkenar dörtgenin alanı köşegenler çarpımının yarısıdır: {${e} · ${f}/2} = ${(e * f) / 2} cm².`);
      },
      (r) => {
        const n = pick(r, [5, 6, 8, 9, 10, 12]);
        return g(r, `Düzgün ${n} kenarlı bir çokgenin bir dış açısı kaç derecedir?`, 360 / n, [180 - 360 / n, 360, 180 / n, (n - 2) * 180], `Dış açılar toplamı 360°: 360 ÷ ${n} = ${360 / n}°.`);
      }
    ],
    'Çember ve Daire': [
      (r) => {
        const a = 2 * int(r, 15, 80);
        return g(r, `Bir çemberde aynı yayı gören merkez açı ${a}° ise çevre açı kaç derecedir?`, a / 2, [a, a * 2, 180 - a / 2, 90], `Çevre açı, aynı yayı gören merkez açının yarısıdır: ${a / 2}°.`);
      },
      (r) => {
        const rr = int(r, 2, 10);
        return g(r, `Yarıçapı ${rr} cm olan çemberin çevresi kaç cm’dir? (π = 3)`, 6 * rr, [3 * rr * rr, 3 * rr, 12 * rr, 6 * rr * rr], `Çevre 2πr = 2 · 3 · ${rr} = ${6 * rr} cm.`);
      },
      (r) => {
        const rr = 2 * int(r, 1, 5), a = pick(r, [60, 90, 120, 180]);
        return g(r, `Yarıçapı ${rr} cm olan dairenin ${a}°’lik dilim alanı kaç cm²’dir? (π = 3)`, (3 * rr * rr * a) / 360, [3 * rr * rr, (6 * rr * a) / 360, (3 * rr * a) / 360, (3 * rr * rr * a) / 180], `Dilim alanı πr² · {${a}/360} = ${3 * rr * rr} · {${a}/360} = ${num((3 * rr * rr * a) / 360)} cm².`);
      }
    ],
    'Noktanın ve Doğrunun Analitiği': [
      (r) => {
        const x1 = int(r, -6, 6), y1 = int(r, -6, 6), x2 = x1 + 2 * int(r, -4, 4), y2 = y1 + 2 * int(r, -4, 4);
        const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
        return { stem: `A(${num(x1)}, ${num(y1)}) ve B(${num(x2)}, ${num(y2)}) noktalarının orta noktası hangisidir?`, ...choices(r, `(${num(mx)}, ${num(my)})`, [`(${num(x1 + x2)}, ${num(y1 + y2)})`, `(${num(my)}, ${num(mx)})`, `(${num((x2 - x1) / 2)}, ${num((y2 - y1) / 2)})`, `(${num(mx + 1)}, ${num(my)})`], (i) => `(${num(mx)}, ${num(my + i)})`), solution: `Orta nokta ({x₁ + x₂/2}, {y₁ + y₂/2}) = (${num(mx)}, ${num(my)}).` };
      },
      (r) => {
        const m = int(r, -4, 4) || 2, n = int(r, -6, 6), x = int(r, -3, 4);
        return g(r, `y = ${m === 1 ? '' : m === -1 ? '−' : num(m)}x ${sgn(n)} doğrusu üzerindeki apsisi ${num(x)} olan noktanın ordinatı kaçtır?`, m * x + n, [m + x + n, m * x - n, x, n], `y = ${num(m)} · ${num(x)} ${sgn(n)} = ${num(m * x + n)}.`);
      },
      (r) => {
        const a = int(r, 2, 6), b = int(r, 2, 6);
        return g(r, `{x/${a}} + {y/${b}} = 1 doğrusunun eksenlerle oluşturduğu üçgenin alanı kaç birimkaredir?`, (a * b) / 2, [a * b, a + b, (a + b) / 2, 2 * a * b], `Doğru eksenleri (${a}, 0) ve (0, ${b}) noktalarında keser. Alan {${a} · ${b}/2} = ${num((a * b) / 2)}.`);
      }
    ],
    'Katı Cisimler': [
      (r) => {
        const rr = int(r, 1, 5), h = int(r, 2, 10);
        return g(r, `Taban yarıçapı ${rr} cm, yüksekliği ${h} cm olan dik silindirin hacmi kaç cm³’tür? (π = 3)`, 3 * rr * rr * h, [3 * rr * h, 6 * rr * h, 3 * rr * rr * h / 3, 2 * 3 * rr * rr * h], `V = πr²h = 3 · ${rr * rr} · ${h} = ${3 * rr * rr * h} cm³.`);
      },
      (r) => {
        const rr = int(r, 1, 6), h = 3 * int(r, 1, 4);
        return g(r, `Taban yarıçapı ${rr} cm, yüksekliği ${h} cm olan dik koninin hacmi kaç cm³’tür? (π = 3)`, rr * rr * h, [3 * rr * rr * h, rr * h, 3 * rr * h, (rr * rr * h) / 3], `V = {πr²h/3} = {3 · ${rr * rr} · ${h}/3} = ${rr * rr * h} cm³.`);
      },
      (r) => {
        const rr = int(r, 1, 6);
        return g(r, `Yarıçapı ${rr} cm olan kürenin hacmi kaç cm³’tür? (π = 3)`, 4 * rr ** 3, [3 * rr ** 3, 12 * rr * rr, 4 * rr * rr, (4 * rr ** 3) / 3], `V = {4/3}πr³ = {4/3} · 3 · ${rr ** 3} = ${4 * rr ** 3} cm³.`);
      }
    ]
  },

  'ayt-mat': {
    'Parabol': [
      (r) => {
        const a = pick(r, [1, 2, -1]), r1 = int(r, -4, 4), k = int(r, -6, 6);
        const b = -2 * a * r1, c = a * r1 * r1 + k;
        return { stem: `f(x) = ${a === 1 ? '' : a === -1 ? '−' : a}x² ${sgn(b)}x ${sgn(c)} parabolünün tepe noktası hangisidir?`, ...choices(r, `(${num(r1)}, ${num(k)})`, [`(${num(-r1)}, ${num(k)})`, `(${num(r1)}, ${num(c)})`, `(${num(k)}, ${num(r1)})`, `(${num(-r1)}, ${num(-k)})`], (i) => `(${num(r1)}, ${num(k + i)})`), solution: `Tepe noktasının apsisi r = {−b/2a} = ${num(r1)}; ordinatı f(${num(r1)}) = ${num(k)}.` };
      },
      (r) => {
        const r1 = int(r, -5, 2), r2 = int(r, r1 + 1, 6);
        return g(r, `y = x² ${sgn(-(r1 + r2))}x ${sgn(r1 * r2)} parabolünün x eksenini kestiği noktaların apsisleri toplamı kaçtır?`, r1 + r2, [r1 * r2, -(r1 + r2), r2 - r1, r1 + r2 + 1], `x² ${sgn(-(r1 + r2))}x ${sgn(r1 * r2)} = 0 denkleminin kökleri ${num(r1)} ve ${num(r2)}; toplam ${num(r1 + r2)}.`);
      }
    ],
    'İkinci Dereceden Denklemler ve Eşitsizlikler': [
      (r) => {
        const a = int(r, -5, 2), b = int(r, a + 2, 7);
        return g(r, `(x ${a < 0 ? `+ ${-a}` : `− ${a}`})(x − ${b}) < 0 eşitsizliğini sağlayan kaç x tam sayısı vardır?`, b - a - 1, [b - a + 1, b - a, b + a, Math.abs(a * b)], `Kökler ${num(a)} ve ${b}; ifade kökler arasında negatiftir: ${num(a)} < x < ${b}. Tam sayılar ${b - a - 1} tane.`);
      }
    ],
    'Trigonometri': [
      (r) => {
        const d = pick(r, [30, 45, 60, 90, 120, 135, 150, 180, 270, 360]);
        const f = new Frac(d, 180);
        const txt = f.n === 1 && f.d === 1 ? 'π' : f.d === 1 ? `${f.n}π` : `{${f.n === 1 ? '' : f.n}π/${f.d}}`;
        return { stem: `${d}° kaç radyandır?`, ...choices(r, txt, [`{π/${d}}`, `${d}π`, `{${d}/π}`, d === 90 ? 'π' : '{π/2}'], (i) => `{${f.n + i}π/${f.d + 1}}`), solution: `Radyan = derece · {π/180}: ${d} · {π/180} = ${txt}.` };
      },
      (r) => {
        const [o, a, h] = pick(r, [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25]] as [number, number, number][]);
        const f = pick(r, ['sin', 'cos', 'tan'] as const);
        const ans = f === 'sin' ? new Frac(o, h) : f === 'cos' ? new Frac(a, h) : new Frac(o, a);
        return fq(r, `Bir dik üçgende x dar açısının karşısındaki dik kenar ${o}, komşu dik kenar ${a} birimdir. ${f} x kaçtır?`, ans, [new Frac(o, h), new Frac(a, h), new Frac(o, a), new Frac(a, o), new Frac(h, a)].filter((x) => !x.eq(ans)), `Hipotenüs √{${o * o} + ${a * a}} = ${h}. sin = {karşı/hipotenüs}, cos = {komşu/hipotenüs}, tan = {karşı/komşu}: ${f} x = ${ans}.`);
      },
      (r) => {
        const s = pick(r, [new Frac(3, 5), new Frac(5, 13), new Frac(8, 17), new Frac(4, 5)]);
        const c = s.eq(new Frac(3, 5)) ? new Frac(4, 5) : s.eq(new Frac(5, 13)) ? new Frac(12, 13) : s.eq(new Frac(8, 17)) ? new Frac(15, 17) : new Frac(3, 5);
        return fq(r, `x dar açı ve sin x = ${s} ise cos x kaçtır?`, c, [s, new Frac(1).sub(s), s.div(c), c.div(s)].filter((x) => !x.eq(c)), `sin²x + cos²x = 1 → cos²x = 1 − ${s.mul(s)} = ${c.mul(c)} → cos x = ${c} (dar açıda pozitif).`);
      }
    ],
    'Üstel ve Logaritmik Fonksiyonlar': [
      (r) => {
        const a = int(r, 2, 5), n = int(r, 2, 4);
        return g(r, `log₍${a}₎ x = ${n} ise x kaçtır?`.replace(`log₍${a}₎`, `log_{${a}}`), a ** n, [a * n, n ** a, a + n, a ** (n - 1)], `log_{${a}} x = ${n} → x = ${a}^{${n}} = ${a ** n}.`);
      },
      (r) => {
        const [p, q, k] = pick(r, [[2, 5, 1], [4, 25, 2], [20, 5, 2], [8, 125, 3], [50, 2, 2], [40, 25, 3]] as [number, number, number][]);
        return g(r, `log ${p} + log ${q} ifadesinin değeri kaçtır?`, k, [p + q, k + 1, k - 1 || 4, Math.log10(p) > 1 ? 1 : 0], `log a + log b = log(a · b) = log ${p * q} = ${k} (10^{${k}} = ${p * q}).`);
      }
    ],
    'Diziler': [
      (r) => {
        const a1 = int(r, 1, 5), q = pick(r, [2, 3]), n = int(r, 3, 6);
        return g(r, `İlk terimi ${a1}, ortak çarpanı ${q} olan geometrik dizinin ${n}. terimi kaçtır?`, a1 * q ** (n - 1), [a1 * q ** n, a1 * q * (n - 1), a1 + q * (n - 1), q ** (n - 1)], `aₙ = a₁ · r^{n − 1} = ${a1} · ${q}^{${n - 1}} = ${a1 * q ** (n - 1)}.`);
      },
      (r) => {
        const a = int(r, 2, 10), d = int(r, 2, 6);
        return g(r, `Bir aritmetik dizide a₃ = ${a + 2 * d} ve a₇ = ${a + 6 * d} ise ortak fark kaçtır?`, d, [4 * d, 2 * d, a, d + 1], `a₇ − a₃ = 4d → ${4 * d} = 4d → d = ${d}.`);
      }
    ],
    'Limit ve Süreklilik': [
      (r) => {
        const a = int(r, 1, 4), b = int(r, -5, 5), c = int(r, -6, 6), k = int(r, -3, 3);
        return g(r, `lim_{x → ${num(k)}} (${a === 1 ? '' : a}x² ${sgn(b)}x ${sgn(c)}) değeri kaçtır?`, a * k * k + b * k + c, [a * k * k - b * k + c, a * k + b + c, c, a * k * k + b * k], `Polinomlarda limit, değer yazılarak bulunur: ${a} · ${k * k} ${sgn(b * k)} ${sgn(c)} = ${num(a * k * k + b * k + c)}.`);
      },
      (r) => {
        const a = int(r, 2, 7), b = int(r, 2, 7);
        const ans = new Frac(a, b);
        return fq(r, `lim_{x → ∞} {${a}x² + 5x/${b}x² − 1} değeri kaçtır?`, ans, [new Frac(b, a), new Frac(a), new Frac(5, b), new Frac(0)].filter((x) => !x.eq(ans)), `Pay ve paydanın dereceleri eşit: limit baş katsayıların oranıdır, {${a}/${b}}${ans.toString() === `{${a}/${b}}` ? '' : ` = ${ans}`}.`);
      }
    ],
    'Türev': [
      (r) => {
        const a = int(r, 1, 3), b = int(r, -6, 6), c = int(r, -5, 5), k = int(r, -2, 3);
        const m = 2 * a * k + b;
        return g(r, `f(x) = ${a === 1 ? '' : a}x² ${sgn(b)}x ${sgn(c)} eğrisinin x = ${num(k)} noktasındaki teğetinin eğimi kaçtır?`, m, [a * k * k + b * k + c, a * k + b, 2 * a + b, m + c], `Teğetin eğimi f′(${num(k)}): f′(x) = ${2 * a}x ${sgn(b)} → ${num(m)}.`);
      },
      (r) => {
        const r1 = int(r, -4, 4); const a = pick(r, [1, 2]); const b = -2 * a * r1; const c = int(r, -9, 9);
        return g(r, `f(x) = ${a === 1 ? '' : a}x² ${sgn(b)}x ${sgn(c)} fonksiyonunun türevini sıfır yapan x değeri kaçtır?`, r1, [-r1, b, c, 2 * r1], `f′(x) = ${2 * a}x ${sgn(b)} = 0 → x = ${num(r1)}.`);
      },
      (r) => {
        const n = int(r, 3, 7), a = int(r, 2, 5);
        return { stem: `f(x) = ${a}x^{${n}} ise f′(x) hangisidir?`, ...choices(r, `${a * n}x^{${n - 1}}`, [`${a}x^{${n - 1}}`, `${a * n}x^{${n}}`, `${n}x^{${n - 1}}`, `${a + n}x^{${n - 1}}`], (i) => `${a * n + i}x^{${n - 1}}`), solution: `(axⁿ)′ = a · n · x^{n − 1} = ${a * n}x^{${n - 1}}.` };
      }
    ],
    'İntegral': [
      (r) => {
        const n = int(r, 1, 4), a = (n + 1) * int(r, 1, 3);
        return { stem: `∫ ${a}x^{${n}} dx hangisidir?`, ...choices(r, `${a / (n + 1) === 1 ? '' : a / (n + 1)}x^{${n + 1}} + c`, [`${a * n}x^{${n - 1}} + c`, `${a}x^{${n + 1}} + c`, `${a / (n + 1)}x^{${n}} + c`, `${a * (n + 1)}x^{${n + 1}} + c`], (i) => `${a / (n + 1) + i}x^{${n + 1}} + c`), solution: `∫ axⁿ dx = {a/n + 1} x^{n + 1} + c = ${a / (n + 1)}x^{${n + 1}} + c.` };
      },
      (r) => {
        const k = int(r, 1, 3);
        const v = k ** 3;
        return g(r, `∫_{0}^{${k}} 3x² dx integralinin değeri kaçtır?`, v, [3 * k * k, 6 * k, k * k, 3 * v], `İlkel x³: ${k}³ − 0 = ${v}.`);
      },
      (r) => {
        const a = int(r, 1, 3), b = a + int(r, 1, 3), c = int(r, 1, 5);
        return g(r, `∫_{${a}}^{${b}} ${c} dx integralinin değeri kaçtır?`, c * (b - a), [c * b, c * (a + b), b - a, c], `Sabit fonksiyonun integrali: ${c} · (${b} − ${a}) = ${c * (b - a)}.`);
      }
    ],
    'Karmaşık Sayılar': [
      (r) => {
        const [a, b, m] = pick(r, [[3, 4, 5], [6, 8, 10], [5, 12, 13], [8, 6, 10]] as [number, number, number][]);
        return g(r, `z = ${a} ${r() < 0.5 ? '+' : '−'} ${b}i karmaşık sayısının modülü (|z|) kaçtır?`, m, [a + b, m * m, Math.abs(a - b), m + 1], `|z| = √{${a}² + ${b}²} = √{${m * m}} = ${m}.`);
      },
      (r) => {
        const a = int(r, 1, 6), b = int(r, 1, 6), c = int(r, 1, 6), d = int(r, 1, 6);
        const re = a * c - b * d, im = a * d + b * c;
        return { stem: `(${a} + ${b}i)(${c} + ${d}i) çarpımı hangisidir? (i² = −1)`, ...choices(r, `${num(re)} ${im >= 0 ? '+' : '−'} ${Math.abs(im)}i`, [`${a * c + b * d} + ${im}i`, `${a * c} + ${b * d}i`, `${num(re)} − ${im}i`, `${a + c} + ${b + d}i`], (i) => `${num(re + i)} + ${im}i`), solution: `${a * c} + ${a * d}i + ${b * c}i + ${b * d}i² = (${a * c} − ${b * d}) + (${a * d} + ${b * c})i = ${num(re)} + ${im}i.` };
      }
    ],
    'Permütasyon, Kombinasyon, Binom': [
      (r) => {
        const n = int(r, 5, 9), k = int(r, 2, 3);
        return g(r, `C(${n}, ${k}) + C(${n}, ${n - k}) toplamı kaçtır?`, 2 * C(n, k), [C(n, k), C(n + 1, k), P(n, k), 2 ** n], `C(n, k) = C(n, n − k) olduğundan toplam 2 · C(${n}, ${k}) = 2 · ${C(n, k)} = ${2 * C(n, k)}.`);
      },
      (r) => {
        const n = int(r, 4, 7), k = int(r, 1, n - 1);
        return g(r, `(x + 1)^{${n}} açılımında x^{${k}}’li terimin katsayısı kaçtır?`.replace(`x^{${k}}’li`, `x^{${k}} içeren`), C(n, k), [n * k, C(n, k - 1), P(n, k), n], `Binom açılımında xᵏ teriminin katsayısı C(${n}, ${k}) = ${C(n, k)}.`);
      }
    ],
    'Çemberin Analitiği': [
      (r) => {
        const a = int(r, -5, 5), b = int(r, -5, 5), rr = int(r, 1, 7);
        return { stem: `(x ${sgn(-a)})² + (y ${sgn(-b)})² = ${rr * rr} çemberinin merkezi ve yarıçapı hangisidir?`, ...choices(r, `M(${num(a)}, ${num(b)}), r = ${rr}`, [`M(${num(-a)}, ${num(-b)}), r = ${rr}`, `M(${num(a)}, ${num(b)}), r = ${rr * rr}`, `M(${num(b)}, ${num(a)}), r = ${rr}`, `M(${num(-a)}, ${num(-b)}), r = ${rr * rr}`], (i) => `M(${num(a)}, ${num(b)}), r = ${rr + i}`), solution: `(x − a)² + (y − b)² = r² biçiminde merkez (a, b) = (${num(a)}, ${num(b)}), r = √{${rr * rr}} = ${rr}.` };
      }
    ],
    'Dönüşüm Geometrisi': [
      (r) => {
        const x = int(r, -6, 6) || 3, y = int(r, -6, 6) || -2;
        const kind = pick(r, ['x', 'y', 'o'] as const);
        const [ax, ay] = kind === 'x' ? [x, -y] : kind === 'y' ? [-x, y] : [-x, -y];
        const name = kind === 'x' ? 'x eksenine' : kind === 'y' ? 'y eksenine' : 'orijine';
        return { stem: `A(${num(x)}, ${num(y)}) noktasının ${name} göre simetriği hangisidir?`, ...choices(r, `(${num(ax)}, ${num(ay)})`, [`(${num(x)}, ${num(-y)})`, `(${num(-x)}, ${num(y)})`, `(${num(-x)}, ${num(-y)})`, `(${num(y)}, ${num(x)})`].filter((s) => s !== `(${num(ax)}, ${num(ay)})`), (i) => `(${num(ax + i)}, ${num(ay)})`), solution: kind === 'x' ? 'x eksenine göre simetride y işaret değiştirir.' : kind === 'y' ? 'y eksenine göre simetride x işaret değiştirir.' : 'Orijine göre simetride iki koordinat da işaret değiştirir.' };
      },
      (r) => {
        const x = int(r, -5, 5), y = int(r, -5, 5), a = int(r, -4, 4), b = int(r, -4, 4);
        return { stem: `A(${num(x)}, ${num(y)}) noktası ${a >= 0 ? `x ekseni yönünde ${a} birim` : `x ekseninin ters yönünde ${-a} birim`}, ${b >= 0 ? `y ekseni yönünde ${b} birim` : `y ekseninin ters yönünde ${-b} birim`} ötelenirse hangi noktaya gelir?`, ...choices(r, `(${num(x + a)}, ${num(y + b)})`, [`(${num(x - a)}, ${num(y - b)})`, `(${num(x + b)}, ${num(y + a)})`, `(${num(x + a)}, ${num(y - b)})`, `(${num(x - a)}, ${num(y + b)})`], (i) => `(${num(x + a + i)}, ${num(y + b)})`), solution: `Öteleme koordinatlara eklenir: (${num(x)} ${sgn(a)}, ${num(y)} ${sgn(b)}) = (${num(x + a)}, ${num(y + b)}).` };
      }
    ]
  }
};
