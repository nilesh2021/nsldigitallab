import {
  Search,
  Target,
  TrendingUp,
  Megaphone,
  BarChart3,
  Mail,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Search,
    title: "SEO Growth",
    description:
      "Boost your organic visibility and rank higher on search engines with our proven SEO strategies.",
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description:
      "Engage your audience across all platforms with compelling content and targeted campaigns.",
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description:
      "Maximize ROI with data-driven paid advertising campaigns on Google, Facebook, and more.",
  },
  {
    icon: TrendingUp,
    title: "Content Marketing",
    description:
      "Create valuable content that attracts, engages, and converts your target audience.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description:
      "Make informed decisions with comprehensive analytics and transparent reporting.",
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description:
      "Nurture leads and drive conversions with personalized email marketing campaigns.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-24 bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center rounded-full border border-cyan-200/80 bg-cyan-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-cyan-700">
            Our Expertise
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#0f172a] sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
            Digital Solutions That
            <br className="hidden sm:block" />
            <span className="sm:ml-0"> Help Your Business Grow</span>
          </h2>

          <p className="mt-5 text-base leading-7 text-slate-600 sm:text-lg">
            From UI/UX design and modern websites to SEO and digital marketing,
            we build scalable digital experiences that attract visitors,
            generate leads, and grow businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {services.map((service, index) => (
            <article
              key={index}
              className="group relative flex flex-col rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-200/50"
            >
              <span className="absolute right-5 top-5 text-xs font-medium tabular-nums text-slate-300 transition-colors group-hover:text-cyan-400">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-100 bg-cyan-50 transition-colors duration-300 group-hover:border-cyan-200 group-hover:bg-cyan-100">
                <service.icon className="h-5 w-5 text-cyan-600" />
              </div>

              <h3 className="text-lg font-semibold text-[#0f172a]">
                {service.title}
              </h3>

              <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">
                {service.description}
              </p>

              <div className="mt-5 flex items-center gap-1.5 text-sm font-semibold text-cyan-600 opacity-100 transition-opacity sm:opacity-0 sm:group-hover:opacity-100">
                Learn More
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="mb-5 text-slate-600">
            Looking for a complete overview of our services?
          </p>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 rounded-xl bg-[#0f172a] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1e293b] hover:shadow-lg sm:px-8 sm:py-4 sm:text-base"
          >
            View All Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
