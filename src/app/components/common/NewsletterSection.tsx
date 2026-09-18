import { useState } from "react";
import { CheckCircle, Mail, ArrowRight } from "lucide-react";
import { subscribeNewsletter } from "../../../services/newsletter";
import { useNavigate } from "react-router-dom";

type Props = {
    title: string;
    subtitle: string;
    interest: string;
    source: string;
    compact?: boolean;
};

export default function NewsletterSection({
    title,
    subtitle,
    interest,
    source,
    compact = false,
}: Props) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();
    async function handleSubmit() {
        if (!email.trim()) return;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    return;
}
        setLoading(true);

        try {
            const result = await subscribeNewsletter(
    email,
    interest,
    source,
    "newsletter"
);

            setSuccess(true);
            setEmail("");

            setTimeout(() => {
                navigate("/resources/welcome");
            }, 1200);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section
            id="subscribe"
            className={`${compact ? "py-10 sm:py-12" : "py-24"} bg-[#060b14]`}
        >
            <div className={`${compact ? "max-w-7xl" : "max-w-6xl"} mx-auto px-6 lg:px-8`}>

                <div className={`rounded-3xl bg-white/10 backdrop-blur-lg border border-white/10 ${compact ? "p-6 lg:p-8" : "p-10 lg:p-16"}`}>

                    <div className={`grid lg:grid-cols-2 items-center ${compact ? "gap-8" : "gap-12"}`}>

                        {/* Left */}

                        <div>

                            <span className="inline-flex rounded-full bg-cyan-400/20 px-3 py-1 text-cyan-300 text-xs font-semibold">

                                Free Learning Community

                            </span>

                            <h2 className={`${compact ? "mt-3 text-2xl sm:text-3xl" : "mt-6 text-4xl"} font-bold text-white leading-tight`}>

                                {title}

                            </h2>

                            <p className={`${compact ? "mt-3 text-sm leading-6" : "mt-6 text-lg leading-8"} text-slate-300`}>

                                {subtitle}

                            </p>

                            <div className={`${compact ? "mt-5 space-y-2" : "mt-8 space-y-4"}`}>

                                {[
                                    "UI/UX Templates",
                                    "SEO Checklists",
                                    "Digital Marketing Guides",
                                    "Interview Questions",
                                    "Exclusive Resources",
                                ].map((item) => (
                                    <div
                                        key={item}
                                        className="flex items-center gap-3 text-white"
                                    >
                                        <CheckCircle className="w-5 h-5 text-cyan-400" />
                                        <span>{item}</span>
                                    </div>
                                ))}

                            </div>

                        </div>

                        {/* Right */}

                        <div className={`rounded-2xl bg-white shadow-2xl ${compact ? "p-5" : "p-8"}`}>

                            <div className={`flex items-center gap-3 ${compact ? "mb-3" : "mb-6"}`}>

                                <Mail className="text-cyan-600" />

                                <h3 className={`${compact ? "text-lg" : "text-2xl"} font-bold text-slate-900`}>

                                    Get Instant Access

                                </h3>

                            </div>

                            <p className={`text-slate-600 ${compact ? "mb-4 text-sm" : "mb-8"}`}>

                                Enter your email to receive free resources,
                                templates and future updates.

                            </p>

                            <input  disabled={loading}
                                type="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) =>
                                    setEmail(e.target.value)
                                }
                                className="w-full rounded-xl border border-slate-300 px-5 py-4 outline-none focus:border-cyan-500"
                            />

                            <button
                                onClick={handleSubmit}
                                disabled={loading}
                                className="mt-5 w-full rounded-xl bg-cyan-500 py-4 font-semibold text-white transition hover:bg-cyan-600 disabled:opacity-60"
                            >
                               {loading ? (
    <span className="flex items-center justify-center gap-3">
        <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
        Joining...
    </span>
) : (
    <span className="flex items-center justify-center gap-2">
        Get Free Access
        <ArrowRight size={18} />
    </span>
)}
                            </button>

                           {success && (
    <div className="mt-5 rounded-xl border border-green-200 bg-green-50 p-4">
        <p className="font-semibold text-green-700">
            🎉 Welcome to NSL Digital Lab!
        </p>

        <p className="mt-1 text-sm text-green-600">
            Check your inbox for free resources and future updates.
        </p>
    </div>
)}

                            <p className="mt-6 text-center text-xs text-slate-500">
                                No spam. Unsubscribe anytime.
                            </p>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}