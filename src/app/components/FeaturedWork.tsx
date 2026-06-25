import { ArrowUpRight, Globe, Search, LayoutDashboard } from "lucide-react";
import { Link } from "react-router-dom";

import {
  
  MonitorSmartphone,
  Palette,
  ArrowRight,
} from "lucide-react";
export default function FeaturedWork() {
  return (
  <section
  id="featured-work"
  className="py-24 bg-white"
>
  <div className="max-w-7xl mx-auto px-6">

    {/* Heading */}

    <div className="text-center max-w-3xl mx-auto mb-16">

      <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">

        Featured Projects

      </span>

      <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#202851]">

        Digital Solutions
        <br />
        Built For Modern Brands

      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">

        Explore some of the digital experiences, websites,
        SEO strategies and UI/UX solutions we've designed
        to help businesses grow online.

      </p>

    </div>

    {/* Projects */}

    <div className="grid lg:grid-cols-3 gap-8">

      {/* CARD 1 */}

      <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300">

        <div className="relative h-56 bg-gradient-to-br from-[#202851] via-[#24356d] to-[#24c2f2] flex items-center justify-center">

          <Globe className="w-16 h-16 text-white" />

        </div>

        <div className="p-8">

          <span className="text-cyan-600 font-semibold text-sm">

            Website Design

          </span>

          <h3 className="mt-3 text-2xl font-bold text-[#202851]">

            Agency Website

          </h3>

          <p className="mt-4 text-slate-600 leading-7">

            Modern responsive business website focused on
            branding, SEO and lead generation.

          </p>

          <div className="mt-6 flex flex-wrap gap-2">

            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">

              React

            </span>

            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">

              Tailwind

            </span>

            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">

              SEO

            </span>

          </div>

        </div>

      </div>

      {/* CARD 2 */}

      <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">

        <div className="h-56 bg-gradient-to-br from-[#202851] via-[#24356d] to-[#24c2f2] flex items-center justify-center">

          <LayoutDashboard className="w-16 h-16 text-white" />

        </div>

        <div className="p-8">

          <span className="text-cyan-600 font-semibold text-sm">

            UI/UX Design

          </span>

          <h3 className="mt-3 text-2xl font-bold text-[#202851]">

            Dashboard Experience

          </h3>

          <p className="mt-4 text-slate-600 leading-7">

            Clean dashboard interface designed with
            accessibility, usability and performance in mind.

          </p>

          <div className="mt-6 flex flex-wrap gap-2">

            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">

              Figma

            </span>

            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">

              UX

            </span>

            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">

              Prototype

            </span>

          </div>

        </div>

      </div>

      {/* CARD 3 */}

      <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">

        <div className="h-56 bg-gradient-to-br from-[#202851] via-[#24356d] to-[#24c2f2] flex items-center justify-center">

          <Search className="w-16 h-16 text-white" />

        </div>

        <div className="p-8">

          <span className="text-cyan-600 font-semibold text-sm">

            SEO Strategy

          </span>

          <h3 className="mt-3 text-2xl font-bold text-[#202851]">

            SEO Blog Architecture

          </h3>

          <p className="mt-4 text-slate-600 leading-7">

            Optimized content structure built for scalable
            organic traffic and long-term growth.

          </p>

          <div className="mt-6 flex flex-wrap gap-2">

            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">

              SEO

            </span>

            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">

              Content

            </span>

            <span className="px-3 py-1 rounded-full bg-slate-100 text-sm">

              Analytics

            </span>

          </div>

        </div>

      </div>

    </div>

    {/* Second Row */}

    <div className="grid lg:grid-cols-2 gap-8 mt-8">

      {/* CARD 4 */}

      <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">

        <div className="h-56 bg-gradient-to-br from-[#202851] via-[#24356d] to-[#24c2f2] flex items-center justify-center">

          <MonitorSmartphone className="w-16 h-16 text-white" />

        </div>

        <div className="p-8">

          <span className="text-cyan-600 font-semibold text-sm">

            Landing Pages

          </span>

          <h3 className="mt-3 text-2xl font-bold text-[#202851]">

            High Converting Landing Pages

          </h3>

          <p className="mt-4 text-slate-600 leading-7">

            Optimized landing pages designed to increase
            conversions, engagement and campaign performance.

          </p>

        </div>

      </div>

      {/* CARD 5 */}

      <div className="group rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all">

        <div className="h-56 bg-gradient-to-br from-[#202851] via-[#24356d] to-[#24c2f2] flex items-center justify-center">

          <Palette className="w-16 h-16 text-white" />

        </div>

        <div className="p-8">

          <span className="text-cyan-600 font-semibold text-sm">

            Branding

          </span>

          <h3 className="mt-3 text-2xl font-bold text-[#202851]">

            Digital Brand Identity

          </h3>

          <p className="mt-4 text-slate-600 leading-7">

            Creating consistent visual identity and engaging
            digital experiences that strengthen your brand.

          </p>

        </div>

      </div>

    </div>

    {/* CTA */}

    <div className="text-center mt-16">

      <p className="text-slate-600 mb-6">

        Interested in seeing more of our work?

      </p>

      <Link
        to="/services"
        className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white hover:scale-105 transition-all"
      >
        Explore Our Services
        <ArrowRight className="w-5 h-5" />
      </Link>

    </div>

  </div>
</section>
  );
}