import {
  BriefcaseBusiness,
  Play,
  Rocket,
  Smile,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
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
      color: "text-violet-300",
      bg: "bg-violet-500/10",
      border: "border-violet-400/20",
    },
    {
      value: "1+",
      label: "Years Experience",
      icon: Users,
      color: "text-cyan-300",
      bg: "bg-cyan-500/10",
      border: "border-cyan-400/20",
    },
    {
      value: "98%",
      label: "Happy Clients",
      icon: Smile,
      color: "text-violet-300",
      bg: "bg-violet-500/10",
      border: "border-violet-400/20",
    },
  ];

  const avatars = ["AK", "RS", "NP", "SM"];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#050816] pb-24 pt-32 sm:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute left-1/2 top-[-13rem] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-[-10rem] top-[20%] h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[180px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050816]" />

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="inline-flex flex-wrap items-center gap-1 rounded-full border border-violet-300/20 bg-white/[0.04] px-3 py-2.5 text-sm font-semibold text-violet-300 shadow-[0_0_40px_rgba(139,92,246,0.16)] backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-fuchsia-300" />
              <span className="text-cyan-300">UI/UX</span>
              <span className="h-1 w-1 rounded-full bg-violet-300/70" />
              <span>Web Development</span>
              <span className="h-1 w-1 rounded-full bg-violet-300/70" />
              <span>Digital Growth</span>
            </div>

            <h1 className="mt-9 text-5xl font-black leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl">
              <span className="block drop-shadow-[0_18px_36px_rgba(255,255,255,0.12)]">
                Build Better
              </span>
              <span className="relative mt-3 inline-block bg-gradient-to-r from-cyan-300 via-sky-400 to-fuchsia-400 bg-clip-text text-transparent">
                Digital Experiences
<svg
  className="absolute -bottom-6 left-1/2 -translate-x-1/2"
  width="180"
  height="40"
  viewBox="0 0 180 40"
  fill="none"
>
  <path
    d="M20 28 C45 12 85 10 120 18 C140 22 150 26 160 24"
    stroke="url(#paint0)"
    strokeWidth="5"
    strokeLinecap="round"
  />

  <defs>
    <linearGradient id="paint0" x1="0" y1="0" x2="180" y2="0">
      <stop stopColor="#7C3AED"/>
      <stop offset="1" stopColor="#A855F7"/>
    </linearGradient>
  </defs>
</svg>
                
                {/* <span className="absolute -bottom-4 left-[56%] h-1.5 w-36 -translate-x-1/2 rounded-full bg-violet-500" /> */}
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
              We create websites, web applications and digital experiences
              that help businesses attract customers and grow faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleContactClick}
                className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-violet-600 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <Rocket className="h-5 w-5" />
                Get Free Consultation
              </button>

              <Link
                to="/services"
                className="group inline-flex items-center gap-3 rounded-xl border border-white/15 bg-white/[0.03] px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                <Play className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                View Services
              </Link>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl   border-white/10 bg-white/[0.04] p-5 shadow-[0_18px_70px_rgba(0,0,0,0.22)] backdrop-blur-md"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border ${stat.border} ${stat.bg}`}
                    >
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-white">
                        {stat.value}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {stat.label}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-8">
              <div className="flex -space-x-3">
                {avatars.map((avatar, index) => (
                  <div
                    key={avatar}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#050816] bg-gradient-to-br from-slate-700 via-slate-900 to-violet-700 text-xs font-bold text-white shadow-lg"
                    style={{ zIndex: avatars.length - index }}
                  >
                    {avatar}
                  </div>
                ))}
                <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-[#050816] bg-violet-700 text-sm font-bold text-white shadow-lg">
                  +20
                </div>
              </div>

              <div>
                <div className="flex gap-1 text-amber-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-current stroke-current"
                    />
                  ))}
                </div>
                <p className="mt-2 text-sm text-slate-400">
                  Trusted by 20+ businesses worldwide
                </p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative mx-auto w-full max-w-2xl">
            <div className="absolute -inset-8 bg-cyan-500/10 blur-[120px]" />

            <div className="absolute -left-4 top-8 z-20">
              <div className="flex items-center gap-3 rounded-2xl border border-cyan-400/20 bg-[#09111f]/90 px-4 py-3 shadow-2xl backdrop-blur-xl">
                <div className="rounded-xl bg-cyan-500/15 p-2">
                  <Sparkles className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">
                    Launch Ready
                  </p>
                  <p className="text-sm font-semibold text-white">
                    Premium digital experiences
                  </p>
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.16),transparent_40%),linear-gradient(135deg,#0b1222_0%,#050816_70%)] p-6 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.08),transparent_35%,rgba(255,255,255,0.03))]" />

              <div className="relative space-y-4">
                <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3">
                  <div className="flex gap-2">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>

                  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-400">
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                    LIVE
                  </span>
                </div>

                <div className="rounded-[1.5rem] border border-cyan-400/20 bg-[#0a1324]/90 p-4 sm:p-5">
                  <div className="grid gap-4 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="rounded-[1.25rem] border border-white/10 overflow-hidden bg-[#0a1324]/90">
                      <img
                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                        alt="Person typing on a laptop"
                        className="w-full h-64 object-cover"
                      />
                    </div>

                    <div className="space-y-3">
                      <div className="rounded-[1.25rem] border border-white/10 bg-[#10192d] p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">
                            Audience Growth
                          </span>
                          <span className="text-sm font-semibold text-emerald-400">
                            +214%
                          </span>
                        </div>
                        <div className="mt-4 h-20 rounded-2xl bg-[linear-gradient(90deg,rgba(34,211,238,0.3),rgba(168,85,247,0.3))]" />
                      </div>

                      <div className="rounded-[1.25rem] border border-white/10 bg-[#10192d] p-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-slate-400">
                            Conversion Path
                          </span>
                          <span className="text-sm font-semibold text-cyan-300">
                            3x faster
                          </span>
                        </div>
                        <div className="mt-4 flex items-center gap-2">
                          <div className="h-2.5 flex-1 rounded-full bg-slate-800">
                            <div className="h-2.5 w-[78%] rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400" />
                          </div>
                          <span className="text-sm text-slate-400">78%</span>
                        </div>
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
