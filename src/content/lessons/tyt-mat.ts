import type { LessonSet } from './types';

const L: LessonSet = {
  'Temel Kavramlar': {
    intro: 'Sayı kümeleri, tek – çift, pozitif – negatif, ardışık sayılar ve asal sayılar. Bütün TYT matematiğinin temelidir; soruların çoğu bu kavramları kullanır.',
    parts: [
      { h: 'Sayı kümeleri', items: [
        '**Doğal sayılar (N):** 0, 1, 2, 3, … **Sayma sayıları:** 1, 2, 3, … (0 yok).',
        '**Tam sayılar (Z):** …, −2, −1, 0, 1, 2, … **Rasyonel (Q):** {a/b} biçiminde yazılabilen sayılar (b ≠ 0).',
        '**İrrasyonel:** kesir olarak yazılamayan sayılar (√{2}, π). **Reel (R):** rasyonel ve irrasyonellerin tamamı.',
        '0 çifttir; ne pozitif ne negatiftir.'
      ] },
      { h: 'Tek – çift ve işaret kuralları', items: [
        'çift ± çift = çift, tek ± tek = çift, tek ± çift = tek.',
        'Çarpımda bir çarpan bile çiftse sonuç çifttir; sonucun tek olması için bütün çarpanlar tek olmalı.',
        '(−) · (−) = (+), (−) · (+) = (−). Negatif sayının çift kuvveti pozitif, tek kuvveti negatiftir.',
        '**Ardışık sayılar:** n, n + 1, n + 2… Ardışık çiftler/tekler: n, n + 2, n + 4…',
        '**Asal sayı:** yalnız 1’e ve kendisine bölünen, 1’den büyük sayı: 2, 3, 5, 7, 11, 13… 2 tek çift asaldır.'
      ] },
      { h: 'Ardışık sayı toplamı', items: [
        '1 + 2 + … + n = {n(n + 1)/2}.',
        '2 + 4 + … + 2n = n(n + 1). 1 + 3 + … + (2n − 1) = n².',
        'Terim sayısı = {son − ilk/artış} + 1.'
      ] }
    ],
    traps: [
      '“Pozitif tam sayı” 0’ı kapsamaz; “doğal sayı” kapsar.',
      '“En küçük” sorularında negatif sayıları unutma: “x tam sayı” ise x negatif olabilir.'
    ],
    example: {
      q: 'a, b, c ardışık çift sayılar ve a < b < c olmak üzere a + b + c = 174 ise c kaçtır?',
      a: 'a = b − 2, c = b + 2 yazılırsa toplam 3b = 174 → b = 58. c = 60.'
    }
  },

  'Sayı Basamakları': {
    intro: 'Bir sayının rakamlarının basamak değerleri ve çözümlenmesi. Sorularda genellikle rakamları değişen sayılar arasındaki fark ya da toplam istenir.',
    parts: [
      { h: 'Temel bilgiler', items: [
        'Rakamlar: 0, 1, …, 9. **Basamak değeri:** rakam · basamağın değeri (352’de 5’in basamak değeri 50).',
        '**Çözümleme:** (abc) = 100a + 10b + c; (ab) = 10a + b.',
        '(ab) + (ba) = 11(a + b); (ab) − (ba) = 9(a − b).',
        'İlk basamağa 0 gelemez: iki basamaklı (ab) sayısında a ≠ 0.',
        'En büyük iki basamaklı sayı 99, en küçük 10; rakamları farklı en büyük üç basamaklı sayı 987.'
      ] }
    ],
    traps: [
      '“Rakamları farklı” şartını gözden kaçırma.',
      '“Sayı” ve “rakam” farklıdır: 12 bir sayıdır, rakam değildir.'
    ],
    example: {
      q: 'İki basamaklı (ab) sayısının rakamları yer değiştirince sayı 27 azalıyor. a − b kaçtır?',
      a: '(ab) − (ba) = 9(a − b) = 27 → a − b = 3.'
    }
  },

  'Bölme ve Bölünebilme': {
    intro: 'Bölme işleminin bileşenleri ve bölünebilme kuralları. Kalan soruları ile “… sayısı 6 ile bölünebiliyorsa a kaçtır?” türü sorular gelir.',
    parts: [
      { h: 'Bölme', items: [
        'Bölünen = bölen · bölüm + kalan; 0 ≤ kalan < bölen.',
        'Kalanlar toplanabilir ve çarpılabilir: (a + b)’nin n’ye bölümünden kalan, kalanların toplamının n’ye bölümünden kalandır.'
      ] },
      { h: 'Bölünebilme kuralları', items: [
        '**2:** son rakam çift. **5:** son rakam 0 ya da 5. **10:** son rakam 0.',
        '**3:** rakamlar toplamı 3’ün katı. **9:** rakamlar toplamı 9’un katı.',
        '**4:** son iki basamak 4’ün katı. **8:** son üç basamak 8’in katı.',
        '**11:** sağdan başlayarak rakamlara +, −, +, … işaret verilir; toplam 11’in katı olmalı.',
        '**6:** hem 2 hem 3. **12:** hem 3 hem 4. **15:** hem 3 hem 5. Aralarında asal çarpanları ayrı ayrı kontrol et.'
      ] }
    ],
    traps: [
      '6 ile bölünebilme için 2 ve 3’ün ikisi de gerekir; yalnız 3’e bakmak yetmez.',
      'Kalan hiçbir zaman bölenden büyük ya da ona eşit olamaz.'
    ],
    example: {
      q: '4a7 üç basamaklı sayısı 9 ile tam bölünüyor. a kaçtır?',
      a: 'Rakamlar toplamı 4 + a + 7 = 11 + a, 9’un katı olmalı. a bir rakam olduğundan 11 + a = 18 → a = 7.'
    }
  },

  'EBOB – EKOK': {
    intro: 'En büyük ortak bölen ve en küçük ortak kat. Problemlerde “en büyük parça”, “en az kaç fidan”, “ilk kez birlikte” gibi ifadeler hangisinin kullanılacağını söyler.',
    parts: [
      { h: 'Hesaplama', items: [
        'Sayıları asal çarpanlarına ayır. **EBOB:** ortak asalların en küçük kuvvetlerinin çarpımı. **EKOK:** bütün asalların en büyük kuvvetlerinin çarpımı.',
        'İki sayı için: a · b = EBOB(a, b) · EKOK(a, b).',
        'Aralarında asal sayılarda (EBOB = 1) EKOK = a · b.'
      ] },
      { h: 'Hangisini kullanmalı?', items: [
        '**EBOB:** bir şeyi eşit, en büyük parçalara bölmek; en az sayıda parça; kare fayans ile kaplama.',
        '**EKOK:** belli aralıklarla tekrarlanan olayların ilk kez birlikte olması; kenarları verilen tuğlalarla en küçük küp.',
        'Kalanlı EKOK: “4, 6 ve 9’a bölündüğünde hep 1 kalan veren en küçük sayı” → EKOK(4, 6, 9) + 1 = 37.'
      ] }
    ],
    traps: [
      '“En az kaç parça” EBOB ile bulunur, ama cevap parça sayısıdır: toplam uzunluğu EBOB’a böl.',
      'Ağaç dikerken kapalı alanda (çevre) fidan sayısı = aralık sayısı; açık uçlu yolda bir fazlası.'
    ],
    example: {
      q: '12 ve 18 metrelik iki ip, eşit ve en uzun parçalara kesilecek. En az kaç parça olur?',
      a: 'Parça boyu EBOB(12, 18) = 6 m. Parça sayısı {12/6} + {18/6} = 2 + 3 = 5.'
    }
  },

  'Rasyonel Sayılar': {
    intro: '{a/b} biçimindeki sayılarla dört işlem, sıralama ve devirli ondalık sayılar.',
    parts: [
      { h: 'İşlemler', items: [
        'Toplama – çıkarmada paydalar eşitlenir; çarpmada pay paya, payda paydaya çarpılır.',
        'Bölmede ikinci kesir ters çevrilip çarpılır: {a/b} ÷ {c/d} = {a/b} · {d/c}.',
        'İşlem önceliği: parantez → üs → çarpma/bölme → toplama/çıkarma.',
        'Sıralama: payları eşitle (payda küçük olan büyük) ya da paydaları eşitle (pay büyük olan büyük).'
      ] },
      { h: 'Devirli ondalık', items: [
        '0,333… = {3/9} = {1/3}.',
        'Kesre çevirme: {(sayının tamamı) − (devretmeyen kısım)/devreden kadar 9, devretmeyen kadar 0}.',
        'Örnek: 1,2333… = {123 − 12/90} = {111/90}.'
      ] }
    ],
    traps: [
      'Negatif kesirlerde sıralama tersine döner: −{1/2} < −{1/3}.',
      'Merdiven kesirlerde en alttan başlayarak yukarı doğru çöz.'
    ],
    example: {
      q: '0,4777… sayısının kesir karşılığı nedir?',
      a: 'Devreden 7 (bir 9), devretmeyen 4 (bir 0): {47 − 4/90} = {43/90}.'
    }
  },

  'Basit Eşitsizlikler': {
    intro: 'Eşitsizlik içeren ifadelerde değer aralığı bulmak. En çok “x ve y aralıkları verildiğinde 2x − y’nin alabileceği değerler” sorulur.',
    parts: [
      { h: 'Kurallar', items: [
        'Eşitsizliğin her iki yanına aynı sayı eklenip çıkarılabilir.',
        'Pozitif sayıyla çarpma/bölmede yön değişmez; **negatif sayıyla çarpma/bölmede yön değişir**.',
        'Aynı yönlü eşitsizlikler taraf tarafa **toplanabilir**, çıkarılamaz. Çıkarma için birini −1 ile çarpıp topla.',
        'Çarpımda uç değerlerin bütün çarpımlarını hesapla; en küçük ve en büyüğü al.',
        'Karesi alınırken aralık 0’ı kapsıyorsa en küçük değer 0 olur.'
      ] }
    ],
    traps: [
      'Tam sayı soruluyorsa açık uçları (< işaretli sınırları) dahil etme.',
      'Aralıkları taraf tarafa çıkarmak en sık yapılan hatadır.'
    ],
    example: {
      q: '2 < x < 5 ve −3 < y < 1 ise x − y hangi aralıktadır?',
      a: 'y’yi −1 ile çarp: −1 < −y < 3. Topla: 2 + (−1) < x − y < 5 + 3 → 1 < x − y < 8.'
    }
  },

  'Mutlak Değer': {
    intro: 'Bir sayının sayı doğrusunda 0’a olan uzaklığı. Mutlak değer hiçbir zaman negatif değildir.',
    parts: [
      { h: 'Kurallar', items: [
        '|x| = x (x ≥ 0 ise), |x| = −x (x < 0 ise). |x| ≥ 0.',
        '|a − b|, a ile b arasındaki uzaklıktır.',
        '|x| = a (a > 0) ise x = a ya da x = −a.',
        '|x| < a ise −a < x < a; |x| > a ise x < −a ya da x > a.',
        '|a · b| = |a| · |b|; |a + b| ≤ |a| + |b|.'
      ] },
      { h: 'İçini dışarı çıkarma', items: [
        'Önce içteki ifadenin işaretini belirle. Pozitifse aynen, negatifse işaretini değiştirerek çıkar.',
        'Örnek: x < 0 ise |x| + |−2x| = −x + (−2x) = −3x.'
      ] }
    ],
    traps: [
      '|x| = −3 gibi denklemlerin çözümü yoktur.',
      '|x − 3| = 5 iki çözüm verir: 8 ve −2; birini unutma.'
    ],
    example: {
      q: '|2x − 1| < 5 eşitsizliğini sağlayan kaç tam sayı vardır?',
      a: '−5 < 2x − 1 < 5 → −4 < 2x < 6 → −2 < x < 3. Tam sayılar: −1, 0, 1, 2 → 4 tane.'
    }
  },

  'Üslü Sayılar': {
    intro: 'Bir sayının kendisiyle tekrar tekrar çarpımı. Kuralları ezberleyip tabanları eşitlemek soruların çoğunu çözer.',
    parts: [
      { h: 'Kurallar', items: [
        'a^{m} · a^{n} = a^{m + n}; {a^{m}/a^{n}} = a^{m − n}; (a^{m})^{n} = a^{m · n}.',
        'a^{0} = 1 (a ≠ 0); a^{−n} = {1/a^{n}}.',
        'a^{n} · b^{n} = (a · b)^{n}.',
        'Negatif tabanın çift kuvveti pozitif, tek kuvveti negatif: (−2)^{4} = 16, (−2)^{3} = −8.',
        '−2^{4} = −16 (üs yalnız 2’ye ait); (−2)^{4} = 16.'
      ] },
      { h: 'Denklemler', items: [
        'Tabanlar eşitlenir, üsler eşitlenir: 2^{x} = 8 = 2^{3} → x = 3.',
        'Ortak paranteze alma: 3^{x} + 3^{x + 1} = 3^{x}(1 + 3) = 4 · 3^{x}.',
        'Büyüklük sıralamasında üsleri ya da tabanları eşitle.'
      ] }
    ],
    traps: [
      'a^{m} + a^{n} ≠ a^{m + n}; toplamada kural yoktur, ortak paranteze al.',
      '0 ile 1 arasındaki sayıların kuvveti alındıkça sayı küçülür.'
    ],
    example: {
      q: '2^{x} + 2^{x + 2} = 40 ise x kaçtır?',
      a: '2^{x}(1 + 4) = 40 → 2^{x} = 8 → x = 3.'
    }
  },

  'Köklü Sayılar': {
    intro: 'Kök içindeki sayıları sadeleştirme, köklü ifadelerle dört işlem ve paydayı kökten kurtarma.',
    parts: [
      { h: 'Kurallar', items: [
        '√{a · b} = √{a} · √{b}; √{{a/b}} = {√{a}/√{b}}.',
        '**Kök dışına çıkarma:** √{12} = √{4 · 3} = 2√{3}.',
        'Yalnız benzer kökler toplanır: 2√{3} + 5√{3} = 7√{3}; √{2} + √{3} toplanamaz.',
        '√{x²} = |x|.',
        '**Eşlenik:** (√{a} − √{b})(√{a} + √{b}) = a − b. Paydayı kökten kurtarmak için kullanılır.'
      ] },
      { h: 'Sıralama', items: [
        'Katsayıyı içeri al: 3√{2} = √{18}, 2√{5} = √{20} → 2√{5} daha büyük.',
        'Kök dereceleri farklıysa ortak dereceye getir.'
      ] }
    ],
    traps: [
      '√{a + b} ≠ √{a} + √{b}. Örnek: √{9 + 16} = 5, ama 3 + 4 = 7.',
      'Çift dereceli kökün içi negatif olamaz.'
    ],
    example: {
      q: '{6/√{3}} ifadesini paydası köksüz yaz.',
      a: 'Pay ve paydayı √{3} ile çarp: {6√{3}/3} = 2√{3}.'
    }
  },

  'Çarpanlara Ayırma': {
    intro: 'İfadeleri çarpanlarına ayırıp sadeleştirmek. Özdeşlikleri tanımak soruyu hızla çözer.',
    parts: [
      { h: 'Özdeşlikler', items: [
        '(a + b)² = a² + 2ab + b²; (a − b)² = a² − 2ab + b².',
        '**İki kare farkı:** a² − b² = (a − b)(a + b).',
        '**Küp farkı/toplamı:** a³ − b³ = (a − b)(a² + ab + b²); a³ + b³ = (a + b)(a² − ab + b²).',
        'a² + b² = (a + b)² − 2ab.'
      ] },
      { h: 'Yöntemler', items: [
        '**Ortak paranteze alma:** 3x² + 6x = 3x(x + 2).',
        '**Gruplandırma:** ax + ay + bx + by = (a + b)(x + y).',
        '**Üç terimli:** x² + 5x + 6 = (x + 2)(x + 3) → çarpımı 6, toplamı 5 olan iki sayı.',
        'Rasyonel ifadelerde pay ve paydayı ayrı ayrı çarpanlara ayır, ortakları sadeleştir.'
      ] }
    ],
    traps: [
      'a² + b² gerçel sayılarda çarpanlarına ayrılmaz.',
      'Sadeleştirmede yalnız çarpanlar sadeleşir; toplam terimleri sadeleştirilemez.'
    ],
    example: {
      q: '{x² − 9/x² + x − 6} ifadesini sadeleştir.',
      a: 'Pay (x − 3)(x + 3), payda (x + 3)(x − 2). (x + 3) sadeleşir: {x − 3/x − 2}.'
    }
  },

  'Oran – Orantı': {
    intro: 'İki çokluğun karşılaştırılması. Doğru ve ters orantı problemlerin temelidir.',
    parts: [
      { h: 'Temel bilgiler', items: [
        '{a/b} = {c/d} ise a · d = b · c (içler – dışlar çarpımı).',
        '{a/b} = {c/d} = k ise a = bk, c = dk: ortak değişkene k de, her şeyi k cinsinden yaz.',
        '**Doğru orantı:** biri artınca diğeri aynı oranda artar ({y/x} sabit).',
        '**Ters orantı:** biri artınca diğeri aynı oranda azalır (x · y sabit). Örnek: işçi sayısı – iş süresi.'
      ] }
    ],
    traps: [
      'Ters orantıyı doğru orantı gibi kurmak: “3 işçi 12 günde bitirirse 6 işçi 24 günde” değil, 6 günde bitirir.',
      'Oranlar verildiğinde k değişkenini tam sayı olacak biçimde seç.'
    ],
    example: {
      q: 'a ile b’nin oranı {2/3}, b ile c’nin oranı {3/5}’tir. a + b + c = 60 ise c kaçtır?',
      a: 'a = 2k, b = 3k, c = 5k. 10k = 60 → k = 6. c = 30.'
    }
  },

  'Denklem Çözme': {
    intro: 'Birinci dereceden bir ve iki bilinmeyenli denklemler. Problemlerin tamamı sonunda bir denklem çözmeye döner.',
    parts: [
      { h: 'Yöntemler', items: [
        'Bilinmeyenleri bir tarafa, sayıları diğer tarafa topla; her iki tarafa aynı işlemi uygula.',
        'Kesirli denklemde paydaların EKOK’u ile her iki tarafı çarp.',
        '**İki bilinmeyende yok etme:** denklemleri uygun sayılarla çarpıp topla, bir bilinmeyeni sil.',
        '**Yerine koyma:** bir denklemden bir bilinmeyeni çek, diğerinde yerine yaz.',
        'ax + b = 0 denkleminde a ≠ 0 ise tek çözüm, a = 0 ve b = 0 ise sonsuz çözüm, a = 0 ve b ≠ 0 ise çözüm yok.'
      ] }
    ],
    traps: [
      'Paydada bilinmeyen varsa paydayı sıfır yapan değer çözüm olamaz.',
      'Eksi işaretini parantezin içindeki her terime dağıtmayı unutma.'
    ],
    example: {
      q: '2x + y = 11 ve x − y = 1 ise x · y kaçtır?',
      a: 'Taraf tarafa topla: 3x = 12 → x = 4. y = 3. x · y = 12.'
    }
  },

  'Sayı ve Kesir Problemleri': {
    intro: 'Sözel ifadeyi denkleme çevirme. “Bir sayının 3 katının 5 eksiği” gibi ifadeleri doğru yazmak işin yarısıdır.',
    parts: [
      { h: 'Çeviri kalıpları', items: [
        '“x’in 3 katının 5 eksiği” → 3x − 5. “x’in 5 eksiğinin 3 katı” → 3(x − 5).',
        '“Bir sayının {2/3}’ü” → {2x/3}. “Kalanın yarısı” → önce kalanı yaz, sonra böl.',
        'Kesir problemlerinde bütünü paydaların EKOK’u kadar seç: işlemler tam sayıyla yürür.',
        '“Her birine 3 verirse 5 artar, 4 verirse 2 eksik kalır” türünde kişi sayısını x seç: 3x + 5 = 4x − 2.'
      ] }
    ],
    traps: [
      '“Kalanın {1/3}’ü” ile “tamamının {1/3}’ü” farklıdır; her adımda neyin kesri olduğuna dikkat et.'
    ],
    example: {
      q: 'Bir öğrenci kitabının önce {1/3}’ünü, sonra kalanın {1/4}’ünü okuyor. Geriye 60 sayfa kalıyor. Kitap kaç sayfadır?',
      a: 'Kitap 12k olsun. {1/3}’ü 4k, kalan 8k; kalanın {1/4}’ü 2k. Geriye 6k = 60 → k = 10. Kitap 120 sayfa.'
    }
  },

  'Yaş Problemleri': {
    intro: 'Kişilerin bugünkü, geçmişteki ve gelecekteki yaşları arasındaki ilişkiler.',
    parts: [
      { h: 'Temel kurallar', items: [
        'İki kişinin yaşları farkı hiçbir zaman değişmez.',
        'Her yıl her kişi 1 yaş büyür: n kişinin yaşları toplamı t yılda n · t artar.',
        '“x yıl önce” → herkesin yaşından x çıkar; “x yıl sonra” → herkesin yaşına x ekle.',
        'Tablo kur: satırlar kişiler, sütunlar geçmiş – bugün – gelecek.'
      ] }
    ],
    traps: [
      'Çocuk doğmadan önceki yıllar söz konusuysa toplamdan o çocuğu çıkar.',
      'Oranlar (“2 katı”) zamanla değişir; fark değişmez.'
    ],
    example: {
      q: 'Bir baba 40, oğlu 10 yaşındadır. Kaç yıl sonra babanın yaşı oğlunun yaşının 2 katı olur?',
      a: 'x yıl sonra: 40 + x = 2(10 + x) → 40 + x = 20 + 2x → x = 20.'
    }
  },

  'Hareket Problemleri': {
    intro: 'Yol, hız ve zaman ilişkisi. Karşılaşma, yetişme ve ortalama hız soruları gelir.',
    parts: [
      { h: 'Formüller', items: [
        'Yol = hız · zaman (x = v · t).',
        '**Karşılaşma (zıt yön):** t = {aradaki yol/v₁ + v₂}.',
        '**Yetişme (aynı yön):** t = {aradaki fark/v₁ − v₂}.',
        '**Ortalama hız** = {toplam yol/toplam zaman}. Hızların ortalaması değildir.',
        'Eşit yolları v₁ ve v₂ hızlarıyla giden aracın ortalama hızı: {2v₁v₂/v₁ + v₂}.',
        'Akıntılı suda: akıntı yönünde v + a, akıntıya karşı v − a.'
      ] }
    ],
    traps: [
      'Birimleri eşitle: km/sa ile dakika aynı soruda olabilir.',
      '“Ortalama hız” sorusunda (60 + 40) ÷ 2 = 50 yazmak yanlıştır; zamanları hesapla.'
    ],
    example: {
      q: 'Aralarında 360 km olan iki şehirden saatte 50 km ve 70 km hızla iki araç aynı anda birbirine doğru yola çıkıyor. Kaç saat sonra karşılaşırlar?',
      a: 'Zıt yön: t = {360/50 + 70} = {360/120} = 3 saat.'
    }
  },

  'İşçi ve Havuz Problemleri': {
    intro: 'Bir işi bitirme hızı. Bir işi t saatte bitiren kişi 1 saatte işin {1/t}’ini yapar.',
    parts: [
      { h: 'Formüller', items: [
        'Birlikte çalışma: {1/t₁} + {1/t₂} = {1/t} (t: birlikte bitirme süresi).',
        'İki kişi için kısa yol: t = {t₁ · t₂/t₁ + t₂}.',
        '**Havuz:** dolduran musluk +, boşaltan musluk − alınır: {1/a} − {1/b} = {1/t}.',
        'İşi parçalara bölmek kolaylık sağlar: süreleri EKOK’u kadar birim iş varsay.'
      ] }
    ],
    traps: [
      'Süreler toplanmaz: 3 ve 6 saatte bitiren iki kişi birlikte 9 saatte değil, 2 saatte bitirir.'
    ],
    example: {
      q: 'Bir işi Ali 6 günde, Ayşe 12 günde bitiriyor. İkisi birlikte kaç günde bitirir?',
      a: '{1/6} + {1/12} = {3/12} = {1/4}. Birlikte 4 günde bitirirler.'
    }
  },

  'Yüzde, Kâr – Zarar Problemleri': {
    intro: 'Yüzde hesapları, zam – indirim ve alış – satış fiyatlarıyla kâr – zarar. TYT’de her yıl gelir.',
    parts: [
      { h: 'Formüller', items: [
        'Bir sayının %p’si: x · {p/100}.',
        '**%p zam:** x · {100 + p/100}. **%p indirim:** x · {100 − p/100}.',
        'Kâr ve zarar her zaman **alış (maliyet) fiyatı** üzerinden hesaplanır.',
        'Satış = alış · {100 + kâr yüzdesi/100}.',
        'Ardışık zam/indirimler toplanmaz: önce %20 zam, sonra %20 indirim → 100 · 1,2 · 0,8 = 96 (%4 düşüş).'
      ] }
    ],
    traps: [
      'Alış fiyatını 100 seçmek işlemleri hızlandırır.',
      '“Etiket fiyatı üzerinden indirim” ile “maliyet üzerinden kâr” karıştırılır; her yüzdenin neye göre olduğunu yaz.'
    ],
    example: {
      q: 'Bir ürün %25 kârla 150 TL’ye satılıyor. Alış fiyatı kaç TL’dir?',
      a: 'Alış x olsun: x · {125/100} = 150 → x = 120 TL.'
    }
  },

  'Karışım Problemleri': {
    intro: 'Farklı yoğunluktaki (yüzdelik) karışımların birleştirilmesi. Saf madde miktarı korunur.',
    parts: [
      { h: 'Formüller', items: [
        'Saf madde = karışım miktarı · {yüzde/100}.',
        'İki karışım birleşince: {m₁ · p₁ + m₂ · p₂/m₁ + m₂} = yeni yüzde.',
        'Su eklemek saf madde miktarını değiştirmez, karışım miktarını artırır.',
        'Su buharlaşınca saf madde aynı kalır, karışım azalır, yüzde artar.'
      ] }
    ],
    traps: [
      'Saf madde eklemek hem saf maddeyi hem karışımı artırır; ikisini de güncelle.'
    ],
    example: {
      q: '%20’lik 300 g şekerli suya 100 g şeker ekleniyor. Yeni karışım yüzde kaç şekerlidir?',
      a: 'Şeker: 60 + 100 = 160 g. Karışım: 400 g. {160/400} = %40.'
    }
  },

  'Grafik ve Tablo Problemleri': {
    intro: 'Sütun, çizgi ve daire grafiklerinden veri okuma. Hesap kolaydır; zorluk doğru veriyi okumaktadır.',
    parts: [
      { h: 'Okuma ipuçları', items: [
        'Önce eksenlerin ve birimlerin ne olduğunu oku (bin kişi mi, yüzde mi?).',
        '**Daire grafiği:** 360° bütünü gösterir. Bir dilimin oranı = {merkez açı/360}.',
        'Yüzde verilen daire grafiğinde %10 = 36°.',
        'Çizgi grafiğinde artış hızı eğimdir: dik çizgi hızlı değişimdir.',
        'İki grafik birlikte veriliyorsa ortak olan büyüklüğü bul (genellikle toplam).'
      ] }
    ],
    traps: [
      'Eksen 0’dan başlamıyorsa sütun boyları oranları yanlış gösterebilir; sayıları oku.'
    ],
    example: {
      q: 'Bir sınıfın daire grafiğinde futbol seçenlerin dilimi 120°’dir. Sınıf 36 kişiyse kaç kişi futbolu seçmiştir?',
      a: '{120/360} = {1/3}. 36 · {1/3} = 12 kişi.'
    }
  },

  'Kümeler ve Kartezyen Çarpım': {
    intro: 'Kümelerin eleman sayısı, alt küme sayısı, işlemler ve Venn şeması problemleri.',
    parts: [
      { h: 'Temel bilgiler', items: [
        'n elemanlı kümenin alt küme sayısı 2^{n}; öz alt küme sayısı 2^{n} − 1.',
        'r elemanlı alt küme sayısı C(n, r).',
        '**Birleşim:** s(A ∪ B) = s(A) + s(B) − s(A ∩ B).',
        '**Fark:** A − B, A’da olup B’de olmayanlar. **Tümleyen:** Aᶜ = E − A.',
        '**De Morgan:** (A ∪ B)ᶜ = Aᶜ ∩ Bᶜ; (A ∩ B)ᶜ = Aᶜ ∪ Bᶜ.',
        '**Kartezyen çarpım:** A × B = sıralı ikililer; s(A × B) = s(A) · s(B).'
      ] },
      { h: 'Venn şeması problemleri', items: [
        'Önce kesişimi (ortak bölgeyi) yaz, sonra dışa doğru doldur.',
        '“Yalnız A” = s(A) − s(A ∩ B). “Hiçbiri” = toplam − s(A ∪ B).'
      ] }
    ],
    traps: [
      'Boş küme her kümenin alt kümesidir; öz alt küme sayısında yalnız kümenin kendisi çıkarılır.',
      '(a, b) ≠ (b, a): kartezyen çarpımda sıra önemlidir.'
    ],
    example: {
      q: '40 kişilik sınıfta 25 kişi İngilizce, 18 kişi Almanca biliyor; 7 kişi ikisini de bilmiyor. Her iki dili bilen kaç kişidir?',
      a: 'En az birini bilen 40 − 7 = 33. 33 = 25 + 18 − x → x = 10.'
    }
  },

  'Mantık': {
    intro: 'Önermeler, bağlaçlar ve doğruluk değerleri. Sorular genelde bileşik önermenin doğruluk değerini ya da denkliğini ister.',
    parts: [
      { h: 'Bağlaçlar', items: [
        '**Ve (∧):** yalnız ikisi de doğruysa doğru.',
        '**Veya (∨):** en az biri doğruysa doğru; ikisi de yanlışsa yanlış.',
        '**İse (⇒):** yalnız “doğru ⇒ yanlış” durumunda yanlış; diğer hepsi doğru.',
        '**Ancak ve ancak (⇔):** ikisi aynı değerdeyse doğru.',
        '**Değil (′):** doğruluk değerini tersine çevirir.'
      ] },
      { h: 'Denklikler', items: [
        'p ⇒ q ≡ p′ ∨ q.',
        '(p ∧ q)′ ≡ p′ ∨ q′; (p ∨ q)′ ≡ p′ ∧ q′ (De Morgan).',
        '**Karşıt ters:** p ⇒ q ≡ q′ ⇒ p′.',
        '**Niceleyiciler:** “her (∀)” olumsuzlanınca “en az bir (∃) … değil” olur.'
      ] }
    ],
    traps: [
      'p ⇒ q’nun tersi (q ⇒ p) ona denk değildir; karşıt tersi denktir.',
      '“Yanlış ⇒ herhangi bir şey” her zaman doğrudur.'
    ],
    example: {
      q: 'p doğru, q yanlış ise (p ⇒ q) ∨ q′ önermesinin değeri nedir?',
      a: 'p ⇒ q: doğru ⇒ yanlış = yanlış. q′ = doğru. Yanlış ∨ doğru = doğru.'
    }
  },

  'Fonksiyonlar': {
    intro: 'Tanım kümesindeki her elemanı değer kümesinde tek bir elemana eşleyen kural. TYT’de değer bulma, bileşke ve ters fonksiyon sorulur.',
    parts: [
      { h: 'Temel bilgiler', items: [
        'Fonksiyon olma şartı: tanım kümesinde açıkta eleman kalmamalı, bir eleman iki elemanla eşlenmemeli.',
        '**Değer bulma:** f(x) = 2x + 1 ise f(3) = 7. f(x + 1) verildiyse x yerine uygun değeri koy.',
        '**Bileşke:** (f ∘ g)(x) = f(g(x)). Önce g, sonra f uygulanır.',
        '**Ters fonksiyon:** y = f(x) yazılır, x yalnız bırakılır, x ile y yer değiştirir. f(a) = b ⇔ f⁻¹(b) = a.',
        'f(x) = ax + b ise f⁻¹(x) = {x − b/a}.'
      ] },
      { h: 'Fonksiyon türleri', items: [
        '**Birebir:** farklı elemanların görüntüleri farklı. **Örten:** değer kümesinde boşta eleman yok.',
        '**Sabit:** f(x) = c. **Birim:** f(x) = x. **Doğrusal:** f(x) = ax + b.',
        '**Tek fonksiyon:** f(−x) = −f(x). **Çift fonksiyon:** f(−x) = f(x).'
      ] }
    ],
    traps: [
      '(f ∘ g)(x) ≠ (g ∘ f)(x) genellikle; sırayı karıştırma.',
      'f⁻¹(x) ile {1/f(x)} aynı şey değildir.'
    ],
    example: {
      q: 'f(x) = 3x − 2 ise f⁻¹(7) kaçtır?',
      a: 'f(a) = 7 olan a’yı bul: 3a − 2 = 7 → a = 3. Yani f⁻¹(7) = 3.'
    }
  },

  'Polinomlar': {
    intro: 'Değişkenin kuvvetleri doğal sayı olan ifadeler. Derece, katsayılar toplamı ve kalan bulma sorulur.',
    parts: [
      { h: 'Temel bilgiler', items: [
        'P(x) = aₙxⁿ + … + a₁x + a₀. Üsler doğal sayı olmalı; √{x}, {1/x} içeren ifade polinom değildir.',
        '**Derece:** en büyük üs. **Başkatsayı:** en büyük üslü terimin katsayısı.',
        '**Katsayılar toplamı:** P(1). **Sabit terim:** P(0).',
        'Çift dereceli terimlerin katsayıları toplamı {P(1) + P(−1)/2}.',
        'Çarpımın derecesi dereceler toplamıdır.'
      ] },
      { h: 'Bölme ve kalan', items: [
        'P(x) = Q(x) · B(x) + K(x); kalanın derecesi bölenden küçüktür.',
        '**Kalan teoremi:** P(x)’in (x − a) ile bölümünden kalan P(a).',
        '(ax + b) ile bölümden kalan P(−{b/a}).',
        'P(x), (x − a) ile tam bölünüyorsa P(a) = 0.'
      ] }
    ],
    traps: [
      'P(x + 1) verilip katsayılar toplamı sorulursa x yerine 0 yazılır (P(0 + 1) = P(1)).'
    ],
    example: {
      q: 'P(x) = x³ − 2x² + 3x − 5 polinomunun (x − 2) ile bölümünden kalan kaçtır?',
      a: 'Kalan P(2) = 8 − 8 + 6 − 5 = 1.'
    }
  },

  'İkinci Dereceden Denklemler': {
    intro: 'ax² + bx + c = 0 biçimindeki denklemlerin kökleri. Kök–katsayı ilişkileri sık sorulur.',
    parts: [
      { h: 'Çözüm yolları', items: [
        'Önce çarpanlara ayırmayı dene: x² − 5x + 6 = (x − 2)(x − 3) → x = 2 ya da 3.',
        '**Diskriminant:** Δ = b² − 4ac. Δ > 0 iki farklı kök, Δ = 0 çakışık kök, Δ < 0 gerçel kök yok.',
        'Kökler: x = {−b ± √{Δ}/2a}.'
      ] },
      { h: 'Kök – katsayı ilişkileri', items: [
        'x₁ + x₂ = −{b/a}; x₁ · x₂ = {c/a}.',
        'x₁² + x₂² = (x₁ + x₂)² − 2x₁x₂.',
        'Kökleri verilen denklem: x² − (x₁ + x₂)x + x₁x₂ = 0.'
      ] }
    ],
    traps: [
      'Kökler toplamının işaretini unutma: −{b/a}.',
      '“Gerçel kökleri” soruluyorsa önce Δ ≥ 0 olup olmadığına bak.'
    ],
    example: {
      q: 'x² − 7x + 10 = 0 denkleminin kökleri x₁ ve x₂ ise x₁² + x₂² kaçtır?',
      a: 'x₁ + x₂ = 7, x₁x₂ = 10. x₁² + x₂² = 49 − 20 = 29.'
    }
  },

  'Permütasyon ve Kombinasyon': {
    intro: 'Sayma yöntemleri. Sıra önemliyse permütasyon, önemli değilse kombinasyon kullanılır.',
    parts: [
      { h: 'Temel kurallar', items: [
        '**Çarpma kuralı:** art arda yapılan seçimlerde seçenek sayıları çarpılır. **Toplama kuralı:** “ya bu ya şu” durumunda toplanır.',
        'n! = n · (n − 1) · … · 1; 0! = 1.',
        '**Permütasyon:** P(n, r) = {n!/(n − r)!} — n nesneden r tanesini sıralı dizme.',
        '**Kombinasyon:** C(n, r) = {n!/r!(n − r)!} — n nesneden r tanesini seçme.',
        'C(n, r) = C(n, n − r); C(n, 0) = C(n, n) = 1.'
      ] },
      { h: 'Özel durumlar', items: [
        '**Tekrarlı permütasyon:** n nesnenin a, b, … tanesi aynıysa {n!/a! · b! · …}. KİTAP değil, ANANAS gibi.',
        '**Dairesel sıralama:** n kişi yuvarlak masaya (n − 1)! biçimde oturur.',
        '“Yan yana” isteniyorsa o kişileri tek kişi say, sonra kendi aralarında sırala.',
        '“En az bir” durumunda tümünden “hiç olmayan”ı çıkarmak çoğu zaman kolaydır.'
      ] }
    ],
    traps: [
      'Sayı oluşturma sorularında ilk basamağa 0 gelemez.',
      'Kurul, takım, grup seçiminde sıra yoktur (kombinasyon); başkan – yardımcı seçiminde sıra vardır (permütasyon).'
    ],
    example: {
      q: '5 kız ve 4 erkek arasından 2 kız ve 2 erkekten oluşan kaç farklı ekip kurulabilir?',
      a: 'C(5, 2) · C(4, 2) = 10 · 6 = 60.'
    }
  },

  'Olasılık': {
    intro: 'Bir olayın gerçekleşme şansı. Sayma bilgisini kullanır: istenen durumlar bölü bütün durumlar.',
    parts: [
      { h: 'Temel bilgiler', items: [
        'P(A) = {istenen durum sayısı/tüm durum sayısı}; 0 ≤ P(A) ≤ 1.',
        'P(Aᶜ) = 1 − P(A): “en az bir” sorularında işe yarar.',
        '**Ayrık olaylar:** P(A ∪ B) = P(A) + P(B). Genel: P(A ∪ B) = P(A) + P(B) − P(A ∩ B).',
        '**Bağımsız olaylar:** P(A ∩ B) = P(A) · P(B) (zar ve para atışları).',
        '**Koşullu olasılık:** P(A | B) = {P(A ∩ B)/P(B)}.'
      ] },
      { h: 'Sık kullanılan örnek uzaylar', items: [
        'İki zar: 36 durum. Toplamı 7 olan 6 durum vardır.',
        'n para: 2^{n} durum.',
        'Torbadan geri koymadan çekişte ikinci çekilişin olasılıkları değişir.'
      ] }
    ],
    traps: [
      'Geri koyarak ve koymadan çekişi karıştırma.',
      '“En az bir tura” için 1 − P(hiç tura yok) hesaplamak en hızlısıdır.'
    ],
    example: {
      q: 'Bir torbada 3 kırmızı, 2 mavi top var. Geri koymadan art arda çekilen 2 topun ikisinin de kırmızı olma olasılığı kaçtır?',
      a: '{3/5} · {2/4} = {6/20} = {3/10}.'
    }
  },

  'Veri ve İstatistik': {
    intro: 'Bir veri grubunu özetleyen ölçüler: aritmetik ortalama, ortanca, tepe değer, açıklık ve standart sapma.',
    parts: [
      { h: 'Merkezî eğilim ölçüleri', items: [
        '**Aritmetik ortalama:** {toplam/terim sayısı}.',
        '**Ortanca (medyan):** veriler sıralanınca ortadaki değer; çift sayıda veride ortadaki iki değerin ortalaması.',
        '**Tepe değer (mod):** en çok tekrar eden değer. Birden fazla olabilir.'
      ] },
      { h: 'Yayılım ölçüleri', items: [
        '**Açıklık:** en büyük − en küçük.',
        '**Standart sapma:** verilerin ortalamadan ne kadar uzaklaştığını gösterir; büyükse veriler dağınıktır.',
        'Her veriye aynı sayı eklenirse ortalama o kadar artar, standart sapma değişmez.',
        'Her veri k ile çarpılırsa ortalama da standart sapma da k katı olur.'
      ] }
    ],
    traps: [
      'Ortancayı bulmadan önce verileri sırala.'
    ],
    example: {
      q: '3, 7, 2, 9, 7, 5 verilerinin ortalaması, ortancası ve tepe değeri nedir?',
      a: 'Toplam 33, ortalama 5,5. Sıralı: 2, 3, 5, 7, 7, 9; ortanca {5 + 7/2} = 6. Tepe değer 7.'
    }
  },

  'Doğruda ve Üçgende Açılar': {
    intro: 'Paralel doğrularda açılar ve üçgenin açı özellikleri. Geometri sorularının çoğunun başlangıç adımıdır.',
    parts: [
      { h: 'Doğruda açılar', items: [
        'Doğru açı 180°, tam açı 360°. **Tümler:** toplamı 90°. **Bütünler:** toplamı 180°.',
        'Ters açılar eşittir.',
        'Paralel iki doğruyu kesen doğruda **yöndeş** ve **iç ters** açılar eşit; karşı durumlu açıların toplamı 180°.',
        '**Z kuralı:** paraleller arasındaki kırık çizgide sola bakan açıların toplamı sağa bakanların toplamına eşittir.'
      ] },
      { h: 'Üçgende açılar', items: [
        'İç açılar toplamı 180°, dış açılar toplamı 360°.',
        'Bir dış açı, kendisine komşu olmayan iki iç açının toplamına eşittir.',
        'Büyük açı karşısında büyük kenar bulunur.',
        '**Kenar şartı:** |b − c| < a < b + c.'
      ] }
    ],
    traps: [
      'Şekil ölçekli çizilmeyebilir; açıyı gözle tahmin etme, hesapla.'
    ],
    example: {
      q: 'Bir üçgenin iki iç açısı 50° ve 65°’tir. Üçüncü açının dış açısı kaç derecedir?',
      a: 'Üçüncü açı 180 − 115 = 65°. Dış açısı 180 − 65 = 115° (diğer iki açının toplamı).'
    }
  },

  'Dik ve Özel Üçgenler': {
    intro: 'Pisagor bağıntısı, özel dik üçgenler ve dik üçgende öklit bağıntıları.',
    parts: [
      { h: 'Pisagor ve özel üçgenler', items: [
        'a² + b² = c² (c hipotenüs).',
        '**Pisagor üçlüleri:** 3-4-5, 5-12-13, 8-15-17, 7-24-25 ve katları (6-8-10…).',
        '**30-60-90:** kenarlar 1 : √{3} : 2 (30° karşısı hipotenüsün yarısı).',
        '**45-45-90:** kenarlar 1 : 1 : √{2}.',
        '**Hipotenüse ait kenarortay** hipotenüsün yarısıdır.'
      ] },
      { h: 'Öklit bağıntıları', items: [
        'Hipotenüse çizilen yükseklik h, hipotenüsü p ve k parçalarına ayırırsa h² = p · k.',
        'Dik kenar² = komşu parça · hipotenüs.',
        'Dik kenarların çarpımı = hipotenüs · yükseklik (alan iki yoldan yazılır).'
      ] }
    ],
    traps: [
      '30° karşısındaki kenar hipotenüsün yarısıdır, diğer dik kenarın değil.'
    ],
    example: {
      q: 'Dik kenarları 9 ve 12 olan dik üçgende hipotenüse ait yükseklik kaçtır?',
      a: 'Hipotenüs 15 (3-4-5’in 3 katı). 9 · 12 = 15 · h → h = 7,2.'
    }
  },

  'Açıortay ve Kenarortay': {
    intro: 'Üçgende açıortay ve kenarortay özellikleri. Uzunluk oranları ve ağırlık merkezi sorulur.',
    parts: [
      { h: 'Açıortay', items: [
        'Açıyı iki eş parçaya böler. Açıortay üzerindeki her nokta açının kollarına eşit uzaklıktadır.',
        '**İç açıortay teoremi:** A açısının açıortayı BC’yi BD ve DC’ye ayırırsa {BD/DC} = {AB/AC}.',
        'İç açıortaylar bir noktada kesişir: iç teğet çemberin merkezi.'
      ] },
      { h: 'Kenarortay', items: [
        'Köşeyi karşı kenarın orta noktasına birleştirir.',
        'Kenarortaylar **ağırlık merkezinde (G)** kesişir; G kenarortayı köşeden itibaren 2 : 1 oranında böler.',
        'Kenarortay üçgeni alanca iki eşit parçaya ayırır; üç kenarortay altı eşit alanlı üçgen oluşturur.'
      ] }
    ],
    traps: [
      'Ağırlık merkezinde uzun parça köşe tarafındadır (2k köşeye, k kenara).'
    ],
    example: {
      q: 'ABC üçgeninde AB = 6, AC = 9 ve A’nın açıortayı BC’yi D’de kesiyor. BC = 10 ise BD kaçtır?',
      a: '{BD/DC} = {6/9} = {2/3}. BD = 2k, DC = 3k, 5k = 10 → k = 2. BD = 4.'
    }
  },

  'Üçgende Alan': {
    intro: 'Üçgenin alanını farklı yollardan hesaplama ve alan oranları.',
    parts: [
      { h: 'Formüller', items: [
        'Alan = {taban · yükseklik/2}.',
        'İki kenar ve aradaki açı: Alan = {1/2} · a · b · sin C.',
        'Eşkenar üçgen: Alan = {a²√{3}/4}.',
        'Dik üçgen: Alan = {dik kenarların çarpımı/2}.'
      ] },
      { h: 'Alan oranları', items: [
        'Yükseklikleri aynı üçgenlerde alanlar oranı tabanlar oranına eşittir.',
        'Tabanları aynı üçgenlerde alanlar oranı yükseklikler oranına eşittir.',
        'Benzer üçgenlerde alanlar oranı benzerlik oranının karesidir.'
      ] }
    ],
    traps: [
      'Geniş açılı üçgende yükseklik üçgenin dışına düşebilir; tabanı uzatıp dik çiz.'
    ],
    example: {
      q: 'Kenarları 6 ve 8 olan, aralarındaki açı 30° olan üçgenin alanı kaçtır?',
      a: '{1/2} · 6 · 8 · sin 30° = 24 · {1/2} = 12.'
    }
  },

  'Üçgende Benzerlik': {
    intro: 'Açıları eşit, kenarları orantılı üçgenler. Paralel doğrular gördüğünde benzerlik ara.',
    parts: [
      { h: 'Benzerlik kuralları', items: [
        '**AA:** iki açısı eşit üçgenler benzerdir.',
        '**KAK:** iki kenarı orantılı ve aradaki açıları eşit.',
        '**KKK:** üç kenarı orantılı.',
        'Benzerlik oranı k ise çevreler oranı k, alanlar oranı k².'
      ] },
      { h: 'Temel teoremler', items: [
        '**Temel orantı (Tales):** üçgende bir kenara paralel doğru, diğer iki kenarı orantılı böler.',
        '**Kelebek benzerliği:** paralel iki doğru arasındaki çapraz çizgiler benzer üçgenler oluşturur.',
        '**Orta taban:** iki kenarın orta noktalarını birleştiren doğru, üçüncü kenara paralel ve onun yarısıdır.'
      ] }
    ],
    traps: [
      'Benzer kenarları eşleştirirken eşit açıların karşısındaki kenarları eşle; konumlara göre değil.'
    ],
    example: {
      q: 'ABC üçgeninde DE ∥ BC, AD = 4, DB = 2 ve DE = 6 ise BC kaçtır?',
      a: 'ADE ∼ ABC, oran {AD/AB} = {4/6} = {2/3}. {6/BC} = {2/3} → BC = 9.'
    }
  },

  'Çokgenler ve Dörtgenler': {
    intro: 'Çokgenlerin açı özellikleri ile kare, dikdörtgen, paralelkenar, eşkenar dörtgen, yamuk ve deltoidin alan ve özellikleri.',
    parts: [
      { h: 'Çokgenler', items: [
        'n kenarlı çokgenin iç açıları toplamı (n − 2) · 180°; dış açıları toplamı 360°.',
        'Düzgün çokgende bir dış açı {360/n}.',
        'Köşegen sayısı {n(n − 3)/2}.'
      ] },
      { h: 'Dörtgenler', items: [
        '**Dikdörtgen:** alan a · b; köşegenler eşit ve birbirini ortalar.',
        '**Kare:** alan a²; köşegen a√{2}; köşegenler dik.',
        '**Paralelkenar:** alan taban · yükseklik; karşılıklı kenarlar paralel ve eşit, köşegenler birbirini ortalar.',
        '**Eşkenar dörtgen:** alan {e · f/2} (köşegenler çarpımının yarısı); köşegenler dik.',
        '**Yamuk:** alan {(a + c) · h/2}; orta taban {a + c/2}.',
        '**Deltoid:** alan {e · f/2}; köşegenler dik.'
      ] }
    ],
    traps: [
      'Paralelkenarda yükseklik yan kenar değildir; tabana dik uzaklıktır.'
    ],
    example: {
      q: 'Bir düzgün çokgenin bir iç açısı 140°’dir. Çokgen kaç kenarlıdır?',
      a: 'Bir dış açı 180 − 140 = 40°. Kenar sayısı {360/40} = 9.'
    }
  },

  'Çember ve Daire': {
    intro: 'Çemberde açılar, teğet özellikleri, çevre ve alan hesapları.',
    parts: [
      { h: 'Çemberde açılar', items: [
        '**Merkez açı** gördüğü yayın ölçüsüne eşittir.',
        '**Çevre açı** gördüğü yayın yarısıdır. Aynı yayı gören çevre açılar eşittir.',
        'Çapı gören çevre açı 90°’dir.',
        'Teğet, değme noktasındaki yarıçapa diktir. Dışarıdaki bir noktadan çizilen teğet uzunlukları eşittir.'
      ] },
      { h: 'Formüller', items: [
        'Çevre 2πr, alan πr².',
        'Yay uzunluğu: 2πr · {α/360}. Daire dilimi alanı: πr² · {α/360}.',
        'Kirişler dörtgeninde karşılıklı açıların toplamı 180°.'
      ] }
    ],
    traps: [
      'Çevre açı ile merkez açıyı karıştırma: aynı yayı gören merkez açı, çevre açının iki katıdır.'
    ],
    example: {
      q: 'Yarıçapı 6 cm olan dairede merkez açısı 60° olan dilimin alanı kaç cm²’dir? (π = 3)',
      a: 'πr² · {60/360} = 3 · 36 · {1/6} = 18 cm².'
    }
  },

  'Noktanın ve Doğrunun Analitiği': {
    intro: 'Koordinat düzleminde uzaklık, orta nokta, eğim ve doğru denklemi.',
    parts: [
      { h: 'Nokta', items: [
        'İki nokta arası uzaklık: √{(x₂ − x₁)² + (y₂ − y₁)²}.',
        'Orta nokta: ({x₁ + x₂/2}, {y₁ + y₂/2}).',
        'Ağırlık merkezi: koordinatların ortalaması.'
      ] },
      { h: 'Doğru', items: [
        'Eğim m = {y₂ − y₁/x₂ − x₁} = tan α.',
        'Doğru denklemi: y − y₁ = m(x − x₁). ax + by + c = 0 biçiminde m = −{a/b}.',
        '**Paralel** doğruların eğimleri eşit; **dik** doğruların eğimleri çarpımı −1.',
        'Eksenleri kestiği noktalar: x = 0 koy → y eksenini, y = 0 koy → x eksenini keser.',
        'Noktanın doğruya uzaklığı: {|ax₀ + by₀ + c|/√{a² + b²}}.'
      ] }
    ],
    traps: [
      'x eksenine paralel doğrunun eğimi 0; y eksenine paralel doğrunun eğimi tanımsızdır.'
    ],
    example: {
      q: 'A(1, 2) ve B(4, 8) noktalarından geçen doğrunun eğimi ve denklemi nedir?',
      a: 'm = {8 − 2/4 − 1} = 2. y − 2 = 2(x − 1) → y = 2x.'
    }
  },

  'Katı Cisimler': {
    intro: 'Prizma, küp, silindir, piramit, koni ve kürenin alan ve hacimleri.',
    parts: [
      { h: 'Hacim', items: [
        '**Prizma ve silindir:** V = taban alanı · yükseklik. Silindir: πr²h. Küp: a³. Dikdörtgenler prizması: a · b · c.',
        '**Piramit ve koni:** V = {taban alanı · yükseklik/3}. Koni: {πr²h/3}.',
        '**Küre:** V = {4/3}πr³.'
      ] },
      { h: 'Alan', items: [
        'Küp yüzey alanı 6a²; dikdörtgenler prizması 2(ab + bc + ac).',
        'Silindir yanal alanı 2πrh; toplam 2πr² + 2πrh.',
        'Koni yanal alanı πrℓ (ℓ: ana doğru, ℓ² = r² + h²).',
        'Küre yüzey alanı 4πr².',
        'Küp köşegeni a√{3}; dikdörtgenler prizması köşegeni √{a² + b² + c²}.'
      ] }
    ],
    traps: [
      'Benzer cisimlerde hacimler oranı benzerlik oranının küpüdür.'
    ],
    example: {
      q: 'Yarıçapı 3 cm, yüksekliği 4 cm olan dik koninin hacmi kaç cm³’tür? (π = 3)',
      a: 'V = {πr²h/3} = {3 · 9 · 4/3} = 36 cm³.'
    }
  }
};

export default L;
