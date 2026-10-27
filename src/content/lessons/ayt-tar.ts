import type { LessonSet } from './types';

const L: LessonSet = {
  'Tarih Bilimi ve İlk Çağ': {
    intro: 'Tarih biliminin yöntemi ile İlk Çağ uygarlıklarının siyasi, kültürel ve hukuki mirası. TYT bilgisi AYT’de daha ayrıntılı sorulur.',
    parts: [
      { h: 'Uygarlıklar ve mirasları', items: [
        '**Mezopotamya:** Sümer (yazı, ziggurat, Urukagina kanunları), Akad (ilk imparatorluk), Babil (Hammurabi), Asur (Ninova kütüphanesi).',
        '**Mısır:** hiyeroglif, Güneş takvimi, geometri ve tıp; firavun tanrı-kral sayılırdı.',
        '**Anadolu:** Hitit (Pankuş meclisi, Kadeş Antlaşması, tabletler), Frig, Lidya (para), Urartu, İyonya (felsefe ve bilimin doğduğu yer).',
        '**İran:** Persler; Kral Yolu (Sardes–Sus), satraplıklar.',
        '**Yunan:** Atina (demokrasi), Sparta (askerî yapı). **Roma:** cumhuriyet, On İki Levha Kanunları, hukuk sistemi.',
        '**Çin ve Hint:** kâğıt, pusula, barut (Çin); kast sistemi, Budizm (Hint).'
      ] }
    ],
    traps: [
      'İlk Çağ’da kanunlar genellikle tanrı buyruğu sayılırdı; Hititlerde ise kanunlar dünyevidir.'
    ]
  },

  'İlk ve Orta Çağlarda Türk Dünyası': {
    intro: 'İslamiyet öncesi Türk devletleri, devlet yapısı, ordu, ekonomi ve kültür. AYT’de TYT’den daha ayrıntılı ve yorum ağırlıklı.',
    parts: [
      { h: 'Devletler', items: [
        '**Asya Hun:** Mete Han (onlu teşkilat), Çin ile mücadele.',
        '**Avrupa Hun:** Attila; Margos (434) ve Anatolius (447) antlaşmaları; Kavimler Göçü.',
        '**Göktürk:** Bumin Kağan, İstemi Yabgu; Orhun Yazıtları (II. Göktürk).',
        '**Uygur:** Mani dini, yerleşik hayat, matbaa, kâğıt; Türk–Uygur alfabesi.',
        '**Diğer:** Avar, Hazar (Musevilik), Bulgar, Peçenek, Kuman–Kıpçak, Macar.'
      ] },
      { h: 'Devlet ve toplum', items: [
        '**Kut** ve töre; kurultay; ikili teşkilat; ülke hanedan üyelerinin ortak malı (veraset belirsizliği → taht kavgaları).',
        'Toplum: oguş (aile) → urug → boy → bodun → il (devlet).',
        'Ekonomi: hayvancılık, ticaret (İpek Yolu); savaşlar çoğu zaman ticaret yolları için.',
        'Ordu: süvarilerden oluşan, onlu sisteme dayanan düzenli ordu; “turan taktiği” (sahte geri çekilme).'
      ] }
    ]
  },

  'İslam Tarihi ve Türk-İslam Devletleri': {
    intro: 'İslam devletinin gelişimi, Türklerin İslamiyet’e geçişi ve Türk–İslam devletlerinin kültür ve medeniyeti.',
    parts: [
      { h: 'İslam tarihi', items: [
        'Dört Halife, Emeviler (Arap milliyetçiliği, mevali), Abbasiler (Türklerin orduda yükselmesi, Samerra şehri).',
        '**Talas Savaşı (751):** Abbasi–Türk ittifakı Çin’e karşı; Türklerin İslamiyet’e geçişi hızlandı, kâğıt İslam dünyasına geçti.',
        'Endülüs Emevileri: İspanya’da bilim ve kültür merkezi (Kurtuba).'
      ] },
      { h: 'Türk–İslam devletleri', items: [
        '**Tolunoğulları** ve **İhşidiler:** Mısır’da kurulan ilk Türk devletleri.',
        '**Karahanlılar:** ilk Türk–İslam devleti; Türkçe resmî dil.',
        '**Gazneliler:** Hindistan’a İslamiyet’in yayılması; Gazneli Mahmut, sultan unvanı.',
        '**Büyük Selçuklu:** Abbasi halifesinin koruyuculuğu (Tuğrul Bey, Bağdat seferi 1055), ikta sistemi, Nizamiye medreseleri.',
        '**Harzemşahlar**, **Eyyubiler** (Selahaddin Eyyubi, Kudüs), **Memlükler** (Moğolları Ayn Calut’ta durdurdu, 1260).'
      ] },
      { h: 'Kültür ve medeniyet', items: [
        '**İkta:** toprak gelirinin asker yetiştirme karşılığında verilmesi.',
        '**Divan teşkilatı:** vezir başkanlığında devlet işlerinin yürütülmesi.',
        'Bilim insanları: Farabi, İbn-i Sina (El-Kanun), Biruni, Harezmi (cebir), Uluğ Bey (astronomi).'
      ] }
    ]
  },

  'Selçuklu Türkiyesi': {
    intro: 'Türkiye Selçuklu Devleti’nin siyasi tarihi, Haçlı ve Moğollarla ilişkiler, kültür ve ekonomi.',
    parts: [
      { h: 'Siyasi', items: [
        'I. Kılıçarslan: I. Haçlı Seferi; başkent İznik’ten Konya’ya.',
        'II. Kılıçarslan: **Miryokefalon (1176)** → Anadolu kesin olarak Türk yurdu.',
        'I. Alaaddin Keykubat: Yassıçemen (1230, Harzemşahlar), Antalya–Alanya–Sinop limanları.',
        '**Kösedağ (1243):** Moğol egemenliği; ardından II. Beylikler Dönemi.',
        '**Babailer İsyanı (1240):** devletin zayıfladığının göstergesi.'
      ] },
      { h: 'Kültür ve ekonomi', items: [
        'Kervansaraylar (Sultan Han), ticaret sigortası, Ahilik teşkilatı (esnaf örgütü; Ahi Evran).',
        'Mimari: Divriği Ulu Camii (UNESCO), İnce Minareli Medrese, Karatay Medresesi.',
        'Mevlana Celaleddin Rumi, Yunus Emre, Hacı Bektaş-ı Veli; tasavvuf geleneği.'
      ] }
    ]
  },

  'Osmanlı Kuruluş ve Yükselme': {
    intro: 'Beylikten imparatorluğa Osmanlı: kuruluş, İstanbul’un fethi ve yükselme döneminin padişahları.',
    parts: [
      { h: 'Kuruluş', items: [
        'Osman Bey (Bafeus, 1302), Orhan Bey (Bursa, Maltepe/Pelekanon, Rumeli’ye geçiş), I. Murat (Edirne, Sırpsındığı, I. Kosova, Yeniçeri), Yıldırım Bayezit (Niğbolu, Ankara).',
        'Anadolu Türk birliği: Germiyan çeyiz yoluyla, Hamitoğulları satın alma yoluyla, Karamanoğulları savaşla.',
        'Fetret Devri sonrası II. Murat: Varna, II. Kosova.'
      ] },
      { h: 'Yükselme', items: [
        'Fatih: İstanbul (1453), Sırbistan, Mora, Bosna, Trabzon Rum İmparatorluğu, Otlukbeli, Kırım (Osmanlı himayesi).',
        'II. Bayezit: Cem Sultan olayı, ilk deniz zaferleri.',
        'Yavuz: Çaldıran, Turnadağ, Mercidabık, Ridaniye; halifelik.',
        'Kanuni: Belgrad, Rodos, Mohaç, Viyana, Preveze, Trablusgarp; İran ile Amasya Antlaşması (1555).',
        'Kanuni sonrası Sokullu Mehmet Paşa’nın Don–Volga ve Süveyş kanal projeleri.'
      ] }
    ],
    traps: [
      'Anadolu Türk birliği Fatih döneminde büyük ölçüde, Yavuz döneminde (Dulkadiroğulları) tamamen sağlandı.'
    ]
  },

  'Osmanlı Kültür ve Medeniyeti': {
    intro: 'Osmanlı devlet yönetimi, ordu, toprak düzeni, toplum yapısı, ekonomi ve hukuk.',
    parts: [
      { h: 'Devlet ve ordu', items: [
        '**Divan-ı Hümayun:** sadrazam, kazasker (yargı, eğitim), defterdar (maliye), nişancı (yazışma, tuğra), kaptan-ı derya, şeyhülislam.',
        '**Kapıkulu:** maaşlı merkez ordusu (Yeniçeri, Sipahi). **Tımarlı sipahi:** taşra ordusu.',
        '**Devşirme:** Hristiyan ailelerin çocuklarının devlete yetiştirilmesi; Enderun saray okulu.'
      ] },
      { h: 'Toprak ve ekonomi', items: [
        '**Tımar sistemi:** toprağın gelirine göre has (en büyük), zeamet, tımar.',
        'Miri arazi: mülkiyeti devlete ait toprak; reaya işler.',
        '**İltizam:** vergi toplama hakkının açık artırmayla satılması. **Malikâne:** ömür boyu iltizam.',
        'Lonca teşkilatı (esnaf), Ahilik geleneği, narh (fiyat belirleme).'
      ] },
      { h: 'Toplum ve hukuk', items: [
        'Yönetenler (askerî) ve yönetilenler (reaya); **millet sistemi:** dine göre örgütlenme.',
        'Hukuk: şer’i (İslam hukuku) ve örfi (padişah kanunnameleri).',
        'Eğitim: sıbyan mektebi, medrese (Süleymaniye), Enderun.'
      ] }
    ]
  },

  'Değişen Dünya Dengeleri ve Osmanlı': {
    intro: '17. ve 18. yüzyılda Osmanlı: duraklama, gerileme, ıslahat hareketleri ve Avrupa’daki gelişmeler.',
    parts: [
      { h: '17. yüzyıl', items: [
        '**Zitvatorok (1606):** Avusturya ile eşitlik; Osmanlı üstünlüğü sarsıldı.',
        'Kasr-ı Şirin (1639): İran sınırı büyük ölçüde bugünkü hâliyle çizildi.',
        'Köprülüler dönemi; II. Viyana Kuşatması (1683) yenilgisi, Kutsal İttifak.',
        '**Karlofça (1699):** ilk büyük toprak kaybı; **İstanbul Antlaşması (1700):** Azak Rusya’ya.',
        'Islahatçılar: II. Osman (ilk köklü ıslahat girişimi), IV. Murat (şiddet), Köprülüler.'
      ] },
      { h: '18. yüzyıl', items: [
        '**Prut (1711):** Rusya’ya karşı kazanılan son büyük zafer; Azak geri alındı.',
        '**Pasarofça (1718):** Lale Devri başladı; Batı’nın üstünlüğü kabul edildi, elçilikler açıldı.',
        '**Belgrat (1739):** Fransa aracılığı; kapitülasyonlar sürekli hâle geldi (1740).',
        '**Küçük Kaynarca (1774):** Kırım bağımsız; Rusya Ortodoksların koruyucusu; ilk kez savaş tazminatı.',
        '**Yaş (1792):** Kırım’ın Rusya’ya geçişi tanındı.',
        'III. Selim: **Nizam-ı Cedit** ordusu, ilk sürekli elçilikler.'
      ] }
    ]
  },

  'XIX. Yüzyılda Osmanlı ve Islahatlar': {
    intro: 'Milliyetçilik akımı, isyanlar, Tanzimat ve Islahat fermanları, Meşrutiyet ve 93 Harbi.',
    parts: [
      { h: 'İsyanlar ve sorunlar', items: [
        'Sırp (ilk milliyetçi isyan) ve Yunan isyanları; **Edirne Antlaşması (1829):** Yunanistan bağımsız.',
        '**Mısır sorunu:** Kavalalı Mehmet Ali Paşa; Hünkâr İskelesi (1833), Londra Konferansı (1840).',
        '**Boğazlar:** Londra Boğazlar Sözleşmesi (1841): savaş gemilerine kapalı.',
        '**Kırım Savaşı (1853–1856):** Paris Antlaşması; Osmanlı Avrupa devleti sayıldı; ilk dış borç (1854).',
        '**93 Harbi (1877–1878):** Ayastefanos ve Berlin antlaşmaları; Sırbistan, Karadağ, Romanya bağımsız.'
      ] },
      { h: 'Islahatlar', items: [
        'II. Mahmut: Yeniçeri Ocağı kaldırıldı (Vaka-i Hayriye, 1826), Asakir-i Mansure-i Muhammediye, ilk nüfus sayımı, Takvim-i Vekayi (ilk resmî gazete), nazırlıklar.',
        '**Tanzimat Fermanı (1839):** kanun üstünlüğü, can–mal–namus güvenliği, vergide adalet.',
        '**Islahat Fermanı (1856):** gayrimüslimlere geniş haklar.',
        '**I. Meşrutiyet (1876):** Kanun-i Esasi; Meclis-i Mebusan ve Ayan. II. Abdülhamit 1878’de meclisi kapattı.',
        'Düşünce akımları: Osmanlıcılık, İslamcılık, Türkçülük, Batıcılık.'
      ] }
    ]
  },

  'XX. Yüzyıl Başlarında Osmanlı': {
    intro: 'II. Meşrutiyet, Trablusgarp ve Balkan savaşları ile I. Dünya Savaşı.',
    parts: [
      { h: 'Savaşlar öncesi', items: [
        '**II. Meşrutiyet (1908):** İttihat ve Terakki’nin baskısıyla; 31 Mart Vakası (1909) ve II. Abdülhamit’in tahttan indirilmesi.',
        '**Trablusgarp Savaşı (1911–1912):** İtalya; Uşi Antlaşması, Kuzey Afrika’daki son toprak kaybedildi; On İki Ada İtalya’ya geçti.',
        '**Balkan Savaşları (1912–1913):** Edirne kaybedilip geri alındı; Batı Trakya kaybedildi.'
      ] },
      { h: 'I. Dünya Savaşı', items: [
        'Bloklar: İtilaf (İngiltere, Fransa, Rusya) – İttifak (Almanya, Avusturya-Macaristan, İtalya → sonra İtilaf’a geçti).',
        'Osmanlı Almanya safında; cepheler: Kafkas (Sarıkamış), Kanal, Irak (Kut’ül-Amare), **Çanakkale** (zafer, 1915), Suriye–Filistin, Hicaz–Yemen, Galiçya, Romanya, Makedonya.',
        'Gizli antlaşmalar: Sykes–Picot, St. Jean de Maurienne, İstanbul Antlaşması.',
        '**Mondros Ateşkesi (1918)** ile Osmanlı savaştan çekildi; Paris Barış Konferansı ve Wilson İlkeleri.'
      ] }
    ],
    traps: [
      'Çanakkale zaferi savaşın Osmanlı için sonucunu değiştirmedi ama Rusya’nın yardım almasını engelledi ve savaşı uzattı.'
    ]
  },

  'Milli Mücadele': {
    intro: 'Kurtuluş Savaşı’nın hazırlık, cepheler ve antlaşmalar dönemi; AYT’de neden–sonuç ve yorum ağırlıklı.',
    parts: [
      { h: 'Hazırlık', items: [
        'Cemiyetler: zararlı (Kürt Teali, Hürriyet ve İtilaf) ve yararlı (Müdafaa-i Hukuk, Redd-i İlhak).',
        'Havza Genelgesi (mitinglerle protesto), Amasya Genelgesi (milli egemenlik), Erzurum ve Sivas kongreleri, Amasya Görüşmeleri (İstanbul Hükûmeti Heyet-i Temsiliye’yi tanıdı).',
        'Son Osmanlı Mebusan Meclisi: Misak-ı Milli; ardından İstanbul’un resmen işgali (16 Mart 1920).'
      ] },
      { h: 'TBMM dönemi', items: [
        'TBMM’ye karşı ayaklanmalar; Hıyanet-i Vataniye Kanunu, İstiklal Mahkemeleri.',
        '**Teşkilat-ı Esasiye (1921):** ilk anayasa; milli egemenlik, güçler birliği.',
        'Moskova (1921) ve Kars (1921) antlaşmaları; Ankara Antlaşması (Fransa, 1921): TBMM’yi tanıyan ilk İtilaf devleti.',
        'Sakarya sonrası Mareşal ve Gazi; Büyük Taarruz; Mudanya; Lozan (kapitülasyonlar kaldırıldı, Musul ve Boğazlar sonraya kaldı).'
      ] }
    ]
  },

  'Atatürkçülük ve İnkılaplar': {
    intro: 'Cumhuriyet’in kuruluşu, inkılaplar ve Atatürk ilkeleri; Atatürk dönemi dış politika.',
    parts: [
      { h: 'İnkılaplar', items: [
        'Siyasi: saltanat, Cumhuriyet, halifelik, 1924 Anayasası, çok partili hayat denemeleri.',
        'Hukuk: Türk Medeni Kanunu (1926; İsviçre’den), Ceza (İtalya), Ticaret (Almanya) kanunları.',
        'Eğitim–kültür: Tevhid-i Tedrisat, Harf İnkılabı, Millet Mektepleri, TTK ve TDK, Üniversite Reformu (1933).',
        'Toplum: Şapka Kanunu, tekke ve zaviyeler, takvim–saat–ölçü, Soyadı Kanunu, kadın hakları.',
        'Ekonomi: İzmir İktisat Kongresi (1923), aşarın kaldırılması (1925), Teşvik-i Sanayi Kanunu (1927), I. Beş Yıllık Sanayi Planı (1934).'
      ] },
      { h: 'Dış politika', items: [
        'Musul sorunu (1926, İngiltere’ye bırakıldı), Yabancı okullar, Nüfus mübadelesi.',
        'Milletler Cemiyeti’ne üyelik (1932); Balkan Antantı (1934); **Montrö Boğazlar Sözleşmesi (1936):** Boğazlar Türkiye’nin denetiminde; Sadabat Paktı (1937).',
        '**Hatay:** 1939’da Türkiye’ye katıldı.'
      ] }
    ]
  },

  'İki Savaş Arası Dönem ve II. Dünya Savaşı': {
    intro: 'Totaliter rejimlerin yükselişi, 1929 Dünya Ekonomik Bunalımı ve II. Dünya Savaşı.',
    parts: [
      { h: 'İki savaş arası', items: [
        'İtalya’da faşizm (Mussolini), Almanya’da Nazizm (Hitler), SSCB’de komünizm (Stalin).',
        '**1929 Ekonomik Bunalımı:** ABD’de başladı; Türkiye’de devletçilik politikasını hızlandırdı.',
        'Japonya’nın Mançurya’yı, İtalya’nın Habeşistan’ı işgali; Milletler Cemiyeti etkisiz kaldı.'
      ] },
      { h: 'II. Dünya Savaşı (1939–1945)', items: [
        'Almanya’nın Polonya’ya saldırısıyla başladı. Mihver (Almanya, İtalya, Japonya) – Müttefikler (İngiltere, Fransa, SSCB, ABD).',
        'Pearl Harbor (1941) ile ABD savaşa girdi. Stalingrad ve Normandiya dönüm noktalarıdır.',
        'Hiroşima ve Nagasaki’ye atom bombası (1945), Japonya teslim oldu.',
        'Türkiye savaşa girmedi; denge politikası izledi, savaşın sonunda (Şubat 1945) Almanya ve Japonya’ya sembolik savaş ilan etti.',
        'Sonuçlar: Birleşmiş Milletler (1945), iki kutuplu dünya, sömürgeciliğin sona ermeye başlaması.'
      ] }
    ]
  },

  'Soğuk Savaş ve Yumuşama Dönemi': {
    intro: '1945 sonrası ABD–SSCB rekabeti, bloklar, Türkiye’nin Batı ile ilişkileri ve yumuşama.',
    parts: [
      { h: 'Soğuk Savaş', items: [
        'Truman Doktrini (1947) ve Marshall Planı: Türkiye’ye askerî ve ekonomik yardım.',
        'NATO (1949) – Varşova Paktı (1955). Türkiye Kore Savaşı’na asker gönderdi, 1952’de NATO’ya girdi.',
        'Berlin Duvarı (1961), Küba Füze Krizi (1962) ve Jüpiter füzelerinin Türkiye’den çekilmesi.',
        'Türkiye’de çok partili hayat: 1946 seçimleri, 1950’de Demokrat Parti iktidarı.'
      ] },
      { h: 'Yumuşama ve sonrası', items: [
        'Silahsızlanma antlaşmaları (SALT), Helsinki Nihai Senedi (1975).',
        'Kıbrıs: 1974 Barış Harekâtı; 1983’te KKTC.',
        'Berlin Duvarı’nın yıkılması (1989), SSCB’nin dağılması (1991): Soğuk Savaş’ın sonu.'
      ] }
    ]
  },

  'Küreselleşen Dünya': {
    intro: 'Soğuk Savaş sonrası dünya, küreselleşme, terör, bölgesel çatışmalar ve Türkiye.',
    parts: [
      { h: 'Konular', items: [
        'SSCB sonrası bağımsız Türk cumhuriyetleri; Türkiye onları ilk tanıyan ülke oldu.',
        'Avrupa Birliği: Maastricht (1992). Türkiye 1987’de tam üyelik başvurusu, 1999’da adaylık.',
        'Bölgesel çatışmalar: Körfez Savaşı (1991), Bosna (1992–1995), Kosova, 11 Eylül (2001), Irak işgali (2003).',
        'Küreselleşme: internet, ulus ötesi şirketler, serbest ticaret; kültürel etkileşim ve yerel kültürlerin korunması sorunu.',
        'Küresel sorunlar: iklim değişikliği, göç, salgın hastalıklar, terör.'
      ] }
    ]
  }
};

export default L;
