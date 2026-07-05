import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Download,
  GraduationCap,
  Newspaper,
  Sparkles,
} from 'lucide-react';

import MainLayout from '../../layouts/MainLayout';

export default function ResourceThankYouPage() {
  const location = useLocation();

  const downloadUrl = location.state?.downloadUrl || '';
  const resourceTitle = location.state?.resourceTitle || 'Your Resource';

  useEffect(() => {
    if (!downloadUrl) {
      return;
    }

    const timer = window.setTimeout(() => {
      window.open(downloadUrl, '_blank', 'noopener,noreferrer');
    }, 2500);

    return () => window.clearTimeout(timer);
  }, [downloadUrl]);

  return (
    <>
      <Helmet>
        <title>Thank You | NSL Digital Lab</title>
        <meta
          name="description"
          content="Thank you for downloading your free resource from NSL Digital Lab."
        />
      </Helmet>

      <MainLayout>
        <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.2),_transparent_35%),linear-gradient(135deg,_#07111f_0%,_#0f1f3d_45%,_#172b51_100%)] px-6 py-20 md:py-28">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:56px_56px]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="rounded-[32px] border border-white/10 bg-slate-950/70 p-8 shadow-2xl shadow-cyan-950/40 backdrop-blur-xl md:p-10 lg:p-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-500/10 px-4 py-2 text-sm font-medium text-emerald-300">
                <Sparkles className="h-4 w-4" />
                Resource ready
              </div>

              <div className="mt-8 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
                <div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                    <CheckCircle2 className="h-9 w-9" />
                  </div>

                  <h1 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl">
                    Thank you for downloading
                  </h1>

                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">
                    Your resource is prepared and will open automatically in just a moment.
                    If anything delays it, you can grab it instantly with the button below.
                  </p>

                  <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 p-6">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">
                      Downloaded resource
                    </p>
                    <p className="mt-3 text-2xl font-semibold text-white">
                      {resourceTitle}
                    </p>
                    <p className="mt-2 text-sm text-slate-400">
                      We&apos;re preparing your file and opening it in a new tab.
                    </p>
                  </div>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {downloadUrl ? (
                      <a
                        href={downloadUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
                      >
                        <Download className="h-5 w-5" />
                        Download Now
                      </a>
                    ) : (
                      <Link
                        to="/resources"
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-6 py-3.5 font-semibold text-white transition hover:bg-cyan-400"
                      >
                        <BookOpen className="h-5 w-5" />
                        Browse Resources
                      </Link>
                    )}

                    <Link
                      to="/services"
                      className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 font-semibold text-white transition hover:bg-white/10"
                    >
                      Explore Services
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </div>

                <div className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-7">
                  <h2 className="text-xl font-semibold text-white">
                    What happens next?
                  </h2>

                  <ul className="mt-6 space-y-4 text-sm text-slate-300">
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                      <span>Your download will open in a new tab.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                      <span>You can revisit our free resources anytime.</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-cyan-400" />
                      <span>Our team can also help you turn ideas into a better website.</span>
                    </li>
                  </ul>

                  <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-4 text-sm text-cyan-100">
                    Need something tailored for your brand? We&apos;d love to help with strategy, SEO, and UX.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-20">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-600">
                Continue learning
              </p>
              <h2 className="mt-3 text-3xl font-bold text-slate-900 sm:text-4xl">
                Explore more ways to grow your digital presence
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                Discover practical resources, useful lessons, and expert support tailored to modern brands.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <Link
                to="/resources"
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                  <BookOpen className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                  More resources
                </h3>
                <p className="mt-3 text-slate-600">
                  Browse free PDFs, planning templates, and ready-to-use checklists.
                </p>
              </Link>

              <Link
                to="/learn"
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                  Free learning paths
                </h3>
                <p className="mt-3 text-slate-600">
                  Learn UI/UX, SEO, and digital marketing through structured lessons.
                </p>
              </Link>

              <Link
                to="/blog"
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-50 text-amber-600">
                  <Newspaper className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-900">
                  Latest articles
                </h3>
                <p className="mt-3 text-slate-600">
                  Read practical tutorials, trends, and growth ideas from our team.
                </p>
              </Link>
            </div>
          </div>
        </section>
      </MainLayout>
    </>
  );
}