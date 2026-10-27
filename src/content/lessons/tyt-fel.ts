import type { LessonSet } from './types';

const L: LessonSet = {
  'Felsefeye Giriş': {
    intro: 'Felsefenin anlamı, özellikleri, felsefi düşüncenin diğer düşünce türlerinden farkı ve felsefenin alt dalları.',
    parts: [
      { h: 'Felsefe nedir?', items: [
        'Yunanca “philo” (sevgi) + “sophia” (bilgelik): bilgelik sevgisi.',
        'Özellikleri: **akla dayanır**, eleştireldir, sorgulayıcıdır, evrensel ve tutarlıdır; kesin cevaplar vermez, soruları sürekli yeniler.',
        'Felsefe bilgisi deneyle doğrulanmaz; birikimlidir ama kesin değildir.',
        'İlk filozof: Thales (Miletli). Felsefe Antik Yunan’da İyonya’da doğdu.'
      ] },
      { h: 'Alt dallar', items: [
        '**Bilgi felsefesi (epistemoloji):** bilginin kaynağı, sınırı, doğruluğu.',
        '**Varlık felsefesi (ontoloji):** varlığın ne olduğu.',
        '**Ahlak felsefesi (etik):** iyi–kötü, ödev, özgürlük.',
        '**Sanat felsefesi (estetik):** güzellik ve sanat.',
        'Ayrıca din, siyaset ve bilim felsefesi.'
      ] }
    ],
    traps: [
      'Felsefe dogmatik değildir; “kesin ve değişmez bilgi verir” ifadesi felsefe için yanlıştır.'
    ]
  },

  'Bilgi Felsefesi': {
    intro: 'Bilginin kaynağı, imkânı ve doğruluğu. Görüşleri temsilcileriyle eşleştirmek sık sorulur.',
    parts: [
      { h: 'Bilginin imkânı', items: [
        '**Dogmatizm:** kesin bilgi mümkündür.',
        '**Septisizm (şüphecilik):** kesin bilgiye ulaşılamaz (Pyrrhon). Descartes yöntemsel şüphe kullanır ama sonunda kesin bilgiye ulaşır.',
        '**Sofistler:** bilgi kişiden kişiye değişir (Protagoras: “İnsan her şeyin ölçüsüdür.”); Gorgias’a göre bilgi hiç mümkün değildir.'
      ] },
      { h: 'Bilginin kaynağı', items: [
        '**Rasyonalizm (akılcılık):** kaynak akıldır (Platon, Descartes, Leibniz, Spinoza).',
        '**Empirizm (deneycilik):** kaynak deneydir; zihin doğuştan boş levhadır (John Locke, David Hume).',
        '**Kritisizm (eleştirel felsefe):** bilgi akıl ve deneyin birlikte çalışmasıyla oluşur (Immanuel Kant).',
        '**Pozitivizm:** yalnız gözlemlenebilen olgular bilgi verir (Auguste Comte).',
        '**Entüisyonizm (sezgicilik):** gerçek bilgi sezgiyle elde edilir (Bergson, Gazali).',
        '**Pragmatizm:** işe yarayan bilgi doğrudur (William James, John Dewey).',
        '**Fenomenoloji:** özün bilgisine yönelme (Husserl). **Analitik felsefe:** dilin çözümlenmesi (Wittgenstein).'
      ] }
    ],
    traps: [
      'Descartes şüpheci değil, rasyonalisttir: şüpheyi kesin bilgiye ulaşmak için yöntem olarak kullanır.'
    ]
  },

  'Varlık Felsefesi': {
    intro: 'Varlığın var olup olmadığı ve neliği üzerine görüşler.',
    parts: [
      { h: 'Var mı?', items: [
        '**Nihilizm:** hiçbir şey yoktur, olsa bile bilinemez (Gorgias).',
        'Diğer bütün görüşler varlığın olduğunu kabul eder.'
      ] },
      { h: 'Ne?', items: [
        '**İdealizm:** varlık düşünce ya da idedir (Platon: idealar dünyası; Hegel).',
        '**Materyalizm:** varlık maddedir (Demokritos: atom).',
        '**Düalizm:** madde ve ruh iki ayrı varlıktır (Descartes).',
        '**Oluş felsefesi:** varlık sürekli değişir (Herakleitos: “Aynı ırmakta iki kez yıkanılmaz.”).',
        '**Fenomenoloji** ve **varoluşçuluk** (Sartre: “Varoluş özden önce gelir.”).'
      ] }
    ],
    traps: [
      'Herakleitos değişimi, Parmenides değişmezliği savunur; ikisi zıttır.'
    ]
  },

  'Ahlak Felsefesi': {
    intro: 'İyi–kötü, özgürlük, sorumluluk ve evrensel ahlak yasasının olup olmadığı.',
    parts: [
      { h: 'Evrensel ahlak yasası var mı?', items: [
        '**Var diyenler:** Platon, Farabi, Kant (ödev ahlakı: “Öyle davran ki eyleminin ilkesi evrensel bir yasa olabilsin.”), Spinoza, Bergson.',
        '**Yok diyenler:** Sofistler (Protagoras: “İnsan her şeyin ölçüsüdür.”), Hedonizm (Aristippos, Epikuros: haz), Faydacılık (Bentham, Mill: en çok kişiye en çok fayda), Nietzsche (güç istenci), Egoizm (Hobbes).'
      ] },
      { h: 'Kavramlar', items: [
        '**İyi:** ahlaki olarak doğru olan. **Özgürlük:** iradeyle seçim yapabilme. **Sorumluluk:** eyleminin sonucunu üstlenme.',
        '**Erdem:** iyiye yönelik kalıcı davranış (Aristoteles: “altın orta”).',
        '**Vicdan:** iç ses; eylemleri değerlendiren iç yargı.'
      ] }
    ],
    traps: [
      'Kant’ta ahlaki eylemin değeri sonuca değil, ödev bilinciyle yapılmasına bağlıdır; faydacılıkta ise sonuca bağlıdır.'
    ]
  },

  'Sanat Felsefesi': {
    intro: 'Güzelliğin ve sanat eserinin ne olduğu; sanatçı ve sanat eserinin özellikleri.',
    parts: [
      { h: 'Görüşler', items: [
        '**Taklit (mimesis):** sanat doğanın taklididir (Platon, Aristoteles).',
        '**Yaratma:** sanat sanatçının yaratıcılığıdır (Kant, Hegel).',
        '**Oyun:** sanat insanın oyun ihtiyacından doğar (Schiller, Spencer).',
        '**Sezgi:** sanat sezgisel bir bilgidir (Croce, Bergson).',
        '**Kendini dışa vurma (ifade):** sanat sanatçının iç dünyasını dışa vurmasıdır.'
      ] },
      { h: 'Kavramlar', items: [
        'Estetik terimini Baumgarten kullandı.',
        'Sanat eseri özgündür, tekrarlanamaz ve sanatçının yorumunu taşır.',
        'Estetik yargılar özneldir: “Bu tablo güzel.”'
      ] }
    ]
  },

  'Din Felsefesi': {
    intro: 'Tanrı’nın varlığı ve doğası, ruhun ölümsüzlüğü ve kötülük problemi üzerine görüşler.',
    parts: [
      { h: 'Görüşler', items: [
        '**Teizm:** Tanrı vardır, evreni yaratmıştır ve evrene müdahale eder; vahiy ve peygamber kabul edilir.',
        '**Deizm:** Tanrı evreni yaratmış ama müdahale etmez; vahiy reddedilir (saat yapımcısı benzetmesi).',
        '**Panteizm:** Tanrı ile evren birdir (Spinoza).',
        '**Ateizm:** Tanrı yoktur.',
        '**Agnostisizm:** Tanrı’nın varlığı ya da yokluğu bilinemez.',
        '**Fideizm:** inanç akıldan önce gelir; din akılla anlaşılmaz.'
      ] }
    ],
    traps: [
      'Deizm ile teizm Tanrı’nın evrene müdahalesi konusunda ayrılır; ikisi de Tanrı’yı kabul eder.'
    ]
  },

  'Siyaset Felsefesi': {
    intro: 'Devletin kaynağı, ideal düzen, iktidarın meşruluğu ve birey–devlet ilişkisi.',
    parts: [
      { h: 'Görüşler ve temsilciler', items: [
        '**İdeal devlet:** Platon (Devlet; filozof krallar), Farabi (Erdemli Şehir), Thomas More (Ütopya), Campanella (Güneş Ülkesi).',
        '**Toplum sözleşmesi:** devlet insanlar arası bir sözleşmeyle kurulur. Hobbes: “İnsan insanın kurdudur”, güçlü devlet (Leviathan). Locke: doğal haklar, sınırlı devlet. Rousseau: genel irade.',
        '**Machiavelli** (Hükümdar): devletin bekası için her yol mubahtır; siyaseti ahlaktan ayırır.',
        '**Montesquieu:** kuvvetler ayrılığı (yasama, yürütme, yargı).',
        '**Marx:** sınıfsız toplum.'
      ] }
    ],
    traps: [
      'Hobbes mutlak, Locke sınırlı devleti savunur; ikisi de toplum sözleşmecidir.'
    ]
  },

  'Bilim Felsefesi': {
    intro: 'Bilimin ne olduğu, bilimsel yöntem ve bilimin nasıl ilerlediği üzerine görüşler.',
    parts: [
      { h: 'Görüşler', items: [
        '**Bilim bir ürün olarak:** mantıkçı pozitivizm (Viyana Çevresi, Carnap): doğrulanabilir önermeler bilimseldir.',
        '**Karl Popper:** bilimsel kuram **yanlışlanabilir** olmalıdır; bilim yanlışlamayla ilerler.',
        '**Thomas Kuhn:** bilim **paradigma** değişimleriyle (bilimsel devrimlerle) ilerler.',
        '**Bilim bir süreç olarak:** bilimin toplumsal ve tarihsel bağlamda incelenmesi.'
      ] },
      { h: 'Bilimin özellikleri', items: [
        'Olgusaldır, nesneldir, eleştireldir, genellenebilir ve sistematiktir.',
        'Yöntem: gözlem → problem → hipotez → deney → kuram → yasa.',
        'Tümevarım (özelden genele) ve tümdengelim (genelden özele) kullanılır.'
      ] }
    ],
    traps: [
      'Popper için doğrulanabilirlik değil yanlışlanabilirlik ölçüttür.'
    ]
  }
};

export default L;
