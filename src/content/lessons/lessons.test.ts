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

describe('anlatım görselleri', () => {
  it('her görsel var olan bir konuya ve çizime bağlı; bölüm indeksi geçerli', async () => {
    const { FIGURES } = await import('./figures');
    const { DIAGRAMS } = await import('../../features/lessons/Diagrams');
    for (const [key, figs] of Object.entries(FIGURES)) {
      const [sid, ...rest] = key.split(':');
      const name = rest.join(':');
      const s = SUBJECTS.find((x) => x.id === sid);
      expect(s?.topics.some((t) => t.name === name), `${key}: konu yok`).toBe(true);
      const lesson = (await lessonsFor(sid!))[name]!;
      for (const f of figs) {
        if (f.kind === 'svg') expect(DIAGRAMS[f.svg], `${key}: çizim yok ${f.svg}`).toBeTruthy();
        if (f.at !== undefined) expect(f.at < lesson.parts.length, `${key}: at ${f.at}`).toBe(true);
        if (f.kind === 'table') for (const r of f.rows) expect(r.length, `${key}: ${f.title}`).toBe(f.head.length);
      }
      expect(new Set(figs.map((f) => f.title)).size, `${key}: aynı başlık`).toBe(figs.length);
    }
  });
});
