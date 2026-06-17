import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function TermsAndConditionsPage() {
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
            Terms & Conditions
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8">
            Please read these Terms & Conditions carefully before using
            nsldigitallab’s website and digital services.
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
              By accessing and using the nsldigitallab website, you agree to
              comply with and be bound by these Terms & Conditions. If you do
              not agree with any part of these terms, please discontinue the
              use of our website and services.
            </p>

          </div>

          {/* Website Usage */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Website Usage
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-8">

              <p>
                You agree to use this website only for lawful purposes and in a
                manner that does not violate applicable laws or regulations.
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>You must not misuse or disrupt website functionality</li>
                <li>You must not attempt unauthorized access</li>
                <li>You must not copy or reproduce website content without permission</li>
                <li>You must provide accurate information when submitting forms</li>
              </ul>

            </div>

          </div>

          {/* Intellectual Property */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Intellectual Property
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              All content, branding, graphics, logos, text, and design elements
              available on nsldigitallab are the intellectual property of
              nsldigitallab unless otherwise stated. Unauthorized use or
              reproduction is strictly prohibited.
            </p>

          </div>

          {/* Services */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Services & Information
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              nsldigitallab provides digital marketing, SEO, web design, content,
              branding, and related digital services. We reserve the right to
              modify, suspend, or discontinue any service without prior notice.
            </p>

          </div>

          {/* Third Party Links */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Third-Party Links
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              Our website may contain links to third-party websites or tools.
              nsldigitallab is not responsible for the content, policies, or
              practices of external websites.
            </p>

          </div>

          {/* Limitation */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Limitation of Liability
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              nsldigitallab shall not be held liable for any direct, indirect,
              incidental, or consequential damages resulting from the use of
              our website, services, or digital content.
            </p>

          </div>

          {/* Changes */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Changes to Terms
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              We may update or modify these Terms & Conditions at any time
              without prior notice. Continued use of the website indicates your
              acceptance of any updated terms.
            </p>

          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#24c2f2]/20 to-[#202851]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Contact Us
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-4">
              If you have any questions regarding these Terms & Conditions,
              please contact us.
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