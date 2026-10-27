import type { LessonSet } from './types';

const L: LessonSet = {
  'Fizik Bilimine Giriş': {
    intro: 'Fiziğin alt dalları, temel ve türetilmiş büyüklükler, skaler ve vektörel büyüklükler. Kavram soruları gelir; ezber gerektirir ama kısadır.',
    parts: [
      { h: 'Büyüklükler', items: [
        '**Temel büyüklükler (SI):** uzunluk (metre), kütle (kilogram), zaman (saniye), elektrik akımı (amper), sıcaklık (kelvin), madde miktarı (mol), ışık şiddeti (kandela).',
        '**Türetilmiş büyüklükler:** temel büyüklüklerden elde edilir: hız, kuvvet (newton), enerji (joule), basınç (pascal).',
        '**Skaler:** yalnız değeri olan büyüklük: kütle, zaman, sıcaklık, enerji, iş, hacim.',
        '**Vektörel:** değeri ve yönü olan büyüklük: kuvvet, hız, ivme, yer değiştirme, ağırlık, momentum.'
      ] },
      { h: 'Alt dallar', items: [
        'Mekanik (hareket ve kuvvet), termodinamik (ısı), elektromanyetizma, optik (ışık), atom ve nükleer fizik, katıhal fiziği.',
        'Fizikte bilimsel yöntem: gözlem → hipotez → deney → teori → yasa.'
      ] }
    ],
    traps: [
      'Ağırlık vektörel, kütle skalerdir; ikisini karıştırma.',
      'Işık yılı bir uzaklık birimidir, zaman birimi değildir.'
    ]
  },

  'Madde ve Özellikleri': {
    intro: 'Kütle, hacim ve özkütle ilişkisi. Karışımların özkütlesi ve dayanıklılık soruları gelir.',
    parts: [
      { h: 'Özkütle', items: [
        'd = {m/V}. Birimi g/cm³ ya da kg/m³. Suyun özkütlesi 1 g/cm³ = 1000 kg/m³.',
        'Özkütle maddeler için **ayırt edici** özelliktir; kütle ve hacim değildir.',
        '**Karışımın özkütlesi:** d = {m₁ + m₂/V₁ + V₂}. Hacimleri eşit sıvılarda {d₁ + d₂/2}; kütleleri eşit sıvılarda {2d₁d₂/d₁ + d₂}.',
        'Kütle–hacim grafiğinde eğim özkütleyi verir.'
      ] },
      { h: 'Diğer özellikler', items: [
        '**Dayanıklılık:** kesit alanı / hacim oranıyla ilgilidir; cisim büyüdükçe dayanıklılık azalır.',
        '**Adezyon:** farklı moleküller arası çekim; **kohezyon:** aynı moleküller arası çekim.',
        '**Kılcallık:** adezyon > kohezyon ise sıvı ince boruda yükselir (su), tersi ise alçalır (cıva).',
        '**Yüzey gerilimi:** sıvı yüzeyindeki moleküllerin gergin zar gibi davranması; sıcaklık artınca azalır.'
      ] }
    ],
    traps: [
      'Karışımın özkütlesi özkütlelerin ortalaması değildir (yalnız hacimler eşitse öyledir).'
    ],
    example: {
      q: 'Özkütlesi 2 g/cm³ olan 30 cm³ sıvı ile özkütlesi 4 g/cm³ olan 10 cm³ sıvı karıştırılıyor. Karışımın özkütlesi kaçtır?',
      a: 'Kütleler 60 g ve 40 g, toplam 100 g; hacim 40 cm³. d = {100/40} = 2,5 g/cm³.'
    }
  },

  'Basınç ve Kaldırma Kuvveti': {
    intro: 'Katı, sıvı ve gaz basıncı ile sıvıların cisimlere uyguladığı kaldırma kuvveti. Yüzme – batma koşulları sık sorulur.',
    parts: [
      { h: 'Basınç', items: [
        '**Katı basıncı:** P = {F/A}. Kuvvet aynıyken alan küçülürse basınç artar.',
        '**Sıvı basıncı:** P = h · d · g. Kabın şekline değil, derinliğe ve sıvının özkütlesine bağlıdır.',
        '**Pascal ilkesi:** kapalı kaptaki sıvıya uygulanan basınç her noktaya aynen iletilir: {F₁/A₁} = {F₂/A₂} (su cenderesi).',
        '**Açık hava basıncı:** deniz seviyesinde 76 cm-Hg; yükseklik arttıkça azalır. Torricelli deneyiyle ölçülür.'
      ] },
      { h: 'Kaldırma kuvveti', items: [
        'F_{k} = V_{batan} · d_{sıvı} · g. Batan hacim ve sıvının özkütlesine bağlıdır.',
        '**Yüzme:** d_{cisim} < d_{sıvı}; cisim kısmen batar, F_{k} = G.',
        '**Askıda kalma:** d_{cisim} = d_{sıvı}; tamamen batar ama dibe değmez, F_{k} = G.',
        '**Batma:** d_{cisim} > d_{sıvı}; F_{k} < G, dibe çöker.'
      ] }
    ],
    traps: [
      'Yüzen cisimde kaldırma kuvveti ağırlığa eşittir, “ağırlıktan büyük” değildir.',
      'Kaldırma kuvveti cismin kendi özkütlesine değil, sıvının özkütlesine bağlıdır.'
    ],
    example: {
      q: 'Hacmi 200 cm³ olan bir cisim suya tamamen batırılıyor. Kaldırma kuvveti kaç N’dur? (d_{su} = 1000 kg/m³, g = 10 m/s²)',
      a: 'V = 200 cm³ = 2 · 10^{−4} m³. F_{k} = 2 · 10^{−4} · 1000 · 10 = 2 N.'
    }
  },

  'Isı, Sıcaklık ve Genleşme': {
    intro: 'Isı bir enerji türüdür, sıcaklık ise taneciklerin ortalama hareket enerjisinin ölçüsüdür. Isı alışverişi, hâl değişimi ve genleşme soruları gelir.',
    parts: [
      { h: 'Isı ve sıcaklık', items: [
        '**Q = m · c · ΔT** (sıcaklık değişimi). c: öz ısı, maddeye özgüdür.',
        '**Isı sığası** = m · c; cismin sıcaklığını 1 °C artırmak için gereken ısı.',
        '**Hâl değişimi:** Q = m · L (L: erime ya da buharlaşma ısısı). Hâl değişimi sırasında sıcaklık sabit kalır.',
        '**Isıl denge:** alınan ısı = verilen ısı. Denge sıcaklığı başlangıç sıcaklıklarının arasındadır.',
        'Termometreler: T(K) = t(°C) + 273; {C/100} = {F − 32/180}.'
      ] },
      { h: 'Isı aktarımı ve genleşme', items: [
        '**İletim:** katılarda tanecikten taneciğe. **Konveksiyon:** akışkanlarda madde akışıyla. **Işıma:** boşlukta da olur (Güneş).',
        'Boyca genleşme ΔL = L₀ · λ · ΔT. Genleşme katsayısı maddeye özgüdür.',
        'Suyun 0–4 °C arasındaki **anomalisi:** su 4 °C’de en yoğundur; göllerin yüzeyden donmasının nedeni budur.'
      ] }
    ],
    traps: [
      'Isı ile sıcaklık aynı şey değildir: kütlesi büyük cisim aynı sıcaklıkta daha çok ısı depolar.',
      'Hâl değiştiren maddenin sıcaklığı artmaz; ısıyı hâl değiştirmek için harcar.'
    ],
    example: {
      q: '20 °C’deki 200 g su ile 80 °C’deki 100 g su karıştırılıyor. Denge sıcaklığı kaç °C olur?',
      a: '200(T − 20) = 100(80 − T) → 200T − 4000 = 8000 − 100T → 300T = 12000 → T = 40 °C.'
    }
  },

  'Hareket ve Kuvvet': {
    intro: 'Konum, hız, ivme kavramları; Newton’un hareket yasaları ve sürtünme. Grafik yorumlama çok sorulur.',
    parts: [
      { h: 'Hareket', items: [
        '**Sürat** skaler (yol/zaman), **hız** vektörel (yer değiştirme/zaman).',
        'Düzgün doğrusal hareket: x = v · t; konum–zaman grafiği doğru, eğimi hız.',
        'İvmeli hareket: v = v₀ + a · t; hız–zaman grafiğinin eğimi ivme, altındaki alan yer değiştirme.',
        'İvme–zaman grafiğinin altındaki alan hız değişimini verir.'
      ] },
      { h: 'Newton yasaları ve sürtünme', items: [
        '**1. yasa (eylemsizlik):** net kuvvet sıfırsa cisim durur ya da sabit hızla gider.',
        '**2. yasa:** F_{net} = m · a.',
        '**3. yasa (etki–tepki):** iki cisim birbirine eşit büyüklükte, zıt yönlü kuvvet uygular; bu kuvvetler farklı cisimlere etki eder.',
        '**Sürtünme kuvveti:** f = k · N (yatay düzlemde N = m · g). Harekete zıt yöndedir; yüzey alanına bağlı değildir.'
      ] }
    ],
    traps: [
      'Sabit hızla giden cisme etki eden net kuvvet sıfırdır; “kuvvet yoksa hareket olmaz” yanlıştır.',
      'Etki–tepki kuvvetleri birbirini dengelemez, çünkü farklı cisimlere etki eder.'
    ],
    example: {
      q: '4 kg kütleli cisme yatay 30 N kuvvet uygulanıyor; sürtünme katsayısı 0,25. İvme kaç m/s²’dir? (g = 10 m/s²)',
      a: 'f = 0,25 · 4 · 10 = 10 N. F_{net} = 30 − 10 = 20 N. a = {20/4} = 5 m/s².'
    }
  },

  'İş, Güç ve Enerji': {
    intro: 'Kuvvetin yaptığı iş, güç, kinetik ve potansiyel enerji ile enerjinin korunumu.',
    parts: [
      { h: 'Formüller', items: [
        '**İş:** W = F · x (kuvvet ile yer değiştirme aynı doğrultuda). Kuvvet harekete dikse iş sıfırdır.',
        '**Güç:** P = {W/t}. Birimi watt (J/s).',
        '**Kinetik enerji:** E_{k} = {1/2}mv².',
        '**Çekim potansiyel enerjisi:** E_{p} = m · g · h.',
        '**Esneklik potansiyel enerjisi:** {1/2}kx².',
        '**Verim** = {yararlı enerji/harcanan enerji} · 100.'
      ] },
      { h: 'Enerjinin korunumu', items: [
        'Sürtünmesiz ortamda mekanik enerji (E_{k} + E_{p}) korunur.',
        'Sürtünme varsa kayıp enerji ısıya dönüşür: W_{sürtünme} = f · x.',
        'Yüksekten bırakılan cisimde düştükçe potansiyel enerji azalır, kinetik enerji artar.'
      ] }
    ],
    traps: [
      'Bir cismi elinde tutup yatayda yürüyen kişi fizik anlamında yerçekimine karşı iş yapmaz.',
      'Hız 2 katına çıkarsa kinetik enerji 4 katına çıkar.'
    ],
    example: {
      q: '2 kg kütleli cisim 20 m yükseklikten serbest bırakılıyor. Yere çarptığı anda hızı kaç m/s’dir? (g = 10 m/s², sürtünme yok)',
      a: 'mgh = {1/2}mv² → 2 · 10 · 20 = {1/2} · 2 · v² → 400 = v² → v = 20 m/s.'
    }
  },

  'Elektrostatik': {
    intro: 'Durgun elektrik yükleri: elektriklenme çeşitleri, yük dağılımı ve elektroskop.',
    parts: [
      { h: 'Elektriklenme', items: [
        '**Sürtünmeyle:** iki yalıtkan sürtülünce biri elektron verir (+), diğeri alır (−); yükleri zıt ve eşittir.',
        '**Dokunmayla:** iletkenler dokununca yükler sığalarıyla (yarıçaplarıyla) orantılı paylaşılır. Özdeş kürelerde toplam yük eşit bölünür.',
        '**Etkiyle (indüksiyon):** yüklü cisim yaklaştırılınca iletkende yükler ayrışır; topraklanırsa iletken zıt yükle yüklenir.',
        'Elektriklenmede yalnız **elektronlar** hareket eder; protonlar yer değiştirmez.'
      ] },
      { h: 'Yük ve kuvvet', items: [
        'Aynı yükler iter, zıt yükler çeker.',
        'İletkende yükler dış yüzeyde toplanır; sivri uçlarda yük yoğunluğu fazladır (paratoner).',
        '**Coulomb yasası:** F = k · {q₁ · q₂/d²}.',
        'Elektroskop yaprakları aynı yükle yüklenince açılır.'
      ] }
    ],
    traps: [
      'Dokunmayla elektriklenmede yükler eşit değil, yarıçapla orantılı paylaşılır (küreler özdeş değilse).',
      'Yüklü bir cisim nötr cismi de çeker (etkiyle yük ayrışması).'
    ],
    example: {
      q: '+8q ve −2q yüklü özdeş iki iletken küre dokundurulup ayrılıyor. Son yükleri ne olur?',
      a: 'Toplam yük +6q, özdeş kürelerde eşit bölünür: her biri +3q.'
    }
  },

  'Elektrik Akımı ve Devreler': {
    intro: 'Akım, potansiyel farkı ve direnç ilişkisi; seri ve paralel bağlı dirençler.',
    parts: [
      { h: 'Temel bağıntılar', items: [
        '**Akım:** I = {q/t} (amper).',
        '**Ohm yasası:** V = I · R.',
        '**Direnç:** R = ρ · {L/A}; uzunlukla doğru, kesit alanıyla ters orantılı.',
        '**Elektrik enerjisi ve güç:** W = V · I · t; P = V · I = I²R = {V²/R}.'
      ] },
      { h: 'Bağlama', items: [
        '**Seri:** R_{eş} = R₁ + R₂ + …; her dirençten aynı akım geçer, gerilim dirençle orantılı paylaşılır.',
        '**Paralel:** {1/R_{eş}} = {1/R₁} + {1/R₂}; gerilim aynıdır, akım dirençle ters orantılı paylaşılır.',
        'İki paralel direnç: R_{eş} = {R₁R₂/R₁ + R₂}. n özdeş paralel direnç: {R/n}.',
        'Lambalarda parlaklık güçle orantılıdır.',
        '**Ampermetre** devreye seri, **voltmetre** paralel bağlanır.'
      ] }
    ],
    traps: [
      'Paralel bağlamada eşdeğer direnç en küçük dirençten bile küçüktür.',
      'Kısa devre olan direnç (uçları telle birleştirilmiş) devreden çıkar.'
    ],
    example: {
      q: '6 Ω ve 3 Ω paralel, bunlara seri bir 4 Ω direnç 12 V’luk üretece bağlanıyor. Ana koldan geçen akım kaç A’dir?',
      a: 'Paralel kısım {6 · 3/9} = 2 Ω. Toplam 2 + 4 = 6 Ω. I = {12/6} = 2 A.'
    }
  },

  'Manyetizma': {
    intro: 'Mıknatıslar, manyetik alan ve akım geçen telin manyetik etkisi.',
    parts: [
      { h: 'Mıknatıs', items: [
        'Her mıknatısın N ve S kutbu vardır; mıknatıs bölünse de tek kutup elde edilmez.',
        'Aynı kutuplar iter, zıt kutuplar çeker.',
        'Manyetik alan çizgileri mıknatısın dışında N’den S’ye gider; birbirini kesmez.',
        'Dünya da bir mıknatıs gibidir: coğrafi kuzey kutbu yakınında manyetik S kutbu bulunur.',
        'Demir, nikel, kobalt mıknatıstan etkilenen (ferromanyetik) maddelerdir.'
      ] },
      { h: 'Akım ve manyetik alan', items: [
        'Akım geçen telin çevresinde manyetik alan oluşur (Oersted). Yönü sağ el kuralıyla bulunur.',
        'Bobin (akım makarası) mıknatıs gibi davranır: elektromıknatıs. Sarım sayısı ve akım artınca alan güçlenir.',
        'Manyetik alanda akım geçen tele kuvvet etki eder: elektrik motorunun çalışma ilkesi.'
      ] }
    ],
    traps: [
      'Pusulanın N ucu Dünya’nın coğrafi kuzeyini gösterir; çünkü orada manyetik S kutbu vardır.'
    ]
  },

  'Dalgalar': {
    intro: 'Dalgaların temel özellikleri: dalga boyu, frekans, periyot ve hız. Yay, su ve ses dalgaları sorulur.',
    parts: [
      { h: 'Temel kavramlar', items: [
        'v = λ · f; f = {1/T}.',
        'Dalganın hızı **ortama** bağlıdır; frekans ise **kaynağa** bağlıdır.',
        'Dalga bir ortamdan diğerine geçerken frekans değişmez, hız ve dalga boyu değişir.',
        '**Enine dalga:** titreşim yayılma doğrultusuna dik (ip, ışık). **Boyuna dalga:** paralel (ses, yay sıkıştırma).',
        '**Mekanik dalga** ortam ister (ses); **elektromanyetik dalga** boşlukta da yayılır (ışık).'
      ] },
      { h: 'Su ve ses dalgaları', items: [
        'Su dalgaları derin ortamda hızlı, sığ ortamda yavaştır.',
        'Ses katılarda en hızlı, gazlarda en yavaş yayılır; boşlukta yayılmaz.',
        '**Sesin yüksekliği (tizlik)** frekansa, **şiddeti** genliğe bağlıdır.',
        '**Rezonans:** bir sistemin doğal frekansında uyarılınca genliğin büyümesi.'
      ] }
    ],
    traps: [
      'Frekansı artırmak hızı değiştirmez, dalga boyunu kısaltır (aynı ortamda).'
    ],
    example: {
      q: 'Hızı 340 m/s olan ses dalgasının frekansı 170 Hz ise dalga boyu kaç m’dir?',
      a: 'λ = {v/f} = {340/170} = 2 m.'
    }
  },

  'Optik': {
    intro: 'Işığın yansıması, aynalar, kırılma, mercekler ve renkler. TYT fiziğinin sık sorulan konusu.',
    parts: [
      { h: 'Yansıma ve aynalar', items: [
        'Gelme açısı = yansıma açısı; açılar **normalle** ölçülür.',
        '**Düz ayna:** görüntü düz, sanal, cisimle eşit boyda ve aynaya aynı uzaklıkta.',
        '**Çukur ayna:** odaktan uzaktaki cismin görüntüsü gerçek ve ters; odakla ayna arasındaki cismin görüntüsü sanal, düz ve büyük.',
        '**Tümsek ayna:** görüntü her zaman sanal, düz ve küçük (dikiz aynaları).'
      ] },
      { h: 'Kırılma ve renkler', items: [
        'Işık az yoğun ortamdan çok yoğun ortama geçerken normale yaklaşır.',
        '**Tam yansıma:** çok yoğundan az yoğuna geçişte gelme açısı sınır açıyı aşarsa ışık geri yansır (fiber optik).',
        '**İnce kenarlı mercek** toplayıcı, **kalın kenarlı mercek** dağıtıcıdır.',
        'Beyaz ışık prizmada renklerine ayrılır. Ana renkler (ışıkta): kırmızı, yeşil, mavi.',
        'Cisimler yansıttıkları ışığın renginde görünür.'
      ] }
    ],
    traps: [
      'Yüzeyle verilen açıyı doğrudan gelme açısı alma; 90°’den çıkar.',
      'Işık renkleri ile boya renkleri farklı karışır.'
    ],
    example: {
      q: 'Bir ışın düz aynaya yüzeyle 35° açı yapacak şekilde geliyor. Yansıma açısı kaç derecedir?',
      a: 'Gelme açısı normalle ölçülür: 90 − 35 = 55°. Yansıma açısı da 55°.'
    }
  }
};

export default L;
