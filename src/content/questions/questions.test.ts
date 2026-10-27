import { describe, expect, it } from 'vitest';
import { GENERATORS, BANK_BY_TOPIC, BANK, questionsFor, questionById } from './index';

const bad = /NaN|undefined|Infinity|null|\[object/;

describe('soru üreticileri', () => {
  it('her üretici 300 tohumda geçerli soru veriyor: 5 farklı şık, doğru cevap şıklarda', () => {
    for (const [topic, gens] of GENERATORS) gens.forEach((gen, gi) => {
      for (let seed = 1; seed <= 300; seed++) {
        void gen;
        const q = questionById(`g|${topic}|${gi}|${seed}`)!;
        const tag = `${topic}#${gi} tohum ${seed}`;
        expect(q.options, tag).toHaveLength(5);
        expect(new Set(q.options).size, tag).toBe(5);
        expect(q.answer, tag).toBeGreaterThanOrEqual(0);
        expect(q.answer, tag).toBeLessThan(5);
        expect(bad.test(q.stem + q.options.join() + q.solution), `${tag}: ${q.stem} | ${q.options.join(' / ')}`).toBe(false);
      }
    });
  });
  it('aynı tohum aynı soruyu verir; kimlikten yeniden kurulur', () => {
    const qs = questionsFor('tyt-mat:ebob-ekok', 6, 42);
    expect(qs).toHaveLength(6);
    for (const q of qs) expect(questionById(q.id)).toEqual(q);
    expect(questionsFor('tyt-mat:ebob-ekok', 6, 42)).toEqual(qs);
  });
});

describe('elle yazılmış sorular', () => {
  it('her biri 5 farklı şık; doğru cevap karıştırmadan sonra da doğru', () => {
    BANK.forEach((item, i) => {
      expect(new Set(item[3]).size, item[2]).toBe(5);
      const q = questionById(`b|${i}`)!;
      expect(q.options[q.answer]).toBe(item[3][0]);
    });
    expect(BANK_BY_TOPIC.size).toBeGreaterThan(20);
  });
  it('konudan istenenden az soru varsa olanlar döner', () => {
    const id = [...BANK_BY_TOPIC.keys()].find((k) => !GENERATORS.has(k))!;
    expect(questionsFor(id, 50).length).toBe(BANK_BY_TOPIC.get(id)!.length);
  });
});
