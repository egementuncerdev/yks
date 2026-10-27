import type { LessonSet } from './types';

const L: LessonSet = {
  'Ekosistemler ve Madde Döngüleri': {
    intro: 'Ekosistemin bileşenleri, biyomlar, enerji akışı ve madde döngüleri (su, karbon, azot, oksijen).',
    parts: [
      { h: 'Ekosistem', items: [
        'Cansız (abiyotik) ve canlı (biyotik) bileşenler; üretici, tüketici, ayrıştırıcı.',
        'Enerji akışı tek yönlü, madde döngüsü çevrimseldir.',
        '**Biyomlar:** tropikal yağmur ormanı, savan, çöl, ılıman orman, bozkır, tayga, tundra.',
        'Besin zinciri ve besin ağı; besin piramidinde enerji yukarı doğru azalır.'
      ] },
      { h: 'Döngüler', items: [
        '**Su döngüsü:** buharlaşma, yoğuşma, yağış, sızma, akış.',
        '**Karbon döngüsü:** fotosentez CO₂’yi bağlar; solunum, ayrışma ve fosil yakıtların yanması geri verir.',
        '**Azot döngüsü:** azot bağlayıcı bakteriler (baklagil kökleri), şimşek, nitrifikasyon, denitrifikasyon.',
        'İnsan faaliyetleri döngüleri bozar: fosil yakıtlar (karbon), gübreler (azot, ötrofikasyon).'
      ] }
    ]
  },

  'Nüfus Politikaları': {
    intro: 'Nüfus artışını hızlandırmaya ya da yavaşlatmaya yönelik politikalar ve Türkiye’nin nüfus politikaları.',
    parts: [
      { h: 'Politikalar', items: [
        '**Nüfus artışını teşvik:** yaşlanan nüfuslu gelişmiş ülkeler (doğum yardımı, uzun ebeveyn izni).',
        '**Nüfus artışını sınırlama:** hızlı artan nüfuslu ülkeler (Çin’in tek çocuk politikası, 1979–2015).',
        '**Nitelik artırma:** eğitim ve sağlık yatırımları.',
        '**Demografik dönüşüm:** yüksek doğum–yüksek ölüm → ölüm düşer → doğum düşer → düşük doğum–düşük ölüm.'
      ] },
      { h: 'Türkiye', items: [
        '1923–1965: nüfus artışı teşvik edildi (savaş kayıpları).',
        '1965–1980: nüfus planlaması; artışın hızı azaltılmaya çalışıldı.',
        'Günümüz: doğurganlık hızı yenilenme düzeyinin (2,1) altına düştü; nüfus yaşlanıyor, teşvik politikaları uygulanıyor.'
      ] }
    ]
  },

  'Türkiye’de Nüfus ve Yerleşme': {
    intro: 'Türkiye’de nüfusun dağılışı, yapısı, göçler ve yerleşme türleri.',
    parts: [
      { h: 'Nüfus', items: [
        'Nüfus kıyılarda, ovalarda ve sanayi merkezlerinde yoğundur: Marmara en yoğun bölge.',
        'Seyrek alanlar: Doğu Anadolu’nun yüksek kesimleri, Tuz Gölü çevresi, Toroslar ve Menteşe’nin dağlık kesimleri.',
        'Kentleşme oranı 1950’den sonra hızla arttı; bugün nüfusun büyük kısmı kentlerde.',
        'Ortanca yaş yükseliyor; nüfus piramidinin tabanı daralıyor.'
      ] },
      { h: 'Yerleşme', items: [
        'Kırsal yerleşme türleri: köy, mezra, yayla, kom, ağıl, oba, dalyan.',
        'Şehirlerin kuruluş ve gelişmesini etkileyen faktörler: ulaşım, tarım, sanayi, turizm, maden.',
        'Fonksiyonlarına göre şehirler: sanayi (Kocaeli), liman (Mersin), turizm (Antalya), idari (Ankara), dinî–kültürel (Konya).'
      ] }
    ]
  },

  'Ekonomik Faaliyetler ve Doğal Kaynaklar': {
    intro: 'Ekonomik faaliyet türleri, doğal kaynakların dağılışı ve kullanımı; dünyada ve Türkiye’de madenler ve enerji kaynakları.',
    parts: [
      { h: 'Kaynaklar', items: [
        '**Yenilenemez:** kömür, petrol, doğal gaz, madenler. **Yenilenebilir:** güneş, rüzgâr, su, jeotermal, biyokütle.',
        'Dünyada petrol: Orta Doğu (Basra Körfezi), Rusya, ABD, Venezuela.',
        'Türkiye’de: **bor** (Eskişehir, Kütahya, Balıkesir; dünya rezervinin büyük kısmı), linyit (Afşin–Elbistan), taş kömürü (Zonguldak), demir (Divriği), krom (Guleman), bakır (Murgul, Ergani).',
        'Hidroelektrik: Fırat ve Dicle üzerindeki barajlar (Atatürk, Keban, Karakaya, Ilısu).',
        'Jeotermal: Ege’deki fay hatları (Denizli, Aydın).'
      ] }
    ]
  },

  'Türkiye Ekonomisi': {
    intro: 'Türkiye’de tarım, hayvancılık, sanayi ve madencilik; ekonomiyi etkileyen faktörler.',
    parts: [
      { h: 'Tarım ve hayvancılık', items: [
        'Tarım ürünleri iklim ve yer şekillerine göre dağılır: çay (Rize), fındık (Ordu–Giresun), pamuk (Çukurova, GAP, Ege), şeker pancarı (İç Anadolu), zeytin (Ege, Marmara, Akdeniz), tütün (Ege, Karadeniz).',
        'Büyükbaş hayvancılık: Doğu Anadolu (Erzurum–Kars), Karadeniz. Küçükbaş: İç ve Doğu Anadolu. Kümes: Marmara.',
        'Tarımda verimi artıran: sulama, makineleşme, gübre, sertifikalı tohum.'
      ] },
      { h: 'Sanayi', items: [
        'Sanayi Marmara’da (özellikle İstanbul–Kocaeli) yoğunlaşmıştır: sermaye, ulaşım, pazar, iş gücü.',
        'Tarıma dayalı sanayi: şeker, pamuklu dokuma, zeytinyağı. Madene dayalı: demir–çelik (Karabük, Ereğli, İskenderun).',
        'Otomotiv: Bursa, Kocaeli. Petrol rafinerileri: İzmit, Aliağa, Kırıkkale, Batman.'
      ] }
    ]
  },

  'Türkiye’de Ulaşım, Ticaret ve Turizm': {
    intro: 'Türkiye’nin ulaşım ağı, dış ticaret yapısı ve turizm potansiyeli.',
    parts: [
      { h: 'Konular', items: [
        '**Ulaşım:** kara yolu en yaygın; demir yolu Cumhuriyet’in ilk yıllarında hızla gelişti; yüksek hızlı tren hatları (Ankara–İstanbul, Ankara–Konya).',
        'Boğazlar ve limanlar (İstanbul, İzmir, Mersin) önemli ticaret kapılarıdır.',
        'Boru hatları: Bakü–Tiflis–Ceyhan (petrol), TANAP (doğal gaz).',
        '**Dış ticaret:** ihracatta sanayi ürünleri (otomotiv, tekstil, makine) ağırlıklı; ithalatta enerji ve ara mallar.',
        '**Turizm:** deniz–güneş (Akdeniz, Ege), kültür (İstanbul, Kapadokya, Efes), kış (Uludağ, Erciyes, Palandöken), sağlık (termal), inanç turizmi.'
      ] }
    ]
  },

  'Bölgesel Kalkınma Projeleri': {
    intro: 'Bölgeler arası gelişmişlik farkını azaltmaya yönelik projeler: GAP, DAP, DOKAP, KOP, Zonguldak–Bartın–Karabük Projesi.',
    parts: [
      { h: 'Projeler', items: [
        '**GAP (Güneydoğu Anadolu Projesi):** Fırat ve Dicle üzerine barajlar ve sulama; Harran Ovası’nda pamuk; enerji üretimi. Çok sektörlü bir kalkınma projesidir.',
        '**DAP (Doğu Anadolu Projesi):** hayvancılık, tarım ve turizm.',
        '**DOKAP (Doğu Karadeniz Projesi):** ulaşım, tarım ürünlerinin işlenmesi, yayla turizmi.',
        '**KOP (Konya Ovası Projesi):** su sorununa çözüm, sulama; Mavi Tünel ile Göksu’dan su aktarımı.',
        'Amaç: göçü azaltmak, istihdam yaratmak, gelir dağılımını düzeltmek.'
      ] }
    ]
  },

  'Kültür Bölgeleri ve Küresel Ortam': {
    intro: 'Kültürün ögeleri, dünyadaki kültür bölgeleri ve Türk kültürünün yayılışı.',
    parts: [
      { h: 'Konular', items: [
        '**Kültürün ögeleri:** dil, din, gelenek–görenek, sanat, mimari, yaşam biçimi.',
        '**Kültür bölgeleri:** Batı, İslam, Hint, Çin, Afrika, Latin Amerika kültürleri.',
        'Medeniyet merkezleri genellikle büyük akarsu boylarında doğdu: Mezopotamya, Nil, İndus, Sarı Irmak.',
        'Türk kültür bölgesi: Orta Asya’dan Anadolu ve Balkanlara uzanan geniş alan.',
        'Küreselleşme kültürel etkileşimi hızlandırır; kültürel çeşitliliği koruma önemlidir.'
      ] }
    ]
  },

  'Ülkeler ve Bölgeler': {
    intro: 'Ülkelerin gelişmişlik düzeyleri, uluslararası örgütler ve jeopolitik önemi olan bölgeler.',
    parts: [
      { h: 'Konular', items: [
        '**Gelişmişlik göstergeleri:** kişi başına gelir, insani gelişme endeksi, sanayileşme, şehirleşme, eğitim ve sağlık hizmetleri.',
        '**Örgütler:** BM, NATO, AB, OECD, G-20, İslam İşbirliği Teşkilatı, Türk Devletleri Teşkilatı, OPEC (petrol ihraç eden ülkeler).',
        '**Jeopolitik bölgeler:** Orta Doğu (enerji kaynakları), Kafkasya, Balkanlar, boğazlar ve kanallar (Süveyş, Panama, Hürmüz).',
        'Türkiye Asya, Avrupa ve Orta Doğu arasında köprü konumundadır.'
      ] }
    ]
  },

  'Çevre ve Toplum': {
    intro: 'Çevre sorunları, doğal kaynakların sürdürülebilir kullanımı ve çevre politikaları.',
    parts: [
      { h: 'Konular', items: [
        'Sorunlar: hava, su ve toprak kirliliği; küresel ısınma; ormansızlaşma; çölleşme; biyolojik çeşitlilik kaybı.',
        '**Sürdürülebilir kalkınma:** bugünün ihtiyaçlarını gelecek kuşakların ihtiyaçlarını tehlikeye atmadan karşılamak.',
        '**Uluslararası anlaşmalar:** Montreal Protokolü (ozon), Kyoto Protokolü, Paris İklim Anlaşması.',
        'Türkiye’de: erozyonla mücadele (TEMA), milli parklar, özel çevre koruma bölgeleri.',
        'Çevreye duyarlı uygulamalar: yenilenebilir enerji, geri dönüşüm, toplu taşıma, damla sulama.'
      ] }
    ]
  }
};

export default L;
