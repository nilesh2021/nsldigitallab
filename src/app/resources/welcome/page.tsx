import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  GraduationCap,
  Instagram,
  Linkedin,
  Mail,
  Newspaper,
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
    title: "Grab a starter resource",
    description: "Download a template or interview pack and start using it this week.",
  },
  {
    title: "Follow a learning path",
    description: "Pick UI/UX, SEO, or digital marketing and build skills in a clear order.",
  },
  {
    title: "Stay in the loop",
    description: "New checklists, templates, and guides go out to this list first.",
  },
];

const learningPaths = [
  {
    to: "/learn/ui-ux-design",
    title: "UI/UX Design",
    description: "Design thinking, Figma, wireframes, prototypes, and portfolio work.",
    icon: Sparkles,
  },
  {
    to: "/learn/seo",
    title: "SEO",
    description: "Technical SEO, on-page work, keyword research, and Search Console.",
    icon: BookOpen,
  },
  {
    to: "/learn/digital-marketing",
    title: "Digital Marketing",
    description: "Social, content, paid ads, and email campaigns that actually convert.",
    icon: GraduationCap,
  },
];

export default function ResourcesWelcomePage() {
  const featuredResources = resources.slice(0, 4);

  return (
    <>
      <SEO
        title="Welcome | NSL Digital Lab"
        description="You're in. Explore free UI/UX, SEO, and digital marketing resources from NSL Digital Lab."
        canonical="/resources/welcome"
        robots="noindex, follow"
      />

      <MainLayout>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_35%),linear-gradient(135deg,_#07111f_0%,_#0f1f3d_45%,_#172b51_100%)] px-6 py-20 md:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl md:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                <Mail className="h-4 w-4" />
                You&apos;re on the list
              </div>

              <div className="mt-8 grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>

                  <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Welcome to NSL Digital Lab
                  </h1>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                    Thanks for joining. You now have access to free templates, interview
                    packs, and learning paths for students, designers, and marketers.
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    <Link
                      to="/resources"
                      className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
                    >
                      Browse resources
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                    <Link
                      to="/learn"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                    >
                      Start learning
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7">
                  <h2 className="text-xl font-semibold text-white">What to do next</h2>
                  <ul className="mt-6 space-y-5">
                    {nextSteps.map((step, index) => (
                      <li key={step.title} className="flex gap-3 text-sm text-slate-300">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-xs font-semibold text-cyan-300">
                          {index + 1}
                        </span>
                        <span>
                          <span className="block font-semibold text-white">{step.title}</span>
                          <span className="mt-1 block leading-6">{step.description}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
                Start here
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Free resources to download today
              </h2>
              <p className="mt-4 text-lg text-slate-600">
                Practical files you can use immediately — not another inbox of fluff.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2">
              {featuredResources.map((resource) => (
                <ResourceCard key={resource.id} resource={resource} />
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
                Continue learning
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Pick a path and keep going
              </h2>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {learningPaths.map((path) => {
                const Icon = path.icon;
                return (
                  <Link
                    key={path.to}
                    to={path.to}
                    className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-slate-900">{path.title}</h3>
                    <p className="mt-3 text-slate-600">{path.description}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-cyan-700">
                      Open path
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 pb-24 pt-4">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 md:p-10">
                <Newspaper className="h-8 w-8 text-cyan-600" />
                <h2 className="mt-5 text-3xl font-bold text-slate-900">Read the latest guides</h2>
                <p className="mt-3 text-lg text-slate-600">
                  Tutorials and career notes from the same team behind these resources.
                </p>
                <Link
                  to="/blog"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0f1f3d] px-6 py-3.5 font-semibold text-white transition hover:bg-[#172b51]"
                >
                  Visit the blog
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </div>

              <div className="rounded-3xl bg-[#07111f] p-8 text-white md:p-10">
                <h2 className="text-3xl font-bold">Follow along</h2>
                <p className="mt-3 text-slate-300">
                  Short updates, new drops, and behind-the-scenes work from the lab.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-[#0A66C2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0c75dc]"
                  >
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                  <a
                    href={INSTAGRAM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    <Instagram className="h-4 w-4" />
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
