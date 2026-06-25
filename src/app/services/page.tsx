import { ArrowRight, BarChart3, MonitorSmartphone, Palette, Search, Sparkles, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "SEO Services",
      description:
        "Improve search visibility, attract qualified traffic, and turn rankings into real business growth.",
      link: "/services/seo-services",
      icon: Search,
    },
    {
      title: "Web Design",
      description:
        "Launch polished, responsive websites that look premium and perform beautifully on every screen.",
      link: "/services/web-design",
      icon: MonitorSmartphone,
    },
    {
      title: "UI/UX Design",
      description:
        "Craft intuitive interfaces and seamless journeys that keep users engaged and moving forward.",
      link: "/services/ui-ux-design",
      icon: Palette,
    },
    {
      title: "Social Media Marketing",
      description:
        "Build a strong brand presence with campaigns designed to spark attention and drive engagement.",
      link: "/services/social-media-marketing",
      icon: BarChart3,
    },
  ];

  const highlights = [
    "Strategy-led execution",
    "Conversion-first design",
    "Data-informed optimization",
    "Fast, reliable delivery",
  ];

  return (
    <>
      <Helmet>
        <title>Services | NSL Digital Lab</title>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-[#050816] text-slate-100">
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.16),_transparent_35%),linear-gradient(135deg,_#050816_0%,_#0b1023_100%)] pt-36 pb-24 sm:pt-40 lg:pt-48">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
          <div className="absolute left-[-8rem] top-[-6rem] h-[420px] w-[420px] rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute bottom-[-6rem] right-[-4rem] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[120px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                <Sparkles className="h-4 w-4" />
                Digital growth solutions
              </div>

              <h1 className="mt-8 text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Services that help brands
                <span className="block bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                  scale with confidence
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
                From search visibility to polished product experiences, we build digital solutions that are strategic, modern, and built to grow.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services-grid"
                  className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
                >
                  Explore services
                  <ArrowRight className="h-4 w-4" />
                </a>

                <a
                  href="/#contact"
                  className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-7 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
                >
                  Let's talk
                </a>
              </div>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {[
                  ["SEO", "Search growth"],
                  ["UX", "Better journeys"],
                  ["Marketing", "Brand reach"],
                ].map(([title, desc]) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                    <h3 className="text-lg font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-sm text-slate-400">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section id="services-grid" className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="font-medium text-cyan-400">What we offer</span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Services designed for modern growth
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Every engagement is shaped around your goals, audience, and growth stage so the work feels practical and impactful.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <Link
                  key={index}
                  to={service.link}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10"
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 text-cyan-300">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="text-2xl font-semibold text-white transition-colors group-hover:text-cyan-300">
                    {service.title}
                  </h3>

                  <p className="mt-4 text-base leading-7 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-8 inline-flex items-center font-semibold text-cyan-300">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01))]">
          <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
            <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <span className="font-medium text-cyan-400">Why choose us</span>
                <h2 className="mt-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                  A thoughtful blend of strategy, design, and performance
                </h2>
                <p className="mt-6 text-lg leading-8 text-slate-400">
                  We build digital experiences that feel polished and intentional while staying grounded in measurable growth.
                </p>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                {highlights.map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
                    <div className="mb-3 inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 p-2 text-cyan-300">
                      <Zap className="h-4 w-4" />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      Thoughtful execution that balances creativity, storytelling, and business impact.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#050816]">
          <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-10">
            <h2 className="text-4xl font-bold leading-tight text-white md:text-5xl">
              Ready to build something remarkable?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Let’s create a digital presence that feels premium, connects with your audience, and drives real momentum.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1"
              >
                Start your project
              </a>
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Back to home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}