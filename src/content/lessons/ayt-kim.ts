import type { LessonSet } from './types';

const L: LessonSet = {
  'Modern Atom Teorisi': {
    intro: 'Kuantum sayıları, orbitaller, elektron dizilimi ve periyodik özellikler.',
    parts: [
      { h: 'Kuantum sayıları ve orbitaller', items: [
        '**n (baş):** enerji düzeyi. **ℓ (açısal):** orbital türü (s = 0, p = 1, d = 2, f = 3). **mₗ (manyetik):** orbitalin yönelimi. **mₛ (spin):** +{1/2} ya da −{1/2}.',
        's orbitali 2, p 6, d 10, f 14 elektron alır.',
        '**Aufbau:** elektronlar düşük enerjiliden yükseğe yerleşir: 1s 2s 2p 3s 3p 4s 3d 4p 5s…',
        '**Pauli:** bir orbitalde en çok 2 elektron, zıt spinli. **Hund:** eş enerjili orbitallere önce teker teker, aynı spinle.',
        'Küresel simetri istisnaları: Cr (3d⁵4s¹) ve Cu (3d¹⁰4s¹).'
      ] },
      { h: 'Periyodik sistemde yer', items: [
        'Son orbital s ya da p ise A grubu; d ise B grubu; f ise lantanit–aktinit.',
        'Değerlik elektron sayısı A grup numarasını verir.',
        'Periyodik eğilimler: atom yarıçapı grupta aşağı artar, periyotta sağa azalır; iyonlaşma enerjisi ve elektronegatiflik tersi.'
      ] }
    ],
    example: {
      q: '₁₅P atomunun elektron dizilimi ve periyodik tablodaki yeri nedir?',
      a: '1s² 2s² 2p⁶ 3s² 3p³. 3 katman → 3. periyot; son orbital p ve değerlik elektronu 5 → 5A grubu.'
    }
  },

  'Gazlar': {
    intro: 'Gaz yasaları, ideal gaz denklemi, kısmi basınç ve gazların difüzyonu.',
    parts: [
      { h: 'Yasalar', items: [
        '**Boyle:** sabit T’de P · V sabit.',
        '**Charles:** sabit P’de {V/T} sabit (T kelvin cinsinden).',
        '**Gay-Lussac:** sabit V’de {P/T} sabit.',
        '**Avogadro:** aynı koşullarda eşit hacimli gazlar eşit sayıda tanecik içerir.',
        '**İdeal gaz denklemi:** PV = nRT. R = 0,082 L·atm/(mol·K) ya da {22,4/273}.'
      ] },
      { h: 'Karışımlar ve difüzyon', items: [
        '**Dalton kısmi basınçlar:** P_{toplam} = P₁ + P₂ + …; Pᵢ = P_{toplam} · {nᵢ/n_{toplam}}.',
        '**Graham:** {v₁/v₂} = √{{M₂/M₁}}: hafif gaz daha hızlı yayılır.',
        'Gerçek gazlar yüksek sıcaklık ve düşük basınçta ideale yaklaşır.',
        'Su üzerinde toplanan gazda: P_{gaz} = P_{toplam} − P_{su buharı}.'
      ] }
    ],
    traps: [
      'Gaz yasalarında sıcaklık mutlaka kelvin cinsinden olmalıdır.'
    ],
    example: {
      q: '27 °C’de 4 L hacim kaplayan gaz, sabit basınçta 127 °C’ye ısıtılırsa hacmi kaç L olur?',
      a: 'T₁ = 300 K, T₂ = 400 K. V₂ = 4 · {400/300} = {16/3} ≈ 5,33 L.'
    }
  },

  'Sıvı Çözeltiler ve Çözünürlük': {
    intro: 'Derişim birimleri, seyreltme–karıştırma, koligatif özellikler ve çözünürlük.',
    parts: [
      { h: 'Derişim', items: [
        '**Molarite:** M = {n/V(L)}.',
        '**Molalite:** m = {n/kg çözücü}.',
        'Kütlece yüzde, ppm (milyonda bir), mol kesri.',
        '**Seyreltme:** M₁V₁ = M₂V₂. **Karıştırma:** M_{son} = {M₁V₁ + M₂V₂/V₁ + V₂}.'
      ] },
      { h: 'Koligatif özellikler ve çözünürlük', items: [
        'Çözünen tanecik sayısına bağlıdır, türüne bağlı değildir.',
        'Kaynama noktası yükselmesi, donma noktası alçalması, buhar basıncı düşmesi, osmotik basınç.',
        'İyonik bileşikler suda iyonlarına ayrışır: NaCl 2, CaCl₂ 3 tanecik verir.',
        'Gazların çözünürlüğü sıcaklık artınca azalır, basınç artınca artar.',
        'Katıların çoğunun çözünürlüğü sıcaklıkla artar (endotermik çözünme).'
      ] }
    ],
    example: {
      q: '0,5 mol NaOH ile 250 mL çözelti hazırlanıyor. Molarite kaçtır?',
      a: 'M = {0,5/0,25} = 2 M.'
    }
  },

  'Kimyasal Tepkimelerde Enerji': {
    intro: 'Tepkime ısısı (entalpi), ekzotermik–endotermik tepkimeler, Hess yasası ve bağ enerjileri.',
    parts: [
      { h: 'Entalpi', items: [
        '**Ekzotermik:** ısı verir, ΔH < 0 (yanma, nötrleşme, donma, yoğuşma).',
        '**Endotermik:** ısı alır, ΔH > 0 (erime, buharlaşma, ayrışma).',
        'ΔH = ΣΔH_{ürünler} − ΣΔH_{girenler} (oluşum entalpileriyle).',
        'Elementlerin standart oluşum entalpisi sıfırdır.'
      ] },
      { h: 'Hess yasası ve bağ enerjisi', items: [
        'Tepkime ters çevrilirse ΔH’nin işareti değişir; katsayılar k ile çarpılırsa ΔH de k ile çarpılır.',
        'Tepkimeler toplanınca ΔH’ler toplanır.',
        'Bağ enerjileriyle: ΔH = Σ(kırılan bağlar) − Σ(oluşan bağlar).'
      ] }
    ],
    example: {
      q: 'A → B, ΔH = −100 kJ ve B → C, ΔH = +40 kJ ise 2C → 2A tepkimesinin ΔH değeri nedir?',
      a: 'A → C: −60 kJ. Ters çevir: C → A, +60 kJ. 2 ile çarp: +120 kJ.'
    }
  },

  'Tepkime Hızları': {
    intro: 'Tepkime hızı, hız ifadesi, etkin çarpışma kuramı ve hızı etkileyen faktörler.',
    parts: [
      { h: 'Kavramlar', items: [
        'Hız: birim zamanda derişimdeki değişim.',
        '**Etkin çarpışma:** yeterli enerji (aktivasyon enerjisi) ve uygun geometriyle olan çarpışma.',
        '**Hız ifadesi:** r = k[A]^{x}[B]^{y}; üsler deneyle (mekanizmanın en yavaş basamağından) bulunur.',
        'Mekanizmalı tepkimelerde hızı en yavaş basamak belirler.'
      ] },
      { h: 'Hızı etkileyenler', items: [
        'Sıcaklık: artınca hız artar (eşik enerjisini aşan tanecik sayısı artar).',
        'Derişim ve basınç (gazlarda): artınca hız artar.',
        'Temas yüzeyi: toz hâlindeki katı daha hızlı tepkir.',
        '**Katalizör:** aktivasyon enerjisini düşürür, ΔH’yi değiştirmez; tepkimeden değişmeden çıkar.',
        'Maddenin türü: iyonlar arası tepkimeler hızlıdır.'
      ] }
    ],
    traps: [
      'Katalizör tepkime ısısını ve dengeyi değiştirmez; yalnız dengeye ulaşma süresini kısaltır.'
    ]
  },

  'Kimyasal Denge': {
    intro: 'İleri ve geri tepkime hızlarının eşitlendiği durum. Denge sabiti ve Le Chatelier ilkesi her yıl sorulur.',
    parts: [
      { h: 'Denge sabiti', items: [
        'aA + bB ⇌ cC için K_{c} = {[C]^{c}/[A]^{a}[B]^{b}}.',
        'Katı ve saf sıvılar denge ifadesine yazılmaz.',
        'Tepkime ters çevrilirse K terslenir; katsayılar n ile çarpılırsa K’nin n. kuvveti alınır.',
        'K yalnız sıcaklıkla değişir.',
        'Kₚ = K_{c}(RT)^{Δn} (Δn: gaz mol sayısı farkı).'
      ] },
      { h: 'Le Chatelier', items: [
        'Dengeye dışarıdan etki yapılırsa sistem bu etkiyi azaltacak yöne kayar.',
        'Madde eklenirse onu harcayan yöne; çekilirse onu üreten yöne kayar.',
        'Basınç artarsa (hacim azalırsa) gaz mol sayısı az olan tarafa kayar.',
        'Sıcaklık artarsa endotermik yöne kayar; ekzotermik tepkimede K küçülür.',
        'Katalizör dengeyi kaydırmaz.'
      ] }
    ],
    example: {
      q: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g), ΔH < 0 tepkimesinde NH₃ verimini artırmak için ne yapılmalı?',
      a: 'Basıncı artır (4 mol gazdan 2 mole kayar), sıcaklığı düşür (ekzotermik yön), NH₃’ü ortamdan çek.'
    }
  },

  'Asit-Baz Dengesi': {
    intro: 'Zayıf ve kuvvetli asit–bazlar, pH hesapları, tampon çözeltiler ve titrasyon.',
    parts: [
      { h: 'Tanımlar ve pH', items: [
        '**Brønsted–Lowry:** asit H⁺ verir, baz H⁺ alır; konjuge asit–baz çiftleri.',
        'Su: K_{su} = [H⁺][OH⁻] = 10^{−14} (25 °C). pH + pOH = 14.',
        'Kuvvetli asit tamamen iyonlaşır: [H⁺] = asit derişimi.',
        'Zayıf asit: [H⁺] = √{Kₐ · C}.',
        'Kₐ · K_{b} = K_{su} (konjuge çiftler için).'
      ] },
      { h: 'Tampon ve titrasyon', items: [
        '**Tampon:** zayıf asit + onun tuzu (ya da zayıf baz + tuzu); az miktar asit–baz eklense de pH’ı korur.',
        '**Titrasyon:** derişimi bilinen çözeltiyle bilinmeyenin derişimini bulma; eşdeğerlik noktasında mol H⁺ = mol OH⁻.',
        'Kuvvetli asit–kuvvetli baz titrasyonunda eşdeğerlik noktasında pH = 7.',
        '**Hidroliz:** zayıf asidin tuzu bazik, zayıf bazın tuzu asidik çözelti verir.'
      ] }
    ],
    example: {
      q: '0,01 M NaOH çözeltisinin pH’ı kaçtır? (25 °C)',
      a: '[OH⁻] = 10^{−2} → pOH = 2 → pH = 12.'
    }
  },

  'Çözünürlük Dengesi': {
    intro: 'Az çözünen iyonik katıların çözünürlük çarpımı (Kçç) ve ortak iyon etkisi.',
    parts: [
      { h: 'Kavramlar', items: [
        'AₓBᵧ(k) ⇌ xA^{y+} + yB^{x−}; K_{çç} = [A]^{x}[B]^{y}.',
        'Çözünürlük s ise: AB için K_{çç} = s²; AB₂ için K_{çç} = 4s³.',
        '**Ortak iyon etkisi:** ortamda aynı iyon varsa çözünürlük azalır.',
        '**Çökelme şartı:** iyonlar çarpımı (Q) > K_{çç} ise çökelme olur.',
        'K_{çç} yalnız sıcaklıkla değişir.'
      ] }
    ],
    example: {
      q: 'AgCl için K_{çç} = 1,6 · 10^{−10} ise çözünürlüğü kaç mol/L’dir?',
      a: 's² = 1,6 · 10^{−10} → s = 1,26 · 10^{−5} mol/L (yaklaşık).'
    }
  },

  'Kimya ve Elektrik': {
    intro: 'Yükseltgenme–indirgenme, elektrot potansiyelleri, piller ve elektroliz.',
    parts: [
      { h: 'Redoks', items: [
        '**Yükseltgenme:** elektron verme, yükseltgenme basamağı artar. **İndirgenme:** elektron alma, basamak azalır.',
        'Yükseltgenen madde indirgendir; indirgenen madde yükseltgendir.',
        'Aktif metal, daha az aktif metalin iyonunu indirger (Zn + Cu²⁺ → Zn²⁺ + Cu).'
      ] },
      { h: 'Piller ve elektroliz', items: [
        '**Galvanik pil:** kendiliğinden tepkime, kimyasal enerji → elektrik. Anotta yükseltgenme (−), katotta indirgenme (+).',
        'Pil potansiyeli E° = E°_{katot} − E°_{anot} (indirgenme potansiyelleriyle); E° > 0 ise pil çalışır.',
        'Tuz köprüsü devreyi tamamlar ve yük dengesini sağlar.',
        '**Elektroliz:** dış akımla istemsiz tepkime; anot +, katot −.',
        '**Faraday:** 1 mol e⁻ = 96 500 C; Q = I · t. Toplanan madde mol = {Q/96 500 · tesir değerliği}.',
        '**Korozyon:** metalin yükseltgenmesi; galvanizleme, katodik koruma ile önlenir.'
      ] }
    ],
    traps: [
      'Anot ve katodun işaretleri pilde ve elektrolizde terstir; ama her ikisinde de anotta yükseltgenme olur.'
    ],
    example: {
      q: '2 mol Cu²⁺ iyonunu bakır metaline indirgemek için kaç Faraday yük gerekir?',
      a: 'Her Cu²⁺ 2 elektron alır: 2 · 2 = 4 mol e⁻ = 4 Faraday.'
    }
  },

  'Karbon Kimyasına Giriş': {
    intro: 'Karbonun bağ yapma özellikleri, hibritleşme, formül türleri ve allotroplar.',
    parts: [
      { h: 'Kavramlar', items: [
        'Karbon 4 bağ yapar; zincir ve halka oluşturabilir.',
        '**Hibritleşme:** sp³ (tekli bağ, 109,5°, düzgün dörtyüzlü), sp² (bir ikili bağ, 120°, düzlem üçgen), sp (üçlü bağ ya da iki ikili, 180°, doğrusal).',
        'Tekli bağ = 1 σ; ikili bağ = 1 σ + 1 π; üçlü bağ = 1 σ + 2 π.',
        '**Formüller:** basit (kaba) formül, molekül formülü, yapı formülü.',
        '**Allotroplar:** elmas (sp³, sert, iletken değil), grafit (sp², katmanlı, iletken), fulleren, grafen, nanotüp.'
      ] }
    ],
    example: {
      q: 'Etin (C₂H₂) molekülünde kaç σ ve kaç π bağı vardır?',
      a: 'H−C≡C−H: iki C−H (2 σ) + üçlü bağ (1 σ + 2 π). Toplam 3 σ, 2 π.'
    }
  },

  'Organik Bileşikler': {
    intro: 'Hidrokarbonlar ve fonksiyonel gruplar: adlandırma, izomerlik ve tepkimeler. AYT kimyanın en büyük konusu.',
    parts: [
      { h: 'Hidrokarbonlar', items: [
        '**Alkanlar** (CₙH_{2n + 2}): tekli bağ; yer değiştirme (halojenlenme) tepkimesi.',
        '**Alkenler** (CₙH_{2n}): ikili bağ; katılma tepkimesi; cis–trans izomerliği.',
        '**Alkinler** (CₙH_{2n − 2}): üçlü bağ.',
        '**Aromatikler:** benzen halkası (C₆H₆).',
        'Adlandırma: en uzun zincir ana zincir; dallanmaya en yakın uçtan numaralandır. Kökler: met (1), et (2), prop (3), büt (4), pent (5), hekz (6).'
      ] },
      { h: 'Fonksiyonel gruplar', items: [
        '**Alkol** (−OH), **eter** (−O−), **aldehit** (−CHO), **keton** (−CO−), **karboksilik asit** (−COOH), **ester** (−COO−), **amin** (−NH₂).',
        'Birincil alkol yükseltgenince aldehit, sonra karboksilik asit; ikincil alkol keton verir; üçüncül alkol yükseltgenmez.',
        '**Esterleşme:** karboksilik asit + alkol → ester + su.',
        'Aynı formüllü farklı yapılar: **izomer** (yapı izomeri, geometrik izomeri). Alkol ile eter, aldehit ile keton fonksiyonel grup izomeridir.'
      ] }
    ],
    traps: [
      'Alkollerin kaynama noktası aynı mol kütleli eterlerden yüksektir (hidrojen bağı).'
    ],
    example: {
      q: 'C₄H₁₀ formüllü kaç yapı izomeri vardır?',
      a: 'Düz zincir bütan ve dallı 2-metilpropan (izobütan): 2 izomer.'
    }
  },

  'Enerji Kaynakları ve Bilimsel Gelişmeler': {
    intro: 'Fosil yakıtlar, alternatif enerji kaynakları, sürdürülebilirlik ve nanoteknoloji.',
    parts: [
      { h: 'Konular', items: [
        '**Fosil yakıtlar:** kömür, petrol, doğal gaz; yenilenemez, CO₂ salımıyla sera etkisini artırır.',
        '**Ham petrol** ayrımsal damıtmayla bileşenlerine ayrılır. **Oktan sayısı** benzinin vuruntu direncidir.',
        '**Alternatif kaynaklar:** güneş, rüzgâr, jeotermal, hidroelektrik, biyokütle, hidrojen, nükleer.',
        '**Biyodizel:** bitkisel yağlardan; **biyoetanol:** şeker ve nişastadan.',
        '**Nanoteknoloji:** 1–100 nm ölçeğinde malzemeler; yüzey alanı büyük, özellikler farklı.'
      ] }
    ]
  }
};

export default L;
