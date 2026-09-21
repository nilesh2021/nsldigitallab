import { useEffect, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  ChevronDown,
  Clock,
  Download,
  GraduationCap,
  Layers,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../../../seo/SEO";
import MainLayout from "../../../layouts/MainLayout";
import NewsletterSection from "../../../components/common/NewsletterSection";
import { LearningModule, LearningPath } from "../../types";
import PageComments from "../PageComments";

type Props = {
  path: LearningPath;
};

export default function LearningPathView({ path }: Props) {
  const Icon = path.icon;
  const firstModule = path.modules[0];
  const firstModuleId = `module-${firstModule?.slug ?? "start"}`;
  const startHref = firstModule?.contentHref ?? `#${firstModuleId}`;
  const startIsRoute = Boolean(firstModule?.contentHref);

  return (
    <>
      <SEO
        title={path.seo.title}
        description={path.seo.description}
        keywords={path.seo.keywords}
        canonical={path.seo.canonical}
      />

      <MainLayout>
        <section className="relative overflow-hidden bg-[#060b14] pb-16 pt-28 sm:pb-20 sm:pt-32 lg:pt-36">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-violet-500/[0.08] blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              to="/learn"
              className="text-sm font-medium text-slate-400 transition hover:text-white"
            >
              ← All learning paths
            </Link>

            <div className="mt-8 grid items-start gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300">
                  <Icon className="h-3.5 w-3.5 text-cyan-400" />
                  <span className="text-cyan-300">{path.eyebrow}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-500" />
                  <span>{path.level}</span>
                </div>

                <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
                  {path.title}
                  <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                    {path.tagline}
                  </span>
                </h1>

                <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  {path.description}
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                  {startIsRoute ? (
                    <Link
                      to={startHref}
                      className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#060b14] transition hover:-translate-y-0.5 hover:bg-slate-100"
                    >
                      <BookOpen className="h-4 w-4" />
                      Start Module 01
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <a
                      href={startHref}
                      className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#060b14] transition hover:-translate-y-0.5 hover:bg-slate-100"
                    >
                      <BookOpen className="h-4 w-4" />
                      Start Module 01
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  )}
                  <a
                    href="#curriculum"
                    className="inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    View syllabus
                  </a>
                </div>
              </div>

              <div className="rounded-3xl border border-white/[0.08] bg-white/[0.03] p-7 backdrop-blur-sm">
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-cyan-300">
                  You will be able to
                </p>
                <ul className="mt-5 space-y-4">
                  {path.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-slate-500">
                  {path.moduleLabel} · {path.estimatedTime}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-10 sm:py-12">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <MetaCard
                icon={GraduationCap}
                label="Level"
                value={path.level}
              />
              <MetaCard
                icon={Layers}
                label="Modules"
                value={path.moduleLabel}
              />
              <MetaCard
                icon={Clock}
                label="Estimated time"
                value={path.estimatedTime}
              />
              <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] px-5 py-4">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
                  Prerequisites
                </p>
                <ul className="mt-2 space-y-1">
                  {path.prerequisites.map((item) => (
                    <li key={item} className="text-sm leading-5 text-slate-600">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="curriculum"
          className="scroll-mt-24 border-t border-slate-100 bg-gradient-to-b from-[#f3f8fc] via-white to-violet-50/40 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-700">
                  Syllabus
                </span>
                <h2 className="mt-3 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                  {path.modules.length} modules. One complete path.
                </h2>
              </div>
              <p className="max-w-md text-sm leading-6 text-slate-600">
                Open a module for topics and the mini project. Only one stays
                open so the full list stays in view.
              </p>
            </div>

            <ModuleAccordion modules={path.modules} />
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f8fafc] py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
                <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                  Follow NSL Digital Lab on LinkedIn
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  New modules, project ideas, and career notes go out on
                  LinkedIn first.
                </p>
                <a
                  href={path.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#0c75dc]"
                >
                  <Linkedin className="h-4 w-4" />
                  Follow NSL Digital Lab on LinkedIn
                </a>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-8 sm:p-10">
                <h2 className="text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                  Free React Roadmap / Checklist
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  Download the printable checklist that mirrors this path. Tick
                  topics as you complete each mini project.
                </p>
                <a
                  href={path.download.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  <Download className="h-4 w-4" />
                  {path.download.label}
                </a>
              </div>
            </div>
          </div>
        </section>

        <PageComments pageTitle={path.title} />

        <NewsletterSection
          title="Get Free Learning Resources"
          subtitle="Join our community for React, UI/UX, SEO, and career updates."
          interest="Learning Resources"
          source={path.title}
        />
      </MainLayout>
    </>
  );
}

function ModuleAccordion({ modules }: { modules: LearningModule[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const accents = [
    {
      badge: "bg-cyan-50 text-cyan-800",
      openBadge: "from-cyan-500 to-sky-600 shadow-cyan-500/30",
      row: "hover:border-cyan-200 hover:bg-cyan-50/50",
      open: "border-cyan-300 bg-gradient-to-br from-cyan-50 to-white ring-1 ring-cyan-200/80",
      chip: "border-cyan-100 bg-cyan-50 text-cyan-900",
      project: "border-violet-100 bg-violet-50 text-violet-950",
      projectLabel: "text-violet-700",
      dot: "bg-cyan-500",
    },
    {
      badge: "bg-sky-50 text-sky-800",
      openBadge: "from-sky-500 to-violet-500 shadow-sky-500/30",
      row: "hover:border-sky-200 hover:bg-sky-50/50",
      open: "border-sky-300 bg-gradient-to-br from-sky-50 to-white ring-1 ring-sky-200/80",
      chip: "border-sky-100 bg-sky-50 text-sky-900",
      project: "border-cyan-100 bg-cyan-50 text-cyan-950",
      projectLabel: "text-cyan-700",
      dot: "bg-sky-500",
    },
    {
      badge: "bg-violet-50 text-violet-800",
      openBadge: "from-violet-500 to-fuchsia-500 shadow-violet-500/30",
      row: "hover:border-violet-200 hover:bg-violet-50/50",
      open: "border-violet-300 bg-gradient-to-br from-violet-50 to-white ring-1 ring-violet-200/80",
      chip: "border-violet-100 bg-violet-50 text-violet-900",
      project: "border-sky-100 bg-sky-50 text-sky-950",
      projectLabel: "text-sky-700",
      dot: "bg-violet-500",
    },
  ];

  useEffect(() => {
    const applyHash = () => {
      const hash = window.location.hash.replace("#", "");
      const match = modules.find((module) => `module-${module.slug}` === hash);
      if (match) setOpenSlug(match.slug);
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, [modules]);

  return (
    <ol className="mt-8 space-y-3">
      {modules.map((module, index) => {
        const isOpen = openSlug === module.slug;
        const panelId = `module-panel-${module.slug}`;
        const accent = accents[index % accents.length];

        return (
          <li
            key={module.slug}
            id={`module-${module.slug}`}
            className={`scroll-mt-28 overflow-hidden rounded-2xl border transition ${
              isOpen
                ? accent.open
                : `border-slate-200 bg-white ${accent.row}`
            }`}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() =>
                setOpenSlug((current) =>
                  current === module.slug ? null : module.slug,
                )
              }
              className="flex w-full items-center gap-4 px-4 py-4 text-left sm:gap-5 sm:px-5 sm:py-5"
            >
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl font-mono text-sm font-bold ${
                  isOpen
                    ? `bg-gradient-to-br text-white shadow-md ${accent.openBadge}`
                    : accent.badge
                }`}
              >
                {module.n}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[15px] font-semibold leading-6 text-[#0f172a] sm:text-base">
                  {module.title}
                </span>
                <span className="mt-1 block text-sm leading-6 text-slate-500">
                  {module.description}
                </span>
              </span>
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border bg-white/80 transition ${
                  isOpen
                    ? "border-white text-slate-700"
                    : "border-slate-200 text-slate-400"
                }`}
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>
            </button>

            <div
              id={panelId}
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-1 gap-5 border-t border-white/70 px-4 pb-5 pt-1 sm:grid-cols-[1fr_17rem] sm:px-5 sm:pb-6 sm:pl-[4.5rem]">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                      Topics
                    </p>
                    <ol className="mt-3 space-y-2">
                      {module.topics.map((topic, topicIndex) => (
                        <li
                          key={topic}
                          className="flex gap-3 text-sm leading-6 text-slate-700"
                        >
                          <span
                            className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-[11px] font-semibold ${accent.chip}`}
                          >
                            {topicIndex + 1}
                          </span>
                          {topic}
                        </li>
                      ))}
                    </ol>
                  </div>
                  <div
                    className={`rounded-2xl border p-4 ${accent.project}`}
                  >
                    <p
                      className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${accent.projectLabel}`}
                    >
                      Mini project
                    </p>
                    <p className="mt-2 text-sm leading-6">
                      {module.miniProject}
                    </p>
                    {isOpen && module.contentHref ? (
                      <Link
                        to={module.contentHref}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#0f172a] underline-offset-4 hover:underline"
                      >
                        Open Module {module.n} lessons
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function MetaCard({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-cyan-100 bg-gradient-to-br from-cyan-50/80 to-white px-5 py-5">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-sky-600 text-white shadow-sm shadow-cyan-500/20">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-700">
          {label}
        </p>
        <p className="mt-0.5 text-sm font-semibold text-[#0f172a]">{value}</p>
      </div>
    </div>
  );
}
