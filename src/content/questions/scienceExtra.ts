/* Ek üreticiler: daha önce sorusu olmayan hesaplamalı konular. Her üreticide o soruya özel ipucu var.
   Kabuller (π = 3, g = 10) soruda yazılır; cevaplar kodla hesaplanır. */
import { int, num, numChoices, choices, pick, type Generator, type Rnd } from './core';

const g = (r: Rnd, stem: string, correct: number, wrong: number[], solution: string, hint: string) => ({ stem, ...numChoices(r, correct, wrong), solution, hint });
const ten = (e: number) => `1 · 10^{−${e}}`;

export const SCIENCE_EXTRA: Record<string, Record<string, Generator[]>> = {
  'tyt-mat': {
    'Grafik ve Tablo Problemleri': [
      (r) => {
        const total = pick(r, [36, 72, 120, 180, 360]), deg = pick(r, [30, 60, 90, 120, 150]);
        const n = (total * deg) / 360;
        return g(r, `${total} kişilik bir grubun daire grafiğinde “kitap okumak” dilimi ${deg}°’dir. Kaç kişi kitap okumayı seçmiştir?`, n, [deg, total - n, n * 2, n / 2], `Dilim bütünün {${deg}/360}’ı: ${total} · {${deg}/360} = ${num(n)}.`, '');
      },
      (r) => {
        const a = pick(r, [120, 150, 200, 240, 300]), p = pick(r, [10, 20, 25, 50]);
        const b = (a * (100 + p)) / 100;
        return g(r, `Bir tablodaki değer bir yıldan ötekine ${a}’dan ${num(b)}’e çıkmıştır. Artış yüzde kaçtır?`.replace('’dan', ' değerinden').replace('’e çıkmıştır', ' değerine çıkmıştır'), p, [b - a, (b - a) / 2, 100 - p, p * 2], `Artış ${num(b - a)}; {${num(b - a)}/${a}} · 100 = %${p}.`, '');
      }
    ]
  },
  'ayt-fiz': {
    'Manyetizma ve Elektromanyetik İndükleme': [
      (r) => {
        const B = pick(r, [0.2, 0.4, 0.5, 1, 2]), L = pick(r, [0.5, 1, 2]), v = pick(r, [2, 4, 5, 10]);
        const e = B * L * v;
        return g(r, `Büyüklüğü ${num(B)} T olan düzgün manyetik alanda ${num(L)} m uzunluğundaki iletken çubuk, alana dik olarak ${v} m/s hızla hareket ediyor. Çubukta oluşan indüksiyon emk’sı kaç V’tur?`, e, [B * v, B * L, e * 2, L * v], `ε = B · L · v = ${num(B)} · ${num(L)} · ${v} = ${num(e)} V.`, 'Alanda hareket eden çubukta emk = B · L · v. Verilen üç büyüklüğü çarp.');
      },
      (r) => {
        const B = pick(r, [0.2, 0.5, 1, 2, 4]), A = pick(r, [0.1, 0.2, 0.5, 2]);
        const f = B * A;
        return g(r, `${num(B)} T’lık düzgün manyetik alana dik konmuş ${num(A)} m² alanlı bir halkadan geçen manyetik akı kaç weber’dir?`, f, [B / A, B + A, f * 2, A / B], `Φ = B · A · cos 0° = ${num(B)} · ${num(A)} = ${num(f)} Wb.`, 'Manyetik akı = alan şiddeti · yüzey alanı · cos α. Alan yüzeye dikken açı 0° alınır.');
      },
      (r) => {
        const N = pick(r, [10, 20, 50, 100]), dF = pick(r, [0.2, 0.4, 0.5, 1]), dt = pick(r, [0.1, 0.2, 0.5, 1]);
        const e = (N * dF) / dt;
        if (!Number.isInteger(e * 10)) return SCIENCE_EXTRA['ayt-fiz']!['Manyetizma ve Elektromanyetik İndükleme']![0]!(r);
        return g(r, `${N} sarımlı bir bobinden geçen manyetik akı ${num(dt)} saniyede ${num(dF)} Wb değişiyor. Bobinde oluşan ortalama emk’nın büyüklüğü kaç V’tur?`, e, [dF / dt, N * dF, (N * dt) / dF, e / 2], `|ε| = N · {ΔΦ/Δt} = ${N} · {${num(dF)}/${num(dt)}} = ${num(e)} V.`, 'Faraday yasası: emk = sarım sayısı · (akı değişimi ÷ süre).');
      }
    ],
    'Basit Harmonik Hareket': [
      (r) => {
        const [m, k, root] = pick(r, [[1, 4, 0.5], [1, 1, 1], [4, 1, 2], [2, 8, 0.5], [9, 4, 1.5], [1, 16, 0.25]] as [number, number, number][]);
        const T = 6 * root;
        return g(r, `Yay sabiti ${k} N/m olan bir yayın ucuna ${m} kg’lık cisim asılıp salındırılıyor. Periyot kaç saniyedir? (π = 3)`, T, [3 * root, 6 * root * root, 12 * root, T + 1], `T = 2π√{{m/k}} = 2 · 3 · √{{${m}/${k}}} = 6 · ${num(root)} = ${num(T)} s.`, 'Yay sarkacında T = 2π√(m/k). Önce m/k oranının karekökünü bul.');
      },
      (r) => {
        const t = pick(r, [0.5, 1, 2, 3]), L = 10 * t * t;
        return g(r, `Uzunluğu ${num(L)} m olan basit sarkacın periyodu kaç saniyedir? (g = 10 m/s², π = 3)`, 6 * t, [3 * t, 6 * t * t, 12 * t, L / 10], `T = 2π√{{L/g}} = 6 · √{{${num(L)}/10}} = 6 · ${num(t)} = ${num(6 * t)} s.`, 'Basit sarkaçta T = 2π√(L/g); kütle periyodu etkilemez.');
      }
    ],
    'Modern Fizik ve Uygulamaları': [
      (r) => {
        const W = pick(r, [2, 2.5, 3, 3.5, 4]), E = pick(r, [5, 6, 7, 8]);
        return g(r, `Bağlanma enerjisi ${num(W)} eV olan bir metal yüzeye ${E} eV enerjili fotonlar düşürülüyor. Kopan elektronların en büyük kinetik enerjisi kaç eV’tur?`, E - W, [E + W, W, E, (E - W) / 2], `E_{k,maks} = E_{foton} − W₀ = ${E} − ${num(W)} = ${num(E - W)} eV.`, 'Fotonun enerjisinin bir kısmı elektronu koparmaya (bağlanma enerjisi) harcanır; kalanı kinetik enerjidir.');
      },
      (r) => {
        const n = int(r, 2, 4);
        return g(r, `Fotoelektrik olayda kullanılan ışığın şiddeti (frekans sabit, eşik üstünde) ${n} katına çıkarılırsa birim zamanda kopan elektron sayısı kaç katına çıkar?`, n, [1, n * n, 0, n + 1], `Şiddet foton sayısıyla orantılıdır; kopan elektron sayısı da ${n} katına çıkar. Elektronların enerjisi değişmez.`, 'Işık şiddeti fotonların sayısını mı, her birinin enerjisini mi değiştirir?');
      }
    ]
  },
  'ayt-kim': {
    'Tepkime Hızları': [
      (r) => {
        const a = int(r, 1, 2), b = int(r, 0, 2), fa = pick(r, [2, 3]), fb = pick(r, [1, 2, 3]);
        const k = fa ** a * fb ** b;
        const law = `r = k[X]${a > 1 ? `^{${a}}` : ''}${b ? `[Y]${b > 1 ? `^{${b}}` : ''}` : ''}`;
        return g(r, `Hız ifadesi ${law} olan bir tepkimede [X] ${fa} katına${b ? `, [Y] ${fb} katına` : ''} çıkarılırsa hız kaç katına çıkar?`, k, [fa * (b ? fb : 1), fa + fb, k * fa, fa ** (a + 1)], `Hız ${fa}^{${a}}${b ? ` · ${fb}^{${b}}` : ''} = ${k} katına çıkar.`, 'Her derişimin artış katsayısını hız ifadesindeki üssü kadar kuvvete yükselt, sonra çarp.');
      }
    ],
    'Çözünürlük Dengesi': [
      (r) => {
        const e = int(r, 3, 6);
        const right = ten(2 * e);
        return { stem: `AB tuzunun sudaki çözünürlüğü ${ten(e)} mol/L’dir. Bu tuzun çözünürlük çarpımı (K_{çç}) kaçtır?`, ...choices(r, right, [ten(e), `2 · 10^{−${e}}`, `4 · 10^{−${3 * e}}`, ten(e + 1)]), solution: `AB → A⁺ + B⁻; [A⁺] = [B⁻] = s. K_{çç} = s² = (10^{−${e}})² = ${right}.`, hint: 'AB tipi tuzda iki iyonun derişimi de çözünürlüğe eşittir; ikisini çarp.' };
      },
      (r) => {
        const e = pick(r, [2, 3, 4]);
        const right = `4 · 10^{−${3 * e}}`;
        return { stem: `AB₂ tipindeki bir tuzun çözünürlüğü ${ten(e)} mol/L’dir. K_{çç} kaçtır?`, ...choices(r, right, [ten(2 * e), `2 · 10^{−${2 * e}}`, `1 · 10^{−${3 * e}}`, `4 · 10^{−${2 * e}}`]), solution: `AB₂ → A²⁺ + 2B⁻: [A²⁺] = s, [B⁻] = 2s. K_{çç} = s · (2s)² = 4s³ = ${right}.`, hint: 'B⁻ iyonunun derişimi 2s olur; ifadede onun karesi alınır.' };
      }
    ],
    'Modern Atom Teorisi': [
      (r) => {
        const [s, Z, cfg, val, grp] = pick(r, [['Na', 11, '1s² 2s² 2p⁶ 3s¹', 1, '1A'], ['Mg', 12, '1s² 2s² 2p⁶ 3s²', 2, '2A'], ['Al', 13, '1s² 2s² 2p⁶ 3s² 3p¹', 3, '3A'], ['Si', 14, '1s² 2s² 2p⁶ 3s² 3p²', 4, '4A'], ['P', 15, '1s² 2s² 2p⁶ 3s² 3p³', 5, '5A'], ['S', 16, '1s² 2s² 2p⁶ 3s² 3p⁴', 6, '6A'], ['Cl', 17, '1s² 2s² 2p⁶ 3s² 3p⁵', 7, '7A'], ['O', 8, '1s² 2s² 2p⁴', 6, '6A'], ['N', 7, '1s² 2s² 2p³', 5, '5A']] as [string, number, string, number, string][]);
        return g(r, `₍${Z}₎${s} atomunun değerlik (son katmandaki) elektron sayısı kaçtır?`.replace(`₍${Z}₎`, `Atom numarası ${Z} olan `), val, [Z, Z - val, val + 1, 8 - val], `Dizilim: ${cfg}. Son katmanda ${val} elektron var; ${grp} grubu.`, 'Elektronları katmanlara yerleştir ve yalnız en dıştaki katmandakileri say.');
      }
    ],
    'Karbon Kimyasına Giriş': [
      (r) => {
        const [f, sig, pi, why] = pick(r, [['CH₄', 4, 0, 'dört C−H tekli bağ'], ['C₂H₆', 7, 0, 'altı C−H ve bir C−C tekli bağ'], ['C₂H₄', 5, 1, 'dört C−H ve bir C=C (1 σ + 1 π)'], ['C₂H₂', 3, 2, 'iki C−H ve bir C≡C (1 σ + 2 π)'], ['CO₂', 2, 2, 'iki C=O, her biri 1 σ + 1 π']] as [string, number, number, string][]);
        const right = `${sig} σ, ${pi} π`;
        return { stem: `${f} molekülünde kaç σ (sigma) ve kaç π (pi) bağı vardır?`, ...choices(r, right, [`${sig + pi} σ, 0 π`, `${sig} σ, ${pi + 1} π`, `${Math.max(1, sig - 1)} σ, ${pi + 1} π`, `${sig + 1} σ, ${pi} π`].filter((x) => x !== right), (i) => `${sig + i + 2} σ, ${pi + i + 1} π`), solution: `${f}: ${why}. Toplam ${right}.`, hint: 'Her bağın ilki σ’dır; ikili bağda bir, üçlü bağda iki π vardır. Bağları tek tek say.' };
      }
    ]
  }
};
