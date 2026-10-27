import { lazy, Suspense, type ComponentType } from 'react';
import { createBrowserRouter } from 'react-router';
import { Layout } from './Layout';
import { ButtonLink, Empty } from '@/components/ui';

const page = (load: () => Promise<{ default: ComponentType }>) => {
  const C = lazy(load);
  return <Suspense fallback={<p className="py-20 text-center text-muted" role="status">Yükleniyor…</p>}><C /></Suspense>;
};

function NotFound() {
  return <Empty title="Sayfa bulunamadı" text="Aradığın sayfa yok ya da taşınmış." action={<ButtonLink to="/">Ana sayfaya dön</ButtonLink>} />;
}

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: page(() => import('@/features/Home')) },
      { path: '/kurulum', element: page(() => import('@/features/wizard/Wizard')) },
      { path: '/hafta', element: page(() => import('@/features/Week')) },
      { path: '/konular', element: page(() => import('@/features/Topics')) },
      { path: '/anlatim', element: page(() => import('@/features/lessons/LessonsIndex')) },
      { path: '/anlatim/:topicId', element: page(() => import('@/features/lessons/LessonPage')) },
      { path: '/testler', element: page(() => import('@/features/tests/Tests')) },
      { path: '/testler/:source', element: page(() => import('@/features/tests/TestRoute')) },
      { path: '/denemeler', element: page(() => import('@/features/denemeler/Denemeler')) },
      { path: '/denemeler/mini/:kind', element: page(() => import('@/features/denemeler/MiniRoute')) },
      { path: '/gizlilik', element: page(() => import('@/features/Privacy')) },
      { path: '/hesap', element: page(() => import('@/features/account/Account')) },
      { path: '/ayarlar', element: page(() => import('@/features/Settings')) },
      { path: '*', element: <NotFound /> }
    ]
  }
]);
