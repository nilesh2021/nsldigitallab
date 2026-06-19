import { Helmet } from "react-helmet-async";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import ScrollToTop from "../../../components/ScrollToTop";
import { Link } from "react-router-dom";

import {
  Search,
  MapPin,
  ArrowRight,
  Rocket,
  Gauge,
  BookOpen,
  MessageSquare,
  FileText,
  Settings,
  Globe,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

export default function SeoServicesPage() {
  const seoServices = [
    {
      title: "Local SEO",
      description: "Improve local rankings and Google Business visibility.",
      icon: MapPin,
      link: "/blog/seo/local-seo-guide",
    },
    {
      title: "Technical SEO",
      description: "Improve crawlability and website performance.",
      icon: Search,
      link: "/blog/seo/technical-seo-checklist",
    },
    {
      title: "SEO For Startups",
      description: "Affordable SEO growth strategies for startups.",
      icon: Rocket,
      link: "/blog/seo/seo-for-startups",
    },
    {
      title: "Website Optimization",
      description: "Improve speed, UX and conversions.",
      icon: Gauge,
      link: "/blog/seo/website-optimization-tips",
    },
    {
      title: "What is SEO",
      description: "Learn SEO fundamentals and ranking factors.",
      icon: BookOpen,
      link: "/blog/seo/what-is-seo",
    },
    {
      title: "SEO Interview Questions",
      description: "Prepare for SEO interviews.",
      icon: MessageSquare,
      link: "/blog/seo/seo-interview-questions",
    },
  ];

  const process = [
    {
      step: "SEO Audit",
      icon: Search,
    },
    {
      step: "Keyword Strategy",
      icon: FileText,
    },
    {
      step: "Optimization",
      icon: Settings,
    },
    {
      step: "Content Growth",
      icon: Globe,
    },
    {
      step: "Reporting",
      icon: TrendingUp,
    },
  ];

  const faqs = [
    {
      question: "How long does SEO take to show results?",
      answer:
        "SEO is a long-term strategy. Most businesses start seeing noticeable improvements within 3 to 6 months depending on competition and website condition.",
    },
    {
      question: "Do you provide local SEO services?",
      answer:
        "Yes, we help businesses improve local search visibility and Google Business rankings.",
    },
    {
      question: "Can SEO improve lead generation?",
      answer:
        "Yes. SEO attracts users actively searching for your services which increases conversion opportunities.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely. NSL Digital Lab specializes in helping startups and modern businesses grow online.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          SEO Services for Business Growth | NSL Digital Lab
        </title>

        <meta
          name="description"
          content="NSL Digital Lab provides professional SEO services including technical SEO, local SEO, keyword research, content optimization, SEO audits, and growth-focused SEO strategies for startups and businesses worldwide."
        />

        <meta
          name="keywords"
          content="
    SEO services,
    SEO agency,
    SEO company,
    technical SEO services,
    local SEO services,
    SEO expert,
    keyword research services,
    SEO audit services,
    content SEO,
    SEO for startups,
    digital marketing agency,
    SEO services India,
    SEO services Pune
  "
        />

        <link
          rel="canonical"
          href="https://nsldigitallab.comservices/seo-services"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="SEO Services for Business Growth | NSL Digital Lab"
        />

        <meta
          property="og:description"
          content="Professional SEO services focused on rankings, traffic growth, and lead generation for startups and businesses."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://nsldigitallab.comservices/seo-services"
        />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />

        <meta
          name="twitter:title"
          content="SEO Services for Business Growth | NSL Digital Lab"
        />

        <meta
          name="twitter:description"
          content="Professional SEO services including technical SEO, local SEO, keyword research, and growth-focused SEO strategies."
        />

        {/* Schema */}
        <script type="application/ld+json">
          {`
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "NSL Digital Lab",
      "url": "https://nsldigitallab.comservices/seo-services",
      "serviceType": "SEO Services",
      "description": "Professional SEO services including technical SEO, local SEO, keyword research, and content optimization.",
      "areaServed": "Worldwide",
      "sameAs": [
        "https://nsldigitallab.co.in"
      ]
    }
    `}
        </script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white text-[#111827]">
        {/* HERO SECTION */}
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#081120] pt-40 pb-32">

          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-[700px] h-[700px] bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-3xl" />

          {/* Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* Left Content */}
              <div>

                <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-2">

                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />

                  <span className="text-cyan-300 text-sm font-medium">
                    SEO Growth Solutions
                  </span>

                </div>

                <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight text-white">

                  SEO Services That

                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">

                    Generate Leads

                  </span>

                </h1>

                <p className="mt-8 text-xl text-slate-300 leading-9 max-w-2xl">

                  Grow your business with technical SEO, keyword research,
                  content optimization, local SEO, and growth-focused SEO
                  strategies designed to increase rankings and qualified traffic.

                </p>

                <div className="mt-10 flex flex-wrap gap-5">

                  <a
                    href="#seo-services"
                    className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 text-white font-semibold shadow-2xl shadow-cyan-500/30 hover:scale-105 transition-all duration-300"
                  >
                    Explore Services
                  </a>

                  <a
                    href="/#contact"
                    className="rounded-2xl border border-slate-700 bg-slate-900/50 px-8 py-4 text-white font-semibold hover:border-cyan-500 transition-all duration-300"
                  >
                    Get Free SEO Audit
                  </a>

                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-16">

                  <div>
                    <h3 className="text-4xl font-bold text-cyan-400">
                      300%
                    </h3>

                    <p className="mt-2 text-slate-400">
                      Traffic Growth
                    </p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-cyan-400">
                      95%
                    </h3>

                    <p className="mt-2 text-slate-400">
                      Client Retention
                    </p>
                  </div>

                  <div>
                    <h3 className="text-4xl font-bold text-cyan-400">
                      24/7
                    </h3>

                    <p className="mt-2 text-slate-400">
                      Support
                    </p>
                  </div>

                </div>

              </div>

              {/* Right Side Card */}
              <div>

                <div className="relative rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-8">

                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-full text-sm font-semibold text-white">

                    SEO Dashboard

                  </div>

                  <div className="space-y-6">

                    <div className="rounded-2xl bg-[#0f172a] p-6 border border-slate-700">

                      <div className="flex justify-between">

                        <span className="text-slate-400">
                          Organic Traffic
                        </span>

                        <span className="text-green-400">
                          +182%
                        </span>

                      </div>

                      <div className="mt-4 h-3 rounded-full bg-slate-700 overflow-hidden">

                        <div className="h-full w-[80%] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />

                      </div>

                    </div>

                    <div className="rounded-2xl bg-[#0f172a] p-6 border border-slate-700">

                      <div className="flex justify-between">

                        <span className="text-slate-400">
                          Keyword Rankings
                        </span>

                        <span className="text-cyan-400">
                          Top 10
                        </span>

                      </div>

                      <div className="mt-4 h-3 rounded-full bg-slate-700 overflow-hidden">

                        <div className="h-full w-[70%] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />

                      </div>

                    </div>

                    <div className="rounded-2xl bg-[#0f172a] p-6 border border-slate-700">

                      <div className="flex justify-between">

                        <span className="text-slate-400">
                          Lead Generation
                        </span>

                        <span className="text-green-400">
                          +140%
                        </span>

                      </div>

                      <div className="mt-4 h-3 rounded-full bg-slate-700 overflow-hidden">

                        <div className="h-full w-[85%] bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full" />

                      </div>

                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>

        {/* PROBLEMS SECTION */}
        <section className="py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-cyan-600 font-medium">
                Problems We Solve
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Struggling To Grow Organically?
              </h2>

              <p className="mt-6 text-lg text-gray-600">
                We help businesses overcome SEO challenges and improve digital
                visibility through performance-focused strategies.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                "Low Website Traffic",
                "Poor Google Rankings",
                "Weak Lead Generation",
                "Slow Website Performance",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-xl hover:border-cyan-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-200">
                    <TrendingUp className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#111827]">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES INCLUDED */}
        <section
          id="seo-services"
          className="bg-[#f8fbff] py-24 border-t border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-cyan-600 font-medium">
                SEO Services Included
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Complete SEO Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {seoServices.map((service, index) => {
                const Icon = service.icon;

                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-3xl border border-cyan-100 bg-white p-8 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-100/60 transition-all duration-500"
                  >
                    {/* Glow */}
                    <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-100/40 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Icon */}
                    <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-200 mb-7">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-[#111827] group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-8">
                      {service.description}
                    </p>

                    {/* Learn More */}
                    <Link
                      to={service.link}
                      className="mt-8 inline-flex items-center text-cyan-600 font-semibold hover:text-blue-700"
                    >
                      Learn More

                      <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROCESS SECTION */}
        <section className="py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-cyan-600 font-medium">
                Our SEO Process
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                How We Approach SEO
              </h2>
            </div>

            <div className="grid md:grid-cols-5 gap-6 mt-16">
              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="group rounded-3xl border border-gray-200 bg-white p-8 text-center hover:shadow-2xl hover:border-cyan-200 transition-all duration-300"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mx-auto shadow-lg shadow-cyan-200">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="mt-6 text-lg font-bold text-[#111827]">
                      {item.step}
                    </h3>

                    <div className="mt-4 flex justify-center">
                      <CheckCircle2 className="w-5 h-5 text-cyan-500" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        {/* BENEFITS SECTION */}
        <section className="py-24 border-t border-gray-100 bg-[#f8fbff]">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-cyan-600 font-medium">
                Benefits of SEO
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Why SEO Matters for Modern Businesses
              </h2>

              <p className="mt-6 text-lg text-gray-600">
                SEO helps businesses build long-term visibility, attract
                qualified traffic, and generate sustainable growth online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                "Increase Organic Traffic",
                "Improve Google Rankings",
                "Generate Qualified Leads",
                "Build Long-Term Visibility",
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg shadow-cyan-200">
                    <CheckCircle2 className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-semibold text-[#111827]">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* WHY CHOOSE US */}
        <section className="bg-gradient-to-b from-white to-cyan-50 py-24 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-cyan-600 font-medium">
                  Why Choose NSL Digital Lab
                </span>

                <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                  SEO + Design + Performance
                </h2>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  NSL Digital Lab combines SEO expertise, modern UI/UX thinking,
                  technical optimization, and performance-focused strategies to
                  help businesses improve rankings, increase visibility, and grow
                  organically in competitive markets.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Modern SEO Strategy",
                  "Startup-Focused Approach",
                  "Conversion Optimization",
                  "Performance Tracking",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-xl transition-all duration-300"
                  >
                    <h3 className="text-xl font-semibold">
                      {item}
                    </h3>

                    <p className="mt-3 text-gray-600">
                      High-impact SEO solutions designed for measurable growth.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="py-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center">
              <span className="text-cyan-600 font-medium">
                Frequently Asked Questions
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                SEO FAQs
              </h2>
            </div>

            <div className="mt-16 space-y-6">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-3xl border border-gray-200 bg-white p-8 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold text-[#111827]">
                    {faq.question}
                  </h3>

                  <p className="mt-4 text-gray-600 leading-8">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative overflow-hidden bg-[#111827] py-24 text-white">
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-3xl" />

          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-3xl" />

          <div className="relative max-w-5xl mx-auto px-6 lg:px-10 text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Ready To Improve Your Search Rankings?
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Let’s build a powerful SEO strategy that helps your business
              improve rankings, grow organic traffic, and generate more leads
              through long-term search engine optimization.
            </p>
            <div className="mt-10">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20"
              >
                Start Your SEO Project
              </a>
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />
    </>
  );
}