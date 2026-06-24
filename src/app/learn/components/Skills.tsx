import { Link } from "react-router-dom";
 
import {
    CheckCircle,
    ArrowRight
} from "lucide-react";

export default function Skills() {
  
    return (
       
      <> 
        <section className="py-24 bg-slate-50">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-16">

              <span className="text-cyan-500 font-semibold uppercase tracking-widest">
                Skills
              </span>

              <h2 className="text-4xl font-bold text-slate-900 mt-4">

                Skills You'll Master

              </h2>

              <p className="text-slate-600 mt-5 max-w-3xl mx-auto">

                Learn practical skills that companies actually use.
                Every lesson is designed around real projects rather than
                only theory.

              </p>

            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

              {[
                "Figma",
                "UI Design",
                "UX Research",
                "Wireframing",
                "Prototyping",
                "Design Systems",
                "Responsive Design",
                "SEO",
                "Technical SEO",
                "Google Analytics",
                "Digital Marketing",
                "Affiliate Marketing",
                "Google Ads",
                "Content Writing",
                "AI Tools",
                "Portfolio Building",
              ].map((skill) => (

                <div
                  key={skill}
                  className="bg-white border border-slate-200 rounded-xl p-6 text-center hover:border-cyan-400 hover:shadow-lg transition"
                >

                  <CheckCircle className="w-7 h-7 mx-auto text-cyan-500 mb-4" />

                  <p className="font-medium text-slate-800">

                    {skill}

                  </p>

                </div>

              ))}

            </div>

          </div>

        </section>
      </>

    );

}