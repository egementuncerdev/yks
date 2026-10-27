/* /testler/:source — konu testi (konu id), karışık test (mix:<ders>), yanlışlar (wrongs) */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';
import { Empty, ButtonLink } from '@/components/ui';
import { TOPIC_BY_ID } from '@/content/subjects';
import { lessonPath } from '@/content/lessons';
import { questionById, questionsFor, topicsWithQuestions, type Question } from '@/content/questions';
import { db } from '@/lib/storage';
import { Runner } from './Runner';

const N = 10;

async function build(source: string): Promise<Question[]> {
  if (source === 'wrongs') {
    const list = (await db.wrongs.toArray()).sort((a, b) => b.times - a.times || b.at.localeCompare(a.at));
    return list.map((w) => questionById(w.qid)).filter(Boolean).slice(0, N) as Question[];
  }
  if (source.startsWith('mix:')) {
    const sid = source.slice(4);
    const topics = topicsWithQuestions(sid);
    const states = new Map((await db.topics.toArray()).map((s) => [s.topicId, s]));
    const studied = topics.filter((t) => ['done', 'doing', 'weak'].includes(states.get(t.id)?.status ?? ''));
    const pool = (studied.length >= 3 ? studied : topics).map((t) => t.id);
    const out: Question[] = [];
    const seed = Date.now();
    for (let i = 0; out.length < N && i < N * 3; i++) {
      const q = questionsFor(pool[i % pool.length]!, 1, seed + i * 977)[0];
      if (q && !out.some((x) => x.id === q.id || x.stem === q.stem)) out.push(q);
    }
    return out;
  }
  return questionsFor(source, N);
}

export default function TestRoute() {
  const { source = '' } = useParams();
  const navigate = useNavigate();
  const [qs, setQs] = useState<Question[] | null>(null);
  const [run, setRun] = useState(0);
  useEffect(() => { setQs(null); void build(source).then(setQs); }, [source, run]);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between gap-3">
        <Link to="/testler" className="inline-flex items-center gap-1.5 text-sm text-muted hover:text-ink"><ArrowLeft className="size-4" /> Testler</Link>
        {TOPIC_BY_ID[source] && <Link to={lessonPath(source)} className="text-sm text-primary-ink underline decoration-line-2 underline-offset-4">Konu anlatımı</Link>}
      </div>
      {qs === null ? <p className="py-16 text-center text-muted" role="status">Sorular hazırlanıyor…</p>
        : qs.length === 0 ? <Empty title={source === 'wrongs' ? 'Yanlış listen boş' : 'Bu konu için soru yok'} text={source === 'wrongs' ? 'Testlerde yanlış yaptığın ya da boş bıraktığın sorular burada birikir.' : undefined} action={<ButtonLink to="/testler">Testlere dön</ButtonLink>} />
        : <Runner key={run} questions={qs} source={source} onDone={() => navigate('/testler')} onRestart={() => setRun((r) => r + 1)} />}
    </div>
  );
}
