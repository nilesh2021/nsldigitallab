import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BlogCard from "../components/blog/BlogCard";

import { blogs } from "../../data/blogs";
import { motion, AnimatePresence } from "framer-motion";
import { PAGE_SEO } from "../../seo/pages";
import SEO from "../../seo/SEO";
import FAQSchema from "../../seo/schemas/FAQSchema";
import CollectionPageSchema from "../../seo/schemas/CollectionPageSchema";

const categories = [
  "All",
  "UI/UX",
  "SEO",
  "Digital Marketing",
  "AI Tools",
  "Affiliate Marketing",
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const blogsPerPage = 8;

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" || blog.categoryLabel === selectedCategory;

      const matchesSearch =
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginatedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const popularPosts = blogs.slice(0, 4);

  return (
    <>
      <SEO {...PAGE_SEO.blog} />

      <CollectionPageSchema
        name="NSL Digital Lab Blog"
        description="Latest SEO, UI UX and AI articles."
        url="https://nsldigitallab.com/blog"
      />

      <FAQSchema
        faqs={[
          {
            question: "What topics does NSL Digital Lab cover?",
            answer:
              "We publish articles on SEO, UI/UX Design, AI Tools, Digital Marketing, Affiliate Marketing and Web Development.",
          },
          {
            question: "Who are these articles for?",
            answer:
              "Students, professionals, freelancers, startups and business owners who want to improve their digital skills.",
          },
          {
            question: "Are these tutorials beginner friendly?",
            answer:
              "Yes. Most tutorials include step-by-step explanations suitable for beginners.",
          },
        ]}
      />
      <Navigation />

      <main className="min-h-screen bg-[#f5f7fb]">
        <section className="relative overflow-hidden bg-[#071028] py-14 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(34,211,238,0.2),transparent_34%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.14),transparent_30%)]" />

          <div className="container relative z-10 mx-auto px-6 py-24">
            <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
                  <span className="h-2 w-2 rounded-full bg-cyan-300" />
                  NSL Digital Lab Blog
                </div>
                <h1 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                  Insights that help you{" "}
                  <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
                    grow smarter online
                  </span>
                </h1>
                <p className="mt-4 max-w-xl text-[15px] leading-7 text-slate-300">
                  Practical guides on UI/UX, SEO, AI tools, affiliate marketing,
                  and digital strategy for founders, creators, and teams.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  <a
                    href="#blog-grid"
                    className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5"
                  >
                    Explore Articles
                  </a>
                  <a
                    href="#categories"
                    className="rounded-full border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/15"
                  >
                    Browse Topics
                  </a>
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-[11px] uppercase tracking-[0.22em] text-slate-400">
                  Popular topics
                </p>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  {[
                    ["SEO Growth", "Visibility that scales"],
                    ["UI/UX Design", "Clearer product journeys"],
                    ["AI Tools", "Faster workflows"],
                    ["Digital Marketing", "Measurable campaigns"],
                  ].map(([title, copy]) => (
                    <div
                      key={title}
                      className="rounded-xl border border-white/10 bg-[#10192d] p-3"
                    >
                      <p className="text-sm font-semibold text-white">{title}</p>
                      <p className="mt-0.5 text-xs text-slate-400">{copy}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="sticky top-[72px] z-30 border-b border-gray-200 bg-white/90 backdrop-blur-xl">
          <div className="container mx-auto px-6 py-3.5">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setCurrentPage(1);
                }}
                className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-100 lg:max-w-md"
              />

              <div id="categories" className="flex flex-wrap gap-2">
                {categories.map((category) => {
                  const active = selectedCategory === category;
                  return (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`rounded-full px-4 py-1.5 text-[13px] font-semibold transition ${
                        active
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                          : "border border-gray-200 bg-white text-gray-700 hover:border-cyan-300 hover:text-cyan-600"
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section id="blog-grid" className="py-8 sm:py-10">
          <div className="container mx-auto px-6">
            <div className="grid gap-7 lg:grid-cols-[1fr_280px]">
              <div>
                {paginatedBlogs.length === 0 ? (
                  <div className="rounded-2xl bg-white py-16 text-center shadow-sm">
                    <h2 className="text-2xl font-bold text-gray-900">No articles found</h2>
                    <p className="mt-2 text-sm text-gray-500">
                      Try another keyword or category.
                    </p>
                  </div>
                ) : (
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={selectedCategory + searchQuery + currentPage}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.28 }}
                      className="grid gap-4 md:grid-cols-2"
                    >
                      {paginatedBlogs.map((blog) => (
                        <BlogCard
                          key={blog.id}
                          title={blog.title}
                          excerpt={blog.excerpt}
                          image={blog.image}
                          category={blog.categoryLabel}
                          readTime={blog.readTime}
                          date={blog.date}
                          link={
                            "linkPath" in blog && blog.linkPath
                              ? blog.linkPath
                              : `/blog/${blog.category}/${blog.slug}`
                          }
                        />
                      ))}
                    </motion.div>
                  </AnimatePresence>
                )}

                {totalPages > 1 && (
                  <div className="mt-8 flex items-center justify-center gap-2">
                    <button
                      disabled={currentPage === 1}
                      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:border-cyan-400 disabled:opacity-40"
                    >
                      ←
                    </button>
                    {Array.from({ length: totalPages }).map((_, index) => {
                      const page = index + 1;
                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold ${
                            currentPage === page
                              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                              : "border border-gray-200 bg-white text-gray-700 hover:border-cyan-400"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                      }
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-200 bg-white text-gray-700 hover:border-cyan-400 disabled:opacity-40"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>

              <aside className="space-y-5">
                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900">Subscribe</h3>
                  <p className="mt-1.5 text-sm leading-6 text-gray-500">
                    Get the latest SEO, AI, UI/UX, and marketing insights.
                  </p>
                  <div className="mt-4 space-y-2.5">
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-cyan-400"
                    />
                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-cyan-400"
                    />
                    <button className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90">
                      Subscribe
                    </button>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900">Latest Articles</h3>
                  <div className="mt-4 space-y-3.5">
                    {popularPosts.map((post) => (
                      <a
                        key={post.id}
                        href={`/blog/${post.category}/${post.slug}`}
                        className="group flex gap-3"
                      >
                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-14 w-14 rounded-xl object-cover"
                        />
                        <div>
                          <h4 className="line-clamp-2 text-sm font-semibold leading-5 text-gray-900 group-hover:text-cyan-600">
                            {post.title}
                          </h4>
                          <p className="mt-1 text-xs text-gray-400">{post.date}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900">Explore by topic</h3>
                  <ul className="mt-3 space-y-2 text-sm">
                    <li>
                      <Link to="/blog/seo/what-is-seo" className="font-medium text-gray-800 hover:text-cyan-600">
                        SEO basics &amp; search fundamentals
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/digital-marketing/what-is-digital-marketing"
                        className="font-medium text-gray-800 hover:text-cyan-600"
                      >
                        Digital marketing channels explained
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog/ui-ux/ui-ux-design-in-2026" className="font-medium text-gray-800 hover:text-cyan-600">
                        UI/UX design trends for 2026
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/affiliate-marketing/affiliate-marketing-for-beginners"
                        className="font-medium text-gray-800 hover:text-cyan-600"
                      >
                        Affiliate marketing for beginners
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-5 text-white">
                  <h3 className="text-lg font-bold">Need SEO for your startup?</h3>
                  <p className="mt-2 text-sm leading-6 text-cyan-50">
                    Grow traffic, visibility, and conversions with practical SEO.
                  </p>
                  <a
                    href="/services/seo-services"
                    className="mt-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-semibold text-blue-600 hover:bg-slate-100"
                  >
                    Explore SEO Services
                  </a>
                </div>
              </aside>
            </div>
          </div>
        </section>

        <section className="border-t border-gray-100 bg-white py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900">Browse articles by category</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              <Link to="/blog/seo" className="rounded-xl border border-gray-200 p-5 hover:border-cyan-500">
                <h3 className="font-bold text-gray-900">SEO</h3>
                <p className="mt-2 text-sm text-gray-600">
                  Keyword research, technical SEO, and ranking strategies.
                </p>
              </Link>
              <Link to="/blog/ui-ux" className="rounded-xl border border-gray-200 p-5 hover:border-cyan-500">
                <h3 className="font-bold text-gray-900">UI/UX Design</h3>
                <p className="mt-2 text-sm text-gray-600">
                  UX, design systems, Figma, and interface design.
                </p>
              </Link>
              <Link to="/blog/ai-tools" className="rounded-xl border border-gray-200 p-5 hover:border-cyan-500">
                <h3 className="font-bold text-gray-900">AI Tools</h3>
                <p className="mt-2 text-sm text-gray-600">
                  ChatGPT, Claude, Gemini, and productivity workflows.
                </p>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-gray-900">Frequently asked questions</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              <div>
                <h3 className="font-semibold text-gray-900">
                  What topics does NSL Digital Lab cover?
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  SEO, UI/UX, AI tools, digital marketing, affiliate marketing, and web
                  development.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Who are these articles for?</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Students, professionals, freelancers, and business owners building digital
                  skills.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900">Are the guides beginner friendly?</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Yes. Most tutorials are step-by-step for beginners, with extra depth for
                  professionals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
