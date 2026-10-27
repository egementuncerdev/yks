/* İçerik kontrol listesi: REVIEW=1 npx vitest run src/content/questions/review.test.ts */
import { it } from 'vitest';
import { writeFileSync } from 'node:fs';
import { SUBJECTS } from '../subjects';
import { GENERATORS, BANK, questionById } from './index';
import { LETTERS } from './core';

it.runIf(process.env.REVIEW)('içerik listesi', () => {
  const out = ['# İçerik kontrol listesi — Netlik', '', 'Yanlış ya da doğal olmayan bir şey görürsen not et.', '', '## Konular', '', '“Sık” = son yıllarda düzenli soru gelen konu (yayınevi analizleri; resmi değil). Hacim: 1 küçük, 2 orta, 3 büyük.', ''];
  for (const s of SUBJECTS) {
    out.push(`### ${s.name}`, '', s.topics.map((t) => `- ${t.group ? `${t.group} · ` : ''}${t.name} (${t.size})${t.frequent ? ' · **Sık**' : ''}`).join('\n'), '');
  }
  out.push('## Elle yazılmış sorular', '', 'Doğru cevap kalın.', '');
  for (const [sid, topic, stem, opts, sol] of BANK) out.push(`- **${sid} · ${topic}** — ${stem}`, `  - **${opts[0]}** · ${opts.slice(1).join(' · ')}`, `  - Çözüm: ${sol}`);
  out.push('', '## Üretilen sorulardan örnekler', '', 'Her üreticiden bir örnek; sayılar her testte değişir, cevap kodla hesaplanır.', '');
  for (const [topic, gens] of GENERATORS) gens.forEach((_, i) => {
    const q = questionById(`g|${topic}|${i}|${11 + i}`)!;
    out.push(`- **${topic}** — ${q.stem}`, `  - ${q.options.map((o, j) => (j === q.answer ? `**${LETTERS[j]}) ${o}**` : `${LETTERS[j]}) ${o}`)).join(' · ')}`, `  - Çözüm: ${q.solution}`);
  });
  writeFileSync('CONTENT_REVIEW.md', out.join('\n') + '\n');
});
