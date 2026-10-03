import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestJobSearchTools: CareerArticleContent = {
  slug: "best-job-search-tools",
  faqs: [
    {
      question: "How many tools do I need?",
      answer:
        "Most job seekers do well with one resume builder, one writing helper, and optionally one learning or tutoring resource. Add more only when you have a clear gap.",
    },
    {
      question: "Should I pay for every tool?",
      answer:
        "Start with free tiers. Pay when a tool saves you meaningful time or unlocks exports you actually use.",
    },
    {
      question: "Where should I start?",
      answer:
        "Fix your resume first, then applications and interviews. Use our career hub to pick guides by stage.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          A job search touches resumes, writing, learning, and sometimes language
          practice. This roundup groups trusted tools by job—without claiming one
          perfect stack for everyone.
        </p>
      ),
    },
    {
      kind: "checklistPromo",
    },
    {
      kind: "products",
      heading: "Resume creation",
      intro: "Self-serve builders for drafts and tailoring.",
      productIds: ["rezi", "resumeIo", "zety"],
    },
    {
      kind: "prose",
      heading: "Resume guides",
      body: (
        <p>
          Compare options in{" "}
          <InlineArticleLink
            to={careerArticlePath("best-resume-builders")}
            variant="light"
          >
            best resume builders
          </InlineArticleLink>
          ,{" "}
          <InlineArticleLink
            to={careerArticlePath("best-ai-resume-builders")}
            variant="light"
          >
            best AI resume builders
          </InlineArticleLink>
          , and{" "}
          <InlineArticleLink
            to={careerArticlePath("best-ats-resume-tools")}
            variant="light"
          >
            best ATS resume tools
          </InlineArticleLink>
          .
        </p>
      ),
    },
    {
      kind: "products",
      heading: "Professional resume help",
      productIds: ["topResume"],
    },
    {
      kind: "prose",
      heading: "Writing and communication",
      body: (
        <p>
          Polish cover letters, LinkedIn messages, and thank-you notes before you
          send them.
        </p>
      ),
    },
    {
      kind: "products",
      heading: "Writing tools",
      productIds: ["grammarly"],
    },
    {
      kind: "products",
      heading: "Learning platforms",
      productIds: ["coursera", "udemy"],
    },
    {
      kind: "prose",
      heading: "Career courses guide",
      body: (
        <p>
          See{" "}
          <InlineArticleLink
            to={careerArticlePath("best-career-courses")}
            variant="light"
          >
            best career courses
          </InlineArticleLink>{" "}
          for how Coursera and Udemy compare by topic.
        </p>
      ),
    },
    {
      kind: "products",
      heading: "English communication",
      intro: "One-on-one practice for interviews and workplace English.",
      productIds: ["preply"],
    },
    {
      kind: "comparisonTable",
      heading: "Comparison table",
      intro: "High-level view—visit each site for current features.",
      columns: [
        { key: "type", label: "Category" },
        { key: "tools", label: "Tools" },
        { key: "use", label: "Typical use" },
      ],
      rows: [
        {
          label: "Resume builders",
          cells: ["Resume creation", "Rezi, Resume.io, Zety", "Draft and tailor resumes"],
        },
        {
          label: "Writing service",
          cells: ["Professional help", "TopResume", "Writer-led rewrite"],
        },
        {
          label: "Writing assistant",
          cells: ["Writing", "Grammarly", "Grammar and clarity"],
        },
        {
          label: "Learning",
          cells: ["Courses", "Coursera, Udemy", "Skill building"],
        },
        {
          label: "Tutoring",
          cells: ["Communication", "Preply", "Live language practice"],
        },
      ],
    },
    {
      kind: "prose",
      heading: "Recommended toolkit",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          <li>
            One resume builder (start with{" "}
            <InlineArticleLink
              to={careerArticlePath("rezi-review")}
              variant="light"
            >
              Rezi
            </InlineArticleLink>{" "}
            or{" "}
            <InlineArticleLink
              to={careerArticlePath("resume-io-review")}
              variant="light"
            >
              Resume.io
            </InlineArticleLink>
            )
          </li>
          <li>Grammarly or similar for application writing</li>
          <li>
            Coursera or Udemy when you need a structured skill upgrade
          </li>
          <li>Preply if interview English needs live practice</li>
          <li>
            TopResume only if you want a human writer instead of DIY editing
          </li>
        </ul>
      ),
    },
    {
      kind: "prose",
      heading: "Reviews and comparisons",
      body: (
        <p>
          Read{" "}
          <InlineArticleLink
            to={careerArticlePath("zety-review")}
            variant="light"
          >
            Zety review
          </InlineArticleLink>{" "}
          and{" "}
          <InlineArticleLink
            to={careerArticlePath("rezi-vs-resume-io")}
            variant="light"
          >
            Rezi vs Resume.io
          </InlineArticleLink>{" "}
          before you commit to one builder.
        </p>
      ),
    },
  ],
};
