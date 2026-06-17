import {
  Mail,
  MapPin,
  GraduationCap,
  ArrowRight,
} from 'lucide-react';
import { useNavigate } from "react-router-dom";
export default function ContactSection() {
  const navigate = useNavigate();

  const scrollToInternship = () => {

    const element = document.getElementById('seo-program');

    if (element) {

      const navbarOffset = 100;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (

    <section className="bg-[#1a2248] text-white py-24 sm:py-18 lg:py-24 px-4 sm:px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-[#24c2f2] uppercase tracking-[3px] text-sm">
            Join nsldigitallab
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#fff] mb-6 leading-tight">
            Learn Digital Marketing
            With <br />Real Opportunities
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto text-lg leading-8">
            Explore SEO internship opportunities, practical learning,
            and career growth with nsldigitallab.
          </p>

        </div>

        {/* Main Card */}
        <div className="grid lg:grid-cols-2 gap-10 items-center">

          {/* Left Side */}
          <div className="space-y-8">

            {/* Email */}
            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-[#24c2f2]/10 border border-[#24c2f2]/20 flex items-center justify-center">
                <Mail className="text-[#24c2f2]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Email Us
                </h3>

                <p className="text-gray-400">
                  hello@nsldigitallab.com
                </p>
              </div>

            </div>

            {/* Remote */}
            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-[#24c2f2]/10 border border-[#24c2f2]/20 flex items-center justify-center">
                <MapPin className="text-[#24c2f2]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Remote Learning Platform
                </h3>

                <p className="text-gray-400">
                  Supporting learners across India
                </p>
              </div>

            </div>

            {/* Internship */}
            <div className="flex gap-5">

              <div className="w-14 h-14 rounded-2xl bg-[#24c2f2]/10 border border-[#24c2f2]/20 flex items-center justify-center">
                <GraduationCap className="text-[#24c2f2]" />
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">
                  Internship Opportunities
                </h3>

                <p className="text-gray-400 leading-7">
                  SEO Internship <br />
                  Digital Marketing Learning <br />
                  Career Growth Opportunities
                </p>
              </div>

            </div>

          </div>

          {/* Right Side CTA Card */}
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10">

            <span className="text-[#24c2f2] uppercase tracking-[3px] text-sm">
              Career Growth
            </span>

            <h3 className="text-3xl font-bold mt-5 mb-6 leading-tight">
              Ready to Start Your <br />
              Digital Marketing Journey?
            </h3>

            <p className="text-gray-400 leading-8 mb-8">
              Join nsldigitallab to gain practical exposure,
              learn modern SEO strategies, and explore
              internship opportunities designed for future
              digital marketers.
            </p>

            <button
               onClick={() => navigate("/careers")}
              className="
    group
inline-flex
items-center
gap-3
px-8
py-4
rounded-2xl
bg-gradient-to-r
from-[#24c2f2]
via-[#1da1f2]
to-[#1d4ed8]
text-white
font-semibold
text-lg
shadow-[0_10px_40px_rgba(36,194,242,0.18)]
hover:shadow-[0_20px_60px_rgba(36,194,242,0.28)]
hover:-translate-y-1
transition-all
duration-300
  "
            >
              Apply for Internship

              <ArrowRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}