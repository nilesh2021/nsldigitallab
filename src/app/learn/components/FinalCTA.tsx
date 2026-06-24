import { Link } from "react-router-dom";

import {
    CheckCircle,
    ArrowRight
} from "lucide-react";

export default function FinalCTA () {

    return (

        <>
            
        <section className="relative overflow-hidden py-16 bg-[#202851]">

          {/* Background Blur */}
          <div className="absolute -top-16 -left-16 w-60 h-60 bg-cyan-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-16 -right-16 w-60 h-60 bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl px-8 py-12 text-center">

              <span className="inline-flex items-center rounded-full bg-cyan-500/20 border border-cyan-400/30 px-4 py-1.5 text-sm font-medium text-cyan-300">
                🚀 Start Your Learning Journey
              </span>

              <h2 className="mt-5 text-3xl md:text-5xl font-bold text-white leading-tight">
                Build Real Skills.
                <span className="text-cyan-400">
                  Completely Free.
                </span>
              </h2>

              <p className="mt-5 max-w-2xl mx-auto text-slate-300 leading-7">
                Learn UI/UX Design, SEO and Digital Marketing with practical
                projects, career-focused lessons and industry best practices.
              </p>

              <div className="mt-8 flex flex-wrap justify-center gap-4">

                <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  to="/learn"
                  className="inline-flex items-center justify-center rounded-xl bg-cyan-400 px-6 py-3 font-semibold text-[#202851] hover:bg-cyan-300 transition"
                >
                  Start Learning
                </Link>

                <Link
                  to="/blog"
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3 font-semibold text-white hover:bg-white hover:text-[#202851] transition"
                >
                  Browse Articles
                </Link>

              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">

                <span>✓ Free Courses</span>
                <span>✓ Practical Projects</span>
                <span>✓ Weekly Updates</span>

              </div>

            </div>

          </div>

        </section>
        </>

    );

}