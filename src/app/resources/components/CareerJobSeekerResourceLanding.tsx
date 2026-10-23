import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles, type LucideIcon } from "lucide-react";

import MainLayout from "../../layouts/MainLayout";
import ResourceDownload from "./ResourceDownload";
import ResourceCard from "./ResourceCard";
import SEO from "../../../seo/SEO";
import FAQSchema from "../../../seo/schemas/FAQSchema";
import { PAGE_SEO } from "../../../seo/pages";
import { resources } from "../../../data/resources";

type Stat = { label: string; value: string };
type Benefit = { title: string; description: string; icon: LucideIcon };
type Step = { n: string; title: string; body: string };
type Faq = { question: string; answer: string };

export type CareerJobSeekerLandingConfig = {
  slug: string;
  seoKey: keyof typeof PAGE_SEO;
  downloadUrl: string;
  downloadType: string;
  resourceTitle: string;
  heroBadge: string;
  h1: string;
  heroDescription: string;
  heroCtaLabel: string;
  secondaryLink?: { to: string; label: string };
  stats: Stat[];
  mockup: ReactNode;
  benefits: Benefit[];
  includedTitle: string;
  includedItems: string[];
  steps: Step[];
  bottomCtaLabel: string;
  faqs: Faq[];
  faqIntro: string;
  relatedSlugs: string[];
  extraRelatedLinks?: { to: string; label: string }[];
};

export default function CareerJobSeekerResourceLanding({
  config,
}: {
  config: CareerJobSeekerLandingConfig;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const resource = resources.find((item) => item.slug === config.slug);
  const seo = PAGE_SEO[config.seoKey];
  const related = config.relatedSlugs
    .map((slug) => resources.find((item) => item.slug === slug))
    .filter((item): item is (typeof resources)[number] => Boolean(item));

  return (
    <>
      <SEO {...seo} />
      <FAQSchema faqs={config.faqs} />

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
                  {config.heroBadge}
                </p>
                <h1 className="mt-8 text-4xl font-bold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.1rem]">
                  {config.h1}
                </h1>
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
                  {config.heroDescription}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#download"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-cyan-400 px-7 py-3.5 text-sm font-semibold text-[#061018] transition hover:-translate-y-0.5 hover:bg-cyan-300"
                  >
                    {config.heroCtaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  {config.secondaryLink ? (
                    <Link
                      to={config.secondaryLink.to}
                      className="inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
                    >
                      {config.secondaryLink.label}
                    </Link>
                  ) : null}
                </div>
                <dl className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {config.stats.map((stat) => (
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
              <div className="lg:pt-4">{config.mockup}</div>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 bg-white py-20 sm:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
              Why download this free resource?
            </h2>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {config.benefits.map((item) => {
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
              {config.includedTitle}
            </h2>
            <ul className="mt-10 grid gap-3 sm:grid-cols-2">
              {config.includedItems.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-500" />
                  {item}
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
                  {config.steps.map((step) => (
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
                  {config.bottomCtaLabel}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>

              <div id="download" className="scroll-mt-28">
                <ResourceDownload
                  slug={resource?.slug ?? config.slug}
                  resourceTitle={resource?.title ?? config.resourceTitle}
                  downloadUrl={config.downloadUrl}
                  type={resource?.type ?? config.downloadType}
                />
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
              <p className="mt-4 text-base leading-7 text-slate-600">{config.faqIntro}</p>
              <Link
                to="/resources/career"
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700"
              >
                Career resources hub
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="divide-y divide-slate-200 border-y border-slate-200">
              {config.faqs.map((faq, index) => {
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
                      <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600">{faq.answer}</p>
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
                <div className="hidden gap-4 sm:flex">
                  <Link to="/resources/career" className="text-sm font-semibold text-cyan-700">
                    Career hub
                  </Link>
                  <Link to="/resources" className="text-sm font-semibold text-cyan-700">
                    Browse all
                  </Link>
                </div>
              </div>
              <div
                className={`mt-10 grid gap-6 sm:grid-cols-2 ${
                  related.length > 2 ? "lg:grid-cols-3" : ""
                }`}
              >
                {related.map((item) => (
                  <ResourceCard key={item.id} resource={item} />
                ))}
              </div>
              {config.extraRelatedLinks?.length ? (
                <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {config.extraRelatedLinks.map((link) => (
                    <li key={link.to}>
                      <Link to={link.to} className="text-sm font-semibold text-cyan-700">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>
        ) : null}
      </MainLayout>
    </>
  );
}
