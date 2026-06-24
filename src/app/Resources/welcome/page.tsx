import { CheckCircle, ArrowRight, Download, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function ResourcesWelcomePage() {
  return (
    <>
      <Navigation />

      <main className="bg-slate-50 min-h-screen">

        {/* Hero */}

        <section className="bg-gradient-to-br from-[#202851] via-[#24356d] to-[#1f5ba8] text-white py-24">

          <div className="max-w-5xl mx-auto px-6 text-center">

            <div className="flex justify-center">

              <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center">

                <CheckCircle className="w-10 h-10" />

              </div>

            </div>

            <h1 className="mt-8 text-5xl font-bold">

              🎉 Welcome to NSL Digital Lab

            </h1>

            <p className="mt-6 text-xl text-slate-200 leading-8 max-w-3xl mx-auto">

              Thank you for joining our learning community.
              You're now part of a growing network of students,
              designers and digital marketers.

            </p>

          </div>

        </section>

        {/* Resources */}

        <section className="py-20">

          <div className="max-w-7xl mx-auto px-6">

            <div className="text-center mb-14">

              <h2 className="text-4xl font-bold">

                Start With These Free Resources

              </h2>

              <p className="mt-4 text-slate-600">

                Explore our most downloaded learning resources.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="rounded-2xl bg-white p-8 shadow">

                <div className="text-5xl mb-6">🎨</div>

                <h3 className="text-2xl font-bold">

                  UI/UX Interview Questions

                </h3>

                <p className="mt-4 text-slate-600">

                  Prepare confidently with practical interview questions.

                </p>

                <Link
                  to="/resources/ui-ux-interview-questions"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600"
                >
                  View Resource
                  <ArrowRight size={18} />
                </Link>

              </div>

              <div className="rounded-2xl bg-white p-8 shadow">

                <div className="text-5xl mb-6">📈</div>

                <h3 className="text-2xl font-bold">

                  SEO Checklist

                </h3>

                <p className="mt-4 text-slate-600">

                  Improve rankings with our complete SEO checklist.

                </p>

                <Link
                  to="/resources/seo-checklist"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600"
                >
                  View Resource
                  <ArrowRight size={18} />
                </Link>

              </div>

              <div className="rounded-2xl bg-white p-8 shadow">

                <div className="text-5xl mb-6">🚀</div>

                <h3 className="text-2xl font-bold">

                  Digital Marketing Checklist

                </h3>

                <p className="mt-4 text-slate-600">

                  Plan and execute successful digital campaigns.

                </p>

                <Link
                  to="/resources/digital-marketing-checklist"
                  className="mt-8 inline-flex items-center gap-2 font-semibold text-cyan-600"
                >
                  View Resource
                  <ArrowRight size={18} />
                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* Continue Learning */}

        <section className="pb-20">

          <div className="max-w-6xl mx-auto px-6">

            <div className="rounded-3xl bg-white p-10 shadow">

              <div className="text-center">

                <BookOpen className="mx-auto w-12 h-12 text-cyan-500" />

                <h2 className="mt-6 text-4xl font-bold">

                  Continue Learning

                </h2>

                <p className="mt-4 text-slate-600">

                  Explore free learning paths designed to help you
                  build practical skills.

                </p>

              </div>

              <div className="grid md:grid-cols-3 gap-6 mt-12">

                <Link
                  to="/learn/ui-ux-design"
                  className="rounded-2xl border p-8 hover:border-cyan-500 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-xl">

                    UI/UX Design

                  </h3>

                  <p className="mt-3 text-slate-600">

                    Learn design thinking, Figma, wireframing,
                    prototyping and portfolio creation.

                  </p>

                </Link>

                <Link
                  to="/learn/seo"
                  className="rounded-2xl border p-8 hover:border-cyan-500 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-xl">

                    SEO

                  </h3>

                  <p className="mt-3 text-slate-600">

                    Learn Technical SEO, On-page SEO,
                    Keyword Research and Google Search Console.

                  </p>

                </Link>

                <Link
                  to="/learn/digital-marketing"
                  className="rounded-2xl border p-8 hover:border-cyan-500 hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-xl">

                    Digital Marketing

                  </h3>

                  <p className="mt-3 text-slate-600">

                    Learn social media, content marketing,
                    PPC and email marketing.

                  </p>

                </Link>

              </div>

            </div>

          </div>

        </section>

        {/* Final CTA */}

        <section className="pb-24">

          <div className="max-w-5xl mx-auto px-6">

            <div className="rounded-3xl bg-[#202851] text-white p-14 text-center">

              <Download className="mx-auto w-12 h-12 text-cyan-400" />

              <h2 className="mt-6 text-4xl font-bold">

                New Resources Added Every Week

              </h2>

              <p className="mt-6 text-slate-300 text-lg">

                Keep learning with new templates, checklists,
                interview questions and practical guides.

              </p>

              <Link
                to="/resources"
                className="mt-10 inline-flex items-center rounded-xl bg-cyan-400 px-8 py-4 font-semibold text-[#202851] hover:bg-cyan-300 transition"
              >
                Explore All Resources
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}