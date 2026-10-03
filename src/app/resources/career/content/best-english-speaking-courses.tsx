import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestEnglishSpeakingCourses: CareerArticleContent = {
  slug: "best-english-speaking-courses",
  faqs: [
    {
      question: "What type of English practice helps interviews most?",
      answer:
        "Short spoken answers to common questions, feedback on clarity, and professional vocabulary for your industry beat passive listening alone.",
    },
    {
      question: "Is Preply only for language learners?",
      answer:
        "Preply connects you with tutors for conversation practice. Many job seekers use it for interview English and workplace communication.",
    },
    {
      question: "Can courses replace speaking practice?",
      answer:
        "Courses teach grammar and frameworks; you still need to speak answers aloud or with a partner to build interview confidence.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Professional English shows up in interviews, emails, meetings, and networking.
          This guide focuses on interview communication, workplace English, and
          confidence—with Preply for live practice and course platforms for structured
          learning.
        </p>
      ),
    },
    {
      kind: "quickRecommendation",
      title: "Quick recommendation",
      productId: "preply",
      description:
        "Use Preply when you need live feedback on spoken answers. Pair with Coursera or Udemy courses on business English and presentation skills.",
      ctaLabel: "Find a Tutor",
    },
    {
      kind: "products",
      heading: "Recommended resources",
      intro: "Search for business English, presentation, and communication topics on each platform.",
      productIds: ["preply", "coursera", "udemy"],
    },
    {
      kind: "bestFor",
      heading: "Best for by goal",
      items: [
        {
          title: "Interview communication",
          description:
            "Practice common questions aloud; tutors can correct phrasing and help you sound concise.",
        },
        {
          title: "Professional English",
          description:
            "Email tone, meeting language, and small-talk norms vary by industry—choose tutors or courses aligned with your field.",
        },
        {
          title: "Workplace communication",
          description:
            "Courses on presentations and cross-cultural communication complement daily work practice.",
        },
        {
          title: "Confidence building",
          description:
            "Regular short sessions often beat cramming before a single interview.",
        },
      ],
    },
    {
      kind: "chooseIf",
      items: [
        {
          title: "Choose Preply if:",
          bullets: [
            "You want one-on-one speaking practice on your schedule",
            "Interview answers need real-time correction",
          ],
        },
        {
          title: "Choose Coursera or Udemy if:",
          bullets: [
            "You want grammar, writing, or presentation frameworks first",
            "You prefer self-paced video lessons before live practice",
          ],
        },
      ],
    },
    {
      kind: "prose",
      heading: "Related guides",
      body: (
        <p>
          Combine with{" "}
          <InlineArticleLink
            to={careerArticlePath("best-interview-preparation-tools")}
            variant="light"
          >
            best interview preparation tools
          </InlineArticleLink>{" "}
          and{" "}
          <InlineArticleLink
            to={careerArticlePath("best-career-courses")}
            variant="light"
          >
            best career courses
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
          Match practice to your bottleneck: structure from courses, fluency from
          conversation. Record yourself answering three common questions weekly—even
          without a tutor—to track progress.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Explore platforms",
      buttons: [
        { label: "Find a Tutor", productId: "preply" },
        { label: "Explore Courses", productId: "coursera" },
        { label: "View Career Courses", productId: "udemy" },
      ],
    },
  ],
};
