import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8">
            This Cookie Policy explains how nsldigitallab uses cookies and
            similar technologies to improve your browsing experience.
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
              nsldigitallab uses cookies and similar tracking technologies to
              enhance website functionality, analyze user interactions, and
              improve overall user experience. By using our website, you agree
              to the use of cookies as described in this policy.
            </p>

          </div>

          {/* What Are Cookies */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              What Are Cookies?
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Cookies are small text files stored on your device when you visit
              a website. They help websites remember user preferences, improve
              performance, and provide analytics insights.
            </p>

          </div>

          {/* How We Use Cookies */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              How We Use Cookies
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-8">

              <p>
                We may use cookies for the following purposes:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Improve website performance and speed</li>
                <li>Remember user preferences and settings</li>
                <li>Analyze traffic and visitor behavior</li>
                <li>Measure marketing campaign effectiveness</li>
                <li>Enhance user experience and navigation</li>
              </ul>

            </div>

          </div>

          {/* Types of Cookies */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Types of Cookies We Use
            </h2>

            <div className="space-y-5 text-gray-300 text-lg leading-8">

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Essential Cookies
                </h3>

                <p>
                  Required for core website functionality and security.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Analytics Cookies
                </h3>

                <p>
                  Help us understand user behavior and website performance
                  through analytics tools.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Marketing Cookies
                </h3>

                <p>
                  Used to improve advertising relevance and track campaign
                  effectiveness.
                </p>
              </div>

            </div>

          </div>

          {/* Third Party Cookies */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Third-Party Cookies
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Some third-party services such as analytics providers,
              advertising networks, or embedded content may place cookies on
              your device. nsldigitallab does not directly control third-party
              cookie policies.
            </p>

          </div>

          {/* Managing Cookies */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Managing Cookies
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              You can control or disable cookies through your browser settings.
              Please note that disabling certain cookies may affect website
              functionality and user experience.
            </p>

          </div>

          {/* Updates */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Updates to This Policy
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              nsldigitallab may update this Cookie Policy from time to time to
              reflect changes in technology, regulations, or website
              functionality. Updates will be published on this page.
            </p>

          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#24c2f2]/20 to-[#202851]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Contact Us
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-4">
              If you have any questions regarding this Cookie Policy, feel free
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