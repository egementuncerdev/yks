/* Bilgi tablosu üreticileri: her tablo bir konunun kesin bilgilerini tutar ([soru anahtarı, doğru cevap, ipucu]).
   Üretici bir bilgi seçer; yanlış şıklar aynı tablonun öteki cevaplarından (ve gerekirse havuzdan) gelir.
   Kural: bir anahtarın doğru cevabı tektir; tablodaki öteki cevaplar o anahtar için yanlış olmalı.
   İpucu cevabı söylemez (test kontrol eder). Bir tablo birden çok konuya bağlanabilir. */
import { choices, pick, shuffle, type Generator } from './core';
import { TABLES2 } from './facts2';
import { TABLES3 } from './facts3';

export type Fact = [key: string, answer: string, hint: string, wrong?: string[]];
export interface Table { topics: [subjectId: string, topic: string][]; ask: (k: string) => string; facts: Fact[]; pool?: string[]; why?: (k: string, a: string) => string }

const W = (s: string, w: string) => `“${s}” cümlesinde “${w}” sözcüğünün türü hangisidir?`;
const O = (s: string, w: string) => `“${s}” cümlesinde “${w}” hangi ögedir?`;
const F = (s: string, w: string) => `“${s}” cümlesindeki “${w}” sözcüğü için hangisi doğrudur?`;
const same = (k: string) => k;

const TABLES1: Table[] = [
  /* ================= TYT Türkçe ================= */
  { topics: [['tyt-tr', 'İsim, Sıfat ve Zamir']], ask: same, pool: ['İsim', 'Sıfat', 'Zamir', 'Zarf', 'Edat', 'Bağlaç'], facts: [
    [W('Kırmızı elbiseyi çok beğendi.', 'kırmızı'), 'Sıfat', 'Sözcük hemen arkasındaki isme bir nitelik katıyor: “Nasıl elbise?”'],
    [W('Kırmızılar bu yıl çok moda.', 'kırmızılar'), 'İsim', 'Arkasında nitelediği bir sözcük yok; çoğul eki alıp bir varlığın adı gibi kullanılmış.'],
    [W('Bunu kim getirdi?', 'bunu'), 'Zamir', 'İşaret sözcüğü bir ismin önünde değil; ek alıp bir varlığın yerini tutuyor.'],
    [W('Bu kitabı dün bitirdim.', 'bu'), 'Sıfat', 'İşaret sözcüğü hemen arkasındaki ismi gösteriyor.'],
    [W('Kimse bana haber vermedi.', 'kimse'), 'Zamir', 'Belirsiz bir kişinin yerini tutuyor; arkasında nitelediği bir isim yok.'],
    [W('Bazı öğrenciler erken geldi.', 'bazı'), 'Sıfat', 'Arkasındaki ismi belirsiz olarak belirtiyor.'],
    [W('Üç kalem aldım.', 'üç'), 'Sıfat', 'Sayı bildiren sözcük, ismin önünde onun miktarını belirtiyor.'],
    [W('Ankara Türkiye’nin başkentidir.', 'Ankara'), 'İsim', 'Tek bir varlığın özel adı.'],
    [W('Sen de bizimle gel.', 'sen'), 'Zamir', 'Konuşulan kişinin yerini tutan sözcük.'],
    [W('Hangi yolu seçtin?', 'hangi'), 'Sıfat', 'Soruyu ismin önünde, o ismi belirterek soruyor.']
  ] },
  { topics: [['tyt-tr', 'Zarf, Edat, Bağlaç, Ünlem']], ask: same, pool: ['Zarf', 'Edat', 'Bağlaç', 'Ünlem', 'Sıfat', 'Zamir'], facts: [
    [W('Çocuk hızlı koştu.', 'hızlı'), 'Zarf', 'Sözcük fiili niteliyor: “Nasıl koştu?”'],
    [W('Yarın sinemaya gideceğiz.', 'yarın'), 'Zarf', 'Fiilin zamanını bildiriyor.'],
    [W('Senin için çok çalıştım.', 'için'), 'Edat', 'Tek başına anlamı yok; kendinden önceki sözle eylem arasında amaç ilgisi kuruyor, çıkarınca cümle bozuluyor.'],
    [W('Ali ile Ayşe sınıfa girdi.', 'ile'), 'Bağlaç', 'Yerine “ve” koyunca anlam bozulmuyor.'],
    [W('Çok çalıştı ama kazanamadı.', 'ama'), 'Bağlaç', 'İki yargıyı karşıtlık ilgisiyle birbirine bağlıyor.'],
    [W('Eyvah, otobüsü kaçırdık!', 'eyvah'), 'Ünlem', 'Ani bir duyguyu (üzüntü, şaşkınlık) dile getiriyor.'],
    [W('Misafirler içeri girdi.', 'içeri'), 'Zarf', 'Ek almadan fiile yön bildiriyor.'],
    [W('Ona göre bu iş kolay.', 'göre'), 'Edat', 'Kendinden önceki sözle “bakış açısı” ilgisi kuruyor; tek başına anlamı yok.'],
    [W('Çok güzel bir gün geçirdik.', 'çok'), 'Zarf', 'Bir sıfatın (güzel) derecesini bildiriyor.'],
    [W('Hem okuyor hem çalışıyor.', 'hem'), 'Bağlaç', 'Eşli kullanılarak iki eylemi birbirine bağlıyor.']
  ] },
  { topics: [['tyt-tr', 'Fiilde Çatı']], ask: (k) => `“${k}” cümlesinin yüklemi özneye göre hangi çatıdadır?`, pool: ['Etken', 'Edilgen', 'Dönüşlü', 'İşteş', 'Çatı özelliği yok (isim cümlesi)'], facts: [
    ['Ali mektubu dün yazdı.', 'Etken', 'Eylemi yapan belli: “Kim yazdı?”'],
    ['Mektup dün yazıldı.', 'Edilgen', 'Eylemi kimin yaptığı belli değil; mektup eylemden etkileniyor.'],
    ['Kapılar erkenden kilitlendi.', 'Edilgen', 'Kim kilitledi? Belli değil; fiile “-l” eki gelmiş.'],
    ['Çocuk aynanın karşısında giyindi.', 'Dönüşlü', 'Özne eylemi kendi üzerine yapıyor: kendini giydirdi.'],
    ['Başarısıyla övündü.', 'Dönüşlü', 'Kendini övdü anlamında: eylem özneye dönüyor.'],
    ['İki arkadaş uzun uzun tartıştı.', 'İşteş', 'Eylem karşılıklı yapılıyor; “-ş” eki var.'],
    ['Kuşlar bahçede ötüştü.', 'İşteş', 'Eylem birlikte yapılıyor; “-ş” eki var.'],
    ['Annem yemeği erkenden hazırladı.', 'Etken', 'Eylemi yapan kişi cümlede belli.'],
    ['Sorular dikkatle çözüldü.', 'Edilgen', 'Soruları kimin çözdüğü söylenmiyor; fiile “-l” eki gelmiş.']
  ] },
  { topics: [['tyt-tr', 'Cümlenin Ögeleri']], ask: same, pool: ['Özne', 'Yüklem', 'Belirtili nesne', 'Belirtisiz nesne', 'Dolaylı tümleç', 'Zarf tümleci'], facts: [
    [O('Kitabı masaya bıraktım.', 'kitabı'), 'Belirtili nesne', '“Neyi bıraktım?” sorusunun cevabı; “-ı” eki almış.'],
    [O('Kitabı masaya bıraktım.', 'masaya'), 'Dolaylı tümleç', '“Nereye bıraktım?” sorusunun cevabı; yönelme eki almış.'],
    [O('Annem sabah erkenden kalktı.', 'annem'), 'Özne', '“Kim kalktı?” sorusunun cevabı.'],
    [O('Annem sabah erkenden kalktı.', 'sabah erkenden'), 'Zarf tümleci', '“Ne zaman kalktı?” sorusunun cevabı.'],
    [O('Bahçede çiçek topladık.', 'çiçek'), 'Belirtisiz nesne', '“Ne topladık?” sorusunun cevabı; hâl eki almamış.'],
    [O('Bahçede çiçek topladık.', 'bahçede'), 'Dolaylı tümleç', '“Nerede?” sorusunun cevabı; bulunma eki almış.'],
    [O('Öğrenciler sessizce dinledi.', 'sessizce'), 'Zarf tümleci', '“Nasıl dinledi?” sorusunun cevabı.'],
    [O('Bu ev çok eski.', 'çok eski'), 'Yüklem', 'Cümlenin yargısını taşıyan, isim soylu sözcük grubu.'],
    [O('Kardeşime bir hediye aldım.', 'kardeşime'), 'Dolaylı tümleç', '“Kime aldım?” sorusunun cevabı.'],
    [O('Okuldan yeni döndüm.', 'okuldan'), 'Dolaylı tümleç', '“Nereden döndüm?” sorusunun cevabı; ayrılma eki almış.']
  ] },
  { topics: [['tyt-tr', 'Cümle Türleri']], ask: (k) => `“${k}” cümlesi yapısına göre hangi türdedir?`, pool: ['Basit cümle', 'Şartlı birleşik cümle', 'Sıralı cümle', 'Bağlı cümle', '“Ki”li birleşik cümle', 'İç içe birleşik cümle'], facts: [
    ['Kitabımı dün akşam bitirdim.', 'Basit cümle', 'Tek yargı, tek yüklem var.'],
    ['Erken gelirsen birlikte çıkarız.', 'Şartlı birleşik cümle', 'Yan cümle “-sa, -se” ekiyle kurulmuş.'],
    ['Eve geldi, yemeğini yedi, uyudu.', 'Sıralı cümle', 'Bağımsız yargılar virgülle art arda sıralanmış.'],
    ['Çok çalıştı ama kazanamadı.', 'Bağlı cümle', 'İki bağımsız yargı bir bağlaçla bağlanmış.'],
    ['Duydum ki başka şehre taşınıyormuşsun.', '“Ki”li birleşik cümle', 'İki yargıyı “ki” bağlıyor.'],
    ['“Yarın geleceğim.” dedi.', 'İç içe birleşik cümle', 'Tırnak içindeki cümle, başka bir cümlenin ögesi olmuş.'],
    ['Hava soğudu, yollar buz tuttu.', 'Sıralı cümle', 'İki bağımsız yargı virgülle ayrılmış, bağlaç yok.'],
    ['Hem okuyor hem çalışıyor.', 'Bağlı cümle', 'Yargılar eşli bir bağlaçla bağlanmış.']
  ] },
  { topics: [['tyt-tr', 'Anlatım Bozuklukları']], ask: (k) => `“${k}” cümlesindeki anlatım bozukluğunun nedeni hangisidir?`, pool: ['Gereksiz sözcük kullanımı', 'Anlamca çelişen sözcükler', 'Tamlama yanlışı', 'Özne – yüklem uyumsuzluğu', 'Ortak öge yanlışı'], facts: [
    ['Toplantıya yaklaşık kırk-elli kişi katıldı.', 'Gereksiz sözcük kullanımı', '“Yaklaşık” ile “kırk-elli” aynı belirsizliği iki kez veriyor.'],
    ['Kesinlikle yarın gelebilir.', 'Anlamca çelişen sözcükler', 'Kesinlik bildiren sözcük, olasılık bildiren yüklemle birlikte kullanılmış.'],
    ['Bu kitabı yazarı çok ünlü.', 'Tamlama yanlışı', 'Tamlayana gelmesi gereken ilgi eki eksik.'],
    ['Öğrenciler sınava çok iyi hazırlandım.', 'Özne – yüklem uyumsuzluğu', 'Özne üçüncü çoğul kişi, yüklemin kişi eki birinci tekil.'],
    ['Çocuklarını hem seviyor hem güveniyor.', 'Ortak öge yanlışı', 'Ortak verilen ögeyi ikinci yüklemle ayrı söyle: kulağa doğru geliyor mu?'],
    ['Aldığım ürünü geri iade etmek istiyorum.', 'Gereksiz sözcük kullanımı', '“İade” sözcüğünün anlamında zaten “geri” vardır.'],
    ['Herhâlde onu kesinlikle tanıyorum.', 'Anlamca çelişen sözcükler', 'Tahmin bildiren sözcük ile kesinlik bildiren sözcük yan yana.']
  ] },
  { topics: [['tyt-tr', 'Fiil, Ek Fiil ve Fiilimsi']], ask: same, pool: ['İsim-fiil', 'Sıfat-fiil', 'Zarf-fiil', 'Çekimli fiil', 'Kalıcı isim (fiilimsi değil)'], facts: [
    [F('Gülerek içeri girdi.', 'gülerek'), 'Zarf-fiil', '“-arak” eki eylemi bir zarf gibi ana fiile bağlıyor.'],
    [F('Okunan kitapları rafa koydu.', 'okunan'), 'Sıfat-fiil', '“-an” eki almış; arkasındaki ismi niteliyor.'],
    [F('Yüzmeyi çok seviyorum.', 'yüzmeyi'), 'İsim-fiil', '“-me” eki eylemi isim gibi kullandırıyor.'],
    [F('Eve gelince beni ara.', 'gelince'), 'Zarf-fiil', '“-ince” eki zaman bildiriyor.'],
    [F('Gelecek hafta tatile çıkıyoruz.', 'gelecek'), 'Sıfat-fiil', '“-ecek” eki almış; arkasındaki ismi niteliyor.'],
    [F('Onun gülüşü herkesi etkiledi.', 'gülüşü'), 'İsim-fiil', '“-ış” eki eylemi isimleştiriyor.'],
    [F('Akşam dondurma yedik.', 'dondurma'), 'Kalıcı isim (fiilimsi değil)', 'Bu sözcük artık bir yiyeceğin adıdır.'],
    [F('Ödevini bitirip dışarı çıktı.', 'bitirip'), 'Zarf-fiil', '“-ıp” eki iki eylemi bağlıyor.'],
    [F('Dün erkenden uyudum.', 'uyudum'), 'Çekimli fiil', 'Kip ve kişi eki almış; cümlenin yüklemi.']
  ] },
  { topics: [['tyt-tr', 'Cümlede Anlam']], ask: (k) => `“${k}” cümlesinde hangi anlam ilişkisi vardır?`, pool: ['Neden – sonuç', 'Amaç – sonuç', 'Koşul – sonuç', 'Karşılaştırma', 'Benzetme'], facts: [
    ['Hasta olduğu için toplantıya gelemedi.', 'Neden – sonuç', 'Hastalık gerçekleşmiş bir durum ve gelememenin gerekçesi.'],
    ['Kilo vermek için her gün yürüyor.', 'Amaç – sonuç', 'Kilo vermek henüz gerçekleşmemiş, ulaşılmak istenen hedef.'],
    ['Düzenli çalışırsan başarırsın.', 'Koşul – sonuç', 'Yargı “-sa” ekiyle bir şarta bağlanmış.'],
    ['Bu yol öbüründen daha kısa.', 'Karşılaştırma', 'İki şey bir özellik bakımından kıyaslanıyor.'],
    ['Sesi bülbül gibi güzeldi.', 'Benzetme', 'Bir şey “gibi” ile başka bir şeye benzetiliyor.'],
    ['Yağmur yağdığından maç ertelendi.', 'Neden – sonuç', '“-dığından” eki gerçekleşmiş bir nedeni bildiriyor.'],
    ['Sınava yetişsin diye onu erken uyandırdı.', 'Amaç – sonuç', '“Diye” ile ulaşılmak istenen hedef bildiriliyor.'],
    ['Erken yatarsan dinç kalkarsın.', 'Koşul – sonuç', 'Sonuç bir şarta bağlanmış.']
  ] },
  { topics: [['tyt-tr', 'Sözcükte Yapı ve Ekler']], ask: (k) => `“${k}” sözcüğünün kökü hangisidir?`, facts: [
    ['gözlükçü', 'göz', 'Sözcüğü sondan eklerine ayır; anlamlı en küçük parçaya kadar in.'],
    ['sevgili', 'sev-', 'Kök bir fiildir; sonuna “-mek” getirebilirsin.'],
    ['yazarlık', 'yaz-', 'Kök bir eylem bildiriyor.'],
    ['kitaplık', 'kitap', 'Kök bir isim; ek ona “yer” anlamı katmış.'],
    ['balıkçılar', 'balık', 'Önce çekim ekini, sonra yapım ekini at.'],
    ['sulamak', 'su', 'Kök bir isim; ondan fiil türetilmiş.'],
    ['başarı', 'baş', 'Kök bir vücut bölümü adı.']
  ] },

  /* ================= TYT Tarih ================= */
  { topics: [['tyt-tar', 'Tarih ve Zaman']], ask: (k) => `${k} inceleyen tarihe yardımcı bilim dalı hangisidir?`, facts: [
    ['Kitabeleri (yazıtları)', 'Epigrafya', 'Adı Yunanca “üzerine yazmak” anlamındaki sözcükten gelir.'],
    ['Eski yazıları', 'Paleografya', 'Adının ilk kısmı “eski” anlamına gelir.'],
    ['Resmî belgeleri', 'Diplomatik', 'Adı devletler arası belgelerle ilgili bir sözcükten gelir.'],
    ['Armaları ve sembolleri', 'Heraldik', 'Orta Çağ şövalye kalkanlarındaki işaretlerle ilgili bilim.'],
    ['Zamanı ölçüp olayları sıraya koyarak', 'Kronoloji', 'Adı Yunan zaman tanrısı Kronos’la ilgilidir.'],
    ['Kazılarla eski yerleşimleri', 'Arkeoloji', 'Adı Yunanca “eski” ve “bilgi” sözcüklerinden gelir.'],
    ['Soyları ve aile ağaçlarını', 'Genealoji', 'Adı Yunanca “soy” anlamındaki sözcükten gelir.']
  ] },
  { topics: [['tyt-tar', 'İnsanlığın İlk Dönemleri'], ['ayt-tar', 'Tarih Bilimi ve İlk Çağ']], ask: same, facts: [
    ['Hammurabi Kanunları hangi uygarlığa aittir?', 'Babil', 'Mezopotamya’da “kısasa kısas” ilkesiyle bilinen kanunlar.'],
    ['Anadolu’ya yazıyı getiren uygarlık hangisidir?', 'Asurlar', 'Kültepe’de (Kayseri) ticaret kolonileri kuran Mezopotamya uygarlığı.'],
    ['Hiyeroglif yazıyı kullanan uygarlık hangisidir?', 'Mısırlılar', 'Nil kıyısında gelişen, piramitleriyle tanınan uygarlık.'],
    ['Alfabeyi geliştiren uygarlık hangisidir?', 'Fenikeliler', 'Doğu Akdeniz kıyısında denizcilik ve ticaretle uğraşan uygarlık.'],
    ['Pankuş adlı meclisi olan Anadolu uygarlığı hangisidir?', 'Hititler', 'Başkenti Hattuşa olan uygarlık.'],
    ['Başkenti Gordion olan Anadolu uygarlığı hangisidir?', 'Frigler', 'Midas’ın efsanesiyle bilinen, dokumacılıkta ileri uygarlık.'],
    ['Van Gölü çevresinde kurulan, su kanallarıyla tanınan uygarlık hangisidir?', 'Urartular', 'Doğu Anadolu’da maden işçiliğiyle de ünlü uygarlık.'],
    ['Ziggurat adlı tapınakları yapan uygarlık hangisidir?', 'Sümerler', 'Çivi yazısını da bulan Güney Mezopotamya uygarlığı.'],
    ['Parayı ilk kullanan uygarlık hangisidir?', 'Lidyalılar', 'Batı Anadolu’da, başkenti Sardes olan uygarlık.']
  ] },
  { topics: [['tyt-tar', 'Orta Çağ’da Dünya']], ask: same, facts: [
    ['Orta Çağ Avrupası’nda toprak sahibi soylulara ne ad verilir?', 'Senyör', 'Feodal düzende toprağın sahibi olan efendi.'],
    ['Bir senyöre bağlı olan alt düzey soyluya ne ad verilir?', 'Vasal', 'Bağlılık yemini eden ve karşılığında toprak alan soylu.'],
    ['Kilisenin bir kişiyi dinden çıkarma cezasına ne ad verilir?', 'Aforoz', 'Papanın en ağır yaptırımı.'],
    ['Kilisenin para karşılığı sattığı günah bağışlama belgesine ne ad verilir?', 'Endülüjans', 'Luther’in Reform’u başlatırken karşı çıktığı belge.'],
    ['Orta Çağ’da dini akılla temellendirmeye çalışan düşünceye ne ad verilir?', 'Skolastik düşünce', 'Kilise okullarında gelişen düşünce.'],
    ['Toprağa bağlı olarak çalışan köylüye ne ad verilir?', 'Serf', 'Toprakla birlikte el değiştiren köylü.']
  ] },
  { topics: [['tyt-tar', 'İlk ve Orta Çağlarda Türk Dünyası'], ['ayt-tar', 'İlk ve Orta Çağlarda Türk Dünyası']], ask: same, facts: [
    ['Orhun Yazıtları’nı diken Türk devleti hangisidir?', 'Göktürkler', 'Kültigin ve Bilge Kağan bu devletin yöneticileridir.'],
    ['Mani dinini benimseyen Türk devleti hangisidir?', 'Uygurlar', 'Yerleşik hayata geçen ve matbaayı kullanan devlet.'],
    ['Onlu sistemi kuran Mete Han hangi devletin hükümdarıdır?', 'Asya Hun Devleti', 'Bilinen ilk Türk devleti; Çin Seddi bu devletin akınlarına karşı yapıldı.'],
    ['Attila hangi Türk devletinin hükümdarıdır?', 'Avrupa Hun Devleti', 'Kavimler Göçü’nden sonra Avrupa’da kurulan devlet.'],
    ['Musevi dinini benimseyen Türk devleti hangisidir?', 'Hazarlar', 'Hazar Denizi’nin kuzeyinde kurulan, ticaretle zenginleşen devlet.'],
    ['Hristiyanlığı benimseyip zamanla Slavlaşan Türk topluluğu hangisidir?', 'Tuna Bulgarları', 'Balkanlarda devlet kuran, adını bugünkü bir ülkeye veren topluluk.'],
    ['Bumin Kağan’ın kurduğu devlet hangisidir?', 'Göktürkler', '552’de Avarlara karşı ayaklanarak kurulan devlet.'],
    ['Kendi adına para bastıran ve tarım yapan ilk Türk devleti hangisidir?', 'Uygurlar', 'Göktürklerden sonra Ötüken’de kurulan devlet.'],
    ['Bizans’ı kuşatan ve Avrupa’ya üzengiyi tanıtan Türk topluluğu hangisidir?', 'Avarlar', 'Göktürklerden kaçarak Avrupa’ya göç eden topluluk.']
  ] },
  { topics: [['tyt-tar', 'İslam Medeniyetinin Doğuşu'], ['ayt-tar', 'İslam Tarihi ve Türk-İslam Devletleri']], ask: same, facts: [
    ['Kur’an’ı kitap hâline getiren halife kimdir?', 'Hz. Ebubekir', 'İlk halife.'],
    ['Hicri takvimi başlatan halife kimdir?', 'Hz. Ömer', 'Divan teşkilatını da kuran, fetihleriyle tanınan ikinci halife.'],
    ['Kur’an’ı çoğaltıp İslam merkezlerine gönderen halife kimdir?', 'Hz. Osman', 'Üçüncü halife.'],
    ['Cemel ve Sıffin olaylarının yaşandığı dönemin halifesi kimdir?', 'Hz. Ali', 'Dördüncü halife.'],
    ['Emevi Devleti’nin kurucusu kimdir?', 'Muaviye', 'Hilafeti saltanata dönüştüren Şam valisi.'],
    ['Divan teşkilatını kuran halife kimdir?', 'Hz. Ömer', 'Hicri takvimi de başlatan halife.']
  ] },
  { topics: [['tyt-tar', 'İlk Türk-İslam Devletleri'], ['ayt-tar', 'İslam Tarihi ve Türk-İslam Devletleri']], ask: same, facts: [
    ['“Sultan” unvanını kullanan ilk Türk hükümdarı kimdir?', 'Gazneli Mahmut', 'Hindistan’a on yedi sefer düzenleyen hükümdar.'],
    ['Malazgirt Savaşı’nı kazanan Selçuklu hükümdarı kimdir?', 'Alparslan', 'Bizans imparatoru Romen Diyojen’i esir alan sultan.'],
    ['Nizamiye medreselerini kuran Selçuklu veziri kimdir?', 'Nizamülmülk', 'Siyasetname adlı eserin de yazarı olan vezir.'],
    ['Dandanakan Savaşı’nda Gaznelileri yenen Selçuklu hükümdarı kimdir?', 'Tuğrul Bey', 'Kardeşi Çağrı Bey ile birlikte devleti kuran hükümdar.'],
    ['Büyük Selçuklu Devleti’nin en geniş sınırlara ulaştığı dönemin sultanı kimdir?', 'Melikşah', 'Vezirliğini Nizamülmülk’ün yaptığı, Celali takvimini hazırlatan sultan.'],
    ['Katvan Savaşı’nda Karahıtaylara yenilen Selçuklu sultanı kimdir?', 'Sultan Sencer', 'Büyük Selçuklu’nun son güçlü sultanı.'],
    ['İslamiyet’i resmî din olarak kabul eden ilk Türk devletinin hükümdarı kimdir?', 'Satuk Buğra Han', 'Karahanlı hükümdarı; Abdülkerim adını aldı.'],
    ['Talas Savaşı’nda Çin’e karşı Abbasilerin yanında yer alan Türk boyu hangisidir?', 'Karluklar', '751’deki savaşta taraf değiştiren boy.']
  ] },
  { topics: [['tyt-tar', 'Selçuklu Türkiyesi'], ['ayt-tar', 'Selçuklu Türkiyesi']], ask: same, facts: [
    ['Miryokefalon Savaşı’nı kazanan sultan kimdir?', 'II. Kılıçarslan', '1176’da Bizans’ı yenen sultan.'],
    ['Alanya’yı alıp tersane kurduran sultan kimdir?', 'I. Alaaddin Keykubat', 'Türkiye Selçuklularının en parlak dönemini yaşatan sultan.'],
    ['Türkiye Selçuklu Devleti’nin kurucusu kimdir?', 'Kutalmışoğlu Süleyman Şah', 'Devleti 1075’te İznik merkezli kuran bey.'],
    ['I. Haçlı Seferi sırasında Türkiye Selçuklu sultanı kimdir?', 'I. Kılıçarslan', 'Başkenti İznik’ten Konya’ya taşıyan sultan.'],
    ['Kösedağ Savaşı’nda Moğollara yenilen sultan kimdir?', 'II. Gıyaseddin Keyhüsrev', '1243’teki yenilgiyle devlet Moğol egemenliğine girdi.'],
    ['Sinop’u alarak Karadeniz ticaretine açılan sultan kimdir?', 'I. İzzeddin Keykavus', '1214’te bu limanı alan sultan.'],
    ['Antalya’yı alarak Akdeniz’e açılan sultan kimdir?', 'I. Gıyaseddin Keyhüsrev', '1207’de bu limanı alan sultan.']
  ] },
  { topics: [['tyt-tar', 'Beylikten Devlete Osmanlı'], ['ayt-tar', 'Osmanlı Kuruluş ve Yükselme']], ask: same, facts: [
    ['Bursa’yı alan ve ilk Osmanlı parasını bastıran hükümdar kimdir?', 'Orhan Bey', 'Osman Bey’in oğlu; Rumeli’ye geçiş de onun döneminde başladı.'],
    ['Yeniçeri Ocağı’nı kuran padişah kimdir?', 'I. Murat', 'Edirne’yi alan ve I. Kosova’da şehit düşen padişah.'],
    ['Ankara Savaşı’nda Timur’a yenilen padişah kimdir?', 'Yıldırım Bayezit', 'Niğbolu’yu kazanan, Anadolu Hisarı’nı yaptıran padişah.'],
    ['Fetret Devri’ni sona erdiren padişah kimdir?', 'Çelebi Mehmet', 'Kardeşleriyle taht mücadelesini kazanan şehzade.'],
    ['Varna ve II. Kosova savaşlarını kazanan padişah kimdir?', 'II. Murat', 'Fatih’in babası.'],
    ['Koyunhisar (Bafeus) Savaşı’nı kazanan Osmanlı beyi kimdir?', 'Osman Bey', 'Devletin kurucusu.'],
    ['Rumeli’deki ilk toprak olan Çimpe Kalesi kimin döneminde alındı?', 'Orhan Bey', 'Bursa’yı başkent yapan bey.'],
    ['Sırpsındığı Savaşı hangi padişah döneminde yapıldı?', 'I. Murat', 'Edirne’yi başkent yapan padişah.']
  ] },
  { topics: [['tyt-tar', 'Dünya Gücü Osmanlı'], ['ayt-tar', 'Osmanlı Kuruluş ve Yükselme']], ask: same, pool: ['II. Murat', 'II. Selim'], facts: [
    ['Çaldıran Savaşı’nı kazanan padişah kimdir?', 'Yavuz Sultan Selim', 'Safevilere karşı 1514’te zafer kazanan, Mısır’ı da alan padişah.'],
    ['Mohaç Savaşı hangi padişah döneminde yapılmıştır?', 'Kanuni Sultan Süleyman', 'Osmanlı’nın en uzun süre tahtta kalan padişahı.'],
    ['Cem Sultan olayı hangi padişah döneminde yaşanmıştır?', 'II. Bayezit', 'Fatih’in oğlu; kardeşiyle taht mücadelesi yaşadı.'],
    ['Otlukbeli Savaşı’nda Akkoyunluları yenen padişah kimdir?', 'Fatih Sultan Mehmet', 'İstanbul’u fetheden padişah.'],
    ['Preveze Deniz Savaşı hangi padişah döneminde yapılmıştır?', 'Kanuni Sultan Süleyman', 'Barbaros Hayreddin Paşa’nın kaptan-ı deryalığı dönemindeki padişah.'],
    ['Kanunname-i Ali Osman’ı hazırlatan padişah kimdir?', 'Fatih Sultan Mehmet', 'Devlet teşkilatını yazılı hâle getiren, İstanbul’u alan padişah.'],
    ['Halifeliği Osmanlı’ya getiren padişah kimdir?', 'Yavuz Sultan Selim', 'Mercidabık ve Ridaniye savaşlarıyla Mısır’ı alan padişah.'],
    ['İnebahtı Deniz Savaşı hangi padişah döneminde yapıldı?', 'II. Selim', 'Kanuni’nin oğlu; Kıbrıs da bu dönemde alındı.']
  ] },
  { topics: [['tyt-tar', 'Değişim Çağında Osmanlı ve Avrupa'], ['ayt-tar', 'Değişen Dünya Dengeleri ve Osmanlı']], ask: same, facts: [
    ['Osmanlı’nın ilk büyük toprak kaybını yaşadığı antlaşma hangisidir?', 'Karlofça', 'II. Viyana Kuşatması’ndaki bozgunun ardından, 1699’da imzalandı.'],
    ['Lale Devri’ni başlatan antlaşma hangisidir?', 'Pasarofça', '1718’de Avusturya ve Venedik ile imzalandı.'],
    ['Kırım’ın bağımsız olduğu antlaşma hangisidir?', 'Küçük Kaynarca', '1774’te Rusya ile imzalandı; ilk kez savaş tazminatı ödendi.'],
    ['Rusya’ya karşı kazanılan zaferin ardından 1711’de imzalanan antlaşma hangisidir?', 'Prut', 'Baltacı Mehmet Paşa’nın Deli Petro’yu kuşattığı savaşın sonu.'],
    ['Osmanlı’nın Avusturya ile eşitliği kabul ettiği antlaşma hangisidir?', 'Zitvatorok', '1606’da imzalandı; Osmanlı üstünlüğü ilk kez sarsıldı.'],
    ['Kapitülasyonların sürekli hâle getirildiği dönemin antlaşması (1739) hangisidir?', 'Belgrat', 'Fransa’nın arabuluculuğuyla imzalandı.'],
    ['Kırım’ın Rusya’ya bırakıldığının kabul edildiği antlaşma hangisidir?', 'Yaş', '1792’de imzalandı.']
  ] },

  /* ================= AYT Tarih ================= */
  { topics: [['ayt-tar', 'Osmanlı Kültür ve Medeniyeti']], ask: (k) => `Divan-ı Hümayun’da ${k} hangisidir?`, facts: [
    ['yargı ve eğitim işlerine bakan üye', 'Kazasker', 'Rumeli ve Anadolu için ayrı ayrı atanırdı.'],
    ['donanmadan sorumlu üye', 'Kaptan-ı derya', 'Barbaros Hayreddin Paşa’nın da taşıdığı unvan.'],
    ['dinî konularda fetva veren görevli', 'Şeyhülislam', 'Divan’a sürekli katılmaz, gerektiğinde görüşü alınırdı.'],
    ['padişahın mutlak vekili', 'Sadrazam', 'Padişahın mührünü taşırdı.'],
    ['maliye işlerine bakan üye', 'Defterdar', 'Hazinenin gelir ve giderinden sorumluydu.'],
    ['fermanlara tuğra çeken üye', 'Nişancı', 'Tapu kayıtlarından da sorumluydu.'],
    ['dış yazışmaları yürüten görevli', 'Reisülküttap', 'Zamanla dışişleri bakanlığına dönüşen görev.']
  ] },
  { topics: [['ayt-tar', 'XIX. Yüzyılda Osmanlı ve Islahatlar']], ask: (k) => `${k} hangi yıl gerçekleşmiştir?`, facts: [
    ['Yeniçeri Ocağı’nın kaldırılması (Vaka-i Hayriye)', '1826', 'II. Mahmut döneminde, Yunan isyanı sürerken.'],
    ['Tanzimat Fermanı’nın ilanı', '1839', 'Sultan Abdülmecid’in tahta çıktığı yıl.'],
    ['Islahat Fermanı’nın ilanı', '1856', 'Kırım Savaşı’nı bitiren Paris Antlaşması ile aynı yıl.'],
    ['Kanun-i Esasi’nin ilanı (I. Meşrutiyet)', '1876', 'II. Abdülhamit’in tahta çıktığı yıl.'],
    ['Yunanistan’ın bağımsızlığını sağlayan Edirne Antlaşması', '1829', 'Navarin baskınından iki yıl sonra.'],
    ['Londra Boğazlar Sözleşmesi', '1841', 'Mısır sorununu çözen Londra Konferansı’ndan bir yıl sonra.'],
    ['Hünkâr İskelesi Antlaşması', '1833', 'Kavalalı Mehmet Ali Paşa’ya karşı Rusya’dan yardım alınan yıl.'],
    ['93 Harbi’nin başlaması', '1877', 'Adı Rumi takvimdeki 1293 yılından gelir.']
  ] },
  { topics: [['ayt-tar', 'XX. Yüzyıl Başlarında Osmanlı']], ask: (k) => `${k} hangi yıl gerçekleşmiştir?`, facts: [
    ['II. Meşrutiyet’in ilanı', '1908', 'İttihat ve Terakki’nin baskısıyla, Abdülhamit döneminde.'],
    ['31 Mart Vakası', '1909', 'II. Meşrutiyet’in ilanından bir yıl sonra.'],
    ['Trablusgarp Savaşı’nın başlaması', '1911', 'İtalya’nın Kuzey Afrika’ya çıkarma yaptığı yıl.'],
    ['Uşi Antlaşması', '1912', 'Balkan Savaşları’nın başladığı yıl.'],
    ['I. Dünya Savaşı’nın başlaması', '1914', 'Saraybosna suikastının yaşandığı yıl.'],
    ['Çanakkale Zaferi', '1915', 'I. Dünya Savaşı’nın ikinci yılı.'],
    ['Mondros Ateşkesi', '1918', 'I. Dünya Savaşı’nın sona erdiği yıl.']
  ] },
  { topics: [['ayt-tar', 'İki Savaş Arası Dönem ve II. Dünya Savaşı']], ask: (k) => `${k} hangi yıl gerçekleşmiştir?`, facts: [
    ['II. Dünya Savaşı’nın başlaması', '1939', 'Almanya’nın Polonya’ya saldırdığı yıl.'],
    ['Pearl Harbor baskını', '1941', 'ABD’nin savaşa girdiği yıl.'],
    ['Dünya Ekonomik Bunalımı’nın başlaması', '1929', 'New York borsasının çöktüğü yıl.'],
    ['Birleşmiş Milletler’in kurulması', '1945', 'II. Dünya Savaşı’nın sona erdiği yıl.'],
    ['Normandiya çıkarması', '1944', 'Savaşın bitmesinden bir yıl önce.'],
    ['Montrö Boğazlar Sözleşmesi', '1936', 'Hatay sorununun başladığı yıl.'],
    ['Türkiye’nin Milletler Cemiyeti’ne üye olması', '1932', 'Türk Dil Kurumu’nun kurulduğu yıl.']
  ] },
  { topics: [['ayt-tar', 'Soğuk Savaş ve Yumuşama Dönemi']], ask: (k) => `${k} hangi yıl gerçekleşmiştir?`, facts: [
    ['NATO’nun kurulması', '1949', 'Truman Doktrini’nden iki yıl sonra.'],
    ['Varşova Paktı’nın kurulması', '1955', 'Batı Almanya’nın NATO’ya girdiği yıl.'],
    ['Küba Füze Krizi', '1962', 'Berlin Duvarı’nın yapılmasından bir yıl sonra.'],
    ['Berlin Duvarı’nın yapılması', '1961', 'Küba Füze Krizi’nden bir yıl önce.'],
    ['Berlin Duvarı’nın yıkılması', '1989', 'SSCB’nin dağılmasından iki yıl önce.'],
    ['SSCB’nin dağılması', '1991', 'Körfez Savaşı’nın yaşandığı yıl.'],
    ['Kıbrıs Barış Harekâtı', '1974', 'Ecevit hükümeti döneminde.'],
    ['Türkiye’nin NATO’ya üye olması', '1952', 'Kore Savaşı’na asker gönderilmesinin ardından.'],
    ['Truman Doktrini ve Marshall Planı', '1947', 'II. Dünya Savaşı’ndan iki yıl sonra.']
  ] },
  { topics: [['ayt-tar', 'Küreselleşen Dünya']], ask: (k) => `${k} hangi yıl gerçekleşmiştir?`, facts: [
    ['Maastricht Antlaşması (Avrupa Birliği’nin kuruluşu)', '1992', 'SSCB’nin dağılmasından bir yıl sonra.'],
    ['Türkiye’nin AB’ye aday ülke olması (Helsinki Zirvesi)', '1999', 'Marmara depreminin yaşandığı yıl.'],
    ['11 Eylül saldırıları', '2001', 'Yeni yüzyılın ilk yılı.'],
    ['ABD’nin Irak’ı işgali', '2003', '11 Eylül’den iki yıl sonra.'],
    ['Türkiye’nin AB’ye tam üyelik başvurusu', '1987', 'Özal hükümeti döneminde.'],
    ['Bosna Savaşı’nı bitiren Dayton Antlaşması', '1995', 'Srebrenitsa soykırımının yaşandığı yıl.']
  ] },

  /* ================= TYT Coğrafya ================= */
  { topics: [['tyt-cog', 'İklim Tipleri']], ask: (k) => `${k} ikliminin doğal bitki örtüsü hangisidir?`, facts: [
    ['Ekvatoral', 'Yağmur ormanları', 'Her mevsim sıcak ve yağışlı; bitkiler çok sık ve çok katlı.'],
    ['Savan', 'Uzun boylu otlar', 'Yazı yağışlı, kışı kurak; ağaçlar seyrek.'],
    ['Akdeniz', 'Maki', 'Yazları kurak; kısa boylu, her dem yeşil çalılar.'],
    ['Karasal', 'Bozkır', 'Yaz kuraklığında sararan otlar.'],
    ['Tayga (soğuk karasal)', 'İğne yapraklı ormanlar', 'Uzun ve sert kışa dayanıklı çam ve ladinler.'],
    ['Tundra', 'Yosun ve likenler', 'Toprak yılın çoğunda donmuş; ağaç yetişmez.'],
    ['Çöl', 'Kurakçıl bodur bitkiler', 'Yağış çok az; bitkiler suyu depolar.']
  ] },
  { topics: [['tyt-cog', 'Atmosfer ve İklim']], ask: same, facts: [
    ['Meteorların sürtünmeyle yanıp kül olduğu atmosfer katmanı hangisidir?', 'Mezosfer', 'Stratosferin hemen üstündeki katman.'],
    ['Kutup ışıklarının görüldüğü atmosfer katmanı hangisidir?', 'Termosfer', 'İyonların yoğun olduğu, sıcaklığın çok yükseldiği katman.'],
    ['Atmosferin uzay boşluğuna geçiş yaptığı en dış katmanı hangisidir?', 'Ekzosfer', 'Yer çekimi etkisinin çok azaldığı, gaz taneciklerinin çok seyrek olduğu katman.'],
    ['Su buharının neredeyse tamamının bulunduğu katman hangisidir?', 'Troposfer', 'Hava olaylarının görüldüğü en alt katman.'],
    ['Morötesi ışınları tutan ozonun bulunduğu katman hangisidir?', 'Stratosfer', 'Troposferin hemen üstü.']
  ] },
  { topics: [['tyt-cog', 'Atmosfer ve İklim']], ask: same, facts: [
    ['Sıcak havanın yükselip soğumasıyla oluşan sağanak yağış hangisidir?', 'Konveksiyonel yağış', 'Ekvator’da her gün öğleden sonra görülür.'],
    ['Sıcak ve soğuk hava kütlelerinin karşılaşmasıyla oluşan yağış hangisidir?', 'Cephesel yağış', 'Orta kuşakta kış yağışlarının çoğu böyle oluşur.'],
    ['Dağ yamacından aşağı inen sıcak ve kuru rüzgâr hangisidir?', 'Fön', 'Yamaç boyunca inen hava ısınır, nemini kaybeder.'],
    ['Havanın içindeki su buharı miktarına ne ad verilir?', 'Mutlak nem', 'Gram/m³ ile ölçülür.'],
    ['Havadaki nemin, taşıyabileceği en çok neme oranına ne ad verilir?', 'Bağıl nem', 'Yüzde ile ifade edilir.']
  ] },
  { topics: [['tyt-cog', 'Coğrafi Konum']], ask: (k) => `Türkiye’nin en ${k} ucu hangi ildedir?`, pool: ['Edirne', 'Muğla', 'Van', 'Artvin'], facts: [
    ['kuzey', 'Sinop', 'İnceburun bu ildedir.'],
    ['güney', 'Hatay', 'Yayladağı’na bağlı Beysun Köyü bu ildedir.'],
    ['doğu', 'Iğdır', 'Dilucu bu ildedir.'],
    ['batı', 'Çanakkale', 'Gökçeada bu ile bağlıdır.']
  ] },
  { topics: [['tyt-cog', 'Nüfus ve Göç'], ['ayt-cog', 'Türkiye’de Nüfus ve Yerleşme']], ask: (k) => `${k} ne ad verilir?`, facts: [
    ['Tarımla geçinen nüfusun tarım alanına bölünmesiyle bulunan değere', 'Tarımsal nüfus yoğunluğu', 'Yalnız tarım alanı ve tarımla geçinenler hesaba katılır.'],
    ['Doğum oranı ile ölüm oranı arasındaki farka', 'Doğal nüfus artışı', 'Göçler bu hesaba katılmaz.'],
    ['Tarım işleri için belirli mevsimlerde yapılan göçe', 'Mevsimlik göç', 'Fındık ve pamuk hasadında sık görülür.'],
    ['İki ülke arasında anlaşmayla yapılan nüfus değişimine', 'Mübadele', '1923’te Türkiye ile Yunanistan arasında yapıldı.'],
    ['Bir ülkenin sınırları içinde yapılan göçe', 'İç göç', 'Türkiye’de en çok köyden kente olur.'],
    ['Bir ülkeden başka bir ülkeye yapılan göçe', 'Dış göç', '1960’larda Almanya’ya işçi göçü buna örnektir.']
  ] },
  { topics: [['tyt-cog', 'Türkiye’nin Yer Şekilleri ve İklimi']], ask: same, facts: [
    ['Kızılırmak’ın denize döküldüğü yerde oluşturduğu delta ovası hangisidir?', 'Bafra Ovası', 'Samsun’un batısında, Karadeniz kıyısında.'],
    ['Yeşilırmak’ın oluşturduğu delta ovası hangisidir?', 'Çarşamba Ovası', 'Samsun’un doğusunda.'],
    ['Seyhan ve Ceyhan ırmaklarının oluşturduğu ova hangisidir?', 'Çukurova', 'Adana çevresindeki, Türkiye’nin en verimli ovalarından biri.'],
    ['Gediz’in Ege Denizi’ne döküldüğü yerde oluşturduğu delta ovası hangisidir?', 'Menemen Ovası', 'İzmir’in kuzeyinde.'],
    ['Göksu’nun Akdeniz’e döküldüğü yerde oluşturduğu delta hangisidir?', 'Silifke Ovası', 'Mersin’de, kuş cenneti olarak da bilinir.'],
    ['Türkiye’nin yüzölçümü en büyük ovası hangisidir?', 'Konya Ovası', 'İç Anadolu’da, tahıl tarımının yoğun olduğu ova.']
  ] },
  { topics: [['tyt-cog', 'Ekonomik Faaliyetler'], ['ayt-cog', 'Türkiye Ekonomisi']], ask: (k) => `Türkiye’de ${k} üretiminin en fazla olduğu il hangisidir?`, facts: [
    ['çay', 'Rize', 'Doğu Karadeniz’de, en çok yağış alan il.'],
    ['fındık', 'Ordu', 'Orta Karadeniz kıyısında, Giresun’un batı komşusu.'],
    ['haşhaş', 'Afyonkarahisar', 'Adı da bu bitkiden gelen İç Batı Anadolu ili.'],
    ['gül yağı', 'Isparta', 'Göller Yöresi’nde, “gül şehri” diye anılan il.'],
    ['kayısı', 'Malatya', 'Doğu Anadolu’nun batısında, Fırat havzasında.'],
    ['incir', 'Aydın', 'Büyük Menderes Ovası’nda.'],
    ['pamuk', 'Şanlıurfa', 'GAP sulamasıyla Harran Ovası’nda üretim çok arttı.'],
    ['şeker pancarı', 'Konya', 'Türkiye’nin yüzölçümü en büyük ili.']
  ] },
  { topics: [['tyt-cog', 'Doğal Afetler']], ask: (k) => `${k} ne ad verilir?`, facts: [
    ['Depremin yerin içinde oluştuğu noktaya', 'Hiposantr (iç merkez)', 'Yerin derinliklerindeki başlangıç noktası.'],
    ['Deprem dalgalarının yeryüzüne en önce ulaştığı noktaya', 'Episantr (dış merkez)', 'Yerin içindeki merkezin tam üstündeki nokta.'],
    ['Yer kabuğundaki kırık hatlara', 'Fay', 'Depremlerin çoğu bu hatlar boyunca oluşur.'],
    ['Eğimli yamaçta toprak kütlesinin aşağı kaymasına', 'Heyelan', 'Karadeniz’de bol yağış ve killi toprakla sık görülür.'],
    ['Kar kütlesinin yamaçtan hızla kaymasına', 'Çığ', 'Kış sonu ve ilkbaharda yüksek dağlarda görülür.'],
    ['Toprağın su ve rüzgârla taşınmasına', 'Erozyon', 'Bitki örtüsü zayıf yerlerde artar.']
  ] },
  { topics: [['tyt-cog', 'Doğa ve İnsan']], ask: (k) => `${k} inceleyen bilim dalı hangisidir?`, facts: [
    ['Nüfusu', 'Demografi', 'Adı Yunanca “halk” anlamındaki sözcükten gelir.'],
    ['Suları (akarsu, göl, yer altı suyu)', 'Hidrografya', 'Adı Yunanca “su” anlamındaki kökten gelir.'],
    ['Bitki ve hayvanların yeryüzüne dağılışını', 'Biyocoğrafya', 'Adı “canlı” anlamındaki önekle başlar.'],
    ['Okyanus ve denizleri', 'Oşinografi', 'Adı “okyanus” sözcüğünden gelir.'],
    ['Toprakların oluşumunu ve özelliklerini', 'Pedoloji', 'Adı Yunanca “toprak” anlamındaki sözcükten gelir.'],
    ['Yer şekillerini', 'Jeomorfoloji', 'Adı Yunanca “yer” ve “biçim” sözcüklerinden gelir.']
  ] },
  { topics: [['tyt-cog', 'Yerin Şekillenmesi']], ask: (k) => `${k} ne ad verilir?`, facts: [
    ['Akarsuyun eğimin azaldığı yerde büklümler çizerek akmasına', 'Menderes', 'Adını Batı Anadolu’daki bir ırmaktan alır.'],
    ['Kalkerli arazide suyun eritmesiyle oluşan küçük çukurlara', 'Dolin', 'Karstik aşınım şekli; büyüğüne uvala denir.'],
    ['Mağara tavanından aşağı doğru sarkan kireç çökeltisine', 'Sarkıt', 'Tabandan yukarı doğru yükselene dikit denir.'],
    ['Rüzgârın biriktirdiği kum tepelerine', 'Kumul', 'Çöllerde ve bazı kıyılarda görülür.'],
    ['Kıyı okuyla denizden ayrılan sığ göle', 'Lagün', 'Dalga ve akıntının biriktirdiği malzemeyle oluşur.'],
    ['Bir adayı kıyıya bağlayan kum diline', 'Tombolo', 'Kıyı okunun adaya ulaşmasıyla oluşur.'],
    ['Rüzgârın taşıdığı kumun aşındırmasıyla oluşan şapkalı kayaya', 'Mantar kaya', 'Alt kısmı daha çok aşınır.']
  ] },
  { topics: [['tyt-cog', 'Su, Toprak ve Bitki']], ask: (k) => `${k} oluşumuna göre hangi göl türündendir?`, pool: ['Buzul gölü', 'Heyelan set gölü'], facts: [
    ['Salda Gölü', 'Karstik göl', 'Burdur’da, kalkerli arazide; beyaz kumsalıyla bilinir.'],
    ['Tuz Gölü', 'Tektonik göl', 'Yer kabuğunun çökmesiyle oluşan çanakta.'],
    ['Nemrut Krater Gölü', 'Volkanik göl', 'Bir yanardağın tepesindeki çukurda.'],
    ['Bafa Gölü', 'Alüvyal set gölü', 'Büyük Menderes’in getirdiği malzemenin bir körfezi kapatmasıyla oluştu.'],
    ['Eğirdir Gölü', 'Tektonik göl', 'Göller Yöresi’nde, kırılmalarla oluşan çanakta.']
  ] },
  { topics: [['tyt-cog', 'Yerleşme'], ['ayt-cog', 'Türkiye’de Nüfus ve Yerleşme']], ask: (k) => `${k} öncelikle hangi fonksiyonuyla gelişmiş bir şehirdir?`, facts: [
    ['Zonguldak', 'Maden', 'Taş kömürü havzası bu şehirdedir.'],
    ['Karabük', 'Sanayi', 'Demir–çelik fabrikalarıyla kurulup büyümüş şehir.'],
    ['Antalya', 'Turizm', 'Kıyıları ve otelleriyle her yaz milyonlarca ziyaretçi ağırlar.'],
    ['Mersin', 'Liman', 'Akdeniz’in en büyük ticaret kapılarından biri.'],
    ['Ankara', 'Yönetim (idari)', 'Başkent.']
  ] },

  /* ================= AYT Coğrafya ================= */
  { topics: [['ayt-cog', 'Bölgesel Kalkınma Projeleri']], ask: (k) => `${k} hangi bölgeye yönelik bir kalkınma projesidir?`, facts: [
    ['GAP', 'Güneydoğu Anadolu', 'Fırat ve Dicle üzerindeki barajlarla bilinir.'],
    ['DAP', 'Doğu Anadolu', 'Hayvancılık ve tarımı geliştirmeyi amaçlar.'],
    ['DOKAP', 'Doğu Karadeniz', 'Yayla turizmi ve ulaşım öne çıkar.'],
    ['KOP', 'Konya Ovası', 'Mavi Tünel ile su aktarımı bu projenin parçasıdır.'],
    ['Zonguldak–Bartın–Karabük Projesi', 'Batı Karadeniz', 'Kömür ve demir–çelik bölgesini kapsar.'],
    ['Yeşilırmak Havza Gelişim Projesi', 'Orta Karadeniz', 'Amasya, Çorum, Samsun ve Tokat’ı kapsar.'],
    ['KOP kapsamındaki Mavi Tünel', 'Konya Ovası', 'Göksu’dan bölgenin en büyük ovasına su aktaran tünel.'],
    ['Ilısu ve Atatürk barajları', 'Güneydoğu Anadolu', 'Dicle ve Fırat üzerindeki büyük barajlar.']
  ] },
  { topics: [['ayt-cog', 'Türkiye Ekonomisi'], ['ayt-cog', 'Ekonomik Faaliyetler ve Doğal Kaynaklar']], ask: (k) => `${k} çıkarıldığı başlıca yer hangisidir?`, facts: [
    ['Taş kömürünün', 'Zonguldak', 'Batı Karadeniz’deki maden havzası.'],
    ['Türkiye’nin en büyük linyit yatağının', 'Afşin–Elbistan', 'Kahramanmaraş’taki termik santrallerin yakıtı.'],
    ['Demirin', 'Divriği', 'Sivas’ın, ünlü Ulu Camii’nin de bulunduğu ilçesi.'],
    ['Kromun', 'Guleman', 'Elazığ’daki maden yatağı.'],
    ['Bakırın', 'Murgul', 'Artvin’deki maden ilçesi.'],
    ['Boksitin (alüminyum cevheri)', 'Seydişehir', 'Konya’daki alüminyum tesisleriyle bilinen ilçe.'],
    ['Borun', 'Kırka', 'Eskişehir’e bağlı, bor tesisleriyle bilinen yer.']
  ] },
  { topics: [['ayt-cog', 'Çevre ve Toplum']], ask: (k) => `${k} öncelikle hangi konuyla ilgilidir?`, facts: [
    ['Montreal Protokolü', 'Ozon tabakasının korunması', '1987’de imzalandı; CFC gazlarını sınırladı.'],
    ['Kyoto Protokolü', 'Sera gazı salımının azaltılması', '1997’de Japonya’da kabul edildi.'],
    ['Paris Anlaşması', 'Küresel sıcaklık artışının sınırlanması', '2015’te imzalandı; hedef sanayi öncesine göre 2 °C’nin altı.'],
    ['Ramsar Sözleşmesi', 'Sulak alanların korunması', 'Adını İran’daki bir şehirden alır; göçmen kuşların yaşam alanlarıyla ilgilidir.'],
    ['Basel Sözleşmesi', 'Tehlikeli atıkların sınır ötesi taşınması', 'İsviçre’deki bir şehirde kabul edildi.'],
    ['Barselona Sözleşmesi', 'Akdeniz’in kirliliğe karşı korunması', 'İspanya’da kabul edilen, bir denizi koruyan sözleşme.']
  ] },
  { topics: [['ayt-cog', 'Ekosistemler ve Madde Döngüleri']], ask: (k) => `${k} ne ad verilir?`, facts: [
    ['Havadaki azotun bakterilerle toprağa bağlanmasına', 'Azot fiksasyonu', 'Baklagillerin köklerindeki bakteriler yapar.'],
    ['Amonyağın bakterilerle nitrata dönüştürülmesine', 'Nitrifikasyon', 'Nitrit ve nitrat bakterileri bu işi yapar.'],
    ['Nitratın bakterilerle azot gazına dönüşmesine', 'Denitrifikasyon', 'Azotu atmosfere geri veren basamak.'],
    ['Bitkilerin yapraklarından su buharı vermesine', 'Terleme (transpirasyon)', 'Stomalar aracılığıyla olur.'],
    ['Ölü canlıların bakteri ve mantarlarca parçalanmasına', 'Ayrışma (çürüme)', 'Organik maddeyi inorganik maddeye dönüştürür.']
  ] },

  /* ================= Felsefe ================= */
  { topics: [['tyt-fel', 'Felsefeye Giriş']], ask: (k) => `${k} inceleyen felsefe dalı hangisidir?`, facts: [
    ['Bilginin kaynağını, sınırını ve doğruluğunu', 'Bilgi felsefesi (epistemoloji)', 'Adı Yunanca “bilgi” anlamındaki “episteme” sözcüğünden gelir.'],
    ['İyi ve kötüyü, ödevi, özgürlüğü', 'Ahlak felsefesi (etik)', 'Adı Yunanca “töre” anlamındaki sözcükten gelir.'],
    ['Güzelliği ve sanatı', 'Sanat felsefesi (estetik)', 'Adı Yunanca “duyumsama” anlamındaki sözcükten gelir.'],
    ['Doğru düşünmenin kurallarını', 'Mantık', 'Aristoteles’in sistemleştirdiği alan.'],
    ['Varlığın ne olduğunu', 'Varlık felsefesi (ontoloji)', 'Adı Yunanca “var olan” anlamındaki sözcükten gelir.'],
    ['Devleti, iktidarı ve ideal düzeni', 'Siyaset felsefesi', 'Platon’un “Devlet” adlı eseri bu alandadır.'],
    ['Bilimsel bilginin yöntemini ve değerini', 'Bilim felsefesi', 'Kuhn ve Popper’ın çalıştığı alan.'],
    ['Dinin temel kavramlarını akıl yoluyla', 'Din felsefesi', 'Tanrı’nın varlığına ilişkin kanıtları tartışan alan.']
  ] },
  { topics: [['tyt-fel', 'Ahlak Felsefesi']], ask: (k) => `${k} ahlak felsefesinde hangi görüşle anılır?`, facts: [
    ['Epikuros', 'Hedonizm (hazcılık)', 'Ölçülü ve kalıcı hazzı en yüksek iyi sayar.'],
    ['Jeremy Bentham', 'Faydacılık', 'Eylemi sonucunun mutluluk miktarına göre değerlendirir.'],
    ['Immanuel Kant', 'Ödev ahlakı', 'Eylemin değerini niyete ve evrensel ahlak yasasına bağlar.'],
    ['Friedrich Nietzsche', 'Güç istenci (üstinsan)', 'Geleneksel ahlakı reddedip yeni değerler yaratmayı savunur.'],
    ['Thomas Hobbes', 'Egoizm (bencillik)', 'İnsanın doğası gereği kendi çıkarını gözettiğini söyler.'],
    ['Aristoteles', 'Erdem ve altın orta', 'İki aşırı ucun ortasını erdem sayar.'],
    ['John Stuart Mill', 'Faydacılık', '“En çok sayıda insanın en büyük mutluluğu” ilkesini geliştiren İngiliz.'],
    ['Aristippos', 'Hedonizm (hazcılık)', 'Kirene okulunun kurucusu; anlık bedensel hazzı över.']
  ] },
  { topics: [['tyt-fel', 'Din Felsefesi']], ask: (k) => `“${k}” diyen görüş hangisidir?`, facts: [
    ['Tanrı evreni yaratmıştır ve evrene müdahale eder', 'Teizm', 'Vahyi ve peygamberleri kabul eder.'],
    ['Tanrı evreni yaratmış ama ona müdahale etmez', 'Deizm', 'Saat yapımcısı benzetmesiyle anlatılır.'],
    ['Tanrı ile evren birdir', 'Panteizm', 'Spinoza bu görüşün temsilcisidir.'],
    ['Tanrı yoktur', 'Ateizm', 'Tanrı inancını reddeder.'],
    ['Tanrı’nın varlığı da yokluğu da bilinemez', 'Agnostisizm', 'Kesin yargıdan kaçınır.'],
    ['İnanç akıldan önce gelir; din akılla temellendirilemez', 'Fideizm', 'Adı Latince “inanç” anlamındaki sözcükten gelir.']
  ] },
  { topics: [['tyt-fel', 'Siyaset Felsefesi']], ask: (k) => `“${k}” adlı eserin yazarı kimdir?`, facts: [
    ['Devlet', 'Platon', 'Filozof kralları savunan, Akademia’yı kuran düşünür.'],
    ['El-Medinetü’l-Fâzıla (Erdemli Şehir)', 'Farabi', '“İkinci öğretmen” diye anılan İslam filozofu.'],
    ['Ütopya', 'Thomas More', 'Rönesans döneminde yaşamış İngiliz düşünür.'],
    ['Güneş Ülkesi', 'Campanella', 'İtalyan rahip ve düşünür.'],
    ['Kanunların Ruhu', 'Montesquieu', 'Kuvvetler ayrılığını savunan Fransız düşünür.'],
    ['Toplum Sözleşmesi', 'Rousseau', '“Genel irade” kavramıyla tanınan düşünür.'],
    ['Leviathan', 'Thomas Hobbes', '“İnsan insanın kurdudur” sözüyle anılan İngiliz düşünür.'],
    ['Hükümdar (Prens)', 'Machiavelli', 'Floransalı devlet adamı ve düşünür.']
  ] },
  { topics: [['tyt-fel', 'Bilim Felsefesi']], ask: (k) => `${k} kavramıyla bilim felsefesine katkıda bulunan düşünür kimdir?`, facts: [
    ['“İdoller” (bilgiyi bozan yanılgılar)', 'Francis Bacon', 'Deneysel yöntemi savunan İngiliz düşünür.'],
    ['“Yanlışlanabilirlik”', 'Karl Popper', '“Bilimsel Araştırmanın Mantığı”nın yazarı.'],
    ['“Paradigma” ve “bilimsel devrim”', 'Thomas Kuhn', 'Amerikalı bilim tarihçisi.'],
    ['“Doğrulanabilirlik” (Viyana Çevresi)', 'Rudolf Carnap', 'Mantıkçı pozitivizmin temsilcisi.'],
    ['“Pozitivizm” ve “üç hâl yasası”', 'Auguste Comte', 'Sosyoloji terimini de ilk kullanan Fransız düşünür.'],
    ['“Araştırma programları”', 'Imre Lakatos', 'Popper’ın öğrencisi olan Macar asıllı düşünür.'],
    ['“Yönteme karşı” ve “her şey uyar”', 'Paul Feyerabend', 'Avusturyalı, bilimde tek yöntem olmadığını savunan düşünür.'],
    ['“Olağan bilim” ve “anomali”', 'Thomas Kuhn', '“Bilimsel Devrimlerin Yapısı”nın yazarı.']
  ] },
  { topics: [['tyt-fel', 'Varlık Felsefesi']], ask: (k) => `${k} için varlık nedir?`, facts: [
    ['Platon', 'İdealar', 'Duyular dünyasının asıl gerçekliğin gölgesi olduğunu söyler.'],
    ['Demokritos', 'Atomlar', 'Varlığı bölünemeyen küçük parçacıklarla açıklar.'],
    ['Herakleitos', 'Sürekli değişim (oluş)', '“Her şey akar” sözüyle bilinir.'],
    ['Parmenides', 'Değişmeyen tek varlık', 'Değişimi duyuların yanılgısı sayar.'],
    ['Descartes', 'Madde ve ruh (düalizm)', 'Varlığı iki ayrı cevherle açıklar.'],
    ['Hegel', 'Mutlak Tin', 'Diyalektik yöntemle tanınan Alman idealist.']
  ] },
  { topics: [['ayt-fel', 'Felsefe Tarihi']], ask: (k) => `${k} evrenin ana maddesini (arkhe) ne olarak açıklar?`, facts: [
    ['Anaksimandros', 'Apeiron (sınırsız)', 'Thales’in öğrencisi; arkheyi belirli bir maddeye bağlamaz.'],
    ['Anaksimenes', 'Hava', 'Miletli; arkheyi yoğunlaşma ve seyrelme ile açıklar.'],
    ['Herakleitos', 'Ateş', 'Efesli; değişimi savunur.'],
    ['Pythagoras', 'Sayı', 'Matematikle tanınan Sisamlı filozof.'],
    ['Empedokles', 'Dört öge (su, hava, toprak, ateş)', 'Sevgi ve nefretin ögeleri birleştirip ayırdığını söyler.'],
    ['Demokritos', 'Atomlar', 'Abderalı; bölünemeyen parçacıklar.'],
    ['Thales', 'Su', 'İlk filozof sayılan Miletli.']
  ] },
  { topics: [['ayt-fel', 'Psikoloji']], ask: (k) => `${k} yaklaşımının temsilcisi kimdir?`, facts: [
    ['Yapısalcılık', 'Wilhelm Wundt', 'İlk psikoloji laboratuvarını Leipzig’de kurdu.'],
    ['İşlevselcilik', 'William James', 'Amerikalı psikolog; pragmatizmin de temsilcisi.'],
    ['Davranışçılık', 'John B. Watson', 'Yalnız gözlenebilir davranışın incelenmesini savunan Amerikalı.'],
    ['Psikanaliz', 'Sigmund Freud', 'Bilinçaltı kavramıyla tanınan Avusturyalı hekim.'],
    ['Hümanistik yaklaşım', 'Abraham Maslow', 'İhtiyaçlar hiyerarşisiyle tanınır.'],
    ['Bilişsel gelişim', 'Jean Piaget', 'Çocukların düşünme evrelerini inceleyen İsviçreli.']
  ] },
  { topics: [['ayt-fel', 'Sosyoloji']], ask: (k) => `${k} kavramıyla tanınan düşünür kimdir?`, facts: [
    ['“Asabiyet”', 'İbn Haldun', '“Mukaddime”nin yazarı.'],
    ['“Toplumsal olgu” ve “dayanışma”', 'Émile Durkheim', 'Sosyolojiyi bir bilim olarak kurumsallaştıran Fransız.'],
    ['“Bürokrasi” ve “ideal tip”', 'Max Weber', '“Protestan Ahlakı ve Kapitalizmin Ruhu”nun yazarı.'],
    ['“Hars ve medeniyet”', 'Ziya Gökalp', 'Türk sosyolojisinin öncüsü.'],
    ['“Sınıf çatışması”', 'Karl Marx', '“Kapital”in yazarı.'],
    ['“Pozitivizm” ve “sosyoloji” terimi', 'Auguste Comte', 'Fransız düşünür; üç hâl yasasını ortaya koydu.'],
    ['“Kendi kendini doğrulayan kehanet”', 'Robert K. Merton', 'İşlevselci Amerikalı sosyolog.'],
    ['“Araç mesajdır” ve “küresel köy”', 'Marshall McLuhan', 'Kitle iletişimini inceleyen Kanadalı düşünür.']
  ] },
  { topics: [['ayt-fel', 'Mantık']], ask: (k) => `“${k}” önermesi hangi türdendir?`, pool: ['Tekil önerme'], facts: [
    ['Bütün kuşlar yumurtlar.', 'Tümel olumlu', 'Konunun hepsi hakkında olumlu bir yargı.'],
    ['Hiçbir balık memeli değildir.', 'Tümel olumsuz', 'Konunun hepsi hakkında olumsuz bir yargı.'],
    ['Bazı öğrenciler sporcudur.', 'Tikel olumlu', 'Konunun bir kısmı hakkında olumlu bir yargı.'],
    ['Bazı çiçekler kırmızı değildir.', 'Tikel olumsuz', 'Konunun bir kısmı hakkında olumsuz bir yargı.'],
    ['Her insan ölümlüdür.', 'Tümel olumlu', '“Her” konunun hepsini kapsar; yargı olumlu.'],
    ['Hiçbir insan kusursuz değildir.', 'Tümel olumsuz', '“Hiçbir” konunun hepsini kapsar.'],
    ['Bazı kitaplar pahalıdır.', 'Tikel olumlu', '“Bazı” konunun bir kısmını kapsar; yargı olumlu.']
  ] },

  /* ================= Din Kültürü ================= */
  { topics: [['tyt-din', 'İslam ve İbadet']], ask: (k) => `${k} hangi ibadettir?`, facts: [
    ['Ramazan ayında imsaktan iftara kadar yeme–içmeden uzak durmak', 'Oruç', 'Ramazan Bayramı ile tamamlanır.'],
    ['Belirli günlerde Kâbe’yi ve kutsal yerleri ziyaret etmek', 'Hac', 'Gücü yetene ömründe bir kez farzdır.'],
    ['Yılın herhangi bir zamanında Kâbe’yi ziyaret etmek', 'Umre', 'Belirli günlere bağlı değildir.'],
    ['Nisap miktarı mala sahip olanın malının belli bir kısmını ihtiyaç sahibine vermesi', 'Zekât', 'Genellikle kırkta bir oranındadır.'],
    ['Ramazan ayında, bayramdan önce verilen sadaka', 'Fitre', 'Fıtır sadakası da denir.'],
    ['Günde beş vakit kılınan ibadet', 'Namaz', 'Abdest bu ibadetin şartlarındandır.'],
    ['Kurban Bayramı’nda Allah rızası için belirli hayvanları kesmek', 'Kurban', 'Hz. İbrahim ve oğlunun kıssasıyla ilişkilidir.']
  ] },
  { topics: [['tyt-din', 'Bilgi ve İnanç']], ask: (k) => `${k} görevli melek hangisidir?`, facts: [
    ['Vahyi peygamberlere getirmekle', 'Cebrail', 'Dört büyük melekten biri; Hz. Muhammed’e ilk vahyi getirdi.'],
    ['Tabiat olaylarını yönetmekle', 'Mikail', 'Yağmur ve rızıkla ilişkilendirilen melek.'],
    ['Kıyamette sûra üflemekle', 'İsrafil', 'Kıyametin kopuşunu ve dirilişi başlatacak melek.'],
    ['Canlıların canını almakla', 'Azrail', 'Ölüm meleği.'],
    ['İnsanların iyi ve kötü amellerini yazmakla', 'Kiramen Katibin', 'Adı “şerefli yazıcılar” anlamına gelir.'],
    ['Kabirde ölüyü sorguya çekmekle', 'Münker ve Nekir', 'İki melek birlikte anılır.']
  ] },
  { topics: [['tyt-din', 'Hz. Muhammed ve Gençlik'], ['tyt-tar', 'İslam Medeniyetinin Doğuşu']], ask: (k) => `${k} hangi yıl gerçekleşmiştir?`, facts: [
    ['Hz. Muhammed’in doğumu', '571', 'Fil olayının yaşandığı yıl.'],
    ['İlk vahyin gelmesi', '610', 'Hz. Muhammed 40 yaşındayken.'],
    ['Bedir Savaşı', '624', 'Hicretten iki yıl sonra.'],
    ['Hendek Savaşı', '627', 'Uhud’dan iki yıl sonra.'],
    ['Hudeybiye Antlaşması', '628', 'Mekke’nin fethinden iki yıl önce.'],
    ['Mekke’nin fethi', '630', 'Hudeybiye’den iki yıl sonra.'],
    ['Hz. Muhammed’in vefatı', '632', 'Veda Haccı’nın ertesi yılı.']
  ] },
  { topics: [['tyt-din', 'Vahiy ve Akıl']], ask: (k) => `${k} hangi peygambere indirilmiştir?`, pool: ['Hz. İbrahim', 'Hz. Nuh'], facts: [
    ['Tevrat', 'Hz. Musa', 'Yahudiliğin kutsal kitabı.'],
    ['Zebur', 'Hz. Davut', 'İlahi ve dualardan oluşan kitap.'],
    ['İncil', 'Hz. İsa', 'Hristiyanlığın kutsal kitabı.'],
    ['Kur’an-ı Kerim', 'Hz. Muhammed', 'Son ilahi kitap.'],
    ['Suhuf (sayfalar) verilenlerden biri olan ve Kâbe’yi oğluyla inşa eden peygamber', 'Hz. İbrahim', 'Tevhidin sembolü sayılan, “Halilullah” diye anılan peygamber.'],
    ['Gemi yapıp tufandan inananları kurtaran peygamber', 'Hz. Nuh', 'Kavmini yüzyıllarca tevhide çağıran peygamber.']
  ] },
  { topics: [['tyt-din', 'İslam Düşüncesinde Yorumlar']], ask: (k) => `${k} mezhebinin kurucusu kimdir?`, facts: [
    ['Hanefi', 'Ebu Hanife (İmam-ı Azam)', 'Türkiye’de en yaygın fıkhi mezhebin imamı.'],
    ['Şafii', 'İmam Şafii', 'Fıkıh usulünün kurucusu sayılan âlim.'],
    ['Maliki', 'İmam Malik', 'Medine’de yaşamış, “Muvatta”nın yazarı.'],
    ['Hanbeli', 'Ahmed bin Hanbel', '“Müsned” adlı hadis kitabıyla bilinen âlim.'],
    ['Maturidi', 'Ebu Mansur el-Maturidi', 'Semerkantlı itikat âlimi.'],
    ['Eşari', 'Ebu’l-Hasan el-Eşari', 'Önce Mutezile’ye bağlı olan, Basralı âlim.']
  ] },
  { topics: [['ayt-din', 'Anadolu’da İslam ve Tasavvufi Yorumlar']], ask: (k) => `${k} hangi mutasavvıfın öğretisine dayanır?`, facts: [
    ['Mevlevilik', 'Mevlana Celaleddin Rumi', 'Konya’da yaşamış, “Mesnevi”nin yazarı.'],
    ['Bektaşilik', 'Hacı Bektaş-ı Veli', 'Nevşehir’de yaşamış, “Makalat”ın yazarı.'],
    ['Yesevilik', 'Ahmet Yesevi', 'Türkistan’da yaşamış, “Divan-ı Hikmet”in yazarı.'],
    ['Bayramilik', 'Hacı Bayram Veli', 'Ankara’da yaşamış mutasavvıf.'],
    ['Nakşibendilik', 'Bahaeddin Nakşibend', 'Buharalı mutasavvıf.'],
    ['Kadirilik', 'Abdulkadir Geylani', 'Bağdat’ta yaşamış mutasavvıf.'],
    ['Halvetilik', 'Ömer el-Halveti', 'Halvete (inzivaya) önem veren, Horasan’dan çıkan yol.'],
    ['Rifailik', 'Ahmed er-Rifai', 'Irak’ta yaşamış, 12. yüzyıl mutasavvıfı.']
  ] },
  { topics: [['ayt-din', 'Yaşayan Dinler']], ask: (k) => `${k} dininin kutsal metni hangisidir?`, facts: [
    ['Hinduizm', 'Vedalar', 'Sanskritçe “bilgi” anlamına gelen metinler.'],
    ['Budizm', 'Tripitaka', 'Adı “üç sepet” anlamına gelir.'],
    ['Yahudilik', 'Tevrat (Tanah)', 'Hz. Musa’ya indirildiğine inanılan kitap.'],
    ['Hristiyanlık', 'Kitab-ı Mukaddes', 'Eski ve Yeni Ahit’ten oluşur.'],
    ['Şintoizm', 'Kojiki', 'Japonya’nın en eski yazılı kaynağı.'],
    ['Taoizm', 'Tao Te Ching', 'Lao Tzu’ya atfedilen kitap.'],
    ['Konfüçyüsçülük', 'Analektler (Konuşmalar)', 'Ustanın öğrencileriyle konuşmalarını derleyen kitap.']
  ] },

  /* ================= AYT Edebiyat ================= */
  { topics: [['ayt-edb', 'Tanzimat Edebiyatı']], ask: (k) => `“${k}” adlı eserin yazarı kimdir?`, facts: [
    ['Şair Evlenmesi', 'Şinasi', 'İlk özel Türkçe gazeteyi Agâh Efendi ile çıkaran yazar.'],
    ['İntibah', 'Namık Kemal', '“Vatan şairi” diye anılan yazar.'],
    ['Araba Sevdası', 'Recaizade Mahmut Ekrem', '“Talim-i Edebiyat”ın da yazarı.'],
    ['Taaşşuk-ı Talat ve Fitnat', 'Şemsettin Sami', '“Kamus-ı Türki” sözlüğünü hazırlayan dil bilgini.'],
    ['Makber', 'Abdülhak Hamit Tarhan', '“Şair-i azam” diye anılan şair.'],
    ['Felatun Bey ile Rakım Efendi', 'Ahmet Mithat Efendi', 'Halkı eğitmek için çok sayıda roman yazan yazar.'],
    ['Sergüzeşt', 'Samipaşazade Sezai', 'Romantizmden realizme geçişin örneğini veren yazar.'],
    ['Terkib-i Bent', 'Ziya Paşa', '“Harabat” antolojisini de hazırlayan şair.']
  ] },
  { topics: [['ayt-edb', 'Servet-i Fünun ve Fecr-i Âti']], ask: (k) => `“${k}” adlı eserin yazarı kimdir?`, facts: [
    ['Rübab-ı Şikeste', 'Tevfik Fikret', '“Sis” şiiriyle İstanbul’u eleştiren şair.'],
    ['Aşk-ı Memnu', 'Halit Ziya Uşaklıgil', '“Mai ve Siyah”ın da yazarı.'],
    ['Eylül', 'Mehmet Rauf', 'Türk edebiyatının ilk psikolojik romanının yazarı.'],
    ['Hac Yolunda', 'Cenap Şahabettin', 'Sembolizmden etkilenen Servet-i Fünun şairi.'],
    ['Göl Saatleri', 'Ahmet Haşim', '“Piyale”nin de şairi.'],
    ['Hayat-ı Muhayyel', 'Hüseyin Cahit Yalçın', 'Servet-i Fünun’un gazeteci yazarı.'],
    ['Mai ve Siyah', 'Halit Ziya Uşaklıgil', 'Batılı anlamda ilk başarılı Türk romanının yazarı.'],
    ['Bir Ölünün Defteri', 'Mehmet Rauf', '“Eylül” romanıyla tanınan yazar.']
  ] },
  { topics: [['ayt-edb', 'Milli Edebiyat']], ask: (k) => `“${k}” adlı eserin yazarı kimdir?`, facts: [
    ['Çalıkuşu', 'Reşat Nuri Güntekin', 'Feride karakterini yaratan yazar.'],
    ['Yaban', 'Yakup Kadri Karaosmanoğlu', '“Kiralık Konak”ın da yazarı.'],
    ['Sinekli Bakkal', 'Halide Edip Adıvar', 'Kurtuluş Savaşı’nda onbaşı rütbesi alan yazar.'],
    ['Kaşağı', 'Ömer Seyfettin', 'Olay hikâyesinin ustası.'],
    ['Safahat', 'Mehmet Akif Ersoy', 'İstiklal Marşı’nın şairi.'],
    ['Kendi Gök Kubbemiz', 'Yahya Kemal Beyatlı', 'Aruzla, Türk zevkine uygun şiirler yazan şair.'],
    ['Han Duvarları', 'Faruk Nafiz Çamlıbel', 'Beş Hececilerden biri.'],
    ['Türkçülüğün Esasları', 'Ziya Gökalp', 'Türk sosyolojisinin öncüsü.']
  ] },
  { topics: [['ayt-edb', 'Cumhuriyet Dönemi Şiiri']], ask: (k) => `“${k}” adlı eserin şairi kimdir?`, facts: [
    ['Çile', 'Necip Fazıl Kısakürek', '“Büyük Doğu” dergisini çıkaran şair.'],
    ['Memleketimden İnsan Manzaraları', 'Nazım Hikmet', 'Serbest nazmın Türkçedeki öncüsü.'],
    ['Hasretinden Prangalar Eskittim', 'Ahmed Arif', 'Diyarbakırlı toplumcu şair.'],
    ['Otuz Beş Yaş', 'Cahit Sıtkı Tarancı', 'Ölüm temasıyla bilinen öz şiir temsilcisi.'],
    ['Sevda Sözleri', 'Cemal Süreya', 'İkinci Yeni’nin önde gelen şairi.'],
    ['Kırk Katır Kırk Satır', 'Fazıl Hüsnü Dağlarca', 'Hiçbir akıma bağlı kalmayan, çok yazan şair.'],
    ['Sisler Bulvarı', 'Attilâ İlhan', 'Mavi hareketinin öncüsü.'],
    ['Monna Rosa', 'Sezai Karakoç', 'Diriliş dergisini çıkaran şair.']
  ] },
  { topics: [['ayt-edb', 'Cumhuriyet Dönemi Roman ve Hikâyesi']], ask: (k) => `“${k}” adlı eserin yazarı kimdir?`, facts: [
    ['Huzur', 'Ahmet Hamdi Tanpınar', '“Beş Şehir”in de yazarı.'],
    ['Tutunamayanlar', 'Oğuz Atay', 'Türk romanında modernizmin öncüsü.'],
    ['Kuyucaklı Yusuf', 'Sabahattin Ali', '“Kürk Mantolu Madonna”nın da yazarı.'],
    ['İnce Memed', 'Yaşar Kemal', 'Çukurova’yı anlatan destansı romancı.'],
    ['Anayurt Oteli', 'Yusuf Atılgan', 'Az eserle büyük etki bırakan modernist yazar.'],
    ['Bizim Köy', 'Mahmut Makal', 'Köy Enstitüsü çıkışlı öğretmen yazar.'],
    ['Küçük Ağa', 'Tarık Buğra', 'Milli Mücadele’yi Akşehir’den anlatan yazar.'],
    ['Fatih–Harbiye', 'Peyami Safa', 'Doğu–Batı çatışmasını işleyen yazar.'],
    ['Semaver', 'Sait Faik Abasıyanık', 'Durum hikâyesinin ustası.']
  ] },
  { topics: [['ayt-edb', 'Halk Edebiyatı']], ask: (k) => `“${k}” halk edebiyatının hangi koluna aittir?`, pool: ['Divan edebiyatı', 'Tanzimat edebiyatı'], facts: [
    ['Mani', 'Anonim halk edebiyatı', 'Söyleyeni bilinmeyen, dört dizelik halk ürünü.'],
    ['Koşma', 'Âşık edebiyatı', 'Saz şairlerinin en çok kullandığı biçim.'],
    ['İlahi', 'Tekke edebiyatı', 'Tasavvufi duyguları dile getiren biçim.'],
    ['Türkü', 'Anonim halk edebiyatı', 'Ezgiyle söylenen, kalıplaşmış halk ürünü.'],
    ['Nefes', 'Tekke edebiyatı', 'Bektaşi şairlerinin söylediği biçim.'],
    ['Varsağı', 'Âşık edebiyatı', 'Güneydoğu Toroslardaki Varsak boyunun adını taşır.'],
    ['Ninni', 'Anonim halk edebiyatı', 'Çocuk uyutulurken söylenen, söyleyeni bilinmeyen ürün.'],
    ['Devriye', 'Tekke edebiyatı', 'Varlığın Allah’tan gelip yine O’na dönüşünü anlatan biçim.']
  ] },
  { topics: [['ayt-edb', 'İslamiyet Öncesi ve Geçiş Dönemi Türk Edebiyatı']], ask: (k) => `${k} Destanı hangi Türk topluluğuna aittir?`, facts: [
    ['Alp Er Tunga', 'Sakalar (İskitler)', 'İran’daki Şehname’de Afrasyab adıyla geçen kahraman.'],
    ['Oğuz Kağan', 'Hunlar', 'Mete Han’ın hayatıyla benzerlik gösterir.'],
    ['Bozkurt', 'Göktürkler', 'Kurt anadan türeyişi anlatır.'],
    ['Türeyiş', 'Uygurlar', 'Yerleşik hayata geçen topluluğun destanı.'],
    ['Manas', 'Kırgızlar', 'Dünyanın en uzun destanlarından biri.']
  ] },
  { topics: [['ayt-edb', 'Söz Sanatları']], ask: (k) => `${k} hangi söz sanatıdır?`, facts: [
    ['Bir durumu olduğundan çok büyük ya da küçük gösterme', 'Mübalağa (abartma)', 'Kan ağlamak, gözyaşından sel olmak gibi.'],
    ['Karşıt kavramları bir arada kullanma', 'Tezat', 'Ağlamak ile gülmek, gece ile gündüz gibi.'],
    ['Anlamca ilgili sözcükleri bir arada kullanma', 'Tenasüp', 'Gül, bülbül ve bahçeyi birlikte anmak gibi.'],
    ['Bilinen bir şeyi bilmezlikten gelme', 'Tecahül-i arif', '“Sen misin, yoksa ay mı?” gibi.'],
    ['Ünlü bir olaya ya da kişiye gönderme yapma', 'Telmih', 'Leyla ile Mecnun’u anarak aşkı anlatmak gibi.'],
    ['Düşünceyi bir atasözüyle destekleme', 'İrsal-i mesel', 'Dizede kalıplaşmış bir halk sözü kullanılır.'],
    ['Yalnız benzetilenle yapılan benzetme', 'Açık istiare', '“Aslan geldi” deyip yiğit birini kastetmek gibi.'],
    ['İnsan dışındaki varlıklara insana özgü nitelikler verme', 'Teşhis (kişileştirme)', '“Ağaçlar ağladı” gibi.'],
    ['İnsan dışındaki varlıkları konuşturma', 'İntak (konuşturma)', 'Fablarda hayvanların konuşması gibi.']
  ] },
  { topics: [['ayt-edb', 'Edebi Akımlar ve Dünya Edebiyatı']], ask: (k) => `${k} hangi edebi akımın temsilcisidir?`, facts: [
    ['Victor Hugo', 'Romantizm', '“Sefiller”in yazarı.'],
    ['Honoré de Balzac', 'Realizm', '“İnsanlık Komedyası”nın yazarı.'],
    ['Molière', 'Klasisizm', '17. yüzyıl Fransız komedi yazarı.'],
    ['Charles Baudelaire', 'Sembolizm', '“Kötülük Çiçekleri”nin şairi.'],
    ['Leconte de Lisle', 'Parnasizm', 'Şiirde biçim kusursuzluğunu savunan Fransız.'],
    ['André Breton', 'Sürrealizm', 'Akımın bildirisini yazan Fransız.'],
    ['Jean-Paul Sartre', 'Egzistansiyalizm', '“Bulantı”nın yazarı.'],
    ['Émile Zola', 'Natüralizm', 'İnsanı deney nesnesi gibi inceleyen, “Germinal”in yazarı.']
  ] }
];

export const TABLES: Table[] = [...TABLES1, ...TABLES2, ...TABLES3];

/** Tablolardan üreticiler: konu id’si değil (ders, konu adı) ile döner; index.ts bağlar */
export const FACT_GENERATORS: [subjectId: string, topic: string, gen: Generator][] = TABLES.flatMap((t) => {
  const answers = [...new Set([...t.facts.map((f) => f[1]), ...(t.pool ?? [])])];
  const gen: Generator = (r) => {
    const [k, a, h, own] = pick(r, t.facts);
    const wrong = shuffle(r, own ?? answers.filter((x) => x !== a)).slice(0, 4);
    return { stem: t.ask(k), ...choices(r, a, wrong), solution: t.why ? t.why(k, a) : `Doğru cevap: ${a}. ${h}`, hint: h };
  };
  return t.topics.map(([s, n]) => [s, n, gen] as [string, string, Generator]);
});
