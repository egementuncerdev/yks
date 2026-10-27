/* Kurulum sihirbazı: her ekranda tek soru. Cevaplar profile dönüşür, program oluşturulur. */
import { useMemo, useState, type ReactNode } from 'react';
import { useNavigate } from 'react-router';
import { ArrowLeft, ArrowRight, Minus, Plus } from 'lucide-react';
import { ActionBar, Button, Card, Progress } from '@/components/ui';
import { useProfile, useTopicStates, useToday } from '@/app/data';
import { DEFAULT_EXAM_DATE, EXAMS, EXAM_DATE_IS_OFFICIAL, SCORE_TYPES, TESTS, TESTS_BY_SCORE, type ScoreType } from '@/content/exam';
import { buildPlan, subjectsFor } from '@/lib/planner';
import { saveProfile } from '@/lib/storage';
import { DAY_SHORT, diffDays, fmtDay, fmtMinutes } from '@/lib/dates';
import type { Level, Profile, Status } from '@/types';

const STATUS: { id: Status; t: string; d: string }[] = [
  { id: '11', t: '11. sınıf', d: 'Sınava bir yıldan fazla var; temeli sağlam kurma zamanı.' },
  { id: '12', t: '12. sınıf', d: 'Okulla birlikte hazırlanıyorum.' },
  { id: 'mezun', t: 'Mezun', d: 'Bütün günümü hazırlığa ayırabiliyorum.' }
];
const PRESETS: Record<Status, number[]> = {
  '11': [2, 2, 2, 2, 2, 4, 3],
  '12': [3, 3, 3, 3, 3, 6, 5],
  mezun: [7, 7, 7, 7, 7, 7, 4]
};
const DENEME: Record<Status, { tyt: number; ayt: number }> = { '11': { tyt: 0, ayt: 0 }, '12': { tyt: 1, ayt: 0 }, mezun: { tyt: 1, ayt: 1 } };
const LEVELS: { v: Level; t: string }[] = [{ v: 0, t: 'Başlamadım' }, { v: 1, t: 'Temelim var' }, { v: 2, t: 'İyiyim' }];

function Choice({ selected, onClick, title, text }: { selected: boolean; onClick: () => void; title: string; text?: string }) {
  return (
    <button type="button" role="radio" aria-checked={selected} onClick={onClick}
      className={`w-full rounded-2xl border p-4 text-left transition-colors ${selected ? 'border-primary bg-primary-soft' : 'border-line bg-surface hover:border-line-2'}`}>
      <span className="display block text-lg">{title}</span>
      {text && <span className="mt-0.5 block text-[14.5px] text-ink-2">{text}</span>}
    </button>
  );
}

function Segment<T extends string | number>({ label, value, options, onChange }: { label: string; value: T; options: { v: T; t: string }[]; onChange: (v: T) => void }) {
  return (
    <div role="radiogroup" aria-label={label} className="inline-flex rounded-xl border border-line-2 bg-sunken p-1">
      {options.map((o) => (
        <button key={String(o.v)} type="button" role="radio" aria-checked={value === o.v} onClick={() => onChange(o.v)}
          className={`h-9 rounded-lg px-3 text-sm font-medium ${value === o.v ? 'bg-surface text-ink shadow-[0_1px_0_var(--line-2)]' : 'text-muted hover:text-ink'}`}>
          {o.t}
        </button>
      ))}
    </div>
  );
}

function Stepper({ label, value, onChange, step = 0.5, max = 14 }: { label: string; value: number; onChange: (v: number) => void; step?: number; max?: number }) {
  return (
    <div className="flex items-center gap-1" role="group" aria-label={label}>
      <button type="button" onClick={() => onChange(Math.max(0, value - step))} className="grid size-9 place-items-center rounded-lg border border-line-2 hover:border-ink-2" aria-label={`${label}: azalt`}><Minus className="size-4" /></button>
      <span className="num w-14 text-center text-[15px]" aria-live="polite">{value} sa</span>
      <button type="button" onClick={() => onChange(Math.min(max, value + step))} className="grid size-9 place-items-center rounded-lg border border-line-2 hover:border-ink-2" aria-label={`${label}: artır`}><Plus className="size-4" /></button>
    </div>
  );
}

export default function Wizard() {
  const existing = useProfile();
  if (existing === undefined) return <p className="py-20 text-center text-muted" role="status">Yükleniyor…</p>;
  return <WizardInner existing={existing} />;
}

function WizardInner({ existing }: { existing: Profile | null }) {
  const navigate = useNavigate();
  const today = useToday();
  const states = useTopicStates();
  const [step, setStep] = useState(0);
  const [saving, setSaving] = useState(false);
  const [p, setP] = useState<Profile>(() => existing ?? {
    id: 'me', scoreType: 'say', status: '12', examDate: DEFAULT_EXAM_DATE, examDateCustom: false,
    hours: [...PRESETS['12']], sessionMin: 40, levels: {}, nets: {}, denemePerWeek: { ...DENEME['12'] }, routines: true,
    createdAt: new Date().toISOString(), updatedAt: ''
  });
  const set = (patch: Partial<Profile>) => setP((x) => ({ ...x, ...patch }));
  const subjects = subjectsFor(p);
  const tests = TESTS.filter((t) => (TESTS_BY_SCORE[p.scoreType] as readonly string[]).includes(t.id));
  const second = SCORE_TYPES.find((s) => s.id === p.scoreType)!.exams.find((e) => e !== 'tyt');
  const weekly = p.hours.reduce((a, b) => a + b, 0);
  const examOk = diffDays(p.examDate, today) > 0;

  const steps: { q: string; help?: string; body: ReactNode; ok?: boolean; skip?: boolean }[] = [
    {
      q: 'Hangi puan türüne hazırlanıyorsun?',
      help: 'Program yalnız bu puan türünün derslerini içerir.',
      body: (
        <div role="radiogroup" aria-label="Puan türü" className="grid gap-2 sm:grid-cols-2">
          {SCORE_TYPES.map((s) => <Choice key={s.id} selected={p.scoreType === s.id} onClick={() => set({ scoreType: s.id as ScoreType })} title={s.name} text={s.desc} />)}
        </div>
      )
    },
    {
      q: 'Şu an hangi durumdasın?',
      help: 'Günlük saat ve deneme önerileri buna göre gelir; sonraki adımda değiştirebilirsin.',
      body: (
        <div role="radiogroup" aria-label="Durum" className="grid gap-2">
          {STATUS.map((s) => (
            <Choice key={s.id} selected={p.status === s.id} title={s.t} text={s.d}
              onClick={() => set({ status: s.id, ...(existing ? {} : { hours: [...PRESETS[s.id]], denemePerWeek: { ...DENEME[s.id] } }) })} />
          ))}
        </div>
      )
    },
    {
      q: 'Sınav tarihi',
      help: EXAM_DATE_IS_OFFICIAL ? 'ÖSYM’nin açıkladığı tarih.' : 'ÖSYM 2027 takvimini henüz açıklamadı. Şimdilik tahmini tarihi kullanabilir ya da kendin girebilirsin.',
      ok: examOk,
      body: (
        <div className="grid gap-2" role="radiogroup" aria-label="Sınav tarihi">
          <Choice selected={!p.examDateCustom} onClick={() => set({ examDateCustom: false, examDate: DEFAULT_EXAM_DATE })}
            title={`${fmtDay(DEFAULT_EXAM_DATE, { day: 'numeric', month: 'long', year: 'numeric' })}${EXAM_DATE_IS_OFFICIAL ? '' : ' (tahmini)'}`} text="TYT günü. Takvim açıklanınca güncellenecek." />
          <Choice selected={p.examDateCustom} onClick={() => set({ examDateCustom: true })} title="Tarihi kendim gireceğim" />
          {p.examDateCustom && (
            <label className="mt-2 block">
              <span className="mb-1.5 block text-sm font-medium">TYT tarihi</span>
              <input type="date" value={p.examDate} min={today} onChange={(e) => e.target.value && set({ examDate: e.target.value })}
                className="h-11 rounded-xl border border-line-2 bg-surface px-3 text-[15px]" />
              {!examOk && <span className="mt-1.5 block text-sm text-bad">Tarih bugünden sonra olmalı.</span>}
            </label>
          )}
          {examOk && <p className="mt-2 text-sm text-muted">Sınava <span className="num font-semibold text-ink">{diffDays(p.examDate, today)}</span> gün var.</p>}
        </div>
      )
    },
    {
      q: 'Her gün kaç saat çalışabilirsin?',
      help: 'Okul, dershane ve yol dışında kalan, gerçekten masaya oturabileceğin süre. Bir gün dinlenmek istersen 0 yap.',
      ok: weekly > 0,
      body: (
        <div>
          <div className="mb-4 flex flex-wrap gap-2">
            {STATUS.map((s) => <Button key={s.id} size="sm" variant="secondary" onClick={() => set({ hours: [...PRESETS[s.id]] })}>{s.t} için öneri</Button>)}
          </div>
          <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {DAY_SHORT.map((d, i) => (
              <li key={d} className="flex items-center justify-between px-4 py-2.5">
                <span className="font-medium">{['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'][i]}</span>
                <Stepper label={`${d} çalışma saati`} value={p.hours[i]!} onChange={(v) => set({ hours: p.hours.map((h, j) => (j === i ? v : h)) })} />
              </li>
            ))}
          </ul>
          <p className="mt-3 text-sm text-muted">Haftada toplam <span className="num font-semibold text-ink">{weekly}</span> saat.</p>
        </div>
      )
    },
    {
      q: 'Bir oturum kaç dakika olsun?',
      help: 'Her oturum bir konu parçası ya da soru çözümü. Aralarında kısa mola verirsin.',
      body: (
        <div className="grid gap-4">
          <div role="radiogroup" aria-label="Oturum süresi" className="grid gap-2 sm:grid-cols-3">
            {([25, 40, 50] as const).map((m) => <Choice key={m} selected={p.sessionMin === m} onClick={() => set({ sessionMin: m })} title={`${m} dakika`} text={m === 25 ? 'Pomodoro; odaklanması zor günler için' : m === 40 ? 'Ders saati kadar; çoğu kişi için iyi' : 'Uzun odak; mezunlar için'} />)}
          </div>
          <label className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-4">
            <input type="checkbox" className="mt-1 size-4 accent-[var(--primary)]" checked={p.routines} onChange={(e) => set({ routines: e.target.checked })} />
            <span><span className="font-medium">Günlük rutinler</span><span className="mt-0.5 block text-[14.5px] text-ink-2">2 saatten uzun günlerde 20’şer dakika paragraf ve problem sorusu.</span></span>
          </label>
        </div>
      )
    },
    {
      q: 'Derslerde ne durumdasın?',
      help: 'İyi olduğun derslere daha az, başlamadığın derslere daha çok zaman ayrılır.',
      body: (
        <ul className="divide-y divide-line rounded-2xl border border-line bg-surface">
          {subjects.map((s) => (
            <li key={s.id} className="flex flex-wrap items-center justify-between gap-3 px-4 py-3">
              <span className="flex items-center gap-2 font-medium"><span className="size-2.5 rounded-full" style={{ background: s.color }} aria-hidden="true" />{s.name}</span>
              <Segment label={s.name} value={p.levels[s.id] ?? 1} options={LEVELS} onChange={(v) => set({ levels: { ...p.levels, [s.id]: v } })} />
            </li>
          ))}
        </ul>
      )
    },
    {
      q: 'Son deneme netlerin neydi?',
      help: 'İsteğe bağlı. Girersen neti düşük derslere daha çok zaman ayrılır. Bilmiyorsan boş bırak.',
      skip: true,
      body: (
        <ul className="grid gap-2 sm:grid-cols-2">
          {tests.map((t) => (
            <li key={t.id}>
              <label className="flex items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3">
                <span><span className="block font-medium">{EXAMS[t.exam].name} {t.name}</span><span className="text-sm text-muted">{t.questions} soru</span></span>
                <input type="number" inputMode="decimal" min={-t.questions / 4} max={t.questions} step={0.25} placeholder="—"
                  value={p.nets[t.id] ?? ''} aria-label={`${EXAMS[t.exam].name} ${t.name} neti`}
                  onChange={(e) => { const v = e.target.value; const n = { ...p.nets }; if (v === '') delete n[t.id]; else n[t.id] = Math.min(t.questions, Number(v)); set({ nets: n }); }}
                  className="num h-11 w-24 rounded-xl border border-line-2 bg-paper px-3 text-right text-[15px]" />
              </label>
            </li>
          ))}
        </ul>
      )
    },
    {
      q: 'Haftada kaç deneme çözmek istersin?',
      help: 'Denemeler haftanın en uzun günlerine yerleşir; ardından 40 dakikalık analiz gelir. Son haftalarda en az birer deneme otomatik eklenir.',
      body: (
        <div className="grid gap-3">
          {([['tyt', 'TYT denemesi'], ...(second ? [['ayt', `${EXAMS[second].name} denemesi`]] : [])] as [keyof Profile['denemePerWeek'], string][]).map(([k, label]) => (
            <div key={k} className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line bg-surface px-4 py-3">
              <span className="font-medium">{label}</span>
              <Segment label={label} value={p.denemePerWeek[k]} options={[{ v: 0, t: 'Yok' }, { v: 1, t: 'Haftada 1' }, { v: 2, t: 'Haftada 2' }]} onChange={(v) => set({ denemePerWeek: { ...p.denemePerWeek, [k]: v } })} />
            </div>
          ))}
        </div>
      )
    }
  ];

  const preview = useMemo(() => (step === steps.length ? buildPlan(p, states, today) : null), [step, p, states, today, steps.length]);
  const total = steps.length;
  const cur = steps[step];

  const finish = async () => {
    setSaving(true);
    await saveProfile({ ...p, createdAt: existing?.createdAt ?? p.createdAt }, undefined, today);
    navigate('/');
  };

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8 flex items-center gap-4">
        <Progress value={(step + 1) / (total + 1)} label="Kurulum ilerlemesi" className="flex-1" />
        <span className="num text-sm text-muted">{Math.min(step + 1, total)} / {total}</span>
      </div>

      {cur ? (
        <section aria-labelledby="q">
          <h1 id="q" className="display text-[1.9rem] leading-tight sm:text-[2.3rem]">{cur.q}</h1>
          {cur.help && <p className="mt-2 text-ink-2">{cur.help}</p>}
          <div className="mt-6">{cur.body}</div>
        </section>
      ) : preview && (
        <section aria-labelledby="q">
          <h1 id="q" className="display text-[1.9rem] leading-tight sm:text-[2.3rem]">Programın hazır</h1>
          <p className="mt-2 text-ink-2">{SCORE_TYPES.find((s) => s.id === p.scoreType)!.name} · {subjects.length} ders · sınava {diffDays(p.examDate, today)} gün</p>
          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4">
            {[
              ['Haftalık', `${weekly} sa`],
              ['Konu oturumu', String(preview.totals.topicSessions)],
              ['Deneme', String(preview.days.flatMap((d) => d.tasks).filter((t) => t.kind === 'exam').length)],
              ['Konular biter', fmtDay(preview.topicsEnd, { day: 'numeric', month: 'short' })]
            ].map(([k, v]) => <div key={k} className="bg-surface px-4 py-3"><dt className="eyebrow">{k}</dt><dd className="display mt-1 text-2xl">{v}</dd></div>)}
          </dl>
          {preview.dropped.length > 0 ? (
            <Card className="mt-4 border-bad/40 bg-bad-soft">
              <p className="font-medium text-bad">Süre çok kısa: {preview.dropped.length} konu programa sığmadı.</p>
              <p className="mt-1 text-ink-2">Sık sorulan konular öne alındı. Günlük süreyi artırmayı ya da bildiğin konuları “Konular” sayfasında işaretlemeyi düşün.</p>
            </Card>
          ) : preview.fit < 1 ? (
            <Card className="mt-4 border-warn/40 bg-warn-soft">
              <p className="font-medium text-warn">Zaman biraz sıkışık.</p>
              <p className="mt-1 text-ink-2">Konular olması gerekenin yaklaşık %{Math.round(preview.fit * 100)}’i kadar sürede geçiliyor; sık sorulan konular daha az kısaltıldı. Günde yarım saat eklemek ya da iyi bildiğin dersleri “İyiyim” yapmak programı rahatlatır.</p>
            </Card>
          ) : (
            <Card className="mt-4 border-good/40 bg-good-soft">
              <p className="font-medium text-good">Süren yeterli.</p>
              <p className="mt-1 text-ink-2">Konular {fmtDay(preview.topicsEnd)} tarihine kadar bitiyor; arta kalan oturumlar soru çözümüne ayrıldı. Son haftalar deneme ve tekrar.</p>
            </Card>
          )}
          <p className="mt-4 text-sm text-muted">İlk gün: {fmtMinutes(preview.days[0]?.tasks.reduce((a, t) => a + t.minutes, 0) ?? 0)}, {preview.days[0]?.tasks.length ?? 0} görev.</p>
        </section>
      )}

      <ActionBar>
        {step > 0 ? <Button variant="ghost" className="px-3" onClick={() => setStep(step - 1)}><ArrowLeft className="size-4" /> Geri</Button> : <span />}
        {cur ? (
          <div className="flex gap-2">
            {cur.skip && <Button variant="ghost" onClick={() => { set({ nets: {} }); setStep(step + 1); }}>Atla</Button>}
            <Button className="min-w-[8.5rem]" onClick={() => setStep(step + 1)} disabled={cur.ok === false}>{step === total - 1 ? 'Programı göster' : 'Devam'} <ArrowRight className="size-4" /></Button>
          </div>
        ) : (
          <Button size="lg" onClick={() => void finish()} disabled={saving}>{existing ? 'Programı güncelle' : 'Programıma başla'} <ArrowRight className="size-4" /></Button>
        )}
      </ActionBar>
    </div>
  );
}
