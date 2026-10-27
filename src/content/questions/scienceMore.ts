/* Ek fen üreticileri: TYT/AYT fizik, kimya, biyoloji. Formüller lise müfredatındaki standart biçimleriyle;
   g = 10 m/s², π = 3 gibi kabuller soruda yazılır. Cevaplar kodla hesaplanır. */
import { Frac, int, num, numChoices, choices, pick, type Generator, type Rnd } from './core';

const g = (r: Rnd, stem: string, correct: number, wrong: number[], solution: string, hint?: string) => ({ stem, ...numChoices(r, correct, wrong), solution, hint });

export const SCIENCE_MORE: Record<string, Record<string, Generator[]>> = {
  'tyt-fiz': {
    'Madde ve Özellikleri': [
      (r) => {
        const m = pick(r, [20, 40, 60, 80, 120]), V = pick(r, [10, 20, 40]);
        return g(r, `Kütlesi ${m} g, hacmi ${V} cm³ olan bir cismin özkütlesi kaç g/cm³’tür?`, m / V, [m * V, V / m, m - V, (m / V) * 2], `d = {m/V} = {${m}/${V}} = ${num(m / V)} g/cm³.`, `Özkütle = {kütle/hacim}.`);
      },
      (r) => {
        const [d1, V1, d2, V2] = [pick(r, [1, 2, 3]), pick(r, [10, 20, 30]), pick(r, [2, 4, 5]), pick(r, [10, 20, 30])];
        const d = (d1 * V1 + d2 * V2) / (V1 + V2);
        return g(r, `Özkütlesi ${d1} g/cm³ olan ${V1} cm³ sıvı ile özkütlesi ${d2} g/cm³ olan ${V2} cm³ sıvı karıştırılıyor (hacim korunuyor). Karışımın özkütlesi kaç g/cm³’tür?`, d, [(d1 + d2) / 2, d1 + d2, (d1 * V1 + d2 * V2) / 2, d + 1], `d = {toplam kütle/toplam hacim} = {${d1 * V1} + ${d2 * V2}/${V1 + V2}} = ${num(d)} g/cm³.`, `Karışımın özkütlesi = {toplam kütle/toplam hacim}. Önce her sıvının kütlesini (d · V) bul.`);
      }
    ],
    'Basınç ve Kaldırma Kuvveti': [
      (r) => {
        const L = pick(r, [2, 5, 10, 20]), d = pick(r, [1000, 800]);
        const F = (L * d * 10) / 1000;
        return g(r, `Hacmi ${L} litre olan bir cisim özkütlesi ${d} kg/m³ olan sıvıya tamamen batırılıyor. Cisme etki eden kaldırma kuvveti kaç N’dur? (g = 10 m/s², 1 L = 10^{−3} m³)`, F, [(L * d) / 1000, F * 10, F / 2, L * 10], `F_{k} = V_{batan} · d_{sıvı} · g = ${L} · 10^{−3} · ${d} · 10 = ${num(F)} N.`, `Kaldırma kuvveti F_{k} = V_{batan} · d_{sıvı} · g. Hacmi önce m³’e çevir: ${L} L = ${L} · 10^{−3} m³.`);
      },
      (r) => {
        const F1 = pick(r, [10, 20, 50]), A1 = pick(r, [1, 2, 5]), A2 = A1 * pick(r, [5, 10, 20]);
        const F2 = (F1 * A2) / A1;
        return g(r, `Bir su cenderesinde küçük pistonun kesit alanı ${A1} cm², büyük pistonunki ${A2} cm²’dir. Küçük pistona ${F1} N kuvvet uygulanırsa büyük pistonda kaç N kuvvet oluşur?`, F2, [(F1 * A1) / A2, F1 * A2, F1 + A2, F2 / 2], `Basınç eşit iletilir: {F₁/A₁} = {F₂/A₂} → F₂ = ${F1} · {${A2}/${A1}} = ${F2} N.`, `Pascal ilkesi: basınç iki pistonda aynıdır, {F₁/A₁} = {F₂/A₂}. Alan kaç katına çıkıyorsa kuvvet de o kadar artar.`);
      }
    ],
    'Isı, Sıcaklık ve Genleşme': [
      (r) => {
        let m1 = 0, t1 = 0, m2 = 0, t2 = 0, T = 0.5;
        while (!Number.isInteger(T)) { m1 = pick(r, [100, 200, 300]); t1 = pick(r, [10, 20, 30]); m2 = pick(r, [100, 200, 300]); t2 = pick(r, [50, 60, 80, 90]); T = (m1 * t1 + m2 * t2) / (m1 + m2); }
        return g(r, `${t1} °C’deki ${m1} g su ile ${t2} °C’deki ${m2} g su karıştırılıyor. Isı alışverişi yalnız sular arasında olursa denge sıcaklığı kaç °C olur?`, T, [(t1 + t2) / 2, t2 - t1, T + 5, t1 + t2], `Alınan ısı = verilen ısı: ${m1}(T − ${t1}) = ${m2}(${t2} − T) → T = {${m1 * t1} + ${m2 * t2}/${m1 + m2}} = ${T} °C.`, `Alınan ısı = verilen ısı. Soğuk su ısınır (T − ${t1}), sıcak su soğur (${t2} − T); c iki tarafta aynı olduğu için sadeleşir.`);
      },
      (r) => {
        const C = pick(r, [0, 10, 20, 25, 30, 50, 100]);
        return g(r, `${C} °C sıcaklık kaç kelvindir?`, C + 273, [C - 273, C * 273, C + 100, 273 - C], `T(K) = t(°C) + 273 = ${C} + 273 = ${C + 273} K.`, `Celsius’tan kelvine geçerken her değere aynı sabit sayı eklenir; bu sayı mutlak sıfırın Celsius değeriyle ilgilidir.`);
      }
    ],
    'Hareket ve Kuvvet': [
      (r) => {
        const v0 = pick(r, [0, 2, 4, 5, 10]), a = pick(r, [1, 2, 3, 4]), t = int(r, 2, 8);
        return g(r, `İlk hızı ${v0} m/s olan bir araç ${a} m/s² sabit ivmeyle hızlanıyor. ${t} saniye sonra hızı kaç m/s olur?`, v0 + a * t, [a * t, v0 * t + a, (v0 + a) * t, v0 + a * t * t], `v = v₀ + a · t = ${v0} + ${a} · ${t} = ${v0 + a * t} m/s.`, `Sabit ivmeli harekette hız: v = v₀ + a · t.`);
      },
      (r) => {
        const m = pick(r, [2, 4, 5, 10]), k = pick(r, [0.1, 0.2, 0.5]), F = pick(r, [20, 30, 40, 60]);
        const fs = k * m * 10; const a = (F - fs) / m;
        if (a <= 0 || !Number.isInteger(a * 10)) return SCIENCE_MORE['tyt-fiz']!['Hareket ve Kuvvet']![0]!(r);
        return g(r, `Yatay düzlemde duran ${m} kg kütleli cisme ${F} N yatay kuvvet uygulanıyor. Sürtünme katsayısı ${num(k)} ise cismin ivmesi kaç m/s²’dir? (g = 10 m/s²)`, a, [F / m, fs / m, (F + fs) / m, a + 1], `Sürtünme kuvveti k · m · g = ${num(fs)} N. Net kuvvet ${F} − ${num(fs)} = ${num(F - fs)} N; a = {${num(F - fs)}/${m}} = ${num(a)} m/s².`, `Önce sürtünme kuvvetini bul: f = k · m · g. Net kuvvet = uygulanan − sürtünme; sonra a = {F_{net}/m}.`);
      }
    ],
    'İş, Güç ve Enerji': [
      (r) => {
        const F = pick(r, [10, 20, 25, 40, 50]), x = pick(r, [2, 4, 5, 10]);
        return g(r, `Bir cisme hareket yönünde ${F} N’luk sabit kuvvet uygulanarak cisim ${x} m yol alıyor. Kuvvetin yaptığı iş kaç J’dür?`, F * x, [F + x, F / x, (F * x) / 2, F * x * 2], `W = F · x = ${F} · ${x} = ${F * x} J.`, `İş = kuvvet · yol (kuvvet hareket yönündeyse).`);
      },
      (r) => {
        const W = pick(r, [600, 1200, 1800, 2400, 3000]), t = pick(r, [10, 20, 30, 60]);
        return g(r, `Bir motor ${W} J’lük işi ${t} saniyede yapıyor. Motorun gücü kaç W’tır?`, W / t, [W * t, t / W, W - t, (W / t) * 2], `P = {W/t} = {${W}/${t}} = ${num(W / t)} W.`, `Güç = {iş/zaman}.`);
      }
    ],
    'Elektrostatik': [
      (r) => {
        const q1 = pick(r, [2, 4, 6, 8, 10]), q2 = pick(r, [-2, 4, 6, -6, 2, -8]);
        const q = (q1 + q2) / 2;
        return g(r, `Yükleri +${q1}q ve ${q2 > 0 ? `+${q2}` : `−${-q2}`}q olan özdeş iki iletken küre birbirine dokundurulup ayrılıyor. Kürelerden birinin son yükü kaç q olur?`, q, [q1 + q2, q1 - q2, (q1 - q2) / 2, q1], `Özdeş kürelerde toplam yük eşit paylaşılır: {${q1} ${q2 > 0 ? '+' : '−'} ${Math.abs(q2)}/2} = ${num(q)} (q cinsinden).`, `Özdeş küreler dokununca toplam yük ikiye eşit bölünür. Önce yükleri işaretleriyle topla.`);
      }
    ],
    'Elektrik Akımı ve Devreler': [
      (r) => {
        const R = [pick(r, [2, 3, 4]), pick(r, [4, 5, 6]), pick(r, [1, 2, 3])];
        return g(r, `${R.join(' Ω, ')} Ω’luk üç direnç seri bağlanıyor. Eşdeğer direnç kaç Ω’dur?`, R.reduce((a, b) => a + b, 0), [R[0]! * R[1]! * R[2]!, Math.max(...R), R.reduce((a, b) => a + b, 0) / 3, R[0]! + R[1]!], `Seride dirençler toplanır: ${R.join(' + ')} = ${R.reduce((a, b) => a + b, 0)} Ω.`, `Seri bağlı dirençlerde eşdeğer direnç nasıl bulunur: toplama mı, çarpım bölü toplam mı?`);
      },
      (r) => {
        const V = pick(r, [12, 24, 36, 60]), R = pick(r, [2, 3, 4, 6]);
        const I = V / R, P = V * I;
        return g(r, `${V} V’luk gerilime bağlı ${R} Ω’luk bir direncin harcadığı güç kaç W’tır?`, P, [V * R, I, V / R / R, P / 2], `I = {V/R} = ${num(I)} A; P = V · I = ${V} · ${num(I)} = ${num(P)} W.`, `Önce akımı bul (I = {V/R}), sonra güç P = V · I. Ya da doğrudan P = {V²/R}.`);
      },
      (r) => {
        const q = pick(r, [10, 20, 30, 60, 120]), t = pick(r, [2, 5, 10, 20]);
        return g(r, `Bir iletkenin kesitinden ${t} saniyede ${q} C yük geçiyor. Akım şiddeti kaç A’dir?`.replace('A’dir', 'amperdir'), q / t, [q * t, t / q, q - t, (q / t) * 2], `I = {q/t} = {${q}/${t}} = ${num(q / t)} A.`, `Akım = {yük/zaman}: amper, bir saniyede geçen coulomb miktarıdır.`);
      }
    ],
    'Dalgalar': [
      (r) => {
        const f = pick(r, [2, 4, 5, 10, 20]), l = pick(r, [0.5, 1, 2, 3, 4]);
        return g(r, `Frekansı ${f} Hz, dalga boyu ${num(l)} m olan bir dalganın yayılma hızı kaç m/s’dir?`, f * l, [f / l, l / f, f + l, f * l * 2], `v = λ · f = ${num(l)} · ${f} = ${num(f * l)} m/s.`, `Dalga hızı = dalga boyu · frekans (v = λ · f).`);
      },
      (r) => {
        const T = pick(r, [0.1, 0.2, 0.5, 2, 4]);
        return g(r, `Periyodu ${num(T)} s olan bir dalganın frekansı kaç Hz’dir?`, 1 / T, [T, 2 / T, T * 10, 1 / T + 1], `f = {1/T} = {1/${num(T)}} = ${num(1 / T)} Hz.`, `Frekans periyodun tersidir: f = {1/T}.`);
      }
    ],
    'Optik': [
      (r) => {
        const d = int(r, 2, 15);
        return g(r, `Düz aynanın ${d} cm önündeki bir cismin görüntüsü cisme kaç cm uzaklıktadır?`, 2 * d, [d, d / 2, 3 * d, d + 2], `Düz aynada görüntü, aynanın arkasında cisimle aynı uzaklıktadır (${d} cm). Cisim–görüntü arası ${2 * d} cm.`, `Düz aynada görüntü, aynanın arkasında cisimle aynı uzaklıktadır. Soru aynaya değil cisme uzaklığı soruyor.`);
      },
      (r) => {
        const a = int(r, 20, 70);
        return g(r, `Bir ışın düz aynaya yüzeyle ${a}° açı yapacak şekilde geliyor. Yansıma açısı kaç derecedir?`, 90 - a, [a, 180 - a, 2 * a, 90 + a], `Açılar normalle ölçülür: gelme açısı 90 − ${a} = ${90 - a}°. Yansıma açısı gelme açısına eşittir: ${90 - a}°.`, `Açılar yüzeyle değil, normalle (yüzeye dik çizgi) ölçülür. Normal ile yüzey arasında 90° var.`);
      }
    ]
  },

  'ayt-fiz': {
    'Vektörler ve Bağıl Hareket': [
      (r) => {
        const [a, b, c] = pick(r, [[3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15]] as [number, number, number][]);
        return g(r, `Büyüklükleri ${a} N ve ${b} N olan ve aralarında 90° açı bulunan iki kuvvetin bileşkesi kaç N’dur?`, c, [a + b, Math.abs(b - a), (a + b) / 2, c * c], `Dik vektörlerde R = √{${a}² + ${b}²} = √{${c * c}} = ${c} N.`, `Dik iki vektörün bileşkesi Pisagor ile bulunur: R = √{a² + b²}.`);
      },
      (r) => {
        const v1 = pick(r, [40, 50, 60, 80]), v2 = pick(r, [20, 30, 70, 90]);
        const same = r() < 0.5;
        return g(r, `Aynı doğrultuda ${same ? 'aynı' : 'zıt'} yönlerde ${v1} km/sa ve ${v2} km/sa hızla giden iki aracın birbirine göre hızlarının büyüklüğü kaç km/sa’tir?`.replace('km/sa’tir', 'km/sa olur'), same ? Math.abs(v1 - v2) : v1 + v2, [same ? v1 + v2 : Math.abs(v1 - v2), (v1 + v2) / 2, v1, v2], same ? `Aynı yönde bağıl hız farktır: |${v1} − ${v2}| = ${Math.abs(v1 - v2)} km/sa.` : `Zıt yönde bağıl hız toplamdır: ${v1} + ${v2} = ${v1 + v2} km/sa.`, `Aynı yönde giden araçlarda bağıl hız farktır, zıt yönde toplamdır.`);
      }
    ],
    'Newton’un Hareket Yasaları': [
      (r) => {
        const m1 = pick(r, [1, 2, 3]), m2 = pick(r, [2, 3, 4, 5]), F = (m1 + m2) * pick(r, [2, 3, 4]);
        const a = F / (m1 + m2);
        return g(r, `Sürtünmesiz yatay düzlemde birbirine bağlı ${m1} kg ve ${m2} kg kütleli iki cisme ${F} N’luk yatay kuvvet uygulanıyor. Sistemin ivmesi kaç m/s²’dir?`, a, [F / m1, F / m2, F * (m1 + m2), a * 2], `a = {F/toplam kütle} = {${F}/${m1 + m2}} = ${a} m/s².`, `Birbirine bağlı cisimler birlikte hareket eder: F = (m₁ + m₂) · a.`);
      },
      (r) => {
        const m = pick(r, [2, 4, 5, 10]);
        return g(r, `Kütlesi ${m} kg olan bir cismin Dünya yüzeyindeki ağırlığı kaç N’dur? (g = 10 m/s²)`, m * 10, [m, m / 10, m * 100, m + 10], `G = m · g = ${m} · 10 = ${m * 10} N. (Kütle kg, ağırlık N ile ölçülür.)`, `Ağırlık = kütle · yer çekimi ivmesi (G = m · g).`);
      }
    ],
    'Bir Boyutta Sabit İvmeli Hareket': [
      (r) => {
        const v0 = pick(r, [0, 2, 4, 10]), a = pick(r, [2, 4, 6]), t = int(r, 2, 6);
        const x = v0 * t + (a * t * t) / 2;
        return g(r, `İlk hızı ${v0} m/s olan bir cisim ${a} m/s² sabit ivmeyle ${t} saniye hareket ediyor. Aldığı yol kaç m’dir?`, x, [v0 * t + a * t * t, (v0 + a * t) * t, a * t * t, x / 2], `x = v₀t + {1/2}at² = ${v0 * t} + {1/2} · ${a} · ${t * t} = ${x} m.`, `Yol formülü: x = v₀ · t + {1/2} · a · t².`);
      }
    ],
    'Atışlar': [
      (r) => {
        const t = int(r, 1, 6);
        return g(r, `Serbest bırakılan bir cisim ${t} saniyede kaç m düşer? (g = 10 m/s², hava direnci yok)`, 5 * t * t, [10 * t, 10 * t * t, 5 * t, 20 * t], `h = {1/2} g t² = 5 · ${t * t} = ${5 * t * t} m.`, `Serbest düşmede h = {1/2} g t²; sürenin karesini almayı unutma.`);
      },
      (r) => {
        const v = pick(r, [10, 20, 30, 40]);
        return g(r, `Yerden düşey yukarı ${v} m/s hızla atılan bir cisim en fazla kaç m yükselir? (g = 10 m/s², hava direnci yok)`, (v * v) / 20, [v / 10, (v * v) / 10, v * 2, (v * v) / 40], `h_{maks} = {v²/2g} = {${v * v}/20} = ${(v * v) / 20} m.`, `Tepe noktasında hız sıfırdır. v² = 2gh bağıntısından h’yi çek.`);
      },
      (r) => {
        const v = pick(r, [10, 20, 30, 40]);
        return g(r, `Düşey yukarı ${v} m/s hızla atılan bir cisim kaç saniyede tepe noktasına ulaşır? (g = 10 m/s²)`, v / 10, [v / 5, v, v / 20, (v * v) / 20], `Tepe noktasında hız sıfırdır: t = {v/g} = {${v}/10} = ${v / 10} s.`, `Cisim her saniye 10 m/s hız kaybeder. Hız kaç saniyede sıfıra iner?`);
      }
    ],
    'İtme ve Momentum': [
      (r) => {
        const m = pick(r, [2, 4, 5, 10]), v = pick(r, [3, 4, 6, 10]);
        return g(r, `${m} kg kütleli, ${v} m/s hızla giden bir cismin momentumu kaç kg·m/s’dir?`, m * v, [m + v, (m * v * v) / 2, m / v, m * v * 2], `p = m · v = ${m} · ${v} = ${m * v} kg·m/s.`, `Momentum = kütle · hız.`);
      },
      (r) => {
        const m1 = pick(r, [1, 2, 3, 4]), v1 = pick(r, [4, 6, 8, 10, 12]), m2 = pick(r, [1, 2, 3, 4]);
        const v = (m1 * v1) / (m1 + m2);
        if (!Number.isInteger(v * 10)) return SCIENCE_MORE['ayt-fiz']!['İtme ve Momentum']![0]!(r);
        return g(r, `${v1} m/s hızla giden ${m1} kg’lık cisim, duran ${m2} kg’lık cisme çarpıp kenetleniyor. Ortak hızları kaç m/s olur?`, v, [v1, (m1 * v1) / m2, v1 / 2, v * 2], `Momentum korunur: ${m1} · ${v1} = (${m1} + ${m2}) · v → v = {${m1 * v1}/${m1 + m2}} = ${num(v)} m/s.`, `Çarpışmadan önceki toplam momentum = sonraki toplam momentum. Kenetlenen cisimler tek kütle gibi hareket eder.`);
      },
      (r) => {
        const F = pick(r, [10, 20, 50, 100]), t = pick(r, [0.1, 0.2, 0.5, 2]);
        return g(r, `Bir cisme ${num(t)} saniye boyunca ${F} N’luk kuvvet uygulanıyor. Cisme verilen itme kaç N·s’dir?`, F * t, [F / t, F + t, (F * t) / 2, F * t * 10], `İtme = F · Δt = ${F} · ${num(t)} = ${num(F * t)} N·s.`, `İtme = kuvvet · süre (I = F · Δt).`);
      }
    ],
    'Tork, Denge ve Kütle Merkezi': [
      (r) => {
        const F = pick(r, [10, 20, 30, 40]), d = pick(r, [0.2, 0.5, 1, 2]);
        return g(r, `Dönme eksenine ${num(d)} m uzaklıktan dik olarak ${F} N kuvvet uygulanıyor. Kuvvetin torku kaç N·m’dir?`, F * d, [F / d, F + d, (F * d) / 2, F * d * 2], `τ = F · d = ${F} · ${num(d)} = ${num(F * d)} N·m.`, `Tork = kuvvet · dönme eksenine dik uzaklık.`);
      },
      (r) => {
        const w1 = pick(r, [20, 30, 40, 60]), d1 = pick(r, [1, 2, 3]), d2 = pick(r, [1, 2, 3, 4, 6]);
        const w2 = (w1 * d1) / d2;
        if (!Number.isInteger(w2)) return SCIENCE_MORE['ayt-fiz']!['Tork, Denge ve Kütle Merkezi']![0]!(r);
        return g(r, `Ağırlığı önemsiz bir çubuğun destek noktasının bir tarafında ${d1} m uzaklıkta ${w1} N’luk yük asılı. Çubuğun dengede kalması için diğer tarafta ${d2} m uzaklığa kaç N’luk yük asılmalıdır?`, w2, [w1, (w1 * d2) / d1, w1 + d1 - d2, w2 * 2], `Torklar eşit: ${w1} · ${d1} = G · ${d2} → G = ${w2} N.`, `Dengede iki taraftaki torklar eşittir: G₁ · d₁ = G₂ · d₂.`);
      }
    ],
    'Basit Makineler': [
      (r) => {
        const W = pick(r, [100, 200, 300, 400, 600]), n = pick(r, [2, 4]);
        return g(r, `Ağırlığı ve sürtünmesi önemsiz, ${n} ipin yükü taşıdığı bir makara düzeneğiyle ${W} N’luk yük dengede tutuluyor. Uygulanması gereken kuvvet kaç N’dur?`, W / n, [W, W * n, W / (2 * n), W - n], `Yükü taşıyan ${n} ip varsa kuvvet {G/${n}} = {${W}/${n}} = ${W / n} N.`, `Yük, onu taşıyan ipler arasında eşit paylaşılır.`);
      }
    ],
    'Elektriksel Kuvvet, Alan ve Potansiyel': [
      (r) => {
        const q = pick(r, [2, 3, 4, 5]), E = pick(r, [10, 20, 50, 100]);
        return g(r, `Büyüklüğü ${E} N/C olan düzgün elektrik alanına konan ${q} C’luk yüke etki eden kuvvet kaç N’dur?`.replace(`${q} C’luk`, `${q} coulomb’luk`), q * E, [E / q, q + E, (q * E) / 2, q * E * q], `F = q · E = ${q} · ${E} = ${q * E} N.`, `Elektrik alanındaki yüke etki eden kuvvet F = q · E.`);
      },
      (r) => {
        const k = pick(r, [2, 3]);
        return g(r, `İki noktasal yük arasındaki uzaklık ${k} katına çıkarılırsa aralarındaki elektriksel kuvvet kaç kat küçülür?`, k * k, [k, 2 * k, k ** 3, 1], `Coulomb yasası: F ∝ {1/d²}. Uzaklık ${k} katına çıkınca kuvvet ${k * k} kat küçülür.`, `Coulomb yasası: F = k · {q₁ · q₂/d²}. Kuvvet uzaklığın karesiyle ters orantılıdır.`);
      }
    ],
    'Paralel Levhalar ve Sığa': [
      (r) => {
        const C = pick(r, [2, 4, 5, 10]), V = pick(r, [6, 12, 20, 50]);
        return g(r, `Sığası ${C} μF olan bir sığaç ${V} V’luk üretece bağlanıyor. Sığaçta biriken yük kaç μC’dir?`, C * V, [V / C, C + V, (C * V) / 2, C * V * V], `Q = C · V = ${C} · ${V} = ${C * V} μC.`, `Sığaçtaki yük Q = C · V.`);
      }
    ],
    'Alternatif Akım ve Transformatörler': [
      (r) => {
        const Np = pick(r, [100, 200, 500, 1000]), Ns = pick(r, [50, 100, 400, 2000]), Vp = pick(r, [10, 20, 50, 100, 220]);
        const Vs = (Vp * Ns) / Np;
        if (!Number.isInteger(Vs) || Np === Ns) return SCIENCE_MORE['ayt-fiz']!['Alternatif Akım ve Transformatörler']![0]!(r);
        return g(r, `İdeal bir transformatörün birincil sargısında ${Np}, ikincil sargısında ${Ns} sarım vardır. Birincile ${Vp} V uygulanırsa ikincilden kaç V alınır?`, Vs, [(Vp * Np) / Ns, Vp, Vp * Ns, Vs * 2], `{V₁/V₂} = {N₁/N₂} → V₂ = ${Vp} · {${Ns}/${Np}} = ${Vs} V.`, `İdeal transformatörde gerilim sarım sayısıyla doğru orantılıdır: {V₁/V₂} = {N₁/N₂}.`);
      }
    ],
    'Çembersel Hareket': [
      (r) => {
        const v = pick(r, [2, 4, 6, 10]), R = pick(r, [1, 2, 4, 5]);
        return g(r, `${R} m yarıçaplı çembersel yörüngede ${v} m/s sabit süratle dolanan cismin merkezcil ivmesi kaç m/s²’dir?`, (v * v) / R, [v / R, v * R, (v * v) / (2 * R), v * v * R], `a_{m} = {v²/r} = {${v * v}/${R}} = ${num((v * v) / R)} m/s².`, `Merkezcil ivme a = {v²/r}.`);
      },
      (r) => {
        const T = pick(r, [0.5, 1, 2, 4, 5]);
        return g(r, `Periyodu ${num(T)} s olan düzgün çembersel hareketin frekansı kaç Hz’dir?`, 1 / T, [T, 2 / T, T * 2, 1 / T + 1], `f = {1/T} = ${num(1 / T)} Hz.`, `Frekans periyodun tersidir: f = {1/T}.`);
      }
    ],
    'Dalga Mekaniği': [
      (r) => {
        const v = pick(r, [10, 20, 40, 340]), f = pick(r, [2, 5, 10, 20]);
        return g(r, `Hızı ${v} m/s, frekansı ${f} Hz olan bir dalganın dalga boyu kaç m’dir?`, v / f, [v * f, f / v, v - f, (v / f) * 2], `λ = {v/f} = {${v}/${f}} = ${num(v / f)} m.`, `v = λ · f bağıntısından λ’yı yalnız bırak.`);
      }
    ],
    'Atom Fiziği ve Radyoaktivite': [
      (r) => {
        const T = pick(r, [2, 3, 5, 8, 10]), n = int(r, 1, 4), m0 = pick(r, [16, 32, 64, 80, 160]);
        return g(r, `Yarılanma süresi ${T} gün olan radyoaktif bir maddenin ${m0} g’ından ${n * T} gün sonra kaç g bozunmadan kalır?`, m0 / 2 ** n, [m0 / (2 * n), m0 - (m0 / 2 ** n), m0 / 2, m0 / 2 ** (n + 1)], `${n * T} gün = ${n} yarılanma süresi. Kalan ${m0} · ({1/2})^{${n}} = ${num(m0 / 2 ** n)} g.`, `${n * T} gün kaç yarılanma süresi eder? Her yarılanmada kalan madde yarıya iner.`);
      }
    ]
  },

  'tyt-kim': {
    'Mol Kavramı ve Kimyasal Hesaplamalar': [
      (r) => {
        const n = pick(r, [0.5, 1, 2, 3]);
        return { stem: `${num(n)} mol su molekülünde kaç tane molekül vardır? (N_{A} = 6 · 10^{23})`, ...choices(r, `${num(n * 6)} · 10^{23}`, [`${num(n)} · 10^{23}`, `${num(n * 6)} · 10^{22}`, `${num(n * 18)} · 10^{23}`, `${num(n * 3 * 6)} · 10^{23}`], (i) => `${num(n * 6 + i)} · 10^{23}`), solution: `Tanecik sayısı = n · N_{A} = ${num(n)} · 6 · 10^{23} = ${num(n * 6)} · 10^{23}.`, hint: `Tanecik sayısı = mol sayısı · Avogadro sayısı (N_{A}).` };
      },
      (r) => {
        const n = pick(r, [0.5, 1, 2, 3]);
        return g(r, `Normal koşullarda (0 °C, 1 atm) ${num(n)} mol gaz kaç litre hacim kaplar?`, n * 22.4, [n * 24.5, n * 11.2, 22.4, n * 44.8], `NK’da 1 mol gaz 22,4 L kaplar: ${num(n)} · 22,4 = ${num(n * 22.4)} L.`, `Normal koşullarda her mol gaz aynı hacmi kaplar (molar hacim). Bu değeri mol sayısıyla çarp.`);
      },
      (r) => {
        const m = pick(r, [4, 8, 12, 16, 24]); // H2 + O2 → H2O, 2:16 = 1:8 kütle oranı
        return g(r, `Su oluşumunda hidrojen ile oksijenin kütlece birleşme oranı {1/8}’dir. ${m} g hidrojenin tamamen tepkimesi için kaç g oksijen gerekir?`.replace("{1/8}’dir", '1’e 8 olarak bilinir'), m * 8, [m / 8, m + 8, m * 9, m * 16], `Kütlece H : O = 1 : 8. ${m} g H için ${m} · 8 = ${m * 8} g O gerekir; ${m * 9} g su oluşur.`, `Oran 1’e 8: her 1 g hidrojen için 8 g oksijen gerekir.`);
      }
    ],
    'Kimyanın Temel Kanunları': [
      (r) => {
        const a = pick(r, [10, 20, 28, 40]), b = pick(r, [6, 12, 16, 32]);
        return g(r, `Kapalı bir kapta ${a} g A ile ${b} g B maddesi artansız tepkimeye girerek yalnız C maddesini oluşturuyor. Oluşan C kaç gramdır?`, a + b, [Math.abs(a - b), a * b, a, (a + b) / 2], `Kütlenin korunumu kanunu: tepkimeye girenlerin toplam kütlesi ürünlerinkine eşittir: ${a} + ${b} = ${a + b} g.`, `Kütlenin korunumu: tepkimeye girenlerin toplam kütlesi ürünlerin toplam kütlesine eşittir.`);
      }
    ],
    'Karışımlar': [
      (r) => {
        const solute = pick(r, [10, 20, 25, 30, 40, 50]), water = pick(r, [40, 75, 80, 100, 150, 200]);
        const p = (solute * 100) / (solute + water);
        if (!Number.isInteger(p)) return SCIENCE_MORE['tyt-kim']!['Karışımlar']![1]!(r);
        return g(r, `${solute} g şeker ${water} g suda tamamen çözünüyor. Çözeltinin kütlece şeker yüzdesi kaçtır?`, p, [(solute * 100) / water, solute, p + 5, 100 - p], `Kütlece yüzde = {çözünen/çözelti} · 100 = {${solute}/${solute + water}} · 100 = %${p}.`, `Kütlece yüzde = {çözünen kütlesi/çözelti kütlesi} · 100. Çözelti kütlesi = şeker + su.`);
      },
      (r) => {
        const sol = pick(r, [200, 250, 300, 400, 500]), p = pick(r, [10, 20, 25, 40]);
        return g(r, `Kütlece %${p}’lik ${sol} g tuzlu su çözeltisinde kaç g tuz vardır?`.replace(`%${p}’lik`, `yüzde ${p} oranında tuz içeren`), (sol * p) / 100, [sol - (sol * p) / 100, sol / p, (sol * p) / 10, p], `Tuz = ${sol} · {${p}/100} = ${(sol * p) / 100} g.`, `Tuz kütlesi, çözelti kütlesinin verilen yüzdesi kadardır: çözelti kütlesini yüzdeyle çarp, yüze böl.`);
      }
    ],
    'Asitler, Bazlar ve Tuzlar': [
      (r) => {
        const n = int(r, 1, 6);
        return g(r, `25 °C’de [H⁺] = 10^{−${n}} M olan bir çözeltinin pH değeri kaçtır?`, n, [14 - n, -n, 10 - n, n + 7], `pH = −log[H⁺] = ${n}. ${n < 7 ? 'pH < 7 olduğu için çözelti asidiktir.' : ''}`, `pH = −log[H⁺]. [H⁺] 10’un kuvveti biçimindeyse pH, üssün işaretsiz hâlidir.`);
      },
      (r) => {
        const pH = int(r, 1, 13);
        return g(r, `25 °C’de pH’ı ${pH} olan bir çözeltinin pOH değeri kaçtır?`, 14 - pH, [pH, 7 - pH, pH + 7, 10 - pH], `25 °C’de pH + pOH = 14 → pOH = ${14 - pH}.`, `25 °C’de pH + pOH = 14.`);
      }
    ],
    'Atom ve Periyodik Sistem': [
      (r) => {
        const [s, Z] = pick(r, [['Na', 11], ['Mg', 12], ['Al', 13], ['K', 19], ['Ca', 20], ['O', 8], ['F', 9], ['Cl', 17]] as [string, number][]);
        const charge = { Na: 1, Mg: 2, Al: 3, K: 1, Ca: 2, O: -2, F: -1, Cl: -1 }[s]!;
        const e = Z - charge;
        return g(r, `Atom numarası ${Z} olan ${s} elementinin ${charge > 0 ? `+${charge}` : `${charge}`} yüklü iyonunda kaç elektron bulunur?`.replace('-', '−'), e, [Z, Z + charge, e + 1, Z * 2 - e], `İyon yükü = proton − elektron → ${charge} = ${Z} − e → e = ${e}.`, `Pozitif iyon elektron vermiş, negatif iyon elektron almıştır. Proton sayısı atom numarasına eşittir.`);
      }
    ]
  },

  'ayt-kim': {
    'Gazlar': [
      (r) => {
        const P1 = pick(r, [1, 2, 3, 4]), V1 = pick(r, [2, 4, 6, 8, 12]), P2 = pick(r, [1, 2, 3, 4, 6]);
        const V2 = (P1 * V1) / P2;
        if (!Number.isInteger(V2 * 10) || P1 === P2) return SCIENCE_MORE['ayt-kim']!['Gazlar']![1]!(r);
        return g(r, `Sabit sıcaklıkta ${P1} atm basınçta ${V1} L hacim kaplayan bir gazın basıncı ${P2} atm yapılırsa hacmi kaç L olur?`, V2, [(P2 * V1) / P1, V1, P1 * P2 * V1, V2 * 2], `Boyle yasası: P₁V₁ = P₂V₂ → V₂ = {${P1} · ${V1}/${P2}} = ${num(V2)} L.`, `Sabit sıcaklıkta basınç ile hacim ters orantılıdır: P₁V₁ = P₂V₂.`);
      },
      (r) => {
        const V1 = pick(r, [2, 3, 4, 6]), T1 = pick(r, [200, 300, 400]), T2 = pick(r, [300, 400, 600, 800]);
        const V2 = (V1 * T2) / T1;
        if (!Number.isInteger(V2 * 10) || T1 === T2) return SCIENCE_MORE['ayt-kim']!['Gazlar']![0]!(r);
        return g(r, `Sabit basınçta ${T1} K’de ${V1} L olan bir gazın sıcaklığı ${T2} K yapılırsa hacmi kaç L olur?`, V2, [(V1 * T1) / T2, V1 * (T2 - T1), V1, V2 + 1], `Charles yasası: {V₁/T₁} = {V₂/T₂} → V₂ = ${V1} · {${T2}/${T1}} = ${num(V2)} L.`, `Sabit basınçta hacim, kelvin cinsinden sıcaklıkla doğru orantılıdır: {V₁/T₁} = {V₂/T₂}.`);
      }
    ],
    'Sıvı Çözeltiler ve Çözünürlük': [
      (r) => {
        const n = pick(r, [0.1, 0.2, 0.5, 1, 2]), V = pick(r, [0.1, 0.2, 0.25, 0.5, 1, 2]);
        const M = n / V;
        if (!Number.isInteger(M * 100)) return SCIENCE_MORE['ayt-kim']!['Sıvı Çözeltiler ve Çözünürlük']![1]!(r);
        return g(r, `${num(n)} mol NaOH ile hazırlanan ${num(V * 1000)} mL çözeltinin derişimi kaç molardır?`, M, [n * V, V / n, n / (V * 1000), M * 2], `Molarite = {mol/litre} = {${num(n)}/${num(V)}} = ${num(M)} M.`, `Molarite = {mol sayısı/çözelti hacmi (litre)}. Önce mL’yi litreye çevir.`);
      },
      (r) => {
        const M1 = pick(r, [1, 2, 3, 4]), V1 = pick(r, [100, 200, 250, 500]), V2 = V1 * pick(r, [2, 4, 5]);
        const M2 = (M1 * V1) / V2;
        return g(r, `${M1} M’lık ${V1} mL çözelti su eklenerek ${V2} mL’ye seyreltiliyor. Yeni derişim kaç M olur?`, M2, [(M1 * V2) / V1, M1, M1 - M2 === M2 ? M1 * 2 : M1 - M2, M2 * 2], `M₁V₁ = M₂V₂ → M₂ = {${M1} · ${V1}/${V2}} = ${num(M2)} M.`, `Seyreltmede çözünenin mol sayısı değişmez: M₁V₁ = M₂V₂.`);
      }
    ],
    'Kimyasal Tepkimelerde Enerji': [
      (r) => {
        const a = int(r, -400, -50), b = int(r, -300, 100);
        return g(r, `I. tepkimenin ΔH değeri ${num(a)} kJ, II. tepkimenin ${num(b)} kJ’dür. I ve II taraf tarafa toplanarak elde edilen tepkimenin ΔH değeri kaç kJ’dür?`.replace(` ${num(b)} kJ’dür`, ` ΔH değeri ise ${num(b)} kJ`), a + b, [a - b, b - a, a, -(a + b)], `Hess yasası: tepkimeler toplanınca ΔH’ler de toplanır: ${num(a)} + (${num(b)}) = ${num(a + b)} kJ.`, `Hess yasası: tepkimeler toplanınca ΔH değerleri de işaretleriyle toplanır.`);
      }
    ],
    'Kimyasal Denge': [
      (r) => {
        const A = pick(r, [0.1, 0.2, 0.5, 1]), B = pick(r, [0.1, 0.2, 0.4, 2]);
        const K = (B * B) / A;
        return g(r, `A(g) ⇌ 2B(g) tepkimesi dengedeyken [A] = ${num(A)} M ve [B] = ${num(B)} M’dir. Derişimler cinsinden denge sabiti K_{c} kaçtır?`, Math.round(K * 100) / 100, [Math.round((B / A) * 100) / 100, Math.round(((2 * B) / A) * 100) / 100, Math.round((A / (B * B)) * 100) / 100, Math.round(B * B * 100) / 100], `K_{c} = {[B]²/[A]} = {(${num(B)})²/${num(A)}} = ${num(Math.round(K * 100) / 100)}.`, `K_{c} = {[ürünler]/[girenler]}, her derişimin üssü katsayısıdır. B’nin katsayısı 2 olduğu için [B]’nin karesi alınır.`);
      }
    ],
    'Asit-Baz Dengesi': [
      (r) => {
        const n = int(r, 1, 3);
        return g(r, `25 °C’de 10^{−${n}} M’lık HCl çözeltisinin pH değeri kaçtır? (HCl kuvvetli asittir.)`, n, [14 - n, 7, n + 1, 10 * n], `Kuvvetli asit tamamen iyonlaşır: [H⁺] = 10^{−${n}} M → pH = ${n}.`, `Kuvvetli asit tamamen iyonlaşır: [H⁺] asidin derişimine eşittir. pH = −log[H⁺].`);
      },
      (r) => {
        const n = int(r, 1, 3);
        return g(r, `25 °C’de 10^{−${n}} M’lık NaOH çözeltisinin pH değeri kaçtır? (NaOH kuvvetli bazdır.)`, 14 - n, [n, 7, 14 + n, 10 - n], `[OH⁻] = 10^{−${n}} → pOH = ${n} → pH = 14 − ${n} = ${14 - n}.`, `Kuvvetli baz tamamen iyonlaşır: önce [OH⁻]’den pOH’yi bul, sonra pH + pOH = 14.`);
      }
    ],
    'Organik Bileşikler': [
      (r) => {
        const n = int(r, 1, 8);
        const names = ['', 'metan', 'etan', 'propan', 'bütan', 'pentan', 'hekzan', 'heptan', 'oktan'];
        const f = (c: number, h: number) => `C${c === 1 ? '' : `_{${c}}`}H_{${h}}`;
        const right = f(n, 2 * n + 2);
        return { stem: `${names[n]![0]!.toLocaleUpperCase('tr')}${names[n]!.slice(1)} (alkan) molekülünün formülü hangisidir?`, ...choices(r, right, [f(n, 2 * n), f(n, Math.max(2, 2 * n - 2)), f(n + 1, 2 * n + 2), f(n, n * 4 + 2)].filter((x) => x !== right), (i) => f(n, 2 * n + 2 + i * 2)), solution: `Alkanların genel formülü CₙH_{2n + 2}: n = ${n} → ${right}.`, hint: `Alkanların genel formülü CₙH_{2n + 2}. Önce adın kaç karbon gösterdiğini bul (met 1, et 2, prop 3, büt 4, pent 5, hekz 6, hept 7, okt 8).` };
      }
    ],
    'Kimya ve Elektrik': [
      (r) => {
        const z = pick(r, [1, 2, 3]), n = pick(r, [0.5, 1, 2]);
        return g(r, `Elektrolizde ${num(n)} mol ${['', 'Ag⁺', 'Cu²⁺', 'Al³⁺'][z]} iyonunun metale indirgenmesi için kaç mol elektron gerekir?`, n * z, [n, n / z, z, n * z * 2], `Her ${['', 'Ag⁺', 'Cu²⁺', 'Al³⁺'][z]} iyonu ${z} elektron alır: ${num(n)} · ${z} = ${num(n * z)} mol e⁻.`, `İyonun yükü, metale dönüşmek için kaç elektron alması gerektiğini gösterir.`);
      }
    ]
  },

  'tyt-bio': {
    'Kalıtım': [
      (r) => {
        const cases: [string, string, Frac, string][] = [
          ['A0 × B0', '0 kan grubu', new Frac(1, 4), 'A0 × B0 → AB, A0, B0, 00. 00 (0 grubu) olasılığı {1/4}.'],
          ['A0 × A0', 'A kan grubu', new Frac(3, 4), 'A0 × A0 → AA, A0, A0, 00. A fenotipi (AA, A0) {3/4}.'],
          ['AB × 00', 'AB kan grubu', new Frac(0), 'AB × 00 → A0 ve B0; AB grubu çocuk olmaz.'],
          ['AA × BB', 'AB kan grubu', new Frac(1), 'AA × BB → bütün çocuklar AB.'],
          ['AB × AB', 'AB kan grubu', new Frac(1, 2), 'AB × AB → AA, AB, AB, BB. AB {1/2}.']
        ];
        const [cross, q, v, s] = pick(r, cases);
        return { stem: `Kan grubu genotipleri ${cross} olan anne ve babanın bir çocuğunun ${q} olma olasılığı kaçtır?`, ...choices(r, v.toString(), [new Frac(1, 4), new Frac(1, 2), new Frac(3, 4), new Frac(1), new Frac(0), new Frac(1, 8)].filter((x) => !x.eq(v)).map(String)), solution: s, hint: `Anne ve babanın verebileceği alelleri yaz, dört olası çocuğu listele. A ile B eş baskındır; ikisi de diğer alele baskındır.` };
      },
      (r) => {
        const cases: [string, string, Frac, string][] = [
          ['taşıyıcı (XᴿXʳ) anne ile sağlıklı (XᴿY) babanın', 'oğlunun renk körü', new Frac(1, 2), 'Oğullar X’i anneden alır: Xʳ gelme olasılığı {1/2}.'],
          ['taşıyıcı (XᴿXʳ) anne ile sağlıklı (XᴿY) babanın', 'kızının renk körü', new Frac(0), 'Kızlar babadan Xᴿ alır; renk körü kız olmaz (en çok taşıyıcı olur).'],
          ['renk körü (XʳXʳ) anne ile sağlıklı (XᴿY) babanın', 'oğlunun renk körü', new Frac(1), 'Oğullar X’i anneden alır; annenin iki X’i de Xʳ.'],
          ['sağlıklı (XᴿXᴿ) anne ile renk körü (XʳY) babanın', 'kızının taşıyıcı', new Frac(1), 'Kızlar babadan Xʳ, anneden Xᴿ alır: hepsi taşıyıcı.']
        ];
        const [who, q, v, s] = pick(r, cases);
        return { stem: `Renk körlüğü X kromozomuna bağlı çekinik bir özelliktir. ${who[0]!.toLocaleUpperCase('tr')}${who.slice(1)} bir ${q} olma olasılığı kaçtır?`, ...choices(r, v.toString(), [new Frac(1, 4), new Frac(1, 2), new Frac(3, 4), new Frac(1), new Frac(0)].filter((x) => !x.eq(v)).map(String)), solution: s, hint: `Oğul X’i anneden, Y’yi babadan alır; kız ise birer X’i ikisinden alır. Hangi ebeveyn hangi X’i verebilir?` };
      }
    ],
    'Canlıların Temel Bileşenleri': [
      (r) => {
        const total = 2 * pick(r, [100, 200, 500, 1000]); const pA = pick(r, [10, 20, 30, 40]);
        const A = (total * pA) / 100; const G = total / 2 - A;
        return g(r, `${total} nükleotitten oluşan çift zincirli bir DNA molekülündeki nükleotitlerin %${pA}’i adenin içeriyor. Bu DNA’da kaç guanin nükleotiti vardır?`.replace(`%${pA}’i`, `yüzde ${pA} oranındaki kısmı`), G, [A, total - A, total / 2, G * 2], `A = T = ${A}; A + T = ${2 * A}. Kalan ${total - 2 * A} nükleotit G ve C’ye eşit dağılır: G = ${G}.`, `DNA’da A = T ve G = C. Önce A ile T’nin toplamını bul, kalanı G ve C’ye eşit böl.`);
      }
    ],
    'Hücre Bölünmeleri': [
      (r) => {
        const n = int(r, 1, 6);
        return g(r, `Bir hücre art arda ${n} kez mitoz bölünme geçiriyor. Sonunda kaç hücre oluşur?`, 2 ** n, [2 * n, n * n, 2 ** (n - 1), 2 ** n - 1], `Her mitozda hücre sayısı iki katına çıkar: 2^{${n}} = ${2 ** n}.`, `Her mitozda hücre sayısı iki katına çıkar; bunu bölünme sayısı kadar tekrarla.`);
      },
      (r) => {
        const n = pick(r, [5, 10, 20, 50]);
        return g(r, `Mayoz bölünme geçiren ${n} tane ana hücreden toplam kaç üreme hücresi oluşur? (Erkeklerde olduğu gibi her bölünme 4 hücre verir.)`, 4 * n, [2 * n, n, 8 * n, n / 2], `Bir mayoz 4 hücre verir: ${n} · 4 = ${4 * n}.`, `Bir mayoz bölünme kaç hücre verir? Soruda yazıyor.`);
      }
    ]
  },

  'ayt-bio': {
    'Genden Proteine': [
      (r) => {
        const aa = pick(r, [50, 100, 150, 200, 300]);
        return g(r, `${aa} amino asitlik bir polipeptidi şifreleyen mRNA’da (durdurma kodonu hariç) kaç nükleotit bulunur?`, aa * 3, [aa, aa * 2, aa * 6, aa * 3 + 3], `Her amino asit bir kodonla (3 nükleotit) şifrelenir: ${aa} · 3 = ${aa * 3}.`, `Her amino asit bir kodonla şifrelenir; bir kodon kaç nükleotittir?`);
      },
      (r) => {
        const aa = pick(r, [20, 50, 100, 150]);
        return g(r, `${aa} amino asitten oluşan doğrusal bir polipeptitte kaç peptit bağı vardır?`, aa - 1, [aa, aa + 1, aa * 2, aa / 2], `n amino asit arasında n − 1 peptit bağı kurulur: ${aa - 1}.`, `İki amino asit arasında bir peptit bağı kurulur. 3 amino asitlik zincirde kaç bağ olur? Genelle.`);
      }
    ]
  }
};
