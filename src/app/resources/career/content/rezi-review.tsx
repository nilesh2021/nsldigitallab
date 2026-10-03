import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const reziReview: CareerArticleContent = {
  slug: "rezi-review",
  faqs: [
    {
      question: "Is Rezi only for tech jobs?",
      answer:
        "No. Any role that uses keyword screening can benefit from clear structure, though Rezi is often marketed toward ATS-aware job seekers.",
    },
    {
      question: "Can I export my resume?",
      answer:
        "Rezi supports exports; available formats and limits depend on your plan. Confirm on the official site.",
    },
    {
      question: "How does Rezi compare to Resume.io?",
      answer:
        "See our dedicated comparison in Rezi vs Resume.io for a side-by-side view.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "What is Rezi?",
      body: (
        <p>
          Rezi is an online resume builder that combines editing tools with
          AI-assisted drafting and an emphasis on ATS-friendly resumes. It is aimed
          at job seekers who apply online and want help aligning content to postings.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Who is Rezi best for?",
      body: (
        <p>
          Rezi fits applicants who tailor resumes per job, care about keyword
          alignment, and want suggestions while they edit. It may be less ideal if
          you only need a one-page template with minimal guidance.
        </p>
      ),
    },
    {
      kind: "checklistPromo",
    },
    {
      kind: "chooseIf",
      items: [
        {
          title: "Choose Rezi if:",
          bullets: [
            "ATS optimization is a priority for your applications",
            "You want AI-assisted resume writing",
            "You want job-specific resume customization",
          ],
        },
      ],
    },
    {
      kind: "prose",
      heading: "Main features",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Resume editor with section-based structure</li>
          <li>AI-assisted wording and content suggestions</li>
          <li>Workflow oriented toward online applications</li>
          <li>Export options—confirm formats on site</li>
        </ul>
      ),
    },
    {
      kind: "prose",
      heading: "ATS-focused resume creation",
      body: (
        <p>
          Rezi is commonly chosen for ATS-oriented workflows. Pair it with the
          checklist on{" "}
          <InlineArticleLink
            to={careerArticlePath("best-ats-resume-tools")}
            variant="light"
          >
            best ATS resume tools
          </InlineArticleLink>
          . {/* TODO: verify current ATS feature set on Rezi’s official site. */}
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "AI-assisted writing",
      body: (
        <p>
          AI features can speed up bullet drafts. Treat output as a starting point:
          verify facts, remove generic phrases, and keep your voice.
        </p>
      ),
    },
    {
      kind: "prosCons",
      heading: "Pros and cons",
      productName: "Rezi",
      pros: [
        "Useful when tailoring resumes to specific job posts",
        "Structured editor reduces formatting guesswork",
        "Popular choice in AI resume builder roundups",
      ],
      cons: [
        "Full value may require a paid plan—confirm on site",
        "AI suggestions still need careful editing",
        "Not a substitute for a human writer if you need a full rewrite",
      ],
    },
    {
      kind: "prose",
      heading: "Ease of use",
      body: (
        <p>
          The interface is browser-based. If you are comfortable editing sections
          in order, you can produce a draft quickly. Allow time to learn export and
          plan settings.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Best use cases",
      body: (
        <p>
          High-volume applications, career pivots where keywords matter, and
          candidates comparing builders in{" "}
          <InlineArticleLink
            to={careerArticlePath("best-ai-resume-builders")}
            variant="light"
          >
            best AI resume builders
          </InlineArticleLink>
          .
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Rezi alternatives",
      body: (
        <p>
          Resume.io and Zety are common alternatives. Read{" "}
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
          .
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Rezi vs Resume.io summary",
      body: (
        <p>
          Rezi leans toward ATS and AI tailoring; Resume.io leans toward templates
          and a visual editor. Full comparison:{" "}
          <InlineArticleLink
            to={careerArticlePath("rezi-vs-resume-io")}
            variant="light"
          >
            Rezi vs Resume.io
          </InlineArticleLink>
          .
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Final verdict",
      body: (
        <p>
          Rezi is worth trying if online applications and keyword alignment are
          central to your search. Use the free tier first, export a draft, and
          compare it with another builder before you pay.
        </p>
      ),
    },
    {
      kind: "ctas",
      id: "try-rezi",
      heading: "Try Rezi",
      intro: "Open the official site to confirm plans and features.",
      buttons: [{ label: "Try Rezi", productId: "rezi" }],
    },
  ],
  closingCta: { label: "Try Rezi", productId: "rezi" },
};
