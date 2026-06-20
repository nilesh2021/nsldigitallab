import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-8">
            Your privacy matters to us. Learn how  NslDigitlaLabcollects,
            uses, and protects your information when you interact with our
            website and services.
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
               NslDigitlaLab respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use, and safeguard your data when you visit our website,
              apply for internships or careers, submit forms, or interact with
              our digital marketing services.
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-5">
              Information We Collect
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-8">
              <p>
                We may collect the following types of information:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Name and contact information</li>
                <li>Email address and phone number</li>
                <li>Career and internship application details</li>
                <li>Resume or portfolio submissions</li>
                <li>Website usage and analytics data</li>
                <li>Marketing preferences and communication history</li>
              </ul>
            </div>
          </div>

          {/* How We Use Information */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-5">
              How We Use Your Information
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-8">

              <p>
                We use collected information to:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Respond to inquiries and applications</li>
                <li>Improve our website and digital services</li>
                <li>Analyze website performance and user behavior</li>
                <li>Provide customer support and communication</li>
                <li>Share relevant updates or marketing information</li>
                <li>Enhance user experience and website functionality</li>
              </ul>

            </div>
          </div>

          {/* Cookies */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-5">
              Cookies & Analytics
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
               NslDigitlaLabmay use cookies, analytics tools, and tracking
              technologies to improve website performance, analyze visitor
              interactions, and optimize marketing campaigns. These tools help
              us understand how users interact with our website and improve
              overall user experience.
            </p>
          </div>

          {/* Third Party Services */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-5">
              Third-Party Services
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              We may use trusted third-party services such as analytics
              platforms, hosting providers, email communication tools, and
              advertising services to operate and improve our website and
              marketing efforts.
            </p>
          </div>

          {/* Data Security */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-5">
              Data Security
            </h2>

            <p className="text-gray-300 leading-8 text-lg">
              We implement reasonable security measures to protect your
              information against unauthorized access, misuse, or disclosure.
              However, no digital platform or internet transmission can be
              guaranteed to be completely secure.
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold mb-5">
              Your Rights
            </h2>

            <div className="space-y-4 text-gray-300 text-lg leading-8">

              <p>
                You may have the right to:
              </p>

              <ul className="list-disc pl-6 space-y-3">
                <li>Request access to your personal information</li>
                <li>Request correction or deletion of data</li>
                <li>Opt out of marketing communications</li>
                <li>Request information about data usage</li>
              </ul>

            </div>
          </div>

          {/* Contact */}
          <div className="bg-gradient-to-r from-[#24c2f2]/20 to-[#202851]/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-10">

            <h2 className="text-3xl font-bold mb-5">
              Contact Us
            </h2>

            <p className="text-gray-300 leading-8 text-lg mb-4">
              If you have any questions regarding this Privacy Policy or how
              your information is handled, feel free to contact us.
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