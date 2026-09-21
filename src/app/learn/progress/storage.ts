import {
  CourseCatalog,
  LearningProgressSnapshot,
} from "./types";

const storageKey = (pathSlug: string) => `nsl-learn-progress:${pathSlug}`;

function canUseStorage() {
  return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
}

export function readLearningProgress(
  pathSlug: string,
): LearningProgressSnapshot {
  if (!canUseStorage()) {
    return { completedLessonIds: [] };
  }

  try {
    const raw = window.localStorage.getItem(storageKey(pathSlug));
    if (!raw) return { completedLessonIds: [] };
    const parsed = JSON.parse(raw) as LearningProgressSnapshot;
    if (!Array.isArray(parsed?.completedLessonIds)) {
      return { completedLessonIds: [] };
    }
    return {
      completedLessonIds: parsed.completedLessonIds.filter(
        (id) => typeof id === "string",
      ),
    };
  } catch {
    return { completedLessonIds: [] };
  }
}

export function writeLearningProgress(
  pathSlug: string,
  snapshot: LearningProgressSnapshot,
) {
  if (!canUseStorage()) return;
  try {
    window.localStorage.setItem(storageKey(pathSlug), JSON.stringify(snapshot));
  } catch {
    // Ignore quota / private-mode failures.
  }
}

export function lessonId(moduleSlug: string, lessonSlug: string) {
  return `${moduleSlug}:${lessonSlug}`;
}

export function emptyProgress(): LearningProgressSnapshot {
  return { completedLessonIds: [] };
}

export function catalogHasLesson(catalog: CourseCatalog, id: string) {
  return catalog.lessons.some((lesson) => lesson.id === id);
}
