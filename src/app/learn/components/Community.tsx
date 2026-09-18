import { Briefcase, GraduationCap, Rocket } from "lucide-react";

const audiences = [
  {
    icon: GraduationCap,
    title: "Students",
    description:
      "Learn industry-ready skills before graduation and build a portfolio that stands out.",
  },
  {
    icon: Briefcase,
    title: "Job seekers",
    description:
      "Prepare for interviews, tighten your resume, and gain project experience you can talk about.",
  },
  {
    icon: Rocket,
    title: "Freelancers",
    description:
      "Learn how to deliver websites, SEO, and campaigns for clients — and grow your practice.",
  },
];

export default function Community() {
  return (
    <section className="border-t border-slate-100 bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            Who it is for
          </span>
          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
            Built for people starting
            <span className="block text-slate-500">or switching careers</span>
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-slate-200 bg-[#f8fafc] p-7 transition hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-lg hover:shadow-slate-200/70"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-700">
                <item.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-[#0f172a]">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
