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
    <section className="mt-12 rounded-3xl border border-slate-200 bg-slate-50 p-8">

      <h2 className="text-3xl font-bold">
        Download This Resource
      </h2>

      <p className="mt-4 text-slate-600">
        Enter your email to download this free resource and receive future
        UI/UX, SEO and Digital Marketing updates.
      </p>

      <div className="mt-8 flex flex-col md:flex-row gap-4">

        <input
          type="email"
          autoComplete="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-cyan-500"
        />

        <button
          onClick={handleDownload}
          disabled={loading}
          className={`rounded-xl px-8 py-4 font-semibold text-white transition ${loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-cyan-500 hover:bg-cyan-600"
            }`}
        >
          {loading ? "Downloading..." : "Download Free"}
        </button>

      </div>

      

    </section>
  );
}