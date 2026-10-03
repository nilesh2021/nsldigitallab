import { Link } from "react-router-dom";

import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestCareerCourses: CareerArticleContent = {
  slug: "best-career-courses",
  faqs: [
    {
      question: "Coursera vs Udemy—which should I use?",
      answer:
        "Coursera often suits structured programs and certificates from institutions. Udemy suits picking individual skills courses at your own pace. Compare syllabi and reviews on each platform before you buy.",
    },
    {
      question: "Do I need a certificate to get hired?",
      answer:
        "Certificates can help show initiative, but portfolios and experience usually matter more in creative and technical fields.",
    },
    {
      question: "Can NSL Digital Lab courses help too?",
      answer:
        "Yes. Our free learning hub covers foundations in UI/UX, digital marketing, React, and communication alongside these external platforms.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Career courses can close skill gaps while you job search. This page
          compares Coursera and Udemy by how they fit different learning goals—not
          by listing specific course titles we have not verified here.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "How to pick a platform",
      body: (
        <p>
          {/* TODO: add specific course recommendations only when verified URLs exist in project data. */}
          Browse each platform for topics below, read syllabi, and check refund
          policies before purchase.
        </p>
      ),
    },
    {
      kind: "products",
      heading: "Course platforms",
      intro: "Use affiliate links to explore; confirm pricing on each site.",
      productIds: ["coursera", "udemy"],
    },
    {
      kind: "bestFor",
      heading: "Categories to explore",
      items: [
        {
          title: "UI/UX",
          description:
            "Look for courses on research, wireframing, and prototyping—or use NSL’s free UI/UX learning path.",
        },
        {
          title: "Web development",
          description:
            "HTML, CSS, JavaScript, and framework fundamentals; pair courses with small portfolio projects.",
        },
        {
          title: "Digital marketing",
          description:
            "SEO, content, analytics, and paid media basics align with many entry marketing roles.",
        },
        {
          title: "Communication",
          description:
            "Business writing and presentation skills support interviews and workplace English.",
        },
        {
          title: "Project management",
          description:
            "Agile and planning fundamentals help if you target coordinator or PM-adjacent roles.",
        },
        {
          title: "AI skills",
          description:
            "Prompting and workflow courses can complement your existing domain expertise.",
        },
        {
          title: "Career development",
          description:
            "Interview prep, LinkedIn, and job search strategy courses—balance with hands-on applications.",
        },
      ],
    },
    {
      kind: "comparisonTable",
      heading: "Coursera vs Udemy",
      columns: [
        { key: "coursera", label: "Coursera" },
        { key: "udemy", label: "Udemy" },
      ],
      rows: [
        {
          label: "Typical format",
          cells: [
            "Multi-week programs and specializations",
            "Single-topic video courses",
          ],
        },
        {
          label: "Credentials",
          cells: [
            "Certificates and degrees on some tracks",
            "Course completion certificates",
          ],
        },
        {
          label: "Pricing model",
          cells: [
            "Subscriptions and per-program fees—confirm on site",
            "Per-course sales—confirm on site",
          ],
        },
        {
          label: "Best for",
          cells: [
            "Structured paths with institutional branding",
            "Fast, focused skill upgrades",
          ],
        },
      ],
    },
    {
      kind: "prose",
      heading: "Free learning on NSL Digital Lab",
      body: (
        <p>
          Start with our{" "}
          <Link
            to="/learn"
            className="font-medium text-cyan-700 underline-offset-2 hover:underline"
          >
            Learning Hub
          </Link>{" "}
          for free modules, then use Coursera or Udemy when you need a paid
          specialization. See also{" "}
          <InlineArticleLink
            to={careerArticlePath("best-online-courses-for-job-seekers")}
            variant="light"
          >
            best online courses for job seekers
          </InlineArticleLink>
          ,{" "}
          <InlineArticleLink
            to={careerArticlePath("best-english-speaking-courses")}
            variant="light"
          >
            best English speaking courses
          </InlineArticleLink>
          , and{" "}
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
      kind: "ctas",
      heading: "Start learning",
      buttons: [
        { label: "Explore Courses", productId: "coursera" },
        { label: "View Career Courses", productId: "udemy" },
      ],
    },
  ],
};
