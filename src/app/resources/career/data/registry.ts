import type { CareerArticleMeta, CareerArticleSlug, HubCategory } from "./types";

export const CAREER_ARTICLE_SLUGS: CareerArticleSlug[] = [
  "best-resume-builders",
  "best-ai-resume-builders",
  "best-ats-resume-tools",
  "best-resume-writing-services",
  "rezi-review",
  "resume-io-review",
  "zety-review",
  "rezi-vs-resume-io",
  "best-career-courses",
  "best-job-search-tools",
];

export const CAREER_ARTICLE_ROUTES = CAREER_ARTICLE_SLUGS.map(
  (slug) => `/resources/career/${slug}`,
);

const meta: Record<CareerArticleSlug, CareerArticleMeta> = {
  "best-resume-builders": {
    slug: "best-resume-builders",
    layout: "roundup",
    hubCategory: "resume-tools",
    badge: "Resume tools",
    h1: "Best Resume Builders",
    dek:
      "Compare Rezi, Resume.io, and Zety for structure, guidance, and ATS-friendly resumes—without hype or invented ratings.",
    seoTitle: "Best Resume Builders (Rezi, Resume.io, Zety) | NSL Digital Lab",
    seoDescription:
      "Compare the best resume builders for job seekers. See how Rezi, Resume.io, and Zety differ on ATS focus, templates, and guided writing.",
    seoKeywords:
      "best resume builders, resume builder comparison, Rezi, Resume.io, Zety, ATS resume",
    relatedSlugs: [
      "rezi-review",
      "resume-io-review",
      "zety-review",
      "rezi-vs-resume-io",
    ],
    heroAffiliate: { productId: "rezi", label: "Try Rezi" },
    heroCta: { label: "Compare tools", href: "#recommended" },
  },
  "best-ai-resume-builders": {
    slug: "best-ai-resume-builders",
    layout: "roundup",
    hubCategory: "resume-tools",
    badge: "AI resume tools",
    h1: "Best AI Resume Builders",
    dek:
      "What AI resume builders actually help with—writing assistance, keywords, and tailoring—and when they are worth using.",
    seoTitle: "Best AI Resume Builders | NSL Digital Lab",
    seoDescription:
      "Learn what AI resume builders do, who they suit, and how Rezi, Resume.io, and Zety compare for AI-assisted resume writing.",
    seoKeywords:
      "AI resume builder, AI resume writing, Rezi AI, ATS resume AI",
    relatedSlugs: ["rezi-review", "best-ats-resume-tools", "best-resume-builders"],
    heroAffiliate: { productId: "rezi", label: "Try Rezi" },
    heroCta: { label: "See recommendations", href: "#recommended" },
  },
  "best-ats-resume-tools": {
    slug: "best-ats-resume-tools",
    layout: "roundup",
    hubCategory: "ats-tools",
    badge: "ATS",
    h1: "Best ATS Resume Tools",
    dek:
      "Understand applicant tracking systems, common resume mistakes, and tools that help you improve compatibility before you apply.",
    seoTitle: "Best ATS Resume Tools | NSL Digital Lab",
    seoDescription:
      "Learn what ATS means, why formatting matters, and which tools—including Rezi—help you improve ATS-friendly resumes.",
    seoKeywords:
      "ATS resume tools, ATS optimization, applicant tracking system resume",
    relatedSlugs: ["rezi-review", "best-resume-builders"],
    heroAffiliate: { productId: "rezi", label: "Try Rezi" },
    heroCta: { label: "ATS checklist", href: "#checklist" },
  },
  "best-resume-writing-services": {
    slug: "best-resume-writing-services",
    layout: "roundup",
    hubCategory: "writing-services",
    badge: "Professional help",
    h1: "Best Professional Resume Writing Services",
    dek:
      "When a resume builder is enough—and when hiring a writer through a service like TopResume may be the better fit.",
    seoTitle: "Best Resume Writing Services | NSL Digital Lab",
    seoDescription:
      "Compare resume builders vs professional writers. Overview of TopResume and when paid resume help makes sense.",
    seoKeywords:
      "resume writing service, professional resume writer, TopResume",
    relatedSlugs: ["best-job-search-tools"],
    heroAffiliate: {
      productId: "topResume",
      label: "Get Professional Resume Help",
    },
    heroCta: { label: "Compare alternatives", href: "#topresume" },
  },
  "rezi-review": {
    slug: "rezi-review",
    layout: "review",
    hubCategory: "resume-tools",
    badge: "Review",
    h1: "Rezi Review",
    dek:
      "An honest look at Rezi for ATS-focused resumes, AI-assisted writing, and who should consider it.",
    seoTitle: "Rezi Review (Features, Pros & Cons) | NSL Digital Lab",
    seoDescription:
      "Rezi review covering features, ATS resume creation, AI writing help, pros and cons, and alternatives—without invented pricing or ratings.",
    seoKeywords: "Rezi review, Rezi resume builder, Rezi ATS",
    relatedSlugs: [
      "rezi-vs-resume-io",
      "best-ai-resume-builders",
      "best-ats-resume-tools",
    ],
    heroAffiliate: { productId: "rezi", label: "Try Rezi" },
    heroCta: { label: "See features", href: "#try-rezi" },
  },
  "resume-io-review": {
    slug: "resume-io-review",
    layout: "review",
    hubCategory: "resume-tools",
    badge: "Review",
    h1: "Resume.io Review",
    dek:
      "How Resume.io handles templates, cover letters, and the day-to-day resume-building experience.",
    seoTitle: "Resume.io Review | NSL Digital Lab",
    seoDescription:
      "Resume.io review: templates, cover letters, pros and cons, best use cases, and how it compares to Rezi.",
    seoKeywords: "Resume.io review, Resume.io templates",
    relatedSlugs: ["rezi-vs-resume-io", "best-resume-builders"],
    heroAffiliate: { productId: "resumeIo", label: "Explore Resume.io" },
    heroCta: { label: "See templates", href: "#visit" },
  },
  "zety-review": {
    slug: "zety-review",
    layout: "review",
    hubCategory: "resume-tools",
    badge: "Review",
    h1: "Zety Review",
    dek:
      "Zety’s guided resume flow, writing assistance, and cover-letter tools—plus who benefits most.",
    seoTitle: "Zety Review | NSL Digital Lab",
    seoDescription:
      "Zety review covering guided resume creation, cover letters, pros and cons, alternatives, and comparison with Resume.io.",
    seoKeywords: "Zety review, Zety resume builder",
    relatedSlugs: ["best-resume-builders", "resume-io-review"],
    heroAffiliate: { productId: "zety", label: "Visit Zety" },
    heroCta: { label: "See pros and cons", href: "#visit" },
  },
  "rezi-vs-resume-io": {
    slug: "rezi-vs-resume-io",
    layout: "comparison",
    hubCategory: "resume-tools",
    badge: "Comparison",
    h1: "Rezi vs Resume.io",
    dek:
      "Side-by-side comparison on ATS focus, AI help, templates, cover letters, and beginner friendliness.",
    seoTitle: "Rezi vs Resume.io Comparison | NSL Digital Lab",
    seoDescription:
      "Compare Rezi and Resume.io for ATS optimization, AI assistance, templates, and ease of use. Choose the better fit for your job search.",
    seoKeywords: "Rezi vs Resume.io, resume builder comparison",
    relatedSlugs: ["rezi-review", "resume-io-review", "best-resume-builders"],
    heroAffiliate: { productId: "rezi", label: "Try Rezi" },
    heroCta: { label: "Compare features", href: "#recommended" },
  },
  "best-career-courses": {
    slug: "best-career-courses",
    layout: "roundup",
    hubCategory: "career-courses",
    badge: "Learning",
    h1: "Best Career Courses",
    dek:
      "How Coursera and Udemy fit into a job search—by skill area—not a list of invented course titles.",
    seoTitle: "Best Career Courses (Coursera & Udemy) | NSL Digital Lab",
    seoDescription:
      "Compare Coursera and Udemy for career skills in UI/UX, web development, marketing, communication, and more.",
    seoKeywords:
      "career courses, Coursera, Udemy, online learning job seekers",
    relatedSlugs: ["best-job-search-tools"],
    heroAffiliate: { productId: "coursera", label: "Explore Courses" },
    heroCta: { label: "Compare platforms", href: "#recommended" },
  },
  "best-job-search-tools": {
    slug: "best-job-search-tools",
    layout: "roundup",
    hubCategory: "job-search-tools",
    badge: "Job search",
    h1: "Best Tools for Job Seekers",
    dek:
      "A practical roundup of resume tools, writing help, learning platforms, and communication apps for an end-to-end job search toolkit.",
    seoTitle: "Best Job Search Tools | NSL Digital Lab",
    seoDescription:
      "Resume builders, TopResume, Grammarly, Coursera, Udemy, Preply, and more—organized by what you need at each stage of your search.",
    seoKeywords:
      "job search tools, resume tools, career tools, job seeker toolkit",
    relatedSlugs: [
      "best-resume-builders",
      "best-ats-resume-tools",
      "best-resume-writing-services",
      "best-career-courses",
      "rezi-review",
      "resume-io-review",
      "zety-review",
      "rezi-vs-resume-io",
      "best-ai-resume-builders",
    ],
    heroAffiliate: { productId: "rezi", label: "Try Rezi" },
    heroCta: { label: "See toolkit", href: "#toolkit" },
  },
};

export function getCareerArticleMeta(
  slug: string,
): CareerArticleMeta | undefined {
  return meta[slug as CareerArticleSlug];
}

export function getArticlesByHubCategory(
  category: HubCategory,
): CareerArticleMeta[] {
  return CAREER_ARTICLE_SLUGS.map((s) => meta[s]).filter(
    (a) => a.hubCategory === category,
  );
}

export function getAllCareerArticleMeta(): CareerArticleMeta[] {
  return CAREER_ARTICLE_SLUGS.map((s) => meta[s]);
}

export { meta as careerArticleMeta };
