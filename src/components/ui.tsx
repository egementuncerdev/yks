/* Küçük ortak parçalar */
import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from 'react';
import { Link, type LinkProps } from 'react-router';
import { SUBJECT_BY_ID } from '@/content/subjects';

type Variant = 'primary' | 'secondary' | 'ghost' | 'mark';
const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl font-medium transition-[background-color,border-color,color,transform] active:translate-y-px disabled:pointer-events-none disabled:opacity-45 select-none';
const variants: Record<Variant, string> = {
  primary: 'bg-primary text-on-primary hover:brightness-110',
  secondary: 'border border-line-2 bg-surface text-ink hover:border-ink-2',
  ghost: 'text-ink-2 hover:bg-sunken hover:text-ink',
  mark: 'bg-mark text-mark-ink hover:brightness-95'
};
const sizes = { sm: 'h-9 px-3 text-sm', md: 'h-11 px-4 text-[15px]', lg: 'h-13 px-6 text-base' };
export const btn = (v: Variant = 'primary', s: keyof typeof sizes = 'md', extra = '') => `${base} ${variants[v]} ${sizes[s]} ${extra}`;

export function Button({ variant = 'primary', size = 'md', className = '', type = 'button', ...rest }: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: keyof typeof sizes }) {
  return <button type={type} className={btn(variant, size, className)} {...rest} />;
}
export function ButtonLink({ variant = 'primary', size = 'md', className = '', ...rest }: LinkProps & { variant?: Variant; size?: keyof typeof sizes }) {
  return <Link className={btn(variant, size, className)} {...rest} />;
}

export function Card({ className = '', ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={`rounded-2xl border border-line bg-surface p-5 ${className}`} {...rest} />;
}

export function Progress({ value, label, className = '', tone = 'primary' }: { value: number; label: string; className?: string; tone?: 'primary' | 'good' | 'mark' }) {
  const pct = Math.round(Math.max(0, Math.min(1, value)) * 100);
  const bar = { primary: 'bg-primary', good: 'bg-good', mark: 'bg-mark' }[tone];
  return (
    <div className={`h-2 overflow-hidden rounded-full bg-sunken ${className}`} role="progressbar" aria-label={label} aria-valuenow={pct} aria-valuemin={0} aria-valuemax={100}>
      <div className={`h-full rounded-full ${bar} transition-[width] duration-500`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function SubjectTag({ id, short = true }: { id: string; short?: boolean }) {
  const s = SUBJECT_BY_ID[id];
  if (!s) return null;
  return (
    <span className="inline-flex items-center gap-1.5 text-[12.5px] font-medium text-ink-2">
      <span className="size-2 rounded-full" style={{ background: s.color }} aria-hidden="true" />
      {short ? `${s.exam.toUpperCase()} ${s.short}` : s.name}
    </span>
  );
}

export function PageHeader({ eyebrow, title, children }: { eyebrow?: ReactNode; title: ReactNode; children?: ReactNode }) {
  return (
    <header className="mb-6 flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
        <h1 className="display text-[2rem] leading-[1.05] sm:text-[2.5rem]">{title}</h1>
      </div>
      {children}
    </header>
  );
}

export function Empty({ title, text, action }: { title: string; text?: string; action?: ReactNode }) {
  return (
    <Card className="px-6 py-12 text-center sm:px-10">
      <h2 className="display text-2xl">{title}</h2>
      {text && <p className="mx-auto mt-2 max-w-md text-ink-2">{text}</p>}
      {action && <div className="mt-6">{action}</div>}
    </Card>
  );
}

/** Ekranın altına yapışan eylem çubuğu: uzun içerikte ana düğme hep görünür kalır.
    aboveNav: mobildeki alt sekme çubuğunun üstünde durur (uygulama ekranları). */
export function ActionBar({ children, aboveNav = false, className = '' }: { children: ReactNode; aboveNav?: boolean; className?: string }) {
  return (
    <div className={`sticky z-20 -mx-4 mt-8 flex items-center justify-between gap-3 border-t border-line bg-paper/95 px-4 py-3 backdrop-blur sm:mx-0 sm:mb-4 sm:rounded-2xl sm:border sm:px-4 ${aboveNav ? 'bottom-[calc(4rem+env(safe-area-inset-bottom))] md:bottom-0' : 'bottom-0 pb-[max(0.75rem,env(safe-area-inset-bottom))]'} ${className}`}>
      {children}
    </div>
  );
}
