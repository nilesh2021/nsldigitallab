import {
  Users,
  Award,
  Rocket,
  CheckCircle,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const highlights = [
  "User-focused UI/UX Design",
  "SEO & Performance Optimization",
  "Modern Responsive Websites",
  "Transparent Communication",
  "Growth-focused Digital Strategy",
];

const metrics = [
  {
    number: "12+",
    label: "Projects Delivered",
    icon: Rocket,
  },
  {
    number: "10+",
    label: "Happy Clients",
    icon: Users,
  },
  {
    number: "1+",
    label: "Years Experience",
    icon: Award,
  },
  {
    number: "95%",
    label: "Client Satisfaction",
    icon: TrendingUp,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-24 bg-white py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
              Why Choose NSL
            </span>

            <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-5xl lg:leading-tight">
              We Build Digital
              <br />
              Experiences That
              <br />
              Deliver Results.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              At NSL Digital Lab, we combine strategy, design,
              development and digital marketing to help
              businesses attract more customers, improve user
              experience and achieve sustainable online growth.
            </p>

            <ul className="mt-8 space-y-3.5">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                    <CheckCircle className="h-4 w-4 text-cyan-600" />
                  </span>
                  <span className="text-sm text-slate-700 sm:text-base">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1e293b] hover:shadow-lg sm:mt-10 sm:px-8 sm:py-4 sm:text-base"
            >
              View Our Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {metrics.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="group rounded-2xl border border-slate-200/80 bg-slate-50/50 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white hover:shadow-lg hover:shadow-slate-200/50 sm:p-6 lg:p-8"
                >
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-cyan-100 bg-white transition-colors group-hover:border-cyan-200 group-hover:bg-cyan-50 sm:h-14 sm:w-14">
                    <Icon className="h-6 w-6 text-cyan-600 sm:h-7 sm:w-7" />
                  </div>

                  <p className="mt-4 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl">
                    {item.number}
                  </p>

                  <p className="mt-1.5 text-xs text-slate-600 sm:text-sm">
                    {item.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
