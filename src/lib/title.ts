import { useEffect } from 'react';

const BASE = 'Netlik';
/** Sayfa başlığı; sayfadan çıkınca varsayılana döner */
export function useTitle(title?: string) {
  useEffect(() => {
    const prev = document.title;
    document.title = title ? `${title} · ${BASE}` : prev;
    return () => { document.title = prev; };
  }, [title]);
}
