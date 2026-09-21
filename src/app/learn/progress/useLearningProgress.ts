import { useCallback, useEffect, useMemo, useState } from "react";

import { CourseCatalog } from "./types";
import {
  catalogHasLesson,
  readLearningProgress,
  writeLearningProgress,
} from "./storage";

export function useLearningProgress(catalog: CourseCatalog | undefined) {
  const [completedIds, setCompletedIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    if (!catalog?.pathSlug) {
      setCompletedIds([]);
      setHydrated(true);
      return;
    }

    const snapshot = readLearningProgress(catalog.pathSlug);
    setCompletedIds(
      snapshot.completedLessonIds.filter((id) => catalogHasLesson(catalog, id)),
    );
    setHydrated(true);
  }, [catalog]);

  const persist = useCallback(
    (ids: string[]) => {
      if (!catalog?.pathSlug) return;
      writeLearningProgress(catalog.pathSlug, { completedLessonIds: ids });
    },
    [catalog?.pathSlug],
  );

  const isLessonComplete = useCallback(
    (lessonId: string) => completedIds.includes(lessonId),
    [completedIds],
  );

  const markLessonComplete = useCallback(
    (lessonId: string) => {
      setCompletedIds((current) => {
        if (current.includes(lessonId)) return current;
        const next = [...current, lessonId];
        persist(next);
        return next;
      });
    },
    [persist],
  );

  const stats = useMemo(() => {
    const totalLessons = catalog?.lessons.length ?? 0;
    const completedLessons = catalog
      ? catalog.lessons.filter((lesson) => completedIds.includes(lesson.id)).length
      : 0;
    const totalModules = catalog?.moduleCount ?? 0;
    const completedModules =
      catalog?.modules.filter((module) =>
        module.lessonIds.every((id) => completedIds.includes(id)),
      ).length ?? 0;
    const percent =
      totalLessons === 0
        ? 0
        : Math.round((completedLessons / totalLessons) * 100);
    const nextLesson =
      catalog?.lessons.find((lesson) => !completedIds.includes(lesson.id)) ??
      null;
    const isCourseComplete =
      totalLessons > 0 && completedLessons === totalLessons;

    return {
      totalLessons,
      completedLessons,
      totalModules,
      completedModules,
      percent,
      nextLesson,
      isCourseComplete,
    };
  }, [catalog, completedIds]);

  const moduleStats = useCallback(
    (moduleSlug: string) => {
      const module = catalog?.modules.find((item) => item.slug === moduleSlug);
      const total = module?.lessonIds.length ?? 0;
      const completed =
        module?.lessonIds.filter((id) => completedIds.includes(id)).length ?? 0;
      const percent = total === 0 ? 0 : Math.round((completed / total) * 100);
      return { total, completed, percent, isComplete: total > 0 && completed === total };
    },
    [catalog, completedIds],
  );

  return {
    hydrated,
    completedIds,
    isLessonComplete,
    markLessonComplete,
    stats,
    moduleStats,
  };
}
