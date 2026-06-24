import { Link } from "react-router-dom";
 
import {
    CheckCircle,
    ArrowRight
} from "lucide-react";

export default function Community() {
  
    return (
       
      <> 
         <section className="py-24 bg-white">

          <div className="max-w-7xl mx-auto px-6 lg:px-8">

            <div className="text-center mb-16">

              <span className="text-cyan-500 uppercase tracking-widest font-semibold">

                Community

              </span>

              <h2 className="text-4xl font-bold mt-4">

                Who Is This Learning Platform For?

              </h2>

              <p className="text-slate-600 mt-5 max-w-3xl mx-auto">

                Whether you're just starting or looking to level up your
                career, our free learning platform is designed to help.

              </p>

            </div>

            <div className="grid md:grid-cols-3 gap-8">

              <div className="rounded-2xl border border-slate-200 p-8">

                <h3 className="text-xl font-bold">

                  🎓 Students

                </h3>

                <p className="text-slate-600 mt-4 leading-7">

                  Learn industry-ready skills before graduation and build
                  a portfolio that stands out.

                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 p-8">

                <h3 className="text-xl font-bold">

                  💼 Job Seekers

                </h3>

                <p className="text-slate-600 mt-4 leading-7">

                  Prepare for interviews, improve your resume and gain
                  practical experience through projects.

                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 p-8">

                <h3 className="text-xl font-bold">

                  🚀 Freelancers

                </h3>

                <p className="text-slate-600 mt-4 leading-7">

                  Learn how to work with clients, build websites,
                  optimize SEO and grow your freelancing career.

                </p>

              </div>

            </div>

          </div>

        </section>
 
      </>

    );

}