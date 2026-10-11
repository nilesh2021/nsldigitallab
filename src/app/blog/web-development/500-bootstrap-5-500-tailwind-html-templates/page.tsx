import { ArrowRight, CheckCircle2, FolderOpen, Globe, Layers } from "lucide-react";
import { Link } from "react-router-dom";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import RelatedArticles from "../../../components/blog/RelatedArticles";
import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import { getBlogLinks } from "../../../../data/blogInternalLinks";
import SEO from "../../../../seo/SEO";
import { PAGE_SEO } from "../../../../seo/pages";
import ArticleSchema from "../../../../seo/schemas/ArticleSchema";
import FAQSchema from "../../../../seo/schemas/FAQSchema";

const PRODUCT_URL = "https://www.afordz.in/products/bootstrap-templates-bundle";
const PAGE_URL =
  "https://nsldigitallab.com/blog/web-development/500-bootstrap-5-500-tailwind-html-templates";

const pageLinks = getBlogLinks("500-bootstrap-5-500-tailwind-html-templates");

const folders = [
  {
    title: "500 Bootstrap 5 pages",
    body: "The BS500DEAL folder holds index1.html through index500.html. Each file is one page that loads Bootstrap 5 from a CDN.",
    icon: Layers,
  },
  {
    title: "500 Tailwind CSS pages",
    body: "The TW500DEAL folder holds index1.html through index500.html. Each file is one page that loads Tailwind CSS from a CDN.",
    icon: FolderOpen,
  },
  {
    title: "What you open in a browser",
    body: "Layouts in the download include dark heroes, cover headers, marketing pages, product pages, landing pages, and feature lists. Placeholder copy and remote images are part of those files.",
    icon: Globe,
  },
];

const notIncluded = [
  "No local CSS, JavaScript, or image files.",
  "No per-template project folders.",
  "Font Awesome and other libraries also load from a CDN.",
  "These are not 1,000 separate multi-file website kits.",
  "These pages are not an offline kit.",
];

const audiences = [
  {
    title: "Freelancers starting a client page",
    body: "Open one HTML file, replace the placeholder copy, and use it as a starting layout for a landing page or brochure site.",
  },
  {
    title: "Students learning Bootstrap and Tailwind",
    body: "Compare a Bootstrap 5 page with a Tailwind page that solves a similar layout, then edit the markup in any code editor.",
  },
  {
    title: "Agencies that need a first draft fast",
    body: "Pick a hero, pricing block, or feature list and adapt it instead of building the first screen from a blank file.",
  },
];

const faqs = [
  {
    question: "What is in the 500 Bootstrap 5 and 500 Tailwind HTML templates download?",
    answer:
      "One ZIP with 1,000 standalone HTML pages: 500 Bootstrap 5 files in the BS500DEAL folder and 500 Tailwind CSS files in the TW500DEAL folder. Each page is a single HTML file named index1.html through index500.html.",
  },
  {
    question: "Are these 1,000 full website kits?",
    answer:
      "No. Each file is one HTML page. The download does not include local CSS, JavaScript, or image assets, and it is not a set of 1,000 separate multi-file website projects.",
  },
  {
    question: "Do the Bootstrap and Tailwind templates work offline?",
    answer:
      "Styles and icons load from a CDN, so an internet connection is required to view the pages as designed. They are not an offline kit.",
  },
  {
    question: "How much does the HTML templates bundle cost?",
    answer:
      "The bundle is ₹99 for one digital licence. The ZIP is released only after the server confirms a captured payment on the Afordz product page.",
  },
];

export default function BootstrapTailwindTemplatesPage() {
  return (
    <>
      <SEO {...PAGE_SEO.bootstrapTailwindTemplates} />
      <ArticleSchema
        headline="500 Bootstrap 5 + 500 Tailwind HTML Templates"
        description={PAGE_SEO.bootstrapTailwindTemplates.description}
        url={PAGE_URL}
        image="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
        datePublished="2026-10-11"
        dateModified="2026-10-11"
      />
      <FAQSchema faqs={faqs} />

      <Navigation />

      <main className="min-h-screen bg-black text-white">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.16),transparent_36%)]" />
          <div className="container relative z-10 mx-auto px-6">
            <div className="grid items-center gap-12 lg:grid-cols-[1fr_380px]">
              <div>
                <span className="inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  Web Development
                </span>
                <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl">
                  500 Bootstrap 5 + 500 Tailwind HTML Templates
                </h1>
                <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-300">
                  A ZIP of 1,000 standalone HTML pages: 500 Bootstrap 5 files and 500 Tailwind CSS files. Each page is a single HTML file you can open, edit, and adapt.
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href={PRODUCT_URL}
                    className="inline-flex items-center rounded-2xl bg-cyan-600 px-6 py-3 font-medium transition hover:bg-cyan-500"
                  >
                    Get the bundle · ₹99
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="#whats-inside"
                    className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-medium transition hover:bg-white/10"
                  >
                    See what’s inside
                  </a>
                </div>
                <div className="mt-8 flex flex-wrap gap-4 text-sm text-gray-400">
                  <span>8 min read</span>
                  <span>Updated October 2026</span>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-6">
                <img
                  src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200&auto=format&fit=crop"
                  alt="Code editor showing an HTML website template"
                  className="h-[320px] w-full rounded-3xl object-cover"
                />
                <p className="mt-4 text-sm leading-6 text-gray-400">
                  Styles and icons load from a CDN. An internet connection is required to view the pages as designed.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="grid gap-16 lg:grid-cols-[1fr_320px]">
            <article className="space-y-12">
              <div id="whats-inside" className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <h2 className="text-3xl font-bold">What’s in the HTML templates ZIP</h2>
                <p className="mt-4 max-w-3xl leading-8 text-gray-300">
                  The download is one archive of standalone pages, not a stack of complete website projects. Use it when you want a Bootstrap 5 HTML template or a Tailwind CSS HTML template you can edit in any code editor. The same bundle is listed on our{" "}
                  <InlineArticleLink to="/free-website-templates">website templates page</InlineArticleLink>.
                </p>
                <div className="mt-8 grid gap-6">
                  {folders.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/70 p-6">
                        <div className="flex items-center gap-4">
                          <div className="rounded-2xl bg-slate-800 p-3 text-cyan-400">
                            <Icon className="h-6 w-6" />
                          </div>
                          <h3 className="text-xl font-semibold">{item.title}</h3>
                        </div>
                        <p className="mt-4 leading-7 text-gray-300">{item.body}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-2">
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                  <h2 className="text-2xl font-bold">Bootstrap 5 templates</h2>
                  <p className="mt-4 leading-7 text-gray-300">
                    Bootstrap 5 pages use the framework’s grid, components, and utility classes. They suit teams that already know Bootstrap and want a familiar class system for heroes, cards, navbars, and forms.
                  </p>
                </div>
                <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                  <h2 className="text-2xl font-bold">Tailwind CSS templates</h2>
                  <p className="mt-4 leading-7 text-gray-300">
                    Tailwind pages style the layout with utility classes in the HTML. They suit utility-first workflows where spacing, type, and color live next to the markup.
                  </p>
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <h2 className="text-3xl font-bold">What is not included</h2>
                <ul className="mt-6 space-y-4 leading-8 text-gray-300">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 leading-7 text-gray-300">
                  After you customize a page, treat speed and structure the same way you would any other site. Our{" "}
                  <InlineArticleLink to="/blog/seo/website-optimization-tips">website optimization tips</InlineArticleLink>{" "}
                  and{" "}
                  <InlineArticleLink to="/blog/ui-ux/ui-ux-design-principles">UI/UX design principles</InlineArticleLink>{" "}
                  cover the checks that still matter once the template is yours.
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">Who these website templates are for</h2>
                <div className="mt-6 grid gap-6">
                  {audiences.map((item) => (
                    <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="mt-3 leading-7 text-gray-300">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <h2 className="text-3xl font-bold">How to use a single HTML file</h2>
                <ol className="mt-6 space-y-4 leading-8 text-gray-300">
                  <li>1. Unzip the archive and open either BS500DEAL or TW500DEAL.</li>
                  <li>2. Open one index file in a current browser while you are online, so the CDN copies of Bootstrap 5 or Tailwind CSS can load.</li>
                  <li>3. Replace placeholder headlines, buttons, and sections with your own copy.</li>
                  <li>4. Keep third-party licences for fonts, icons, and remote images that the file already references.</li>
                </ol>
              </div>

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <h2 className="text-3xl font-bold">How the ₹99 purchase works</h2>
                <p className="mt-4 leading-8 text-gray-300">
                  The bundle costs ₹99 for one digital licence per order. Adding the licence to the cart does not download the archive. The file is released only after the server confirms a captured payment.
                </p>
                <a
                  href={PRODUCT_URL}
                  className="mt-6 inline-flex items-center rounded-2xl bg-cyan-600 px-6 py-3 font-medium transition hover:bg-cyan-500"
                >
                  Buy on Afordz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </div>

              <div>
                <h2 className="text-3xl font-bold">Common questions</h2>
                <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                  {faqs.map((faq) => (
                    <div key={faq.question} className="py-6">
                      <h3 className="text-lg font-semibold">{faq.question}</h3>
                      <p className="mt-3 leading-7 text-gray-300">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-[32px] border border-cyan-500/20 bg-cyan-500/10 p-8">
                  <h2 className="text-xl font-semibold">Get the ZIP</h2>
                  <p className="mt-3 text-sm leading-6 text-gray-300">
                    500 Bootstrap 5 HTML templates and 500 Tailwind CSS HTML templates. ₹99. One licence per order.
                  </p>
                  <a
                    href={PRODUCT_URL}
                    className="mt-5 inline-flex items-center text-sm font-semibold text-cyan-300"
                  >
                    Open the product page
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </a>
                  <Link
                    to="/free-website-templates"
                    className="mt-3 block text-sm font-semibold text-white/80 underline decoration-white/20 underline-offset-2"
                  >
                    Read the templates overview
                  </Link>
                </div>
                <RelatedArticles links={pageLinks} />
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
