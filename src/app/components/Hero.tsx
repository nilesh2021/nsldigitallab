import { ArrowRight, Sparkles, TrendingUp, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function Hero() {
  const handleContactClick = () => {
    const contactSection = document.getElementById("contact");

    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const stats = [
    { value: "25+", label: "Launches" },
    { value: "5+", label: "Years" },
    { value: "100%", label: "Responsive" },
  ];

  return (
    <section className="relative overflow-hidden bg-[#050816] min-h-screen pt-32 pb-24 sm:pt-36">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      <div className="absolute left-1/2 top-[-13rem] h-[900px] w-[900px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute right-[-10rem] top-[20%] h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[180px]" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-[#050816]" />

      <div className="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
              <Sparkles className="h-4 w-4" />
              Growth-focused digital agency
            </div>

            <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              We build
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-violet-400 bg-clip-text text-transparent">
                digital experiences
              </span>
              <br />
              that turn clicks into customers.
            </h1>

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400 sm:text-xl">
              From strategy to launch, we craft high-performing websites and product experiences that help modern brands stand out and grow faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button
                type="button"
                onClick={handleContactClick}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white shadow-lg shadow-violet-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                Book a free strategy call
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <Link
                to="/services"
                className="inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
              >
                Explore services
              </Link>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
                  <p className="mt-1 text-sm text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-violet-500/20 via-cyan-500/10 to-transparent blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-6 shadow-2xl shadow-violet-950/30 backdrop-blur-xl sm:p-8">
              <div className="mb-6 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                </div>
                <div className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-cyan-300">
                  Live launch
                </div>
              </div>

              <div className="space-y-5">
                <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-400">Performance</p>
                      <p className="mt-1 text-xl font-semibold text-white">Conversion uplift</p>
                    </div>
                    <div className="rounded-full bg-emerald-500/15 p-2 text-emerald-300">
                      <TrendingUp className="h-4 w-4" />
                    </div>
                  </div>
                  <div className="mt-4 h-2 rounded-full bg-slate-800">
                    <div className="h-2 w-[82%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="rounded-2xl border border-violet-500/20 bg-violet-500/10 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-violet-300">Speed</p>
                    <p className="mt-2 text-xl font-semibold text-white">1.8x</p>
                  </div>
                  <div className="rounded-2xl border border-cyan-500/20 bg-cyan-500/10 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-cyan-300">Engagement</p>
                    <p className="mt-2 text-xl font-semibold text-white">+42%</p>
                  </div>
                  <div className="rounded-2xl border border-purple-500/20 bg-purple-500/10 p-3">
                    <p className="text-xs uppercase tracking-[0.2em] text-purple-300">ROI</p>
                    <p className="mt-2 text-xl font-semibold text-white">3.4x</p>
                  </div>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Launch roadmap</p>
                      <p className="text-sm text-slate-400">Strategy • Design • Development</p>
                    </div>
                    <div className="rounded-full border border-white/10 bg-slate-900/70 p-2 text-cyan-300">
                      <Zap className="h-4 w-4" />
                    </div>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
                      <span>Discovery workshop</span>
                      <span className="text-cyan-300">Complete</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
                      <span>UI/UX design system</span>
                      <span className="text-cyan-300">In progress</span>
                    </div>
                    <div className="flex items-center justify-between rounded-xl bg-slate-900/70 px-3 py-2 text-sm text-slate-300">
                      <span>Performance optimization</span>
                      <span className="text-cyan-300">Next</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-4 rounded-2xl border border-cyan-400/20 bg-slate-950/80 px-5 py-4 shadow-xl">
              <div className="text-sm text-slate-400">Client growth</div>
              <div className="mt-1 bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent">
                +95%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}