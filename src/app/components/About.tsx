import {
  Users,
  Award,
  Rocket,
  CheckCircle,
  TrendingUp,
} from "lucide-react";
import { Link } from "react-router-dom";
export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT */}

          <div>

            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-700">

              Why Choose NSL

            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight text-[#202851]">

              We Build Digital
              Experiences That
              Deliver Results.

            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">

              At NSL Digital Lab, we combine strategy, design,
              development and digital marketing to help
              businesses attract more customers, improve user
              experience and achieve sustainable online growth.

            </p>

            <div className="mt-10 space-y-5">

              {[
                "User-focused UI/UX Design",
                "SEO & Performance Optimization",
                "Modern Responsive Websites",
                "Transparent Communication",
                "Growth-focused Digital Strategy",
              ].map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-4"
                >

                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-100">

                    <CheckCircle className="h-5 w-5 text-cyan-600" />

                  </div>

                  <span className="text-slate-700">

                    {item}

                  </span>

                </div>

              ))}

            </div>

            <Link
              to="/services"
              className="
            mt-10
            inline-flex
            items-center
            gap-3
            rounded-xl
            bg-gradient-to-r
            from-violet-600
            to-cyan-500
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:scale-105
          "
            >

              View Our Services →

            </Link>

          </div>

          {/* RIGHT */}

          <div className="grid grid-cols-2 gap-6">

            {[
              {
                number: "25+",
                label: "Projects Delivered",
                icon: Rocket,
              },
              {
                number: "10+",
                label: "Happy Clients",
                icon: Users,
              },
              {
                number: "5+",
                label: "Years Experience",
                icon: Award,
              },
              {
                number: "95%",
                label: "Client Satisfaction",
                icon: TrendingUp,
              },
            ].map((item) => {

              const Icon = item.icon;

              return (

                <div
                  key={item.label}
                  className="
                group
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                text-center
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-cyan-300
                hover:shadow-2xl
              "
                >

                  <div className="
                mx-auto
                flex
                h-16
                w-16
                items-center
                justify-center
                rounded-2xl
                bg-cyan-50
                group-hover:bg-gradient-to-r
                group-hover:from-cyan-500
                group-hover:to-sky-500
              ">

                    <Icon className="h-8 w-8 text-cyan-500 group-hover:text-white" />

                  </div>

                  <h3 className="mt-6 text-4xl font-bold text-[#202851]">

                    {item.number}

                  </h3>

                  <p className="mt-3 text-slate-600">

                    {item.label}

                  </p>

                </div>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}