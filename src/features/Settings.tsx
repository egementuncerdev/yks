import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { usePlan, useProfile } from '@/app/data';
import { Button, ButtonLink } from '@/components/ui';
import { SCORE_TYPES, EXAM_DATE_IS_OFFICIAL } from '@/content/exam';
import { RESOURCES } from '@/content/subjects';
import { fmtDay } from '@/lib/dates';
import { BackupError, exportData, importData, replan, resetAll } from '@/lib/storage';
import { useSync } from '@/lib/sync';

type Theme = 'system' | 'light' | 'dark';
const readTheme = (): Theme => { try { return (localStorage.getItem('theme') as Theme) || 'system'; } catch { return 'system'; } };
function applyTheme(t: Theme) {
  try { localStorage.setItem('theme', t); } catch { /* gizli mod */ }
  const dark = t === 'dark' || (t === 'system' && matchMedia('(prefers-color-scheme: dark)').matches);
  document.documentElement.classList.toggle('dark', dark);
}

function Row({ title, text, children }: { title: string; text?: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 py-4">
      <div className="min-w-0"><p className="font-medium">{title}</p>{text && <p className="mt-0.5 text-sm text-ink-2">{text}</p>}</div>
      <div className="flex flex-wrap gap-2">{children}</div>
    </div>
  );
}

export default function Settings() {
  const sync = useSync();
  const profile = useProfile();
  const plan = usePlan();
  const navigate = useNavigate();
  const [theme, setTheme] = useState<Theme>(readTheme);
  const [msg, setMsg] = useState('');
  const file = useRef<HTMLInputElement>(null);
  if (!profile) return null;
  const weekly = profile.hours.reduce((a, b) => a + b, 0);

  const download = async () => {
    const blob = new Blob([JSON.stringify(await exportData(), null, 2)], { type: 'application/json' });
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = `netlik-yedek-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(a.href);
  };
  const upload = async (f: File) => {
    try { await importData(JSON.parse(await f.text())); setMsg('Yedek yüklendi.'); }
    catch (e) { setMsg(e instanceof BackupError ? e.message : 'Dosya okunamadı.'); }
  };

  return (
    <div className="mx-auto max-w-2xl">
      <h1 className="display mb-6 text-[1.75rem] leading-tight">Ayarlar</h1>

      <section aria-labelledby="s1" className="divide-y divide-line border-y border-line">
        <h2 id="s1" className="sr-only">Program</h2>
        <Row title="Cevapların" text={`${SCORE_TYPES.find((s) => s.id === profile.scoreType)!.name} · haftada ${weekly} saat · ${profile.sessionMin} dk oturum · sınav ${fmtDay(profile.examDate, { day: 'numeric', month: 'long', year: 'numeric' })}${profile.examDateCustom || EXAM_DATE_IS_OFFICIAL ? '' : ' (tahmini)'}`}>
          <ButtonLink to="/kurulum" variant="secondary" size="sm">Değiştir</ButtonLink>
        </Row>
        <Row title="Programı yeniden düzenle" text="Bugünden itibaren baştan dağıtılır. Bitirdiğin görevler ve konular korunur.">
          <Button variant="secondary" size="sm" onClick={async () => { await replan(); setMsg('Program yeniden düzenlendi.'); }}>Düzenle</Button>
        </Row>
        <Row title="Görünüm">
          <div role="radiogroup" aria-label="Tema" className="inline-flex rounded-xl border border-line-2 bg-sunken p-1">
            {([['system', 'Sistem'], ['light', 'Açık'], ['dark', 'Koyu']] as const).map(([v, t]) => (
              <button key={v} type="button" role="radio" aria-checked={theme === v} onClick={() => { setTheme(v); applyTheme(v); }}
                className={`h-8 rounded-lg px-3 text-sm ${theme === v ? 'bg-surface font-medium text-ink' : 'text-muted'}`}>{t}</button>
            ))}
          </div>
        </Row>
      </section>

      <section aria-labelledby="s2" className="mt-8 divide-y divide-line border-y border-line">
        <h2 id="s2" className="pt-4 text-sm font-medium text-muted">Verilerin</h2>
        <Row title="Hesap" text={sync.user ? `${sync.user} olarak giriş yaptın; verilerin her cihazda eşitleniyor.` : 'Hesap açarsan programın ve ilerlemen her cihazda aynı olur. E-posta gerekmez.'}>
          <ButtonLink to="/hesap" variant="secondary" size="sm">{sync.user ? 'Hesabı yönet' : 'Giriş yap / hesap aç'}</ButtonLink>
        </Row>
        <Row title="Yedek" text={sync.user ? 'Verilerin hesabında da duruyor. İstersen ayrıca dosya olarak da indirebilirsin.' : 'Hesap açmadıysan veriler yalnız bu tarayıcıda. Başka cihaza geçerken yedeği indirip orada yükle.'}>
          <Button variant="secondary" size="sm" onClick={() => void download()}>İndir</Button>
          <Button variant="secondary" size="sm" onClick={() => file.current?.click()}>Yükle</Button>
          <input ref={file} type="file" accept="application/json,.json" className="hidden" onChange={(e) => { const f = e.target.files?.[0]; if (f) void upload(f); e.target.value = ''; }} />
        </Row>
        <Row title="Her şeyi sil" text={sync.user ? 'Cevapların, programın ve ilerlemen hem bu cihazdan hem hesabından silinir; hesabın açık kalır.' : 'Cevapların, programın ve konu ilerlemen silinir.'}>
          <Button variant="secondary" size="sm" className="text-bad" onClick={async () => { if (confirm(sync.user ? 'Bütün veriler bu cihazdan ve hesabından silinsin mi? Bu geri alınamaz.' : 'Bütün veriler silinsin mi? Bu geri alınamaz.')) { await resetAll(); navigate('/'); } }}>Sil</Button>
        </Row>
      </section>
      {msg && <p className="mt-4 text-sm text-ink-2" role="status">{msg}</p>}

      <section className="mt-10 text-sm text-ink-2">
        <h2 className="mb-2 font-medium text-ink">Hakkında</h2>
        <p>Soru sayıları 2026 YKS kılavuzundaki test dağılımına göre. {EXAM_DATE_IS_OFFICIAL ? '' : 'ÖSYM 2027 takvimini açıklayınca varsayılan tarih güncellenecek.'} Program {plan ? fmtDay(plan.createdAt.slice(0, 10)) : ''} tarihinde oluşturuldu.</p>
        <p className="mt-2"><Link to="/gizlilik" className="text-primary-ink underline decoration-line-2 underline-offset-4">Gizlilik</Link>: hangi bilgilerin nerede tutulduğu.</p>
        <ul className="mt-3 space-y-1">
          {RESOURCES.map((r) => <li key={r.url}><a className="text-primary-ink underline decoration-line-2 underline-offset-4" href={r.url} target="_blank" rel="noopener">{r.name}<span className="sr-only"> (yeni sekmede açılır)</span></a></li>)}
        </ul>
      </section>
    </div>
  );
}
