import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const reziVsResumeIo: CareerArticleContent = {
  slug: "rezi-vs-resume-io",
  faqs: [
    {
      question: "Can I use both Rezi and Resume.io?",
      answer:
        "Yes. Some people draft in one tool and polish layout in another. Keep one primary file for applications to avoid version confusion.",
    },
    {
      question: "Which is better for ATS?",
      answer:
        "Rezi is often chosen specifically for ATS-oriented workflows. Resume.io can work with simple templates if you format carefully.",
    },
    {
      question: "Which is easier for beginners?",
      answer:
        "Resume.io’s template-first flow feels familiar quickly. Rezi is still approachable if you follow sections in order.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Rezi and Resume.io are both popular resume builders, but they optimize for
          different workflows. This page compares them on use case, AI help, ATS
          focus, templates, and cover letters—without picking a universal winner.
        </p>
      ),
    },
    {
      kind: "comparisonTable",
      id: "recommended",
      heading: "Quick comparison table",
      columns: [
        { key: "rezi", label: "Rezi" },
        { key: "resumeIo", label: "Resume.io" },
      ],
      columnProducts: {
        rezi: "rezi",
        resumeIo: "resumeIo",
      },
      rows: [
        {
          label: "Best use case",
          cells: [
            "Tailoring resumes to job posts and ATS clarity",
            "Template-led resumes and cover letters",
          ],
        },
        {
          label: "Ease of use",
          cells: ["Section-based editor", "Form + live template preview"],
        },
        {
          label: "AI assistance",
          cells: ["Central to positioning", "Available; confirm on site"],
        },
        {
          label: "ATS focus",
          cells: ["Strong emphasis", "Depends on template simplicity"],
        },
        {
          label: "Resume templates",
          cells: ["Functional layouts", "Broad visual variety"],
        },
        {
          label: "Resume customization",
          cells: ["Keyword and content tailoring", "Template and section edits"],
        },
        {
          label: "Cover-letter support",
          cells: ["Check product on site", "Integrated editor"],
        },
        {
          label: "Beginner friendliness",
          cells: ["Good with guided sections", "Very approachable"],
        },
        {
          label: "Job-specific optimization",
          cells: ["Often a primary reason to choose Rezi", "Mostly manual tailoring"],
        },
      ],
    },
    {
      kind: "chooseIf",
      items: [
        {
          title: "Choose Rezi if:",
          bullets: [
            "ATS optimization is a priority",
            "You want AI-assisted resume writing",
            "You want job-specific resume customization",
          ],
        },
        {
          title: "Choose Resume.io if:",
          bullets: [
            "You want a guided resume-building experience",
            "You value professionally designed templates",
            "You want resume and cover-letter tools together",
          ],
        },
      ],
    },
    {
      kind: "prose",
      heading: "Deep dives",
      body: (
        <p>
          Read the full{" "}
          <InlineArticleLink
            to={careerArticlePath("rezi-review")}
            variant="light"
          >
            Rezi review
          </InlineArticleLink>{" "}
          and{" "}
          <InlineArticleLink
            to={careerArticlePath("resume-io-review")}
            variant="light"
          >
            Resume.io review
          </InlineArticleLink>
          , or start from{" "}
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
          Pick Rezi when tailoring and ATS alignment drive your process. Pick
          Resume.io when templates and cover letters matter most. Test both free
          tiers before you pay.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Visit official sites",
      buttons: [
        { label: "Try Rezi", productId: "rezi" },
        { label: "Visit Resume.io", productId: "resumeIo" },
      ],
    },
  ],
};
