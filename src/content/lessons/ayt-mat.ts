import type { LessonSet } from './types';

const L: LessonSet = {
  'Fonksiyonlar (İleri)': {
    intro: 'Fonksiyon grafikleri, grafik dönüşümleri, bileşke ve ters fonksiyon. AYT’de grafikten yorum soruları ağırlıktadır.',
    parts: [
      { h: 'Grafik okuma', items: [
        'f(a) değeri: x = a noktasındaki grafiğin y değeri.',
        'f(x) = 0 çözümleri grafiğin x eksenini kestiği noktalardır.',
        'f(x) > 0 olan aralıklar grafiğin x ekseninin üstünde kaldığı yerlerdir.',
        'Artan fonksiyon: x büyüdükçe f(x) büyür; azalan fonksiyon: küçülür.'
      ] },
      { h: 'Dönüşümler', items: [
        'f(x) + k: grafik k birim yukarı. f(x − a): grafik a birim sağa.',
        '−f(x): x eksenine göre yansıma. f(−x): y eksenine göre yansıma.',
        '|f(x)|: x ekseninin altındaki kısımlar yukarı katlanır.',
        'k · f(x): düşey yönde k kat uzama.'
      ] },
      { h: 'Ters ve bileşke', items: [
        'f ile f⁻¹ grafikleri y = x doğrusuna göre simetriktir.',
        '(f ∘ f⁻¹)(x) = x. (f ∘ g)⁻¹ = g⁻¹ ∘ f⁻¹.',
        'Bir fonksiyonun tersinin de fonksiyon olması için birebir ve örten olmalı.'
      ] }
    ],
    traps: [
      'f(x − 2) grafiği sola değil, **sağa** kayar.'
    ],
    example: {
      q: 'f(x) = 2x − 4 ve g(x) = x + 3 ise (f ∘ g)(1) ve f⁻¹(x) nedir?',
      a: 'g(1) = 4, f(4) = 4. y = 2x − 4 → x = {y + 4/2}; f⁻¹(x) = {x + 4/2}.'
    }
  },

  'Polinomlar ve Denklemler': {
    intro: 'Polinom bölmesi, çarpanlara ayırma ve yüksek dereceli denklemler. Kalan teoremi ve kök–katsayı bağıntıları sık sorulur.',
    parts: [
      { h: 'Polinom bilgisi', items: [
        'P(a) = 0 ise (x − a), P(x)’in çarpanıdır.',
        'P(x)’in x² − a² ile bölümünden kalan ax + b biçimindedir; P(a) ve P(−a) yazılarak bulunur.',
        'P(x)’in (x − a)² ile tam bölünmesi için P(a) = 0 ve P′(a) = 0 olmalı.',
        'Üçüncü dereceden ax³ + bx² + cx + d = 0 için: x₁ + x₂ + x₃ = −{b/a}, x₁x₂x₃ = −{d/a}.'
      ] },
      { h: 'Denklem çözme', items: [
        'Tam sayı köklerini sabit terimin bölenleri arasında ara.',
        'Bir kökü bulunca polinomu (x − kök) ile bölüp dereceyi düşür (Horner yöntemi).',
        'Değişken değiştirme: x⁴ − 5x² + 4 = 0 → t = x² için t² − 5t + 4 = 0.'
      ] }
    ],
    traps: [
      'Kökler çarpımında derecenin tek–çift oluşuna göre işaret değişir: üçüncü dereceden denklemde −{d/a}.'
    ],
    example: {
      q: 'P(x) = x³ − 6x² + 11x − 6 polinomunun kökleri nelerdir?',
      a: 'P(1) = 1 − 6 + 11 − 6 = 0 → x = 1 kök. Bölünce x² − 5x + 6 = (x − 2)(x − 3). Kökler 1, 2, 3.'
    }
  },

  'İkinci Dereceden Denklemler ve Eşitsizlikler': {
    intro: 'İkinci dereceden denklemlerin kökleri ile eşitsizlik çözümü ve işaret tablosu.',
    parts: [
      { h: 'Denklemler', items: [
        'Δ = b² − 4ac; x = {−b ± √{Δ}/2a}.',
        'x₁ + x₂ = −{b/a}, x₁x₂ = {c/a}, |x₁ − x₂| = {√{Δ}/|a|}.',
        'Kökleri simetrik (x₁ = −x₂) ise b = 0; ters işaretli ise {c/a} < 0.'
      ] },
      { h: 'Eşitsizlik ve işaret tablosu', items: [
        'Kökleri bul, sayı doğrusuna sırala.',
        'En sağdaki aralığa başkatsayının işaretini yaz; her kökte işaret değiştir (çift katlı kökte değiştirme).',
        'İstenen işaretli aralıkları seç; paydayı sıfır yapan değerleri dahil etme.',
        'ax² + bx + c > 0 her x için doğruysa: a > 0 ve Δ < 0.'
      ] }
    ],
    traps: [
      'Çift katlı kökte (örneğin (x − 2)²) işaret değişmez.'
    ],
    example: {
      q: 'x² − x − 6 ≤ 0 eşitsizliğinin çözüm kümesi nedir?',
      a: 'Kökler (x − 3)(x + 2) = 0 → −2 ve 3. Başkatsayı pozitif: kökler arası negatif. Çözüm: [−2, 3].'
    }
  },

  'Parabol': {
    intro: 'y = ax² + bx + c fonksiyonunun grafiği. Tepe noktası, eksenleri kestiği noktalar ve doğruyla ilişkisi sorulur.',
    parts: [
      { h: 'Özellikler', items: [
        'a > 0 ise kollar yukarı (en küçük değer tepede), a < 0 ise aşağı.',
        '**Tepe noktası:** r = −{b/2a}, k = f(r). Simetri ekseni x = r.',
        'y eksenini (0, c)’de keser. x eksenini kökleri varsa köklerde keser.',
        'Δ > 0 iki noktada, Δ = 0 teğet, Δ < 0 x eksenini kesmez.',
        'Tepe noktası verilirse y = a(x − r)² + k biçiminde yazılır.'
      ] },
      { h: 'Doğru ile parabol', items: [
        'Ortak çözümden ikinci dereceden denklem elde edilir; Δ > 0 iki noktada keser, Δ = 0 teğet, Δ < 0 kesişmez.'
      ] }
    ],
    example: {
      q: 'y = x² − 4x + 1 parabolünün tepe noktası nedir?',
      a: 'r = −{−4/2} = 2. k = 4 − 8 + 1 = −3. Tepe noktası (2, −3).'
    }
  },

  'Karmaşık Sayılar': {
    intro: 'i² = −1 tanımıyla gerçel olmayan sayılar. i’nin kuvvetleri, eşlenik ve modül sorulur.',
    parts: [
      { h: 'Temel bilgiler', items: [
        'z = a + bi; a gerçel kısım, b sanal kısım.',
        'i’nin kuvvetleri 4’lük döngüdedir: i, −1, −i, 1.',
        '**Eşlenik:** z̄ = a − bi. z · z̄ = a² + b².',
        '**Modül:** |z| = √{a² + b²}; karmaşık düzlemde orijine uzaklık.',
        'Bölmede payda eşleniğiyle çarpılır.',
        'Gerçel katsayılı ikinci dereceden denklemde Δ < 0 ise kökler birbirinin eşleniğidir.'
      ] }
    ],
    example: {
      q: '{3 + i/1 − i} ifadesini a + bi biçiminde yaz.',
      a: 'Payda eşleniğiyle çarp: {(3 + i)(1 + i)/2} = {3 + 3i + i + i²/2} = {2 + 4i/2} = 1 + 2i.'
    }
  },

  'Permütasyon, Kombinasyon, Binom': {
    intro: 'Sayma yöntemleri ile binom açılımı. Binomda terim sayısı, katsayılar toplamı ve genel terim sorulur.',
    parts: [
      { h: 'Sayma', items: [
        'P(n, r) = {n!/(n − r)!}; C(n, r) = {n!/r!(n − r)!}.',
        'Tekrarlı permütasyon {n!/a! · b!}; dairesel (n − 1)!.',
        'Seçim yapılıp sıralanıyorsa önce kombinasyonla seç, sonra sırala.'
      ] },
      { h: 'Binom açılımı', items: [
        '(x + y)ⁿ açılımında n + 1 terim vardır.',
        'Genel terim (baştan r + 1. terim): C(n, r) · x^{n − r} · y^{r}.',
        'Katsayılar toplamı: değişkenlere 1 yaz. Sabit terim: x’in üssünü 0 yapan terimi bul.',
        'C(n, 0) + C(n, 1) + … + C(n, n) = 2ⁿ (Pascal üçgeninin satır toplamı).'
      ] }
    ],
    traps: [
      'Baştan k. terim için r = k − 1 alınır.'
    ],
    example: {
      q: '(x + 2)⁵ açılımında x³’lü terimin katsayısı kaçtır?',
      a: 'x^{5 − r} = x³ → r = 2. C(5, 2) · 2² = 10 · 4 = 40.'
    }
  },

  'Olasılık': {
    intro: 'Koşullu olasılık, bağımsız olaylar ve deney tekrarı. AYT’de sayma ile birlikte daha karmaşık durumlar gelir.',
    parts: [
      { h: 'Kurallar', items: [
        'P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
        '**Koşullu:** P(A | B) = {P(A ∩ B)/P(B)}: B gerçekleştiği bilindiğinde A’nın olasılığı.',
        '**Bağımsız:** P(A ∩ B) = P(A) · P(B).',
        'Tümleyen: P(en az bir) = 1 − P(hiçbiri).',
        'Ağaç diyagramı: dallardaki olasılıklar çarpılır, sonuç dalları toplanır.'
      ] }
    ],
    traps: [
      'Koşullu olasılıkta örnek uzay daralır; paydaya yalnız B’nin durumlarını yaz.'
    ],
    example: {
      q: 'İki zar atılıyor. Toplamın 8 olduğu bilindiğine göre zarlardan birinin 3 olma olasılığı kaçtır?',
      a: 'Toplamı 8: (2,6), (3,5), (4,4), (5,3), (6,2) → 5 durum. Birinde 3 olan: (3,5), (5,3) → {2/5}.'
    }
  },

  'Trigonometri': {
    intro: 'Trigonometrik oranlar, birim çember, dönüşüm formülleri, denklemler ve üçgende sinüs–kosinüs teoremi. AYT’nin en büyük konularından.',
    parts: [
      { h: 'Temel bilgiler', items: [
        'Dik üçgende sin = {karşı/hipotenüs}, cos = {komşu/hipotenüs}, tan = {karşı/komşu}, cot = {komşu/karşı}.',
        'sin²x + cos²x = 1; tan x = {sin x/cos x}; tan x · cot x = 1.',
        'Özel açılar: sin 30° = {1/2}, sin 45° = {√{2}/2}, sin 60° = {√{3}/2}; cos için tersten.',
        'Radyan: π = 180°.'
      ] },
      { h: 'Bölgeler ve indirgeme', items: [
        'İşaretler: I. bölge hepsi +; II. bölgede sin +; III. bölgede tan, cot +; IV. bölgede cos +.',
        '180° ± x ve 360° − x biçiminde fonksiyon adı değişmez; 90° ± x ve 270° ± x biçiminde değişir (sin ↔ cos).',
        'Periyot: sin ve cos 2π, tan ve cot π.'
      ] },
      { h: 'Formüller', items: [
        'sin(a ± b) = sin a cos b ± cos a sin b; cos(a ± b) = cos a cos b ∓ sin a sin b.',
        'sin 2x = 2 sin x cos x; cos 2x = cos²x − sin²x = 1 − 2sin²x = 2cos²x − 1.',
        '**Sinüs teoremi:** {a/sin A} = {b/sin B} = 2R. **Kosinüs teoremi:** a² = b² + c² − 2bc · cos A.',
        'Alan = {1/2} · b · c · sin A.'
      ] }
    ],
    traps: [
      'sin x = {1/2} denkleminin [0, 2π) aralığında iki çözümü vardır: {π/6} ve {5π/6}.'
    ],
    example: {
      q: 'sin x = {3/5} ve x dar açı ise cos 2x kaçtır?',
      a: 'cos 2x = 1 − 2sin²x = 1 − 2 · {9/25} = {7/25}.'
    }
  },

  'Üstel ve Logaritmik Fonksiyonlar': {
    intro: 'Üstel fonksiyon ve onun tersi logaritma. Logaritma kuralları ve denklemleri her yıl sorulur.',
    parts: [
      { h: 'Logaritma', items: [
        'logₐ b = c ⇔ a^{c} = b (a > 0, a ≠ 1, b > 0).',
        'logₐ(xy) = logₐx + logₐy; logₐ({x/y}) = logₐx − logₐy; logₐ xⁿ = n · logₐ x.',
        '**Taban değiştirme:** logₐ b = {log b/log a}.',
        'logₐ a = 1; logₐ 1 = 0; a^{logₐ x} = x.',
        'log ile yazılırsa taban 10, ln ile yazılırsa taban e.'
      ] },
      { h: 'Fonksiyonlar ve denklemler', items: [
        'f(x) = aˣ: a > 1 ise artan, 0 < a < 1 ise azalan; (0, 1) noktasından geçer.',
        'f(x) = logₐ x: (1, 0) noktasından geçer; aˣ ile y = x’e göre simetrik.',
        'Denklemde önce tanım şartını yaz (logaritmanın içi pozitif), sonra çöz.',
        'Basamak sayısı: 10’un kuvvetleri arasında yer bulmak için log kullanılır.'
      ] }
    ],
    traps: [
      'log(x + y) ≠ log x + log y.',
      'Bulunan çözüm tanım şartını sağlamıyorsa atılır.'
    ],
    example: {
      q: 'log₂(x − 1) + log₂(x + 1) = 3 denklemini çöz.',
      a: 'log₂((x − 1)(x + 1)) = 3 → x² − 1 = 8 → x = ±3. Tanım şartı x > 1 olduğu için x = 3.'
    }
  },

  'Diziler': {
    intro: 'Aritmetik ve geometrik diziler; genel terim ve ilk n terim toplamı.',
    parts: [
      { h: 'Aritmetik dizi', items: [
        'Ardışık terimler farkı sabit (d). aₙ = a₁ + (n − 1)d.',
        'Sₙ = {n(a₁ + aₙ)/2}.',
        'Orta terim: aₖ = {aₖ₋₁ + aₖ₊₁/2}.',
        'aₘ − aₙ = (m − n)d.'
      ] },
      { h: 'Geometrik dizi', items: [
        'Ardışık terimler oranı sabit (r). aₙ = a₁ · r^{n − 1}.',
        'Sₙ = a₁ · {rⁿ − 1/r − 1} (r ≠ 1).',
        'Orta terim: aₖ² = aₖ₋₁ · aₖ₊₁.',
        '|r| < 1 ise sonsuz terim toplamı {a₁/1 − r}.'
      ] }
    ],
    example: {
      q: 'Aritmetik bir dizide a₃ = 11 ve a₇ = 23 ise a₁ ve S₁₀ kaçtır?',
      a: '4d = 12 → d = 3. a₁ = 11 − 6 = 5. a₁₀ = 5 + 27 = 32. S₁₀ = {10(5 + 32)/2} = 185.'
    }
  },

  'Limit ve Süreklilik': {
    intro: 'Bir fonksiyonun bir noktaya yaklaşırken aldığı değer. Belirsizlikleri gidermek ve süreklilik koşulu sorulur.',
    parts: [
      { h: 'Limit', items: [
        'Limitin var olması için sağdan ve soldan limitler eşit olmalı.',
        'Polinomlarda değer doğrudan yazılır.',
        '{0/0} belirsizliği: çarpanlara ayırıp sadeleştir ya da eşlenikle çarp (L’Hospital: türevler oranı).',
        'Sonsuzda rasyonel fonksiyon: derece payda büyükse 0, eşitse başkatsayılar oranı, pay büyükse ±∞.'
      ] },
      { h: 'Süreklilik', items: [
        'f, x = a’da süreklidir ⇔ limit var ve f(a)’ya eşit.',
        'Parçalı fonksiyonlarda kırılma noktasında sağ limit = sol limit = fonksiyon değeri olmalı.',
        'Paydayı sıfır yapan noktalarda süreksizlik vardır.'
      ] }
    ],
    example: {
      q: 'lim_{x → 2} {x² − 4/x − 2} kaçtır?',
      a: '{0/0} belirsizliği. (x − 2)(x + 2) sadeleşir, x + 2 kalır: 2 + 2 = 4.'
    }
  },

  'Türev': {
    intro: 'Anlık değişim hızı ve teğetin eğimi. Türev kuralları, artan–azalan aralıklar, ekstremum ve maksimum–minimum problemleri sorulur.',
    parts: [
      { h: 'Kurallar', items: [
        '(xⁿ)′ = n · x^{n − 1}; (c)′ = 0.',
        '(f · g)′ = f′g + fg′; ({f/g})′ = {f′g − fg′/g²}.',
        '**Zincir kuralı:** (f(g(x)))′ = f′(g(x)) · g′(x).',
        '(sin x)′ = cos x; (cos x)′ = −sin x; (eˣ)′ = eˣ; (ln x)′ = {1/x}.'
      ] },
      { h: 'Uygulamalar', items: [
        'f′(a), x = a’daki teğetin eğimidir. Teğet denklemi: y − f(a) = f′(a)(x − a).',
        'f′ > 0 olan aralıkta f artan, f′ < 0 olan aralıkta azalan.',
        'f′(a) = 0 ve f′ işaret değiştiriyorsa a’da yerel ekstremum vardır (+ → − maksimum, − → + minimum).',
        'f″ > 0 çukur yukarı (konveks), f″ < 0 çukur aşağı; işaret değiştiren yer büküm noktası.',
        'Optimizasyon: büyüklüğü tek değişkenle yaz, türevi sıfıra eşitle.'
      ] }
    ],
    traps: [
      'f′(a) = 0 olması her zaman ekstremum demek değildir: f(x) = x³ için x = 0’da ekstremum yoktur.'
    ],
    example: {
      q: 'f(x) = x³ − 3x² + 2 fonksiyonunun yerel ekstremum noktaları nedir?',
      a: 'f′(x) = 3x² − 6x = 3x(x − 2) = 0 → x = 0, x = 2. f′: + | − | +. x = 0’da yerel maksimum (f(0) = 2), x = 2’de yerel minimum (f(2) = −2).'
    }
  },

  'İntegral': {
    intro: 'Türevin tersi işlemi ve eğri altındaki alan. Belirsiz integral kuralları, belirli integral ve alan hesabı sorulur.',
    parts: [
      { h: 'Kurallar', items: [
        '∫xⁿ dx = {x^{n + 1}/n + 1} + c (n ≠ −1); ∫{1/x} dx = ln|x| + c.',
        '∫eˣ dx = eˣ + c; ∫sin x dx = −cos x + c; ∫cos x dx = sin x + c.',
        '**Değişken değiştirme:** iç fonksiyona u de, du’yu bul.',
        '**Kısmi integral:** ∫u dv = uv − ∫v du.'
      ] },
      { h: 'Belirli integral ve alan', items: [
        '∫_{a}^{b} f(x) dx = F(b) − F(a).',
        '∫_{a}^{b} = −∫_{b}^{a}; ∫_{a}^{b} + ∫_{b}^{c} = ∫_{a}^{c}.',
        'Alan: x ekseninin altında kalan parçalar negatif çıkar; alan için mutlak değer al.',
        'İki eğri arası alan: ∫(üstteki − alttaki) dx; sınırlar kesişim noktaları.'
      ] }
    ],
    traps: [
      'Belirli integral alan değildir; eğri x ekseninin altına iniyorsa parçalara ayır.'
    ],
    example: {
      q: '∫_{0}^{2} (3x² + 2x) dx kaçtır?',
      a: 'İlkel: x³ + x². x = 2: 8 + 4 = 12; x = 0: 0. Sonuç 12.'
    }
  },

  'Çokgenler ve Dörtgenler (Tekrar)': {
    intro: 'TYT geometrisindeki çokgen ve dörtgen bilgilerinin AYT seviyesinde tekrarı ve birleşik şekiller.',
    parts: [
      { h: 'Hatırla', items: [
        'İç açılar toplamı (n − 2) · 180°; dış açılar toplamı 360°; köşegen sayısı {n(n − 3)/2}.',
        'Düzgün altıgen 6 eşkenar üçgenden oluşur: alan 6 · {a²√{3}/4}.',
        'Paralelkenarda köşegenler alanı 4 eşit parçaya böler.',
        'Yamukta köşegenlerin oluşturduğu yan üçgenlerin alanları eşittir.',
        'Dörtgende köşegenler dikse alan {e · f/2}.'
      ] }
    ],
    example: {
      q: 'Kenarı 4 cm olan düzgün altıgenin alanı kaç cm²’dir?',
      a: '6 · {16√{3}/4} = 24√{3} cm².'
    }
  },

  'Çember ve Daire': {
    intro: 'Çemberde açı, kiriş, teğet ve kuvvet bağıntıları. AYT’de TYT’ye göre daha çok bağıntı kullanılır.',
    parts: [
      { h: 'Açılar', items: [
        'Çevre açı = {gördüğü yay/2}; merkez açı = gördüğü yay.',
        'Teğet–kiriş açısı = {gördüğü yay/2}.',
        'İç açı (kirişler çember içinde kesişirse) = {karşılıklı yaylar toplamı/2}.',
        'Dış açı = {büyük yay − küçük yay/2}.'
      ] },
      { h: 'Uzunluk bağıntıları', items: [
        'Merkezden kirişe inilen dikme kirişi ortalar.',
        'Kesişen kirişler: |AP| · |PB| = |CP| · |PD|.',
        'Dışarıdan teğet ve kesen: |PT|² = |PA| · |PB|.',
        'İki çember: merkezler arası uzaklık ile yarıçapların toplam ve farkı konumu belirler.'
      ] }
    ],
    example: {
      q: 'Bir çemberde kesişen iki kirişten biri 4 ve 6 birimlik parçalara ayrılıyor; diğerinin bir parçası 3 ise öteki parçası kaçtır?',
      a: '4 · 6 = 3 · x → x = 8.'
    }
  },

  'Doğrunun Analitiği': {
    intro: 'Doğru denklemleri, iki doğrunun durumu, uzaklık ve simetri.',
    parts: [
      { h: 'Formüller', items: [
        'Eğim m = {y₂ − y₁/x₂ − x₁}; denklem y − y₁ = m(x − x₁).',
        'Eksen kesişimleri a ve b ise {x/a} + {y/b} = 1.',
        'Paralel: m₁ = m₂. Dik: m₁ · m₂ = −1.',
        'Noktanın doğruya uzaklığı {|ax₀ + by₀ + c|/√{a² + b²}}.',
        'Paralel iki doğru arası uzaklık {|c₁ − c₂|/√{a² + b²}}.'
      ] },
      { h: 'Simetri', items: [
        'x eksenine göre (x, −y); y eksenine göre (−x, y); orijine göre (−x, −y); y = x doğrusuna göre (y, x).',
        'Bir noktaya göre simetride o nokta orta noktadır.'
      ] }
    ],
    example: {
      q: '(3, 4) noktasının 3x + 4y − 5 = 0 doğrusuna uzaklığı kaçtır?',
      a: '{|9 + 16 − 5|/√{9 + 16}} = {20/5} = 4.'
    }
  },

  'Çemberin Analitiği': {
    intro: 'Çember denklemi, merkez ve yarıçap bulma, doğru ile çemberin durumu.',
    parts: [
      { h: 'Denklem', items: [
        '**Standart:** (x − a)² + (y − b)² = r²; merkez (a, b), yarıçap r.',
        '**Genel:** x² + y² + Dx + Ey + F = 0; merkez (−{D/2}, −{E/2}), r = {√{D² + E² − 4F}/2}.',
        'Eksenlere teğet çember: x eksenine teğetse r = |b|, y eksenine teğetse r = |a|.'
      ] },
      { h: 'Doğru ile çember', items: [
        'Merkezin doğruya uzaklığı d olsun: d < r keser, d = r teğet, d > r kesmez.'
      ] }
    ],
    example: {
      q: 'x² + y² − 6x + 4y − 3 = 0 çemberinin merkezi ve yarıçapı nedir?',
      a: 'Merkez (3, −2). r = {√{36 + 16 + 12}/2} = {8/2} = 4.'
    }
  },

  'Dönüşüm Geometrisi': {
    intro: 'Öteleme, yansıma ve dönme dönüşümleri ile koordinat değişimleri.',
    parts: [
      { h: 'Dönüşümler', items: [
        '**Öteleme:** (x, y) noktası (a, b) kadar ötelenirse (x + a, y + b).',
        '**Yansıma:** x eksenine göre (x, −y); y eksenine göre (−x, y); y = x’e göre (y, x); y = −x’e göre (−y, −x).',
        '**Dönme (orijin etrafında, saat yönünün tersine):** 90° → (−y, x); 180° → (−x, −y); 270° → (y, −x).',
        'Öteleme, yansıma ve dönme şeklin boyutunu ve açılarını korur (izometri).'
      ] }
    ],
    traps: [
      'Saat yönünde dönme, ters yöndeki 360° − α dönmeye eşittir.'
    ]
  },

  'Katı Cisimler': {
    intro: 'Prizma, piramit, silindir, koni ve kürenin hacim ve alanları; kesitler ve iç içe cisimler.',
    parts: [
      { h: 'Formüller', items: [
        'Prizma ve silindir: V = taban alanı · h. Piramit ve koni: V = {taban alanı · h/3}.',
        'Küre: V = {4/3}πr³, yüzey 4πr².',
        'Koni: yanal alan πrℓ; açınımı daire dilimidir, merkez açı = 360° · {r/ℓ}.',
        'Düzgün dörtyüzlü (kenar a): yükseklik a{√{6}/3}.',
        'Benzer cisimlerde hacim oranı k³, alan oranı k².'
      ] }
    ],
    example: {
      q: 'Yarıçapı 3 cm olan kürenin hacmi kaç cm³’tür? (π = 3)',
      a: '{4/3} · 3 · 27 = 108 cm³.'
    }
  }
};

export default L;
