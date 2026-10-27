/* /anlatim/:topicId — tek konu anlatımı. Sırayla: özet, bilmen gerekenler, sık hatalar, örnek, sonra test. */
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, ChevronDown } from 'lucide-react';
import { useProfile, useTopicStates } from '@/app/data';
import { ButtonLink, Empty, SubjectTag } from '@/components/ui';
import { MathText } from '@/components/MathText';
import { SUBJECT_BY_ID, TOPIC_BY_ID } from '@/content/subjects';
import { lessonFor, lessonPath, neighbors, type Lesson } from '@/content/lessons';
import { hasQuestions, questionCount } from '@/content/questions';
import { setTopicStatus } from '@/lib/storage';
import { testPath } from '../tests/Tests';
import { useTitle } from '@/lib/title';

export default function LessonPage() {
  const { topicId = '' } = useParams();
  const topic = TOPIC_BY_ID[topicId];
  const profile = useProfile();
  const states = useTopicStates();
  const [lesson, setLesson] = useState<Lesson | null | undefined>(undefined);
  useTitle(topic ? `${topic.name} konu anlatımı` : 'Konu anlatımı');
  useEffect(() => { setLesson(undefined); void lessonFor(topicId).then(setLesson); }, [topicId]);

  if (!topic) return <Empty title="Konu bulunamadı" action={<ButtonLink to="/anlatim">Konu anlatımları</ButtonLink>} />;
  if (lesson === undefined) return <p className="py-20 text-center text-muted" role="status">Yükleniyor…</p>;
  if (!lesson) return <Empty title="Bu konunun anlatımı hazırlanıyor" action={<ButtonLink to="/anlatim">Konu anlatımları</ButtonLink>} />;

  const subject = SUBJECT_BY_ID[topic.subjectId]!;
  const { prev, next } = neighbors(topic.id);
  const st = states.get(topic.id)?.status;
  const n = hasQuestions(topic.id) ? questionCount(topic.id) : 0;

  return (
    <article className="mx-auto max-w-2xl">
      <Link to={`/anlatim?ders=${subject.id}`} className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"><ArrowLeft className="size-4" /> {subject.name}</Link>
      <header className="mt-4 mb-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
          <SubjectTag id={subject.id} />
          {topic.group && <span>{topic.group}</span>}
          {topic.frequent && <span className="rounded border border-line-2 px-1.5 text-[11px] font-medium text-ink-2" title="Son yıllarda düzenli soru gelen konu">Sık</span>}
        </div>
        <h1 className="display mt-2 text-[1.9rem] leading-tight sm:text-[2.25rem]">{topic.name}</h1>
        <p className="mt-4 text-[1.075rem] leading-relaxed text-ink-2"><MathText text={lesson.intro} /></p>
      </header>

      <div className="space-y-8">
        {lesson.parts.map((p) => (
          <section key={p.h} aria-labelledby={`h-${p.h}`}>
            <h2 id={`h-${p.h}`} className="display text-lg">{p.h}</h2>
            <ul className="mt-3 space-y-2.5">
              {p.items.map((x) => (
                <li key={x} className="flex gap-3 leading-relaxed">
                  <span className="mt-[0.7em] h-px w-3 shrink-0 bg-ink-2" aria-hidden="true" />
                  <span><MathText text={x} /></span>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {lesson.traps && lesson.traps.length > 0 && (
          <section aria-labelledby="h-traps" className="rounded-2xl border border-line bg-surface px-5 py-4">
            <h2 id="h-traps" className="font-medium">Sık yapılan hatalar</h2>
            <ul className="mt-2 space-y-2 text-[15px] text-ink-2">
              {lesson.traps.map((x) => <li key={x} className="flex gap-3"><span className="text-warn" aria-hidden="true">!</span><span><MathText text={x} /></span></li>)}
            </ul>
          </section>
        )}

        {lesson.example && (
          <section aria-labelledby="h-ex">
            <h2 id="h-ex" className="display text-lg">Örnek</h2>
            <p className="mt-3 whitespace-pre-line leading-relaxed"><MathText text={lesson.example.q} /></p>
            <details className="group mt-3 rounded-xl border border-line bg-surface">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-[15px] font-medium [&::-webkit-details-marker]:hidden">
                Çözümü göster <ChevronDown className="size-4 text-muted transition-transform group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="whitespace-pre-line border-t border-line px-4 py-3 text-[15px] leading-relaxed text-ink-2"><MathText text={lesson.example.a} /></p>
            </details>
          </section>
        )}
      </div>

      <section aria-label="Sonraki adım" className="mt-10 rounded-2xl border border-line-2 bg-surface p-5">
        <p className="font-medium">Okudun mu? Şimdi soru çöz.</p>
        <p className="mt-1 text-[14.5px] text-ink-2">{n ? (n === 'sınırsız' ? 'Bu konuda her seferinde yeni sorular üretilir.' : `Bu konuda ${n} çözümlü soru var.`) : 'Bu konunun soruları henüz hazırlanıyor; MEB’in çıkmış soru arşivlerine bakabilirsin.'}</p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          {n ? <ButtonLink to={testPath(topic.id)}>10 soru çöz <ArrowRight className="size-4" /></ButtonLink> : null}
          {profile && (
            <label className="flex items-center gap-2 text-sm text-ink-2">
              <span>Durum</span>
              <select value={st ?? 'todo'} onChange={(e) => void setTopicStatus(topic.id, e.target.value as 'todo')} className="h-11 rounded-xl border border-line-2 bg-surface px-3 text-[15px]">
                <option value="todo">Yapılacak</option><option value="doing">Çalışıyorum</option><option value="weak">Zorlandım</option><option value="done">Bitti</option>
              </select>
            </label>
          )}
        </div>
      </section>

      <nav aria-label="Aynı dersteki diğer konular" className="mt-8 grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
        {prev ? <Link to={lessonPath(prev.id)} className="rounded-xl px-1 py-1 hover:text-ink"><span className="block text-sm text-muted">← Önceki</span><span className="text-ink-2">{prev.name}</span></Link> : <span />}
        {next && <Link to={lessonPath(next.id)} className="rounded-xl px-1 py-1 text-right hover:text-ink sm:text-right"><span className="block text-sm text-muted">Sonraki →</span><span className="text-ink-2">{next.name}</span></Link>}
      </nav>
    </article>
  );
}
