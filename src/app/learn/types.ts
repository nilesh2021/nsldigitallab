import { LucideIcon } from "lucide-react";

export interface Course {
  title: string;
  description: string;
  lessons: string;
  level: string;
  color: string;
  link?: string;
  icon: LucideIcon;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Skill {
  title: string;
}

export interface RoadmapStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface LearningModule {
  n: string;
  slug: string;
  title: string;
  description: string;
  topics: string[];
  miniProject: string;
  /** Present when this module has a published lesson page. */
  contentHref?: string;
}

export type LessonBlock =
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "term"; term: string; meaning: string }
  | { type: "code"; title?: string; code: string }
  | { type: "tip"; text: string }
  | { type: "exercise"; title?: string; steps: string[] }
  | {
      type: "related";
      href: string;
      kicker?: string;
      title: string;
      text: string;
      ctaLabel?: string;
    }
  | {
      type: "check";
      question: string;
      options: { id: string; label: string; correct: boolean }[];
      explain: string;
    };

export interface ModuleLesson {
  slug: string;
  title: string;
  minutes: string;
  summary: string;
  blocks: LessonBlock[];
}

export interface ModuleMiniProject {
  title: string;
  goal: string;
  steps: string[];
  starterCode: string;
  /** Label above the starter template. Defaults to the React paste hint. */
  starterLabel?: string;
  doneWhen: string[];
}

export interface ModuleIntro {
  headline: string;
  body: string[];
  youWillLearn: string[];
}

export interface ModuleNeighbor {
  href: string;
  label: string;
}

export interface ModuleSummary {
  headline: string;
  body: string[];
  recap: string[];
}

export interface PublishedModule {
  pathSlug: string;
  pathTitle: string;
  moduleSlug: string;
  moduleNumber: string;
  title: string;
  estimatedTime: string;
  intro: ModuleIntro;
  lessons: ModuleLesson[];
  miniProject: ModuleMiniProject;
  summary?: ModuleSummary;
  knowledgeCheck?: Extract<LessonBlock, { type: "check" }>;
  prevModule?: ModuleNeighbor;
  nextModule?: ModuleNeighbor;
  seo: LearningPathSeo;
  syllabusHref: string;
}

export interface LearningPathDownload {
  label: string;
  href: string;
}

export interface LearningPathSeo {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

export interface LearningPath {
  slug: string;
  title: string;
  eyebrow: string;
  tagline: string;
  description: string;
  level: string;
  estimatedTime: string;
  moduleLabel: string;
  prerequisites: string[];
  outcomes: string[];
  linkedInUrl: string;
  download: LearningPathDownload;
  seo: LearningPathSeo;
  icon: LucideIcon;
  modules: LearningModule[];
}