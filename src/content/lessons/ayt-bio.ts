import type { LessonSet } from './types';

const L: LessonSet = {
  'Sinir Sistemi': {
    intro: 'Nöronun yapısı, impuls iletimi, merkezi ve çevresel sinir sistemi. Beynin bölümlerinin görevleri sık sorulur.',
    parts: [
      { h: 'Nöron ve impuls', items: [
        'Nöron: dendrit (uyarıyı alır), hücre gövdesi, akson (iletir). Miyelin kılıf iletimi hızlandırır.',
        '**Duyu nöronu** uyarıyı merkeze, **motor nöron** merkezden kas ve bezlere, **ara nöron** ikisi arasında iletir.',
        'Dinlenme potansiyeli: hücre içi negatif; Na–K pompası 3 Na⁺ dışarı, 2 K⁺ içeri.',
        'Uyarılınca Na⁺ içeri girer (depolarizasyon), sonra K⁺ dışarı çıkar (repolarizasyon).',
        '**Ya hep ya hiç:** eşik değerin altındaki uyarı impuls oluşturmaz.',
        '**Sinaps:** nöronlar arası kimyasal iletim (nörotransmitter: asetilkolin vb.); tek yönlüdür.'
      ] },
      { h: 'Sinir sistemi bölümleri', items: [
        '**Beyin:** düşünme, öğrenme, istemli hareketler, duyuların algılanması.',
        '**Beyincik:** denge ve kas hareketlerinin koordinasyonu.',
        '**Omurilik soğanı:** solunum, kalp atışı, yutma, öksürme gibi hayati refleksler.',
        '**Hipotalamus:** vücut sıcaklığı, açlık–susuzluk, hipofizi yönetir.',
        '**Omurilik:** refleks merkezi; beyin ile vücut arasında iletim.',
        '**Otonom sinir sistemi:** sempatik (stres, hızlandırır) ve parasempatik (dinlenme, yavaşlatır).'
      ] }
    ],
    traps: [
      'Refleksler beyinde değil omurilikte ya da omurilik soğanında kontrol edilir.'
    ]
  },

  'Endokrin Sistem': {
    intro: 'Hormon salgılayan bezler ve hormonların görevleri. Hormonu bezle ve etkisiyle eşleştirmek en çok sorulan beceridir.',
    parts: [
      { h: 'Bezler ve hormonlar', items: [
        '**Hipofiz (ana bez):** büyüme hormonu, TSH, ACTH, FSH, LH, prolaktin; arka lobdan ADH ve oksitosin (hipotalamusta üretilir).',
        '**Tiroit:** tiroksin (metabolizma hızı, iyot gerekir), kalsitonin (kan kalsiyumunu düşürür).',
        '**Paratiroit:** parathormon (kan kalsiyumunu yükseltir).',
        '**Pankreas (Langerhans adacıkları):** insülin (kan şekerini düşürür), glukagon (yükseltir).',
        '**Böbrek üstü:** kabuk: kortizol, aldosteron; öz: adrenalin (stres, sempatik etki).',
        '**Eşeysel bezler:** testosteron (testis), östrojen ve progesteron (yumurtalık).',
        '**Epifiz:** melatonin (uyku–uyanıklık ritmi).'
      ] },
      { h: 'Düzenleme', items: [
        '**Negatif geri bildirim:** hormon fazla salgılanınca üretimi baskılanır (tiroksin – TSH).',
        'Hormonlar kanla taşınır ve yalnız reseptörü olan hedef hücreleri etkiler.',
        'İnsülin ve glukagon birbirine zıt (antagonist) çalışır.'
      ] }
    ],
    traps: [
      'ADH ve oksitosin hipofizin arka lobundan salgılanır ama hipotalamusta üretilir.'
    ]
  },

  'Duyu Organları': {
    intro: 'Göz, kulak, burun, dil ve deri; uyarıların algılanması.',
    parts: [
      { h: 'Organlar', items: [
        '**Göz:** kornea ve göz merceği ışığı kırar; retinada çubuk (loş ışık, siyah–beyaz) ve koni (renk) hücreleri. Kör nokta: görme siniri çıkışı, reseptör yok.',
        'Göz kusurları: miyopi (uzağı görememe, ince kenarlı değil **kalın kenarlı** mercek), hipermetropi (yakını görememe, ince kenarlı mercek), astigmatizm (silindirik mercek).',
        '**Kulak:** dış kulak, orta kulak (çekiç, örs, üzengi; östaki borusu basıncı dengeler), iç kulak (salyangoz: işitme; yarım daire kanalları: denge).',
        '**Burun:** koku reseptörleri; koku alma için maddenin mukusta çözünmesi gerekir.',
        '**Dil:** tat tomurcukları; tatlı, tuzlu, ekşi, acı, umami.',
        '**Deri:** dokunma, basınç, sıcak–soğuk ve acı reseptörleri.'
      ] }
    ],
    traps: [
      'Miyopi kalın kenarlı (ıraksak), hipermetropi ince kenarlı (yakınsak) mercekle düzeltilir.'
    ]
  },

  'Destek ve Hareket Sistemi': {
    intro: 'İskelet, kemik ve kıkırdak dokusu, eklemler ve kas çeşitleri; kasılma mekanizması.',
    parts: [
      { h: 'Kemik ve eklem', items: [
        'Kemik dokusu: sert (sık) ve süngerimsi. Kırmızı kemik iliği kan hücresi üretir.',
        '**Kıkırdak** damarsızdır; kulak kepçesi, burun ucu, eklem yüzeyleri.',
        'Eklemler: oynamaz (kafatası), yarı oynar (omurlar), oynar (diz, dirsek).'
      ] },
      { h: 'Kaslar', items: [
        '**Çizgili (iskelet):** istemli, çok çekirdekli, hızlı kasılır, çabuk yorulur.',
        '**Düz:** istemsiz, tek çekirdekli; iç organlarda, yavaş kasılır.',
        '**Kalp kası:** çizgili görünümlü ama istemsiz.',
        '**Kayan iplikler modeli:** kasılmada aktin iplikleri miyozin üzerinde kayar; sarkomer kısalır, Ca²⁺ ve ATP gerekir.',
        'Kasılmada A bandı değişmez; I bandı ve H bandı kısalır.'
      ] }
    ]
  },

  'Sindirim Sistemi': {
    intro: 'Besinlerin mekanik ve kimyasal sindirimi, enzimler ve emilim.',
    parts: [
      { h: 'Sindirim yolu', items: [
        '**Ağız:** tükürük amilazı nişastanın kimyasal sindirimini başlatır.',
        '**Mide:** pepsin (proteinlerin kimyasal sindirimi başlar), HCl (asidik ortam).',
        '**İnce bağırsak:** sindirimin tamamlandığı ve emilimin büyük kısmının yapıldığı yer; villuslar yüzeyi artırır.',
        '**Kalın bağırsak:** su ve mineral emilimi; vitamin üreten bakteriler.'
      ] },
      { h: 'Yardımcı organlar', items: [
        '**Karaciğer:** safra üretir (yağları mekanik olarak küçük damlacıklara ayırır, enzim içermez); glikojen depolar; zehirleri etkisizleştirir.',
        '**Safra kesesi:** safrayı depolar.',
        '**Pankreas:** tripsin (protein), lipaz (yağ), amilaz (nişasta) içeren sindirim öz suyu; bikarbonat ile ortamı nötrler.',
        'Monosakkarit ve amino asitler kana (villusların kılcal damarlarına), yağ asitleri ve gliserol lenfe geçer.'
      ] }
    ],
    traps: [
      'Safra enzim içermez; yağların kimyasal değil mekanik sindirimini sağlar.'
    ]
  },

  'Dolaşım ve Bağışıklık Sistemi': {
    intro: 'Kalbin yapısı, büyük ve küçük dolaşım, kan hücreleri ve bağışıklık.',
    parts: [
      { h: 'Kalp ve dolaşım', items: [
        'Kalp 4 odacıklı: sağ ve sol kulakçık, sağ ve sol karıncık. Kalbin sağında kirli, solunda temiz kan.',
        '**Küçük (akciğer) dolaşımı:** sağ karıncık → akciğer atardamarı → akciğer → akciğer toplardamarı → sol kulakçık.',
        '**Büyük (vücut) dolaşımı:** sol karıncık → aort → vücut → üst ve alt ana toplardamar → sağ kulakçık.',
        'Atardamarlar kalpten kanı götürür; toplardamarlar kalbe getirir; kılcallarda madde alışverişi olur.',
        'Kalp atışı sinoatriyal (SA) düğümden başlar.'
      ] },
      { h: 'Kan ve bağışıklık', items: [
        '**Alyuvar:** hemoglobinle O₂ taşır; memelilerde çekirdeksiz.',
        '**Akyuvar:** savunma. **Trombosit:** pıhtılaşma.',
        '**Doğal (doğuştan) bağışıklık:** deri, mukus, fagositoz, ateş, yangı.',
        '**Kazanılmış bağışıklık:** B lenfositleri antikor üretir (sıvısal), T lenfositleri hücresel bağışıklık.',
        '**Aşı:** zayıflatılmış antijen → aktif bağışıklık, uzun süreli. **Serum:** hazır antikor → pasif, kısa süreli.'
      ] }
    ],
    traps: [
      'Akciğer atardamarında kirli, akciğer toplardamarında temiz kan bulunur; damarın adı kanın türünü değil yönünü söyler.'
    ]
  },

  'Solunum Sistemi': {
    intro: 'Solunum yolları, gaz alışverişi ve solunum mekanizması.',
    parts: [
      { h: 'Yapı ve mekanizma', items: [
        'Burun → yutak → gırtlak → soluk borusu → bronş → bronşçuk → **alveol** (gaz alışverişi).',
        '**Soluk alma:** diyafram kasılıp düzleşir, kaburgalar yükselir; göğüs hacmi artar, basınç düşer.',
        '**Soluk verme:** diyafram gevşer, hacim azalır, basınç artar.',
        'Gaz alışverişi difüzyonla, kısmi basınç farkına göre olur.'
      ] },
      { h: 'Gazların taşınması', items: [
        'O₂ çoğunlukla hemoglobine bağlı (oksihemoglobin) taşınır.',
        'CO₂ çoğunlukla kan plazmasında bikarbonat (HCO₃⁻) olarak taşınır; alyuvardaki karbonik anhidraz enzimi bunu hızlandırır.',
        'CO (karbonmonoksit) hemoglobine O₂’den çok daha sıkı bağlanır: zehirlenme nedeni.',
        'Solunumun düzenlenmesi: omurilik soğanı, kandaki CO₂ ve H⁺ artışına duyarlıdır.'
      ] }
    ]
  },

  'Boşaltım Sistemi': {
    intro: 'Böbreklerin yapısı, idrar oluşumu ve vücudun su–tuz dengesi.',
    parts: [
      { h: 'İdrar oluşumu', items: [
        'Böbreğin işlevsel birimi **nefron**: Bowman kapsülü, glomerulus, tübüller, Henle kulpu.',
        '**Süzülme:** kan glomerulustan Bowman kapsülüne süzülür (kan hücreleri ve büyük proteinler süzülmez).',
        '**Geri emilim:** glikoz, amino asit, su ve tuzların büyük kısmı kana geri döner.',
        '**Salgılama:** bazı maddeler kandan tübüle aktif olarak verilir (H⁺, K⁺, ilaçlar).',
        'İdrar yolu: böbrek → üreter → idrar kesesi → üretra.'
      ] },
      { h: 'Düzenleme', items: [
        '**ADH:** suyun geri emilimini artırır; su az içilince salgısı artar, idrar azalır ve yoğunlaşır.',
        '**Aldosteron:** Na⁺ geri emilimini artırır.',
        'Sağlıklı kişinin idrarında glikoz bulunmaz; şeker hastalığında görülür.'
      ] }
    ]
  },

  'Üreme Sistemi ve Embriyonik Gelişim': {
    intro: 'Erkek ve dişi üreme sistemi, hormonların döngüdeki rolü, döllenme ve embriyonik gelişim.',
    parts: [
      { h: 'Üreme sistemi', items: [
        '**Erkek:** testislerde sperm ve testosteron; FSH sperm oluşumunu, LH testosteron salgısını uyarır.',
        '**Dişi:** yumurtalıkta yumurta, östrojen ve progesteron.',
        '**Menstrüasyon döngüsü (~28 gün):** FSH folikülü olgunlaştırır, LH ovulasyonu (yumurtlama) tetikler, korpus luteum progesteron salgılar.',
        'Döllenme genellikle **yumurta kanalında (fallop tüpü)** olur; zigot rahme gelip tutunur.'
      ] },
      { h: 'Embriyonik gelişim', items: [
        'Zigot → bölünme (morula) → blastula → gastrula.',
        'Üç tabaka: **ektoderm** (deri, sinir sistemi), **mezoderm** (kas, kemik, dolaşım, boşaltım), **endoderm** (sindirim ve solunum yolu epiteli, karaciğer, pankreas).',
        'Embriyonik zarlar: amniyon (sıvı ortam), koryon, plasenta (madde alışverişi), göbek bağı.',
        '**İkizler:** tek yumurta ikizleri genetik olarak aynı ve hep aynı cinsiyette; çift yumurta ikizleri farklı olabilir.'
      ] }
    ]
  },

  'Komünite ve Popülasyon Ekolojisi': {
    intro: 'Popülasyonların büyümesi, türler arası ilişkiler ve komünitelerdeki değişim (süksesyon).',
    parts: [
      { h: 'Popülasyon', items: [
        '**Popülasyon:** aynı bölgede yaşayan aynı türün bireyleri. **Komünite:** bir bölgedeki bütün popülasyonlar.',
        'Popülasyon artışı: doğum + göç ile gelenler − ölüm − göçle gidenler.',
        '**J tipi büyüme:** sınırsız kaynakta üstel artış. **S tipi büyüme:** taşıma kapasitesine ulaşınca durağanlaşır.',
        '**Taşıma kapasitesi:** ortamın besleyebileceği en yüksek birey sayısı.'
      ] },
      { h: 'Türler arası ilişkiler', items: [
        '**Mutualizm (+/+):** iki tür de yararlanır, zorunlu (liken: alg + mantar).',
        '**Kommensalizm (+/0):** biri yararlanır, diğeri etkilenmez.',
        '**Parazitizm (+/−):** biri yararlanır, diğeri zarar görür.',
        '**Av–avcı (+/−)**, **rekabet (−/−)**.',
        '**Süksesyon:** komünitenin zaman içinde değişimi; çıplak kayada liken ve yosunla başlar (birincil), yangın sonrası alanda ikincil süksesyon.'
      ] }
    ]
  },

  'Genden Proteine': {
    intro: 'DNA’nın yapısı ve eşlenmesi, genetik şifre, protein sentezi (transkripsiyon ve translasyon). AYT biyolojinin en büyük konusu.',
    parts: [
      { h: 'DNA ve eşlenme', items: [
        'DNA çift zincirli sarmal; bazlar A–T (2 hidrojen bağı) ve G–C (3 hidrojen bağı) eşleşir.',
        'Nükleotitte şeker deoksiriboz; RNA’da riboz ve T yerine U.',
        '**Yarı korunumlu eşlenme:** her yeni DNA bir eski bir yeni zincir taşır. Enzimler: helikaz (zincirleri açar), DNA polimeraz (yeni zinciri yapar), ligaz (parçaları birleştirir).'
      ] },
      { h: 'Protein sentezi', items: [
        '**Transkripsiyon (çekirdekte):** DNA’dan mRNA sentezi (RNA polimeraz).',
        '**Translasyon (ribozomda):** mRNA’daki kodonlar okunur, tRNA amino asitleri getirir.',
        '**Kodon:** 3 nükleotit = 1 amino asit. 64 kodon vardır; 61’i amino asit şifreler, 3’ü durdurma kodonudur. Başlatma kodonu AUG (metiyonin).',
        'n amino asitli proteinde n − 1 peptit bağı vardır; şifreleyen mRNA’da 3n nükleotit (durdurma hariç).',
        '**Mutasyon:** DNA’daki kalıcı değişiklik; gen mutasyonu ve kromozom mutasyonu.'
      ] },
      { h: 'Biyoteknoloji', items: [
        'Rekombinant DNA, gen klonlama, PCR (DNA çoğaltma), DNA parmak izi, gen tedavisi, GDO.'
      ] }
    ],
    traps: [
      'Antikodon tRNA’da, kodon mRNA’da bulunur.',
      'Birden fazla kodon aynı amino asidi şifreleyebilir; bir kodon ise tek amino asit şifreler.'
    ],
    example: {
      q: 'DNA’nın kalıp zinciri 3′-TAC GGA-5′ ise mRNA dizisi nedir?',
      a: 'Tamamlayıcı bazlar, T yerine U: 5′-AUG CCU-3′.'
    }
  },

  'Canlılık ve Enerji': {
    intro: 'ATP, fotosentez, kemosentez, oksijenli solunum ve fermantasyon. Evreler, yerleri ve ürünleri sorulur.',
    parts: [
      { h: 'Fotosentez', items: [
        '6CO₂ + 6H₂O → (ışık, klorofil) → C₆H₁₂O₆ + 6O₂.',
        '**Işığa bağımlı evre (tilakoit zar):** su parçalanır (O₂ açığa çıkar), ATP ve NADPH üretilir.',
        '**Işıktan bağımsız evre (Calvin döngüsü, stroma):** CO₂ bağlanır, ATP ve NADPH ile glikoz üretilir.',
        'Fotosentez hızını etkileyenler: ışık şiddeti ve dalga boyu, CO₂ derişimi, sıcaklık, su.',
        'Açığa çıkan O₂ sudan gelir.'
      ] },
      { h: 'Solunum', items: [
        '**Glikoliz (sitoplazma):** glikoz → 2 pirüvat; oksijen gerekmez; net 2 ATP.',
        '**Krebs döngüsü (mitokondri matriksi)** ve **elektron taşıma sistemi (mitokondri iç zarı):** O₂ son elektron alıcısıdır, su oluşur.',
        'Oksijenli solunumda bir glikozdan yaklaşık 36–38 ATP üretilir.',
        '**Fermantasyon:** oksijensiz; etil alkol fermantasyonu (maya: CO₂ + etil alkol) ya da laktik asit fermantasyonu (kas, yoğurt bakterileri). Net 2 ATP.',
        '**Kemosentez:** bazı bakteriler inorganik maddelerin oksitlenmesinden enerji alıp besin üretir.'
      ] }
    ],
    traps: [
      'Bitkiler de solunum yapar; gündüz fotosentez solunumdan fazla olduğu için net O₂ verirler.'
    ]
  },

  'Bitki Biyolojisi': {
    intro: 'Bitki dokuları, madde taşınması, bitki hormonları ve bitkilerde üreme.',
    parts: [
      { h: 'Dokular ve taşıma', items: [
        '**Meristem:** bölünür (büyüme). Uçta boyca, kambiyumda enine büyüme.',
        '**Ksilem (odun borusu):** su ve mineralleri kökten yapraklara taşır; ölü hücreler; tek yönlü.',
        '**Floem (soymuk borusu):** fotosentez ürünlerini taşır; canlı hücreler; çift yönlü.',
        'Suyun yükselmesi: kök basıncı, kılcallık ve en çok **terlemenin** (transpirasyon) çekim gücü (kohezyon–gerilim).',
        '**Stoma:** bekçi hücreleriyle açılıp kapanır; gaz alışverişi ve terleme.'
      ] },
      { h: 'Hormonlar ve üreme', items: [
        '**Oksin:** hücre uzaması, ışığa yönelim (fototropizma), tepe baskınlığı. **Sitokinin:** hücre bölünmesi. **Giberellin:** gövde uzaması, tohum çimlenmesi.',
        '**Absisik asit:** dormansi, stomaların kapanması. **Etilen:** meyve olgunlaşması, yaprak dökümü.',
        'Çiçekli bitkilerde **çift döllenme:** bir sperm yumurtayı (zigot, 2n), diğeri kutup çekirdeklerini (endosperm, 3n) döller.',
        'Tohum: embriyo + besin dokusu + tohum kabuğu. Meyve yumurtalıktan gelişir.'
      ] }
    ]
  },

  'Canlılar ve Çevre': {
    intro: 'Canlıların çevreye uyumu, adaptasyon, doğal seçilim ve biyoçeşitlilik.',
    parts: [
      { h: 'Konular', items: [
        '**Adaptasyon:** canlıların yaşama ve üreme şansını artıran kalıtsal özellikler (çöl bitkilerinde kalın kütikula, kaktüs dikenleri).',
        '**Modifikasyon:** çevrenin etkisiyle ortaya çıkan, kalıtsal olmayan değişiklik (ortanca çiçeğinin toprak pH’ına göre renk değiştirmesi).',
        '**Doğal seçilim (Darwin):** ortama uygun özellikteki bireyler daha çok hayatta kalır ve ürer; zamanla popülasyonun gen yapısı değişir.',
        '**Varyasyon** kaynakları: mutasyon, krossing over, bağımsız dağılım, döllenme.',
        '**Biyoçeşitlilik:** gen, tür ve ekosistem çeşitliliği; Türkiye endemik tür bakımından zengindir.'
      ] }
    ],
    traps: [
      'Modifikasyonlar kalıtsal değildir; evrime katkıları yoktur.'
    ]
  }
};

export default L;
