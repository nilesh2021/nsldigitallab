import {
  ArrowRight,
  Gauge,
  Handshake,
  PenTool,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";

const reasons = [
  {
    number: "01",
    icon: PenTool,
    title: "Craft that converts",
    body: "Interfaces and sites that look premium, load fast, and make the next step obvious.",
  },
  {
    number: "02",
    icon: Gauge,
    title: "Growth baked in",
    body: "SEO, performance, and messaging are part of the brief—not a bolt-on after launch.",
  },
  {
    number: "03",
    icon: Handshake,
    title: "Clear partnership",
    body: "You always know the stage, the next deliverable, and why it exists. No black-box retainers.",
  },
];

const metrics = [
  { number: "12+", label: "Projects delivered" },
  { number: "10+", label: "Happy clients" },
  { number: "1+", label: "Years in market" },
  { number: "95%", label: "Satisfaction" },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 border-t border-slate-100 bg-[#f5f7fb] py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-end lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
              <Sparkles className="h-3.5 w-3.5" />
              Why choose NSL
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl lg:leading-tight">
              A studio that treats
              <span className="mt-1 block text-slate-500">design as a growth system</span>
            </h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8 lg:justify-self-end">
            Strategy, UI/UX, web, and marketing under one roof—so your brand looks consistent, ranks, and actually converts.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.number}
                className="group relative overflow-hidden rounded-[1.75rem] border border-slate-200/80 bg-white p-6 sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold tabular-nums tracking-widest text-slate-400">
                    {reason.number}
                  </span>
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-10 text-xl font-semibold tracking-tight text-[#0f172a]">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                  {reason.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-5 overflow-hidden rounded-[1.75rem] bg-[#0f172a]">
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="bg-[#0f172a] px-6 py-8 text-center sm:py-10">
                <p className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {item.number}
                </p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
          <p className="max-w-lg text-slate-600">
            Need a focused website, SEO sprint, or a full design-to-growth stack?
          </p>
          <Link
            to="/services"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#0f172a] px-7 py-3.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1e293b]"
          >
            View our services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
