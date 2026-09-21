import { ArrowRight, BookOpen, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

import { INSTAGRAM_URL, LINKEDIN_COMPANY_URL } from "../../../data/social";

const stats = [
  { value: "60+", label: "Lessons" },
  { value: "4", label: "Paths" },
  { value: "100%", label: "Free to start" },
  { value: "Weekly", label: "Updates" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#060b14] pb-10 pt-24 sm:pb-12 sm:pt-28">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.14) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/[0.08] blur-[90px]" />
      <div className="pointer-events-none absolute -right-16 bottom-0 h-56 w-56 rounded-full bg-violet-600/[0.08] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
          <div className="max-w-2xl">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-cyan-300/90">
              Free learning · UI/UX · SEO · Marketing · React
            </p>

            <h1 className="mt-3 text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              Digital skills that get you hired
            </h1>

            <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400 sm:text-[15px] sm:leading-7">
              Practical tutorials, projects, and interview prep for students
              and career switchers.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="#courses"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-sm font-semibold text-[#060b14] transition hover:bg-slate-100"
              >
                <BookOpen className="h-4 w-4" />
                Start a path
                <ArrowRight className="h-4 w-4" />
              </a>
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
              >
                Explore articles
              </Link>
              <a
                href={LINKEDIN_COMPANY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
                aria-label="Follow NSL Digital Lab on LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-3 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.06]"
                aria-label="Follow NSL Digital Lab on Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-white/[0.08] bg-white/[0.04] sm:grid-cols-4 lg:min-w-[420px]">
            {stats.map((item) => (
              <div
                key={item.label}
                className="bg-[#0a1220]/80 px-4 py-3.5 text-center"
              >
                <dt className="text-[11px] font-medium uppercase tracking-wider text-slate-500">
                  {item.label}
                </dt>
                <dd className="mt-1 text-lg font-bold tracking-tight text-white">
                  {item.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
