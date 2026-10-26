import { describe, expect, it } from 'vitest';
import { YksDB, saveProfile, toggleTask, exportData, importData, validateBackup, BackupError, setTopicStatus, replan, saveAttempt } from '@/lib/storage';
import type { Profile } from '@/types';

const p: Profile = { id: 'me', scoreType: 'ea', status: 'mezun', examDate: '2027-06-19', examDateCustom: false, hours: [6, 6, 6, 6, 6, 6, 3], sessionMin: 50, levels: {}, nets: {}, denemePerWeek: { tyt: 1, ayt: 1 }, routines: true, createdAt: '', updatedAt: '' };
const fresh = () => new YksDB(`t-${Math.random()}`);

describe('depolama', () => {
  it('profil kaydı programı oluşturur; görev işaretlemesi konu ilerlemesini günceller', async () => {
    const d = fresh();
    await saveProfile(p, d, '2026-10-26');
    const plan = (await d.plan.get('current'))!;
    const day = plan.days[0]!;
    const t = day.tasks.find((x) => x.kind === 'topic')!;
    await toggleTask(day.date, t.id, true, d);
    expect((await d.topics.get(t.topicId!))?.doneSessions).toBe(1);
    expect((await d.plan.get('current'))!.days[0]!.tasks.find((x) => x.id === t.id)!.done).toBe(true);
    await toggleTask(day.date, t.id, true, d); // iki kez sayılmaz
    expect((await d.topics.get(t.topicId!))?.doneSessions).toBe(1);
  });

  it('konu "biliyorum" işaretlenince yeniden planda yer almaz', async () => {
    const d = fresh();
    await saveProfile(p, d, '2026-10-26');
    const id = 'tyt-tr:paragraf';
    await setTopicStatus(id, 'done', d);
    await replan(d, '2026-10-26');
    const plan = (await d.plan.get('current'))!;
    expect(plan.days.flatMap((x) => x.tasks).some((t) => t.topicId === id && t.kind === 'topic')).toBe(false);
  });

  it('yedek gidiş-dönüş; bozuk yedek reddedilir', async () => {
    const a = fresh();
    await saveProfile(p, a, '2026-10-26');
    await setTopicStatus('tyt-tr:paragraf', 'weak', a);
    const backup = JSON.parse(JSON.stringify(await exportData(a)));
    const b = fresh();
    await importData(backup, b);
    expect((await b.profile.get('me'))?.scoreType).toBe('ea');
    expect((await b.topics.get('tyt-tr:paragraf'))?.status).toBe('weak');
    expect(() => validateBackup({ app: 'baska' })).toThrow(BackupError);
    expect(() => validateBackup({ ...backup, topics: [{ topicId: 1 }] })).toThrow(BackupError);
  });

  it('test kaydı: yanlışlar listeye girer, doğru çözülünce çıkar; düşük başarı konuyu zorlandım yapar', async () => {
    const d = fresh();
    const t = 'tyt-mat:ebob-ekok';
    const ans = (ok: number) => Array.from({ length: 6 }, (_, i) => ({ qid: `q${i}`, topicId: t, result: i < ok ? 'correct' as const : 'wrong' as const }));
    expect((await saveAttempt(t, ans(2), d)).markedWeak).toBe(true);
    expect(await d.wrongs.count()).toBe(4);
    expect((await d.topics.get(t))?.status).toBe('weak');
    await saveAttempt('wrongs', ans(6), d);
    expect(await d.wrongs.count()).toBe(0);
    expect(await d.attempts.count()).toBe(2);
  });
});
