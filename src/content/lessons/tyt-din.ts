import type { LessonSet } from './types';

const L: LessonSet = {
  'Bilgi ve İnanç': {
    intro: 'İslam’da bilginin kaynakları ve iman esasları. Kavram ve ayet yorumu soruları gelir.',
    parts: [
      { h: 'Bilginin kaynakları', items: [
        'Duyular, akıl, vahiy (ve sezgi).',
        'İslam akla önem verir; akıl dinî sorumluluğun şartıdır.'
      ] },
      { h: 'İman esasları', items: [
        'Allah’a, meleklere, kitaplara, peygamberlere, ahirete, kaza ve kadere iman.',
        '**İman:** kalple tasdik ve dille ikrar. **Amel:** ibadet ve davranışlar.',
        'Tevhit: Allah’ın birliği. Allah’ın sıfatları: zati sıfatlar (vücut, kıdem, beka, vahdaniyet…) ve subuti sıfatlar (hayat, ilim, irade, kudret…).'
      ] }
    ],
    traps: [
      'Namaz, oruç gibi ibadetler iman esası değil, İslam’ın şartlarıdır.'
    ]
  },

  'İslam ve İbadet': {
    intro: 'İbadetin anlamı ve İslam’ın beş şartı: kelime-i şehadet, namaz, oruç, zekât ve hac.',
    parts: [
      { h: 'İbadetler', items: [
        '**Namaz:** günde beş vakit; temizlik (abdest) şartı.',
        '**Oruç:** Ramazan ayında, imsaktan iftara kadar yeme–içmeden uzak durma.',
        '**Zekât:** zengin Müslümanın malının belli bir kısmını ihtiyaç sahiplerine vermesi (genellikle kırkta bir). Nisap: zenginlik ölçüsü.',
        '**Hac:** gücü yeten Müslümanın ömründe bir kez Mekke’de Kâbe’yi ziyaret etmesi; belirli günlerde yapılır.',
        '**Umre:** yılın herhangi bir zamanında yapılabilen ziyaret.',
        'Kurban, fitre, sadaka gibi malî ibadetler de vardır.'
      ] }
    ],
    traps: [
      'Kurban kesmek İslam’ın beş şartından biri değildir.'
    ]
  },

  'Ahlak ve Değerler': {
    intro: 'İslam ahlakı, temel değerler (doğruluk, adalet, merhamet, sorumluluk) ve güzel ahlak.',
    parts: [
      { h: 'Temel kavramlar', items: [
        '**Ahlak:** insanın iç dünyasından kaynaklanan davranış biçimi; “huy” anlamındaki hulk sözcüğünden.',
        'Temel değerler: doğruluk, adalet, merhamet, sabır, tevazu, sorumluluk, yardımlaşma, emanete riayet.',
        'Hz. Muhammed güzel ahlakın örneği olarak gösterilir: “Ben güzel ahlakı tamamlamak için gönderildim.”',
        'Kötü davranışlar: yalan, gıybet, haset, kibir, israf.'
      ] }
    ]
  },

  'Allah ve İnsan İlişkisi': {
    intro: 'Allah’ın insana yakınlığı, dua, tövbe, tevekkül ve kulluk bilinci.',
    parts: [
      { h: 'Kavramlar', items: [
        '**Dua:** Allah’a yönelme ve O’ndan istemek; ibadetin özü.',
        '**Tövbe:** yapılan hatadan pişman olup bir daha yapmamaya karar verme.',
        '**Tevekkül:** gerekli çabayı gösterdikten sonra sonucu Allah’a bırakmak. Çaba göstermeden beklemek tevekkül değildir.',
        '**Takva:** Allah’a saygıyla kötülükten sakınmak.',
        '**İhlas:** ibadeti yalnız Allah rızası için yapmak.'
      ] }
    ],
    traps: [
      'Tevekkül tembellik değildir; önce çalışmak gerekir.'
    ]
  },

  'Hz. Muhammed ve Gençlik': {
    intro: 'Hz. Muhammed’in hayatı, gençlik dönemi ve gençlere örnek olan yönleri.',
    parts: [
      { h: 'Hayatı', items: [
        '571’de Mekke’de doğdu; yetim büyüdü. Gençliğinde “Muhammedü’l-Emin” (güvenilir) diye anıldı.',
        '**Hilfu’l-Fudul:** haksızlığa uğrayanları korumak için kurulan cemiyete gençliğinde katıldı.',
        'Hacerü’l-Esved’in yerine konması olayında hakemlik yaptı.',
        '40 yaşında Hira Mağarası’nda ilk vahiy (610). Hicret 622. Vefatı 632.'
      ] },
      { h: 'Gençlere örnek', items: [
        'Doğruluk, güvenilirlik, adalet, çalışkanlık, hoşgörü.',
        'Genç sahabeler: Hz. Ali, Mus’ab bin Umeyr (ilk öğretmen), Üsame bin Zeyd (genç komutan).'
      ] }
    ]
  },

  'Vahiy ve Akıl': {
    intro: 'Vahyin anlamı ve türleri, Kur’an’ın ana konuları ve akıl–vahiy ilişkisi.',
    parts: [
      { h: 'Vahiy ve Kur’an', items: [
        '**Vahiy:** Allah’ın peygamberlerine bildirdiği ilahi mesaj; Cebrail aracılığıyla.',
        'Kur’an 23 yılda indi; 114 sure, yaklaşık 6236 ayet. İlk inen Alak suresinin ilk ayetleri, ilk sure Fatiha (mushaftaki sıra).',
        'Mekki (Mekke’de inen: iman, ahiret) ve Medeni (Medine’de inen: hukuk, toplum) sureler.',
        'Kur’an Hz. Ebubekir döneminde kitap hâline getirildi, Hz. Osman döneminde çoğaltıldı.'
      ] },
      { h: 'Akıl', items: [
        'İslam’a göre akıl vahyi anlamanın aracıdır; ikisi çatışmaz.',
        'Kur’an sık sık “düşünmez misiniz?” diyerek akla seslenir.'
      ] }
    ]
  },

  'İslam Düşüncesinde Yorumlar': {
    intro: 'İslam düşüncesinde farklı yorumların oluşma nedenleri, itikadi ve fıkhi mezhepler.',
    parts: [
      { h: 'Yorum farklılıkları', items: [
        'Nedenler: Kur’an ve hadislerin farklı anlaşılması, coğrafi ve kültürel farklar, siyasi olaylar.',
        'Yorum farklılıkları din değildir; dinin anlaşılma biçimidir.'
      ] },
      { h: 'Mezhepler', items: [
        '**İtikadi (inanç) mezhepler:** Maturidilik, Eşarilik (Ehl-i Sünnet), Mutezile, Şia.',
        '**Fıkhi (amelî) mezhepler:** Hanefi, Şafii, Maliki, Hanbeli; Caferilik.',
        'Türkiye’de çoğunluk itikatta Maturidi, amelde Hanefidir.',
        '**Tasavvufi yorumlar:** Mevlevilik, Bektaşilik, Nakşibendilik gibi tarikatlar.'
      ] }
    ]
  }
};

export default L;
