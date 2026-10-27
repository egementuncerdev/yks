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
import { FIGURES } from '@/content/lessons/figures';
import { FigureView } from './FigureView';
import { EXAMS, TESTS } from '@/content/exam';

/* Sınavda bu ders: dersin geçtiği testte derslerin soru sayısı (kılavuz verisi); tek dersli testlerde sınavın testleri */
function ExamShare({ subjectId }: { subjectId: string }) {
  const tests = TESTS.filter((t) => t.parts.some((p) => p.subject === subjectId));
  if (!tests.length) return null;
  const exam = tests[0]!.exam;
  const total = tests.reduce((a, t) => a + t.parts.filter((p) => p.subject === subjectId).reduce((b, p) => b + p.q, 0), 0);
  const name = SUBJECT_BY_ID[subjectId]!.short;
  const multi = tests[0]!.parts.length > 1;
  const items: [string, number][] = multi
    ? tests[0]!.parts.map((p) => [SUBJECT_BY_ID[p.subject]!.short, p.q])
    : TESTS.filter((t) => t.exam === exam).map((t) => [t.name, t.questions]);
  return (
    <FigureView f={{ kind: 'bars', title: `Sınavda bu ders: ${EXAMS[exam].name}’de ${total} soru`, items, highlight: multi ? name : tests[0]!.name, unit: 'soru',
      caption: multi ? `${tests.map((t) => t.name).join(' ve ')} testinde derslerin soru sayısı (ÖSYM kılavuzu).` : `${EXAMS[exam].name} testlerinin soru sayısı (ÖSYM kılavuzu).` }} />
  );
}

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
  const figs = FIGURES[`${topic.subjectId}:${topic.name}`] ?? [];
  const figsAt = (i: number) => figs.filter((f) => (f.at ?? lesson.parts.length - 1) === i).map((f) => <FigureView key={f.title} f={f} />);

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
        <ExamShare subjectId={subject.id} />
        {lesson.parts.map((p, i) => (
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
            {figsAt(i).length > 0 && <div className="mt-5 space-y-5">{figsAt(i)}</div>}
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
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="font-medium">Okudun mu? Şimdi soru çöz.</p>
            <p className="mt-1 text-[14.5px] text-ink-2">{n ? (n === 'sınırsız' ? 'Bu konuda her seferinde yeni sorular üretilir.' : `Bu konuda ${n} çözümlü soru var.`) : 'Bu konunun soruları hazırlanıyor.'}</p>
          </div>
          {n ? <ButtonLink to={testPath(topic.id)} className="w-full sm:w-auto">10 soru çöz <ArrowRight className="size-4" /></ButtonLink> : null}
        </div>
        {profile && (
          <div className="mt-4 border-t border-line pt-4">
            <p id="st-h" className="mb-2 text-sm text-muted">Bu konu benim için</p>
            <div role="radiogroup" aria-labelledby="st-h" className="grid grid-cols-2 gap-1 rounded-xl bg-sunken p-1 sm:grid-cols-4">
              {([['todo', 'Yapılacak'], ['doing', 'Çalışıyorum'], ['weak', 'Zorlandım'], ['done', 'Bitti']] as const).map(([v, t]) => {
                const on = (st ?? 'todo') === v;
                return (
                  <button key={v} type="button" role="radio" aria-checked={on} onClick={() => void setTopicStatus(topic.id, v)}
                    className={`h-9 rounded-lg text-[14px] ${on ? `bg-surface font-semibold shadow-[0_0_0_1px_var(--line-2)] ${v === 'done' ? 'text-good' : v === 'weak' ? 'text-warn' : 'text-ink'}` : 'text-ink-2 hover:text-ink'}`}>{t}</button>
                );
              })}
            </div>
          </div>
        )}
      </section>

      <nav aria-label="Aynı dersteki diğer konular" className="mt-6 grid grid-cols-2 gap-3">
        {prev ? (
          <Link to={lessonPath(prev.id)} className="group rounded-2xl border border-line bg-surface px-4 py-3 hover:border-ink-2">
            <span className="flex items-center gap-1 text-[13px] text-muted"><ArrowLeft className="size-3.5" /> Önceki konu</span>
            <span className="mt-0.5 block text-[14.5px] leading-snug text-ink">{prev.name}</span>
          </Link>
        ) : <span />}
        {next ? (
          <Link to={lessonPath(next.id)} className="group rounded-2xl border border-line bg-surface px-4 py-3 text-right hover:border-ink-2">
            <span className="flex items-center justify-end gap-1 text-[13px] text-muted">Sonraki konu <ArrowRight className="size-3.5" /></span>
            <span className="mt-0.5 block text-[14.5px] leading-snug text-ink">{next.name}</span>
          </Link>
        ) : <span />}
      </nav>
    </article>
  );
}
