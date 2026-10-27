/* /anlatim — konu anlatımları: ders seç ya da konu ara. Program kurmadan da açılır. */
import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router';
import { Search } from 'lucide-react';
import { useProfile, useTopicStates } from '@/app/data';
import { SUBJECTS, SUBJECT_BY_ID } from '@/content/subjects';
import { lessonPath } from '@/content/lessons';
import { subjectsFor } from '@/lib/planner';
import { useTitle } from '@/lib/title';

const EXAMS = [['tyt', 'TYT'], ['ayt', 'AYT'], ['ydt', 'YDT']] as const;
const norm = (s: string) => s.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i');

export default function LessonsIndex() {
  useTitle('Konu anlatımları');
  const profile = useProfile();
  const states = useTopicStates();
  const [params, setParams] = useSearchParams();
  const [q, setQ] = useState('');
  const mine = useMemo(() => (profile ? subjectsFor(profile) : []), [profile]);
  const list = mine.length ? [...mine, ...SUBJECTS.filter((s) => !mine.includes(s))] : SUBJECTS;
  const s = SUBJECT_BY_ID[params.get('ders') ?? ''] ?? list[0]!;
  const hits = q.trim().length >= 2 ? SUBJECTS.flatMap((x) => x.topics).filter((t) => norm(t.name).includes(norm(q.trim()))) : null;
  let group = '';

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6">
        <h1 className="display text-[1.75rem] leading-tight">Konu anlatımları</h1>
        <p className="mt-1 text-ink-2">Her konu kısa ve düzenli: özet, bilmen gerekenler, sık yapılan hatalar ve çözümlü bir örnek. Sonunda konunun testi.</p>
      </header>

      <label className="relative mb-4 block">
        <span className="sr-only">Konu ara</span>
        <Search className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted" aria-hidden="true" />
        <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Konu ara: örneğin “paragraf”, “türev”, “mol”" className="h-11 w-full rounded-xl border border-line-2 bg-surface pr-3 pl-9 text-[15px] placeholder:text-muted" />
      </label>

      {hits ? (
        <section aria-live="polite">
          <p className="mb-2 text-sm text-muted">{hits.length ? `${hits.length} konu bulundu` : 'Bu adla konu bulunamadı.'}</p>
          {hits.length > 0 && (
            <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
              {hits.map((t) => (
                <li key={t.id}><Link to={lessonPath(t.id)} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-sunken/60"><span>{t.name}</span><span className="shrink-0 text-[13px] text-muted">{SUBJECT_BY_ID[t.subjectId]!.name}</span></Link></li>
              ))}
            </ul>
          )}
        </section>
      ) : (
        <>
          <label className="mb-4 block">
            <span className="sr-only">Ders</span>
            <select value={s.id} onChange={(e) => setParams({ ders: e.target.value }, { replace: true })} className="h-11 w-full rounded-xl border border-line-2 bg-surface px-3 text-[15px]">
              {EXAMS.map(([ex, label]) => {
                const group = list.filter((x) => x.exam === ex);
                return group.length ? <optgroup key={ex} label={label}>{group.map((x) => <option key={x.id} value={x.id}>{x.name} · {x.topics.length} konu</option>)}</optgroup> : null;
              })}
            </select>
          </label>
          <ol className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {s.topics.map((t, i) => {
              const header = t.group && t.group !== group ? t.group : null;
              if (t.group) group = t.group;
              const done = states.get(t.id)?.status === 'done';
              return (
                <li key={t.id}>
                  {header && <p className="bg-sunken px-4 py-1.5 text-[12.5px] font-medium text-muted">{header}</p>}
                  <Link to={lessonPath(t.id)} className="flex items-center gap-3 px-4 py-3 hover:bg-sunken/60">
                    <span className="num w-6 shrink-0 text-sm text-muted">{i + 1}</span>
                    <span className={`min-w-0 flex-1 ${done ? 'text-muted' : ''}`}>{t.name}</span>
                    {t.frequent && <span className="rounded border border-line-2 px-1.5 text-[11px] font-medium text-ink-2" title="Son yıllarda düzenli soru gelen konu">Sık</span>}
                    {done && <span className="text-[13px] text-good">bitti</span>}
                  </Link>
                </li>
              );
            })}
          </ol>
        </>
      )}
      <p className="mt-4 text-sm text-muted">Anlatımlar konuyu hatırlatmak ve sınavda nelere dikkat edileceğini göstermek için hazırlandı; ders kitabının yerini tutmaz.</p>
    </div>
  );
}
