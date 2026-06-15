import {
  ArrowRight,
  CheckCircle,
  Zap,
  ShieldCheck,
  Globe,
  Sparkles,
  Clock3,
  ServerCog,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import RelatedArticles from "../../../components/blog/RelatedArticles";
import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import { getBlogLinks } from "../../../../data/blogInternalLinks";

const pageLinks = getBlogLinks("technical-seo-checklist");

const checklistItems = [
  {
    title: "Ensure fast page speed",
    description:
      "Use performance tools, compress images, enable caching, and minimize render-blocking JavaScript so pages load quickly on desktop and mobile.",
  },
  {
    title: "Use a crawlable site structure",
    description:
      "Keep your navigation and internal links simple, use clear URL paths, and avoid orphan pages so search engines can discover every important page.",
  },
  {
    title: "Check indexation and robots settings",
    description:
      "Verify that pages are not blocked by robots.txt, meta robots tags, or noindex directives unless intentionally excluded.",
  },
  {
    title: "Validate structured data",
    description:
      "Add schema markup for articles, products, breadcrumbs, and FAQs to improve search visibility and rich result eligibility.",
  },
  {
    title: "Optimize mobile experience",
    description:
      "Confirm mobile usability, responsive layouts, and fast mobile speed since Google uses mobile-first indexing for all sites.",
  },
  {
    title: "Use HTTPS everywhere",
    description:
      "Ensure your site is secure with SSL/TLS and that every page redirects from HTTP to HTTPS without broken links.",
  },
  {
    title: "Monitor crawl errors",
    description:
      "Review Search Console reports for 4xx/5xx issues, redirect chains, and pages blocked from crawling, then resolve them promptly.",
  },
  {
    title: "Implement canonical tags",
    description:
      "Prevent duplicate content issues by using canonical URLs for similar or paginated pages so search engines know which version to index.",
  },
  {
    title: "Audit page metadata",
    description:
      "Use descriptive title tags, meta descriptions, and heading structure that match search intent and include your target keywords naturally.",
  },
  {
    title: "Check security and hosting health",
    description:
      "Verify your hosting environment is stable, SSL certificates are current, and there are no security warnings or malware flags affecting crawlability.",
  },
];

const seoTactics = [
  {
    title: "Log file review",
    description:
      "Analyze server logs to see how search engine bots crawl your site and identify pages with high crawl frequency or repeated errors.",
  },
  {
    title: "XML sitemap audit",
    description:
      "Make sure your sitemap includes only indexable pages and that it is submitted in your Search Console account.",
  },
  {
    title: "Page experience optimization",
    description:
      "Focus on Core Web Vitals, mobile-friendly design, and intrusive interstitials to improve user experience and search performance.",
  },
  {
    title: "Canonical and hreflang setup",
    description:
      "Use canonical tags and hreflang attributes correctly for duplicate content and international sites.",
  },
];

export default function TechnicalSeoChecklistPage() {
  return (
    <>
      <Helmet>
        <title>Technical SEO Checklist | NSL Digital Lab</title>
        <meta
          name="description"
          content="Follow the essential technical SEO checklist for 2026: page speed, crawlability, indexation, structured data, mobile UX, HTTPS, and more."
        />
        <meta
          name="keywords"
          content="technical seo checklist, SEO audit, page speed, mobile SEO, structured data, crawlability"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.NSLmedia.co.in/blog/seo/technical-seo-checklist"
        />
        <meta
          property="og:title"
          content="Technical SEO Checklist | NSL Digital Lab"
        />
        <meta
          property="og:description"
          content="Follow the essential technical SEO checklist for 2026: page speed, crawlability, indexation, structured data, mobile UX, HTTPS, and more."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1510051643593-d2de5df9ea7d?q=80&w=1200&auto=format&fit=crop"
        />
        <meta
          property="og:url"
          content="https://www.NSLmedia.co.in/blog/seo/technical-seo-checklist"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Technical SEO Checklist | NSL Digital Lab"
        />
        <meta
          name="twitter:description"
          content="Download a practical technical SEO checklist for 2026, covering speed, indexation, structured data, mobile, and security."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1510051643593-d2de5df9ea7d?q=80&w=1200&auto=format&fit=crop"
        />
      </Helmet>

      <Navigation />

      <main className="bg-black text-white min-h-screen">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(14,165,233,0.15),transparent_40%)]" />
          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    SEO
                  </span>
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
                    Technical SEO
                  </span>
                  <span className="rounded-full border border-slate-500/30 bg-slate-500/10 px-4 py-2 text-sm text-slate-300">
                    Checklist
                  </span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  Technical SEO Checklist
                  <span className="block text-cyan-400">
                    The essential audit steps every site needs in 2026.
                  </span>
                </h1>
                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  Technical SEO is the foundation of organic search success. This checklist helps you fix crawlability, speed, indexation, structured data, and mobile issues before they hurt rankings. New to the topic? Read{" "}
                  <InlineArticleLink to="/blog/seo/what-is-seo">what SEO is</InlineArticleLink>{" "}
                  first, then apply these steps alongside our{" "}
                  <InlineArticleLink to="/blog/seo/website-optimization-tips">
                    website optimization tips
                  </InlineArticleLink>
                  .
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#checklist"
                    className="inline-flex items-center rounded-2xl bg-cyan-600 hover:bg-cyan-500 px-6 py-3 font-medium transition"
                  >
                    Start checklist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="#audit-tips"
                    className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium transition"
                  >
                    Audit tips
                  </a>
                </div>
                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                  <span>Technical SEO</span>
                  <span>8 min read</span>
                  <span>Updated May 2026</span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[40px] bg-cyan-500/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                  <img
                    src="https://images.unsplash.com/photo-1510051643593-d2de5df9ea7d?q=80&w=1200&auto=format&fit=crop"
                    alt="Technical SEO checklist"
                    className="rounded-2xl object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16">
            <article className="space-y-16">
              <div>
                <h2 id="why" className="text-4xl font-bold">
                  Why technical SEO matters
                </h2>
                <p className="mt-6 text-gray-300 leading-8">
                  Technical SEO ensures search engines can crawl, index, and understand your content. Without it, even the best content may never reach the right audience.
                </p>
                <p className="mt-4 text-gray-300 leading-8">
                  It also improves user experience through faster loading, secure browsing, and better mobile performance—signals Google uses to rank pages.
                </p>
              </div>

              <div id="checklist" className="space-y-10">
                <h2 className="text-4xl font-bold">Technical SEO checklist</h2>
                <div className="grid gap-6">
                  {checklistItems.map((item) => (
                    <div key={item.title} className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
                      <div className="flex items-center gap-4">
                        <div className="rounded-2xl bg-blue-500/10 p-4">
                          <CheckCircle className="h-6 w-6 text-cyan-400" />
                        </div>
                        <h3 className="text-2xl font-bold">{item.title}</h3>
                      </div>
                      <p className="mt-5 text-gray-300 leading-8">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div id="audit-tips" className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-slate-500/10 p-4">
                    <Sparkles className="h-8 w-8 text-slate-300" />
                  </div>
                  <h2 className="text-3xl font-bold">Audit tips for better results</h2>
                </div>
                <div className="mt-8 space-y-6 text-gray-300 leading-8">
                  {seoTactics.map((item) => (
                    <div key={item.title}>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
                    <ServerCog className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">Technical SEO must-haves</h2>
                </div>
                <ul className="mt-8 space-y-4 text-gray-300 leading-8">
                  <li className="flex gap-3">
                    <span className="mt-1 text-cyan-400">•</span>
                    <span>HTTPS sitewide for security and trust.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-cyan-400">•</span>
                    <span>Mobile-friendly pages with no viewport or touch issues.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-cyan-400">•</span>
                    <span>Working XML sitemap and robots settings.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-cyan-400">•</span>
                    <span>Structured data for rich snippets and better search presence.</span>
                  </li>
                </ul>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-cyan-300" />
                    SEO Checklist Summary
                  </h3>
                  <p className="text-gray-300 leading-7">
                    Run this checklist every quarter or before major site updates. Technical SEO is the guardrail that keeps your content visible and fast.
                  </p>
                </div>
                <RelatedArticles links={pageLinks} />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
