import { PublishedModule } from "../types";
import { CatalogLesson, CatalogModule, CourseCatalog } from "./types";
import { lessonId } from "./storage";

export function buildCourseCatalog(
  modules: PublishedModule[],
): CourseCatalog {
  const first = modules[0];
  if (!first) {
    return { pathSlug: "", moduleCount: 0, modules: [], lessons: [] };
  }

  const catalogModules: CatalogModule[] = [];
  const lessons: CatalogLesson[] = [];

  for (const module of modules) {
    const moduleLessons: CatalogLesson[] = module.lessons.map(
      (lesson, index) => ({
        id: lessonId(module.moduleSlug, lesson.slug),
        pathSlug: module.pathSlug,
        moduleSlug: module.moduleSlug,
        moduleNumber: module.moduleNumber,
        lessonSlug: lesson.slug,
        lessonIndex: index + 1,
        lessonCount: module.lessons.length,
        title: lesson.title,
        href: `${module.seo.canonical}?lesson=${encodeURIComponent(lesson.slug)}`,
      }),
    );

    catalogModules.push({
      slug: module.moduleSlug,
      number: module.moduleNumber,
      title: module.title,
      href: module.seo.canonical,
      lessonIds: moduleLessons.map((lesson) => lesson.id),
    });
    lessons.push(...moduleLessons);
  }

  return {
    pathSlug: first.pathSlug,
    moduleCount: catalogModules.length,
    modules: catalogModules,
    lessons,
  };
}
