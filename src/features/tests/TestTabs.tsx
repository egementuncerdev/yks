/* Testler ve Denemeler arasında geçiş: iki sayfanın üstünde aynı sekme. */
import { NavLink } from 'react-router';

export function TestTabs() {
  const cls = ({ isActive }: { isActive: boolean }) => `flex-1 rounded-lg px-3 py-2 text-center text-[14.5px] sm:flex-none ${isActive ? 'bg-surface font-semibold text-ink shadow-[0_0_0_1px_var(--line-2)]' : 'text-ink-2 hover:text-ink'}`;
  return (
    <nav aria-label="Test türü" className="mb-6 flex gap-1 rounded-xl bg-sunken p-1 sm:inline-flex">
      <NavLink to="/testler" end className={cls}>Konu testleri</NavLink>
      <NavLink to="/denemeler" className={cls}>Denemeler</NavLink>
    </nav>
  );
}
