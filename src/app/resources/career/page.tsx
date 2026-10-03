import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  CheckCircle2,
  FileText,
  GraduationCap,
  Languages,
  MessageSquare,
  PenLine,
  ScanSearch,
  Sparkles,
} from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import SEO from "../../../seo/SEO";
import { PAGE_SEO } from "../../../seo/pages";
import AffiliateButton from "./components/AffiliateButton";
import AffiliateDisclosure from "./components/AffiliateDisclosure";
import CareerChecklistPromo from "./components/CareerChecklistPromo";
import { CareerTrackingProvider } from "./context/CareerTrackingContext";
import { PRODUCTS, type ProductId } from "./data/products";
import { getAllCareerArticleMeta } from "./data/registry";
import { HUB_TOPIC_SECTIONS, hubLinkPath } from "./data/hubSections";
import { careerArticlePath } from "./data/types";

const popularGuides = getAllCareerArticleMeta();

const categories = [
  {
    title: "Resume Builders",
    description:
      "Online editors that help you structure experience, skills, and education into a clear resume.",
    to: careerArticlePath("best-resume-builders"),
    icon: FileText,
  },
  {
    title: "Resume Writing Services",
    description:
      "Professional writers who draft or rewrite a resume when you want a second set of eyes.",
    to: careerArticlePath("best-resume-writing-services"),
    icon: PenLine,
  },
  {
    title: "ATS Resume Tools",
    description:
      "Checkers that flag formatting and keyword issues before you send a resume to an employer.",
    to: careerArticlePath("best-ats-resume-tools"),
    icon: ScanSearch,
  },
  {
    title: "Cover Letter Tools",
    description:
      "Templates and writers that turn a job description into a short, specific cover letter.",
    to: careerArticlePath("best-resume-builders"),
    icon: MessageSquare,
  },
  {
    title: "Interview Preparation",
    description:
      "Practice questions, stories, and follow-up notes so you walk into interviews prepared.",
    href: "#free-resources",
    icon: Briefcase,
  },
  {
    title: "Career Courses",
    description:
      "Short courses on job search, portfolio presentation, and workplace communication.",
    to: careerArticlePath("best-career-courses"),
    icon: GraduationCap,
  },
  {
    title: "English Communication",
    description:
      "Practice for emails, interviews, and meetings when English is part of the hiring process.",
    to: careerArticlePath("best-job-search-tools"),
    icon: Languages,
  },
  {
    title: "Freelancing Resources",
    description:
      "Profiles, proposals, and pricing notes for people building client work alongside a job search.",
    to: careerArticlePath("best-job-search-tools"),
    icon: Sparkles,
  },
];

const hubToolIds: ProductId[] = ["rezi", "resumeIo", "zety", "topResume"];

const comparison = [
  {
    tool: "Rezi",
    use: "Self-serve resume builder",
    pricing: "Free draft options with paid plans for full exports and extra features",
    fit: "ATS-focused resumes you edit yourself",
  },
  {
    tool: "Resume.io",
    use: "Template editor for resumes and cover letters",
    pricing: "Free to start; paid plans to download without limits",
    fit: "A polished template finished in one sitting",
  },
  {
    tool: "Zety",
    use: "Guided builder with content suggestions",
    pricing: "Builder is free to try; downloads sit on a paid plan",
    fit: "First-time writers who want section-by-section help",
  },
  {
    tool: "TopResume",
    use: "Professional resume writing service",
    pricing: "Paid writing packages; pricing depends on the package you choose",
    fit: "A rewrite handled by a writer",
  },
];

const checklists = [
  {
    title: "ATS Resume Checklist",
    items: [
      "Use a single-column layout and standard section headings.",
      "Save as PDF or DOCX unless the employer asks for another format.",
      "Mirror important skills from the job description in your own words.",
      "Avoid text inside images, tables, and headers the parser may skip.",
      "Spell out acronyms once, then use the short form.",
    ],
  },
  {
    title: "Resume Writing Checklist",
    items: [
      "Lead each role with outcomes, not only duties.",
      "Keep bullets to one line where you can.",
      "Drop outdated roles that do not support the job you want.",
      "List tools you can discuss in an interview.",
      "Proofread names, dates, and links before you send it.",
    ],
  },
  {
    title: "Interview Preparation Checklist",
    items: [
      "Read the job post and note three requirements you can speak to.",
      "Prepare two stories with a situation, action, and result.",
      "Write three questions about the team and the work.",
      "Test your audio and camera if the interview is remote.",
      "Plan a short thank-you note you can send the same day.",
    ],
  },
];

export default function CareerResourcesPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleLeadSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    if (!name || !email) return;
    setSubmitted(true);
  }

  return (
    <CareerTrackingProvider pageSlug="career-hub">
      <SEO {...PAGE_SEO.careerResources} />
      <MainLayout>
        <section className="relative overflow-hidden bg-[#060b14] pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pt-36">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
                <Briefcase className="h-3.5 w-3.5 text-cyan-400" />
                Career resources
              </p>
              <h1 className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]">
                Build a Better Resume. Prepare Better. Get Hired.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                Practical resume tools, checklists, and guides for job seekers.
                Compare a few trusted options, then use the free checklists to
                prepare your application.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#recommended-tools"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#061018] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Compare career tools
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#free-resources"
                  className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                >
                  Get free checklists
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f5f7fb] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Career tools by category
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Start with the part of the job search you are working on now.
              Each category links to a guide or resource on this hub.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {categories.map((item) => {
                const Icon = item.icon;
                const linkClass =
                  "mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700 hover:text-cyan-800";
                return (
                  <article
                    key={item.title}
                    className="flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#0f172a]">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                    {"to" in item && item.to ? (
                      <Link to={item.to} className={linkClass}>
                        Read guide
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    ) : (
                      <a href={item.href} className={linkClass}>
                        View checklists
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </article>
                );
              })}
            </div>

            <div className="mt-16 grid gap-8 lg:grid-cols-2">
              {HUB_TOPIC_SECTIONS.map((section) => (
                <div
                  key={section.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-[#0f172a]">
                    {section.title}
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {section.links.map((link) => (
                      <li key={link.slug}>
                        <Link
                          to={hubLinkPath(link)}
                          className="text-sm font-medium text-cyan-700 hover:text-cyan-800 hover:underline"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="recommended-tools"
          className="scroll-mt-24 border-t border-slate-100 bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-8 max-w-3xl">
              <AffiliateDisclosure />
            </div>
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Recommended tools
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Four career tools we link to. Read the short note, then visit the
              site if it matches how you want to work.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2">
              {hubToolIds.map((productId) => {
                const tool = PRODUCTS[productId];
                return (
                  <article
                    key={productId}
                    className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6"
                  >
                    <h3 className="text-xl font-semibold text-[#0f172a]">
                      {tool.name}
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-slate-700">
                      {tool.summary}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-slate-600">
                      <span className="font-medium text-slate-800">Best for: </span>
                      {tool.bestFor}
                    </p>
                    <div className="mt-5">
                      <AffiliateButton
                        productId={productId}
                        label={tool.ctaLabel}
                        position="hub-recommended-tools"
                        variant="primary"
                      />
                    </div>
                  </article>
                );
              })}
            </div>

            <h3 className="mt-16 text-2xl font-bold tracking-tight text-[#0f172a]">
              Tool comparison
            </h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Pricing changes. Confirm the current plan on each site before you pay.
            </p>
            <div className="mt-6 overflow-x-auto rounded-2xl border border-slate-200">
              <table className="min-w-[720px] w-full border-collapse text-left text-sm">
                <caption className="sr-only">
                  Comparison of Rezi, Resume.io, Zety, and TopResume
                </caption>
                <thead className="bg-slate-50 text-slate-700">
                  <tr>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Tool
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Typical use
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Pricing model
                    </th>
                    <th scope="col" className="px-4 py-3 font-semibold">
                      Best fit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row) => (
                    <tr key={row.tool} className="border-t border-slate-200">
                      <th
                        scope="row"
                        className="px-4 py-4 font-semibold text-[#0f172a]"
                      >
                        {row.tool}
                      </th>
                      <td className="px-4 py-4 text-slate-700">{row.use}</td>
                      <td className="px-4 py-4 text-slate-700">{row.pricing}</td>
                      <td className="px-4 py-4 text-slate-700">{row.fit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section
          id="free-resources"
          className="scroll-mt-24 border-t border-slate-100 bg-[#f5f7fb] py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Free resume resources
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Use these checklists while you edit your resume and prepare for
              interviews. Leave your name and email if you want updates when new
              guides are published.
            </p>
            <div className="mt-8 max-w-xl">
              <CareerChecklistPromo />
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {checklists.map((list) => (
                <article
                  key={list.title}
                  className="rounded-2xl border border-slate-200/80 bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-[#0f172a]">
                    {list.title}
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {list.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                      >
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="mt-10 max-w-xl rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-[#0f172a]">
                Get checklist updates
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Name and email only. We will not show a countdown or a limited offer.
              </p>
              {submitted ? (
                <p className="mt-6 rounded-xl bg-cyan-50 px-4 py-3 text-sm leading-6 text-cyan-900" role="status">
                  Thanks. This form is a placeholder until a mailing list is connected.
                </p>
              ) : (
                <form className="mt-6 grid gap-4" onSubmit={handleLeadSubmit}>
                  <div>
                    <label
                      htmlFor="career-name"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Name
                    </label>
                    <input
                      id="career-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Your name"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-400 placeholder:text-slate-400 focus:ring-2"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="career-email"
                      className="block text-sm font-medium text-slate-800"
                    >
                      Email
                    </label>
                    <input
                      id="career-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="you@email.com"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none ring-cyan-400 placeholder:text-slate-400 focus:ring-2"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex w-fit items-center justify-center rounded-xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Send
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section
          id="career-guides"
          className="scroll-mt-24 border-t border-slate-100 bg-white py-20 sm:py-24"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="max-w-2xl text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Popular career guides
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              In-depth comparisons, reviews, and roundups to help you choose
              resume tools, courses, and job-search apps.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {popularGuides.map((guide) => (
                <Link
                  key={guide.slug}
                  to={careerArticlePath(guide.slug)}
                  className="group flex flex-col rounded-2xl border border-slate-200 bg-slate-50 p-6 transition hover:border-cyan-300 hover:bg-white"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <BookOpen className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                    {guide.badge}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-[#0f172a] group-hover:text-cyan-800">
                    {guide.h1}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                    {guide.dek}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-cyan-700">
                    Read guide
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f5f7fb] py-12">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <AffiliateDisclosure />
          </div>
        </section>
      </MainLayout>
    </CareerTrackingProvider>
  );
}
