import { describe, expect, it } from 'vitest';
import { SUBJECTS, FREQUENT, TOPIC_BY_ID } from '@/content/subjects';
import { TESTS, TESTS_BY_SCORE, EXAMS, questionsFor, net } from '@/content/exam';

describe('içerik', () => {
  it('konu id’leri benzersiz', () => {
    const ids = SUBJECTS.flatMap((s) => s.topics.map((t) => t.id));
    expect(new Set(ids).size).toBe(ids.length);
    expect(Object.keys(TOPIC_BY_ID).length).toBe(ids.length);
  });
  it('sık sorulan konu adları gerçek konularla eşleşiyor', () => {
    for (const [sid, names] of Object.entries(FREQUENT)) {
      const s = SUBJECTS.find((x) => x.id === sid);
      expect(s, sid).toBeDefined();
      for (const n of names) expect(s!.topics.some((t) => t.name === n && t.frequent), `${sid}: ${n}`).toBe(true);
    }
  });
  it('test soru sayıları kılavuzla tutarlı', () => {
    for (const t of TESTS) expect(t.parts.reduce((a, p) => a + p.q, 0), t.id).toBe(t.questions);
    const sum = (exam: string) => TESTS.filter((t) => t.exam === exam).reduce((a, t) => a + t.questions, 0);
    expect(sum('tyt')).toBe(EXAMS.tyt.questions);
    expect(sum('ayt')).toBe(EXAMS.ayt.questions);
    expect(sum('ydt')).toBe(EXAMS.ydt.questions);
  });
  it('her testteki ders gerçekten var', () => {
    for (const t of TESTS) for (const p of t.parts) expect(SUBJECTS.some((s) => s.id === p.subject), p.subject).toBe(true);
  });
  it('puan türüne göre soru sayısı', () => {
    expect(questionsFor('say', 'ayt-fiz')).toBe(14);
    expect(questionsFor('ea', 'ayt-tar')).toBe(10);
    expect(questionsFor('soz', 'ayt-tar')).toBe(21);
    expect(questionsFor('say', 'ayt-edb')).toBe(0);
    expect(TESTS_BY_SCORE.tyt).toHaveLength(4);
  });
  it('net hesabı: 4 yanlış 1 doğruyu götürür', () => {
    expect(net(30, 8)).toBe(28);
    expect(net(10, 3)).toBe(9.25);
  });
});
