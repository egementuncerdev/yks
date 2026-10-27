import type { LessonSet } from './types';

const L: LessonSet = {
  'Anlam Bilgisi': {
    intro: 'AYT edebiyatın ilk bölümünde sözcük, cümle ve paragraf anlamı yeniden sorulur; özellikle şiir ve edebi metin üzerinden yorum.',
    parts: [
      { h: 'Bilmen gerekenler', items: [
        'Sözcükte anlam: gerçek, yan, mecaz, terim anlam; deyim ve atasözü.',
        'Cümlede anlam: neden–sonuç, amaç–sonuç, koşul, öznel–nesnel yargı, örtülü anlam.',
        'Paragrafta anlam: ana düşünce, yardımcı düşünce, anlatım biçimleri (açıklama, tartışma, betimleme, öyküleme) ve düşünceyi geliştirme yolları (tanımlama, örneklendirme, karşılaştırma, tanık gösterme, sayısal verilerden yararlanma).',
        'Şiir yorumlarında temaya ve şairin duygusuna odaklan: özlem, gurbet, aşk, ölüm, doğa.',
        '**Anlatıcı ve bakış açısı:** ilahi (hâkim), kahraman, gözlemci.'
      ] }
    ],
    traps: [
      'Şiirde dizelerdeki kelimeler mecaz anlamda kullanılabilir; gerçek anlamla yorum yapma.'
    ]
  },

  'Şiir Bilgisi: Ölçü, Kafiye, Nazım Biçimleri': {
    intro: 'Şiirin ölçüsü (hece, aruz, serbest), kafiye ve redif, nazım birimi ve nazım biçimleri.',
    parts: [
      { h: 'Ölçü', items: [
        '**Hece ölçüsü:** dizelerdeki hece sayısının eşitliği. Halk şiirinde 7’li ve 11’li (6+5, 4+4+3) yaygın; durak dizeyi bölümlere ayırır.',
        '**Aruz:** hecelerin açık–kapalı (uzun–kısa) olmasına dayanır; Divan şiirinde. Ulama, imale, zihaf aruz kusurları/kolaylıklarıdır.',
        '**Serbest şiir:** ölçü ve kafiye zorunluluğu yok (Nazım Hikmet, Garip, İkinci Yeni).'
      ] },
      { h: 'Kafiye ve redif', items: [
        '**Redif:** dize sonlarında tekrarlanan aynı görevli ek ya da sözcük. Önce redifi ayır, kalan benzer sesler kafiyedir.',
        '**Yarım kafiye:** tek ses benzerliği. **Tam kafiye:** iki ses. **Zengin kafiye:** üç ve daha fazla ses. **Cinaslı kafiye:** yazılışı aynı, anlamı farklı sözcükler.',
        '**Kafiye şeması:** düz (aaaa), çapraz (abab), sarma (abba), mani tipi (aaxa).'
      ] },
      { h: 'Nazım birimi ve biçimleri', items: [
        'Beyit (2 dize), dörtlük (4 dize), bent (dize sayısı değişken).',
        'Halk: mani, türkü, koşma, semai, varsağı, destan. Divan: gazel, kaside, mesnevi, rubai, tuyuğ, şarkı, murabba, terkib-i bent, terci-i bent.',
        'Batı’dan: sone (4+4+3+3), terzarima.'
      ] }
    ],
    traps: [
      'Redif ek de olabilir: “gözlerim – sözlerim” → “-lerim” rediftir, “öz” kafiyedir.'
    ],
    example: {
      q: '“Gönlümü sende bıraktım / Yollarını hep gözledim” dizelerinde ölçü nedir?',
      a: 'Hecele: Gön-lü-mü sen-de bı-rak-tım → 8 hece; Yol-la-rı-nı hep göz-le-dim → 8 hece. Hece ölçüsünün 8’li kalıbı.'
    }
  },

  'Söz Sanatları': {
    intro: 'Şiirde anlamı güçlendiren edebi sanatlar. Dizelerde hangi sanatın bulunduğu ya da bulunmadığı sorulur.',
    parts: [
      { h: 'Anlamla ilgili sanatlar', items: [
        '**Teşbih (benzetme):** benzeyen, benzetilen, benzetme yönü, benzetme edatı (gibi). Yalnız benzeyen ve benzetilen varsa teşbih-i beliğ (“Gönlüm bir kuştu”).',
        '**İstiare:** yalnız bir öge kullanılan benzetme. Açık istiare (yalnız benzetilen), kapalı istiare (yalnız benzeyen + benzetilenin özelliği).',
        '**Teşhis (kişileştirme):** insan dışındaki varlıklara insan özelliği verme. **İntak:** konuşturma.',
        '**Mecaz-ı mürsel (ad aktarması):** benzetme amacı olmadan bir sözü başka söz yerine kullanma (“Bütün İstanbul ayaktaydı”).',
        '**Kinaye:** sözü hem gerçek hem mecaz anlamı düşünülecek biçimde kullanma; asıl kastedilen mecazdır.',
        '**Tevriye:** birden çok anlamlı sözcüğün uzak anlamını kastetme.'
      ] },
      { h: 'Diğer sanatlar', items: [
        '**Mübalağa (abartma), tezat (karşıtlık), tenasüp (anlamca ilgili sözcükler), tecahül-i arif (bilmezden gelme), hüsn-i talil (güzel nedene bağlama), telmih (ünlü bir olaya gönderme), irsal-i mesel (atasözü kullanma), istifham (soru sorma), nida (seslenme), cinas (sesteş sözcükler), aliterasyon (ünsüz tekrarı), asonans (ünlü tekrarı).**'
      ] }
    ],
    traps: [
      'Teşhis ile istiare iç içedir: kişileştirmede çoğu zaman kapalı istiare de vardır.'
    ],
    example: {
      q: '“Ağlarım hatıra geldikçe gülüştüklerimiz” dizesinde hangi sanat vardır?',
      a: '“Ağlamak” ile “gülüşmek” karşıt anlamlıdır: tezat.'
    }
  },

  'Edebi Türler: Hikâye, Roman, Tiyatro': {
    intro: 'Olay çevresinde gelişen türler: hikâye, roman, masal, fabl, destan ve tiyatro türleri.',
    parts: [
      { h: 'Anlatmaya bağlı türler', items: [
        '**Hikâye:** tek olay, az kişi; **olay hikâyesi** (Maupassant tarzı: giriş–gelişme–sonuç, Ömer Seyfettin) ve **durum hikâyesi** (Çehov tarzı: kesit, Sait Faik).',
        '**Roman:** uzun, birden çok olay; ögeleri: olay örgüsü, kişiler, zaman, mekân, anlatıcı.',
        '**Masal:** olağanüstü, zaman–mekân belirsiz, tekerlemeyle başlar. **Fabl:** hayvan kahramanlar, ders verir (La Fontaine).',
        '**Destan:** milletin hayatını derinden etkileyen olaylar; doğal (anonim) ve yapma destan.'
      ] },
      { h: 'Göstermeye bağlı türler', items: [
        '**Trajedi:** acıklı, soylu kahramanlar, üç birlik kuralı (zaman, yer, olay).',
        '**Komedi:** gülünç; karakter, töre ve entrika komedisi.',
        '**Dram:** trajedi ile komedinin karışımı; romantizmle doğdu.',
        '**Geleneksel Türk tiyatrosu:** Karagöz (gölge oyunu), ortaoyunu, meddah.'
      ] }
    ]
  },

  'Öğretici Metinler': {
    intro: 'Bilgi vermeyi amaçlayan düzyazı türleri: makale, deneme, fıkra, sohbet, eleştiri, gezi yazısı, anı, biyografi, otobiyografi, günlük, mektup.',
    parts: [
      { h: 'Türler', items: [
        '**Makale:** bir düşünceyi kanıtlarla savunur; ciddi, nesnel dil.',
        '**Deneme:** kesin yargıya varmadan kişisel düşünceleri sohbet havasında anlatır (Montaigne; Türkçede Nurullah Ataç).',
        '**Fıkra (köşe yazısı):** günlük olayları kısa yorumlar.',
        '**Sohbet (söyleşi):** okuyucuyla konuşur gibi, kolay anlaşılır.',
        '**Eleştiri:** bir eseri inceleyip değerlendirir.',
        '**Gezi yazısı:** gezilip görülen yerler. **Anı (hatıra):** yazarın yaşadıkları. **Biyografi:** başkasının hayatı. **Otobiyografi:** kendi hayatı. **Günlük:** tarih atılarak, günü gününe. **Mektup**, **röportaj**, **mülakat** (bir kişiyle görüşme).'
      ] }
    ],
    traps: [
      'Makale kesin yargı bildirir ve kanıtlar; deneme kanıtlama amacı taşımaz.'
    ]
  },

  'İslamiyet Öncesi ve Geçiş Dönemi Türk Edebiyatı': {
    intro: 'Sözlü edebiyat ürünleri, yazılı ilk eserler ve İslamiyet’e geçiş dönemi eserleri.',
    parts: [
      { h: 'Sözlü edebiyat', items: [
        'Törenlerde (sığır, şölen, yuğ) söylenirdi; ozan, kam, baksı gibi kişiler.',
        '**Koşuk:** sığır ve şölenlerde söylenen lirik şiir. **Sagu:** yuğ (cenaze) töreninde söylenen ağıt. **Sav:** atasözü.',
        'Destanlar: Alp Er Tunga, Şu, Oğuz Kağan (Hun), Bozkurt ve Ergenekon (Göktürk), Türeyiş ve Göç (Uygur).'
      ] },
      { h: 'Yazılı ve geçiş dönemi', items: [
        '**Orhun (Göktürk) Yazıtları:** ilk yazılı Türk edebiyatı örnekleri (Kültigin, Bilge Kağan, Tonyukuk).',
        '**Kutadgu Bilig** (Yusuf Has Hacip, 1069): ilk siyasetname, mesnevi biçiminde, aruzla.',
        '**Divanü Lügati’t-Türk** (Kaşgarlı Mahmut): Türkçe–Arapça sözlük.',
        '**Atabetü’l-Hakayık** (Edip Ahmet): öğretici. **Divan-ı Hikmet** (Ahmet Yesevi): tasavvufi hikmetler, hece ölçüsüyle.',
        '**Dede Korkut Hikâyeleri:** destandan halk hikâyesine geçiş.'
      ] }
    ],
    traps: [
      'Kutadgu Bilig aruzla, Divan-ı Hikmet heceyle yazılmıştır.'
    ]
  },

  'Halk Edebiyatı': {
    intro: 'Anonim halk edebiyatı, âşık edebiyatı ve tekke–tasavvuf edebiyatı; temsilcileri ve nazım biçimleri.',
    parts: [
      { h: 'Üç kol', items: [
        '**Anonim:** söyleyeni belli değil; mani, türkü, ninni, ağıt, masal, bilmece, tekerleme.',
        '**Âşık edebiyatı:** saz şairleri; koşma, semai, varsağı, destan. Temsilciler: Karacaoğlan (doğa, aşk; 17. yy), Köroğlu, Pir Sultan Abdal, Dadaloğlu (destan), Âşık Veysel (20. yy), Gevheri, Erzurumlu Emrah, Âşık Ömer.',
        '**Tekke–tasavvuf:** ilahi, nefes (Bektaşi), nutuk, devriye, şathiye. Temsilciler: Yunus Emre (13. yy), Kaygusuz Abdal, Hacı Bayram Veli, Niyazi Mısri.'
      ] },
      { h: 'Özellikler', items: [
        'Hece ölçüsü, dörtlük nazım birimi, genellikle yarım kafiye.',
        'Sade dil; son dörtlükte şairin adı geçer (**tapşırma**).',
        '**Halk hikâyeleri:** aşk (Kerem ile Aslı, Leyla ile Mecnun’un halk versiyonu) ve kahramanlık (Köroğlu).'
      ] }
    ],
    traps: [
      'Yunus Emre tekke şairidir, âşık edebiyatı temsilcisi değildir.'
    ]
  },

  'Divan Edebiyatı': {
    intro: 'Arap ve Fars edebiyatı etkisinde, saray çevresinde gelişen yazılı edebiyat. Nazım biçimleri ve yüzyıllara göre şairler sorulur.',
    parts: [
      { h: 'Özellikler ve biçimler', items: [
        'Aruz ölçüsü, beyit nazım birimi, ağır Arapça–Farsça sözcükler, mazmunlar.',
        '**Gazel:** aşk ve şarap konulu, 5–15 beyit; ilk beyit matla, son beyit makta (mahlas geçer); en güzel beyit beytü’l-gazel.',
        '**Kaside:** din ve devlet büyüklerini öven, 33–99 beyit; bölümleri: nesib, girizgâh, methiye, fahriye, dua.',
        '**Mesnevi:** her beyit kendi içinde kafiyeli (aa, bb, cc); uzun hikâyeler. **Hamse:** beş mesneviden oluşan dizi.',
        '**Rubai:** 4 dizelik, aaxa, felsefi; Hayyam. **Tuyuğ:** Türklere özgü dört dize. **Şarkı:** bestelenmek için, nakaratlı. **Murabba**, **terkib-i bent**, **terci-i bent**.'
      ] },
      { h: 'Şairler', items: [
        '**14–15. yy:** Nesimi, Ahmedi, Şeyhi (Harnâme, ilk fabl), Süleyman Çelebi (Mevlid), Ali Şir Nevai (Muhakemetü’l-Lugateyn).',
        '**16. yy:** Fuzuli (Leyla ile Mecnun, Şikâyetname, lirizm), Baki (sultanü’ş-şuara, Kanuni Mersiyesi).',
        '**17. yy:** Nefi (kaside ve hiciv: Siham-ı Kaza), Nabi (Hayriye, didaktik), Şeyhülislam Yahya.',
        '**18. yy:** Nedim (Lale Devri, mahallileşme, şarkı), Şeyh Galip (Hüsn ü Aşk, sebk-i Hindi).',
        '**Düzyazı:** Evliya Çelebi (Seyahatname), Katip Çelebi (Keşfü’z-Zunun), Sinan Paşa (Tazarrunâme), Mercimek Ahmet (Kabusname çevirisi).'
      ] }
    ],
    traps: [
      'Mesnevide kafiye beyit içindedir (aa, bb); gazelde ilk beytin dizeleri ve sonraki beyitlerin ikinci dizeleri kafiyelidir (aa, ba, ca).'
    ]
  },

  'Tanzimat Edebiyatı': {
    intro: 'Batılılaşmanın başladığı dönem (1860–1896). İlk eserler, sanat anlayışları ve yazarlar sorulur.',
    parts: [
      { h: 'Birinci kuşak (toplum için sanat)', items: [
        '**Şinasi:** Agâh Efendi ile ilk özel Türkçe gazete Tercüman-ı Ahval’i çıkardı (1860), ardından Tasvir-i Efkâr’ı; ilk yerli tiyatro (Şair Evlenmesi), ilk makale (Mukaddime), ilk çeviri şiirler.',
        '**Namık Kemal:** “vatan şairi”; İntibah (ilk edebi roman), Cezmi (ilk tarihî roman), Vatan yahut Silistre (tiyatro).',
        '**Ziya Paşa:** Terkib-i Bent, Harabat (antoloji), “Şiir ve İnşa” makalesi.',
        '**Ahmet Mithat Efendi:** halkı eğitmek için çok sayıda roman (Felatun Bey ile Rakım Efendi).',
        '**Şemsettin Sami:** Taaşşuk-ı Talat ve Fitnat (ilk yerli roman), Kamus-ı Türki.'
      ] },
      { h: 'İkinci kuşak (sanat için sanat)', items: [
        '**Recaizade Mahmut Ekrem:** Araba Sevdası (ilk realist roman), Talim-i Edebiyat.',
        '**Abdülhak Hamit Tarhan:** “şair-i azam”; Makber, Sahra (ilk pastoral), Eşber.',
        '**Samipaşazade Sezai:** Sergüzeşt (romantizmden realizme geçiş). **Nabizade Nazım:** Zehra (ilk psikolojik roman denemesi), Karabibik (ilk köy romanı).'
      ] }
    ],
    traps: [
      'İlk yerli roman Taaşşuk-ı Talat ve Fitnat, ilk edebi roman İntibah, ilk realist roman Araba Sevdası’dır.'
    ]
  },

  'Servet-i Fünun ve Fecr-i Âti': {
    intro: 'Servet-i Fünun dergisi çevresindeki “sanat için sanat” topluluğu (1896–1901) ve ardından gelen Fecr-i Âti (1909).',
    parts: [
      { h: 'Servet-i Fünun', items: [
        'Ağır, süslü dil; aruz ve serbest müstezat; konu bütünlüğü; karamsarlık ve hayal–hakikat çatışması.',
        '**Tevfik Fikret:** Rübab-ı Şikeste, Sis, Haluk’un Defteri.',
        '**Cenap Şahabettin:** sembolizm etkisi, Hac Yolunda (gezi).',
        '**Halit Ziya Uşaklıgil:** Batılı roman tekniğini Türk edebiyatına yerleştiren yazar; Aşk-ı Memnu, Mai ve Siyah, Kırık Hayatlar.',
        '**Mehmet Rauf:** Eylül (ilk psikolojik roman). **Hüseyin Cahit Yalçın**.'
      ] },
      { h: 'Fecr-i Âti', items: [
        '“Sanat şahsi ve muhteremdir.” Bildirisi olan ilk edebi topluluk.',
        '**Ahmet Haşim:** sembolist şiir (Piyale, Göl Saatleri), “Şiir Hakkında Bazı Mülahazalar”.',
        'Diğerleri: Emin Bülent, Refik Halit Karay (sonra Milli Edebiyata geçti), Yakup Kadri (başlangıçta).'
      ] }
    ],
    traps: [
      'Ahmet Haşim Fecr-i Âti’nin içinde yetişmiş ama hiçbir topluluğa bağlı kalmamış bir şairdir.'
    ]
  },

  'Milli Edebiyat': {
    intro: 'Genç Kalemler dergisiyle (1911) başlayan, sade Türkçeyi ve milli konuları savunan dönem.',
    parts: [
      { h: 'Özellikler', items: [
        'Sade dil (“Yeni Lisan” makalesi, Ömer Seyfettin), hece ölçüsü, halk ve Anadolu konuları.',
        '**Ömer Seyfettin:** olay hikâyesinin ustası (Kaşağı, Forsa, Pembe İncili Kaftan).',
        '**Ziya Gökalp:** Türkçülüğün Esasları, Kızıl Elma.',
        '**Mehmet Akif Ersoy:** Safahat, İstiklal Marşı; aruzla, konuşma diliyle (Milli Edebiyat dışında, İslamcı).',
        '**Yahya Kemal Beyatlı:** aruzla, Türk zevkine uygun; Kendi Gök Kubbemiz.',
        '**Halide Edip Adıvar:** Ateşten Gömlek, Sinekli Bakkal, Vurun Kahpeye.',
        '**Reşat Nuri Güntekin:** Çalıkuşu, Yeşil Gece. **Yakup Kadri Karaosmanoğlu:** Yaban, Kiralık Konak, Sodom ve Gomore. **Refik Halit Karay:** Memleket Hikâyeleri.',
        '**Beş Hececiler:** Faruk Nafiz Çamlıbel (Han Duvarları), Enis Behiç, Halit Fahri, Orhan Seyfi, Yusuf Ziya.'
      ] }
    ],
    traps: [
      'Mehmet Akif ve Yahya Kemal aruzu kullanmışlardır; ikisi de Milli Edebiyat anlayışının dışında kalmış güçlü şairlerdir.'
    ]
  },

  'Cumhuriyet Dönemi Şiiri': {
    intro: 'Cumhuriyet sonrası şiir akımları: öz şiir, toplumcu şiir, Garip, İkinci Yeni, Hisarcılar ve diğerleri.',
    parts: [
      { h: 'Akımlar ve şairler', items: [
        '**Öz (saf) şiir:** Ahmet Hamdi Tanpınar, Ahmet Muhip Dıranas, Cahit Sıtkı Tarancı (“Otuz Beş Yaş”).',
        '**Toplumcu gerçekçi:** Nazım Hikmet (serbest şiir, Memleketimden İnsan Manzaraları), Enver Gökçe, Ahmed Arif (Hasretinden Prangalar Eskittim).',
        '**Garip (I. Yeni, 1941):** Orhan Veli Kanık, Oktay Rifat, Melih Cevdet Anday; şairanelik, ölçü ve kafiye reddedildi, sıradan insan.',
        '**İkinci Yeni (1950’ler):** Cemal Süreya, Edip Cansever, Turgut Uyar, İlhan Berk, Ece Ayhan, Sezai Karakoç; anlam kapalılığı, imge.',
        '**Hisarcılar:** gelenekle bağ (Munis Faik Ozansoy, Yahya Kemal’e yakın).',
        '**Milli–dinî duyarlılık:** Necip Fazıl Kısakürek (Çile), Sezai Karakoç, Arif Nihat Asya, Bahattin Karakoç.',
        '**Bağımsızlar:** Attilâ İlhan (Maviciler), Fazıl Hüsnü Dağlarca, Behçet Necatigil.'
      ] }
    ],
    traps: [
      'Garip şiiri sade ve anlaşılır, İkinci Yeni ise kapalı ve imgelidir; ikisini karıştırma.'
    ]
  },

  'Cumhuriyet Dönemi Roman ve Hikâyesi': {
    intro: 'Cumhuriyet sonrası roman ve hikâyenin gelişimi: milli mücadele, köy, toplumcu, bireyin iç dünyası ve postmodern anlatılar.',
    parts: [
      { h: 'Yazarlar ve eserler', items: [
        '**Milli Mücadele romanı:** Halide Edip (Ateşten Gömlek), Yakup Kadri (Yaban), Tarık Buğra (Küçük Ağa).',
        '**Köy romanı:** Mahmut Makal (Bizim Köy), Fakir Baykurt (Yılanların Öcü), Kemal Tahir, Orhan Kemal, Yaşar Kemal (İnce Memed).',
        '**Toplumcu gerçekçi:** Sabahattin Ali (Kuyucaklı Yusuf, Kürk Mantolu Madonna), Sadri Ertem.',
        '**Bireyin iç dünyası:** Ahmet Hamdi Tanpınar (Huzur, Saatleri Ayarlama Enstitüsü), Peyami Safa (Dokuzuncu Hariciye Koğuşu, Fatih–Harbiye), Yusuf Atılgan (Anayurt Oteli), Oğuz Atay (Tutunamayanlar).',
        '**Hikâye:** Sait Faik Abasıyanık (Semaver, durum hikâyesi), Memduh Şevket Esendal, Haldun Taner, Sabahattin Ali, Füruzan.',
        '**Kadın yazarlar:** Adalet Ağaoğlu, Sevgi Soysal, Leyla Erbil, Tomris Uyar.',
        '**Postmodern:** Orhan Pamuk (Kara Kitap, Benim Adım Kırmızı; Nobel 2006).'
      ] }
    ],
    traps: [
      'Sait Faik durum hikâyesinin, Ömer Seyfettin olay hikâyesinin temsilcisidir.'
    ]
  },

  'Edebi Akımlar ve Dünya Edebiyatı': {
    intro: 'Klasisizmden postmodernizme Batı edebiyatı akımları ve temsilcileri.',
    parts: [
      { h: 'Akımlar', items: [
        '**Klasisizm (17. yy Fransa):** akıl, sağduyu, antik örnekler. Molière, Racine, Corneille, La Fontaine, Boileau.',
        '**Romantizm (19. yy):** duygu, hayal, doğa, bireysellik. Victor Hugo (Sefiller), Goethe, Lamartine, Puşkin.',
        '**Realizm:** gerçeği olduğu gibi yansıtma, gözlem. Balzac, Flaubert (Madam Bovary), Stendhal, Tolstoy, Dostoyevski.',
        '**Natüralizm:** realizmin bilimsel yöntemle sertleştirilmiş hâli, çevre ve kalıtım. Émile Zola (Germinal).',
        '**Parnasizm:** şiirde biçim mükemmelliği. Leconte de Lisle. **Sembolizm:** şiirde müzikalite, telkin. Baudelaire, Verlaine, Mallarmé, Rimbaud.',
        '**20. yy:** empresyonizm, ekspresyonizm, sürrealizm (André Breton), egzistansiyalizm (Sartre, Camus), bilinç akışı (Joyce, Virginia Woolf), postmodernizm.'
      ] }
    ]
  }
};

export default L;
