import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestWritingToolsForJobSeekers: CareerArticleContent = {
  slug: "best-writing-tools-for-job-seekers",
  faqs: [
    {
      question: "What should I proofread before applying?",
      answer:
        "Resumes, cover letters, LinkedIn summaries, outreach emails, and thank-you notes—all should be clear and free of obvious errors.",
    },
    {
      question: "Does Grammarly work on resumes?",
      answer:
        "Grammarly can check text you paste or type in supported apps. Resume builders may have their own editors—use both where it helps.",
    },
    {
      question: "Do I need a resume builder and a writing tool?",
      answer:
        "Many people use a builder for structure and a writing assistant for polish. They solve different problems.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Job applications are written communication. This roundup covers grammar,
          clarity, proofreading, and professional tone—with Grammarly as a central
          writing assistant and resume platforms when you need structured documents.
        </p>
      ),
    },
    {
      kind: "quickRecommendation",
      title: "Quick recommendation",
      productId: "grammarly",
      description:
        "Use Grammarly to polish cover letters, emails, and profile text. Pair with Rezi, Resume.io, or Zety for resume and letter structure.",
      ctaLabel: "Try Grammarly",
    },
    {
      kind: "products",
      heading: "Writing and resume tools",
      intro: "Confirm which apps and browsers each tool supports on their official sites.",
      productIds: ["grammarly", "rezi", "resumeIo", "zety"],
    },
    {
      kind: "prosCons",
      productName: "Grammarly",
      pros: [
        "Helps catch grammar, clarity, and tone issues in application writing",
        "Useful for emails and LinkedIn messages beyond the resume",
        "Works alongside documents you already drafted",
      ],
      cons: [
        "Does not replace a resume builder’s layout and sections",
        "Suggestions should be reviewed—not every change fits professional tone",
      ],
    },
    {
      kind: "bestFor",
      heading: "Best for by task",
      items: [
        {
          title: "Grammar and proofreading",
          description: "Grammarly and similar assistants before you hit send.",
        },
        {
          title: "Resume and cover letter structure",
          description: "Rezi, Resume.io, and Zety—see our cover letter guide for letters.",
        },
        {
          title: "Professional tone",
          description: "Edit AI or template text so it sounds like you, not generic marketing copy.",
        },
        {
          title: "Application follow-ups",
          description: "Short thank-you and status emails benefit from the same proofreading habit.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "Related guides",
      body: (
        <p>
          See{" "}
          <InlineArticleLink
            to={careerArticlePath("best-cover-letter-tools")}
            variant="light"
          >
            best cover letter tools
          </InlineArticleLink>{" "}
          and the full{" "}
          <InlineArticleLink
            to={careerArticlePath("best-job-search-tools")}
            variant="light"
          >
            job seeker toolkit
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
          Draft in a builder or doc, proofread with a writing assistant, then read aloud
          once. Keep a short checklist for every application: facts correct, employer
          name right, no leftover template placeholders.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Explore tools",
      buttons: [
        { label: "Try Grammarly", productId: "grammarly" },
        { label: "Try Rezi", productId: "rezi" },
        { label: "Explore Resume.io", productId: "resumeIo" },
      ],
    },
  ],
};
