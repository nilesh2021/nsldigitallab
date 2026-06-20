import { Helmet } from "react-helmet-async";
import Navigation from "../../../components/Navigation"
import Footer from "../../../components/Footer";
 

import {
  Instagram,
  Facebook,
  Linkedin,
  Megaphone,
  BarChart3,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle2,
  LineChart,
  PenSquare,
  Target,
  Globe,
} from "lucide-react";

export default function SocialMediaMarketingPage() {
  const smmServices = [
    {
      title: "Social Media Strategy",
      description:
        "Custom social media strategies designed to grow brand visibility and audience engagement.",
      icon: Target,
    },
    {
      title: "Content Creation",
      description:
        "Creative social media content including graphics, captions, reels, and campaign creatives.",
      icon: PenSquare,
    },
    {
      title: "Instagram Marketing",
      description:
        "Build stronger engagement and grow your audience through Instagram marketing strategies.",
      icon: Instagram,
    },
    {
      title: "Facebook Marketing",
      description:
        "Increase reach, engagement, and conversions with Facebook marketing campaigns.",
      icon: Facebook,
    },
    {
      title: "LinkedIn Marketing",
      description:
        "Professional LinkedIn marketing solutions for B2B businesses and startups.",
      icon: Linkedin,
    },
    {
      title: "Performance Analytics",
      description:
        "Track campaign performance, engagement metrics, and audience growth effectively.",
      icon: BarChart3,
    },
  ];

  const process = [
    {
      step: "Research",
      icon: Globe,
    },
    {
      step: "Strategy",
      icon: Target,
    },
    {
      step: "Content Creation",
      icon: PenSquare,
    },
    {
      step: "Campaign Growth",
      icon: Megaphone,
    },
    {
      step: "Analytics",
      icon: LineChart,
    },
  ];

  const faqs = [
    {
      question: "Why is social media marketing important?",
      answer:
        "Social media marketing helps businesses improve brand awareness, audience engagement, lead generation, and customer relationships.",
    },
    {
      question: "Do you create social media content?",
      answer:
        "Yes. We create modern social media content including graphics, captions, campaign creatives, and engagement-focused posts.",
    },
    {
      question: "Which platforms do you manage?",
      answer:
        "We work with Instagram, Facebook, LinkedIn, and other major social media platforms depending on business goals.",
    },
    {
      question: "Can social media marketing help startups?",
      answer:
        "Absolutely. Social media marketing helps startups build visibility, trust, and audience engagement online.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          Social Media Marketing Services | NSL Digital Lab
        </title>

        <meta
          name="description"
          content="NSL Digital Lab provides professional social media marketing services including Instagram marketing, Facebook marketing, LinkedIn marketing, content creation, social media strategy, and audience growth solutions for businesses worldwide."
        />

        <meta
          name="keywords"
          content="
          social media marketing services,
          social media agency,
          Instagram marketing,
          Facebook marketing,
          LinkedIn marketing,
          content creation services,
          social media strategy,
          digital marketing agency,
          social media management,
          audience growth,
          brand marketing,
          startup marketing
        "
        />

        <link
          rel="canonical"
          href="https://nsldigitallab.comservices/social-media-marketing"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Social Media Marketing Services | NSL Digital Lab"
        />

        <meta
          property="og:description"
          content="Professional social media marketing services focused on audience growth, engagement, and brand visibility."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://nsldigitallab.comservices/social-media-marketing"
        />

        {/* Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "NSL Digital Lab",
            "url": "https://nsldigitallab.comservices/social-media-marketing",
            "serviceType": "Social Media Marketing Services",
            "description": "Professional social media marketing services including Instagram marketing, Facebook marketing, LinkedIn marketing, and content creation.",
            "areaServed": "Worldwide"
          }
          `}
        </script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white text-[#111827]">
        {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#020817] pt-40 pb-28 text-white">
          {/* Background */}
         <div className="absolute inset-0">
            <div className="absolute left-[-180px] top-[-100px] h-[700px] w-[700px] rounded-full bg-cyan-500/20 blur-[140px]" />

             <div className="absolute left-[120px] top-[120px] h-[420px] w-[420px] rounded-full bg-violet-600/20 blur-[120px]" />


             <div className="absolute right-[-120px] top-[100px] h-[600px] w-[600px] rounded-full bg-sky-500/10 blur-[140px]" />
          </div>

          {/* Grid */}
         <div className="absolute inset-0 opacity-[0.05]
bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
bg-[size:70px_70px]" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 backdrop-blur-md px-5 py-2 shadow-md">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

                <span className="text-sm font-medium text-cyan-700">
                  Social Media Growth Solutions
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#fff]">
                Social Media Marketing That
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Builds Brand Growth
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 text-xl  text-slate-400 leading-9 max-w-2xl">
                NSL Digital Lab helps businesses grow online through strategic
                social media marketing, audience engagement, content creation,
                and performance-driven campaigns.
              </p>

              {/* Supporting SEO Text */}
              <p className="mt-6 text-gray-600 leading-8 max-w-2xl">
                Our social media marketing services include Instagram marketing,
                Facebook campaigns, LinkedIn growth strategies, content
                creation, and audience engagement solutions for modern brands
                worldwide.
              </p>

              {/* Buttons */}
              <div className="mt-12 flex flex-wrap gap-5">
                <a
                  href="#smm-services"
                  className="
              px-8
              py-4
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              text-white
              font-semibold
              hover:scale-105
              transition-all
              duration-300
            "
                >
                  Explore SMM Services
                </a>

                <a
                  href="/#contact"
                  className="
              px-8
              py-4
              rounded-xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              text-white
              font-semibold
              hover:bg-white/10
              transition-all
            "
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES INCLUDED */}
        <section
          id="smm-services"
          className="bg-[#f8fbff] py-24 border-t border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-[#202851]/10 text-[#202851] text-sm mb-5">
                Social Media Services Included
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Complete Social Media Marketing Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {smmServices.map((service, index) => {
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

                    <h3 className="text-2xl font-bold text-[#111827] group-hover:text-cyan-600 transition-colors">
                      {service.title}
                    </h3>

                    <p className="mt-4 text-gray-600 leading-8">
                      {service.description}
                    </p>

                    <div className="mt-8 inline-flex items-center text-cyan-600 font-semibold">
                      Learn More

                      <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
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
              <span className="inline-block px-4 py-2 rounded-full bg-[#202851]/10 text-[#202851] text-sm mb-5">
                Our Marketing Process
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                How We Approach Social Media Marketing
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
        <section className="py-24 border-t border-gray-100 bg-white">
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-[#202851]/10 text-[#202851] text-sm mb-5">
                Benefits of Social Media Marketing
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Why Social Media Marketing Matters
              </h2>

              <p className="mt-6 text-lg text-gray-600">
                Social media marketing helps businesses improve visibility,
                build stronger customer relationships, and grow online.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                "Increase Brand Awareness",
                "Improve Audience Engagement",
                "Generate More Leads",
                "Build Customer Trust",
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

        {/* FAQ SECTION */}
        <section className="py-24 border-t border-gray-100">
          <div className="max-w-4xl mx-auto px-6 lg:px-10">
            <div className="text-center">
              <span className="inline-block px-4 py-2 rounded-full bg-[#202851]/10 text-[#202851] text-sm mb-5">
                Frequently Asked Questions
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Social Media Marketing FAQs
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
              Ready To Grow Your Brand On Social Media?
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Let’s create powerful social media marketing strategies that help
              your business increase visibility, engagement, and long-term
              growth online.
            </p>

            <div className="mt-10">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20"
              >
                Start Your Marketing Project
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}