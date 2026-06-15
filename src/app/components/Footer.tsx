import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

import { Link } from "react-router-dom";
import logo from  "../../assets/images/nexify_n_logo.png"

export default function Footer() {

  const scrollToSection = (id: string) => {

    if (window.location.pathname === "/") {

      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }

    } else {

      window.location.href = `/#${id}`;

    }

  };

  return (

    <footer className="bg-[#202851] text-white pt-16 pb-6 border-t border-white/10">

      <div className="w-full px-6 md:px-10 lg:px-16 xl:px-24">

        {/* Top Line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-[#24c2f2]/40 to-transparent mb-10" />

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 xl:gap-12 mb-10">

          {/* BRAND */}
          <div className="max-w-sm">

            <Link
              to="/"
              className="flex items-center gap-3 group"
            >

              <div className="w-11 h-11 flex items-center justify-center duration-300">

                <img
                  src={logo}
                  alt="NSL Digital Lab Logo"
                  className="w-full h-full object-contain"
                />

              </div>

              <div className="flex flex-col leading-none">

                <span className="text-lg font-bold text-white">

                  NSL
                  <span className="font-medium text-gray-300">
                    &nbsp;Media
                  </span>

                </span>

                  <span className="text-[10px] uppercase  text-[#24c2f2] mt-1">

               Design • Development • Growth

              </span>

              </div>

            </Link>

            <p className="text-gray-400 mt-5 mb-5 leading-7 text-[15px]">

              Helping brands grow through SEO,
              performance marketing, social media,
              and modern digital experiences.

            </p>

            {/* SOCIAL */}
            <div className="flex gap-3">

              {[Facebook, Twitter, Instagram, Linkedin].map(
                (Icon, index) => (

                  <a
                    key={index}
                    href="#"
                    className="w-9 h-9 rounded-lg bg-white/10 backdrop-blur-xl border border-white/10 flex items-center justify-center hover:bg-[#24c2f2] hover:scale-110 transition-all duration-300"
                  >

                    <Icon className="w-4 h-4" />

                  </a>

                )
              )}

            </div>

          </div>

          {/* COMPANY */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              Company
            </h3>

            <ul className="space-y-3 text-gray-400 text-[15px]">

              <li>

                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-[#24c2f2] transition-all duration-300"
                >
                  About Us
                </button>

              </li>

              <li>

                <button
                  onClick={() => scrollToSection("services")}
                  className="hover:text-[#24c2f2] transition-all duration-300"
                >
                  Services
                </button>

              </li>

              <li>

                <Link
                  to="/careers"
                  onClick={() => window.scrollTo(0, 0)}
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  Careers
                </Link>

              </li>

              <li>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[#24c2f2] transition-all duration-300"
                >
                  Contact
                </button>

              </li>

            </ul>

          </div>

          {/* RESOURCES */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              Resources
            </h3>

            <ul className="space-y-3 text-gray-400 text-[15px]">

              <li>

                <Link
                  to="/blog"
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  Blog
                </Link>

              </li>

              <li>

                <Link
                  to="/best-ai-tools-for-marketers"
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  AI Tools
                </Link>

              </li>

              <li>

                <Link
                  to="/best-chatgpt-tools-for-marketers"
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  Marketing Tools
                </Link>

              </li>

              <li>

                <Link
                  to="/blog/ui-ux/ui-ux-design-in-2026"
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  UI/UX Trends
                </Link>

              </li>

              <li>

                <Link
                  to="/blog/seo/what-is-seo"
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  What is SEO?
                </Link>

              </li>

              <li>

                <Link
                  to="/blog/digital-marketing/how-to-earn-money-from-digital-marketing"
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  Earn with Digital Marketing
                </Link>

              </li>

            </ul>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-lg font-semibold mb-4">
              Services
            </h3>

            <ul className="space-y-3 text-gray-400 text-[15px]">

              <li>

                <Link
                  to="/services/seo-services"
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  SEO Services
                </Link>

              </li>

              <li>

                <Link
                  to="/services/web-design"
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  Web Design
                </Link>

              </li>

              <li>

                <Link
                  to="/services/ui-ux-design"
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  UI/UX Design
                </Link>

              </li>

              <li>

                <Link
                  to="/services/social-media-marketing"
                  className="block hover:text-[#24c2f2] transition-all duration-300"
                >
                  Social Media Marketing
                </Link>

              </li>

            </ul>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 pt-5 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">

          <p>
            © 2026 NSL Digital Lab. All rights reserved.
          </p>

          <div className="flex gap-5 flex-wrap justify-center">

            <Link
              to="/privacy-policy"
              className="hover:text-[#24c2f2] transition-all duration-300"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="hover:text-[#24c2f2] transition-all duration-300"
            >
              Terms
            </Link>

            <Link
              to="/disclaimer"
              className="hover:text-[#24c2f2] transition-all duration-300"
            >
              Disclaimer
            </Link>

          </div>

        </div>

      </div>

    </footer>

  );

}