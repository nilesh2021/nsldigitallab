import { useState } from 'react';
import { Briefcase, Upload, X, CheckCircle2 } from 'lucide-react';
import CareerForm from './CareerForm';

export default function Career() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coverLetter: ''
  });
  const [resume, setResume] = useState<File | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResume(e.target.files[0]);
    }
  };

  const handleRemoveFile = () => {
    setResume(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', coverLetter: '' });
      setResume(null);
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div> <section className="py-20 bg-white">
  <div className="container mx-auto px-6">

    <div className="max-w-5xl mx-auto rounded-[32px] overflow-hidden bg-gradient-to-br from-[#202851] to-[#2a3561] p-10 md:p-14 relative">

      {/* BACKGROUND GLOW */}

      <div className="absolute top-0 right-0 w-72 h-72 bg-[#24c2f2]/10 rounded-full blur-3xl"></div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

        {/* LEFT CONTENT */}

        <div className="max-w-2xl">

          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-[#24c2f2] text-sm mb-5">
            Careers at NSL Digital Lab
          </span>

          <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-5">
            Interested in Building Your Career in Digital Marketing?
          </h2>

          <p className="text-lg text-gray-300 leading-relaxed">
            Explore internship and career opportunities to gain practical
            experience in SEO, content marketing, and modern digital solutions.
          </p>

        </div>

        {/* RIGHT BUTTON */}

        <div className="flex-shrink-0">

          <button
            onClick={() => {
              window.location.href = "/careers";
            }}
            className="px-8 py-4 rounded-full bg-[#24c2f2] text-white font-medium hover:scale-105 hover:bg-[#1bb3df] transition-all duration-300 shadow-xl"
          >
            View Careers
          </button>

        </div>

      </div>

    </div>

  </div>
</section>
    <section
  id="careers"
  className="py-24 bg-gradient-to-br from-[#202851] to-[#2a3561] text-white"
>
  <div className="container mx-auto px-6">

    {/* SECTION HEADER */}

    <div className="text-center mb-14">
      <h2 className="text-3xl md:text-4xl font-semibold mb-4">
        Careers at NSL Digital Lab
      </h2>

      <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Join a growing digital team and gain practical experience in SEO,
        content marketing, and modern web solutions.
      </p>
    </div>

    {/* CAREER CARD */}

    <div className="max-w-4xl mx-auto">

      <div className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10 mb-10">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

          {/* LEFT */}

          <div className="flex items-start gap-4">

            <div className="w-14 h-14 bg-[#24c2f2] rounded-2xl flex items-center justify-center flex-shrink-0">
              <Briefcase className="w-7 h-7 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-3">
                SEO / Digital Marketing Intern
              </h3>

              <div className="flex flex-wrap gap-3 text-sm text-gray-300 mb-4">

                <span className="px-3 py-1 bg-white/10 rounded-full">
                  Remote
                </span>

                <span className="px-3 py-1 bg-white/10 rounded-full">
                  Internship
                </span>

                <span className="px-3 py-1 bg-white/10 rounded-full">
                  3–6 Months
                </span>

              </div>

              <p className="text-gray-300 leading-relaxed max-w-2xl">
                Learn practical SEO strategies, content optimization,
                keyword research, and digital marketing workflows while
                working on real-world projects.
              </p>

            </div>

          </div>

        </div>

        {/* SKILLS */}

        <div className="flex flex-wrap gap-3 mt-8">

          {[
            "SEO Basics",
            "Keyword Research",
            "Content Marketing",
            "Analytics",
            "Communication Skills",
          ].map((skill, index) => (
            <span
              key={index}
              className="px-4 py-2 rounded-full bg-white/10 text-sm text-gray-200"
            >
              {skill}
            </span>
          ))}

        </div>

      </div>

      {/* FORM SECTION */}

      <div className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-10">

        <h3 className="text-2xl font-semibold mb-6">
          Apply for This Position
        </h3>

        <CareerForm />

      </div>

    </div>

  </div>
</section>
      

</div>

  );
}
