import { Helmet } from "react-helmet-async";
import { CheckCircle2, ArrowRight, Linkedin, Instagram } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const LINKEDIN_URL = "https://www.linkedin.com/company/nsldigitallab/";
const INSTAGRAM_URL = "https://www.instagram.com/nsldigitallab";

export default function ThankYouPage() {
  const [params] = useSearchParams();
  const type = params.get("type");

  const content = {
    career: {
      title: "Application submitted",
      description: "We'll review it and get back to you if there's a match.",
      button: "Check out our free resources",
      link: "/resources",
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
    },
  };

  const page =
    content[type as keyof typeof content] || content.contact;

  return (
    <>
      <Helmet>
        <title>{page.title} | NSL Digital Lab</title>
      </Helmet>

      <main className="flex min-h-screen items-center justify-center bg-[#050816] px-6 py-16">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl">
          <CheckCircle2 className="mx-auto h-14 w-14 text-green-400" />

          <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            {page.title}
          </h1>

          <p className="mt-3 text-base text-slate-300">{page.description}</p>

          <p className="mt-8 text-sm text-slate-400">Follow us</p>
          <div className="mt-3 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A66C2] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#0c75dc]"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#f58529] via-[#dd2a7b] to-[#8134af] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </a>
          </div>

          <Link
            to={page.link}
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-300 transition hover:text-white"
          >
            {page.button}
            <ArrowRight size={18} />
          </Link>
        </div>
      </main>
    </>
  );
}
