import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestResumeBuilders: CareerArticleContent = {
  slug: "best-resume-builders",
  faqs: [
    {
      question: "Do I need a resume builder?",
      answer:
        "Not always. If you already have a clean, readable resume, a builder may still help you reorganize sections or tailor wording. Builders are most useful when you are starting from scratch or switching fields.",
    },
    {
      question: "Are resume builders ATS-friendly?",
      answer:
        "Many builders export standard layouts, but ATS compatibility also depends on how you format headings, file type, and keywords. Use a simple structure and mirror terms from the job description in natural language.",
    },
    {
      question: "Can I use more than one builder?",
      answer:
        "Yes. Some people draft in one tool and polish in another. Pick one primary file to send employers so your versions stay consistent.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <>
          <p>
            Resume builders help you turn experience into a structured document
            faster than starting in a blank word processor. The three tools below—
            Rezi, Resume.io, and Zety—are common choices for job seekers who want
            templates, guidance, or ATS-oriented formatting.
          </p>
          <p>
            This guide compares them neutrally. For deeper dives, see our{" "}
            <InlineArticleLink
              to={careerArticlePath("rezi-review")}
              variant="light"
            >
              Rezi review
            </InlineArticleLink>
            ,{" "}
            <InlineArticleLink
              to={careerArticlePath("resume-io-review")}
              variant="light"
            >
              Resume.io review
            </InlineArticleLink>
            , and{" "}
            <InlineArticleLink
              to={careerArticlePath("zety-review")}
              variant="light"
            >
              Zety review
            </InlineArticleLink>
            .
          </p>
        </>
      ),
    },
    {
      kind: "quickRecommendation",
      title: "Best for ATS-focused resumes",
      productId: "rezi",
      description:
        "If keyword alignment and parser-friendly structure matter for your applications, start with Rezi and compare your draft to other builders.",
      reviewSlug: "rezi-review",
      ctaLabel: "Try Rezi",
    },
    {
      kind: "checklistPromo",
    },
    {
      kind: "prose",
      heading: "Who should use a resume builder?",
      body: (
        <p>
          Builders suit students, career changers, and experienced professionals
          who want a clear layout, section prompts, or help aligning skills to a
          posting. They are less necessary if you already work with a career coach
          or writer and only need light edits.
        </p>
      ),
    },
    {
      kind: "products",
      heading: "Recommended resume builders",
      intro:
        "Confirm features and export options on each site before you pay for a plan.",
      productIds: ["rezi", "resumeIo", "zety"],
    },
    {
      kind: "comparisonTable",
      heading: "Comparison table",
      intro:
        "Pricing changes by region and plan. Check each site for current options.",
      columns: [
        { key: "rezi", label: "Rezi" },
        { key: "resumeIo", label: "Resume.io" },
        { key: "zety", label: "Zety" },
      ],
      columnProducts: {
        rezi: "rezi",
        resumeIo: "resumeIo",
        zety: "zety",
      },
      rows: [
        {
          label: "Best for",
          cells: [
            "ATS-oriented structure and keywords",
            "Templates and visual polish",
            "Guided prompts and examples",
          ],
        },
        {
          label: "Cover letters",
          cells: [
            "Available; confirm on site",
            "Built into editor",
            "Built into editor",
          ],
        },
        {
          label: "Pricing model",
          cells: [
            "Free tier with paid exports/features",
            "Free start; paid download",
            "Free build; paid download",
          ],
        },
      ],
    },
    {
      kind: "bestFor",
      heading: "Best picks by goal",
      items: [
        {
          title: "Best for ATS optimization",
          description:
            "Rezi is often chosen when keyword alignment and parser-friendly layout are the priority. Pair it with our ATS checklist on the best ATS resume tools page.",
        },
        {
          title: "Best for beginners",
          description:
            "Zety’s step-by-step prompts and example phrases can reduce blank-page anxiety for first-time resume writers.",
        },
        {
          title: "Best for guided resume creation",
          description:
            "Resume.io balances template choice with a straightforward section flow, which helps if you want structure without heavy AI wording.",
        },
      ],
    },
    {
      kind: "prose",
      heading: "How to choose a resume builder",
      body: (
        <>
          <p>
            Start with your bottleneck: layout, wording, or tailoring to one job.
            Try the free tier of one tool, export a draft, and read it aloud. Compare
            head-to-head in{" "}
            <InlineArticleLink
              to={careerArticlePath("rezi-vs-resume-io")}
              variant="light"
            >
              Rezi vs Resume.io
            </InlineArticleLink>
            ,{" "}
            <InlineArticleLink
              to={careerArticlePath("rezi-vs-zety")}
              variant="light"
            >
              Rezi vs Zety
            </InlineArticleLink>
            , and{" "}
            <InlineArticleLink
              to={careerArticlePath("resume-io-vs-zety")}
              variant="light"
            >
              Resume.io vs Zety
            </InlineArticleLink>
            . For a writer-led option, see our{" "}
            <InlineArticleLink
              to={careerArticlePath("topresume-review")}
              variant="light"
            >
              TopResume review
            </InlineArticleLink>
            . {/* TODO: verify pricing/features on official sites before updating plan details. */}
          </p>
        </>
      ),
    },
    {
      kind: "prose",
      heading: "Final recommendation",
      body: (
        <p>
          Use Rezi when ATS alignment matters most, Resume.io when templates and
          speed matter most, and Zety when you want the most hand-holding while you
          write. None of these replace proofreading or tailoring each application.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Explore builders",
      buttons: [
        { label: "Try Rezi", productId: "rezi" },
        { label: "Visit Resume.io", productId: "resumeIo" },
        { label: "Visit Zety", productId: "zety" },
      ],
    },
  ],
};
