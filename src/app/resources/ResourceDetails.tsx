import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Check, ChevronRight, Download, Link2 } from "lucide-react";

import { resources } from "../../data/resources";
import ResourceDownload from "./components/ResourceDownload";
import ResourceCard from "./components/ResourceCard";
import MainLayout from "../layouts/MainLayout";

const steps = [
  {
    title: "Enter your email",
    description: "Add your email in the download card. No account needed.",
  },
  {
    title: "Unlock instantly",
    description: "The download unlocks right away on this page.",
  },
  {
    title: "Download and keep it",
    description: "Save the file and come back to it whenever you need.",
  },
];

const legacySlugs: Record<string, string> = {
  "figma-ui-kit": "figma-website-wireframe-kit",
};

export default function ResourceDetails() {
  const { slug } = useParams();
  const resource = resources.find((item) => item.slug === slug);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const timeout = window.setTimeout(() => setCopied(false), 2000);
    return () => window.clearTimeout(timeout);
  }, [copied]);

  if (!resource) {
    const legacySlug = slug ? legacySlugs[slug] : undefined;
    return (
      <Navigate to={legacySlug ? `/resources/${legacySlug}` : "/resources"} replace />
    );
  }

  const siteUrl = "https://nsldigitallab.com";
  const pageUrl = `${siteUrl}/resources/${resource.slug}`;
  const relatedLinks = (resource.relatedLinks || []).filter((link) =>
    resources.some((item) => item.slug === link.slug)
  );
  const others = resources.filter((item) => item.slug !== resource.slug);
  const relatedSlugs = relatedLinks.map((link) => link.slug);
  const related = [
    ...relatedSlugs
      .map((relatedSlug) => others.find((item) => item.slug === relatedSlug))
      .filter((item): item is (typeof resources)[number] => Boolean(item)),
    ...others.filter(
      (item) => item.category === resource.category && !relatedSlugs.includes(item.slug)
    ),
    ...others.filter((item) => item.category !== resource.category),
  ].slice(0, 3);
  const isNew = resource.downloads === 0;

  const seoTitle =
    resource.seoTitle ||
    `${resource.title} | Free Download | NSL Digital Lab`;

  const seoDescription =
    resource.seoDescription ||
    `Download ${resource.title} for free from NSL Digital Lab.`;

  const seoKeywords = (
    resource.primaryKeyword
      ? [resource.primaryKeyword, ...(resource.secondaryKeywords || [])]
      : [
          resource.title,
          resource.category,
          ...(resource.tags || []),
          "free download",
          "NSL Digital Lab",
        ]
  ).join(", ");

  async function handleCopyLink() {
    try {
      await navigator.clipboard.writeText(pageUrl);
      setCopied(true);
    } catch (error) {
      console.error("Copy link failed:", error);
    }
  }

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
        <div className="bg-[#060b14]">
          <div className="h-24 sm:h-28" aria-hidden />

          <div className="relative -mt-8 rounded-t-[2rem] bg-[#fafaf7] pb-20 pt-10 sm:pb-24 sm:pt-12">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <nav aria-label="Breadcrumb">
                <ol className="flex min-w-0 items-center gap-1.5 text-sm text-slate-500">
                  <li className="shrink-0">
                    <Link to="/resources" className="transition hover:text-slate-900">
                      Resources
                    </Link>
                  </li>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" aria-hidden />
                  <li className="shrink-0">
                    <Link
                      to="/resources#resourcesGrid"
                      className="transition hover:text-slate-900"
                    >
                      {resource.category}
                    </Link>
                  </li>
                  <ChevronRight className="h-3.5 w-3.5 shrink-0 text-slate-300" aria-hidden />
                  <li className="min-w-0 truncate font-medium text-slate-900" aria-current="page">
                    {resource.title}
                  </li>
                </ol>
              </nav>

              <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_380px] lg:gap-x-12 lg:gap-y-12">
                <header className="lg:col-start-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                    {resource.category}
                  </p>
                  <h1 className="mt-3 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl">
                    {resource.title}
                  </h1>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                    {resource.description}
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3 text-sm text-slate-600">
                    <span className="rounded-full bg-white px-3 py-1 font-semibold text-slate-900 ring-1 ring-slate-200">
                      {resource.type}
                    </span>
                    <span className="h-4 w-px bg-slate-200" aria-hidden />
                    {isNew ? (
                      <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                        New
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5">
                        <Download className="h-4 w-4 text-slate-400" />
                        {resource.downloads.toLocaleString()} downloads
                      </span>
                    )}
                    <span className="h-4 w-px bg-slate-200" aria-hidden />
                    <span className="font-medium text-slate-900">Free</span>
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="ml-auto inline-flex items-center gap-1.5 rounded-full px-3 py-1 font-medium text-slate-600 ring-1 ring-slate-200 transition hover:bg-white hover:text-slate-900"
                      aria-live="polite"
                    >
                      {copied ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-600" />
                          Copied
                        </>
                      ) : (
                        <>
                          <Link2 className="h-4 w-4" />
                          Copy link
                        </>
                      )}
                    </button>
                  </div>
                </header>

                <aside className="lg:col-start-2 lg:row-span-4 lg:row-start-1">
                  <div className="lg:sticky lg:top-28">
                    <ResourceDownload
                      key={resource.slug}
                      slug={resource.slug}
                      resourceTitle={resource.title}
                      downloadUrl={resource.downloadUrl}
                      type={resource.type}
                    />
                  </div>
                </aside>

                <div className="lg:col-start-1">
                  <div className="rounded-3xl bg-white p-2 shadow-[0_24px_60px_-24px_rgba(15,23,42,0.3)] ring-1 ring-slate-200/70">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="aspect-[16/9] w-full rounded-[1.25rem] object-cover"
                    />
                  </div>
                </div>

                <section className="lg:col-start-1">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    What you&apos;ll get
                  </h2>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                    {resource.overview || resource.description}
                  </p>
                  {resource.tags?.length ? (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {resource.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white px-3 py-1 text-sm text-slate-700 ring-1 ring-slate-200"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  ) : null}
                  {relatedLinks.length ? (
                    <div className="mt-8">
                      <h3 className="text-base font-semibold text-slate-900">
                        Pair it with
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {relatedLinks.map((link) => (
                          <li key={link.slug}>
                            <Link
                              to={`/resources/${link.slug}`}
                              className="group inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 underline decoration-slate-300 underline-offset-4 transition hover:text-slate-900 hover:decoration-cyan-500"
                            >
                              {link.label}
                              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </section>

                <section className="lg:col-start-1">
                  <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                    How it works
                  </h2>
                  <ol className="mt-6 grid gap-8 sm:grid-cols-3 sm:gap-6">
                    {steps.map((step, index) => (
                      <li key={step.title} className="border-t border-slate-200 pt-5">
                        <span className="text-3xl font-bold tracking-tight text-slate-300">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h3 className="mt-3 text-base font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-1.5 text-sm leading-6 text-slate-600">
                          {step.description}
                        </p>
                      </li>
                    ))}
                  </ol>
                </section>
              </div>
            </div>
          </div>
        </div>

        {related.length > 0 ? (
          <section className="bg-white py-20 sm:py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-700">
                    Keep learning
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                    Related resources
                  </h2>
                </div>
                <Link
                  to="/resources"
                  className="group inline-flex items-center gap-1.5 text-sm font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4 transition hover:decoration-cyan-500"
                >
                  Browse all
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>

              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((item) => (
                  <ResourceCard key={item.id} resource={item} />
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </MainLayout>
    </>
  );
}
