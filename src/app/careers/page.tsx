"use client";

import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Briefcase,
  Clock,
  GraduationCap,
  Laptop,
  MapPin,
  Sparkles,
  Users,
} from "lucide-react";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import CareerForm from "../components/CareerForm";
import { PAGE_SEO } from "../../seo/pages";
import SEO from "../../seo/SEO";

const jobs = [
  {
    title: "UI/UX Designer",
    type: "Full Time",
    location: "Remote / Pune",
    experience: "1–3 years",
    category: "Design",
    href: "/careers/ui-ux-designer-job",
    description:
      "Design websites and product interfaces in Figma, from research and wireframes to polished, usable systems.",
  },
  {
    title: "Data Entry Operator",
    type: "Remote",
    location: "Remote",
    experience: "Fresher welcome",
    category: "Operations",
    href: "/careers/data-entry-remote-job",
    description:
      "Keep spreadsheets, CRM records, and project files accurate so delivery stays on schedule.",
  },
];

const filters = ["All", "Full Time", "Remote"] as const;

const reasons = [
  {
    icon: Laptop,
    title: "Real client work",
    description:
      "Ship on live websites, campaigns, and product screens — not practice-only assignments.",
  },
  {
    icon: GraduationCap,
    title: "Mentored growth",
    description:
      "Get reviews from designers and marketers who already run agency-grade workflows.",
  },
  {
    icon: Users,
    title: "Small, senior team",
    description:
      "Work closely with founders and specialists so your contribution is visible.",
  },
  {
    icon: Briefcase,
    title: "Career-ready proof",
    description:
      "Leave with a portfolio, certificate, and recommendation you can actually use.",
  },
];

const steps = [
  {
    step: "01",
    title: "Apply",
    body: "Share your resume or portfolio and the role you want.",
  },
  {
    step: "02",
    title: "Conversation",
    body: "A short call to understand your skills, availability, and goals.",
  },
  {
    step: "03",
    title: "Trial task",
    body: "A focused exercise that mirrors the work you would do here.",
  },
  {
    step: "04",
    title: "Join",
    body: "Onboard, get a mentor, and start contributing to live projects.",
  },
];

const benefits = [
  "Work on real client projects",
  "Internship certificate",
  "Letter of recommendation",
  "Flexible remote hours",
  "Portfolio case studies",
  "Industry mentorship",
];

export default function CareersPage() {
  const [selectedJobTitle, setSelectedJobTitle] = useState(
    "General Career Application"
  );
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const visibleJobs = useMemo(() => {
    if (activeFilter === "All") return jobs;
    return jobs.filter((job) => job.type === activeFilter);
  }, [activeFilter]);

  const scrollToApply = (jobTitle?: string) => {
    if (jobTitle) setSelectedJobTitle(jobTitle);

    const element = document.getElementById("apply");
    if (!element) return;

    const navbarOffset = 96;
    const top =
      element.getBoundingClientRect().top + window.scrollY - navbarOffset;

    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <>
      <SEO {...PAGE_SEO.careers} />
      <Navigation />
      <ScrollToTop />

      <main className="min-h-screen bg-white text-[#0f172a]">
        <section className="relative overflow-hidden bg-[#060b14] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
          <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/[0.06] blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  <span className="text-cyan-300">Hiring now</span>
                  <span className="h-1 w-1 rounded-full bg-slate-500" />
                  <span>Remote-first open roles</span>
                </div>

                <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Build your career on
                  <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                    real digital work
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  Join NSL Digital Lab as a UI/UX designer or data entry
                  operator. Work on live projects with mentors — not slide
                  decks.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
                  <a
                    href="#openings"
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#060b14] shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 sm:text-base"
                  >
                    View open roles
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    type="button"
                    onClick={() => scrollToApply()}
                    className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] sm:text-base"
                  >
                    Submit resume
                  </button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { value: `${jobs.length}`, label: "Open roles" },
                  { value: "100%", label: "Remote friendly" },
                  { value: "Mentors", label: "On every project" },
                  { value: "7 days", label: "Typical response" },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-5 backdrop-blur-sm"
                  >
                    <p className="text-2xl font-bold tracking-tight text-white">
                      {item.value}
                    </p>
                    <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-2xl">
              <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                Why join us
              </span>
              <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                Learn in public.
                <span className="block text-slate-500">Ship with a team.</span>
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
                We hire people who want to practice SEO, UI/UX, content, and
                operations on work that actually goes live.
              </p>
            </div>

            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-6 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <reason.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {reason.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="openings"
          className="scroll-mt-24 border-t border-slate-100 bg-[#f5f7fb] py-16 sm:py-20 lg:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
                  Open positions
                </span>
                <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
                  Roles you can apply for today
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Filter by type, then apply in one click or open the full job
                  page for details.
                </p>
                <a
                  href="https://www.linkedin.com/company/nsldigitallab/"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0A66C2] hover:underline"
                >
                  Follow us on LinkedIn for new openings
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeFilter === filter
                        ? "bg-[#060b14] text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    {filter}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-10 space-y-4">
              {visibleJobs.map((job) => (
                <article
                  key={job.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition hover:border-cyan-200 sm:p-8"
                >
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                    <div className="max-w-2xl">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-cyan-700">
                          {job.type}
                        </span>
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                          {job.category}
                        </span>
                      </div>

                      <h3 className="mt-4 text-2xl font-semibold tracking-tight">
                        {job.title}
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
                        {job.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-500">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock className="h-4 w-4" />
                          {job.experience}
                        </span>
                      </div>
                    </div>

                    <div className="flex shrink-0 flex-col gap-3 sm:flex-row lg:flex-col">
                      <Link
                        to={job.href}
                        className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-slate-300 hover:bg-slate-50"
                      >
                        Role details
                      </Link>
                      <button
                        type="button"
                        onClick={() => scrollToApply(job.title)}
                        className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#060b14] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0f172a]"
                      >
                        Apply now
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              How hiring works
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((item) => (
                <div key={item.step} className="relative">
                  <p className="text-sm font-semibold tracking-[0.2em] text-cyan-600">
                    {item.step}
                  </p>
                  <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f8fafc] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  What you take with you
                </h2>
                <p className="mt-4 text-base leading-7 text-slate-600">
                  Interns and hires leave with proof of work, not just a title
                  on LinkedIn.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <li
                    key={benefit}
                    className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-800"
                  >
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section
          id="apply"
          className="scroll-mt-24 relative overflow-hidden bg-[#060b14] px-4 py-16 sm:px-6 sm:py-20"
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-[380px] w-[380px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <div className="mb-8 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Apply
              </p>
              <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
                Start your career journey
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
                Tell us who you are. We review every application and typically
                reply within a week.
              </p>
            </div>
            <CareerForm jobTitle={selectedJobTitle} />
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
