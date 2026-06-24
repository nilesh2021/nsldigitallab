import { Link } from "react-router-dom";

import {
    CheckCircle,
    ArrowRight
} from "lucide-react";

export default function FAQ() {

    return (

        <>
            <section className="py-24 bg-slate-50">

                <div className="max-w-4xl mx-auto px-6">

                    <div className="text-center mb-16">

                        <span className="text-cyan-500 uppercase tracking-widest font-semibold">

                            FAQ

                        </span>

                        <h2 className="text-4xl font-bold mt-4">

                            Frequently Asked Questions

                        </h2>

                    </div>

                    <div className="space-y-6">

                        {[
                            {
                                q: "Are these courses completely free?",
                                a: "Yes. Every course on NSL Digital Lab is free to access.",
                            },
                            {
                                q: "Do I need prior experience?",
                                a: "No. Our learning paths start from the basics and gradually move to advanced concepts.",
                            },
                            {
                                q: "Will more lessons be added?",
                                a: "Yes. New tutorials, projects and resources will be published every week.",
                            },
                            {
                                q: "Can I learn at my own pace?",
                                a: "Absolutely. You can study whenever it suits you.",
                            },
                            {
                                q: "Will certificates be available?",
                                a: "Certificates and assessments are part of our future roadmap.",
                            },
                        ].map((faq) => (

                            <div
                                key={faq.q}
                                className="bg-white border border-slate-200 rounded-xl p-6"
                            >

                                <h3 className="font-semibold text-lg">

                                    {faq.q}

                                </h3>

                                <p className="text-slate-600 mt-3 leading-7">

                                    {faq.a}

                                </p>

                            </div>

                        ))}

                    </div>

                </div>

            </section>

        </>

    );

}