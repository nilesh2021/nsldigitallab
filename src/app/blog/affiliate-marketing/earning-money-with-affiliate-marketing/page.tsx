import {
  ArrowRight,
  CheckCircle2,
  DollarSign,
  Globe,
  Lightbulb,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import Breadcrumbs from "../../../components/Breadcrumbs";

const steps = [
  {
    title: "Pick a profitable niche",
    text: "Choose a niche where people already buy solutions, such as tech, productivity, fitness, finance, or education.",
  },
  {
    title: "Join trusted programs",
    text: "Look for programs with solid commissions, quality products, and clear tracking dashboards.",
  },
  {
    title: "Create helpful content",
    text: "Write reviews, comparisons, tutorials, and guides that genuinely solve a problem for your audience.",
  },
  {
    title: "Drive traffic consistently",
    text: "Use SEO, social media, email, and short-form content to bring people to your content regularly.",
  },
  {
    title: "Optimize for conversions",
    text: "Improve headlines, CTA placement, and page structure so more readers click and buy.",
  },
];

const bestPractices = [
  "Always disclose affiliate relationships clearly and honestly.",
  "Promote products you would actually recommend to a friend or client.",
  "Focus on solving real problems instead of sounding overly salesy.",
  "Track what your audience clicks, reads, and buys most often.",
];

export default function EarningMoneyWithAffiliateMarketingPage() {
  return (
    <>
      <Helmet>
        <title>Earning Money with Affiliate Marketing | NSL Digital Lab</title>
        <meta
          name="description"
          content="Learn how to earn money with affiliate marketing by choosing a niche, creating helpful content, driving traffic, and optimizing your conversions."
        />
        <meta
          name="keywords"
          content="affiliate marketing, earn money online, passive income, affiliate income, content marketing"
        />
        <link
          rel="canonical"
          href="https://www.nsldigitallab.co.in/blog/affiliate-marketing/earning-money-with-affiliate-marketing"
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-[#050816] text-slate-100">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(236,72,153,0.16),_transparent_35%),linear-gradient(135deg,_#050816_0%,_#0b1023_100%)] py-20 md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />
          <div className="absolute left-[-8rem] top-[-6rem] h-[420px] w-[420px] rounded-full bg-pink-500/15 blur-[120px]" />
          <div className="absolute bottom-[-6rem] right-[-4rem] h-[420px] w-[420px] rounded-full bg-violet-500/15 blur-[120px]" />

          <div className="container relative z-10 mx-auto px-6 lg:px-10">
            <div className="mb-6 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-xl">
              <Breadcrumbs
                items={[
                  { label: "Home", href: "/" },
                  { label: "Blog", href: "/blog" },
                  { label: "Affiliate Marketing", href: "/blog/affiliate-marketing" },
                  { label: "Earning Money with Affiliate Marketing" },
                ]}
              />
            </div>

            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 text-sm text-pink-300">
                  Affiliate Marketing
                </span>
                <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
                  Passive Income
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                  Growth Strategy
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Earning money with affiliate marketing
                <span className="mt-3 block bg-gradient-to-r from-pink-400 to-violet-400 bg-clip-text text-transparent">
                  the smart way to build online income
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Affiliate marketing works best when it is treated like a real business. You earn by helping people discover useful products, building trust, and creating content that turns attention into action.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#playbook" className="inline-flex items-center rounded-2xl bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 font-semibold text-white transition hover:opacity-90">
                  See the playbook
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link to="/services/seo-services" className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                  Explore SEO services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap gap-6 text-sm text-slate-400">
                <div className="flex items-center gap-2">
                  <Rocket className="h-4 w-4 text-pink-300" />
                  8 min read
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-violet-300" />
                  Beginner-friendly
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-emerald-300" />
                  Practical tips
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="playbook" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-medium text-pink-400">A simple affiliate playbook</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Build an affiliate income stream with a repeatable process
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Successful affiliate marketers do not chase random links. They create trust, publish useful content, and make it easy for readers to act.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {steps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-pink-500/10 text-sm font-semibold text-pink-300">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-400">{step.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-white/10 bg-[linear-gradient(180deg,_rgba(255,255,255,0.03),_rgba(255,255,255,0.01))] py-20">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
            <div>
              <span className="font-medium text-pink-400">Why it works</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Affiliate marketing rewards relevance, trust, and consistency
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                People buy from creators who understand their needs. That is why content quality matters more than flashy promotions.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-5 flex items-center gap-2 text-emerald-300">
                <DollarSign className="h-5 w-5" />
                <span className="font-semibold">What drives commissions</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                  <strong className="text-white">Trust:</strong> readers are more likely to click when they believe your recommendations are genuine.
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                  <strong className="text-white">Value:</strong> helpful content outperforms sales-heavy content because it makes people feel informed.
                </div>
                <div className="rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                  <strong className="text-white">Consistency:</strong> regular publishing helps your audience return and increases long-term earning potential.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="font-medium text-pink-400">Best practices</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                The habits that help affiliate content perform better
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                The strongest affiliate marketers focus on clarity, credibility, and helpfulness. Good content earns trust, and trust leads to clicks.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-2 text-amber-300">
                  <Lightbulb className="h-5 w-5" />
                  <span className="font-semibold">Keep these in mind</span>
                </div>
                <ul className="space-y-3">
                  {bestPractices.map((practice) => (
                    <li key={practice} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-pink-400" />
                      <span>{practice}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-2 text-cyan-300">
                <Globe className="h-5 w-5" />
                <span className="font-semibold">Where to promote your links</span>
              </div>
              <p className="text-base leading-8 text-slate-400">
                Blogs, YouTube channels, email newsletters, and social media can all work well if they align with your audience. SEO and long-form content often create the strongest compounding results over time.
              </p>

              <div className="mt-8 rounded-2xl border border-violet-400/20 bg-violet-500/10 p-5 text-sm leading-7 text-slate-300">
                <p className="font-semibold text-white">A strong starting mix looks like this:</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-violet-300" />One blog post per week focused on a real problem.</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-violet-300" />Short social posts that point people to your best content.</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-violet-300" />A simple email list that nurtures interested readers.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-medium text-pink-400">Final takeaway</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Affiliate marketing becomes profitable when you focus on helping people
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              You do not need to sound pushy to make money. If you consistently create useful content, choose products that genuinely add value, and improve your content over time, affiliate marketing can become a strong income channel.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link to="/blog/affiliate-marketing/affiliate-marketing-for-beginners" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">Affiliate marketing basics</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Start from the beginning and learn the foundational steps to getting involved.</p>
            </Link>
            <Link to="/blog/seo/what-is-seo" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">SEO fundamentals</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Learn how search traffic can boost the reach of your affiliate content.</p>
            </Link>
            <Link to="/services/seo-services" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-pink-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">SEO services</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Let our team help you build content that attracts and converts traffic.</p>
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#050816] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to grow your affiliate strategy?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Build a smarter, more sustainable affiliate marketing approach with content and strategy that actually performs.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/services/seo-services" className="rounded-2xl bg-gradient-to-r from-pink-500 to-violet-600 px-7 py-3 font-semibold text-white transition hover:opacity-90">
                Explore SEO services
              </Link>
              <a href="/#contact" className="rounded-2xl border border-white/10 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                Let’s talk
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </>
  );
}
