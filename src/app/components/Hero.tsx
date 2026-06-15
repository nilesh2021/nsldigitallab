import { ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from "react-router-dom";

export default function Hero() {

  const navigate = useNavigate();

  const scrollToInternship = () => {

    const element = document.getElementById('internship-program');

    if (element) {

      const navbarOffset = 100;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const scrollToServices = () => {

    const element = document.getElementById('services');

    if (element) {

      const navbarOffset = 100;

      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;

      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
<section
  className="
    relative
    min-h-screen
    overflow-hidden
    bg-[#050816]
    flex
    items-center
    pt-32
    pb-20
  "
>
  {/* Background Grid */}

  <div
    className="
      absolute
      inset-0
      bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),
      linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
      bg-[size:60px_60px]
    "
  />

  {/* Purple Glow */}

  <div
    className="
      absolute
      top-[-200px]
      left-[-150px]
      w-[500px]
      h-[500px]
      bg-violet-600/20
      rounded-full
      blur-[140px]
    "
  />

  {/* Cyan Glow */}

  <div
    className="
      absolute
      bottom-[-200px]
      right-[-150px]
      w-[500px]
      h-[500px]
      bg-cyan-500/20
      rounded-full
      blur-[140px]
    "
  />

  {/* Content */}

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <div className="grid lg:grid-cols-2 gap-20 items-center">

      {/* Left Content */}

      <div>

        {/* Badge */}

        <div
          className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            text-violet-300
            text-sm
            font-medium
            mb-8
          "
        >
          ✦ NSL Digital Lab
        </div>

        {/* Heading */}

        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            tracking-tight
            text-white
          "
        >
          Design.
          <br />

          <span
            className="
              bg-gradient-to-r
              from-violet-400
              via-purple-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            Develop.
          </span>

          <br />

          Scale.
        </h1>

        {/* Description */}

        <p
          className="
            mt-8
            text-xl
            text-slate-400
            max-w-xl
            leading-relaxed
          "
        >
          We help startups and businesses create
          modern websites, web applications,
          and digital experiences that users love.
        </p>

        {/* Buttons */}

        <div className="mt-10 flex flex-wrap gap-4">

          <button
            className="
              px-8
              py-4
              rounded-xl
              bg-gradient-to-r
              from-violet-600
              to-cyan-500
              text-white
              font-semibold
              hover:scale-105
              transition-all
              duration-300
            "
          >
            Start Project
          </button>

          <button
            className="
              px-8
              py-4
              rounded-xl
              border
              border-white/10
              bg-white/5
              backdrop-blur-md
              text-white
              font-semibold
              hover:bg-white/10
              transition-all
            "
          >
            View Portfolio
          </button>

        </div>

        {/* Stats */}

        <div className="mt-16 grid grid-cols-3 gap-8">

          <div>
            <h3 className="text-3xl font-bold text-white">
              25+
            </h3>

            <p className="text-slate-500 mt-1">
              Projects
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              5+
            </h3>

            <p className="text-slate-500 mt-1">
              Years
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-white">
              100%
            </h3>

            <p className="text-slate-500 mt-1">
              Responsive
            </p>
          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="relative">

        {/* Main Card */}

        <div
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            p-8
            shadow-2xl
          "
        >

          {/* Browser Top */}

          <div className="flex gap-2 mb-8">

            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />

          </div>

          {/* Dashboard */}

          <div className="space-y-5">

            <div className="h-12 bg-white/10 rounded-xl" />

            <div className="grid grid-cols-3 gap-4">

              <div className="h-24 rounded-xl bg-violet-500/20 border border-violet-500/20" />

              <div className="h-24 rounded-xl bg-cyan-500/20 border border-cyan-500/20" />

              <div className="h-24 rounded-xl bg-purple-500/20 border border-purple-500/20" />

            </div>

            <div className="h-40 rounded-xl bg-white/5 border border-white/10" />

            <div className="grid grid-cols-2 gap-4">

              <div className="h-24 rounded-xl bg-white/5 border border-white/10" />

              <div className="h-24 rounded-xl bg-white/5 border border-white/10" />

            </div>

          </div>

        </div>

        {/* Floating Card */}

        <div
          className="
            absolute
            -top-6
            -right-6
            rounded-2xl
            bg-[#0B1023]
            border
            border-white/10
            px-6
            py-4
            shadow-xl
          "
        >
          <div className="text-sm text-slate-400">
            Project Success
          </div>

          <div
            className="
              text-3xl
              font-bold
              bg-gradient-to-r
              from-violet-400
              to-cyan-400
              bg-clip-text
              text-transparent
            "
          >
            +95%
          </div>
        </div>

      </div>

    </div>

  </div>
</section>
  );
}