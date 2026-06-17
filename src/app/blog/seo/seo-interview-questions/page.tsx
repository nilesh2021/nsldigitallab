import {
  ArrowRight,
  Briefcase,
  GraduationCap,
  Layers3,
  MessageCircleQuestion,
  Sparkles,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import RelatedArticles from "../../../components/blog/RelatedArticles";
import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import { getBlogLinks } from "../../../../data/blogInternalLinks";
import jsPDF from "jspdf";

const pageLinks = getBlogLinks("seo-interview-questions");

const basicQuestions = [
  {
    question: "What is SEO?",
    answer:
      "SEO (Search Engine Optimization) is the practice of improving a website so it ranks higher in organic (unpaid) search results. It includes optimizing content, technical structure, and authority signals so search engines can crawl, understand, and recommend your pages to users.",
  },
  {
    question: "What is the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO covers elements you control on your site: titles, headings, content, internal links, images, and URL structure. Off-page SEO refers to external signals—mainly backlinks, brand mentions, and reputation—that help search engines trust your site.",
  },
  {
    question: "What is a keyword in SEO?",
    answer:
      "A keyword is a word or phrase users type into search engines. SEO teams research keywords to understand search intent, then create and optimize content that matches what people are looking for.",
  },
  {
    question: "What are meta title and meta description?",
    answer:
      "The meta title is the clickable headline shown in search results. The meta description is the short summary below it. They do not directly guarantee rankings, but strong, relevant copy improves click-through rate and helps users understand the page.",
  },
  {
    question: "What is a backlink?",
    answer:
      "A backlink is a link from another website to yours. Quality backlinks act as votes of confidence, suggesting your content is useful and trustworthy. Spammy or irrelevant links can hurt SEO.",
  },
  {
    question: "What is Google Search Console?",
    answer:
      "Google Search Console is a free tool that shows how Google sees your site: indexing status, search queries, impressions, clicks, crawl errors, and mobile usability issues. It is essential for monitoring organic performance.",
  },
  {
    question: "What is organic traffic?",
    answer:
      "Organic traffic is visitors who land on your site from unpaid search results—not from ads, social posts, or direct URL visits. Growing organic traffic is a primary goal of SEO.",
  },
  {
    question: "What is an XML sitemap?",
    answer:
      "An XML sitemap is a file that lists important URLs on your site. It helps search engines discover and prioritize pages, especially new or deep pages that might not be found through navigation alone.",
  },
  {
    question: "What is robots.txt?",
    answer:
      "Robots.txt is a file at your domain root that tells search engine crawlers which paths they may or may not access. It is used to block low-value areas (e.g. admin panels) but should not be relied on to hide sensitive content.",
  },
  {
    question: "What is search intent?",
    answer:
      "Search intent is the goal behind a query—informational (learn something), navigational (find a brand), commercial (compare options), or transactional (buy/sign up). Matching content to intent is critical for rankings and conversions.",
  },
];

const advancedQuestions = [
  {
    question: "What is crawl budget and how do you optimize it?",
    answer:
      "Crawl budget is how many pages search engines are willing to crawl on your site within a given time. Large sites optimize it by fixing broken links, reducing duplicate URLs, improving server speed, using canonical tags, and blocking low-value pages via robots.txt so bots focus on important content.",
  },
  {
    question: "Explain canonical tags and duplicate content.",
    answer:
      "A canonical tag (rel=\"canonical\") tells search engines which URL is the preferred version when similar or duplicate pages exist—e.g. product filters, HTTP vs HTTPS, or www vs non-www. Proper canonicalization consolidates ranking signals and avoids splitting authority across duplicates.",
  },
  {
    question: "What are Core Web Vitals?",
    answer:
      "Core Web Vitals are Google’s user experience metrics: Largest Contentful Paint (loading), Interaction to Next Paint (interactivity), and Cumulative Layout Shift (visual stability). Strong scores support better UX and can influence rankings, especially on mobile.",
  },
  {
    question: "How would you approach a technical SEO audit?",
    answer:
      "Start with crawlability and indexation (robots, sitemaps, Search Console coverage). Check site speed and mobile usability, HTTPS, URL structure, canonicals, and structured data. Review internal linking, redirect chains, and duplicate content. Prioritize fixes by impact and effort, then re-crawl and monitor.",
  },
  {
    question: "What is E-E-A-T and why does it matter?",
    answer:
      "E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. Google uses these quality signals especially for YMYL (Your Money Your Life) topics. Strong author bios, citations, accurate content, and transparent business information help demonstrate E-E-A-T.",
  },
  {
    question: "How do you measure SEO success beyond rankings?",
    answer:
      "Track organic traffic, impressions, and clicks in Search Console; conversions and revenue from organic in Analytics; keyword visibility for priority terms; indexation health; page speed; and engagement metrics (bounce rate, time on page). Rankings alone do not show business impact.",
  },
];

const tocItems = [
  { title: "Introduction", id: "introduction" },
  { title: "Basic Questions", id: "basic-questions" },
  { title: "Advanced Questions", id: "advanced-questions" },
  { title: "Interview Tips", id: "interview-tips" },
];
const downloadPDF = () => {
  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("SEO Interview Questions & Answers", 20, y);

  y += 15;

  doc.setFontSize(14);
  doc.text("Basic SEO Questions", 20, y);

  y += 10;

  basicQuestions.forEach((item, index) => {
    doc.setFontSize(12);

    const question = `${index + 1}. ${item.question}`;
    const answer = item.answer;

    const splitQuestion = doc.splitTextToSize(question, 170);
    const splitAnswer = doc.splitTextToSize(answer, 170);

    doc.text(splitQuestion, 20, y);
    y += splitQuestion.length * 7;

    doc.text(splitAnswer, 20, y);
    y += splitAnswer.length * 7 + 10;

    if (y > 260) {
      doc.addPage();
      y = 20;
    }
  });

  doc.setFontSize(14);
  doc.text("Advanced SEO Questions", 20, y);

  y += 10;

  advancedQuestions.forEach((item, index) => {
    doc.setFontSize(12);

    const question = `A${index + 1}. ${item.question}`;
    const answer = item.answer;

    const splitQuestion = doc.splitTextToSize(question, 170);
    const splitAnswer = doc.splitTextToSize(answer, 170);

    doc.text(splitQuestion, 20, y);
    y += splitQuestion.length * 7;

    doc.text(splitAnswer, 20, y);
    y += splitAnswer.length * 7 + 10;

    if (y > 260) {
      doc.addPage();
      y = 20;
    }
  });

  doc.save("seo-interview-questions.pdf");
};
export default function SeoInterviewQuestionsPage() {
  return (
    <>
      <Helmet>
        <title>
          SEO Interview Questions (Basic & Advanced) | NSL Digital Lab
        </title>
        <meta
          name="description"
          content="Prepare for SEO interviews with 10 basic and advanced SEO interview questions and answers covering keywords, backlinks, technical SEO, E-E-A-T, and more."
        />
        <meta
          name="keywords"
          content="SEO interview questions, SEO interview answers, SEO jobs, technical SEO interview, SEO fresher questions, SEO specialist interview"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.nsldigitallab.co.in/blog/seo/seo-interview-questions"
        />
        <meta
          property="og:title"
          content="SEO Interview Questions | Basic & Advanced Guide"
        />
        <meta
          property="og:description"
          content="10 basic and advanced SEO interview questions with clear answers for freshers and experienced candidates."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop"
        />
        <meta
          property="og:url"
          content="https://www.nsldigitallab.co.in/blog/seo/seo-interview-questions"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Navigation />

      <main className="bg-black text-white min-h-screen">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-emerald-950 via-slate-950 to-black py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_40%)]" />

          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                    SEO
                  </span>
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    Interview Prep
                  </span>
                  <span className="rounded-full border border-slate-500/30 bg-slate-500/10 px-4 py-2 text-sm text-slate-300">
                    Careers
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  SEO Interview Questions
                  <span className="block text-emerald-400">
                    10 basic + advanced answers for your next role.
                  </span>
                </h1>

                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  Whether you are applying for an SEO executive, specialist, or
                  intern role, these questions cover fundamentals recruiters
                  expect—and deeper topics for mid-level interviews. Review{" "}
                  <InlineArticleLink to="/blog/seo/what-is-seo">SEO basics</InlineArticleLink>{" "}
                  alongside our{" "}
                  <InlineArticleLink to="/blog/digital-marketing/digital-marketing-interview-questions">
                    digital marketing interview guide
                  </InlineArticleLink>{" "}
                  if you are exploring multiple marketing roles.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#basic-questions"
                    className="inline-flex items-center rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-6 py-3 font-medium transition"
                  >
                    Basic questions
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                  <a
                    href="#advanced-questions"
                    className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium transition"
                  >
                    Advanced questions
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                  <span>10 basic + 6 advanced</span>
                  <span>10 min read</span>
                  <span>Updated May 2026</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[40px] bg-emerald-500/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                  <img
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop"
                    alt="SEO interview preparation"
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
              <div id="introduction">
                <h2 className="text-4xl font-bold">How to use this guide</h2>
                <p className="mt-6 text-gray-300 leading-8">
                  Read each answer in your own words during practice—interviewers
                  want clarity, not memorized jargon. For basic roles, focus on
                  definitions and simple examples. For specialist roles, be ready
                  to explain how you have applied technical SEO, analytics, and
                  content strategy on real projects.
                </p>
              </div>

              <div className="rounded-[32px] border border-emerald-500/20 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 p-8">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
    <div>
      <h2 className="text-3xl font-bold text-white">
        Download SEO Interview Questions PDF
      </h2>

      <p className="mt-4 text-gray-300 leading-7 max-w-2xl">
        Get all SEO interview questions and answers in a free downloadable PDF
        format for quick revision before interviews.
      </p>
    </div>

    <button
      onClick={downloadPDF}
      className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 hover:bg-emerald-500 px-6 py-4 font-semibold transition text-white"
    >
      Download PDF
      <ArrowRight className="ml-2 h-5 w-5" />
    </button>
  </div>
</div>

              <div id="basic-questions" className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-emerald-500/10 p-4">
                    <GraduationCap className="h-8 w-8 text-emerald-400" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold">10 Basic SEO Interview Questions</h2>
                    <p className="mt-2 text-gray-400">
                      Common questions for freshers, interns, and junior SEO roles.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {basicQuestions.map((item, index) => (
                    <div
                      key={item.question}
                      className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-sm font-bold text-emerald-300">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-white flex items-center gap-2">
                            <MessageCircleQuestion className="h-5 w-5 text-emerald-400 shrink-0" />
                            {item.question}
                          </h3>
                          <p className="mt-4 text-gray-300 leading-8">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div id="advanced-questions" className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-500/10 p-4">
                    <Briefcase className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold">Advanced SEO Interview Questions</h2>
                    <p className="mt-2 text-gray-400">
                      For SEO specialists, analysts, and technical SEO roles.
                    </p>
                  </div>
                </div>

                <div className="space-y-6">
                  {advancedQuestions.map((item, index) => (
                    <div
                      key={item.question}
                      className="rounded-[32px] border border-cyan-500/20 bg-gradient-to-b from-cyan-500/5 to-transparent p-8"
                    >
                      <div className="flex items-start gap-4">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-500/20 text-sm font-bold text-cyan-300">
                          A{index + 1}
                        </span>
                        <div>
                          <h3 className="text-xl font-bold text-white">
                            {item.question}
                          </h3>
                          <p className="mt-4 text-gray-300 leading-8">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

           
            </article>

            <aside className="space-y-6">
              <div className="sticky top-24 space-y-6">
                <div className="rounded-[32px] border border-gray-800 bg-gray-900/50 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Layers3 className="h-5 w-5 text-emerald-400" />
                    <h3 className="text-xl font-semibold text-white">
                      On this page
                    </h3>
                  </div>
                  <nav className="space-y-2">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="group flex items-center justify-between rounded-xl px-3 py-3 text-gray-400 hover:bg-white/5 hover:text-emerald-300 transition"
                      >
                        {item.title}
                        <ArrowRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition" />
                      </a>
                    ))}
                  </nav>
                </div>

                <RelatedArticles links={pageLinks} title="Related SEO posts" />

                <div className="rounded-[32px] border border-gray-800 bg-gray-900/50 p-8">
                  <h3 className="text-xl font-semibold text-white">
                    SEO internships
                  </h3>
                  <p className="mt-4 text-gray-400 text-sm leading-7">
                    Practice these questions while applying for SEO roles at
                    NSL Digital Lab.
                  </p>
                  <a
                    href="/careers"
                    className="mt-6 inline-flex items-center text-emerald-400 hover:text-emerald-300 text-sm font-medium transition"
                  >
                    View careers
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
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
