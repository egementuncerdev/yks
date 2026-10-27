/* Kullanıcı verisi modelleri */
import type { ScoreType, TestId } from '@/content/exam';

export type Status = '11' | '12' | 'mezun';
/** 0 başlamadım · 1 temelim var · 2 iyiyim */
export type Level = 0 | 1 | 2;

export interface Profile {
  id: 'me';
  scoreType: ScoreType;
  status: Status;
  examDate: string;
  /** öğrenci tarihi kendisi girdiyse true (varsayılan tahmin değil) */
  examDateCustom: boolean;
  /** pazartesiden pazara günlük çalışma saati */
  hours: number[];
  sessionMin: 25 | 40 | 50;
  levels: Record<string, Level>;
  /** son deneme netleri (isteğe bağlı) */
  nets: Partial<Record<TestId, number>>;
  denemePerWeek: { tyt: number; ayt: number };
  routines: boolean;
  createdAt: string;
  updatedAt: string;
}

export type TopicStatus = 'todo' | 'doing' | 'done' | 'weak';
export interface TopicState { topicId: string; status: TopicStatus; doneSessions: number; updatedAt: string }

export type TaskKind = 'topic' | 'practice' | 'review' | 'routine' | 'exam' | 'analysis';
export interface Task {
  id: string;
  kind: TaskKind;
  minutes: number;
  title: string;
  subjectId?: string;
  topicId?: string;
  /** konu oturumu: kaçıncı parça / toplam */
  part?: [number, number];
  /** tekrar oturumunda gözden geçirilecek konular */
  topicIds?: string[];
  done?: boolean;
}
export interface PlanDay { date: string; tasks: Task[] }
export interface Plan {
  id: 'current';
  createdAt: string;
  from: string;
  examDate: string;
  days: PlanDay[];
  /** konuların bitmesi hedeflenen gün; sonrası tekrar ve deneme dönemi */
  topicsEnd: string;
  /** 1'den küçükse zaman yetmiyor: konular bu oranda sıkıştırıldı */
  fit: number;
  /** programa hiç sığmayan konular (zaman çok kısaysa) */
  dropped: string[];
  totals: { studyMinutes: number; topicSessions: number };
}

/** Bir test denemesi (konu testi, karışık test ya da yanlışlar tekrarı) */
export interface Attempt {
  id?: number;
  /** konu id'si, "mix:<ders>" ya da "wrongs" */
  source: string;
  at: string;
  date: string;
  correct: number;
  wrong: number;
  empty: number;
  total: number;
}
/** Yanlış yapılan ya da boş bırakılan soru: doğru çözülene kadar listede kalır */
export interface WrongItem { qid: string; topicId: string; at: string; times: number }

/** Dışarıda çözülen deneme sınavının sonucu (öğrenci girer) */
export interface DenemeResult { c: number; w: number }
export interface Deneme {
  id?: number;
  date: string;
  exam: import('@/content/exam').ExamId;
  /** yayınevi ya da deneme adı (isteğe bağlı) */
  name: string;
  results: Partial<Record<TestId, DenemeResult>>;
  createdAt: string;
}
