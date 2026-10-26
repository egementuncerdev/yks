/* Hafta: günler alt alta; bugün belirgin. */
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { usePlan, useToday, useTopicStates } from '@/app/data';
import { Button, Empty, ButtonLink } from '@/components/ui';
import { TaskRow } from './TaskRow';
import { addDays, DAY_NAMES, fmtDay, fmtMinutes, weekStart } from '@/lib/dates';

export default function Week() {
  const plan = usePlan();
  const today = useToday();
  const states = useTopicStates();
  const [start, setStart] = useState(() => weekStart(today));
  if (plan === undefined) return null;
  if (!plan) return <Empty title="Program yok" action={<ButtonLink to="/kurulum">Programımı oluştur</ButtonLink>} />;

  const first = weekStart(plan.days[0]?.date ?? today);
  const last = weekStart(plan.days.at(-1)?.date ?? today);
  const days = Array.from({ length: 7 }, (_, i) => addDays(start, i));
  const byDate = new Map(plan.days.map((d) => [d.date, d]));
  const total = days.reduce((a, d) => a + (byDate.get(d)?.tasks.reduce((b, t) => b + t.minutes, 0) ?? 0), 0);

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm text-muted">{fmtDay(days[0]!)} – {fmtDay(days[6]!)}{start > plan.topicsEnd ? ' · deneme ve tekrar dönemi' : ''}</p>
          <h1 className="display mt-1 text-[1.75rem] leading-tight">Bu hafta {fmtMinutes(total)}</h1>
        </div>
        <div className="flex gap-1">
          <Button variant="secondary" size="sm" aria-label="Önceki hafta" disabled={start <= first} onClick={() => setStart(addDays(start, -7))}><ChevronLeft className="size-4" /></Button>
          {start !== weekStart(today) && <Button variant="secondary" size="sm" onClick={() => setStart(weekStart(today))}>Bu hafta</Button>}
          <Button variant="secondary" size="sm" aria-label="Sonraki hafta" disabled={start >= last} onClick={() => setStart(addDays(start, 7))}><ChevronRight className="size-4" /></Button>
        </div>
      </header>

      <ol className="grid gap-4">
        {days.map((date, i) => {
          const day = byDate.get(date);
          const tasks = day?.tasks ?? [];
          const done = tasks.filter((t) => t.done).length;
          const isToday = date === today;
          return (
            <li key={date} aria-current={isToday ? 'date' : undefined} className={`rounded-2xl border bg-surface ${isToday ? 'border-primary' : 'border-line'}`}>
              <div className="flex items-baseline justify-between gap-3 border-b border-line px-4 py-3">
                <h2 className="font-medium">{DAY_NAMES[i]} <span className="font-normal text-muted">{fmtDay(date)}</span>{isToday && <span className="ml-2 text-sm text-primary-ink">bugün</span>}</h2>
                <span className="num text-sm text-muted">{tasks.length ? `${done}/${tasks.length} · ${fmtMinutes(tasks.reduce((a, t) => a + t.minutes, 0))}` : 'dinlenme'}</span>
              </div>
              {tasks.length > 0 && (
                <ul className="divide-y divide-line px-4">
                  {tasks.map((t) => <TaskRow key={t.id} date={date} task={t} state={t.topicId ? states.get(t.topicId) : undefined} compact />)}
                </ul>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
