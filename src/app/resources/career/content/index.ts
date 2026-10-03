import type { CareerArticleContent, CareerArticleSlug } from "../data/types";
import { bestAiResumeBuilders } from "./best-ai-resume-builders";
import { bestAtsResumeTools } from "./best-ats-resume-tools";
import { bestCareerCourses } from "./best-career-courses";
import { bestCareerDevelopmentPlatforms } from "./best-career-development-platforms";
import { bestCoverLetterTools } from "./best-cover-letter-tools";
import { bestEnglishSpeakingCourses } from "./best-english-speaking-courses";
import { bestInterviewPreparationTools } from "./best-interview-preparation-tools";
import { bestJobSearchTools } from "./best-job-search-tools";
import { bestOnlineCoursesForJobSeekers } from "./best-online-courses-for-job-seekers";
import { bestResumeBuilders } from "./best-resume-builders";
import { bestResumeWritingServices } from "./best-resume-writing-services";
import { bestToolsForFreelancers } from "./best-tools-for-freelancers";
import { bestWritingToolsForJobSeekers } from "./best-writing-tools-for-job-seekers";
import { reziReview } from "./rezi-review";
import { reziVsResumeIo } from "./rezi-vs-resume-io";
import { reziVsZety } from "./rezi-vs-zety";
import { resumeIoReview } from "./resume-io-review";
import { resumeIoVsZety } from "./resume-io-vs-zety";
import { topresumeReview } from "./topresume-review";
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
  "rezi-vs-zety": reziVsZety,
  "resume-io-vs-zety": resumeIoVsZety,
  "topresume-review": topresumeReview,
  "best-cover-letter-tools": bestCoverLetterTools,
  "best-interview-preparation-tools": bestInterviewPreparationTools,
  "best-online-courses-for-job-seekers": bestOnlineCoursesForJobSeekers,
  "best-english-speaking-courses": bestEnglishSpeakingCourses,
  "best-writing-tools-for-job-seekers": bestWritingToolsForJobSeekers,
  "best-tools-for-freelancers": bestToolsForFreelancers,
  "best-career-development-platforms": bestCareerDevelopmentPlatforms,
  "best-career-courses": bestCareerCourses,
  "best-job-search-tools": bestJobSearchTools,
};

export function getCareerArticleContent(
  slug: string,
): CareerArticleContent | undefined {
  return articles[slug as CareerArticleSlug];
}
