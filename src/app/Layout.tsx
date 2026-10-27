import { useEffect } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router';
import { BookOpen, CalendarDays, CalendarRange, CircleHelp, ListChecks, Settings } from 'lucide-react';
import { useProfile, useToday, daysLeft } from './data';

const NAV = [
  { to: '/', label: 'Bugün', icon: CalendarDays },
  { to: '/hafta', label: 'Hafta', icon: CalendarRange },
  { to: '/konular', label: 'Konular', icon: ListChecks },
  { to: '/anlatim', label: 'Anlatım', icon: BookOpen },
  { to: '/testler', label: 'Testler', icon: CircleHelp },
  { to: '/ayarlar', label: 'Ayarlar', icon: Settings }
];

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2" aria-label="Netlik — ana sayfa">
      <svg viewBox="0 0 64 64" className="size-8" aria-hidden="true"><rect width="64" height="64" rx="14" className="fill-ink" /><rect x="12" y="38" width="40" height="10" rx="3" fill="var(--mark)" /><path d="M18 46V18l28 28V18" fill="none" className="stroke-paper" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" /></svg>
      <span className="display text-[1.35rem] leading-none">Netlik</span>
    </Link>
  );
}

export function Layout() {
  const profile = useProfile();
  const today = useToday();
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  const app = !!profile && pathname !== '/kurulum';

  return (
    <div className="min-h-dvh">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-surface focus:px-3 focus:py-2">İçeriğe geç</a>
      <header className="sticky top-0 z-30 border-b border-line bg-paper/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
          <Logo />
          {app && (
            <nav aria-label="Ana menü" className="hidden items-center gap-1 md:flex">
              {NAV.map(({ to, label, icon: Icon }) => (
                <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `flex items-center gap-2 rounded-lg px-3 py-2 text-[14.5px] ${isActive || (to === '/testler' && pathname.startsWith('/denemeler')) ? 'bg-sunken font-semibold text-ink' : 'text-ink-2 hover:bg-sunken/60'}`}>
                  <Icon className="size-4" strokeWidth={1.9} aria-hidden="true" />{label}
                </NavLink>
              ))}
            </nav>
          )}
          {!app && pathname !== '/kurulum' && (
            <nav aria-label="Ana menü" className="flex items-center gap-1 text-[14.5px]">
              {[['/anlatim', 'Konu anlatımları', 'Anlatımlar'], ['/testler', 'Testler ve denemeler', 'Testler']].map(([to, long, short]) => (
                <NavLink key={to} to={to!} className={({ isActive }) => `rounded-lg px-2.5 py-2 sm:px-3 ${isActive || (to === '/testler' && pathname.startsWith('/denemeler')) ? 'bg-sunken font-semibold text-ink' : 'text-ink-2 hover:bg-sunken/60'}`}>
                  <span className="hidden sm:inline">{long}</span><span className="sm:hidden">{short}</span>
                </NavLink>
              ))}
            </nav>
          )}
          {profile && (
            <p className="num rounded-full border border-line-2 px-3 py-1 text-[13px]" title={profile.examDateCustom ? 'Sınav tarihi' : 'Tahmini sınav tarihi'}>
              <span className="font-semibold">{daysLeft(profile.examDate, today)}</span> gün{!profile.examDateCustom && <span className="text-muted"> · tahmini</span>}
            </p>
          )}
        </div>
      </header>

      <main id="main" tabIndex={-1} className={`mx-auto max-w-6xl px-4 pt-6 focus:outline-none sm:px-6 sm:pt-10 ${app ? 'pb-28 md:pb-16' : 'pb-16'}`}>
        <Outlet />
      </main>

      {app && (
        <nav aria-label="Ana menü" className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-6 border-t border-line bg-paper/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden">
          {NAV.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} end={to === '/'} className={({ isActive }) => `flex min-h-16 flex-col items-center justify-center gap-1 text-[11.5px] font-medium ${isActive || (to === '/testler' && pathname.startsWith('/denemeler')) ? 'text-ink' : 'text-muted'}`}>
              {({ isActive }) => (<><Icon className={`size-5 ${isActive || (to === '/testler' && pathname.startsWith('/denemeler')) ? 'text-primary' : ''}`} strokeWidth={1.9} aria-hidden="true" />{label}</>)}
            </NavLink>
          ))}
        </nav>
      )}

      {!app && (
        <footer className="border-t border-line">
          <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-4 py-6 text-sm text-muted sm:px-6">
            <p>Netlik · ücretsiz, hesap gerektirmez. Verilerin yalnız bu tarayıcıda durur.</p>
            <p>Yapan: <a className="underline decoration-line-2 underline-offset-4 hover:text-ink" href="https://egementuncer.dev">Egemen Tuncer</a></p>
          </div>
        </footer>
      )}
    </div>
  );
}
