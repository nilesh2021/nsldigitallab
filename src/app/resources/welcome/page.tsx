import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Inbox,
  Instagram,
  Linkedin,
  Sparkles,
} from "lucide-react";

import SEO from "../../../seo/SEO";
import MainLayout from "../../layouts/MainLayout";
import ResourceCard from "../components/ResourceCard";
import { resources } from "../../../data/resources";

const LINKEDIN_URL = "https://www.linkedin.com/company/nsldigitallab/";
const INSTAGRAM_URL = "https://www.instagram.com/nsldigitallab";

const nextSteps = [
  {
    n: "01",
    title: "Check your inbox",
    description: "Look for NSL Digital Lab. If it is not there, check spam and promotions.",
  },
  {
    n: "02",
    title: "Download one resource",
    description: "Start with a checklist or interview pack you can use this week.",
    href: "#start-here",
  },
  {
    n: "03",
    title: "Follow a learning path",
    description: "UI/UX or React — pick one and keep going.",
    href: "#paths",
  },
];

const learningPaths = [
  {
    to: "/learn/ui-ux-design",
    title: "UI/UX Design",
    description: "Figma, wireframes, and portfolio-ready process.",
    icon: Sparkles,
  },
  {
    to: "/learn/react-foundations",
    title: "React Foundations",
    description: "JSX, components, and a first deployed app.",
    icon: BookOpen,
  },
];

export default function ResourcesWelcomePage() {
  const featuredResources = [
    ...resources.filter((resource) => resource.featured),
    ...resources.filter((resource) => !resource.featured),
  ].slice(0, 3);

  return (
    <>
      <SEO
        title="You're in | NSL Digital Lab"
        description="You're on the list. Download a free resource and start with UI/UX, SEO, or digital marketing."
        canonical="/resources/welcome"
        robots="noindex, follow"
      />

      <MainLayout>
        <section className="relative overflow-hidden bg-[#060b14] pt-28 pb-14 sm:pt-32 sm:pb-16">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[360px] w-[min(100%,640px)] -translate-x-1/2 rounded-full bg-emerald-400/[0.08] blur-[110px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1.5 text-xs font-medium text-emerald-300">
              <CheckCircle2 className="h-3.5 w-3.5" />
              You&apos;re on the list
            </span>

            <div className="mt-6 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
              <div className="max-w-2xl">
                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl lg:leading-tight">
                  Welcome in.
                  <span className="mt-1 block text-slate-400">
                    Grab a file, then keep learning.
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                  Thanks for joining. Your next step is simple: download one
                  resource you will actually use this week.
                </p>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <a
                    href="#start-here"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-2.5 text-sm font-semibold text-[#0f172a] transition hover:bg-cyan-300"
                  >
                    Choose a download
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/resources"
                    className="inline-flex items-center justify-center gap-1.5 text-sm font-medium text-slate-300 transition hover:text-white"
                  >
                    Browse the full library
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>

                <p className="mt-5 inline-flex items-start gap-2 text-xs leading-5 text-slate-500">
                  <Inbox className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                  We sent a confirmation to your inbox. Check spam if you do not
                  see it in a few minutes.
                </p>
              </div>

              <ol className="space-y-3">
                {nextSteps.map((step) => {
                  const content = (
                    <>
                      <span className="font-mono text-xs font-semibold text-cyan-300">
                        {step.n}
                      </span>
                      <span>
                        <span className="block text-sm font-semibold text-white">
                          {step.title}
                        </span>
                        <span className="mt-0.5 block text-xs leading-5 text-slate-400">
                          {step.description}
                        </span>
                      </span>
                    </>
                  );

                  return (
                    <li key={step.n}>
                      {step.href ? (
                        <a
                          href={step.href}
                          className="flex gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5 transition hover:border-cyan-400/30 hover:bg-white/[0.06]"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex gap-3 rounded-2xl border border-white/[0.08] bg-white/[0.04] px-4 py-3.5">
                          {content}
                        </div>
                      )}
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </section>

        <section
          id="start-here"
          className="scroll-mt-24 border-t border-slate-100 bg-slate-50 py-14 sm:py-16"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                  Start with one of these
                </h2>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                  Three practical downloads. Pick the one closest to what you are
                  working on.
                </p>
              </div>
              <Link
                to="/resources"
                className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-700"
              >
                See all resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </section>

        <section id="paths" className="scroll-mt-24 bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                Or follow a learning path
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-6 text-slate-600">
                Optional. Use this if you want a sequence instead of a single file.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {learningPaths.map((path) => {
                const Icon = path.icon;

                return (
                  <Link
                    key={path.to}
                    to={path.to}
                    className="group rounded-[1.25rem] border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-200 hover:bg-white hover:shadow-md hover:shadow-slate-200/60"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-cyan-600 ring-1 ring-slate-200">
                      <Icon className="h-4 w-4" />
                    </div>
                    <h3 className="mt-4 text-base font-semibold text-[#0f172a]">
                      {path.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-6 text-slate-600">
                      {path.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700">
                      Open path
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-slate-50 py-10 sm:py-12">
          <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
            <div>
              <p className="text-sm font-semibold text-[#0f172a]">
                Stay in the loop
              </p>
              <p className="mt-1 text-sm text-slate-600">
                Guides on the blog, short updates on LinkedIn and Instagram.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <Link
                to="/blog"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f172a] transition hover:border-cyan-200"
              >
                Blog
                <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f172a] transition hover:border-cyan-200"
              >
                <Linkedin className="h-4 w-4 text-[#0A66C2]" />
                LinkedIn
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f172a] transition hover:border-cyan-200"
              >
                <Instagram className="h-4 w-4 text-[#dd2a7b]" />
                Instagram
              </a>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
