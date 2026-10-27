/* /denemeler — mini deneme başlat, dışarıda çözülen denemenin sonucunu gir, gelişimi izle.
   Sıra: önce yapılacak iş (sonuç girmek ya da mini deneme), sonra gelişim, en altta kayıtlar. */
import { useMemo, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router';
import { useLiveQuery } from 'dexie-react-hooks';
import { ArrowDown, ArrowRight, ArrowUp, Plus, Trash2 } from 'lucide-react';
import { useProfile, useToday } from '@/app/data';
import { Button, ButtonLink } from '@/components/ui';
import { EXAMS, SCORE_TYPES, net, type ExamId, type ScoreType, type TestId } from '@/content/exam';
import { MINI_KINDS, miniCount, miniMinutes, type MiniKind } from '@/content/questions/mini';
import { biggestGap, byExam, checkResult, denemeNets, testById, testSummary, testsFor, totalNet } from '@/lib/deneme';
import { addDeneme, applyDenemeToProfile, db, deleteDeneme } from '@/lib/storage';
import { fmtDay } from '@/lib/dates';
import { useTitle } from '@/lib/title';
import type { Deneme } from '@/types';
import { TestTabs } from '../tests/TestTabs';
import { NetChart } from './NetChart';

const fmt = (n: number | undefined) => (n === undefined ? '–' : String(n).replace('.', ','));
export const miniPath = (k: MiniKind) => `/denemeler/mini/${k}`;

export default function Denemeler() {
  useTitle('Denemeler');
  const profile = useProfile();
  const today = useToday();
  const [params, setParams] = useSearchParams();
  const list = useLiveQuery(() => db.denemeler.toArray(), [], [] as Deneme[]);
  const minis = useLiveQuery(() => db.attempts.where('source').startsWith('deneme:').reverse().sortBy('at'), [], []);

  const exams: ExamId[] = profile ? SCORE_TYPES.find((s) => s.id === profile.scoreType)!.exams : ['tyt', 'ayt', 'ydt'];
  const kinds = MINI_KINDS.filter((k) => (profile ? exams.includes(k.exam) && (!k.score || k.score === profile.scoreType) : true));
  const withData = exams.filter((e) => list.some((d) => d.exam === e));
  const view = (withData.includes(params.get('sinav') as ExamId) ? params.get('sinav') : withData[0]) as ExamId | undefined;
  const adding = params.get('ekle');

  if (profile === undefined) return null;

  return (
    <div className="mx-auto max-w-2xl">
      <TestTabs />
      <header className="mb-6">
        <h1 className="display text-[1.75rem] leading-tight">Denemeler</h1>
        <p className="mt-1 text-ink-2">Dışarıda çözdüğün denemelerin sonucunu gir, netlerinin nasıl değiştiğini gör. Kısa bir prova için Netlik mini denemesini çöz.</p>
      </header>

      {adding ? (
        <DenemeForm exams={exams} initial={(exams.includes(adding as ExamId) ? adding : exams[0]) as ExamId} today={today} scoreType={profile?.scoreType}
          onClose={(saved) => setParams(saved ? { sinav: saved } : {}, { replace: true })} />
      ) : (
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-line-2 bg-surface p-5">
          <span>
            <span className="block font-medium">Deneme sonucu ekle</span>
            <span className="mt-0.5 block text-[14.5px] text-ink-2">Her test için doğru ve yanlış sayısını gir; net kendiliğinden hesaplanır.</span>
          </span>
          <Button onClick={() => setParams({ ekle: exams[0]! }, { replace: true })}><Plus className="size-4" /> Sonuç ekle</Button>
        </div>
      )}

      {view && <Progress list={list} exam={view} exams={withData} setExam={(e) => setParams({ sinav: e }, { replace: true })} canApply={!!profile} profileNets={profile?.nets ?? {}} />}

      <section aria-labelledby="mini-h" className="mt-10">
        <h2 id="mini-h" className="display text-lg">Netlik mini denemesi</h2>
        <p className="mt-1 text-[14.5px] text-ink-2">Gerçek sınavın dörtte biri kadar soru ve süre; ders dağılımı aynı. Cevaplar ve çözümler sonda görünür.</p>
        <ul className="mt-4 divide-y divide-line rounded-2xl border border-line bg-surface">
          {kinds.map((k) => (
            <li key={k.id}>
              <Link to={miniPath(k.id)} className="flex items-center justify-between gap-3 px-4 py-3 hover:bg-sunken/60">
                <span><span className="block">{k.name} mini denemesi</span><span className="mt-0.5 block text-[13px] text-muted">{miniCount(k.id)} soru · {miniMinutes(k.id)} dakika</span></span>
                <span className="flex shrink-0 items-center gap-1 text-sm text-primary-ink">Başla <ArrowRight className="size-3.5" /></span>
              </Link>
            </li>
          ))}
        </ul>
        {minis.length > 0 && (
          <p className="mt-3 text-sm text-muted">Son mini denemelerin: {minis.slice(0, 4).map((a) => `${MINI_KINDS.find((k) => `deneme:${k.id}` === a.source)?.name ?? ''} ${fmt(net(a.correct, a.wrong))} net / ${a.total} soru`).join(' · ')}</p>
        )}
      </section>

      {list.length > 0 && <Records list={list} />}
      {!list.length && !adding && <p className="mt-10 text-sm text-muted">Henüz deneme sonucu girmedin. İlk sonucu girdiğinde gelişim grafiğin burada görünür.</p>}
    </div>
  );
}

function DenemeForm({ exams, initial, today, scoreType, onClose }: { exams: ExamId[]; initial: ExamId; today: string; scoreType?: ScoreType; onClose: (saved?: ExamId) => void }) {
  const [exam, setExam] = useState<ExamId>(initial);
  const [date, setDate] = useState(today);
  const [name, setName] = useState('');
  const [vals, setVals] = useState<Record<string, { c: string; w: string }>>({});
  const [err, setErr] = useState('');
  const tests = testsFor(exam, scoreType);
  const num = (s: string | undefined) => (s === undefined || s.trim() === '' ? 0 : Number(s));
  const filled = tests.filter((t) => vals[t] && (vals[t]!.c.trim() !== '' || vals[t]!.w.trim() !== ''));
  const results = Object.fromEntries(filled.map((t) => [t, { c: num(vals[t]!.c), w: num(vals[t]!.w) }])) as Deneme['results'];
  const set = (t: TestId, k: 'c' | 'w', v: string) => { setVals((x) => ({ ...x, [t]: { c: x[t]?.c ?? '', w: x[t]?.w ?? '', [k]: v } })); setErr(''); };

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!filled.length) return setErr('En az bir testin sonucunu gir.');
    for (const t of filled) { const m = checkResult(t, results[t]!); if (m) return setErr(m); }
    if (date > today) return setErr('Tarih bugünden ileri olamaz.');
    await addDeneme({ date, exam, name: name.trim(), results });
    onClose(exam);
  };

  return (
    <form onSubmit={(e) => void submit(e)} className="mb-8 rounded-2xl border border-line-2 bg-surface p-5" aria-labelledby="form-h">
      <h2 id="form-h" className="font-medium">Deneme sonucu ekle</h2>
      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <label className="block text-sm"><span className="mb-1 block text-muted">Sınav</span>
          <select value={exam} onChange={(e) => { setExam(e.target.value as ExamId); setVals({}); }} className="h-11 w-full rounded-xl border border-line-2 bg-surface px-3 text-[15px]">
            {exams.map((x) => <option key={x} value={x}>{EXAMS[x].name}</option>)}
          </select>
        </label>
        <label className="block text-sm"><span className="mb-1 block text-muted">Tarih</span>
          <input type="date" value={date} max={today} onChange={(e) => setDate(e.target.value || today)} className="h-11 w-full rounded-xl border border-line-2 bg-surface px-3 text-[15px]" />
        </label>
        <label className="block text-sm"><span className="mb-1 block text-muted">Adı (isteğe bağlı)</span>
          <input value={name} onChange={(e) => setName(e.target.value)} maxLength={60} placeholder="ör. yayınevi, kurum" className="h-11 w-full rounded-xl border border-line-2 bg-surface px-3 text-[15px] placeholder:text-muted" />
        </label>
      </div>

      <table className="mt-5 w-full text-left text-[14.5px]">
        <thead><tr className="text-[13px] text-muted"><th scope="col" className="pb-2 font-medium">Test</th><th scope="col" className="w-20 pb-2 font-medium">Doğru</th><th scope="col" className="w-20 pb-2 font-medium">Yanlış</th><th scope="col" className="w-16 pb-2 text-right font-medium">Net</th></tr></thead>
        <tbody>
          {tests.map((t) => {
            const T = testById(t), v = vals[t];
            const has = !!v && (v.c.trim() !== '' || v.w.trim() !== '');
            return (
              <tr key={t} className="border-t border-line">
                <th scope="row" className="py-2 pr-2 font-normal"><span className="block leading-snug">{T.name}</span><span className="text-[12.5px] text-muted">{T.questions} soru</span></th>
                {(['c', 'w'] as const).map((k) => (
                  <td key={k} className="py-2 pr-2">
                    <input inputMode="numeric" pattern="[0-9]*" aria-label={`${T.name} ${k === 'c' ? 'doğru' : 'yanlış'} sayısı`} value={v?.[k] ?? ''} onChange={(e) => set(t, k, e.target.value.replace(/\D/g, '').slice(0, 3))}
                      className="num h-10 w-full rounded-lg border border-line-2 bg-surface px-2 text-center text-[15px]" />
                  </td>
                ))}
                <td className="num py-2 text-right font-medium">{has ? fmt(net(num(v!.c), num(v!.w))) : '–'}</td>
              </tr>
            );
          })}
        </tbody>
        <tfoot><tr className="border-t border-line-2"><th scope="row" className="pt-2 text-left">Toplam</th><td /><td /><td className="num pt-2 text-right font-semibold">{filled.length ? fmt(totalNet({ results })) : '–'}</td></tr></tfoot>
      </table>
      <p className="mt-2 text-[13px] text-muted">Boş bıraktığın testler kaydedilmez. Net = doğru − yanlış ÷ 4.</p>
      {err && <p className="mt-3 rounded-lg bg-bad-soft px-3 py-2 text-[14px] text-bad" role="alert">{err}</p>}
      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="submit">Kaydet</Button>
        <Button variant="ghost" onClick={() => onClose()}>Vazgeç</Button>
      </div>
    </form>
  );
}

function Progress({ list, exam, exams, setExam, canApply, profileNets }: { list: Deneme[]; exam: ExamId; exams: ExamId[]; setExam: (e: ExamId) => void; canApply: boolean; profileNets: Partial<Record<TestId, number>> }) {
  const sorted = useMemo(() => byExam(list, exam), [list, exam]);
  const last = sorted.at(-1)!;
  const tests = [...new Set(sorted.flatMap((d) => Object.keys(d.results)))] as TestId[];
  const gap = biggestGap(last);
  const lastNets = denemeNets(last);
  const applied = Object.entries(lastNets).every(([k, v]) => profileNets[k as TestId] === v);
  const [busy, setBusy] = useState(false);

  return (
    <section aria-labelledby="prog-h">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h2 id="prog-h" className="display text-lg">Gelişim</h2>
        {exams.length > 1 && (
          <div className="flex gap-1 rounded-lg bg-sunken p-1" role="group" aria-label="Sınav">
            {exams.map((e) => <button key={e} type="button" aria-pressed={e === exam} onClick={() => setExam(e)} className={`rounded-md px-3 py-1 text-sm ${e === exam ? 'bg-surface font-semibold shadow-[0_0_0_1px_var(--line-2)]' : 'text-ink-2'}`}>{EXAMS[e].name}</button>)}
          </div>
        )}
      </div>
      <div className="mt-3 rounded-2xl border border-line bg-surface p-4">
        <p className="text-[13px] font-medium text-muted">{EXAMS[exam].name} toplam net · {sorted.length} deneme</p>
        <div className="mt-2"><NetChart points={sorted.map((d) => ({ date: d.date, label: d.name, total: totalNet(d) }))} max={EXAMS[exam].questions} title={`${EXAMS[exam].name} toplam net`} /></div>
      </div>

      <table className="mt-4 w-full text-left text-[14.5px]">
        <caption className="sr-only">Testlere göre son net, değişim ve son üç deneme ortalaması</caption>
        <thead><tr className="text-[13px] text-muted"><th scope="col" className="pb-2 font-medium">Test</th><th scope="col" className="pb-2 text-right font-medium">Son net</th><th scope="col" className="pb-2 text-right font-medium">Değişim</th><th scope="col" className="pb-2 text-right font-medium">Son 3 ort.</th></tr></thead>
        <tbody>
          {tests.map((t) => {
            const s = testSummary(sorted, t);
            return (
              <tr key={t} className="border-t border-line">
                <th scope="row" className="py-2 pr-2 font-normal">{testById(t).name}<span className="text-[12.5px] text-muted"> / {testById(t).questions}</span></th>
                <td className="num py-2 text-right font-medium">{fmt(s.last)}</td>
                <td className={`num py-2 text-right ${s.change === undefined || s.change === 0 ? 'text-muted' : s.change > 0 ? 'text-good' : 'text-bad'}`}>
                  {s.change === undefined ? '–' : <span className="inline-flex items-center gap-0.5">{s.change > 0 ? <ArrowUp className="size-3.5" aria-label="arttı" /> : s.change < 0 ? <ArrowDown className="size-3.5" aria-label="azaldı" /> : null}{fmt(Math.abs(s.change))}</span>}
                </td>
                <td className="num py-2 text-right text-ink-2">{fmt(s.avg3)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      {gap && gap.room > 0 && (
        <p className="mt-4 rounded-xl border border-line px-4 py-3 text-[14.5px] text-ink-2">
          Son denemede oranca en düşük netin <span className="font-medium text-ink">{testById(gap.test).name}</span> testinde: {fmt(gap.net)} / {gap.questions}. En çok net kazanabileceğin yer burası; bu testin konularına biraz daha zaman ayır.
        </p>
      )}
      {canApply && (
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-[14px] text-ink-2">
          <span>{applied ? 'Programın son denemenin netlerine göre hazırlandı.' : 'Programın derslerin ağırlığını netlerine göre ayarlar.'}</span>
          {!applied && <Button size="sm" variant="secondary" disabled={busy} onClick={async () => { setBusy(true); await applyDenemeToProfile(last); setBusy(false); }}>Son netleri programa yansıt</Button>}
        </div>
      )}
    </section>
  );
}

function Records({ list }: { list: Deneme[] }) {
  const sorted = [...list].sort((a, b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt));
  return (
    <section aria-labelledby="rec-h" className="mt-10">
      <h2 id="rec-h" className="display text-lg">Kayıtlı denemeler</h2>
      <ul className="mt-3 divide-y divide-line rounded-2xl border border-line bg-surface">
        {sorted.map((d) => (
          <li key={d.id} className="flex items-start gap-3 px-4 py-3">
            <div className="min-w-0 flex-1">
              <p className="flex flex-wrap items-baseline gap-x-2"><span className="font-medium">{EXAMS[d.exam].name}</span><span className="text-[13.5px] text-muted">{fmtDay(d.date, { day: 'numeric', month: 'long', year: 'numeric' })}{d.name ? ` · ${d.name}` : ''}</span></p>
              <p className="mt-0.5 text-[13.5px] text-ink-2">{Object.entries(denemeNets(d)).map(([t, n]) => `${testById(t as TestId).name.split(' ')[0]} ${fmt(n)}`).join(' · ')}</p>
            </div>
            <span className="num shrink-0 pt-0.5 font-semibold">{fmt(totalNet(d))}</span>
            <button type="button" onClick={() => { if (confirm('Bu deneme sonucu silinsin mi?')) void deleteDeneme(d.id!); }} className="grid size-8 shrink-0 place-items-center rounded-lg text-muted hover:bg-sunken hover:text-bad" aria-label={`${EXAMS[d.exam].name} ${fmtDay(d.date)} denemesini sil`}>
              <Trash2 className="size-4" />
            </button>
          </li>
        ))}
      </ul>
      <ButtonLink to="/denemeler?ekle=tyt" variant="ghost" size="sm" className="mt-2"><Plus className="size-4" /> Yeni sonuç</ButtonLink>
    </section>
  );
}
