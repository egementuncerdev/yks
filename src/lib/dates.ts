/* Tarih yardımcıları: gün anahtarı 'YYYY-MM-DD' (yerel saat), hafta pazartesi başlar. */
export const pad = (n: number) => String(n).padStart(2, '0');
export const dayKey = (d: Date) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
export const parseDay = (k: string) => { const [y, m, d] = k.split('-').map(Number); return new Date(y!, m! - 1, d!, 12); };
export const addDays = (k: string, n: number) => { const d = parseDay(k); d.setDate(d.getDate() + n); return dayKey(d); };
export const diffDays = (a: string, b: string) => Math.round((parseDay(a).getTime() - parseDay(b).getTime()) / 86_400_000);
/** 0 = pazartesi … 6 = pazar */
export const weekday = (k: string) => (parseDay(k).getDay() + 6) % 7;
export const weekStart = (k: string) => addDays(k, -weekday(k));
export const DAY_NAMES = ['Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi', 'Pazar'];
export const DAY_SHORT = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
export const fmtDay = (k: string, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' }) => parseDay(k).toLocaleDateString('tr-TR', opts);
export const fmtMinutes = (m: number) => (m < 60 ? `${m} dk` : m % 60 === 0 ? `${m / 60} sa` : `${Math.floor(m / 60)} sa ${m % 60} dk`);
