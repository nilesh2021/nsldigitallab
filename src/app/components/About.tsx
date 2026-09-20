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
      className="scroll-mt-24 border-t border-slate-100 bg-[#f5f7fb] py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200/80 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-700">
            <Sparkles className="h-3 w-3" />
            Why choose NSL
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-[2.5rem] sm:leading-tight">
            A studio that treats{" "}
            <span className="text-slate-500">design as a growth system</span>
          </h2>
          <p className="mt-3 text-sm leading-6 text-slate-600 sm:text-base">
            Strategy, UI/UX, web, and marketing under one roof—so your brand
            looks consistent, ranks, and actually converts.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;
            return (
              <article
                key={reason.number}
                className="flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white p-5"
              >
                <div className="flex items-center justify-between gap-3">
                  <span className="text-[11px] font-semibold tabular-nums tracking-widest text-slate-400">
                    {reason.number}
                  </span>
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-cyan-50 text-cyan-700">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-[#0f172a]">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {reason.body}
                </p>
              </article>
            );
          })}
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl bg-[#0f172a]">
          <div className="grid gap-px bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item) => (
              <div key={item.label} className="bg-[#0f172a] px-5 py-5 text-center">
                <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {item.number}
                </p>
                <p className="mt-1 text-xs text-slate-400 sm:text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
          <p className="max-w-lg text-sm text-slate-600">
            Need a focused website, SEO sprint, or a full design-to-growth stack?
          </p>
          <Link
            to="/services"
            className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[#0f172a] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1e293b]"
          >
            View our services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
