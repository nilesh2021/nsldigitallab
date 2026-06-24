import { Link } from "react-router-dom";
import { ArrowRight, Download, BookOpen } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#202851] via-[#24356d] to-[#2d468d] text-white">

      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-cyan-400/20 rounded-full blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-500/20 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24">

        <div className="max-w-4xl py-12">

          <span className="inline-flex items-center rounded-full bg-cyan-400/15 border border-cyan-400/30 px-4 py-2 text-cyan-300 text-sm font-medium">
            🚀 100% Free Learning Resources
          </span>

          <h1 className="mt-6 text-5xl lg:text-6xl font-bold leading-tight">

            Free Digital Marketing,
            <span className="text-cyan-400">
              {" "}SEO{" "}
            </span>
            &
            <span className="text-cyan-400">
              {" "}UI/UX Resources
            </span>

          </h1>

          <p className="mt-8 text-xl text-slate-300 leading-9 max-w-3xl">

            Download premium-quality checklists, interview questions,
            Figma resources, templates, learning guides and practical
            resources to accelerate your career.

          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-wrap gap-4">

            <Link
              to="/learn"
              className="inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-6 py-4 font-semibold text-[#202851] hover:bg-cyan-300 transition"
            >
              <BookOpen size={20} />
              Start Learning
            </Link>

            <a
              href="#featured"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 hover:bg-white/20 transition"
            >
              <Download size={20} />
              Browse Resources
              <ArrowRight size={18} />
            </a>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                50+
              </h3>

              <p className="mt-2 text-slate-300">
                Free Resources
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                15+
              </h3>

              <p className="mt-2 text-slate-300">
                Templates
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                100%
              </h3>

              <p className="mt-2 text-slate-300">
                Free Access
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                Weekly
              </h3>

              <p className="mt-2 text-slate-300">
                New Resources
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}