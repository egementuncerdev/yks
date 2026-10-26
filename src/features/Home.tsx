/* "/" — profil yoksa tanıtım, varsa bugünün programı */
import { useProfile } from '@/app/data';
import Landing from './Landing';
import Today from './Today';

export default function Home() {
  const profile = useProfile();
  if (profile === undefined) return <p className="py-20 text-center text-muted" role="status">Yükleniyor…</p>;
  return profile ? <Today /> : <Landing />;
}
