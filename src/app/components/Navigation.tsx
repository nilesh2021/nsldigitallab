'use client';

import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ArrowUpRight, Menu, X } from 'lucide-react';

import logo from '../../assets/images/Nsl-digital-lab.png';

const navItems = [
  { label: 'Services', hint: 'What we build', type: 'section' as const, target: 'services' },
  { label: 'About', hint: 'The studio', type: 'section' as const, target: 'about' },
  { label: 'Portfolio', hint: 'Selected work', type: 'section' as const, target: 'featured-work' },
  { label: 'Blog', hint: 'Notes & guides', type: 'page' as const, target: '/blog' },
  { label: 'Contact', hint: 'Start a project', type: 'section' as const, target: 'contact' },
];

const sectionIds = navItems
  .filter((item) => item.type === 'section')
  .map((item) => item.target);

export default function Navigation({
  light = false,
}: {
  light?: boolean;
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (!isMobileMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const closeOnDesktop = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeOnDesktop);
    return () => window.removeEventListener('resize', closeOnDesktop);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname !== '/') {
      return;
    }

    const observers: IntersectionObserver[] = [];

    ['home', ...sectionIds].forEach((id) => {
      const element = document.getElementById(id);

      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        {
          rootMargin: '-28% 0px -58% 0px',
          threshold: 0,
        },
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [location.pathname]);

  const scrollToSection = (id: string) => {
    if (window.location.pathname === '/') {
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
        setActiveId(id);
      }
    } else {
      navigate(`/#${id}`);
    }

    setIsMobileMenuOpen(false);
  };

  const scrollToTop = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
      setActiveId('home');
    } else {
      navigate('/');
    }

    setIsMobileMenuOpen(false);
  };

  const goToPage = (path: string) => {
    navigate(path);
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setIsMobileMenuOpen(false);
  };

  const handleNavItem = (item: (typeof navItems)[number]) => {
    if (item.type === 'section') {
      scrollToSection(item.target);
      return;
    }

    goToPage(item.target);
  };

  const isItemActive = (item: (typeof navItems)[number]) => {
    if (item.type === 'page') {
      return location.pathname === item.target || location.pathname.startsWith(`${item.target}/`);
    }

    if (location.pathname !== '/') {
      return false;
    }

    return activeId === item.target;
  };

  const isCareersActive =
    location.pathname === '/careers' || location.pathname.startsWith('/careers/');

  const isSolid = light || isScrolled;

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-16 sm:h-24 transition-opacity duration-500 ${
          isSolid ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background:
            'linear-gradient(180deg, rgba(6,11,20,0.92) 0%, rgba(6,11,20,0.55) 55%, transparent 100%)',
        }}
      />

      <nav className="relative z-[60] mx-auto max-w-7xl px-3 pt-2 sm:px-6 sm:pt-3 lg:px-8">
        <div
          className={`
            flex items-center justify-between gap-2 rounded-xl border px-2 py-1
            transition-all duration-500 sm:gap-3 sm:rounded-2xl sm:px-3.5 sm:py-2
            ${
              isSolid
                ? 'border-white/[0.08] bg-[#0a101c]/80 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.85)] backdrop-blur-xl'
                : 'border-white/[0.06] bg-white/[0.03] backdrop-blur-md'
            }
          `}
        >
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex min-w-0 cursor-pointer items-center gap-2 rounded-lg px-0.5 py-0 text-left sm:gap-3 sm:rounded-xl sm:px-1 sm:py-0.5"
            aria-label="NSL Digital Lab home"
          >
            <div className="relative flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] sm:h-10 sm:w-10 sm:rounded-xl">
              <span className="absolute inset-0 bg-gradient-to-br from-cyan-400/15 to-violet-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <img src={logo} alt="" className="h-5 w-5 object-contain sm:h-7 sm:w-7" />
            </div>

            <div className="min-w-0">
              <p className="truncate text-[13px] font-semibold leading-none tracking-tight text-white sm:text-base">
                NSL
                <span className="ml-1 font-light text-slate-300 sm:ml-1.5">Digital Lab</span>
              </p>
              <p className="mt-1 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-slate-500 sm:block">
                Design · Development · Growth
              </p>
            </div>
          </button>

          <div className="hidden rounded-full border border-white/[0.06] bg-white/[0.03] p-1 md:flex">
            {navItems.map((item) => {
              const active = isItemActive(item);

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavItem(item)}
                  aria-current={active ? 'page' : undefined}
                  className={`relative cursor-pointer rounded-full px-2.5 py-1.5 text-[12px] font-medium transition-colors duration-200 lg:px-3.5 lg:text-[13px] ${
                    active
                      ? 'bg-white/[0.08] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute inset-x-4 -bottom-[1px] h-px bg-gradient-to-r from-cyan-400/0 via-cyan-300 to-violet-400/0" />
                  )}
                </button>
              );
            })}
          </div>

          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={() => goToPage('/careers')}
              aria-current={isCareersActive ? 'page' : undefined}
              className={`hidden cursor-pointer items-center rounded-full px-3 py-2 text-[13px] font-medium transition-colors duration-200 lg:inline-flex ${
                isCareersActive ? 'text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Careers
            </button>

            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="hidden cursor-pointer items-center gap-1.5 rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-[#060b14] shadow-[0_0_0_1px_rgba(255,255,255,0.08)] transition-all duration-200 hover:-translate-y-px hover:bg-slate-100 md:inline-flex"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>

            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((open) => !open)}
              className="inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-white transition-colors duration-200 hover:bg-white/[0.08] md:hidden"
              aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-nav"
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" strokeWidth={1.75} />
              ) : (
                <Menu className="h-4 w-4" strokeWidth={1.75} />
              )}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-nav"
        aria-hidden={!isMobileMenuOpen}
        inert={!isMobileMenuOpen}
        className={`relative z-[55] md:hidden ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          className={`fixed inset-0 z-40 bg-[#060b14]/70 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <div
          className={`
            relative z-50 mx-3 mt-1.5 overflow-hidden rounded-xl border border-white/[0.08] bg-[#0c1424]/95 shadow-2xl backdrop-blur-xl
            transition-all duration-300
            ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-2 opacity-0'}
          `}
        >
          <div className="flex flex-col p-1.5">
            {navItems.map((item) => {
              const active = isItemActive(item);

              return (
                <button
                  key={item.label}
                  type="button"
                  onClick={() => handleNavItem(item)}
                  aria-current={active ? 'page' : undefined}
                  className={`flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-2 text-left transition-colors duration-200 ${
                    active ? 'bg-white/[0.06]' : 'hover:bg-white/[0.04]'
                  }`}
                >
                  <span className={`text-[14px] font-medium ${active ? 'text-white' : 'text-slate-200'}`}>
                    {item.label}
                  </span>
                  <span className="text-[11px] text-slate-500">{item.hint}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-2 gap-1.5 border-t border-white/[0.06] p-2">
            <button
              type="button"
              onClick={() => goToPage('/careers')}
              className="cursor-pointer rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[12px] font-medium text-slate-200"
            >
              Careers
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="inline-flex cursor-pointer items-center justify-center gap-1 rounded-lg bg-white px-3 py-2 text-[12px] font-semibold text-[#060b14]"
            >
              Let&apos;s talk
              <ArrowUpRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
