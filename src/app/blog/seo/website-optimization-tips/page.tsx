import { ArrowRight, BarChart3, CheckCircle, Globe, ShieldCheck, Sparkles } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import RelatedArticles from "../../../components/blog/RelatedArticles";
import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import { getBlogLinks } from "../../../../data/blogInternalLinks";

const pageLinks = getBlogLinks("website-optimization-tips");

const tactics = [
  {
    title: "Optimize page speed",
    description:
      "Compress images, enable browser caching, lazy-load below-the-fold content, and minimize JavaScript to improve Core Web Vitals.",
    icon: BarChart3,
  },
  {
    title: "Use semantic HTML",
    description:
      "Structure content with headings, lists, and landmarks so search engines and accessibility tools can understand your page.",
    icon: Globe,
  },
  {
    title: "Enhance mobile UX",
    description:
      "Make buttons easy to tap, use responsive layouts, and avoid intrusive interstitials to keep mobile visitors engaged.",
    icon: ShieldCheck,
  },
  {
    title: "Audit technical SEO",
    description:
      "Verify redirects, canonical tags, sitemap accuracy, and robots settings so search engines index the right pages.",
    icon: Sparkles,
  },
];

const checklist = [
  "Measure performance with Lighthouse and WebPageTest.",
  "Compress and serve images in next-gen formats like WebP or AVIF.",
  "Enable HTTP caching and remove unused CSS/JS.",
  "Use structured data for articles, products, and breadcrumbs.",
  "Test mobile experience and page navigation on real devices.",
];

export default function WebsiteOptimizationTipsPage() {
  return (
    <>
      <Helmet>
        <title>Website Optimization Tips | Speed, SEO, and Better UX</title>
        <meta
          name="description"
          content="Discover website optimization tips for speed, SEO, mobile UX, technical health, and performance to boost rankings and conversions."
        />
        <meta
          name="keywords"
          content="website optimization tips, page speed, technical SEO, mobile UX, website performance, site optimization"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.NSLmedia.co.in/blog/seo/website-optimization-tips"
        />
        <meta property="og:title" content="Website Optimization Tips | Speed, SEO, and Better UX" />
        <meta
          property="og:description"
          content="Learn website optimization tips for faster pages, better SEO, improved mobile experience, and stronger technical health."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navigation />

      <main className="bg-black text-white min-h-screen">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.14),transparent_35%)]" />
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-[1fr_380px] items-center">
              <div>
                <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  Website Optimization
                </span>
                <h1 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                  Website Optimization Tips
                </h1>
                <p className="mt-6 max-w-3xl text-gray-300 text-lg leading-8">
                  Boost your website speed, technical SEO, and user experience with practical optimization tips that help pages load faster and convert better.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#tips"
                    className="inline-flex items-center rounded-2xl bg-cyan-600 hover:bg-cyan-500 px-6 py-3 font-medium transition"
                  >
                    Read tips
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="#checklist"
                    className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
                  >
                    Quick checklist
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
                  <span>9 min read</span>
                  <span>Updated May 2026</span>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-45px_rgba(56,189,248,0.6)]">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
                  alt="Website optimization dashboard"
                  className="h-[360px] w-full rounded-3xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16">
            <article className="space-y-12">
              <div id="tips" className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-500/10 p-4">
                    <CheckCircle className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Optimization tips that matter</h2>
                </div>
                <div className="mt-8 grid gap-6">
                  {tactics.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                        <div className="flex items-center gap-4">
                          <div className="rounded-2xl bg-slate-800 p-3 text-cyan-400">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                        <p className="mt-4 text-gray-300 leading-7">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                  <h3 className="text-2xl font-bold">What to measure</h3>
                  <p className="mt-4 text-gray-300 leading-7">
                    Track metrics like Largest Contentful Paint, First Input Delay, and Cumulative Layout Shift to understand how real users experience your site. These overlap with{" "}
                    <InlineArticleLink to="/blog/seo/technical-seo-checklist">technical SEO priorities</InlineArticleLink>{" "}
                    and the core ideas in our{" "}
                    <InlineArticleLink to="/blog/seo/what-is-seo">SEO beginner guide</InlineArticleLink>
                    .
                  </p>
                </div>
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                  <h3 className="text-2xl font-bold">Why it helps SEO</h3>
                  <p className="mt-4 text-gray-300 leading-7">
                    Fast, accessible pages are easier for search engines to crawl, rank better in search results, and keep visitors from bouncing too quickly.
                  </p>
                </div>
              </div>

              <div id="checklist" className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <h2 className="text-3xl font-bold">Website optimization checklist</h2>
                <ul className="mt-6 space-y-4 text-gray-300 leading-8">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-cyan-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 p-8">
                  <h3 className="text-xl font-semibold text-white mb-4">Quick wins</h3>
                  <ul className="text-gray-300 space-y-3 text-sm">
                    <li>Compress images and use modern formats.</li>
                    <li>Defer non-critical scripts.</li>
                    <li>Audit broken links and redirects.</li>
                  </ul>
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
