/* Kaydırınca yumuşakça belirme. Yalnız ilk açılışta ekranın altında kalan bölümler gizlenir (ekrandakiler hiç saklanmaz);
   hareket azaltma tercihi olanlarda hiç uygulanmaz. */
import { createElement, useEffect, useRef, type HTMLAttributes } from 'react';

export function Reveal({ as = 'div', className = '', ...rest }: HTMLAttributes<HTMLElement> & { as?: 'div' | 'section' }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === 'undefined' || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (el.getBoundingClientRect().top < innerHeight * 0.95) return;
    el.classList.add('reveal-wait');
    const io = new IntersectionObserver(([e]) => { if (e?.isIntersecting) { el.classList.add('reveal-in'); io.disconnect(); } }, { rootMargin: '0px 0px -8% 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return createElement(as, { ref, className, ...rest });
}
