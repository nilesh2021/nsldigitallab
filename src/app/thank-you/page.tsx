import { Helmet } from "react-helmet-async";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

export default function ThankYouPage() {

  const [params] = useSearchParams();

  const type = params.get("type");

  const content = {

    career: {
      title: "Application Submitted!",
      description:
        "Thank you for applying to NSL Digital Lab. Our team will review your application and contact you if your profile matches our requirements.",
      button: "Back to Careers",
      link: "/careers",
    },

    contact: {
      title: "Thank You!",
      description:
        "We've received your enquiry. Our team will contact you within 24 hours.",
      button: "Back to Home",
      link: "/",
    },

    newsletter: {
      title: "You're Subscribed!",
      description:
        "Thanks for joining our newsletter. You'll receive the latest SEO, UI/UX and Digital Marketing resources.",
      button: "Explore Blog",
      link: "/blog",
    },

    resource: {
      title: "Download Started!",
      description:
        "Your resource is ready. We hope it helps you learn and grow.",
      button: "Explore Resources",
      link: "/resources",
    }

  };

  const page =
    content[type as keyof typeof content] ||
    content.contact;

  return (

    <>
      <Helmet>
        <title>{page.title} | NSL Digital Lab</title>
      </Helmet>

      <main className="min-h-screen bg-[#050816] flex items-center justify-center px-6">

        <div className="max-w-2xl w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center">

          <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto" />

          <h1 className="text-5xl font-bold text-white mt-8">
            {page.title}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300">
            {page.description}
          </p>

          <Link
            to={page.link}
            className="inline-flex items-center gap-2 mt-10 px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-semibold hover:scale-105 transition"
          >
            {page.button}
            <ArrowRight size={18} />
          </Link>

        </div>

      </main>

    </>
  );
}