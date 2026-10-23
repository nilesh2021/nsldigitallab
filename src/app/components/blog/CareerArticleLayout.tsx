import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Layers3 } from "lucide-react";

import Navigation from "../Navigation";
import Footer from "../Footer";
import RelatedArticles from "./RelatedArticles";
import SEO from "../../../seo/SEO";
import ArticleSchema from "../../../seo/schemas/ArticleSchema";
import { SITE } from "../../../seo/schemas/constants";
import { getBlogLinks } from "../../../data/blogInternalLinks";

export interface ArticleSection {
  id: string;
  title: string;
  body: ReactNode;
}

interface Props {
  slug: string;
  seo: { title: string; description: string; keywords: string; canonical: string };
  badge: string;
  h1Lead: string;
  h1Accent: string;
  intro: string;
  image: string;
  imageAlt: string;
  readTime: string;
  updated: string;
  sections: ArticleSection[];
  checklistTitle: string;
  checklist: string[];
}

export default function CareerArticleLayout({
  slug,
  seo,
  badge,
  h1Lead,
  h1Accent,
  intro,
  image,
  imageAlt,
  readTime,
  updated,
  sections,
  checklistTitle,
  checklist,
}: Props) {
  const pageLinks = getBlogLinks(slug);
  const tocItems = [
    ...sections.map((s) => ({ id: s.id, title: s.title })),
    { id: "checklist", title: "Checklist" },
  ];

  const articleUrl = `${SITE.url}${seo.canonical}`;

  return (
    <>
      <SEO {...seo} image={image} type="article" />
      <ArticleSchema
        headline={seo.title}
        description={seo.description}
        url={articleUrl}
        image={image}
      />

      <Navigation />

      <main className="bg-black text-white min-h-screen">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-cyan-950 via-slate-950 to-black py-24">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_40%)]" />

          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    Careers
                  </span>
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                    {badge}
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {h1Lead}
                  <span className="block text-cyan-400">{h1Accent}</span>
                </h1>

                <p className="mt-6 text-lg text-gray-300 leading-relaxed">{intro}</p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#checklist"
                    className="inline-flex items-center rounded-2xl bg-cyan-600 hover:bg-cyan-500 px-6 py-3 font-medium transition"
                  >
                    Jump to checklist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <Link
                    to="/careers"
                    className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium transition"
                  >
                    View open roles
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                  <span>{readTime}</span>
                  <span>Updated {updated}</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[40px] bg-cyan-500/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                  <img src={image} alt={imageAlt} className="rounded-2xl object-cover w-full" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-[1fr_320px] gap-16">
            <article className="space-y-16">
              {sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <h2 className="text-4xl font-bold">{section.title}</h2>
                  <div className="mt-6 space-y-4 text-gray-300 leading-8">{section.body}</div>
                </div>
              ))}

              <div
                id="checklist"
                className="rounded-[32px] border border-cyan-500/20 bg-cyan-500/5 p-8"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 p-4">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold">{checklistTitle}</h2>
                </div>

                <ul className="mt-8 space-y-4 text-gray-300 leading-8">
                  {checklist.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-1 text-cyan-400 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>

            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-[32px] border border-gray-800 bg-gray-900/50 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Layers3 className="h-5 w-5 text-cyan-400" />
                    <h3 className="text-xl font-semibold text-white">On this page</h3>
                  </div>
                  <nav className="space-y-2">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="group flex items-center justify-between rounded-xl px-3 py-3 text-gray-400 hover:bg-white/5 hover:text-cyan-300 transition"
                      >
                        {item.title}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                      </a>
                    ))}
                  </nav>
                </div>

                <RelatedArticles links={pageLinks} />

                <div className="rounded-[32px] border border-gray-800 bg-gray-900/50 p-8">
                  <h3 className="text-xl font-semibold text-white">Remote roles at NSL Digital Lab</h3>
                  <p className="mt-4 text-gray-400 text-sm leading-7">
                    Read the full job details, including location, hours, and pay shown on
                    each listing, before you apply.
                  </p>
                  <Link
                    to="/careers"
                    className="mt-6 inline-flex items-center text-cyan-400 hover:text-cyan-300 text-sm font-medium transition"
                  >
                    View careers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
