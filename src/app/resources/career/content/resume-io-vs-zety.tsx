import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const resumeIoVsZety: CareerArticleContent = {
  slug: "resume-io-vs-zety",
  faqs: [
    {
      question: "Which is easier for beginners?",
      answer:
        "Both are beginner-friendly. Resume.io leads with live template preview; Zety leans on questions and example phrasing. Try each free tier to see which flow you prefer.",
    },
    {
      question: "Which has better cover letter tools?",
      answer:
        "Both advertise cover letter editors. Compare the current workflow and export options on each official site.",
    },
    {
      question: "Can I switch from one to the other?",
      answer:
        "Yes. Export or copy your content, then rebuild in the other tool. Keep one master version to avoid conflicting files.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Resume.io and Zety are popular template-led resume builders with cover-letter
          support. This page compares beginner friendliness, guided writing, templates,
          customization, and typical use cases—so you can pick the better fit without
          hype.
        </p>
      ),
    },
    {
      kind: "quickRecommendation",
      title: "Quick recommendation",
      productId: "resumeIo",
      description:
        "Resume.io suits people who want template preview and a polished visual layout quickly. Zety suits writers who want prompts and sample text at every step.",
      reviewSlug: "resume-io-review",
      ctaLabel: "Explore Resume.io",
    },
    {
      kind: "comparisonTable",
      id: "recommended",
      heading: "Quick comparison table",
      columns: [
        { key: "resumeIo", label: "Resume.io" },
        { key: "zety", label: "Zety" },
      ],
      columnProducts: {
        resumeIo: "resumeIo",
        zety: "zety",
      },
      rows: [
        {
          label: "Beginner friendliness",
          cells: ["Form + live template preview", "Question-led sections with examples"],
        },
        {
          label: "Guided writing",
          cells: ["Section forms with clear structure", "Heavy use of prompts and sample phrases"],
        },
        {
          label: "Resume templates",
          cells: ["Broad visual variety", "Large template selection"],
        },
        {
          label: "Cover-letter support",
          cells: ["Integrated editor", "Cover letter builder alongside resume"],
        },
        {
          label: "Customization",
          cells: ["Template, colors, and section edits", "Template plus editable suggested text"],
        },
        {
          label: "Best use case",
          cells: ["Fast, visual resume and letter in one sitting", "First drafts when you need writing cues"],
        },
      ],
    },
    {
      kind: "chooseIf",
      items: [
        {
          title: "Choose Resume.io if:",
          bullets: [
            "You want to see layout changes as you type",
            "Resume and cover letter together matter",
            "You care about template variety and a clean export",
          ],
        },
        {
          title: "Choose Zety if:",
          bullets: [
            "You want example wording for every section",
            "You are new to resumes and cover letters",
            "You like a wizard-style, prompt-driven flow",
          ],
        },
      ],
    },
    {
      kind: "prose",
      heading: "Deep dives",
      body: (
        <p>
          Read the{" "}
          <InlineArticleLink
            to={careerArticlePath("resume-io-review")}
            variant="light"
          >
            Resume.io review
          </InlineArticleLink>{" "}
          and{" "}
          <InlineArticleLink
            to={careerArticlePath("zety-review")}
            variant="light"
          >
            Zety review
          </InlineArticleLink>
          , or compare Rezi in{" "}
          <InlineArticleLink
            to={careerArticlePath("rezi-vs-zety")}
            variant="light"
          >
            Rezi vs Zety
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
          Choose Resume.io when visual templates and an integrated cover letter editor
          are your priority. Choose Zety when guided examples and prompts matter more
          than layout experimentation. Test both before committing to a paid plan.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Visit official sites",
      buttons: [
        {
          label: "Explore Resume.io",
          productId: "resumeIo",
          reviewPath: careerArticlePath("resume-io-review"),
        },
        { label: "Visit Zety", productId: "zety", reviewPath: careerArticlePath("zety-review") },
      ],
    },
  ],
};
