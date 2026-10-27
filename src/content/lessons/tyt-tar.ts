import type { LessonSet } from './types';

const L: LessonSet = {
  'Tarih ve Zaman': {
    intro: 'Tarih biliminin tanımı, yöntemi, kaynakları ve takvimler. Kavram soruları gelir.',
    parts: [
      { h: 'Tarih bilimi', items: [
        'Tarih, geçmişteki olayları yer ve zaman göstererek, sebep–sonuç ilişkisi içinde, belgelere dayanarak inceler.',
        'Tarihte deney ve gözlem yapılamaz; olaylar tekrarlanmaz, kesin yargıya varılamaz.',
        '**Birinci el kaynak:** olayın yaşandığı döneme ait (kitabe, ferman, arkeolojik buluntu). **İkinci el:** sonradan yazılan (araştırma eserleri).',
        'Yardımcı bilimler: arkeoloji, paleografya (eski yazılar), epigrafya (kitabeler), nümismatik (paralar), diplomatik (resmi belgeler), kronoloji, heraldik (armalar).'
      ] },
      { h: 'Takvimler', items: [
        '**Hicri takvim:** Ay yılı (354 gün), Hicret (622) başlangıç. **Celali takvimi:** Güneş yılı, Büyük Selçuklu (Melikşah).',
        '**Rumi takvim:** Güneş yılı + Hicret başlangıcı; Osmanlı, 1839’dan sonra mali işlerde.',
        '**Miladi takvim:** Hz. İsa’nın doğumu başlangıç; Türkiye’de 1926’dan itibaren resmi.',
        '**12 Hayvanlı Türk takvimi:** Güneş yılına dayanır, her yıl bir hayvan adı taşır.'
      ] },
      { h: 'Tarih çağları', items: [
        'İlk Çağ: yazının bulunuşu (MÖ 3200, Sümerler) – Kavimler Göçü (375).',
        'Orta Çağ: 375 – İstanbul’un fethi (1453).',
        'Yeni Çağ: 1453 – Fransız İhtilali (1789). Yakın Çağ: 1789 – günümüz.'
      ] }
    ],
    traps: [
      'Çağlar Avrupa merkezlidir; Türk tarihi açısından farklı dönemlendirme yapılabilir.'
    ]
  },

  'İnsanlığın İlk Dönemleri': {
    intro: 'Tarih öncesi devirler ve İlk Çağ uygarlıkları: Mezopotamya, Mısır, Anadolu, İran, Hint, Çin, Yunan ve Roma.',
    parts: [
      { h: 'Tarih öncesi', items: [
        '**Paleolitik (Yontma Taş):** avcı–toplayıcı, mağara yaşamı, ateşin bulunması.',
        '**Neolitik (Cilalı Taş):** yerleşik hayat, tarım ve hayvancılık (Çatalhöyük, Göbeklitepe çevresi).',
        '**Maden Devri:** bakır → tunç → demir.'
      ] },
      { h: 'Uygarlıklar', items: [
        '**Sümerler:** yazıyı buldu (çivi yazısı), ziggurat, ilk yazılı kanunlar (Urukagina).',
        '**Babil:** Hammurabi Kanunları (kısasa kısas). **Asurlar:** ticaret kolonileriyle Anadolu’ya yazıyı getirdi.',
        '**Mısır:** hiyeroglif, piramitler, Güneş yılı takvimi, mumyacılık.',
        '**Hititler:** Anadolu’da ilk merkezi devlet; Kadeş Antlaşması (Mısır ile, MÖ 13. yüzyıl, bilinen ilk yazılı antlaşma); Pankuş meclisi.',
        '**Lidyalılar:** parayı ilk kullandılar; Kral Yolu. **Urartular:** su kanalları, maden işçiliği. **Frigler:** dokumacılık, Gordion.',
        '**Fenikeliler:** alfabeyi geliştirdi. **Yunanlar:** site (polis) yapısı, felsefe. **Roma:** hukuk (On İki Levha Kanunları).'
      ] }
    ],
    traps: [
      'Yazıyı bulan Sümerler, Anadolu’ya yazıyı getiren Asurlardır; ikisini karıştırma.'
    ]
  },

  'Orta Çağ’da Dünya': {
    intro: 'Kavimler Göçü’nden İstanbul’un fethine kadar Avrupa, Bizans ve diğer dünya. Feodalite ve Haçlı Seferleri öne çıkar.',
    parts: [
      { h: 'Avrupa', items: [
        '**Kavimler Göçü (375):** Hunların batıya ilerlemesiyle başladı; Roma bölündü (395), Batı Roma yıkıldı (476).',
        '**Feodalite:** merkezî otoritenin zayıflamasıyla toprak sahibi senyörlerin güçlenmesi; serfler toprağa bağlı köylüler.',
        'Kilise ve papalık güçlüydü; Skolastik düşünce hâkimdi.',
        '**Magna Carta (1215):** İngiltere’de kralın yetkilerini sınırlayan ilk belge.'
      ] },
      { h: 'Haçlı Seferleri (1096–1270)', items: [
        'Nedenler: dinî (Kudüs), ekonomik (Doğu’nun zenginlikleri), Bizans’ın yardım isteği.',
        'Sonuçlar: Kilisenin ve feodalitenin zayıflaması, Doğu–Batı ticaretinin canlanması, İtalyan şehirlerinin zenginleşmesi.'
      ] }
    ],
    traps: [
      'Doğu Roma (Bizans) 1453’e kadar yaşadı; Orta Çağ’ın sonu İstanbul’un fethidir.'
    ]
  },

  'İlk ve Orta Çağlarda Türk Dünyası': {
    intro: 'İslamiyet öncesi Türk devletleri ve kültürü. Asya Hun, Göktürk ve Uygurlar ile Türklerin devlet yönetimi, ekonomi ve inanç sistemi sık sorulur.',
    parts: [
      { h: 'Devletler', items: [
        '**Asya Hun:** bilinen ilk Türk devleti; Mete Han onlu sistemi (ordu) kurdu; Çin Seddi Hun akınlarına karşı yapıldı.',
        '**Kavimler Göçü ve Avrupa Hunları:** Balamir, Attila.',
        '**I. Göktürk:** “Türk” adıyla kurulan ilk devlet (Bumin Kağan, 552).',
        '**II. Göktürk (Kutluk):** Orhun Yazıtları (Kültigin, Bilge Kağan, Tonyukuk); ilk Türk alfabesiyle yazılmış ilk Türk tarihi belgeleri.',
        '**Uygurlar:** yerleşik hayata geçen ilk Türk devleti; Mani dini, matbaa, kâğıt, şehirler.'
      ] },
      { h: 'Kültür ve yönetim', items: [
        '**Kut anlayışı:** yönetme yetkisinin Gök Tanrı tarafından verildiği inancı.',
        '**Kurultay (toy):** devlet meselelerinin görüşüldüğü meclis.',
        '**İkili teşkilat:** ülke doğu (hükümdar) ve batı (yabgu) olarak yönetilir.',
        '**Töre:** yazısız hukuk kuralları; hükümdar da uyar.',
        '**Ekonomi:** hayvancılık temel; İpek Yolu ticareti önemli.',
        '**İnanç:** Gök Tanrı inancı; yuğ (cenaze töreni), balbal (öldürülen düşman sayısı kadar dikilen taş), kurgan (mezar).'
      ] }
    ],
    traps: [
      'İlk Türk devleti Asya Hun, “Türk” adını kullanan ilk devlet Göktürk, yerleşik hayata geçen ilk devlet Uygurdur.'
    ]
  },

  'İslam Medeniyetinin Doğuşu': {
    intro: 'İslamiyet’in doğuşu, Dört Halife, Emeviler ve Abbasiler dönemi.',
    parts: [
      { h: 'Hz. Muhammed dönemi', items: [
        'İlk vahiy 610’da Hira Mağarası’nda. **Hicret** (622): Mekke’den Medine’ye göç, hicri takvimin başlangıcı.',
        'Savaşlar: Bedir (624), Uhud (625), Hendek (627). **Hudeybiye Antlaşması** (628): Müslümanlar ilk kez siyasi olarak tanındı.',
        'Mekke’nin fethi (630); Veda Hutbesi (632).'
      ] },
      { h: 'Dört Halife, Emeviler, Abbasiler', items: [
        '**Dört Halife:** Hz. Ebubekir (Kur’an kitap hâline getirildi), Hz. Ömer (hicri takvim, divan teşkilatı, büyük fetihler), Hz. Osman (Kur’an çoğaltıldı), Hz. Ali (Cemel ve Sıffin olayları).',
        '**Emeviler (661–750):** saltanat sistemi, Arap milliyetçiliği (mevali), Kerbela olayı, İspanya’ya geçiş.',
        '**Abbasiler (750–1258):** Türklerle yakın ilişki; **Talas Savaşı** (751) Türklerin İslam’a geçişini hızlandırdı; Beytü’l-Hikme (Bağdat) bilim merkezi.'
      ] }
    ],
    traps: [
      'Hudeybiye Antlaşması bir savaş değil, barış antlaşmasıdır.'
    ]
  },

  'İlk Türk-İslam Devletleri': {
    intro: 'Karahanlılar, Gazneliler ve Büyük Selçuklu Devleti. Kültürel eserler ve Selçukluların savaşları sık sorulur.',
    parts: [
      { h: 'Karahanlılar ve Gazneliler', items: [
        '**Karahanlılar:** ilk Türk–İslam devleti (Satuk Buğra Han İslamiyet’i kabul etti). Eserleri: Kutadgu Bilig (Yusuf Has Hacip, ilk siyasetname), Divanü Lügati’t-Türk (Kaşgarlı Mahmut), Atabetü’l-Hakayık (Edip Ahmet).',
        '**Gazneliler:** Gazneli Mahmut Hindistan’a seferler düzenledi; “sultan” unvanını ilk kullanan Türk hükümdarı. Firdevsi’nin Şehname’si.'
      ] },
      { h: 'Büyük Selçuklu', items: [
        '**Dandanakan (1040):** Gaznelileri yendiler, devlet kuruldu.',
        '**Pasinler (1048):** Bizans ile ilk savaş.',
        '**Malazgirt (1071):** Alparslan, Bizans’ı yendi; Anadolu’nun kapıları açıldı.',
        'Melikşah döneminde en geniş sınırlar; vezir Nizamülmülk, Nizamiye medreseleri ve Siyasetname.',
        '**Katvan (1141)** yenilgisi ve **Haçlı Seferleri** ile zayıfladı; Sultan Sencer sonrası dağıldı.'
      ] }
    ],
    traps: [
      'Kutadgu Bilig ile Divanü Lügati’t-Türk karıştırılır: ilki siyasetname (Yusuf), ikincisi sözlük (Kaşgarlı Mahmut).'
    ]
  },

  'Selçuklu Türkiyesi': {
    intro: 'Anadolu’nun Türkleşmesi, Türkiye Selçuklu Devleti ve Anadolu beylikleri.',
    parts: [
      { h: 'Türkiye Selçukluları', items: [
        'Kurucu: Kutalmışoğlu Süleyman Şah (1075), başkent İznik, sonra Konya.',
        '**Miryokefalon (1176):** II. Kılıçarslan, Bizans’ı yendi; Bizans Türkleri Anadolu’dan çıkarma umudunu yitirdi.',
        'Altın çağ: I. Alaaddin Keykubat; Antalya ve Sinop’un alınmasıyla deniz ticareti, kervansaraylar.',
        '**Kösedağ (1243):** Moğollara yenilgi; devlet yıkılış sürecine girdi, beylikler dönemi başladı.'
      ] },
      { h: 'Birinci Beylikler Dönemi', items: [
        'Danişmentliler (Sivas, Tokat), Saltuklular (Erzurum), Mengücekliler (Erzincan, Divriği Ulu Camii), Artuklular (Diyarbakır), Çaka Beyliği (İzmir; ilk Türk donanması).'
      ] }
    ],
    traps: [
      'Malazgirt Büyük Selçuklu, Miryokefalon Türkiye Selçuklu zaferidir.'
    ]
  },

  'Beylikten Devlete Osmanlı': {
    intro: 'Osmanlı’nın kuruluşu, Rumeli’ye geçiş, Ankara Savaşı ve Fetret Devri.',
    parts: [
      { h: 'Kuruluş', items: [
        'Osman Bey (1299): Söğüt–Domaniç; Koyunhisar (Bafeus) Savaşı Bizans’la ilk savaş.',
        'Orhan Bey: Bursa’nın alınması, ilk düzenli ordu (yaya ve müsellem), ilk para, İznik’te ilk medrese; Çimpe Kalesi ile Rumeli’ye geçiş.',
        'I. Murat: Edirne’nin alınması, Yeniçeri Ocağı (pençik sistemi), I. Kosova Savaşı (1389).',
        'Yıldırım Bayezit: Niğbolu (1396), Anadolu Hisarı, İstanbul kuşatması.'
      ] },
      { h: 'Ankara Savaşı ve Fetret', items: [
        '**Ankara Savaşı (1402):** Yıldırım Bayezit, Timur’a yenildi; Anadolu Türk birliği bozuldu.',
        '**Fetret Devri (1402–1413):** şehzadeler arası taht mücadelesi; Çelebi Mehmet birliği sağladı.',
        'II. Murat: Varna (1444) ve II. Kosova (1448) zaferleri; Balkanlarda Türk egemenliği kesinleşti.'
      ] }
    ],
    traps: [
      'Ankara Savaşı’nı Osmanlı kaybetmiştir; Fetret Devri bu yenilginin sonucudur.'
    ]
  },

  'Dünya Gücü Osmanlı': {
    intro: 'İstanbul’un fethinden Kanuni dönemine kadar Osmanlı’nın yükselişi.',
    parts: [
      { h: 'Fatih ve II. Bayezit', items: [
        '**İstanbul’un fethi (1453):** Fatih Sultan Mehmet; Orta Çağ kapandı, Bizans sona erdi, Osmanlı imparatorluk oldu.',
        'Fatih: Kanunname-i Ali Osman, Topkapı Sarayı, Otlukbeli (1473, Akkoyunlular).'
      ] },
      { h: 'Yavuz ve Kanuni', items: [
        '**Yavuz Sultan Selim:** Çaldıran (1514, Safeviler), Mercidabık (1516) ve Ridaniye (1517, Memlükler); halifelik Osmanlı’ya geçti.',
        '**Kanuni Sultan Süleyman:** Belgrad (1521), Rodos (1522), **Mohaç (1526)** ile Macaristan, I. Viyana Kuşatması (1529).',
        '**Preveze (1538):** Barbaros Hayreddin Paşa, Haçlı donanmasını yendi; Akdeniz Türk gölü oldu.',
        'Fransa ile kapitülasyon görüşmeleri Kanuni döneminde başladı (1535); resmîleşmesi II. Selim dönemindedir (1569).'
      ] }
    ],
    traps: [
      'Halifelik Yavuz döneminde Mısır seferiyle Osmanlı’ya geçti, Kanuni döneminde değil.'
    ]
  },

  'Değişim Çağında Osmanlı ve Avrupa': {
    intro: 'Avrupa’daki Coğrafi Keşifler, Rönesans, Reform ve Osmanlı’nın duraklama ve gerileme dönemleri.',
    parts: [
      { h: 'Avrupa’da değişim', items: [
        '**Coğrafi Keşifler:** Ümit Burnu, Amerika; ticaret yolları Akdeniz’den okyanuslara kaydı.',
        '**Rönesans:** sanat ve bilimde yeniden doğuş (İtalya). **Reform:** Luther, Protestanlık; Kilisenin otoritesi sarsıldı.',
        '**Aydınlanma**, **Sanayi İnkılabı** (İngiltere, buhar makinesi) ve **Fransız İhtilali** (1789: milliyetçilik, eşitlik, özgürlük).'
      ] },
      { h: 'Osmanlı’da süreç', items: [
        '**Karlofça (1699):** ilk büyük toprak kaybı (Macaristan). II. Viyana Kuşatması (1683) yenilgisinin sonucu.',
        '**Lale Devri (1718–1730):** III. Ahmet, Nevşehirli Damat İbrahim Paşa; İbrahim Müteferrika ilk Türk matbaası.',
        '**Küçük Kaynarca (1774):** Kırım’ın bağımsızlığı; Rusya’ya Ortodoksları koruma hakkı.',
        '**Tanzimat Fermanı (1839):** kanun üstünlüğü, can ve mal güvenliği. **Islahat Fermanı (1856).**',
        '**Kanun-i Esasi (1876):** I. Meşrutiyet, ilk anayasa.'
      ] }
    ],
    traps: [
      'Islahatlarda ilk kez Batı’nın üstünlüğü kabul edildi: Lale Devri bu açıdan bir dönüm noktasıdır.'
    ]
  },

  'Milli Mücadele': {
    intro: 'Mondros’tan Lozan’a Kurtuluş Savaşı. Genelge ve kongreler, cepheler ve antlaşmalar her yıl sorulur.',
    parts: [
      { h: 'Hazırlık dönemi', items: [
        '**Mondros Ateşkesi (30 Ekim 1918):** 7. madde ile İtilaf Devletleri’ne her yeri işgal hakkı.',
        '**Samsun’a çıkış:** 19 Mayıs 1919.',
        '**Amasya Genelgesi:** “Milletin istiklalini yine milletin azim ve kararı kurtaracaktır.” Milli egemenlik vurgusu.',
        '**Erzurum Kongresi:** manda ve himaye ilk kez kesin olarak reddedildi; bölgesel toplandı, ulusal kararlar aldı.',
        '**Sivas Kongresi:** ulusal; cemiyetler birleştirildi; Heyet-i Temsiliye bütün yurdu temsil eder hâle geldi.',
        '**Misak-ı Milli** (Ocak 1920): son Osmanlı Mebusan Meclisi kabul etti.'
      ] },
      { h: 'TBMM ve cepheler', items: [
        '**TBMM:** 23 Nisan 1920’de açıldı.',
        '**Doğu:** Gümrü Antlaşması (1920), TBMM’nin ilk askeri ve siyasi başarısı.',
        '**Güney:** Kuva-yı Milliye direnişi (Maraş, Antep, Urfa); Ankara Antlaşması (1921, Fransa).',
        '**Batı:** I. İnönü (düzenli ordunun ilk zaferi), II. İnönü, Kütahya–Eskişehir, **Sakarya** (Mustafa Kemal’e Mareşal ve Gazi), **Büyük Taarruz** (26 Ağustos 1922).',
        '**Mudanya Ateşkesi** (11 Ekim 1922) ve **Lozan Barış Antlaşması** (24 Temmuz 1923).',
        '**Sevr** (Ağustos 1920): İstanbul Hükûmeti imzaladı, TBMM tanımadı, hiç uygulanmadı.'
      ] }
    ],
    traps: [
      'Erzurum Kongresi bölgesel toplandığı hâlde ulusal kararlar almıştır; Sivas ise toplanış ve kararlarıyla ulusaldır.',
      'Tekalif-i Milliye emirleri Sakarya’dan önce, Kütahya–Eskişehir yenilgisinden sonra çıkarıldı.'
    ]
  },

  'Atatürkçülük ve Türk İnkılabı': {
    intro: 'Cumhuriyet döneminde yapılan inkılaplar ve Atatürk ilkeleri. İnkılabı doğru ilkeyle eşleştirmek en çok sorulan beceridir.',
    parts: [
      { h: 'Siyasi inkılaplar', items: [
        'Saltanatın kaldırılması (1 Kasım 1922), Cumhuriyet’in ilanı (29 Ekim 1923), Halifeliğin kaldırılması (3 Mart 1924).',
        '1924 Anayasası; çok partili hayat denemeleri: Terakkiperver Cumhuriyet Fırkası (1924), Serbest Cumhuriyet Fırkası (1930).'
      ] },
      { h: 'Toplumsal ve hukuki inkılaplar', items: [
        'Tevhid-i Tedrisat (3 Mart 1924): öğretim birliği. Harf İnkılabı (1928), Millet Mektepleri.',
        'Şapka Kanunu ve tekke–zaviyelerin kapatılması (1925). Uluslararası takvim ve saat (1925–1926).',
        'Türk Medeni Kanunu (1926). Soyadı Kanunu (1934). Ölçü birimleri (1931).',
        'Kadınlara belediye seçimlerinde (1930) ve milletvekili seçimlerinde (1934) seçme–seçilme hakkı.',
        'Türk Tarih Kurumu (1931), Türk Dil Kurumu (1932), İstanbul Üniversitesi (1933).'
      ] },
      { h: 'İlkeler', items: [
        '**Cumhuriyetçilik:** milli egemenlik, seçimle yönetim. **Milliyetçilik:** birlik ve beraberlik, bağımsızlık.',
        '**Halkçılık:** eşitlik, ayrıcalıkların kaldırılması (aşar vergisinin kaldırılması). **Devletçilik:** ekonomide devletin yatırımcı olması.',
        '**Laiklik:** din ve devlet işlerinin ayrılması (halifelik, Tevhid-i Tedrisat). **İnkılapçılık:** yapılanları korumak ve geliştirmek.',
        'İlkeler 1937’de anayasaya girdi.'
      ] }
    ],
    traps: [
      'Bir inkılap birden fazla ilkeyle ilgili olabilir; soruda en doğrudan ilgili ilkeyi seç (Medeni Kanun → laiklik ve halkçılık).'
    ]
  }
};

export default L;
