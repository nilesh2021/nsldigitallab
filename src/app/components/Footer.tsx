import {
  Linkedin,
  Instagram,
  Youtube,
  Github,
} from "lucide-react";

import { Link } from "react-router-dom";
import logo from "../../assets/images/Nsl-digital-lab.png";

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
    <footer className="bg-[#07142B] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6">

        {/* Top */}

        <div className="py-20">

          <div className="grid gap-12 lg:grid-cols-6">

            {/* ===================== */}
            {/* Brand */}
            {/* ===================== */}

            <div className="lg:col-span-2">

              <Link
                to="/"
                className="flex items-center gap-3"
              >
                <img
                  src={logo} 
                  alt="NSL Digital Lab"
                  className=" object-contain w-9 h-9"
                />

                <div className="text-left ps-4 border-l border-[#666666] pl-4">

                  <h2 className="text-xl font-bold" style={{ fontSize: '24px' }}>

                    NSL   <span className="font-light ml-1 text-inherit">
         DIGITAL LAB
        </span>

                  </h2>

                  <p className="text-xs uppercase tracking-widest text-cyan-400" style={{ fontSize: '9px', letterSpacing: '1px' }}>

                 <b className="bg-gradient-to-r from-[#24c2f2] via-[#2563eb] to-[#8b5cf6] bg-clip-text text-transparent">
          Design • Development • Growth
        </b>

                  </p>

                </div>

              </Link>

              <p className="mt-6 text-slate-400 leading-8">

                Helping businesses build modern websites,
                improve user experiences, increase search visibility,
                and grow through UI/UX Design, SEO,
                Web Development and Digital Marketing.

              </p>

              <div className="mt-8">

                <p className="text-cyan-400 font-semibold">

                  ⭐ Growing with startups & businesses

                </p>

              </div>

              {/* Social */}

              <div className="flex gap-4 mt-8">

                {[
                  Linkedin,
                  Instagram,
                  Youtube,
                  Github,
                ].map((Icon, index) => (

                  <a
                    key={index}
                    href="#"
                    className="
                      w-11
                      h-11
                      rounded-xl
                      border
                      border-white/10
                      bg-white/5
                      flex
                      items-center
                      justify-center
                      hover:bg-cyan-500
                      transition-all
                      duration-300
                    "
                  >

                    <Icon className="w-5 h-5" />

                  </a>

                ))}

              </div>

            </div>

            {/* ===================== */}
            {/* Services */}
            {/* ===================== */}

            <div>

              <h3 className="text-lg font-semibold mb-6">

                Services

              </h3>

              <ul className="space-y-4 text-slate-400">

                <li>

                  <Link
                    to="/services/ui-ux-design"
                    className="hover:text-cyan-400 transition"
                  >
                    UI/UX Design
                  </Link>

                </li>

                <li>

                  <Link
                    to="/services/web-design"
                    className="hover:text-cyan-400 transition"
                  >
                    Website Design
                  </Link>

                </li>

                <li>

                  <Link
                    to="/services/seo-services"
                    className="hover:text-cyan-400 transition"
                  >
                    SEO Services
                  </Link>

                </li>

                <li>

                  <Link
                    to="/services/social-media-marketing"
                    className="hover:text-cyan-400 transition"
                  >
                    Digital Marketing
                  </Link>

                </li>

                <li>

                  <Link
                    to="/services"
                    className="text-cyan-400 hover:underline"
                  >
                    View All Services →

                  </Link>

                </li>

              </ul>

            </div>

            {/* ===================== */}
            {/* Learn */}
            {/* ===================== */}

            <div>

              <h3 className="text-lg font-semibold mb-6">

                Learn

              </h3>

              <ul className="space-y-4 text-slate-400">

                <li>

                  <Link
                    to="/learn"
                    className="hover:text-cyan-400 transition"
                  >
                    Learning Hub
                  </Link>

                </li>

                <li>

                  <Link
                    to="/learn/ui-ux-design"
                    className="hover:text-cyan-400 transition"
                  >
                    UI/UX Design
                  </Link>

                </li>

                <li>

                  <Link
                    to="/learn/seo"
                    className="hover:text-cyan-400 transition"
                  >
                    Learn SEO
                  </Link>

                </li>

                <li>

                  <Link
                    to="/learn/digital-marketing"
                    className="hover:text-cyan-400 transition"
                  >
                    Digital Marketing
                  </Link>

                </li>

                <li>

                  <Link
                    to="/resources"
                    className="hover:text-cyan-400 transition"
                  >
                    Free Resources
                  </Link>

                </li>

              </ul>

            </div>

            {/* ===================== */}
            {/* Resources */}
            {/* ===================== */}

            <div>

              <h3 className="text-lg font-semibold mb-6">

                Resources

              </h3>

              <ul className="space-y-4 text-slate-400">

                <li>

                  <Link
                    to="/resources"
                    className="hover:text-cyan-400 transition"
                  >
                    All Resources
                  </Link>

                </li>

                <li>

                  <Link
                    to="/resources/ui-ux-interview-questions"
                    className="hover:text-cyan-400 transition"
                  >
                    UI/UX Interview Questions
                  </Link>

                </li>

                <li>

                  <Link
                    to="/resources/seo-checklist"
                    className="hover:text-cyan-400 transition"
                  >
                    SEO Checklist
                  </Link>

                </li>

                <li>

                  <Link
                    to="/resources/digital-marketing-checklist"
                    className="hover:text-cyan-400 transition"
                  >
                    Marketing Checklist
                  </Link>

                </li>

                <li>

                  <Link
                    to="/blog"
                    className="hover:text-cyan-400 transition"
                  >
                    Read Our Blog
                  </Link>

                </li>

              </ul>

            </div>

                        {/* ===================== */}
            {/* Company */}
            {/* ===================== */}

            <div>

              <h3 className="text-lg font-semibold mb-6">

                Company

              </h3>

              <ul className="space-y-4 text-slate-400">

                <li>

                  <button
                    onClick={() => scrollToSection("about")}
                    className="hover:text-cyan-400 transition"
                  >
                    About Us
                  </button>

                </li>

                <li>

                  <Link
                    to="/blog"
                    className="hover:text-cyan-400 transition"
                  >
                    Blog
                  </Link>

                </li>

                <li>

                  <Link
                    to="/careers"
                    className="hover:text-cyan-400 transition"
                  >
                    Careers
                  </Link>

                </li>

                <li>

                  <button
                    onClick={() => scrollToSection("contact")}
                    className="hover:text-cyan-400 transition"
                  >
                    Contact
                  </button>

                </li>

                <li>

                  <button
                    onClick={() => scrollToSection("subscribe")}
                    className="hover:text-cyan-400 transition"
                  >
                    Newsletter
                  </button>

                </li>

              </ul>

            </div>

          </div>

        </div>

        {/* Divider */}

        <div className="border-t border-white/10" />

        {/* Bottom */}

        <div className="py-8 flex flex-col lg:flex-row justify-between items-center gap-8">

          {/* Left */}

          <div>

            <p className="text-slate-400 text-sm text-center lg:text-left">

              © {new Date().getFullYear()}{" "}
              <span className="text-white font-semibold">

                NSL Digital Lab

              </span>

              . All Rights Reserved.

            </p>

            {/* <p className="text-slate-500 text-sm mt-2 text-center lg:text-left">

              Designed & Developed with ❤️ in Pune, India.

            </p> */}

          </div>

          {/* Policies */}

          <div className="flex flex-wrap justify-center gap-6 text-sm">

            <Link
              to="/privacy-policy"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/cookie-policy"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Cookie Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/affiliate-disclosure"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Affiliate Disclosure
            </Link>

            <Link
              to="/disclaimer"
              className="text-slate-400 hover:text-cyan-400 transition"
            >
              Disclaimer
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );
}