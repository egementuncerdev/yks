/* Dersler ve konular. Konu listeleri yaygın YKS konu sınıflandırmasına göredir; ÖSYM konu bazlı
   soru dağılımı açıklamaz. size: konunun hacmi (1 küçük, 2 orta, 3 büyük) — sıklık iddiası değildir.
   Konu id'leri ilerleme kaydında kullanılır: bir konunun adını değiştirirken id'sini koru. */
import type { ExamId } from './exam';

export interface Topic {
  id: string; subjectId: string; name: string; size: 1 | 2 | 3; group?: string;
  /** son yıllarda düzenli soru gelen konu (yayınevi analizleri, 2023–2025; resmi değil) */
  frequent?: boolean;
}
export interface Subject { id: string; exam: ExamId; name: string; short: string; color: string; topics: Topic[] }

const slug = (s: string) => s.toLocaleLowerCase('tr')
  .replace(/ç/g, 'c').replace(/ğ/g, 'g').replace(/ı/g, 'i').replace(/ö/g, 'o').replace(/ş/g, 's').replace(/ü/g, 'u').replace(/â/g, 'a').replace(/î/g, 'i').replace(/û/g, 'u')
  .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

type Row = [name: string, size: 1 | 2 | 3] | [name: string, size: 1 | 2 | 3, group: string];
function subject(id: string, exam: ExamId, name: string, short: string, color: string, rows: Row[]): Subject {
  const freq = new Set(FREQUENT[id] ?? []);
  return { id, exam, name, short, color, topics: rows.map(([n, size, group]) => ({ id: `${id}:${slug(n)}`, subjectId: id, name: n, size, ...(group ? { group } : {}), ...(freq.has(n) ? { frequent: true } : {}) })) };
}

/* Son üç yılda (2023–2025) her yıl ya da yüksek ağırlıkla soru gelen konular.
   Kaynak: yayınevi ve rehberlik sitelerinin çıkmış soru analizleri. ÖSYM konu bazlı dağılım açıklamaz;
   bu yalnızca önceliklendirme içindir. Adlar aşağıdaki konu adlarıyla birebir aynı olmalı (test kontrol eder). */
export const FREQUENT: Record<string, string[]> = {
  'tyt-tr': ['Paragraf', 'Sözcükte Anlam', 'Cümlede Anlam', 'Yazım Kuralları', 'Noktalama İşaretleri'],
  'tyt-mat': ['Sayı ve Kesir Problemleri', 'Yaş Problemleri', 'Hareket Problemleri', 'İşçi ve Havuz Problemleri', 'Yüzde, Kâr – Zarar Problemleri', 'Karışım Problemleri', 'Grafik ve Tablo Problemleri',
    'Rasyonel Sayılar', 'Sayı Basamakları', 'Bölme ve Bölünebilme', 'Üslü Sayılar', 'Köklü Sayılar', 'Mutlak Değer', 'Olasılık', 'Veri ve İstatistik', 'Mantık',
    'Doğruda ve Üçgende Açılar', 'Dik ve Özel Üçgenler', 'Üçgende Alan', 'Üçgende Benzerlik', 'Çokgenler ve Dörtgenler', 'Katı Cisimler'],
  'tyt-tar': ['İlk ve Orta Çağlarda Türk Dünyası', 'İlk Türk-İslam Devletleri', 'Milli Mücadele', 'Atatürkçülük ve Türk İnkılabı'],
  'tyt-cog': ['Atmosfer ve İklim', 'İklim Tipleri', 'Nüfus ve Göç', 'Yerleşme', 'Doğal Afetler', 'Harita Bilgisi'],
  'tyt-fel': ['Felsefeye Giriş', 'Bilgi Felsefesi', 'Varlık Felsefesi', 'Ahlak Felsefesi'],
  'tyt-fiz': ['Isı, Sıcaklık ve Genleşme', 'Hareket ve Kuvvet', 'Optik', 'Elektrik Akımı ve Devreler'],
  'tyt-kim': ['Kimya Bilimi', 'Maddenin Halleri', 'Kimyasal Türler Arası Etkileşimler', 'Asitler, Bazlar ve Tuzlar', 'Karışımlar'],
  'tyt-bio': ['Hücre ve Organeller', 'Canlıların Sınıflandırılması', 'Hücre Bölünmeleri', 'Kalıtım', 'Ekosistem Ekolojisi'],
  'ayt-mat': ['Fonksiyonlar (İleri)', 'Polinomlar ve Denklemler', 'İkinci Dereceden Denklemler ve Eşitsizlikler', 'Permütasyon, Kombinasyon, Binom', 'Olasılık', 'Trigonometri',
    'Üstel ve Logaritmik Fonksiyonlar', 'Diziler', 'Limit ve Süreklilik', 'Türev', 'İntegral', 'Çember ve Daire', 'Doğrunun Analitiği', 'Çemberin Analitiği', 'Katı Cisimler'],
  'ayt-edb': ['Anlam Bilgisi', 'Şiir Bilgisi: Ölçü, Kafiye, Nazım Biçimleri', 'Söz Sanatları', 'Divan Edebiyatı', 'Halk Edebiyatı', 'Cumhuriyet Dönemi Şiiri', 'Cumhuriyet Dönemi Roman ve Hikâyesi'],
  'ayt-tar': ['İlk ve Orta Çağlarda Türk Dünyası', 'İslam Tarihi ve Türk-İslam Devletleri', 'Osmanlı Kuruluş ve Yükselme', 'Milli Mücadele', 'Atatürkçülük ve İnkılaplar'],
  'ayt-cog': ['Ekosistemler ve Madde Döngüleri', 'Türkiye’de Nüfus ve Yerleşme', 'Ekonomik Faaliyetler ve Doğal Kaynaklar', 'Türkiye Ekonomisi', 'Çevre ve Toplum'],
  'ayt-fiz': ['Newton’un Hareket Yasaları', 'İş, Enerji ve Güç', 'İtme ve Momentum', 'Elektriksel Kuvvet, Alan ve Potansiyel', 'Manyetizma ve Elektromanyetik İndükleme', 'Basit Harmonik Hareket', 'Dalga Mekaniği', 'Modern Fizik ve Uygulamaları'],
  'ayt-kim': ['Modern Atom Teorisi', 'Gazlar', 'Sıvı Çözeltiler ve Çözünürlük', 'Kimyasal Tepkimelerde Enerji', 'Tepkime Hızları', 'Kimyasal Denge', 'Kimya ve Elektrik', 'Organik Bileşikler'],
  'ayt-bio': ['Endokrin Sistem', 'Dolaşım ve Bağışıklık Sistemi', 'Solunum Sistemi', 'Komünite ve Popülasyon Ekolojisi', 'Genden Proteine', 'Canlılık ve Enerji', 'Bitki Biyolojisi']
};

/** Resmi çıkmış soru arşivleri (MEB) */
export const RESOURCES = [
  { name: 'MEB OGM Materyal — YKS çıkmış soru kitapları', url: 'https://ogmmateryal.eba.gov.tr/yks-cikmis-sorular' },
  { name: 'MEBİ — çıkmış sorular ve çözüm videoları', url: 'https://mebi.eba.gov.tr/' }
];

export const SUBJECTS: Subject[] = [
  /* ---------------- TYT ---------------- */
  subject('tyt-tr', 'tyt', 'TYT Türkçe', 'Türkçe', '#c2410c', [
    ['Sözcükte Anlam', 2], ['Cümlede Anlam', 2], ['Paragraf', 3], ['Ses Bilgisi', 1], ['Yazım Kuralları', 2],
    ['Noktalama İşaretleri', 2], ['Sözcükte Yapı ve Ekler', 2], ['İsim, Sıfat ve Zamir', 2], ['Zarf, Edat, Bağlaç, Ünlem', 2],
    ['Fiil, Ek Fiil ve Fiilimsi', 2], ['Fiilde Çatı', 1], ['Cümlenin Ögeleri', 2], ['Cümle Türleri', 1], ['Anlatım Bozuklukları', 2]
  ]),
  subject('tyt-mat', 'tyt', 'TYT Matematik', 'Matematik', '#1d4ed8', [
    ['Temel Kavramlar', 2], ['Sayı Basamakları', 1], ['Bölme ve Bölünebilme', 2], ['EBOB – EKOK', 1], ['Rasyonel Sayılar', 1],
    ['Basit Eşitsizlikler', 1], ['Mutlak Değer', 1], ['Üslü Sayılar', 2], ['Köklü Sayılar', 2], ['Çarpanlara Ayırma', 2],
    ['Oran – Orantı', 1], ['Denklem Çözme', 1], ['Sayı ve Kesir Problemleri', 2], ['Yaş Problemleri', 1], ['Hareket Problemleri', 2],
    ['İşçi ve Havuz Problemleri', 1], ['Yüzde, Kâr – Zarar Problemleri', 2], ['Karışım Problemleri', 1], ['Grafik ve Tablo Problemleri', 1],
    ['Kümeler ve Kartezyen Çarpım', 2], ['Mantık', 1], ['Fonksiyonlar', 2], ['Polinomlar', 2], ['İkinci Dereceden Denklemler', 2],
    ['Permütasyon ve Kombinasyon', 2], ['Olasılık', 2], ['Veri ve İstatistik', 1],
    ['Doğruda ve Üçgende Açılar', 2, 'Geometri'], ['Dik ve Özel Üçgenler', 2, 'Geometri'], ['Açıortay ve Kenarortay', 1, 'Geometri'],
    ['Üçgende Alan', 2, 'Geometri'], ['Üçgende Benzerlik', 2, 'Geometri'], ['Çokgenler ve Dörtgenler', 3, 'Geometri'],
    ['Çember ve Daire', 2, 'Geometri'], ['Noktanın ve Doğrunun Analitiği', 2, 'Geometri'], ['Katı Cisimler', 2, 'Geometri']
  ]),
  subject('tyt-fiz', 'tyt', 'TYT Fizik', 'Fizik', '#0e7490', [
    ['Fizik Bilimine Giriş', 1], ['Madde ve Özellikleri', 1], ['Basınç ve Kaldırma Kuvveti', 2], ['Isı, Sıcaklık ve Genleşme', 2],
    ['Hareket ve Kuvvet', 2], ['İş, Güç ve Enerji', 2], ['Elektrostatik', 1], ['Elektrik Akımı ve Devreler', 2], ['Manyetizma', 1],
    ['Dalgalar', 2], ['Optik', 2]
  ]),
  subject('tyt-kim', 'tyt', 'TYT Kimya', 'Kimya', '#7c3aed', [
    ['Kimya Bilimi', 1], ['Atom ve Periyodik Sistem', 2], ['Kimyasal Türler Arası Etkileşimler', 2], ['Maddenin Halleri', 2],
    ['Doğa ve Kimya', 1], ['Kimyanın Temel Kanunları', 1], ['Mol Kavramı ve Kimyasal Hesaplamalar', 2], ['Kimyasal Tepkimeler', 1],
    ['Karışımlar', 2], ['Asitler, Bazlar ve Tuzlar', 2], ['Kimya Her Yerde', 1]
  ]),
  subject('tyt-bio', 'tyt', 'TYT Biyoloji', 'Biyoloji', '#15803d', [
    ['Canlıların Ortak Özellikleri', 1], ['Canlıların Temel Bileşenleri', 2], ['Hücre ve Organeller', 2], ['Hücre Zarından Madde Geçişi', 1],
    ['Canlıların Sınıflandırılması', 2], ['Hücre Bölünmeleri', 2], ['Eşeysiz ve Eşeyli Üreme', 1], ['Kalıtım', 2],
    ['Ekosistem Ekolojisi', 2], ['Güncel Çevre Sorunları', 1]
  ]),
  subject('tyt-tar', 'tyt', 'TYT Tarih', 'Tarih', '#a16207', [
    ['Tarih ve Zaman', 1], ['İnsanlığın İlk Dönemleri', 1], ['Orta Çağ’da Dünya', 1], ['İlk ve Orta Çağlarda Türk Dünyası', 2],
    ['İslam Medeniyetinin Doğuşu', 1], ['İlk Türk-İslam Devletleri', 1], ['Selçuklu Türkiyesi', 1], ['Beylikten Devlete Osmanlı', 2],
    ['Dünya Gücü Osmanlı', 2], ['Değişim Çağında Osmanlı ve Avrupa', 2], ['Milli Mücadele', 2], ['Atatürkçülük ve Türk İnkılabı', 2]
  ]),
  subject('tyt-cog', 'tyt', 'TYT Coğrafya', 'Coğrafya', '#0f766e', [
    ['Doğa ve İnsan', 1], ['Dünya’nın Şekli ve Hareketleri', 1], ['Coğrafi Konum', 1], ['Harita Bilgisi', 2], ['Atmosfer ve İklim', 2],
    ['İklim Tipleri', 1], ['Yerin Şekillenmesi', 2], ['Su, Toprak ve Bitki', 1], ['Nüfus ve Göç', 2], ['Yerleşme', 1],
    ['Türkiye’nin Yer Şekilleri ve İklimi', 2], ['Ekonomik Faaliyetler', 1], ['Bölgeler ve Ulaşım', 1], ['Doğal Afetler', 1]
  ]),
  subject('tyt-fel', 'tyt', 'TYT Felsefe', 'Felsefe', '#be185d', [
    ['Felsefeye Giriş', 1], ['Bilgi Felsefesi', 2], ['Varlık Felsefesi', 1], ['Ahlak Felsefesi', 1], ['Sanat Felsefesi', 1],
    ['Din Felsefesi', 1], ['Siyaset Felsefesi', 1], ['Bilim Felsefesi', 1]
  ]),
  subject('tyt-din', 'tyt', 'TYT Din Kültürü', 'Din Kültürü', '#4d7c0f', [
    ['Bilgi ve İnanç', 1], ['İslam ve İbadet', 1], ['Ahlak ve Değerler', 1], ['Allah ve İnsan İlişkisi', 1], ['Hz. Muhammed ve Gençlik', 1],
    ['Vahiy ve Akıl', 1], ['İslam Düşüncesinde Yorumlar', 1]
  ]),

  /* ---------------- AYT ---------------- */
  subject('ayt-mat', 'ayt', 'AYT Matematik', 'Matematik', '#1e40af', [
    ['Fonksiyonlar (İleri)', 2], ['Polinomlar ve Denklemler', 2], ['İkinci Dereceden Denklemler ve Eşitsizlikler', 2], ['Parabol', 2],
    ['Karmaşık Sayılar', 1], ['Permütasyon, Kombinasyon, Binom', 2], ['Olasılık', 2], ['Trigonometri', 3], ['Üstel ve Logaritmik Fonksiyonlar', 2],
    ['Diziler', 2], ['Limit ve Süreklilik', 2], ['Türev', 3], ['İntegral', 3],
    ['Çokgenler ve Dörtgenler (Tekrar)', 2, 'Geometri'], ['Çember ve Daire', 2, 'Geometri'], ['Doğrunun Analitiği', 2, 'Geometri'],
    ['Çemberin Analitiği', 1, 'Geometri'], ['Dönüşüm Geometrisi', 1, 'Geometri'], ['Katı Cisimler', 2, 'Geometri']
  ]),
  subject('ayt-fiz', 'ayt', 'AYT Fizik', 'Fizik', '#155e75', [
    ['Vektörler ve Bağıl Hareket', 2], ['Newton’un Hareket Yasaları', 2], ['Bir Boyutta Sabit İvmeli Hareket', 2], ['Atışlar', 2],
    ['İş, Enerji ve Güç', 1], ['İtme ve Momentum', 2], ['Tork, Denge ve Kütle Merkezi', 2], ['Basit Makineler', 1],
    ['Elektriksel Kuvvet, Alan ve Potansiyel', 2], ['Paralel Levhalar ve Sığa', 1], ['Manyetizma ve Elektromanyetik İndükleme', 2],
    ['Alternatif Akım ve Transformatörler', 1], ['Çembersel Hareket', 2], ['Basit Harmonik Hareket', 1], ['Dalga Mekaniği', 2],
    ['Atom Fiziği ve Radyoaktivite', 1], ['Modern Fizik ve Uygulamaları', 2]
  ]),
  subject('ayt-kim', 'ayt', 'AYT Kimya', 'Kimya', '#6d28d9', [
    ['Modern Atom Teorisi', 2], ['Gazlar', 2], ['Sıvı Çözeltiler ve Çözünürlük', 2], ['Kimyasal Tepkimelerde Enerji', 1],
    ['Tepkime Hızları', 1], ['Kimyasal Denge', 2], ['Asit-Baz Dengesi', 2], ['Çözünürlük Dengesi', 1], ['Kimya ve Elektrik', 2],
    ['Karbon Kimyasına Giriş', 1], ['Organik Bileşikler', 3], ['Enerji Kaynakları ve Bilimsel Gelişmeler', 1]
  ]),
  subject('ayt-bio', 'ayt', 'AYT Biyoloji', 'Biyoloji', '#166534', [
    ['Sinir Sistemi', 2], ['Endokrin Sistem', 1], ['Duyu Organları', 1], ['Destek ve Hareket Sistemi', 1], ['Sindirim Sistemi', 1],
    ['Dolaşım ve Bağışıklık Sistemi', 2], ['Solunum Sistemi', 1], ['Boşaltım Sistemi', 1], ['Üreme Sistemi ve Embriyonik Gelişim', 1],
    ['Komünite ve Popülasyon Ekolojisi', 1], ['Genden Proteine', 3], ['Canlılık ve Enerji', 3], ['Bitki Biyolojisi', 2], ['Canlılar ve Çevre', 1]
  ]),
  subject('ayt-edb', 'ayt', 'AYT Türk Dili ve Edebiyatı', 'Edebiyat', '#9a3412', [
    ['Anlam Bilgisi', 2], ['Şiir Bilgisi: Ölçü, Kafiye, Nazım Biçimleri', 2], ['Söz Sanatları', 2], ['Edebi Türler: Hikâye, Roman, Tiyatro', 2], ['Öğretici Metinler', 1],
    ['İslamiyet Öncesi ve Geçiş Dönemi Türk Edebiyatı', 1], ['Halk Edebiyatı', 2], ['Divan Edebiyatı', 3], ['Tanzimat Edebiyatı', 2],
    ['Servet-i Fünun ve Fecr-i Âti', 2], ['Milli Edebiyat', 2], ['Cumhuriyet Dönemi Şiiri', 3], ['Cumhuriyet Dönemi Roman ve Hikâyesi', 3],
    ['Edebi Akımlar ve Dünya Edebiyatı', 1]
  ]),
  subject('ayt-tar', 'ayt', 'AYT Tarih', 'Tarih', '#854d0e', [
    ['Tarih Bilimi ve İlk Çağ', 1], ['İlk ve Orta Çağlarda Türk Dünyası', 2], ['İslam Tarihi ve Türk-İslam Devletleri', 2], ['Selçuklu Türkiyesi', 1],
    ['Osmanlı Kuruluş ve Yükselme', 2], ['Osmanlı Kültür ve Medeniyeti', 2], ['Değişen Dünya Dengeleri ve Osmanlı', 2],
    ['XIX. Yüzyılda Osmanlı ve Islahatlar', 2], ['XX. Yüzyıl Başlarında Osmanlı', 2], ['Milli Mücadele', 2], ['Atatürkçülük ve İnkılaplar', 2],
    ['İki Savaş Arası Dönem ve II. Dünya Savaşı', 2], ['Soğuk Savaş ve Yumuşama Dönemi', 2], ['Küreselleşen Dünya', 1]
  ]),
  subject('ayt-cog', 'ayt', 'AYT Coğrafya', 'Coğrafya', '#115e59', [
    ['Ekosistemler ve Madde Döngüleri', 1], ['Nüfus Politikaları', 1], ['Türkiye’de Nüfus ve Yerleşme', 2], ['Ekonomik Faaliyetler ve Doğal Kaynaklar', 2],
    ['Türkiye Ekonomisi', 2], ['Türkiye’de Ulaşım, Ticaret ve Turizm', 1], ['Bölgesel Kalkınma Projeleri', 1], ['Kültür Bölgeleri ve Küresel Ortam', 2],
    ['Ülkeler ve Bölgeler', 1], ['Çevre ve Toplum', 1]
  ]),
  subject('ayt-fel', 'ayt', 'AYT Felsefe Grubu', 'Felsefe Grubu', '#9d174d', [
    ['Psikoloji', 2], ['Sosyoloji', 2], ['Mantık', 2], ['Felsefe Tarihi', 2]
  ]),
  subject('ayt-din', 'ayt', 'AYT Din Kültürü', 'Din Kültürü', '#3f6212', [
    ['Dünya ve Ahiret', 1], ['Kur’an’da Bazı Kavramlar', 1], ['İslam ve Bilim', 1], ['Anadolu’da İslam ve Tasavvufi Yorumlar', 1],
    ['Yaşayan Dinler', 1], ['Güncel Dini Meseleler', 1]
  ]),

  /* ---------------- YDT ---------------- */
  subject('ydt-ing', 'ydt', 'YDT İngilizce', 'İngilizce', '#0369a1', [
    ['Kelime Bilgisi', 3], ['Tenses', 2], ['Modals', 1], ['Passive Voice', 1], ['Conditionals ve Wish', 1], ['Relative Clauses', 1],
    ['Noun Clauses', 1], ['Adverbial Clauses ve Bağlaçlar', 2], ['Gerund ve Infinitive', 1], ['Prepositions ve Phrasal Verbs', 2],
    ['Cloze Test', 2], ['Cümle Tamamlama', 2], ['Çeviri (İngilizce–Türkçe)', 2], ['Okuma Parçası', 3], ['Diyalog ve Durum', 1],
    ['Paragraf Tamamlama ve Anlam Bütünlüğü', 2]
  ])
];

export const SUBJECT_BY_ID: Record<string, Subject> = Object.fromEntries(SUBJECTS.map((s) => [s.id, s]));
export const TOPIC_BY_ID: Record<string, Topic> = Object.fromEntries(SUBJECTS.flatMap((s) => s.topics.map((t) => [t.id, t])));
