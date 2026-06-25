import { useState } from "react";
import { subscribeNewsletter } from "../../../services/newsletter";
import { useNavigate } from "react-router-dom";
type Props = {
  resourceTitle: string;
  downloadUrl: string;
};

export default function ResourceDownload({
  resourceTitle,
  downloadUrl,
}: Props) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);


  async function handleDownload() {
    if (!email.trim()) {
      alert("Please enter your email.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    setLoading(true);


    try {
      const result = await subscribeNewsletter(
        email,
        resourceTitle,
        "Resource Download",
        "resource_download"
      );

      if (!result.success) {
        alert("Something went wrong.");
        return;
      }

      setEmail("");

      navigate("/resources/thank-you", {
        state: {
          downloadUrl,
          resourceTitle,
        },
      });

    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="mt-10 rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
      <h2 className="text-2xl font-bold text-slate-900">
        Download This Resource
      </h2>

      <p className="mt-3 text-slate-600">
        Enter your email to download this free resource and receive future
        UI/UX, SEO and Digital Marketing updates.
      </p>

      <div className="mt-6 flex flex-col gap-4 md:flex-row">
        <input
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-2xl border border-slate-300 px-5 py-4 outline-none transition focus:border-cyan-500"
        />

        <button
          onClick={handleDownload}
          disabled={loading}
          className={`rounded-2xl px-7 py-4 font-semibold text-white transition ${loading
            ? "cursor-not-allowed bg-slate-400"
            : "bg-cyan-600 hover:bg-cyan-700"
          }`}
        >
          {loading ? "Downloading..." : "Download Free"}
        </button>
      </div>
    </section>
  );
}