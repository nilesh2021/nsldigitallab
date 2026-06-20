import {
  ArrowRight,
  CheckCircle,
  Globe,
  Search,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";


import ArticleSchema from "../../../../seo/schemas/ArticleSchema";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import RelatedArticles from "../../../components/blog/RelatedArticles";
import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import { getBlogLinks } from "../../../../data/blogInternalLinks";
import SEO from "../../../../seo/SEO";
import { PAGE_SEO } from "../../../../seo/pages";

const pageLinks = getBlogLinks("what-is-seo");

const seoBasics = [
  {
    title: "Search intent matters",
    description:
      "SEO is about helping people find the right answer at the right time with content that matches their search intent.",
  },
  {
    title: "Technical health is critical",
    description:
      "Fast loading pages, mobile-friendly design, and clear indexing signals help search engines crawl and rank your site.",
  },
  {
    title: "Content is still king",
    description:
      "High-quality content that answers questions, solves problems, and uses keywords naturally will rank better over time.",
  },
  {
    title: "Authority grows with links",
    description:
      "Relevant backlinks, brand mentions, and social proof show search engines that your site is trustworthy.",
  },
];

const seoChecklist = [
  "Choose keyword-focused page titles and meta descriptions.",
  "Write concise headings and useful page copy.",
  "Optimize images with descriptive alt text.",
  "Ensure pages load quickly on desktop and mobile.",
  "Use clear internal links to related content.",
  "Track performance with Google Search Console.",
];

export default function WhatIsSeoPage() {
  return (
    <>

     <SEO {...PAGE_SEO.whatIsSeo} />
      
      
       <ArticleSchema
        headline="What is SEO? Beginner's Guide 2026"
        description="Learn what SEO is, how search engines work, and how beginners can improve website rankings."
        url="https://nsldigitallab.com/blog/seo/what-is-seo"
      />

      <Navigation />

      <main className="bg-black text-white min-h-screen">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_40%)]" />
          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    SEO
                  </span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                    Basics
                  </span>
                  <span className="rounded-full border border-slate-500/30 bg-slate-500/10 px-4 py-2 text-sm text-slate-300">
                    Guide
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  What is SEO?
                  <span className="block text-cyan-400">A beginner's guide to search engine optimization.</span>
                </h1>

                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  SEO helps websites rank higher in search results by improving relevance, usability, and trust.
                  It is the foundation for attracting organic visitors without relying only on ads.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center rounded-2xl bg-cyan-600 hover:bg-cyan-500 px-6 py-3 font-medium transition"
                  >
                    How it works
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>

                  <a
                    href="#checklist"
                    className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium transition"
                  >
                    SEO checklist
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                  <span>SEO Basics</span>
                  <span>7 min read</span>
                  <span>Updated 2026</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[40px] bg-cyan-500/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                  <img
                    src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?q=80&w=1200&auto=format&fit=crop"
                    alt="What is SEO?"
                    className="rounded-2xl object-cover w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16">
            <article>
              <div>
                <h2 id="definition" className="text-4xl font-bold">
                  What does SEO mean?
                </h2>

                <p className="mt-6 text-gray-300 leading-8">
                  SEO stands for Search Engine Optimization. It is the process of improving a website so it appears higher in search engine results pages.
                  SEO combines technical fixes, content strategy, and authority-building to make pages more discoverable and useful to searchers.
                </p>

                <p className="mt-4 text-gray-300 leading-8">
                  When someone searches on Google, Bing, or another search engine, the search engine evaluates thousands of pages and chooses the best answer.
                  Strong SEO helps your site show up for the queries your audience types into search.
                </p>
              </div>

              <div id="how-it-works" className="mt-20 rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-500/10 p-4">
                    <Search className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-bold">How search engines rank pages</h2>
                </div>

                <div className="mt-8 space-y-6 text-gray-300 leading-8">
                  <p>
                    Search engines crawl your site, index each page, and then rank results by relevance, authority, and experience.
                    Modern SEO is about optimizing every part of that process.
                  </p>

                  <p>
                    The three pillars of search ranking are technical SEO, on-page SEO, and off-page SEO. All three work together to signal trust and quality.
                  </p>
                </div>
              </div>

              <div id="core-elements" className="mt-20">
                <h2 className="text-4xl font-bold">SEO’s core components</h2>

                <div className="mt-12 grid md:grid-cols-2 gap-8">
                  <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-emerald-500/10 p-4">
                        <Globe className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold">On-page SEO</h3>
                    </div>
                    <p className="mt-6 text-gray-300 leading-8">
                      Content, headings, metadata, and user experience are all part of on-page SEO. This is how your page communicates relevance to search engines.
                    </p>
                  </div>

                  <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-sky-500/10 p-4">
                        <ShieldCheck className="h-8 w-8 text-sky-400" />
                      </div>
                      <h3 className="text-2xl font-bold">Technical SEO</h3>
                    </div>
                    <p className="mt-6 text-gray-300 leading-8">
                      Technical SEO ensures search engines can crawl and index your site. It covers speed, site structure, mobile friendliness, and schema markup. Use our{" "}
                      <InlineArticleLink to="/blog/seo/technical-seo-checklist">technical SEO checklist</InlineArticleLink>{" "}
                      and{" "}
                      <InlineArticleLink to="/blog/seo/website-optimization-tips">website optimization tips</InlineArticleLink>{" "}
                      to audit fundamentals before scaling content.
                    </p>
                  </div>

                  <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-blue-500/10 p-4">
                        <TrendingUp className="h-8 w-8 text-blue-400" />
                      </div>
                      <h3 className="text-2xl font-bold">Off-page SEO</h3>
                    </div>
                    <p className="mt-6 text-gray-300 leading-8">
                      Off-page SEO is about earning credibility through backlinks, mentions, and shares. It helps search engines trust your site as an authority.
                    </p>
                  </div>

                  <div className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
                    <div className="flex items-center gap-4">
                      <div className="rounded-2xl bg-emerald-500/10 p-4">
                        <CheckCircle className="h-8 w-8 text-emerald-400" />
                      </div>
                      <h3 className="text-2xl font-bold">User experience</h3>
                    </div>
                    <p className="mt-6 text-gray-300 leading-8">
                      Great SEO also means a great experience for visitors. Fast, clear, and accessible pages keep users engaged and reduce bounce rate.
                    </p>
                  </div>
                </div>
              </div>

              <div id="why-seo" className="mt-20 rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-emerald-500/10 p-4">
                    <TrendingUp className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Why SEO matters</h2>
                </div>
                <div className="mt-8 space-y-6 text-gray-300 leading-8">
                  <p>
                    SEO is a sustainable channel that brings qualified traffic over time. It helps your business get discovered by people actively searching for your services.
                  </p>
                  <p>
                    Compared to paid ads, SEO delivers compounding value: content ranks longer, links add authority, and technical improvements continue to pay off.
                  </p>
                </div>
              </div>

              <div id="checklist" className="mt-20 rounded-[32px] border border-white/10 bg-black/30 p-8">
                <h2 className="text-3xl font-bold">SEO Quick Checklist</h2>
                <ul className="mt-8 space-y-4 text-gray-300">
                  {seoChecklist.map((item, index) => (
                    <li key={index} className="flex items-start gap-4">
                      <span className="mt-1 text-cyan-400">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div id="faq" className="mt-24">
                <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
                <div className="mt-10 space-y-6">
                  {[
                    {
                      q: "How long does SEO take to show results?",
                      a: "SEO typically takes a few months to show strong results, but the traffic compounds over time when you maintain quality and technical health.",
                    },
                    {
                      q: "Is SEO only for large websites?",
                      a: "No. Small businesses and startups can benefit from SEO by targeting the right keywords and building relevant content for their audience.",
                    },
                    {
                      q: "Can I do SEO without paid ads?",
                      a: "Yes. SEO is one of the strongest organic channels and can reduce dependence on paid ads once your site begins to rank.",
                    },
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/5 p-6"
                    >
                      <h3 className="text-xl font-semibold">{faq.q}</h3>
                      <p className="mt-3 text-gray-300 leading-7">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside className="sticky top-24 h-fit">
              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <h3 className="text-2xl font-bold">SEO Essentials</h3>
                <p className="mt-4 text-gray-300 leading-7">
                  Learn the basics of search optimization and explore related SEO articles from NSL Digital Lab.
                </p>

                <div className="mt-8 space-y-5">
                  {seoBasics.map((item, index) => (
                    <div key={index} className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <h4 className="font-semibold">{item.title}</h4>
                      <p className="mt-2 text-gray-300 text-sm">{item.description}</p>
                    </div>
                  ))}

                </div>
              </div>

              <RelatedArticles links={pageLinks} />
            </aside>
          </div>
        </section>
      </main>
  <ScrollToTop />
      <Footer />
    </>
  );
}
