/* Konu anlatımlarındaki görseller ve şemalar. Anahtar: "dersId:Konu adı" (subjects.ts ile birebir; test kontrol eder).
   svg adları src/features/lessons/Diagrams.tsx içindedir. Metinlerde MathText işaretleri kullanılabilir. */
import type { Figure } from './types';
import { FIGURES_MORE } from './figures2';

const FIRST: Record<string, Figure[]> = {
  /* ================= TYT Türkçe ================= */
  'tyt-tr:Sözcükte Anlam': [
    { kind: 'table', title: 'Anlam türleri bir bakışta', at: 0, head: ['Tür', 'Örnek', 'İpucu'], rows: [
      ['Gerçek', 'ağır bir sandık', 'akla gelen ilk anlam'],
      ['Yan', 'masanın ayağı', 'temel anlamla bağ sürüyor'],
      ['Mecaz', 'ağır sözler', 'temel anlamdan tamamen uzak'],
      ['Terim', 'üçgenin açısı', 'bir bilim dalına özgü']
    ] }
  ],
  'tyt-tr:Cümlede Anlam': [
    { kind: 'table', title: 'Anlam ilişkileri ve ipucu sözcükler', at: 0, head: ['İlişki', 'İpucu', 'Örnek'], rows: [
      ['Neden – sonuç', '-dığı için, -den, çünkü', 'Yağmur yağdığı için maç ertelendi.'],
      ['Amaç – sonuç', 'için, -mek üzere, diye', 'Kazanmak için çalışıyor.'],
      ['Koşul – sonuç', '-sa, -se, yeter ki', 'Erken gelirsen görüşürüz.'],
      ['Karşılaştırma', 'daha, en, kadar, -den', 'Bu kitap öncekinden akıcı.']
    ] }
  ],
  'tyt-tr:Paragraf': [
    { kind: 'flow', title: 'Paragraf sorusu çözme sırası', at: 1, steps: ['Soru kökünü oku', 'Parçayı bir kez oku', '“Ama, oysa, bu nedenle”ye dikkat', 'Şıkları parçayla eşleştir', 'Parçada olmayanı ele'] }
  ],
  'tyt-tr:Ses Bilgisi': [
    { kind: 'table', title: 'Ünlülerin sınıflandırılması', at: 0, head: ['', 'Düz', 'Yuvarlak'], rows: [
      ['Kalın', 'a (geniş) · ı (dar)', 'o (geniş) · u (dar)'],
      ['İnce', 'e (geniş) · i (dar)', 'ö (geniş) · ü (dar)']
    ], caption: 'Sert ünsüzler: f, s, t, k, ç, ş, h, p — “**FıSTıKÇı ŞaHaP**”.' }
  ],
  'tyt-tr:Yazım Kuralları': [
    { kind: 'table', title: 'Ayrı mı, bitişik mi?', at: 0, head: ['Sözcük', 'Ayrı', 'Bitişik'], rows: [
      ['de / da', 'bağlaç: Sen **de** gel.', 'hâl eki: Ev**de** kaldım.'],
      ['ki', 'bağlaç: Duydum **ki** gelmiş.', 'sıfat: evde**ki**; kalıplaşmış: belki, çünkü'],
      ['mi', 'soru eki: Geldi **mi**?', '—'],
      ['sayılar', 'altı yüz, on beş', 'yalnız para ve çeklerde']
    ] }
  ],
  'tyt-tr:Noktalama İşaretleri': [
    { kind: 'table', title: 'En çok sorulan işaretler', at: 0, head: ['İşaret', 'Nerede?'], rows: [
      ['Virgül ,', 'eş görevli sözcükler, hitap, “evet / hayır”dan sonra'],
      ['Noktalı virgül ;', 'virgülle ayrılmış türleri ayırmak'],
      ['İki nokta :', 'açıklama ya da örnekten önce'],
      ['Üç nokta …', 'bilerek tamamlanmayan cümle'],
      ['Kesme ’', 'özel adlara gelen ekler (Ankara’ya)'],
      ['Tırnak “ ”', 'aynen aktarılan söz']
    ] }
  ],
  'tyt-tr:Sözcükte Yapı ve Ekler': [
    { kind: 'flow', title: 'Bir sözcüğün çözümlenmesi: gözlükçülerimiz', at: 0, steps: ['göz (kök)', '-lük (yapım)', '-çü (yapım)', '-ler (çekim: çoğul)', '-imiz (çekim: iyelik)'] }
  ],
  'tyt-tr:İsim, Sıfat ve Zamir': [
    { kind: 'table', title: 'Aynı sözcük, farklı tür', at: 2, head: ['Cümle', 'Tür'], rows: [
      ['**Güzel** bir gün', 'sıfat (ismi niteliyor)'],
      ['**Güzel** konuştu', 'zarf (fiili niteliyor)'],
      ['**Güzeller** geldi', 'isim (sıfat isimleşti)'],
      ['**Bu** ev / **Bunu** al', 'işaret sıfatı / işaret zamiri']
    ] }
  ],
  'tyt-tr:Fiil, Ek Fiil ve Fiilimsi': [
    { kind: 'table', title: 'Fiilimsiler', at: 2, head: ['Tür', 'Ekler', 'Örnek'], rows: [
      ['İsim-fiil', '-ma, -ış, -mak', 'okumayı severim'],
      ['Sıfat-fiil', '-an, -ası, -mez, -ar, -dık, -acak, -mış', 'okunan kitap'],
      ['Zarf-fiil', '-ıp, -arak, -ınca, -ken, -madan, -dıkça', 'gülerek girdi']
    ] }
  ],
  'tyt-tr:Fiilde Çatı': [
    { kind: 'table', title: 'Çatı türleri', head: ['Ölçüt', 'Tür', 'Örnek'], rows: [
      ['Nesneye göre', 'geçişli / geçişsiz', 'Kitabı okudu / Çocuk uyudu'],
      ['', 'ettirgen / oldurgan', 'yazdırdı / uyuttu'],
      ['Özneye göre', 'etken / edilgen', 'Ali kapıyı açtı / Kapı açıldı'],
      ['', 'dönüşlü / işteş', 'yıkandı / tartıştılar']
    ] }
  ],
  'tyt-tr:Cümlenin Ögeleri': [
    { kind: 'flow', title: 'Öge bulma sırası', at: 1, steps: ['Yüklemi bul', 'Kim, ne? → özne', 'Neyi, kimi, ne? → nesne', 'Nereye, nerede, nereden? → dolaylı tümleç', 'Nasıl, ne zaman, niçin? → zarf tümleci'] },
    { kind: 'table', title: 'Örnek: Ahmet her sabah okula yürüyerek gider.', at: 1, head: ['Söz', 'Soru', 'Öge'], rows: [
      ['gider', '—', 'yüklem'], ['Ahmet', 'kim gider?', 'özne'], ['her sabah', 'ne zaman?', 'zarf tümleci'], ['okula', 'nereye?', 'dolaylı tümleç'], ['yürüyerek', 'nasıl?', 'zarf tümleci']
    ] }
  ],
  'tyt-tr:Cümle Türleri': [
    { kind: 'table', title: 'Dört sınıflandırma', head: ['Ölçüt', 'Türler'], rows: [
      ['Yüklemin türü', 'fiil cümlesi · isim cümlesi'], ['Yüklemin yeri', 'kurallı · devrik'], ['Anlam', 'olumlu · olumsuz · soru · ünlem'], ['Yapı', 'basit · birleşik · sıralı · bağlı']
    ] }
  ],
  'tyt-tr:Anlatım Bozuklukları': [
    { kind: 'table', title: 'Bozukluk türleri ve örnekleri', head: ['Tür', 'Bozuk', 'Doğru'], rows: [
      ['Gereksiz sözcük', 'geri döndü', 'döndü'], ['Çelişen sözcükler', 'kesinlikle … olabilir', 'büyük olasılıkla … olabilir'], ['Ortak öge', 'Çocuklarını seviyor ve güveniyor.', 'Çocuklarını seviyor ve onlara güveniyor.'], ['Tamlama', 'Bu kitabı yazarı', 'Bu kitabın yazarı']
    ] }
  ],

  /* ================= TYT Matematik ================= */
  'tyt-mat:Temel Kavramlar': [
    { kind: 'table', title: 'Tek – çift işlemleri', at: 1, head: ['İşlem', 'Sonuç'], rows: [['çift ± çift', 'çift'], ['tek ± tek', 'çift'], ['tek ± çift', 'tek'], ['tek · tek', 'tek'], ['çift · herhangi', 'çift']] }
  ],
  'tyt-mat:Bölme ve Bölünebilme': [
    { kind: 'table', title: 'Bölünebilme kuralları', at: 1, head: ['Bölen', 'Kural'], rows: [
      ['2', 'son rakam çift'], ['3', 'rakamlar toplamı 3’ün katı'], ['4', 'son iki basamak 4’ün katı'], ['5', 'son rakam 0 ya da 5'], ['8', 'son üç basamak 8’in katı'], ['9', 'rakamlar toplamı 9’un katı'], ['11', 'sağdan +, −, +, … toplamı 11’in katı'], ['6', 'hem 2 hem 3']
    ] }
  ],
  'tyt-mat:EBOB – EKOK': [
    { kind: 'table', title: 'Problemde hangisi?', at: 1, head: ['İfade', 'Kullan'], rows: [['eşit, en büyük parçalara bölmek', 'EBOB'], ['kare fayansla kaplamak', 'EBOB'], ['ilk kez birlikte olmak', 'EKOK'], ['tuğlalardan en küçük küp', 'EKOK']] }
  ],
  'tyt-mat:Mutlak Değer': [{ kind: 'svg', svg: 'sayiDogrusu', title: 'Mutlak değer: sıfıra uzaklık', at: 0 }],
  'tyt-mat:Hareket Problemleri': [
    { kind: 'table', title: 'Hareket formülleri', head: ['Durum', 'Formül'], rows: [['Yol', 'x = v · t'], ['Karşılaşma (zıt yön)', 't = {yol/v₁ + v₂}'], ['Yetişme (aynı yön)', 't = {fark/v₁ − v₂}'], ['Ortalama hız', '{toplam yol/toplam zaman}']] }
  ],
  'tyt-mat:Yüzde, Kâr – Zarar Problemleri': [
    { kind: 'flow', title: 'Ardışık zam ve indirim (100 TL üzerinden)', steps: ['100 TL', '%20 zam → 120 TL', '%20 indirim → 96 TL', 'sonuç: %4 düşüş'] }
  ],
  'tyt-mat:Kümeler ve Kartezyen Çarpım': [{ kind: 'svg', svg: 'venn', title: 'Venn şeması', at: 1 }],
  'tyt-mat:Mantık': [
    { kind: 'table', title: 'Doğruluk tablosu (1: doğru, 0: yanlış)', at: 0, head: ['p', 'q', 'p ∧ q', 'p ∨ q', 'p ⇒ q', 'p ⇔ q'], rows: [
      ['1', '1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0', '0'], ['0', '1', '0', '1', '1', '0'], ['0', '0', '0', '0', '1', '1']
    ] }
  ],
  'tyt-mat:Permütasyon ve Kombinasyon': [
    { kind: 'table', title: 'Permütasyon mu, kombinasyon mu?', at: 0, head: ['Durum', 'Yöntem'], rows: [['başkan ve yardımcı seçmek', 'permütasyon (sıra var)'], ['sıraya dizmek, şifre oluşturmak', 'permütasyon'], ['kurul, takım, grup seçmek', 'kombinasyon (sıra yok)'], ['torbadan top seçmek', 'kombinasyon']] }
  ],
  'tyt-mat:Veri ve İstatistik': [
    { kind: 'flow', title: 'Ortanca bulma: 3, 7, 2, 9, 7, 5', steps: ['Sırala: 2, 3, 5, 7, 7, 9', 'Ortadaki iki değer: 5 ve 7', 'Ortanca = {5 + 7/2} = 6'] }
  ],
  'tyt-mat:Doğruda ve Üçgende Açılar': [{ kind: 'svg', svg: 'paralel', title: 'Paralel doğrularda açılar', at: 0 }],
  'tyt-mat:Dik ve Özel Üçgenler': [{ kind: 'svg', svg: 'ozelUcgen', title: 'Özel dik üçgenler', at: 0 }],
  'tyt-mat:Açıortay ve Kenarortay': [{ kind: 'svg', svg: 'agirlik', title: 'Kenarortaylar ve ağırlık merkezi', at: 1 }],
  'tyt-mat:Üçgende Alan': [{ kind: 'svg', svg: 'ucgenAlan', title: 'Taban ve yükseklik', at: 0, caption: 'Alan = {a · h/2}' }],
  'tyt-mat:Üçgende Benzerlik': [{ kind: 'svg', svg: 'benzerlik', title: 'Temel orantı (Tales)', at: 1, caption: 'DE // BC ise {AD/AB} = {AE/AC} = {DE/BC}.' }],
  'tyt-mat:Çokgenler ve Dörtgenler': [
    { kind: 'table', title: 'Dörtgenlerde alan', at: 1, head: ['Dörtgen', 'Alan'], rows: [['Kare', 'a²'], ['Dikdörtgen', 'a · b'], ['Paralelkenar', 'taban · yükseklik'], ['Eşkenar dörtgen, deltoid', '{e · f/2}'], ['Yamuk', '{(a + c) · h/2}']] }
  ],
  'tyt-mat:Çember ve Daire': [{ kind: 'svg', svg: 'cember', title: 'Merkez açı ve çevre açı', at: 0 }],
  'tyt-mat:Noktanın ve Doğrunun Analitiği': [{ kind: 'svg', svg: 'analitik', title: 'Eğim', at: 1, caption: 'm = {Δy/Δx} = {y₂ − y₁/x₂ − x₁}' }],
  'tyt-mat:Katı Cisimler': [{ kind: 'svg', svg: 'kati', title: 'Silindir ve koni', at: 0, caption: 'Silindir: V = πr²h · Koni: V = {πr²h/3}, ℓ² = r² + h²' }],

  /* ================= TYT Fizik ================= */
  'tyt-fiz:Fizik Bilimine Giriş': [
    { kind: 'table', title: 'Skaler ve vektörel büyüklükler', at: 0, head: ['Skaler (yalnız değer)', 'Vektörel (değer + yön)'], rows: [['kütle', 'ağırlık'], ['sürat', 'hız'], ['zaman, sıcaklık', 'ivme'], ['enerji, iş', 'kuvvet, momentum'], ['alınan yol', 'yer değiştirme']] }
  ],
  'tyt-fiz:Basınç ve Kaldırma Kuvveti': [{ kind: 'svg', svg: 'kaldirma', title: 'Yüzme, askıda kalma, batma', at: 1 }],
  'tyt-fiz:Isı, Sıcaklık ve Genleşme': [
    { kind: 'table', title: 'Isının aktarılma yolları', at: 1, head: ['Yol', 'Nerede?', 'Örnek'], rows: [['İletim', 'katılarda, tanecikten taneciğe', 'kaşığın ısınması'], ['Konveksiyon', 'akışkanlarda, madde akışıyla', 'kalorifer, rüzgâr'], ['Işıma', 'boşlukta da', 'Güneş’in ısıtması']] }
  ],
  'tyt-fiz:Hareket ve Kuvvet': [{ kind: 'svg', svg: 'kuvvet', title: 'Cisme etki eden kuvvetler', at: 1 }],
  'tyt-fiz:Elektrostatik': [
    { kind: 'table', title: 'Elektriklenme çeşitleri', head: ['Yol', 'Sonuç'], rows: [['Sürtünme', 'yükler zıt ve eşit'], ['Dokunma', 'yükler aynı işaretli; sığayla orantılı paylaşılır'], ['Etki', 'yaklaştırılan yüke zıt yükle yüklenir (topraklanınca)']] }
  ],
  'tyt-fiz:Elektrik Akımı ve Devreler': [{ kind: 'svg', svg: 'devre', title: 'Seri ve paralel bağlama', at: 1 }],
  'tyt-fiz:Manyetizma': [{ kind: 'svg', svg: 'miknatis', title: 'Mıknatısın alan çizgileri', at: 0 }],
  'tyt-fiz:Dalgalar': [{ kind: 'svg', svg: 'dalga', title: 'Dalga boyu ve genlik', at: 0 }],
  'tyt-fiz:Optik': [
    { kind: 'svg', svg: 'ayna', title: 'Düz aynada yansıma', at: 0 },
    { kind: 'table', title: 'Aynalarda görüntü', at: 0, head: ['Ayna', 'Görüntü'], rows: [['Düz', 'sanal, düz, eşit boy'], ['Çukur (odaktan uzak cisim)', 'gerçek, ters'], ['Çukur (odak ile ayna arası)', 'sanal, düz, büyük'], ['Tümsek', 'her zaman sanal, düz, küçük']] }
  ],

  /* ================= TYT Kimya ================= */
  'tyt-kim:Kimya Bilimi': [
    { kind: 'table', title: 'Fiziksel mi, kimyasal mı?', at: 0, head: ['Fiziksel değişim', 'Kimyasal değişim'], rows: [['buzun erimesi', 'kâğıdın yanması'], ['şekerin suda çözünmesi', 'demirin paslanması'], ['camın kırılması', 'sütün ekşimesi']] }
  ],
  'tyt-kim:Atom ve Periyodik Sistem': [{ kind: 'svg', svg: 'periyodik', title: 'Periyodik özelliklerin değişimi', at: 1 }],
  'tyt-kim:Kimyasal Türler Arası Etkileşimler': [
    { kind: 'table', title: 'Bağ türleri', at: 0, head: ['Bağ', 'Arasında', 'Örnek'], rows: [['İyonik', 'metal + ametal', 'NaCl'], ['Kovalent (apolar)', 'aynı ametaller', 'H₂, O₂'], ['Kovalent (polar)', 'farklı ametaller', 'HCl, H₂O'], ['Metalik', 'metal atomları', 'Fe, Cu']] }
  ],
  'tyt-kim:Maddenin Halleri': [{ kind: 'svg', svg: 'halDegisimi', title: 'Hâl değişimleri', at: 1, caption: 'Mavi oklar ısı alır (erime, buharlaşma, süblimleşme); yeşil oklar ısı verir (donma, yoğuşma, kırağılaşma).' }],
  'tyt-kim:Mol Kavramı ve Kimyasal Hesaplamalar': [
    { kind: 'flow', title: 'Mol her şeyin merkezinde', at: 0, steps: ['kütle (g)', '÷ mol kütlesi', 'MOL', '× 6,02 · 10^{23}', 'tanecik sayısı'] },
    { kind: 'flow', title: 'Gazlarda (normal koşullar)', at: 0, steps: ['MOL', '× 22,4', 'hacim (L)'] }
  ],
  'tyt-kim:Karışımlar': [
    { kind: 'table', title: 'Ayırma yöntemleri', at: 1, head: ['Yöntem', 'Dayandığı fark', 'Örnek'], rows: [['Süzme', 'tanecik boyutu', 'kumlu su'], ['Ayırma hunisi', 'yoğunluk (karışmayan sıvılar)', 'su + zeytinyağı'], ['Damıtma', 'kaynama noktası', 'tuzlu sudan saf su'], ['Mıknatıs', 'manyetik özellik', 'demir tozu + kum'], ['Kristallendirme', 'çözünürlük', 'şekerli sudan şeker']] }
  ],
  'tyt-kim:Asitler, Bazlar ve Tuzlar': [{ kind: 'svg', svg: 'ph', title: 'pH ölçeği', at: 0 }],

  /* ================= TYT Biyoloji ================= */
  'tyt-bio:Canlıların Temel Bileşenleri': [
    { kind: 'table', title: 'Organik bileşikler', at: 1, head: ['Bileşik', 'Yapı taşı', 'Görev'], rows: [['Karbonhidrat', 'monosakkarit (glikoz)', 'birincil enerji'], ['Yağ', 'gliserol + yağ asidi', 'depo enerji'], ['Protein', 'amino asit', 'yapı, enzim'], ['Nükleik asit', 'nükleotit', 'kalıtım']] }
  ],
  'tyt-bio:Hücre ve Organeller': [{ kind: 'svg', svg: 'hucre', title: 'Hayvan hücresi (sadeleştirilmiş)', at: 1, caption: 'Bitki hücresinde ayrıca hücre duvarı, kloroplast ve büyük merkezi koful bulunur; sentrozom ve lizozom çoğunda yoktur.' }],
  'tyt-bio:Hücre Zarından Madde Geçişi': [
    { kind: 'table', title: 'Ortama göre hücrede su hareketi', at: 2, head: ['Ortam', 'Hayvan hücresi', 'Bitki hücresi'], rows: [['Hipotonik (dışarısı seyreltik)', 'su alır, şişer, patlayabilir', 'su alır, turgor (patlamaz)'], ['İzotonik', 'değişmez', 'değişmez'], ['Hipertonik (dışarısı derişik)', 'su kaybeder, büzülür', 'plazmoliz']] }
  ],
  'tyt-bio:Canlıların Sınıflandırılması': [
    { kind: 'flow', title: 'Sınıflandırma basamakları (büyükten küçüğe)', at: 0, steps: ['Âlem', 'Şube', 'Sınıf', 'Takım', 'Aile', 'Cins', 'Tür'], caption: 'Aşağı inildikçe birey sayısı azalır, benzerlik artar.' }
  ],
  'tyt-bio:Hücre Bölünmeleri': [{ kind: 'svg', svg: 'bolunme', title: 'Mitoz ve mayoz', at: 1 }],
  'tyt-bio:Kalıtım': [
    { kind: 'punnett', title: 'Punnett karesi: Aa × Aa', at: 0, mother: ['A', 'a'], father: ['A', 'a'], note: 'Genotip 1 AA : 2 Aa : 1 aa. Fenotip 3 baskın : 1 çekinik; çekinik (aa) olma olasılığı {1/4}.' },
    { kind: 'table', title: 'Kan grupları', at: 1, head: ['Fenotip', 'Genotip'], rows: [['A', 'AA ya da A0'], ['B', 'BB ya da B0'], ['AB', 'AB'], ['0', '00']] }
  ],
  'tyt-bio:Ekosistem Ekolojisi': [{ kind: 'svg', svg: 'piramit', title: 'Enerji piramidi', at: 1 }],

  /* ================= TYT Tarih ================= */
  'tyt-tar:Tarih ve Zaman': [
    { kind: 'timeline', title: 'Tarih çağları', at: 2, items: [['MÖ 3200', 'Yazının bulunuşu: İlk Çağ başlar'], ['375', 'Kavimler Göçü: Orta Çağ'], ['1453', 'İstanbul’un fethi: Yeni Çağ'], ['1789', 'Fransız İhtilali: Yakın Çağ']] }
  ],
  'tyt-tar:İlk ve Orta Çağlarda Türk Dünyası': [
    { kind: 'table', title: 'Karıştırılan “ilk”ler', at: 0, head: ['İlk', 'Devlet'], rows: [['bilinen ilk Türk devleti', 'Asya Hun'], ['“Türk” adıyla kurulan ilk devlet', 'Göktürk'], ['ilk Türk alfabesi ve yazıtlar', 'Göktürk (Orhun Yazıtları)'], ['yerleşik hayata geçen ilk devlet', 'Uygur']] }
  ],
  'tyt-tar:İslam Medeniyetinin Doğuşu': [
    { kind: 'timeline', title: 'Hz. Muhammed dönemi', at: 0, items: [['610', 'İlk vahiy'], ['622', 'Hicret'], ['624', 'Bedir'], ['625', 'Uhud'], ['627', 'Hendek'], ['628', 'Hudeybiye Antlaşması'], ['630', 'Mekke’nin fethi']] }
  ],
  'tyt-tar:İlk Türk-İslam Devletleri': [
    { kind: 'timeline', title: 'Büyük Selçuklu savaşları', at: 1, items: [['1040', 'Dandanakan: devlet kuruldu'], ['1048', 'Pasinler: Bizans ile ilk savaş'], ['1071', 'Malazgirt: Anadolu’nun kapıları açıldı'], ['1141', 'Katvan: yenilgi, zayıflama']] }
  ],
  'tyt-tar:Selçuklu Türkiyesi': [
    { kind: 'timeline', title: 'Türkiye Selçukluları', at: 0, items: [['1075', 'Kuruluş (Süleyman Şah)'], ['1176', 'Miryokefalon'], ['1243', 'Kösedağ: Moğol egemenliği']] }
  ],
  'tyt-tar:Beylikten Devlete Osmanlı': [
    { kind: 'timeline', title: 'Kuruluş dönemi', items: [['1299', 'Kuruluş (Osman Bey)'], ['1302', 'Koyunhisar (Bafeus)'], ['1326', 'Bursa’nın alınması'], ['1389', 'I. Kosova'], ['1396', 'Niğbolu'], ['1402', 'Ankara Savaşı, Fetret Devri'], ['1444', 'Varna'], ['1448', 'II. Kosova']] }
  ],
  'tyt-tar:Dünya Gücü Osmanlı': [
    { kind: 'timeline', title: 'Yükselme dönemi', items: [['1453', 'İstanbul’un fethi'], ['1473', 'Otlukbeli'], ['1514', 'Çaldıran'], ['1516–1517', 'Mercidabık, Ridaniye: halifelik'], ['1526', 'Mohaç'], ['1529', 'I. Viyana Kuşatması'], ['1538', 'Preveze']] }
  ],
  'tyt-tar:Değişim Çağında Osmanlı ve Avrupa': [
    { kind: 'timeline', title: 'Önemli antlaşma ve fermanlar', at: 1, items: [['1699', 'Karlofça: ilk büyük toprak kaybı'], ['1718', 'Pasarofça: Lale Devri başlar'], ['1774', 'Küçük Kaynarca: Kırım bağımsız'], ['1839', 'Tanzimat Fermanı'], ['1856', 'Islahat Fermanı'], ['1876', 'Kanun-i Esasi, I. Meşrutiyet']] }
  ],
  'tyt-tar:Milli Mücadele': [
    { kind: 'timeline', title: 'Mondros’tan Lozan’a', items: [
      ['30 Ekim 1918', 'Mondros Ateşkesi'], ['19 Mayıs 1919', 'Samsun’a çıkış'], ['22 Haziran 1919', 'Amasya Genelgesi'], ['Temmuz–Ağustos 1919', 'Erzurum Kongresi'], ['Eylül 1919', 'Sivas Kongresi'],
      ['Ocak 1920', 'Misak-ı Milli'], ['23 Nisan 1920', 'TBMM açıldı'], ['Ağustos 1920', 'Sevr (TBMM tanımadı)'], ['Aralık 1920', 'Gümrü Antlaşması'], ['Ocak 1921', 'I. İnönü'],
      ['Ağustos–Eylül 1921', 'Sakarya'], ['26 Ağustos 1922', 'Büyük Taarruz'], ['11 Ekim 1922', 'Mudanya Ateşkesi'], ['24 Temmuz 1923', 'Lozan Barış Antlaşması']
    ] }
  ],
  'tyt-tar:Atatürkçülük ve Türk İnkılabı': [
    { kind: 'timeline', title: 'İnkılaplar', at: 1, items: [['1922', 'Saltanatın kaldırılması'], ['1923', 'Cumhuriyet’in ilanı'], ['1924', 'Halifeliğin kaldırılması, Tevhid-i Tedrisat'], ['1925', 'Şapka Kanunu, tekke ve zaviyeler'], ['1926', 'Türk Medeni Kanunu'], ['1928', 'Harf İnkılabı'], ['1930', 'Kadınlara belediye seçimlerinde hak'], ['1934', 'Soyadı Kanunu, milletvekili seçme hakkı'], ['1937', 'İlkeler anayasaya girdi']] },
    { kind: 'table', title: 'İnkılap – ilke eşleştirmesi', at: 2, head: ['İnkılap', 'En doğrudan ilke'], rows: [['Cumhuriyet’in ilanı', 'cumhuriyetçilik'], ['Halifeliğin kaldırılması', 'laiklik'], ['Aşarın kaldırılması', 'halkçılık'], ['Sanayi planları', 'devletçilik'], ['Türk Tarih ve Dil kurumları', 'milliyetçilik']] }
  ],

  /* ================= TYT Coğrafya ================= */
  'tyt-cog:Dünya’nın Şekli ve Hareketleri': [
    { kind: 'svg', svg: 'mevsim', title: 'Eksen eğikliği ve 21 Haziran', at: 2 },
    { kind: 'table', title: 'Önemli tarihler (Kuzey Yarım Küre)', at: 2, head: ['Tarih', 'Güneş dik', 'Sonuç'], rows: [['21 Mart', 'Ekvator', 'gece = gündüz, ilkbahar'], ['21 Haziran', 'Yengeç Dönencesi', 'en uzun gündüz, yaz'], ['23 Eylül', 'Ekvator', 'gece = gündüz, sonbahar'], ['21 Aralık', 'Oğlak Dönencesi', 'en uzun gece, kış']] }
  ],
  'tyt-cog:Harita Bilgisi': [{ kind: 'svg', svg: 'izohips', title: 'İzohips (eş yükselti eğrileri)', at: 1 }],
  'tyt-cog:Atmosfer ve İklim': [{ kind: 'svg', svg: 'atmosfer', title: 'Atmosferin katmanları', at: 0 }],
  'tyt-cog:İklim Tipleri': [
    { kind: 'table', title: 'Türkiye’deki iklimler', head: ['İklim', 'Özellik', 'Bitki örtüsü'], rows: [['Akdeniz', 'yaz sıcak–kurak, kış ılık–yağışlı', 'maki'], ['Karadeniz', 'her mevsim yağışlı', 'orman'], ['Karasal', 'yaz sıcak–kurak, kış soğuk–karlı', 'bozkır']] }
  ],
  'tyt-cog:Doğal Afetler': [
    { kind: 'table', title: 'Afetler ve görüldüğü yerler', head: ['Afet', 'En çok'], rows: [['Deprem', 'fay hatları (KAF, DAF, Batı Anadolu)'], ['Heyelan', 'Karadeniz'], ['Çığ', 'Doğu Anadolu, Doğu Karadeniz'], ['Erozyon', 'İç Anadolu, Güneydoğu'], ['Orman yangını', 'Akdeniz ve Ege kıyıları']] }
  ],

  /* ================= TYT Felsefe ================= */
  'tyt-fel:Felsefeye Giriş': [
    { kind: 'table', title: 'Felsefenin alt dalları', head: ['Dal', 'Sorusu'], rows: [['Bilgi felsefesi', 'Doğru bilgi mümkün mü?'], ['Varlık felsefesi', 'Varlık nedir?'], ['Ahlak felsefesi', 'İyi nedir?'], ['Sanat felsefesi', 'Güzel nedir?'], ['Siyaset felsefesi', 'İdeal devlet nasıl olmalı?']] }
  ],
  'tyt-fel:Bilgi Felsefesi': [
    { kind: 'table', title: 'Bilginin kaynağı', at: 1, head: ['Görüş', 'Kaynak', 'Temsilci'], rows: [['Rasyonalizm', 'akıl', 'Platon, Descartes'], ['Empirizm', 'deney', 'Locke, Hume'], ['Kritisizm', 'akıl + deney', 'Kant'], ['Pozitivizm', 'olgular', 'Comte'], ['Entüisyonizm', 'sezgi', 'Bergson, Gazali'], ['Pragmatizm', 'fayda', 'James, Dewey']] }
  ],
  'tyt-fel:Varlık Felsefesi': [
    { kind: 'table', title: 'Varlık nedir?', at: 1, head: ['Görüş', 'Varlık', 'Temsilci'], rows: [['İdealizm', 'düşünce, idea', 'Platon, Hegel'], ['Materyalizm', 'madde', 'Demokritos'], ['Düalizm', 'madde + ruh', 'Descartes'], ['Oluş', 'sürekli değişim', 'Herakleitos']] }
  ],
  'tyt-fel:Ahlak Felsefesi': [
    { kind: 'table', title: 'Evrensel ahlak yasası', at: 0, head: ['Var diyenler', 'Yok diyenler'], rows: [['Kant (ödev)', 'Sofistler'], ['Farabi', 'Hedonizm (haz)'], ['Platon', 'Faydacılık'], ['Spinoza', 'Nietzsche']] }
  ],
  'tyt-fel:Din Felsefesi': [
    { kind: 'table', title: 'Tanrı ile ilgili görüşler', head: ['Görüş', 'Tanrı var mı?', 'Evrene müdahale'], rows: [['Teizm', 'evet', 'evet'], ['Deizm', 'evet', 'hayır'], ['Panteizm', 'Tanrı = evren', '—'], ['Ateizm', 'hayır', '—'], ['Agnostisizm', 'bilinemez', '—']] }
  ],

  /* ================= TYT Din ================= */
  'tyt-din:Bilgi ve İnanç': [
    { kind: 'table', title: 'İman esasları ve İslam’ın şartları', at: 1, head: ['İman esasları (inanılır)', 'İslam’ın şartları (yapılır)'], rows: [['Allah’a', 'kelime-i şehadet'], ['Meleklere', 'namaz'], ['Kitaplara', 'oruç'], ['Peygamberlere', 'zekât'], ['Ahirete', 'hac'], ['Kaza ve kadere', '—']] }
  ],

  /* ================= AYT Matematik ================= */
  'ayt-mat:İkinci Dereceden Denklemler ve Eşitsizlikler': [
    { kind: 'table', title: 'İşaret tablosu: x² − x − 6 = (x + 2)(x − 3)', at: 1, head: ['Aralık', 'x < −2', '−2 < x < 3', 'x > 3'], rows: [['İşaret', '+', '−', '+']], caption: 'x² − x − 6 ≤ 0 çözümü: [−2, 3].' }
  ],
  'ayt-mat:Parabol': [{ kind: 'svg', svg: 'parabol', title: 'y = (x − 1)² − 4', at: 0 }],
  'ayt-mat:Trigonometri': [
    { kind: 'svg', svg: 'birimCember', title: 'Birim çember', at: 1 },
    { kind: 'table', title: 'Özel açılar', at: 0, head: ['', '0°', '30°', '45°', '60°', '90°'], rows: [['sin', '0', '{1/2}', '{√{2}/2}', '{√{3}/2}', '1'], ['cos', '1', '{√{3}/2}', '{√{2}/2}', '{1/2}', '0'], ['tan', '0', '{√{3}/3}', '1', '√{3}', 'tanımsız']] }
  ],
  'ayt-mat:Üstel ve Logaritmik Fonksiyonlar': [{ kind: 'svg', svg: 'ustelLog', title: 'Üstel ve logaritmik fonksiyon', at: 1 }],
  'ayt-mat:Diziler': [
    { kind: 'table', title: 'Aritmetik ve geometrik dizi', head: ['', 'Aritmetik', 'Geometrik'], rows: [['Sabit olan', 'fark d', 'oran r'], ['Genel terim', 'a₁ + (n − 1)d', 'a₁ · r^{n − 1}'], ['İlk n terim toplamı', '{n(a₁ + aₙ)/2}', 'a₁ · {rⁿ − 1/r − 1}'], ['Orta terim', '{önceki + sonraki/2}', 'aₖ² = önceki · sonraki']] }
  ],
  'ayt-mat:Türev': [{ kind: 'svg', svg: 'turev', title: 'Türevin geometrik anlamı', at: 1 }],
  'ayt-mat:İntegral': [{ kind: 'svg', svg: 'integral', title: 'Eğri altındaki alan', at: 1, caption: '∫_{a}^{b} f(x) dx = F(b) − F(a)' }],
  'ayt-mat:Çember ve Daire': [{ kind: 'svg', svg: 'cember', title: 'Merkez açı ve çevre açı', at: 0 }],
  'ayt-mat:Doğrunun Analitiği': [{ kind: 'svg', svg: 'analitik', title: 'Eğim', at: 0 }],
  'ayt-mat:Katı Cisimler': [{ kind: 'svg', svg: 'kati', title: 'Silindir ve koni', at: 0 }],

  /* ================= AYT Fizik ================= */
  'ayt-fiz:Vektörler ve Bağıl Hareket': [{ kind: 'svg', svg: 'vektor', title: 'Uç uca ekleme', at: 0 }],
  'ayt-fiz:Newton’un Hareket Yasaları': [{ kind: 'svg', svg: 'egik', title: 'Eğik düzlemde kuvvetler', at: 1 }],
  'ayt-fiz:Bir Boyutta Sabit İvmeli Hareket': [
    { kind: 'table', title: 'Grafikten ne okunur?', at: 1, head: ['Grafik', 'Eğim', 'Alan'], rows: [['konum – zaman', 'hız', '—'], ['hız – zaman', 'ivme', 'yer değiştirme'], ['ivme – zaman', '—', 'hız değişimi']] }
  ],
  'ayt-fiz:Atışlar': [{ kind: 'svg', svg: 'atis', title: 'Eğik atış', at: 1 }],
  'ayt-fiz:İtme ve Momentum': [
    { kind: 'table', title: 'Çarpışma türleri', at: 1, head: ['Çarpışma', 'Momentum', 'Kinetik enerji'], rows: [['Esnek', 'korunur', 'korunur'], ['Esnek olmayan', 'korunur', 'korunmaz'], ['Kenetlenme', 'korunur', 'en çok kayıp']] }
  ],
  'ayt-fiz:Tork, Denge ve Kütle Merkezi': [{ kind: 'svg', svg: 'tork', title: 'Kaldıraçta denge', at: 0 }],
  'ayt-fiz:Paralel Levhalar ve Sığa': [
    { kind: 'table', title: 'Sığaç bağlama (dirençlerin tersi)', at: 1, head: ['Bağlama', 'Eşdeğer sığa', 'Aynı olan'], rows: [['Paralel', 'C₁ + C₂', 'gerilim'], ['Seri', '{1/C} = {1/C₁} + {1/C₂}', 'yük']] }
  ],
  'ayt-fiz:Dalga Mekaniği': [
    { kind: 'flow', title: 'Elektromanyetik spektrum (frekans artar →)', at: 1, steps: ['radyo', 'mikrodalga', 'kızılötesi', 'görünür ışık', 'morötesi', 'X ışını', 'gama'] }
  ],
  'ayt-fiz:Atom Fiziği ve Radyoaktivite': [
    { kind: 'table', title: 'Bozunma türleri', at: 1, head: ['Işıma', 'Kütle no.', 'Atom no.', 'Giricilik'], rows: [['α (alfa)', '−4', '−2', 'en az'], ['β⁻ (beta)', 'değişmez', '+1', 'orta'], ['γ (gama)', 'değişmez', 'değişmez', 'en fazla']] }
  ],

  /* ================= AYT Kimya ================= */
  'ayt-kim:Modern Atom Teorisi': [
    { kind: 'flow', title: 'Orbitallerin dolma sırası (Aufbau)', at: 0, steps: ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s'] },
    { kind: 'table', title: 'Orbital kapasiteleri', at: 0, head: ['Orbital', 's', 'p', 'd', 'f'], rows: [['Orbital sayısı', '1', '3', '5', '7'], ['En çok elektron', '2', '6', '10', '14']] }
  ],
  'ayt-kim:Gazlar': [
    { kind: 'table', title: 'Gaz yasaları', at: 0, head: ['Yasa', 'Sabit', 'Bağıntı'], rows: [['Boyle', 'n, T', 'P · V sabit'], ['Charles', 'n, P', '{V/T} sabit'], ['Gay-Lussac', 'n, V', '{P/T} sabit'], ['Avogadro', 'P, T', '{V/n} sabit'], ['İdeal gaz', '—', 'PV = nRT']] }
  ],
  'ayt-kim:Kimyasal Tepkimelerde Enerji': [{ kind: 'svg', svg: 'enerji', title: 'Potansiyel enerji diyagramı', at: 0 }],
  'ayt-kim:Tepkime Hızları': [{ kind: 'svg', svg: 'enerji', title: 'Aktivasyon enerjisi ve katalizör', at: 0, caption: 'Katalizör Ea’yı düşürür (yeşil kesikli eğri); ΔH değişmez.' }],
  'ayt-kim:Kimyasal Denge': [
    { kind: 'table', title: 'Le Chatelier: N₂ + 3H₂ ⇌ 2NH₃, ΔH < 0', at: 1, head: ['Etki', 'Denge kayar', 'K'], rows: [['N₂ eklemek', 'ürünlere', 'değişmez'], ['NH₃ çekmek', 'ürünlere', 'değişmez'], ['Basıncı artırmak', 'ürünlere (az mol gaz)', 'değişmez'], ['Sıcaklığı artırmak', 'girenlere (endotermik yön)', 'küçülür'], ['Katalizör', 'kaymaz', 'değişmez']] }
  ],
  'ayt-kim:Kimya ve Elektrik': [{ kind: 'svg', svg: 'pil', title: 'Zn–Cu galvanik pili', at: 1 }],
  'ayt-kim:Karbon Kimyasına Giriş': [
    { kind: 'table', title: 'Hibritleşme', head: ['Hibrit', 'Bağ', 'Açı', 'Geometri'], rows: [['sp³', 'tekli', '109,5°', 'düzgün dörtyüzlü (CH₄)'], ['sp²', 'bir ikili', '120°', 'düzlem üçgen (C₂H₄)'], ['sp', 'üçlü', '180°', 'doğrusal (C₂H₂)']] }
  ],
  'ayt-kim:Organik Bileşikler': [
    { kind: 'table', title: 'Hidrokarbonlar', at: 0, head: ['Sınıf', 'Genel formül', 'Bağ', 'Tepkime'], rows: [['Alkan', 'CₙH_{2n + 2}', 'tekli', 'yer değiştirme'], ['Alken', 'CₙH_{2n}', 'ikili', 'katılma'], ['Alkin', 'CₙH_{2n − 2}', 'üçlü', 'katılma']] },
    { kind: 'flow', title: 'Birincil alkolün yükseltgenmesi', at: 1, steps: ['birincil alkol (R−CH₂OH)', 'aldehit (R−CHO)', 'karboksilik asit (R−COOH)'] }
  ],

  /* ================= AYT Biyoloji ================= */
  'ayt-bio:Sinir Sistemi': [{ kind: 'svg', svg: 'noron', title: 'Nöron', at: 0 }],
  'ayt-bio:Endokrin Sistem': [
    { kind: 'table', title: 'Bez – hormon – etki', at: 0, head: ['Bez', 'Hormon', 'Etki'], rows: [['Hipofiz', 'büyüme hormonu, TSH, FSH, LH', 'büyüme, diğer bezleri uyarma'], ['Tiroit', 'tiroksin, kalsitonin', 'metabolizma hızı, kan Ca²⁺ ↓'], ['Paratiroit', 'parathormon', 'kan Ca²⁺ ↑'], ['Pankreas', 'insülin / glukagon', 'kan şekeri ↓ / ↑'], ['Böbrek üstü', 'adrenalin, kortizol, aldosteron', 'stres, Na⁺ tutma'], ['Epifiz', 'melatonin', 'uyku ritmi']] }
  ],
  'ayt-bio:Sindirim Sistemi': [
    { kind: 'table', title: 'Kimyasal sindirim nerede başlar?', at: 0, head: ['Besin', 'Başladığı yer', 'Enzim'], rows: [['Karbonhidrat (nişasta)', 'ağız', 'amilaz'], ['Protein', 'mide', 'pepsin'], ['Yağ', 'ince bağırsak', 'lipaz (safra mekanik)']], caption: 'Üçünün de kimyasal sindirimi ince bağırsakta tamamlanır.' }
  ],
  'ayt-bio:Dolaşım ve Bağışıklık Sistemi': [
    { kind: 'flow', title: 'Küçük (akciğer) dolaşımı', at: 0, steps: ['Sağ karıncık', 'Akciğer atardamarı (kirli kan)', 'Akciğer: O₂ alınır', 'Akciğer toplardamarı (temiz kan)', 'Sol kulakçık'] },
    { kind: 'flow', title: 'Büyük (vücut) dolaşımı', at: 0, steps: ['Sol karıncık', 'Aort', 'Vücut dokuları', 'Üst ve alt ana toplardamar', 'Sağ kulakçık'] }
  ],
  'ayt-bio:Solunum Sistemi': [
    { kind: 'flow', title: 'Havanın yolu', at: 0, steps: ['Burun', 'Yutak', 'Gırtlak', 'Soluk borusu', 'Bronş', 'Bronşçuk', 'Alveol'] }
  ],
  'ayt-bio:Boşaltım Sistemi': [
    { kind: 'flow', title: 'Nefronda idrar oluşumu', at: 0, steps: ['Süzülme (glomerulus)', 'Geri emilim (tübül)', 'Salgılama (tübül)', 'İdrar'] }
  ],
  'ayt-bio:Üreme Sistemi ve Embriyonik Gelişim': [
    { kind: 'table', title: 'Embriyonik tabakalar', at: 1, head: ['Tabaka', 'Oluşturduğu yapılar'], rows: [['Ektoderm', 'deri, sinir sistemi, duyu organları'], ['Mezoderm', 'kas, kemik, dolaşım, boşaltım, üreme'], ['Endoderm', 'sindirim ve solunum kanalı epiteli, karaciğer, pankreas']] }
  ],
  'ayt-bio:Komünite ve Popülasyon Ekolojisi': [
    { kind: 'table', title: 'Türler arası ilişkiler', at: 1, head: ['İlişki', '1. tür', '2. tür', 'Örnek'], rows: [['Mutualizm', '+', '+', 'liken (alg + mantar)'], ['Kommensalizm', '+', '0', 'köpek balığı – vantuzlu balık'], ['Parazitizm', '+', '−', 'bit – insan'], ['Av – avcı', '+', '−', 'kurt – geyik'], ['Rekabet', '−', '−', 'aynı besini paylaşanlar']] }
  ],
  'ayt-bio:Genden Proteine': [
    { kind: 'flow', title: 'Bilginin akışı', at: 1, steps: ['DNA (çekirdek)', 'transkripsiyon → mRNA', 'mRNA ribozoma gider', 'translasyon: kodon ↔ tRNA antikodonu', 'protein'] },
    { kind: 'table', title: 'DNA ve RNA', at: 0, head: ['', 'DNA', 'RNA'], rows: [['Zincir', 'çift', 'tek'], ['Şeker', 'deoksiriboz', 'riboz'], ['Bazlar', 'A, T, G, C', 'A, U, G, C'], ['Yer', 'çekirdek, mitokondri, kloroplast', 'çekirdek, sitoplazma, ribozom']] }
  ],
  'ayt-bio:Canlılık ve Enerji': [
    { kind: 'table', title: 'Oksijenli solunumun evreleri', at: 1, head: ['Evre', 'Yer', 'Oksijen gerekir mi?'], rows: [['Glikoliz', 'sitoplazma', 'hayır'], ['Krebs döngüsü', 'mitokondri matriksi', 'dolaylı olarak'], ['Elektron taşıma sistemi', 'mitokondri iç zarı', 'evet (son elektron alıcısı)']] },
    { kind: 'table', title: 'Fotosentezin evreleri', at: 0, head: ['Evre', 'Yer', 'Ürün'], rows: [['Işığa bağımlı', 'tilakoit zar', 'ATP, NADPH, O₂'], ['Işıktan bağımsız (Calvin)', 'stroma', 'glikoz']] }
  ],
  'ayt-bio:Bitki Biyolojisi': [
    { kind: 'table', title: 'İletim dokuları', at: 0, head: ['', 'Ksilem (odun borusu)', 'Floem (soymuk borusu)'], rows: [['Taşıdığı', 'su ve mineraller', 'organik besin'], ['Yön', 'tek yönlü (yukarı)', 'çift yönlü'], ['Hücreler', 'ölü', 'canlı']] },
    { kind: 'table', title: 'Bitki hormonları', at: 1, head: ['Hormon', 'Etki'], rows: [['Oksin', 'uzama, ışığa yönelim, tepe baskınlığı'], ['Sitokinin', 'hücre bölünmesi'], ['Giberellin', 'gövde uzaması, çimlenme'], ['Absisik asit', 'dormansi, stoma kapanması'], ['Etilen', 'meyve olgunlaşması']] }
  ],

  /* ================= AYT Edebiyat ================= */
  'ayt-edb:Şiir Bilgisi: Ölçü, Kafiye, Nazım Biçimleri': [
    { kind: 'table', title: 'Kafiye türleri', at: 1, head: ['Tür', 'Benzer ses'], rows: [['Yarım', 'tek ses'], ['Tam', 'iki ses (v**ar** – y**ar**)'], ['Zengin', 'üç ve daha fazla ses (b**ağlar** – **ağlar**)'], ['Cinaslı', 'yazılışı aynı, anlamı farklı sözcük (yüz: surat – yüz: sayı)']] },
    { kind: 'flow', title: 'Kafiye ararken', at: 1, steps: ['Dize sonlarını yaz', 'Aynı ek ve sözcükleri (redif) ayır', 'Kalan benzer sesler kafiye'] }
  ],
  'ayt-edb:Söz Sanatları': [
    { kind: 'table', title: 'Benzetme ile ilgili sanatlar', at: 0, head: ['Sanat', 'Hangi ögeler var?', 'Örnek'], rows: [['Teşbih', 'benzeyen + benzetilen (+ edat, yön)', 'Gözleri deniz gibi mavi'], ['Teşbih-i beliğ', 'yalnız benzeyen + benzetilen', 'Gönlüm bir kuştu'], ['Açık istiare', 'yalnız benzetilen', '“Aslan” geldi (yiğit kişi)'], ['Kapalı istiare', 'yalnız benzeyen + benzetilenin özelliği', 'Rüzgâr ağladı']] }
  ],
  'ayt-edb:Halk Edebiyatı': [
    { kind: 'table', title: 'Halk edebiyatının üç kolu', head: ['Kol', 'Biçimler', 'Temsilciler'], rows: [['Anonim', 'mani, türkü, ninni, ağıt', 'söyleyeni belli değil'], ['Âşık', 'koşma, semai, varsağı, destan', 'Karacaoğlan, Pir Sultan, Dadaloğlu'], ['Tekke', 'ilahi, nefes, nutuk, devriye', 'Yunus Emre, Kaygusuz Abdal']] }
  ],
  'ayt-edb:Divan Edebiyatı': [
    { kind: 'table', title: 'Nazım biçimleri', at: 0, head: ['Biçim', 'Konu', 'Kafiye'], rows: [['Gazel', 'aşk, şarap (5–15 beyit)', 'aa, ba, ca'], ['Kaside', 'övgü (33–99 beyit)', 'aa, ba, ca'], ['Mesnevi', 'uzun hikâye', 'aa, bb, cc'], ['Rubai', 'felsefe (4 dize)', 'aaxa'], ['Şarkı', 'bestelenmek için, nakaratlı', 'bentler hâlinde']] },
    { kind: 'timeline', title: 'Yüzyıllara göre şairler', at: 1, items: [['15. yy', 'Şeyhi, Ahmedi, Nevai'], ['16. yy', 'Fuzuli, Baki'], ['17. yy', 'Nefi, Nabi, Şeyhülislam Yahya'], ['18. yy', 'Nedim, Şeyh Galip']] }
  ],
  'ayt-edb:Tanzimat Edebiyatı': [
    { kind: 'table', title: 'Tanzimat’ın ilkleri', head: ['İlk', 'Eser', 'Yazar'], rows: [['İlk yerli tiyatro', 'Şair Evlenmesi', 'Şinasi'], ['İlk yerli roman', 'Taaşşuk-ı Talat ve Fitnat', 'Şemsettin Sami'], ['İlk edebi roman', 'İntibah', 'Namık Kemal'], ['İlk tarihî roman', 'Cezmi', 'Namık Kemal'], ['İlk realist roman', 'Araba Sevdası', 'Recaizade Mahmut Ekrem'], ['İlk köy romanı', 'Karabibik', 'Nabizade Nazım']] }
  ],
  'ayt-edb:Cumhuriyet Dönemi Şiiri': [
    { kind: 'table', title: 'Akımlar', head: ['Akım', 'Özellik', 'Şairler'], rows: [['Garip (1941)', 'sade dil, ölçü–kafiye yok, sıradan insan', 'Orhan Veli, Oktay Rifat, Melih Cevdet'], ['İkinci Yeni', 'imge, anlam kapalılığı', 'Cemal Süreya, Edip Cansever, Turgut Uyar'], ['Toplumcu', 'toplumsal sorunlar', 'Nazım Hikmet, Ahmed Arif'], ['Öz şiir', 'ahenk, iç dünya', 'Tanpınar, Dıranas, Cahit Sıtkı'], ['Milli–dinî', 'gelenek, maneviyat', 'Necip Fazıl, Sezai Karakoç']] }
  ],
  'ayt-edb:Edebi Akımlar ve Dünya Edebiyatı': [
    { kind: 'timeline', title: 'Akımların sırası', items: [['17. yy', 'Klasisizm: akıl, kural'], ['19. yy başı', 'Romantizm: duygu, hayal'], ['19. yy ortası', 'Realizm: gözlem, gerçeklik'], ['19. yy sonu', 'Natüralizm · Parnasizm · Sembolizm'], ['20. yy', 'Sürrealizm, egzistansiyalizm, postmodernizm']] }
  ],

  /* ================= AYT Tarih ================= */
  'ayt-tar:Osmanlı Kuruluş ve Yükselme': [
    { kind: 'timeline', title: 'Kuruluştan Kanuni’ye', at: 1, items: [['1299', 'Kuruluş'], ['1402', 'Ankara Savaşı'], ['1453', 'İstanbul’un fethi'], ['1517', 'Ridaniye, halifelik'], ['1526', 'Mohaç'], ['1538', 'Preveze'], ['1555', 'Amasya Antlaşması (İran)']] }
  ],
  'ayt-tar:Osmanlı Kültür ve Medeniyeti': [
    { kind: 'table', title: 'Divan-ı Hümayun üyeleri', at: 0, head: ['Üye', 'Görev'], rows: [['Sadrazam', 'padişahın mutlak vekili'], ['Kazasker', 'yargı ve eğitim'], ['Defterdar', 'maliye'], ['Nişancı', 'yazışmalar, tuğra, tapu'], ['Kaptan-ı derya', 'donanma'], ['Şeyhülislam', 'dinî konularda fetva']] }
  ],
  'ayt-tar:Değişen Dünya Dengeleri ve Osmanlı': [
    { kind: 'timeline', title: '17–18. yüzyıl antlaşmaları', items: [['1606', 'Zitvatorok: Avusturya ile eşitlik'], ['1639', 'Kasr-ı Şirin: İran sınırı'], ['1699', 'Karlofça: ilk büyük kayıp'], ['1711', 'Prut: Rusya’ya karşı zafer'], ['1718', 'Pasarofça: Lale Devri'], ['1739', 'Belgrat'], ['1774', 'Küçük Kaynarca'], ['1792', 'Yaş: Kırım Rusya’ya']] }
  ],
  'ayt-tar:XIX. Yüzyılda Osmanlı ve Islahatlar': [
    { kind: 'timeline', title: '19. yüzyıl', items: [['1826', 'Yeniçeri Ocağı kaldırıldı'], ['1829', 'Edirne Antlaşması: Yunanistan bağımsız'], ['1833', 'Hünkâr İskelesi'], ['1839', 'Tanzimat Fermanı'], ['1841', 'Londra Boğazlar Sözleşmesi'], ['1853–1856', 'Kırım Savaşı, Paris Antlaşması'], ['1856', 'Islahat Fermanı'], ['1876', 'I. Meşrutiyet'], ['1877–1878', '93 Harbi, Berlin Antlaşması']] }
  ],
  'ayt-tar:XX. Yüzyıl Başlarında Osmanlı': [
    { kind: 'timeline', title: 'Yıkılışa giden yol', items: [['1908', 'II. Meşrutiyet'], ['1911–1912', 'Trablusgarp Savaşı'], ['1912–1913', 'Balkan Savaşları'], ['1914', 'I. Dünya Savaşı’na giriş'], ['1915', 'Çanakkale Zaferi'], ['1918', 'Mondros Ateşkesi']] }
  ],
  'ayt-tar:İki Savaş Arası Dönem ve II. Dünya Savaşı': [
    { kind: 'timeline', title: 'II. Dünya Savaşı', at: 1, items: [['1939', 'Almanya Polonya’ya saldırdı'], ['1941', 'Pearl Harbor: ABD savaşa girdi'], ['1942–1943', 'Stalingrad'], ['1944', 'Normandiya çıkarması'], ['1945', 'Almanya ve Japonya teslim oldu; BM kuruldu']] }
  ],
  'ayt-tar:Soğuk Savaş ve Yumuşama Dönemi': [
    { kind: 'timeline', title: 'Soğuk Savaş', items: [['1947', 'Truman Doktrini, Marshall Planı'], ['1949', 'NATO'], ['1952', 'Türkiye NATO’da'], ['1955', 'Varşova Paktı'], ['1962', 'Küba Füze Krizi'], ['1974', 'Kıbrıs Barış Harekâtı'], ['1989', 'Berlin Duvarı yıkıldı'], ['1991', 'SSCB dağıldı']] }
  ],

  /* ================= AYT Coğrafya ================= */
  'ayt-cog:Ekosistemler ve Madde Döngüleri': [
    { kind: 'flow', title: 'Karbon döngüsü', at: 1, steps: ['Atmosferde CO₂', 'Fotosentez: bitkiler bağlar', 'Besin zinciri', 'Solunum, ayrışma, yanma', 'Atmosferde CO₂'] }
  ],
  'ayt-cog:Nüfus Politikaları': [
    { kind: 'timeline', title: 'Türkiye’nin nüfus politikaları', at: 1, items: [['1923–1965', 'Nüfus artışı teşvik edildi'], ['1965–1980', 'Nüfus planlaması, artış yavaşlatıldı'], ['Günümüz', 'Doğurganlık 2,1’in altında; yeniden teşvik']] }
  ],
  'ayt-cog:Ekonomik Faaliyetler ve Doğal Kaynaklar': [
    { kind: 'table', title: 'Türkiye’de madenler', head: ['Maden', 'Başlıca yer'], rows: [['Bor', 'Eskişehir, Kütahya, Balıkesir'], ['Taş kömürü', 'Zonguldak'], ['Linyit', 'Afşin–Elbistan, Soma'], ['Demir', 'Divriği (Sivas)'], ['Krom', 'Guleman (Elazığ)'], ['Bakır', 'Murgul (Artvin), Ergani']] }
  ],
  'ayt-cog:Bölgesel Kalkınma Projeleri': [
    { kind: 'table', title: 'Projeler', head: ['Proje', 'Bölge', 'Öne çıkan'], rows: [['GAP', 'Güneydoğu Anadolu', 'Fırat–Dicle barajları, sulama, enerji'], ['DAP', 'Doğu Anadolu', 'hayvancılık, tarım'], ['DOKAP', 'Doğu Karadeniz', 'ulaşım, yayla turizmi'], ['KOP', 'Konya Ovası', 'sulama, Mavi Tünel']] }
  ],

  /* ================= AYT Felsefe Grubu ================= */
  'ayt-fel:Psikoloji': [
    { kind: 'flow', title: 'Maslow’un ihtiyaçlar hiyerarşisi (alttan üste)', at: 1, steps: ['Fizyolojik', 'Güvenlik', 'Ait olma, sevgi', 'Saygınlık', 'Kendini gerçekleştirme'] },
    { kind: 'flow', title: 'Bellek', at: 1, steps: ['Duyusal bellek', 'Kısa süreli bellek (7 ± 2)', 'Uzun süreli bellek'] }
  ],
  'ayt-fel:Mantık': [
    { kind: 'table', title: 'Klasik önermeler', at: 1, head: ['Tür', 'Kalıp', 'Örnek'], rows: [['A: tümel olumlu', 'Bütün S’ler P’dir', 'Bütün insanlar ölümlüdür.'], ['E: tümel olumsuz', 'Hiçbir S P değildir', 'Hiçbir kuş memeli değildir.'], ['I: tikel olumlu', 'Bazı S’ler P’dir', 'Bazı öğrenciler sporcudur.'], ['O: tikel olumsuz', 'Bazı S’ler P değildir', 'Bazı kediler siyah değildir.']] }
  ],
  'ayt-fel:Felsefe Tarihi': [
    { kind: 'table', title: 'Doğa filozofları ve arkhe', at: 0, head: ['Filozof', 'Arkhe'], rows: [['Thales', 'su'], ['Anaksimandros', 'apeiron (sınırsız)'], ['Anaksimenes', 'hava'], ['Herakleitos', 'ateş (değişim)'], ['Pythagoras', 'sayı'], ['Empedokles', 'dört öge'], ['Demokritos', 'atom']] }
  ],

  /* ================= AYT Din ================= */
  'ayt-din:Yaşayan Dinler': [
    { kind: 'table', title: 'Dinler bir bakışta', head: ['Din', 'Kurucu / önder', 'Kutsal metin', 'Ülke / bölge'], rows: [['Hinduizm', 'yok', 'Vedalar', 'Hindistan'], ['Budizm', 'Buda', 'Tripitaka', 'Güney ve Doğu Asya'], ['Şintoizm', 'yok', 'Kojiki', 'Japonya'], ['Yahudilik', 'Hz. Musa', 'Tevrat (Tanah)', '—'], ['Hristiyanlık', 'Hz. İsa', 'Kitab-ı Mukaddes', '—']] }
  ],
  'ayt-din:Dünya ve Ahiret': [
    { kind: 'flow', title: 'Ahiret hayatının aşamaları', at: 0, steps: ['Ölüm', 'Kabir (berzah)', 'Kıyamet', 'Yeniden diriliş', 'Mahşer', 'Hesap, mizan', 'Cennet / cehennem'] }
  ],

  /* ================= YDT ================= */
  'ydt-ing:Tenses': [
    { kind: 'table', title: 'Zamanlar ve ipucu sözcükler', at: 0, head: ['Zaman', 'Yapı', 'İpucu'], rows: [['Simple present', 'V1 (-s)', 'every day, usually'], ['Present continuous', 'am/is/are + V-ing', 'now, at the moment'], ['Present perfect', 'have/has + V3', 'since, for, already, yet, so far'], ['Simple past', 'V2', 'yesterday, ago, in 2010'], ['Past perfect', 'had + V3', 'by the time, before'], ['Future', 'will / be going to + V1', 'tomorrow, next week']] }
  ],
  'ydt-ing:Modals': [
    { kind: 'table', title: 'Karıştırılan modallar', head: ['Yapı', 'Anlam'], rows: [['must', 'zorunluluk, güçlü çıkarım'], ['mustn’t', 'yasak'], ['don’t have to', 'gerek yok'], ['should have done', 'yapmalıydı (yapmadı)'], ['must have done', 'kesin yapmıştır'], ['can’t have done', 'yapmış olamaz']] }
  ],
  'ydt-ing:Conditionals ve Wish': [
    { kind: 'table', title: 'Koşul cümleleri', at: 0, head: ['Tür', 'If cümlesi', 'Ana cümle', 'Anlam'], rows: [['Zero', 'present', 'present', 'genel doğru'], ['First', 'present', 'will + V1', 'olası gelecek'], ['Second', 'past', 'would + V1', 'şimdi gerçek dışı'], ['Third', 'past perfect', 'would have + V3', 'geçmişte gerçek dışı']] }
  ],
  'ydt-ing:Relative Clauses': [
    { kind: 'table', title: 'İlgi zamirleri', head: ['Zamir', 'Kimin / neyin yerine', 'Örnek'], rows: [['who', 'insan', 'the man who called'], ['which', 'nesne, hayvan', 'the book which I read'], ['whose', 'iyelik', 'the girl whose bag…'], ['where', 'yer', 'the town where I was born'], ['when', 'zaman', 'the day when we met']] }
  ],
  'ydt-ing:Adverbial Clauses ve Bağlaçlar': [
    { kind: 'table', title: 'Aynı anlam, farklı yapı', at: 0, head: ['Anlam', '+ cümle', '+ isim / V-ing'], rows: [['Zıtlık', 'although, even though', 'despite, in spite of'], ['Neden', 'because, since, as', 'because of, due to'], ['Amaç', 'so that', 'in order to + V1']] }
  ],
  'ydt-ing:Gerund ve Infinitive': [
    { kind: 'table', title: 'V-ing mi, to + V1 mi?', at: 0, head: ['V-ing alanlar', 'to + V1 alanlar'], rows: [['enjoy, avoid, finish', 'want, decide, plan'], ['mind, suggest, keep', 'hope, refuse, agree'], ['look forward to, be used to', 'promise, afford, manage']] }
  ],
  'ydt-ing:Prepositions ve Phrasal Verbs': [
    { kind: 'table', title: 'Zaman edatları', at: 0, head: ['Edat', 'Ne ile?', 'Örnek'], rows: [['at', 'saat, an', 'at 9 o’clock, at night'], ['on', 'gün, tarih', 'on Monday, on 5 May'], ['in', 'ay, yıl, mevsim', 'in June, in 1950, in winter']] }
  ]
};

export const FIGURES: Record<string, Figure[]> = { ...FIRST, ...FIGURES_MORE };
export const FIGURE_KEYS_OVERLAP = Object.keys(FIGURES_MORE).filter((k) => k in FIRST);
