import type { CareerArticleContent, CareerArticleSlug } from "../data/types";
import { bestAiResumeBuilders } from "./best-ai-resume-builders";
import { bestAtsResumeTools } from "./best-ats-resume-tools";
import { bestCareerCourses } from "./best-career-courses";
import { bestJobSearchTools } from "./best-job-search-tools";
import { bestResumeBuilders } from "./best-resume-builders";
import { bestResumeWritingServices } from "./best-resume-writing-services";
import { reziReview } from "./rezi-review";
import { reziVsResumeIo } from "./rezi-vs-resume-io";
import { resumeIoReview } from "./resume-io-review";
import { zetyReview } from "./zety-review";

const articles: Record<CareerArticleSlug, CareerArticleContent> = {
  "best-resume-builders": bestResumeBuilders,
  "best-ai-resume-builders": bestAiResumeBuilders,
  "best-ats-resume-tools": bestAtsResumeTools,
  "best-resume-writing-services": bestResumeWritingServices,
  "rezi-review": reziReview,
  "resume-io-review": resumeIoReview,
  "zety-review": zetyReview,
  "rezi-vs-resume-io": reziVsResumeIo,
  "best-career-courses": bestCareerCourses,
  "best-job-search-tools": bestJobSearchTools,
};

export function getCareerArticleContent(
  slug: string,
): CareerArticleContent | undefined {
  return articles[slug as CareerArticleSlug];
}
