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
import { Link } from "react-router-dom";

import SEO from "../../../../seo/SEO";
import MainLayout from "../../../layouts/MainLayout";
import NewsletterSection from "../../../components/common/NewsletterSection";
import Breadcrumbs from "../../../components/Breadcrumbs";
import PageComments from "../PageComments";
import {
  LessonBlock,
  ModuleLesson,
  PublishedModule,
} from "../../types";

type Step =
  | { kind: "intro" }
  | { kind: "lesson"; index: number }
  | { kind: "project" };

type Props = {
  module: PublishedModule;
};

function stepKey(step: Step) {
  if (step.kind === "intro") return "intro";
  if (step.kind === "project") return "project";
  return `lesson-${step.index}`;
}

export default function ModuleLessonView({ module }: Props) {
  const steps = useMemo<Step[]>(() => {
    const lessonSteps: Step[] = module.lessons.map((_, index) => ({
      kind: "lesson",
      index,
    }));
    return [{ kind: "intro" }, ...lessonSteps, { kind: "project" }];
  }, [module.lessons]);

  const [stepIndex, setStepIndex] = useState(0);
  const step = steps[stepIndex];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [stepIndex]);

  const title =
    step.kind === "intro"
      ? "Introduction"
      : step.kind === "project"
        ? module.miniProject.title
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
        <section className="relative overflow-hidden bg-[#060b14] pb-12 pt-28 sm:pb-14 sm:pt-32">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <Breadcrumbs
              items={[
                { label: "Learn", href: "/learn" },
                { label: module.pathTitle, href: module.syllabusHref },
                { label: `Module ${module.moduleNumber}` },
              ]}
            />
            <p className="mt-2 text-sm font-medium text-cyan-300">
              {module.pathTitle} · Module {module.moduleNumber}
            </p>
            <h1 className="mt-3 max-w-3xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              {module.title}
            </h1>
            <p className="mt-3 text-sm text-slate-400">
              {module.estimatedTime} · {module.lessons.length} lessons + mini
              project
            </p>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f8fafc] py-10 sm:py-14">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[16.5rem_1fr] lg:px-8">
            <nav
              aria-label="Lessons"
              className="h-fit rounded-2xl border border-slate-200 bg-white p-4 lg:sticky lg:top-24"
            >
              <p className="px-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-400">
                In this module
              </p>
              <ol className="mt-3 space-y-1">
                {steps.map((item, index) => {
                  const label =
                    item.kind === "intro"
                      ? "Introduction"
                      : item.kind === "project"
                        ? "Mini project"
                        : `${String(item.index + 1).padStart(2, "0")}. ${
                            module.lessons[item.index].title
                          }`;
                  const active = index === stepIndex;
                  return (
                    <li key={stepKey(item)}>
                      <button
                        type="button"
                        onClick={() => setStepIndex(index)}
                        className={`w-full rounded-xl px-3 py-2.5 text-left text-sm leading-5 transition ${
                          active
                            ? "bg-cyan-50 font-semibold text-cyan-900"
                            : "text-slate-600 hover:bg-slate-50"
                        }`}
                      >
                        {label}
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
                    : `Lesson ${step.index + 1} of ${module.lessons.length}`}
              </p>
              <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#0f172a] sm:text-3xl">
                {title}
              </h2>

              {step.kind === "intro" ? (
                <IntroBody module={module} />
              ) : step.kind === "project" ? (
                <ProjectBody module={module} />
              ) : (
                <LessonBody lesson={module.lessons[step.index]} />
              )}

              <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="button"
                  disabled={isFirst}
                  onClick={() => setStepIndex((i) => Math.max(0, i - 1))}
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>
                {isLast ? (
                  <Link
                    to={module.syllabusHref}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0f172a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Back to syllabus
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
                  Module 02 is not published yet. Return to the syllabus when
                  you are ready for JSX and components.
                </p>
              ) : null}
            </article>
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
      <CodePanel title="Starter you can paste into App.jsx" code={project.starterCode} />
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

function Block({ block }: { block: LessonBlock }) {
  if (block.type === "p") {
    return <p className="text-base leading-7 text-slate-600">{block.text}</p>;
  }
  if (block.type === "ul") {
    return (
      <ul className="list-disc space-y-2 pl-5 text-base leading-7 text-slate-600">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
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
        <p className="mt-1 text-sm leading-6 text-slate-600">{block.meaning}</p>
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
          <p className="mt-1 text-sm leading-6 text-amber-950/80">{block.text}</p>
        </div>
      </div>
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
              {step}
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
