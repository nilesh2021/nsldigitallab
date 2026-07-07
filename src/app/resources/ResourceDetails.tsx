import { useParams, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import { resources } from "../../data/resources";
import ResourceDownload from "./components/ResourceDownload";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ResourceDetails() {
  const { slug } = useParams();

  const resource = resources.find((r) => r.slug === slug);

  if (!resource) {
    return <Navigate to="/resources" replace />;
  }

  const siteUrl = "https://your-domain.com"; // Replace after deployment
  const pageUrl = `${siteUrl}/resources/${resource.slug}`;

  const seoTitle =
    resource.seoTitle ||
    `${resource.title} | Free Download | NSL Digital Lab`;

  const seoDescription =
    resource.seoDescription ||
    `Download ${resource.title} for free. Explore ready-to-use HTML, Bootstrap, Tailwind CSS, UI/UX, SEO and digital marketing resources from NSL Digital Lab.`;

  const seoKeywords = [
    resource.title,
    resource.category,
    ...(resource.tags || []),
    "free download",
    "free resources",
    "HTML templates free download",
    "Bootstrap 5 templates free download",
    "Tailwind CSS templates free download",
    "website templates",
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

        {resource.image && (
          <meta property="og:image" content={resource.image} />
        )}

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />

        {resource.image && (
          <meta name="twitter:image" content={resource.image} />
        )}
      </Helmet>

      <Navigation />

      <main className="relative overflow-hidden bg-[#07142B] pb-10">
        {/* Decorative background */}
        <div className="absolute inset-x-0 top-0 h-[520px] bg-gradient-to-br from-[#07142B] via-[#172B63] to-[#2D4B96]" />

        <div className="absolute -left-20 -top-24 h-80 w-80 rounded-full bg-cyan-400/15 blur-[140px]" />
        <div className="absolute right-0 top-10 h-96 w-96 rounded-full bg-blue-500/20 blur-[150px]" />

        <section className="relative z-10 bg-gradient-to-br from-[#0b2a4a] via-[#182f72] to-[#3156b2] pb-8 pt-28 sm:pb-10 sm:pt-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <ResourceDownload
              resourceTitle={resource.title}
              downloadUrl={resource.downloadUrl}
            />
          </div>
        </section>
      </main>

      <Footer /> <a
  href="https://www.linkedin.com/company/nsldigitallab"
  target="_blank"
  rel="noreferrer"
  aria-label="Follow NSL Digital Lab on LinkedIn"
  className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-3 rounded-full bg-[#0A66C2] px-5 py-3 font-semibold text-white shadow-xl shadow-[#0A66C2]/30 transition duration-300 hover:-translate-y-1 hover:bg-[#004182] hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#0A66C2]/30"
>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 fill-current"
  >
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.67H9.33V8.99h3.42v1.57h.05c.48-.9 1.64-1.85 3.38-1.85 3.61 0 4.27 2.38 4.27 5.47v6.27ZM5.31 7.43A2.07 2.07 0 1 1 5.3 3.3a2.07 2.07 0 0 1 .01 4.13Zm1.78 13.02H3.52V8.99h3.57v11.46ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0Z" />
  </svg>

  <span className="hidden sm:inline">Follow on LinkedIn</span>
</a>
    </>
  );
}