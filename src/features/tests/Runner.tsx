/* Test çözücü: tek soru, 5 şık (A–E). Şık seç → Kontrol et → çözüm → Sonraki. Boş bırakılabilir.
   Matematik dışındaki sorularda isteğe bağlı ipucu var; cevabı söylemez, yolu gösterir. */
import { useEffect, useState } from 'react';
import { Check, Lightbulb, X } from 'lucide-react';
import { Button, Progress } from '@/components/ui';
import { MathText } from '@/components/MathText';
import { LETTERS } from '@/content/questions/core';
import { topicName, type Question } from '@/content/questions';
import { lessonPath } from '@/content/lessons';
import { Link } from 'react-router';
import { saveAttempt, type AnswerRecord } from '@/lib/storage';

type Rec = AnswerRecord & { picked: number | null; q: Question };

export function Runner({ questions, source, onDone, onRestart }: { questions: Question[]; source: string; onDone: () => void; onRestart: () => void }) {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [recs, setRecs] = useState<Rec[]>([]);
  const [finished, setFinished] = useState<{ markedWeak: boolean } | null>(null);
  const [hint, setHint] = useState(false);
  const [hints, setHints] = useState(0);
  const q = questions[i];

  const check = (empty = false) => {
    if (!q || checked) return;
    if (empty) setPicked(null);
    setChecked(true);
    const p = empty ? null : picked;
    setRecs((r) => [...r, { qid: q.id, topicId: q.topicId, picked: p, q, result: p === null ? 'empty' : p === q.answer ? 'correct' : 'wrong' }]);
  };
  const showHint = () => { if (!hint) { setHint(true); setHints((n) => n + 1); } };
  const next = async () => {
    if (i + 1 < questions.length) { setI(i + 1); setPicked(null); setChecked(false); setHint(false); window.scrollTo(0, 0); return; }
    setFinished(await saveAttempt(source, recs));
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (finished || (e.target as HTMLElement).tagName === 'INPUT') return;
      const k = e.key.toUpperCase();
      const idx = LETTERS.indexOf(k) >= 0 ? LETTERS.indexOf(k) : /^[1-5]$/.test(k) ? Number(k) - 1 : -1;
      if (idx >= 0 && !checked) { e.preventDefault(); setPicked(idx); }
      else if (e.key === 'Enter') { e.preventDefault(); if (checked) void next(); else if (picked !== null) check(); }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  if (finished) {
    const c = recs.filter((r) => r.result === 'correct').length;
    const w = recs.filter((r) => r.result === 'wrong').length;
    const e = recs.length - c - w;
    const net = Math.round((c - w / 4) * 100) / 100;
    const missed = recs.filter((r) => r.result !== 'correct');
    return (
      <div>
        <h1 className="display text-[1.75rem] leading-tight">Test bitti</h1>
        <dl className="mt-5 grid grid-cols-4 gap-px overflow-hidden rounded-2xl border border-line bg-line">
          {[['Doğru', c], ['Yanlış', w], ['Boş', e], ['Net', String(net).replace('.', ',')]].map(([k, v]) => (
            <div key={k} className="bg-surface px-4 py-3"><dt className="text-sm text-muted">{k}</dt><dd className="num mt-0.5 text-2xl font-semibold">{v}</dd></div>
          ))}
        </dl>
        <p className="mt-3 text-sm text-muted">Net = doğru − yanlış ÷ 4. Yanlış ve boş bıraktığın sorular “Yanlışlarım” listesine eklendi.{hints > 0 && ` ${hints} soruda ipucuna baktın.`}</p>
        {finished.markedWeak && <p className="mt-3 rounded-xl border border-line px-4 py-3 text-[14.5px] text-ink-2">Bu konuda başarın %50’nin altında kaldı; konu “zorlandım” olarak işaretlendi. Programı güncellediğinde tekrar oturumlarına girer.</p>}
        {missed.length > 0 && (
          <section className="mt-8">
            <h2 className="mb-3 font-medium">Çözümler</h2>
            <ol className="divide-y divide-line rounded-2xl border border-line bg-surface">
              {missed.map((r) => (
                <li key={r.qid} className="px-4 py-4">
                  <p className="flex flex-wrap items-baseline justify-between gap-x-3 text-sm text-muted">
                    <span>{topicName(r.topicId)} · {r.result === 'empty' ? 'boş' : `senin cevabın ${LETTERS[r.picked!]}`}</span>
                    <Link to={lessonPath(r.topicId)} className="text-primary-ink underline decoration-line-2 underline-offset-4">Konuyu tekrar et<span className="sr-only">: {topicName(r.topicId)}</span></Link>
                  </p>
                  <p className="mt-1 whitespace-pre-line"><MathText text={r.q.stem} /></p>
                  <p className="mt-2 text-[15px]"><span className="font-medium text-good">Doğru cevap {LETTERS[r.q.answer]}) </span><MathText text={r.q.options[r.q.answer]!} /></p>
                  <p className="mt-1 text-[14.5px] text-ink-2"><MathText text={r.q.solution} /></p>
                </li>
              ))}
            </ol>
          </section>
        )}
        <div className="mt-8 flex flex-wrap gap-2">
          <Button onClick={onRestart}>Yeni test</Button>
          <Button variant="secondary" onClick={onDone}>Testlere dön</Button>
        </div>
      </div>
    );
  }
  if (!q) return null;

  return (
    <div>
      <div className="mb-6 flex items-center gap-3">
        <Progress value={i / questions.length} label="Test ilerlemesi" className="flex-1" />
        <span className="num text-sm text-muted">{i + 1} / {questions.length}</span>
      </div>
      <p className="text-sm text-muted">{topicName(q.topicId)}</p>
      <h1 className="mt-2 whitespace-pre-line text-[1.15rem] leading-relaxed"><MathText text={q.stem} /></h1>

      <div role="radiogroup" aria-label="Şıklar" className="mt-6 grid gap-2">
        {q.options.map((o, k) => {
          const isAnswer = checked && k === q.answer;
          const isWrong = checked && k === picked && k !== q.answer;
          const sel = !checked && picked === k;
          return (
            <button key={k} type="button" role="radio" aria-checked={picked === k} disabled={checked} onClick={() => setPicked(k)}
              className={`flex min-h-12 items-center gap-3 rounded-xl border px-4 py-2.5 text-left text-[15.5px] transition-colors ${isAnswer ? 'border-good bg-good-soft' : isWrong ? 'border-bad bg-bad-soft' : sel ? 'border-primary bg-primary-soft' : 'border-line-2 bg-surface hover:border-ink-2'} disabled:cursor-default`}>
              <span className={`num grid size-7 shrink-0 place-items-center rounded-lg border text-sm ${sel ? 'border-primary text-primary-ink' : 'border-line-2 text-muted'}`}>{LETTERS[k]}</span>
              <span className="min-w-0 flex-1"><MathText text={o} /></span>
              {isAnswer && <Check className="size-4 text-good" aria-label="doğru cevap" />}
              {isWrong && <X className="size-4 text-bad" aria-label="senin cevabın, yanlış" />}
            </button>
          );
        })}
      </div>

      {hint && q.hint && (
        <div className="mt-5 flex gap-3 rounded-xl border border-line bg-sunken px-4 py-3" role="note" aria-label="İpucu">
          <Lightbulb className="mt-0.5 size-4 shrink-0 text-muted" aria-hidden />
          <p className="text-[15px] text-ink-2"><MathText text={q.hint} /></p>
        </div>
      )}

      {checked && (
        <div className="mt-5 rounded-xl border border-line bg-surface px-4 py-3" role="status">
          <p className={`font-medium ${picked === q.answer ? 'text-good' : picked === null ? 'text-ink-2' : 'text-bad'}`}>
            {picked === q.answer ? 'Doğru' : picked === null ? `Boş bıraktın. Doğru cevap ${LETTERS[q.answer]}.` : `Yanlış. Doğru cevap ${LETTERS[q.answer]}.`}
          </p>
          <p className="mt-1 text-[15px] text-ink-2"><MathText text={q.solution} /></p>
        </div>
      )}

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
        {!checked ? (
          <>
            <div className="flex flex-wrap gap-1">
              <Button variant="ghost" onClick={() => check(true)}>Boş bırak</Button>
              {q.hint && <Button variant="ghost" onClick={showHint} disabled={hint} aria-expanded={hint}><Lightbulb className="size-4" aria-hidden />İpucu</Button>}
            </div>
            <Button onClick={() => check()} disabled={picked === null}>Kontrol et</Button>
          </>
        ) : (
          <>
            <span className="text-sm text-muted">Klavye: A–E seç, Enter</span>
            <Button onClick={() => void next()}>{i + 1 < questions.length ? 'Sonraki soru' : 'Sonucu gör'}</Button>
          </>
        )}
      </div>
    </div>
  );
}
