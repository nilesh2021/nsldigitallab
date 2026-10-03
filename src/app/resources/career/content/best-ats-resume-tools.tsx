import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestAtsResumeTools: CareerArticleContent = {
  slug: "best-ats-resume-tools",
  faqs: [
    {
      question: "Will ATS reject my resume automatically?",
      answer:
        "ATS software parses and ranks resumes; rejection is usually a recruiter decision based on fit, not a mysterious auto-ban. Formatting problems can still make your content harder to read in the system.",
    },
    {
      question: "Should I use a creative template?",
      answer:
        "Creative layouts can be fine for portfolios or in-person networking. For online applications, a simple single-column layout is safer.",
    },
    {
      question: "Do I need a paid ATS tool?",
      answer:
        "A checklist and a careful read of the job post go a long way. Paid tools can help if you apply at high volume and want structured feedback.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "What ATS means",
      body: (
        <p>
          Applicant Tracking System (ATS) software helps employers collect,
          search, and filter applications. Your resume is stored as text and
          fields recruiters can query—role titles, skills, education, and so on.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Why ATS optimization matters",
      body: (
        <p>
          If your resume uses unclear headings, text inside images, or missing
          keywords for the role, recruiters may not see your strongest experience
          when they search the system. Optimization is about clarity and relevance,
          not tricking software.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Common ATS resume mistakes",
      body: (
        <ul className="list-disc space-y-2 pl-5">
          <li>Using tables or columns that scramble reading order</li>
          <li>Putting contact details only in a header graphic</li>
          <li>Listing skills without context in the experience section</li>
          <li>Sending the wrong file type when the employer specifies one</li>
          <li>Copy-pasting the job description instead of using your own words</li>
        </ul>
      ),
    },
    {
      kind: "checklistPromo",
    },
    {
      kind: "products",
      heading: "Recommended ATS-focused tools",
      intro:
        "Rezi is featured here for its ATS-oriented workflow; compare with other builders on our roundup pages.",
      productIds: ["rezi", "resumeIo", "zety"],
    },
    {
      kind: "prose",
      heading: "Rezi as a featured solution",
      body: (
        <p>
          Many job seekers use Rezi when they want help aligning bullets and skills
          to a posting. Read the full{" "}
          <InlineArticleLink
            to={careerArticlePath("rezi-review")}
            variant="light"
          >
            Rezi review
          </InlineArticleLink>{" "}
          before you sign up. {/* TODO: verify current Rezi ATS features on official site. */}
        </p>
      ),
    },
    {
      kind: "checklist",
      heading: "ATS resume checklist",
      items: [
        "Use standard section headings such as Experience, Education, and Skills.",
        "Prefer a single-column layout for online applications.",
        "Mirror important terms from the job post in your own phrasing.",
        "Save as PDF or DOCX unless the employer requests another format.",
        "Spell out acronyms once, then use the short form if needed.",
        "Proofread dates, company names, and links.",
      ],
    },
    {
      kind: "comparisonTable",
      heading: "Tool comparison for ATS workflows",
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
          label: "ATS focus",
          cells: ["Central to product positioning", "Standard templates", "Guided content"],
        },
        {
          label: "Keyword help",
          cells: ["Often used for job-specific tailoring", "Manual editing", "Examples and prompts"],
        },
        {
          label: "When to choose",
          cells: ["High-volume tailored applications", "Visual template priority", "First resume draft"],
        },
      ],
    },
    {
      kind: "ctas",
      heading: "Improve your resume",
      intro: "Use these links to open the official sites and confirm current plans.",
      buttons: [
        { label: "Check Your Resume", productId: "rezi" },
        { label: "Improve Your Resume", productId: "rezi" },
        { label: "Try Rezi", productId: "rezi" },
      ],
    },
  ],
  closingCta: { label: "Try Rezi", productId: "rezi" },
};
