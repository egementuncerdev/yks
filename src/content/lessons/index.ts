/* Konu anlatımları ders ders ayrı dosyalarda; her ders ayrı parça olarak gerektiğinde yüklenir. */
import { SUBJECT_BY_ID, TOPIC_BY_ID } from '../subjects';
import type { Lesson, LessonSet } from './types';

export type { Lesson } from './types';

const FILES = import.meta.glob<{ default: LessonSet }>(['./*.ts', '!./index.ts', '!./types.ts', '!./*.test.ts']);

/** Dersin bütün anlatımları (konu adı → anlatım) */
export async function lessonsFor(subjectId: string): Promise<LessonSet> {
  const load = FILES[`./${subjectId}.ts`];
  return load ? (await load()).default : {};
}

export async function lessonFor(topicId: string): Promise<Lesson | null> {
  const t = TOPIC_BY_ID[topicId];
  if (!t) return null;
  return (await lessonsFor(t.subjectId))[t.name] ?? null;
}

export const lessonPath = (topicId: string) => `/anlatim/${encodeURIComponent(topicId)}`;

/** Aynı dersteki önceki ve sonraki konu */
export function neighbors(topicId: string) {
  const t = TOPIC_BY_ID[topicId];
  const list = t ? SUBJECT_BY_ID[t.subjectId]!.topics : [];
  const i = list.findIndex((x) => x.id === topicId);
  return { prev: i > 0 ? list[i - 1] : undefined, next: i >= 0 ? list[i + 1] : undefined };
}
