import { Search, Target, TrendingUp, Megaphone, BarChart3, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
const services = [
  {
    icon: Search,
    title: "SEO Growth",
    description: "Boost your organic visibility and rank higher on search engines with our proven SEO strategies."
  },
  {
    icon: Megaphone,
    title: "Social Media Marketing",
    description: "Engage your audience across all platforms with compelling content and targeted campaigns."
  },
  {
    icon: Target,
    title: "PPC Advertising",
    description: "Maximize ROI with data-driven paid advertising campaigns on Google, Facebook, and more."
  },
  {
    icon: TrendingUp,
    title: "Content Marketing",
    description: "Create valuable content that attracts, engages, and converts your target audience."
  },
  {
    icon: BarChart3,
    title: "Analytics & Reporting",
    description: "Make informed decisions with comprehensive analytics and transparent reporting."
  },
  {
    icon: Mail,
    title: "Email Marketing",
    description: "Nurture leads and drive conversions with personalized email marketing campaigns."
  }
];

export default function Services() {
  return (
      <section
  id="services"
  className="py-16 px-4 sm:px-6 bg-slate-50"
>
  <div className="container mx-auto max-w-7xl">

    {/* Heading */}

    <div className="text-center mb-10">

      <span className="inline-flex items-center rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">

        Our Expertise

      </span>

      <h2 className="mt-4 text-3xl md:text-4xl font-bold text-[#202851]">

        Digital Solutions That
        <br />
        Help Your Business Grow

      </h2>

      <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg leading-7 text-slate-600">

        From UI/UX design and modern websites to SEO and digital marketing,
        we build scalable digital experiences that attract visitors,
        generate leads, and grow businesses.

      </p>

    </div>

    {/* Cards */}

    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

      {services.map((service, index) => (

        <div
          key={index}
          className="
            group
            relative
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-5
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-1
            hover:border-cyan-300
            hover:shadow-2xl
          "
        >

          {/* Icon */}

          <div
            className="
              mb-4
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-2xl
              bg-cyan-50
              transition-all
              duration-300
              group-hover:bg-gradient-to-r
              group-hover:from-cyan-500
              group-hover:to-sky-500
            "
          >

            <service.icon className="h-5 w-5 text-cyan-500 group-hover:text-white" />

          </div>

          {/* Title */}

          <h2 className="font-bold text-[#202851]">

            {service.title}

          </h2>

          {/* Description */}

          <p className="mt-3 text-sm leading-6 text-slate-600">

            {service.description}

          </p>

          {/* Link */}

          <div
            className="
              mt-5
              flex
              items-center
              gap-2
              font-semibold
              text-cyan-600
              opacity-0
              transition-all
              duration-300
              group-hover:opacity-100
            "
          >

            Learn More

            <span className="transition-transform group-hover:translate-x-1">
              →
            </span>

          </div>

        </div>

      ))}

    </div>

    {/* Bottom CTA */}

    <div className="mt-10 text-center">

      <p className="mb-4 text-slate-600">

        Looking for a complete overview of our services?

      </p>

      <Link
        to="/services"
        className="
          inline-flex
          items-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-violet-600
          to-cyan-500
          px-7
          py-3
          font-semibold
          text-white
          transition-all
          duration-300
          hover:scale-105
          hover:shadow-xl
        "
      >
        View All Services →
      </Link>

    </div>

  </div>
</section>
  );
}
