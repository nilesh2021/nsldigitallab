import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestInterviewPreparationTools: CareerArticleContent = {
  slug: "best-interview-preparation-tools",
  faqs: [
    {
      question: "What should I prepare before an interview?",
      answer:
        "Research the role and company, prepare stories that match common questions, and practice aloud. Tools support practice—they do not replace preparation time.",
    },
    {
      question: "Are online courses enough for interview prep?",
      answer:
        "Courses teach frameworks and communication skills. Pair them with mock answers and, if needed, live conversation practice.",
    },
    {
      question: "When is a tutor worth it?",
      answer:
        "Live tutoring helps when English fluency or confidence in spoken answers is a bottleneck. Self-paced courses help for structure and vocabulary.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Interview preparation blends research, storytelling, and communication practice.
          This roundup groups online courses, learning platforms, and English support—so
          you can focus on the gap that matters for your next round.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Quick summary",
      body: (
        <p>
          Use Coursera or Udemy for structured interview and communication courses. Use
          Preply for one-on-one speaking practice. Keep resume and application quality
          high with guides from{" "}
          <InlineArticleLink
            to={careerArticlePath("best-job-search-tools")}
            variant="light"
          >
            best tools for job seekers
          </InlineArticleLink>
          .
        </p>
      ),
    },
    {
      kind: "products",
      heading: "Recommended platforms",
      intro:
        "Search each platform for interview prep, communication, and presentation topics; read syllabi before you enroll.",
      productIds: ["coursera", "udemy", "preply"],
    },
    {
      kind: "bestFor",
      heading: "Best for by preparation type",
      items: [
        {
          title: "Online courses",
          description:
            "Coursera and Udemy host interview skills, behavioral questions, and professional communication—pick courses with practice exercises.",
        },
        {
          title: "Communication skills",
          description:
            "Presentation, active listening, and concise answers transfer across industries.",
        },
        {
          title: "English for interviews",
          description:
            "Preply tutors can drill common questions and correct phrasing in real time.",
        },
        {
          title: "Role-specific depth",
          description:
            "Technical interviews may need separate practice (portfolios, coding, case studies) beyond general prep courses.",
        },
      ],
    },
    {
      kind: "chooseIf",
      items: [
        {
          title: "Choose Coursera if:",
          bullets: [
            "You want multi-week structure from institutions or brands",
            "Certificates matter for your personal learning goals",
          ],
        },
        {
          title: "Choose Udemy if:",
          bullets: [
            "You want a single focused course on your own schedule",
            "You prefer browsing many short instructor-led options",
          ],
        },
        {
          title: "Choose Preply if:",
          bullets: [
            "You need live speaking practice for interviews",
            "Feedback on pronunciation and phrasing is a priority",
          ],
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
            to={careerArticlePath("best-english-speaking-courses")}
            variant="light"
          >
            best English speaking courses
          </InlineArticleLink>{" "}
          and{" "}
          <InlineArticleLink
            to={careerArticlePath("best-online-courses-for-job-seekers")}
            variant="light"
          >
            best online courses for job seekers
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
          Combine one learning resource with repeated spoken practice. Courses give
          frameworks; tutoring and mock answers build confidence. Do not skip company
          research and question lists—they cost nothing but time.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Start exploring",
      buttons: [
        { label: "Explore Courses", productId: "coursera" },
        { label: "View Career Courses", productId: "udemy" },
        { label: "Find a Tutor", productId: "preply" },
      ],
    },
  ],
};
