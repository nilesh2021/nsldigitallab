import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#202851] to-[#131a3d] text-white">

      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6">
        <div className="max-w-5xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-xl mb-6">
            <span className="w-2 h-2 rounded-full bg-[#24c2f2]"></span>

            <span className="text-sm text-gray-300">
              Last Updated: May 2026
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Disclaimer
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8">
            Please read this Disclaimer carefully before using the
            nsldigitallab website and services.
          </p>

        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* General Information */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              General Information
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              All information provided on the nsldigitallab website is published
              in good faith and for general informational and educational
              purposes only. We make every effort to ensure the accuracy of
              information, but we do not guarantee completeness, reliability,
              or accuracy.
            </p>

          </div>

          {/* Professional Disclaimer */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Professional Disclaimer
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              nsldigitallab provides digital marketing, SEO, branding, web
              design, internship, and educational content. The information
              shared on this website should not be considered professional,
              financial, legal, or business advice. Users should independently
              verify information before making decisions.
            </p>

          </div>

          {/* External Links */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              External Links Disclaimer
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Our website may contain links to third-party websites or
              services. nsldigitallab does not guarantee the accuracy,
              relevance, or reliability of external websites and is not
              responsible for their content or privacy practices.
            </p>

          </div>

          {/* Affiliate Disclaimer */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Affiliate Disclaimer
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Some pages or blog articles on this website may contain affiliate
              links. This means nsldigitallab may earn a commission if users
              purchase products or services through those links, at no
              additional cost to the user.
            </p>

          </div>

          {/* Testimonials */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Testimonials & Results
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Any testimonials, case studies, or examples presented on this
              website are individual experiences and results may vary depending
              on business goals, market conditions, and implementation.
            </p>

          </div>

          {/* Limitation */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Limitation of Liability
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              nsldigitallab shall not be held liable for any losses, damages, or
              issues arising from the use of our website, content, digital
              services, or third-party resources.
            </p>

          </div>

          {/* Consent */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Consent
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              By using our website, you consent to this Disclaimer and agree
              to its terms.
            </p>

          </div>

          {/* Updates */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Updates to This Disclaimer
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              nsldigitallab reserves the right to update or modify this
              Disclaimer at any time without prior notice. Any updates will be
              reflected on this page.
            </p>

          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#24c2f2]/20 to-[#202851]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Contact Us
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-4">
              If you have any questions regarding this Disclaimer, feel free
              to contact us.
            </p>

            <div className="space-y-2 text-lg">

              <p>
                Email: hello@nsldigitallab.com
              </p>

              <p>
                Website: www.nsldigitallab.co.in
              </p>

            </div>

          </div>

        </div>
      </section>

      {/* Scroll To Top */}
      <ScrollToTop />

      {/* Footer */}
      <Footer />

    </div>
  );
}