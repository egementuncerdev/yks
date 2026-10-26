/* Testler: ders seç, konu testi ya da karışık test başlat; yanlışlar ayrı. */
import { useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useLiveQuery } from 'dexie-react-hooks';
import { useProfile, useTopicStates } from '@/app/data';
import { ButtonLink, Empty } from '@/components/ui';
import { subjectsFor } from '@/lib/planner';
import { db } from '@/lib/storage';
import { questionCount, topicsWithQuestions } from '@/content/questions';
import { RESOURCES } from '@/content/subjects';

export const testPath = (source: string) => `/testler/${encodeURIComponent(source)}`;

export default function Tests() {
  const profile = useProfile();
  const states = useTopicStates();
  const navigate = useNavigate();
  const attempts = useLiveQuery(() => db.attempts.toArray(), [], []);
  const wrongCount = useLiveQuery(() => db.wrongs.count(), [], 0);
  const subjects = useMemo(() => (profile ? subjectsFor(profile).filter((s) => topicsWithQuestions(s.id).length) : []), [profile]);
  const [sid, setSid] = useState('');
  if (!profile) return null;
  if (!subjects.length) return <Empty title="Henüz soru yok" text="Puan türündeki dersler için sorular hazırlanıyor." />;

  const s = subjects.find((x) => x.id === sid) ?? subjects[0]!;
  const topics = topicsWithQuestions(s.id);
  const last = (src: string) => attempts.filter((a) => a.source === src).sort((a, b) => b.at.localeCompare(a.at))[0];

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6">
        <h1 className="display text-[1.75rem] leading-tight">Testler</h1>
        <p className="mt-1 text-ink-2">Konu konu kısa testler. Her sorunun çözümü var; yanlışların ayrı listede birikir.</p>
      </header>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line px-4 py-3">
        <span><span className="font-medium">Yanlışlarım</span> <span className="num text-muted">· {wrongCount}</span></span>
        <ButtonLink to={testPath('wrongs')} size="sm" variant="secondary" aria-disabled={!wrongCount} onClick={(e) => { if (!wrongCount) e.preventDefault(); }} className={wrongCount ? '' : 'pointer-events-none opacity-45'}>Tekrar çöz</ButtonLink>
      </div>

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <label className="flex-1">
          <span className="sr-only">Ders</span>
          <select value={s.id} onChange={(e) => setSid(e.target.value)} className="h-11 w-full rounded-xl border border-line-2 bg-surface px-3 text-[15px]">
            {subjects.map((x) => <option key={x.id} value={x.id}>{x.name} · {topicsWithQuestions(x.id).length} konu</option>)}
          </select>
        </label>
        <ButtonLink to={testPath(`mix:${s.id}`)} variant="secondary">Karışık test</ButtonLink>
      </div>

      <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
        {topics.map((t) => {
          const a = last(t.id);
          const n = questionCount(t.id);
          return (
            <li key={t.id}>
              <button type="button" onClick={() => navigate(testPath(t.id))} className="flex w-full items-center justify-between gap-3 px-4 py-3 text-left hover:bg-sunken/60">
                <span className="min-w-0">
                  <span className="block">{t.name}</span>
                  <span className="mt-0.5 block text-[13px] text-muted">
                    {n === 'sınırsız' ? 'Her seferinde yeni sorular' : `${n} soru`}
                    {states.get(t.id)?.status === 'done' && ' · konu bitti'}
                    {a && ` · son test ${a.correct}/${a.total}`}
                  </span>
                </span>
                <span className="shrink-0 text-sm text-primary-ink">Başla</span>
              </button>
            </li>
          );
        })}
      </ul>
      <p className="mt-6 text-sm text-ink-2">Gerçek sınav soruları için MEB’in çıkmış soru arşivleri:{' '}
        {RESOURCES.map((r, i) => <span key={r.url}>{i > 0 && ' · '}<a className="text-primary-ink underline decoration-line-2 underline-offset-4" href={r.url} target="_blank" rel="noopener">{r.name}<span className="sr-only"> (yeni sekmede açılır)</span></a></span>)}
      </p>
      <p className="mt-2 text-sm text-muted"><Link to="/konular" className="underline decoration-line-2 underline-offset-4">Konular</Link> sayfasında hangi konunun bittiğini işaretleyebilirsin; karışık test önce biten konulardan soru seçer.</p>
    </div>
  );
}
