import { Link } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#202851] via-[#24356d] to-[#2d468d] text-white">
      {/* Background glow */}
      <div className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-[120px]" />
      <div className="absolute -bottom-20 -right-20 h-80 w-80 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="max-w-4xl py-12">
          <span className="inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/15 px-4 py-2 text-sm font-medium text-cyan-300">
            🚀 100% Free Learning Resources
          </span>

          <h1 className="mt-6 text-5xl font-bold leading-tight lg:text-6xl">
            Free Digital Marketing,
            <span className="text-cyan-400"> SEO </span>
            &amp;
            <span className="text-cyan-400"> UI/UX Resources</span>
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-slate-300">
            Download practical checklists, interview questions, Figma
            resources, templates, and learning guides to build stronger
            digital skills and accelerate your career.
          </p>

          <div className="mt-10">
            <Link
              to="/resources#resourcesGrid"
              className="group inline-flex items-center gap-2 rounded-xl bg-cyan-400 px-7 py-4 font-semibold text-[#202851] shadow-lg shadow-cyan-950/20 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-300 hover:shadow-xl"
            >
              <Download size={20} />
              Browse All Resources
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 gap-8 md:grid-cols-4">
            <div>
              <h3 className="text-3xl font-bold text-cyan-400">50+</h3>
              <p className="mt-2 text-slate-300">Free Resources</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">15+</h3>
              <p className="mt-2 text-slate-300">Templates</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
              <p className="mt-2 text-slate-300">Free Access</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">Weekly</h3>
              <p className="mt-2 text-slate-300">New Resources</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}