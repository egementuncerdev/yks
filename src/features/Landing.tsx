/* Tanıtım: sade, tek çağrı. */
import { ArrowRight } from 'lucide-react';
import { ButtonLink } from '@/components/ui';
import { DEFAULT_EXAM_DATE, EXAM_DATE_IS_OFFICIAL } from '@/content/exam';
import { RESOURCES } from '@/content/subjects';
import { fmtDay } from '@/lib/dates';

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
  'Hesap yok, reklam yok. Veriler yalnız senin tarayıcında durur.'
];

const FAQ = [
  { q: 'Ücretli mi?', a: 'Hayır. Netlik ücretsiz; reklam ya da üyelik yok.' },
  { q: 'Sınav tarihi doğru mu?', a: EXAM_DATE_IS_OFFICIAL ? 'Evet, ÖSYM’nin açıkladığı tarih kullanılıyor.' : `ÖSYM 2027 takvimini henüz açıklamadı. Program şimdilik tahmini ${fmtDay(DEFAULT_EXAM_DATE, { day: 'numeric', month: 'long', year: 'numeric' })} tarihine göre hazırlanır; tarihi kurulumda ya da ayarlarda değiştirebilirsin. Takvim açıklanınca güncellenecek.` },
  { q: 'Konu listesi neye göre?', a: 'Yaygın TYT, AYT ve YDT konu sınıflandırmasına göre. Soru sayıları ÖSYM kılavuzundaki test dağılımından alınır. ÖSYM konu bazlı dağılım açıklamadığı için “sık sorulan” işaretleri yayınevlerinin çıkmış soru analizlerine dayanır; kesin bilgi değildir.' },
  { q: 'Programı değiştirebilir miyim?', a: 'Evet. Cevaplarını istediğin zaman değiştirebilirsin. Bildiğin konuları “Konular” sayfasında işaretlersen program onları atlar.' },
  { q: 'Telefonda çalışır mı?', a: 'Evet. Veriler cihaza özel olduğu için başka cihaza geçerken ayarlardan yedeği aktarabilirsin.' }
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
