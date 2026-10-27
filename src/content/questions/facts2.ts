/* Bilgi tabloları (2): fen, coğrafya, felsefe, din ve edebiyatta az sorusu kalan konular. Kurallar facts.ts’teki gibi. */
import type { Table } from './facts';

const same = (k: string) => k;

export const TABLES2: Table[] = [
  /* ================= TYT Türkçe ================= */
  { topics: [['tyt-tr', 'Sözcükte Anlam'], ['ayt-edb', 'Anlam Bilgisi']], ask: (k) => `“${k}” sözcüğünün eş anlamlısı hangisidir?`, facts: [
    ['cevap', 'yanıt', 'Soruya karşılık olarak söylenen söz.'],
    ['misafir', 'konuk', 'Bir eve ziyarete gelen kişi.'],
    ['fakir', 'yoksul', 'Geçimini sağlayacak parası olmayan.'],
    ['sınav', 'imtihan', 'Bilginin ölçüldüğü yoklama; Arapça kökenli karşılığı da yaygındır.'],
    ['öğrenci', 'talebe', 'Okulda okuyan kişi; eski metinlerde sık geçen karşılığıyla.'],
    ['doktor', 'hekim', 'Hasta tedavi eden kişi; Türkçede eskiden beri kullanılan karşılığıyla.'],
    ['yaşlı', 'ihtiyar', 'Çok yaşamış kişi.'],
    ['okul', 'mektep', 'Eğitim verilen yer; Osmanlıca dönemindeki karşılığıyla.']
  ] },
  { topics: [['tyt-tr', 'Sözcükte Anlam'], ['ayt-edb', 'Anlam Bilgisi']], ask: (k) => `“${k}” sözcüğünün zıt (karşıt) anlamlısı hangisidir?`, facts: [
    ['cimri', 'cömert', 'Elindekini başkalarıyla kolayca paylaşan.'],
    ['kolay', 'zor', 'Yapılması güç olan.'],
    ['erken', 'geç', 'Belirlenen zamandan sonra.'],
    ['dar', 'geniş', 'Eni büyük olan.'],
    ['cesur', 'korkak', 'Tehlikeden kaçan.'],
    ['ucuz', 'pahalı', 'Fiyatı yüksek olan.'],
    ['ilk', 'son', 'Sıranın en sonunda olan.']
  ] },
  { topics: [['tyt-tr', 'Sözcükte Anlam'], ['ayt-edb', 'Anlam Bilgisi']], ask: (k) => `${k}`, pool: ['Deyim anlamı'], facts: [
    ['“Masanın ayağı kırılmış.” cümlesinde “ayak” sözcüğü hangi anlamda kullanılmıştır?', 'Yan anlam', 'Sözcük, temel anlamıyla benzerlik taşıyan yeni bir nesneyi karşılıyor.'],
    ['“Dağın eteğinde küçük bir köy var.” cümlesinde “etek” sözcüğü hangi anlamda kullanılmıştır?', 'Yan anlam', 'Giysiyle olan biçim benzerliğinden doğan yeni bir anlam.'],
    ['“Bana karşı çok soğuk davrandı.” cümlesinde “soğuk” sözcüğü hangi anlamda kullanılmıştır?', 'Mecaz anlam', 'Sıcaklıkla ilgisi yok; davranışın niteliği anlatılıyor.'],
    ['“Sınavda çok ağır sorular vardı.” cümlesinde “ağır” sözcüğü hangi anlamda kullanılmıştır?', 'Mecaz anlam', 'Sorular tartılmıyor; zorluk anlatılıyor.'],
    ['“Ağır çantayı tek başına taşıyamadı.” cümlesinde “ağır” sözcüğü hangi anlamda kullanılmıştır?', 'Gerçek anlam', 'Sözcük ilk akla gelen, sözlükteki ilk anlamıyla kullanılmış.'],
    ['“Üçgenin iç açıları toplamı 180 derecedir.” cümlesinde “açı” sözcüğü hangi anlamda kullanılmıştır?', 'Terim anlam', 'Sözcük bir bilim dalına (geometri) özgü kavramı karşılıyor.'],
    ['“Kışın göl buz tuttu.” cümlesinde “buz” sözcüğü hangi anlamda kullanılmıştır?', 'Gerçek anlam', 'Donmuş su: sözcüğün temel anlamı.']
  ] },
  { topics: [['tyt-tr', 'Ses Bilgisi']], ask: (k) => `“${k}” sözcüğünde hangi ses olayı vardır?`, facts: [
    ['ağzı', 'Ünlü düşmesi', 'Sözcüğün yalın hâliyle karşılaştır: ikinci hecedeki bir ses kaybolmuş.'],
    ['şehri', 'Ünlü düşmesi', 'Yalın hâlindeki ikinci hecenin ünlüsü ek gelince kaybolmuş.'],
    ['dolabı', 'Ünsüz yumuşaması', 'Sözcük sonundaki sert ünsüz, ünlüyle başlayan ek alınca değişmiş.'],
    ['gidiyor', 'Ünsüz yumuşaması', 'Fiil kökünün sonundaki “t” ünlüyle karşılaşınca değişmiş.'],
    ['kitapçı', 'Ünsüz benzeşmesi', 'Sert ünsüzden sonra gelen ekin ilk sesi de sertleşmiş.'],
    ['söylüyor', 'Ünlü daralması', 'Kökün sonundaki geniş ünlü “-yor” ekinden önce değişmiş.'],
    ['affetmek', 'Ünsüz türemesi', 'Sözcük “af” iken birleşmede bir ünsüz ikizleşmiş.'],
    ['hissetmek', 'Ünsüz türemesi', 'Kök tek “s” ile yazılır; birleşmede bir ses fazladan gelmiş.']
  ] },
  { topics: [['tyt-tr', 'Noktalama İşaretleri']], ask: (k) => `${k} hangi noktalama işareti kullanılır?`, facts: [
    ['Kendisinden sonra açıklama ya da örnek verilecek cümlenin sonuna', 'İki nokta', 'Bu işaretten sonra gelen bölüm, öncesini açar.'],
    ['Ögeleri arasında virgül bulunan sıralı cümleleri ayırmak için', 'Noktalı virgül', 'Virgülden güçlü, noktadan zayıf bir duraklama.'],
    ['Tamamlanmamış (eksiltili) cümlelerin sonuna', 'Üç nokta', 'Söylenmek istenip söylenmeyen bir şey olduğunu gösterir.'],
    ['Başkasından olduğu gibi aktarılan sözleri göstermek için', 'Tırnak işareti', 'Alıntının başına ve sonuna konur.'],
    ['Seslenme, korku, şaşma bildiren cümlelerin sonuna', 'Ünlem işareti', 'Duyguyu vurgulayan işaret.'],
    ['Bilinmeyen ya da kesin olmayan bilgiyi göstermek için yay ayraç içinde', 'Soru işareti', '“Yunus Emre (1240 ? - 1320)” örneğindeki işaret.'],
    ['Satır başına alınan konuşmaları göstermek için', 'Uzun çizgi', 'Kısa çizgiden uzun olan, diyaloglarda kullanılan işaret.'],
    ['Cümle içinde açıklama amacıyla kullanılan sözleri içine almak için', 'Yay ayraç', 'Açıklama cümleden çıkarılınca anlam bozulmaz.'],
    ['Sayılardan sonra sıra bildirmek için', 'Nokta', '“3. sınıf” örneğindeki işaret.']
  ] },

  /* ================= TYT Fizik ================= */
  { topics: [['tyt-fiz', 'Fizik Bilimine Giriş']], ask: (k) => `${k} büyüklüğünün SI birimi hangisidir?`, facts: [
    ['Kütle', 'kilogram', 'Temel büyüklüktür; birimi “k” önekiyle başlar.'],
    ['Zaman', 'saniye', 'Temel büyüklüktür; sembolü “s”.'],
    ['Sıcaklık', 'kelvin', 'Mutlak sıfırdan başlayan ölçek.'],
    ['Elektrik akımı', 'amper', 'Temel büyüklüktür; sembolü “A”.'],
    ['Madde miktarı', 'mol', 'Avogadro sayısı kadar tanecik.'],
    ['Işık şiddeti', 'kandela', 'Adı Latince “mum” sözcüğünden gelir.'],
    ['Kuvvet', 'newton', 'Türetilmiş birim: kg·m/s².'],
    ['Enerji', 'joule', 'Türetilmiş birim: N·m.'],
    ['Güç', 'watt', 'Türetilmiş birim: J/s.'],
    ['Basınç', 'pascal', 'Türetilmiş birim: N/m².']
  ] },
  { topics: [['tyt-fiz', 'Fizik Bilimine Giriş']], ask: (k) => `${k} fiziğin hangi alt dalının konusudur?`, pool: ['Atom fiziği'], facts: [
    ['Merceklerde görüntü oluşumu', 'Optik', 'Işığın davranışını inceleyen dal.'],
    ['Cisimlerin hareketi ve kuvvetler', 'Mekanik', 'Newton yasalarının alanı.'],
    ['Isı ve sıcaklık, hâl değişimi', 'Termodinamik', 'Adı “ısı” ve “güç” anlamlı Yunanca sözcüklerden gelir.'],
    ['Yüklerin etkileşimi ve devreler', 'Elektromanyetizma', 'Elektrik ile manyetizmayı birlikte inceler.'],
    ['Atom çekirdeğinin yapısı ve radyoaktiflik', 'Nükleer fizik', 'Çekirdeği inceleyen dal.'],
    ['Katıların ve kristallerin yapısı', 'Katıhâl fiziği', 'Yarı iletkenler bu dalın konusudur.']
  ] },
  { topics: [['tyt-fiz', 'Manyetizma']], ask: same, facts: [
    ['Manyetik alanın SI birimi hangisidir?', 'tesla', 'Sırp asıllı mucidin adını taşır.', ['weber', 'newton', 'volt', 'amper']],
    ['Manyetik akının SI birimi hangisidir?', 'weber', 'Alman fizikçinin adını taşır; T·m².', ['tesla', 'joule', 'ohm', 'coulomb']],
    ['Bir mıknatısın aynı adlı kutupları birbirine nasıl etki eder?', 'Birbirini iter', 'Pusulanın kuzeyi gösteren ucu, Dünya’nın hangi manyetik kutbunu gösterir, düşün.', ['Birbirini çeker', 'Etkileşmez', 'Önce çeker sonra iter', 'Yalnız demir varken çeker']],
    ['Pusula iğnesinin kuzey kutbu coğrafi kuzeyi gösterir. Buna göre coğrafi kuzeyde hangi manyetik kutup vardır?', 'Manyetik güney kutbu', 'Zıt kutuplar birbirini çeker.', ['Manyetik kuzey kutbu', 'Manyetik kutup yoktur', 'Nötr bölge', 'İki kutup birlikte']],
    ['Akım geçen düz bir telin çevresindeki manyetik alan çizgileri nasıldır?', 'Teli çevreleyen eş merkezli çemberler', 'Sağ el kuralında başparmak akım yönünü gösterir; diğer parmaklar telin etrafını sarar.', ['Tele paralel doğrular', 'Telden dışarı doğru ışınlar', 'Telin yalnız bir tarafında', 'Teli kesen dik doğrular']],
    ['Akım geçen bir bobinin içine demir çekirdek konulursa manyetik alan nasıl değişir?', 'Artar', 'Demir, alan çizgilerini kendi içinde toplar; elektromıknatıs böyle güçlenir.', ['Azalır', 'Değişmez', 'Sıfır olur', 'Yön değiştirir, büyüklüğü aynı kalır']],
    ['Bir mıknatıs ortadan ikiye bölünürse ne olur?', 'Her parça iki kutuplu yeni bir mıknatıs olur', 'Tek kutuplu mıknatıs elde edilemez.', ['Bir parça N, diğeri S kutbu olur', 'Mıknatıslık tamamen kaybolur', 'Yalnız büyük parça mıknatıs kalır', 'Parçalar birbirini iter ve kutupsuz olur']]
  ] },

  /* ================= TYT Kimya ================= */
  { topics: [['tyt-kim', 'Kimya Bilimi']], ask: (k) => `${k} elementinin sembolü hangisidir?`, facts: [
    ['Sodyum', 'Na', 'Sembol Latince adından (natrium) gelir.'],
    ['Potasyum', 'K', 'Sembol Latince adından (kalium) gelir.'],
    ['Demir', 'Fe', 'Sembol Latince adından (ferrum) gelir.'],
    ['Bakır', 'Cu', 'Sembol Latince adından (cuprum) gelir.'],
    ['Gümüş', 'Ag', 'Sembol Latince adından (argentum) gelir.'],
    ['Altın', 'Au', 'Sembol Latince adından (aurum) gelir.'],
    ['Kurşun', 'Pb', 'Sembol Latince adından (plumbum) gelir.'],
    ['Cıva', 'Hg', 'Sembol Latince adından (hydrargyrum) gelir.'],
    ['Kalay', 'Sn', 'Sembol Latince adından (stannum) gelir.']
  ] },
  { topics: [['tyt-kim', 'Kimya Bilimi'], ['tyt-kim', 'Atom ve Periyodik Sistem']], ask: (k) => `${k} bilim insanı kimdir?`, facts: [
    ['Kütlenin korunumu kanununu ortaya koyan', 'Lavoisier', 'Modern kimyanın babası sayılan Fransız.'],
    ['Sabit oranlar kanununu ortaya koyan', 'Proust', 'Bileşiklerdeki kütle oranının sabit olduğunu gösteren Fransız.'],
    ['Katlı oranlar kanununu ve ilk bilimsel atom modelini ortaya koyan', 'Dalton', 'Atomu içi dolu küre olarak düşünen İngiliz.'],
    ['Elektronu keşfeden', 'Thomson', 'Katot ışınlarıyla çalışan, “üzümlü kek” modelinin sahibi.'],
    ['Altın levha deneyiyle çekirdeği keşfeden', 'Rutherford', 'Alfa taneciklerini ince bir levhaya gönderen bilim insanı.'],
    ['Nötronu keşfeden', 'Chadwick', '1932’de yüksüz tanecikleri bulan İngiliz.'],
    ['Elementleri atom kütlelerine göre sıralayıp periyodik tabloyu hazırlayan', 'Mendeleyev', 'Henüz bulunmamış elementler için boşluk bırakan Rus.']
  ] },
  { topics: [['tyt-kim', 'Kimyasal Türler Arası Etkileşimler']], ask: (k) => `${k} taneciğinde atomlar arasındaki bağ türü hangisidir?`, pool: ['Hidrojen bağı'], facts: [
    ['NaCl', 'İyonik bağ', 'Bir metal ile bir ametal arasında elektron alışverişi.'],
    ['MgO', 'İyonik bağ', 'Metal elektron verir, ametal alır.'],
    ['H₂O', 'Polar kovalent bağ', 'Farklı iki ametal elektron ortaklaşıyor; elektronlar oksijene daha yakın.'],
    ['HCl', 'Polar kovalent bağ', 'Farklı elektronegatiflikteki iki ametal.'],
    ['NH₃', 'Polar kovalent bağ', 'Azot ile hidrojen elektron ortaklaşıyor; çekim eşit değil.'],
    ['H₂', 'Apolar kovalent bağ', 'Aynı iki ametal atomu eşit çekimle elektron ortaklaşıyor.'],
    ['Cl₂', 'Apolar kovalent bağ', 'Aynı cins iki atom.'],
    ['Fe (katı)', 'Metalik bağ', 'Artı iyonlar ile serbest dolaşan elektronlar arasındaki çekim.'],
    ['Cu (katı)', 'Metalik bağ', 'Elektron denizi modeliyle açıklanır.']
  ] },
  { topics: [['tyt-kim', 'Kimyasal Türler Arası Etkileşimler']], ask: (k) => `Saf ${k} sıvısında moleküller arasındaki en etkin etkileşim hangisidir?`, pool: ['İyon–dipol etkileşimi', 'Metalik bağ'], facts: [
    ['H₂O', 'Hidrojen bağı', 'H atomu, çok elektronegatif bir atoma (O) bağlı.'],
    ['HF', 'Hidrojen bağı', 'H atomu flora bağlı.'],
    ['NH₃', 'Hidrojen bağı', 'H atomu azota bağlı.'],
    ['HCl', 'Dipol–dipol etkileşimi', 'Molekül polar ama H; F, O ya da N’ye bağlı değil.'],
    ['CH₄', 'London kuvvetleri', 'Apolar molekül; yalnız anlık kutuplanma olur.'],
    ['CCl₄', 'London kuvvetleri', 'Simetrik, apolar molekül.'],
    ['I₂', 'London kuvvetleri', 'Aynı cins iki atomdan oluşan apolar molekül.']
  ] },
  { topics: [['tyt-kim', 'Maddenin Halleri']], ask: (k) => `${k} ne ad verilir?`, facts: [
    ['Katının sıvılaşmadan doğrudan gaza geçmesine', 'Süblimleşme', 'Naftalin ve kuru buz bu yolla küçülür.'],
    ['Gazın sıvılaşmadan doğrudan katıya geçmesine', 'Kırağılaşma', 'Soğuk kış sabahı otların üstündeki beyaz tabaka böyle oluşur.'],
    ['Sıvının yüzeyinden gaza geçmesine', 'Buharlaşma', 'Her sıcaklıkta olabilir.'],
    ['Gazın sıvıya dönüşmesine', 'Yoğuşma', 'Soğuk bardağın dış yüzeyindeki damlalar böyle oluşur.'],
    ['Katının sıvıya geçmesine', 'Erime', 'Isı alan bir hâl değişimi.'],
    ['Sıvının katıya geçmesine', 'Donma', 'Isı veren bir hâl değişimi.']
  ] },
  { topics: [['tyt-kim', 'Maddenin Halleri'], ['ayt-kim', 'Gazlar']], ask: (k) => `${k} hangi gaz yasasıyla açıklanır?`, facts: [
    ['Sabit sıcaklıkta gazın basıncı ile hacminin ters orantılı olması', 'Boyle yasası', 'P·V = sabit.'],
    ['Sabit basınçta gazın hacminin mutlak sıcaklıkla doğru orantılı olması', 'Charles yasası', 'V/T = sabit.'],
    ['Sabit hacimde gazın basıncının mutlak sıcaklıkla doğru orantılı olması', 'Gay-Lussac yasası', 'P/T = sabit.'],
    ['Aynı koşullarda eşit hacimdeki gazların eşit sayıda tanecik içermesi', 'Avogadro yasası', 'V/n = sabit.'],
    ['Gaz karışımının toplam basıncının kısmi basınçların toplamı olması', 'Dalton kısmi basınçlar yasası', 'P(toplam) = P₁ + P₂ + …'],
    ['Gazların yayılma hızının mol kütlesinin karekökü ile ters orantılı olması', 'Graham difüzyon yasası', 'Hafif gaz daha hızlı yayılır.']
  ] },
  { topics: [['tyt-kim', 'Doğa ve Kimya'], ['tyt-bio', 'Güncel Çevre Sorunları']], ask: (k) => `${k} başlıca madde hangisidir?`, facts: [
    ['Asit yağmurlarına yol açan', 'Kükürt dioksit (SO₂)', 'Kömür yakılınca çıkan, suyla birleşip asit oluşturan gaz.'],
    ['Ozon tabakasını inceltmesiyle bilinen', 'Kloroflorokarbonlar (CFC)', 'Eski buzdolabı ve spreylerde kullanılan gazlar.'],
    ['Sera etkisini en çok artıran insan kaynaklı gaz olan', 'Karbon dioksit (CO₂)', 'Fosil yakıtların yanmasıyla en çok açığa çıkan gaz.'],
    ['Hemoglobine bağlanarak zehirlenmeye yol açan', 'Karbon monoksit (CO)', 'Soba ve şofbenlerde eksik yanmayla oluşan renksiz gaz.'],
    ['Göllerde aşırı alg artışına (ötrofikasyona) yol açan', 'Fosfat ve nitratlar', 'Gübre ve deterjanlarla suya karışan besin tuzları.'],
    ['Suyun sertliğine neden olan', 'Ca²⁺ ve Mg²⁺ iyonları', 'Çaydanlıkta kireç bırakan iyonlar.']
  ] },
  { topics: [['tyt-kim', 'Kimyasal Tepkimeler']], ask: (k) => `${k} tepkimesi hangi türdendir?`, facts: [
    ['CH₄ + 2O₂ → CO₂ + 2H₂O', 'Yanma', 'Bir madde oksijenle birleşiyor; ürünlerde CO₂ ve su var.'],
    ['HCl + NaOH → NaCl + H₂O', 'Nötralleşme (asit–baz)', 'Bir asit ile bir baz tepkimeye girip tuz ve su oluşuyor.'],
    ['AgNO₃(suda) + KCl(suda) → AgCl(k) + KNO₃(suda)', 'Çökelme', 'İki çözelti karışınca suda çözünmeyen bir katı oluşuyor.'],
    ['2H₂O → 2H₂ + O₂', 'Analiz (ayrışma)', 'Bir bileşik daha basit maddelere ayrılıyor.'],
    ['CaCO₃ → CaO + CO₂', 'Analiz (ayrışma)', 'Tek bir girenden birden çok ürün.'],
    ['N₂ + 3H₂ → 2NH₃', 'Sentez (birleşme)', 'Basit maddelerden tek bir bileşik oluşuyor.'],
    ['Zn + 2HCl → ZnCl₂ + H₂', 'Tek yer değiştirme', 'Bir element, bileşikteki başka bir elementin yerine geçiyor.']
  ] },
  { topics: [['tyt-kim', 'Kimya Her Yerde'], ['tyt-kim', 'Asitler, Bazlar ve Tuzlar']], ask: (k) => `${k} formülü hangisidir?`, facts: [
    ['Sirkenin yapısındaki asetik asidin', 'CH₃COOH', 'Organik bir asit; karboksil grubu taşır.'],
    ['Yemek sodasının (sodyum bikarbonat)', 'NaHCO₃', 'Hamur kabartmada kullanılır; bir hidrojenli karbonat.'],
    ['Çamaşır suyunun etken maddesi sodyum hipokloritin', 'NaOCl', 'Klor içeren ağartıcı.'],
    ['Sönmüş kirecin (kalsiyum hidroksit)', 'Ca(OH)₂', 'Badanada kullanılan baz.'],
    ['Sönmemiş kirecin (kalsiyum oksit)', 'CaO', 'Kireç taşı ısıtılınca oluşan oksit.'],
    ['Tuz ruhunun (hidroklorik asit)', 'HCl', 'Mide özsuyunda da bulunan asit.'],
    ['Kezzabın (nitrik asit)', 'HNO₃', 'Azot içeren kuvvetli asit.'],
    ['Zaç yağının (sülfürik asit)', 'H₂SO₄', 'Akülerde kullanılan kuvvetli asit.'],
    ['Sud kostiğin (sodyum hidroksit)', 'NaOH', 'Sabun yapımında kullanılan kuvvetli baz.']
  ] },
  { topics: [['ayt-kim', 'Enerji Kaynakları ve Bilimsel Gelişmeler']], ask: same, facts: [
    ['Doğal gazın ana bileşeni hangisidir?', 'Metan', 'En basit hidrokarbon: CH₄.'],
    ['Tüplerde satılan LPG başlıca hangi gazlardan oluşur?', 'Propan ve bütan', 'Üç ve dört karbonlu alkanlar.'],
    ['Nükleer santrallerde enerji hangi tepkimeyle elde edilir?', 'Fisyon', 'Ağır bir çekirdek nötronla parçalanır.'],
    ['Güneş’te enerji hangi tepkimeyle üretilir?', 'Füzyon', 'Hafif çekirdekler birleşerek daha ağır çekirdek oluşturur.'],
    ['Yakıt pillerinde en çok kullanılan yakıt hangisidir?', 'Hidrojen', 'Yanınca yalnız su oluşturan gaz.'],
    ['Benzinin vuruntuya karşı direncini gösteren değer hangisidir?', 'Oktan sayısı', 'Akaryakıt istasyonlarında 95 ya da 97 gibi yazılan değer.'],
    ['Karbon oranı en yüksek, en kaliteli kömür türü hangisidir?', 'Antrasit', 'Turba, linyit ve taş kömüründen daha yaşlı kömür.'],
    ['Güneş panellerinde ışığı doğrudan elektriğe çeviren malzeme türü hangisidir?', 'Yarı iletken', 'Silisyum bu türün en bilinen örneği.']
  ] },

  /* ================= TYT Biyoloji ================= */
  { topics: [['tyt-bio', 'Canlıların Ortak Özellikleri']], ask: (k) => `“${k}” canlıların hangi ortak özelliğine örnektir?`, pool: ['Hücresel yapı'], facts: [
    ['Elini sıcak sobadan hızla çekmek', 'Uyarılara tepki', 'Çevreden gelen bir etkiye karşılık veriliyor.'],
    ['Bitkinin ışığa doğru yönelmesi', 'Uyarılara tepki', 'Işık bir uyarandır; bitki ona göre davranıyor.'],
    ['Vücut sıcaklığının 36,5 °C dolayında tutulması', 'Homeostazi', 'İç ortamın dengede kalması.'],
    ['Kutup ayısının kalın yağ tabakası ve beyaz kürkü', 'Adaptasyon', 'Yaşadığı ortamda hayatta kalmayı kolaylaştıran kalıtsal özellik.'],
    ['Tırtılın zamanla kelebeğe dönüşmesi', 'Büyüme ve gelişme', 'Yapı ve biçim zaman içinde değişiyor.'],
    ['Bakterinin ikiye bölünerek çoğalması', 'Üreme', 'Yeni bireyler oluşuyor.'],
    ['Besinlerin parçalanıp enerji elde edilmesi', 'Metabolizma', 'Yapım ve yıkım tepkimelerinin tümü.']
  ] },
  { topics: [['tyt-bio', 'Hücre ve Organeller']], ask: (k) => `Hücrede ${k} görevini yapan yapı hangisidir?`, facts: [
    ['protein sentezi', 'Ribozom', 'Zarsız, en küçük organel; hem prokaryotta hem ökaryotta bulunur.'],
    ['oksijenli solunumla ATP üretimi', 'Mitokondri', 'Çift zarlı, kendi DNA’sı olan “enerji santrali”.'],
    ['fotosentez', 'Kloroplast', 'Yeşil renk maddesi taşıyan, çift zarlı organel.'],
    ['hücre içi sindirim', 'Lizozom', 'Sindirim enzimleriyle dolu kesecik.'],
    ['salgı maddelerinin paketlenip gönderilmesi', 'Golgi cisimciği', 'Üst üste dizilmiş yassı keseciklerden oluşan organel.'],
    ['bitkilerde su ve atık depolama', 'Koful', 'Olgun bitki hücresinde hacmin büyük kısmını kaplar.'],
    ['hayvan hücresinde bölünme sırasında iğ ipliklerinin oluşturulması', 'Sentrozom', 'Birbirine dik iki sentriyolden oluşan, zarsız yapı.'],
    ['hücre içinde madde taşınması', 'Endoplazmik retikulum', 'Çekirdek zarından hücre zarına uzanan kanal ağı.']
  ] },
  { topics: [['tyt-bio', 'Hücre Zarından Madde Geçişi']], ask: (k) => `${k} ne ad verilir?`, facts: [
    ['Suyun seçici geçirgen zardan, suyun az olduğu (yoğunluğu fazla) ortama geçmesine', 'Osmoz', 'Yalnız su molekülleri için kullanılan geçiş adı.'],
    ['Maddelerin enerji harcanmadan çok yoğun ortamdan az yoğun ortama geçmesine', 'Difüzyon', 'Parfüm kokusunun odaya yayılması gibi.'],
    ['Taşıyıcı protein kullanılarak enerji harcamadan yapılan geçişe', 'Kolaylaştırılmış difüzyon', 'Glikozun bazı hücrelere girişi gibi; ATP gerekmez.'],
    ['Maddelerin ATP harcanarak az yoğundan çok yoğun ortama taşınmasına', 'Aktif taşıma', 'Yoğunluk farkına karşı yapılan, enerji isteyen taşıma.'],
    ['Büyük katı parçaların zar uzantılarıyla hücreye alınmasına', 'Fagositoz', 'Akyuvarların mikropları yutması.'],
    ['Sıvı damlacıklarının zar çöküntüsüyle hücreye alınmasına', 'Pinositoz', '“Hücre içmesi” diye de anılır.'],
    ['Maddelerin keseciklerle hücre dışına atılmasına', 'Ekzositoz', 'Salgı maddeleri bu yolla dışarı verilir.'],
    ['Bitki hücresinin yoğun (hipertonik) ortamda su kaybedip büzülmesine', 'Plazmoliz', 'Sitoplazma hücre çeperinden ayrılır.'],
    ['Alyuvarın saf suda şişip patlamasına', 'Hemoliz', 'Hayvan hücresinin çeperi olmadığı için olur.']
  ] },
  { topics: [['tyt-bio', 'Canlıların Sınıflandırılması']], ask: (k) => `${k} hangi âlemde yer alır?`, facts: [
    ['Bira mayası', 'Mantarlar', 'Tek hücreli, ökaryot ve heterotrof; tomurcuklanarak çoğalır.'],
    ['Şapkalı mantar', 'Mantarlar', 'Çeperi kitinden yapılmış, çürükçül beslenen ökaryot.'],
    ['Öglena', 'Protistler', 'Hem fotosentez yapabilen hem de dışarıdan beslenebilen tek hücreli ökaryot.'],
    ['Amip', 'Protistler', 'Yalancı ayaklarla hareket eden tek hücreli ökaryot.'],
    ['Escherichia coli', 'Bakteriler', 'Bağırsakta yaşayan, çekirdeksiz tek hücreli.'],
    ['Metan üreten, aşırı koşullarda yaşayan prokaryotlar', 'Arkeler', 'Çeperinde peptidoglikan bulunmayan prokaryotlar.'],
    ['Eğrelti otu', 'Bitkiler', 'Sporla üreyen, iletim demetleri olan ökaryot.'],
    ['Deniz anası', 'Hayvanlar', 'Çok hücreli, heterotrof, çeperi olmayan ökaryot.']
  ] },
  { topics: [['tyt-bio', 'Eşeysiz ve Eşeyli Üreme']], ask: (k) => `${k} hangi üreme şeklidir?`, pool: ['Döllenme'], facts: [
    ['Bakterinin ikiye ayrılarak çoğalması', 'Bölünme', 'Bir hücre eşit iki parçaya ayrılır.'],
    ['Bira mayasında ana hücreden küçük bir çıkıntının ayrılması', 'Tomurcuklanma', 'Yavru hücre başta ana hücreden küçüktür.'],
    ['Planaryanın kopan parçasından yeni birey oluşması', 'Rejenerasyon (yenilenme)', 'Kayıp kısımlar yeniden oluşur.'],
    ['Eğrelti otunun özel hücrelerle çoğalması', 'Sporla üreme', 'Dayanıklı, tek hücreli üreme yapıları rüzgârla yayılır.'],
    ['Erkek arının döllenmemiş yumurtadan gelişmesi', 'Partenogenez', 'Eşeyli üreme yapıları var ama döllenme yok.'],
    ['Çileğin toprak üstü sürünücü gövdeyle çoğalması', 'Vejetatif üreme', 'Bitkinin kök, gövde ya da yaprağından yeni birey oluşur.'],
    ['Patatesin yumrusundan yeni bitki oluşması', 'Vejetatif üreme', 'Toprak altı gövdeden yeni birey.']
  ] },
  { topics: [['tyt-bio', 'Ekosistem Ekolojisi']], ask: (k) => `${k} ekosistemde hangi rolü üstlenir?`, pool: ['Hepçil tüketici'], facts: [
    ['Yeşil bitki', 'Üretici', 'Işık enerjisiyle kendi besinini yapar.'],
    ['Kemosentetik bakteri', 'Üretici', 'Kimyasal enerjiyle inorganik maddeden organik madde yapar.'],
    ['Tavşan', 'Otçul tüketici (birincil)', 'Yalnız bitkilerle beslenir.'],
    ['Çekirge', 'Otçul tüketici (birincil)', 'Yaprakları yiyerek beslenir.'],
    ['Kurt', 'Etçil tüketici', 'Başka hayvanları avlayarak beslenir.'],
    ['Kartal', 'Etçil tüketici', 'Yırtıcı kuş; avladığı hayvanlarla beslenir.'],
    ['Çürükçül bakteri', 'Ayrıştırıcı', 'Ölü canlıları inorganik maddelere dönüştürür.'],
    ['Küf mantarı', 'Ayrıştırıcı', 'Ölü organik maddeleri parçalayarak beslenir.']
  ] },
  { topics: [['tyt-bio', 'Güncel Çevre Sorunları'], ['ayt-bio', 'Canlılar ve Çevre'], ['ayt-cog', 'Çevre ve Toplum']], ask: (k) => `${k} hangi çevre sorununa yol açar?`, facts: [
    ['Fosil yakıtların yanmasıyla atmosferdeki CO₂’nin artması', 'Küresel ısınma', 'Sera etkisi güçlenir, ortalama sıcaklık yükselir.'],
    ['Kükürt ve azot oksitlerin bulutlardaki suyla birleşmesi', 'Asit yağmuru', 'Ormanlara ve tarihî yapılara zarar veren yağış.'],
    ['CFC gazlarının üst atmosfere çıkması', 'Ozon tabakasının incelmesi', 'Morötesi ışınlar yeryüzüne daha çok ulaşır.'],
    ['Gübre ve deterjandaki fosfatların göle karışması', 'Ötrofikasyon', 'Algler aşırı çoğalır, sudaki oksijen azalır.'],
    ['Plastiklerin küçük parçalara ayrılıp besin zincirine girmesi', 'Mikroplastik kirliliği', '5 mm’den küçük plastik parçacıklar.'],
    ['Eğimli arazide ormanların yok edilmesi', 'Erozyon', 'Bitki örtüsü kalkınca toprak su ve rüzgârla taşınır.'],
    ['Cıva gibi ağır metallerin besin zincirinde yukarı doğru artması', 'Biyolojik birikim', 'Zincirin üst basamağındaki canlıda en yüksek yoğunluğa ulaşır.']
  ] },

  /* ================= AYT Biyoloji ================= */
  { topics: [['ayt-bio', 'Sinir Sistemi']], ask: (k) => `${k} hangi yapıdadır?`, facts: [
    ['Denge ve kas koordinasyonu merkezi', 'Beyincik', 'Beynin arka alt kısmındaki yapı; zarar görünce yürüyüş bozulur.'],
    ['Solunum, kalp atışı ve yutkunma merkezi', 'Omurilik soğanı', 'Beyin sapının omuriliğe bağlanan kısmı.'],
    ['Vücut sıcaklığı, açlık–tokluk ve su dengesi merkezi', 'Hipotalamus', 'Hipofizi de yöneten ara beyin bölümü.'],
    ['Düşünme, öğrenme ve konuşma merkezi', 'Beyin kabuğu (uç beyin)', 'Beynin en dış, kıvrımlı gri madde katmanı.'],
    ['Koku dışındaki duyuların aktarılıp dağıtıldığı merkez', 'Talamus', 'Ara beyinde bir “santral” görevi gören yapı.'],
    ['Diz kapağı refleksinin merkezi', 'Omurilik', 'Beyne gitmeden yanıt veren merkez.'],
    ['İki beyin yarım küresini birbirine bağlayan yapı', 'Nasırlı cisim', 'Yarım küreler arasındaki kalın sinir lifi demeti.'],
    ['Nöronda uyartı iletimini hızlandıran yalıtkan kılıf', 'Miyelin kılıf', 'Aksonu saran yağlı tabaka.']
  ] },
  { topics: [['ayt-bio', 'Endokrin Sistem']], ask: (k) => `${k} hormonu hangi bezden salgılanır?`, facts: [
    ['İnsülin', 'Pankreas', 'Hem sindirim enzimi hem kan şekerini düzenleyen hormon salgılayan karma bez.'],
    ['Tiroksin', 'Tiroit', 'Boyundaki, iyot kullanan bez.'],
    ['Kalsitonin', 'Tiroit', 'Kandaki kalsiyumu düşüren hormonu, metabolizma hızını ayarlayan bez salgılar.'],
    ['Parathormon', 'Paratiroit', 'Tiroidin arkasındaki küçük bezler.'],
    ['Adrenalin', 'Böbrek üstü bezi', 'Tehlike anında salgılanır; bez böbreklerin üzerindedir.'],
    ['Büyüme hormonu', 'Hipofiz', 'Öteki bezleri de yöneten “ana bez”.'],
    ['Melatonin', 'Epifiz', 'Karanlıkta salgısı artan, uyku–uyanıklık düzenine etki eden bez.'],
    ['Testosteron', 'Testis', 'Erkek üreme bezi.'],
    ['Östrojen', 'Yumurtalık', 'Dişi üreme bezi.']
  ] },
  { topics: [['ayt-bio', 'Duyu Organları']], ask: (k) => `${k} yapı hangisidir?`, facts: [
    ['Gözde renkli görmeyi sağlayan reseptör', 'Koni hücreleri', 'Gözün en net gördüğü sarı benekte yoğundur.'],
    ['Gözde loş ışıkta görmeyi sağlayan reseptör', 'Çubuk hücreleri', 'A vitamini eksikliğinde işlevi bozulur, gece körlüğü olur.'],
    ['Göz bebeğinin büyüklüğünü ayarlayıp göze giren ışığı denetleyen', 'İris', 'Göze rengini veren yapı.'],
    ['Kalınlığı değişerek yakın ve uzağı net görmeyi sağlayan', 'Göz merceği', 'Kirpiksi cisim kaslarıyla şekli değişen, saydam yapı.'],
    ['Görme sinirinin çıktığı, reseptör bulunmayan bölge', 'Kör nokta', 'Bu bölgeye düşen görüntü algılanmaz.'],
    ['Orta kulakta basıncı dış ortamla dengeleyen', 'Östaki borusu', 'Orta kulağı yutağa bağlar.'],
    ['İç kulakta vücudun dengesini algılayan', 'Yarım daire kanalları', 'İçindeki sıvının hareketiyle baş hareketleri algılanır.'],
    ['İç kulakta sesi algılayan reseptörlerin bulunduğu', 'Korti organı', 'Salyangozun içindeki tüylü hücreler.']
  ] },
  { topics: [['ayt-bio', 'Destek ve Hareket Sistemi']], ask: (k) => `${k} yapı hangisidir?`, facts: [
    ['Eklemde kemiği kemiğe bağlayan', 'Ligament (eklem bağı)', 'Burkulmada zedelenen sağlam bağ dokusu.'],
    ['Kası kemiğe bağlayan', 'Tendon (kiriş)', 'Topukta Aşil adıyla bilinen yapı.'],
    ['Kemiğin enine büyümesini ve onarımını sağlayan', 'Periost (kemik zarı)', 'Kemiği dıştan saran zar.'],
    ['Uzun kemiklerin boyca uzamasını sağlayan', 'Epifiz plağı (büyüme kıkırdağı)', 'Ergenlik sonunda kemikleşen kıkırdak bölge.'],
    ['Kan hücrelerinin üretildiği', 'Kırmızı kemik iliği', 'Süngerimsi kemik dokusunun boşluklarında bulunur.'],
    ['İç organların duvarında bulunan, istemsiz çalışan kas', 'Düz kas', 'Mide ve damar duvarında bulunur; enine bant görünmez.'],
    ['Hem çizgili görünümlü hem istemsiz çalışan kas', 'Kalp kası', 'Yalnız bir organda bulunur, yorulmadan çalışır.'],
    ['Kas hücresinde kasılma için gereken kalsiyumu depolayan', 'Sarkoplazmik retikulum', 'Kas hücresine özgü endoplazmik retikulum.']
  ] },
  { topics: [['ayt-bio', 'Sindirim Sistemi']], ask: same, facts: [
    ['Ağızda nişasta sindirimini başlatan enzim hangisidir?', 'Tükürük amilazı', 'Tükürük bezlerinden salgılanır.'],
    ['Midede protein sindirimini başlatan enzim hangisidir?', 'Pepsin', 'Asidik ortamda etkinleşir.'],
    ['Yağları küçük damlacıklara ayırarak (emülsiyon) sindirimi kolaylaştıran salgı hangisidir?', 'Safra', 'Enzim içermez; yeşilimsi bir salgıdır.'],
    ['Safrayı üreten organ hangisidir?', 'Karaciğer', 'Vücudun en büyük iç organı.'],
    ['Safrayı depolayan organ hangisidir?', 'Safra kesesi', 'Karaciğerin altında, armut biçimli.'],
    ['Besinlerin en çok emildiği bölüm hangisidir?', 'İnce bağırsak', 'Sindirimin de tamamlandığı uzun kanal.'],
    ['Su ve minerallerin büyük kısmının geri emildiği bölüm hangisidir?', 'Kalın bağırsak', 'Sindirim kanalının son büyük bölümü.'],
    ['İnce bağırsakta emilim yüzeyini artıran parmak biçimli çıkıntılar hangisidir?', 'Villus', 'Türkçesi “tümür”.'],
    ['Pankreastan salgılanıp ince bağırsakta proteinleri sindiren enzim hangisidir?', 'Tripsin', 'Pankreas özsuyundaki proteaz.']
  ] },
  { topics: [['ayt-bio', 'Dolaşım ve Bağışıklık Sistemi']], ask: (k) => `${k} yapı hangisidir?`, facts: [
    ['Kanda oksijen taşıyan', 'Alyuvar', 'Hemoglobin taşıyan, olgunken çekirdeksiz hücre.'],
    ['Kanın pıhtılaşmasında görev alan', 'Kan pulcukları (trombosit)', 'Hücre parçacıkları; yara yerinde birikir.'],
    ['Akciğerlerden kalbe temiz kan getiren damar', 'Akciğer toplardamarı', 'Kalbin sol kulakçığına açılır.'],
    ['Kalpten vücuda temiz kan pompalayan büyük atardamar', 'Aort', 'Sol karıncıktan çıkar.'],
    ['Kalpten akciğerlere kirli kan götüren damar', 'Akciğer atardamarı', 'Sağ karıncıktan çıkar.'],
    ['Kalp atışını başlatan, “doğal kalp pili” denen yapı', 'Sinüs düğümü (SA)', 'Sağ kulakçık duvarındadır.'],
    ['Doku sıvısını toplayıp kana geri döndüren sistem', 'Lenf sistemi', 'Bademcikler ve dalak da bu sistemin parçasıdır.'],
    ['Antikor üreten hücre', 'Plazma hücresi', 'B lenfositlerinden farklılaşır.']
  ] },
  { topics: [['ayt-bio', 'Dolaşım ve Bağışıklık Sistemi']], ask: (k) => `${k} hangi bağışıklık türüdür?`, pool: ['Doğal (doğuştan) savunma'], facts: [
    ['Aşı yapılarak kazanılan bağışıklık', 'Yapay aktif bağışıklık', 'Vücut zayıflatılmış mikrobu tanıyıp kendi antikorunu üretir.'],
    ['Serum verilerek kazanılan bağışıklık', 'Yapay pasif bağışıklık', 'Hazır antikor dışarıdan verilir; etkisi kısa sürer.'],
    ['Hastalığı geçirerek kazanılan bağışıklık', 'Doğal aktif bağışıklık', 'Vücut mikropla karşılaşıp kendi antikorunu üretmiştir.'],
    ['Anne sütüyle ya da plasentayla bebeğe geçen bağışıklık', 'Doğal pasif bağışıklık', 'Antikorlar hazır olarak anneden gelir.']
  ] },
  { topics: [['ayt-bio', 'Solunum Sistemi']], ask: (k) => `${k} yapı hangisidir?`, facts: [
    ['Akciğerlerde gaz alışverişinin gerçekleştiği', 'Alveol', 'Kılcal damarlarla sarılı, çok ince duvarlı hava kesecikleri.'],
    ['Yutkunurken soluk borusunun girişini kapatan', 'Gırtlak kapağı (epiglot)', 'Besinin hava yoluna kaçmasını önler.'],
    ['Soluk alırken kasılıp düzleşen kas', 'Diyafram', 'Göğüs boşluğunu karın boşluğundan ayıran kubbe biçimli kas.'],
    ['Soluk borusunun kapanmasını önleyen', 'Kıkırdak halkalar', 'C biçimli, esnek ama sağlam destek yapıları.'],
    ['Solunum hızını ayarlayan merkezin bulunduğu', 'Omurilik soğanı', 'Kandaki CO₂ artışını algılayıp solunumu hızlandırır.'],
    ['Seslerin oluştuğu ses tellerinin bulunduğu', 'Gırtlak (larinks)', 'Yutak ile soluk borusu arasındaki bölüm.']
  ] },
  { topics: [['ayt-bio', 'Boşaltım Sistemi']], ask: (k) => `${k} hangisidir?`, facts: [
    ['Böbreğin yapı ve görev birimi', 'Nefron', 'Her böbrekte yaklaşık bir milyon tane bulunur.'],
    ['Kanın süzüldüğü kılcal damar yumağı', 'Glomerulus', 'Bowman kapsülünün içindeki kılcal ağ.'],
    ['Süzüntünün ilk toplandığı çift çeperli yapı', 'Bowman kapsülü', 'Kılcal yumağı çevreleyen kap.'],
    ['Böbrekte suyun geri emilimini artıran hormon', 'ADH (antidiüretik hormon)', 'Hipofizin arka lobundan salınır; eksikliğinde çok idrar yapılır.'],
    ['Na⁺ geri emilimini artıran hormon', 'Aldosteron', 'Böbrek üstü bezinin kabuk bölgesinden salgılanır.'],
    ['İdrarı böbrekten idrar kesesine taşıyan kanal', 'Üreter', 'Her böbrekten bir tane çıkar.'],
    ['İdrarı vücut dışına atan kanal', 'Üretra', 'İdrar kesesinden dışarıya açılır.'],
    ['Karaciğerde amonyaktan üretilen, daha az zehirli atık', 'Üre', 'İdrarla atılan başlıca azotlu atık.']
  ] },
  { topics: [['ayt-bio', 'Üreme Sistemi ve Embriyonik Gelişim']], ask: (k) => `${k} hangisidir?`, facts: [
    ['Spermlerin üretildiği yer', 'Seminifer tüpçükler', 'Testislerin içindeki kıvrımlı kanallar.'],
    ['Spermlerin olgunlaşıp depolandığı yer', 'Epididim (erbezi üstü)', 'Testisin üzerindeki kıvrımlı kanal.'],
    ['İnsanda döllenmenin gerçekleştiği yer', 'Fallop tüpü (yumurta kanalı)', 'Yumurtalık ile rahim arasındaki kanal.'],
    ['Embriyonun tutunup geliştiği organ', 'Rahim (uterus)', 'Kaslı, armut biçimli organ.'],
    ['Yumurtlamayı (ovulasyon) tetikleyen hormon', 'LH', 'Döngünün ortasında ani bir yükselme gösteren hipofiz hormonu.'],
    ['Gebelik testlerinde aranan hormon', 'hCG', 'Plasenta tarafından salgılanır.'],
    ['Ektodermden gelişen sistem', 'Sinir sistemi', 'Deri ile aynı embriyonik tabakadan gelişir.'],
    ['Mezodermden gelişen sistemlerden biri', 'Kas ve iskelet sistemi', 'Orta embriyonik tabakadan gelişir.'],
    ['Endodermden gelişen yapı', 'Sindirim kanalının iç yüzeyi', 'İç embriyonik tabakadan gelişir.']
  ] },
  { topics: [['ayt-bio', 'Komünite ve Popülasyon Ekolojisi']], ask: (k) => `${k} arasındaki ilişki hangisidir?`, pool: ['Amensalizm'], facts: [
    ['Köpek balığı ile ona tutunan vantuz balığı', 'Kommensalizm', 'Biri artıklardan yararlanır, diğeri etkilenmez.'],
    ['Likeni oluşturan alg ile mantar', 'Mutualizm', 'Her iki tür de birlikteliğin yararını görür ve ayrı yaşamakta zorlanır.'],
    ['Baklagil bitkisi ile kökündeki azot bağlayan bakteri', 'Mutualizm', 'Bitki azot, bakteri besin kazanır.'],
    ['Köpek ile pire', 'Parazitizm', 'Biri öbürünün kanıyla beslenip ona zarar verir.'],
    ['İnsan ile bağırsaktaki tenya', 'Parazitizm', 'Konak zarar görür.'],
    ['Aynı otlakta beslenen zebra ile antilop', 'Rekabet', 'Sınırlı aynı kaynak için iki tür.'],
    ['Aslan ile zebra', 'Av–avcı', 'Biri öbürünü yakalayıp yer.']
  ] },
  { topics: [['ayt-bio', 'Komünite ve Popülasyon Ekolojisi'], ['ayt-cog', 'Ekosistemler ve Madde Döngüleri']], ask: (k) => `${k} ne ad verilir?`, facts: [
    ['Birim alandaki birey sayısına', 'Popülasyon yoğunluğu', 'Birey sayısı ÷ alan.'],
    ['Bir ortamın uzun süre taşıyabileceği en fazla birey sayısına', 'Taşıma kapasitesi', 'Büyüme eğrisinin düzleştiği değer.'],
    ['Bir türün ekosistemdeki rolüne ve kaynakları kullanma biçimine', 'Ekolojik niş', 'Türün “mesleği” diye özetlenir.'],
    ['Bir canlının yaşadığı yere', 'Habitat', 'Türün “adresi” diye özetlenir.'],
    ['Aynı alanda yaşayan farklı türlerin popülasyonlarının tümüne', 'Komünite', 'Popülasyondan bir üst düzey.'],
    ['Çıplak kayada likenlerle başlayıp ormana kadar giden değişime', 'Süksesyon', 'Komünitenin zaman içinde basamak basamak değişmesi.']
  ] },
  { topics: [['ayt-bio', 'Canlılık ve Enerji']], ask: (k) => `${k} hücrenin neresinde gerçekleşir?`, facts: [
    ['Fotosentezin ışığa bağımlı tepkimeleri', 'Tilakoit zar', 'Klorofilin bulunduğu, üst üste dizilmiş zar keseleri.'],
    ['Calvin döngüsü (ışıktan bağımsız tepkimeler)', 'Stroma', 'Kloroplastın sıvı ara maddesi.'],
    ['Glikoliz', 'Sitoplazma', 'Oksijenli ve oksijensiz solunumun ortak ilk basamağı; organel gerekmez.'],
    ['Krebs döngüsü', 'Mitokondri matriksi', 'Mitokondrinin iç sıvısı.'],
    ['Oksijenli solunumda elektron taşıma sistemi', 'Mitokondri iç zarı (krista)', 'Kıvrımlı zar; ATP sentaz burada.']
  ] },
  { topics: [['ayt-bio', 'Canlılık ve Enerji']], ask: same, facts: [
    ['Fotosentezde açığa çıkan oksijen hangi molekülden gelir?', 'Su', 'Işık tepkimelerinde parçalanan molekül.', ['Karbon dioksit', 'Glikoz', 'ATP', 'NADPH']],
    ['Oksijenli solunumda son elektron alıcısı hangisidir?', 'Oksijen', 'Elektronları alıp su oluşturan molekül.', ['NAD⁺', 'FAD', 'Karbon dioksit', 'Pirüvat']],
    ['Kas hücresinde oksijen yetersizken pirüvat neye dönüşür?', 'Laktik asit', 'Yorgunluk ve kas ağrısıyla ilişkilendirilen ürün.', ['Etil alkol', 'Asetil CoA', 'Glikojen', 'Üre']],
    ['Mayada oksijensiz solunumun (fermantasyon) ürünleri hangileridir?', 'Etil alkol ve CO₂', 'Hamurun kabarması ve şarap yapımı bu tepkimeye dayanır.', ['Laktik asit ve O₂', 'Su ve O₂', 'Glikoz ve su', 'Amonyak ve CO₂']],
    ['Kemosentez yapan canlılar enerjiyi nereden sağlar?', 'İnorganik maddelerin oksitlenmesinden', 'Işık kullanmazlar; amonyak ya da kükürt gibi maddeleri kullanırlar.', ['Güneş ışığından', 'Başka canlıları yiyerek', 'Ölü organik maddeden', 'Fermantasyondan']]
  ] },
  { topics: [['ayt-bio', 'Bitki Biyolojisi']], ask: (k) => `Bitkilerde ${k} hangisidir?`, facts: [
    ['kökten yapraklara su ve mineral taşıyan iletim dokusu', 'Ksilem (odun borusu)', 'Ölü hücrelerden oluşur; taşıma yukarı doğrudur.'],
    ['yapraktan diğer organlara organik besin taşıyan iletim dokusu', 'Floem (soymuk borusu)', 'Canlı hücrelerden oluşur; iki yönlü taşır.'],
    ['gaz alışverişini ve terlemeyi sağlayan yaprak gözenekleri', 'Stoma', 'İki bekçi hücre arasındaki açıklık.'],
    ['boyca büyümeyi sağlayan doku', 'Uç meristem', 'Kök ve gövde uçlarında bulunur.'],
    ['enine büyümeyi sağlayan doku', 'Kambiyum (yan meristem)', 'Ağaçlarda yıllık halkaları oluşturur.'],
    ['su kaybını azaltan mumsu tabaka', 'Kütikula', 'Yaprağın üst yüzeyinde parlak görünür.'],
    ['ışığa yönelmeden (fototropizma) sorumlu hormon', 'Oksin', 'Gölgede kalan tarafta birikip o tarafı uzatır.'],
    ['meyve olgunlaşmasını hızlandıran gaz hormon', 'Etilen', 'Olgun muz yanındaki meyveleri de olgunlaştırır.'],
    ['kuraklıkta stomaları kapatan hormon', 'Absisik asit', 'Tohum dormansisini de sağlayan stres hormonu.']
  ] },

  /* ================= AYT Edebiyat ================= */
  { topics: [['ayt-edb', 'Şiir Bilgisi: Ölçü, Kafiye, Nazım Biçimleri']], ask: (k) => `${k} nazım biçimi hangisidir?`, facts: [
    ['Divan şiirinde aa, ba, ca… diye kafiyelenen, 5–15 beyitlik, genellikle aşkı işleyen', 'Gazel', 'Son beyitte şairin adının geçtiği biçim.'],
    ['Divan şiirinde bir büyüğü övmek için yazılan, uzun', 'Kaside', 'Nesib, girizgâh, methiye gibi bölümleri olan biçim.'],
    ['Tek dörtlükten oluşan, aaxa kafiyeli, felsefi konuları işleyen; İran’dan geçen', 'Rubai', 'Ömer Hayyam’la ünlenen biçim.'],
    ['Tek dörtlükten oluşan, aaxa kafiyeli; Türklerin Divan edebiyatına kazandırdığı', 'Tuyuğ', 'Aruzun yalnız “fâilâtün fâilâtün fâilün” kalıbıyla yazılır.'],
    ['Her beyti kendi içinde kafiyeli (aa, bb, cc…), uzun hikâyelerin anlatıldığı', 'Mesnevi', 'Leyla ile Mecnun gibi aşk hikâyeleri bu biçimle yazılır.'],
    ['Âşık edebiyatında 11’li hece ölçüsüyle yazılan, lirik', 'Koşma', 'Karacaoğlan’ın en çok kullandığı biçim.'],
    ['Anonim, 7’li hece ölçülü, tek dörtlükten oluşan', 'Mani', 'Genellikle ilk iki dizesi doldurma dize olan biçim.']
  ] },
  { topics: [['ayt-edb', 'Şiir Bilgisi: Ölçü, Kafiye, Nazım Biçimleri']], ask: (k) => `${k} ne ad verilir?`, facts: [
    ['Dize sonlarında aynı görevdeki ek ya da sözcüklerin tekrarına', 'Redif', 'Kafiyeden sonra gelen, yazılışı ve görevi aynı kısım.'],
    ['Dize sonlarında tek ses benzerliğine', 'Yarım kafiye', 'Yalnız bir ses ortak.'],
    ['Dize sonlarında iki ses benzerliğine', 'Tam kafiye', 'İki ses ortak.'],
    ['Dize sonlarında ikiden fazla ses benzerliğine', 'Zengin kafiye', 'Üç ya da daha çok ses ortak.'],
    ['Yazılışı aynı, anlamı farklı sözcüklerle yapılan kafiyeye', 'Cinaslı kafiye', 'Sesteş sözcüklerle kurulur.']
  ] },
  { topics: [['ayt-edb', 'Edebi Türler: Hikâye, Roman, Tiyatro']], ask: (k) => `${k} tür hangisidir?`, pool: ['Vodvil'], facts: [
    ['İnsanların gülünç yönlerini işleyen, güldürürken düşündüren', 'Komedi', 'Molière bu türün ustasıdır.'],
    ['Acıklı olayları yüksek tabakadan kahramanlarla, ağır bir dille işleyen', 'Trajedi', 'Antik Yunan’da doğan, korku ve acıma uyandıran tür.'],
    ['Hayatı hem acı hem gülünç yönleriyle yansıtan', 'Dram', 'Romantizmle gelişen, kuralları gevşeten tür.'],
    ['Geleneksel Türk tiyatrosunda deve derisinden tasvirlerin perdeye yansıtıldığı', 'Karagöz (gölge oyunu)', 'Hacivat ile birlikte anılan oyun.'],
    ['Meydanda, dekorsuz, seyircinin ortasında oynanan geleneksel oyun', 'Orta oyunu', 'Kavuklu ile Pişekâr’ın başrolde olduğu oyun.'],
    ['Tek bir anlatıcının taklitlerle hikâye anlattığı geleneksel gösteri', 'Meddah', 'Elinde mendil ve sopayla anlatan sanatçı.']
  ] },
  { topics: [['ayt-edb', 'Edebi Türler: Hikâye, Roman, Tiyatro']], ask: (k) => `${k} hikâye anlayışı hangisidir?`, pool: ['Modernist hikâye', 'Masal', 'Fabl'], facts: [
    ['Serim–düğüm–çözüm planına bağlı, merak unsuru güçlü olan; Maupassant tarzı', 'Olay hikâyesi', 'Ömer Seyfettin bu anlayışın Türkçedeki ustasıdır.'],
    ['Bir kesiti anlatan, belirgin bir çözümü olmayan; Çehov tarzı', 'Durum hikâyesi', 'Sait Faik bu anlayışın Türkçedeki ustasıdır.']
  ] },
  { topics: [['ayt-edb', 'Öğretici Metinler']], ask: (k) => `${k} yazı türü hangisidir?`, facts: [
    ['Yazarın kendi hayatını anlattığı', 'Otobiyografi', 'Yazar ile anlatılan kişi aynıdır.'],
    ['Başka birinin hayatının belgelere dayanarak anlatıldığı', 'Biyografi', 'Ünlü bir kişinin yaşamı ve eserleri anlatılır.'],
    ['Gezilip görülen yerlerin izlenimlerle anlatıldığı', 'Gezi yazısı', 'Evliya Çelebi’nin Seyahatname’si bu türdedir.'],
    ['Olayların gün gün, tarih atılarak yazıldığı', 'Günlük', 'Yazarın kendisi için tuttuğu kayıtlar.'],
    ['Yazarın tanık olduğu olayları yıllar sonra anlattığı', 'Anı (hatıra)', 'Geçmişte yaşanmış ve tanık olunmuş olaylar.'],
    ['Bir konuyu kanıtlama kaygısı olmadan, samimi bir dille ele alan', 'Deneme', 'Montaigne bu türün öncüsüdür.'],
    ['Bir düşünceyi kanıtlara dayanarak savunan ciddi gazete yazısı', 'Makale', 'Bilimsel bir dil ve kanıt gerektirir.'],
    ['Güncel olayları kısa, sohbet havasında yorumlayan köşe yazısı', 'Fıkra (köşe yazısı)', 'Gazetelerde her gün aynı köşede çıkar.']
  ] },
  { topics: [['ayt-edb', 'İslamiyet Öncesi ve Geçiş Dönemi Türk Edebiyatı']], ask: (k) => `“${k}” adlı eserin yazarı kimdir?`, pool: ['Yunus Emre', 'Ali Şir Nevai'], facts: [
    ['Kutadgu Bilig', 'Yusuf Has Hacip', 'Karahanlı döneminde, mesnevi biçiminde yazılmış ilk siyasetname.'],
    ['Divanü Lügati’t-Türk', 'Kaşgarlı Mahmut', 'Araplara Türkçe öğretmek için yazılan sözlük.'],
    ['Atabetü’l-Hakayık', 'Edip Ahmet Yükneki', 'Ahlak öğütleri veren, dörtlüklerle yazılmış eser.'],
    ['Divan-ı Hikmet', 'Ahmet Yesevi', 'Tasavvufi şiirlerin toplandığı eser.']
  ] },
  { topics: [['ayt-edb', 'Divan Edebiyatı']], ask: (k) => `“${k}” adlı eserin yazarı kimdir?`, facts: [
    ['Leyla vü Mecnun', 'Fuzuli', 'Azeri Türkçesiyle yazan, “Şikâyetname”nin de yazarı.'],
    ['Hüsn ü Aşk', 'Şeyh Galip', 'Divan edebiyatının son büyük şairi, Mevlevi.'],
    ['Hayriyye', 'Nabi', 'Oğluna öğütler veren, hikemi şiirin temsilcisi.'],
    ['Muhakemetü’l-Lügateyn', 'Ali Şir Nevai', 'Türkçenin Farsçadan üstün olduğunu savunan Çağatay şairi.'],
    ['Seyahatname', 'Evliya Çelebi', 'On ciltlik gezi kitabının yazarı.'],
    ['Harname', 'Şeyhi', 'Bir eşek üzerinden toplumu eleştiren, 15. yüzyıl şairi.'],
    ['Vesiletü’n-Necat (Mevlid)', 'Süleyman Çelebi', 'Peygamberin doğumunu anlatan eserin şairi.']
  ] },

  /* ================= TYT Coğrafya ================= */
  { topics: [['tyt-cog', 'Dünya’nın Şekli ve Hareketleri']], ask: (k) => `${k} hangi tarihtedir?`, facts: [
    ['Kuzey Yarım Küre’de en uzun gündüzün yaşandığı gün', '21 Haziran', 'Güneş ışınları Yengeç Dönencesi’ne dik gelir.'],
    ['Kuzey Yarım Küre’de en uzun gecenin yaşandığı gün', '21 Aralık', 'Güneş ışınları Oğlak Dönencesi’ne dik gelir.'],
    ['İlkbahar ekinoksu (gece–gündüz eşitliği)', '21 Mart', 'Güneş ışınları Ekvator’a dik gelir; kuzeyde bahar başlar.'],
    ['Sonbahar ekinoksu (gece–gündüz eşitliği)', '23 Eylül', 'Güneş ışınları Ekvator’a dik gelir; kuzeyde sonbahar başlar.'],
    ['Dünya’nın Güneş’e en yakın olduğu konum (günberi)', '3 Ocak', 'Kuzey Yarım Küre’de kış yaşanırken.'],
    ['Dünya’nın Güneş’e en uzak olduğu konum (günöte)', '4 Temmuz', 'Kuzey Yarım Küre’de yaz yaşanırken.']
  ] },
  { topics: [['tyt-cog', 'Coğrafi Konum']], ask: (k) => `${k} Türkiye’nin hangi komşusudur?`, facts: [
    ['Türkiye ile en uzun kara sınırına sahip olan', 'Suriye', 'Güneydoğu sınırımızın büyük kısmı.'],
    ['Türkiye ile en kısa kara sınırına sahip olan', 'Azerbaycan (Nahçıvan)', 'Iğdır’daki Dilucu kapısıyla bağlanan komşu.'],
    ['Kapıkule Sınır Kapısı ile bağlandığımız', 'Bulgaristan', 'Edirne’de, Avrupa’ya açılan en işlek kapı.'],
    ['Sarp Sınır Kapısı ile bağlandığımız', 'Gürcistan', 'Artvin’de, Karadeniz kıyısında.'],
    ['Gürbulak Sınır Kapısı ile bağlandığımız', 'İran', 'Ağrı’da, Doğubayazıt yakınında.'],
    ['Meriç Nehri’nin doğal sınır oluşturduğu', 'Yunanistan', 'Trakya’da batı sınırımız.'],
    ['Habur Sınır Kapısı ile bağlandığımız', 'Irak', 'Şırnak’ta, Silopi yakınında.']
  ] },
  { topics: [['tyt-cog', 'Bölgeler ve Ulaşım']], ask: (k) => `${k} Türkiye’nin hangi coğrafi bölgesindedir?`, facts: [
    ['Ergene Havzası', 'Marmara Bölgesi', 'Trakya’da, Meriç’in kolunun suladığı havza.'],
    ['Göller Yöresi', 'Akdeniz Bölgesi', 'Isparta ve Burdur çevresi.'],
    ['Harran Ovası', 'Güneydoğu Anadolu Bölgesi', 'Şanlıurfa’da, GAP ile sulanan ova.'],
    ['Erzurum–Kars Platosu', 'Doğu Anadolu Bölgesi', 'Büyükbaş hayvancılığın yaygın olduğu yüksek düzlükler.'],
    ['Menteşe Yöresi', 'Ege Bölgesi', 'Muğla çevresi; girintili çıkıntılı kıyılar.'],
    ['Canik Dağları', 'Karadeniz Bölgesi', 'Samsun çevresindeki dağlar.'],
    ['Obruk Platosu', 'İç Anadolu Bölgesi', 'Konya’nın kuzeydoğusundaki karstik düzlük.']
  ] },

  /* ================= AYT Coğrafya ================= */
  { topics: [['ayt-cog', 'Nüfus Politikaları']], ask: (k) => `${k} hangi yıl gerçekleşmiştir?`, pool: ['1950', '1980'], facts: [
    ['Cumhuriyet döneminin ilk genel nüfus sayımı', '1927', 'Cumhuriyetin ilanından dört yıl sonra.'],
    ['Nüfus artışını yavaşlatmayı amaçlayan Nüfus Planlaması Kanunu’nun kabulü', '1965', 'Doğumu teşvik eden politikadan vazgeçildiği yıl.'],
    ['Adrese dayalı nüfus kayıt sistemine geçiş', '2007', 'Sayımların kayıtlardan yapılmaya başladığı yıl.'],
    ['Türkiye ile Yunanistan arasında nüfus mübadelesi sözleşmesi', '1923', 'Lozan görüşmeleri sırasında.']
  ] },
  { topics: [['ayt-cog', 'Nüfus Politikaları'], ['ayt-cog', 'Türkiye’de Nüfus ve Yerleşme']], ask: (k) => `${k} hangisidir?`, facts: [
    ['Nüfusu yaşlanan ülkelerin genellikle uyguladığı politika', 'Doğumu teşvik etmek', 'Çalışma çağındaki nüfusun azalmasından kaygılanırlar.', ['Doğumu sınırlamak', 'Göçü tamamen yasaklamak', 'Emeklilik yaşını düşürmek', 'Kent nüfusunu artırmak']],
    ['Nüfusu hızla artan, kaynakları yetersiz ülkelerin genellikle uyguladığı politika', 'Doğumu sınırlamak', 'Eğitim ve sağlık hizmetlerine yetişememekten kaygılanırlar.', ['Doğumu teşvik etmek', 'Göçmen işçi çağırmak', 'Evlilik yaşını düşürmek', 'Aile yardımlarını artırmak']],
    ['Nüfusun kendini yenileyebilmesi için gereken yaklaşık toplam doğurganlık hızı', '2,1', 'Anne–baba yerine iki çocuk ile çocuk ölümleri için küçük bir pay.', ['1,1', '1,5', '3,5', '4,0']],
    ['Bağımlı nüfusu oluşturan yaş grupları', '0–14 ve 65 yaş üstü', 'Çalışma çağının dışındaki gruplar.', ['15–64 yaş', '15–24 yaş', '25–64 yaş', '0–24 yaş']]
  ] },
  { topics: [['ayt-cog', 'Türkiye’de Ulaşım, Ticaret ve Turizm']], ask: (k) => `${k} hangi ildedir?`, facts: [
    ['Pamukkale travertenleri', 'Denizli', 'Hierapolis antik kenti de buradadır.'],
    ['Peri bacaları', 'Nevşehir', 'Kapadokya’nın merkezi.'],
    ['Nemrut Dağı’ndaki dev heykeller', 'Adıyaman', 'Kommagene Krallığı’ndan kalmadır.'],
    ['Göbeklitepe', 'Şanlıurfa', 'Bilinen en eski tapınak alanı.'],
    ['Efes Antik Kenti', 'İzmir', 'Selçuk ilçesinde.'],
    ['Sümela Manastırı', 'Trabzon', 'Maçka’da, sarp bir kayalığın yamacında.'],
    ['Ani Harabeleri', 'Kars', 'Arpaçay kıyısında, “bin bir kilise şehri”.'],
    ['Ölüdeniz', 'Muğla', 'Fethiye’de, yamaç paraşütüyle bilinen koy.']
  ] },
  { topics: [['ayt-cog', 'Kültür Bölgeleri ve Küresel Ortam']], ask: (k) => `${k} uygarlığı hangi bölgede gelişmiştir?`, facts: [
    ['Mezopotamya', 'Dicle ile Fırat arasında', 'Adı “iki nehir arası” anlamına gelir.'],
    ['Mısır', 'Nil Vadisi’nde', 'Taşkınların bıraktığı verimli toprakla beslenen uygarlık.'],
    ['Eski Hint', 'İndus Vadisi’nde', 'Mohenjo-daro ve Harappa kentleri.'],
    ['Eski Çin', 'Huang He (Sarı Irmak) Vadisi’nde', 'Rengini taşıdığı lösten alan ırmak.'],
    ['Maya', 'Orta Amerika’da (Yukatan)', 'Basamaklı piramitleri ve takvimiyle bilinir.'],
    ['İnka', 'And Dağları’nda', 'Machu Picchu’yu yapan uygarlık.']
  ] },
  { topics: [['ayt-cog', 'Ülkeler ve Bölgeler']], ask: (k) => `${k} ülke hangisidir?`, facts: [
    ['Yüzölçümü en büyük', 'Rusya', 'Avrupa ve Asya’ya yayılan, on bir saat dilimli ülke.'],
    ['Kahve üretiminde dünya birincisi olan', 'Brezilya', 'Güney Amerika’nın en büyük ülkesi.'],
    ['Fiyortlarıyla bilinen İskandinav', 'Norveç', 'Buzulların aşındırdığı derin koylar; başkenti Oslo.'],
    ['Nil’in Akdeniz’e döküldüğü', 'Mısır', 'Nüfusunun çoğu nehir kıyısında yaşar.'],
    ['Pirinç üretiminde dünya birincisi olan', 'Çin', 'Muson ikliminin etkili olduğu Doğu Asya ülkesi.'],
    ['Silikon Vadisi’nin bulunduğu', 'ABD', 'Kaliforniya’da teknoloji şirketlerinin merkezi.'],
    ['Dünyanın en büyük kanıtlanmış petrol rezervlerinden birine sahip, Arap Yarımadası’ndaki', 'Suudi Arabistan', 'OPEC’in kurucularından; başkenti Riyad.']
  ] },

  /* ================= Felsefe ================= */
  { topics: [['tyt-fel', 'Bilgi Felsefesi']], ask: (k) => `${k} görüş hangisidir?`, facts: [
    ['Bilginin kaynağını akıl olarak gören', 'Rasyonalizm', 'Descartes ve Leibniz bu görüştedir.'],
    ['Bilginin kaynağını deney ve gözlem olarak gören', 'Empirizm', 'Locke’un “boş levha” benzetmesiyle bilinir.'],
    ['Bilginin kaynağını sezgi olarak gören', 'Entüisyonizm', 'Bergson ve Gazali bu görüştedir.'],
    ['Doğru bilginin ölçütünü “işe yarama” olarak gören', 'Pragmatizm', 'William James ve John Dewey bu görüştedir.'],
    ['Kesin bilgiye ulaşılamayacağını savunan', 'Septisizm (şüphecilik)', 'Pyrrhon ve Gorgias bu görüştedir.'],
    ['Bilginin yalnız gözlenebilir olgulardan elde edileceğini savunan', 'Pozitivizm', 'Auguste Comte’un kurduğu görüş.'],
    ['Bilginin akıl ile deneyin birlikte çalışmasıyla oluştuğunu savunan', 'Kritisizm (eleştiricilik)', 'Kant’ın görüşü.']
  ] },
  { topics: [['tyt-fel', 'Sanat Felsefesi']], ask: (k) => `“${k}” görüşü hangi düşünüre aittir?`, facts: [
    ['Sanat, idealar dünyasının kopyası olan doğanın taklidinin taklididir', 'Platon', 'Akademia’yı kuran, sanatçıyı ideal devletten uzak tutan filozof.'],
    ['Trajedi, korku ve acıma yoluyla ruhu arındırır (katarsis)', 'Aristoteles', '“Poetika”nın yazarı.'],
    ['Güzel, çıkar gözetmeden hoşa gidendir', 'Kant', '“Yargı Gücünün Eleştirisi”nin yazarı.'],
    ['Sanat, Mutlak Tin’in duyusal görünüşüdür', 'Hegel', 'Diyalektik yöntemle tanınan Alman idealist.'],
    ['Sanat bir oyundur; insan oynadığı yerde tam insandır', 'Schiller', 'Alman şair ve düşünür.'],
    ['Sanat sezgi ve ifadedir', 'Croce', 'İtalyan estetikçi.']
  ] },
  { topics: [['tyt-fel', 'Din Felsefesi']], ask: (k) => `${k} Tanrı’nın varlığı için öne sürülen hangi kanıttır?`, pool: ['Mucize kanıtı'], facts: [
    ['Evrendeki düzen ve amaçlılıktan bir düzenleyiciye ulaşan', 'Teleolojik (düzen) kanıt', 'Saat ve saatçi benzetmesiyle anlatılır.'],
    ['Her şeyin bir nedeni olduğundan ilk nedene ulaşan', 'Kozmolojik kanıt', 'Nedenler zinciri sonsuza gidemez, der.'],
    ['En yetkin varlık kavramının kendisinden varlığa ulaşan', 'Ontolojik kanıt', 'Anselmus ve Descartes’ın kanıtı.'],
    ['İnsandaki ahlak yasasından bir yasa koyucuya ulaşan', 'Ahlak kanıtı', 'Kant’ın pratik akla dayanan kanıtı.']
  ] },

  /* ================= Din Kültürü ================= */
  { topics: [['tyt-din', 'Ahlak ve Değerler']], ask: (k) => `“${k}” anlamına gelen ahlaki kavram hangisidir?`, facts: [
    ['Başkasının ihtiyacını kendi ihtiyacından önde tutmak', 'İsar', 'Diğerkâmlığın en yüksek derecesi.'],
    ['Elindekiyle yetinmek', 'Kanaat', 'Hırsın karşıtı olan erdem.'],
    ['Alçak gönüllü olmak', 'Tevazu', 'Kibrin karşıtı olan erdem.'],
    ['Utanma duygusu; kötü işten çekinmek', 'Hayâ', 'İmandan bir parça sayılan duygu.'],
    ['Doğru sözlü olmak', 'Sıdk', 'Yalanın karşıtı olan erdem.'],
    ['Allah’a karşı gelmekten sakınmak', 'Takva', 'Kur’an’da en çok övülen erdemlerden biri.'],
    ['Bir işi yalnız Allah rızası için, samimiyetle yapmak', 'İhlas', 'Riyanın (gösterişin) karşıtı.']
  ] },
  { topics: [['tyt-din', 'Allah ve İnsan İlişkisi'], ['tyt-din', 'Bilgi ve İnanç']], ask: (k) => `Allah’ın ${k} anlamına gelen sıfatı hangisidir?`, facts: [
    ['her şeyi bilmesi', 'İlim', 'Gizli ve açık her şeyi kapsayan bilgi.'],
    ['her şeye gücünün yetmesi', 'Kudret', 'Sonsuz güç.'],
    ['dilediğini dilediği gibi yapması', 'İrade', 'Dilemek, seçmek.'],
    ['her şeyi işitmesi', 'Semi', 'Sesli sessiz her şeyi duyması.'],
    ['her şeyi görmesi', 'Basar', 'Gizli açık her şeyi görmesi.'],
    ['yaratması, yoktan var etmesi', 'Tekvin', 'Yaratıcılık sıfatı.'],
    ['varlığının başlangıcı olmaması', 'Kıdem', 'Ezelî olması.'],
    ['varlığının sonu olmaması', 'Beka', 'Ebedî olması.'],
    ['tek olması, eşi ve ortağı olmaması', 'Vahdaniyet', 'Tevhidin temelini oluşturan sıfat.']
  ] },
  { topics: [['ayt-din', 'Kur’an’da Bazı Kavramlar']], ask: (k) => `“${k}” anlamına gelen kavram hangisidir?`, facts: [
    ['Allah’ın birliğine inanmak', 'Tevhid', 'İslam inancının temeli.'],
    ['Elinden geleni yapıp sonucu Allah’a bırakmak', 'Tevekkül', 'Çalışmadan beklemek değil; çabadan sonra güvenmek.'],
    ['Allah’a ortak koşmak', 'Şirk', 'Tevhidin karşıtı.'],
    ['Allah’ı görüyormuş gibi kulluk etmek; iyiliği en güzel biçimde yapmak', 'İhsan', 'Cibril hadisinde tanımlanan kavram.'],
    ['İmanla birlikte yapılan iyi ve yararlı iş', 'Salih amel', 'Kur’an’da çoğu kez imanla birlikte anılır.'],
    ['Allah’ın her şeyi bir ölçüye göre önceden bilip belirlemesi', 'Kader', 'Kaza ile birlikte anılan kavram.'],
    ['Belirlenen şeylerin zamanı gelince gerçekleşmesi', 'Kaza', 'Kaderin gerçekleşmesi.'],
    ['Peygamberler aracılığıyla Allah’ın buyruklarını bildirmesi', 'Vahiy', 'Cebrail aracılığıyla gelir.']
  ] },
  { topics: [['ayt-din', 'Dünya ve Ahiret']], ask: (k) => `${k} ne ad verilir?`, facts: [
    ['Ölümden kıyamete kadar geçen kabir hayatına', 'Berzah', 'Dünya ile ahiret arasındaki “perde”.'],
    ['Ölülerin yeniden diriltilmesine', 'Ba’s', 'Kıyametten sonra yeniden yaratılış.'],
    ['Diriltilen insanların bir alanda toplanmasına', 'Haşir', 'Mahşer yerinde toplanma.'],
    ['Amellerin tartılmasına', 'Mizan', 'İyilik ve kötülüklerin ölçüldüğü adalet terazisi.'],
    ['Cehennemin üzerinden geçileceğine inanılan köprüye', 'Sırat', 'Herkesin geçeceği yol.'],
    ['Peygamberin ve salihlerin, Allah’ın izniyle günahkârlar için aracılık etmesine', 'Şefaat', 'Ahirette yapılacak yardım dileği.'],
    ['İsrafil’in sûra üflemesiyle evrenin düzeninin bozulmasına', 'Kıyamet', 'Dünya hayatının sona ermesi.']
  ] },
  { topics: [['ayt-din', 'İslam ve Bilim']], ask: (k) => `${k} Müslüman bilgin kimdir?`, facts: [
    ['Cebir biliminin kurucusu sayılan, algoritma sözcüğüne adını veren', 'Harezmi', 'Abbasiler döneminde Beytü’l-Hikme’de çalıştı.'],
    ['“El-Kanun fi’t-Tıb” adlı tıp kitabının yazarı', 'İbn Sina', 'Avrupa’da Avicenna adıyla bilinen hekim ve filozof.'],
    ['“Kitabü’l-Menazır” ile optik bilimine yön veren', 'İbnü’l-Heysem', 'Görmenin ışığın gözden çıkmasıyla değil, göze girmesiyle olduğunu gösterdi.'],
    ['Küçük kan dolaşımını ilk kez açıklayan', 'İbnü’n-Nefis', '13. yüzyılda Şam ve Kahire’de çalışan hekim.'],
    ['Semerkant’ta gözlemevi kurduran hükümdar ve gökbilimci', 'Uluğ Bey', 'Timur’un torunu.'],
    ['1513’te Amerika’yı da gösteren dünya haritasını çizen denizci', 'Piri Reis', '“Kitab-ı Bahriye”nin yazarı.'],
    ['İstanbul’da rasathane kuran Osmanlı gökbilimcisi', 'Takiyüddin', 'III. Murat döneminde Tophane’de çalıştı.']
  ] },
  { topics: [['ayt-din', 'Güncel Dini Meseleler']], ask: (k) => `“${k}” anlamına gelen kavram hangisidir?`, facts: [
    ['Dinde yeri olmadığı hâlde sonradan dine eklenen uygulama', 'Bidat', 'Din adına uydurulan yenilik.'],
    ['Akıl ve bilgiye dayanmayan, dine sonradan karışmış inanış', 'Hurafe', 'Batıl inanç olarak da bilinir.'],
    ['İnsanların dinî duygularını kendi çıkarı için kullanmak', 'Din istismarı', 'Dini kişisel ya da siyasi kazanca alet etmek.'],
    ['Bir görüşü tek doğru sayıp başka görüşlere kapalı olmak', 'Taassup (bağnazlık)', 'Hoşgörünün karşıtı.'],
    ['Dinî konularda delillere dayanarak hüküm çıkarma çabası', 'İçtihat', 'Yeni sorunlara çözüm bulmak için yapılır.'],
    ['Bir konuda dinî görüş bildirme', 'Fetva', 'Müftülerin verdiği yanıt.']
  ] }
];
