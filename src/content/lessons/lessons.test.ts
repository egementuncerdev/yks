import { describe, expect, it } from 'vitest';
import { SUBJECTS } from '../subjects';
import { lessonsFor } from './index';

describe('konu anlatımları', () => {
  it('her konunun anlatımı var; fazladan ya da adı tutmayan anlatım yok; biçim dolu', async () => {
    for (const s of SUBJECTS) {
      const set = await lessonsFor(s.id);
      const names = new Set(s.topics.map((t) => t.name));
      expect(Object.keys(set).filter((k) => !names.has(k)), `${s.id}: konu listesinde olmayan anlatım`).toEqual([]);
      for (const t of s.topics) {
        const l = set[t.name];
        expect(l, `${s.id} · ${t.name}: anlatım yok`).toBeTruthy();
        expect(l!.intro.length, t.name).toBeGreaterThan(40);
        expect(l!.parts.length, t.name).toBeGreaterThan(0);
        for (const p of l!.parts) expect(p.items.length, `${t.name} · ${p.h}`).toBeGreaterThan(0);
        const text = JSON.stringify(l);
        expect((text.match(/\*\*/g) ?? []).length % 2, `${t.name}: kapanmayan **`).toBe(0);
        expect(/\bundefined\b|TODO|lorem ipsum/.test(text), t.name).toBe(false);
      }
    }
  });
});
