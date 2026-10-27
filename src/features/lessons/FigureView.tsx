/* Anlatımdaki görsel ve şemaları çizer: SVG çizim, tablo, zaman çizelgesi, akış ve Punnett karesi. */
import { MathText } from '@/components/MathText';
import type { Figure } from '@/content/lessons/types';
import { DIAGRAMS } from './Diagrams';

export function FigureView({ f }: { f: Figure }) {
  return (
    <figure className="-mx-4 border-y border-line bg-surface px-4 py-4 sm:mx-0 sm:rounded-2xl sm:border sm:p-5">
      <figcaption className="mb-3 text-[13px] font-medium text-muted">{f.title}</figcaption>
      <Body f={f} />
      {f.caption && <p className="mt-3 text-[14px] leading-relaxed text-ink-2"><MathText text={f.caption} /></p>}
    </figure>
  );
}

function Body({ f }: { f: Figure }) {
  switch (f.kind) {
    case 'svg': {
      const d = DIAGRAMS[f.svg];
      return d ? <>{d.draw()}</> : null;
    }
    case 'table':
      return (
        <div className="-mx-1 overflow-x-auto px-1">
          <table className="w-full min-w-[22rem] border-collapse text-left text-[14px]">
            <thead><tr>{f.head.map((h, i) => h ? <th key={i} scope="col" className="border-b border-line-2 px-2.5 py-2 font-semibold"><MathText text={h} /></th> : <td key={i} className="border-b border-line-2" />)}</tr></thead>
            <tbody>
              {f.rows.map((r, i) => (
                <tr key={i} className="border-b border-line last:border-0">
                  {r.map((c, j) => j === 0 && c
                    ? <th key={j} scope="row" className="px-2.5 py-2 align-top font-medium"><MathText text={c} /></th>
                    : <td key={j} className="px-2.5 py-2 align-top text-ink-2"><MathText text={c} /></td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case 'timeline':
      return (
        <ol className="relative ml-1 border-l border-line-2">
          {f.items.map(([w, t]) => (
            <li key={w + t} className="relative pb-3 pl-5 last:pb-0">
              <span className="absolute top-[0.45em] -left-[5px] size-[9px] rounded-full border-2 border-primary bg-surface" aria-hidden="true" />
              <span className="block text-[13px] font-semibold text-primary-ink">{w}</span>
              <span className="block text-[14.5px] leading-snug text-ink-2"><MathText text={t} /></span>
            </li>
          ))}
        </ol>
      );
    case 'flow':
      return (
        <ol className="flex flex-col items-stretch gap-1.5 sm:flex-row sm:flex-wrap sm:items-center">
          {f.steps.map((s, i) => (
            <li key={s} className="flex items-center gap-1.5 sm:contents">
              {i > 0 && <span className="pl-3 text-muted sm:pl-0" aria-hidden="true"><span className="sm:hidden">↓</span><span className="hidden sm:inline">→</span></span>}
              <span className={`rounded-lg border px-3 py-1.5 text-[14px] ${i === 0 || i === f.steps.length - 1 ? 'border-primary/50 bg-primary-soft' : 'border-line-2 bg-surface'}`}><MathText text={s} /></span>
            </li>
          ))}
        </ol>
      );
    case 'punnett': {
      const [m1, m2] = f.mother, [b1, b2] = f.father;
      const cell = (a: string, b: string) => [a, b].sort((x, y) => (x.toUpperCase() === x ? -1 : 0) - (y.toUpperCase() === y ? -1 : 0)).join('');
      return (
        <div className="flex flex-wrap items-center gap-5">
          <table className="border-collapse text-center text-[15px]" aria-label={`Punnett karesi: ${f.mother.join('')} × ${f.father.join('')}`}>
            <thead><tr><td className="size-11"><span className="sr-only">anne ↓, baba →</span></td><th scope="col" className="size-11 font-semibold text-primary-ink">{b1}</th><th scope="col" className="size-11 font-semibold text-primary-ink">{b2}</th></tr></thead>
            <tbody>
              {[m1, m2].map((m) => (
                <tr key={m}><th scope="row" className="size-11 font-semibold text-good">{m}</th>
                  {[b1, b2].map((b, j) => <td key={j} className="size-11 border border-line-2 bg-sunken/60 font-medium">{cell(m, b)}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
          {f.note && <p className="min-w-0 flex-1 text-[14px] text-ink-2"><MathText text={f.note} /></p>}
        </div>
      );
    }
  }
}
