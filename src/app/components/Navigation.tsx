'use client';

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

import logo from  "../../assets/images/nexify_n_logo.png"

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

          {/* LOGO */}

          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 group cursor-pointer"
          >

            <div className="w-14 h-14 flex items-center justify-center">

              <img
                src={logo}
                alt="NSL Digital Lab Logo"
                className="w-full h-full object-contain"
              />

            </div>

            <div className="flex flex-col leading-none text-left">

              <span
                className={`
                  text-[18px]
                  sm:text-[20px]
                  font-bold
                  transition-colors
                  duration-300 
                  ${
                    isScrolled
                      ? 'text-[#202851]'
                      : 'text-white'
                  }
                `}
              >

                NSL

                <span 
                  className={`
                    font-normal
                    transition-colors
                    duration-300
                    f 
                    ${
                      isScrolled
                        ? 'text-gray-500'
                        : 'text-gray-300'
                    }
                  `}
                  style={{ fontSize: '18px', fontWeight: 'lighter' }}
                >
                  &nbsp;Media
                </span>

              </span>

              <span className="text-[10px] uppercase  text-[#24c2f2] mt-1">

               Design • Development • Growth

              </span>

            </div>

          </button>

          {/* DESKTOP MENU */}

          <div className="hidden lg:flex items-center gap-10">

            {/* SERVICES */}

            <button
              onClick={() =>
                scrollToSection('services')
              }
              className={`${navLinkClass} ${
                isScrolled
                  ? 'text-[#202851]'
                  : 'text-white'
              }`}
            >
              Services
            </button>

            {/* ABOUT */}

            <button
              onClick={() =>
                scrollToSection('about')
              }
              className={`${navLinkClass} ${
                isScrolled
                  ? 'text-[#202851]'
                  : 'text-white'
              }`}
            >
              About
            </button>

            {/* FEATURED WORK */}

            <button
              onClick={() =>
                scrollToSection('featured-work')
              }
              className={`${navLinkClass} ${
                isScrolled
                  ? 'text-[#202851]'
                  : 'text-white'
              }`}
            >
              Featured Work
            </button>

            {/* BLOG */}

            <Link
              to="/blog"
              onClick={() => {

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });

                setIsMobileMenuOpen(false);

              }}
              className={`${navLinkClass} ${
                isScrolled
                  ? 'text-[#202851]'
                  : 'text-white'
              }`}
            >
              Blog
            </Link>

            {/* CAREERS */}

            <Link
              to="/careers"
              onClick={() => {

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });

                setIsMobileMenuOpen(false);

              }}
              className="
                group
                relative
                inline-flex
                items-center
                justify-center
                px-7
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-[#24c2f2]
                via-[#1da1f2]
                to-[#1d4ed8]
                text-white
                text-sm
                font-semibold
                shadow-[0_8px_30px_rgba(36,194,242,0.18)]
                hover:shadow-[0_16px_50px_rgba(36,194,242,0.28)]
                hover:-translate-y-[2px]
                transition-all
                duration-300
                overflow-hidden
              "
            >
              Careers
            </Link>

          </div>

          {/* MOBILE BUTTON */}

          <button
            onClick={() =>
              setIsMobileMenuOpen(
                !isMobileMenuOpen
              )
            }
            className={`
              lg:hidden
              p-2
              rounded-xl
              transition-all
              duration-300
              ${
                isScrolled
                  ? 'text-[#202851] hover:bg-[#202851]/5'
                  : 'text-white hover:bg-white/10'
              }
            `}
          >

            {isMobileMenuOpen ? (
              <X className="w-7 h-7" />
            ) : (
              <Menu className="w-7 h-7" />
            )}

          </button>

        </div>

      </div>

      {/* MOBILE MENU */}

      <div
        className={`
          lg:hidden
          overflow-hidden
          transition-all
          duration-500
          ease-in-out
          ${
            isMobileMenuOpen
              ? 'max-h-[600px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >

        <div className="bg-white/90 backdrop-blur-xl border-t border-[#202851]/10 shadow-2xl">

          <div className="container mx-auto px-6 py-5 space-y-3">

            {/* SERVICES */}

            <button
              onClick={() =>
                scrollToSection('services')
              }
              className="
                block
                w-full
                text-left
                px-4
                py-3
                text-[#202851]
                rounded-xl
                hover:bg-[#f4f9ff]
                hover:text-[#24c2f2]
                transition-all
                duration-300
              "
            >
              Services
            </button>

            {/* ABOUT */}

            <button
              onClick={() =>
                scrollToSection('about')
              }
              className="
                block
                w-full
                text-left
                px-4
                py-3
                text-[#202851]
                rounded-xl
                hover:bg-[#f4f9ff]
                hover:text-[#24c2f2]
                transition-all
                duration-300
              "
            >
              About
            </button>

            {/* FEATURED WORK */}

            <button
              onClick={() =>
                scrollToSection('featured-work')
              }
              className="
                block
                w-full
                text-left
                px-4
                py-3
                text-[#202851]
                rounded-xl
                hover:bg-[#f4f9ff]
                hover:text-[#24c2f2]
                transition-all
                duration-300
              "
            >
              Featured Work
            </button>

            {/* BLOG */}

            <Link
              to="/blog"
              onClick={() => {

                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });

                setIsMobileMenuOpen(false);

              }}
              className="
                block
                px-4
                py-3
                text-[#202851]
                rounded-xl
                hover:bg-[#f4f9ff]
                hover:text-[#24c2f2]
                transition-all
                duration-300
              "
            >
              Blog
            </Link>

            {/* CAREERS */}

            <div className="flex justify-center pt-4">

              <Link
                to="/careers"
                onClick={() => {

                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });

                  setIsMobileMenuOpen(false);

                }}
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-8
                  py-3
                  bg-gradient-to-r
                  from-[#24c2f2]
                  to-[#202851]
                  text-white
                  rounded-full
                  shadow-lg
                  hover:scale-105
                  hover:shadow-2xl
                  transition-all
                  duration-300
                "
              >
                Careers
              </Link>

            </div>

          </div>

        </div>

      </div>

    </nav>

  );

}