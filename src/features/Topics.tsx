/* Konular: bir seferde tek ders. Durum değişince program güncellenmeyi bekler. */
import { useState } from 'react';
import { RefreshCcw } from 'lucide-react';
import { usePlan, useProfile, useTopicStates } from '@/app/data';
import { Button, Progress } from '@/components/ui';
import { subjectsFor } from '@/lib/planner';
import { replan, setTopicStatus } from '@/lib/storage';
import type { TopicStatus } from '@/types';
import { Link } from 'react-router';
import { hasQuestions } from '@/content/questions';
import { testPath } from './tests/Tests';

const STATUS: { v: TopicStatus; t: string }[] = [
  { v: 'todo', t: 'Yapılacak' }, { v: 'doing', t: 'Çalışıyorum' }, { v: 'weak', t: 'Zorlandım' }, { v: 'done', t: 'Bitti' }
];

export default function Topics() {
  const profile = useProfile();
  const plan = usePlan();
  const states = useTopicStates();
  const subjects = profile ? subjectsFor(profile) : [];
  const [sid, setSid] = useState<string>('');
  const [onlyFrequent, setOnlyFrequent] = useState(false);
  const [busy, setBusy] = useState(false);
  if (!profile || !plan) return null;

  const s = subjects.find((x) => x.id === sid) ?? subjects[0]!;
  const done = s.topics.filter((t) => states.get(t.id)?.status === 'done').length;
  const list = onlyFrequent ? s.topics.filter((t) => t.frequent) : s.topics;
  const outdated = [...states.values()].some((x) => x.updatedAt > plan.createdAt && (x.status === 'done' || x.status === 'todo' || x.status === 'weak'));
  let group = '';

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6">
        <h1 className="display text-[1.75rem] leading-tight">Konular</h1>
        <p className="mt-1 text-ink-2">Bildiğin konuyu “Bitti” yap, zorlandığını “Zorlandım”. Program buna göre düzenlenir.</p>
      </header>

      {outdated && (
        <div className="mb-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-primary/40 bg-primary-soft px-4 py-3 text-[14.5px]">
          <span>Değişikliklerin programa yansıması için güncelle.</span>
          <Button size="sm" onClick={async () => { setBusy(true); await replan(); setBusy(false); }} disabled={busy}><RefreshCcw className="size-4" /> Programı güncelle</Button>
        </div>
      )}

      <div className="mb-4 flex flex-wrap items-center gap-3">
        <label className="flex-1">
          <span className="sr-only">Ders</span>
          <select value={s.id} onChange={(e) => setSid(e.target.value)} className="h-11 w-full rounded-xl border border-line-2 bg-surface px-3 text-[15px]">
            {subjects.map((x) => {
              const d = x.topics.filter((t) => states.get(t.id)?.status === 'done').length;
              return <option key={x.id} value={x.id}>{x.name} · {d}/{x.topics.length}</option>;
            })}
          </select>
        </label>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="size-4 accent-[var(--primary)]" checked={onlyFrequent} onChange={(e) => setOnlyFrequent(e.target.checked)} />
          Yalnız sık sorulanlar
        </label>
      </div>

      <div className="mb-3 flex items-center gap-3">
        <Progress value={done / s.topics.length} label={`${s.name} ilerlemesi`} className="flex-1" />
        <span className="num text-sm text-muted">{done}/{s.topics.length}</span>
      </div>

      <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
        {list.map((t) => {
          const st = states.get(t.id);
          const header = t.group && t.group !== group ? t.group : null;
          if (t.group) group = t.group;
          return (
            <li key={t.id}>
              {header && <p className="bg-sunken px-4 py-1.5 text-[12.5px] font-medium text-muted">{header}</p>}
              <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
                <span className="flex min-w-0 items-center gap-2">
                  <span className={st?.status === 'done' ? 'text-muted line-through' : ''}>{t.name}</span>
                  {t.frequent && <span className="rounded border border-line-2 px-1.5 text-[11px] font-medium text-ink-2" title="Son yıllarda düzenli soru gelen konu">Sık</span>}
                </span>
                <span className="flex items-center gap-2">
                {hasQuestions(t.id) && <Link to={testPath(t.id)} className="text-sm text-primary-ink underline decoration-line-2 underline-offset-4">Test<span className="sr-only">: {t.name}</span></Link>}
                <label>
                  <span className="sr-only">{t.name} durumu</span>
                  <select value={st?.status ?? 'todo'} onChange={(e) => void setTopicStatus(t.id, e.target.value as TopicStatus)}
                    className={`h-9 rounded-lg border px-2 text-sm ${st?.status === 'done' ? 'border-good/50 text-good' : st?.status === 'weak' ? 'border-warn/50 text-warn' : 'border-line-2'} bg-surface`}>
                    {STATUS.map((o) => <option key={o.v} value={o.v}>{o.t}</option>)}
                  </select>
                </label>
                </span>
              </div>
            </li>
          );
        })}
      </ul>
      <p className="mt-4 text-sm text-muted">“Sık” işareti yayınevlerinin 2023–2025 çıkmış soru analizlerine dayanır; ÖSYM konu bazlı dağılım açıklamaz.</p>
    </div>
  );
}
