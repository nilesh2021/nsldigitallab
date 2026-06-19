import {
  ArrowRight,
  Brain,
  Bot,
  CheckCircle,
  MessageSquare,
  BookOpen,
  Wand2,
  Download,
} from "lucide-react";

import jsPDF from "jspdf";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import SEO from "../../../../seo/SEO";
import { PAGE_SEO } from "../../../../seo/pages";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import RelatedArticles from "../../../components/blog/RelatedArticles";

import { getBlogLinks } from "../../../../data/blogInternalLinks";

const pageLinks = getBlogLinks("how-to-use-chatgpt");

const useCases = [
  {
    title: "Writing Content",
    description:
      "Use ChatGPT to write blogs, emails, captions, articles, and website content faster.",
  },
  {
    title: "Studying & Learning",
    description:
      "Students can use ChatGPT for summaries, explanations, notes, and learning concepts.",
  },
  {
    title: "Coding Help",
    description:
      "Developers use ChatGPT for debugging, React code, APIs, and programming help.",
  },
  {
    title: "Business Productivity",
    description:
      "Businesses use ChatGPT for brainstorming, marketing ideas, customer support, and workflows.",
  },
];

const prompts = [
  "Write a professional email for job application",
  "Explain SEO in simple words",
  "Create a React landing page using Tailwind CSS",
  "Generate Instagram caption ideas for a cafe",
  "Summarize this article in simple language",
  "Give me interview questions for UI/UX Designer",
];

export default function HowToUseChatGPTPage() {

  const downloadPDF = () => {
    const doc = new jsPDF();

    let y = 20;

    doc.setFontSize(22);
    doc.text("How To Use ChatGPT - Beginner Guide", 20, y);

    y += 20;

    doc.setFontSize(14);

    const sections = [
      "1. Open ChatGPT website or app",
      "2. Create account or login",
      "3. Type your question or prompt",
      "4. Be specific with instructions",
      "5. Ask follow-up questions",
      "6. Use ChatGPT for writing, coding, learning and productivity",
    ];

    sections.forEach((section) => {
      const lines = doc.splitTextToSize(section, 170);

      doc.text(lines, 20, y);

      y += lines.length * 8 + 8;
    });

    y += 10;

    doc.setFontSize(18);
    doc.text("Example Prompts", 20, y);

    y += 15;

    prompts.forEach((prompt, index) => {
      const lines = doc.splitTextToSize(
        `${index + 1}. ${prompt}`,
        170
      );

      doc.text(lines, 20, y);

      y += lines.length * 8 + 8;
    });

    doc.save("how-to-use-chatgpt-guide.pdf");
  };

  return (
    <>
      <Helmet>

        <title>
          How To Use ChatGPT in 2026 | Beginner Guide
        </title>

        <meta
          name="description"
          content="Learn how to use ChatGPT effectively in 2026 for writing, coding, studying, business, and productivity with simple examples and prompts."
        />

        <meta
          name="keywords"
          content="how to use chatgpt, chatgpt guide, beginner chatgpt tutorial, chatgpt prompts, ai tools guide"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <link
          rel="canonical"
          href="https://www.nsldigitallab.co.in/blog/ai/how-to-use-chatgpt"
        />

        <meta
          property="og:title"
          content="How To Use ChatGPT in 2026"
        />

        <meta
          property="og:description"
          content="Beginner-friendly guide to using ChatGPT for writing, coding, studying, productivity, and business."
        />

        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
        />

        <meta
          property="og:type"
          content="article"
        />

      </Helmet>

      <Navigation />

      <main className="bg-black text-white min-h-screen">

        {/* HERO */}
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-green-950 via-slate-950 to-black py-24">

          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_40%)]" />

          <div className="container mx-auto px-6 relative z-10 py-20">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              {/* LEFT */}
              <div>

                <div className="mb-6 flex flex-wrap gap-3">

                  <span className="rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-300">
                    AI Guide
                  </span>

                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    ChatGPT
                  </span>

                  <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300">
                    Beginner Tutorial
                  </span>

                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  How To Use ChatGPT

                  <span className="block text-green-400">
                    Beginner Guide for 2026
                  </span>

                </h1>

                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  Learn how to use ChatGPT effectively for studying,
                  writing, coding, productivity, business, and daily
                  tasks with practical examples and prompts.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">

                  <a
                    href="#guide"
                    className="inline-flex items-center rounded-2xl bg-green-600 hover:bg-green-500 px-6 py-3 font-medium transition"
                  >
                    Start Learning

                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>

                  <button
                    onClick={downloadPDF}
                    className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium transition"
                  >
                    Download PDF

                    <Download className="ml-2 h-5 w-5" />
                  </button>

                </div>

                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                  <span>Beginner Friendly</span>
                  <span>7 min read</span>
                  <span>Updated 2026</span>
                </div>

              </div>

              {/* RIGHT */}
              <div className="relative">

                <div className="absolute -inset-6 rounded-[40px] bg-green-500/20 blur-3xl" />

                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">

                  <img
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format&fit=crop"
                    alt="How to use ChatGPT"
                    className="rounded-2xl object-cover w-full"
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* CONTENT */}
        <section
          id="guide"
          className="container mx-auto px-6 py-20"
        >

          <div className="grid lg:grid-cols-[1fr_320px] gap-16">

            {/* MAIN */}
            <article>

              {/* INTRO */}
              <div>

                <h2 className="text-4xl font-bold">
                  What is ChatGPT?
                </h2>

                <p className="mt-6 text-gray-300 leading-8">

                  ChatGPT is an AI-powered chatbot created by OpenAI
                  that helps users generate text, solve problems,
                  answer questions, create code, brainstorm ideas,
                  and improve productivity.

                  {" "}Students and professionals also use AI tools alongside{" "}

                  <Link
                    to="/blog/ai-tools/best-ai-tools-for-college-students"
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    best AI tools for college students
                  </Link>

                  {" "}to improve learning and workflow efficiency.

                </p>

                <p className="mt-4 text-gray-300 leading-8">

                  Millions of people use ChatGPT daily for work,
                  education, business, marketing, and personal tasks.

                  {" "}Many marketers combine AI with{" "}

                  <Link
                    to="/blog/digital-marketing/how-to-earn-money-from-digital-marketing"
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    digital marketing strategies
                  </Link>

                  {" "}to create content, automate workflows,
                  and grow online businesses.

                </p>

              </div>

              {/* STEPS */}
              <div className="mt-20">

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-green-500/10 p-4">
                    <Bot className="h-8 w-8 text-green-400" />
                  </div>

                  <h2 className="text-4xl font-bold">
                    Step-by-Step Guide
                  </h2>

                </div>

                <div className="mt-10 space-y-6">

                  {[
                    "Open ChatGPT website or app",
                    "Create your account and login",
                    "Type your question or prompt",
                    "Be clear and specific",
                    "Ask follow-up questions",
                    "Copy or refine the generated answer",
                  ].map((step, index) => (

                    <div
                      key={index}
                      className="rounded-[32px] border border-white/10 bg-white/5 p-8"
                    >

                      <div className="flex items-start gap-4">

                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-green-500/20 font-bold text-green-300">
                          {index + 1}
                        </span>

                        <div>

                          <h3 className="text-2xl font-semibold">
                            {step}
                          </h3>

                        </div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

              {/* USE CASES */}
              <div className="mt-24">

                <h2 className="text-4xl font-bold">
                  Best Ways to Use ChatGPT
                </h2>

                <div className="mt-10 grid md:grid-cols-2 gap-6">

                  {useCases.map((item, index) => (

                    <div
                      key={index}
                      className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8"
                    >

                      <div className="rounded-2xl bg-green-500/10 p-4 w-fit">
                        <Brain className="h-8 w-8 text-green-400" />
                      </div>

                      <h3 className="mt-6 text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="mt-4 text-gray-300 leading-8">
                        {item.description}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* PROMPTS */}
              <div className="mt-24 rounded-[32px] border border-green-500/20 bg-green-500/5 p-8">

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-green-500/10 p-4">
                    <MessageSquare className="h-8 w-8 text-green-400" />
                  </div>

                  <h2 className="text-4xl font-bold">
                    Example ChatGPT Prompts
                  </h2>

                </div>

                <div className="mt-10 space-y-4">

                  {prompts.map((prompt, index) => (

                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-black/30 p-5 text-gray-300"
                    >
                      "{prompt}"
                    </div>

                  ))}

                </div>

              </div>

              {/* TIPS */}
              <div className="mt-24">

                <div className="flex items-center gap-4">

                  <div className="rounded-2xl bg-cyan-500/10 p-4">
                    <Wand2 className="h-8 w-8 text-cyan-400" />
                  </div>

                  <h2 className="text-4xl font-bold">
                    Tips for Better Results
                  </h2>

                </div>

                <div className="mt-10 space-y-5">

                  {[
                    "Use detailed prompts",
                    "Mention tone and format",
                    "Ask follow-up questions",
                    "Provide examples",
                    "Verify important information",
                  ].map((tip, index) => (

                    <div
                      key={index}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-6"
                    >

                      <CheckCircle className="h-6 w-6 text-green-400 shrink-0 mt-1" />

                      <p className="text-gray-300 leading-7">
                        {tip}
                      </p>

                    </div>

                  ))}

                </div>

              </div>

              {/* FINAL */}
              <div className="mt-24">

                <h2 className="text-4xl font-bold">
                  Final Thoughts
                </h2>

                <p className="mt-6 text-gray-300 leading-8">

                  ChatGPT is becoming one of the most useful AI tools
                  for students, developers, creators, marketers, and
                  businesses.

                  {" "}Learning how to write better prompts and
                  communicate clearly with AI can significantly improve
                  your productivity and workflow.

                  {" "}If you are preparing for marketing careers,
                  you should also read our{" "}

                  <Link
                    to="/blog/seo/seo-interview-questions"
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    SEO interview questions guide
                  </Link>

                  {" "}and{" "}

                  <Link
                    to="/blog/affiliate-marketing/affiliate-marketing-for-beginners"
                    className="text-green-400 hover:text-green-300 underline"
                  >
                    affiliate marketing beginner guide
                  </Link>.

                </p>

              </div>

            </article>

            {/* SIDEBAR */}
            <aside className="sticky top-24 h-fit space-y-6">

              <div className="rounded-[32px] border border-white/10 bg-white/5 p-8">

                <div className="flex items-center gap-3">

                  <BookOpen className="h-5 w-5 text-green-400" />

                  <h3 className="text-xl font-semibold">
                    Quick Navigation
                  </h3>

                </div>

                <div className="mt-6 space-y-3">

                  {[
                    "What is ChatGPT?",
                    "Step-by-Step Guide",
                    "Best Ways to Use ChatGPT",
                    "Example Prompts",
                    "Tips for Better Results",
                  ].map((item, index) => (

                    <div
                      key={index}
                      className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-gray-300"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

              <RelatedArticles
                links={pageLinks}
                title="Related AI Articles"
              />

            </aside>

          </div>

        </section>

      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
