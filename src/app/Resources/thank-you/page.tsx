import { Helmet } from "react-helmet-async";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";

export default function ResourceThankYouPage() {
  const location = useLocation();

  const downloadUrl = location.state?.downloadUrl || "";
  const resourceTitle = location.state?.resourceTitle || "Your Resource";

  useEffect(() => {
    if (downloadUrl) {
      const timer = setTimeout(() => {
        window.open(downloadUrl, "_blank");
      }, 3000);

      return () => clearTimeout(timer);
    }
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

      <Navigation />

      <main className="bg-slate-50">

        {/* Hero */}

        <section className="relative overflow-hidden bg-gradient-to-br from-[#08142c] via-[#0b1d45] to-[#12336b] py-24">

          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.03)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-5xl mx-auto px-6 py-24">

            <div className="rounded-3xl bg-white p-12 shadow-2xl text-center">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-green-100 text-5xl">
                🎉
              </div>

              <h1 className="mt-8 text-5xl font-bold text-slate-900">
                Thank You!
              </h1>

              <p className="mt-6 text-xl text-slate-600 leading-8">
                Your download is ready.
              </p>

              <p className="mt-2 text-slate-500">
                <strong>{resourceTitle}</strong> will start downloading
                automatically in a few seconds.
              </p>

              {downloadUrl && (
                <a
                  href={downloadUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-10 inline-flex rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-white hover:bg-cyan-600 transition"
                >
                  Download Now
                </a>
              )}

              <p className="mt-6 text-sm text-slate-500">
                If your download doesn't start automatically,
                click the button above.
              </p>

            </div>

          </div>

        </section>

        {/* What's Next */}

        <section className="py-20">

          <div className="max-w-6xl mx-auto px-6">

            <h2 className="text-4xl font-bold text-center">
              Continue Learning
            </h2>

            <p className="mt-4 text-center text-slate-600">
              Explore more free resources and improve your skills.
            </p>

            <div className="mt-14 grid gap-8 md:grid-cols-3">

              <Link
                to="/resources"
                className="rounded-2xl border bg-white p-8 hover:shadow-xl transition"
              >
                <div className="text-5xl">📚</div>

                <h3 className="mt-5 text-2xl font-bold">
                  More Resources
                </h3>

                <p className="mt-3 text-slate-600">
                  Download more free PDFs, templates and checklists.
                </p>
              </Link>

              <Link
                to="/learn"
                className="rounded-2xl border bg-white p-8 hover:shadow-xl transition"
              >
                <div className="text-5xl">🎓</div>

                <h3 className="mt-5 text-2xl font-bold">
                  Free Courses
                </h3>

                <p className="mt-3 text-slate-600">
                  Learn UI/UX Design, SEO and Digital Marketing.
                </p>
              </Link>

              <Link
                to="/blog"
                className="rounded-2xl border bg-white p-8 hover:shadow-xl transition"
              >
                <div className="text-5xl">✍️</div>

                <h3 className="mt-5 text-2xl font-bold">
                  Latest Articles
                </h3>

                <p className="mt-3 text-slate-600">
                  Read practical tutorials and career guides.
                </p>
              </Link>

            </div>

          </div>

        </section>

        {/* CTA */}

        <section className="pb-24">

          <div className="max-w-5xl mx-auto px-6">

            <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-12 text-center text-white">

              <h2 className="text-4xl font-bold">
                Need Help Growing Your Business?
              </h2>

              <p className="mt-5 text-lg text-cyan-100">
                We design websites, improve SEO and build digital experiences
                that help businesses grow.
              </p>

              <Link
                to="/services"
                className="mt-10 inline-flex rounded-xl bg-white px-8 py-4 font-semibold text-blue-700 hover:bg-slate-100 transition"
              >
                Explore Our Services
              </Link>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}