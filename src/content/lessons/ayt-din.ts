import type { LessonSet } from './types';

const L: LessonSet = {
  'Dünya ve Ahiret': {
    intro: 'Ahiret inancı, ahiret hayatının aşamaları ve bu inancın insan davranışlarına etkisi.',
    parts: [
      { h: 'Kavramlar', items: [
        'Ahiret inancı iman esaslarındandır; dünya hayatı geçici, ahiret kalıcıdır.',
        'Aşamalar: ölüm → kabir (berzah) → kıyamet → yeniden diriliş (ba’s) → mahşer → hesap → mizan → sırat → cennet ya da cehennem.',
        'Ahiret inancı insanı sorumluluk sahibi yapar; adaletin tam olarak gerçekleşeceği inancını verir.'
      ] }
    ]
  },

  'Kur’an’da Bazı Kavramlar': {
    intro: 'Kur’an’da sık geçen temel kavramlar ve anlamları.',
    parts: [
      { h: 'Kavramlar', items: [
        '**İman:** kalple tasdik. **İslam:** teslimiyet. **İhsan:** Allah’ı görüyormuş gibi kulluk.',
        '**Takva:** Allah’a saygıyla kötülükten sakınma. **Salih amel:** iyi ve yararlı iş.',
        '**Tevhit:** Allah’ın birliği; zıddı şirk. **Küfür:** inkâr. **Nifak:** ikiyüzlülük (münafık).',
        '**Hidayet:** doğru yolu bulma; zıddı dalalet.',
        '**Şükür, sabır, tövbe, tevekkül, ihlas.**'
      ] }
    ]
  },

  'İslam ve Bilim': {
    intro: 'İslam’ın bilime bakışı ve Müslüman bilim insanlarının katkıları.',
    parts: [
      { h: 'Konular', items: [
        'İlk vahiy “Oku!” emriyle başlar; Kur’an düşünmeye ve araştırmaya teşvik eder.',
        'Bilim kurumları: Beytü’l-Hikme (Bağdat), Nizamiye medreseleri, Semerkant rasathanesi.',
        'Bilim insanları: Harezmi (cebir), İbn-i Sina (tıp, El-Kanun), Biruni (astronomi, coğrafya), İbnü’l-Heysem (optik), Cabir bin Hayyan (kimya), Uluğ Bey ve Ali Kuşçu (astronomi), Piri Reis (harita), Takiyüddin.',
        'Müslüman bilim insanlarının eserleri Latinceye çevrilerek Avrupa’da Rönesans’a katkı sağladı.'
      ] }
    ]
  },

  'Anadolu’da İslam ve Tasavvufi Yorumlar': {
    intro: 'Anadolu’da İslam’ın yayılması, tasavvuf ve önemli mutasavvıflar.',
    parts: [
      { h: 'Tasavvuf ve temsilciler', items: [
        '**Tasavvuf:** İslam’ın iç (manevi) boyutu; nefsi arındırma, Allah sevgisi.',
        '**Ahmet Yesevi:** Divan-ı Hikmet; Türkistan’da Yesevilik; Anadolu’ya etkisi Horasan erenleriyle.',
        '**Mevlana Celaleddin Rumi:** Mesnevi; hoşgörü ve sevgi; Mevlevilik (Konya).',
        '**Hacı Bektaş-ı Veli:** Makalat; Bektaşilik (Nevşehir).',
        '**Yunus Emre:** sade Türkçeyle ilahiler; sevgi ve insan.',
        '**Hacı Bayram Veli:** Bayramilik (Ankara). **Ahi Evran:** Ahilik teşkilatı.',
        'Alevilik–Bektaşilik: cem, semah, musahiplik; Hz. Ali ve Ehl-i Beyt sevgisi.'
      ] }
    ]
  },

  'Yaşayan Dinler': {
    intro: 'Hinduizm, Budizm, Konfüçyüsçülük, Taoizm, Şintoizm, Yahudilik ve Hristiyanlık.',
    parts: [
      { h: 'Dinler', items: [
        '**Hinduizm:** kurucusu yok; kutsal metinler Vedalar; kast sistemi, reenkarnasyon (samsara), karma.',
        '**Budizm:** kurucusu Siddhartha Gautama (Buda); dört yüce gerçek, sekiz dilimli yol, nirvana.',
        '**Konfüçyüsçülük:** Çin; ahlak ve toplum düzeni, atalara saygı.',
        '**Taoizm:** Lao Tzu; Tao (yol), doğayla uyum.',
        '**Şintoizm:** Japonya; Kami (doğa ruhları) inancı.',
        '**Yahudilik:** Hz. Musa; kutsal kitap Tevrat (Tanah); ibadethane sinagog; Sebt (cumartesi) günü.',
        '**Hristiyanlık:** Hz. İsa; Kitab-ı Mukaddes (Eski ve Yeni Ahit); teslis inancı; mezhepler: Katolik, Ortodoks, Protestan.'
      ] }
    ]
  },

  'Güncel Dini Meseleler': {
    intro: 'Günümüzde din ile ilgili tartışılan konular: bilim ve teknolojideki gelişmeler, din istismarı, hurafeler.',
    parts: [
      { h: 'Konular', items: [
        'Biyoteknoloji, organ nakli, tüp bebek gibi konularda dinî değerlendirmeler.',
        '**Hurafe:** dinde yeri olmayan, sonradan eklenmiş inanç ve uygulamalar.',
        '**Din istismarı:** dinin kişisel çıkar için kullanılması.',
        'İnternet ve medyada dinî bilginin doğru kaynaktan alınması.',
        'Laiklik: din ve vicdan özgürlüğü güvencesi.'
      ] }
    ]
  }
};

export default L;
