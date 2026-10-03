import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestCareerDevelopmentPlatforms: CareerArticleContent = {
  slug: "best-career-development-platforms",
  faqs: [
    {
      question: "What counts as a career development platform?",
      answer:
        "Anything that helps you learn, present yourself, or communicate professionally over time—not just a single job application.",
    },
    {
      question: "How many platforms do I need?",
      answer:
        "Many people use one learning source, one resume tool, and one writing or tutoring resource. Add more when you have a clear recurring need.",
    },
    {
      question: "Should learning or resume tools come first?",
      answer:
        "If you are actively applying, fix resume and messaging first. If you are upskilling for a pivot, balance learning with small portfolio or project outputs.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Long-term career growth mixes learning, self-presentation, and communication.
          This page compares Coursera, Udemy, Preply, Grammarly, Rezi, and Resume.io
          by the job each does in your stack—not as a single bundled product.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Quick summary",
      body: (
        <p>
          Learn on Coursera or Udemy, practice spoken English on Preply, polish writing
          with Grammarly, and maintain resumes with Rezi or Resume.io. Mix based on
          your stage—see also{" "}
          <InlineArticleLink
            to={careerArticlePath("best-job-search-tools")}
            variant="light"
          >
            best tools for job seekers
          </InlineArticleLink>
          .
        </p>
      ),
    },
    {
      kind: "comparisonTable",
      heading: "Platform comparison at a glance",
      columns: [
        { key: "coursera", label: "Coursera" },
        { key: "udemy", label: "Udemy" },
        { key: "preply", label: "Preply" },
        { key: "grammarly", label: "Grammarly" },
        { key: "rezi", label: "Rezi" },
        { key: "resumeIo", label: "Resume.io" },
      ],
      columnProducts: {
        coursera: "coursera",
        udemy: "udemy",
        preply: "preply",
        grammarly: "grammarly",
        rezi: "rezi",
        resumeIo: "resumeIo",
      },
      rows: [
        {
          label: "Primary role",
          cells: [
            "Structured learning",
            "On-demand courses",
            "Live tutoring",
            "Writing quality",
            "ATS-oriented resumes",
            "Template resumes & letters",
          ],
        },
        {
          label: "Best for",
          cells: [
            "Certificates and programs",
            "Single-skill sprints",
            "Spoken practice",
            "Emails and applications",
            "Tailoring to postings",
            "Visual templates",
          ],
        },
        {
          label: "Typical use cadence",
          cells: [
            "Weeks to months",
            "Hours to weeks",
            "Weekly sessions",
            "Daily while writing",
            "Per application cycle",
            "Per application cycle",
          ],
        },
      ],
    },
    {
      kind: "products",
      heading: "Platforms in this guide",
      productIds: ["coursera", "udemy", "preply", "grammarly", "rezi", "resumeIo"],
    },
    {
      kind: "bestFor",
      heading: "Choose by growth goal",
      items: [
        {
          title: "Skill credentials",
          description: "Coursera or Udemy—match courses to target roles.",
        },
        {
          title: "Interview and workplace English",
          description: "Preply plus communication courses.",
        },
        {
          title: "Written professional presence",
          description: "Grammarly for polish; builders for resume structure.",
        },
        {
          title: "Frequent job applications",
          description: "Rezi or Resume.io with a consistent update routine.",
        },
      ],
    },
    {
      kind: "chooseIf",
      items: [
        {
          title: "Choose Coursera if:",
          bullets: ["You want longer structured programs", "Institution-backed tracks matter to you"],
        },
        {
          title: "Choose Udemy if:",
          bullets: ["You want affordable, topic-specific courses", "You learn best from video on your own schedule"],
        },
        {
          title: "Choose Preply if:",
          bullets: ["Live conversation practice is your bottleneck"],
        },
        {
          title: "Choose Grammarly if:",
          bullets: ["You write daily to clients, recruiters, or teams"],
        },
        {
          title: "Choose Rezi if:",
          bullets: ["ATS alignment and tailoring drive your applications"],
        },
        {
          title: "Choose Resume.io if:",
          bullets: ["Templates and cover letters in one editor matter most"],
        },
      ],
    },
    {
      kind: "prose",
      heading: "Related guides",
      body: (
        <p>
          Dive deeper in{" "}
          <InlineArticleLink
            to={careerArticlePath("best-career-courses")}
            variant="light"
          >
            best career courses
          </InlineArticleLink>
          ,{" "}
          <InlineArticleLink
            to={careerArticlePath("best-online-courses-for-job-seekers")}
            variant="light"
          >
            best online courses for job seekers
          </InlineArticleLink>
          , and{" "}
          <InlineArticleLink
            to={careerArticlePath("best-resume-builders")}
            variant="light"
          >
            best resume builders
          </InlineArticleLink>
          .
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Final recommendation",
      body: (
        <p>
          Build a small stack: one learning path, one resume home, one writing or
          speaking helper. Revisit tools when your goal shifts from job search to
          promotion, freelancing, or a career change.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Explore platforms",
      buttons: [
        { label: "Explore Courses", productId: "coursera" },
        { label: "Try Grammarly", productId: "grammarly" },
        { label: "Try Rezi", productId: "rezi" },
      ],
    },
  ],
};
