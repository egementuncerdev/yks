import type { LessonSet } from './types';

const L: LessonSet = {
  'Doğa ve İnsan': {
    intro: 'Coğrafyanın konusu, doğal ve beşeri unsurlar ile insan–doğa etkileşimi.',
    parts: [
      { h: 'Temel kavramlar', items: [
        'Coğrafya; insan ile doğal çevre arasındaki karşılıklı etkileşimi inceler.',
        '**Doğal sistemler:** atmosfer, hidrosfer, litosfer, biyosfer. **Beşeri sistemler:** nüfus, yerleşme, ekonomi.',
        '**Fiziki coğrafya:** jeomorfoloji (yer şekilleri), klimatoloji (iklim), hidrografya (sular), biyocoğrafya.',
        '**Beşeri ve ekonomik coğrafya:** nüfus, yerleşme, tarım, sanayi, ulaşım.',
        'İnsanın doğaya etkisi: baraj, tarım alanı açma, ormansızlaşma. Doğanın insana etkisi: iklimin tarım ve yerleşmeyi belirlemesi.'
      ] }
    ]
  },

  'Dünya’nın Şekli ve Hareketleri': {
    intro: 'Dünya’nın şeklinin sonuçları ile günlük ve yıllık hareketin sonuçları. Mevsimler ve gece–gündüz süreleri sık sorulur.',
    parts: [
      { h: 'Şeklin sonuçları', items: [
        'Dünya kutuplardan basık, Ekvator’dan şişkin bir geoittir.',
        'Ekvator’dan kutuplara gidildikçe Güneş ışınlarının geliş açısı küçülür, sıcaklık azalır.',
        'Yerçekimi kutuplarda en fazla, Ekvator’da en azdır.',
        'Paraleller arası uzaklık her yerde yaklaşık 111 km; meridyenler arası uzaklık kutuplara doğru azalır.'
      ] },
      { h: 'Günlük hareket', items: [
        'Batıdan doğuya, 24 saatte bir tur. Sonuçları: gece–gündüz, yerel saat farkları, günlük sıcaklık farkı.',
        'Ardışık iki meridyen arasında 4 dakika yerel saat farkı vardır. Doğudaki yerin saati ileridir.'
      ] },
      { h: 'Yıllık hareket ve eksen eğikliği', items: [
        'Eksen eğikliği (23°27′) + yıllık hareket → mevsimler ve gece–gündüz sürelerinin değişmesi.',
        '**21 Haziran:** Güneş Yengeç Dönencesi’ne dik; Kuzey Yarım Küre’de en uzun gündüz, yaz başlangıcı.',
        '**21 Aralık:** Oğlak Dönencesi’ne dik; Kuzey Yarım Küre’de en uzun gece.',
        '**21 Mart ve 23 Eylül (ekinoks):** Ekvator’a dik; her yerde gece–gündüz eşit.',
        'Ekvator’da gece–gündüz yıl boyunca eşittir.'
      ] }
    ],
    traps: [
      'Mevsimlerin nedeni Dünya’nın Güneş’e uzaklığı değil, eksen eğikliğidir.'
    ],
    example: {
      q: '30° doğu meridyeninde saat 12.00 iken 45° doğu meridyeninde saat kaçtır?',
      a: 'Fark 15 meridyen, 15 · 4 = 60 dakika. Doğudaki yer ileride: saat 13.00.'
    }
  },

  'Coğrafi Konum': {
    intro: 'Matematik (mutlak) ve özel (göreceli) konum. Türkiye’nin konumunun sonuçları sorulur.',
    parts: [
      { h: 'Matematik konum', items: [
        'Paralel ve meridyenlerle belirlenen konum (enlem ve boylam).',
        '**Türkiye:** 36°–42° kuzey paralelleri, 26°–45° doğu meridyenleri arasında.',
        'Sonuçları: Kuzey Yarım Küre’de olması, mevsimlerin belirgin olması, Güneş’in hiçbir zaman tam tepede olmaması, doğu–batı arası 76 dakika yerel saat farkı.'
      ] },
      { h: 'Özel konum', items: [
        'Bir yerin kıtalara, denizlere ve yer şekillerine göre konumu.',
        'Türkiye: Asya ile Avrupa arasında köprü, üç tarafı denizlerle çevrili, Boğazlar, dağlık ve yüksek bir ülke.',
        'Yükseltinin doğuya doğru artması, aynı enlemdeki yerler arasında iklim farkı yaratır.'
      ] }
    ],
    traps: [
      'Aynı paralel üzerindeki iki şehrin iklimi farklıysa neden matematik konum değil, özel konumdur (yükselti, denize uzaklık).'
    ]
  },

  'Harita Bilgisi': {
    intro: 'Ölçek hesapları, izohips haritaları ve profil çıkarma. Ölçek soruları her yıl sorulur.',
    parts: [
      { h: 'Ölçek', items: [
        'Kesir ölçek: 1/100 000 → haritadaki 1 cm gerçekte 100 000 cm = 1 km.',
        'Gerçek uzunluk = harita uzunluğu · ölçek paydası.',
        '**Büyük ölçek** (paydası küçük, 1/10 000) ayrıntılı ama dar alan gösterir. **Küçük ölçek** (paydası büyük) geniş alan, az ayrıntı.',
        'Alan hesaplarında ölçeğin karesi alınır.',
        'Birimler: 1 km = 1000 m = 100 000 cm.'
      ] },
      { h: 'İzohips (eş yükselti eğrileri)', items: [
        'Aynı yükseltideki noktaları birleştiren eğriler.',
        'Eğriler sıklaştıkça eğim artar, seyrekleştikçe azalır.',
        'Kapalı eğrilerin ortası tepe; ok ya da çentik varsa çukur (çanak).',
        'Vadi: eğriler yüksek kısma doğru sokulur. Sırt: alçak kısma doğru uzanır.',
        '**Eğim** = {yükselti farkı/yatay uzaklık} · 100.'
      ] }
    ],
    traps: [
      'Haritada aynı alanın küçük ölçekte daha küçük göründüğünü unutma; ölçek küçüldükçe çizim küçülür.'
    ],
    example: {
      q: '1/500 000 ölçekli haritada iki şehir arası 6 cm ise gerçek uzaklık kaç km’dir?',
      a: '6 · 500 000 = 3 000 000 cm = 30 km.'
    }
  },

  'Atmosfer ve İklim': {
    intro: 'Atmosferin yapısı ve iklim elemanları: sıcaklık, basınç, rüzgâr, nem ve yağış.',
    parts: [
      { h: 'Atmosfer', items: [
        'Katmanlar: troposfer (hava olayları), stratosfer (ozon), mezosfer, termosfer, ekzosfer.',
        'Troposferde her 200 m’de sıcaklık yaklaşık 1 °C azalır.'
      ] },
      { h: 'İklim elemanları', items: [
        '**Sıcaklık:** enlem, yükselti, denize uzaklık, bakı ve okyanus akıntılarına bağlıdır.',
        '**Basınç:** sıcaklık artınca azalır (termik alçak basınç); yükseldikçe azalır.',
        '**Rüzgâr:** yüksek basınçtan alçak basınca eser. Küresel rüzgârlar: alize, batı, kutup rüzgârları. Yerel: fön, meltem, muson.',
        '**Nem:** mutlak nem (havadaki su buharı miktarı), bağıl nem (doyma oranı).',
        '**Yağış tipleri:** konveksiyonel (yükselen sıcak hava), orografik (yamaç), cephesel.'
      ] }
    ],
    traps: [
      'Yükselti, enlem, denize uzaklık iklim **faktörüdür**; sıcaklık, yağış, basınç iklim **elemanıdır**.',
      'Sıcaklık artınca bağıl nem azalır (mutlak nem aynı kaldığında).'
    ]
  },

  'İklim Tipleri': {
    intro: 'Dünyadaki ve Türkiye’deki iklim tipleri ile doğal bitki örtüleri.',
    parts: [
      { h: 'Sıcak ve ılıman iklimler', items: [
        '**Ekvatoral:** her mevsim sıcak ve yağışlı; bitki örtüsü yağmur ormanı.',
        '**Savan:** yaz yağışlı, kış kurak; uzun boylu otlar (savan).',
        '**Muson:** yazları yağışlı (muson rüzgârları), Güney ve Güneydoğu Asya.',
        '**Çöl:** çok az yağış, gece–gündüz sıcaklık farkı fazla.',
        '**Akdeniz:** yaz sıcak–kurak, kış ılık–yağışlı; **maki**.',
        '**Okyanusal (Karadeniz):** her mevsim yağışlı, ılık; geniş yapraklı ve iğne yapraklı **orman**.'
      ] },
      { h: 'Soğuk iklimler', items: [
        '**Karasal:** yaz sıcak, kış soğuk ve kar yağışlı; yağış ilkbaharda; **bozkır (step)**.',
        '**Tayga:** uzun ve sert kış; iğne yapraklı ormanlar.',
        '**Tundra ve kutup:** çok soğuk; yosun ve likenler (tundra).'
      ] }
    ],
    traps: [
      'Bozkır yaz kuraklığı nedeniyle yazın sararır; orman değildir.'
    ]
  },

  'Yerin Şekillenmesi': {
    intro: 'İç kuvvetler (yer kabuğu hareketleri, volkanizma, deprem) ve dış kuvvetler (akarsu, rüzgâr, buzul, dalga, karstik aşınma).',
    parts: [
      { h: 'İç kuvvetler', items: [
        '**Orojenez (dağ oluşumu):** kıvrılma ve kırılma. **Epirojenez:** geniş alanların yavaşça yükselip alçalması.',
        '**Volkanizma:** magmanın yüzeye çıkması (Ağrı, Erciyes, Nemrut).',
        '**Deprem:** tektonik (en yaygın), volkanik, çöküntü.'
      ] },
      { h: 'Dış kuvvetler', items: [
        '**Akarsu:** vadi, menderes, delta, dev kazanı. Delta oluşması için akıntı ve gel-git zayıf olmalı.',
        '**Rüzgâr:** kurak bölgelerde; mantar kaya, kumul, lös.',
        '**Buzul:** sirk, moren, buzul vadisi (U şekilli).',
        '**Karstik:** kalkerin (kireç taşı) suyla erimesi; lapya, dolin, polye, mağara, traverten (Pamukkale).',
        '**Dalga:** falez, kıyı oku, tombolo, lagün.'
      ] }
    ]
  },

  'Su, Toprak ve Bitki': {
    intro: 'Akarsu rejimleri, göller, yer altı suları, toprak türleri ve bitki örtüsü.',
    parts: [
      { h: 'Sular', items: [
        '**Akarsu rejimi:** akımın yıl içindeki değişimi. Düzenli rejim: yağışın yıla dağıldığı yerler (Karadeniz akarsuları).',
        '**Göl türleri:** tektonik (Tuz, Eğirdir), volkanik (Nemrut krater gölü), karstik (Salda), set gölü (Van: lav seti, Tortum: heyelan seti), buzul.',
        '**Kaynaklar:** fay kaynağı, karstik kaynak, gayzer.'
      ] },
      { h: 'Toprak ve bitki', items: [
        '**Zonal topraklar:** iklimin etkisiyle oluşur (laterit: Ekvatoral, kahverengi bozkır, podzol: tayga, terra rossa: Akdeniz).',
        '**İntrazonal:** ana kayaya bağlı (kalker üzerinde rendzina). **Azonal:** taşınmış (alüvyal, kolüvyal, lös).',
        'Bitki örtüsü iklimin aynasıdır: orman, maki, bozkır, çayır.'
      ] }
    ]
  },

  'Nüfus ve Göç': {
    intro: 'Nüfusun dağılışını etkileyen faktörler, nüfus piramitleri ve göç türleri.',
    parts: [
      { h: 'Nüfus', items: [
        'Dağılışı etkileyen doğal faktörler: iklim, yer şekilleri, su; beşeri faktörler: sanayi, ulaşım, ticaret.',
        '**Aritmetik nüfus yoğunluğu:** {nüfus/alan}. **Tarımsal yoğunluk:** {tarımla geçinen nüfus/tarım alanı}.',
        '**Nüfus piramitleri:** geniş tabanlı piramit genç nüfus ve yüksek doğum (az gelişmiş); dar tabanlı piramit yaşlı nüfus (gelişmiş).',
        'Nüfus artış hızı = doğum oranı − ölüm oranı (± göç).'
      ] },
      { h: 'Göç', items: [
        'Nedenler: itici (işsizlik, savaş, doğal afet) ve çekici (iş, eğitim, sağlık).',
        'Türleri: iç göç (köyden kente), dış göç, beyin göçü, mevsimlik göç.',
        'Türkiye’de 1950 sonrası tarımda makineleşme ile köyden kente göç hızlandı.'
      ] }
    ],
    traps: [
      'Aritmetik yoğunluğu düşük bir ülkenin tarımsal yoğunluğu yüksek olabilir (dağlık, çöl ülkeleri).'
    ]
  },

  'Yerleşme': {
    intro: 'Yerleşmelerin kuruluş yeri, fonksiyonları ve kır–kent yerleşmeleri.',
    parts: [
      { h: 'Konular', items: [
        'Kuruluşu etkileyen faktörler: su kaynakları, tarım alanları, ulaşım, savunma, iklim.',
        '**Toplu yerleşme:** evler bir arada (verimli ovalar, su kıtlığı olan yerler). **Dağınık yerleşme:** Karadeniz kıyıları (engebe, bol su).',
        '**Kır yerleşmeleri:** köy, mezra, yayla, kom, oba, ağıl, dalyan.',
        '**Şehir fonksiyonları:** sanayi, ticaret, turizm, liman, idari, kültürel (eğitim), dinî.',
        'Türkiye’de en yüksek yerleşmeler Doğu Anadolu’da, en alçak kıyılarda.'
      ] }
    ]
  },

  'Türkiye’nin Yer Şekilleri ve İklimi': {
    intro: 'Türkiye’nin dağları, ovaları, platoları, akarsu ve gölleri ile iklim özellikleri.',
    parts: [
      { h: 'Yer şekilleri', items: [
        'Ortalama yükselti yüksektir (yaklaşık 1130 m); batıdan doğuya yükselti artar.',
        'Kuzeyde Kuzey Anadolu Dağları, güneyde Toroslar kıyıya paraleldir; Ege’de dağlar kıyıya diktir.',
        'En yüksek dağ Ağrı Dağı; en büyük göl Van Gölü; tamamı yurt içinde en uzun akarsu Kızılırmak.',
        'Önemli ovalar: Çukurova, Konya, Bafra–Çarşamba (delta), Gediz–Büyük Menderes (graben).'
      ] },
      { h: 'İklim', items: [
        'Türkiye üç ana iklimin etkisindedir: Akdeniz, Karadeniz, karasal.',
        'En çok yağış Doğu Karadeniz (Rize), en az yağış İç Anadolu (Tuz Gölü çevresi) ve Iğdır.',
        'Kıyılardan içeriye doğru sıcaklık farkı ve karasallık artar.'
      ] }
    ]
  },

  'Ekonomik Faaliyetler': {
    intro: 'Tarım, hayvancılık, madencilik, sanayi ve hizmet sektörü. Ürünlerin yetiştiği bölgeler sorulur.',
    parts: [
      { h: 'Sektörler', items: [
        '**Birincil:** tarım, hayvancılık, ormancılık, balıkçılık, madencilik. **İkincil:** sanayi. **Üçüncül:** hizmet (ticaret, ulaşım, turizm).',
        'Gelişmiş ülkelerde hizmet sektörü, az gelişmiş ülkelerde tarım ağırlıklıdır.'
      ] },
      { h: 'Türkiye’de ürünler', items: [
        'Çay: Doğu Karadeniz (Rize). Fındık: Karadeniz (Ordu, Giresun). Pamuk: Çukurova, Ege, GAP.',
        'Zeytin: Ege ve Marmara kıyıları. Buğday: İç Anadolu. Turunçgiller: Akdeniz kıyıları.',
        'Büyükbaş hayvancılık: Doğu Anadolu ve Karadeniz; küçükbaş: İç ve Doğu Anadolu.'
      ] }
    ]
  },

  'Bölgeler ve Ulaşım': {
    intro: 'Bölge kavramı, bölge türleri ve ulaşım sistemleri.',
    parts: [
      { h: 'Bölgeler', items: [
        '**Bölge:** belirli özellikler bakımından benzerlik gösteren alan.',
        '**Doğal bölge:** iklim, bitki örtüsü, yer şekli bölgeleri. **Beşeri bölge:** nüfus, ekonomi, kültür bölgeleri. **Fonksiyonel bölge:** bir merkez etrafında (ticaret, liman hinterlandı).',
        'Türkiye 1941’de I. Coğrafya Kongresi’nde 7 bölgeye ayrıldı.'
      ] },
      { h: 'Ulaşım', items: [
        'Kara, deniz, hava, demir ve boru hattı ulaşımı.',
        'Deniz yolu en ucuz yük taşıma yoludur; hava yolu en hızlısıdır.',
        'Türkiye’de en yaygın ulaşım kara yoludur.'
      ] }
    ]
  },

  'Doğal Afetler': {
    intro: 'Deprem, heyelan, sel, çığ, erozyon gibi afetler ve Türkiye’deki dağılışları.',
    parts: [
      { h: 'Afetler', items: [
        '**Deprem:** Türkiye Alp–Himalaya kuşağında; Kuzey Anadolu, Doğu Anadolu ve Batı Anadolu fay hatları.',
        '**Heyelan:** en çok Karadeniz’de (eğim, killi toprak, bol yağış).',
        '**Sel:** sağanak yağış ve bitki örtüsünün tahribi; Karadeniz ve Akdeniz.',
        '**Çığ:** Doğu Anadolu ve Doğu Karadeniz’in yüksek, karlı yamaçları.',
        '**Erozyon:** İç Anadolu ve Güneydoğu’da bitki örtüsünün zayıf olduğu yerlerde.',
        '**Kuraklık, orman yangını:** Akdeniz kıyılarında yaz aylarında.'
      ] },
      { h: 'Korunma', items: [
        'Afet önceden tahmin edilemese de zararı azaltılabilir: depreme dayanıklı yapı, ağaçlandırma, taşkın setleri.',
        'AFAD, afet ve acil durum yönetiminden sorumlu kurumdur.'
      ] }
    ]
  }
};

export default L;
