import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestOnlineCoursesForJobSeekers: CareerArticleContent = {
  slug: "best-online-courses-for-job-seekers",
  faqs: [
    {
      question: "Which skills should job seekers prioritize?",
      answer:
        "Prioritize gaps between your target job descriptions and your current profile—communication, domain skills, or tools listed in postings.",
    },
    {
      question: "Coursera or Udemy for job seekers?",
      answer:
        "Coursera often fits longer structured paths; Udemy fits picking one skill at a time. Compare syllabi and reviews on each platform.",
    },
    {
      question: "Should I list courses on my resume?",
      answer:
        "List in-progress or completed learning when it is relevant to the role. Pair courses with projects or portfolio work when possible.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Online courses can close skill gaps while you apply. This guide organizes
          common job-seeker categories—communication, marketing, UI/UX, web development,
          AI, project management, and business—and how Coursera and Udemy typically fit
          each area.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Quick summary",
      body: (
        <p>
          Browse Coursera for structured programs and Udemy for focused video courses.
          Cross-check our{" "}
          <InlineArticleLink
            to={careerArticlePath("best-career-courses")}
            variant="light"
          >
            best career courses
          </InlineArticleLink>{" "}
          overview before you buy.
        </p>
      ),
    },
    {
      kind: "bestFor",
      heading: "Categories to explore",
      items: [
        {
          title: "Communication",
          description:
            "Business writing, presentations, and interview communication support almost every role.",
        },
        {
          title: "Digital marketing",
          description:
            "SEO, content, analytics, and paid media basics align with many marketing and growth roles.",
        },
        {
          title: "UI/UX",
          description:
            "Research, wireframing, and prototyping skills pair with portfolio projects.",
        },
        {
          title: "Web development",
          description:
            "Front-end and full-stack fundamentals—combine courses with small shipped projects.",
        },
        {
          title: "AI",
          description:
            "Workflow and prompting skills complement domain expertise; verify course dates and tools covered.",
        },
        {
          title: "Project management",
          description:
            "Planning, agile basics, and stakeholder communication help coordinator and PM paths.",
        },
        {
          title: "Business skills",
          description:
            "Finance literacy, operations, and strategy introductions support business and analyst tracks.",
        },
      ],
    },
    {
      kind: "comparisonTable",
      heading: "Coursera vs Udemy for job seekers",
      columns: [
        { key: "coursera", label: "Coursera" },
        { key: "udemy", label: "Udemy" },
      ],
      columnProducts: {
        coursera: "coursera",
        udemy: "udemy",
      },
      rows: [
        {
          label: "Typical format",
          cells: ["Multi-week programs and specializations", "Single-topic on-demand courses"],
        },
        {
          label: "Best when",
          cells: ["You want a structured path with milestones", "You want one skill quickly"],
        },
        {
          label: "Credentials",
          cells: ["Certificates on many tracks; confirm on site", "Completion certificates per course"],
        },
        {
          label: "How to choose a course",
          cells: ["Read specialization syllabi and institution", "Read reviews and preview lectures"],
        },
      ],
    },
    {
      kind: "products",
      heading: "Course platforms",
      intro: "Use official links to search; confirm pricing and refunds on each site.",
      productIds: ["coursera", "udemy"],
    },
    {
      kind: "prose",
      heading: "Final recommendation",
      body: (
        <p>
          Pick one category that matches your target roles, finish one course with a
          tangible output (project, case study, or portfolio piece), then apply while you
          learn the next skill. Avoid collecting certificates without practice.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Explore platforms",
      buttons: [
        { label: "Explore Courses", productId: "coursera" },
        { label: "View Career Courses", productId: "udemy" },
      ],
    },
  ],
};
