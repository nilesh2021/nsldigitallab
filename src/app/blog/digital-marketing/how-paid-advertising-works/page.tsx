import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CircleDollarSign,
  Compass,
  Megaphone,
  Rocket,
  Sparkles,
  Target,
  TrendingUp,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";

const howItWorksSteps = [
  {
    title: "Choose the goal",
    text: "Start with a clear goal like leads, sales, traffic, app installs, or brand awareness.",
  },
  {
    title: "Define the audience",
    text: "Target people by interest, behavior, location, device, or past engagement with your business.",
  },
  {
    title: "Create the ad",
    text: "Use a strong headline, compelling offer, and a clear call to action that matches the user intent.",
  },
  {
    title: "Set the budget",
    text: "Control spending with daily budgets, bidding strategies, and pacing rules to avoid overspending.",
  },
  {
    title: "Measure and optimize",
    text: "Review clicks, conversions, cost per result, and return on ad spend, then improve what underperforms.",
  },
];

const keyMetrics = [
  "CTR: how often people click your ad",
  "Conversion rate: how often clicks turn into a desired action",
  "CPA: cost per acquisition",
  "ROAS: revenue generated for every rupee spent",
  "Quality score: how relevant your ad and landing page are",
];

export default function HowPaidAdvertisingWorksPage() {
  return (
    <>
      <Helmet>
        <title>How Paid Advertising Works | NSL Digital Lab</title>
        <meta
          name="description"
          content="Understand how paid advertising works, from audience targeting and ad creation to bidding, tracking, and optimization for better results."
        />
        <meta
          name="keywords"
          content="paid advertising, how paid ads work, PPC, Google Ads, Meta Ads, digital marketing"
        />
        <link
          rel="canonical"
          href="https://www.nsldigitallab.co.in/blog/digital-marketing/how-paid-advertising-works"
        />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-[#050816] text-slate-100">
        <section className="relative overflow-hidden border-b border-white/10 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.16),_transparent_35%),linear-gradient(135deg,_#050816_0%,_#0b1023_100%)] py-20 md:py-24">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px] opacity-35" />
          <div className="absolute left-[-7rem] top-[-6rem] h-[360px] w-[360px] rounded-full bg-cyan-500/15 blur-[120px]" />
          <div className="absolute bottom-[-6rem] right-[-4rem] h-[420px] w-[420px] rounded-full bg-indigo-500/15 blur-[120px]" />

          <div className="container relative z-10 mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              <div className="mb-6 flex flex-wrap gap-3">
                <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                  Paid Ads
                </span>
                <span className="rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-2 text-sm text-indigo-300">
                  PPC
                </span>
                <span className="rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-300">
                  Growth Marketing
                </span>
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                How paid advertising works
                <span className="mt-3 block bg-gradient-to-r from-cyan-300 to-indigo-400 bg-clip-text text-transparent">
                  and why it can scale your business fast
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
                Paid advertising lets businesses reach people at the exact moment they are searching, scrolling, or considering a purchase. It is a practical way to generate traffic, leads, and sales when it is planned carefully.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#how-it-works" className="inline-flex items-center rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 font-semibold text-white transition hover:opacity-90">
                  See the process
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <Link to="/services/seo-services" className="inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white backdrop-blur-md transition hover:bg-white/10">
                  Explore marketing services
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-medium text-cyan-400">The basic mechanics</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Paid ads work by bidding for attention in the right places
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              Advertisers compete to show their message to specific audiences. The platform displays the ad, users interact with it, and the advertiser pays only when the action happens, depending on the campaign type.
            </p>
          </div>

          <div className="mt-14 space-y-4">
            {howItWorksSteps.map((step, index) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-sm font-semibold text-cyan-300">
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
              <span className="font-medium text-cyan-400">Where ads appear</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Popular platforms each serve a different purpose
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                The best platform depends on your audience, your offer, and the outcome you want. Some channels are stronger for search intent while others work best for discovery and awareness.
              </p>
            </div>

            <div className="space-y-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-cyan-300">
                  <Compass className="h-5 w-5" />
                  <h3 className="text-xl font-semibold text-white">Google Ads</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">Great for capturing intent when someone searches for a product or service right now.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-indigo-300">
                  <Megaphone className="h-5 w-5" />
                  <h3 className="text-xl font-semibold text-white">Meta Ads</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">Strong for visual storytelling, community building, and remarketing to warm audiences.</p>
              </div>
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3 text-emerald-300">
                  <Target className="h-5 w-5" />
                  <h3 className="text-xl font-semibold text-white">LinkedIn Ads</h3>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-400">Useful for B2B campaigns, thought leadership, and reaching professionals by role or industry.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="font-medium text-cyan-400">What really matters</span>
              <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                Metrics help you decide what is worth scaling
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-400">
                A campaign can look busy while still delivering poor results. The right metrics tell you whether the ad is generating value or simply burning budget.
              </p>

              <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                <div className="mb-4 flex items-center gap-2 text-amber-300">
                  <BarChart3 className="h-5 w-5" />
                  <span className="font-semibold">Key performance indicators</span>
                </div>
                <ul className="space-y-3">
                  {keyMetrics.map((metric) => (
                    <li key={metric} className="flex gap-3 rounded-2xl border border-white/10 bg-slate-950/40 p-4 text-sm leading-7 text-slate-300">
                      <div className="mt-1 h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span>{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-2 text-emerald-300">
                <Rocket className="h-5 w-5" />
                <span className="font-semibold">A simple launch framework</span>
              </div>
              <p className="text-base leading-8 text-slate-400">
                Good paid campaigns usually begin with a narrow audience, one strong offer, and a clear landing page. Once you see traction, you expand to larger audiences and more variations.
              </p>

              <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-500/10 p-5 text-sm leading-7 text-slate-300">
                <p className="font-semibold text-white">In practice, that means:</p>
                <ul className="mt-3 space-y-2">
                  <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-cyan-300" />Test one headline and one offer at a time.</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-cyan-300" />Send traffic to a page built for conversion.</li>
                  <li className="flex gap-2"><CheckCircle2 className="mt-1 h-4 w-4 text-cyan-300" />Pause underperforming ads quickly and scale winners.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <span className="font-medium text-cyan-400">Final insight</span>
            <h2 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
              Paid advertising works best when strategy comes before spending
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-400">
              The real power of paid ads is not just visibility. It is the ability to reach the right people, at the right time, with a message that moves them closer to a decision.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Link to="/blog/digital-marketing/what-is-digital-marketing" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">What is digital marketing?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Understand the broader marketing ecosystem and where paid ads fit in.</p>
            </Link>
            <Link to="/blog/seo/what-is-seo" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">SEO basics</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Learn how organic traffic complements paid campaigns for long-term growth.</p>
            </Link>
            <Link to="/services/seo-services" className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10">
              <h3 className="text-xl font-semibold text-white">Growth consulting</h3>
              <p className="mt-3 text-sm leading-7 text-slate-400">Get help building campaigns that align with your business goals and budget.</p>
            </Link>
          </div>
        </section>

        <section className="border-t border-white/10 bg-[#050816] py-20">
          <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Want a stronger paid ads strategy?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              From channel selection to creative testing and conversion tracking, we can help you build campaigns that are focused and measurable.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link to="/services/seo-services" className="rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 px-7 py-3 font-semibold text-white transition hover:opacity-90">
                View services
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
