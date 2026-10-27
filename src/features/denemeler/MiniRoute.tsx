/* /denemeler/mini/:kind — süreli mini deneme. Çözerken cevap ya da ipucu gösterilmez (gerçek sınav gibi);
   süre bitince ya da "Bitir" deyince test test sonuç ve çözümler gelir. Yanlış ve boşlar "Yanlışlarım"a eklenir. */
import { useEffect, useMemo, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router';
import { ArrowLeft, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { ActionBar, Button, ButtonLink, Empty } from '@/components/ui';
import { MathText } from '@/components/MathText';
import { LETTERS } from '@/content/questions/core';
import { topicName } from '@/content/questions';
import { MINI_KINDS, buildMini, miniMinutes, miniTests, type MiniKind, type MiniQuestion } from '@/content/questions/mini';
import { lessonPath } from '@/content/lessons';
import { net } from '@/content/exam';
import { saveAttempt } from '@/lib/storage';
import { useTitle } from '@/lib/title';

const fmt = (n: number) => String(n).replace('.', ',');
const clock = (s: number) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

export default function MiniRoute() {
  const { kind = '' } = useParams();
  const k = MINI_KINDS.find((x) => x.id === kind);
  useTitle(k ? `${k.name} mini denemesi` : 'Mini deneme');
  const [run, setRun] = useState(0);
  const [started, setStarted] = useState(false);
  const qs = useMemo(() => (k ? buildMini(k.id as MiniKind) : []), [k, run]);
  if (!k) return <Empty title="Böyle bir deneme yok" action={<ButtonLink to="/denemeler">Denemelere dön</ButtonLink>} />;
  const minutes = miniMinutes(k.id);

  if (!started) return (
    <div className="mx-auto max-w-2xl">
      <Link to="/denemeler" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"><ArrowLeft className="size-4" /> Denemeler</Link>
      <h1 className="display mt-4 text-[1.9rem] leading-tight">{k.name} mini denemesi</h1>
      <p className="mt-2 text-ink-2">{qs.length} soru · {minutes} dakika. Ders dağılımı gerçek sınavla aynı, büyüklüğü dörtte biri.</p>
      <ul className="mt-5 divide-y divide-line rounded-2xl border border-line bg-surface">
        {miniTests(k.id).map((t) => <li key={t.id} className="flex justify-between px-4 py-2.5 text-[14.5px]"><span>{t.name}</span><span className="num text-muted">{qs.filter((q) => q.testId === t.id).length} soru</span></li>)}
      </ul>
      <ul className="mt-5 space-y-1.5 text-[14.5px] text-ink-2">
        <li>· Çözerken doğru cevap ve ipucu gösterilmez; istediğin soruya dönebilirsin.</li>
        <li>· Süre bitince deneme kendiliğinden biter. Dört yanlış bir doğruyu götürür.</li>
        <li>· Sonunda her testin neti ve yanlışlarının çözümleri görünür.</li>
      </ul>
      <Button size="lg" className="mt-6" onClick={() => setStarted(true)}>Başla</Button>
    </div>
  );

  return <Exam key={run} qs={qs} kind={k.id as MiniKind} seconds={minutes * 60} onRestart={() => { setRun((r) => r + 1); setStarted(false); }} />;
}

function Exam({ qs, kind, seconds, onRestart }: { qs: MiniQuestion[]; kind: MiniKind; seconds: number; onRestart: () => void }) {
  const navigate = useNavigate();
  const [i, setI] = useState(0);
  const [ans, setAns] = useState<(number | null)[]>(() => qs.map(() => null));
  const [left, setLeft] = useState(seconds);
  const [done, setDone] = useState(false);
  const q = qs[i]!;

  const finish = async () => {
    if (done) return;
    setDone(true);
    window.scrollTo(0, 0);
    await saveAttempt(`deneme:${kind}`, qs.map((x, j) => ({ qid: x.id, topicId: x.topicId, result: ans[j] === null ? 'empty' : ans[j] === x.answer ? 'correct' : 'wrong' })));
  };

  useEffect(() => {
    if (done) return;
    const end = Date.now() + left * 1000;
    const t = setInterval(() => { const s = Math.max(0, Math.round((end - Date.now()) / 1000)); setLeft(s); if (s === 0) void finish(); }, 1000);
    const warn = (e: BeforeUnloadEvent) => { e.preventDefault(); };
    window.addEventListener('beforeunload', warn);
    return () => { clearInterval(t); window.removeEventListener('beforeunload', warn); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [done]);

  useEffect(() => {
    if (done) return;
    const onKey = (e: KeyboardEvent) => {
      if ((e.target as HTMLElement).tagName === 'INPUT') return;
      const idx = LETTERS.indexOf(e.key.toUpperCase());
      if (idx >= 0) { e.preventDefault(); pick(idx); }
      else if (e.key === 'ArrowRight') setI((x) => Math.min(qs.length - 1, x + 1));
      else if (e.key === 'ArrowLeft') setI((x) => Math.max(0, x - 1));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  const pick = (k: number) => setAns((a) => a.map((v, j) => (j === i ? (v === k ? null : k) : v)));
  const answered = ans.filter((a) => a !== null).length;

  if (done) return <Result qs={qs} ans={ans} kind={kind} used={seconds - left} onRestart={onRestart} onBack={() => navigate('/denemeler')} />;

  const tests = miniTests(kind);
  return (
    <div className="mx-auto max-w-2xl">
      <div className="sticky top-16 z-10 -mx-4 mb-5 flex items-center justify-between gap-3 border-b border-line bg-paper/95 px-4 py-2.5 backdrop-blur sm:mx-0 sm:rounded-xl sm:border sm:px-4">
        <span className="text-sm text-muted">{tests.find((t) => t.id === q.testId)?.name}</span>
        <span className={`num inline-flex items-center gap-1.5 text-sm font-semibold ${left < 120 ? 'text-bad' : ''}`} role="timer" aria-label={`Kalan süre ${clock(left)}`}><Clock className="size-4" aria-hidden="true" />{clock(left)}</span>
      </div>

      <p className="text-sm text-muted">Soru {i + 1} / {qs.length} · {topicName(q.topicId)}</p>
      <h1 className="mt-2 whitespace-pre-line text-[1.15rem] leading-relaxed"><MathText text={q.stem} /></h1>
      <div role="radiogroup" aria-label="Şıklar" className="mt-6 grid gap-2">
        {q.options.map((o, k) => {
          const sel = ans[i] === k;
          return (
            <button key={k} type="button" role="radio" aria-checked={sel} onClick={() => pick(k)}
              className={`flex min-h-12 items-center gap-3 rounded-xl border px-4 py-2.5 text-left text-[15.5px] transition-colors ${sel ? 'border-primary bg-primary-soft' : 'border-line-2 bg-surface hover:border-ink-2'}`}>
              <span className={`num grid size-7 shrink-0 place-items-center rounded-lg border text-sm ${sel ? 'border-primary text-primary-ink' : 'border-line-2 text-muted'}`}>{LETTERS[k]}</span>
              <span className="min-w-0 flex-1"><MathText text={o} /></span>
            </button>
          );
        })}
      </div>

      <ActionBar aboveNav>
        <Button variant="secondary" onClick={() => setI(i - 1)} disabled={i === 0}><ChevronLeft className="size-4" /> Önceki</Button>
        <span className="num text-sm text-muted">{i + 1} / {qs.length}</span>
        {i + 1 < qs.length ? <Button className="min-w-[8.5rem]" onClick={() => setI(i + 1)}>Sonraki <ChevronRight className="size-4" /></Button>
          : <Button className="min-w-[8.5rem]" onClick={() => { if (answered === qs.length || confirm(`${qs.length - answered} soru boş. Denemeyi bitirmek istiyor musun?`)) void finish(); }}>Bitir</Button>}
      </ActionBar>

      <nav aria-label="Sorular" className="mt-8 border-t border-line pt-5">
        <div className="mb-3 flex items-center justify-between text-sm text-muted"><span>{answered} / {qs.length} cevaplandı</span>
          <button type="button" className="text-primary-ink underline decoration-line-2 underline-offset-4" onClick={() => { if (confirm(answered < qs.length ? `${qs.length - answered} soru boş. Denemeyi bitirmek istiyor musun?` : 'Denemeyi bitirmek istiyor musun?')) void finish(); }}>Denemeyi bitir</button>
        </div>
        <ol className="grid grid-cols-8 gap-1.5 sm:grid-cols-10">
          {qs.map((_, j) => (
            <li key={j}><button type="button" onClick={() => setI(j)} aria-current={j === i ? 'step' : undefined} aria-label={`Soru ${j + 1}${ans[j] !== null ? ', cevaplandı' : ''}`}
              className={`num h-9 w-full rounded-lg border text-[13px] ${j === i ? 'border-primary font-semibold text-primary-ink' : ans[j] !== null ? 'border-line-2 bg-sunken text-ink' : 'border-line text-muted'}`}>{j + 1}</button></li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

function Result({ qs, ans, kind, used, onRestart, onBack }: { qs: MiniQuestion[]; ans: (number | null)[]; kind: MiniKind; used: number; onRestart: () => void; onBack: () => void }) {
  const tests = miniTests(kind);
  const rows = tests.map((t) => {
    const idx = qs.map((q, j) => (q.testId === t.id ? j : -1)).filter((j) => j >= 0);
    const c = idx.filter((j) => ans[j] === qs[j]!.answer).length, w = idx.filter((j) => ans[j] !== null && ans[j] !== qs[j]!.answer).length;
    return { t, n: idx.length, c, w, e: idx.length - c - w };
  });
  const tot = rows.reduce((a, r) => ({ n: a.n + r.n, c: a.c + r.c, w: a.w + r.w, e: a.e + r.e }), { n: 0, c: 0, w: 0, e: 0 });
  const missed = qs.map((q, j) => ({ q, a: ans[j], j })).filter((x) => x.a !== x.q.answer);
  const k = MINI_KINDS.find((x) => x.id === kind)!;

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="display text-[1.75rem] leading-tight">{k.name} mini denemesi bitti</h1>
      <p className="mt-1 text-ink-2">Süre: {clock(used)} · Toplam <span className="font-semibold text-ink">{fmt(net(tot.c, tot.w))} net</span> / {tot.n} soru</p>
      <table className="mt-5 w-full text-left text-[14.5px]">
        <thead><tr className="text-[13px] text-muted"><th scope="col" className="pb-2 font-medium">Test</th>{['D', 'Y', 'B', 'Net'].map((h) => <th key={h} scope="col" className="w-12 pb-2 text-right font-medium">{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.t.id} className="border-t border-line"><th scope="row" className="py-2 pr-2 font-normal">{r.t.name}<span className="text-[12.5px] text-muted"> / {r.n}</span></th>
              <td className="num py-2 text-right text-good">{r.c}</td><td className="num py-2 text-right text-bad">{r.w}</td><td className="num py-2 text-right text-muted">{r.e}</td><td className="num py-2 text-right font-semibold">{fmt(net(r.c, r.w))}</td></tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 text-sm text-muted">Mini deneme gerçek sınavın dörtte biri büyüklüğünde; netini kabaca dört ile çarparak tam denemeyle karşılaştırabilirsin. Yanlış ve boşların “Yanlışlarım” listesine eklendi.</p>

      {missed.length > 0 && (
        <section className="mt-8" aria-labelledby="sol-h">
          <h2 id="sol-h" className="mb-3 font-medium">Çözümler</h2>
          <ol className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {missed.map(({ q, a, j }) => (
              <li key={q.id} className="px-4 py-4">
                <p className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm text-muted">
                  <span>Soru {j + 1} · {topicName(q.topicId)} · {a === null ? 'boş' : `senin cevabın ${LETTERS[a!]}`}</span>
                  <Link to={lessonPath(q.topicId)} className="text-primary-ink underline decoration-line-2 underline-offset-4">Konuyu tekrar et<span className="sr-only">: {topicName(q.topicId)}</span></Link>
                </p>
                <p className="mt-1 whitespace-pre-line"><MathText text={q.stem} /></p>
                <p className="mt-2 text-[15px]"><span className="font-medium text-good">Doğru cevap {LETTERS[q.answer]}) </span><MathText text={q.options[q.answer]!} /></p>
                <p className="mt-1 text-[14.5px] text-ink-2"><MathText text={q.solution} /></p>
              </li>
            ))}
          </ol>
        </section>
      )}
      <div className="mt-8 flex flex-wrap gap-2">
        <Button onClick={onRestart}>Yeni mini deneme</Button>
        <Button variant="secondary" onClick={onBack}>Denemelere dön</Button>
      </div>
    </div>
  );
}
