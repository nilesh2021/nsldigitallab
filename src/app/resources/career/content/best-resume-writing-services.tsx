import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestResumeWritingServices: CareerArticleContent = {
  slug: "best-resume-writing-services",
  faqs: [
    {
      question: "Is a resume writing service worth it?",
      answer:
        "It can be worth it when you lack time, are changing careers, or need a neutral writer to reorganize a long career story. It is less necessary if you only need light edits.",
    },
    {
      question: "How is TopResume different from a builder?",
      answer:
        "TopResume pairs you with a writer for a rewrite service. Builders are self-serve editors you control line by line.",
    },
    {
      question: "Will a writer know my industry?",
      answer:
        "Reputable services ask about your field and goals. You should still review drafts for accuracy and ask for revisions when something is wrong.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Resume builder vs professional resume writer",
      body: (
        <p>
          Builders are faster and cheaper for people who can describe their own
          experience. Writers help when you need structure, positioning, or language
          you are struggling to produce on your own.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Who should use a professional writing service",
      body: (
        <p>
          Consider a service for executive-level roles, major career pivots, or when
          English is not your first language and you want a polished draft. Students
          and early-career applicants often do well with a builder first.
        </p>
      ),
    },
    {
      kind: "products",
      heading: "TopResume overview",
      intro:
        "TopResume is a widely known resume writing service. Confirm packages and turnaround on their site.",
      productIds: ["topResume"],
    },
    {
      kind: "prose",
      heading: "Benefits of professional resume review",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Outside perspective on what to cut or emphasize</li>
          <li>Consistent tone and formatting across sections</li>
          <li>Less time spent staring at a blank page</li>
        </ul>
      ),
    },
    {
      kind: "prose",
      heading: "When paying for resume help makes sense",
      body: (
        <p>
          Paying makes sense when the cost is small relative to the role you are
          targeting and when you have verified the service’s process and revision
          policy. It makes less sense if you have not yet tried a structured builder
          from our{" "}
          <InlineArticleLink
            to={careerArticlePath("best-resume-builders")}
            variant="light"
          >
            best resume builders
          </InlineArticleLink>{" "}
          guide.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Alternatives",
      body: (
        <p>
          Self-serve options include Rezi, Resume.io, and Zety. For a full toolkit
          view, see{" "}
          <InlineArticleLink
            to={careerArticlePath("best-job-search-tools")}
            variant="light"
          >
            best tools for job seekers
          </InlineArticleLink>
          . {/* TODO: verify TopResume package details on official site. */}
        </p>
      ),
    },
    {
      kind: "ctas",
      id: "topresume",
      heading: "Professional resume help",
      buttons: [{ label: "View TopResume", productId: "topResume" }],
    },
  ],
  closingCta: { label: "View TopResume", productId: "topResume" },
};
