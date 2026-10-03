import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const reziVsZety: CareerArticleContent = {
  slug: "rezi-vs-zety",
  faqs: [
    {
      question: "Is Rezi or Zety better for ATS?",
      answer:
        "Rezi is often chosen specifically for ATS-oriented workflows. Zety can produce ATS-friendly resumes if you keep layouts simple and wording clear—confirm template behavior on each site.",
    },
    {
      question: "Which is better for first-time resume writers?",
      answer:
        "Zety emphasizes step-by-step prompts and examples. Rezi is approachable when you follow sections but may feel more tailored to applicants who already know what to include.",
    },
    {
      question: "Do both offer cover letters?",
      answer:
        "Both brands advertise resume and cover letter tools. Compare the current editor on each official site before you subscribe.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Rezi and Zety both help you build resumes online, but they emphasize
          different strengths—ATS alignment and AI-assisted tailoring versus guided
          writing with prompts and examples. This comparison covers workflow, templates,
          ease of use, and who each tool fits best.
        </p>
      ),
    },
    {
      kind: "quickRecommendation",
      title: "Quick recommendation",
      productId: "rezi",
      description:
        "Choose Rezi when ATS focus and job-specific tailoring drive your search. Choose Zety when you want heavy section-by-section guidance while you write.",
      reviewSlug: "rezi-review",
      ctaLabel: "Try Rezi",
    },
    {
      kind: "comparisonTable",
      id: "recommended",
      heading: "Quick comparison table",
      columns: [
        { key: "rezi", label: "Rezi" },
        { key: "zety", label: "Zety" },
      ],
      columnProducts: {
        rezi: "rezi",
        zety: "zety",
      },
      rows: [
        {
          label: "Best use case",
          cells: [
            "Tailoring resumes to postings and ATS clarity",
            "Guided first drafts with prompts and examples",
          ],
        },
        {
          label: "Resume creation workflow",
          cells: ["Section editor with tailoring focus", "Question-led, step-by-step flow"],
        },
        {
          label: "AI assistance",
          cells: ["Central to positioning", "Suggestions and examples; confirm on site"],
        },
        {
          label: "ATS focus",
          cells: ["Strong emphasis", "Depends on template and formatting choices"],
        },
        {
          label: "Resume templates",
          cells: ["Functional, application-oriented layouts", "Wide template library"],
        },
        {
          label: "Ease of use",
          cells: ["Clear sections; learning curve for tailoring", "Very approachable for beginners"],
        },
        {
          label: "Cover-letter support",
          cells: ["Confirm on official site", "Integrated cover letter builder"],
        },
      ],
    },
    {
      kind: "prosCons",
      heading: "Rezi pros and cons",
      productName: "Rezi",
      pros: [
        "Positioned for ATS-aware job applications",
        "AI-assisted drafting for bullets and summaries",
        "Useful when you apply to many similar roles with tweaks",
      ],
      cons: [
        "Less hand-holding than prompt-heavy builders",
        "Export and plan details vary—confirm on site",
      ],
    },
    {
      kind: "prosCons",
      productName: "Zety",
      pros: [
        "Strong guidance for writers who want examples per section",
        "Resume and cover letter in one workflow",
        "Templates and prompts reduce blank-page anxiety",
      ],
      cons: [
        "You still must verify every suggested phrase",
        "ATS outcomes depend on how you format the final file",
      ],
    },
    {
      kind: "chooseIf",
      items: [
        {
          title: "Choose Rezi if:",
          bullets: [
            "ATS optimization and keyword alignment are priorities",
            "You want AI help tailoring content to job posts",
            "You apply online frequently and iterate per role",
          ],
        },
        {
          title: "Choose Zety if:",
          bullets: [
            "You want guided writing with prompts and samples",
            "You are building your first resume or cover letter",
            "You prefer a template-first, question-led experience",
          ],
        },
      ],
    },
    {
      kind: "prose",
      heading: "Related guides",
      body: (
        <p>
          See also{" "}
          <InlineArticleLink
            to={careerArticlePath("rezi-vs-resume-io")}
            variant="light"
          >
            Rezi vs Resume.io
          </InlineArticleLink>
          ,{" "}
          <InlineArticleLink
            to={careerArticlePath("resume-io-vs-zety")}
            variant="light"
          >
            Resume.io vs Zety
          </InlineArticleLink>
          , and our{" "}
          <InlineArticleLink
            to={careerArticlePath("best-resume-builders")}
            variant="light"
          >
            best resume builders
          </InlineArticleLink>{" "}
          roundup.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Final recommendation",
      body: (
        <p>
          There is no universal winner. Pick Rezi when tailoring and ATS alignment
          matter most; pick Zety when guided writing and cover letters are your main
          needs. Use free trials on both sites before you pay.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Visit official sites",
      buttons: [
        { label: "Try Rezi", productId: "rezi", reviewPath: careerArticlePath("rezi-review") },
        { label: "Visit Zety", productId: "zety", reviewPath: careerArticlePath("zety-review") },
      ],
    },
  ],
};
