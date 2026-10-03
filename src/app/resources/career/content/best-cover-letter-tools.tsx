import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestCoverLetterTools: CareerArticleContent = {
  slug: "best-cover-letter-tools",
  faqs: [
    {
      question: "Do I always need a cover letter?",
      answer:
        "Some employers require one; others skip them. When a letter is optional, a short, specific note can still help if it adds context your resume does not.",
    },
    {
      question: "Should I use AI for cover letters?",
      answer:
        "AI can draft structure and phrasing. You must edit for accuracy, tone, and specifics about the employer and role.",
    },
    {
      question: "Can Grammarly replace a cover letter builder?",
      answer:
        "Grammarly polishes text you already wrote. Builders help you structure the letter alongside your resume.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Cover letters work best when they are short, specific, and error-free. This
          guide covers resume builders with letter editors plus writing assistants for
          proofreading—so you can choose AI-assisted drafting, templates, or both.
        </p>
      ),
    },
    {
      kind: "quickRecommendation",
      title: "Quick recommendation",
      productId: "resumeIo",
      description:
        "Start with Resume.io or Zety when you want resume and cover letter in one workflow. Add Grammarly to proofread before you send.",
      reviewSlug: "resume-io-review",
      ctaLabel: "Explore Resume.io",
    },
    {
      kind: "products",
      heading: "Recommended tools",
      intro: "Confirm current cover letter features on each official site.",
      productIds: ["rezi", "resumeIo", "zety", "grammarly"],
    },
    {
      kind: "bestFor",
      heading: "Best for by need",
      items: [
        {
          title: "Integrated resume + letter",
          description:
            "Resume.io and Zety pair cover letters with resume templates in one account.",
        },
        {
          title: "Tailored applications",
          description:
            "Rezi may help when you align resume and letter content to a posting—verify letter tools on site.",
        },
        {
          title: "Proofreading and clarity",
          description:
            "Grammarly catches grammar and tone issues in letters, emails, and LinkedIn messages.",
        },
        {
          title: "AI-assisted first drafts",
          description:
            "Use builder or AI suggestions, then rewrite openings and examples so they are truly yours.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Choosing the right tool",
      body: (
        <p>
          Pick a builder when you need structure and exports. Pick Grammarly when you
          already have a draft. For resumes, see{" "}
          <InlineArticleLink
            to={careerArticlePath("best-resume-builders")}
            variant="light"
          >
            best resume builders
          </InlineArticleLink>{" "}
          and{" "}
          <InlineArticleLink
            to={careerArticlePath("best-writing-tools-for-job-seekers")}
            variant="light"
          >
            best writing tools for job seekers
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
          Use one builder for resume and letter consistency, run every letter through a
          writing assistant, and keep a master template you customize per employer—not a
          generic AI paragraph.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Explore official sites",
      buttons: [
        { label: "Explore Resume.io", productId: "resumeIo" },
        { label: "Visit Zety", productId: "zety" },
        { label: "Try Grammarly", productId: "grammarly" },
      ],
    },
  ],
};
