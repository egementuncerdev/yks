import type { LessonSet } from './types';

const L: LessonSet = {
  'Kimya Bilimi': {
    intro: 'Kimyanın alt dalları, simyadan kimyaya geçiş, laboratuvar güvenliği ve iş sağlığı sembolleri.',
    parts: [
      { h: 'Temel bilgiler', items: [
        '**Simya** deneme–yanılmaya dayanır, bilimsel yöntem kullanmaz; yine de pek çok araç ve madde (damıtma, barut, alkol) simyacıların katkısıdır.',
        'Kimyayı bilim yapan: Robert Boyle (element kavramı), Lavoisier (kütlenin korunumu).',
        'Alt dallar: organik, anorganik, analitik, fizikokimya, biyokimya, polimer kimyası.',
        '**Fiziksel değişim:** maddenin kimliği değişmez (erime, kırılma). **Kimyasal değişim:** yeni madde oluşur (yanma, paslanma).'
      ] },
      { h: 'Güvenlik', items: [
        'Uyarı işaretleri: yanıcı, patlayıcı, aşındırıcı (korozif), zehirli, tahriş edici, çevreye zararlı.',
        'Asit seyreltirken **asit suya** eklenir, su aside eklenmez.',
        'Kimyasallar koklanmaz, tadılmaz; dökülen kimyasal bol suyla yıkanır.'
      ] }
    ],
    traps: [
      'Hâl değişimleri (erime, buharlaşma, çözünme) fiziksel değişimdir.'
    ]
  },

  'Atom ve Periyodik Sistem': {
    intro: 'Atomun yapısı, atom modelleri ve periyodik tablonun düzeni. Periyodik özelliklerin değişimi her yıl sorulur.',
    parts: [
      { h: 'Atom', items: [
        'Proton (+, çekirdekte), nötron (yüksüz, çekirdekte), elektron (−, katmanlarda).',
        '**Atom numarası (Z)** = proton sayısı. **Kütle numarası (A)** = proton + nötron.',
        'Nötr atomda elektron = proton. İyon yükü = proton − elektron.',
        '**İzotop:** proton sayısı aynı, nötron sayısı farklı atomlar.',
        'Atom modelleri: Dalton (bölünemez küre) → Thomson (üzümlü kek) → Rutherford (çekirdek) → Bohr (enerji katmanları) → modern model.'
      ] },
      { h: 'Periyodik sistem', items: [
        'Elementler atom numarasına göre dizilir. Yatay sıralar **periyot**, düşey sütunlar **grup**.',
        'Periyot numarası = katman sayısı. A grupları için grup numarası = son katmandaki elektron sayısı.',
        '1A alkali metaller, 2A toprak alkali metaller, 7A halojenler, 8A soy gazlar.',
        '**Grupta aşağı:** atom yarıçapı artar, iyonlaşma enerjisi ve elektronegatiflik azalır, metalik özellik artar.',
        '**Periyotta sağa:** atom yarıçapı azalır, iyonlaşma enerjisi ve elektronegatiflik genel olarak artar.'
      ] }
    ],
    traps: [
      'İyonlaşma enerjisinde 2A > 3A ve 5A > 6A istisnaları vardır.',
      'Hidrojen 1A’dadır ama metal değildir.'
    ],
    example: {
      q: '₁₂Mg²⁺ iyonunda kaç elektron vardır? Mg hangi grup ve periyottadır?',
      a: 'Elektron = 12 − 2 = 10. Dağılım 2, 8, 2: 3 katman → 3. periyot; son katmanda 2 elektron → 2A grubu.'
    }
  },

  'Kimyasal Türler Arası Etkileşimler': {
    intro: 'Atomları ve molekülleri bir arada tutan bağlar. Güçlü etkileşimler (iyonik, kovalent, metalik) ve zayıf etkileşimler (hidrojen bağı, van der Waals) sorulur.',
    parts: [
      { h: 'Güçlü etkileşimler', items: [
        '**İyonik bağ:** metal ile ametal arasında; elektron alışverişiyle zıt yüklü iyonlar çekişir (NaCl).',
        '**Kovalent bağ:** ametaller arasında elektron ortaklaşmasıyla. Aynı atomlar arasında **apolar** (H₂), farklı atomlar arasında **polar** (HCl).',
        '**Metalik bağ:** metal katyonları ile serbest elektron denizi arasında; iletkenlik ve parlaklık sağlar.'
      ] },
      { h: 'Zayıf etkileşimler', items: [
        '**Hidrojen bağı:** H’nin F, O ya da N’ye bağlı olduğu moleküller arasında (H₂O, NH₃, HF). Suyun kaynama noktasının yüksek olmasının nedeni.',
        '**Dipol–dipol:** polar moleküller arasında.',
        '**London kuvvetleri:** bütün moleküller arasında; apolar moleküllerde tek etkileşimdir. Molekül büyüdükçe artar.',
        'Zayıf etkileşimler arttıkça kaynama noktası yükselir.'
      ] }
    ],
    traps: [
      'Polar bağ içeren molekül apolar olabilir: CO₂ ve CH₄ simetrik oldukları için apolardır.',
      'Erime–kaynama (hâl değişimi) zayıf etkileşimleri koparır, kimyasal bağları değil.'
    ]
  },

  'Maddenin Halleri': {
    intro: 'Katı, sıvı, gaz ve plazma hâlleri; hâl değişimleri ve buhar basıncı.',
    parts: [
      { h: 'Hâller', items: [
        '**Katı:** belirli şekil ve hacim; tanecikler titreşim yapar.',
        '**Sıvı:** belirli hacim, kabın şeklini alır; tanecikler kayarak hareket eder.',
        '**Gaz:** belirli şekli ve hacmi yok; sıkıştırılabilir; tanecikler serbest ve hızlı.',
        '**Plazma:** çok yüksek sıcaklıkta iyonlaşmış gaz (yıldızlar, şimşek).',
        'Amorf katılar (cam) belirli bir erime noktası göstermez; kristal katılar gösterir.'
      ] },
      { h: 'Hâl değişimleri', items: [
        'Erime (katı → sıvı), donma, buharlaşma (sıvı → gaz), yoğuşma, **süblimleşme** (katı → gaz: naftalin, kuru buz), **kırağılaşma** (gaz → katı).',
        'Erime, buharlaşma, süblimleşme ısı alır; donma, yoğuşma, kırağılaşma ısı verir.',
        '**Buhar basıncı** sıcaklıkla artar; dış basınca eşit olunca sıvı kaynar.',
        'Yükseklik arttıkça dış basınç azalır, su daha düşük sıcaklıkta kaynar.'
      ] }
    ],
    traps: [
      'Buharlaşma her sıcaklıkta yüzeyden olur; kaynama belirli sıcaklıkta sıvının her yerinden olur.'
    ]
  },

  'Doğa ve Kimya': {
    intro: 'Su kaynakları ve su arıtımı, hava ve toprak kirliliği, yeşil kimya ve geri dönüşüm.',
    parts: [
      { h: 'Su ve kirlilik', items: [
        '**Sert su:** Ca²⁺ ve Mg²⁺ iyonları fazla olan su; sabunu köpürtmez, kireç bırakır.',
        'Su arıtımı: çöktürme, süzme, havalandırma, klorlama (dezenfeksiyon).',
        '**Asit yağmuru:** SO₂ ve NOₓ gazlarının sudaki çözünmesiyle oluşur.',
        '**Sera etkisi:** CO₂, CH₄, su buharı ısının atmosferde tutulmasını sağlar; artışı küresel ısınmaya yol açar.',
        '**Ozon incelmesi:** CFC (kloroflorokarbon) gazları nedeniyle.'
      ] },
      { h: 'Yeşil kimya', items: [
        'Atık oluşturmamak, daha az zehirli madde kullanmak, enerji verimliliği, yenilenebilir hammadde.',
        'Geri dönüşüm: cam, kâğıt, metal, plastik ayrı toplanır; ham madde ve enerji tasarrufu sağlar.'
      ] }
    ],
    traps: [
      'Sera etkisi kendi başına zararlı değildir; olmasaydı Dünya çok soğuk olurdu. Sorun artışıdır.'
    ]
  },

  'Kimyanın Temel Kanunları': {
    intro: 'Kütlenin korunumu, sabit oranlar ve katlı oranlar kanunları. Tepkimelerde kütle hesapları buna dayanır.',
    parts: [
      { h: 'Kanunlar', items: [
        '**Kütlenin korunumu (Lavoisier):** tepkimeye girenlerin toplam kütlesi ürünlerin toplam kütlesine eşittir.',
        '**Sabit oranlar (Proust):** bir bileşikteki elementlerin kütlece birleşme oranı sabittir (suda H : O = 1 : 8).',
        '**Katlı oranlar (Dalton):** iki element birden fazla bileşik oluşturuyorsa, birinin sabit miktarıyla birleşen diğerinin kütleleri arasında küçük tam sayılı oran vardır (CO ve CO₂ → 1 : 2).',
        '**Birleşen hacim oranları (Gay-Lussac):** aynı koşullarda gazlar basit tam sayılı hacim oranlarıyla birleşir.'
      ] }
    ],
    traps: [
      'Katlı oranlar kanunu farklı bileşikler içindir; aynı formüllü (aynı) bileşiklere uygulanmaz.',
      'Artan madde varsa, tepkimeye giren kütleyi hesaplarken artanı çıkar.'
    ],
    example: {
      q: 'Su oluşumunda H : O kütle oranı 1 : 8’dir. 6 g hidrojen ve 40 g oksijen tepkimeye giriyor. Kaç g su oluşur, hangi maddeden ne kadar artar?',
      a: '6 g H için 48 g O gerekir, ama 40 g var: oksijen yetersiz. 40 g O ile 5 g H birleşir → 45 g su. 1 g hidrojen artar.'
    }
  },

  'Mol Kavramı ve Kimyasal Hesaplamalar': {
    intro: 'Mol, tanecik sayısı, kütle ve gaz hacmi arasındaki geçişler. Kimya hesaplarının tamamının temelidir.',
    parts: [
      { h: 'Geçiş formülleri', items: [
        '1 mol = 6,02 · 10^{23} tanecik (Avogadro sayısı, N_{A}).',
        'n = {m/M_{A}} (m: kütle, M_{A}: mol kütlesi, g/mol).',
        'n = {tanecik sayısı/N_{A}}.',
        'Normal koşullarda (0 °C, 1 atm) 1 mol gaz 22,4 L kaplar: n = {V/22,4}.',
        'Mol kütlesi: atom kütlelerinin toplamı. H₂O = 2 · 1 + 16 = 18 g/mol.'
      ] },
      { h: 'Tepkime hesapları', items: [
        'Denklemi denkleştir; katsayılar mol oranını verir.',
        '**Sınırlayıcı bileşen:** tamamen tükenen madde; ürün miktarını o belirler.',
        'Verim = {gerçek ürün/kuramsal ürün} · 100.'
      ] }
    ],
    traps: [
      '22,4 L yalnız gazlar için ve yalnız normal koşullarda geçerlidir.',
      'Katsayılar kütle oranı değil, mol oranıdır.'
    ],
    example: {
      q: '8,8 g CO₂ kaç moldür ve kaç tane molekül içerir? (C: 12, O: 16)',
      a: 'M = 12 + 32 = 44 g/mol. n = {8,8/44} = 0,2 mol. Molekül sayısı 0,2 · 6,02 · 10^{23} ≈ 1,2 · 10^{23}.'
    }
  },

  'Kimyasal Tepkimeler': {
    intro: 'Tepkime türleri ve tepkime denklemlerinin denkleştirilmesi.',
    parts: [
      { h: 'Tepkime türleri', items: [
        '**Yanma:** maddenin oksijenle tepkimesi; organik maddeler yanınca CO₂ ve H₂O oluşur.',
        '**Sentez (oluşum):** iki ya da daha fazla madde birleşip tek ürün verir.',
        '**Analiz (ayrışma):** bir bileşik daha basit maddelere ayrılır.',
        '**Asit–baz (nötrleşme):** asit + baz → tuz + su.',
        '**Çözünme–çökelme:** iki çözelti karışınca suda az çözünen katı (çökelek) oluşur.'
      ] },
      { h: 'Denkleştirme', items: [
        'Tepkimede atom türü ve sayısı korunur; yük de korunur.',
        'Önce en karmaşık molekülün katsayısını 1 al; H ve O’yu en sona bırak.',
        'Katsayılar en küçük tam sayılar olmalı.'
      ] }
    ],
    traps: [
      'Denkleştirirken formüllerin alt indisleri değiştirilmez, yalnız katsayılar değişir.'
    ],
    example: {
      q: 'C₃H₈ + O₂ → CO₂ + H₂O tepkimesini denkleştir.',
      a: 'C: 3CO₂. H: 8 → 4H₂O. O: 6 + 4 = 10 → 5O₂. C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.'
    }
  },

  'Karışımlar': {
    intro: 'Homojen ve heterojen karışımlar, çözelti derişimi ve karışımları ayırma yöntemleri.',
    parts: [
      { h: 'Karışım türleri', items: [
        '**Homojen (çözelti):** her yeri aynı özellikte (tuzlu su, hava, alaşımlar).',
        '**Heterojen:** her yeri aynı değil. **Süspansiyon** (katı–sıvı: çamurlu su), **emülsiyon** (sıvı–sıvı: zeytinyağı–su), **aerosol** (sis, duman), **koloit** (süt, jöle).',
        'Karışımın bileşenleri kendi özelliklerini korur; belirli bir erime–kaynama noktası yoktur.'
      ] },
      { h: 'Derişim ve ayırma', items: [
        'Kütlece yüzde = {çözünen kütlesi/çözelti kütlesi} · 100. Çözelti = çözünen + çözücü.',
        'Ayırma: **süzme** (tanecik boyutu), **ayırma hunisi** (yoğunluk farkı, karışmayan sıvılar), **damıtma** (kaynama noktası farkı), **mıknatıs** (manyetik özellik), **kristallendirme** (çözünürlük farkı).',
        'Ayrımsal damıtma: kaynama noktaları yakın sıvıları ayırır (ham petrol).'
      ] }
    ],
    traps: [
      'Alaşımlar (pirinç, tunç, çelik) homojen karışımdır, bileşik değildir.'
    ],
    example: {
      q: '40 g şeker 160 g suda çözünüyor. Çözelti kütlece yüzde kaç şekerlidir?',
      a: 'Çözelti 200 g. {40/200} · 100 = %20.'
    }
  },

  'Asitler, Bazlar ve Tuzlar': {
    intro: 'Asit ve bazların özellikleri, pH ölçeği ve nötrleşme. TYT kimyanın en sık sorulan konularından.',
    parts: [
      { h: 'Asitler ve bazlar', items: [
        '**Asit (Arrhenius):** suda H⁺ iyonu veren madde (HCl, H₂SO₄). Tadı ekşidir, mavi turnusolu kırmızıya çevirir.',
        '**Baz:** suda OH⁻ iyonu veren madde (NaOH, KOH). Tadı acıdır, ele kaygan gelir; kırmızı turnusolu maviye çevirir.',
        'Asitler aktif metallerle H₂ gazı açığa çıkarır. Bazlar amfoter metallerle (Al, Zn) tepkimeye girer.',
        '**pH:** 25 °C’de pH < 7 asidik, pH = 7 nötr, pH > 7 bazik. pH + pOH = 14.'
      ] },
      { h: 'Tuzlar ve nötrleşme', items: [
        'Asit + baz → tuz + su. Örnek: HCl + NaOH → NaCl + H₂O.',
        'Nötrleşme ekzotermiktir (ısı verir).',
        'Günlük örnekler: mide asidi (HCl), sirke (asetik asit), sabun (bazik), kireç çözücüler.',
        'Soy metaller (Cu, Ag, Au) asitlerle H₂ açığa çıkarmaz.'
      ] }
    ],
    traps: [
      'pH 1 azalırsa [H⁺] 10 kat artar; pH doğrusal değil logaritmiktir.'
    ],
    example: {
      q: '[H⁺] = 10^{−3} M olan çözeltinin pH’ı ve pOH’ı kaçtır? Çözelti asidik mi bazik mi?',
      a: 'pH = 3, pOH = 14 − 3 = 11. pH < 7 olduğu için asidiktir.'
    }
  },

  'Kimya Her Yerde': {
    intro: 'Günlük hayattaki kimyasallar: temizlik maddeleri, polimerler, kozmetikler, ilaçlar ve gıdalar.',
    parts: [
      { h: 'Konu başlıkları', items: [
        '**Sabun:** yağ asitlerinin sodyum ya da potasyum tuzu; bir ucu suyu (hidrofil), bir ucu yağı (hidrofob) sever. Sert suda köpürmez.',
        '**Deterjan:** sert suda da etkili, petrol kökenli temizlik maddesi.',
        '**Çamaşır suyu** (NaOCl) ile **tuz ruhu** (HCl) karıştırılmaz: zehirli klor gazı çıkar.',
        '**Polimer:** küçük moleküllerin (monomer) birleşmesiyle oluşan büyük moleküller: polietilen (poşet), PVC (boru), PET (şişe), teflon.',
        'Gıdalarda koruyucu, renklendirici, tatlandırıcı katkı maddeleri E kodlarıyla gösterilir.'
      ] }
    ],
    traps: [
      'Plastiklerin doğada çözünmesi yüzyıllar sürer; geri dönüşüm kodlarına dikkat.'
    ]
  }
};

export default L;
