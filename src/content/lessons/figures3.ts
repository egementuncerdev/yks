/* Görseller, üçüncü bölüm: formül kartları, grafikler, çubuk grafikler ve "Akılda tut" kutuları.
   Var olan görsellerin yanına eklenir (üzerine yazmaz). Veri grafiklerinde değerler bilinen kaynak değerleridir;
   temsilî olanların açıklamasında "temsilî" yazar. */
import type { Figure } from './types';

const F = (title: string, items: [string, string][], at = 0): Figure => ({ kind: 'formulas', title, items, at });
const N = (text: string, at?: number): Figure => ({ kind: 'note', title: 'Akılda tut', text, ...(at !== undefined ? { at } : {}) });

export const FIGURES_EXTRA: Record<string, Figure[]> = {
  /* ================= TYT Türkçe ================= */
  'tyt-tr:Sözcükte Anlam': [N('Altı çizili sözcüğün yerine eş anlamlısını koy: cümle aynı kalıyorsa anlamı doğru yakaladın. Somut olan beş duyuyla algılanır.')],
  'tyt-tr:Cümlede Anlam': [N('“İçin”den önceki eylem **olduysa** neden – sonuç, **olacaksa** amaç – sonuç.')],
  'tyt-tr:Paragraf': [N('Ana düşünce çoğu zaman “ama, oysa, bu nedenle, kısacası” ile başlayan cümlededir. Şıktaki bilgi doğru olsa bile parçada yoksa ele.')],
  'tyt-tr:Ses Bilgisi': [N('Sert ünsüzler **FıSTıKÇı ŞaHaP**: f, s, t, k, ç, ş, h, p. Bunlardan sonra gelen c, d, g sertleşir (kitapçı, sokakta).', 1)],
  'tyt-tr:Yazım Kuralları': [N('“de / da”yı cümleden çıkar: anlam bozulmuyorsa bağlaçtır, **ayrı** yazılır. “ki”de de aynı test: bağlaçsa ayrı.')],
  'tyt-tr:Noktalama İşaretleri': [N('Kurum adlarına gelen ek kesmeyle **ayrılmaz** (Türk Dil Kurumunun); kişi, şehir, ülke adlarına gelen ek ayrılır (Ankara’ya).')],
  'tyt-tr:Cümlenin Ögeleri': [N('**Önce yüklem.** Sonra yükleme soru sor: kim? (özne), neyi? (nesne), nereye? (dolaylı tümleç), nasıl/ne zaman? (zarf tümleci).')],
  'tyt-tr:Anlatım Bozuklukları': [N('Ortak ögeyi her yüklemle **ayrı ayrı** söyle; birinde kulağa yanlış geliyorsa bozukluk oradadır.')],
  'tyt-tr:Fiil, Ek Fiil ve Fiilimsi': [N('Kalıcı isim olmuş sözcükler fiilimsi sayılmaz: dolma, kazma, dondurma, çakmak.')],

  /* ================= TYT Matematik ================= */
  'tyt-mat:Temel Kavramlar': [F('Toplam formülleri', [['1 + 2 + … + n', '{n(n + 1)/2}'], ['2 + 4 + … + 2n', 'n(n + 1)'], ['1 + 3 + … + (2n − 1)', 'n²'], ['Terim sayısı', '{son − ilk/artış} + 1']], 2)],
  'tyt-mat:Bölme ve Bölünebilme': [F('Bölme', [['Bölme eşitliği', 'A = B · C + K'], ['Kalan şartı', '0 ≤ K < B']])],
  'tyt-mat:Üslü Sayılar': [N('Toplamada kural yoktur: 2^{3} + 2^{3} = 2 · 2^{3} = 2^{4}. Ortak paranteze al.')],
  'tyt-mat:Köklü Sayılar': [N('Sıralarken katsayıyı köke sok: 3√{2} = √{18}, 2√{5} = √{20}.')],
  'tyt-mat:Oran – Orantı': [F('Orantı', [['İçler – dışlar', '{a/b} = {c/d} ⇒ a · d = b · c'], ['Ortak çarpan', 'a = bk, c = dk'], ['Doğru orantı', '{y/x} = sabit'], ['Ters orantı', 'x · y = sabit']])],
  'tyt-mat:Hareket Problemleri': [
    F('Formül kartları', [['Yol', 'x = v · t'], ['Karşılaşma', 't = {x/v₁ + v₂}'], ['Yetişme', 't = {x/v₁ − v₂}'], ['Ortalama hız', '{toplam yol/toplam zaman}'], ['Eşit yollar', '{2v₁v₂/v₁ + v₂}'], ['Akıntı', 'v ± a']]),
    { kind: 'line', title: 'Konum – zaman: sabit hızla giden iki araç', x: 'zaman (sa)', y: 'yol (km)', series: [{ name: '60 km/sa', points: [[0, 0], [1, 60], [2, 120], [3, 180]] }, { name: '40 km/sa', points: [[0, 0], [1, 40], [2, 80], [3, 120]] }], caption: 'Doğrunun eğimi hızdır: dik olan daha hızlıdır.' }
  ],
  'tyt-mat:İşçi ve Havuz Problemleri': [F('İş formülleri', [['1 saatte yapılan', '{1/t}'], ['Birlikte', '{1/t₁} + {1/t₂} = {1/t}'], ['İki kişi kısa yol', 't = {t₁ · t₂/t₁ + t₂}'], ['Boşaltan musluk', '−{1/t}']])],
  'tyt-mat:Yüzde, Kâr – Zarar Problemleri': [
    F('Yüzde formülleri', [['%p’si', 'x · {p/100}'], ['%p zam', 'x · {100 + p/100}'], ['%p indirim', 'x · {100 − p/100}'], ['Kâr yüzdesi', '{kâr/alış} · 100']]),
    N('Kâr ve zarar her zaman **alış fiyatı** üzerinden hesaplanır. Alışı 100 seç, işlem kolaylaşır.')
  ],
  'tyt-mat:Karışım Problemleri': [F('Karışım', [['Saf madde', 'karışım · {yüzde/100}'], ['İki karışım', '{m₁p₁ + m₂p₂/m₁ + m₂}']])],
  'tyt-mat:Grafik ve Tablo Problemleri': [{ kind: 'bars', title: 'Örnek: bir mağazanın aylık satışları', items: [['Ocak', 200], ['Şubat', 250], ['Mart', 180], ['Nisan', 300]], unit: 'adet', highlight: 'Nisan', caption: 'Ocaktan şubata artış: {50/200} = %25. En yüksek ay nisan.' }],
  'tyt-mat:Kümeler ve Kartezyen Çarpım': [F('Küme formülleri', [['Alt küme sayısı', '2^{n}'], ['Öz alt küme', '2^{n} − 1'], ['Birleşim', 's(A) + s(B) − s(A ∩ B)'], ['Kartezyen çarpım', 's(A) · s(B)']])],
  'tyt-mat:Fonksiyonlar': [F('Fonksiyon', [['Bileşke', '(f ∘ g)(x) = f(g(x))'], ['Doğrusal ters', 'f(x) = ax + b ⇒ f⁻¹(x) = {x − b/a}'], ['Ters ilişkisi', 'f(a) = b ⇔ f⁻¹(b) = a']])],
  'tyt-mat:İkinci Dereceden Denklemler': [F('Kök – katsayı', [['Diskriminant', 'Δ = b² − 4ac'], ['Kökler', '{−b ± √{Δ}/2a}'], ['Toplam', 'x₁ + x₂ = −{b/a}'], ['Çarpım', 'x₁ · x₂ = {c/a}']])],
  'tyt-mat:Permütasyon ve Kombinasyon': [F('Sayma formülleri', [['Permütasyon', 'P(n, r) = {n!/(n − r)!}'], ['Kombinasyon', 'C(n, r) = {n!/r!(n − r)!}'], ['Tekrarlı', '{n!/a! · b!}'], ['Dairesel', '(n − 1)!']])],
  'tyt-mat:Olasılık': [F('Olasılık', [['Tanım', '{istenen/tüm durumlar}'], ['Tümleyen', '1 − P(A)'], ['Birleşim', 'P(A) + P(B) − P(A ∩ B)'], ['Bağımsız', 'P(A) · P(B)']])],
  'tyt-mat:Veri ve İstatistik': [{ kind: 'bars', title: 'Örnek: 2, 3, 5, 7, 7, 9 verilerinin sıklığı', items: [['2', 1], ['3', 1], ['5', 1], ['7', 2], ['9', 1]], unit: 'kez', highlight: '7', caption: 'En çok tekrar eden değer (tepe değer) 7. Ortanca {5 + 7/2} = 6, ortalama 5,5.' }],
  'tyt-mat:Dik ve Özel Üçgenler': [F('Dik üçgen', [['Pisagor', 'a² + b² = c²'], ['Öklit (yükseklik)', 'h² = p · k'], ['Öklit (dik kenar)', 'b² = k · c'], ['Alan ile', 'a · b = c · h']], 1)],
  'tyt-mat:Üçgende Alan': [F('Alan formülleri', [['Taban – yükseklik', '{a · h/2}'], ['İki kenar ve açı', '{1/2} · b · c · sin A'], ['Eşkenar', '{a²√{3}/4}'], ['Dik üçgen', '{dik kenarlar çarpımı/2}']])],
  'tyt-mat:Çember ve Daire': [F('Çember ve daire', [['Çevre', '2πr'], ['Alan', 'πr²'], ['Yay uzunluğu', '2πr · {α/360}'], ['Dilim alanı', 'πr² · {α/360}']], 1)],
  'tyt-mat:Noktanın ve Doğrunun Analitiği': [F('Analitik formüller', [['Uzaklık', '√{(x₂ − x₁)² + (y₂ − y₁)²}'], ['Orta nokta', '({x₁ + x₂/2}, {y₁ + y₂/2})'], ['Eğim', 'm = {y₂ − y₁/x₂ − x₁}'], ['Dik doğrular', 'm₁ · m₂ = −1']])],
  'tyt-mat:Katı Cisimler': [F('Hacimler', [['Prizma / silindir', 'taban alanı · h'], ['Piramit / koni', '{taban alanı · h/3}'], ['Küre', '{4/3}πr³'], ['Küp köşegeni', 'a√{3}']], 1)],

  /* ================= TYT Fizik ================= */
  'tyt-fiz:Madde ve Özellikleri': [
    F('Özkütle', [['Tanım', 'd = {m/V}'], ['Suyun özkütlesi', '1 g/cm³ = 1000 kg/m³']]),
    { kind: 'line', title: 'Kütle – hacim grafiği: eğim özkütledir', x: 'hacim (cm³)', y: 'kütle (g)', series: [{ name: 'X (d = 2 g/cm³)', points: [[0, 0], [10, 20], [20, 40], [30, 60]] }, { name: 'Y (d = 1 g/cm³)', points: [[0, 0], [10, 10], [20, 20], [30, 30]] }], caption: 'Aynı hacimde daha ağır olan X’in özkütlesi daha büyüktür; doğrusu daha diktir.' }
  ],
  'tyt-fiz:Basınç ve Kaldırma Kuvveti': [F('Basınç ve kaldırma', [['Katı basıncı', 'P = {F/A}'], ['Sıvı basıncı', 'P = h · d · g'], ['Pascal', '{F₁/A₁} = {F₂/A₂}'], ['Kaldırma kuvveti', 'F_{k} = V_{batan} · d_{sıvı} · g']])],
  'tyt-fiz:Isı, Sıcaklık ve Genleşme': [
    F('Isı formülleri', [['Sıcaklık değişimi', 'Q = m · c · ΔT'], ['Hâl değişimi', 'Q = m · L'], ['Kelvin', 'T = t + 273'], ['Boyca genleşme', 'ΔL = L₀ · λ · ΔT']]),
    { kind: 'line', title: 'Isınma eğrisi: buzdan buhara (temsilî)', x: 'zaman (dk)', y: 'sıcaklık (°C)', series: [{ name: 'su', points: [[0, -20], [2, 0], [6, 0], [11, 100], [19, 100], [21, 120]] }], marks: [[4, 'erime'], [15, 'kaynama']], caption: 'Düz kısımlarda ısı verildiği hâlde sıcaklık değişmez: madde hâl değiştirir. Kaynama süresi erimeden uzundur, çünkü buharlaşma ısısı daha büyüktür.', at: 0 }
  ],
  'tyt-fiz:Hareket ve Kuvvet': [
    F('Hareket ve kuvvet', [['Sabit hız', 'x = v · t'], ['İvmeli hız', 'v = v₀ + a · t'], ['Newton 2', 'F_{net} = m · a'], ['Sürtünme', 'f = k · N']]),
    { kind: 'line', title: 'Hız – zaman grafiği: hızlanma, sabit hız, yavaşlama', x: 'zaman (s)', y: 'hız (m/s)', series: [{ name: 'araç', points: [[0, 0], [2, 8], [6, 8], [8, 0]] }], caption: 'Eğim ivmeyi, grafiğin altındaki alan yer değiştirmeyi verir: (8 + 4) · 8 ÷ 2 = 48 m.', at: 0 }
  ],
  'tyt-fiz:İş, Güç ve Enerji': [
    F('Enerji', [['İş', 'W = F · x'], ['Güç', 'P = {W/t}'], ['Kinetik', 'E_{k} = {1/2}mv²'], ['Potansiyel', 'E_{p} = mgh']]),
    { kind: 'line', title: 'Serbest düşmede enerji (2 kg, 20 m, temsilî)', x: 'yerden yükseklik (m)', y: 'enerji (J)', series: [{ name: 'potansiyel', points: [[20, 400], [15, 300], [10, 200], [5, 100], [0, 0]] }, { name: 'kinetik', points: [[20, 0], [15, 100], [10, 200], [5, 300], [0, 400]] }], caption: 'Sürtünme yoksa toplam mekanik enerji her yükseklikte 400 J’dür.' }
  ],
  'tyt-fiz:Elektrik Akımı ve Devreler': [
    F('Elektrik', [['Akım', 'I = {q/t}'], ['Ohm', 'V = I · R'], ['Güç', 'P = V · I = I²R'], ['Seri', 'R = R₁ + R₂'], ['Paralel', '{1/R} = {1/R₁} + {1/R₂}']]),
    { kind: 'line', title: 'Gerilim – akım grafiği (R = 4 Ω)', x: 'akım (A)', y: 'gerilim (V)', series: [{ name: '4 Ω', points: [[0, 0], [1, 4], [2, 8], [3, 12]] }], caption: 'Doğrunun eğimi direnci verir: {12/3} = 4 Ω.', at: 0 }
  ],
  'tyt-fiz:Dalgalar': [F('Dalga', [['Hız', 'v = λ · f'], ['Frekans', 'f = {1/T}']])],
  'tyt-fiz:Optik': [N('Açılar **normalle** ölçülür. Tümsek ayna her zaman sanal, düz ve küçük görüntü verir (dikiz aynası).')],
  'tyt-fiz:Elektrostatik': [F('Coulomb', [['Kuvvet', 'F = k · {q₁ · q₂/d²}'], ['Özdeş küreler', 'q_{son} = {q₁ + q₂/2}']])],

  /* ================= TYT Kimya ================= */
  'tyt-kim:Atom ve Periyodik Sistem': [
    F('Atom', [['Kütle numarası', 'A = p + n'], ['Nötr atom', 'e = p'], ['İyon yükü', 'p − e']]),
    { kind: 'bars', title: 'Elektronegatiflik (Pauling ölçeği)', items: [['F', 4.0], ['O', 3.5], ['N', 3.0], ['Cl', 3.0], ['C', 2.5], ['H', 2.1], ['Na', 0.9]], highlight: 'F', caption: 'En elektronegatif element flordur. Periyotta sağa doğru artar, grupta aşağı azalır.' }
  ],
  'tyt-kim:Mol Kavramı ve Kimyasal Hesaplamalar': [F('Mol geçişleri', [['Kütleden', 'n = {m/M_{A}}'], ['Tanecikten', 'n = {N/6,02 · 10^{23}}'], ['Gaz hacminden (NK)', 'n = {V/22,4}']])],
  'tyt-kim:Karışımlar': [F('Derişim', [['Kütlece yüzde', '{çözünen/çözelti} · 100'], ['Çözelti kütlesi', 'çözünen + çözücü']])],
  'tyt-kim:Asitler, Bazlar ve Tuzlar': [
    { kind: 'bars', title: 'Günlük maddelerin yaklaşık pH değerleri', items: [['Mide asidi', 1.5], ['Limon suyu', 2.4], ['Kahve', 5], ['Saf su', 7], ['Deniz suyu', 8], ['Sabun', 10], ['Çamaşır suyu', 12.5]], highlight: 'Saf su', caption: 'Değerler yaklaşıktır. 7’den küçük asidik, büyük bazik.' },
    N('Turnusol: **asit** maviyi kırmızıya, **baz** kırmızıyı maviye çevirir. pH + pOH = 14 (25 °C).')
  ],
  'tyt-kim:Kimya Bilimi': [N('Asit seyreltirken **asit suya** eklenir; su aside dökülmez. Kimyasallar koklanmaz, tadılmaz.')],

  /* ================= TYT Biyoloji ================= */
  'tyt-bio:Canlıların Temel Bileşenleri': [{ kind: 'bars', title: 'Gram başına enerji', items: [['Yağ', 9], ['Karbonhidrat', 4], ['Protein', 4]], unit: 'kcal/g', highlight: 'Yağ', caption: 'Yağ gram başına en çok enerjiyi verir; ama hücre önce karbonhidratı kullanır.' }],
  'tyt-bio:Hücre Bölünmeleri': [{ kind: 'line', title: 'Mitozda bir hücredeki DNA miktarı (temsilî)', x: 'zaman', y: 'DNA miktarı', steps: true, series: [{ name: 'DNA', points: [[0, 2], [1, 2], [2, 4], [3, 4], [4, 4], [5, 2], [6, 2]] }], marks: [[1.5, 'interfaz: eşlenme'], [4.5, 'bölünme']], caption: 'DNA interfazda eşlenip iki katına çıkar, bölünmeyle yavru hücrelere eşit dağılır.' }],
  'tyt-bio:Kalıtım': [N('Bağımsız genlerde her gen çiftini ayrı çaprazla, olasılıkları **çarp**: AaBb × AaBb → aabb = {1/4} · {1/4} = {1/16}.')],
  'tyt-bio:Ekosistem Ekolojisi': [{ kind: 'bars', title: 'Besin zincirinde aktarılan enerji (temsilî, %10 kuralı)', items: [['Üreticiler', 10000], ['1. tüketiciler', 1000], ['2. tüketiciler', 100], ['3. tüketiciler', 10]], unit: 'kJ', highlight: 'Üreticiler', caption: 'Her basamakta enerjinin yaklaşık %90’ı solunum ve ısı olarak kaybolur.' }],
  'tyt-bio:Hücre ve Organeller': [N('Bitki hücresinde olup hayvanda olmayan üçlü: **hücre duvarı, kloroplast, büyük merkezi koful.** Ribozom her hücrede vardır.')],

  /* ================= TYT Tarih ================= */
  'tyt-tar:İlk ve Orta Çağlarda Türk Dünyası': [N('**Hun** ilk Türk devleti, **Göktürk** “Türk” adını kullanan ilk devlet ve ilk yazıtlar, **Uygur** yerleşik hayata geçen ilk devlet.')],
  'tyt-tar:İlk Türk-İslam Devletleri': [N('**Kutadgu Bilig**: siyasetname, Yusuf Has Hacip. **Divanü Lügati’t-Türk**: sözlük, Kaşgarlı Mahmut.')],
  'tyt-tar:Milli Mücadele': [
    N('**Amasya**: “Milletin istiklalini yine milletin azim ve kararı kurtaracaktır.” **Erzurum**: manda ve himaye ilk kez reddedildi. **Sivas**: cemiyetler birleşti.', 0),
    { kind: 'bars', title: 'Kongrelerde alınan kararların niteliği', items: [['Erzurum: bölgesel toplandı, ulusal karar', 1], ['Sivas: ulusal toplandı, ulusal karar', 2]], caption: 'Çubuk boyu yalnız temsilîdir: Sivas toplanış ve kararlarıyla tam ulusaldır.' }
  ],
  'tyt-tar:Atatürkçülük ve Türk İnkılabı': [N('İnkılabı ilkeye bağlarken **en doğrudan** ilgili ilkeyi seç: halifelik → laiklik, aşar → halkçılık, sanayi planı → devletçilik.')],

  /* ================= TYT Coğrafya ================= */
  'tyt-cog:Dünya’nın Şekli ve Hareketleri': [N('Ardışık iki meridyen arası **4 dakika**; doğudaki yerin saati ileridir. Mevsimlerin nedeni **eksen eğikliği**dir, uzaklık değil.')],
  'tyt-cog:Harita Bilgisi': [F('Ölçek', [['Gerçek uzunluk', 'harita uzunluğu · ölçek paydası'], ['Birim', '1 km = 100 000 cm'], ['Eğim', '{yükselti farkı/yatay uzaklık} · 100']])],
  'tyt-cog:Atmosfer ve İklim': [{ kind: 'line', title: 'Troposferde yükseldikçe sıcaklık (temsilî, her 200 m’de ≈ 1 °C)', x: 'yükselti (km)', y: 'sıcaklık (°C)', series: [{ name: 'sıcaklık', points: [[0, 15], [2, 5], [4, -5], [6, -15], [8, -25], [10, -35]] }], caption: 'Deniz seviyesinde 15 °C olan hava 2000 m yükseklikte yaklaşık 5 °C olur.' }],
  'tyt-cog:Nüfus ve Göç': [{ kind: 'line', title: 'Türkiye’nin nüfusu (milyon)', x: 'yıl', y: 'nüfus (milyon)', series: [{ name: 'nüfus', points: [[1927, 13.6], [1950, 20.9], [1970, 35.6], [1990, 56.5], [2000, 67.8], [2010, 73.7], [2020, 83.6], [2023, 85.4]] }], caption: 'Kaynak: TÜİK sayım ve ADNKS sonuçları (yuvarlanmış). Artış hızı son yıllarda yavaşladı.' }],
  'tyt-cog:Türkiye’nin Yer Şekilleri ve İklimi': [N('Kuzey Anadolu Dağları ve Toroslar kıyıya **paralel**, Ege dağları **dik** uzanır: bu yüzden Ege’de deniz etkisi içerilere kadar sokulur.')],
  'tyt-cog:İklim Tipleri': [N('Bitki örtüsü iklimin aynasıdır: **maki** → Akdeniz, **orman** → Karadeniz, **bozkır** → karasal.')],

  /* ================= TYT Felsefe ================= */
  'tyt-fel:Bilgi Felsefesi': [N('Akıl → **rasyonalizm** (Descartes); deney → **empirizm** (Locke); ikisi birlikte → **kritisizm** (Kant). Descartes şüpheci değildir; şüpheyi yöntem olarak kullanır.')],
  'tyt-fel:Ahlak Felsefesi': [N('Kant’ta değer **niyette (ödev)**, faydacılıkta **sonuçta**dır.')],

  /* ================= AYT Matematik ================= */
  'ayt-mat:Trigonometri': [F('Temel özdeşlikler', [['Pisagor', 'sin²x + cos²x = 1'], ['Tanjant', 'tan x = {sin x/cos x}'], ['İki kat sinüs', 'sin 2x = 2 sin x cos x'], ['İki kat kosinüs', 'cos 2x = 1 − 2sin²x'], ['Sinüs teoremi', '{a/sin A} = 2R'], ['Kosinüs teoremi', 'a² = b² + c² − 2bc cos A']], 2)],
  'ayt-mat:Üstel ve Logaritmik Fonksiyonlar': [F('Logaritma kuralları', [['Tanım', 'logₐ b = c ⇔ a^{c} = b'], ['Çarpım', 'log(xy) = log x + log y'], ['Bölüm', 'log({x/y}) = log x − log y'], ['Kuvvet', 'log xⁿ = n log x'], ['Taban değiştirme', 'logₐ b = {log b/log a}']])],
  'ayt-mat:Diziler': [
    F('Dizi formülleri', [['Aritmetik terim', 'a₁ + (n − 1)d'], ['Aritmetik toplam', '{n(a₁ + aₙ)/2}'], ['Geometrik terim', 'a₁ · r^{n − 1}'], ['Sonsuz geometrik', '{a₁/1 − r} (|r| < 1)']]),
    { kind: 'line', title: 'Aritmetik ve geometrik dizi (a₁ = 2)', x: 'n', y: 'aₙ', series: [{ name: 'aritmetik (d = 2)', points: [[1, 2], [2, 4], [3, 6], [4, 8], [5, 10]] }, { name: 'geometrik (r = 2)', points: [[1, 2], [2, 4], [3, 8], [4, 16], [5, 32]] }], caption: 'Aritmetik dizi doğrusal, geometrik dizi üstel büyür.' }
  ],
  'ayt-mat:Türev': [F('Türev kuralları', [['Kuvvet', '(xⁿ)′ = nx^{n − 1}'], ['Çarpım', '(fg)′ = f′g + fg′'], ['Bölüm', '({f/g})′ = {f′g − fg′/g²}'], ['Zincir', '(f(g(x)))′ = f′(g(x)) · g′(x)'], ['Üstel', '(eˣ)′ = eˣ'], ['Logaritma', '(ln x)′ = {1/x}']])],
  'ayt-mat:İntegral': [F('İntegral kuralları', [['Kuvvet', '∫xⁿ dx = {x^{n + 1}/n + 1} + c'], ['Ters', '∫{1/x} dx = ln|x| + c'], ['Üstel', '∫eˣ dx = eˣ + c'], ['Belirli', '∫_{a}^{b} f = F(b) − F(a)']])],
  'ayt-mat:Karmaşık Sayılar': [F('Karmaşık sayı', [['Eşlenik', 'z̄ = a − bi'], ['Modül', '|z| = √{a² + b²}'], ['Çarpım', 'z · z̄ = a² + b²']])],
  'ayt-mat:Parabol': [F('Parabol', [['Tepe noktası', 'r = −{b/2a}, k = f(r)'], ['Tepe ile yazım', 'y = a(x − r)² + k'], ['y eksenini kesen', '(0, c)']])],
  'ayt-mat:Limit ve Süreklilik': [N('{0/0} belirsizliğinde önce **çarpanlara ayır ve sadeleştir**; köklü ifadede eşlenikle çarp.')],
  'ayt-mat:Permütasyon, Kombinasyon, Binom': [F('Binom', [['Terim sayısı', 'n + 1'], ['Genel terim', 'C(n, r) · x^{n − r} · y^{r}'], ['Katsayılar toplamı', 'değişkenlere 1 yaz']])],
  'ayt-mat:Çemberin Analitiği': [F('Çember denklemi', [['Standart', '(x − a)² + (y − b)² = r²'], ['Genel merkez', '(−{D/2}, −{E/2})'], ['Genel yarıçap', '{√{D² + E² − 4F}/2}']])],

  /* ================= AYT Fizik ================= */
  'ayt-fiz:Vektörler ve Bağıl Hareket': [F('Vektör', [['Dik bileşke', 'R = √{a² + b²}'], ['Bileşenler', 'Fₓ = F cos α, F_{y} = F sin α'], ['Bağıl hız', 'v_{bağıl} = v_{cisim} − v_{gözlemci}']])],
  'ayt-fiz:Newton’un Hareket Yasaları': [F('Dinamik', [['Newton 2', 'F_{net} = m · a'], ['Eğik düzlem', 'mg sin α'], ['Asansör', 'N = m(g ± a)']])],
  'ayt-fiz:Bir Boyutta Sabit İvmeli Hareket': [
    F('Hareket denklemleri', [['Hız', 'v = v₀ + at'], ['Yol', 'x = v₀t + {1/2}at²'], ['Zamansız', 'v² = v₀² + 2ax'], ['Ortalama hız', '{v₀ + v/2}']]),
    { kind: 'line', title: 'Konum – zaman: duruştan a = 2 m/s² ile hızlanma', x: 'zaman (s)', y: 'konum (m)', series: [{ name: 'x = t²', points: [[0, 0], [1, 1], [2, 4], [3, 9], [4, 16]] }], caption: 'Eğri giderek dikleşir: hız artıyor. Her saniye alınan yol 1, 3, 5, 7 m.' }
  ],
  'ayt-fiz:Atışlar': [{ kind: 'line', title: 'Yukarı atış: yükseklik – zaman (v₀ = 30 m/s, g = 10)', x: 'zaman (s)', y: 'yükseklik (m)', series: [{ name: 'h = 30t − 5t²', points: [[0, 0], [1, 25], [2, 40], [3, 45], [4, 40], [5, 25], [6, 0]] }], marks: [[3, 'tepe: v = 0']], caption: 'Çıkış ve iniş süreleri eşit (3 s); en büyük yükseklik {v₀²/2g} = 45 m.', at: 0 }],
  'ayt-fiz:İtme ve Momentum': [F('Momentum', [['Momentum', 'p = m · v'], ['İtme', 'I = F · Δt = Δp'], ['Korunum', 'm₁v₁ + m₂v₂ = m₁v₁′ + m₂v₂′']])],
  'ayt-fiz:Tork, Denge ve Kütle Merkezi': [F('Tork ve denge', [['Tork', 'τ = F · d'], ['Denge', 'Σ F = 0, Σ τ = 0'], ['Kütle merkezi', '{m₁x₁ + m₂x₂/m₁ + m₂}']], 1)],
  'ayt-fiz:Elektriksel Kuvvet, Alan ve Potansiyel': [F('Elektrik', [['Kuvvet', 'F = k{q₁q₂/d²}'], ['Alan', 'E = k{q/d²}'], ['Potansiyel', 'V = k{q/d}'], ['İş', 'W = q · ΔV']])],
  'ayt-fiz:Paralel Levhalar ve Sığa': [F('Sığa', [['Levhalar arası alan', 'E = {V/d}'], ['Yük', 'Q = C · V'], ['Sığa', 'C = ε{A/d}'], ['Enerji', '{1/2}CV²']])],
  'ayt-fiz:Çembersel Hareket': [F('Çembersel hareket', [['Çizgisel hız', 'v = {2πr/T}'], ['Açısal hız', 'ω = {2π/T}'], ['Merkezcil ivme', 'a = {v²/r}'], ['Merkezcil kuvvet', 'F = {mv²/r}']])],
  'ayt-fiz:Dalga Mekaniği': [F('Dalga', [['Young saçak aralığı', 'Δx = {λL/d}'], ['Dalga hızı', 'v = λ · f']])],
  'ayt-fiz:Atom Fiziği ve Radyoaktivite': [{ kind: 'line', title: 'Radyoaktif bozunma: yarılanma süresi 5 gün, başlangıç 80 g', x: 'zaman (gün)', y: 'kalan madde (g)', series: [{ name: 'kalan', points: [[0, 80], [5, 40], [10, 20], [15, 10], [20, 5]] }], caption: 'Her yarılanma süresinde kalan madde yarıya iner: m = m₀ · ({1/2})ⁿ.', at: 1 }],
  'ayt-fiz:Modern Fizik ve Uygulamaları': [F('Kuantum', [['Foton enerjisi', 'E = h · f'], ['Fotoelektrik', 'E_{k} = hf − W₀'], ['de Broglie', 'λ = {h/mv}'], ['Kütle – enerji', 'E = mc²']])],
  'ayt-fiz:Alternatif Akım ve Transformatörler': [F('AC ve transformatör', [['Etkin değer', '{V_{maks}/√{2}}'], ['Transformatör', '{V₁/V₂} = {N₁/N₂}'], ['Güç korunur', 'V₁I₁ = V₂I₂']])],
  'ayt-fiz:Manyetizma ve Elektromanyetik İndükleme': [F('İndüksiyon', [['Akı', 'Φ = B · A · cos α'], ['Faraday', 'ε = −N{ΔΦ/Δt}'], ['Hareketli çubuk', 'ε = B · L · v'], ['Teldeki kuvvet', 'F = B · I · L']])],

  /* ================= AYT Kimya ================= */
  'ayt-kim:Modern Atom Teorisi': [{ kind: 'bars', title: '3. periyotta birinci iyonlaşma enerjisi', items: [['Na', 496], ['Mg', 738], ['Al', 578], ['Si', 786], ['P', 1012], ['S', 1000], ['Cl', 1251], ['Ar', 1521]], unit: 'kJ/mol', highlight: 'Al', caption: 'Genel olarak sağa doğru artar; istisnalar Mg > Al (2A > 3A) ve P > S (5A > 6A).', at: 1 }],
  'ayt-kim:Gazlar': [
    F('Formül kartları', [['İdeal gaz', 'PV = nRT'], ['Boyle', 'P₁V₁ = P₂V₂'], ['Charles', '{V₁/T₁} = {V₂/T₂}'], ['Graham', '{v₁/v₂} = √{{M₂/M₁}}']], 1),
    { kind: 'line', title: 'Boyle yasası: sabit sıcaklıkta basınç – hacim', x: 'basınç (atm)', y: 'hacim (L)', series: [{ name: 'P · V = 12', points: [[1, 12], [2, 6], [3, 4], [4, 3], [6, 2]] }], caption: 'Basınç 2 katına çıkınca hacim yarıya iner; eğri hiperboldür.', at: 0 }
  ],
  'ayt-kim:Sıvı Çözeltiler ve Çözünürlük': [{ kind: 'line', title: 'Çözünürlük – sıcaklık (g / 100 g su)', x: 'sıcaklık (°C)', y: 'çözünürlük', series: [{ name: 'KNO₃', points: [[0, 13.3], [20, 31.6], [40, 63.9], [60, 110], [80, 169]] }, { name: 'NaCl', points: [[0, 35.7], [20, 36], [40, 36.6], [60, 37.3], [80, 38.4]] }], caption: 'KNO₃’ün çözünürlüğü sıcaklıkla hızla artar; NaCl’ninki neredeyse değişmez. Kristallendirmede bu fark kullanılır.' }],
  'ayt-kim:Kimyasal Tepkimelerde Enerji': [F('Entalpi', [['Oluşum entalpileriyle', 'ΔH = ΣΔH_{ürün} − ΣΔH_{giren}'], ['Bağ enerjileriyle', 'ΔH = Σ(kırılan) − Σ(oluşan)'], ['Ters tepkime', '−ΔH']])],
  'ayt-kim:Kimyasal Denge': [
    F('Denge sabiti', [['aA + bB ⇌ cC', 'K_{c} = {[C]^{c}/[A]^{a}[B]^{b}}'], ['Ters tepkime', '{1/K}'], ['Gaz sabiti ilişkisi', 'Kₚ = K_{c}(RT)^{Δn}']], 0),
    { kind: 'line', title: 'A ⇌ 2B: derişimlerin zamanla değişimi (temsilî)', x: 'zaman', y: 'derişim (M)', series: [{ name: '[A]', points: [[0, 1], [1, 0.7], [2, 0.55], [3, 0.5], [4, 0.5], [5, 0.5]] }, { name: '[B]', points: [[0, 0], [1, 0.6], [2, 0.9], [3, 1], [4, 1], [5, 1]] }], marks: [[3, 'denge']], caption: 'Dengede derişimler sabit kalır ama tepkimeler durmaz; ileri ve geri hızlar eşittir. A’nın 0,5 M azalmasına karşılık B 1 M artar (katsayı 2).', at: 0 }
  ],
  'ayt-kim:Asit-Baz Dengesi': [{ kind: 'line', title: 'Titrasyon eğrisi: kuvvetli asit + kuvvetli baz (temsilî)', x: 'eklenen baz (mL)', y: 'pH', series: [{ name: 'pH', points: [[0, 1], [10, 1.2], [20, 1.5], [24, 2.4], [25, 7], [26, 11.6], [30, 12.3], [40, 12.6]] }], marks: [[25, 'eşdeğerlik']], caption: 'Eşdeğerlik noktasında mol H⁺ = mol OH⁻ ve pH = 7; yakınında pH hızla sıçrar.' }],
  'ayt-kim:Kimya ve Elektrik': [
    { kind: 'table', title: 'Standart indirgenme potansiyelleri', head: ['Yarı tepkime', 'E° (V)'], rows: [['Ag⁺ + e⁻ → Ag', '+0,80'], ['Cu²⁺ + 2e⁻ → Cu', '+0,34'], ['2H⁺ + 2e⁻ → H₂', '0,00'], ['Zn²⁺ + 2e⁻ → Zn', '−0,76'], ['Mg²⁺ + 2e⁻ → Mg', '−2,37']], caption: 'Potansiyeli büyük olan katot olur. Zn–Cu pili: E° = 0,34 − (−0,76) = 1,10 V.' },
    F('Elektrokimya', [['Pil potansiyeli', 'E° = E°_{katot} − E°_{anot}'], ['Yük', 'Q = I · t'], ['Faraday', '1 mol e⁻ = 96 500 C']])
  ],
  'ayt-kim:Organik Bileşikler': [N('Alkan **tekli bağ**, yer değiştirme; alken **ikili**, katılma. Alkol ile eter, aldehit ile keton aynı formüllü (fonksiyonel grup) izomerlerdir.')],

  /* ================= AYT Biyoloji ================= */
  'ayt-bio:Sinir Sistemi': [{ kind: 'line', title: 'Aksiyon potansiyeli: zar potansiyeli (temsilî)', x: 'zaman (ms)', y: 'zar potansiyeli (mV)', series: [{ name: 'potansiyel', points: [[0, -70], [1, -70], [1.5, -55], [2, 30], [2.8, -80], [4, -70]] }], marks: [[1.5, 'eşik'], [2, 'Na⁺ girer'], [2.8, 'K⁺ çıkar']], caption: 'Dinlenmede içerisi −70 mV. Eşik aşılınca Na⁺ girer (depolarizasyon), sonra K⁺ çıkar (repolarizasyon). Eşik aşılmazsa impuls oluşmaz.', at: 0 }],
  'ayt-bio:Duyu Organları': [{ kind: 'svg', svg: 'goz', title: 'Gözün yapısı', at: 0 }],
  'ayt-bio:Dolaşım ve Bağışıklık Sistemi': [{ kind: 'svg', svg: 'dolasim', title: 'Kan dolaşımı şeması', at: 0 }, N('Damarın adı kanın **yönünü** söyler, temizliğini değil: akciğer **atar**damarında kirli kan, akciğer **toplar**damarında temiz kan vardır.')],
  'ayt-bio:Genden Proteine': [{ kind: 'svg', svg: 'dna', title: 'DNA çift zinciri', at: 0 }],
  'ayt-bio:Canlılık ve Enerji': [{ kind: 'bars', title: 'Bir glikozdan elde edilen ATP (yaklaşık)', items: [['Oksijenli solunum', 38], ['Fermantasyon', 2]], unit: 'ATP', highlight: 'Oksijenli solunum', caption: 'Ders kitaplarında oksijenli solunum için 36–38 ATP verilir; fermantasyonda yalnız glikolizdeki net 2 ATP elde edilir.' }],
  'ayt-bio:Komünite ve Popülasyon Ekolojisi': [{ kind: 'line', title: 'Popülasyon büyümesi (temsilî)', x: 'zaman', y: 'birey sayısı', series: [{ name: 'J tipi (sınırsız kaynak)', points: [[0, 10], [1, 20], [2, 40], [3, 80], [4, 160]] }, { name: 'S tipi (sınırlı kaynak)', points: [[0, 10], [1, 20], [2, 38], [3, 62], [4, 78], [5, 85], [6, 88]] }], caption: 'S tipinde büyüme taşıma kapasitesine yaklaşınca yavaşlar ve durur.', at: 0 }],
  'ayt-bio:Endokrin Sistem': [N('İnsülin kan şekerini **düşürür**, glukagon **yükseltir**. Kalsitonin kan kalsiyumunu düşürür, parathormon yükseltir: ikisi de zıt çiftlerdir.')],

  /* ================= AYT Edebiyat ================= */
  'ayt-edb:Divan Edebiyatı': [N('**Mesnevi**: aa, bb, cc (uzun hikâye). **Gazel** ve **kaside**: aa, ba, ca. Gazelde ilk beyit matla, son beyit makta.')],
  'ayt-edb:Tanzimat Edebiyatı': [N('İlk **yerli** roman Taaşşuk-ı Talat ve Fitnat, ilk **edebi** roman İntibah, ilk **realist** roman Araba Sevdası.')],
  'ayt-edb:Cumhuriyet Dönemi Şiiri': [N('**Garip** sade ve anlaşılır; **İkinci Yeni** kapalı ve imgeli. İkisini karıştırma.')],
  'ayt-edb:Söz Sanatları': [N('Benzetmede ögeler azaldıkça sanat güçlenir: teşbih → teşbih-i beliğ → istiare.')],
  'ayt-edb:Halk Edebiyatı': [N('Yunus Emre **tekke**, Karacaoğlan **âşık** edebiyatıdır. Son dörtlükte şairin adı geçer: tapşırma.')],

  /* ================= AYT Tarih ================= */
  'ayt-tar:Değişen Dünya Dengeleri ve Osmanlı': [N('Karlofça: **ilk büyük toprak kaybı**. Pasarofça: **Lale Devri** başlar. Küçük Kaynarca: **ilk savaş tazminatı**, Kırım bağımsız.')],
  'ayt-tar:XIX. Yüzyılda Osmanlı ve Islahatlar': [N('Tanzimat **can ve mal güvenliği**, Islahat **gayrimüslimlere haklar**, Kanun-i Esasi **ilk anayasa**.')],
  'ayt-tar:Milli Mücadele': [N('Ankara Antlaşması (1921): TBMM’yi tanıyan **ilk İtilaf devleti** Fransa. Gümrü: TBMM’nin **ilk askerî ve siyasi** başarısı.')],

  /* ================= AYT Coğrafya ================= */
  'ayt-cog:Nüfus Politikaları': [{ kind: 'line', title: 'Türkiye’de toplam doğurganlık hızı (yaklaşık)', x: 'yıl', y: 'çocuk / kadın', series: [{ name: 'doğurganlık', points: [[2001, 2.38], [2010, 2.04], [2015, 2.15], [2018, 1.99], [2020, 1.77], [2022, 1.62], [2023, 1.51]] }], caption: 'Kaynak: TÜİK doğum istatistikleri (yuvarlanmış). Nüfusun kendini yenilemesi için gereken düzey yaklaşık 2,1.' }],
  'ayt-cog:Bölgesel Kalkınma Projeleri': [N('Kısaltmalar bölgeyi söyler: **GAP** Güneydoğu, **DAP** Doğu, **DOKAP** Doğu Karadeniz, **KOP** Konya Ovası.')],

  /* ================= AYT Felsefe ve Din ================= */
  'ayt-fel:Mantık': [N('Tümdengelim **zorunlu**, tümevarım **olası** sonuç verir. İçlem arttıkça kaplam daralır.')],
  'ayt-fel:Psikoloji': [N('Klasik koşullanma **Pavlov** (zil – salya), edimsel koşullanma **Skinner** (pekiştireç), gözlemle öğrenme **Bandura**.')],
  'ayt-din:Yaşayan Dinler': [N('Hinduizm ve Şintoizmin kurucusu yoktur. Budizmin kurucusu Buda, kutsal metni Tripitaka.')],

  /* ================= YDT ================= */
  'ydt-ing:Tenses': [N('**since** + başlangıç noktası (since 2015), **for** + süre (for ten years). Belirli geçmiş zamanla (yesterday) present perfect kullanılmaz.')],
  'ydt-ing:Conditionals ve Wish': [N('İkinci tip koşulda bütün öznelerle **were**: If I were you… “Unless” = if not.')],
  'ydt-ing:Gerund ve Infinitive': [N('“look forward **to**”, “be used **to**” kalıplarındaki to edattır: ardından **V-ing** gelir.')],
  'ydt-ing:Modals': [N('**mustn’t** = yasak; **don’t have to** = gerek yok. **must have done** = kesin yapmıştır; **should have done** = yapmalıydı ama yapmadı.')],
  'ydt-ing:Adverbial Clauses ve Bağlaçlar': [N('**although** + cümle; **despite** + isim / V-ing. Anlamları aynı, yapıları farklı.')]
};
