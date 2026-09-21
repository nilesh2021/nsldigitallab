import { ArrowRight, Wine } from "lucide-react";
import { Link } from "react-router-dom";

import SEO from "../../seo/SEO";
import MainLayout from "../layouts/MainLayout";
import { CASE_STUDIES } from "./data/studies";

const PROCESS = ["Discovery", "Define", "Ideate", "Design", "Testing"];

export default function CaseStudiesPage() {
  const featured = CASE_STUDIES.find((study) => study.featured) ?? CASE_STUDIES[0];

  return (
    <>
      <SEO
        title="UI/UX Case Studies | Design in Practice | NSL Digital Lab"
        description="Explore end-to-end UI/UX projects and see how research, strategy, interaction design and visual design come together."
        keywords="UI UX case study, e-commerce UX, wine shopping UX, portfolio case study, NSL Digital Lab"
        canonical="/case-studies"
      />

      <MainLayout>
        <section className="relative overflow-hidden bg-[#060b14] pb-16 pt-24 sm:pb-20 sm:pt-28">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.28]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.14) 1px, transparent 0)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="pointer-events-none absolute -left-16 top-8 h-72 w-72 rounded-full bg-[#722F37]/40 blur-[110px]" />
          <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-cyan-500/[0.1] blur-[120px]" />

          <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#C4A35A]">
              Case studies
            </p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
              Design in Practice
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400 sm:text-lg">
              Explore end-to-end UI/UX projects and see how research, strategy,
              interaction design and visual design come together.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              {PROCESS.map((stage) => (
                <span
                  key={stage}
                  className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[12px] font-medium text-slate-300"
                >
                  {stage}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-[#f7f4ef] py-14 sm:py-20">
          <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#722F37]">
              Featured case study
            </p>
            <article className="mt-5 overflow-hidden rounded-[1.75rem] border border-[#e6dccf] bg-white shadow-[0_24px_80px_-40px_rgba(114,47,55,0.45)]">
              <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
                <div className="p-7 sm:p-10">
                  <div className="inline-flex items-center gap-2 rounded-full bg-[#722F37]/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#722F37]">
                    <Wine className="h-3.5 w-3.5" />
                    {featured.category}
                  </div>
                  <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#1a1214] sm:text-4xl">
                    {featured.title}
                  </h2>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600 sm:text-base">
                    {featured.blurb}
                  </p>
                  <p className="mt-5 text-sm font-medium text-[#722F37]">
                    {featured.process}
                  </p>
                  <Link
                    to={featured.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#722F37] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#5c242c]"
                  >
                    View Case Study
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
                <div className="relative min-h-[240px] bg-gradient-to-br from-[#3b151c] via-[#722F37] to-[#1a1214] p-8">
                  <div className="absolute inset-6 rounded-2xl border border-white/10 bg-white/[0.06] p-5 backdrop-blur-sm">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-[#C4A35A]">
                      Oak & Cork
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      Find a bottle you will actually enjoy.
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-3">
                      {["Home", "Discover", "Cellar", "Checkout"].map((label) => (
                        <div
                          key={label}
                          className="rounded-xl border border-white/10 bg-black/20 px-3 py-4 text-center text-xs text-slate-200"
                        >
                          {label}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>
      </MainLayout>
    </>
  );
}
