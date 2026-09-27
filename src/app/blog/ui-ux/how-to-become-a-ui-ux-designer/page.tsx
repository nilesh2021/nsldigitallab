import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  FolderKanban,
  GraduationCap,
  Palette,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import Breadcrumbs from "../../../components/Breadcrumbs";
import { getBlogLinks } from "../../../../data/blogInternalLinks";
import RelatedArticles from "../../../components/blog/RelatedArticles";

const pageLinks = getBlogLinks("how-to-become-a-ui-ux-designer");

const steps = [
  {
    title: "Learn the process, not only Figma",
    description:
      "Recruiters in India hire from portfolios. Start with Discovery, Define, Ideate, Design, and Testing so you can explain decisions, not only screens.",
    icon: Palette,
  },
  {
    title: "Build 2–3 case studies",
    description:
      "Redesign a real app you use, then do one original problem. Show research, wireframes, Auto Layout UI, a prototype, and what you changed after feedback.",
    icon: FolderKanban,
  },
  {
    title: "Package a junior portfolio and resume",
    description:
      "One page resume with Figma, research, prototyping, and accessibility. A mobile-friendly portfolio link. Keywords that match internship job posts.",
    icon: Briefcase,
  },
  {
    title: "Apply and practise the interview out loud",
    description:
      "Tell me about yourself, walk through one case study, and explain Auto Layout. Speaking the answers matters as much as knowing them.",
    icon: Users,
  },
];

const checklist = [
  "You can explain UI vs UX in two sentences.",
  "You have used Figma Auto Layout on a card or nav.",
  "At least one case study has a problem, process, and result.",
  "Your resume is one page and your portfolio opens on a phone.",
];

export default function HowToBecomeUiUxDesignerPage() {
  return (
    <>
      <Helmet>
        <title>How to Become a UI/UX Designer in India | NSL Digital Lab</title>
        <meta
          name="description"
          content="A practical roadmap for students and freshers: skills, Figma, portfolio case studies, internships, and interview prep to become a UI/UX designer in India."
        />
        <meta
          name="keywords"
          content="how to become a UI UX designer, UI UX designer roadmap, UI UX internship for freshers, UI UX portfolio, learn UI UX"
        />
        <link
          rel="canonical"
          href="https://nsldigitallab.com/blog/ui-ux/how-to-become-a-ui-ux-designer"
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-[#050816] text-slate-100">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#050816_0%,_#0b1023_100%)] py-20 md:py-24">
          <div className="container relative z-10 mx-auto px-6 lg:px-10">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: "UI/UX", href: "/blog/ui-ux" },
                  { label: "How to Become a UI/UX Designer" },
                ]}
              />
            </div>

            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  Career
                </span>
                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  Freshers
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                How to become a UI/UX designer
                <span className="mt-3 block bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  without a design degree
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Indian product teams hire from proof: Figma craft, a clear process,
                and two or three case studies. This roadmap is for students and
                career switchers who want internships and junior roles.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/learn/ui-ux-design"
                  className="inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Start the free path
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/resources/ui-ux-internship-starter-kit"
                  className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Download the internship kit
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-cyan-300" />
                  9 min read
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4 text-violet-300" />
                  For students and freshers
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  India internship focused
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-medium text-cyan-400">The roadmap</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Four steps that actually get interviews
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              You do not need every tool. You need a process, Figma Auto Layout,
              a portfolio story, and spoken interview answers.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="mb-5 inline-flex rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-3 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-400">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="border-t border-white/10 py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div>
              <span className="font-medium text-cyan-400">Skills to list</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                What 2026 internship posts actually ask for
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                Figma, Auto Layout, components, user research, wireframing,
                prototyping, and accessibility show up again and again. Put them
                on the resume only if you can demonstrate them in a file.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="mb-6 rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-emerald-300">
                <div className="flex items-center gap-2 font-semibold">
                  <CheckCircle2 className="h-4 w-4" />
                  Ready-to-apply checklist
                </div>
              </div>
              <div className="grid gap-4">
                {checklist.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-12 lg:px-10">
          <div className="rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#0f172a] to-[#111827] p-8 md:p-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Next: internships and free practice
            </h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-400">
              Take the free 10-module path, download the internship kit, and apply
              when you can walk through one project without reading notes.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/ui-ux-internship"
                className="rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-7 py-3 font-semibold text-white transition hover:opacity-90"
              >
                View the UI/UX internship
              </Link>
              <Link
                to="/resources/figma-auto-layout-cheat-sheet"
                className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white transition hover:bg-white/10"
              >
                Figma Auto Layout cheat sheet
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20 lg:px-10">
          <RelatedArticles links={pageLinks} />
        </section>
      </main>

      <Footer />
    </>
  );
}
