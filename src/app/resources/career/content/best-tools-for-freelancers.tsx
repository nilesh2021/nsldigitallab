import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import type { CareerArticleContent } from "../data/types";
import { careerArticlePath } from "../data/types";

export const bestToolsForFreelancers: CareerArticleContent = {
  slug: "best-tools-for-freelancers",
  faqs: [
    {
      question: "Do freelancers need the same tools as job seekers?",
      answer:
        "Overlap exists—resumes, portfolios, and communication—but freelancers also need client acquisition, proposals, and delivery workflows.",
    },
    {
      question: "Which freelance platforms should I use?",
      answer:
        "Fiverr and Upwork are common marketplaces. Compare fees, client types, and category fit on each platform’s official site. We do not link to them here until affiliate URLs are configured in project data.",
    },
    {
      question: "What learning tools help freelancers?",
      answer:
        "Coursera and Udemy can deepen skills you sell. Pick courses that lead to portfolio pieces or case studies clients can evaluate.",
    },
  ],
  blocks: [
    {
      kind: "prose",
      heading: "Introduction",
      body: (
        <p>
          Freelancing stacks usually mix client platforms, skill building,
          communication, portfolio presence, and productivity habits. This guide
          highlights tools we can link to today and notes common platforms you should
          research directly.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Quick summary",
      body: (
        <p>
          Use Coursera and Udemy to sharpen marketable skills, Grammarly and Preply for
          client communication, and resume builders when you still apply to hybrid or
          full-time roles. For marketplaces, evaluate Fiverr and Upwork on their own
          sites—affiliate links for those marketplaces can be added when URLs are
          configured in the project affiliate settings.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Freelancing platforms",
      body: (
        <p>
          Fiverr and Upwork connect freelancers with clients in different ways—gig
          listings versus proposals and contracts. Compare category demand, platform
          fees, and payout rules before you invest time building a profile.{" "}
          {/* TODO: add AFFILIATE_FIVERR_URL and AFFILIATE_UPWORK_URL when available. */}
        </p>
      ),
    },
    {
      kind: "products",
      heading: "Learning and skills",
      intro: "Courses that support the services you sell.",
      productIds: ["coursera", "udemy"],
    },
    {
      kind: "products",
      heading: "Communication",
      intro: "Polish proposals, deliverables, and client emails.",
      productIds: ["grammarly", "preply"],
    },
    {
      kind: "prose",
      heading: "Portfolio and website tools",
      body: (
        <p>
          Many freelancers use a personal site or portfolio host to show work. Choose
          based on your craft—designers may need visual galleries; developers may use
          GitHub or a simple static site. Verify current features and pricing on any
          provider you pick; we do not recommend specific hosts here without verified
          affiliate data.
        </p>
      ),
    },
    {
      kind: "prose",
      heading: "Productivity and proposals",
      body: (
        <p>
          Templates for proposals, invoices, and time tracking vary by industry. Start
          simple: one doc template for scope, one calendar for deadlines, and one folder
          for client assets before buying heavy software.
        </p>
      ),
    },
    {
      kind: "products",
      heading: "When you still job search",
      productIds: ["rezi", "resumeIo"],
    },
    {
      kind: "prose",
      heading: "Related guides",
      body: (
        <p>
          See{" "}
          <InlineArticleLink
            to={careerArticlePath("best-career-development-platforms")}
            variant="light"
          >
            best career development platforms
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
          Pick one marketplace or outreach channel, one learning plan, and one
          communication stack. Add tools only when a repeated task justifies the cost.
          Revisit platform policies periodically—they change.
        </p>
      ),
    },
    {
      kind: "ctas",
      heading: "Affiliate tools we link today",
      buttons: [
        { label: "Explore Courses", productId: "coursera" },
        { label: "Try Grammarly", productId: "grammarly" },
        { label: "Find a Tutor", productId: "preply" },
      ],
    },
  ],
};
