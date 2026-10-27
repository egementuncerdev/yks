/* Bugün: önce sıradaki görev, altında günün geri kalanı. Ek bilgi en aza indirildi. */
import { useState } from 'react';
import { Link } from 'react-router';
import { BookOpen, Check, RefreshCcw } from 'lucide-react';
import { usePlan, useProfile, useTopicStates, useToday } from '@/app/data';
import { Button, ButtonLink, Empty, Progress, SubjectTag } from '@/components/ui';
import { TaskRow } from './TaskRow';
import { addDays, DAY_NAMES, fmtDay, fmtMinutes, weekday } from '@/lib/dates';
import { replan, toggleTask } from '@/lib/storage';
import { TOPIC_BY_ID } from '@/content/subjects';
import { subjectsFor } from '@/lib/planner';
import { hasQuestions } from '@/content/questions';
import { testPath } from './tests/Tests';
import { lessonPath } from '@/content/lessons';
import { useSync } from '@/lib/sync';
import { X } from 'lucide-react';

export default function Today() {
  const profile = useProfile();
  const plan = usePlan();
  const states = useTopicStates();
  const today = useToday();
  const [busy, setBusy] = useState(false);
  const sync = useSync();
  const [hideNudge, setHideNudge] = useState(() => { try { return localStorage.getItem('netlik.hesapOneri') === 'gizle'; } catch { return false; } });
  if (!profile || plan === undefined) return null;
  if (!plan || !plan.days.length) {
    return <Empty title="Program bulunamadı" text="Sınav tarihi geçmiş olabilir ya da program henüz oluşturulmadı." action={<ButtonLink to="/kurulum">Cevaplarımı güncelle</ButtonLink>} />;
  }

  const day = plan.days.find((d) => d.date === today);
  const tomorrow = plan.days.find((d) => d.date === addDays(today, 1));
  const tasks = day?.tasks ?? [];
  const done = tasks.filter((t) => t.done);
  const next = tasks.find((t) => !t.done);
  const rest = tasks.filter((t) => t !== next);
  const minutes = tasks.reduce((a, t) => a + t.minutes, 0);
  const missed = plan.days.filter((d) => d.date < today).flatMap((d) => d.tasks).filter((t) => !t.done && t.kind === 'topic').length;
  const stale = !day;
  const subjects = subjectsFor(profile);
  const all = subjects.reduce((a, s) => a + s.topics.length, 0);
  const allDone = subjects.reduce((a, s) => a + s.topics.filter((t) => states.get(t.id)?.status === 'done').length, 0);

  const redo = async () => { setBusy(true); await replan(); setBusy(false); };
  const nextTopic = next?.topicId ? TOPIC_BY_ID[next.topicId] : undefined;
  const nextNames = (next?.topicIds ?? []).map((id) => TOPIC_BY_ID[id]?.name).filter(Boolean);

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6">
        <p className="text-sm text-muted">{DAY_NAMES[weekday(today)]}, {fmtDay(today)}</p>
        <h1 className="display mt-1 text-[1.75rem] leading-tight">{tasks.length ? `Bugün ${fmtMinutes(minutes)} çalışma` : 'Bugün dinlenme günü'}</h1>
        {tasks.length > 0 && (
          <div className="mt-3 flex items-center gap-3">
            <Progress value={done.length / tasks.length} label="Bugünün ilerlemesi" tone="good" className="flex-1" />
            <span className="num text-sm text-muted">{done.length}/{tasks.length}</span>
          </div>
        )}
      </header>

      {(missed > 0 || stale) && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line px-4 py-3 text-[14.5px] text-ink-2">
          <span>{stale ? 'Program güncel değil.' : `Geçen günlerden ${missed} konu oturumu kaldı.`} Bugünden itibaren yeniden düzenleyebilirsin.</span>
          <Button size="sm" variant="secondary" onClick={() => void redo()} disabled={busy}><RefreshCcw className="size-4" /> Düzenle</Button>
        </div>
      )}

      {next ? (
        <section aria-labelledby="next-h" className="mb-8 rounded-2xl border border-line-2 bg-surface p-5 sm:p-6">
          <p id="next-h" className="text-sm font-medium text-primary-ink">Sıradaki · {next.minutes} dakika</p>
          <h2 className="display mt-2 text-[1.5rem] leading-snug">
            {nextTopic ? nextTopic.name : next.title}
            {next.part && <span className="num ml-2 text-base font-normal text-muted">{next.part[0]}/{next.part[1]}</span>}
          </h2>
          <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted">
            {next.subjectId && <SubjectTag id={next.subjectId} short={false} />}
            {nextTopic?.frequent && <span>Sık sorulan konu</span>}
          </div>
          {nextNames.length > 0 && <p className="mt-2 text-[14.5px] text-ink-2">{nextNames.join(' · ')}</p>}
          <div className="mt-5 grid grid-cols-2 gap-2 sm:flex sm:flex-wrap [&>*:first-child]:col-span-2 [&>*:only-child]:col-span-2">
            <Button onClick={() => void toggleTask(today, next.id, true)}><Check className="size-4" /> Bitirdim</Button>
            {nextTopic && <ButtonLink to={lessonPath(nextTopic.id)} variant="secondary"><BookOpen className="size-4" /> Konu anlatımı</ButtonLink>}
            {next.kind === 'exam' && <ButtonLink to={`/denemeler?ekle=${next.title.startsWith('AYT') ? 'ayt' : next.title.startsWith('YDT') ? 'ydt' : 'tyt'}`} variant="secondary">Sonucunu gir</ButtonLink>}
            {next.kind === 'analysis' && <ButtonLink to="/denemeler" variant="secondary">Gelişimini gör</ButtonLink>}
            {nextTopic && hasQuestions(nextTopic.id) && <ButtonLink to={testPath(nextTopic.id)} variant="secondary">10 soru çöz</ButtonLink>}
          </div>
        </section>
      ) : tasks.length > 0 ? (
        <p className="mb-8 rounded-2xl border border-line px-5 py-4 text-ink-2" role="status">Bugünün bütün görevleri bitti. Eline sağlık.</p>
      ) : (
        <p className="mb-8 rounded-2xl border border-line px-5 py-4 text-ink-2">Bugüne çalışma saati ayırmadın. Yarın {tomorrow?.tasks.length ?? 0} görev var.</p>
      )}

      {rest.length > 0 && (
        <section aria-labelledby="rest-h">
          <h2 id="rest-h" className="mb-2 text-sm font-medium text-muted">Günün geri kalanı</h2>
          <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {rest.map((t) => <TaskRow key={t.id} date={today} task={t} state={t.topicId ? states.get(t.topicId) : undefined} />)}
          </ul>
        </section>
      )}

      {sync.user === null && !hideNudge && (
        <aside aria-label="Hesap önerisi" className="mt-8 flex items-start gap-3 rounded-2xl border border-line px-5 py-4">
          <div className="min-w-0 flex-1">
            <p className="font-medium">Programın yalnız bu tarayıcıda</p>
            <p className="mt-1 text-[14.5px] text-ink-2">Ücretsiz hesap açarsan telefonda ve bilgisayarda aynı programı görürsün; tarayıcı verileri silinse de kaybolmaz. E-posta gerekmez.</p>
            <Link to="/hesap" className="mt-3 inline-block text-[14.5px] font-medium text-primary-ink underline decoration-line-2 underline-offset-4">Hesap aç</Link>
          </div>
          <button type="button" className="grid size-8 shrink-0 place-items-center rounded-lg text-muted hover:bg-sunken hover:text-ink" aria-label="Öneriyi gizle"
            onClick={() => { setHideNudge(true); try { localStorage.setItem('netlik.hesapOneri', 'gizle'); } catch { /* özel pencere */ } }}><X className="size-4" /></button>
        </aside>
      )}

      <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-5 text-sm text-muted">
        <span><span className="num text-ink">{allDone}</span> / {all} konu bitti{plan.topicsEnd > today ? ` · konuların bitiş hedefi ${fmtDay(plan.topicsEnd)}` : ''}</span>
        <span className="flex gap-4">
          <Link to="/hafta" className="underline decoration-line-2 underline-offset-4 hover:text-ink">Haftayı gör</Link>
          <Link to="/konular" className="underline decoration-line-2 underline-offset-4 hover:text-ink">Konular</Link>
        </span>
      </footer>
    </div>
  );
}
