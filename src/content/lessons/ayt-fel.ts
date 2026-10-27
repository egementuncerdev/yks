import type { LessonSet } from './types';

const L: LessonSet = {
  'Psikoloji': {
    intro: 'Psikolojinin konusu, yaklaşımları, öğrenme, bellek, güdülenme ve gelişim. Kuramları temsilcileriyle eşleştirmek sık sorulur.',
    parts: [
      { h: 'Yaklaşımlar', items: [
        '**Yapısalcılık:** zihnin yapısını iç gözlemle inceler (Wundt; ilk psikoloji laboratuvarı, Leipzig 1879).',
        '**İşlevselcilik:** zihnin işlevlerine odaklanır (William James).',
        '**Davranışçılık:** gözlenebilir davranış (Watson, Skinner, Pavlov).',
        '**Psikanaliz:** bilinçaltı ve çocukluk deneyimleri (Freud).',
        '**Hümanistik:** insanın kendini gerçekleştirmesi (Maslow, Rogers).',
        '**Bilişsel:** düşünme, algı, bellek (Piaget).',
        '**Gestalt:** bütün parçaların toplamından fazladır (algı).'
      ] },
      { h: 'Öğrenme ve bellek', items: [
        '**Klasik koşullanma (Pavlov):** nötr uyarıcı, koşulsuz uyarıcıyla eşleşir (zil + yemek → salya).',
        '**Edimsel koşullanma (Skinner):** davranış sonuçlarıyla (pekiştireç, ceza) öğrenilir.',
        '**Gözlem yoluyla öğrenme (Bandura)**, **kavrayış yoluyla öğrenme (Köhler)**.',
        'Bellek: duyusal bellek → kısa süreli bellek (7 ± 2 birim) → uzun süreli bellek.',
        '**Maslow ihtiyaçlar hiyerarşisi:** fizyolojik → güvenlik → ait olma–sevgi → saygınlık → kendini gerçekleştirme.'
      ] }
    ]
  },

  'Sosyoloji': {
    intro: 'Toplumun bilimsel incelenmesi: toplumsal yapı, kurumlar, değişme ve toplumsallaşma.',
    parts: [
      { h: 'Temel kavramlar', items: [
        'Sosyoloji terimini ilk kullanan: **Auguste Comte**. Türk sosyolojisi: Ziya Gökalp. İbn Haldun (Mukaddime) öncü sayılır.',
        '**Toplumsal yapı:** statüler, roller, kurumlar, gruplar arası ilişkiler.',
        '**Statü:** kişinin toplumdaki konumu (doğuştan: cinsiyet; kazanılmış: meslek). **Rol:** statüden beklenen davranış.',
        '**Toplumsal kurumlar:** aile, eğitim, din, ekonomi, siyaset; köklü ve süreklidir.',
        '**Toplumsallaşma:** bireyin toplumun değerlerini öğrenmesi; aile, okul, arkadaş grubu, medya.',
        '**Toplumsal değişme:** sanayileşme, kentleşme, teknoloji; kültürel gecikme.'
      ] },
      { h: 'Gruplar ve kültür', items: [
        '**Birincil grup:** yüz yüze, samimi (aile, arkadaş). **İkincil grup:** resmî, amaca yönelik (iş yeri).',
        'Kültür: maddi (araç, mimari) ve manevi (değer, inanç) kültür.',
        '**Kültürleşme:** kültürlerin etkileşimi; **kültürlenme:** bireyin kendi kültürünü öğrenmesi.'
      ] }
    ],
    traps: [
      'Arkadaş grubu toplumsal kurum değil, toplumsal gruptur.'
    ]
  },

  'Mantık': {
    intro: 'Doğru düşünmenin kuralları: kavram, terim, önerme ve akıl yürütme. Kıyas ve önermeler arası ilişkiler sık sorulur.',
    parts: [
      { h: 'Kavram ve tanım', items: [
        'Mantığın kurucusu **Aristoteles** (Organon). İslam dünyasında Farabi, İbn-i Sina.',
        '**Kavram:** zihindeki tasarım; **terim:** kavramın dilde ifadesi.',
        '**İçlem:** kavramın ortak nitelikleri. **Kaplam:** kavramın kapsadığı varlıklar. İçlem arttıkça kaplam daralır.',
        'Kavramlar arası ilişkiler: eş kaplamlı, içine alan, karşıt, çelişik.'
      ] },
      { h: 'Önerme ve akıl yürütme', items: [
        '**Önerme:** doğru ya da yanlış olabilen yargı. Klasik önermeler: tümel olumlu (A), tümel olumsuz (E), tikel olumlu (I), tikel olumsuz (O).',
        '**Kıyas:** iki öncülden zorunlu bir sonuç çıkarma: “Bütün insanlar ölümlüdür. Sokrates insandır. O hâlde Sokrates ölümlüdür.”',
        '**Tümdengelim:** genelden özele (zorunlu sonuç). **Tümevarım:** özelden genele (olası sonuç). **Analoji:** benzerlikten sonuç.',
        '**Sembolik mantık:** önermeler semboller ve bağlaçlarla (∧, ∨, ⇒, ⇔) gösterilir.',
        '**Safsatalar:** kişiye saldırı, otoriteye başvurma, çoğunluğa başvurma, döngüsel akıl yürütme.'
      ] }
    ],
    traps: [
      'Tümevarımın sonucu kesin değil olasıdır; tümdengelimin sonucu (öncüller doğruysa) zorunludur.'
    ]
  },

  'Felsefe Tarihi': {
    intro: 'İlk Çağ’dan 20. yüzyıla filozoflar ve temel görüşleri. Filozof–görüş eşleştirmesi en çok sorulur.',
    parts: [
      { h: 'İlk Çağ', items: [
        '**Doğa filozofları (arkhe):** Thales (su), Anaksimandros (apeiron), Anaksimenes (hava), Herakleitos (ateş, değişim, logos), Pythagoras (sayı), Empedokles (dört öge), Demokritos (atom).',
        '**Parmenides:** varlık değişmez, değişim yanılsamadır.',
        '**Sofistler:** görecelik (Protagoras). **Sokrates:** “Kendini bil”, doğuruculuk (maiotik) yöntemi, erdem bilgidir.',
        '**Platon:** idealar kuramı, Devlet. **Aristoteles:** madde–form, mantık, altın orta.',
        '**Helenistik:** Epikürcülük (haz), Stoacılık (doğaya uygun yaşam), Septisizm (Pyrrhon).'
      ] },
      { h: 'Orta Çağ ve İslam felsefesi', items: [
        'Augustinus, Thomas Aquinas (skolastik).',
        '**Farabi** (Muallim-i Sani, Erdemli Şehir), **İbn-i Sina** (zorunlu varlık), **Gazali** (sezgi), **İbn Rüşd** (akıl–din uyumu), **İbn Haldun**.'
      ] },
      { h: 'Yeni ve Yakın Çağ', items: [
        '**Rönesans:** Machiavelli, Bacon (deney, idoller), Thomas More.',
        '**17–18. yy:** Descartes (“Düşünüyorum, öyleyse varım”), Spinoza, Leibniz, Locke, Hume, Kant (kritisizm), Rousseau, Montesquieu.',
        '**19. yy:** Hegel (diyalektik), Marx, Comte (pozitivizm), Nietzsche, Kierkegaard.',
        '**20. yy:** Husserl (fenomenoloji), Sartre (varoluşçuluk), Wittgenstein (analitik felsefe), Popper, Kuhn, Heidegger.'
      ] }
    ]
  }
};

export default L;
