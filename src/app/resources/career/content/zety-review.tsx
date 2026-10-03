import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const zetyReview: CareerArticleContent = {
  slug: "zety-review",
  faqs: [
    {
      question: "Is Zety good for first-time resume writers?",
      answer:
        "Zety’s prompts and examples are designed for people who want guidance at each step, which can help first-time writers.",
    },
    {
      question: "Does Zety write the resume for me?",
      answer:
        "Zety suggests text and structure; you still enter your experience and should edit every line for accuracy.",
    },
    {
      question: "How does Zety compare to Resume.io?",
      answer:
        "Both are template-led builders; Zety often emphasizes examples and prompts, while Resume.io emphasizes template variety.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "What is Zety?",
      body: (
        <p>
          Zety is a resume and cover letter builder that walks you through each
          section with prompts and sample phrasing. It is aimed at applicants who
          want structure while they write.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Who it is best for",
      body: (
        <p>
          Students, career changers, and anyone intimidated by a blank document.
          Less ideal if you only need a minimal one-page layout with no guidance.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Guided resume creation",
      body: (
        <p>
          Zety asks questions per section and offers examples you can adapt. That
          reduces guesswork about what belongs in a summary or bullet list.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Resume-writing assistance",
      body: (
        <p>
          Suggested phrases speed up drafting. Replace generic lines with specifics
          from your own projects and metrics where you can.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Cover-letter tools",
      body: (
        <p>
          Cover letter flows mirror the resume editor, which helps keep tone
          consistent across application materials.
        </p>
      ),
    },
    {
      kind: "prosCons",
      productName: "Zety",
      pros: [
        "Step-by-step guidance for each section",
        "Example wording reduces blank-page stress",
        "Cover letter support in the same product",
      ],
      cons: [
        "Suggested text can sound generic without editing",
        "Paid plans often required for downloads—confirm on site",
        "Less specialized ATS tooling than some competitors",
      ],
    },
    {
      kind: "prose",
      heading: "Alternatives",
      body: (
        <p>
          Compare{" "}
          <InlineArticleLink
            to={careerArticlePath("resume-io-review")}
            variant="light"
          >
            Resume.io
          </InlineArticleLink>{" "}
          and{" "}
          <InlineArticleLink
            to={careerArticlePath("rezi-review")}
            variant="light"
          >
            Rezi
          </InlineArticleLink>{" "}
          via{" "}
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
      heading: "Zety vs Resume.io",
      body: (
        <p>
          Both offer templates and cover letters. Zety leans harder on prompts and
          examples; Resume.io leans on template selection and visual editing. Try
          both free tiers if you are unsure.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Final recommendation",
      body: (
        <p>
          Zety is a practical choice when you want the most hand-holding while you
          write. Edit every suggestion, keep one master resume, and confirm export
          options on Zety’s site before purchasing.
        </p>
      ),
    },
    {
      kind: "ctas",
      id: "visit",
      buttons: [{ label: "Visit Zety", productId: "zety" }],
    },
  ],
  closingCta: { label: "Visit Zety", productId: "zety" },
};
