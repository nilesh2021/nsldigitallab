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
import { getCourseCatalog } from "../../data/catalogs";
import { useLearningProgress } from "../../progress/useLearningProgress";
import CourseProgress from "../progress/CourseProgress";

type Props = {
  path: LearningPath;
};

export default function LearningPathView({ path }: Props) {
  const Icon = path.icon;
  const firstModule = path.modules[0];
  const firstModuleId = `module-${firstModule?.slug ?? "start"}`;
  const startHref = firstModule?.contentHref ?? `#${firstModuleId}`;
  const startIsRoute = Boolean(firstModule?.contentHref);
  const catalog = getCourseCatalog(path.slug);
  const progress = useLearningProgress(catalog);

  return (
    <>
      <SEO
        title={path.seo.title}
        description={path.seo.description}
        keywords={path.seo.keywords}
        canonical={path.seo.canonical}
      />

      <MainLayout>
        <section className="relative overflow-hidden bg-[#060b14] pb-10 pt-24 sm:pb-12 sm:pt-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.14) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-cyan-500/[0.12] blur-[90px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 rounded-full bg-violet-600/[0.1] blur-[100px]" />

          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <Link
              to="/learn"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition hover:text-white"
            >
              ← All paths
            </Link>

            <div className="mt-5 grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20.5rem] lg:gap-8">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-[11px] font-medium text-slate-300">
                  <Icon className="h-3 w-3 text-cyan-400" />
                  <span className="text-cyan-300">{path.eyebrow}</span>
                  <span className="h-1 w-1 rounded-full bg-slate-500" />
                  <span>{path.level}</span>
                </div>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-[2.45rem] sm:leading-[1.12]">
                  {path.title}
                  <span className="mt-1 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                    {path.tagline}
                  </span>
                </h1>

                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-[15px]">
                  {path.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2.5">
                  {startIsRoute &&
                  progress.hydrated &&
                  progress.stats.completedLessons > 0 &&
                  progress.stats.nextLesson ? (
                    <Link
                      to={progress.stats.nextLesson.href}
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#060b14] transition hover:bg-slate-100"
                    >
                      Continue Learning
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : startIsRoute ? (
                    <Link
                      to={startHref}
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#060b14] transition hover:bg-slate-100"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      Start Module 01
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={startHref}
                      className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-semibold text-[#060b14] transition hover:bg-slate-100"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      Start Module 01
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  )}
                  <a
                    href="#curriculum"
                    className="inline-flex items-center rounded-lg border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-white/20 hover:bg-white/[0.08]"
                  >
                    View syllabus
                  </a>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-2">
                  <MetaChip icon={GraduationCap} label="Level" value={path.level} />
                  <MetaChip icon={Layers} label="Modules" value={path.moduleLabel} />
                  <MetaChip icon={Clock} label="Time" value={path.estimatedTime} />
                </div>

                {catalog ? (
                  <CourseProgress
                    percent={progress.stats.percent}
                    completedLessons={progress.stats.completedLessons}
                    totalLessons={progress.stats.totalLessons}
                    completedModules={progress.stats.completedModules}
                    totalModules={progress.stats.totalModules}
                    nextLesson={progress.stats.nextLesson}
                    isCourseComplete={progress.stats.isCourseComplete}
                    hydrated={progress.hydrated}
                  />
                ) : null}
              </div>

              <aside className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-5 backdrop-blur-sm">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  You will be able to
                </p>
                <ul className="mt-3 space-y-2.5">
                  {path.outcomes.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 text-[13px] leading-5 text-slate-300"
                    >
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan-400" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-4 border-t border-white/[0.06] pt-3">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                    Prerequisites
                  </p>
                  <ul className="mt-2 space-y-1">
                    {path.prerequisites.map((item) => (
                      <li key={item} className="text-[12px] leading-5 text-slate-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section
          id="curriculum"
          className="scroll-mt-24 border-t border-slate-100 bg-gradient-to-b from-[#f3f8fc] via-white to-violet-50/40 py-14 sm:py-20"
        >
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
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

            {path.slug === "ui-ux-design" ? (
              <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-[#0f172a] p-6 sm:p-8">
                <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-300">
                  Practice what you learned
                </p>
                <h3 className="mt-2 text-2xl font-bold tracking-tight text-white">
                  See the full process on a real project
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-400">
                  Walk through research, strategy, IA, UI, and testing on a
                  separate portfolio case study — not inside these modules.
                </p>
                <Link
                  to="/case-studies/online-wine-shopping"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 hover:text-white"
                >
                  Explore the Wine Shopping Case Study →
                </Link>
              </div>
            ) : null}
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-8">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <div className="grid gap-3 sm:grid-cols-2">
              <a
                href={path.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 transition hover:border-[#0A66C2]/30 hover:bg-[#0A66C2]/[0.04]"
              >
                <span>
                  <span className="block text-sm font-semibold text-[#0f172a]">
                    Follow on LinkedIn
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    Modules, project ideas, and career notes
                  </span>
                </span>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0A66C2] text-white">
                  <Linkedin className="h-4 w-4" />
                </span>
              </a>

              <a
                href={path.download.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 bg-[#f8fafc] px-4 py-3.5 transition hover:border-slate-400 hover:bg-slate-50"
              >
                <span>
                  <span className="block text-sm font-semibold text-[#0f172a]">
                    {path.download.label}
                  </span>
                  <span className="mt-0.5 block text-xs text-slate-500">
                    Printable checklist that mirrors this path
                  </span>
                </span>
                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#0f172a] text-white">
                  <Download className="h-4 w-4" />
                </span>
              </a>
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
              <div className="min-h-0 overflow-hidden">
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
                  <div className={`rounded-2xl border p-4 ${accent.project}`}>
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

function MetaChip({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Clock;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/[0.08] bg-white/[0.035] px-3 py-2.5">
      <p className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-500">
        <Icon className="h-3 w-3 text-cyan-400" />
        {label}
      </p>
      <p className="mt-1 truncate text-xs font-semibold text-white">{value}</p>
    </div>
  );
}
