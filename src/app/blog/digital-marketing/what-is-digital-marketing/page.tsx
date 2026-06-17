import {
  ArrowRight,
  CheckCircle,
  Globe,
  Megaphone,
  Layers,
  TrendingUp,
  ShieldCheck,
  MessageCircle,
  Mail,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import RelatedArticles from "../../../components/blog/RelatedArticles";
import InlineArticleLink from "../../../components/blog/InlineArticleLink";
import { getBlogLinks } from "../../../../data/blogInternalLinks";

const pageLinks = getBlogLinks("what-is-digital-marketing");

const digitalMarketingTypes = [
  {
    title: "Search Engine Optimization (SEO)",
    description:
      "Improving organic visibility in search engines through keyword research, technical health, content, and link building.",
    icon: Globe,
  },
  {
    title: "Pay-Per-Click (PPC)",
    description:
      "Buying targeted traffic through search ads, display ads, and social media advertising with measurable ROI.",
    icon: ShieldCheck,
  },
  {
    title: "Social Media Marketing",
    description:
      "Building brand awareness, engagement, and conversions through organic and paid social campaigns.",
    icon: Megaphone,
  },
  {
    title: "Content Marketing",
    description:
      "Creating useful articles, videos, guides, and stories that attract and retain the right audience.",
    icon: Layers,
  },
  {
    title: "Email Marketing",
    description:
      "Nurturing leads and customers with targeted campaigns, newsletters, and automated sequences.",
    icon: Mail,
  },
  {
    title: "Affiliate & Influencer Marketing",
    description:
      "Partnering with affiliates or influencers to amplify reach, drive referrals, and grow credibility.",
    icon: MessageCircle,
  },
];

const checklist = [
  "Define your audience and map their customer journey.",
  "Choose channels that fit your goals and budget.",
  "Create consistent messaging across organic and paid campaigns.",
  "Track results with analytics and optimize every campaign.",
  "Test messaging, creative, and audience segments regularly.",
];

export default function WhatIsDigitalMarketingPage() {
  return (
    <>
      <Helmet>
        <title>What is Digital Marketing? | Types of Digital Marketing</title>
        <meta
          name="description"
          content="Learn what digital marketing is, why it matters, and the main types of digital marketing that businesses use to grow online."
        />
        <meta
          name="keywords"
          content="digital marketing, types of digital marketing, online marketing, SEO, PPC, social media marketing"
        />
        <meta name="robots" content="index, follow" />
        <link
          rel="canonical"
          href="https://www.nsldigitallab.co.in/blog/digital-marketing/what-is-digital-marketing"
        />
        <meta
          property="og:title"
          content="What is Digital Marketing? | Types of Digital Marketing"
        />
        <meta
          property="og:description"
          content="Learn what digital marketing is, why it matters, and the main digital marketing channels businesses use to grow online."
        />
        <meta
          property="og:image"
          content="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
        />
        <meta
          property="og:url"
          content="https://www.nsldigitallab.co.in/blog/digital-marketing/what-is-digital-marketing"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="What is Digital Marketing? | Types of Digital Marketing"
        />
        <meta
          name="twitter:description"
          content="Understand digital marketing, its core channels, and how brands use online strategies to reach customers."
        />
        <meta
          name="twitter:image"
          content="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
        />
      </Helmet>

      <Navigation />

      <main className="bg-black text-white min-h-screen">
        <section className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-slate-950 via-slate-900 to-black py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.2),transparent_40%)]" />
          <div className="container mx-auto px-6 py-24 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="mb-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                    Digital Marketing
                  </span>
                  <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-4 py-2 text-sm text-sky-300">
                    Strategy
                  </span>
                  <span className="rounded-full border border-slate-500/30 bg-slate-500/10 px-4 py-2 text-sm text-slate-300">
                    Growth
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  What is Digital Marketing?
                  <span className="block text-cyan-400">
                    Explore the key channels and marketing types that power online growth.
                  </span>
                </h1>

                <p className="mt-6 text-lg text-gray-300 leading-relaxed">
                  Digital marketing uses online channels to reach customers, build awareness, and drive sales. It blends organic, paid, and relationship tactics to make brands visible where people spend time.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="#types"
                    className="inline-flex items-center rounded-2xl bg-cyan-600 hover:bg-cyan-500 px-6 py-3 font-medium transition"
                  >
                    Explore types
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>

                  <a
                    href="#checklist"
                    className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 px-6 py-3 font-medium transition"
                  >
                    Digital marketing checklist
                  </a>
                </div>

                <div className="mt-10 flex flex-wrap gap-6 text-sm text-gray-400">
                  <span>Digital Marketing Basics</span>
                  <span>8 min read</span>
                  <span>Updated May 2026</span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute -inset-6 rounded-[40px] bg-cyan-500/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-6">
                  <img
                    src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200&auto=format&fit=crop"
                    alt="Digital marketing strategy"
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
                <h2 id="definition" className="text-4xl font-bold">
                  What does digital marketing mean?
                </h2>

                <p className="mt-6 text-gray-300 leading-8">
                  Digital marketing is the practice of promoting products, services, or brands through online channels. It uses search engines, social media, email, content, and paid advertising to reach customers where they are already spending time.
                </p>

                <p className="mt-4 text-gray-300 leading-8">
                  Unlike traditional marketing, digital marketing provides measurable results, faster feedback, and the ability to tailor messages to specific audiences in real time. Search is often the highest-intent channel—see our guide on{" "}
                  <InlineArticleLink to="/blog/seo/what-is-seo">what SEO is</InlineArticleLink>{" "}
                  and how to{" "}
                  <InlineArticleLink to="/blog/digital-marketing/how-to-earn-money-from-digital-marketing">
                    earn money from digital marketing
                  </InlineArticleLink>{" "}
                  once you understand the channels.
                </p>
              </div>

              <div id="why-it-matters" className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-500/10 p-4">
                    <TrendingUp className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h2 className="text-3xl font-bold">Why digital marketing matters</h2>
                </div>

                <div className="mt-8 space-y-6 text-gray-300 leading-8">
                  <p>
                    Today’s customers search, shop, and learn online. A strong digital marketing strategy helps brands appear in those moments, attract qualified leads, and turn interest into action.
                  </p>

                  <p>
                    Digital marketing also levels the playing field for smaller businesses, because smart targeting and creative content can outperform big budgets when they are executed with clarity.
                  </p>
                </div>
              </div>

              <div id="types" className="space-y-10">
                <h2 className="text-4xl font-bold">Types of digital marketing</h2>

                <div className="grid gap-6">
                  {digitalMarketingTypes.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="rounded-[32px] border border-white/10 bg-gradient-to-b from-white/5 to-transparent p-8">
                        <div className="flex items-center gap-4">
                          <div className="rounded-2xl bg-sky-500/10 p-4">
                            <Icon className="h-8 w-8 text-sky-400" />
                          </div>
                          <h3 className="text-2xl font-bold">{item.title}</h3>
                        </div>
                        <p className="mt-6 text-gray-300 leading-8">{item.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div id="how-it-works" className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-emerald-500/10 p-4">
                    <CheckCircle className="h-8 w-8 text-emerald-400" />
                  </div>
                  <h2 className="text-3xl font-bold">How digital marketing works</h2>
                </div>

                <div className="mt-8 space-y-6 text-gray-300 leading-8">
                  <p>
                    Start with clear goals. Choose the channels that reach your audience, build campaigns around useful content, and measure everything with analytics. Then improve what works and pause what doesn't.
                  </p>

                  <p>
                    The best digital marketing strategies blend organic reach with paid support. Organic channels build trust over time, while paid campaigns deliver faster visibility and lead generation.
                  </p>
                </div>
              </div>

              <div id="checklist" className="rounded-[32px] border border-white/10 bg-white/5 p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-slate-500/10 p-4">
                    <ShieldCheck className="h-8 w-8 text-slate-300" />
                  </div>
                  <h2 className="text-3xl font-bold">Digital marketing checklist</h2>
                </div>

                <ul className="mt-8 space-y-4 text-gray-300 leading-8">
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
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-cyan-400" />
                    Digital Marketing Essentials
                  </h3>
                  <p className="text-gray-300 leading-7">
                    A strong digital marketing strategy combines the right channels with clear goals, valuable content, and ongoing measurement.
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
