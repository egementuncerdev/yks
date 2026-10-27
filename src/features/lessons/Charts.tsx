/* Anlatımlardaki veri görselleri: yatay çubuk ve çizgi grafik. Tek seri tek renk (primary); iki seride ikincisi yeşil ve lejant var.
   Değerler grafiğin üstünde yazılı (renge bağlı kalınmaz); eksenler ve ızgara sakin. */
import { useState } from 'react';
import { MathText } from '@/components/MathText';

const fmt = (n: number) => String(Math.round(n * 100) / 100).replace('.', ',');

export function Bars({ items, unit, highlight }: { items: [string, number][]; unit?: string; highlight?: string }) {
  const max = Math.max(...items.map(([, v]) => v), 1);
  return (
    <ul className="space-y-2" aria-label="Çubuk grafik">
      {items.map(([l, v]) => {
        const hi = highlight === l;
        return (
          <li key={l} className="grid grid-cols-[minmax(6rem,38%)_1fr] items-center gap-3 text-[14px]">
            <span className={`truncate ${hi ? 'font-semibold text-ink' : 'text-ink-2'}`} title={l}><MathText text={l} /></span>
            <span className="flex items-center gap-2">
              <span className="h-5 rounded-r-[4px]" style={{ width: `${Math.max(2, (v / max) * 100)}%`, background: hi || !highlight ? 'var(--primary)' : 'var(--line-2)' }} aria-hidden="true" />
              <span className={`num shrink-0 text-[13px] ${hi ? 'font-semibold' : 'text-muted'}`}>{fmt(v)}{unit ? ` ${unit}` : ''}</span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

export function LineChart({ series, x, y, marks = [], steps = false }: { series: { name: string; points: [number, number][] }[]; x: string; y: string; marks?: [number, string][]; steps?: boolean }) {
  const [hover, setHover] = useState<{ s: number; i: number } | null>(null);
  const W = 520, H = 240, L = 48, R = 16, T = 18, B = 40;
  const all = series.flatMap((s) => s.points);
  const xs = all.map((p) => p[0]), ys = all.map((p) => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(0, ...ys), y1 = Math.max(...ys) * 1.08 || 1;
  const X = (v: number) => L + ((W - L - R) * (v - x0)) / (x1 - x0 || 1);
  const Y = (v: number) => T + ((H - T - B) * (y1 - v)) / (y1 - y0 || 1);
  const nice = (lo: number, hi: number) => { const span = hi - lo, st = 10 ** Math.floor(Math.log10(span / 4)); const step = [1, 2, 5, 10].map((m) => m * st).find((s) => span / s <= 5)!; const out: number[] = []; for (let v = Math.ceil(lo / step) * step; v <= hi + 1e-9; v += step) out.push(Math.round(v * 1e6) / 1e6); return out; };
  const colors = ['var(--primary)', 'var(--good)'];
  const path = (pts: [number, number][]) => pts.map(([a, b], i) => (i === 0 ? `M${X(a)},${Y(b)}` : steps ? `H${X(a)} V${Y(b)}` : `L${X(a)},${Y(b)}`)).join(' ');
  const h = hover ? series[hover.s]!.points[hover.i]! : null;
  return (
    <div className="relative">
      {series.length > 1 && (
        <div className="mb-2 flex flex-wrap gap-4 text-[13px] text-ink-2">
          {series.map((s, i) => <span key={s.name} className="inline-flex items-center gap-1.5"><span className="h-0.5 w-4 rounded" style={{ background: colors[i] }} aria-hidden="true" />{s.name}</span>)}
        </div>
      )}
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="group" aria-label={`${y} – ${x} grafiği: ${series.map((s) => `${s.name}: ${s.points.map((p) => `(${fmt(p[0])}; ${fmt(p[1])})`).join(' ')}`).join('. ')}`}>
        {nice(y0, y1).map((t) => <g key={`y${t}`}><line x1={L} x2={W - R} y1={Y(t)} y2={Y(t)} stroke="var(--line)" /><text x={L - 8} y={Y(t) + 4} textAnchor="end" fontSize={12} fill="var(--muted)">{fmt(t)}</text></g>)}
        {nice(x0, x1).map((t) => <text key={`x${t}`} x={X(t)} y={H - B + 18} textAnchor="middle" fontSize={12} fill="var(--muted)">{fmt(t)}</text>)}
        <line x1={L} x2={W - R} y1={Y(y0)} y2={Y(y0)} stroke="var(--line-2)" />
        <text x={W - R} y={H - 6} textAnchor="end" fontSize={12} fill="var(--muted)">{x}</text>
        <text x={L - 40} y={T - 6} textAnchor="start" fontSize={12} fill="var(--muted)">{y}</text>
        {marks.map(([mx, ml]) => <g key={ml}><line x1={X(mx)} x2={X(mx)} y1={T} y2={Y(y0)} stroke="var(--line-2)" strokeDasharray="4 4" /><text x={X(mx) + 4} y={T + 10} fontSize={12} fill="var(--ink-2)">{ml}</text></g>)}
        {series.map((s, si) => <path key={s.name} d={path(s.points)} fill="none" stroke={colors[si]} strokeWidth={2} strokeLinejoin="round" />)}
        {series.map((s, si) => s.points.map(([a, b], i) => (
          <g key={`${si}-${i}`} tabIndex={0} role="img" aria-label={`${s.name}: ${x} ${fmt(a)}, ${y} ${fmt(b)}`} onMouseEnter={() => setHover({ s: si, i })} onMouseLeave={() => setHover(null)} onFocus={() => setHover({ s: si, i })} onBlur={() => setHover(null)} className="outline-none">
            <circle cx={X(a)} cy={Y(b)} r={12} fill="transparent" />
            <circle cx={X(a)} cy={Y(b)} r={hover?.s === si && hover.i === i ? 5.5 : 3.5} fill={colors[si]} stroke="var(--surface)" strokeWidth={1.5} />
          </g>
        )))}
      </svg>
      {h && hover && (
        <div className="pointer-events-none absolute top-0 rounded-lg border border-line-2 bg-surface px-2.5 py-1.5 text-[13px] shadow-sm" style={{ left: `${(X(h[0]) / W) * 100}%`, transform: `translateX(${X(h[0]) > W / 2 ? '-105%' : '5%'})` }}>
          {series.length > 1 && <span className="block text-muted">{series[hover.s]!.name}</span>}
          <span className="block"><span className="text-muted">{x}:</span> {fmt(h[0])} · <span className="text-muted">{y}:</span> <span className="font-semibold">{fmt(h[1])}</span></span>
        </div>
      )}
    </div>
  );
}
