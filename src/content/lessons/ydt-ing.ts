import type { LessonSet } from './types';

const L: LessonSet = {
  'Kelime Bilgisi': {
    intro: 'YDT’nin en büyük bölümü. Sorular cümledeki boşluğa anlamca uygun sözcüğü seçmeni ister; eş anlamlı sözcükleri ve kalıpları bilmek gerekir.',
    parts: [
      { h: 'Nasıl çalışılır?', items: [
        'Her gün 20–30 yeni sözcük; tek başına değil, örnek cümle içinde öğren.',
        'Sık çıkan akademik sözcükler: acquire, considerable, diminish, enhance, reluctant, significant, abandon, accurate, emerge, sustain.',
        'Sözcük ailesini birlikte öğren: decide – decision – decisive – decisively.',
        '**Ön ekler:** un-, in-, dis- (olumsuz), re- (yeniden), over- (aşırı), mis- (yanlış).',
        '**Son ekler:** -tion, -ment, -ness (isim); -ful, -ous, -able (sıfat); -ly (zarf); -ize (fiil).'
      ] },
      { h: 'Çözüm yolu', items: [
        'Boşluğun hangi türde sözcük istediğini bul (isim, sıfat, fiil, zarf).',
        'Cümledeki bağlaçlara bak: although (zıtlık), because (neden), therefore (sonuç).',
        'Şıklardan yalnız biri anlamca uyar; diğerleri genelde türü doğru ama anlamı yanlıştır.'
      ] }
    ],
    example: {
      q: 'Despite the heavy rain, the farmers were ---- to leave their fields. (a) eager (b) reluctant (c) delighted',
      a: '“Despite” zıtlık kurar: yağmura rağmen tarlayı bırakmak istemiyorlar. Doğru cevap “reluctant” (isteksiz).'
    }
  },

  'Tenses': {
    intro: 'İngilizce zamanlar: eylemin ne zaman olduğu ve tamamlanıp tamamlanmadığı. Zaman zarfları doğru cevabın en güçlü ipucudur.',
    parts: [
      { h: 'Zamanlar', items: [
        '**Simple present:** alışkanlık, genel doğru (every day, usually).',
        '**Present continuous:** şu an olan (now, at the moment).',
        '**Present perfect:** geçmişte başlayıp etkisi süren ya da zamanı belirsiz (since, for, already, yet, so far, ever, never).',
        '**Simple past:** geçmişte bitmiş (yesterday, ago, in 2010).',
        '**Past perfect:** geçmişteki başka bir eylemden önce (by the time, before + past).',
        '**Future:** will (anlık karar, tahmin), be going to (plan).',
        '**Future perfect:** gelecekte bir ana kadar bitmiş olacak (by next year).'
      ] }
    ],
    traps: [
      '“Since” başlangıç noktası (since 2015), “for” süre (for ten years) ile kullanılır.',
      'Belirli geçmiş zaman zarfıyla (yesterday) present perfect kullanılmaz.'
    ],
    example: {
      q: 'By the time we arrived, the film ---- . (a) started (b) had already started (c) has started',
      a: '“By the time” geçmişte bir an veriyor; film o andan önce başlamış: past perfect → had already started.'
    }
  },

  'Modals': {
    intro: 'Yetenek, zorunluluk, olasılık, izin ve tavsiye bildiren yardımcı fiiller.',
    parts: [
      { h: 'Anlamlar', items: [
        '**can / could:** yetenek, izin, olasılık. **be able to:** yetenek (bütün zamanlarda).',
        '**must:** güçlü zorunluluk (kural) ve güçlü çıkarım (“He must be tired.”). **have to:** dış zorunluluk.',
        '**mustn’t:** yasak. **don’t have to:** gerek yok (zorunlu değil).',
        '**should / ought to:** tavsiye. **may / might:** olasılık, izin.',
        '**Perfect modals:** must have done (kesin çıkarım), might have done (olasılık), should have done (yapmalıydı ama yapmadı), can’t have done (imkânsız).'
      ] }
    ],
    traps: [
      '“mustn’t” ile “don’t have to” çok farklıdır: biri yasak, diğeri serbestlik bildirir.'
    ]
  },

  'Passive Voice': {
    intro: 'Eylemi yapanın değil, eyleme maruz kalanın öne çıktığı yapı: be + V3.',
    parts: [
      { h: 'Yapı', items: [
        'Zamanı “be” taşır: is made, was made, has been made, will be made, is being made.',
        'Eylemi yapan önemliyse “by” ile verilir: The book was written by Orhan Pamuk.',
        'Modallarla: must be done, can be seen.',
        '**Causative:** have / get something done (bir şeyi yaptırmak): I had my car repaired.'
      ] }
    ],
    example: {
      q: 'The letter ---- yesterday. (a) sent (b) was sent (c) has been sent',
      a: 'Mektup kendisi göndermez: edilgen. “Yesterday” belirli geçmiş: was sent.'
    }
  },

  'Conditionals ve Wish': {
    intro: 'Koşul cümleleri (if) ve dilek–pişmanlık bildiren wish / if only yapıları.',
    parts: [
      { h: 'Koşul türleri', items: [
        '**Zero:** genel doğru. If + present, present. (If you heat ice, it melts.)',
        '**First:** olası gelecek. If + present, will + V1. (If it rains, we will stay.)',
        '**Second:** şimdiki gerçek dışı. If + past, would + V1. (If I were rich, I would travel.)',
        '**Third:** geçmişte gerçek dışı. If + past perfect, would have + V3. (If I had studied, I would have passed.)',
        '**Unless** = if not. **Provided / as long as:** şartıyla.'
      ] },
      { h: 'Wish', items: [
        'Şimdiki durum için: wish + past (I wish I knew).',
        'Geçmiş için pişmanlık: wish + past perfect (I wish I had gone).',
        'Başkasının davranışından şikâyet: wish + would (I wish he would stop).'
      ] }
    ],
    traps: [
      'İkinci tip koşulda “to be” bütün öznelerde “were” olabilir: If I were you…'
    ]
  },

  'Relative Clauses': {
    intro: 'İsmi niteleyen yan cümleler (sıfat cümlecikleri) ve ilgi zamirleri.',
    parts: [
      { h: 'İlgi zamirleri', items: [
        '**who:** insan. **which:** nesne, hayvan. **that:** insan ve nesne (yalnız tanımlayıcı cümlede).',
        '**whose:** iyelik (the man whose car was stolen).',
        '**where:** yer (the town where I was born). **when:** zaman. **why:** neden (the reason why).',
        '**Non-defining** (virgüllü, ek bilgi): that kullanılmaz.',
        'Nesne konumundaki ilgi zamiri düşebilir: the book (that) I read.',
        'Kısaltma: the man sitting there (aktif), the book written by him (pasif).'
      ] }
    ],
    traps: [
      'Edattan sonra “that” gelmez: the house in which I live (in that değil).'
    ]
  },

  'Noun Clauses': {
    intro: 'Cümlede isim görevi gören yan cümleler: that, if/whether ve soru sözcükleriyle.',
    parts: [
      { h: 'Yapı', items: [
        '**that:** I know that he is right.',
        '**if / whether:** I wonder whether she will come.',
        '**Soru sözcüğü + düz cümle sırası:** I don’t know where he lives (where does he live değil).',
        '**Dolaylı anlatım:** zaman bir geri kayar: She said, “I am tired.” → She said (that) she was tired.',
        'Öneri ve gereklilik fiillerinden sonra yalın fiil: It is essential that he be on time.'
      ] }
    ],
    example: {
      q: 'She asked me where I ---- . (a) live (b) lived (c) did live',
      a: 'Dolaylı soru: düz cümle sırası ve zaman bir geri kayar → lived.'
    }
  },

  'Adverbial Clauses ve Bağlaçlar': {
    intro: 'Zaman, neden, sonuç, zıtlık, amaç ve koşul bildiren bağlaçlar. Anlam ilişkisi doğru bağlacı seçtirir.',
    parts: [
      { h: 'Bağlaçlar', items: [
        '**Zıtlık:** although, even though, though (+ cümle); despite, in spite of (+ isim / V-ing); whereas, while (karşılaştırma); however, nevertheless (cümle başı).',
        '**Neden:** because, since, as (+ cümle); because of, due to (+ isim).',
        '**Sonuç:** so, therefore, thus, consequently; so … that, such … that.',
        '**Amaç:** so that, in order to, so as to.',
        '**Zaman:** when, while, as soon as, until, by the time, once.',
        '**Eşli bağlaçlar:** both … and, either … or, neither … nor, not only … but also.'
      ] }
    ],
    traps: [
      '“Although” ile “despite” aynı anlamdadır ama ilkinden sonra cümle, ikincisinden sonra isim gelir.'
    ]
  },

  'Gerund ve Infinitive': {
    intro: 'Fiillerden sonra V-ing mi, to + V1 mi geleceği.',
    parts: [
      { h: 'Kurallar', items: [
        '**V-ing alanlar:** enjoy, avoid, finish, mind, suggest, consider, keep, deny, admit, look forward to, be used to.',
        '**to + V1 alanlar:** want, decide, plan, hope, refuse, agree, promise, afford, manage, would like.',
        '**Anlamı değişenler:** stop doing (bırakmak) – stop to do (yapmak için durmak); remember doing (yaptığını hatırlamak) – remember to do (yapmayı unutmamak).',
        'Edatlardan sonra her zaman V-ing gelir: interested in learning.',
        '**make / let + nesne + V1:** The teacher made us write.'
      ] }
    ],
    traps: [
      '“Look forward to” ve “be used to” kalıplarındaki “to” edattır: ardından V-ing gelir.'
    ]
  },

  'Prepositions ve Phrasal Verbs': {
    intro: 'Edatlar ve edat almış fiiller (phrasal verbs). Kalıpları ezberlemek gerekir.',
    parts: [
      { h: 'Edatlar', items: [
        '**Zaman:** at (saat: at 9), on (gün, tarih: on Monday), in (ay, yıl, mevsim: in 1950).',
        '**Yer:** at (nokta), on (yüzey), in (iç).',
        'Kalıplar: depend on, consist of, interested in, responsible for, aware of, capable of.'
      ] },
      { h: 'Phrasal verbs', items: [
        'look after (bakmak), look for (aramak), look up (sözlükte bakmak), give up (vazgeçmek), put off (ertelemek), turn down (reddetmek), carry out (gerçekleştirmek), find out (öğrenmek), take off (havalanmak, çıkarmak), bring up (yetiştirmek, konu açmak), run out of (tükenmek), come across (rastlamak).'
      ] }
    ]
  },

  'Cloze Test': {
    intro: 'Bir paragrafta boş bırakılan yerlere uygun dil bilgisi yapısı ya da sözcüğü yerleştirme.',
    parts: [
      { h: 'Çözüm yolu', items: [
        'Önce paragrafın tamamını hızlıca oku; konuyu ve zamanı belirle.',
        'Boşluğun önü ve arkasına bak: edat mı, bağlaç mı, zaman mı, sözcük mü isteniyor?',
        'Paragrafın zamanı tutarlıdır; geçmişte anlatılan bir olayda boşluğa genellikle geçmiş zaman gelir.',
        'Bağlaç boşluklarında iki cümle arasındaki anlam ilişkisini bul (zıtlık, sonuç, ekleme).',
        'Seçtiğin cevabı yerine koyup cümleyi baştan oku.'
      ] }
    ]
  },

  'Cümle Tamamlama': {
    intro: 'Verilen yarım cümleyi anlamca ve dil bilgisince uygun biçimde tamamlama.',
    parts: [
      { h: 'Çözüm yolu', items: [
        'Verilen kısımdaki bağlaca bak: although (zıtlık), because (neden), if (koşul), so that (amaç).',
        'Zaman uyumu: ana cümle ile yan cümlenin zamanları uyumlu olmalı (if + past → would).',
        'Önce dil bilgisi uyumsuz şıkları ele, sonra anlamca uymayanı ele.',
        'Özne ve zamir uyumuna dikkat et (they → their).'
      ] }
    ],
    example: {
      q: 'Although he was very tired, ---- . (a) he went to bed early (b) he continued to work until midnight',
      a: '“Although” zıtlık kurar: yorgun olmasına rağmen beklenmeyen bir şey yapmalı → he continued to work until midnight.'
    }
  },

  'Çeviri (İngilizce–Türkçe)': {
    intro: 'İngilizce cümlenin en doğru Türkçe karşılığını (ya da tersini) bulma.',
    parts: [
      { h: 'Çözüm yolu', items: [
        'Önce ana yapıyı bul: özne, yüklem ve zaman.',
        'Zamanı kontrol et: present perfect “-mış/-dı” (deneyim), past perfect “-mıştı”.',
        'Bağlaç ve kalıpları eşleştir: unless “-mezse”, not only … but also “sadece … değil, aynı zamanda”.',
        'Şıklarda anlam kayması olan ayrıntıları ara: miktar (some/all), olumsuzluk, kesinlik (may/must).',
        'En “güzel” çeviri değil, anlamı eksiksiz veren çeviri doğrudur.'
      ] }
    ]
  },

  'Okuma Parçası': {
    intro: 'Bir İngilizce metni okuyup ana fikir, ayrıntı, çıkarım ve sözcük anlamı sorularını cevaplama.',
    parts: [
      { h: 'Çözüm yolu', items: [
        'Önce soruları oku, sonra metni: ne aradığını bilerek okumak zaman kazandırır.',
        'Ana fikir genellikle ilk ya da son paragraftadır.',
        'Ayrıntı sorularında sorudaki anahtar sözcüğü metinde bul ve çevresini dikkatle oku.',
        'Çıkarım sorularında metinde doğrudan yazmayan ama metinden kesin çıkan bilgiyi seç.',
        'Metinde olmayan bilgiyi kendi bilgine dayanarak seçme.'
      ] }
    ]
  },

  'Diyalog ve Durum': {
    intro: 'Bir konuşmadaki boşluğu tamamlama ya da bir duruma uygun sözü seçme.',
    parts: [
      { h: 'Çözüm yolu', items: [
        'Boşluktan sonraki cevaba bak: soru mu, onay mı, ret mi bekleniyor?',
        'Konuşmacıların ilişkisini ve ortamı anla (resmî mi, arkadaşça mı).',
        'Durum sorularında kalıplar: tebrik (Congratulations!), özür (I’m sorry for…), rica (Would you mind…?), öneri (Why don’t we…?), fiyat (How much does it cost?).'
      ] }
    ]
  },

  'Paragraf Tamamlama ve Anlam Bütünlüğü': {
    intro: 'Paragrafa uygun cümleyi yerleştirme ve anlam bütünlüğünü bozan cümleyi bulma.',
    parts: [
      { h: 'Çözüm yolu', items: [
        'Paragrafın konusunu ilk cümleden belirle.',
        'Akışı bozan cümle konuyla ilgili görünebilir ama paragrafın odağından sapar.',
        'Boşluktan önceki ve sonraki cümleleri birbirine bağlayan cümleyi seç; zamirlere (this, they, it) dikkat et.',
        'Bağlaçlar ipucudur: however yön değiştirir, moreover ekleme yapar.'
      ] }
    ],
    example: {
      q: '(I) Coffee is one of the most popular drinks in the world. (II) It is grown in many tropical countries. (III) Brazil is the largest producer. (IV) Tea, on the other hand, was first used in China. (V) Coffee beans are roasted before use. Hangi cümle akışı bozar?',
      a: 'Paragraf kahve hakkında; IV. cümle çaya geçiyor. Cevap IV.'
    }
  }
};

export default L;
