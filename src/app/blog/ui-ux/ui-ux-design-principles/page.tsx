import {
  Accessibility,
  ArrowRight,
  CheckCircle2,
  Compass,
  Eye,
  Layers,
  MessageSquareText,
  Rocket,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Breadcrumbs from "../../../components/Breadcrumbs";

const principles = [
  {
    title: "Clarity",
    description:
      "Users should instantly understand what they can do, where they are, and what comes next.",
    icon: Eye,
  },
  {
    title: "Consistency",
    description:
      "Repeated patterns, labels, and interactions reduce friction and improve confidence.",
    icon: Layers,
  },
  {
    title: "Feedback",
    description:
      "Every action should be acknowledged clearly so users feel guided and in control.",
    icon: MessageSquareText,
  },
  {
    title: "Accessibility",
    description:
      "Inclusive design ensures your interface works well for different abilities and contexts.",
    icon: Accessibility,
  },
  {
    title: "Hierarchy",
    description:
      "Visual emphasis should clearly guide attention to the most important actions and content.",
    icon: Compass,
  },
  {
    title: "Efficiency",
    description:
      "Good experiences remove unnecessary steps and help users complete tasks smoothly.",
    icon: Zap,
  },
];

const applySteps = [
  "Start with user goals and define the core task before styling the interface.",
  "Use simple language, clear labels, and a predictable layout across the experience.",
  "Make every interaction feel responsive with visible feedback and helpful states.",
  "Test with real users and refine based on confusion, drop-off, and friction points.",
];

export default function UiUxDesignPrinciplesPage() {
  return (
    <>
      <Helmet>
        <title>UI/UX Design Principles | NSL Digital Lab</title>
        <meta
          name="description"
          content="Learn the essential UI/UX design principles that create intuitive, accessible, and conversion-friendly digital experiences."
        />
        <meta
          name="keywords"
          content="UI UX principles, UX design principles, interface design, accessibility, user experience, product design"
        />
        <link
          rel="canonical"
          href="https://www.nsldigitallab.co.in/blog/ui-ux/ui-ux-design-principles"
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
                  { label: "UI/UX Design Principles" },
                ]}
              />
            </div>

            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  UI/UX
                </span>
                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  Design Principles
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                  Product Design
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                UI/UX design principles that
                <span className="mt-3 block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  make products feel effortless
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Great digital experiences are rarely accidental. They come from a set of core principles that make interfaces intuitive, inclusive, and easy to use.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#principles"
                  className="inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Explore principles
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
                  7 min read
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-violet-300" />
                  Beginner-friendly
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  Practical guidance
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="principles" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-medium text-cyan-400">Core principles</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              The rules that turn good interfaces into great experiences
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              These principles help teams make thoughtful decisions that improve usability, trust, and long-term product satisfaction.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {principles.map((principle) => {
              const Icon = principle.icon;

              return (
                <div key={principle.title} className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                  <div className="mb-5 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-400">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01))] py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div>
              <span className="font-medium text-cyan-400">How to apply them</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Use these principles as a practical design checklist
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                When a design feels confusing, the issue is often simple: it is missing one of these fundamentals. Start here and build from clarity outward.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-emerald-300">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  A simple framework for better product thinking
                </div>
              </div>

              <ul className="space-y-4">
                {applySteps.map((step) => (
                  <li key={step} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                    <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-medium text-cyan-400">Related reads</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Continue exploring UI/UX topics
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link to="/blog/ui-ux/ui-ux-design-process-explained" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">UI/UX design process</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">See how research, strategy, wireframes, and testing come together.</p>
            </Link>
            <Link to="/blog/ui-ux/accessibility-in-ux-design" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">Accessibility in UX design</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Build interfaces that are usable and inclusive for everyone.</p>
            </Link>
            <Link to="/blog/ui-ux/ui-ux-design-in-2026" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">UI/UX design in 2026</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Explore the latest trends shaping product design.</p>
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#050816] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Want a better experience for your users?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              We help brands turn product ideas into intuitive, high-performing digital experiences.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/services/ui-ux-design" className="rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3 font-semibold text-white transition hover:opacity-90">
                View UI/UX services
              </Link>
              <a href="/#contact" className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                Let’s talk
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
