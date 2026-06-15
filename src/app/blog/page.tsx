import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import BlogCard from "../components/blog/BlogCard";

import { blogs } from "../../data/blogs";
import { motion, AnimatePresence } from "framer-motion";
import Breadcrumbs from "../components/Breadcrumbs";
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

  const blogsPerPage = 6;

  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) => {
      const matchesCategory =
        selectedCategory === "All" ||
        blog.categoryLabel === selectedCategory;

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
      <Helmet>
        <title>
          Blog | UI/UX, SEO, AI Tools & Digital Marketing Articles
        </title>

        <meta
          name="description"
          content="Explore the latest articles about UI/UX design, SEO, AI tools, affiliate marketing, startups, and digital marketing trends."
        />
      </Helmet>

      <Navigation />

      <main className="bg-[#f5f7fb] min-h-screen">

        {/* HERO */}
        <section className="relative overflow-hidden bg-[#071028] pt-24 pb-12">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.25),transparent_35%)]" />

          <div className="container mx-auto px-6 relative z-10">

            <div className="max-w-4xl">
 
              <span className="inline-flex items-center rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300">
                NSLMedia Blog
              </span>

              <h1 className="mt-6 text-4xl md:text-5xl font-black leading-tight text-white">
                Digital Insights &
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {" "}
                  Growth Strategies
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Explore UI/UX, SEO, AI tools, affiliate marketing, SaaS growth,
                and digital marketing insights designed for startups and creators.
              </p>

            </div>

          </div>

        </section>

        {/* TOOLBAR */}
        <section className="sticky top-[72px] z-30 border-b border-gray-200 bg-white/90 backdrop-blur-xl">

          <div className="container mx-auto px-6 py-5">

            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

              {/* SEARCH */}
              <div className="w-full lg:max-w-md">

                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-5 py-3 text-[15px] text-gray-900 outline-none transition-all focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />

              </div>

              {/* FILTERS */}
              <div className="flex flex-wrap gap-3">

                {categories.map((category) => {
                  const active = selectedCategory === category;

                  return (
                    <button
                      key={category}
                      onClick={() => {
                        setSelectedCategory(category);
                        setCurrentPage(1);
                      }}
                      className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition-all duration-300
                      ${
                        active
                          ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-100"
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

        {/* MAIN LAYOUT */}
        <section className="py-14">

          <div className="container mx-auto px-6">

            <div className="grid gap-10 lg:grid-cols-[1fr_320px]">

              {/* LEFT CONTENT */}
              <div>

                {/* BLOG GRID */}
                {paginatedBlogs.length === 0 ? (

                  <div className="flex flex-col items-center justify-center rounded-3xl bg-white py-24 text-center shadow-sm">

                    <h2 className="text-3xl font-bold text-gray-900">
                      No articles found
                    </h2>

                    <p className="mt-4 text-gray-500">
                      Try another keyword or category.
                    </p>

                  </div>

                ) : (

                 <AnimatePresence mode="wait">

  <motion.div
    key={selectedCategory + searchQuery + currentPage}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    transition={{
      duration: 0.45,
      ease: "easeInOut",
    }}
    className="grid gap-8 md:grid-cols-2"
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

                {/* PAGINATION */}
                {totalPages > 1 && (

                  <div className="mt-16 flex items-center justify-center gap-3">

                    <button
                      disabled={currentPage === 1}
                      onClick={() =>
                        setCurrentPage((prev) => Math.max(prev - 1, 1))
                      }
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:border-cyan-400 hover:text-cyan-600 disabled:opacity-40"
                    >
                      ←
                    </button>

                    {Array.from({ length: totalPages }).map((_, index) => {
                      const page = index + 1;

                      return (
                        <button
                          key={page}
                          onClick={() => setCurrentPage(page)}
                          className={`flex h-11 w-11 items-center justify-center rounded-xl text-sm font-bold transition-all
                          ${
                            currentPage === page
                              ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-100"
                              : "border border-gray-200 bg-white text-gray-700 hover:border-cyan-400 hover:text-cyan-600"
                          }`}
                        >
                          {page}
                        </button>
                      );
                    })}

                    <button
                      disabled={currentPage === totalPages}
                      onClick={() =>
                        setCurrentPage((prev) =>
                          Math.min(prev + 1, totalPages)
                        )
                      }
                      className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-700 transition hover:border-cyan-400 hover:text-cyan-600 disabled:opacity-40"
                    >
                      →
                    </button>

                  </div>

                )}

              </div>

              {/* SIDEBAR */}
              <aside className="space-y-8">

                {/* NEWSLETTER */}
                <div className="top-28 rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">

                  <h3 className="text-2xl font-bold text-gray-900">
                    Subscribe
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-gray-500">
                    Get the latest SEO, AI, UI/UX, and digital marketing insights.
                  </p>

                  <div className="mt-6 space-y-4">

                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-cyan-400"
                    />

                    <input
                      type="email"
                      placeholder="Email address"
                      className="w-full rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-cyan-400"
                    />

                    <button className="w-full rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 font-semibold text-white transition hover:opacity-90">
                      Subscribe
                    </button>

                  </div>

                </div>

                {/* POPULAR POSTS */}
                <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">

                  <h3 className="text-2xl font-bold text-gray-900">
                    Popular Posts
                  </h3>

                  <div className="mt-6 space-y-5">

                    {popularPosts.map((post) => (

                      <a
                        key={post.id}
                        href={`/blog/${post.category}/${post.slug}`}
                        className="group flex gap-4"
                      >

                        <img
                          src={post.image}
                          alt={post.title}
                          className="h-20 w-20 rounded-2xl object-cover"
                        />

                        <div>

                          <h4 className="line-clamp-2 text-sm font-semibold leading-6 text-gray-900 transition group-hover:text-cyan-600">
                            {post.title}
                          </h4>

                          <p className="mt-2 text-xs text-gray-400">
                            {post.date}
                          </p>

                        </div>

                      </a>

                    ))}

                  </div>

                </div>

                {/* TOPIC HUBS — pillar pages for internal linking */}
                <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Explore by topic
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-6">
                    Start with our pillar guides, then dive into related articles in each cluster.
                  </p>
                  <ul className="mt-6 space-y-3 text-sm">
                    <li>
                      <Link
                        to="/blog/seo/what-is-seo"
                        className="font-medium text-gray-800 hover:text-cyan-600 transition"
                      >
                        SEO basics &amp; search fundamentals
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/digital-marketing/what-is-digital-marketing"
                        className="font-medium text-gray-800 hover:text-cyan-600 transition"
                      >
                        Digital marketing channels explained
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/ui-ux/ui-ux-design-in-2026"
                        className="font-medium text-gray-800 hover:text-cyan-600 transition"
                      >
                        UI/UX design trends for 2026
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/digital-marketing/how-to-earn-money-from-digital-marketing"
                        className="font-medium text-gray-800 hover:text-cyan-600 transition"
                      >
                        Earn money from digital marketing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/blog/affiliate-marketing/affiliate-marketing-for-beginners"
                        className="font-medium text-gray-800 hover:text-cyan-600 transition"
                      >
                        Affiliate marketing for beginners
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* CTA */}
                <div className="rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 p-7 text-white shadow-xl">

                  <h3 className="text-2xl font-bold">
                    Need SEO for Your Startup?
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-cyan-50">
                    We help startups grow traffic, visibility, and conversions
                    through SEO and modern digital strategies.
                  </p>

                  <a
                    href="/services/seo-services"
                    className="mt-6 inline-flex rounded-xl bg-white px-5 py-3 font-semibold text-blue-600 transition hover:bg-slate-100"
                  >
                    Explore SEO Services
                  </a>

                </div>

              </aside>

            </div>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}