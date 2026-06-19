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
    Wifi,
} from 'lucide-react';

export default function RemoteSeoInternship() {

    return (

        <>

            {/* SEO */}

            <Helmet>

                <title>
                    Remote SEO Internship | Work From Home SEO Internship | nsldigitallab
                </title>

                <meta
                    name="description"
                    content="
            Apply for Remote SEO Internship at nsldigitallab.
            Learn keyword research, on-page SEO, Google Analytics,
            Search Console, and digital marketing while working remotely.
          "
                />

                <meta
                    name="keywords"
                    content="
            Remote SEO Internship,
            Work From Home SEO Internship,
            SEO Internship Remote,
            SEO Internship for Freshers,
            Digital Marketing Internship Remote,
            SEO Training Internship,
            SEO Internship India,
            Online SEO Internship,
            Remote Digital Marketing Internship
          "
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <meta
                    property="og:title"
                    content="Remote SEO Internship | nsldigitallab"
                />

                <meta
                    property="og:description"
                    content="
            Join nsldigitallab Remote SEO Internship Program and gain practical digital marketing experience from anywhere.
          "
                />

                <meta
                    property="og:type"
                    content="website"
                />

                <meta
                    property="og:url"
                    content="https://nsldigitallab.comremote-seo-internship"
                />

                <link
                    rel="canonical"
                    href="https://nsldigitallab.comremote-seo-internship"
                />

            </Helmet>

            <main className="bg-[#091224] text-white overflow-hidden">

                <Navigation />

                {/* HERO */}

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
                text-[#24c2f2]
                text-sm
                mb-8
              "
                        >
                            ✦ Work From Home Internship
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
                            Remote SEO Internship

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
                                Work From Home
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
                            Gain practical SEO and digital marketing experience remotely.
                            Learn keyword research, on-page SEO, Google Analytics,
                            content optimization, and website growth strategies.
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

                        </div>

                    </div>

                </section>

                {/* BENEFITS */}

                <section className="py-24 px-4 sm:px-6">

                    <div className="max-w-7xl mx-auto">

                        <div className="text-center mb-16">

                            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#24c2f2]/20 bg-[#24c2f2]/10 text-[#24c2f2] text-sm mb-6">
                                ✦ Internship Benefits
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Why Join This Remote Internship?
                            </h2>

                            <p className="max-w-2xl mx-auto text-gray-400 text-lg">
                                Learn SEO and digital marketing skills remotely with real-world projects and mentorship.
                            </p>

                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">

                            {[
                                'Work from home flexibility',
                                'Internship completion certificate',
                                'Hands-on SEO project experience',
                                'Learn practical digital marketing',
                                'Mentorship from professionals',
                                'Portfolio building opportunities',
                            ].map((benefit, index) => (

                                <div
                                    key={index}
                                    className="
                    bg-white/[0.04]
                    border
                    border-white/10
                    rounded-2xl
                    p-6
                    hover:border-[#24c2f2]/30
                    transition-all
                    duration-300
                  "
                                >

                                    <div className="flex items-start gap-4">

                                        <div className="w-12 h-12 rounded-xl bg-[#24c2f2]/10 flex items-center justify-center flex-shrink-0">
                                            <CheckCircle2 className="w-6 h-6 text-[#24c2f2]" />
                                        </div>

                                        <h3 className="text-lg font-semibold leading-relaxed">
                                            {benefit}
                                        </h3>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>

                {/* SKILLS */}

                <section className="py-24 px-4 sm:px-6 bg-[#0d1730]">

                    <div className="max-w-7xl mx-auto">

                        <div className="grid lg:grid-cols-2 gap-16 items-center">

                            <div>

                                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#24c2f2]/20 bg-[#24c2f2]/10 text-[#24c2f2] text-sm mb-6">
                                    ✦ Skills You Will Learn
                                </div>

                                <h2 className="text-4xl md:text-5xl font-bold mb-8">
                                    Learn Modern SEO Skills
                                </h2>

                                <div className="space-y-5">

                                    {[
                                        'Keyword Research',
                                        'On-Page SEO Optimization',
                                        'Google Analytics',
                                        'Search Console',
                                        'Content Optimization',
                                        'Technical SEO Basics',
                                        'SEO Strategy',
                                        'Website Growth Techniques',
                                    ].map((skill, index) => (

                                        <div
                                            key={index}
                                            className="
                        flex
                        items-center
                        gap-4
                        bg-white/[0.03]
                        border
                        border-white/10
                        rounded-2xl
                        p-4
                      "
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
                                        title: 'Remote Work',
                                        icon: Wifi,
                                    },
                                    {
                                        title: 'SEO Training',
                                        icon: Globe,
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
                                        className="
                      bg-gradient-to-br
                      from-[#182445]
                      to-[#111936]
                      border
                      border-white/10
                      rounded-3xl
                      p-8
                      text-center
                    "
                                    >

                                        <div className="w-16 h-16 mx-auto rounded-2xl bg-[#24c2f2]/10 flex items-center justify-center mb-6">
                                            <item.icon className="w-8 h-8 text-[#24c2f2]" />
                                        </div>

                                        <h3 className="text-xl font-semibold">
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
                                ✦ FAQ
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Frequently Asked Questions
                            </h2>

                            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                                Learn more about our remote SEO internship program,
                                eligibility, certification, and digital marketing training.
                            </p>

                        </div>

                        <div className="space-y-5">

                            {[
                                {
                                    question:
                                        'Who can apply for the Remote SEO Internship?',
                                    answer:
                                        'Students, freshers, and beginners interested in SEO and digital marketing can apply for this internship.',
                                },

                                {
                                    question:
                                        'Is this internship completely remote?',
                                    answer:
                                        'Yes, this is a fully remote SEO internship opportunity that allows candidates to work from home.',
                                },

                                {
                                    question:
                                        'Will I receive an internship certificate?',
                                    answer:
                                        'Yes, selected candidates will receive an internship completion certificate after successful completion.',
                                },

                                {
                                    question:
                                        'What skills will I learn?',
                                    answer:
                                        'You will learn keyword research, on-page SEO, technical SEO basics, Google Analytics, Search Console, and content optimization.',
                                },

                                {
                                    question:
                                        'Do I need prior SEO experience?',
                                    answer:
                                        'No prior experience is required. Beginners with interest in SEO and digital marketing can apply.',
                                },

                                {
                                    question:
                                        'How long is the internship duration?',
                                    answer:
                                        'The internship duration depends on project requirements and selected internship roles.',
                                },

                            ].map((faq, index) => (

                                <div
                                    key={index}
                                    className="
            bg-white/[0.04]
            border
            border-white/10
            rounded-3xl
            p-7
            hover:border-[#24c2f2]/30
            transition-all
            duration-300
          "
                                >

                                    <h3 className="text-xl font-semibold mb-4">
                                        {faq.question}
                                    </h3>

                                    <p className="text-gray-400 leading-relaxed">
                                        {faq.answer}
                                    </p>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>{/* APPLICATION FORM */}

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

                    {/* Glow */}

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

                    </div>

                    <div className="relative z-10 max-w-5xl mx-auto">

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
                                ✦ Apply Now
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Start Your Remote SEO Career
                            </h2>

                            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                                Apply now and gain practical SEO and digital marketing experience from anywhere.
                            </p>

                        </div>

                        {/* Form */}

                        <div
                            className="
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

                            <form className="p-6 sm:p-10 lg:p-12 space-y-6">

                                {/* Row 1 */}

                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        type="text"
                                        placeholder="Full Name"
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
            "
                                    />

                                    <input
                                        type="email"
                                        placeholder="Email Address"
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
            "
                                    />

                                </div>

                                {/* Row 2 */}

                                <div className="grid md:grid-cols-2 gap-6">

                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
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
            "
                                    />

                                    <input
                                        type="text"
                                        placeholder="College / Qualification"
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
            "
                                    />

                                </div>

                                {/* Textarea */}

                                <textarea
                                    rows={5}
                                    placeholder="Why do you want to join this internship?"
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
            resize-none
          "
                                />

                                {/* Submit Button */}

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

                            </form>

                        </div>

                    </div>

                </section>
                <Footer />
                <ScrollToTop />
            </main>

        </>

    );
}