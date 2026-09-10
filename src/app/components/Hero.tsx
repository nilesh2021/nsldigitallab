import {
  BriefcaseBusiness,
  Play,
  Rocket,
  Smile,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const stats = [
    {
      value: "12+",
      label: "Projects",
      icon: BriefcaseBusiness,
    },
    {
      value: "1+",
      label: "Years Experience",
      icon: Users,
    },
    {
      value: "98%",
      label: "Happy Clients",
      icon: Smile,
    },
  ];

  const avatars = ["AK", "RS", "NP", "SM"];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#060b14] pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pt-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />
      <div className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[min(100%,720px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.07] blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-violet-600/[0.06] blur-[100px]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#060b14] to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-sm font-medium text-slate-300 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
              <span className="text-cyan-300">UI/UX</span>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <span>Web Development</span>
              <span className="h-1 w-1 rounded-full bg-slate-500" />
              <span>Digital Growth</span>
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              <span className="block">Build Better</span>
              <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8">
              We create websites, web applications and digital experiences
              that help businesses attract customers and grow faster.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
              <button
                type="button"
                onClick={handleContactClick}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-white px-7 py-3.5 text-sm font-semibold text-[#060b14] shadow-lg shadow-black/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-100 sm:px-8 sm:py-4 sm:text-base"
              >
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5" />
                Get Free Consultation
              </button>

              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] sm:px-8 sm:py-4 sm:text-base"
              >
                <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                View Services
              </Link>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-3 sm:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/[0.06] bg-white/[0.03] p-4 backdrop-blur-sm sm:p-5"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] sm:h-11 sm:w-11">
                      <stat.icon className="h-4 w-4 text-cyan-400 sm:h-5 sm:w-5" />
                    </div>
                    <div>
                      <p className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-8">
              <div className="flex -space-x-2.5">
                {avatars.map((avatar, index) => (
                  <div
                    key={avatar}
                    className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#060b14] bg-gradient-to-br from-slate-600 to-slate-800 text-[11px] font-semibold text-white"
                    style={{ zIndex: avatars.length - index }}
                  >
                    {avatar}
                  </div>
                ))}
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#060b14] bg-cyan-600 text-xs font-semibold text-white">
                  +20
                </div>
              </div>

              <div>
                <div className="flex gap-0.5 text-amber-400">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-4 w-4 fill-current stroke-current sm:h-5 sm:w-5"
                    />
                  ))}
                </div>
                <p className="mt-1.5 text-sm text-slate-500">
                  Trusted by 20+ businesses worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2rem] bg-cyan-500/[0.06] blur-2xl" />

            <div className="absolute -left-2 top-4 z-20 hidden sm:block lg:-left-4">
              <div className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#0c1424]/95 px-4 py-3 shadow-xl backdrop-blur-md">
                <div className="rounded-lg bg-cyan-500/10 p-2">
                  <Sparkles className="h-4 w-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-slate-500">
                    Launch Ready
                  </p>
                  <p className="text-sm font-medium text-white">
                    Premium digital experiences
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0a101c] shadow-2xl shadow-black/40 lg:rounded-3xl">
              <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
                <div className="flex gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live
                </span>
              </div>

              <div className="p-4 sm:p-5">
                <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                  <div className="overflow-hidden rounded-xl border border-white/[0.06]">
                    <img
                      src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                      alt="Person typing on a laptop"
                      className="h-48 w-full object-cover sm:h-56 lg:h-64"
                    />
                  </div>

                  <div className="space-y-3">
                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 sm:text-sm">
                          Audience Growth
                        </span>
                        <span className="text-xs font-semibold text-emerald-400 sm:text-sm">
                          +214%
                        </span>
                      </div>
                      <div className="mt-3 flex h-16 items-end gap-1 sm:h-20">
                        {[40, 55, 45, 70, 60, 85, 75, 100].map((h, i) => (
                          <div
                            key={i}
                            className="flex-1 rounded-sm bg-gradient-to-t from-cyan-500/20 to-cyan-400/60"
                            style={{ height: `${h}%` }}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-slate-500 sm:text-sm">
                          Conversion Path
                        </span>
                        <span className="text-xs font-semibold text-cyan-300 sm:text-sm">
                          3x faster
                        </span>
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <div className="h-2 flex-1 overflow-hidden rounded-full bg-white/[0.06]">
                          <div className="h-full w-[78%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                        </div>
                        <span className="text-xs text-slate-500">78%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
