import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Helmet } from 'react-helmet-async';
import ScrollToTop from '../components/ScrollToTop';
import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  GraduationCap,
  Globe,
  Laptop,
} from 'lucide-react';

export default function SeoInternshipPune() {
  return (

    <>

      <Helmet>

        {/* Primary SEO */}

        <title>
          SEO Internship in Pune | Digital Marketing Internship | nsldigitallab
        </title>

        <meta
          name="description"
          content="Apply for SEO Internship in Pune at nsldigitallab. Learn keyword research, on-page SEO, Google Analytics, Search Console, and digital marketing strategies with practical projects."
        />

        <meta
          name="keywords"
          content="
    SEO Internship Pune,
    Digital Marketing Internship Pune,
    SEO Internship for Freshers,
    SEO Training Internship,
    SEO Internship in Pune for Students,
    SEO Jobs Pune,
    Remote SEO Internship,
    Digital Marketing Training Pune,
    SEO Internship Certificate,
    SEO Internship Work From Home
    "
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          property="og:title"
          content="SEO Internship in Pune | nsldigitallab"
        />

        <meta
          property="og:description"
          content="Join nsldigitallab SEO Internship Program in Pune and gain practical digital marketing experience."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://nsldigitallab.comseo-internship-pune"
        />

        <link
          rel="canonical"
          href="https://nsldigitallab.comseo-internship-pune"
        />

        {/* FAQ SCHEMA */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Who can apply for SEO Internship in Pune?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Students, freshers, digital marketing learners, and graduates interested in SEO and online marketing can apply."
                }
              },
              {
                "@type": "Question",
                "name": "Is this SEO internship remote?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, nsldigitallab offers remote SEO internship opportunities for candidates across India."
                }
              },
              {
                "@type": "Question",
                "name": "Will I get an internship certificate?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes, selected interns will receive an internship completion certificate."
                }
              },
              {
                "@type": "Question",
                "name": "What skills will I learn during the internship?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "You will learn keyword research, on-page SEO, technical SEO basics, content optimization, Google Search Console, and analytics."
                }
              }
            ]
          })}
        </script>

        {/* JOB / INTERNSHIP SCHEMA */}

        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "JobPosting",
            "title": "SEO Internship in Pune",
            "description":
              "Remote SEO Internship opportunity at nsldigitallab for students and freshers interested in digital marketing and SEO.",
            "employmentType": "INTERN",
            "hiringOrganization": {
              "@type": "Organization",
              "name": "nsldigitallab",
              "sameAs": "https://nsldigitallab.co.in",
            },
            "jobLocationType": "TELECOMMUTE",
            "applicantLocationRequirements": {
              "@type": "Country",
              "name": "India"
            },
            "industry": "Digital Marketing",
            "datePosted": "2026-05-20",
            "validThrough": "2026-12-31"
          })}
        </script>

      </Helmet>
      <main className="bg-[#091224] text-white overflow-hidden">

        <Navigation />

        {/* HERO SECTION */}

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

          {/* Glow */}

          <div className="absolute inset-0 overflow-hidden">

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

          </div>

          {/* Content */}

          <div className="relative z-10 max-w-5xl mx-auto text-center">

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
              mb-8
            "
            >
              ✦ SEO Internship Opportunity
            </div>

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
              SEO Internship

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
                In Pune
              </span>
            </h1>

            <p
              className="
              max-w-3xl
              mx-auto
              text-lg
              sm:text-xl
              text-gray-300
              leading-relaxed
              mb-14
            "
            >
              Gain practical experience in SEO, keyword research,
              Google Analytics, Search Console, and digital marketing
              strategies while working on real-world projects.
            </p>

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

              <button
                onClick={() => {
                  document.getElementById('apply')?.scrollIntoView({
                    behavior: 'smooth',
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
                Apply Now

                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <button
                onClick={() => {
                  document.getElementById('benefits')?.scrollIntoView({
                    behavior: 'smooth',
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
                Explore Internship
              </button>

            </div>

          </div>

        </section>

        {/* BENEFITS SECTION */}

        <section
          id="benefits"
          className="py-20 px-4 sm:px-6"
        >

          <div className="max-w-7xl mx-auto">

            <div className="text-center mb-14">

              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#24c2f2]/20 bg-[#24c2f2]/10 text-[#24c2f2] text-sm mb-6">
                ✦ Internship Benefits
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Why Join nsldigitallab?
              </h2>

              <p className="max-w-2xl mx-auto text-gray-400 text-lg leading-relaxed">
                Build practical SEO and digital marketing experience while working on real projects.
              </p>

            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

              {[
                'Work on real client projects',
                'Internship certificate',
                'Portfolio building experience',
                'Flexible work environment',
                'Mentorship from professionals',
                'Practical SEO learning',
              ].map((benefit, index) => (

                <div
                  key={index}
                  className="
                  group
                  bg-white/[0.04]
                  border
                  border-white/10
                  backdrop-blur-xl
                  rounded-2xl
                  p-5
                  hover:border-[#24c2f2]/30
                  hover:bg-white/[0.06]
                  transition-all
                  duration-300
                "
                >

                  <div className="flex items-start gap-4">

                    <div className="w-12 h-12 rounded-xl bg-[#24c2f2]/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-6 h-6 text-[#24c2f2]" />
                    </div>

                    <h3 className="text-lg font-semibold text-white leading-relaxed">
                      {benefit}
                    </h3>

                  </div>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* SKILLS SECTION */}

        <section className="py-24 px-4 sm:px-6 bg-[#0d1730]">

          <div className="max-w-7xl mx-auto">

            <div className="grid lg:grid-cols-2 gap-16 items-center">

              <div>

                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#24c2f2]/20 bg-[#24c2f2]/10 text-[#24c2f2] text-sm mb-6">
                  ✦ Skills You Will Learn
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Learn Modern SEO Strategies
                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-10">
                  Develop hands-on digital marketing skills that help businesses improve visibility and traffic.
                </p>

                <div className="space-y-5">

                  {[
                    'Keyword Research & SEO Tools',
                    'On-Page SEO Optimization',
                    'Google Analytics & Search Console',
                    'Content Marketing Strategies',
                    'Technical SEO Basics',
                    'Website Performance Optimization',
                  ].map((skill, index) => (

                    <div
                      key={index}
                      className="flex items-center gap-4 bg-white/[0.03] border border-white/10 rounded-2xl p-4"
                    >

                      <div className="w-11 h-11 rounded-xl bg-[#24c2f2]/10 flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-[#24c2f2]" />
                      </div>

                      <span className="text-gray-200 text-lg">
                        {skill}
                      </span>

                    </div>

                  ))}

                </div>

              </div>

              <div className="grid grid-cols-2 gap-5">

                {[
                  {
                    title: 'SEO Training',
                    icon: Globe,
                  },
                  {
                    title: 'Content Strategy',
                    icon: Briefcase,
                  },
                  {
                    title: 'Digital Marketing',
                    icon: GraduationCap,
                  },
                  {
                    title: 'Website Optimization',
                    icon: Laptop,
                  },
                ].map((item, index) => (

                  <div
                    key={index}
                    className="bg-gradient-to-br from-[#182445] to-[#111936] border border-white/10 rounded-3xl p-8 text-center"
                  >

                    <div className="w-16 h-16 mx-auto rounded-2xl bg-[#24c2f2]/10 flex items-center justify-center mb-6">
                      <item.icon className="w-8 h-8 text-[#24c2f2]" />
                    </div>

                    <h3 className="text-xl font-semibold text-white leading-relaxed">
                      {item.title}
                    </h3>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </section>
        {/* FAQ SECTION */}

        <section className="py-24 px-4 sm:px-6 bg-[#091224]">

          <div className="max-w-5xl mx-auto">

            {/* Heading */}

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
          text-[#24c2f2]
          text-sm
          mb-6
        "
              >
                ✦ SEO Internship FAQ
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Frequently Asked Questions
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                Learn more about our SEO internship program in Pune,
                eligibility criteria, skills, certification, and internship opportunities.
              </p>

            </div>

            {/* FAQ ITEMS */}

            <div className="space-y-5">

              {[
                {
                  question:
                    'Who can apply for the SEO internship in Pune?',
                  answer:
                    'Students, freshers, and beginners interested in SEO, digital marketing, content marketing, and website optimization can apply for this internship opportunity.',
                },

                {
                  question:
                    'Is this SEO internship suitable for beginners?',
                  answer:
                    'Yes. This SEO internship program is beginner-friendly and designed for students who want practical experience in search engine optimization and digital marketing.',
                },

                {
                  question:
                    'Will I receive an internship certificate?',
                  answer:
                    'Yes, nsldigitallab provides an internship completion certificate after successfully completing the SEO internship program.',
                },

                {
                  question:
                    'What skills will I learn during the internship?',
                  answer:
                    'You will learn keyword research, on-page SEO, technical SEO basics, Google Analytics, Google Search Console, content optimization, and digital marketing strategies.',
                },

                {
                  question:
                    'Is this internship remote or work from home?',
                  answer:
                    'Yes, this internship offers flexible remote work opportunities for students and freshers across India.',
                },

                {
                  question:
                    'How long is the SEO internship program?',
                  answer:
                    'The internship duration depends on the selected role and project requirements. Most internships range from 1 to 3 months.',
                },

                {
                  question:
                    'Do I need prior SEO experience?',
                  answer:
                    'No prior SEO experience is required. Basic computer knowledge and interest in digital marketing are enough to get started.',
                },

                {
                  question:
                    'How do I apply for the SEO internship?',
                  answer:
                    'You can apply directly through the internship application form available on this page. Shortlisted candidates will be contacted by our team.',
                },
              ].map((faq, index) => (

                <div
                  key={index}
                  className="
            group
            bg-white/[0.04]
            border
            border-white/10
            backdrop-blur-xl
            rounded-3xl
            p-7
            hover:border-[#24c2f2]/30
            hover:bg-white/[0.06]
            transition-all
            duration-300
          "
                >

                  <h3 className="text-xl font-semibold text-white leading-relaxed mb-4">
                    {faq.question}
                  </h3>

                  <p className="text-gray-400 leading-relaxed text-base">
                    {faq.answer}
                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
        {/* APPLICATION SECTION */}

        <section
          id="apply"
          className="
    relative
    py-24
    px-4
    sm:px-6
    overflow-hidden
  "
        >

          {/* Background Glow */}

          <div className="absolute inset-0 overflow-hidden">

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

          <div className="relative z-10 max-w-5xl mx-auto">

            {/* Heading */}

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
          text-[#24c2f2]
          text-sm
          mb-6
        "
              >
                ✦ Apply For SEO Internship
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Start Your Digital
                <span
                  className="
            block
            mt-2
            bg-gradient-to-r
            from-[#24c2f2]
            to-[#60a5fa]
            bg-clip-text
            text-transparent
          "
                >
                  Marketing Career
                </span>
              </h2>

              <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                Apply for our SEO internship in Pune and gain practical experience
                in search engine optimization, digital marketing, and content strategy.
              </p>

            </div>

            {/* Form Container */}

            <div
              className="
        relative
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

              {/* Form */}

              <form className="p-6 sm:p-10 lg:p-12 space-y-6">

                {/* Row 1 */}

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="
                w-full
                px-5
                py-4
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-[#24c2f2]/50
                transition-all
              "
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Email Address
                    </label>

                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="
                w-full
                px-5
                py-4
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-[#24c2f2]/50
                transition-all
              "
                    />
                  </div>

                </div>

                {/* Row 2 */}

                <div className="grid md:grid-cols-2 gap-6">

                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      placeholder="Enter phone number"
                      className="
                w-full
                px-5
                py-4
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-[#24c2f2]/50
                transition-all
              "
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-3">
                      College / Qualification
                    </label>

                    <input
                      type="text"
                      placeholder="Enter qualification"
                      className="
                w-full
                px-5
                py-4
                rounded-2xl
                bg-white/[0.04]
                border
                border-white/10
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-[#24c2f2]/50
                transition-all
              "
                    />
                  </div>

                </div>

                {/* Textarea */}

                <div>

                  <label className="block text-sm text-gray-300 mb-3">
                    Why do you want to join this internship?
                  </label>

                  <textarea
                    rows={5}
                    placeholder="Tell us about your interest in SEO and digital marketing..."
                    className="
              w-full
              px-5
              py-4
              rounded-2xl
              bg-white/[0.04]
              border
              border-white/10
              text-white
              placeholder:text-gray-500
              outline-none
              focus:border-[#24c2f2]/50
              transition-all
              resize-none
            "
                  />

                </div>

                {/* Submit Button */}

                <div className="pt-2">

                  <button
                    type="submit"
                    className="
              group
              inline-flex
              items-center
              justify-center
              gap-3
              px-10
              py-5
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
                    Submit Application

                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>

                </div>

              </form>

            </div>

          </div>

        </section>
        <Footer />
        <ScrollToTop />
      </main></>
  );
}