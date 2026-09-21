export type CatalogLesson = {
  id: string;
  pathSlug: string;
  moduleSlug: string;
  moduleNumber: string;
  lessonSlug: string;
  lessonIndex: number;
  lessonCount: number;
  title: string;
  href: string;
};

export type CatalogModule = {
  slug: string;
  number: string;
  title: string;
  href: string;
  lessonIds: string[];
};

export type CourseCatalog = {
  pathSlug: string;
  moduleCount: number;
  modules: CatalogModule[];
  lessons: CatalogLesson[];
};

export type LearningProgressSnapshot = {
  completedLessonIds: string[];
};
