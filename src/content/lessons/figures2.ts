/* Görseller ve şemalar, ikinci bölüm: ilk bölümde olmayan konular. figures.ts ile birleştirilir; anahtarlar çakışmamalı (test kontrol eder). */
import type { Figure } from './types';

export const FIGURES_MORE: Record<string, Figure[]> = {
  /* ---------------- TYT Türkçe ---------------- */
  'tyt-tr:Zarf, Edat, Bağlaç, Ünlem': [
    { kind: 'table', title: 'Zarf türleri', at: 0, head: ['Tür', 'Soru', 'Örnek'], rows: [['Durum', 'nasıl?', 'hızlı koştu'], ['Zaman', 'ne zaman?', 'yarın gel'], ['Yer – yön', 'nereye? (ek almadan)', 'içeri gir'], ['Miktar', 'ne kadar?', 'çok güzel'], ['Soru', '—', 'nasıl, niçin, ne zaman']] },
    { kind: 'flow', title: '“ile” bağlaç mı, edat mı?', at: 1, steps: ['“ile” yerine “ve” koy', 'Anlam bozulmuyor → bağlaç', 'Bozuluyor (“aracılığıyla”) → edat'] }
  ],

  /* ---------------- TYT Matematik ---------------- */
  'tyt-mat:Sayı Basamakları': [
    { kind: 'table', title: 'Çözümleme', head: ['Sayı', 'Açılım'], rows: [['(ab)', '10a + b'], ['(abc)', '100a + 10b + c'], ['(ab) + (ba)', '11(a + b)'], ['(ab) − (ba)', '9(a − b)']] }
  ],
  'tyt-mat:Rasyonel Sayılar': [
    { kind: 'flow', title: 'Devirli sayıyı kesre çevirme: 1,2333…', at: 1, steps: ['sayının tamamı: 123', 'devretmeyen kısım: 12', 'payda: bir 9, bir 0 → 90', '{123 − 12/90} = {111/90}'] }
  ],
  'tyt-mat:Basit Eşitsizlikler': [
    { kind: 'table', title: 'Eşitsizlikte işlemler', head: ['İşlem', 'Yön'], rows: [['her iki yana sayı eklemek / çıkarmak', 'değişmez'], ['pozitif sayıyla çarpmak / bölmek', 'değişmez'], ['negatif sayıyla çarpmak / bölmek', '**değişir**'], ['aynı yönlü eşitsizlikleri toplamak', 'yapılabilir'], ['taraf tarafa çıkarmak', 'yapılamaz (−1 ile çarpıp topla)']] }
  ],
  'tyt-mat:Üslü Sayılar': [
    { kind: 'table', title: 'Üs kuralları', at: 0, head: ['Kural', 'Örnek'], rows: [['a^{m} · a^{n} = a^{m + n}', '2^{3} · 2^{4} = 2^{7}'], ['{a^{m}/a^{n}} = a^{m − n}', '{5^{6}/5^{2}} = 5^{4}'], ['(a^{m})^{n} = a^{mn}', '(3^{2})^{3} = 3^{6}'], ['a^{−n} = {1/a^{n}}', '2^{−3} = {1/8}'], ['a^{0} = 1', '7^{0} = 1'], ['(−a)^{çift} > 0', '(−2)^{4} = 16; −2^{4} = −16']] }
  ],
  'tyt-mat:Köklü Sayılar': [
    { kind: 'table', title: 'Kök kuralları', at: 0, head: ['Kural', 'Örnek'], rows: [['√{a · b} = √{a} · √{b}', '√{12} = 2√{3}'], ['benzer kökler toplanır', '2√{3} + 5√{3} = 7√{3}'], ['√{x²} = |x|', '√{(−3)²} = 3'], ['eşlenik: (√{a} − √{b})(√{a} + √{b}) = a − b', '(√{5} − √{2})(√{5} + √{2}) = 3']], caption: '√{a + b} ≠ √{a} + √{b}: √{9 + 16} = 5, ama 3 + 4 = 7.' }
  ],
  'tyt-mat:Çarpanlara Ayırma': [
    { kind: 'table', title: 'Özdeşlikler', at: 0, head: ['İfade', 'Çarpanlar'], rows: [['a² − b²', '(a − b)(a + b)'], ['a² + 2ab + b²', '(a + b)²'], ['a² − 2ab + b²', '(a − b)²'], ['a³ − b³', '(a − b)(a² + ab + b²)'], ['a³ + b³', '(a + b)(a² − ab + b²)'], ['x² + 5x + 6', '(x + 2)(x + 3)']] }
  ],
  'tyt-mat:Oran – Orantı': [
    { kind: 'table', title: 'Doğru ve ters orantı', head: ['', 'Doğru orantı', 'Ters orantı'], rows: [['Biri artınca diğeri', 'aynı oranda artar', 'aynı oranda azalır'], ['Sabit olan', '{y/x}', 'x · y'], ['Örnek', 'ürün sayısı – fiyat', 'işçi sayısı – süre']] }
  ],
  'tyt-mat:Denklem Çözme': [
    { kind: 'flow', title: 'İki bilinmeyende yok etme: 2x + y = 11, x − y = 1', steps: ['Denklemleri taraf tarafa topla', '3x = 12', 'x = 4', 'yerine koy: y = 3'] }
  ],
  'tyt-mat:Sayı ve Kesir Problemleri': [
    { kind: 'table', title: 'Sözden denkleme', at: 0, head: ['Söz', 'Denklem'], rows: [['x’in 3 katının 5 eksiği', '3x − 5'], ['x’in 5 eksiğinin 3 katı', '3(x − 5)'], ['bir sayının {2/3}’ü', '{2x/3}'], ['ardışık üç sayının toplamı', 'x + (x + 1) + (x + 2)'], ['iki katından 4 fazla', '2x + 4']] }
  ],
  'tyt-mat:Yaş Problemleri': [
    { kind: 'table', title: 'Tablo kur: baba 40, oğul 10 yaşında', head: ['Kişi', 'x yıl önce', 'Bugün', 'x yıl sonra'], rows: [['Baba', '40 − x', '40', '40 + x'], ['Oğul', '10 − x', '10', '10 + x'], ['Fark', '30', '30', '30']], caption: 'Yaş farkı hiç değişmez; oranlar değişir.' }
  ],
  'tyt-mat:İşçi ve Havuz Problemleri': [
    { kind: 'table', title: 'Bir saatte yapılan iş', head: ['Kişi / musluk', 'Tek başına süre', '1 saatte'], rows: [['Ali', '6 gün', '{1/6}'], ['Ayşe', '12 gün', '{1/12}'], ['Birlikte', 't', '{1/6} + {1/12} = {1/4} → t = 4'], ['Boşaltan musluk', 'b saat', '−{1/b}']] }
  ],
  'tyt-mat:Karışım Problemleri': [
    { kind: 'flow', title: '%20’lik 300 g şekerli suya 100 g şeker', steps: ['şeker: 300 · 0,20 = 60 g', '+ 100 g → 160 g şeker', 'karışım: 400 g', '{160/400} = %40'] }
  ],
  'tyt-mat:Grafik ve Tablo Problemleri': [
    { kind: 'table', title: 'Daire grafiği dönüşümleri', head: ['Yüzde', 'Merkez açı', 'Kesir'], rows: [['%10', '36°', '{1/10}'], ['%25', '90°', '{1/4}'], ['%50', '180°', '{1/2}'], ['%100', '360°', 'bütün']] }
  ],
  'tyt-mat:Fonksiyonlar': [
    { kind: 'flow', title: 'Bileşke: (f ∘ g)(x) önce g, sonra f', at: 0, steps: ['x', 'g uygulanır', 'g(x)', 'f uygulanır', 'f(g(x))'] },
    { kind: 'table', title: 'Ters fonksiyon bulma: f(x) = 3x − 2', at: 0, head: ['Adım', 'İşlem'], rows: [['1', 'y = 3x − 2 yaz'], ['2', 'x’i yalnız bırak: x = {y + 2/3}'], ['3', 'x ile y yer değiştirir: f⁻¹(x) = {x + 2/3}']] }
  ],
  'tyt-mat:Polinomlar': [
    { kind: 'table', title: 'Hızlı bilgiler', head: ['İstenen', 'Nasıl bulunur?'], rows: [['Katsayılar toplamı', 'P(1)'], ['Sabit terim', 'P(0)'], ['(x − a) ile bölümden kalan', 'P(a)'], ['(ax + b) ile bölümden kalan', 'P(−{b/a})'], ['Çift dereceli terim katsayıları toplamı', '{P(1) + P(−1)/2}']] }
  ],
  'tyt-mat:İkinci Dereceden Denklemler': [
    { kind: 'table', title: 'Diskriminanta göre kökler', at: 0, head: ['Δ = b² − 4ac', 'Kökler'], rows: [['Δ > 0', 'iki farklı gerçel kök'], ['Δ = 0', 'çakışık (eşit) iki kök'], ['Δ < 0', 'gerçel kök yok']] }
  ],
  'tyt-mat:Olasılık': [
    { kind: 'table', title: 'İki zar: toplamlar (36 durum)', at: 1, head: ['+', '1', '2', '3', '4', '5', '6'], rows: [1, 2, 3, 4, 5, 6].map((a) => [String(a), ...[1, 2, 3, 4, 5, 6].map((b) => (a + b === 7 ? `**${a + b}**` : String(a + b)))]), caption: 'Toplamı 7 olan 6 durum var: olasılık {6/36} = {1/6}.' }
  ],

  /* ---------------- TYT Fizik ---------------- */
  'tyt-fiz:Madde ve Özellikleri': [
    { kind: 'table', title: 'Karışımın özkütlesi', at: 0, head: ['Durum', 'Formül'], rows: [['Genel', '{m₁ + m₂/V₁ + V₂}'], ['Hacimler eşit', '{d₁ + d₂/2}'], ['Kütleler eşit', '{2d₁d₂/d₁ + d₂}']] },
    { kind: 'table', title: 'Kılcallık', at: 1, head: ['Durum', 'Sonuç', 'Örnek'], rows: [['adezyon > kohezyon', 'sıvı ince boruda yükselir', 'su'], ['kohezyon > adezyon', 'sıvı alçalır', 'cıva']] }
  ],
  'tyt-fiz:İş, Güç ve Enerji': [
    { kind: 'flow', title: 'Yüksekten bırakılan cisim (sürtünme yok)', at: 1, steps: ['tepede: tamamı E_{p}', 'düşerken: E_{p} azalır, E_{k} artar', 'yerde: tamamı E_{k}', 'mgh = {1/2}mv²'] }
  ],

  /* ---------------- TYT Kimya ---------------- */
  'tyt-kim:Doğa ve Kimya': [
    { kind: 'table', title: 'Çevre sorunları ve nedenleri', head: ['Sorun', 'Nedeni'], rows: [['Asit yağmuru', 'SO₂ ve NOₓ gazları'], ['Sera etkisinin artması', 'CO₂, CH₄'], ['Ozon incelmesi', 'CFC gazları'], ['Sert su', 'Ca²⁺ ve Mg²⁺ iyonları']] }
  ],
  'tyt-kim:Kimyanın Temel Kanunları': [
    { kind: 'table', title: 'Kanunlar', head: ['Kanun', 'Kim?', 'Özü'], rows: [['Kütlenin korunumu', 'Lavoisier', 'girenler = ürünler (kütle)'], ['Sabit oranlar', 'Proust', 'bileşikte kütle oranı sabit'], ['Katlı oranlar', 'Dalton', 'iki bileşik arasında tam sayılı oran'], ['Birleşen hacimler', 'Gay-Lussac', 'gazlar tam sayılı hacim oranıyla birleşir']] }
  ],
  'tyt-kim:Kimyasal Tepkimeler': [
    { kind: 'table', title: 'Tepkime türleri', at: 0, head: ['Tür', 'Kalıp', 'Örnek'], rows: [['Yanma', 'madde + O₂', 'CH₄ + 2O₂ → CO₂ + 2H₂O'], ['Sentez', 'A + B → AB', 'N₂ + 3H₂ → 2NH₃'], ['Analiz', 'AB → A + B', 'CaCO₃ → CaO + CO₂'], ['Nötrleşme', 'asit + baz → tuz + su', 'HCl + NaOH → NaCl + H₂O'], ['Çökelme', 'iki çözelti → katı', 'AgNO₃ + NaCl → AgCl ↓']] }
  ],
  'tyt-kim:Kimya Her Yerde': [
    { kind: 'table', title: 'Günlük polimerler', head: ['Polimer', 'Kullanım'], rows: [['Polietilen (PE)', 'poşet, ambalaj'], ['PVC', 'boru, pencere'], ['PET', 'su şişesi'], ['Teflon', 'yapışmaz tava']], caption: 'Çamaşır suyu ile tuz ruhu karıştırılmaz: zehirli klor gazı çıkar.' }
  ],

  /* ---------------- TYT Biyoloji ---------------- */
  'tyt-bio:Canlıların Ortak Özellikleri': [
    { kind: 'flow', title: 'Metabolizma', steps: ['Özümleme (yapım)', '+', 'Yadımlama (yıkım)', '= metabolizma'] }
  ],
  'tyt-bio:Eşeysiz ve Eşeyli Üreme': [
    { kind: 'table', title: 'Karşılaştırma', at: 1, head: ['', 'Eşeysiz', 'Eşeyli'], rows: [['Ata sayısı', 'bir', 'iki (gamet)'], ['Bölünme', 'mitoz', 'mayoz + döllenme'], ['Kalıtsal çeşitlilik', 'yok (mutasyon hariç)', 'var'], ['Örnek', 'bölünme, tomurcuklanma, sporla, vejetatif', 'iç ve dış döllenme']] }
  ],
  'tyt-bio:Güncel Çevre Sorunları': [
    { kind: 'table', title: 'Sorun – neden – çözüm', head: ['Sorun', 'Neden', 'Çözüm'], rows: [['Küresel ısınma', 'fosil yakıt, ormansızlaşma', 'yenilenebilir enerji, ağaçlandırma'], ['Ötrofikasyon', 'gübre ve deterjan (fosfat, nitrat)', 'arıtma, bilinçli gübreleme'], ['Ozon incelmesi', 'CFC gazları', 'Montreal Protokolü'], ['Biyoçeşitlilik kaybı', 'habitat tahribi, aşırı avlanma', 'koruma alanları']] }
  ],

  /* ---------------- TYT Tarih ---------------- */
  'tyt-tar:İnsanlığın İlk Dönemleri': [
    { kind: 'table', title: 'Uygarlıklar ve bıraktıkları', at: 1, head: ['Uygarlık', 'En çok bilinen'], rows: [['Sümer', 'yazı (çivi yazısı), ziggurat'], ['Babil', 'Hammurabi Kanunları'], ['Mısır', 'hiyeroglif, Güneş takvimi'], ['Hitit', 'Kadeş Antlaşması, Pankuş'], ['Lidya', 'para, Kral Yolu'], ['Fenike', 'alfabe']] }
  ],
  'tyt-tar:Orta Çağ’da Dünya': [
    { kind: 'timeline', title: 'Orta Çağ Avrupası', items: [['375', 'Kavimler Göçü'], ['395', 'Roma ikiye ayrıldı'], ['476', 'Batı Roma yıkıldı'], ['1096–1270', 'Haçlı Seferleri'], ['1215', 'Magna Carta'], ['1453', 'İstanbul’un fethi: Orta Çağ biter']] }
  ],

  /* ---------------- TYT Coğrafya ---------------- */
  'tyt-cog:Doğa ve İnsan': [
    { kind: 'table', title: 'Coğrafyanın dalları', head: ['Dal', 'Konusu'], rows: [['Jeomorfoloji', 'yer şekilleri'], ['Klimatoloji', 'iklim'], ['Hidrografya', 'sular'], ['Biyocoğrafya', 'canlıların dağılışı'], ['Beşeri coğrafya', 'nüfus, yerleşme'], ['Ekonomik coğrafya', 'tarım, sanayi, ulaşım']] }
  ],
  'tyt-cog:Coğrafi Konum': [
    { kind: 'table', title: 'Türkiye’nin konumunun sonuçları', head: ['Matematik konum (36°–42° K, 26°–45° D)', 'Özel konum'], rows: [['Kuzey Yarım Küre’de', 'Asya ile Avrupa arasında köprü'], ['mevsimler belirgin', 'üç tarafı denizlerle çevrili'], ['Güneş hiçbir zaman tam tepede değil', 'Boğazlar'], ['doğu–batı arası 76 dk saat farkı', 'yükselti doğuya doğru artar']] }
  ],
  'tyt-cog:Yerin Şekillenmesi': [
    { kind: 'table', title: 'Dış kuvvetler ve oluşturdukları', at: 1, head: ['Kuvvet', 'Aşınım şekli', 'Birikim şekli'], rows: [['Akarsu', 'vadi, dev kazanı', 'delta, birikinti yelpazesi'], ['Rüzgâr', 'mantar kaya', 'kumul, lös'], ['Buzul', 'sirk, U vadi', 'moren'], ['Karstik', 'lapya, dolin, polye, mağara', 'traverten, sarkıt'], ['Dalga', 'falez', 'kıyı oku, tombolo, lagün']] }
  ],
  'tyt-cog:Su, Toprak ve Bitki': [
    { kind: 'table', title: 'Göl türleri', at: 0, head: ['Tür', 'Örnek'], rows: [['Tektonik', 'Tuz, Eğirdir, Beyşehir'], ['Volkanik (krater)', 'Nemrut Krater Gölü'], ['Karstik', 'Salda'], ['Set gölü', 'Van (lav seti), Tortum (heyelan seti)'], ['Buzul', 'dağlardaki küçük göller']] }
  ],
  'tyt-cog:Nüfus ve Göç': [
    { kind: 'table', title: 'Nüfus piramidi ne söyler?', at: 0, head: ['Piramit', 'Anlamı', 'Ülke tipi'], rows: [['Geniş tabanlı', 'doğum oranı yüksek, genç nüfus', 'az gelişmiş'], ['Tabanı daralan', 'doğum azalıyor, orta yaş artıyor', 'gelişmekte olan'], ['Dar tabanlı (arı kovanı)', 'yaşlı nüfus, düşük doğum', 'gelişmiş']] }
  ],
  'tyt-cog:Yerleşme': [
    { kind: 'table', title: 'Kır yerleşmeleri', head: ['Tür', 'Özellik'], rows: [['Köy', 'en yaygın kırsal yerleşme'], ['Mezra', 'köye bağlı küçük yerleşme'], ['Yayla', 'yazın hayvancılık için çıkılan'], ['Kom', 'Doğu Anadolu’da hayvancılık yerleşmesi'], ['Oba', 'göçebelerin çadır yerleşmesi'], ['Dalyan', 'balıkçılık yerleşmesi']] }
  ],
  'tyt-cog:Türkiye’nin Yer Şekilleri ve İklimi': [
    { kind: 'table', title: 'Türkiye’de “en”ler', head: ['En …', 'Yer'], rows: [['yüksek dağ', 'Ağrı Dağı (5137 m)'], ['büyük göl', 'Van Gölü'], ['uzun akarsu (tamamı yurt içinde)', 'Kızılırmak'], ['çok yağış alan yer', 'Rize (Doğu Karadeniz)'], ['az yağış alan yerler', 'Tuz Gölü çevresi, Iğdır']] }
  ],
  'tyt-cog:Ekonomik Faaliyetler': [
    { kind: 'table', title: 'Ürün – bölge', at: 1, head: ['Ürün', 'Başlıca bölge'], rows: [['Çay', 'Doğu Karadeniz'], ['Fındık', 'Karadeniz (Ordu, Giresun)'], ['Pamuk', 'Çukurova, Ege, GAP'], ['Zeytin', 'Ege, Marmara'], ['Buğday', 'İç Anadolu'], ['Turunçgiller', 'Akdeniz kıyıları']] }
  ],
  'tyt-cog:Bölgeler ve Ulaşım': [
    { kind: 'table', title: 'Ulaşım türleri', at: 1, head: ['Tür', 'Öne çıkan'], rows: [['Kara yolu', 'Türkiye’de en yaygın'], ['Demir yolu', 'ucuz, ağır yük; yüksek hızlı tren'], ['Deniz yolu', 'en ucuz yük taşıma'], ['Hava yolu', 'en hızlı'], ['Boru hattı', 'petrol ve doğal gaz']] }
  ],

  /* ---------------- TYT Felsefe ---------------- */
  'tyt-fel:Sanat Felsefesi': [
    { kind: 'table', title: 'Sanat nedir?', at: 0, head: ['Görüş', 'Temsilci'], rows: [['Taklit (mimesis)', 'Platon, Aristoteles'], ['Yaratma', 'Kant, Hegel'], ['Oyun', 'Schiller, Spencer'], ['Sezgi', 'Croce, Bergson']] }
  ],
  'tyt-fel:Siyaset Felsefesi': [
    { kind: 'table', title: 'Filozof – eser – görüş', head: ['Filozof', 'Eser', 'Görüş'], rows: [['Platon', 'Devlet', 'filozof krallar'], ['Farabi', 'Erdemli Şehir', 'ideal toplum'], ['Thomas More', 'Ütopya', 'ideal düzen'], ['Machiavelli', 'Hükümdar', 'devletin bekası için her yol'], ['Hobbes', 'Leviathan', 'güçlü (mutlak) devlet'], ['Locke', '—', 'doğal haklar, sınırlı devlet'], ['Montesquieu', 'Kanunların Ruhu', 'kuvvetler ayrılığı']] }
  ],
  'tyt-fel:Bilim Felsefesi': [
    { kind: 'flow', title: 'Bilimsel yöntem', at: 1, steps: ['Gözlem', 'Problem', 'Hipotez', 'Deney', 'Kuram', 'Yasa'] },
    { kind: 'table', title: 'Bilim nasıl ilerler?', at: 0, head: ['Düşünür', 'Ölçüt'], rows: [['Viyana Çevresi', 'doğrulanabilirlik'], ['Karl Popper', 'yanlışlanabilirlik'], ['Thomas Kuhn', 'paradigma değişimi']] }
  ],

  /* ---------------- TYT Din ---------------- */
  'tyt-din:İslam ve İbadet': [
    { kind: 'table', title: 'İbadetler', head: ['İbadet', 'Ne zaman / kime?'], rows: [['Namaz', 'günde beş vakit'], ['Oruç', 'Ramazan ayı, imsaktan iftara'], ['Zekât', 'nisap miktarı mala sahip olan; genellikle kırkta bir'], ['Hac', 'gücü yetene ömründe bir kez, belirli günlerde'], ['Umre', 'yılın her zamanı']] }
  ],
  'tyt-din:Ahlak ve Değerler': [
    { kind: 'table', title: 'Güzel ve kötü davranışlar', head: ['Güzel ahlak', 'Zıddı'], rows: [['doğruluk', 'yalan'], ['tevazu', 'kibir'], ['cömertlik', 'cimrilik'], ['merhamet', 'zulüm'], ['emanete riayet', 'hıyanet']] }
  ],
  'tyt-din:Allah ve İnsan İlişkisi': [
    { kind: 'table', title: 'Kavramlar', head: ['Kavram', 'Anlamı'], rows: [['Dua', 'Allah’a yönelip istemek'], ['Tövbe', 'pişman olup hatayı bırakmak'], ['Tevekkül', 'çalıştıktan sonra sonucu Allah’a bırakmak'], ['Takva', 'Allah’a saygıyla kötülükten sakınmak'], ['İhlas', 'yalnız Allah rızası için yapmak']] }
  ],
  'tyt-din:Hz. Muhammed ve Gençlik': [
    { kind: 'timeline', title: 'Hayatından', items: [['571', 'Mekke’de doğdu'], ['gençliği', 'Hilfu’l-Fudul; “el-Emin” lakabı'], ['610', 'İlk vahiy (40 yaşında)'], ['622', 'Hicret'], ['632', 'Veda Hutbesi ve vefatı']] }
  ],
  'tyt-din:Vahiy ve Akıl': [
    { kind: 'table', title: 'Mekki ve Medeni sureler', head: ['', 'Mekki', 'Medeni'], rows: [['Nerede indi?', 'Mekke (Hicretten önce)', 'Medine (Hicretten sonra)'], ['Ağırlıklı konu', 'iman, ahiret, ahlak', 'hukuk, toplum, ibadet ayrıntıları'], ['Ayetler', 'genellikle kısa', 'genellikle uzun']] }
  ],
  'tyt-din:İslam Düşüncesinde Yorumlar': [
    { kind: 'table', title: 'Mezhepler', head: ['Tür', 'Mezhepler'], rows: [['İtikadi (inanç)', 'Maturidilik, Eşarilik, Mutezile, Şia'], ['Fıkhi (amelî)', 'Hanefi, Şafii, Maliki, Hanbeli, Caferi'], ['Tasavvufi', 'Mevlevilik, Bektaşilik, Nakşibendilik…']], caption: 'Türkiye’de çoğunluk itikatta Maturidi, amelde Hanefidir.' }
  ],

  /* ---------------- AYT Matematik ---------------- */
  'ayt-mat:Fonksiyonlar (İleri)': [
    { kind: 'table', title: 'Grafik dönüşümleri', at: 1, head: ['İfade', 'Grafiğe ne olur?'], rows: [['f(x) + k', 'k birim yukarı'], ['f(x − a)', 'a birim **sağa**'], ['−f(x)', 'x eksenine göre yansır'], ['f(−x)', 'y eksenine göre yansır'], ['|f(x)|', 'x ekseninin altı yukarı katlanır'], ['k · f(x)', 'düşeyde k kat uzar']] }
  ],
  'ayt-mat:Polinomlar ve Denklemler': [
    { kind: 'table', title: 'Kök – katsayı (ax³ + bx² + cx + d = 0)', at: 0, head: ['İfade', 'Değer'], rows: [['x₁ + x₂ + x₃', '−{b/a}'], ['x₁x₂ + x₁x₃ + x₂x₃', '{c/a}'], ['x₁ · x₂ · x₃', '−{d/a}']] }
  ],
  'ayt-mat:Karmaşık Sayılar': [
    { kind: 'flow', title: 'i’nin kuvvetleri 4’lük döngüdedir', steps: ['i¹ = i', 'i² = −1', 'i³ = −i', 'i⁴ = 1', 'i⁵ = i …'], caption: 'iⁿ için n’nin 4 ile bölümünden kalana bak.' }
  ],
  'ayt-mat:Permütasyon, Kombinasyon, Binom': [
    { kind: 'table', title: 'Pascal üçgeni: (x + y)ⁿ katsayıları', at: 1, head: ['n', 'Katsayılar', 'Toplam (2ⁿ)'], rows: [['0', '1', '1'], ['1', '1 1', '2'], ['2', '1 2 1', '4'], ['3', '1 3 3 1', '8'], ['4', '1 4 6 4 1', '16'], ['5', '1 5 10 10 5 1', '32']] }
  ],
  'ayt-mat:Olasılık': [
    { kind: 'table', title: 'Hangi kural?', head: ['Durum', 'Kural'], rows: [['“ya A ya B” (ayrık)', 'P(A) + P(B)'], ['“A veya B” (genel)', 'P(A) + P(B) − P(A ∩ B)'], ['“hem A hem B” (bağımsız)', 'P(A) · P(B)'], ['“B olduğu bilindiğine göre A”', '{P(A ∩ B)/P(B)}'], ['“en az bir”', '1 − P(hiçbiri)']] }
  ],
  'ayt-mat:Limit ve Süreklilik': [
    { kind: 'table', title: 'Sonsuzda rasyonel fonksiyonun limiti', at: 0, head: ['Dereceler', 'Limit', 'Örnek'], rows: [['pay < payda', '0', '{3x/x² + 1} → 0'], ['pay = payda', 'başkatsayılar oranı', '{2x² + 1/x² − 5} → 2'], ['pay > payda', '±∞', '{x³/x + 1} → ∞']] }
  ],
  'ayt-mat:Çokgenler ve Dörtgenler (Tekrar)': [
    { kind: 'table', title: 'Çokgen formülleri', head: ['İstenen', 'Formül'], rows: [['İç açılar toplamı', '(n − 2) · 180°'], ['Dış açılar toplamı', '360°'], ['Düzgün çokgende bir dış açı', '{360°/n}'], ['Köşegen sayısı', '{n(n − 3)/2}'], ['Düzgün altıgen alanı', '6 · {a²√{3}/4}']] }
  ],
  'ayt-mat:Çemberin Analitiği': [
    { kind: 'table', title: 'Doğru ile çemberin durumu (d: merkezin doğruya uzaklığı)', head: ['Durum', 'Sonuç'], rows: [['d < r', 'iki noktada keser'], ['d = r', 'teğet'], ['d > r', 'kesişmez']] }
  ],
  'ayt-mat:Dönüşüm Geometrisi': [
    { kind: 'table', title: '(x, y) noktasının görüntüsü', head: ['Dönüşüm', 'Görüntü'], rows: [['x eksenine göre yansıma', '(x, −y)'], ['y eksenine göre yansıma', '(−x, y)'], ['y = x’e göre yansıma', '(y, x)'], ['orijine göre / 180° dönme', '(−x, −y)'], ['90° dönme (saat yönünün tersi)', '(−y, x)'], ['(a, b) kadar öteleme', '(x + a, y + b)']] }
  ],

  /* ---------------- AYT Fizik ---------------- */
  'ayt-fiz:İş, Enerji ve Güç': [
    { kind: 'table', title: 'Hangi bağıntı?', head: ['Durum', 'Bağıntı'], rows: [['Sürtünmesiz ortam', 'E_{k} + E_{p} sabit'], ['Sürtünmeli ortam', 'E_{ilk} = E_{son} + f · x'], ['Net kuvvetin işi', 'W_{net} = ΔE_{k}'], ['Güç', 'P = {W/t} = F · v']] }
  ],
  'ayt-fiz:Basit Makineler': [
    { kind: 'table', title: 'Makineler ve kuvvet kazancı', at: 0, head: ['Makine', 'Denge bağıntısı'], rows: [['Kaldıraç', 'F · kuvvet kolu = G · yük kolu'], ['Sabit makara', 'F = G (yalnız yön değişir)'], ['Hareketli makara', 'F = {G/2}'], ['Palanga (n ip)', 'F = {G/n}'], ['Eğik düzlem', 'F · L = G · h']], caption: 'Kuvvetten kazanılan yoldan kaybedilir; iş değişmez.' }
  ],
  'ayt-fiz:Elektriksel Kuvvet, Alan ve Potansiyel': [
    { kind: 'table', title: 'Uzaklığa bağlılık', at: 0, head: ['Büyüklük', 'Bağıntı', 'Tür'], rows: [['Kuvvet', 'k{q₁q₂/d²}', 'vektörel'], ['Alan', 'k{q/d²}', 'vektörel'], ['Potansiyel', 'k{q/d}', 'skaler'], ['Potansiyel enerji', 'k{q₁q₂/d}', 'skaler']] }
  ],
  'ayt-fiz:Manyetizma ve Elektromanyetik İndükleme': [
    { kind: 'table', title: 'Bağıntılar', head: ['Durum', 'Bağıntı'], rows: [['Düz telin alanı', 'B = 2 · 10^{−7} · {I/d}'], ['Teldeki kuvvet', 'F = B · I · L · sin α'], ['Yükteki kuvvet', 'F = q · v · B · sin α'], ['Manyetik akı', 'Φ = B · A · cos α'], ['İndüksiyon emk’sı', 'ε = −N · {ΔΦ/Δt}'], ['Hareketli çubuk', 'ε = B · L · v']] }
  ],
  'ayt-fiz:Alternatif Akım ve Transformatörler': [
    { kind: 'table', title: 'Transformatör', at: 1, head: ['', 'Gerilim artıran', 'Gerilim düşüren'], rows: [['Sarım', 'N₂ > N₁', 'N₂ < N₁'], ['Gerilim', 'artar', 'azalır'], ['Akım', 'azalır', 'artar']], caption: 'İdeal transformatörde güç korunur: V₁I₁ = V₂I₂.' }
  ],
  'ayt-fiz:Çembersel Hareket': [
    { kind: 'table', title: 'Bağıntılar', head: ['Büyüklük', 'Bağıntı'], rows: [['Çizgisel hız', 'v = {2πr/T} = ω · r'], ['Açısal hız', 'ω = {2π/T}'], ['Merkezcil ivme', 'a = {v²/r}'], ['Merkezcil kuvvet', 'F = {mv²/r}'], ['Kütle çekimi', 'F = G{m₁m₂/d²}']] }
  ],
  'ayt-fiz:Basit Harmonik Hareket': [
    { kind: 'table', title: 'Denge noktası ve uç noktalar', at: 0, head: ['', 'Denge noktası', 'Uç nokta'], rows: [['Hız', 'en büyük', 'sıfır'], ['İvme', 'sıfır', 'en büyük'], ['Geri çağırıcı kuvvet', 'sıfır', 'en büyük']] },
    { kind: 'table', title: 'Periyot neye bağlı?', at: 0, head: ['Sarkaç', 'Periyot', 'Bağlı değil'], rows: [['Yay', '2π√{{m/k}}', 'genlik'], ['Basit sarkaç', '2π√{{L/g}}', 'kütle, genlik (küçük açıda)']] }
  ],
  'ayt-fiz:Modern Fizik ve Uygulamaları': [
    { kind: 'table', title: 'Fotoelektrik olay', at: 0, head: ['Değişiklik', 'Kopan elektron sayısı', 'Elektronların en büyük enerjisi'], rows: [['Işık şiddeti artar', 'artar', 'değişmez'], ['Frekans artar (eşik üstünde)', 'değişmez', 'artar'], ['Frekans eşiğin altında', 'elektron kopmaz', '—']] }
  ],

  /* ---------------- AYT Kimya ---------------- */
  'ayt-kim:Sıvı Çözeltiler ve Çözünürlük': [
    { kind: 'table', title: 'Derişim birimleri', at: 0, head: ['Birim', 'Tanım'], rows: [['Molarite (M)', '{mol çözünen/L çözelti}'], ['Molalite (m)', '{mol çözünen/kg çözücü}'], ['Kütlece yüzde', '{çözünen/çözelti} · 100'], ['ppm', 'milyonda bir kısım']] },
    { kind: 'table', title: 'Çözünürlüğü ne etkiler?', at: 1, head: ['Madde', 'Sıcaklık artınca', 'Basınç artınca'], rows: [['Gazlar', 'azalır', 'artar'], ['Katıların çoğu', 'artar', 'etkilemez']] }
  ],
  'ayt-kim:Asit-Baz Dengesi': [
    { kind: 'table', title: 'pH hesabı', at: 0, head: ['Çözelti', '[H⁺] ya da [OH⁻]'], rows: [['Kuvvetli asit (C)', '[H⁺] = C'], ['Kuvvetli baz (C)', '[OH⁻] = C, pH = 14 − pOH'], ['Zayıf asit', '[H⁺] = √{Kₐ · C}'], ['Konjuge çift', 'Kₐ · K_{b} = 10^{−14}']] },
    { kind: 'table', title: 'Tuzların hidrolizi', at: 1, head: ['Tuz', 'Çözelti'], rows: [['kuvvetli asit + kuvvetli baz', 'nötr'], ['zayıf asit + kuvvetli baz', 'bazik'], ['kuvvetli asit + zayıf baz', 'asidik']] }
  ],
  'ayt-kim:Çözünürlük Dengesi': [
    { kind: 'table', title: 'Çözünürlük (s) ile Kçç', head: ['Formül tipi', 'Örnek', 'K_{çç}'], rows: [['AB', 'AgCl', 's²'], ['AB₂ / A₂B', 'PbI₂, Ag₂CrO₄', '4s³'], ['AB₃', 'Al(OH)₃', '27s⁴']], caption: 'Q > K_{çç} ise çökelme olur; ortak iyon çözünürlüğü azaltır.' }
  ],
  'ayt-kim:Enerji Kaynakları ve Bilimsel Gelişmeler': [
    { kind: 'table', title: 'Enerji kaynakları', head: ['Yenilenemez', 'Yenilenebilir'], rows: [['kömür', 'güneş'], ['petrol', 'rüzgâr'], ['doğal gaz', 'hidroelektrik, jeotermal'], ['nükleer (uranyum)', 'biyokütle, hidrojen']] }
  ],

  /* ---------------- AYT Biyoloji ---------------- */
  'ayt-bio:Duyu Organları': [
    { kind: 'table', title: 'Göz kusurları', head: ['Kusur', 'Sorun', 'Düzeltme'], rows: [['Miyopi', 'uzağı göremez', 'kalın kenarlı (ıraksak) mercek'], ['Hipermetropi', 'yakını göremez', 'ince kenarlı (yakınsak) mercek'], ['Astigmatizm', 'bulanık, bozuk görüntü', 'silindirik mercek']] },
    { kind: 'flow', title: 'Sesin yolu', steps: ['kulak kepçesi', 'kulak zarı', 'çekiç → örs → üzengi', 'salyangoz', 'işitme siniri', 'beyin'] }
  ],
  'ayt-bio:Destek ve Hareket Sistemi': [
    { kind: 'table', title: 'Kas türleri', at: 1, head: ['', 'Çizgili', 'Düz', 'Kalp'], rows: [['Kontrol', 'istemli', 'istemsiz', 'istemsiz'], ['Çekirdek', 'çok', 'tek', 'tek ya da iki'], ['Kasılma', 'hızlı, çabuk yorulur', 'yavaş', 'ritmik, yorulmaz'], ['Yer', 'iskelet', 'iç organlar', 'kalp']] }
  ],
  'ayt-bio:Canlılar ve Çevre': [
    { kind: 'table', title: 'Adaptasyon ve modifikasyon', head: ['', 'Adaptasyon', 'Modifikasyon'], rows: [['Kaynak', 'kalıtsal', 'çevre etkisi'], ['Kalıtılır mı?', 'evet', 'hayır'], ['Evrime katkı', 'var', 'yok'], ['Örnek', 'kaktüs dikenleri', 'ortancanın toprağa göre renk değiştirmesi']] }
  ],

  /* ---------------- AYT Edebiyat ---------------- */
  'ayt-edb:Anlam Bilgisi': [
    { kind: 'table', title: 'Anlatım biçimleri', head: ['Biçim', 'Amacı'], rows: [['Açıklama', 'bilgi vermek, öğretmek'], ['Tartışma', 'bir görüşü savunup karşıtını çürütmek'], ['Betimleme', 'sözle resim çizmek'], ['Öyküleme', 'olay anlatmak']] },
    { kind: 'table', title: 'Düşünceyi geliştirme yolları', head: ['Yol', 'İpucu'], rows: [['Tanımlama', '“… nedir?” sorusunun cevabı'], ['Örneklendirme', '“örneğin, mesela”'], ['Karşılaştırma', 'iki şeyin benzerlik ve farkları'], ['Tanık gösterme', 'ünlü birinin sözü'], ['Sayısal veri', 'yüzde, istatistik']] }
  ],
  'ayt-edb:Edebi Türler: Hikâye, Roman, Tiyatro': [
    { kind: 'table', title: 'Olay ve durum hikâyesi', at: 0, head: ['', 'Olay (Maupassant)', 'Durum (Çehov)'], rows: [['Yapı', 'giriş – gelişme – sonuç', 'hayattan bir kesit'], ['Merak', 'olayın sonu', 'atmosfer, duygu'], ['Türkçede', 'Ömer Seyfettin', 'Sait Faik']] },
    { kind: 'table', title: 'Tiyatro türleri', at: 1, head: ['Tür', 'Özellik'], rows: [['Trajedi', 'acıklı, soylu kişiler, üç birlik'], ['Komedi', 'gülünç; karakter, töre, entrika'], ['Dram', 'trajedi ile komedinin karışımı'], ['Geleneksel', 'Karagöz, ortaoyunu, meddah']] }
  ],
  'ayt-edb:Öğretici Metinler': [
    { kind: 'table', title: 'Karıştırılan türler', head: ['Tür', 'Ayırt edici özellik'], rows: [['Makale', 'düşünceyi kanıtlar; kesin yargı'], ['Deneme', 'kanıtlama yok; sohbet havasında kişisel düşünce'], ['Fıkra', 'günlük olaylar, kısa yorum (köşe yazısı)'], ['Sohbet', 'okurla konuşur gibi'], ['Anı', 'yazarın yaşadıkları'], ['Biyografi / otobiyografi', 'başkasının / kendi hayatı']] }
  ],
  'ayt-edb:İslamiyet Öncesi ve Geçiş Dönemi Türk Edebiyatı': [
    { kind: 'table', title: 'Sözlü edebiyat ürünleri', at: 0, head: ['Ürün', 'Nerede?', 'Bugünkü karşılığı'], rows: [['Koşuk', 'sığır ve şölen', 'koşma'], ['Sagu', 'yuğ (cenaze)', 'ağıt'], ['Sav', '—', 'atasözü']] },
    { kind: 'table', title: 'Geçiş dönemi eserleri', at: 1, head: ['Eser', 'Yazar', 'Özellik'], rows: [['Kutadgu Bilig', 'Yusuf Has Hacip', 'ilk siyasetname, aruz'], ['Divanü Lügati’t-Türk', 'Kaşgarlı Mahmut', 'sözlük'], ['Atabetü’l-Hakayık', 'Edip Ahmet', 'öğretici'], ['Divan-ı Hikmet', 'Ahmet Yesevi', 'tasavvuf, hece']] }
  ],
  'ayt-edb:Servet-i Fünun ve Fecr-i Âti': [
    { kind: 'table', title: 'İki topluluk', head: ['', 'Servet-i Fünun', 'Fecr-i Âti'], rows: [['Yıl', '1896–1901', '1909'], ['Anlayış', 'sanat için sanat', '“Sanat şahsi ve muhteremdir”'], ['Dil', 'ağır, süslü', 'ağır'], ['Önemli adlar', 'Tevfik Fikret, Cenap Şahabettin, Halit Ziya, Mehmet Rauf', 'Ahmet Haşim, Emin Bülent, Refik Halit']] }
  ],
  'ayt-edb:Milli Edebiyat': [
    { kind: 'table', title: 'Yazar – eser', head: ['Yazar', 'Eserler'], rows: [['Ömer Seyfettin', 'Kaşağı, Forsa, Pembe İncili Kaftan'], ['Halide Edip', 'Ateşten Gömlek, Sinekli Bakkal'], ['Reşat Nuri', 'Çalıkuşu, Yeşil Gece'], ['Yakup Kadri', 'Yaban, Kiralık Konak'], ['Mehmet Akif', 'Safahat'], ['Yahya Kemal', 'Kendi Gök Kubbemiz'], ['Faruk Nafiz', 'Han Duvarları']] }
  ],
  'ayt-edb:Cumhuriyet Dönemi Roman ve Hikâyesi': [
    { kind: 'table', title: 'Yazar – eser', head: ['Yazar', 'Eserler', 'Yönelim'], rows: [['Yaşar Kemal', 'İnce Memed', 'köy, toplumcu'], ['Sabahattin Ali', 'Kuyucaklı Yusuf, Kürk Mantolu Madonna', 'toplumcu gerçekçi'], ['Ahmet Hamdi Tanpınar', 'Huzur, Saatleri Ayarlama Enstitüsü', 'zaman, Doğu–Batı'], ['Peyami Safa', 'Fatih–Harbiye, Dokuzuncu Hariciye Koğuşu', 'psikolojik, Doğu–Batı'], ['Oğuz Atay', 'Tutunamayanlar', 'modernist'], ['Sait Faik', 'Semaver, Alemdağ’da Var Bir Yılan', 'durum hikâyesi'], ['Orhan Pamuk', 'Kara Kitap, Benim Adım Kırmızı', 'postmodern']] }
  ],

  /* ---------------- AYT Tarih ---------------- */
  'ayt-tar:Tarih Bilimi ve İlk Çağ': [
    { kind: 'table', title: 'Hukuk ve yönetim mirası', head: ['Uygarlık', 'Miras'], rows: [['Sümer', 'Urukagina kanunları'], ['Babil', 'Hammurabi (kısasa kısas)'], ['Hitit', 'Pankuş meclisi, dünyevi kanunlar'], ['Pers', 'satraplık, Kral Yolu'], ['Atina', 'demokrasi'], ['Roma', 'On İki Levha Kanunları']] }
  ],
  'ayt-tar:İlk ve Orta Çağlarda Türk Dünyası': [
    { kind: 'timeline', title: 'İslamiyet öncesi Türk devletleri', at: 0, items: [['MÖ 3. yy', 'Asya Hun (Mete Han)'], ['375', 'Kavimler Göçü, Avrupa Hunları'], ['552', 'I. Göktürk (Bumin Kağan)'], ['682', 'II. Göktürk (Kutluk)'], ['744', 'Uygur']] },
    { kind: 'flow', title: 'Türk toplum yapısı (küçükten büyüğe)', at: 1, steps: ['Oguş (aile)', 'Urug', 'Boy', 'Bodun', 'İl (devlet)'] }
  ],
  'ayt-tar:İslam Tarihi ve Türk-İslam Devletleri': [
    { kind: 'timeline', title: 'Önemli olaylar', items: [['661', 'Emeviler'], ['750', 'Abbasiler'], ['751', 'Talas Savaşı'], ['840', 'Karahanlılar (ilk Türk–İslam devleti)'], ['1040', 'Dandanakan: Büyük Selçuklu'], ['1055', 'Tuğrul Bey’in Bağdat seferi'], ['1260', 'Ayn Calut: Memlükler Moğolları durdurdu']] }
  ],
  'ayt-tar:Selçuklu Türkiyesi': [
    { kind: 'timeline', title: 'Türkiye Selçukluları', items: [['1075', 'Kuruluş, başkent İznik'], ['1096', 'I. Haçlı Seferi'], ['1176', 'Miryokefalon'], ['1230', 'Yassıçemen'], ['1240', 'Babailer İsyanı'], ['1243', 'Kösedağ']] }
  ],
  'ayt-tar:Milli Mücadele': [
    { kind: 'table', title: 'Cepheler', at: 1, head: ['Cephe', 'Kime karşı', 'Sonuç'], rows: [['Doğu', 'Ermeniler', 'Gümrü (1920), Kars (1921)'], ['Güney', 'Fransızlar', 'Ankara Antlaşması (1921)'], ['Batı', 'Yunanlar', 'İnönü, Sakarya, Büyük Taarruz, Mudanya']] }
  ],
  'ayt-tar:Atatürkçülük ve İnkılaplar': [
    { kind: 'timeline', title: 'Atatürk dönemi dış politika', at: 1, items: [['1923', 'Nüfus mübadelesi'], ['1926', 'Musul (Ankara Antlaşması)'], ['1932', 'Milletler Cemiyeti’ne üyelik'], ['1934', 'Balkan Antantı'], ['1936', 'Montrö Boğazlar Sözleşmesi'], ['1937', 'Sadabat Paktı'], ['1939', 'Hatay Türkiye’ye katıldı']] }
  ],
  'ayt-tar:Küreselleşen Dünya': [
    { kind: 'timeline', title: 'Soğuk Savaş sonrası', items: [['1991', 'SSCB dağıldı; Körfez Savaşı'], ['1992', 'Maastricht: Avrupa Birliği'], ['1992–1995', 'Bosna Savaşı'], ['1999', 'Türkiye AB adayı'], ['2001', '11 Eylül saldırıları'], ['2003', 'Irak’ın işgali']] }
  ],

  /* ---------------- AYT Coğrafya ---------------- */
  'ayt-cog:Türkiye’de Nüfus ve Yerleşme': [
    { kind: 'table', title: 'Şehirlerin fonksiyonları', at: 1, head: ['Fonksiyon', 'Örnek'], rows: [['Sanayi', 'Kocaeli, Bursa'], ['Liman', 'Mersin, İzmir'], ['Turizm', 'Antalya, Muğla'], ['İdari', 'Ankara'], ['Dinî – kültürel', 'Konya']] }
  ],
  'ayt-cog:Türkiye Ekonomisi': [
    { kind: 'table', title: 'Sanayi ve yerleri', at: 1, head: ['Sanayi', 'Yer'], rows: [['Demir–çelik', 'Karabük, Ereğli, İskenderun'], ['Otomotiv', 'Bursa, Kocaeli'], ['Petrol rafinerisi', 'İzmit, Aliağa, Kırıkkale, Batman'], ['Şeker', 'pancar tarımı yapılan iç bölgeler']] }
  ],
  'ayt-cog:Türkiye’de Ulaşım, Ticaret ve Turizm': [
    { kind: 'table', title: 'Turizm türleri', head: ['Tür', 'Örnek yerler'], rows: [['Deniz – güneş', 'Antalya, Muğla, Aydın'], ['Kültür', 'İstanbul, Kapadokya, Efes'], ['Kış', 'Uludağ, Erciyes, Palandöken'], ['Termal (sağlık)', 'Afyon, Denizli, Bursa'], ['İnanç', 'Konya, Şanlıurfa']] }
  ],
  'ayt-cog:Kültür Bölgeleri ve Küresel Ortam': [
    { kind: 'table', title: 'İlk medeniyetler ve akarsular', head: ['Medeniyet', 'Akarsu'], rows: [['Mezopotamya', 'Dicle – Fırat'], ['Mısır', 'Nil'], ['Hint', 'İndus'], ['Çin', 'Sarı Irmak']] }
  ],
  'ayt-cog:Ülkeler ve Bölgeler': [
    { kind: 'table', title: 'Uluslararası örgütler', head: ['Örgüt', 'Amacı'], rows: [['BM', 'barış ve güvenlik'], ['NATO', 'ortak savunma'], ['AB', 'ekonomik ve siyasi birlik'], ['OPEC', 'petrol ihraç eden ülkeler'], ['OECD', 'ekonomik iş birliği ve kalkınma'], ['Türk Devletleri Teşkilatı', 'Türk dünyası iş birliği']] }
  ],
  'ayt-cog:Çevre ve Toplum': [
    { kind: 'timeline', title: 'Çevre anlaşmaları', items: [['1987', 'Montreal Protokolü (ozon)'], ['1997', 'Kyoto Protokolü (sera gazları)'], ['2015', 'Paris İklim Anlaşması']] }
  ],

  /* ---------------- AYT Felsefe Grubu ---------------- */
  'ayt-fel:Sosyoloji': [
    { kind: 'table', title: 'Kavramlar', at: 0, head: ['Kavram', 'Örnek'], rows: [['Doğuştan statü', 'cinsiyet, akrabalık'], ['Kazanılmış statü', 'meslek, eğitim'], ['Rol', 'öğretmenden beklenen davranış'], ['Birincil grup', 'aile, yakın arkadaşlar'], ['İkincil grup', 'iş yeri, dernek'], ['Toplumsal kurum', 'aile, eğitim, din, ekonomi, siyaset']] }
  ],

  /* ---------------- AYT Din ---------------- */
  'ayt-din:Kur’an’da Bazı Kavramlar': [
    { kind: 'table', title: 'Kavram – zıddı', head: ['Kavram', 'Zıddı'], rows: [['tevhit', 'şirk'], ['iman', 'küfür'], ['hidayet', 'dalalet'], ['ihlas', 'riya'], ['şükür', 'nankörlük']] }
  ],
  'ayt-din:İslam ve Bilim': [
    { kind: 'table', title: 'Bilim insanları', head: ['Kişi', 'Alan'], rows: [['Harezmi', 'cebir'], ['İbn-i Sina', 'tıp (El-Kanun)'], ['Biruni', 'astronomi, coğrafya'], ['İbnü’l-Heysem', 'optik'], ['Cabir bin Hayyan', 'kimya'], ['Uluğ Bey, Ali Kuşçu', 'astronomi'], ['Piri Reis', 'harita']] }
  ],
  'ayt-din:Anadolu’da İslam ve Tasavvufi Yorumlar': [
    { kind: 'table', title: 'Mutasavvıflar', head: ['Kişi', 'Eser / gelenek', 'Yer'], rows: [['Ahmet Yesevi', 'Divan-ı Hikmet, Yesevilik', 'Türkistan'], ['Mevlana', 'Mesnevi, Mevlevilik', 'Konya'], ['Hacı Bektaş-ı Veli', 'Makalat, Bektaşilik', 'Nevşehir'], ['Yunus Emre', 'Divan, Risaletü’n-Nushiyye', 'Anadolu'], ['Hacı Bayram Veli', 'Bayramilik', 'Ankara'], ['Ahi Evran', 'Ahilik', 'Kırşehir']] }
  ],
  'ayt-din:Güncel Dini Meseleler': [
    { kind: 'table', title: 'Kavramlar', head: ['Kavram', 'Anlamı'], rows: [['Hurafe', 'dinde yeri olmayan, sonradan eklenmiş inanç'], ['Din istismarı', 'dini kişisel çıkar için kullanmak'], ['Laiklik', 'din ve vicdan özgürlüğünün güvencesi']] }
  ],

  /* ---------------- YDT ---------------- */
  'ydt-ing:Kelime Bilgisi': [
    { kind: 'table', title: 'Ekler sözcüğün türünü söyler', at: 0, head: ['Ek', 'Tür', 'Örnek'], rows: [['-tion, -ment, -ness', 'isim', 'decision, development, kindness'], ['-ful, -ous, -able, -ive', 'sıfat', 'useful, famous, reliable, decisive'], ['-ly', 'zarf', 'quickly'], ['-ize, -en', 'fiil', 'realize, widen'], ['un-, in-, dis-', 'olumsuz', 'unable, invisible, dislike'], ['re-, over-, mis-', 'yeniden, aşırı, yanlış', 'rewrite, overeat, misunderstand']] }
  ],
  'ydt-ing:Passive Voice': [
    { kind: 'table', title: 'Zamanlara göre edilgen', at: 0, head: ['Zaman', 'Etken', 'Edilgen'], rows: [['Simple present', 'make(s)', 'is / are made'], ['Simple past', 'made', 'was / were made'], ['Present perfect', 'have / has made', 'has / have been made'], ['Future', 'will make', 'will be made'], ['Continuous', 'is making', 'is being made'], ['Modal', 'must make', 'must be made']] }
  ],
  'ydt-ing:Noun Clauses': [
    { kind: 'table', title: 'Dolaylı anlatımda zaman kayması', at: 0, head: ['Doğrudan', 'Dolaylı'], rows: [['am / is / are', 'was / were'], ['V1', 'V2'], ['V2', 'had + V3'], ['will', 'would'], ['can', 'could']] }
  ],
  'ydt-ing:Cloze Test': [
    { kind: 'flow', title: 'Boşluk başına üç soru', steps: ['Paragrafın zamanı ne?', 'Boşluğun önü ve arkası ne istiyor?', 'Bağlaçsa: iki cümle arasındaki anlam ilişkisi ne?', 'Cevabı yerine koyup baştan oku'] }
  ],
  'ydt-ing:Cümle Tamamlama': [
    { kind: 'table', title: 'Bağlaç ne söylüyor?', head: ['Bağlaç', 'Beklenen devam'], rows: [['Although', 'beklenmeyen, zıt bir sonuç'], ['Because / since', 'bir neden'], ['If (+ past)', 'would + V1'], ['So that', 'bir amaç (can / could)'], ['Unless', 'olumsuz koşulun sonucu']] }
  ],
  'ydt-ing:Çeviri (İngilizce–Türkçe)': [
    { kind: 'table', title: 'Kalıp karşılıkları', head: ['İngilizce', 'Türkçe'], rows: [['unless', '-mezse / -madıkça'], ['not only … but also', 'yalnız … değil, aynı zamanda'], ['the more … the more', 'ne kadar … o kadar'], ['as soon as', '-ır -maz'], ['have never been', 'hiç bulunmamış / gitmemiş'], ['may / might', '-ebilir (olasılık)']] }
  ],
  'ydt-ing:Okuma Parçası': [
    { kind: 'flow', title: 'Okuma sırası', steps: ['Soruları oku', 'Metni hızlıca tara', 'Anahtar sözcüğü metinde bul', 'Çevresini dikkatle oku', 'Metinde olmayanı ele'] }
  ],
  'ydt-ing:Diyalog ve Durum': [
    { kind: 'table', title: 'Durum – kalıp', head: ['Durum', 'Kalıp'], rows: [['Tebrik', 'Congratulations! You deserve it.'], ['Özür', 'I’m sorry for …'], ['Rica', 'Would you mind …ing?'], ['Öneri', 'Why don’t we …?'], ['Fiyat sormak', 'How much does it cost?'], ['Teklif', 'Would you like …?']] }
  ],
  'ydt-ing:Paragraf Tamamlama ve Anlam Bütünlüğü': [
    { kind: 'table', title: 'Bağlaçlar yön gösterir', head: ['Bağlaç', 'İşlev'], rows: [['However, but', 'yön değiştirir (zıtlık)'], ['Moreover, in addition', 'aynı yönde ekleme'], ['Therefore, as a result', 'sonuç'], ['For example', 'örnek'], ['In short', 'özet']] }
  ]
};
