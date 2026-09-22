import {
  Layers,
  Megaphone,
  MonitorSmartphone,
  Palette,
  Search,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Search,
    number: "01",
    title: "SEO Services",
    description:
      "Technical SEO, content, and search intent that bring qualified traffic—not just rankings.",
  },
  {
    icon: MonitorSmartphone,
    number: "02",
    title: "Web Design",
    description:
      "Fast, conversion-led websites with clear messaging and a premium look.",
  },
  {
    icon: Palette,
    number: "03",
    title: "UI/UX Design",
    description:
      "Research-led interfaces that feel obvious to use and keep people moving.",
  },
  {
    icon: Megaphone,
    number: "04",
    title: "Social Media Marketing",
    description:
      "Campaigns and content that earn attention and send qualified traffic back to your site.",
  },
  {
    icon: Layers,
    number: "05",
    title: "PPC & Content",
    description:
      "Paid search and content systems that capture demand and support organic growth.",
  },
  {
    icon: Sparkles,
    number: "06",
    title: "Analytics & Email",
    description:
      "Tracking, reporting, and email flows so you can see what works and follow up.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative scroll-mt-24 overflow-hidden bg-[#060b14] py-14 sm:py-16 lg:py-20"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.28]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.14) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[110px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 rounded-full bg-violet-600/[0.08] blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.15em] text-cyan-300">
            <Sparkles className="h-3 w-3" />
            Services
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-[2.5rem] sm:leading-tight">
            Design, build, and grow{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
              as one system
            </span>
          </h2>
          <p className="mt-3 text-base leading-6 text-slate-400 sm:text-lg">
            UI/UX, websites, SEO, and marketing — so people find you, trust the
            experience, and take action.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-cyan-300">
                  <service.icon className="h-4 w-4" />
                </div>
                <span className="text-[11px] font-medium tabular-nums tracking-widest text-slate-500">
                  {service.number}
                </span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                {service.title}
              </h3>
              <p className="mt-2 text-base leading-6 text-slate-400 md:text-sm">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
