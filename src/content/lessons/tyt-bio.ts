import type { LessonSet } from './types';

const L: LessonSet = {
  'Canlıların Ortak Özellikleri': {
    intro: 'Bütün canlıları cansızlardan ayıran özellikler. Kavram soruları gelir; “hangisi bütün canlılarda ortaktır?” biçiminde.',
    parts: [
      { h: 'Ortak özellikler', items: [
        'Hücresel yapı (bir ya da çok hücreli).',
        'Beslenme, solunum ve boşaltım (metabolizma).',
        'Büyüme ve gelişme; üreme.',
        'Uyarılara tepki verme; hareket (bitkilerde de yönelim hareketleri).',
        'Homeostazi: iç dengeyi koruma.',
        'Kalıtsal madde olarak DNA taşıma; ATP ile enerji kullanma.',
        '**Metabolizma** = özümleme (yapım, anabolizma) + yadımlama (yıkım, katabolizma).'
      ] }
    ],
    traps: [
      'Virüsler hücresel yapıda değildir, kendi başına metabolizması yoktur; canlı sayılmaz ama canlı hücrede çoğalır.',
      'Her canlı eşeyli üremez; üreme ortak özelliktir, üreme türü değildir.'
    ]
  },

  'Canlıların Temel Bileşenleri': {
    intro: 'Canlıyı oluşturan inorganik (su, mineral, asit-baz) ve organik (karbonhidrat, yağ, protein, nükleik asit, vitamin) moleküller.',
    parts: [
      { h: 'İnorganik bileşenler', items: [
        '**Su:** en çok bulunan madde; çözücü, sıcaklık dengeleyici. Yaşlandıkça oranı azalır.',
        '**Mineraller:** düzenleyici; enerji vermez. Ca (kemik), Fe (hemoglobin), I (tiroksin), Na–K (sinir iletimi).'
      ] },
      { h: 'Organik bileşenler', items: [
        '**Karbonhidrat:** birincil enerji kaynağı. Monosakkarit (glikoz, fruktoz), disakkarit (maltoz, sakkaroz, laktoz), polisakkarit (nişasta, glikojen, selüloz, kitin).',
        '**Yağ (lipit):** en çok enerji veren, depo molekülü. Gliserol + yağ asitleri; ester bağı.',
        '**Protein:** yapıcı ve onarıcı; enzimlerin çoğu proteindir. Amino asitler peptit bağıyla bağlanır. 20 çeşit amino asit vardır.',
        '**Enzimler:** tepkimeyi hızlandırır, kendileri değişmez; sıcaklık ve pH’a duyarlıdır; substrata özgüdür.',
        '**Nükleik asitler:** DNA (kalıtım bilgisi) ve RNA (protein sentezi). Nükleotit = fosfat + şeker + organik baz.',
        '**Vitaminler:** düzenleyici. Yağda çözünenler A, D, E, K; suda çözünenler B ve C.'
      ] }
    ],
    traps: [
      'Enerji verme sırası (kullanım): karbonhidrat → yağ → protein. Gram başına en çok enerji yağdan alınır.',
      'Selüloz bitki hücre duvarında, glikojen hayvanlarda (karaciğer, kas), nişasta bitkilerde depo edilir.'
    ],
    example: {
      q: '1000 nükleotitli çift zincirli bir DNA’da adenin sayısı 200 ise sitozin sayısı kaçtır?',
      a: 'A = T = 200 → toplam 400. Kalan 600 nükleotit G ve C’ye eşit bölünür: C = 300.'
    }
  },

  'Hücre ve Organeller': {
    intro: 'Hücrenin yapısı ve organellerin görevleri. Prokaryot ile ökaryot hücre ve bitki ile hayvan hücresi farkları sık sorulur.',
    parts: [
      { h: 'Hücre tipleri', items: [
        '**Prokaryot:** çekirdek zarı ve zarlı organel yok (bakteriler, arkeler). Ribozom, hücre zarı, sitoplazma ve DNA bulunur.',
        '**Ökaryot:** çekirdek zarı ve zarlı organeller var (bitki, hayvan, mantar, protist).',
        'Bütün hücrelerde ortak: hücre zarı, sitoplazma, ribozom, DNA.'
      ] },
      { h: 'Organeller', items: [
        '**Ribozom:** protein sentezi; zarsız, her hücrede.',
        '**Mitokondri:** oksijenli solunumla ATP üretimi; kendi DNA’sı ve ribozomu var.',
        '**Kloroplast:** fotosentez; bitkiler ve bazı protistlerde. Kendi DNA’sı var.',
        '**Endoplazmik retikulum:** taşıma; granüllü ER protein, düz ER yağ sentezi.',
        '**Golgi:** salgı paketleme ve lizozom oluşturma.',
        '**Lizozom:** hücre içi sindirim; hayvan hücrelerinde.',
        '**Koful:** depo; bitkilerde büyük merkezi koful. **Sentrozom:** hayvan hücresinde bölünmede iğ iplikleri.',
        '**Çekirdek:** hücreyi yönetir, DNA’yı taşır; çekirdekçik ribozom yapımında görev alır.'
      ] },
      { h: 'Bitki ve hayvan hücresi', items: [
        'Bitkide var, hayvanda yok: hücre duvarı (selüloz), kloroplast, büyük merkezi koful.',
        'Hayvanda var, bitkide (çoğunda) yok: sentrozom, lizozom.'
      ] }
    ],
    traps: [
      'Bakterilerde de hücre duvarı bulunur ama selülozdan değildir.',
      'Ribozom zarsız olduğu için prokaryotlarda da vardır.'
    ]
  },

  'Hücre Zarından Madde Geçişi': {
    intro: 'Maddelerin hücre zarından geçiş yolları: enerji harcamadan (pasif) ve enerji harcayarak (aktif).',
    parts: [
      { h: 'Pasif taşıma (ATP harcanmaz)', items: [
        '**Difüzyon:** çok yoğun ortamdan az yoğun ortama. O₂ ve CO₂ böyle geçer.',
        '**Kolaylaştırılmış difüzyon:** taşıyıcı proteinle, yine yoğunluk farkına göre (glikozun kana geçişi).',
        '**Osmoz:** suyun yarı geçirgen zardan az yoğun (çözünen az) ortamdan çok yoğun ortama geçişi.'
      ] },
      { h: 'Aktif taşıma ve büyük moleküller', items: [
        '**Aktif taşıma:** az yoğundan çok yoğuna, ATP harcanarak (Na–K pompası).',
        '**Endositoz:** büyük maddeleri içeri alma (fagositoz: katı, pinositoz: sıvı).',
        '**Ekzositoz:** salgı maddelerini dışarı verme.'
      ] },
      { h: 'Osmotik durumlar', items: [
        '**Hipotonik** ortamda (dışarısı seyreltik) hayvan hücresi şişip patlayabilir; bitki hücresi turgor kazanır.',
        '**Hipertonik** ortamda (dışarısı derişik) hücre su kaybeder, büzülür; bitkide **plazmoliz** olur.',
        '**İzotonik** ortamda net su geçişi olmaz.'
      ] }
    ],
    traps: [
      'Osmozda hareket eden sudur, çözünen madde değil.',
      'Bitki hücresi hücre duvarı sayesinde hipotonik ortamda patlamaz.'
    ]
  },

  'Canlıların Sınıflandırılması': {
    intro: 'Canlıların ortak özelliklere göre gruplandırılması, sınıflandırma basamakları ve âlemler.',
    parts: [
      { h: 'Basamaklar', items: [
        'Büyükten küçüğe: âlem → şube → sınıf → takım → aile → cins → **tür**.',
        '**Tür:** ortak atadan gelen, birbiriyle çiftleşip verimli döl verebilen bireyler. En küçük birimdir.',
        'Basamaklarda aşağı inildikçe birey sayısı azalır, benzerlik artar.',
        '**İkili adlandırma (Linnaeus):** cins adı + tür adı, Latince, italik (Homo sapiens).'
      ] },
      { h: 'Âlemler', items: [
        '**Bakteriler** ve **arkeler:** prokaryot, tek hücreli.',
        '**Protistler:** ökaryot, çoğu tek hücreli (amip, öglena, paramesyum).',
        '**Mantarlar:** ökaryot, heterotrof, hücre duvarı kitin; sporla ürer.',
        '**Bitkiler:** ökaryot, ototrof (fotosentez), hücre duvarı selüloz.',
        '**Hayvanlar:** ökaryot, heterotrof, hücre duvarı yok; omurgalılar ve omurgasızlar.'
      ] }
    ],
    traps: [
      'Katır (at × eşek) kısırdır; bu yüzden at ve eşek ayrı türlerdir.',
      'Mantarlar bitki değildir: klorofil yok, heterotroftur.'
    ]
  },

  'Hücre Bölünmeleri': {
    intro: 'Mitoz (büyüme ve onarım) ve mayoz (üreme hücresi oluşumu). Kromozom sayısı değişimi her yıl sorulur.',
    parts: [
      { h: 'Mitoz', items: [
        'Bir hücreden kalıtsal yapısı aynı **iki** hücre oluşur; kromozom sayısı korunur (2n → 2n).',
        'Evreler: interfaz (DNA eşlenir) → profaz → metafaz (kromozomlar ortada) → anafaz (kardeş kromatitler ayrılır) → telofaz.',
        'Sitoplazma bölünmesi: hayvanda boğumlanma, bitkide ara lamel (orta lamel) oluşumu.',
        'Görev: büyüme, onarım, tek hücrelilerde eşeysiz üreme.'
      ] },
      { h: 'Mayoz', items: [
        'Bir hücreden kromozom sayısı yarıya inmiş **dört** hücre oluşur (2n → n).',
        'Mayoz I’de homolog kromozomlar ayrılır; profaz I’de **krossing over** (parça değişimi) olur.',
        'Mayoz II mitoza benzer; kardeş kromatitler ayrılır.',
        'Görev: eşeyli üremede gamet oluşumu ve kalıtsal çeşitlilik.'
      ] }
    ],
    traps: [
      'Kromozom sayısı mayoz I sonunda yarıya iner; mayoz II’de değişmez.',
      'Mitozla oluşan hücreler, mutasyon olmadıkça ana hücreyle genetik olarak aynıdır.'
    ],
    example: {
      q: '2n = 46 olan bir hücre mayozla bölünürse oluşan hücrelerde kaç kromozom bulunur? Kaç hücre oluşur?',
      a: 'Mayozda sayı yarıya iner: n = 23. Bir mayoz bölünmeden 4 hücre oluşur.'
    }
  },

  'Eşeysiz ve Eşeyli Üreme': {
    intro: 'Tek ata canlıyla (eşeysiz) ve gamet birleşmesiyle (eşeyli) üreme yolları.',
    parts: [
      { h: 'Eşeysiz üreme', items: [
        'Tek ata canlıdan, genetik olarak aynı bireyler oluşur. Mitoza dayanır.',
        'Türleri: **bölünme** (bakteri, amip), **tomurcuklanma** (bira mayası, hidra), **rejenerasyon** (deniz yıldızı), **sporla üreme** (mantar), **vejetatif üreme** (çelik, yumru, sürünücü gövde), **partenogenez** (döllenmemiş yumurtadan gelişme: erkek arı).'
      ] },
      { h: 'Eşeyli üreme', items: [
        'Mayozla oluşan gametlerin döllenmesiyle zigot oluşur (n + n → 2n).',
        'Kalıtsal çeşitlilik sağlar: krossing over, homologların bağımsız dağılımı ve rastgele döllenme.',
        '**Dış döllenme:** suda (balık, kurbağa). **İç döllenme:** vücut içinde (sürüngen, kuş, memeli).'
      ] }
    ],
    traps: [
      'Partenogenez eşeysiz üreme sayılır, çünkü döllenme yoktur.'
    ]
  },

  'Kalıtım': {
    intro: 'Özelliklerin anne–babadan yavruya aktarılması. Mendel çaprazlamaları, kan grupları ve eşeye bağlı kalıtım olasılık sorularıyla gelir.',
    parts: [
      { h: 'Temel kavramlar', items: [
        '**Gen:** bir özelliği belirleyen DNA parçası. **Alel:** aynı genin farklı biçimleri (A, a).',
        '**Homozigot (arı döl):** AA ya da aa. **Heterozigot (melez):** Aa.',
        '**Genotip:** gen yapısı. **Fenotip:** görünüş.',
        '**Baskın** alel heterozigotta kendini gösterir; **çekinik** yalnız homozigotta (aa) görünür.',
        'Aa × Aa → genotip 1 AA : 2 Aa : 1 aa; fenotip 3 baskın : 1 çekinik.'
      ] },
      { h: 'Kan grupları ve eşeye bağlı kalıtım', items: [
        'A ve B eş baskın, 0 çekinik. A grubu: AA ya da A0; B grubu: BB ya da B0; AB; 0 grubu: 00.',
        '**Rh:** Rh⁺ baskın, Rh⁻ çekinik.',
        '**X’e bağlı çekinik:** renk körlüğü, hemofili. Erkekler (XY) tek X taşıdığı için daha sık görülür.',
        'Oğul X’i anneden, kız bir X’i anneden bir X’i babadan alır.',
        '**Y’ye bağlı** özellikler yalnız babadan oğula geçer.'
      ] }
    ],
    traps: [
      'Bağımsız genlerde olasılıkları ayrı ayrı bulup çarp: AaBb × AaBb’den aabb olasılığı {1/4} · {1/4} = {1/16}.',
      'Renk körü kız için baba da renk körü olmalıdır.'
    ],
    example: {
      q: 'A0 kan gruplu anne ile B0 kan gruplu babanın çocuğunun 0 grubu olma olasılığı kaçtır?',
      a: 'Anne A ya da 0, baba B ya da 0 verir. 00 için ikisinin de 0 vermesi gerekir: {1/2} · {1/2} = {1/4}.'
    }
  },

  'Ekosistem Ekolojisi': {
    intro: 'Ekosistemin canlı ve cansız bileşenleri, besin zinciri, enerji akışı ve madde döngüleri.',
    parts: [
      { h: 'Bileşenler ve beslenme', items: [
        '**Cansız (abiyotik):** ışık, su, sıcaklık, toprak, mineraller. **Canlı (biyotik):** üreticiler, tüketiciler, ayrıştırıcılar.',
        '**Üretici (ototrof):** fotosentez ya da kemosentezle besin üretir.',
        '**Tüketici (heterotrof):** otçul (1. tüketici), etçil, hepçil.',
        '**Ayrıştırıcılar** (bakteri, mantar) ölü organik maddeyi inorganik maddeye çevirir.'
      ] },
      { h: 'Enerji akışı ve döngüler', items: [
        'Enerji üreticiden tüketiciye doğru akar ve her basamakta azalır (yaklaşık %10’u aktarılır); bir kısmı ısı olarak kaybolur.',
        'Enerji tek yönlü akar; madde döngüsel hareket eder.',
        '**Biyolojik birikim:** zararlı maddeler (DDT, cıva) besin zincirinin üst basamaklarında birikir.',
        'Döngüler: su, karbon, azot döngüsü. Azotu havadan bağlayan azot bağlayıcı bakterilerdir.'
      ] }
    ],
    traps: [
      'Besin piramidinde yukarı çıkıldıkça birey sayısı ve enerji azalır; zehir miktarı artar.'
    ]
  },

  'Güncel Çevre Sorunları': {
    intro: 'Hava, su ve toprak kirliliği, küresel iklim değişikliği ve biyolojik çeşitliliğin azalması.',
    parts: [
      { h: 'Sorunlar ve nedenleri', items: [
        '**Küresel ısınma:** sera gazlarının (CO₂, CH₄) artışı; fosil yakıtlar ve ormansızlaşma.',
        '**Asit yağmuru:** kükürt ve azot oksitleri; ormanlara, göllere, tarihi yapılara zarar verir.',
        '**Ozon incelmesi:** CFC gazları; morötesi ışınlara karşı korumayı azaltır.',
        '**Ötrofikasyon:** gübre ve deterjan kaynaklı fosfat–nitrat birikimiyle suda alg patlaması ve oksijen azalması.',
        '**Biyolojik çeşitlilik kaybı:** habitat tahribi, aşırı avlanma, istilacı türler.'
      ] },
      { h: 'Çözümler', items: [
        'Yenilenebilir enerji, ağaçlandırma, geri dönüşüm, toplu taşıma.',
        '**Karbon ayak izi:** bir kişinin ya da kurumun neden olduğu sera gazı salımı.',
        'Koruma alanları, milli parklar, gen bankaları.'
      ] }
    ]
  }
};

export default L;
