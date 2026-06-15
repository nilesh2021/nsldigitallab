import { ArrowUpRight, Globe, Search, LayoutDashboard } from "lucide-react";

export default function FeaturedWork() {
  return (
    <section id="featured-work" className="py-24 sm:py-18 lg:py-24 px-4 sm:px-6 bg-[#f8fafc]">
      <div className="container mx-auto px-6">

        {/* SECTION HEADER */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-[#202851]/10 text-[#202851] text-sm mb-5">
            Featured Work
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-[#202851] mb-6 leading-tight">
            Digital Solutions Built For Modern Brands
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            A selection of digital experiences, website designs, and
            growth-focused solutions crafted to help businesses strengthen
            their online presence.
          </p>
        </div>

        {/* WORK CARDS */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* CARD 1 */}

          <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">

            <div className="h-52 bg-gradient-to-br from-[#202851] to-[#2a3561] flex items-center justify-center">
              <Globe className="w-16 h-16 text-[#24c2f2]" />
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#24c2f2] font-medium">
                  Website Design
                </span>

                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#202851] transition" />
              </div>

              <h3 className="text-2xl font-semibold text-[#202851] mb-4">
                Agency Website Experience
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Modern React-based business website focused on branding,
                responsiveness, and conversion-focused user experience.
              </p>
            </div>
          </div>

          {/* CARD 2 */}

          <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">

            <div className="h-52 bg-gradient-to-br from-[#202851] to-[#2a3561] flex items-center justify-center">
              <Search className="w-16 h-16 text-[#24c2f2]" />
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#24c2f2] font-medium">
                  SEO & Content
                </span>

                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#202851] transition" />
              </div>

              <h3 className="text-2xl font-semibold text-[#202851] mb-4">
                SEO Blog Architecture
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Structured blog setup optimized for content marketing,
                search visibility, and scalable organic growth.
              </p>
            </div>
          </div>

          {/* CARD 3 */}

          <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:-translate-y-2">

            <div className="h-52 bg-gradient-to-br from-[#202851] to-[#2a3561] flex items-center justify-center">
              <LayoutDashboard className="w-16 h-16 text-[#24c2f2]" />
            </div>

            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm text-[#24c2f2] font-medium">
                  UI/UX Design
                </span>

                <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-[#202851] transition" />
              </div>

              <h3 className="text-2xl font-semibold text-[#202851] mb-4">
                Landing Page Optimization
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Clean and engaging landing page layouts designed to improve
                user engagement and campaign performance.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}