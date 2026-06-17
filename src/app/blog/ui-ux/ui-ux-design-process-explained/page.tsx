import {
  ArrowRight,
  Layers,
  Users,
  Lightbulb,
  Eye,
  CheckCircle,
  Sparkles,
  Clock3,
  Rocket,
  Target,
} from "lucide-react";

import { Helmet } from "react-helmet-async";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Breadcrumbs from "../../../components/Breadcrumbs";
import RelatedArticles from "../../../components/blog/RelatedArticles";
import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import { getBlogLinks } from "../../../../data/blogInternalLinks";

const pageLinks = getBlogLinks("ui-ux-design-process-explained");

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    icon: Users,
    color: "cyan",
    description:
      "Research users, competitors, and business goals to understand real problems before designing solutions.",
    points: [
      "User interviews",
      "Competitor analysis",
      "Research & insights",
      "Stakeholder alignment",
    ],
  },
  {
    number: "02",
    title: "Define",
    icon: Target,
    color: "emerald",
    description:
      "Turn insights into a structured strategy with user flows, goals, personas, and product direction.",
    points: [
      "User personas",
      "User flows",
      "Information architecture",
      "Product strategy",
    ],
  },
  {
    number: "03",
    title: "Ideation",
    icon: Lightbulb,
    color: "violet",
    description:
      "Generate multiple concepts and explore innovative solutions before selecting a final direction.",
    points: [
      "Wireframes",
      "Brainstorming",
      "Sketching",
      "Rapid concepts",
    ],
  },
  {
    number: "04",
    title: "Design",
    icon: Eye,
    color: "sky",
    description:
      "Craft polished interfaces, design systems, and interactive prototypes ready for development.",
    points: [
      "Visual UI design",
      "Design systems",
      "Prototypes",
      "Developer handoff",
    ],
  },
  {
    number: "05",
    title: "Testing",
    icon: CheckCircle,
    color: "pink",
    description:
      "Validate designs with users, collect feedback, and iterate continuously for better experiences.",
    points: [
      "Usability testing",
      "A/B testing",
      "Feedback analysis",
      "Optimization",
    ],
  },
];

export default function UiUxDesignProcessExplainedPage() {
  return (
    <>
      <Helmet>
        <title>
          UI/UX Design Process Explained | NSL Digital Lab
        </title>

        <meta
          name="description"
          content="Explore the complete UI/UX design process from discovery and research to prototyping, testing, and launch."
        />

        <meta
          name="keywords"
          content="UI UX design process, UX workflow, wireframing, prototyping, design systems, usability testing"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.nsldigitallab.co.in/blog/ui-ux/ui-ux-design-process-explained"
        />

        <meta
          property="og:title"
          content="UI/UX Design Process Explained"
        />

        <meta
          property="og:description"
          content="Learn the complete UI/UX workflow including research, wireframing, visual design, prototyping, and testing."
        />

        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1587614382346-acd5a01a71a1?q=80&w=1200&auto=format&fit=crop"
        />

        <meta
          property="og:type"
          content="article"
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-black text-white">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black py-14 md:py-16">

          {/* BACKGROUND EFFECTS */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_35%)]" />

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.14),transparent_35%)]" />

          <div className="container relative z-10 mx-auto px-6">

            <div className="grid items-center gap-12 lg:grid-cols-2">

              {/* LEFT */}
              <div>

                {/* BREADCRUMB */}
                <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl">

                  <Breadcrumbs
                    items={[
                      {
                        label: "Home",
                        href: "/",
                      },
                      {
                        label: "Blog",
                        href: "/blog",
                      },
                      {
                        label: "UI/UX",
                        href: "/blog/ui-ux",
                      },
                      {
                        label:
                          "UI/UX Design Process",
                      },
                    ]}
                  />

                </div>

                {/* TAGS */}
                <div className="mb-6 flex flex-wrap gap-3">

                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    UI/UX
                  </span>

                  <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                    Design Process
                  </span>

                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                    Product Design
                  </span>

                </div>

                {/* HEADING */}
                <h1 className="text-4xl font-black leading-tight tracking-tight md:text-5xl lg:text-6xl">

                  UI/UX Design
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                    Process Explained

                  </span>

                </h1>

                {/* DESCRIPTION */}
                <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-300">

                  Learn the complete workflow modern product teams use to build intuitive digital experiences — from user research and strategy to testing and launch.

                </p>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-wrap gap-4">

                  <a
                    href="#process"
                    className="inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold transition hover:opacity-90"
                  >
                    Explore Process

                    <ArrowRight className="ml-2 h-5 w-5" />

                  </a>

                  <a
                    href="#faq"
                    className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold transition hover:bg-white/10"
                  >
                    Read FAQ
                  </a>

                </div>

                {/* META */}
                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    8 min read
                  </div>

                  <div className="flex items-center gap-2">
                    <Rocket className="h-4 w-4" />
                    Updated 2026
                  </div>

                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Beginner Friendly
                  </div>

                </div>

              </div>

              {/* RIGHT IMAGE */}
              <div className="relative">

                <div className="absolute -inset-8 rounded-[40px] bg-cyan-500/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

                  <img
                    src="https://images.unsplash.com/photo-1587614382346-acd5a01a71a1?q=80&w=1200&auto=format&fit=crop"
                    alt="UI UX design process"
                    className="h-full w-full rounded-[28px] object-cover"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* MAIN CONTENT */}
        <section className="container mx-auto px-6 py-20">

          <div className="grid gap-16 lg:grid-cols-[1fr_340px]">

            {/* ARTICLE */}
            <article>

              {/* INTRO */}
              <div className="rounded-[36px] border border-white/10 bg-white/5 p-8 md:p-10 backdrop-blur-xl">

                <h2 className="text-4xl font-black">

                  What is the UI/UX Design Process?

                </h2>

                <p className="mt-6 leading-8 text-gray-300">

                  The UI/UX design process is a structured framework that helps teams design products users can understand, trust, and enjoy using.

                  It reduces guesswork, improves collaboration, and ensures every design decision solves a real user problem.

                </p>

                <p className="mt-5 leading-8 text-gray-300">
                  Most modern product teams follow five major stages: discovery, define, ideation, design, and testing.
                  For SaaS products, pair this workflow with{" "}
                  <InlineArticleLink to="/blog/ui-ux/saas-dashboard-design-ideas">
                    dashboard design best practices
                  </InlineArticleLink>{" "}
                  and ongoing{" "}
                  <InlineArticleLink to="/blog/ui-ux/ui-ux-design-in-2026">
                    UI/UX trends for 2026
                  </InlineArticleLink>
                  .

                </p>

              </div>

              {/* PROCESS */}
              <div
                id="process"
                className="mt-20"
              >

                <div className="mb-12">

                  <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">

                    Workflow

                  </span>

                  <h2 className="mt-4 text-4xl font-black">

                    The 5 Stages of Modern UI/UX Design

                  </h2>

                </div>

                <div className="space-y-10">

                  {processSteps.map(
                    (step, index) => {

                      const Icon =
                        step.icon;

                      return (
                        <div
                          key={index}
                          className="group relative overflow-hidden rounded-[36px] border border-white/10 bg-white/5 p-8 transition duration-500 hover:border-cyan-400/20 hover:bg-white/[0.07]"
                        >

                          <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_35%)]" />

                          <div className="relative z-10">

                            <div className="flex flex-col gap-8 md:flex-row md:items-start">

                              {/* NUMBER */}
                              <div className="flex h-20 w-20 items-center justify-center rounded-3xl border border-white/10 bg-black/30 text-2xl font-black text-cyan-400">

                                {step.number}

                              </div>

                              {/* CONTENT */}
                              <div className="flex-1">

                                <div className="flex items-center gap-4">

                                  <div className="rounded-2xl bg-cyan-500/10 p-4">

                                    <Icon className="h-8 w-8 text-cyan-400" />

                                  </div>

                                  <h3 className="text-3xl font-black">

                                    {step.title}

                                  </h3>

                                </div>

                                <p className="mt-6 leading-8 text-gray-300">

                                  {
                                    step.description
                                  }

                                </p>

                                {/* POINTS */}
                                <div className="mt-8 grid gap-4 md:grid-cols-2">

                                  {step.points.map(
                                    (
                                      point,
                                      idx
                                    ) => (
                                      <div
                                        key={idx}
                                        className="flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-5 py-4"
                                      >

                                        <CheckCircle className="h-5 w-5 text-cyan-400" />

                                        <span className="text-sm text-gray-300">

                                          {point}

                                        </span>

                                      </div>
                                    )
                                  )}

                                </div>

                              </div>

                            </div>

                          </div>

                        </div>
                      );
                    }
                  )}

                </div>

              </div>

              {/* ITERATION */}
              <div className="mt-20 rounded-[36px] border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-10">

                <h2 className="text-3xl font-black">

                  Design is Never Linear

                </h2>

                <p className="mt-6 leading-8 text-gray-300">

                  Great design teams continuously iterate. Research informs strategy, testing influences redesigns, and user feedback shapes future improvements.

                  Modern UI/UX is a continuous loop of learning and optimization.

                </p>

              </div>

              {/* FAQ */}
              <div
                id="faq"
                className="mt-24"
              >

                <h2 className="text-4xl font-black">

                  Frequently Asked Questions

                </h2>

                <div className="mt-10 space-y-6">

                  {[
                    {
                      q: "What is the difference between UI and UX?",
                      a: "UX focuses on user experience and usability, while UI focuses on visual design and interactions.",
                    },
                    {
                      q: "How long does the design process take?",
                      a: "Most projects take several weeks depending on scope, research depth, and iteration cycles.",
                    },
                    {
                      q: "Do startups need a design process?",
                      a: "Absolutely. Even lean startups benefit from structured workflows because they reduce wasted development effort.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-[28px] border border-white/10 bg-white/5 p-8"
                    >

                      <h3 className="text-2xl font-bold">

                        {faq.q}

                      </h3>

                      <p className="mt-4 leading-8 text-gray-300">

                        {faq.a}

                      </p>

                    </div>
                  ))}

                </div>

              </div>

            </article>

            {/* SIDEBAR */}
            <aside className="sticky top-24 h-fit space-y-8">

              {/* QUICK NAV */}
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <h3 className="text-2xl font-black">

                  On This Page

                </h3>

                <div className="mt-8 space-y-4">

                  {processSteps.map(
                    (item, index) => (
                      <a
                        key={index}
                        href="#process"
                        className="group flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-5 py-4 transition hover:border-cyan-400/30 hover:bg-cyan-500/10"
                      >

                        <div className="flex items-center gap-3">

                          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/20 text-sm font-bold text-cyan-300">

                            {item.number}

                          </span>

                          <span className="text-sm text-gray-300 group-hover:text-white">

                            {item.title}

                          </span>

                        </div>

                        <ArrowRight className="h-4 w-4 text-cyan-400" />

                      </a>
                    )
                  )}

                </div>

              </div>

              {/* CTA */}
              <div className="overflow-hidden rounded-[32px] bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white shadow-2xl">

                <h3 className="text-3xl font-black leading-tight">

                  Need Help Designing Your Product?

                </h3>

                <p className="mt-5 leading-7 text-cyan-50">

                  We help startups and businesses create modern digital experiences focused on usability, conversions, and growth.

                </p>

                <a
                  href="/services/ui-ux-design"
                  className="mt-8 inline-flex items-center rounded-2xl bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
                >

                  Explore UI/UX Services

                  <ArrowRight className="ml-2 h-5 w-5" />

                </a>

              </div>

              <RelatedArticles links={pageLinks} />

            </aside>

          </div>

        </section>

      </main>

      <ScrollToTop />

      <Footer />
    </>
  );
}