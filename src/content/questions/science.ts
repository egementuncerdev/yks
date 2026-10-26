/* AYT Matematik, TYT/AYT Fizik ve Kimya, Biyoloji (kalıtım, bölünme) ve Coğrafya (ölçek):
   formüle dayalı soru üreticileri. Cevaplar kodla hesaplanır. */
import { Frac, int, num, numChoices, choices, pick, type Generator, type Rnd } from './core';

const g = (r: Rnd, stem: string, correct: number, wrong: number[], solution: string) => ({ stem, ...numChoices(r, correct, wrong), solution });
const fracQ = (r: Rnd, stem: string, ans: Frac, wrong: Frac[], solution: string) =>
  ({ stem, ...choices(r, ans.toString(), wrong.map(String), (i) => ans.add(new Frac(i, ans.d + 1)).toString()), solution });

export const AYT_MAT: Record<string, Generator[]> = {
  'Üstel ve Logaritmik Fonksiyonlar': [
    (r) => {
      const a = int(r, 2, 6), b = int(r, 2, 4);
      return g(r, `log₂ ${2 ** a} + log₃ ${3 ** b} toplamı kaçtır?`, a + b, [a * b, 2 ** a + 3 ** b, a + b + 1, Math.abs(a - b) || 7], `log₂ ${2 ** a} = ${a} çünkü 2^{${a}} = ${2 ** a}; log₃ ${3 ** b} = ${b}. Toplam ${a + b}.`);
    },
    (r) => {
      const x = int(r, 2, 6);
      return g(r, `log x + log 10 = log ${x * 10} eşitliğini sağlayan x kaçtır?`, x, [x * 10, x + 10, x * 100, 10 - x || 11], `log a + log b = log(a · b): log(10x) = log(${x * 10}) → 10x = ${x * 10} → x = ${x}.`);
    }
  ],
  'Diziler': [
    (r) => {
      const a1 = int(r, -5, 9), d = int(r, 2, 6), n = int(r, 8, 20);
      return g(r, `İlk terimi ${num(a1)} ve ortak farkı ${d} olan aritmetik dizinin ${n}. terimi kaçtır?`, a1 + (n - 1) * d, [a1 + n * d, a1 * n, (n - 1) * d, a1 + (n - 2) * d], `aₙ = a₁ + (n − 1)d = ${num(a1)} + ${n - 1} · ${d} = ${num(a1 + (n - 1) * d)}.`);
    },
    (r) => {
      const a1 = int(r, 1, 6), d = int(r, 1, 5), n = int(r, 5, 12);
      const S = (n * (2 * a1 + (n - 1) * d)) / 2;
      return g(r, `İlk terimi ${a1}, ortak farkı ${d} olan aritmetik dizinin ilk ${n} teriminin toplamı kaçtır?`, S, [a1 + (n - 1) * d, n * (a1 + (n - 1) * d), S + d, S - a1], `Sₙ = {n · (a₁ + aₙ)/2}; aₙ = ${a1 + (n - 1) * d}. S = {${n} · ${a1 + a1 + (n - 1) * d}/2} = ${S}.`);
    }
  ],
  'Limit ve Süreklilik': [
    (r) => {
      const a = int(r, 1, 9);
      return g(r, `lim_{x → ${a}} {x² − ${a * a}/x − ${a}} değeri kaçtır?`, 2 * a, [a, a * a, 0, 2 * a + 1], `Pay (x − ${a})(x + ${a}) diye çarpanlara ayrılır, sadeleşince x + ${a} kalır. x → ${a} için ${2 * a}.`);
    }
  ],
  'Türev': [
    (r) => {
      const a = int(r, 1, 4), b = int(r, -5, 5), c = int(r, -6, 6), k = int(r, -2, 3);
      const d = 3 * a * k * k + 2 * b * k + c;
      return g(r, `f(x) = ${a === 1 ? '' : a}x³ ${b >= 0 ? '+' : '−'} ${Math.abs(b)}x² ${c >= 0 ? '+' : '−'} ${Math.abs(c)}x + 7 ise f′(${num(k)}) kaçtır?`, d, [a * k ** 3 + b * k * k + c * k + 7, 3 * a * k + 2 * b + c, d + 7, 3 * a * k * k + b * k + c], `f′(x) = ${3 * a}x² ${2 * b >= 0 ? '+' : '−'} ${Math.abs(2 * b)}x ${c >= 0 ? '+' : '−'} ${Math.abs(c)}. f′(${num(k)}) = ${3 * a * k * k} ${2 * b * k >= 0 ? '+' : '−'} ${Math.abs(2 * b * k)} ${c >= 0 ? '+' : '−'} ${Math.abs(c)} = ${num(d)}.`);
    }
  ],
  'İntegral': [
    (r) => {
      const a = 2 * int(r, 1, 4), b = int(r, -4, 6), k = int(r, 1, 4);
      const v = (a / 2) * k * k + b * k;
      return g(r, `∫_{0}^{${k}} (${a}x ${b >= 0 ? '+' : '−'} ${Math.abs(b)}) dx integralinin değeri kaçtır?`, v, [a * k + b, a * k * k + b * k, (a / 2) * k * k, v + b], `İlkel: ${a / 2 === 1 ? '' : a / 2}x² ${b >= 0 ? '+' : '−'} ${Math.abs(b)}x. x = ${k} ve x = 0 için farkı: ${(a / 2) * k * k} ${b * k >= 0 ? '+' : '−'} ${Math.abs(b * k)} = ${num(v)}.`);
    }
  ],
  'Trigonometri': [
    (r) => {
      const V = [
        { e: 'sin 30° + cos 60°', v: new Frac(1), s: 'sin 30° = {1/2}, cos 60° = {1/2}; toplam 1.' },
        { e: 'sin 30° · cos 60°', v: new Frac(1, 4), s: '{1/2} · {1/2} = {1/4}.' },
        { e: 'tan 45° + sin 90°', v: new Frac(2), s: 'tan 45° = 1, sin 90° = 1; toplam 2.' },
        { e: 'cos 0° − sin 30°', v: new Frac(1, 2), s: 'cos 0° = 1, sin 30° = {1/2}; fark {1/2}.' },
        { e: 'sin² 40° + cos² 40°', v: new Frac(1), s: 'Her açı için sin²x + cos²x = 1.' },
        { e: 'tan 45° · cot 45° + cos 180°', v: new Frac(0), s: 'tan 45° · cot 45° = 1, cos 180° = −1; toplam 0.' }
      ];
      const x = pick(r, V);
      return fracQ(r, `${x.e} ifadesinin değeri kaçtır?`, x.v, [x.v.add(new Frac(1, 2)), x.v.sub(new Frac(1, 2)), x.v.add(new Frac(1)), new Frac(3, 4)], x.s);
    }
  ],
  'Permütasyon, Kombinasyon, Binom': [
    (r) => {
      const n = int(r, 4, 9);
      return g(r, `(x + y)^{${n}} ifadesinin açılımında kaç terim vardır?`, n + 1, [n, 2 * n, n - 1, 2 ** n], `(x + y)^{n} açılımında n + 1 terim vardır: ${n + 1}.`);
    },
    (r) => {
      const a = int(r, 1, 3), b = int(r, 1, 3), n = int(r, 2, 5);
      return g(r, `(${a}x + ${b})^{${n}} açılımındaki katsayılar toplamı kaçtır?`, (a + b) ** n, [a ** n + b ** n, (a + b) * n, 2 ** n, (a * b) ** n], `Katsayılar toplamı için x = 1 yazılır: (${a} + ${b})^{${n}} = ${(a + b) ** n}.`);
    }
  ],
  'Karmaşık Sayılar': [
    (r) => {
      const n = int(r, 5, 99); const m = n % 4;
      const val = ['1', 'i', '−1', '−i'][m]!;
      return { stem: `i² = −1 olmak üzere i^{${n}} kaçtır?`, ...choices(r, val, ['1', 'i', '−1', '−i', '0'].filter((x) => x !== val), () => '2i'), solution: `iⁿ 4’lük döngüdedir. ${n} = 4 · ${(n - m) / 4} + ${m} → i^{${n}} = i^{${m}} = ${val}.` };
    }
  ]
};

export const FIZIK: Record<string, Generator[]> = {
  'Madde ve Özellikleri': [
    (r) => {
      const d = pick(r, [0.8, 1, 2, 2.5, 4, 8]), V = pick(r, [10, 20, 25, 40, 50, 100]);
      return g(r, `Hacmi ${V} cm³ olan bir cismin özkütlesi ${num(d)} g/cm³ ise kütlesi kaç gramdır?`, d * V, [V / d, d + V, d * V * 2, V], `m = d · V = ${num(d)} · ${V} = ${num(d * V)} g.`);
    }
  ],
  'Basınç ve Kaldırma Kuvveti': [
    (r) => {
      const F = pick(r, [20, 40, 60, 100, 120, 200]), A = pick(r, [2, 4, 5, 10]);
      return g(r, `${F} N ağırlığındaki bir cisim, yere temas alanı ${A} m² olan yüzeyiyle duruyor. Yere uyguladığı basınç kaç Pa’dır?`, F / A, [F * A, F + A, F / A / 2, F - A], `P = {F/A} = {${F}/${A}} = ${num(F / A)} Pa.`);
    },
    (r) => {
      const h = int(r, 2, 20), d = pick(r, [1000, 800]);
      return g(r, `Özkütlesi ${d} kg/m³ olan bir sıvının ${h} m derinliğindeki sıvı basıncı kaç Pa’dır? (g = 10 N/kg)`, h * d * 10, [h * d, h * 10, h * d * 100, (h * d * 10) / 2], `P = h · d · g = ${h} · ${d} · 10 = ${h * d * 10} Pa.`);
    }
  ],
  'Isı, Sıcaklık ve Genleşme': [
    (r) => {
      const m = pick(r, [100, 200, 250, 500]), dT = pick(r, [10, 20, 30, 40]);
      return g(r, `${m} g suyun sıcaklığını ${dT} °C artırmak için kaç kalori ısı gerekir? (c_{su} = 1 cal/g°C)`, m * dT, [m + dT, m / dT, m * dT * 2, m * dT / 10], `Q = m · c · ΔT = ${m} · 1 · ${dT} = ${m * dT} cal.`);
    }
  ],
  'Hareket ve Kuvvet': [
    (r) => {
      const v = pick(r, [5, 10, 15, 20, 25]), t = int(r, 3, 12);
      return g(r, `Sabit ${v} m/s hızla giden bir araç ${t} saniyede kaç metre yol alır?`, v * t, [v + t, v / t, v * t * 2, v * t / 2], `x = v · t = ${v} · ${t} = ${v * t} m.`);
    },
    (r) => {
      const m = pick(r, [2, 4, 5, 8, 10]), a = pick(r, [2, 3, 4, 5]);
      return g(r, `Sürtünmesiz yatay düzlemde ${m} kg kütleli cisme ${m * a} N’luk net kuvvet uygulanıyor. Cismin ivmesi kaç m/s²’dir?`, a, [m * a * m, m, a + 1, m * a], `F = m · a → a = {${m * a}/${m}} = ${a} m/s².`);
    }
  ],
  'İş, Güç ve Enerji': [
    (r) => {
      const m = pick(r, [2, 4, 5, 10]), h = pick(r, [3, 5, 10, 20]);
      return g(r, `${m} kg kütleli bir cisim yerden ${h} m yüksekliğe çıkarılıyor. Cismin kazandığı potansiyel enerji kaç J’dür? (g = 10 m/s²)`, m * 10 * h, [m * h, m * 10 + h, (m * 10 * h) / 2, m * h * 100], `E_{p} = m · g · h = ${m} · 10 · ${h} = ${m * 10 * h} J.`);
    },
    (r) => {
      const m = pick(r, [2, 4, 6, 8]), v = pick(r, [2, 4, 5, 10]);
      return g(r, `${m} kg kütleli bir cisim ${v} m/s hızla hareket ediyor. Kinetik enerjisi kaç J’dür?`, (m * v * v) / 2, [m * v, m * v * v, (m * v) / 2, m + v], `E_{k} = {1/2} m v² = {1/2} · ${m} · ${v * v} = ${(m * v * v) / 2} J.`);
    }
  ],
  'Elektrik Akımı ve Devreler': [
    (r) => {
      const R = pick(r, [2, 4, 5, 6, 10, 12]), I = pick(r, [1, 2, 3, 4]);
      return g(r, `${R} Ω’luk bir dirençten ${I} A akım geçiyor. Direncin uçları arasındaki potansiyel farkı kaç V’tur?`, R * I, [R / I, R + I, R * I * 2, I], `Ohm yasası: V = I · R = ${I} · ${R} = ${R * I} V.`);
    },
    (r) => {
      const [a, b] = pick(r, [[3, 6], [4, 4], [6, 12], [10, 15], [2, 2], [12, 4]] as [number, number][]);
      return g(r, `${a} Ω ve ${b} Ω’luk iki direnç paralel bağlanıyor. Eşdeğer direnç kaç Ω’dur?`, (a * b) / (a + b), [a + b, (a + b) / 2, Math.abs(a - b) || 1, a * b], `Paralelde {1/R} = {1/${a}} + {1/${b}} → R = {${a} · ${b}/${a} + ${b}} = ${num((a * b) / (a + b))} Ω. (Seri bağlansaydı ${a + b} Ω olurdu.)`);
    }
  ]
};

/* Atom kütleleri: tam sayı alınan yaygın değerler */
const MOL: [string, number, string][] = [['H₂O', 18, '2 · 1 + 16'], ['CO₂', 44, '12 + 2 · 16'], ['CH₄', 16, '12 + 4 · 1'], ['NH₃', 17, '14 + 3 · 1'], ['O₂', 32, '2 · 16'], ['NaOH', 40, '23 + 16 + 1'], ['MgO', 40, '24 + 16'], ['CaCO₃', 100, '40 + 12 + 3 · 16']];

export const KIMYA: Record<string, Generator[]> = {
  'Mol Kavramı ve Kimyasal Hesaplamalar': [
    (r) => {
      const [f, M, how] = pick(r, MOL); const n = pick(r, [0.5, 1, 2, 3, 4]);
      return g(r, `${num(n * M)} gram ${f} kaç moldür? (H: 1, C: 12, N: 14, O: 16, Na: 23, Mg: 24, Ca: 40)`, n, [n * M, n * 2, M, n / 2], `${f} için mol kütlesi ${how} = ${M} g/mol. n = {m/M} = {${num(n * M)}/${M}} = ${num(n)} mol.`);
    }
  ],
  'Atom ve Periyodik Sistem': [
    (r) => {
      const E = pick(r, [['Na', 11, 23], ['Mg', 12, 24], ['Al', 13, 27], ['Cl', 17, 35], ['K', 19, 39], ['Ca', 20, 40], ['O', 8, 16], ['C', 6, 12]] as [string, number, number][]);
      const [s, Z, A] = E;
      return g(r, `Atom numarası ${Z}, kütle numarası ${A} olan ${s} atomunun çekirdeğinde kaç nötron vardır?`, A - Z, [Z, A, A + Z, A - Z + 1], `Nötron sayısı = kütle numarası − proton sayısı = ${A} − ${Z} = ${A - Z}.`);
    }
  ]
};

export const BIYOLOJI: Record<string, Generator[]> = {
  'Hücre Bölünmeleri': [
    (r) => {
      const n2 = pick(r, [8, 14, 16, 24, 38, 46, 48]);
      const mitoz = r() < 0.5;
      return mitoz
        ? g(r, `Vücut hücrelerinde ${n2} kromozom bulunan bir canlının vücut hücresi mitozla bölünüyor. Oluşan yavru hücrelerin her birinde kaç kromozom bulunur?`, n2, [n2 / 2, n2 * 2, n2 / 4, n2 + 2], `Mitozda kromozom sayısı korunur: 2n = ${n2} → yavru hücreler de 2n = ${n2}.`)
        : g(r, `Vücut hücrelerinde ${n2} kromozom bulunan bir canlıda mayozla oluşan üreme hücrelerinin her birinde kaç kromozom bulunur?`, n2 / 2, [n2, n2 * 2, n2 / 4, n2 / 2 + 1], `Mayozda kromozom sayısı yarıya iner: 2n = ${n2} → n = ${n2 / 2}.`);
    }
  ],
  'Kalıtım': [
    (r) => {
      const cases = [
        { p: 'Aa × Aa', q: 'aa (çekinik özellik gösteren)', v: new Frac(1, 4), s: 'Aa × Aa → AA, Aa, Aa, aa. aa olma olasılığı {1/4}.' },
        { p: 'Aa × Aa', q: 'baskın özellik gösteren', v: new Frac(3, 4), s: 'Aa × Aa → AA, Aa, Aa, aa. Baskın fenotip AA ve Aa: {3/4}.' },
        { p: 'Aa × aa', q: 'aa', v: new Frac(1, 2), s: 'Aa × aa → Aa, Aa, aa, aa. aa olma olasılığı {1/2}.' },
        { p: 'AA × aa', q: 'Aa', v: new Frac(1), s: 'AA × aa → bütün yavrular Aa.' },
        { p: 'AaBb × aabb', q: 'aabb', v: new Frac(1, 4), s: 'Genler bağımsız: Aa × aa’dan aa {1/2}, Bb × bb’den bb {1/2}; çarpım {1/4}.' },
        { p: 'AaBb × AaBb', q: 'aabb', v: new Frac(1, 16), s: 'Her gen için {1/4}: {1/4} · {1/4} = {1/16}.' }
      ];
      const c = pick(r, cases);
      return fracQ(r, `${c.p} çaprazlamasında oluşan bir yavrunun ${c.q} olma olasılığı kaçtır? (A, a’ya baskın; genler bağımsız)`, c.v, [new Frac(1, 4), new Frac(1, 2), new Frac(3, 4), new Frac(1, 8), new Frac(1, 16)].filter((x) => !x.eq(c.v)), c.s);
    }
  ]
};

export const COGRAFYA: Record<string, Generator[]> = {
  'Harita Bilgisi': [
    (r) => {
      const scale = pick(r, [100000, 200000, 250000, 500000, 1000000]), cm = int(r, 2, 12);
      const km = (cm * scale) / 100000;
      return g(r, `1/${scale.toLocaleString('tr-TR')} ölçekli bir haritada iki şehir arası ${cm} cm ise gerçek uzaklık kaç km’dir?`, km, [km * 10, km / 10, cm * scale / 1000, km * 100], `Gerçek uzaklık = ${cm} · ${scale.toLocaleString('tr-TR')} cm = ${(cm * scale).toLocaleString('tr-TR')} cm = ${num(km)} km (1 km = 100 000 cm).`);
    }
  ]
};
