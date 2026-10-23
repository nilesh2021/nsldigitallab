import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  CheckCircle2,
  Mic,
  MessageCircle,
  Sparkles,
  Volume2,
} from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import ResourceDownload from "../components/ResourceDownload";
import ResourceCard from "../components/ResourceCard";
import SEO from "../../../seo/SEO";
import FAQSchema from "../../../seo/schemas/FAQSchema";
import { PAGE_SEO } from "../../../seo/pages";
import { resources } from "../../../data/resources";

const RESOURCE_SLUG = "500-tongue-twisters-english-pronunciation";
const PDF_PATH = "/downloads/500-tongue-twisters-english-pronunciation.pdf";

const resource = resources.find((item) => item.slug === RESOURCE_SLUG);

const relatedSlugs = ["spoken-english-practice-sheet"];

const benefits = [
  {
    title: "Sharper pronunciation",
    description:
      "Repeat tricky consonant and vowel sounds until your mouth learns the shapes native speakers use.",
    icon: Volume2,
  },
  {
    title: "Clearer diction",
    description:
      "Train your tongue to separate words cleanly so listeners catch every syllable in fast speech.",
    icon: Mic,
  },
  {
    title: "Speaking clarity",
    description:
      "Build rhythm and pacing with short drills you can practise in five minutes between meetings or classes.",
    icon: MessageCircle,
  },
  {
    title: "More confidence",
    description:
      "Walk into interviews, presentations, and calls knowing you have warmed up with purposeful practice.",
    icon: Sparkles,
  },
];

const samples = [
  "Peter Piper picked a peck of pickled peppers.",
  "She sells seashells by the seashore.",
  "How much wood would a woodchuck chuck if a woodchuck could chuck wood?",
  "Unique New York, unique New York, you know you need unique New York.",
  "Red lorry, yellow lorry, red lorry, yellow lorry.",
  "The thirty-three thieves thought that they thrilled the throne throughout Thursday.",
  "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair.",
  "Six slippery snails slid slowly seaward.",
];

const steps = [
  {
    n: "01",
    title: "Enter your email",
    body: "Use the download card on this page. No account is required.",
  },
  {
    n: "02",
    title: "Unlock instantly",
    body: "The PDF download button appears as soon as the form succeeds.",
  },
  {
    n: "03",
    title: "Save the PDF",
    body: "Download the 8-page guide and practise a few twisters each day.",
  },
];

const faqs = [
  {
    question: "Is the 500 Tongue Twisters PDF really free?",
    answer:
      "Yes. Enter your email on this page to unlock the PDF. There is no paid plan required for this download.",
  },
  {
    question: "How many pages are in the PDF?",
    answer:
      "The guide is an 8-page PDF with tongue twisters grouped for pronunciation and speaking practice.",
  },
  {
    question: "Who is this resource for?",
    answer:
      "Students, job seekers, professionals, and anyone who wants clearer English pronunciation and speaking confidence.",
  },
  {
    question: "Where is the PDF file stored?",
    answer:
      "After you unlock the download, you get the file from this site at /downloads/500-tongue-twisters-english-pronunciation.pdf. Add that file to public/downloads/ in the project if you are hosting the site yourself.",
  },
];

export default function TongueTwistersLandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const related = relatedSlugs
    .map((slug) => resources.find((item) => item.slug === slug))
    .filter((item): item is (typeof resources)[number] => Boolean(item));

  return (
    <>
      <SEO {...PAGE_SEO.tongueTwistersPdf} />
      <FAQSchema faqs={faqs} />

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
            <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
              <div className="max-w-2xl">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
                  <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                  Free 8-page PDF
                </p>
                <h1 className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.2rem]">
                  500 Tongue Twisters for Better English Pronunciation
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  Download a free PDF of tongue twisters to improve pronunciation, diction, and
                  speaking clarity. Practise daily and build confidence for interviews and
                  presentations.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#061018] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    Download Free PDF
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <Link
                    to="/learn/spoken-english-communication"
                    className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                  >
                    Spoken English path
                  </Link>
                </div>
                <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {[
                    { label: "Twisters", value: "500" },
                    { label: "Format", value: "8-page PDF" },
                    { label: "Price", value: "Free" },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                    >
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-400">
                        {stat.label}
                      </dt>
                      <dd className="mt-1 text-lg font-semibold text-white">{stat.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="lg:pt-4">
                <div
                  className="mx-auto max-w-sm rotate-1 rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800 to-slate-950 p-6 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]"
                  aria-hidden
                >
                  <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-3 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-cyan-300">
                    PDF cover
                  </div>
                  <p className="mt-6 text-2xl font-bold leading-tight text-white">
                    500 Tongue Twisters
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Better English pronunciation · diction · confidence
                  </p>
                  <div className="mt-8 space-y-2 border-t border-white/10 pt-6 text-xs text-slate-500">
                    <p>NSL Digital Lab · Free download</p>
                    <p>8 pages · Speaking practice</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Why practise tongue twisters?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Short, repeatable phrases wake up the muscles you use for clear English. Use them
              before calls, classes, or interviews.
            </p>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((item) => {
                const Icon = item.icon;
                return (
                  <article
                    key={item.title}
                    className="rounded-2xl border border-slate-200/80 bg-slate-50 p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[#0f172a]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-[#f5f7fb] py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Sample tongue twisters
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Try these aloud slowly, then speed up. The full PDF includes hundreds more.
            </p>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {samples.map((line) => (
                <li
                  key={line}
                  className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-16">
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                  How the free download works
                </h2>
                <div className="mt-12 grid gap-5 sm:grid-cols-3">
                  {steps.map((step) => (
                    <article
                      key={step.n}
                      className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                    >
                      <span className="text-xs font-semibold tabular-nums text-slate-400">
                        {step.n}
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-[#0f172a]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{step.body}</p>
                    </article>
                  ))}
                </div>
                <a
                  href="#download"
                  className="mt-10 inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-slate-800"
                >
                  Download Free PDF
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div id="download" className="scroll-mt-28">
                {resource ? (
                  <ResourceDownload
                    slug={resource.slug}
                    resourceTitle={resource.title}
                    downloadUrl={PDF_PATH}
                    type={resource.type}
                  />
                ) : (
                  <ResourceDownload
                    slug={RESOURCE_SLUG}
                    resourceTitle="500 Tongue Twisters for Better English Pronunciation"
                    downloadUrl={PDF_PATH}
                    type="PDF"
                  />
                )}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:px-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                Common questions
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Free PDF access, file format, and who this guide is for.
              </p>
              <Link
                to="/resources"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700"
              >
                Browse all resources
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div key={faq.question} className="py-5">
                    <button
                      type="button"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? null : index)}
                      className="flex w-full items-center justify-between gap-4 text-left text-base font-semibold text-[#0f172a]"
                    >
                      {faq.question}
                      <span
                        className={`text-lg font-normal text-slate-400 transition ${isOpen ? "rotate-45" : ""}`}
                      >
                        +
                      </span>
                    </button>
                    {isOpen ? (
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">
                        {faq.answer}
                      </p>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="border-t border-slate-100 bg-[#f5f7fb] py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex items-end justify-between gap-4">
                <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                  Related resources
                </h2>
                <Link to="/resources" className="hidden text-sm font-semibold text-cyan-700 sm:inline">
                  Browse all
                </Link>
              </div>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {related.map((item) => (
                  <ResourceCard key={item.id} resource={item} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </MainLayout>
    </>
  );
}
