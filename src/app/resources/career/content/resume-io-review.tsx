import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const resumeIoReview: CareerArticleContent = {
  slug: "resume-io-review",
  faqs: [
    {
      question: "Does Resume.io include cover letters?",
      answer:
        "Resume.io offers cover letter tooling in its editor. Confirm current features on their site.",
    },
    {
      question: "Can I change templates later?",
      answer:
        "Most builders let you switch templates, but you may need to recheck spacing and line breaks after a switch.",
    },
    {
      question: "Is Resume.io good for ATS?",
      answer:
        "Standard templates can work for ATS if you keep layout simple. See our ATS tools guide for formatting habits.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "What is Resume.io?",
      body: (
        <p>
          Resume.io is a web-based resume and cover letter editor built around
          templates and a guided section flow. It targets job seekers who want a
          polished look without designing from scratch.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Who should use it?",
      body: (
        <p>
          Choose Resume.io if templates and visual structure matter more than
          heavy AI tailoring. It pairs well with manual editing and a clear master
          resume.
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
      heading: "Resume-building experience",
      body: (
        <p>
          You move through sections—contact, summary, experience, education—and
          fill fields while previewing layout. The flow is straightforward for
          anyone who has used form-based editors before.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Templates",
      body: (
        <p>
          Multiple layouts help you match a conservative or modern tone. Pick a
          simple template for ATS-heavy applications; save bolder designs for
          direct outreach when appropriate.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Cover-letter functionality",
      body: (
        <p>
          You can draft cover letters alongside your resume in the same ecosystem,
          which keeps formatting consistent. Still customize each letter to the
          employer.
        </p>
      ),
    },
    {
      kind: "prosCons",
      productName: "Resume.io",
      pros: [
        "Strong template library for quick visual polish",
        "Integrated cover letter editor",
        "Clear section-by-section workflow",
      ],
      cons: [
        "Downloads often tied to paid plans—confirm on site",
        "Less emphasis on ATS keyword tooling than some competitors",
        "Templates still need manual tailoring per job",
      ],
    },
    {
      kind: "prose",
      heading: "Best use cases",
      body: (
        <p>
          First resume, design-conscious applicants, and anyone who wants resume
          and cover letter in one tool. Compare with{" "}
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
      heading: "Alternatives",
      body: (
        <p>
          Rezi and Zety cover overlapping needs. See{" "}
          <InlineArticleLink
            to={careerArticlePath("rezi-review")}
            variant="light"
          >
            Rezi review
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
      heading: "Resume.io vs Rezi",
      body: (
        <p>
          Resume.io prioritizes templates and editor experience; Rezi prioritizes
          ATS-oriented tailoring. Read{" "}
          <InlineArticleLink
            to={careerArticlePath("rezi-vs-resume-io")}
            variant="light"
          >
            Rezi vs Resume.io
          </InlineArticleLink>{" "}
          for a full comparison.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Final recommendation",
      body: (
        <p>
          Resume.io is a solid pick when you want a template-led workflow and cover
          letters in one place. Try the editor, export a sample, and confirm plan
          details on the official site before paying.
          {/* TODO: verify Resume.io pricing on official site. */}
        </p>
      ),
    },
    {
      kind: "ctas",
      id: "visit",
      buttons: [{ label: "Visit Resume.io", productId: "resumeIo" }],
    },
  ],
  closingCta: { label: "Visit Resume.io", productId: "resumeIo" },
};
