import { Helmet } from "react-helmet-async";
import Navigation from "../../../components/Navigation"
import Footer from "../../../components/Footer";
 

import {
  Monitor,
  Smartphone,
  LayoutDashboard,
  PencilRuler,
  Sparkles,
  Layers3,
  ArrowRight,
  CheckCircle2,
  Palette,
  Figma,
  Users,
  TrendingUp,
} from "lucide-react";

export default function UiUxDesignPage() {
  const uiuxServices = [
    {
      title: "Website UI Design",
      description:
        "Modern responsive website interfaces designed for better engagement and conversions.",
      icon: Monitor,
    },
    {
      title: "Mobile App Design",
      description:
        "User-friendly mobile app interfaces focused on usability and seamless experiences.",
      icon: Smartphone,
    },
    {
      title: "Dashboard Design",
      description:
        "Clean and scalable SaaS dashboard interfaces with better information hierarchy.",
      icon: LayoutDashboard,
    },
    {
      title: "Wireframing",
      description:
        "Strategic wireframes and user flows to improve structure and usability.",
      icon: PencilRuler,
    },
    {
      title: "UX Optimization",
      description:
        "Improve user journeys, accessibility, and interaction experiences.",
      icon: Sparkles,
    },
    {
      title: "Design Systems",
      description:
        "Consistent UI systems and reusable components for scalable products.",
      icon: Layers3,
    },
  ];

  const process = [
    {
      step: "Research",
      icon: Users,
    },
    {
      step: "Wireframing",
      icon: PencilRuler,
    },
    {
      step: "UI Design",
      icon: Palette,
    },
    {
      step: "Prototype",
      icon: Figma,
    },
    {
      step: "Optimization",
      icon: TrendingUp,
    },
  ];

  const faqs = [
    {
      question: "Why is UI/UX design important?",
      answer:
        "UI/UX design improves usability, engagement, user satisfaction, and conversion rates for websites and digital products.",
    },
    {
      question: "Do you design mobile apps?",
      answer:
        "Yes. We design user-friendly mobile app interfaces for startups, SaaS platforms, and businesses.",
    },
    {
      question: "Do you provide wireframes and prototypes?",
      answer:
        "Yes. We create wireframes, user flows, and interactive prototypes before final UI design.",
    },
    {
      question: "Can you redesign existing websites?",
      answer:
        "Absolutely. We help businesses modernize outdated interfaces and improve user experience.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>
          UI/UX Design Services for Modern Businesses | NSL Digital Lab
        </title>

        <meta
          name="description"
          content="NSL Digital Lab provides professional UI/UX design services including web design, mobile app UI design, wireframing, dashboard design, UX optimization, and modern interface solutions for startups and businesses worldwide."
        />

        <meta
          name="keywords"
          content="
          UI UX design services,
          UI UX designer,
          web UI design,
          mobile app UI design,
          UX design services,
          dashboard UI design,
          SaaS UI design,
          wireframing services,
          user experience design,
          interface design,
          UI UX company,
          UI UX agency,
          modern web design,
          startup UI UX design
        "
        />

        <link
          rel="canonical"
          href="https://nsldigitallab.comservices/ui-ux-design"
        />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="UI/UX Design Services | NSL Digital Lab"
        />

        <meta
          property="og:description"
          content="Professional UI/UX design services focused on modern interfaces, usability, and conversion-focused digital experiences."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://nsldigitallab.comservices/ui-ux-design"
        />

        {/* Schema */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            "name": "NSL Digital Lab",
            "url": "https://nsldigitallab.comservices/ui-ux-design",
            "serviceType": "UI UX Design Services",
            "description": "Professional UI/UX design services including website UI design, dashboard design, wireframing, mobile app UI design, and user experience optimization.",
            "areaServed": "Worldwide"
          }
          `}
        </script>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white text-[#111827]">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-[#edf3fb] pt-40 pb-28">
          {/* Background */}
          <div className="absolute inset-0 opacity-70">
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl" />

            <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />

            <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-3xl" />
          </div>

          {/* Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
            <div className="max-w-3xl">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 backdrop-blur-md px-5 py-2 shadow-md">
                <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

                <span className="text-sm font-medium text-cyan-700">
                  UI/UX Design Solutions
                </span>
              </div>

              {/* Heading */}
              <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#111827]">
                UI/UX Design That
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  {" "}
                  Enhances User Experience
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 text-xl text-gray-600 leading-9 max-w-2xl">
                NSL Digital Lab creates modern UI/UX designs focused on usability,
                engagement, and conversion-driven digital experiences for
                startups, SaaS platforms, and modern businesses.
              </p>

              {/* Supporting SEO Text */}
              <p className="mt-6 text-gray-600 leading-8 max-w-2xl">
                Our UI/UX design services include website design, mobile app UI,
                dashboard interfaces, wireframing, user experience optimization,
                and scalable design systems for digital products worldwide.
              </p>

              {/* Buttons */}
              <div className="mt-12 flex flex-wrap gap-5">
                <a
                  href="#uiux-services"
                  className="inline-flex items-center justify-center rounded-2xl bg-[#111827] px-8 py-4 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/10"
                >
                  Explore UI/UX Services
                </a>

                <a
                  href="/#contact"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-white/80 backdrop-blur-md px-8 py-4 text-[#111827] font-semibold hover:border-cyan-300 hover:text-cyan-600 transition-all duration-300 shadow-lg"
                >
                  Let’s Talk
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES INCLUDED */}
        <section
          id="uiux-services"
          className="bg-[#f8fbff] py-24 border-t border-gray-100"
        >
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-cyan-600 font-medium">
                UI/UX Services Included
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Complete UI/UX Design Solutions
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              {uiuxServices.map((service, index) => {
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
              <span className="text-cyan-600 font-medium">
                Our Design Process
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                How We Approach UI/UX Design
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
              <span className="text-cyan-600 font-medium">
                Benefits of UI/UX Design
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                Why UI/UX Matters for Digital Products
              </h2>

              <p className="mt-6 text-lg text-gray-600">
                Great UI/UX design improves usability, increases engagement,
                and creates better customer experiences across digital
                platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
              {[
                "Improve User Experience",
                "Increase Engagement",
                "Boost Conversion Rates",
                "Build Brand Trust",
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
              <span className="text-cyan-600 font-medium">
                Frequently Asked Questions
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold">
                UI/UX Design FAQs
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
              Ready To Create Better User Experiences?
            </h2>

            <p className="mt-6 text-lg text-gray-300 leading-relaxed">
              Let’s design modern digital experiences that improve usability,
              increase engagement, and help your business grow online.
            </p>

            <div className="mt-10">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-4 font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-cyan-500/20"
              >
                Start Your UI/UX Project
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}