/* Canlı veri kancaları: IndexedDB değişince bileşenler kendiliğinden güncellenir.
   undefined = yükleniyor, null = kayıt yok. */
import { useLiveQuery } from 'dexie-react-hooks';
import { useMemo } from 'react';
import { db } from '@/lib/storage';
import type { Plan, Profile, TopicState } from '@/types';
import { dayKey, diffDays } from '@/lib/dates';

export const useProfile = () => useLiveQuery(async (): Promise<Profile | null> => (await db.profile.get('me')) ?? null, []);
export const usePlan = () => useLiveQuery(async (): Promise<Plan | null> => (await db.plan.get('current')) ?? null, []);
export function useTopicStates() {
  const list = useLiveQuery(() => db.topics.toArray(), [], [] as TopicState[]);
  return useMemo(() => new Map(list.map((s) => [s.topicId, s])), [list]);
}
export const useToday = () => dayKey(new Date());
export const daysLeft = (examDate: string, today: string) => Math.max(0, diffDays(examDate, today));
