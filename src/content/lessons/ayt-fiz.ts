import type { LessonSet } from './types';

const L: LessonSet = {
  'Vektörler ve Bağıl Hareket': {
    intro: 'Vektörlerle toplama–çıkarma, bileşenlere ayırma ve hareketli gözlemciye göre hız (bağıl hız). Nehir problemleri sık sorulur.',
    parts: [
      { h: 'Vektörler', items: [
        'Vektörün büyüklüğü, doğrultusu ve yönü vardır.',
        '**Uç uca ekleme:** ilk vektörün başlangıcından son vektörün ucuna çizilen vektör bileşkedir.',
        'Aynı yönlü iki vektörün bileşkesi toplam, zıt yönlü iki vektörünki farktır. Bileşke en çok a + b, en az |a − b| olur.',
        'Dik iki vektör: R = √{a² + b²}.',
        'Bileşenler: Fₓ = F · cos α, F_{y} = F · sin α.'
      ] },
      { h: 'Bağıl hareket', items: [
        'Gözlemciye göre hız: v_{bağıl} = v_{cisim} − v_{gözlemci}.',
        'Aynı yönde giden araçlar birbirini fark kadar, zıt yönde gidenler toplam kadar hızla görür.',
        '**Nehir problemi:** kayık karşıya dik yönelirse karşıya geçiş süresi yalnız kayığın suya göre hızına bağlıdır; akıntı yalnız sürüklenme mesafesini belirler.'
      ] }
    ],
    traps: [
      'Akıntı hızı karşıya geçiş süresini değiştirmez (kayık akıntıya dik yöneldiyse).'
    ],
    example: {
      q: 'Suya göre hızı 4 m/s olan kayık, akıntı hızı 3 m/s olan 80 m genişliğindeki nehirde karşıya dik yöneliyor. Kaç saniyede karşıya geçer, ne kadar sürüklenir?',
      a: 't = {80/4} = 20 s. Sürüklenme 3 · 20 = 60 m.'
    }
  },

  'Newton’un Hareket Yasaları': {
    intro: 'Kuvvet ile hareket ilişkisi. Bağlı cisimler, eğik düzlem ve makara sistemlerinde ivme ve ip gerilmesi sorulur.',
    parts: [
      { h: 'Yasalar', items: [
        '**1. yasa:** F_{net} = 0 ise cisim durumunu korur (durur ya da sabit hızla gider).',
        '**2. yasa:** F_{net} = m · a. İvme net kuvvet yönündedir.',
        '**3. yasa:** etki–tepki kuvvetleri eşit, zıt yönlü ve farklı cisimlerdedir.'
      ] },
      { h: 'Uygulamalar', items: [
        'Bağlı cisimler: sisteme bir bütün gibi bak, a = {F_{net}/toplam kütle}; ip gerilmesi için cisimleri tek tek incele.',
        '**Eğik düzlem:** ağırlığın eğim boyunca bileşeni mg · sin α, düzleme dik bileşeni mg · cos α.',
        '**Sürtünme:** f = k · N; harekete ya da hareket eğilimine zıt.',
        '**Asansör:** yukarı ivmelenirken tartı fazla, aşağı ivmelenirken az gösterir: N = m(g ± a).'
      ] }
    ],
    traps: [
      'Sabit hızla yükselen asansörde tartı ağırlığı doğru gösterir; ivme yoktur.'
    ],
    example: {
      q: 'Sürtünmesiz yatay düzlemde birbirine bağlı 2 kg ve 3 kg kütleli cisimler 20 N kuvvetle çekiliyor (kuvvet 3 kg’lık cisme uygulanıyor). İp gerilmesi kaç N’dur?',
      a: 'a = {20/5} = 4 m/s². İp 2 kg’lık cismi çekiyor: T = 2 · 4 = 8 N.'
    }
  },

  'Bir Boyutta Sabit İvmeli Hareket': {
    intro: 'Hızın düzgün değiştiği hareket. Hareket denklemleri ve grafik yorumları sorulur.',
    parts: [
      { h: 'Denklemler', items: [
        'v = v₀ + a · t.',
        'x = v₀ · t + {1/2}a · t².',
        'v² = v₀² + 2a · x.',
        'Ortalama hız = {v₀ + v/2} (yalnız sabit ivmede).'
      ] },
      { h: 'Grafikler', items: [
        '**Konum–zaman:** eğim hız; parabol ise ivmeli hareket.',
        '**Hız–zaman:** eğim ivme, alan yer değiştirme.',
        '**İvme–zaman:** alan hız değişimi.',
        'Hız ile ivme aynı yöndeyse cisim hızlanır, zıt yöndeyse yavaşlar.'
      ] }
    ],
    example: {
      q: '20 m/s hızla giden araç fren yapıp 4 m/s² ile yavaşlıyor. Durana kadar kaç m yol alır?',
      a: 'v² = v₀² + 2ax → 0 = 400 − 8x → x = 50 m.'
    }
  },

  'Atışlar': {
    intro: 'Yer çekimi etkisindeki hareketler: serbest düşme, düşey atış, yatay atış ve eğik atış.',
    parts: [
      { h: 'Düşey hareketler', items: [
        '**Serbest düşme:** v = g · t, h = {1/2}g · t².',
        '**Yukarı atış:** çıkış süresi t = {v₀/g}, maksimum yükseklik h = {v₀²/2g}; iniş süresi çıkışa eşittir.',
        'Hava direnci yoksa cismin kütlesi hareketi etkilemez.'
      ] },
      { h: 'Yatay ve eğik atış', items: [
        '**Yatay atış:** yatayda sabit hız (x = v₀ · t), düşeyde serbest düşme. Uçuş süresi yalnız yüksekliğe bağlıdır.',
        '**Eğik atış:** vₓ = v₀ · cos α (sabit), v_{y} = v₀ · sin α (yer çekimiyle değişir).',
        'Tepe noktasında düşey hız sıfır, yatay hız sabit.',
        'Menzil en çok 45°’de; 30° ve 60° ile atılanların menzilleri eşittir.'
      ] }
    ],
    traps: [
      'Aynı yükseklikten yatay atılan ve serbest bırakılan cisimler yere aynı anda düşer.'
    ],
    example: {
      q: '45 m yükseklikten yatay 10 m/s hızla atılan cisim kaç m ileriye düşer? (g = 10 m/s²)',
      a: '45 = 5t² → t = 3 s. x = 10 · 3 = 30 m.'
    }
  },

  'İş, Enerji ve Güç': {
    intro: 'İş–enerji teoremi, mekanik enerjinin korunumu ve sürtünmeli ortamlarda enerji kaybı.',
    parts: [
      { h: 'Bağıntılar', items: [
        'W = F · x · cos α.',
        '**İş–enerji teoremi:** net kuvvetin yaptığı iş kinetik enerji değişimine eşittir: W_{net} = ΔE_{k}.',
        'Korunumlu ortamda E_{k} + E_{p} sabittir.',
        'Sürtünmeli ortamda: E_{ilk} = E_{son} + f · x.',
        'Güç: P = {W/t} = F · v.'
      ] }
    ],
    example: {
      q: '2 kg kütleli cisim 10 m/s hızla sürtünmeli yatay düzlemde kayıp 5 m sonra duruyor. Sürtünme kuvveti kaç N’dur?',
      a: 'ΔE_{k} = {1/2} · 2 · 100 = 100 J. f · 5 = 100 → f = 20 N.'
    }
  },

  'İtme ve Momentum': {
    intro: 'Momentum ve itme ilişkisi, çarpışmalarda momentumun korunumu.',
    parts: [
      { h: 'Bağıntılar', items: [
        '**Momentum:** p = m · v (vektörel).',
        '**İtme:** I = F · Δt = Δp.',
        'Kuvvet–zaman grafiğinin altındaki alan itmeyi verir.',
        'Dış kuvvet yoksa toplam momentum korunur.'
      ] },
      { h: 'Çarpışmalar', items: [
        '**Esnek:** momentum ve kinetik enerji korunur.',
        '**Esnek olmayan:** yalnız momentum korunur; kenetlenme en çok enerji kaybettiren durumdur.',
        'Patlama: başlangıçta duran cisim parçalanırsa parçaların momentumları eşit ve zıttır.'
      ] }
    ],
    traps: [
      'Momentum vektöreldir: zıt yönde hareket eden cisimlerin momentumlarını işaretleriyle topla.'
    ],
    example: {
      q: '3 m/s hızla giden 4 kg kütleli cisim, ters yönde 2 m/s ile giden 2 kg kütleli cisimle çarpışıp kenetleniyor. Ortak hız nedir?',
      a: '4 · 3 − 2 · 2 = 8 kg·m/s. v = {8/6} = {4/3} m/s, ilk cismin yönünde.'
    }
  },

  'Tork, Denge ve Kütle Merkezi': {
    intro: 'Dönme etkisi (tork), cisimlerin dengesi ve kütle merkezi.',
    parts: [
      { h: 'Tork ve denge', items: [
        'τ = F · d (d: kuvvetin doğrultusunun dönme eksenine dik uzaklığı).',
        'Denge şartları: net kuvvet sıfır ve herhangi bir noktaya göre net tork sıfır.',
        'Saat yönündeki torklar = saat yönünün tersindeki torklar.',
        'Eksenden geçen kuvvetin torku sıfırdır.'
      ] },
      { h: 'Kütle merkezi', items: [
        'x_{km} = {m₁x₁ + m₂x₂ + …/m₁ + m₂ + …}.',
        'Türdeş çubuğun kütle merkezi ortasında; türdeş üçgenin ağırlık merkezinde.',
        'Cisim kütle merkezinden asılırsa her konumda dengede kalır.'
      ] }
    ],
    example: {
      q: 'Ağırlığı önemsiz çubukta destekten 2 m uzaktaki 30 N’luk yükü dengelemek için diğer tarafta 3 m uzağa kaç N’luk yük asılmalı?',
      a: '30 · 2 = G · 3 → G = 20 N.'
    }
  },

  'Basit Makineler': {
    intro: 'Kaldıraç, makara, eğik düzlem, çıkrık, vida ve dişliler. Kuvvetten kazanç ve yoldan kayıp ilişkisi sorulur.',
    parts: [
      { h: 'Temel ilke', items: [
        'Basit makineler işten kazanç sağlamaz; kuvvetten kazanılırsa yoldan kaybedilir.',
        '**Mekanik avantaj** = {yük/kuvvet}.',
        '**Kaldıraç:** F · kuvvet kolu = G · yük kolu.',
        '**Sabit makara:** kuvvetin yönünü değiştirir, kazanç yoktur. **Hareketli makara:** kuvvetten 2 kat kazanç.',
        '**Palanga:** yükü taşıyan ip sayısı n ise F = {G/n}.',
        '**Eğik düzlem:** F · L = G · h.',
        '**Dişliler:** temas eden dişliler zıt yönde, kayışla bağlı olanlar aynı yönde döner; diş sayısı ile tur sayısı ters orantılıdır.'
      ] }
    ],
    example: {
      q: 'Uzunluğu 10 m, yüksekliği 2 m olan sürtünmesiz eğik düzlemde 500 N’luk yük kaç N kuvvetle çıkarılır?',
      a: 'F · 10 = 500 · 2 → F = 100 N.'
    }
  },

  'Elektriksel Kuvvet, Alan ve Potansiyel': {
    intro: 'Coulomb kuvveti, elektrik alanı, potansiyel ve potansiyel enerji.',
    parts: [
      { h: 'Bağıntılar', items: [
        '**Coulomb kuvveti:** F = k · {q₁q₂/d²}.',
        '**Elektrik alanı:** E = k · {q/d²}; pozitif yükten dışa, negatif yüke doğru.',
        'Yüke etki eden kuvvet F = q · E.',
        '**Potansiyel:** V = k · {q/d} (skaler; işaretiyle toplanır).',
        '**Potansiyel enerji:** E_{p} = k · {q₁q₂/d}.',
        'Yükü A’dan B’ye taşımak için yapılan iş W = q · (V_{B} − V_{A}).'
      ] }
    ],
    traps: [
      'Alan vektörel, potansiyel skalerdir: alanı vektörel, potansiyeli cebirsel topla.'
    ],
    example: {
      q: 'İki yük arasındaki uzaklık yarıya inerse aralarındaki kuvvet nasıl değişir?',
      a: 'F ∝ {1/d²}: d yarıya inince kuvvet 4 katına çıkar.'
    }
  },

  'Paralel Levhalar ve Sığa': {
    intro: 'Yüklü paralel levhalar arasındaki düzgün elektrik alanı ve sığaçlar (kondansatörler).',
    parts: [
      { h: 'Levhalar', items: [
        'Levhalar arası alan düzgündür: E = {V/d}.',
        'Levhalar arasındaki yük düzgün ivmeli hareket yapar: F = q · E.'
      ] },
      { h: 'Sığaç', items: [
        'Q = C · V. Sığa C = ε · {A/d}: alanla doğru, uzaklıkla ters orantılı.',
        'Depolanan enerji {1/2}QV = {1/2}CV².',
        '**Paralel bağlama:** C_{eş} = C₁ + C₂ (gerilim aynı). **Seri bağlama:** {1/C_{eş}} = {1/C₁} + {1/C₂} (yük aynı).',
        'Üretece bağlıyken levhalar uzaklaştırılırsa V sabit, C ve Q azalır; üreteçten ayrılmışsa Q sabit, V artar.'
      ] }
    ],
    traps: [
      'Sığaçlarda seri–paralel kuralları dirençlerin tersidir.'
    ]
  },

  'Manyetizma ve Elektromanyetik İndükleme': {
    intro: 'Akımın oluşturduğu manyetik alan, manyetik kuvvet ve değişen manyetik akının oluşturduğu indüksiyon akımı.',
    parts: [
      { h: 'Manyetik alan ve kuvvet', items: [
        'Akım geçen düz tel: B = 2 · 10^{−7} · {I/d}; yönü sağ el kuralıyla.',
        'Akım makarası (bobin) içinde alan düzgündür; sarım sayısı ve akımla artar.',
        'Alandaki akım geçen tele kuvvet: F = B · I · L · sin α.',
        'Alanda hareket eden yüke kuvvet: F = q · v · B · sin α; yük çembersel yörüngeye girer.',
        'Aynı yönde akım taşıyan paralel teller birbirini çeker, zıt yöndekiler iter.'
      ] },
      { h: 'İndüksiyon', items: [
        '**Manyetik akı:** Φ = B · A · cos α.',
        '**Faraday:** akı değişince indüksiyon emk’sı oluşur: ε = −N · {ΔΦ/Δt}.',
        '**Lenz kuralı:** indüksiyon akımı kendini oluşturan değişime karşı koyacak yöndedir.',
        'Alanda hareket eden çubukta emk: ε = B · L · v.',
        'Üreteç (jeneratör) mekanik enerjiyi elektriğe, motor elektriği mekanik enerjiye çevirir.'
      ] }
    ],
    traps: [
      'İndüksiyon akımı için akı değişmeli; sabit alanda duran halkada akım oluşmaz.'
    ]
  },

  'Alternatif Akım ve Transformatörler': {
    intro: 'Yönü ve büyüklüğü periyodik değişen akım, etkin değer ve transformatörler.',
    parts: [
      { h: 'Alternatif akım', items: [
        'V = V_{maks} · sin(ωt). Türkiye’de şebeke frekansı 50 Hz.',
        '**Etkin değer:** V_{etkin} = {V_{maks}/√{2}}.',
        'Bobin akımı geciktirir (indüktif reaktans X_{L} = ωL), sığaç akımı öne geçirir (X_{C} = {1/ωC}).',
        'Rezonansta X_{L} = X_{C}, empedans en küçük, akım en büyük.'
      ] },
      { h: 'Transformatör', items: [
        '{V₁/V₂} = {N₁/N₂}; ideal transformatörde güç korunur: V₁I₁ = V₂I₂.',
        'Sarım sayısı artan tarafta gerilim artar, akım azalır.',
        'Elektrik uzak mesafeye yüksek gerilimle iletilir: akım küçülür, ısı kaybı (I²R) azalır.',
        'Transformatör yalnız alternatif akımla çalışır.'
      ] }
    ],
    example: {
      q: 'Birincilinde 200, ikincilinde 1000 sarım olan ideal transformatörün birinciline 40 V uygulanıyor. İkincil gerilim kaçtır?',
      a: 'V₂ = 40 · {1000/200} = 200 V.'
    }
  },

  'Çembersel Hareket': {
    intro: 'Düzgün çembersel hareket, merkezcil kuvvet, açısal momentum ve kütle çekimi.',
    parts: [
      { h: 'Bağıntılar', items: [
        'Çizgisel hız v = {2πr/T} = ω · r; açısal hız ω = {2π/T}.',
        'Merkezcil ivme a = {v²/r} = ω²r; merkezcil kuvvet F = {mv²/r}.',
        'Hız sabit büyüklükte ama yönü sürekli değişir; bu yüzden ivme vardır.',
        'Virajda sürtünme merkezcil kuvveti sağlar: kayma olmaması için v ≤ √{k · g · r}.'
      ] },
      { h: 'Kütle çekimi', items: [
        'F = G · {m₁m₂/d²}.',
        'Uydu yörüngesinde kütle çekimi merkezcil kuvveti sağlar.',
        '**Kepler:** gezegenler elips yörüngede; eşit zamanda eşit alan tarar; T² ∝ r³.',
        '**Açısal momentum** L = m · v · r; dış tork yoksa korunur (buz patencisi kollarını kapayınca hızlanır).'
      ] }
    ]
  },

  'Basit Harmonik Hareket': {
    intro: 'Denge noktası etrafında periyodik salınım: yay sarkacı ve basit sarkaç.',
    parts: [
      { h: 'Özellikler', items: [
        'Geri çağırıcı kuvvet uzanımla orantılı ve zıt yönlü: F = −k · x.',
        'Denge noktasında hız en büyük, ivme sıfır; uç noktalarda hız sıfır, ivme en büyük.',
        '**Yay sarkacı:** T = 2π√{{m/k}}. Kütleye ve yay sabitine bağlı; genliğe bağlı değil.',
        '**Basit sarkaç:** T = 2π√{{L/g}}. İp uzunluğuna ve yer çekimine bağlı; kütleye bağlı değil.'
      ] }
    ],
    traps: [
      'Sarkacın periyodu kütleye bağlı değildir; Ay’da g küçük olduğu için periyot artar.'
    ]
  },

  'Dalga Mekaniği': {
    intro: 'Su dalgalarında kırınım ve girişim, ışığın dalga özellikleri ve Doppler olayı.',
    parts: [
      { h: 'Girişim ve kırınım', items: [
        '**Kırınım:** dalga dar bir aralıktan geçince yayılır; aralık dalga boyuna yakınsa belirgindir.',
        '**Girişim:** iki dalga üst üste binince; tepe + tepe yapıcı, tepe + çukur yıkıcı girişim.',
        '**Young deneyi:** aydınlık saçak aralığı Δx = {λ · L/d}.',
        'Dalga boyu artarsa saçaklar genişler; yarıklar arası uzaklık artarsa daralır.'
      ] },
      { h: 'Diğer', items: [
        '**Doppler:** kaynak yaklaşırken frekans yüksek, uzaklaşırken düşük algılanır.',
        '**Polarizasyon:** yalnız enine dalgalarda olur; ışığın enine dalga olduğunu gösterir.',
        'Elektromanyetik spektrum: radyo → mikrodalga → kızılötesi → görünür → morötesi → X → gama (frekans artar).'
      ] }
    ],
    example: {
      q: 'Young deneyinde dalga boyu 2 katına, perde uzaklığı yarıya indirilirse saçak aralığı nasıl değişir?',
      a: 'Δx = {λL/d}: λ 2 kat, L yarı → değişmez.'
    }
  },

  'Atom Fiziği ve Radyoaktivite': {
    intro: 'Atom modelleri, enerji seviyeleri, radyoaktif bozunma türleri ve yarılanma süresi.',
    parts: [
      { h: 'Atom', items: [
        '**Bohr modeli:** elektronlar belirli enerji seviyelerinde; seviye değiştirirken foton yayar ya da soğurur: E = hf.',
        'Hidrojenin yayınım spektrumu çizgilidir.',
        'Uyarılma: elektron, foton ya da çarpışmayla üst seviyeye çıkar.'
      ] },
      { h: 'Radyoaktivite', items: [
        '**Alfa (α):** helyum çekirdeği; kütle numarası 4, atom numarası 2 azalır. Giricilik en az.',
        '**Beta (β⁻):** nötron protona dönüşür; atom numarası 1 artar, kütle numarası değişmez.',
        '**Gama (γ):** yüksek enerjili foton; numaralar değişmez. Giricilik en fazla.',
        '**Yarılanma süresi:** maddenin yarısının bozunduğu süre. n yarılanmadan sonra kalan m₀ · ({1/2})ⁿ.',
        '**Fisyon:** ağır çekirdeğin bölünmesi (nükleer santral). **Füzyon:** hafif çekirdeklerin birleşmesi (Güneş).'
      ] }
    ],
    example: {
      q: 'Yarılanma süresi 5 gün olan 80 g maddeden 15 gün sonra kaç g kalır?',
      a: '15 gün = 3 yarılanma. 80 → 40 → 20 → 10 g.'
    }
  },

  'Modern Fizik ve Uygulamaları': {
    intro: 'Özel görelilik, fotoelektrik olay, Compton olayı, de Broglie dalga boyu ve modern teknolojiler.',
    parts: [
      { h: 'Kuantum', items: [
        '**Siyah cisim ışıması:** Planck, enerjinin paketler hâlinde (kuantum) olduğunu önerdi: E = hf.',
        '**Fotoelektrik olay:** ışık metal yüzeyden elektron koparır. Kopma için frekans eşik frekansından büyük olmalı; ışık şiddeti yalnız elektron sayısını artırır.',
        'E_{k,maks} = hf − W₀ (W₀: bağlanma enerjisi, eşik enerjisi).',
        '**Compton olayı:** foton elektronla çarpışınca dalga boyu artar; ışığın tanecik özelliğini gösterir.',
        '**de Broglie:** maddenin de dalga özelliği vardır: λ = {h/mv}.'
      ] },
      { h: 'Görelilik ve uygulamalar', items: [
        'Işık hızı bütün gözlemciler için aynıdır. Hızlı hareket edende zaman genişler, boy kısalır.',
        'E = mc²: kütle ve enerjinin eşdeğerliği.',
        'Uygulamalar: lazer, LED, güneş pili, MR, röntgen, yarı iletkenler, süperiletkenler, nanoteknoloji.'
      ] }
    ],
    traps: [
      'Fotoelektrik olayda kopan elektronların enerjisi ışık şiddetine değil frekansına bağlıdır.'
    ]
  }
};

export default L;
