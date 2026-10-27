/* Tanıtım: sakin ama akıcı. Üstte ürünün kendisi (Bugün ekranı önizlemesi), sonra rakamlar, nasıl çalışır,
   program kurmadan kullanılabilenler, özellikler, sık sorulanlar ve kapanış çağrısı. Bölümler kaydırınca yumuşakça belirir. */
import { Link } from 'react-router';
import { ArrowRight, BookOpen, CalendarCheck, Check, CircleHelp, Cloud, Lightbulb, LineChart, ListChecks, ShieldCheck } from 'lucide-react';
import { ButtonLink, SubjectTag } from '@/components/ui';
import { Reveal } from '@/components/Reveal';
import { DEFAULT_EXAM_DATE, EXAM_DATE_IS_OFFICIAL } from '@/content/exam';
import { RESOURCES, SUBJECTS, SUBJECT_BY_ID } from '@/content/subjects';
import { BANK } from '@/content/questions';
import { lessonPath } from '@/content/lessons';
import { fmtDay } from '@/lib/dates';

const TOPIC_COUNT = SUBJECTS.reduce((a, s) => a + s.topics.length, 0);

/* Sık sorulan konulardan birkaç başlangıç noktası (ders, konu adı) */
const STARTERS = ([
  ['tyt-tr', 'Paragraf'], ['tyt-mat', 'Sayı ve Kesir Problemleri'], ['tyt-mat', 'Yüzde, Kâr – Zarar Problemleri'], ['tyt-tar', 'Milli Mücadele'],
  ['tyt-kim', 'Mol Kavramı ve Kimyasal Hesaplamalar'], ['tyt-bio', 'Kalıtım'], ['tyt-fiz', 'Optik'], ['tyt-cog', 'Harita Bilgisi'],
  ['ayt-mat', 'Türev'], ['ayt-mat', 'İntegral'], ['ayt-edb', 'Divan Edebiyatı'], ['ydt-ing', 'Tenses']
] as const).map(([sid, name]) => SUBJECT_BY_ID[sid]!.topics.find((t) => t.name === name)!);

const STEPS = [
  ['Soruları cevapla', 'Puan türün, sınıfın, her gün ayırabileceğin süre, derslerdeki seviyen ve varsa son deneme netlerin.'],
  ['Programın hazırlanır', 'Konular dersler arasında dönüşümlü dağıtılır; denemeler en uzun günlerine, tekrarlar hafta sonuna yerleşir.'],
  ['Her gün sıradakine bak', 'Bitirdiğin oturumu işaretle, sıradakine geç. Bir günü kaçırırsan program bugünden itibaren yeniden düzenlenir.']
];

const FEATURES: [typeof CalendarCheck, string, string][] = [
  [CalendarCheck, 'Gün gün program', 'Yalnız senin puan türünün dersleri; sık sorulan konulara biraz daha zaman, deneme ve tekrar günleri.'],
  [BookOpen, 'Konu anlatımları', `${TOPIC_COUNT} konu: özet, bilmen gerekenler, formüller, grafikler, sık yapılan hatalar ve çözümlü örnek.`],
  [ListChecks, 'Konu testleri', 'Her sorunun çözümü var; yanlışların ayrı listede birikir, tekrar çözünce listeden çıkar.'],
  [Lightbulb, 'Cevabı söylemeyen ipucu', 'Matematik dışındaki sorularda takılınca yolu gösteren, o soruya özel bir ipucu.'],
  [LineChart, 'Denemeler', 'Dışarıda çözdüğün denemenin netini gir, gelişimini izle; süreli mini denemeyle prova yap.'],
  [Cloud, 'Her cihazda aynı', 'İsteğe bağlı hesap: telefonda ve bilgisayarda aynı program. E-posta gerekmez.']
];

const FAQ = [
  { q: 'Ücretli mi?', a: 'Hayır. Netlik ücretsiz ve reklamsız. Hesap açmak da ücretsiz ve isteğe bağlı.' },
  { q: 'Sınav tarihi doğru mu?', a: EXAM_DATE_IS_OFFICIAL ? 'Evet, ÖSYM’nin açıkladığı tarih kullanılıyor.' : `ÖSYM 2027 takvimini henüz açıklamadı. Program şimdilik tahmini ${fmtDay(DEFAULT_EXAM_DATE, { day: 'numeric', month: 'long', year: 'numeric' })} tarihine göre hazırlanır; tarihi kurulumda ya da ayarlarda değiştirebilirsin. Takvim açıklanınca güncellenecek.` },
  { q: 'Konu listesi neye göre?', a: 'Yaygın TYT, AYT ve YDT konu sınıflandırmasına göre. Soru sayıları ÖSYM kılavuzundaki test dağılımından alınır. ÖSYM konu bazlı dağılım açıklamadığı için “sık sorulan” işaretleri yayınevlerinin çıkmış soru analizlerine dayanır; kesin bilgi değildir.' },
  { q: 'Programı değiştirebilir miyim?', a: 'Evet. Cevaplarını istediğin zaman değiştirebilirsin. Bildiğin konuları “Konular” sayfasında işaretlersen program onları atlar.' },
  { q: 'Konu anlatımları ders kitabının yerini tutar mı?', a: 'Hayır. Anlatımlar konuyu hatırlatmak, sınavda neye dikkat edileceğini göstermek ve çözümlü bir örnekle başlamak için kısa tutuldu. Konuyu ilk kez öğreniyorsan ders kitabın ya da MEB kaynaklarıyla birlikte kullan.' },
  { q: 'Program kurmadan kullanabilir miyim?', a: 'Evet. Konu anlatımlarını ve testleri program kurmadan açabilirsin. Program kurarsan testler senin derslerine göre sıralanır ve bitirdiğin konular işaretlenir.' },
  { q: 'Telefonda ve bilgisayarda aynı programı görebilir miyim?', a: 'Evet. Ücretsiz bir hesap aç (yalnız kullanıcı adı ve şifre); giriş yaptığın her cihazda programın, konuların ve sonuçların eşitlenir. Hesap açmazsan veriler yalnız kullandığın tarayıcıda kalır.' }
];

export default function Landing() {
  return (
    <div className="mx-auto max-w-5xl">
      {/* ---------- Giriş ---------- */}
      <section className="grid items-center gap-10 pt-4 sm:pt-10 md:grid-cols-[1.05fr_1fr] md:gap-12">
        <div>
          <p className="eyebrow">Ücretsiz YKS çalışma programı</p>
          <h1 className="display mt-3 text-[2.3rem] leading-[1.06] sm:text-[3.1rem]">Sınava kadar her günün planı, tek ekranda.</h1>
          <p className="mt-5 text-lg leading-relaxed text-ink-2">Birkaç soruya cevap ver; puan türüne, boş saatlerine ve eksiklerine göre gün gün çalışma programın hazır olsun. Her gün yalnız sıradaki işe odaklan.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink to="/kurulum" size="lg">Programımı oluştur <ArrowRight className="size-4" /></ButtonLink>
            <ButtonLink to="/anlatim" size="lg" variant="secondary"><BookOpen className="size-4" /> Konu anlatımları</ButtonLink>
          </div>
          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[14px] text-ink-2">
            {['8 kısa soru, 2 dakika', 'Reklamsız', 'Hesap isteğe bağlı'].map((t) => <li key={t} className="inline-flex items-center gap-1.5"><Check className="size-4 text-good" aria-hidden="true" />{t}</li>)}
          </ul>
        </div>
        <Preview />
      </section>

      {/* ---------- Rakamlar ---------- */}
      <Reveal as="section" aria-label="Netlik’te neler var" className="mt-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4 [&>*]:bg-surface" style={{ gap: 1 }}>
        {[[String(TOPIC_COUNT), 'konu anlatımı'], [`${BANK.length}+`, 'elle yazılmış soru'], [String(SUBJECTS.length), 'ders: TYT, AYT, YDT'], ['0 ₺', 'ücret, reklam yok']].map(([n, t]) => (
          <div key={t} className="px-5 py-5"><p className="num text-[1.75rem] font-semibold leading-none">{n}</p><p className="mt-1.5 text-[14px] text-ink-2">{t}</p></div>
        ))}
      </Reveal>

      {/* ---------- Nasıl çalışır ---------- */}
      <Reveal as="section" aria-labelledby="how" className="mt-20">
        <h2 id="how" className="display text-[1.6rem]">Nasıl çalışır?</h2>
        <ol className="mt-6 grid gap-3 md:grid-cols-3">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="flex gap-4 rounded-2xl border border-line bg-surface p-4 sm:p-5 md:block">
              <span className="num grid size-8 shrink-0 place-items-center rounded-full bg-primary-soft text-sm font-semibold text-primary-ink">{i + 1}</span>
              <span className="block md:mt-4"><span className="block font-medium">{t}</span><span className="mt-1 block text-[14.5px] leading-relaxed text-ink-2">{d}</span></span>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* ---------- Program kurmadan ---------- */}
      <Reveal as="section" aria-labelledby="free" className="mt-20">
        <h2 id="free" className="display text-[1.6rem]">Program kurmadan da kullanabilirsin</h2>
        <p className="mt-2 max-w-2xl text-ink-2">Anlatımlar, testler ve mini denemeler herkese açık. Program kurarsan testler senin derslerine göre sıralanır ve ilerlemen işaretlenir.</p>
        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {([
            [BookOpen, '/anlatim', 'Konu anlatımları', `${TOPIC_COUNT} konu, ${SUBJECTS.length} ders. Her konu birkaç dakikada okunur.`, 'Göz at'],
            [CircleHelp, '/testler', 'Konu testleri', 'Hepsi çözümlü; matematik ve fende her seferinde yeni sorular.', 'Soru çöz'],
            [LineChart, '/denemeler', 'Denemeler', 'Süreli mini deneme ya da dışarıda çözdüğün denemenin neti.', 'Denemelere git']
          ] as const).map(([Icon, to, t, d, cta]) => (
            <Link key={to} to={to} className="group flex gap-4 rounded-2xl border border-line bg-surface p-4 transition-colors hover:border-ink-2 sm:p-5 md:flex-col md:gap-0">
              <Icon className="mt-0.5 size-5 shrink-0 text-primary" strokeWidth={1.9} aria-hidden="true" />
              <span className="flex flex-1 flex-col md:mt-3">
                <span className="block font-medium">{t}</span>
                <span className="mt-1 block flex-1 text-[14.5px] leading-relaxed text-ink-2">{d}</span>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-primary-ink md:mt-4">{cta} <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" /></span>
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-8 text-sm font-medium text-muted">Sık sorulan konulardan başla</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {STARTERS.map((t) => (
            <li key={t.id}><Link to={lessonPath(t.id)} className="inline-flex h-9 items-center rounded-full border border-line-2 bg-surface px-3.5 text-[14px] text-ink-2 transition-colors hover:border-ink-2 hover:text-ink">{t.name}<span className="sr-only"> ({SUBJECT_BY_ID[t.subjectId]!.name})</span></Link></li>
          ))}
        </ul>
      </Reveal>

      {/* ---------- Özellikler ---------- */}
      <Reveal as="section" aria-labelledby="what" className="mt-20">
        <h2 id="what" className="display text-[1.6rem]">Neler var?</h2>
        <ul className="mt-6 grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map(([Icon, t, d]) => (
            <li key={t} className="flex gap-4">
              <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-sunken text-ink-2"><Icon className="size-5" strokeWidth={1.8} aria-hidden="true" /></span>
              <span><span className="block font-medium">{t}</span><span className="mt-1 block text-[14.5px] leading-relaxed text-ink-2">{d}</span></span>
            </li>
          ))}
        </ul>
      </Reveal>

      {/* ---------- Sık sorulanlar ---------- */}
      <Reveal as="section" aria-labelledby="faq" className="mt-20 grid gap-8 md:grid-cols-[1fr_1.6fr]">
        <div>
          <h2 id="faq" className="display text-[1.6rem]">Sık sorulanlar</h2>
          <p className="mt-2 text-ink-2">Başka bir sorun varsa <Link to="/gizlilik" className="underline decoration-line-2 underline-offset-4">Gizlilik</Link> sayfasındaki adresten yazabilirsin.</p>
          <p className="mt-5 flex items-start gap-2 text-sm text-ink-2"><ShieldCheck className="mt-0.5 size-4 shrink-0 text-good" aria-hidden="true" />Çıkmış sorular için MEB’in resmî arşivleri:</p>
          <ul className="mt-2 space-y-1 pl-6 text-sm">
            {RESOURCES.map((r) => <li key={r.url}><a className="text-primary-ink underline decoration-line-2 underline-offset-4" href={r.url} target="_blank" rel="noopener">{r.name}<span className="sr-only"> (yeni sekmede açılır)</span></a></li>)}
          </ul>
        </div>
        <div className="divide-y divide-line border-y border-line">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {f.q}<span className="text-lg leading-none text-muted transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
      </Reveal>

      {/* ---------- Kapanış ---------- */}
      <Reveal as="section" aria-labelledby="cta" className="mt-20 rounded-3xl border border-line-2 bg-surface px-6 py-10 text-center sm:px-10">
        <h2 id="cta" className="display text-[1.75rem] leading-tight sm:text-[2rem]">Bugünün planı iki dakika uzağında.</h2>
        <p className="mx-auto mt-3 max-w-lg text-ink-2">Programını kur, her gün yalnız sıradaki işe bak. İstediğin zaman cevaplarını değiştirebilirsin.</p>
        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink to="/kurulum" size="lg">Programımı oluştur <ArrowRight className="size-4" /></ButtonLink>
          <ButtonLink to="/testler" size="lg" variant="secondary">Önce soru çöz</ButtonLink>
        </div>
      </Reveal>
    </div>
  );
}

/* Bugün ekranının sade bir örneği: ürünü anlatmanın en kısa yolu. Gerçek veri değildir. */
function Preview() {
  const rows: [string, string, string, boolean][] = [
    ['tyt-mat', 'Problem rutini: 10 soru', '20 dk', true],
    ['tyt-tr', 'Paragraf · 2/3', '50 dk', false],
    ['tyt-fiz', 'Isı, Sıcaklık ve Genleşme · 1/2', '50 dk', false]
  ];
  return (
    <div className="relative" role="img" aria-label="Bugün ekranı örneği: 2 saat 30 dakikalık plan, sıradaki görev Mol Kavramı, bir görev bitmiş.">
      <div className="absolute -inset-3 -z-10 rounded-[2rem] bg-sunken sm:-inset-5" aria-hidden="true" />
      <div className="rounded-2xl border border-line-2 bg-paper p-4 sm:p-5" aria-hidden="true">
        <p className="text-[12.5px] text-muted">Çarşamba, 28 Ekim</p>
        <p className="display mt-0.5 text-[1.35rem]">Bugün 2 sa 30 dk çalışma</p>
        <div className="mt-2.5 flex items-center gap-3"><div className="h-2 flex-1 overflow-hidden rounded-full bg-sunken"><div className="h-full w-1/4 rounded-full bg-good" /></div><span className="num text-[12.5px] text-muted">1/4</span></div>
        <div className="mt-4 rounded-xl border border-line-2 bg-surface p-4">
          <p className="text-[12.5px] font-medium text-primary-ink">Sıradaki · 50 dakika</p>
          <p className="display mt-1 text-[1.15rem]">Mol Kavramı ve Kimyasal Hesaplamalar <span className="num text-sm font-normal text-muted">1/2</span></p>
          <div className="mt-1.5"><SubjectTag id="tyt-kim" short={false} /></div>
          <div className="mt-3 flex gap-2">
            <span className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-primary px-3 text-[13px] font-medium text-on-primary"><Check className="size-3.5" /> Bitirdim</span>
            <span className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-line-2 px-3 text-[13px]"><BookOpen className="size-3.5" /> Konu anlatımı</span>
          </div>
        </div>
        <ul className="mt-3 divide-y divide-line rounded-xl border border-line bg-surface">
          {rows.map(([sid, t, m, done]) => (
            <li key={t} className="flex items-center gap-3 px-3.5 py-2.5">
              <span className={`grid size-5 shrink-0 place-items-center rounded-md border ${done ? 'border-good bg-good text-surface' : 'border-line-2'}`}>{done && <Check className="size-3" strokeWidth={3} />}</span>
              <span className="min-w-0 flex-1"><span className={`block truncate text-[13.5px] ${done ? 'text-muted line-through' : ''}`}>{t}</span><SubjectTag id={sid} /></span>
              <span className="num text-[12px] text-muted">{m}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
