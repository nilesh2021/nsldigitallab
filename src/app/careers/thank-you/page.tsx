import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

export default function CareerThankYouPage() {
  return (
    <main className="min-h-screen bg-[#050816] flex items-center justify-center px-6">
      <div className="max-w-xl w-full rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-12 text-center">

        <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto" />

        <h1 className="mt-8 text-4xl font-bold text-white">
          Application Submitted!
        </h1>

        <p className="mt-6 text-lg text-slate-300 leading-8">
          Thank you for applying to NSL Digital Lab.
          <br />
          We've received your application and will review it shortly.
        </p>

        <div className="mt-10 flex justify-center gap-4">

          <Link
            to="/careers"
            className="px-8 py-4 rounded-xl bg-cyan-500 text-white font-semibold hover:bg-cyan-600 transition"
          >
            Back to Careers
          </Link>

          <Link
            to="/"
            className="px-8 py-4 rounded-xl border border-white/10 text-white hover:bg-white/10 transition"
          >
            Go Home
          </Link>

        </div>

      </div>
    </main>
  );
}