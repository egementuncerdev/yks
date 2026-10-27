import { describe, expect, it } from 'vitest';
import { biggestGap, byExam, checkResult, denemeNets, testSummary, testsFor, totalNet } from '@/lib/deneme';
import { YksDB, addDeneme, applyDenemeToProfile, exportData, importData, saveProfile } from '@/lib/storage';
import type { Deneme, Profile } from '@/types';

const D = (date: string, r: Deneme['results'], exam: Deneme['exam'] = 'tyt'): Deneme => ({ date, exam, name: '', results: r, createdAt: date });

describe('deneme hesapları', () => {
  it('puan türüne göre testler', () => {
    expect(testsFor('tyt', 'say')).toEqual(['tyt-tr', 'tyt-sos', 'tyt-mat', 'tyt-fen']);
    expect(testsFor('ayt', 'say')).toEqual(['ayt-mat', 'ayt-fen']);
    expect(testsFor('ayt', 'soz')).toEqual(['ayt-sos1', 'ayt-sos2']);
    expect(testsFor('ayt')).toHaveLength(4);
  });
  it('net, toplam ve doğrulama', () => {
    const d = D('2026-11-01', { 'tyt-tr': { c: 30, w: 8 }, 'tyt-mat': { c: 20, w: 4 } });
    expect(denemeNets(d)).toEqual({ 'tyt-tr': 28, 'tyt-mat': 19 });
    expect(totalNet(d)).toBe(47);
    expect(checkResult('tyt-sos', { c: 15, w: 6 })).toMatch(/20 soru/);
    expect(checkResult('tyt-sos', { c: 15, w: 5 })).toBeNull();
    expect(checkResult('tyt-tr', { c: -1, w: 0 })).not.toBeNull();
  });
  it('gelişim ve en çok net kazanılacak test', () => {
    const list = [D('2026-11-08', { 'tyt-tr': { c: 32, w: 4 }, 'tyt-fen': { c: 6, w: 4 } }), D('2026-11-01', { 'tyt-tr': { c: 28, w: 8 } }), D('2026-11-05', { 'tyt-mat': { c: 10, w: 0 } }, 'ayt')];
    const s = byExam(list, 'tyt');
    expect(s.map((x) => x.date)).toEqual(['2026-11-01', '2026-11-08']);
    expect(testSummary(s, 'tyt-tr')).toEqual({ last: 31, change: 5, avg3: 28.5, count: 2 });
    expect(biggestGap(s[1]!)!.test).toBe('tyt-fen');
  });
});

describe('deneme kaydı', () => {
  const p: Profile = { id: 'me', scoreType: 'say', status: 'mezun', examDate: '2027-06-19', examDateCustom: false, hours: [6, 6, 6, 6, 6, 6, 3], sessionMin: 50, levels: {}, nets: { 'tyt-tr': 10 }, denemePerWeek: { tyt: 1, ayt: 1 }, routines: true, createdAt: '', updatedAt: '' };
  it('kaydedilir, yedekte taşınır, netler programa yansır', async () => {
    const a = new YksDB(`t-${Math.random()}`);
    await saveProfile(p, a, '2026-10-26');
    await addDeneme({ date: '2026-11-01', exam: 'tyt', name: 'X Yayınları', results: { 'tyt-tr': { c: 30, w: 8 } } }, a);
    const d = (await a.denemeler.toArray())[0]!;
    await applyDenemeToProfile(d, a, '2026-10-26');
    expect((await a.profile.get('me'))!.nets['tyt-tr']).toBe(28);
    const b = new YksDB(`t-${Math.random()}`);
    await importData(JSON.parse(JSON.stringify(await exportData(a))), b);
    expect((await b.denemeler.toArray())[0]!.name).toBe('X Yayınları');
  });
});
