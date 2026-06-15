import {
  Users,
  Award,
  Rocket,
  CheckCircle,
  TrendingUp,
} from "lucide-react";

export default function About() {
  return (
   <section
  id="about"
  className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white overflow-hidden"
>
  <div className="container mx-auto px-4 sm:px-6">
    <div className="grid lg:grid-cols-2 gap-14 items-center">

      {/* LEFT CONTENT */}

      <div>
        <span className="inline-block px-4 py-2 rounded-full bg-[#202851]/10 text-[#202851] text-sm mb-5">
          About
        </span>

        <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-[#202851] leading-tight">
          Helping Brands Grow Digitally
        </h2>

        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
          NSL Digital Lab is a digital marketing and web solutions agency
          focused on helping businesses build a stronger online presence.
          We combine modern design, SEO strategies, content marketing,
          and performance-driven solutions to help brands grow with confidence.
        </p>

        <div className="space-y-4 mb-10">
          {[
            "SEO & Performance-Focused Strategies",
            "Modern Website Design & Development",
            "Transparent Communication & Reporting",
            "Customized Solutions for Business Growth",
          ].map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-[#24c2f2] flex-shrink-0 mt-0.5" />

              <span className="text-gray-700 text-base leading-relaxed">
                {item}
              </span>
            </div>
          ))}
        </div>

        <button
          onClick={() => {
            document.getElementById("services")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
          className="
            px-8
py-4
bg-[#202851]
text-white
rounded-full
font-medium
hover:bg-[#28346a]
hover:scale-105
transition-all
duration-300
shadow-md
hover:shadow-xl
          "
        >
          Explore Our Services
        </button>
      </div>

      {/* RIGHT CARDS */}

      <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 lg:mt-0">
        {[
          {
            icon: Users,
            number: "10+",
            label: "Business Clients",
          },
          {
            icon: Award,
            number: "1+",
            label: "Years Experience",
          },
          {
            icon: Rocket,
            number: "25+",
            label: "Projects Delivered",
          },
          {
            icon: TrendingUp,
            number: "90%",
            label: "Client Satisfaction",
          },
        ].map((stat, index) => (
          <div
            key={index}
            className="
              bg-gradient-to-br
              from-[#202851]
              to-[#2a3561]
              p-5
              sm:p-7
              rounded-2xl
              text-white
              text-center
              shadow-md
              hover:-translate-y-1
              transition-all
              duration-300
              min-h-[190px]
              sm:min-h-[220px]
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 text-[#24c2f2]" />

            <div className="text-2xl sm:text-3xl font-bold mb-2">
              {stat.number}
            </div>

            <div className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

    </div>
  </div>
</section>
  );
}