/* Toplam netin denemeden denemeye değişimi: tek seri çizgi grafik. Noktalar odaklanabilir; üstüne gelince değer görünür.
   Tek seri olduğu için lejant yok (başlık söyler); değerlerin tablosu grafiğin altında. */
import { useState } from 'react';
import { fmtDay } from '@/lib/dates';

export interface NetPoint { date: string; label: string; total: number }

export function NetChart({ points, max, title }: { points: NetPoint[]; max: number; title: string }) {
  const [hover, setHover] = useState<number | null>(null);
  const W = 560, H = 220, L = 40, R = 16, T = 16, B = 34;
  const hi = Math.max(...points.map((p) => p.total), 1);
  const top = Math.min(max, Math.ceil(hi / 10) * 10 + 10);
  const lo = Math.min(0, Math.floor(Math.min(...points.map((p) => p.total)) / 10) * 10);
  const X = (i: number) => (points.length === 1 ? (L + W - R) / 2 : L + ((W - L - R) * i) / (points.length - 1));
  const Y = (v: number) => T + ((H - T - B) * (top - v)) / (top - lo);
  const ticks = Array.from({ length: 5 }, (_, i) => Math.round(lo + ((top - lo) * i) / 4));
  const h = hover !== null ? points[hover] : null;
  const fmt = (n: number) => String(n).replace('.', ',');

  return (
    <div className="relative">
      <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="group" aria-label={`${title}: ${points.map((p) => `${fmtDay(p.date)} ${fmt(p.total)} net`).join(', ')}`}>
        {ticks.map((t) => (
          <g key={t}>
            <line x1={L} x2={W - R} y1={Y(t)} y2={Y(t)} stroke="var(--line)" strokeWidth={1} />
            <text x={L - 8} y={Y(t) + 4} textAnchor="end" fontSize={12} fill="var(--muted)">{t}</text>
          </g>
        ))}
        {points.length > 1 && <path d={points.map((p, i) => `${i ? 'L' : 'M'}${X(i)},${Y(p.total)}`).join(' ')} fill="none" stroke="var(--primary)" strokeWidth={2} strokeLinejoin="round" />}
        {h && <line x1={X(hover!)} x2={X(hover!)} y1={T} y2={H - B} stroke="var(--line-2)" strokeDasharray="3 3" />}
        {points.map((p, i) => (
          <g key={i} tabIndex={0} role="img" aria-label={`${fmtDay(p.date)}${p.label ? `, ${p.label}` : ''}: ${fmt(p.total)} net`}
            onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)} onFocus={() => setHover(i)} onBlur={() => setHover(null)} className="outline-none">
            <rect x={X(i) - 18} y={T} width={36} height={H - T - B} fill="transparent" />
            <circle cx={X(i)} cy={Y(p.total)} r={hover === i ? 6 : 4.5} fill="var(--primary)" stroke="var(--surface)" strokeWidth={2} />
          </g>
        ))}
        {points.length > 0 && (() => { const i = points.length - 1; return <text x={X(i)} y={Y(points[i]!.total) - 12} textAnchor={points.length > 1 ? 'end' : 'middle'} fontSize={12.5} fontWeight={600} fill="var(--ink)">{fmt(points[i]!.total)}</text>; })()}
        {points.map((p, i) => (points.length <= 8 || i === 0 || i === points.length - 1 || i % Math.ceil(points.length / 6) === 0) && (
          <text key={`d${i}`} x={X(i)} y={H - 12} textAnchor="middle" fontSize={11.5} fill="var(--muted)">{fmtDay(p.date, { day: 'numeric', month: 'short' })}</text>
        ))}
      </svg>
      {h && (
        <div className="pointer-events-none absolute top-1 rounded-lg border border-line-2 bg-surface px-2.5 py-1.5 text-[13px] shadow-sm" style={{ left: `${(X(hover!) / W) * 100}%`, transform: `translateX(${hover! > points.length / 2 ? '-105%' : '5%'})` }}>
          <span className="block font-semibold">{fmt(h.total)} net</span>
          <span className="block text-muted">{fmtDay(h.date)}{h.label ? ` · ${h.label}` : ''}</span>
        </div>
      )}
    </div>
  );
}
