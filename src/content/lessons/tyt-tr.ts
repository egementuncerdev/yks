import type { LessonSet } from './types';

const L: LessonSet = {
  'Sözcükte Anlam': {
    intro: 'Bir sözcüğün cümlede hangi anlamda kullanıldığını bulmak. Sorular çoğu zaman “altı çizili sözcük hangisinde aynı anlamda kullanılmıştır?” biçimindedir; sözcüğü tek başına değil cümlenin içinde düşünmek gerekir.',
    parts: [
      { h: 'Anlam türleri', items: [
        '**Gerçek (temel) anlam:** sözcüğün akla gelen ilk anlamı. “Ağır bir sandık.”',
        '**Yan anlam:** temel anlamla ilgili, ondan türemiş anlam. “Masanın ayağı”, “dağın eteği.”',
        '**Mecaz anlam:** temel anlamdan tamamen uzaklaşmış anlam. “Ağır sözler”, “soğuk bir insan.”',
        '**Terim anlam:** bir bilim ya da sanat dalına özgü anlam. “Açı” (matematik), “perde” (tiyatro).'
      ] },
      { h: 'Anlam ilişkileri', items: [
        '**Eş anlamlı:** yazılışı farklı, anlamı aynı (cevap – yanıt, okul – mektep).',
        '**Zıt anlamlı:** karşıt anlam (cömert – cimri). “Gelmek – gelmemek” zıt anlam değil, olumsuzluktur.',
        '**Eş sesli (sesteş):** yazılışı aynı, anlamı ilgisiz (yüz: surat / sayı / yüzmek).',
        '**Yakın anlamlı:** anlamları çok yakın ama tam aynı değil (üzgün – kırgın).',
        '**Somut – soyut:** beş duyuyla algılananlar somut (masa), algılanamayanlar soyut (sevgi).'
      ] },
      { h: 'Deyim, atasözü, ikileme', items: [
        '**Deyim:** genellikle mecaz anlamlı, kalıplaşmış söz öbeği; çoğu fiille biter (etekleri zil çalmak).',
        '**Atasözü:** genel bir öğüt ya da yargı bildiren, kalıplaşmış cümle (Damlaya damlaya göl olur).',
        '**İkileme:** anlamı güçlendirmek için tekrarlanan sözcükler (yavaş yavaş, eğri büğrü).',
        '**Ad aktarması (mecaz-ı mürsel):** bir şeyi ilgili olduğu başka bir adla anma (“Bütün sınıf güldü” → öğrenciler).'
      ] }
    ],
    traps: [
      'Altı çizili sözcüğü cümleden çıkarıp yerine eş anlamlısını koy; cümle aynı kalıyorsa anlamı doğru yakaladın.',
      'Yan anlam ile mecaz anlam karışır: yan anlamda temel anlamla bağ sürer (masanın ayağı yine bir “dayanak”tır).'
    ],
    example: {
      q: '“Bu haber hepimizi derinden sarstı.” cümlesinde “sarsmak” hangi anlamda kullanılmıştır?',
      a: 'Gerçek anlamı “bir şeyi şiddetle sallamak”tır. Burada fiziksel bir sallama yok; “çok etkilemek, üzmek” anlamında, yani mecaz anlamda kullanılmıştır.'
    }
  },

  'Cümlede Anlam': {
    intro: 'Cümlenin ne anlattığını, hangi yargıyı ya da duyguyu taşıdığını bulmak. Sorular “bu cümlede hangisi vardır?” ya da “hangi cümlede … anlamı yoktur?” biçiminde gelir.',
    parts: [
      { h: 'Sık sorulan anlam ilişkileri', items: [
        '**Neden – sonuç:** bir yargı diğerinin gerekçesidir (“Yağmur yağdığı için maç ertelendi.”). “-dığı için, -den, çünkü” ipucudur.',
        '**Amaç – sonuç:** eylem bir hedef için yapılır (“Sınavı kazanmak için çalışıyor.”). Amaç henüz gerçekleşmemiştir.',
        '**Koşul – sonuç:** yargı bir şarta bağlıdır (“Erken gelirsen görüşürüz.”).',
        '**Karşılaştırma:** iki şey kıyaslanır (“Bu kitap öncekinden daha akıcı.”).',
        '**Benzetme:** bir şey başka bir şeye benzetilir (“Gözleri deniz gibiydi.”).'
      ] },
      { h: 'Yargı türleri', items: [
        '**Öznel yargı:** kişisel görüş içerir, kanıtlanamaz (“En güzel mevsim sonbahardır.”).',
        '**Nesnel yargı:** doğruluğu kanıtlanabilir (“Türkiye’nin başkenti Ankara’dır.”).',
        '**Önyargı:** bir şey hakkında denemeden, peşin karar vermek (“Bu film kesin sıkıcıdır.”).',
        '**Örtülü anlam:** cümlede söylenmeyen ama anlaşılan bilgi (“Bu sefer de geç kaldı.” → daha önce de geç kalmıştı).',
        '**Kinaye ve ironi:** sözün tersini ya da başka anlamını kastetme (“Çok çalışmışsın, notların harika!” alaycı).'
      ] }
    ],
    traps: [
      'Amaç – sonuç ile neden – sonuç karışır. “İçin” sözcüğüne bak: önündeki eylem gerçekleştiyse neden, hedefse amaçtır.',
      'Öznel – nesnel sorusunda sıfatlara dikkat: “güzel, sıkıcı, en iyi” gibi değerlendirmeler cümleyi öznel yapar.'
    ],
    example: {
      q: '“Hasta olduğu için toplantıya katılamadı.” ve “Toplantıya katılmak için erkenden yola çıktı.” cümlelerindeki anlam ilişkileri nedir?',
      a: 'Birincide hastalık gerçekleşmiş bir durumdur ve katılamamanın nedenidir: neden – sonuç. İkincide toplantıya katılmak ulaşılmak istenen hedeftir: amaç – sonuç.'
    }
  },

  'Paragraf': {
    intro: 'TYT Türkçenin en büyük bölümü. Ana düşünce, yardımcı düşünce, konu, başlık, cümle yerleştirme ve paragraf tamamlama soruları gelir. Bilgi değil, dikkatli okuma ve eleme becerisi ister.',
    parts: [
      { h: 'Soru türleri', items: [
        '**Konu:** paragrafın neyden söz ettiği; genellikle bir sözcük ya da öbekle söylenir.',
        '**Ana düşünce:** yazarın okura asıl vermek istediği mesaj. Çoğu zaman giriş ya da sonuç cümlesindedir.',
        '**Yardımcı düşünce:** ana düşünceyi destekleyen ayrıntılar. “Değinilmemiştir” sorularında parçada olmayanı ararsın.',
        '**Akışı bozan cümle:** konu bütünlüğünü bozan, başka bir konuya kayan cümle.',
        '**İkiye bölme:** paragrafın konusunun değiştiği ya da yön değiştirdiği cümle.'
      ] },
      { h: 'Çözüm sırası', items: [
        'Önce soru kökünü oku: ne arandığını bilerek okumak zamanı yarıya indirir.',
        '“Ama, oysa, ancak, fakat” ile başlayan cümleler çoğu zaman yazarın asıl görüşünü verir.',
        '“Bu nedenle, kısacası, demek ki” ile başlayan cümleler sonuç ve ana düşünceyi verir.',
        'Şıkları parçayla tek tek karşılaştır; parçada geçmeyen ya da fazla genelleyen şıkkı ele.',
        'Günde en az 20 paragraf sorusu çöz: bu konu çalışmayla en hızlı artan konudur.'
      ] }
    ],
    traps: [
      'Doğru ama parçada söylenmeyen bilgiyi seçmek: cevap kendi bilgin değil, parçanın söyledikleri olmalı.',
      '“Her zaman, hiçbir, kesinlikle” gibi kesin ifadeler taşıyan şıklar çoğu zaman parçayı aşar.'
    ],
    example: {
      q: '“Pek çok öğrenci daha çok çalışmak için uykusundan kısıyor. Oysa beyin, gün içinde öğrendiklerini uykuda pekiştirir. Bu yüzden uykusuz çalışmak beklenenin tersine sonuç verebilir.” Parçanın ana düşüncesi nedir?',
      a: '“Oysa” ile yazar kendi görüşünü veriyor, “Bu yüzden” ile de sonuca bağlıyor. Ana düşünce: Yeterli uyku öğrenmenin kalıcı olması için gereklidir; uykudan kısmak verimi düşürür.'
    }
  },

  'Ses Bilgisi': {
    intro: 'Türkçedeki ses olayları ve ünlü uyumları. Sorular “hangisinde ünsüz yumuşaması vardır?” gibi bir ses olayını sözcükte bulmayı ister.',
    parts: [
      { h: 'Sesler', items: [
        'Ünlüler: a, e, ı, i, o, ö, u, ü. **Kalın:** a, ı, o, u. **İnce:** e, i, ö, ü.',
        '**Düz:** a, e, ı, i. **Yuvarlak:** o, ö, u, ü. **Geniş:** a, e, o, ö. **Dar:** ı, i, u, ü.',
        '**Sert (sert ünsüzler):** f, s, t, k, ç, ş, h, p. Akılda tutmak için: “**FıSTıKÇı ŞaHaP**”.'
      ] },
      { h: 'Ses olayları', items: [
        '**Büyük ünlü uyumu:** sözcüğün ünlüleri ya hep kalın ya hep ince olur (kitap uymaz: i ince, a kalın).',
        '**Ünsüz yumuşaması:** p, ç, t, k ile biten sözcüğe ünlüyle başlayan ek gelince b, c, d, g/ğ olur (kitap → kitabı, ağaç → ağacı).',
        '**Ünsüz benzeşmesi (sertleşme):** sert ünsüzle biten sözcüğe c, d, g ile başlayan ek gelince ç, t, k olur (kitapçı, sokakta).',
        '**Ünlü düşmesi:** ikinci hecedeki dar ünlü, ünlüyle başlayan ek alınca düşer (ağız → ağzı, oğul → oğlu, burun → burnu).',
        '**Ünlü daralması:** a, e ile biten fiile “-yor” gelince ı, i, u, ü olur (başla → başlıyor, bekle → bekliyor).',
        '**Ünsüz türemesi:** Arapça kökenli sözcüklerde ünsüz ikizleşir (his → hissetmek, af → affetmek).',
        '**Kaynaştırma:** ünlüyle biten sözcüğe ünlüyle başlayan ek gelince araya y, ş, s, n girer (kapı-y-a, iki-ş-er, oda-s-ı).'
      ] }
    ],
    traps: [
      'Tek heceli sözcüklerin çoğu yumuşamaz: top → topu, saç → saçı. Ünsüz yumuşamasını çok heceli sözcüklerde ara.',
      'Özel adlar yazımda yumuşamaz ama okunuşta yumuşar: Mehmet’e (okunuşu “Mehmed’e”).'
    ],
    example: {
      q: '“Ağzı”, “kitabı”, “başlıyor” ve “sokakta” sözcüklerindeki ses olaylarını bul.',
      a: 'Ağız + ı → ağzı: ünlü düşmesi. Kitap + ı → kitabı: ünsüz yumuşaması. Başla + yor → başlıyor: ünlü daralması. Sokak + da → sokakta: ünsüz benzeşmesi.'
    }
  },

  'Yazım Kuralları': {
    intro: 'TDK yazım kurallarına göre sözcüklerin ve eklerin doğru yazımı. En çok “de/da”, “ki”, “mi”, sayılar, birleşik sözcükler ve büyük harfler sorulur.',
    parts: [
      { h: 'Ayrı mı bitişik mi?', items: [
        '**Bağlaç “de/da” ayrı yazılır:** “Sen de gel.” Cümleden çıkarınca anlam bozulmuyorsa bağlaçtır. Bulunma eki “-de/-da” bitişiktir: “Evde.”',
        '**Bağlaç “ki” ayrı yazılır:** “Duydum ki gelmişsin.” Sıfat yapan “-ki” bitişiktir: “evdeki, yarınki.” Kalıplaşmış olanlar bitişik: belki, çünkü, sanki, oysaki, mademki.',
        '**Soru eki “mı, mi, mu, mü” ayrı yazılır**, kendinden sonraki ekler ona bitişir: “Geliyor musun?”',
        '**Sayılar ayrı yazılır:** altı yüz, on beş, iki bin yirmi yedi. Para ve çeklerde bitişik yazılabilir.',
        '“Hiçbir” ve “birçok” bitişik; “her şey”, “bir şey”, “hiç kimse” ayrı yazılır.'
      ] },
      { h: 'Büyük harf ve kısaltmalar', items: [
        'Özel adlar büyük harfle başlar: kişi, ülke, şehir, kurum adları (Ankara, Türk Dil Kurumu).',
        'Özel ada gelen ekler kesmeyle ayrılır: İstanbul’a. Kurum adlarına gelen ekler ayrılmaz: Türk Dil Kurumunun.',
        'Kısaltmalara gelen ek, kısaltmanın **okunuşuna** göre yazılır: TBMM’ye (te-be-me-me), TDK’ye (te-de-ke).',
        'Yer adlarında “deniz, dağ, göl” gibi tür bildiren sözcükler de büyük yazılır: Van Gölü, Ağrı Dağı.'
      ] }
    ],
    traps: [
      '“Herkes” s ile biter (herkez yanlış); “yanlış” “yanılmak”tan gelir (yalnış yanlış).',
      '“Şey” her zaman ayrı yazılır: bir şey, her şey, çok şey.'
    ],
    example: {
      q: '“Sende mi bize gelmiyorsun?” cümlesindeki yazım yanlışını düzelt.',
      a: '“De” çıkarılınca cümle “Sen mi bize gelmiyorsun?” olur ve anlam sürer; demek ki bu bağlaçtır, ayrı yazılmalıdır: “Sen de mi bize gelmiyorsun?”'
    }
  },

  'Noktalama İşaretleri': {
    intro: 'Hangi işaretin nerede kullanıldığı. Sorular “boş bırakılan yerlere hangi işaretler gelmelidir?” ya da “hangisinde virgül farklı görevdedir?” biçimindedir.',
    parts: [
      { h: 'En çok sorulanlar', items: [
        '**Virgül (,):** eş görevli sözcükleri ayırır (elma, armut ve kiraz); hitaplardan ve “evet, hayır” gibi cevaplardan sonra; uzun cümlede özneden sonra.',
        '**Noktalı virgül (;):** virgüllerle ayrılmış türleri birbirinden ayırır; ögeleri virgülle ayrılmış sıralı cümleleri ayırır.',
        '**İki nokta (:):** açıklama ve örnek verilecekse kendinden önceki cümlenin sonuna konur.',
        '**Üç nokta (…):** bilerek tamamlanmamış cümlelerin sonuna; söylenmek istenmeyen sözlerin yerine.',
        '**Kesme işareti (’):** özel adlara gelen ekleri ayırır (Ankara’ya); kurum adlarına gelen ekler ayrılmaz.',
        '**Tırnak işareti (“ ”):** başkasından olduğu gibi aktarılan sözler; vurgulanmak istenen sözcükler.',
        '**Kısa çizgi (-):** satır sonunda bölünen sözcükte; ara söz ve ekleri göstermekte.'
      ] }
    ],
    traps: [
      'Cümle içindeki soru ifadesinde soru işareti cümle sonuna gelir; dolaylı soruda (“Ne zaman geleceğini sordu.”) soru işareti konmaz.',
      'Sıralı cümleler arasına virgül, ögeleri virgülle ayrılmış sıralı cümleler arasına noktalı virgül konur.'
    ],
    example: {
      q: '“Şunu unutma___ çalışmadan başarı olmaz.” cümlesinde boşluğa hangi işaret gelir?',
      a: 'Boşluktan sonraki bölüm, “şunu” sözüyle işaret edilen düşünceyi açıklıyor. Açıklamadan önce iki nokta konur: “Şunu unutma: çalışmadan başarı olmaz.”'
    }
  },

  'Sözcükte Yapı ve Ekler': {
    intro: 'Sözcüğün kök ve eklerine ayrılması. Sorularda bir sözcüğün yapısı (basit, türemiş, birleşik) ya da aldığı ekin türü (yapım/çekim) sorulur.',
    parts: [
      { h: 'Kök ve ekler', items: [
        '**Kök:** sözcüğün anlamlı, daha küçük parçalara ayrılamayan bölümü. İsim kökü (göz) ya da fiil kökü (gör-) olur.',
        '**Yapım eki:** sözcüğün anlamını ya da türünü değiştirir, yeni sözcük türetir (göz-lük, gör-gü, yaz-ar).',
        '**Çekim eki:** sözcüğe yalnız görev kazandırır, anlamı değiştirmez: çoğul (-ler), iyelik (-im), hâl (-i, -e, -de, -den), kip ve kişi ekleri.',
        'Sıra: önce yapım ekleri, sonra çekim ekleri gelir (göz-lük-çü-ler-imiz).'
      ] },
      { h: 'Yapıca sözcükler', items: [
        '**Basit:** yalnız kökten oluşur ya da yalnız çekim eki almıştır (kitap, kitaplar).',
        '**Türemiş:** en az bir yapım eki almıştır (kitaplık, yazar).',
        '**Birleşik:** iki ya da daha çok sözcüğün birleşmesiyle oluşur (hanımeli, açıkgöz, hissetmek).',
        'Fiilden fiil yapan ekler çatı ekleridir: -dır, -t, -l, -n, -ş (yaz-dır-, gör-ün-).'
      ] }
    ],
    traps: [
      'Çoğul eki (-ler) yapım eki değildir: “kitaplar” basit yapılıdır.',
      'Kök bulurken sözcüğü sondan eklerine ayır ve anlamlı en küçük parçaya kadar in; “sev-gi-li” kökü “sev-”dir.'
    ],
    example: {
      q: '“Gözlükçülerimiz” sözcüğünü köküne ve eklerine ayır.',
      a: 'göz (isim kökü) + -lük (yapım: göz → gözlük) + -çü (yapım: meslek) + -ler (çekim: çoğul) + -imiz (çekim: iyelik). İki yapım eki aldığı için yapıca türemiştir.'
    }
  },

  'İsim, Sıfat ve Zamir': {
    intro: 'Sözcük türlerinin ilk grubu. Sorular cümledeki bir sözcüğün türünü ya da türünün değişip değişmediğini sorar. Bir sözcüğün türü cümledeki görevine göre belirlenir.',
    parts: [
      { h: 'İsim (ad)', items: [
        'Varlıkları, kavramları karşılayan sözcükler: masa, sevgi, Ankara.',
        '**Özel isim – cins isim:** tek varlığı karşılayan özeldir (Ali), türün bütününü karşılayan cinstir (insan).',
        '**Topluluk ismi:** tekil hâlde birden çok varlığı karşılar (ordu, sürü, aile).'
      ] },
      { h: 'Sıfat (ön ad)', items: [
        'İsmi niteler ya da belirtir; ismin önüne gelir. “**Güzel** gün”, “**üç** kitap”.',
        '**Niteleme sıfatı:** “nasıl?” sorusuna cevap verir (kırmızı elma).',
        '**Belirtme sıfatları:** işaret (bu ev), sayı (iki kalem), belgisiz (bazı insanlar), soru (hangi yol?).',
        'Sıfatın nitelediği isim düşerse sıfat isimleşir: “**Gençler** geldi.”'
      ] },
      { h: 'Zamir (adıl)', items: [
        'İsmin yerini tutar: ben, sen, o; bu, şu; biri, kimse; kim, ne.',
        '**İşaret zamiri ile işaret sıfatı:** “**Bu** kitap” (sıfat, ismin önünde) – “**Bunu** al” (zamir, ismin yerinde).',
        '**Dönüşlülük zamiri:** “kendi” (Kendini çok yordu).'
      ] }
    ],
    traps: [
      'Aynı sözcük farklı türde olabilir: “Güzel bir gün” (sıfat) – “Güzel konuştu” (zarf) – “Güzeller geldi” (isim).',
      'İşaret sözcüğünden sonra isim varsa sıfat, yoksa (ek almışsa) zamirdir.'
    ],
    example: {
      q: '“O, bana hiçbir şey söylemedi.” ve “O ev çok eski.” cümlelerindeki “o” sözcüklerinin türleri nedir?',
      a: 'Birincide “o” bir kişinin yerine kullanılmıştır: kişi zamiri. İkincide “ev” isminin önünde onu işaret ediyor: işaret sıfatı.'
    }
  },

  'Zarf, Edat, Bağlaç, Ünlem': {
    intro: 'Sözcük türlerinin ikinci grubu. En çok zarfın türü ile “ile, de, ki” gibi sözcüklerin bağlaç mı edat mı olduğu sorulur.',
    parts: [
      { h: 'Zarf (belirteç)', items: [
        'Fiili, fiilimsiyi, sıfatı ya da başka bir zarfı niteler.',
        '**Durum (nasıl?):** hızlı koştu. **Zaman (ne zaman?):** yarın gel. **Yer-yön (nereye?):** içeri gir (yalın hâlde).',
        '**Miktar (ne kadar?):** çok güzel, en iyi. **Soru:** nasıl, niçin, ne zaman.',
        '“İçeri, dışarı, yukarı, geri” ek almadan fiili yön bakımından niteliyorsa zarftır; ek alırsa isimdir (içeriye girdi).'
      ] },
      { h: 'Edat, bağlaç, ünlem', items: [
        '**Edat (ilgeç):** tek başına anlamı yoktur, sözcükler arasında anlam ilgisi kurar: gibi, için, kadar, ile, göre, rağmen.',
        '**Bağlaç:** sözcükleri ya da cümleleri bağlar: ve, ama, fakat, çünkü, ile (ve anlamında), de, ki, hem… hem.',
        '**“İle” testi:** yerine “ve” konabiliyorsa bağlaç (Annemle babam geldi), konamıyorsa edattır (Kalemle yazdı).',
        '**Ünlem:** duygu ya da seslenme bildirir: ah, eyvah, hey, of.'
      ] }
    ],
    traps: [
      'Bağlaçlar cümleden çıkarıldığında anlam daralır ama cümle bozulmaz; edatlar çıkarılınca cümle bozulur.',
      'Zarflar sıfatı da niteleyebilir: “**çok** güzel bir gün” – burada “çok” miktar zarfıdır.'
    ],
    example: {
      q: '“Annemle babam yarın geliyor.” ve “Mektubu kurşun kalemle yazdı.” cümlelerinde “-le” hangi türdedir?',
      a: 'Birincide “annem ve babam” denebilir: bağlaç. İkincide “kalem ve yazdı” olmaz; “kalem aracılığıyla” anlamı var: edat.'
    }
  },

  'Fiil, Ek Fiil ve Fiilimsi': {
    intro: 'Fiillerin kip ve kişi ekleri, isimleri yüklem yapan ek fiil ve fiilden türeyip isim, sıfat ya da zarf görevi gören fiilimsiler.',
    parts: [
      { h: 'Fiil kipleri', items: [
        '**Haber kipleri:** görülen geçmiş (-dı), öğrenilen geçmiş (-mış), şimdiki (-yor), gelecek (-acak), geniş (-ar/-ır).',
        '**Dilek kipleri:** gereklilik (-malı), istek (-a/-e), şart (-sa/-se), emir (eksiz ya da -sın).',
        '**Anlam kayması:** bir kip başka bir zamanın anlamını taşıyabilir: “Yarın gidiyorum.” (şimdiki zaman, gelecek anlamında).'
      ] },
      { h: 'Ek fiil', items: [
        'İsim soylu sözcükleri yüklem yapar ya da çekimli fiili birleşik zamanlı yapar.',
        'Biçimleri: **-dir** (geniş zaman), **-di** (hikâye), **-miş** (rivayet), **-se** (şart). “Hava soğuk-tu” → hikâye.'
      ] },
      { h: 'Fiilimsiler', items: [
        '**İsim-fiil:** -ma, -ış, -mak (okumayı severim, gülüş).',
        '**Sıfat-fiil:** -an, -ası, -mez, -ar, -dık, -acak, -mış (okunan kitap, gelecek hafta).',
        '**Zarf-fiil:** -ıp, -arak, -ınca, -ken, -madan, -dıkça (gülerek girdi, gelince ara).',
        'Fiilimsi çekimli fiil değildir; yalnız cümlede yan cümlecik kurar.'
      ] }
    ],
    traps: [
      'Kalıcı isim olmuş sözcükler fiilimsi sayılmaz: “dolma, kazma, çakmak, dondurma” (birer nesne adı).',
      '“-ma” olumsuzluk eki ile isim-fiil eki karışır: “Gelme!” (olumsuz emir) – “Gelmesi gerek” (isim-fiil).'
    ],
    example: {
      q: '“Okunan kitapları rafa dizip odadan çıktı.” cümlesindeki fiilimsileri türleriyle bul.',
      a: '“Okunan” -an ekiyle “kitapları” nitelediği için sıfat-fiil. “Dizip” -ıp ekiyle eylemi zarf gibi bağladığı için zarf-fiil. “Çıktı” çekimli fiildir, fiilimsi değildir.'
    }
  },

  'Fiilde Çatı': {
    intro: 'Fiilin nesne alıp almamasına (geçişlilik) ve özneyle ilişkisine (etken, edilgen, dönüşlü, işteş) göre sınıflandırılması.',
    parts: [
      { h: 'Nesneye göre', items: [
        '**Geçişli:** nesne alabilir; “neyi, kimi?” sorusuna cevap verir (Kitabı okudu).',
        '**Geçişsiz:** nesne almaz (Çocuk uyudu).',
        '**Ettirgen:** geçişli fiile -dır, -t eki gelerek eylem başkasına yaptırılır (yazdırmak, okutmak).',
        '**Oldurgan:** geçişsiz fiil geçişli olur (uyumak → uyutmak).'
      ] },
      { h: 'Özneye göre', items: [
        '**Etken:** özne bellidir, eylemi yapan odur (Ali kapıyı açtı).',
        '**Edilgen:** eylemi yapan belli değildir, “-l, -n” eki alır (Kapı açıldı). Sözde özne vardır.',
        '**Dönüşlü:** özne eylemi kendine yapar (Yıkandı, giyindi, övündü).',
        '**İşteş:** eylem birlikte ya da karşılıklı yapılır, “-ş” eki alır (Koşuştular, tartıştılar).'
      ] }
    ],
    traps: [
      '-n eki hem edilgen hem dönüşlü yapar: “Kapı açıldı” (edilgen; eylemi yapan belli değil) – “Çocuk yıkandı” (kendini yıkadıysa dönüşlü).',
      'Edilgen cümlede “tarafından” ile eylemi yapan söylenebilir: “Kapı Ali tarafından açıldı.”'
    ],
    example: {
      q: '“Mektup dün postaya verildi.” cümlesinin yüklemi çatı bakımından nedir?',
      a: '“Ver-” fiiline -il eki gelmiş. Mektubu kimin verdiği belli değil, “mektup” sözde öznedir. Yüklem edilgendir.'
    }
  },

  'Cümlenin Ögeleri': {
    intro: 'Cümleyi oluşturan ögeleri (yüklem, özne, nesne, dolaylı tümleç, zarf tümleci) bulmak. Her zaman önce yüklemi bul, sonra ögeleri yükleme soru sorarak çıkar.',
    parts: [
      { h: 'Ögeler ve soruları', items: [
        '**Yüklem:** cümlenin temel ögesi; iş, oluş ya da yargı bildirir.',
        '**Özne:** yüklemdeki eylemi yapan; “kim, ne?” sorusunun cevabı.',
        '**Belirtili nesne:** “neyi, kimi?” sorusunun cevabı; -ı hâl ekini alır (kitabı okudu).',
        '**Belirtisiz nesne:** “ne?” sorusunun cevabı; ek almaz (kitap okudu).',
        '**Dolaylı tümleç (yer tamlayıcısı):** “nereye, nerede, nereden, kime, kimde?” Hâl eki alır (okula gitti).',
        '**Zarf tümleci:** “nasıl, ne zaman, niçin, ne kadar?” Yüklemi durum, zaman, miktar yönünden tamamlar.'
      ] },
      { h: 'Çözüm sırası', items: [
        '1) Yüklemi bul. 2) “Kim, ne?” ile özneyi bul. 3) Nesneyi ve diğer ögeleri sor.',
        'Söz öbekleri bölünmez: “Dün akşam” tek zarf tümlecidir, “bahçedeki büyük ağaç” tek ögedir.',
        '**Ara söz:** ögeleri açıklayan, iki virgül ya da çizgi arasındaki söz; açıkladığı ögenin parçası sayılır.'
      ] }
    ],
    traps: [
      '“Nereye?” sorusunun cevabı her zaman dolaylı tümleç değildir: hâl eki almamış “içeri, eve doğru” gibi yön sözleri zarf tümlecidir.',
      'Edilgen cümlede “sözde özne” bulunur; “tarafından” ile verilen söz özne değildir.'
    ],
    example: {
      q: '“Ahmet her sabah okula yürüyerek gider.” cümlesinin ögelerini bul.',
      a: 'Yüklem: gider. Kim gider? Ahmet (özne). Ne zaman? her sabah (zarf tümleci). Nereye? okula (yönelme ekli, dolaylı tümleç). Nasıl? yürüyerek (zarf tümleci).'
    }
  },

  'Cümle Türleri': {
    intro: 'Cümlelerin yüklemin türüne, yerine, anlamına ve yapısına göre sınıflandırılması.',
    parts: [
      { h: 'Dört sınıflandırma', items: [
        '**Yüklemin türüne göre:** fiil cümlesi (yüklem çekimli fiil: “Geldi.”) – isim cümlesi (yüklem isim soylu: “Ev büyük.”).',
        '**Yüklemin yerine göre:** kurallı (yüklem sonda) – devrik (yüklem sonda değil: “Gel buraya.”).',
        '**Anlamına göre:** olumlu – olumsuz (“-me, değil, yok”) – soru – ünlem.',
        '**Yapısına göre:** basit (tek yargı) – birleşik (yan cümleli: fiilimsili, şartlı, “ki”li, iç içe) – sıralı – bağlı (bağlaçla bağlanmış).'
      ] },
      { h: 'Birleşik cümle türleri', items: [
        '**Şartlı:** “-sa, -se” ile kurulmuş yan cümle (Hava güzel olursa çıkarız).',
        '**Fiilimsili:** yan cümle fiilimsiyle kurulur (Eve gelince ara).',
        '**“Ki”li:** “ki” ile bağlanır (Duydum ki gidiyormuşsun).',
        '**İç içe:** bir cümle diğerinin ögesi olur, genellikle tırnakla (“Yarın gel.” dedi).'
      ] }
    ],
    traps: [
      'Anlamca olumlu, yapıca olumsuz cümleler olur: “Gelmez olur mu?” yapıca olumsuz, anlamca olumludur.',
      'İsim cümlesinin yüklemi ek fiil alabilir: “Hava soğuktu.” isim cümlesidir.'
    ],
    example: {
      q: '“Hava güzel olursa pikniğe gideriz.” cümlesini yapısına ve yüklemine göre sınıflandır.',
      a: '“Olursa” şart ekiyle kurulmuş bir yan cümle var: yapıca şartlı birleşik cümle. Yüklem “gideriz” çekimli fiil: fiil cümlesi. Yüklem sonda: kurallı.'
    }
  },

  'Anlatım Bozuklukları': {
    intro: 'Cümlenin anlam ya da dil bilgisi yönünden kusurlu olması. Sorular “hangi cümlede anlatım bozukluğu vardır?” ya da bozukluğun nedenini sorar.',
    parts: [
      { h: 'Anlamla ilgili bozukluklar', items: [
        '**Gereksiz sözcük:** aynı anlam iki kez verilir (“geri dönmek”, “sebebi … -den dolayı”).',
        '**Çelişen sözcükler:** kesinlik ile tahmin bir arada (“kesinlikle … olabilir”).',
        '**Yanlış anlamda sözcük:** anlamı duruma ters düşen sözcük (“Fiyatlar artınca alım gücü yükseldi.” → düştü olmalı).',
        '**Mantık ve sıralama hatası:** “Değil iki saat, beş dakika bile bekleyemem.” doğrudur; sıra ters çevrilirse anlam bozulur.',
        '**Deyim yanlışı:** deyimin yanlış anlamda kullanılması.'
      ] },
      { h: 'Dil bilgisiyle ilgili bozukluklar', items: [
        '**Özne – yüklem uyumsuzluğu:** tekil – çoğul ya da kişi uyuşmaması.',
        '**Ortak öge yanlışı:** iki yükleme ortak verilen öge birine uymuyor (“Çocuklarını hem seviyor hem güveniyor.” → “çocuklarını güveniyor” olmaz; “çocuklarına güveniyor” gerekir).',
        '**Tamlama yanlışı:** iyelik ya da tamlayan eksik (“Bu kitabı yazarı” → “Bu kitabın yazarı”).',
        '**Çatı uyuşmazlığı:** etken ve edilgen yüklemler aynı özneye bağlanır.',
        '**Ek eksikliği ya da yanlışı:** hâl eki eksik ya da yanlış.'
      ] }
    ],
    traps: [
      'Ortak öge testinde ögeyi her yüklemle ayrı ayrı söyle; birinde kulağa yanlış geliyorsa bozukluk oradadır.',
      '“Sebep”, “-den dolayı”, “yüzünden” birlikte kullanılmaz; birini seç.'
    ],
    example: {
      q: '“Bunun sebebi yağmurun çok yağmasından dolayıdır.” cümlesindeki bozukluğu düzelt.',
      a: '“Sebep” ile “-den dolayı” aynı anlamı veriyor: gereksiz sözcük. Doğrusu: “Bunun sebebi yağmurun çok yağmasıdır.”'
    }
  }
};

export default L;
