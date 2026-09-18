import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import { resources } from "../../data/resources";
import ResourceDownload from "./components/ResourceDownload";
import MainLayout from "../layouts/MainLayout";

export default function ResourceDetails() {
  const { slug } = useParams();
  const resource = resources.find((item) => item.slug === slug);

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  const siteUrl = "https://nsldigitallab.com";
  const pageUrl = `${siteUrl}/resources/${resource.slug}`;
  const related = resources.filter((item) => item.slug !== resource.slug).slice(0, 2);

  const seoTitle =
    resource.seoTitle ||
    `${resource.title} | Free Download | NSL Digital Lab`;

  const seoDescription =
    resource.seoDescription ||
    `Download ${resource.title} for free from NSL Digital Lab.`;

  const seoKeywords = [
    resource.title,
    resource.category,
    ...(resource.tags || []),
    "free download",
    "NSL Digital Lab",
  ].join(", ");

  return (
    <>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDescription} />
        <meta name="keywords" content={seoKeywords} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta property="og:site_name" content="NSL Digital Lab" />
        {resource.image && <meta property="og:image" content={resource.image} />}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        {resource.image && <meta name="twitter:image" content={resource.image} />}
      </Helmet>

      <MainLayout>
        <section className="relative overflow-hidden bg-[#060b14] pt-28 pb-10 sm:pt-32 sm:pb-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(148,163,184,0.12) 1px, transparent 0)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="pointer-events-none absolute left-1/2 top-0 h-[320px] w-[min(100%,560px)] -translate-x-1/2 rounded-full bg-cyan-500/[0.08] blur-[110px]" />

          <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
            <Link
              to="/resources"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-400 transition hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              All resources
            </Link>

            <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-cyan-300">
                    {resource.category}
                  </span>
                  <span className="text-[11px] font-medium text-slate-400">
                    {resource.type}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {resource.downloads.toLocaleString()} downloads
                  </span>
                </div>

                <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {resource.title}
                </h1>
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-400 sm:text-base sm:leading-7">
                  {resource.description}
                </p>

                {resource.tags?.length ? (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {resource.tags.slice(0, 6).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/10">
                <img
                  src={resource.image}
                  alt={resource.title}
                  className="h-52 w-full object-cover sm:h-64"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-8 sm:py-10">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
            <ResourceDownload
              resourceTitle={resource.title}
              downloadUrl={resource.downloadUrl}
              type={resource.type}
            />

            {related.length > 0 ? (
              <div>
                <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                  More resources
                </h2>
                <div className="mt-3 space-y-2">
                  {related.map((item) => (
                    <Link
                      key={item.id}
                      to={`/resources/${item.slug}`}
                      className="group flex items-center justify-between gap-3 rounded-xl border border-slate-200 px-4 py-3 transition hover:border-cyan-200 hover:bg-slate-50"
                    >
                      <div>
                        <p className="text-sm font-semibold text-[#0f172a]">
                          {item.title}
                        </p>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {item.category} · {item.type}
                        </p>
                      </div>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-cyan-700" />
                    </Link>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      </MainLayout>
    </>
  );
}
