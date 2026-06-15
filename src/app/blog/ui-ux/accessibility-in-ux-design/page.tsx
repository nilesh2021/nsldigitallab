import { ArrowRight, CheckCircle, Eye, Keyboard, Zap } from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import RelatedArticles from "../../../components/blog/RelatedArticles";
import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import { getBlogLinks } from "../../../../data/blogInternalLinks";

const pageLinks = getBlogLinks("accessibility-in-ux-design");

export default function AccessibilityInUxDesignPage() {
  return (
    <>
      <Helmet>
        <title>Accessibility in UX Design | Inclusive UX Best Practices</title>
        <meta
          name="description"
          content="Learn accessibility best practices for UX design: WCAG tips, color contrast, keyboard navigation, ARIA usage, and testing for inclusive products."
        />
        <meta
          name="keywords"
          content="accessibility, UX design, inclusive design, WCAG, color contrast, ARIA, keyboard navigation"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.NSLmedia.co.in/blog/ui-ux/accessibility-in-ux-design"
        />
        <meta property="og:title" content="Accessibility in UX Design | Inclusive UX Best Practices" />
        <meta
          property="og:description"
          content="Practical accessibility guidance for UX designers: design for keyboard users, ensure color contrast, use ARIA correctly, and test with real users."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1587614382346-ac3f3c4d6c7a?q=80&w=1200&auto=format&fit=crop"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navigation />

      <main className="bg-black text-white min-h-screen">
        <header className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-900 via-slate-800 to-black py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="inline-flex items-center rounded-full bg-cyan-700/20 px-3 py-1 text-sm text-cyan-300 mb-4">
                  UI/UX • Accessibility
                </span>
                <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                  Accessibility in UX Design
                </h1>
                <p className="mt-4 text-gray-300 max-w-xl">
                  Practical, actionable accessibility guidance for UX designers and product teams to build inclusive digital experiences that reach more users.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a href="#toc" className="inline-flex items-center rounded-2xl bg-cyan-600 hover:bg-cyan-500 px-5 py-3 text-sm font-medium transition">
                    Read checklist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                  <a href="#resources" className="inline-flex items-center rounded-2xl border border-white/10 px-5 py-3 text-sm text-gray-300 hover:bg-white/2 transition">
                    Resources
                  </a>
                </div>

                <div className="mt-6 text-sm text-gray-400 flex gap-4">
                  <span>8 min read</span>
                  <span>Updated May 2026</span>
                </div>
              </div>

              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-2">
                  <img
                    src="https://images.unsplash.com/photo-1587614382346-ac3f3c4d6c7a?q=80&w=1200&auto=format&fit=crop"
                    alt="Accessibility in UX design"
                    className="w-full h-56 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-[1fr_320px] gap-12">
            <article className="prose prose-invert max-w-none">
              <nav id="toc" className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">On this page</h4>
                <ul className="flex flex-wrap gap-3 text-sm">
                  <li><a href="#why" className="text-cyan-400 hover:underline">Why it matters</a></li>
                  <li><a href="#principles" className="text-cyan-400 hover:underline">Principles</a></li>
                  <li><a href="#tips" className="text-cyan-400 hover:underline">Practical tips</a></li>
                  <li><a href="#testing" className="text-cyan-400 hover:underline">Testing</a></li>
                </ul>
              </nav>

              <section id="why" className="mb-8">
                <h2 className="text-2xl font-bold">Why accessibility matters in UX</h2>
                <p className="text-gray-300">
                  Accessible products work better for everyone — they expand reach, reduce friction, and support{" "}
                  <InlineArticleLink to="/blog/seo/website-optimization-tips">website performance and SEO</InlineArticleLink>
                  . Accessibility fits naturally into a structured{" "}
                  <InlineArticleLink to="/blog/ui-ux/ui-ux-design-process-explained">UI/UX design process</InlineArticleLink>{" "}
                  and is both an ethical responsibility and a pragmatic business advantage.
                </p>
              </section>

              <section id="principles" className="mb-8 grid gap-6 lg:grid-cols-2">
                <div className="rounded-xl border border-white/6 bg-white/3 p-6">
                  <h3 className="font-semibold flex items-center gap-3"><CheckCircle className="h-5 w-5 text-cyan-300" /> Core principles</h3>
                  <ul className="mt-3 text-gray-300 space-y-2">
                    <li><strong>Perceivable:</strong> Present information clearly.</li>
                    <li><strong>Operable:</strong> Support keyboard and alternative inputs.</li>
                    <li><strong>Understandable:</strong> Use clear language and predictable UI.</li>
                  </ul>
                </div>

                <div className="rounded-xl border border-white/6 bg-white/3 p-6">
                  <h3 className="font-semibold flex items-center gap-3"><Eye className="h-5 w-5 text-cyan-300" /> Visual accessibility</h3>
                  <p className="mt-3 text-gray-300">Ensure contrast, scalable type, and avoid using color alone to convey information. Use accessible color palettes and test with contrast tools.</p>
                </div>
              </section>

              <section id="tips" className="mb-8">
                <h2 className="text-2xl font-bold">Practical tips</h2>
                <div className="mt-4 space-y-6 text-gray-300">
                  <div className="rounded-xl border border-white/6 bg-white/3 p-6">
                    <h4 className="font-semibold">Keyboard navigation</h4>
                    <p className="mt-2">All interactive elements must be reachable by keyboard. Ensure visible focus states and logical tab order to make navigation predictable.</p>
                  </div>

                  <div className="rounded-xl border border-white/6 bg-white/3 p-6">
                    <h4 className="font-semibold">Semantic HTML & ARIA</h4>
                    <p className="mt-2">Prefer native HTML where possible. Use ARIA roles and labels when providing additional semantics, but avoid overusing ARIA.</p>
                  </div>

                  <div className="rounded-xl border border-white/6 bg-white/3 p-6">
                    <h4 className="font-semibold">Forms & feedback</h4>
                    <p className="mt-2">Label inputs clearly, provide helpful error messages, and ensure errors are announced to screen readers.</p>
                  </div>
                </div>
              </section>

              <section id="testing" className="mb-8">
                <h2 className="text-2xl font-bold">Testing for accessibility</h2>
                <p className="text-gray-300">Combine automated tools (axe, Lighthouse) with manual testing: keyboard-only navigation, screen reader testing, and real-user testing with assistive tech.</p>
              </section>

              <section id="checklist" className="mb-16">
                <h2 className="text-2xl font-bold">Quick checklist</h2>
                <ul className="mt-4 list-inside list-disc text-gray-300 space-y-2">
                  <li>Semantic headings and landmarks</li>
                  <li>Descriptive alt text for meaningful images</li>
                  <li>Keyboard operability for all controls</li>
                  <li>Sufficient color contrast and scalable type</li>
                  <li>Clear form labels and accessible error handling</li>
                </ul>
              </section>
            </article>

            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/10 p-6">
                  <h4 className="text-lg font-semibold flex items-center gap-3">
                    <Keyboard className="h-5 w-5 text-cyan-300" />
                    Try this (keyboard first)
                  </h4>
                  <p className="mt-3 text-sm text-gray-300">Use <strong>Tab</strong> to navigate and <strong>Enter</strong> to activate — ensure focus never gets lost.</p>
                </div>

                <div id="resources" className="rounded-xl border border-gray-800 bg-gray-900/40 p-6">
                  <h4 className="text-lg font-semibold">Resources</h4>
                  <ul className="mt-3 text-sm text-gray-300 space-y-2">
                    <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-cyan-400 hover:text-cyan-300">WCAG guidelines</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility" className="text-cyan-400 hover:text-cyan-300">MDN Accessibility</a></li>
                    <li><a href="https://deque.com/axe/" className="text-cyan-400 hover:text-cyan-300">axe — Accessibility testing</a></li>
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
