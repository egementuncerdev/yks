import { it } from 'vitest';
import { GENERATORS, questionById } from './index';
import { LETTERS } from './core';
it.runIf(process.env.SAMPLE)('örnek', () => {
  const only = process.env.SAMPLE!;
  for (const [topic, gens] of GENERATORS) gens.forEach((_, i) => {
    if (only !== '1' && !topic.startsWith(only)) return;
    const q = questionById(`g|${topic}|${i}|${23 + i}`)!;
    console.log(`[${topic}#${i}] ${q.stem}\n  ${q.options.map((o, j) => `${LETTERS[j]}) ${o}${j === q.answer ? ' ✓' : ''}`).join('  ')}\n  → ${q.solution}`);
  });
});
