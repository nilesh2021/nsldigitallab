import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Hero() {

    return (

       
      <>

      <section className="bg-[#202851] text-white">

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">

          <div className="grid lg:grid-cols-2 gap-14 items-center py-12">

            {/* Left */}

            <div>

              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-500/20 text-cyan-300 px-4 py-2 text-sm font-medium">

                <BookOpen className="w-4 h-4" />

                Free Learning Platform

              </span>

              <h1 className="text-5xl lg:text-6xl font-bold leading-tight mt-8">

                Learn Digital Skills

                <span className="text-cyan-400 block">

                  For Free

                </span>

              </h1>

              <p className="text-slate-300 text-lg mt-8 leading-8">

                Learn UI/UX Design, SEO and Digital Marketing through
                practical tutorials, real-world projects, interview
                preparation and industry case studies.

              </p>

              <div className="flex flex-wrap gap-4 mt-10">

                <Link onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                  to="/learn"
                  className="bg-cyan-400 hover:bg-cyan-300 text-[#202851] font-semibold px-7 py-4 rounded-xl transition"
                >
                  Start Learning
                </Link>

                <Link
                  to="/blog"
                  className="border border-white/20 hover:border-cyan-400 px-7 py-4 rounded-xl transition"
                >
                  Explore Articles
                </Link>

              </div>

            </div>

            {/* Right */}

            <div>

              <div className="rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md p-8">

                <div className="grid grid-cols-2 gap-6">

                  <div className="rounded-xl bg-white/5 p-6">

                    <h3 className="text-4xl font-bold text-cyan-400">

                      60+

                    </h3>

                    <p className="text-slate-300 mt-2">

                      Lessons

                    </p>

                  </div>

                  <div className="rounded-xl bg-white/5 p-6">

                    <h3 className="text-4xl font-bold text-cyan-400">

                      3

                    </h3>

                    <p className="text-slate-300 mt-2">

                      Learning Paths

                    </p>

                  </div>

                  <div className="rounded-xl bg-white/5 p-6">

                    <h3 className="text-4xl font-bold text-cyan-400">

                      100%

                    </h3>

                    <p className="text-slate-300 mt-2">

                      Free

                    </p>

                  </div>

                  <div className="rounded-xl bg-white/5 p-6">

                    <h3 className="text-4xl font-bold text-cyan-400">

                      Weekly

                    </h3>

                    <p className="text-slate-300 mt-2">

                      New Content

                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      </>

    );

}