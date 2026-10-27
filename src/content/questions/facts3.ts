/* Bilgi tabloları (3): YDT İngilizce ve TYT paragraf. Bu sorularda her maddenin kendi yanlış şıkları vardır
   (dil bilgisinde aynı tablonun öteki cevapları da boşluğa uyabileceği için). Kurallar facts.ts’teki gibi. */
import type { Table } from './facts';

const same = (k: string) => k;

export const TABLES3: Table[] = [
  /* ================= YDT İngilizce ================= */
  { topics: [['ydt-ing', 'Kelime Bilgisi']], ask: (k) => `Which word is closest in meaning to “${k}”?`, facts: [
    ['enormous', 'huge', 'Çok büyük anlamına gelir.'],
    ['rapid', 'fast', 'Çok çabuk olan.'],
    ['purchase', 'buy', 'Para verip almak.'],
    ['assist', 'help', 'Birine destek olmak.'],
    ['commence', 'begin', 'Bir şeyi başlatmak.'],
    ['sufficient', 'enough', 'Yeterli miktarda olan.'],
    ['obtain', 'get', 'Bir şeyi edinmek.'],
    ['vanish', 'disappear', 'Gözden kaybolmak.'],
    ['reluctant', 'unwilling', 'İsteksiz olan.']
  ] },
  { topics: [['ydt-ing', 'Tenses']], ask: same, facts: [
    ['By the time we arrived at the cinema, the film ----.', 'had already started', 'Varıştan önce tamamlanmış bir eylem: geçmişten de önce.', ['has already started', 'already starts', 'is already starting', 'will already start']],
    ['She ---- in this company since 2019.', 'has worked', '“since” ile geçmişte başlayıp hâlâ süren durum.', ['worked', 'works', 'had worked', 'is working']],
    ['Look at those dark clouds! It ---- rain.', 'is going to', 'Şu anki kanıta dayanan yakın gelecek tahmini.', ['rains', 'rained', 'has rained', 'was raining']],
    ['While I ---- dinner, the phone rang.', 'was cooking', 'Kısa bir eylem, geçmişte süren başka bir eylemin ortasında oldu.', ['cooked', 'have cooked', 'cook', 'had cooked']],
    ['This time next week, we ---- on a beach in Antalya.', 'will be lying', 'Gelecekte belirli bir anda sürüyor olacak eylem.', ['lay', 'have lain', 'had lain', 'were lying']],
    ['Water ---- at 100 degrees Celsius at sea level.', 'boils', 'Genel bir bilimsel gerçek.', ['is boiling', 'boiled', 'has boiled', 'will have boiled']],
    ['By the end of this year, he ---- three books.', 'will have written', 'Gelecekte bir zamana kadar tamamlanmış olacak eylem.', ['wrote', 'has written', 'had written', 'is writing']],
    ['I ---- for two hours when she finally called.', 'had been waiting', 'Geçmişteki bir andan önce başlayıp o ana kadar süren eylem.', ['have been waiting', 'am waiting', 'will wait', 'wait']]
  ] },
  { topics: [['ydt-ing', 'Modals']], ask: same, facts: [
    ['You ---- see a doctor about that cough; it has lasted for weeks.', 'should', 'Bir öneri ya da tavsiye veriliyor.', ['mustn’t', 'needn’t', 'couldn’t', 'might not']],
    ['She ---- be at home; I saw her leave ten minutes ago.', 'can’t', 'Kanıta dayanan kesin olumsuz çıkarım.', ['must', 'should', 'has to', 'would']],
    ['When I was a child, I ---- swim, but now I can’t.', 'could', 'Geçmişteki genel yetenek.', ['can', 'must', 'should', 'may']],
    ['You ---- have told me earlier; now it is too late.', 'should', 'Geçmişte yapılmayan ama yapılması gereken bir şey için eleştiri.', ['must', 'can', 'will', 'need']],
    ['---- I open the window? It is very hot in here.', 'Shall', 'Birinci tekil kişiyle teklif.', ['Must', 'Ought', 'Need', 'Has']],
    ['He ---- have taken the bus; his car is still in the garage.', 'must', 'Geçmişe dair güçlü, kanıta dayanan tahmin.', ['can’t', 'should', 'needn’t', 'mustn’t']],
    ['Students ---- wear a uniform at this school; it is a rule.', 'have to', 'Dışarıdan konan bir kural, zorunluluk.', ['needn’t', 'might', 'could', 'would rather']]
  ] },
  { topics: [['ydt-ing', 'Passive Voice']], ask: same, facts: [
    ['The Eiffel Tower ---- in 1889.', 'was built', 'Kule yapan değil, yapılan; geçmişte tamamlandı.', ['built', 'has built', 'is building', 'builds']],
    ['English ---- in many countries around the world.', 'is spoken', 'Genel bir durum; dil konuşulan şeydir.', ['speaks', 'is speaking', 'spoke', 'has spoken']],
    ['The new bridge ---- next year.', 'will be completed', 'Gelecekte tamamlanacak; köprü işi yapan değil.', ['will complete', 'completes', 'has completed', 'completed']],
    ['The letters ---- yet.', 'haven’t been sent', '“yet” ile olumsuz, edilgen ve şimdiki zamana uzanan durum.', ['didn’t send', 'haven’t sent', 'aren’t sending', 'won’t send']],
    ['The room ---- when we arrived, so we waited outside.', 'was being cleaned', 'Varış anında süren edilgen bir eylem.', ['was cleaning', 'cleaned', 'has been cleaning', 'cleans']],
    ['The thief ---- by the police before he could escape.', 'had been caught', 'Kaçmadan önce tamamlanmış edilgen eylem.', ['had caught', 'has caught', 'catches', 'was catching']],
    ['This medicine must ---- after meals.', 'be taken', 'Modal sonrası edilgen yapı: modal + be + V3.', ['take', 'taken', 'to take', 'taking']],
    ['I had my car ---- yesterday.', 'repaired', '“have something done” yapısı: işi başkasına yaptırmak.', ['repair', 'to repair', 'repairing', 'be repaired']]
  ] },
  { topics: [['ydt-ing', 'Conditionals ve Wish']], ask: same, facts: [
    ['If you heat ice, it ----.', 'melts', 'Her zaman doğru olan bir sonuç (sıfırıncı tip).', ['melted', 'would melt', 'would have melted', 'had melted']],
    ['If it rains tomorrow, we ---- the picnic.', 'will cancel', 'Gelecekte olası bir koşul ve sonucu (birinci tip).', ['would have cancelled', 'cancelled', 'had cancelled', 'would cancel']],
    ['If I ---- you, I would accept the offer.', 'were', 'Gerçek dışı şimdiki koşulda “be” fiilinin kalıbı.', ['am', 'will be', 'have been', 'had']],
    ['If she had studied harder, she ---- the exam.', 'would have passed', 'Geçmişte gerçekleşmemiş koşulun gerçekleşmemiş sonucu (üçüncü tip).', ['will pass', 'passes', 'would pass', 'passed']],
    ['I wish I ---- more free time these days.', 'had', 'Şimdiki zamana dair gerçek dışı dilek: bir zaman geri.', ['have', 'will have', 'am having', 'have had']],
    ['I wish I ---- that rude comment yesterday.', 'hadn’t made', 'Geçmişteki bir olaydan pişmanlık.', ['didn’t make', 'don’t make', 'won’t make', 'haven’t made']],
    ['---- you need any help, please call me.', 'Should', '“If” düşürülerek yapılan devrik koşul cümlesi.', ['Would', 'Had', 'Were', 'Did']]
  ] },
  { topics: [['ydt-ing', 'Relative Clauses']], ask: same, facts: [
    ['The woman ---- lives next door is a doctor.', 'who', 'İnsanı niteleyen, özne konumundaki ilgi zamiri.', ['which', 'where', 'whose', 'when']],
    ['This is the house ---- I was born.', 'where', 'Yer bildiren ilgi zamiri; cümlede “in” yok.', ['which', 'who', 'whose', 'what']],
    ['I met a man ---- car had been stolen.', 'whose', 'Sahiplik bildiren ilgi zamiri.', ['who', 'which', 'whom', 'where']],
    ['Do you remember the day ---- we first met?', 'when', 'Zaman bildiren ismi niteleyen ilgi zamiri.', ['where', 'which', 'who', 'whose']],
    ['The book ---- you lent me was fascinating.', 'which', 'Nesneyi (kitap) niteleyen ilgi zamiri.', ['who', 'where', 'whose', 'when']],
    ['My brother, ---- lives in London, is visiting us.', 'who', 'Virgüllü (tanımlamayan) yan cümlede insan için; “that” burada kullanılamaz.', ['that', 'which', 'whose', 'where']],
    ['Ankara, ---- is the capital of Turkey, is in Central Anatolia.', 'which', 'Virgüllü yan cümlede yer adı özne konumunda; “that” kullanılamaz.', ['where', 'that', 'who', 'whose']],
    ['The person to ---- I spoke was very helpful.', 'whom', 'Edat (to) sonrası insan için kullanılan nesne zamiri.', ['who', 'that', 'which', 'whose']]
  ] },
  { topics: [['ydt-ing', 'Noun Clauses']], ask: same, facts: [
    ['I don’t know ---- she lives.', 'where', 'Dolaylı soru; cümle düz sırada, yer soruluyor.', ['where does', 'that', 'what does', 'which does']],
    ['Can you tell me ---- the meeting starts?', 'what time', 'Saat soran dolaylı soru; düz sıra.', ['what time does', 'that', 'whether does', 'which does']],
    ['---- he said surprised everyone.', 'What', 'Özne konumunda “söylediği şey”.', ['That what', 'Which', 'Whether what', 'How what']],
    ['I wonder ---- she will come to the party or not.', 'whether', '“or not” ile birlikte evet/hayır belirsizliği.', ['that', 'what', 'which', 'who']],
    ['It is surprising ---- he passed the exam without studying.', 'that', 'Bir olguyu bildiren isim cümlesi.', ['what', 'which', 'whom', 'whose']],
    ['Nobody knows ---- this old house belongs to.', 'whom', 'Edatın (to) nesnesi olan kişi.', ['what', 'which', 'whose', 'whether']]
  ] },
  { topics: [['ydt-ing', 'Adverbial Clauses ve Bağlaçlar']], ask: same, facts: [
    ['---- it was raining heavily, they went for a walk.', 'Although', 'İki cümle arasında beklenmedik bir zıtlık var.', ['Because', 'Since', 'So that', 'As soon as']],
    ['He stayed at home ---- he was ill.', 'because', 'İkinci yan cümle bir neden bildiriyor.', ['although', 'unless', 'so that', 'even if']],
    ['Call me ---- you arrive at the airport.', 'as soon as', 'Bir eylemin hemen ardından ötekinin olması.', ['although', 'unless', 'despite', 'so']],
    ['You won’t pass the exam ---- you study harder.', 'unless', '“If … not” anlamında bir koşul.', ['because', 'although', 'so that', 'whereas']],
    ['She saved money ---- she could buy a new laptop.', 'so that', 'Amaç bildiren bağlaç; yan cümlede “could” var.', ['although', 'because of', 'unless', 'in spite of']],
    ['---- the bad weather, the match was played.', 'Despite', 'Arkasından cümle değil, isim öbeği geliyor; zıtlık var.', ['Although', 'Because', 'Even though', 'Unless']],
    ['The film was ---- boring that we left early.', 'so', '“…that” ile sonuç bildiren yapı; arkada sıfat var.', ['such', 'too', 'very', 'enough']]
  ] },
  { topics: [['ydt-ing', 'Gerund ve Infinitive']], ask: same, facts: [
    ['She enjoys ---- novels in her free time.', 'reading', 'Bu fiilden sonra -ing kullanılır.', ['to read', 'read', 'to reading', 'reads']],
    ['They decided ---- a new house.', 'to buy', 'Bu fiilden sonra “to” + yalın fiil gelir.', ['buying', 'buy', 'bought', 'to buying']],
    ['I’m looking forward to ---- you soon.', 'seeing', 'Buradaki “to” bir edattır; arkasından -ing gelir.', ['see', 'saw', 'be seen', 'have seen']],
    ['He stopped ---- because it was bad for his health.', 'smoking', 'Alışkanlığı bırakmak: fiilden sonra -ing.', ['to smoke', 'smoke', 'smoked', 'to smoking']],
    ['My parents made me ---- my room.', 'clean', '“make” ettirgen anlamda kullanılınca yalın fiil alır.', ['to clean', 'cleaning', 'cleaned', 'to cleaning']],
    ['It’s no use ---- about the past.', 'worrying', '“It’s no use” kalıbından sonra -ing gelir.', ['to worry', 'worry', 'worried', 'to worrying']],
    ['I’d rather ---- at home tonight.', 'stay', '“would rather” yalın fiil alır.', ['to stay', 'staying', 'stayed', 'to staying']]
  ] },
  { topics: [['ydt-ing', 'Prepositions ve Phrasal Verbs']], ask: same, facts: [
    ['Please turn ---- the lights when you leave the room.', 'off', 'Bir cihazı kapatmak.', ['on', 'up', 'into', 'over']],
    ['I’m looking ---- my keys; have you seen them?', 'for', 'Kayıp bir şeyi aramak.', ['after', 'up', 'into', 'over']],
    ['She takes ---- her mother; they look very similar.', 'after', 'Aile büyüğüne benzemek.', ['off', 'up', 'over', 'in']],
    ['The meeting was put ---- until next week.', 'off', 'Bir şeyi ertelemek.', ['on', 'up', 'in', 'through']],
    ['He gave ---- smoking last year.', 'up', 'Bir alışkanlığı bırakmak.', ['in', 'off', 'out', 'away']],
    ['I’m interested ---- learning Spanish.', 'in', 'Bu sıfat bu edatla kullanılır.', ['on', 'at', 'for', 'with']],
    ['The children are afraid ---- the dark.', 'of', 'Korku bildiren sıfatın edatı.', ['from', 'with', 'at', 'about']]
  ] },
  { topics: [['ydt-ing', 'Cloze Test']], ask: same, facts: [
    ['Sleep is essential for health. ---- adults need seven to nine hours a night, many get far less.', 'Although', 'İki yargı arasında zıtlık var: ihtiyaç ile gerçek durum.', ['Because', 'Since', 'As a result', 'Therefore']],
    ['Bees are vital for agriculture. ----, about a third of the food we eat depends on pollination.', 'In fact', 'Önceki yargıyı güçlendiren bir bilgi ekleniyor.', ['However', 'Otherwise', 'In contrast', 'Nevertheless']],
    ['Plastic waste is a serious problem; ----, many countries have banned single-use bags.', 'therefore', 'İkinci yargı birincinin sonucu.', ['however', 'although', 'unless', 'whereas']],
    ['The museum, ---- was opened in 1950, attracts millions of visitors.', 'which', 'Virgüllü yan cümlede nesne niteleyen ilgi zamiri.', ['who', 'where', 'that', 'whose']],
    ['Regular exercise reduces stress; ----, it improves sleep quality.', 'moreover', 'Aynı yönde ikinci bir yarar ekleniyor.', ['however', 'instead', 'otherwise', 'on the contrary']],
    ['Many species are in danger ---- habitat loss and climate change.', 'due to', 'Arkasından isim öbeği geliyor ve neden bildiriyor.', ['because', 'although', 'so that', 'despite of']]
  ] },
  { topics: [['ydt-ing', 'Cümle Tamamlama']], ask: same, facts: [
    ['Unless you water the plants regularly, ----.', 'they will dry out', '“Unless” = “if … not”; sonuç gelecekte.', ['they grew very fast', 'you watered them yesterday', 'they had bloomed', 'they would have survived']],
    ['Although he had very little money, ----.', 'he always helped those in need', 'Zıtlık bekleniyor: az parası olmasına rağmen.', ['he couldn’t buy anything', 'he was poor', 'he spent nothing', 'because he saved it']],
    ['If I had known about the traffic, ----.', 'I would have left earlier', 'Geçmişe dair gerçek dışı koşulun sonucu.', ['I will leave earlier', 'I leave earlier', 'I would leave earlier tomorrow', 'I am leaving earlier']],
    ['As soon as the bell rang, ----.', 'the students rushed out of the classroom', 'Geçmişte arka arkaya olan iki eylem.', ['the students will rush out', 'the students had been rushing out for hours', 'the students are rushing out', 'the students rush out every day tomorrow']],
    ['She has been learning English ----.', 'since she was ten', 'Present perfect continuous, başlangıç noktası ister.', ['two years ago', 'last summer', 'yesterday morning', 'when she will be ten']],
    ['The more you practise, ----.', 'the better you will become', '“The more …, the …” karşılaştırma kalıbı.', ['you become good', 'better you are', 'the best you will become', 'more you will be better']],
    ['By the time the firefighters arrived, ----.', 'the fire had destroyed the building', 'Gelişten önce tamamlanmış eylem.', ['the fire destroys the building', 'the fire will destroy the building', 'the fire has destroyed the building', 'the fire is destroying the building']],
    ['He spoke so quietly that ----.', 'nobody could hear him', '“so … that” sonuç bildirir.', ['he was shy', 'because he was tired', 'although he was loud', 'unless he shouted']]
  ] },
  { topics: [['ydt-ing', 'Çeviri (İngilizce–Türkçe)']], ask: (k) => `“${k}” cümlesinin Türkçedeki en yakın karşılığı hangisidir?`, facts: [
    ['She has been living in Izmir for five years.', 'Beş yıldır İzmir’de yaşıyor.', 'Geçmişte başlayıp hâlâ süren durum.', ['Beş yıl önce İzmir’de yaşıyordu.', 'Beş yıl İzmir’de yaşayacak.', 'İzmir’de beş yıl yaşamıştı.', 'Beş yıl sonra İzmir’e taşınacak.']],
    ['If it hadn’t rained, we would have gone to the beach.', 'Yağmur yağmasaydı plaja giderdik.', 'Geçmişte gerçekleşmemiş bir koşul.', ['Yağmur yağmazsa plaja gideceğiz.', 'Yağmur yağdığı için plaja gittik.', 'Yağmur yağsa da plaja gideriz.', 'Yağmur yağarken plaja gidiyorduk.']],
    ['The bridge was built by Roman engineers.', 'Köprü Romalı mühendisler tarafından yapıldı.', 'Edilgen yapı; geçmiş zaman.', ['Romalı mühendisler köprüyü yapacak.', 'Köprüyü Romalı mühendisler yapıyor.', 'Romalı mühendisler köprü yapmayı sever.', 'Köprü Romalı mühendislere satıldı.']],
    ['You don’t have to finish the report today.', 'Raporu bugün bitirmek zorunda değilsin.', 'Zorunluluğun olmadığını bildiren yapı.', ['Raporu bugün bitirmemelisin.', 'Raporu bugün bitirmen gerek.', 'Raporu bugün bitiremezsin.', 'Raporu bugün bitirmiş olmalısın.']],
    ['Hardly had we sat down when the lights went out.', 'Daha yeni oturmuştuk ki ışıklar söndü.', 'Devrik yapı: bir eylemin hemen ardından öteki oldu.', ['Oturmadan önce ışıklar sönmüştü.', 'Işıklar sönünce zorlukla oturduk.', 'Oturamadık çünkü ışıklar sönüktü.', 'Işıklar sönene kadar oturmadık.']],
    ['He must have forgotten our appointment.', 'Randevumuzu unutmuş olmalı.', 'Geçmişe dair güçlü tahmin.', ['Randevumuzu unutmamalı.', 'Randevumuzu unutmak zorunda.', 'Randevumuzu unutabilir.', 'Randevumuzu unutacak.']],
    ['The more you read, the more you learn.', 'Ne kadar çok okursan o kadar çok öğrenirsin.', 'Orantı bildiren kalıp.', ['Çok okursan az öğrenirsin.', 'Okumak öğrenmekten daha önemlidir.', 'Okuduğun kadar öğrenemezsin.', 'Daha çok okumalı ve öğrenmelisin.']],
    ['I wish I had listened to my teacher.', 'Keşke öğretmenimi dinleseydim.', 'Geçmişe dair pişmanlık.', ['Keşke öğretmenimi dinlesem.', 'Öğretmenimi dinlemek istiyorum.', 'Öğretmenimi dinlediğim için mutluyum.', 'Öğretmenimi dinleyeceğim.']]
  ] },
  { topics: [['ydt-ing', 'Okuma Parçası']], ask: same, facts: [
    ['“Honeybees communicate the location of food through a ‘waggle dance’. The angle of the dance shows the direction relative to the sun, while its length shows the distance.” According to the passage, the length of the dance indicates ----.', 'how far away the food is', 'Parçanın ikinci cümlesindeki “length” ile ne eşleştirilmiş, bak.', ['the direction of the sun', 'the type of food', 'the number of bees needed', 'the time of day']],
    ['“The Great Wall of China was not built at once. Different dynasties added sections over about two thousand years, mainly to protect against invasions from the north.” The main purpose of the wall was ----.', 'defence against northern invaders', 'Parçadaki “mainly to …” ifadesini bul.', ['to mark trade routes', 'to attract tourists', 'to store grain', 'to connect cities in the south']],
    ['“Although coffee is often blamed for dehydration, recent studies suggest that moderate coffee drinking contributes to daily fluid intake much like water.” The passage suggests that moderate coffee drinking ----.', 'does not significantly dehydrate the body', '“Although” ile başlayan yaygın inanç, ardından gelen bulguyla çürütülüyor.', ['causes serious dehydration', 'should be replaced by water', 'has no effect on fluid intake', 'is harmful in all amounts']],
    ['“Octopuses can change both the colour and the texture of their skin within seconds. They use this ability to hide from predators and to sneak up on prey.” The octopus changes its appearance in order to ----.', 'avoid enemies and catch food', 'Son cümledeki iki amaç birlikte verilmeli.', ['attract a mate only', 'regulate body temperature', 'communicate with humans', 'show that it is ill']],
    ['“In the 1800s, many cities had no sewage systems, and diseases like cholera spread quickly. The construction of modern sewers dramatically reduced such outbreaks.” It can be inferred that cholera was spread mainly through ----.', 'contaminated water', 'Kanalizasyon kurulunca salgın azalmışsa hastalık neyle yayılıyordu?', ['insect bites', 'cold weather', 'poor diet', 'air pollution from factories']],
    ['“Finland’s schools give very little homework, yet its students regularly perform well in international tests. Experts point to well-trained teachers and plenty of play time.” According to experts, one reason for Finland’s success is ----.', 'highly qualified teachers', 'Uzmanların gösterdiği iki nedenden biri.', ['large amounts of homework', 'long school days', 'strict exams every week', 'expensive private tutors']]
  ] },
  { topics: [['ydt-ing', 'Diyalog ve Durum']], ask: same, facts: [
    ['A: “I’m sorry I’m late. The traffic was terrible.” B: “----”', 'Don’t worry, we haven’t started yet.', 'Özür dileyen birine verilen doğal, rahatlatıcı yanıt.', ['Yes, I am late too.', 'The traffic is very good today.', 'I will drive to work tomorrow.', 'Why are you so early?']],
    ['A: “Could you pass me the salt, please?” B: “----”', 'Sure, here you are.', 'Kibar bir isteğe verilen yanıt.', ['No, I don’t like salt.', 'Yes, I could.', 'It’s on the menu.', 'I passed the exam.']],
    ['A: “Would you like to join us for dinner tonight?” B: “----”', 'I’d love to, but I have to study.', 'Daveti kibarca geri çevirme.', ['Yes, I joined.', 'Dinner was delicious.', 'I don’t know who you are.', 'No, I am hungry.']],
    ['You want to know how to get to the train station. What do you say to a stranger?', 'Excuse me, could you tell me the way to the station?', 'Yabancıya kibar bir soru.', ['Where is my train?', 'Give me directions now.', 'Is this the train?', 'I know the way to the station.']],
    ['A: “I failed my driving test again.” B: “----”', 'Never mind, you’ll pass next time.', 'Üzgün birine moral verme.', ['Congratulations!', 'I passed mine too.', 'What a wonderful day!', 'You should be happy.']],
    ['A: “How long have you been living here?” B: “----”', 'For about three years.', 'Süre soruluyor.', ['Three years ago.', 'Next year.', 'In a big house.', 'With my family.']],
    ['Your friend has a job interview tomorrow. What do you say?', 'Good luck! I’m sure you’ll do well.', 'Önemli bir günden önce iyi dilek.', ['Get well soon!', 'Happy birthday!', 'Sorry for your loss.', 'Congratulations on your new baby!']],
    ['A: “Do you mind if I open the window?” B: “----”', 'Not at all, go ahead.', '“Do you mind” sorusuna izin verirken olumsuz yanıt verilir.', ['Yes, please open it.', 'Yes, go ahead.', 'I mind the window.', 'Open is good.']]
  ] },
  { topics: [['ydt-ing', 'Paragraf Tamamlama ve Anlam Bütünlüğü']], ask: same, facts: [
    ['“Tea is the second most consumed drink in the world after water. ---- In Turkey, for example, people drink it at almost every meal.” Which sentence best fills the blank?', 'It is a part of daily life in many cultures.', 'Boşluktan sonraki “for example” neyin örneği olabilir?', ['Coffee was discovered in Ethiopia.', 'Water covers most of the Earth.', 'Tea leaves are expensive to grow.', 'Many people dislike hot drinks.']],
    ['“Recycling saves energy and raw materials. ---- Therefore, governments encourage people to separate their waste.” Which sentence best fills the blank?', 'It also reduces the amount of rubbish sent to landfills.', '“Therefore” öncesinde geri dönüşümün bir yararı daha olmalı.', ['Plastic was invented in the 1900s.', 'Some people never recycle.', 'Landfills are located outside cities.', 'Energy prices have risen sharply.']],
    ['“Many animals migrate long distances each year. ---- Arctic terns, for instance, fly from the Arctic to the Antarctic and back.” Which sentence best fills the blank?', 'Some birds travel tens of thousands of kilometres.', 'Sonraki cümle bir kuş örneği veriyor.', ['Fish do not need to migrate.', 'The Arctic is very cold.', 'Penguins cannot fly.', 'Migration is dangerous for humans.']],
    ['“Smartphones have changed the way we communicate. ---- However, they have also been linked to sleep problems and reduced attention.” Which sentence best fills the blank?', 'We can now contact people anywhere instantly.', '“However” öncesinde olumlu bir etki gelmeli.', ['They cause many health problems.', 'Many people cannot sleep well.', 'Attention is important for students.', 'Old phones were heavier.']],
    ['Which sentence is irrelevant? (I) Volcanoes form where tectonic plates meet. (II) Magma rises through cracks in the crust. (III) Pizza is a popular food in Italy. (IV) When pressure builds up, an eruption occurs. (V) Some eruptions can affect global climate.', 'III', 'Paragrafın konusu yanardağlar; konudan kopan cümleyi bul.', ['I', 'II', 'IV', 'V']],
    ['Which sentence is irrelevant? (I) Regular reading improves vocabulary. (II) It also helps develop concentration. (III) Football is played by two teams of eleven. (IV) Readers often become better writers. (V) Libraries make books available to everyone.', 'III', 'Paragrafın konusu okumanın yararları.', ['I', 'II', 'IV', 'V']]
  ] },

  /* ================= TYT Türkçe: Paragraf ================= */
  { topics: [['tyt-tr', 'Paragraf']], ask: same, facts: [
    ['“Kitap okumak, başka hayatları yaşamanın en ucuz yoludur. Bir romanı bitirdiğimizde, hiç gitmediğimiz bir şehri tanımış, hiç tanışmadığımız insanlarla dostluk kurmuş oluruz. Bu yüzden okumak, yalnız bilgi değil, deneyim de kazandırır.” Bu paragrafın ana düşüncesi nedir?', 'Okumak insana deneyim kazandırır.', 'Paragrafın son cümlesi “bu yüzden” ile sonucu bağlıyor.', ['Romanlar çok pahalıdır.', 'Seyahat etmek okumaktan daha iyidir.', 'Yalnız bilgi için okunmalıdır.', 'Şehirleri tanımak için roman okunmaz.']],
    ['“Çocuklar oyun oynarken yalnız eğlenmez; kural koymayı, sırasını beklemeyi, kaybetmeyi kabullenmeyi de öğrenir. Oyun, çocuğun ilk okuludur.” Bu paragrafta asıl anlatılmak istenen nedir?', 'Oyun çocukların sosyal becerilerini geliştirir.', 'Sayılan kazanımlar ve son cümledeki benzetme neyi anlatıyor?', ['Çocuklar okulda oyun oynamamalıdır.', 'Oyunlar yalnız eğlence içindir.', 'Kaybetmek çocukları üzer.', 'Çocuklar kural koymayı sevmez.']],
    ['“Şehirlerde ağaç sayısı arttıkça yaz aylarında sıcaklık birkaç derece düşer. Ağaçlar gölge yapar, yapraklarından su buharı verir ve havayı serinletir.” Bu paragraftan aşağıdakilerin hangisi çıkarılabilir?', 'Ağaçlandırma kentlerdeki sıcaklığı azaltabilir.', 'Paragraftaki neden–sonuç ilişkisini kur.', ['Ağaçlar yalnız kışın yararlıdır.', 'Şehirlerde ağaç yetişmez.', 'Su buharı havayı ısıtır.', 'Gölge sıcaklığı artırır.']],
    ['“Yazar, romanında olayları kronolojik sırayla değil, kahramanın hatırladığı sırayla anlatıyor. Okur, geçmişle bugün arasında gidip gelerek parçaları kendisi birleştiriyor.” Bu paragrafta romanın hangi özelliğinden söz edilmektedir?', 'Anlatım tekniğinden', 'Olayların hangi sırayla anlatıldığı konu ediliyor.', ['Konusundan', 'Kahramanların sayısından', 'Sayfa sayısından', 'Basım yılından']],
    ['“Düzenli uyumayan öğrencilerin derste dikkatini toplamakta zorlandığı biliniyor. Uyku sırasında beyin, gün içinde öğrenilenleri düzenler ve kalıcı hâle getirir.” Bu paragrafa göre uyku neden önemlidir?', 'Öğrenilenlerin kalıcı olmasını sağladığı için', 'İkinci cümle uykunun beyindeki işlevini anlatıyor.', ['Kas gelişimini sağladığı için', 'Zamanı kısalttığı için', 'Dersleri kolaylaştırdığı için', 'Öğrencileri yorduğu için']],
    ['“(I) Arılar, bitkilerin tozlaşmasında büyük rol oynar. (II) Meyve ve sebzelerin önemli bir kısmı bu tozlaşmaya bağlıdır. (III) Bal, kahvaltıların vazgeçilmezidir. (IV) Arı sayısı azalırsa tarım ürünleri de azalır.” Bu paragrafta numaralanmış cümlelerden hangisi düşüncenin akışını bozmaktadır?', 'III', 'Paragrafın konusu arıların tarımdaki rolü; konudan sapan cümleyi bul.', ['I', 'II', 'IV', 'Hiçbiri']]
  ] }
];
