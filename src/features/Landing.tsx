/* Tanıtım: sade, tek ana çağrı (program). Anlatımlar ve testler program kurmadan da açılır. */
import { Link } from 'react-router';
import { ArrowRight, BookOpen, CircleHelp } from 'lucide-react';
import { ButtonLink } from '@/components/ui';
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
  ['Her gün yalnız sıradakine bak', 'Bitirdiğin oturumu işaretle, sıradakine geç. Konu bitince kendiliğinden tamamlanır.']
];

const POINTS = [
  'TYT, AYT ve YDT konuları; yalnız senin puan türünün dersleri.',
  'Son yıllarda düzenli soru gelen konulara biraz daha fazla zaman.',
  'Deneme günleri, deneme analizi ve haftalık tekrar.',
  'Bir günü kaçırırsan program bugünden itibaren yeniden düzenlenir; bitirdiklerin korunur.',
  `${TOPIC_COUNT} konunun kısa anlatımı: özet, bilmen gerekenler, sık yapılan hatalar ve çözümlü örnek.`,
  'Konu testleri: her sorunun çözümü var; matematik dışındaki sorularda cevabı söylemeyen bir ipucu da var.',
  'Reklam yok. Hesap isteğe bağlı: açarsan programın her cihazda aynı olur (e-posta gerekmez); açmazsan veriler yalnız bu tarayıcıda kalır.'
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
    <div className="mx-auto max-w-2xl">
      <section className="pt-6 sm:pt-12">
        <h1 className="display text-[2.3rem] leading-[1.08] sm:text-[3rem]">Sınava kadar her günün planı, tek ekranda.</h1>
        <p className="mt-5 text-lg text-ink-2">
          Birkaç soruya cevap ver; puan türüne, boş saatlerine ve eksiklerine göre gün gün çalışma programın hazır olsun. Her gün yalnız sıradaki işe odaklan.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <ButtonLink to="/kurulum" size="lg">Programımı oluştur <ArrowRight className="size-4" /></ButtonLink>
          <span className="text-sm text-muted">8 kısa soru, yaklaşık 2 dakika</span>
        </div>
      </section>

      <section aria-labelledby="free" className="mt-16">
        <h2 id="free" className="display text-xl">Program kurmadan da kullanabilirsin</h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2">
          <Link to="/anlatim" className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-ink-2">
            <BookOpen className="size-5 text-primary" strokeWidth={1.9} aria-hidden="true" />
            <span className="mt-3 block font-medium">Konu anlatımları</span>
            <span className="mt-1 block text-[14.5px] text-ink-2">{TOPIC_COUNT} konu, {SUBJECTS.length} ders. Her konu birkaç dakikada okunur.</span>
            <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary-ink">Göz at <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" /></span>
          </Link>
          <Link to="/testler" className="group rounded-2xl border border-line bg-surface p-5 transition-colors hover:border-ink-2">
            <CircleHelp className="size-5 text-primary" strokeWidth={1.9} aria-hidden="true" />
            <span className="mt-3 block font-medium">Konu testleri</span>
            <span className="mt-1 block text-[14.5px] text-ink-2">{BANK.length} elle yazılmış soru; matematik ve fende her seferinde yeni sorular. Hepsi çözümlü.</span>
            <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary-ink">Soru çöz <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" /></span>
          </Link>
        </div>
        <p className="mt-6 text-sm font-medium text-muted">Sık sorulan konulardan başla</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {STARTERS.map((t) => (
            <li key={t.id}><Link to={lessonPath(t.id)} className="inline-flex h-9 items-center rounded-full border border-line-2 bg-surface px-3.5 text-[14px] text-ink-2 hover:border-ink-2 hover:text-ink">{t.name}<span className="sr-only"> ({SUBJECT_BY_ID[t.subjectId]!.name})</span></Link></li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="how" className="mt-20">
        <h2 id="how" className="display text-xl">Nasıl çalışır?</h2>
        <ol className="mt-5 divide-y divide-line border-y border-line">
          {STEPS.map(([t, d], i) => (
            <li key={t} className="grid grid-cols-[2rem_1fr] gap-3 py-4">
              <span className="num pt-0.5 text-sm text-muted">{i + 1}</span>
              <span><span className="block font-medium">{t}</span><span className="mt-1 block text-ink-2">{d}</span></span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="what" className="mt-16">
        <h2 id="what" className="display text-xl">Neler var?</h2>
        <ul className="mt-5 grid gap-3">
          {POINTS.map((x) => <li key={x} className="flex gap-3 text-ink-2"><span className="mt-2.5 h-px w-3 shrink-0 bg-ink-2" aria-hidden="true" />{x}</li>)}
        </ul>
      </section>

      <section aria-labelledby="faq" className="mt-16">
        <h2 id="faq" className="display text-xl">Sık sorulanlar</h2>
        <div className="mt-4 divide-y divide-line border-y border-line">
          {FAQ.map((f) => (
            <details key={f.q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-medium [&::-webkit-details-marker]:hidden">
                {f.q}<span className="text-muted transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-ink-2">{f.a}</p>
            </details>
          ))}
        </div>
        <p className="mt-6 text-sm text-ink-2">Çıkmış sorular için MEB’in resmi arşivleri:{' '}
          {RESOURCES.map((r, i) => <span key={r.url}>{i > 0 && ' · '}<a className="text-primary-ink underline decoration-line-2 underline-offset-4" href={r.url} target="_blank" rel="noopener">{r.name}<span className="sr-only"> (yeni sekmede açılır)</span></a></span>)}
        </p>
      </section>

      <section className="mt-16 border-t border-line pt-8">
        <ButtonLink to="/kurulum" size="lg">Programımı oluştur <ArrowRight className="size-4" /></ButtonLink>
      </section>
    </div>
  );
}
