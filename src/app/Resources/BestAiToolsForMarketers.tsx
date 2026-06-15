import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

import { Helmet } from 'react-helmet-async';

import {
    Sparkles,
    ArrowRight,
    Bot,
    BrainCircuit,
    Wand2,
} from 'lucide-react';

export default function BestAiToolsForMarketers() {

    return (

        <>

            {/* SEO */}

            <Helmet>

                <title>
                    Best AI Tools for Marketers in 2026 | NSLMedia
                </title>

                <meta
                    name="description"
                    content="
            Discover the best AI tools for marketers in 2026.
            Explore AI tools for content creation, SEO,
            social media marketing, automation, and productivity.
          "
                />

                <meta
                    name="keywords"
                    content="
            Best AI Tools for Marketers,
            AI Marketing Tools,
            AI SEO Tools,
            AI Content Tools,
            AI Tools for Social Media,
            Marketing Automation Tools,
            AI Tools 2026,
            Best AI Software for Marketing
          "
                />

                <meta
                    name="robots"
                    content="index, follow"
                />

                <link
                    rel="canonical"
                    href="https://NSLmedia.co.in/best-ai-tools-for-marketers"
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
                border-[#24c2f2]/20
                bg-[#24c2f2]/10
                text-[#24c2f2]
                text-sm
                mb-8
              "
                        >
                            <Sparkles className="w-4 h-4" />

                            Best AI Marketing Tools
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
                            Best AI Tools

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
                                For Marketers
                            </span>

                        </h1>

                        {/* Description */}

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
                            Discover powerful AI tools for SEO, content creation,
                            social media marketing, automation, analytics,
                            and productivity to grow faster in 2026.
                        </p>

                        {/* CTA */}

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
                                    document.getElementById('tools')?.scrollIntoView({
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
                                Explore AI Tools

                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />

                            </button>

                        </div>

                        {/* Mini Cards */}

                        <div className="grid md:grid-cols-3 gap-5 mt-20">

                            {[
                                {
                                    icon: Bot,
                                    title: 'AI Automation',
                                },
                                {
                                    icon: BrainCircuit,
                                    title: 'Smart Marketing',
                                },
                                {
                                    icon: Wand2,
                                    title: 'Content Creation',
                                },
                            ].map((item, index) => (

                                <div
                                    key={index}
                                    className="
                    bg-white/[0.04]
                    border
                    border-white/10
                    rounded-3xl
                    p-6
                    backdrop-blur-xl
                  "
                                >

                                    <div className="w-14 h-14 rounded-2xl bg-[#24c2f2]/10 flex items-center justify-center mx-auto mb-5">

                                        <item.icon className="w-7 h-7 text-[#24c2f2]" />

                                    </div>

                                    <h3 className="text-xl font-semibold">
                                        {item.title}
                                    </h3>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>
                {/* FEATURED AI TOOLS */}

                <section
                    id="tools"
                    className="py-24 px-4 sm:px-6"
                >

                    <div className="max-w-7xl mx-auto">

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
                                ✦ Featured AI Tools
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                                Top AI Tools For Marketing
                            </h2>

                            <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
                                Explore powerful AI tools for content creation,
                                SEO optimization, social media management,
                                automation, and productivity.
                            </p>

                        </div>

                        {/* Cards */}

                        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-7">

                            {[
                                {
                                    name: 'ChatGPT',
                                    category: 'AI Content Assistant',
                                    description:
                                        'Generate content ideas, blog articles, social captions, email copy, and marketing strategies using AI.',
                                    features: [
                                        'Content Writing',
                                        'SEO Assistance',
                                        'Marketing Ideas',
                                    ],
                                    rating: '4.9',
                                },

                                {
                                    name: 'Canva AI',
                                    category: 'AI Design Tool',
                                    description:
                                        'Create social media posts, presentations, ad creatives, and marketing visuals with AI-powered design tools.',
                                    features: [
                                        'Social Media Design',
                                        'AI Image Tools',
                                        'Brand Kits',
                                    ],
                                    rating: '4.8',
                                },

                                {
                                    name: 'Semrush',
                                    category: 'SEO & Marketing Tool',
                                    description:
                                        'Analyze keywords, competitors, backlinks, and SEO opportunities to improve website visibility.',
                                    features: [
                                        'Keyword Research',
                                        'SEO Audits',
                                        'Competitor Analysis',
                                    ],
                                    rating: '4.8',
                                },

                                {
                                    name: 'Notion AI',
                                    category: 'Productivity Tool',
                                    description:
                                        'Organize projects, create AI-powered notes, marketing workflows, and content plans efficiently.',
                                    features: [
                                        'AI Notes',
                                        'Workflow Management',
                                        'Content Planning',
                                    ],
                                    rating: '4.7',
                                },

                                {
                                    name: 'Copy.ai',
                                    category: 'AI Copywriting Tool',
                                    description:
                                        'Generate ad copy, landing page text, product descriptions, and email marketing content.',
                                    features: [
                                        'Ad Copy',
                                        'Email Writing',
                                        'Blog Generation',
                                    ],
                                    rating: '4.7',
                                },

                                {
                                    name: 'Jasper AI',
                                    category: 'Marketing AI Platform',
                                    description:
                                        'Create marketing campaigns, SEO content, and brand messaging faster using AI automation.',
                                    features: [
                                        'Campaign Writing',
                                        'SEO Content',
                                        'Brand Voice',
                                    ],
                                    rating: '4.8',
                                },

                            ].map((tool, index) => (

                                <div
                                    key={index}
                                    className="
            group
            relative
            overflow-hidden
            rounded-[32px]
            border
            border-white/10
            bg-gradient-to-br
            from-white/[0.07]
            via-white/[0.04]
            to-white/[0.02]
            backdrop-blur-xl
            p-7
            hover:border-[#24c2f2]/30
            transition-all
            duration-500
          "
                                >

                                    {/* Glow */}

                                    <div
                                        className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-opacity
              duration-500
              bg-[radial-gradient(circle_at_top,#24c2f2_0%,transparent_70%)]
            "
                                    />

                                    <div className="relative z-10">

                                        {/* Top */}

                                        <div className="flex items-start justify-between mb-6">

                                            <div>

                                                <div
                                                    className="
                    inline-flex
                    items-center
                    px-3
                    py-1
                    rounded-full
                    bg-[#24c2f2]/10
                    border
                    border-[#24c2f2]/20
                    text-[#24c2f2]
                    text-xs
                    mb-4
                  "
                                                >
                                                    {tool.category}
                                                </div>

                                                <h3 className="text-2xl font-bold">
                                                    {tool.name}
                                                </h3>

                                            </div>

                                            <div
                                                className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-[#24c2f2]/10
                  flex
                  items-center
                  justify-center
                  text-[#24c2f2]
                  text-lg
                  font-bold
                "
                                            >
                                                {tool.rating}
                                            </div>

                                        </div>

                                        {/* Description */}

                                        <p className="text-gray-400 leading-relaxed mb-7">
                                            {tool.description}
                                        </p>

                                        {/* Features */}

                                        <div className="space-y-3 mb-8">

                                            {tool.features.map((feature, featureIndex) => (

                                                <div
                                                    key={featureIndex}
                                                    className="flex items-center gap-3"
                                                >

                                                    <div className="w-2 h-2 rounded-full bg-[#24c2f2]" />

                                                    <span className="text-gray-300">
                                                        {feature}
                                                    </span>

                                                </div>

                                            ))}

                                        </div>

                                        {/* CTA */}

                                        <button
                                            className="
                group/btn
                inline-flex
                items-center
                gap-3
                px-6
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-[#24c2f2]
                via-[#1da1f2]
                to-[#2563eb]
                text-white
                font-medium
                hover:-translate-y-1
                transition-all
                duration-300
              "
                                        >
                                            Explore Tool

                                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />

                                        </button>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                </section>{/* HOW AI TOOLS HELP MARKETERS */}

<section className="py-24 px-4 sm:px-6 bg-[#0d1730]">

  <div className="max-w-7xl mx-auto">

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
        ✦ AI Marketing Guide
      </div>

      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        How AI Tools Help Digital Marketers
      </h2>

      <p className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed">
        AI marketing tools are transforming how businesses create content,
        optimize SEO, manage campaigns, and improve productivity.
      </p>

    </div>

    {/* Content Grid */}

    <div className="grid lg:grid-cols-2 gap-10">

      {/* LEFT */}

      <div
        className="
          rounded-[32px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          p-8
        "
      >

        <h3 className="text-3xl font-bold mb-6">
          Why AI Tools Matter in Marketing
        </h3>

        <p className="text-gray-400 leading-relaxed mb-6">
          Modern marketers use AI tools to automate repetitive tasks,
          improve content quality, analyze marketing performance,
          and save time. AI-powered platforms help businesses create
          SEO-friendly content, social media posts, ad copy,
          email campaigns, and marketing strategies faster than ever.
        </p>

        <p className="text-gray-400 leading-relaxed mb-6">
          AI tools also improve keyword research, competitor analysis,
          content optimization, and audience targeting. This helps
          marketers make better decisions and improve campaign performance.
        </p>

        <p className="text-gray-400 leading-relaxed">
          Whether you are a freelancer, startup founder,
          SEO specialist, or content creator, AI tools can
          increase productivity and streamline digital marketing workflows.
        </p>

      </div>

      {/* RIGHT */}

      <div className="space-y-6">

        {[
          {
            title: 'SEO Optimization',
            description:
              'AI SEO tools help marketers discover keywords, optimize content, analyze competitors, and improve Google rankings.',
          },

          {
            title: 'Content Creation',
            description:
              'AI writing assistants generate blog posts, email campaigns, product descriptions, and social media content quickly.',
          },

          {
            title: 'Marketing Automation',
            description:
              'Automation tools reduce manual work by handling repetitive marketing tasks and workflow management.',
          },

          {
            title: 'Social Media Management',
            description:
              'AI tools help marketers schedule posts, generate captions, create creatives, and analyze engagement.',
          },

        ].map((item, index) => (

          <div
            key={index}
            className="
              rounded-3xl
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-xl
              p-7
              hover:border-[#24c2f2]/30
              transition-all
              duration-300
            "
          >

            <h3 className="text-2xl font-semibold mb-4">
              {item.title}
            </h3>

            <p className="text-gray-400 leading-relaxed">
              {item.description}
            </p>

          </div>

        ))}

      </div>

    </div>

  </div>

</section>
                <Footer />

            </main>

        </>

    );
}