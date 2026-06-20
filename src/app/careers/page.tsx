'use client';

import { motion } from 'framer-motion';
import {
  Briefcase,
  GraduationCap,
  Globe,
  Laptop,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';
import CareerForm from '../components/CareerForm';
import { PAGE_SEO } from '../../seo/pages';
import SEO from '../../seo/SEO';

const jobs = [
  {
    title: 'SEO Intern',
    type: 'Internship',
    location: 'Remote / Worldwide',
    description:
      'Learn on-page SEO, keyword research, blogging, and Google Search Console with live projects.',
  },
  {
    title: 'Digital Marketing Intern',
    type: 'Internship',
    location: 'Remote / Worldwide',
    description:
      'Work on social media marketing, ad campaigns, content creation, and growth strategies.',
  },
  {
    title: 'UI/UX Design Intern',
    type: 'Internship',
    location: 'Remote / Worldwide',
    description:
      'Design modern websites and mobile apps using Figma, wireframes, and user-centered design.',
  },
  {
    title: 'Content Writing Intern',
    type: 'Internship',
    location: 'Remote / Worldwide',
    description:
      'Create engaging content for websites, blogs, and social media platforms.',
  },
];

const benefits = [
  'Work on real client projects',
  'Internship certificate',
  'Letter of recommendation',
  'Flexible work environment',
  'Portfolio building experience',
  'Mentorship from industry professionals',
];

export default function CareersPage() {
  return (
    <>

    <SEO {...PAGE_SEO.careers} />
      <Navigation />
      <ScrollToTop />
      <main className="bg-[#0f172a] text-white min-h-screen overflow-hidden ">

        {/* Hero Section */}
        <section
          className="
    relative
    min-h-screen
    flex
    items-center
    justify-center
    overflow-hidden
    bg-[radial-gradient(circle_at_top_left,#143b63_0%,#111936_30%,#1a2150_60%,#091224_100%)]
    px-4
    sm:px-6
    pt-32
    pb-24
  "
        >
          {/* Background Effects */}

          <div className="absolute inset-0 overflow-hidden">

            {/* LEFT GLOW */}

            <div
              className="
        absolute
        -top-40
        -left-40
        w-[520px]
        h-[520px]
        bg-[#24c2f2]/8
        rounded-full
        blur-[150px]
      "
            />

            {/* CENTER PURPLE GLOW */}

            <div
              className="
        absolute
        top-[30%]
        left-1/2
        -translate-x-1/2
        w-[420px]
        h-[420px]
        bg-purple-500/10
        rounded-full
        blur-[130px]
      "
            />

            {/* RIGHT BLUE GLOW */}

            <div
              className="
        absolute
        bottom-0
        right-[-120px]
        w-[450px]
        h-[450px]
        bg-[#1d4ed8]/10
        rounded-full
        blur-[140px]
      "
            />

          </div>

          {/* Content */}

          <div className="relative z-10 max-w-6xl mx-auto text-center">

            {/* Badge */}

            <div
              className="
        inline-flex
        items-center
        gap-2
        px-5
        py-2
        rounded-full
        border
        border-[#24c2f2]/30
        bg-[#24c2f2]/10
        backdrop-blur-md
        text-[#24c2f2]
        text-sm
        mb-8
      "
            >
              ✧ Careers at nsldigitallab
            </div>

            {/* Heading */}

            <h1
              className="
        text-5xl
        sm:text-6xl
        lg:text-7xl
        font-bold
        leading-[1.05]
        tracking-tight
        text-white
        mb-8
      "
            >
              Launch Your Career In

              <span
                className="
          block
          mt-2
          bg-gradient-to-r
          from-[#24c2f2]
          via-[#38bdf8]
          to-[#60a5fa]
          bg-clip-text
          text-transparent
        "
              >
                Digital Marketing
              </span>
            </h1>

            {/* Description */}

            <p
              className="
        max-w-4xl
        mx-auto
        text-lg
        sm:text-xl
        text-gray-300
        leading-relaxed
        mb-14
      "
            >
              Join our creative digital team and gain hands-on experience in SEO,
              digital marketing, UI/UX design, and modern web development.
              Learn practical skills while working on real-world projects.
            </p>

            {/* CTA Buttons */}

            <div
              className="
        flex
        flex-col
        sm:flex-row
        items-center
        justify-center
        gap-5
      "
            >
              {/* Primary CTA */}

              <button
                onClick={() => {
                  document.getElementById("openings")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="
          group
          inline-flex
          items-center
          gap-3
          px-9
          py-4
          rounded-2xl
          bg-gradient-to-r
          from-[#24c2f2]
          via-[#1da1f2]
          to-[#2563eb]
          text-white
          font-semibold
          text-lg
          shadow-[0_10px_40px_rgba(36,194,242,0.18)]
          hover:shadow-[0_20px_60px_rgba(36,194,242,0.28)]
          hover:-translate-y-1
          transition-all
          duration-300
        "
              >
                View Open Roles

                <span className="group-hover:translate-x-1 transition-transform duration-300">
                  →
                </span>
              </button>

              {/* Secondary CTA */}

              <button
                onClick={() => {
                  document.getElementById("apply")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
                className="
          px-9
          py-4
          rounded-2xl
          border
          border-white/10
          bg-white/5
          backdrop-blur-md
          text-white
          font-semibold
          text-lg
          hover:bg-white/10
          hover:border-[#24c2f2]/30
          hover:-translate-y-1
          transition-all
          duration-300
        "
              >
                Apply Now
              </button>
            </div>

            {/* Stats */}

            <div
              className="
        mt-20
        grid
        grid-cols-2
        md:grid-cols-4
        gap-6
        max-w-5xl
        mx-auto
      "
            >
              {[
                {
                  number: "10+",
                  label: "Business Clients",
                },
                {
                  number: "25+",
                  label: "Projects Delivered",
                },
                {
                  number: "100%",
                  label: "Remote Learning",
                },
                {
                  number: "1+",
                  label: "Years Experience",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="
            bg-white/5
            backdrop-blur-md
            border
            border-white/10
            rounded-2xl
            p-6
            text-center
            hover:bg-white/10
            transition-all
            duration-300
          "
                >
                  <div className="text-3xl font-bold text-[#24c2f2] mb-2">
                    {item.number}
                  </div>

                  <div className="text-gray-300 text-sm">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}

            <div className="mt-24 flex justify-center">
              <div
                className="
          w-8
          h-14
          rounded-full
          border
          border-white/20
          flex
          justify-center
          p-2
        "
              >
                <div
                  className="
            w-2
            h-3
            rounded-full
            bg-[#24c2f2]
            animate-bounce
          "
                />
              </div>
            </div>

          </div>
        </section>

        {/* Why Join Us */}

        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">

            {/* Section Heading */}

            <div className="text-center mb-16">
              <div
                className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          border
          border-[#24c2f2]/20
          bg-[#24c2f2]/10
          backdrop-blur-md
          text-[#24c2f2]
          text-sm
          mb-5
        "
              >
                ✦ Why Join nsldigitallab
              </div>

              <h2
                className="
          text-4xl
          sm:text-5xl
          font-bold
          text-white
          leading-tight
        "
              >
                Learn, Build & Grow With Us
              </h2>

              <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
                Gain real-world experience, improve your digital skills,
                and work on impactful projects in a collaborative environment.
              </p>
            </div>

            {/* Cards */}

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

              {/* Card 1 */}

              <div
                className="
          group
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          hover:-translate-y-2
          hover:border-[#24c2f2]/40
          hover:bg-white/[0.07]
          transition-all
          duration-300
        "
              >
                <div
                  className="
            w-16
            h-16
            rounded-2xl
            bg-[#24c2f2]/10
            flex
            items-center
            justify-center
            mb-6
            group-hover:bg-[#24c2f2]
            transition-all
            duration-300
          "
                >
                  <Laptop className="w-8 h-8 text-[#24c2f2] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Real Projects
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Gain practical experience by working on real client projects
                  and industry-focused digital campaigns.
                </p>
              </div>

              {/* Card 2 */}

              <div
                className="
          group
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          hover:-translate-y-2
          hover:border-[#24c2f2]/40
          hover:bg-white/[0.07]
          transition-all
          duration-300
        "
              >
                <div
                  className="
            w-16
            h-16
            rounded-2xl
            bg-[#24c2f2]/10
            flex
            items-center
            justify-center
            mb-6
            group-hover:bg-[#24c2f2]
            transition-all
            duration-300
          "
                >
                  <GraduationCap className="w-8 h-8 text-[#24c2f2] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Learn & Grow
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Improve your SEO, UI/UX, and marketing skills with mentorship,
                  guidance, and practical learning.
                </p>
              </div>

              {/* Card 3 */}

              <div
                className="
          group
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          hover:-translate-y-2
          hover:border-[#24c2f2]/40
          hover:bg-white/[0.07]
          transition-all
          duration-300
        "
              >
                <div
                  className="
            w-16
            h-16
            rounded-2xl
            bg-[#24c2f2]/10
            flex
            items-center
            justify-center
            mb-6
            group-hover:bg-[#24c2f2]
            transition-all
            duration-300
          "
                >
                  <Globe className="w-8 h-8 text-[#24c2f2] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Flexible Work
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Work remotely or in a hybrid setup with flexibility
                  designed for modern digital professionals.
                </p>
              </div>

              {/* Card 4 */}

              <div
                className="
          group
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-3xl
          p-8
          hover:-translate-y-2
          hover:border-[#24c2f2]/40
          hover:bg-white/[0.07]
          transition-all
          duration-300
        "
              >
                <div
                  className="
            w-16
            h-16
            rounded-2xl
            bg-[#24c2f2]/10
            flex
            items-center
            justify-center
            mb-6
            group-hover:bg-[#24c2f2]
            transition-all
            duration-300
          "
                >
                  <Briefcase className="w-8 h-8 text-[#24c2f2] group-hover:text-white transition-colors duration-300" />
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Career Opportunities
                </h3>

                <p className="text-gray-400 mt-4 leading-relaxed">
                  Build your portfolio, gain confidence, and unlock future
                  career opportunities in digital marketing.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* Open Positions */}

        <section
          id="openings"
          className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6"
        >
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}

            <div className="text-center mb-16">

              <div
                className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          border
          border-[#24c2f2]/20
          bg-[#24c2f2]/10
          backdrop-blur-md
          text-[#24c2f2]
          text-sm
          mb-5
        "
              >
                ✦ Career Opportunities
              </div>

              <h2
                className="
          text-4xl
          sm:text-5xl
          font-bold
          text-white
          leading-tight
        "
              >
                Open Positions
              </h2>

              <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
                Explore exciting internship opportunities and kickstart your
                digital career with real-world experience.
              </p>
            </div>

            {/* Cards */}

            <div className="grid md:grid-cols-2 gap-8">

              {jobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="
            group
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-8
            hover:border-[#24c2f2]/40
            hover:bg-white/[0.07]
            hover:-translate-y-2
            transition-all
            duration-300
          "
                >
                  {/* Top */}

                  <div className="flex items-center justify-between gap-4 flex-wrap">

                    <span
                      className="
                px-4
                py-1.5
                rounded-full
                bg-[#24c2f2]/15
                border
                border-[#24c2f2]/20
                text-[#24c2f2]
                text-sm
                font-medium
              "
                    >
                      {job.type}
                    </span>

                    <span className="text-sm text-gray-400">
                      {job.location}
                    </span>
                  </div>

                  {/* Title */}

                  <h3 className="text-2xl font-semibold text-white mt-7">
                    {job.title}
                  </h3>

                  {/* Description */}

                  <p className="text-gray-400 mt-4 leading-relaxed text-base">
                    {job.description}
                  </p>

                  {/* Button */}

                  <button
                    onClick={() => {
                      const element = document.getElementById('apply');

                      if (element) {
                        const navbarOffset = 100;

                        const elementPosition =
                          element.getBoundingClientRect().top +
                          window.pageYOffset;

                        const offsetPosition =
                          elementPosition - navbarOffset;

                        window.scrollTo({
                          top: offsetPosition,
                          behavior: 'smooth',
                        });
                      }
                    }}
                    className="
              group/btn
              mt-8
              inline-flex
              items-center
              gap-3
              text-[#24c2f2]
              font-medium
              hover:gap-5
              transition-all
              duration-300
            "
                  >
                    Apply Now

                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
              ))}

            </div>
          </div>
        </section>

        {/* Benefits */}

        {/* Benefits */}

        {/* Benefits */}

        <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">

            {/* Section Header */}

            <div className="text-center mb-14">

              <div
                className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          border
          border-[#24c2f2]/20
          bg-[#24c2f2]/10
          backdrop-blur-md
          text-[#24c2f2]
          text-sm
          mb-5
        "
              >
                ✦ Internship Benefits
              </div>

              <h2
                className="
          text-4xl
          sm:text-5xl
          font-bold
          text-white
          leading-tight
        "
              >
                What You Will Gain
              </h2>

              <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
                Practical learning, mentorship, and real-world digital experience.
              </p>
            </div>

            {/* Compact Grid */}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {[
                "Hands-on client projects",
                "SEO & marketing skill growth",
                "Portfolio building experience",
                "Mentorship from professionals",
                "Flexible remote environment",
                "Career growth opportunities",
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="
            group
            flex
            items-center
            gap-4
            bg-white/5
            border
            border-white/10
            backdrop-blur-xl
            rounded-2xl
            px-5
            py-5
            hover:border-[#24c2f2]/30
            hover:bg-white/[0.07]
            hover:-translate-y-1
            transition-all
            duration-300
          "
                >
                  {/* Icon */}

                  <div
                    className="
              w-11
              h-11
              rounded-xl
              bg-[#24c2f2]/10
              flex
              items-center
              justify-center
              flex-shrink-0
              group-hover:bg-[#24c2f2]
              transition-all
              duration-300
            "
                  >
                    <CheckCircle2 className="text-[#24c2f2] group-hover:text-white w-5 h-5 transition-colors duration-300" />
                  </div>

                  {/* Text */}

                  <h3 className="text-white font-medium text-base leading-snug">
                    {benefit}
                  </h3>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Application Form */}

        {/* Application Form */}

        <section
          id="apply"
          className="
    relative
    py-16
    sm:py-20
    lg:py-24
    px-4
    sm:px-6
    overflow-hidden
  "
        >
          {/* Background Glow */}

          <div className="absolute inset-0 overflow-hidden">

            {/* Blue Glow */}

            <div
              className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-[#24c2f2]/10
        rounded-full
        blur-[140px]
      "
            />

            {/* Purple Glow */}

            <div
              className="
        absolute
        bottom-[-120px]
        right-[-80px]
        w-[420px]
        h-[420px]
        bg-purple-500/10
        rounded-full
        blur-[140px]
      "
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto">

            {/* Header */}

            <div className="text-center mb-16">

              <div
                className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          border
          border-[#24c2f2]/20
          bg-[#24c2f2]/10
          backdrop-blur-md
          text-[#24c2f2]
          text-sm
          mb-5
        "
              >
                ✦ Apply for Internship
              </div>

              <h2
                className="
          text-4xl
          sm:text-5xl
          font-bold
          text-white
          leading-tight
        "
              >
                Start Your Career Journey
              </h2>

              <p className="text-gray-400 mt-5 max-w-2xl mx-auto text-lg leading-relaxed">
                Fill out the application form and take the first step toward
                building your digital marketing career with nsldigitallab.
              </p>
            </div>

            {/* Form Container */}

            <div
              className="
        relative
        max-w-4xl
        mx-auto
        rounded-[36px]
        border
        border-white/10
        bg-gradient-to-br
        from-white/[0.08]
        via-white/[0.04]
        to-white/[0.03]
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.35)]
        overflow-hidden
      "
            >

              {/* Top Gradient Line */}

              <div
                className="
          h-1
          w-full
          bg-gradient-to-r
          from-[#24c2f2]
          via-[#38bdf8]
          to-[#2563eb]
        "
              />

              {/* Form Content */}

              <div className="p-6 sm:p-10 lg:p-12">

                <CareerForm />

              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}