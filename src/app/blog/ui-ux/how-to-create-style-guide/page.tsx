import {
  ArrowRight,
  CheckCircle2,
  Layers3,
  LayoutTemplate,
  Palette,
  PenTool,
  Rocket,
  Sparkles,
  Type,
  Users,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Breadcrumbs from "../../../components/Breadcrumbs";

const steps = [
  {
    title: "Start with your brand intent",
    description:
      "Define the personality, voice, and visual goals of your product before you pick colors or typography.",
    icon: Sparkles,
  },
  {
    title: "Document the foundations",
    description:
      "Create clear rules for color, typography, spacing, grids, iconography, and motion so every screen feels intentional.",
    icon: Palette,
  },
  {
    title: "Build reusable components",
    description:
      "Turn common patterns like buttons, cards, forms, and modals into documented UI components with do-and-don't examples.",
    icon: LayoutTemplate,
  },
  {
    title: "Add usage guidelines",
    description:
      "Explain when to use each component, what states are available, and what changes are acceptable for different contexts.",
    icon: Layers3,
  },
];

const checklist = [
  "Choose a naming system that your team can reuse without confusion.",
  "Include contrast, accessibility, and responsive behavior in the guidance.",
  "Show real examples so designers and developers can implement the right pattern quickly.",
  "Keep the guide updated whenever a component changes or a new pattern is introduced.",
];

export default function HowToCreateStyleGuidePage() {
  return (
    <>
      <Helmet>
        <title>How to Create a Style Guide | NSL Digital Lab</title>
        <meta
          name="description"
          content="Learn how to create a practical style guide for your brand or product, covering color, typography, spacing, components, and usage rules."
        />
        <meta
          name="keywords"
          content="style guide, design system, UI style guide, brand guide, typography guide, design consistency"
        />
        <link
          rel="canonical"
          href="https://www.nsldigitallab.co.in/blog/ui-ux/how-to-create-style-guide"
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-[#050816] text-slate-100">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#050816_0%,_#0b1023_100%)] py-20 md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
          <div className="absolute left-[-8rem] top-[-6rem] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute bottom-[-6rem] right-[-4rem] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[120px]" />

          <div className="container relative z-10 mx-auto px-6 lg:px-10">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: "UI/UX", href: "/blog/ui-ux" },
                  { label: "How to Create a Style Guide" },
                ]}
              />
            </div>

            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  UI/UX
                </span>
                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  Design Systems
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                  Brand Consistency
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                How to create a style guide that
                <span className="mt-3 block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  keeps your product consistent
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                A style guide is more than a brand document. It is a practical tool that helps designers, developers, and marketers create work that feels cohesive from the first screen to the last interaction.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#steps"
                  className="inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Start building
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link
                  to="/services/ui-ux-design"
                  className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Our UI/UX services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-cyan-300" />
                  6 min read
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-violet-300" />
                  Great for teams
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  Practical framework
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="steps" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-medium text-cyan-400">A simple roadmap</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Follow these steps to create a style guide that actually gets used
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              The best style guides are clear, visual, and easy to reference. They should help teams ship faster without sacrificing quality.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <div className="mb-5 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-400">{step.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01))] py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div>
              <span className="font-medium text-cyan-400">What to include</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                A strong style guide should cover both visual rules and practical usage
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Think of your style guide as a shared source of truth for design decisions. If it is too vague, people will ignore it. If it is too detailed, it will become difficult to maintain.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-emerald-300">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  A practical style guide checklist
                </div>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {checklist.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#111827] p-8 md:p-10">
            <div className="flex flex-wrap items-start justify-between gap-6">
              <div className="max-w-2xl">
                <span className="font-medium text-cyan-400">Best practice</span>
                <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                  Keep it alive, not static
                </h2>
                <p className="mt-4 text-lg leading-8 text-slate-400">
                  A style guide becomes valuable when it evolves with your product. Review it regularly, update it when patterns change, and use it during design reviews and implementation handoffs.
                </p>
              </div>

              <div className="rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-5 text-cyan-300">
                <div className="flex items-center gap-2 font-semibold">
                  <PenTool className="h-5 w-5" />
                  Living documentation
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-medium text-cyan-400">Related reads</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Continue exploring UI/UX topics
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link to="/blog/ui-ux/ui-ux-design-principles" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">UI/UX design principles</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Learn the fundamentals that guide intuitive product design.</p>
            </Link>
            <Link to="/blog/ui-ux/ui-ux-design-process-explained" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">UI/UX design process</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">See how research, wireframes, and testing shape the final experience.</p>
            </Link>
            <Link to="/blog/ui-ux/ui-ux-design-in-2026" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">UI/UX design in 2026</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Explore the trends shaping modern product experiences.</p>
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#050816] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Need a design system for your product?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              We help teams turn scattered UI decisions into clean, scalable systems that are easy to maintain.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/services/ui-ux-design" className="rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3 font-semibold text-white transition hover:opacity-90">
                View UI/UX services
              </Link>
              <Link to="/contact" className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                Talk to us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
