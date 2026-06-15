import { Helmet } from "react-helmet-async";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

export default function ServicesPage() {
  const services = [
    {
      title: "SEO Services",
      description:
        "Improve search visibility and organic traffic with modern SEO strategies.",
      link: "/services/seo-services",
    },
    {
      title: "Web Design",
      description:
        "Modern responsive websites designed for startups and businesses.",
      link: "/services/web-design",
    },
    {
      title: "UI/UX Design",
      description:
        "User-focused interfaces crafted for better engagement and usability.",
      link: "/services/ui-ux-design",
    },
    {
      title: "Social Media Marketing",
      description:
        "Strategic social media campaigns to grow your brand online.",
      link: "/services/social-media-marketing",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Services | NSL Digital Lab</title>
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-white text-[#0B1020]">
     
{/* Hero Section */}
{/* Hero Section */}
<section className="relative overflow-hidden bg-[#edf3fb] pt-40 pb-28">
  {/* Mesh Background */}
  <div className="absolute inset-0 opacity-70">
    <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-cyan-300/20 rounded-full blur-3xl" />

    <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-blue-300/20 rounded-full blur-3xl" />

    <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-indigo-200/20 rounded-full blur-3xl" />
  </div>

  {/* Grid Pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.5)_1px,transparent_1px)] bg-[size:60px_60px] opacity-40" />

  <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
    <div className="max-w-3xl">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white/80 backdrop-blur-md px-5 py-2 shadow-md">
        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />

        <span className="text-sm font-medium text-cyan-700">
          Digital Growth Solutions
        </span>
      </div>

      {/* Heading */}
      <h1 className="mt-8 text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] text-[#111827]">
        Helping Brands
        <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
          {" "}
          Scale Faster
        </span>
        <br />
        In The Digital World
      </h1>

      {/* Description */}
      <p className="mt-8 text-xl text-gray-600 leading-9 max-w-2xl">
        We combine SEO, modern web design, UI/UX strategy, and digital
        marketing to help startups and businesses grow online.
      </p>

      {/* Buttons */}
      <div className="mt-12 flex flex-wrap gap-5">
        <a
          href="#services-grid"
          className="inline-flex items-center justify-center rounded-2xl bg-[#111827] px-8 py-4 text-white font-semibold hover:scale-105 transition-all duration-300 shadow-2xl shadow-black/10"
        >
          Explore Services
        </a>

        <a
          href="/#contact"
          className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-white/80 backdrop-blur-md px-8 py-4 text-[#111827] font-semibold hover:border-cyan-300 hover:text-cyan-600 transition-all duration-300 shadow-lg"
        >
          Let’s Talk
        </a>
      </div>

      {/* Stats */}
      <div className="mt-16 flex flex-wrap gap-10">
        {[
          ["SEO", "Growth-focused strategies"],
          ["UI/UX", "Modern user experiences"],
          ["Marketing", "Performance-driven campaigns"],
        ].map(([title, desc], index) => (
          <div key={index}>
            <h3 className="text-lg font-bold text-[#111827]">
              {title}
            </h3>

            <p className="mt-2 text-gray-600">
              {desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

        {/* Services Grid */}
        <section
          id="services-grid"
          className="max-w-7xl mx-auto px-6 lg:px-10 py-24"
        >
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-cyan-600 font-medium">
              What We Offer
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4 text-[#0B1020]">
              Services That Drive Growth
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We combine creativity, strategy, and technology to help brands
              scale in the modern digital world.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="group rounded-3xl border border-gray-200 bg-white p-8 hover:border-cyan-300 hover:shadow-2xl hover:shadow-cyan-100 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-100 to-blue-100 flex items-center justify-center mb-6">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600" />
                </div>

                <h2 className="text-2xl font-semibold text-[#0B1020] group-hover:text-cyan-600 transition-colors">
                  {service.title}
                </h2>

                <p className="mt-4 text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-8 inline-flex items-center text-cyan-600 font-semibold">
                  Learn More
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-gradient-to-b from-white to-cyan-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-cyan-600 font-medium">
                  Why Choose NSL Digital Lab
                </span>

                <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight text-[#0B1020]">
                  Strategy + Design + Performance
                </h2>

                <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                  We create scalable digital experiences that not only look
                  modern but also generate measurable business growth through
                  SEO, branding, and conversion-focused design.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  "Modern UI/UX",
                  "SEO-Driven Strategy",
                  "Mobile-First Design",
                  "Performance Marketing",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <h3 className="font-semibold text-lg text-[#0B1020]">
                      {item}
                    </h3>

                    <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                      High-quality digital solutions tailored for modern brands
                      and growing businesses.
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-gray-200 bg-white">
          <div className="max-w-5xl mx-auto px-6 lg:px-10 py-24 text-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight text-[#0B1020]">
              Ready to Grow Your Brand Online?
            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Let’s build powerful digital experiences that help your business
              stand out and grow faster online.
            </p>

            <div className="mt-10">
              <a
                href="/#contact"
                className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 hover:scale-105 transition-all duration-300 text-white font-semibold px-8 py-4 rounded-xl"
              >
                Start Your Project
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}