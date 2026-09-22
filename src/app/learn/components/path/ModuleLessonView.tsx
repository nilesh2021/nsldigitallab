import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  CircleHelp,
  Lightbulb,
  ListChecks,
  Pencil,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

import SEO from "../../../../seo/SEO";
import MainLayout from "../../../layouts/MainLayout";
import NewsletterSection from "../../../components/common/NewsletterSection";
import SocialFollowRow from "../SocialFollowRow";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PageComments from "../PageComments";
import {
  LessonBlock,
  ModuleLesson,
  PublishedModule,
} from "../../types";
import { getCourseCatalog } from "../../data/catalogs";
import { lessonId } from "../../progress/storage";
import { useLearningProgress } from "../../progress/useLearningProgress";
import LessonProgress from "../progress/LessonProgress";
import ModuleProgress from "../progress/ModuleProgress";

type Step =
  | { kind: "intro" }
  | { kind: "lesson"; index: number }
  | { kind: "project" }
  | { kind: "summary" }
  | { kind: "check" };

type Props = {
  module: PublishedModule;
};

function stepKey(step: Step) {
  if (step.kind === "intro") return "intro";
  if (step.kind === "project") return "project";
  if (step.kind === "summary") return "summary";
  if (step.kind === "check") return "check";
  return `lesson-${step.index}`;
}

export default function ModuleLessonView({ module }: Props) {
  const catalog = getCourseCatalog(module.pathSlug);
  const progress = useLearningProgress(catalog);
  const [searchParams] = useSearchParams();
  const moduleIndex =
    catalog?.modules.findIndex((item) => item.slug === module.moduleSlug) ??
    Math.max(0, Number.parseInt(module.moduleNumber, 10) - 1);
  const moduleStats = progress.moduleStats(module.moduleSlug);

  const steps = useMemo<Step[]>(() => {
    const lessonSteps: Step[] = module.lessons.map((_, index) => ({
      kind: "lesson",
      index,
    }));
    const extra: Step[] = [];
    if (module.summary) extra.push({ kind: "summary" });
    if (module.knowledgeCheck) extra.push({ kind: "check" });
    return [{ kind: "intro" }, ...lessonSteps, { kind: "project" }, ...extra];
  }, [module.lessons, module.summary, module.knowledgeCheck]);

  const initialLessonSlug = searchParams.get("lesson");
  const initialStep = useMemo(() => {
    if (!initialLessonSlug) return 0;
    const lessonIndex = module.lessons.findIndex(
      (lesson) => lesson.slug === initialLessonSlug,
    );
    if (lessonIndex < 0) return 0;
    const match = steps.findIndex(
      (item) => item.kind === "lesson" && item.index === lessonIndex,
    );
    return match >= 0 ? match : 0;
  }, [initialLessonSlug, module.lessons, steps]);

  const [stepIndex, setStepIndex] = useState(initialStep);
  const step = steps[stepIndex];
  const currentLesson =
    step.kind === "lesson" ? module.lessons[step.index] : null;
  const currentLessonId = currentLesson
    ? lessonId(module.moduleSlug, currentLesson.slug)
    : null;
  const lessonComplete = currentLessonId
    ? progress.isLessonComplete(currentLessonId)
    : false;

  const lessonStepIndexes = useMemo(
    () =>
      steps
        .map((item, index) => (item.kind === "lesson" ? index : -1))
        .filter((index) => index >= 0),
    [steps],
  );
  const lessonCursor =
    step.kind === "lesson" ? lessonStepIndexes.indexOf(stepIndex) : -1;
  const prevLessonStep =
    lessonCursor > 0 ? lessonStepIndexes[lessonCursor - 1] : null;
  const nextLessonStep =
    lessonCursor >= 0 && lessonCursor < lessonStepIndexes.length - 1
      ? lessonStepIndexes[lessonCursor + 1]
      : null;
  const prevModuleLessons =
    catalog?.lessons.filter(
      (lesson) =>
        lesson.moduleSlug === catalog.modules[moduleIndex - 1]?.slug,
    ) ?? [];
  const prevModuleLastLesson =
    prevModuleLessons[prevModuleLessons.length - 1] ?? null;
  const nextModuleFirstLesson =
    catalog?.lessons.find(
      (lesson) =>
        lesson.moduleSlug === catalog.modules[moduleIndex + 1]?.slug,
    ) ?? null;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [stepIndex]);

  const title =
    step.kind === "intro"
      ? "Introduction"
      : step.kind === "project"
        ? module.miniProject.title
        : step.kind === "summary"
          ? "Module summary"
          : step.kind === "check"
            ? "Quick knowledge check"
            : module.lessons[step.index].title;

  const isFirst = stepIndex === 0;
  const isLast = stepIndex === steps.length - 1;

  return (
    <>
      <SEO
        title={module.seo.title}
        description={module.seo.description}
        keywords={module.seo.keywords}
        canonical={module.seo.canonical}
      />
      <MainLayout>
        <section className="relative overflow-hidden bg-[#060b14] pb-4 pt-24 sm:pb-5 sm:pt-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 p-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
              <div className="w-full max-w-sm shrink-0">
                <h1 className="text-xl font-bold tracking-tight text-white sm:text-2xl">
                  {module.title}
                </h1>
                <ModuleProgress
                  className="mt-2 w-full"
                  moduleNumber={moduleIndex + 1}
                  moduleCount={catalog?.moduleCount ?? 10}
                  completedLessons={moduleStats.completed}
                  totalLessons={moduleStats.total || module.lessons.length}
                  percent={moduleStats.percent}
                />
              </div>
              <div className="min-w-0 sm:text-right">
                <Breadcrumbs
                  className="mb-0 sm:[&_ol]:justify-end"
                  items={[
                    { label: "Learn", href: "/learn" },
                    { label: module.pathTitle, href: module.syllabusHref },
                    { label: `Module ${module.moduleNumber}` },
                  ]}
                />
                <p className="mt-1 text-xs text-slate-400">
                  {module.estimatedTime} · {module.lessons.length} lessons + mini
                  project
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f8fafc] py-8 sm:py-12">
          <div className="mx-auto grid max-w-7xl gap-6 px-6 lg:grid-cols-[13.5rem_1fr] lg:gap-8 lg:px-8">
            <nav
              aria-label="Lessons"
              className="h-fit rounded-xl border border-slate-200 bg-white p-2 lg:sticky lg:top-24"
            >
              <p className="px-2 pb-1 pt-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                In this module
              </p>
              <ol className="space-y-0.5">
                {steps.map((item, index) => {
                  const label =
                    item.kind === "intro"
                      ? "Introduction"
                      : item.kind === "project"
                        ? "Mini project"
                        : item.kind === "summary"
                          ? "Module summary"
                          : item.kind === "check"
                            ? "Knowledge check"
                            : `${String(item.index + 1).padStart(2, "0")}. ${
                                module.lessons[item.index].title
                              }`;
                  const active = index === stepIndex;
                  const itemLessonId =
                    item.kind === "lesson"
                      ? lessonId(
                          module.moduleSlug,
                          module.lessons[item.index].slug,
                        )
                      : null;
                  const itemComplete = itemLessonId
                    ? progress.isLessonComplete(itemLessonId)
                    : false;
                  return (
                    <li key={stepKey(item)}>
                      <button
                        type="button"
                        onClick={() => setStepIndex(index)}
                        className={`flex w-full items-start gap-1.5 rounded-lg px-2 py-1.5 text-left text-[13px] leading-4 transition ${
                          active
                            ? "bg-cyan-50 font-semibold text-cyan-900"
                            : itemComplete
                              ? "text-slate-500 hover:bg-slate-50"
                              : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {itemComplete ? (
                          <CheckCircle2 className="mt-px h-3 w-3 shrink-0 text-emerald-600" />
                        ) : null}
                        <span>{label}</span>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </nav>

            <article className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-cyan-700">
                {step.kind === "intro"
                  ? "Start here"
                  : step.kind === "project"
                    ? "Build"
                    : step.kind === "summary"
                      ? "Wrap up"
                      : step.kind === "check"
                        ? "Check"
                        : `Lesson ${step.index + 1} of ${module.lessons.length}`}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                {title}
              </h2>
              {currentLesson && currentLessonId ? (
                <LessonProgress
                  current={step.kind === "lesson" ? step.index + 1 : 0}
                  total={module.lessons.length}
                  complete={lessonComplete}
                  onMarkComplete={() =>
                    progress.markLessonComplete(currentLessonId)
                  }
                />
              ) : null}

              {step.kind === "intro" ? (
                <IntroBody module={module} />
              ) : step.kind === "project" ? (
                <ProjectBody module={module} />
              ) : step.kind === "summary" && module.summary ? (
                <SummaryBody summary={module.summary} />
              ) : step.kind === "check" && module.knowledgeCheck ? (
                <div className="mt-6">
                  <KnowledgeCheck block={module.knowledgeCheck} />
                </div>
              ) : step.kind === "lesson" ? (
                <LessonBody lesson={module.lessons[step.index]} />
              ) : null}

              <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                {step.kind === "lesson" ? (
                  prevLessonStep != null ? (
                    <button
                      type="button"
                      onClick={() => setStepIndex(prevLessonStep)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous Lesson
                    </button>
                  ) : prevModuleLastLesson ? (
                    <Link
                      to={prevModuleLastLesson.href}
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous Lesson
                    </Link>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 disabled:cursor-not-allowed disabled:opacity-40"
                    >
                      <ArrowLeft className="h-4 w-4" />
                      Previous Lesson
                    </button>
                  )
                ) : isFirst && module.prevModule ? (
                  <Link
                    to={module.prevModule.href}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    {module.prevModule.label}
                  </Link>
                ) : (
                  <button
                    type="button"
                    disabled={isFirst}
                    onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <ArrowLeft className="h-4 w-4" />
                    Previous
                  </button>
                )}
                {step.kind === "lesson" ? (
                  nextLessonStep != null ? (
                    <button
                      type="button"
                      onClick={() => setStepIndex(nextLessonStep)}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Next Lesson
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  ) : nextModuleFirstLesson ? (
                    <Link
                      to={nextModuleFirstLesson.href}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Next Lesson
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  ) : (
                    <Link
                      to={module.syllabusHref}
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                    >
                      Back to syllabus
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )
                ) : isLast ? (
                  <Link
                    to={module.nextModule?.href ?? module.syllabusHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    {module.nextModule
                      ? module.nextModule.label
                      : "Back to syllabus"}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() =>
                      setStepIndex((i) => Math.min(steps.length - 1, i + 1))
                    }
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Next
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
              {isLast ? (
                <p className="mt-4 text-sm text-slate-500">
                  {module.nextModule ? (
                    <>
                      Ready for the next module, or{" "}
                      <Link
                        to={module.syllabusHref}
                        className="font-medium text-cyan-800 underline-offset-4 hover:underline"
                      >
                        return to the syllabus
                      </Link>
                      .
                    </>
                  ) : (
                    <>
                      You finished the last module in this path. Return to the
                      syllabus whenever you want to review a topic.
                    </>
                  )}
                </p>
              ) : null}
            </article>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-8">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <SocialFollowRow />
          </div>
        </section>

        <PageComments
          pageTitle={`${module.pathTitle} · Module ${module.moduleNumber}`}
        />
        <NewsletterSection
          title="Get Free Learning Resources"
          subtitle="Join our community for React, UI/UX, SEO, and career updates."
          interest="Learning Resources"
          source={`${module.pathTitle} Module ${module.moduleNumber}`}
        />
      </MainLayout>
    </>
  );
}

function SummaryBody({
  summary,
}: {
  summary: NonNullable<PublishedModule["summary"]>;
}) {
  return (
    <div className="mt-6 space-y-5">
      <p className="text-lg font-medium text-slate-800">{summary.headline}</p>
      {summary.body.map((text) => (
        <p key={text} className="text-base leading-7 text-slate-600">
          {text}
        </p>
      ))}
      <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-cyan-900">
          <CheckCircle2 className="h-4 w-4" />
          You can now
        </p>
        <ul className="mt-3 space-y-2">
          {summary.recap.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-6 text-slate-700"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function IntroBody({ module }: { module: PublishedModule }) {
  return (
    <div className="mt-6 space-y-5">
      <p className="text-lg font-medium text-slate-800">
        {module.intro.headline}
      </p>
      {module.intro.body.map((text) => (
        <p key={text} className="text-base leading-7 text-slate-600">
          {text}
        </p>
      ))}
      <div className="rounded-2xl border border-cyan-100 bg-cyan-50/70 p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-cyan-900">
          <BookOpen className="h-4 w-4" />
          You will learn
        </p>
        <ul className="mt-3 space-y-2">
          {module.intro.youWillLearn.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-6 text-slate-700"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      {module.pathSlug === "ui-ux-design" ? (
        <Link
          to="/case-studies/online-wine-shopping"
          className="block rounded-2xl border border-[#eadfd3] bg-[#fbf8f4] p-5 transition hover:border-[#722F37]/40"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#722F37]">
            See it in practice
          </p>
          <p className="mt-1 text-sm font-semibold text-[#1a1214]">
            Online Wine Shopping case study
          </p>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            A full Discovery → Define → Ideate → Design → Testing story. Open
            it beside this module — it is not part of the lessons.
          </p>
          <p className="mt-3 text-sm font-semibold text-[#722F37]">
            Explore the Wine Shopping Case Study →
          </p>
        </Link>
      ) : null}
      <p className="text-sm text-slate-500">
        Use Next to open Lesson 1. You can also pick any lesson from the list
        on the left.
      </p>
    </div>
  );
}

function LessonBody({ lesson }: { lesson: ModuleLesson }) {
  return (
    <div className="mt-4">
      <p className="text-sm text-slate-500">
        {lesson.minutes} · {lesson.summary}
      </p>
      <div className="mt-6 space-y-5">
        {lesson.blocks.map((block, index) => (
          <Block key={`${lesson.slug}-${index}`} block={block} />
        ))}
      </div>
    </div>
  );
}

function ProjectBody({ module }: { module: PublishedModule }) {
  const project = module.miniProject;
  return (
    <div className="mt-6 space-y-5">
      <p className="text-base leading-7 text-slate-600">{project.goal}</p>
      <div className="rounded-2xl border border-violet-100 bg-violet-50 p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-violet-900">
          <ListChecks className="h-4 w-4" />
          Steps
        </p>
        <ol className="mt-3 space-y-2">
          {project.steps.map((step, index) => (
            <li
              key={step}
              className="flex gap-3 text-sm leading-6 text-slate-700"
            >
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white text-[11px] font-semibold text-violet-800">
                {index + 1}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </div>
      <CodePanel
        title={
          project.starterLabel ?? "Starter you can paste into App.jsx"
        }
        code={project.starterCode}
      />
      <div>
        <p className="text-sm font-semibold text-[#0f172a]">You are done when</p>
        <ul className="mt-2 space-y-2">
          {project.doneWhen.map((item) => (
            <li
              key={item}
              className="flex gap-2 text-sm leading-6 text-slate-600"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-600" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-slate-800">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={index}>{part}</span>;
      })}
    </>
  );
}

function Block({ block }: { block: LessonBlock }) {
  if (block.type === "p") {
    return (
      <p className="text-base leading-7 text-slate-600">
        <RichText text={block.text} />
      </p>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-slate-600">
        {block.items.map((item) => (
          <li key={item}>
            <RichText text={item} />
          </li>
        ))}
      </ul>
    );
  }
  if (block.type === "term") {
    return (
      <div className="rounded-2xl border border-sky-100 bg-sky-50/80 p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-sky-700">
          New word
        </p>
        <p className="mt-1 text-base font-semibold text-[#0f172a]">
          {block.term}
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600">
          <RichText text={block.meaning} />
        </p>
      </div>
    );
  }
  if (block.type === "code") {
    return <CodePanel title={block.title} code={block.code} />;
  }
  if (block.type === "tip") {
    return (
      <div className="flex gap-3 rounded-2xl border border-amber-100 bg-amber-50 p-4">
        <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
        <div>
          <p className="text-sm font-semibold text-amber-950">Beginner tip</p>
          <p className="mt-1 text-sm leading-6 text-amber-950/80">
            <RichText text={block.text} />
          </p>
        </div>
      </div>
    );
  }
  if (block.type === "related") {
    return (
      <Link
        to={block.href}
        className="block rounded-2xl border border-[#eadfd3] bg-[#fbf8f4] p-5 transition hover:border-[#722F37]/40"
      >
        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[#722F37]">
          {block.kicker ?? "See it in practice"}
        </p>
        <p className="mt-1 text-sm font-semibold text-[#1a1214]">
          {block.title}
        </p>
        <p className="mt-1 text-sm leading-6 text-slate-600">{block.text}</p>
        <p className="mt-3 text-sm font-semibold text-[#722F37]">
          {block.ctaLabel ?? "Open this section in the case study →"}
        </p>
      </Link>
    );
  }
  if (block.type === "exercise") {
    return (
      <div className="rounded-2xl border border-slate-200 bg-[#f8fafc] p-5">
        <p className="flex items-center gap-2 text-sm font-semibold text-[#0f172a]">
          <Pencil className="h-4 w-4 text-cyan-700" />
          {block.title ?? "Try it yourself"}
        </p>
        <ol className="mt-3 space-y-2">
          {block.steps.map((step, index) => (
            <li
              key={step}
              className="flex gap-3 text-sm leading-6 text-slate-600"
            >
              <span className="font-mono text-xs text-cyan-700">{index + 1}.</span>
              <RichText text={step} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
  return <KnowledgeCheck block={block} />;
}

function CodePanel({ title, code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#0b1220]">
      {title ? (
        <p className="border-b border-white/10 px-4 py-2 text-xs font-medium text-slate-300">
          {title}
        </p>
      ) : null}
      <pre className="overflow-x-auto p-4 text-[13px] leading-6 text-cyan-100">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function KnowledgeCheck({
  block,
}: {
  block: Extract<LessonBlock, { type: "check" }>;
}) {
  const [picked, setPicked] = useState<string | null>(null);
  const chosen = block.options.find((option) => option.id === picked);

  return (
    <div className="rounded-2xl border border-violet-100 bg-violet-50/60 p-5">
      <p className="flex items-center gap-2 text-sm font-semibold text-violet-950">
        <CircleHelp className="h-4 w-4" />
        Quick check
      </p>
      <p className="mt-2 text-sm font-medium leading-6 text-slate-800">
        {block.question}
      </p>
      <div className="mt-3 space-y-2">
        {block.options.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setPicked(option.id)}
            className={`block w-full rounded-xl border px-3 py-2.5 text-left text-sm leading-6 transition ${
              picked === option.id
                ? "border-violet-300 bg-white"
                : "border-transparent bg-white/70 hover:border-violet-200"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
      {chosen ? (
        <p
          className={`mt-3 text-sm leading-6 ${
            chosen.correct ? "text-emerald-800" : "text-rose-800"
          }`}
        >
          {chosen.correct ? "Correct. " : "Not quite. "}
          {block.explain}
        </p>
      ) : null}
    </div>
  );
}
