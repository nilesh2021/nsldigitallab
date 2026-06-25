import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  CheckCircle2,
  ArrowRight,
  Mail,
  BookOpen,
  Briefcase,
} from "lucide-react";

import MainLayout from "../../layouts/MainLayout";

export default function ContactThankYouPage() {
  return (
    <>
      <Helmet>
        <title>
          Thank You | NSL Digital Lab
        </title>

        <meta
          name="description"
          content="Thank you for contacting NSL Digital Lab. Our team will review your request and get back to you shortly."
        />
      </Helmet>

      <MainLayout>

        <section className="relative overflow-hidden bg-gradient-to-br from-[#07142B] via-[#202851] to-[#24356d] py-28">

          {/* Background Glow */}

          <div className="absolute -left-40 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />

          <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/10 blur-[180px]" />

          <div className="relative max-w-4xl mx-auto px-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center">

              <CheckCircle2 className="mx-auto h-20 w-20 text-green-400" />

              <h1 className="mt-8 text-5xl font-bold text-white">

                Thank You!

              </h1>

              <p className="mt-6 text-lg leading-8 text-slate-300">

                Your enquiry has been received successfully.

                <br />

                Our team will review your project and contact you within
                <span className="font-semibold text-white">
                  {" "}24 hours.
                </span>

              </p>

              {/* What Happens Next */}

              <div className="mt-12 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-8 text-left">

                <h2 className="text-2xl font-semibold text-white">

                  What happens next?

                </h2>

                <div className="mt-6 space-y-4 text-slate-300">

                  <div className="flex gap-3">

                    <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-400" />

                    <p>We'll review your project requirements.</p>

                  </div>

                  <div className="flex gap-3">

                    <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-400" />

                    <p>Our team will contact you via email or phone.</p>

                  </div>

                  <div className="flex gap-3">

                    <CheckCircle2 className="mt-1 h-5 w-5 text-cyan-400" />

                    <p>You'll receive a customized solution and quotation.</p>

                  </div>

                </div>

              </div>

              {/* CTA Buttons */}

              <div className="mt-12 flex flex-wrap justify-center gap-5">

                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white transition hover:scale-105"
                >
                  Explore Services
                  <ArrowRight size={18} />
                </Link>

                <Link
                  to="/resources"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
                >
                  <BookOpen size={18} />
                  Free Resources
                </Link>

              </div>

              {/* Quick Links */}

              <div className="mt-16 grid gap-6 md:grid-cols-3">

                <Link
                  to="/blog"
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400 hover:bg-white/10"
                >
                  <BookOpen className="mx-auto h-10 w-10 text-cyan-400" />

                  <h3 className="mt-4 text-xl font-semibold text-white">

                    Read Our Blog

                  </h3>

                  <p className="mt-2 text-sm text-slate-400">

                    Learn SEO, UI/UX and Digital Marketing.

                  </p>

                </Link>

                <Link
                  to="/resources"
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400 hover:bg-white/10"
                >
                  <Mail className="mx-auto h-10 w-10 text-cyan-400" />

                  <h3 className="mt-4 text-xl font-semibold text-white">

                    Free Downloads

                  </h3>

                  <p className="mt-2 text-sm text-slate-400">

                    Checklists, templates and interview guides.

                  </p>

                </Link>

                <Link
                  to="/careers"
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:border-cyan-400 hover:bg-white/10"
                >
                  <Briefcase className="mx-auto h-10 w-10 text-cyan-400" />

                  <h3 className="mt-4 text-xl font-semibold text-white">

                    Careers

                  </h3>

                  <p className="mt-2 text-sm text-slate-400">

                    Explore opportunities at NSL Digital Lab.

                  </p>

                </Link>

              </div>

            </div>

          </div>

        </section>

      </MainLayout>

    </>
  );
}