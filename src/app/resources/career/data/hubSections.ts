import { CHECKLIST_PAGE_PATH } from "./atsChecklistContent";
import { careerArticlePath, type CareerArticleSlug } from "./types";

type HubLink =
  | { label: string; slug: CareerArticleSlug }
  | { label: string; path: string };

export const HUB_TOPIC_SECTIONS: { title: string; links: HubLink[] }[] = [
  {
    title: "Resume tools",
    links: [
      { label: "Best resume builders", slug: "best-resume-builders" },
      { label: "Best AI resume builders", slug: "best-ai-resume-builders" },
      { label: "Rezi review", slug: "rezi-review" },
      { label: "Resume.io review", slug: "resume-io-review" },
      { label: "Zety review", slug: "zety-review" },
      { label: "Rezi vs Resume.io", slug: "rezi-vs-resume-io" },
    ],
  },
  {
    title: "ATS tools",
    links: [
      { label: "Free ATS resume checklist", path: CHECKLIST_PAGE_PATH },
      { label: "Best ATS resume tools", slug: "best-ats-resume-tools" },
    ],
  },
  {
    title: "Resume writing services",
    links: [
      {
        label: "Best professional resume writing services",
        slug: "best-resume-writing-services",
      },
    ],
  },
  {
    title: "Career courses",
    links: [{ label: "Best career courses", slug: "best-career-courses" }],
  },
  {
    title: "Job seeker tools",
    links: [
      { label: "Best tools for job seekers", slug: "best-job-search-tools" },
    ],
  },
];

export function hubLinkPath(link: HubLink): string {
  if ("path" in link) {
    return link.path;
  }
  return careerArticlePath(link.slug);
}
