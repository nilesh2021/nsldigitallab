import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function AffiliateDisclosurePage() {
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
            Affiliate Disclosure
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8">
            Transparency and trust are important to us. This page explains how
            affiliate partnerships may be used on nsldigitallab.
          </p>

        </div>
      </section>

      {/* Content Section */}
      <section className="pb-24 px-6">
        <div className="max-w-5xl mx-auto space-y-10">

          {/* Introduction */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Introduction
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
               NslDigitlaLabmay participate in various affiliate marketing
              programs. This means some links on our website, blog articles,
              resources, or recommendations may be affiliate links.
            </p>

          </div>

          {/* How Affiliate Links Work */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              How Affiliate Links Work
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              If you click on an affiliate link and make a purchase or sign up
              for a service,  NslDigitlaLabmay earn a small commission at no
              additional cost to you. These commissions help support the
              maintenance, content creation, and growth of our platform.
            </p>

          </div>

          {/* Honest Recommendations */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Honest Recommendations
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              We value transparency and strive to recommend products,
              platforms, services, or tools that we believe may provide value
              to our audience. However, users should independently evaluate any
              product or service before making decisions.
            </p>

          </div>

          {/* No Extra Cost */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              No Additional Cost
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Clicking affiliate links does not increase the price you pay.
              In many cases, users may also receive promotional offers,
              discounts, or benefits through affiliate partnerships.
            </p>

          </div>

          {/* Sponsored Content */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Sponsored Content
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Certain blog posts, reviews, or promotional content may be
              sponsored or part of paid collaborations. Whenever applicable,
              we aim to clearly disclose sponsored relationships.
            </p>

          </div>

          {/* Third Party Responsibility */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Third-Party Responsibility
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
               NslDigitlaLabis not responsible for third-party products,
              services, policies, pricing, or website content associated with
              affiliate links. Users should review third-party terms and
              policies before engaging with those platforms.
            </p>

          </div>

          {/* User Responsibility */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              User Responsibility
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Users are encouraged to conduct their own research and make
              informed decisions before purchasing products or services through
              affiliate links or external recommendations.
            </p>

          </div>

          {/* Updates */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Updates to This Disclosure
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
               NslDigitlaLabreserves the right to update or modify this Affiliate
              Disclosure at any time without prior notice. Any changes will be
              reflected on this page.
            </p>

          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#24c2f2]/20 to-[#202851]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Contact Us
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-4">
              If you have any questions regarding this Affiliate Disclosure,
              please feel free to contact us.
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