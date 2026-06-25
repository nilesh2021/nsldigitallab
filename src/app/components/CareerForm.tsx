
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitCareerApplication } from "../../services/career";
type Props = {
  jobTitle: string;
};

export default function CareerForm({ jobTitle }: Props) {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    resume: "",
    message: "",
  });
  async function handleSubmit(
    e: React.FormEvent
  ) {

    e.preventDefault();

    if (
      !form.name ||
      !form.email ||
      !form.phone
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {

      const result = await submitCareerApplication({
        ...form,
        jobTitle,
      });

      if (!result.success) {

        alert("Something went wrong.");

        return;

      }
      setForm({
        name: "",
        email: "",
        phone: "",
        resume: "",
        message: "",
      });
   navigate("/thank-you?type=career");

    } finally {

      setLoading(false);

    }

  }
  const [loading, setLoading] = useState(false);
  return (

    <div className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10">

      <h3 className="text-2xl font-semibold text-white mb-8">
        Apply Now
      </h3>

      <form onSubmit={handleSubmit} className="space-y-5">


        {/* Full Name */}
        <div>

          <label className="block text-sm text-gray-300 mb-2">
            Full Name
          </label>

          <input value={form.name}
            onChange={(e) =>
              setForm({
                ...form,
                name: e.target.value
              })
            }
            type="text"
            name="name"
            required
            placeholder="Enter your full name"
            className="
        w-full
        px-5
        py-3.5
        rounded-2xl
        bg-white/5
        border
        border-white/10
        hover:border-white/20
        focus:border-[#24c2f2]
        outline-none
        text-white
        placeholder:text-gray-500
        transition-all
      "
          />

        </div>

        {/* Email + Phone */}
        <div className="grid md:grid-cols-2 gap-5">

          <div>

            <label className="block text-sm text-gray-300 mb-2">
              Email Address
            </label>

            <input value={form.email}
              onChange={(e) =>
                setForm({
                  ...form,
                  email: e.target.value
                })
              }
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="
          w-full
          px-5
          py-3.5
          rounded-2xl
          bg-white/5
          border
          border-white/10
          hover:border-white/20
          focus:border-[#24c2f2]
          outline-none
          text-white
          placeholder:text-gray-500
          transition-all
        "
            />

          </div>

          <div>

            <label className="block text-sm text-gray-300 mb-2">
              Phone Number
            </label>

            <input value={form.phone}
              onChange={(e) =>
                setForm({
                  ...form,
                  phone: e.target.value
                })
              }
              type="tel"
              name="phone"
              required
              placeholder="Enter your phone number"
              className="
          w-full
          px-5
          py-3.5
          rounded-2xl
          bg-white/5
          border
          border-white/10
          hover:border-white/20
          focus:border-[#24c2f2]
          outline-none
          text-white
          placeholder:text-gray-500
          transition-all
        "
            />

          </div>

        </div>

        {/* Resume Link */}
        <div>

          <label className="block text-sm text-gray-300 mb-2">
            Resume / Portfolio Link
          </label>

          <input value={form.resume}
            onChange={(e) =>
              setForm({
                ...form,
                resume: e.target.value
              })
            }
            type="url"
            name="resume"
            placeholder="Google Drive, LinkedIn or Portfolio URL"
            className="
        w-full
        px-5
        py-3.5
        rounded-2xl
        bg-white/5
        border
        border-white/10
        hover:border-white/20
        focus:border-[#24c2f2]
        outline-none
        text-white
        placeholder:text-gray-500
        transition-all
      "
          />

        </div>

        {/* Message */}
        <div>

          <label className="block text-sm text-gray-300 mb-2">
            Why do you want to join nsldigitallab? (Optional)
          </label>

          <textarea value={form.message}
            onChange={(e) =>
              setForm({
                ...form,
                message: e.target.value
              })
            }
            name="message"
            rows={4}
            placeholder="Write a short message..."
            className="
        w-full
        px-5
        py-3.5
        rounded-2xl
        bg-white/5
        border
        border-white/10
        hover:border-white/20
        focus:border-[#24c2f2]
        outline-none
        text-white
        placeholder:text-gray-500
        resize-none
        transition-all
      "
          />

        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="
w-full
py-3.5
rounded-full
bg-[#24c2f2]
text-white
font-medium
hover:bg-[#1da8d4]
hover:scale-[1.01]
transition-all
duration-300
shadow-xl
disabled:opacity-70
disabled:cursor-not-allowed
"
        >
          {loading ? "Submitting..." : "Submit Application"}
        </button>

      </form>

    </div>
  );
}