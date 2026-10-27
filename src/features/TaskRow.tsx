/* Program görevi satırı: işaretleme, konu bilgisi, "zorlandım" */
import { Check, Flag } from 'lucide-react';
import { Link } from 'react-router';
import { SUBJECT_BY_ID, TOPIC_BY_ID } from '@/content/subjects';
import { SubjectTag } from '@/components/ui';
import { setTopicStatus, toggleTask } from '@/lib/storage';
import type { Task, TopicState } from '@/types';

const KIND: Record<Task['kind'], string> = { topic: 'Konu', practice: 'Soru çözümü', review: 'Tekrar', routine: 'Rutin', exam: 'Deneme', analysis: 'Analiz' };

export function TaskRow({ date, task, state, compact = false }: { date: string; task: Task; state?: TopicState; compact?: boolean }) {
  const topic = task.topicId ? TOPIC_BY_ID[task.topicId] : undefined;
  const weak = state?.status === 'weak';
  const names = (task.topicIds ?? []).map((id) => TOPIC_BY_ID[id]?.name).filter(Boolean) as string[];
  const label = topic ? `${topic.name}${task.part ? ` · ${task.part[0]}/${task.part[1]}` : ''}` : task.title;
  return (
    <li className={`flex items-start gap-3 ${compact ? 'py-2' : 'px-4 py-3.5 sm:px-5'}`}>
      <button type="button" role="checkbox" aria-checked={!!task.done} aria-label={`${label}: ${task.done ? 'yapılmadı olarak işaretle' : 'tamamlandı olarak işaretle'}`}
        onClick={() => void toggleTask(date, task.id, !task.done)}
        className={`mt-0.5 grid shrink-0 place-items-center rounded-md border transition-colors ${compact ? 'size-5' : 'size-6'} ${task.done ? 'border-good bg-good text-surface' : 'border-line-2 bg-surface hover:border-ink-2'}`}>
        {task.done && <Check className="size-3.5" strokeWidth={3} />}
      </button>
      <div className="min-w-0 flex-1">
        <p className={`${compact ? 'text-[13.5px]' : 'text-[15.5px]'} leading-snug ${task.done ? 'text-muted line-through' : ''}`}>
          {label}
        </p>
        {!compact && (
          <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-[12.5px] text-muted">
            {task.subjectId && SUBJECT_BY_ID[task.subjectId] ? <SubjectTag id={task.subjectId} /> : null}
            <span>{KIND[task.kind]}</span>
            {topic?.frequent && <span className="rounded border border-line-2 px-1.5 text-[11px] font-medium text-ink-2" title="Son yıllarda düzenli soru gelen konu">Sık</span>}
            {weak && <span className="text-warn">Zorlandım</span>}
            {task.kind === 'exam' && <Link to={`/denemeler?ekle=${task.title.slice(0, 3).toLowerCase()}`} className="text-primary-ink underline decoration-line-2 underline-offset-4">Sonucu gir</Link>}
          </p>
        )}
        {!compact && names.length > 0 && <p className="mt-1 text-[13px] text-ink-2">{names.join(' · ')}</p>}
      </div>
      <div className="flex shrink-0 items-center gap-1">
        {!compact && topic && (
          <button type="button" aria-pressed={weak} onClick={() => void setTopicStatus(topic.id, weak ? (state?.doneSessions ? 'doing' : 'todo') : 'weak')}
            className={`grid size-8 place-items-center rounded-lg ${weak ? 'text-warn' : 'text-muted hover:bg-sunken hover:text-ink'}`}
            aria-label={weak ? `${topic.name}: zorlandım işaretini kaldır` : `${topic.name}: zorlandım (tekrar listesine al)`} title="Zorlandım">
            <Flag className="size-4" fill={weak ? 'currentColor' : 'none'} strokeWidth={1.9} />
          </button>
        )}
        <span className={`num ${compact ? 'text-[12px]' : 'text-[13px]'} text-muted`}>{task.minutes} dk</span>
      </div>
    </li>
  );
}
