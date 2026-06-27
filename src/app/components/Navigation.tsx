'use client';

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import logo from  "../../assets/images/Nsl-digital-lab.png"

export default function Navigation({
  light = false,
}: {
  light?: boolean;
}) {

  const [isScrolled, setIsScrolled] = useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const navigate = useNavigate();

  useEffect(() => {

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  // Smooth scroll section
  const scrollToSection = (id: string) => {

    if (window.location.pathname === '/') {

      const element = document.getElementById(id);

      if (element) {

        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });

      }

    } else {

      navigate(`/#${id}`);

      setTimeout(() => {

        const element = document.getElementById(id);

        if (element) {

          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });

        }

      }, 200);

    }

    setIsMobileMenuOpen(false);

  };

  // Scroll top
  const scrollToTop = () => {

    if (window.location.pathname === '/') {

      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    } else {

      navigate('/');

      setTimeout(() => {

        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });

      }, 100);

    }

    setIsMobileMenuOpen(false);

  };

  const navLinkClass = `
    relative
    text-[15px]
    font-normal
    transition-all
    duration-300
    hover:text-[#24c2f2]
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[2px]
    after:w-0
    after:bg-[#24c2f2]
    after:transition-all
    after:duration-300
    hover:after:w-full
    cursor-pointer
  `;

  return (

    <nav
      className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-500
        ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-[#202851]/10 py-1'
            : 'bg-transparent py-6'
        }
      `}
    >

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between">

  {/* ================= LOGO ================= */}

  <button
    onClick={scrollToTop}
    className="group flex items-center gap-3   cursor-pointer"
  >
    {/* Logo */}

    <div
      className={`
        flex
        h-8
        w-8
        items-center
        justify-center
        overflow-hidden
         
         
        transition-all
        duration-300
        ${
          isScrolled
            ? "border-slate-200 bg-white shadow-lg"
            : "border-white/20 bg-white/10 backdrop-blur-md"
        }
        group-hover:scale-105
      `}
    >
      <img
        src={logo}
        alt="NSL Digital Lab"
         
      />
    </div>

    {/* Text */}

    <div className="text-left ps-4 border-l border-[#666666] pl-4">

      <h2 style={{ fontSize: '20px' }}
        className={`text-lg font-bold leading-none transition-all duration-300 ${
          isScrolled ? 'text-black' : 'text-white'
        }`}
      >
        NSL
        <span className="font-light ml-1 text-inherit">
         DIGITAL LAB
        </span>
      </h2>

      <p className="uppercase tracking-[3px] mt-1 text-[#24c2f2]" style={{ fontSize: '8px', letterSpacing: '1px' }}>
        <b className="bg-gradient-to-r from-[#24c2f2] via-[#2563eb] to-[#8b5cf6] bg-clip-text text-transparent">
          Design • Development • Growth
        </b>
      </p>

    </div>

  </button>

  {/* ================= NAVIGATION ================= */}
<button
  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
  className={`
    lg:hidden
    flex
    items-center
    justify-center
    w-12
    h-12
    rounded-2xl
    transition-all
    duration-300
    ${
      isScrolled
        ? "bg-white shadow-lg border border-slate-200 text-[#202851]"
        : "bg-white/10 backdrop-blur-xl border border-white/20 text-white"
    }
  `}
>
  {isMobileMenuOpen ? (
    <X className="w-6 h-6" />
  ) : (
    <Menu className="w-6 h-6" />
  )}
</button>
  <div className="hidden lg:flex items-center gap-5">

    <div
      className={`
        flex
        items-center
        gap-2
        rounded-full
        px-3
        py-2
        transition-all
        duration-500
        ${
          isScrolled
            ? "bg-white shadow-xl border border-slate-200"
            : "bg-white/10 backdrop-blur-xl border border-white/20"
        }
      `}
    >

      <button
        onClick={() => scrollToSection("services")}
        className={`
          px-5
          py-2.5
          rounded-full
          text-sm
          font-medium
          transition-all
          duration-300
          hover:bg-[#24c2f2]
          hover:text-white
          ${
            isScrolled
              ? "text-[#202851]"
              : "text-white"
          }
        `}
      >
        Services
      </button>

      <button
        onClick={() => scrollToSection("about")}
        className={`
          px-5
          py-2.5
          rounded-full
          text-sm
          font-medium
          transition-all
          duration-300
          hover:bg-[#24c2f2]
          hover:text-white
          ${
            isScrolled
              ? "text-[#202851]"
              : "text-white"
          }
        `}
      >
        About
      </button>

      <button
        onClick={() => scrollToSection("featured-work")}
        className={`
          px-5
          py-2.5
          rounded-full
          text-sm
          font-medium
          transition-all
          duration-300
          hover:bg-[#24c2f2]
          hover:text-white
          ${
            isScrolled
              ? "text-[#202851]"
              : "text-white"
          }
        `}
      >
        Portfolio
      </button>

      <Link
        to="/blog"
        className={`
          px-5
          py-2.5
          rounded-full
          text-sm
          font-medium
          transition-all
          duration-300
          hover:bg-[#24c2f2]
          hover:text-white
          ${
            isScrolled
              ? "text-[#202851]"
              : "text-white"
          }
        `}
      >
        Blog
      </Link>

    </div>

    {/* CTA */}

    <Link
      to="/careers"
      className="
        relative
        overflow-hidden
        rounded-full
        px-8
        py-3
        bg-gradient-to-r
        from-[#24c2f2]
        to-[#2563eb]
        text-white
        font-semibold
        shadow-lg
        hover:-translate-y-1
        hover:shadow-2xl
        transition-all
        duration-300
      "
    >
    Career
    </Link>

  </div>

</div>

      </div>

      {/* MOBILE MENU */}

      {/* =======================
    PREMIUM MOBILE MENU
======================= */}

<div
  className={`
    lg:hidden
    overflow-hidden
    transition-all
    duration-500
    ease-in-out
    ${
      isMobileMenuOpen
        ? "max-h-[700px] opacity-100 mt-4"
        : "max-h-0 opacity-0"
    }
  `}
>
  <div
    className="
      rounded-3xl
      bg-white/90
      backdrop-blur-2xl
      border
      border-slate-200
      shadow-2xl
      overflow-hidden
    "
  >
    <div className="px-6 py-6">

      {/* Navigation */}

      <div className="space-y-2">

        <button
          onClick={() => scrollToSection("services")}
          className="
            group
            flex
            items-center
            justify-between
            w-full
            px-5
            py-4
            rounded-2xl
            text-[#202851]
            hover:bg-[#24c2f2]
            hover:text-white
            transition-all
            duration-300
          "
        >
          <span className="font-medium">⚡ Services</span>

          <span className="opacity-40 group-hover:opacity-100">
            →
          </span>
        </button>

        <button
          onClick={() => scrollToSection("about")}
          className="
            group
            flex
            items-center
            justify-between
            w-full
            px-5
            py-4
            rounded-2xl
            text-[#202851]
            hover:bg-[#24c2f2]
            hover:text-white
            transition-all
            duration-300
          "
        >
          <span className="font-medium">👋 About</span>

          <span className="opacity-40 group-hover:opacity-100">
            →
          </span>
        </button>

        <button
          onClick={() => scrollToSection("featured-work")}
          className="
            group
            flex
            items-center
            justify-between
            w-full
            px-5
            py-4
            rounded-2xl
            text-[#202851]
            hover:bg-[#24c2f2]
            hover:text-white
            transition-all
            duration-300
          "
        >
          <span className="font-medium">🎨 Portfolio</span>

          <span className="opacity-40 group-hover:opacity-100">
            →
          </span>
        </button>

        <Link
          to="/blog"
          onClick={() => {

            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });

            setIsMobileMenuOpen(false);

          }}
          className="
            group
            flex
            items-center
            justify-between
            px-5
            py-4
            rounded-2xl
            text-[#202851]
            hover:bg-[#24c2f2]
            hover:text-white
            transition-all
            duration-300
          "
        >
          <span className="font-medium">📰 Blog</span>

          <span className="opacity-40 group-hover:opacity-100">
            →
          </span>
        </Link>

      </div>

      {/* Divider */}

      <div className="my-6 border-t border-slate-200"></div>

      {/* CTA */}

      <Link
        to="/careers"
        onClick={() => {

          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });

          setIsMobileMenuOpen(false);

        }}
        className="
          flex
          items-center
          justify-center
          gap-2
          w-full
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-[#24c2f2]
          to-[#2563eb]
          text-white
          font-semibold
          shadow-lg
          hover:shadow-2xl
          hover:-translate-y-1
          transition-all
          duration-300
        "
      >
      Career
      </Link>

      {/* Bottom */}

      <p className="text-center text-xs text-slate-500 mt-5">
        Design • Development • Growth
      </p>

    </div>
  </div>
</div>
    </nav>

  );

}