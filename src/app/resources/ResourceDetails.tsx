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

      <Footer />
    </>
  );
}