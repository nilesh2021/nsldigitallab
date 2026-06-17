import { CheckCircle2 } from "lucide-react";

export default function CareerForm() {

  return (

    <div className="rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 p-6 sm:p-8 md:p-10">

      <h3 className="text-2xl font-semibold text-white mb-8">
        Apply Now
      </h3>

   <form
  action="https://formsubmit.co/hello@nsldigitallab.com"
  method="POST"
  className="space-y-5"
>

  {/* Hidden Fields */}
  <input
    type="hidden"
    name="_captcha"
    value="false"
  />

  <input
    type="hidden"
    name="_subject"
    value="New Career Application - nsldigitallab"
  />

  <input
    type="hidden"
    name="_next"
    value="https://nsldigitallab.co.in/careers"
  />

  {/* Full Name */}
  <div>

    <label className="block text-sm text-gray-300 mb-2">
      Full Name
    </label>

    <input
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

      <input
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

      <input
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

    <input
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

    <textarea
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
    "
  >

    Submit Application

  </button>

</form>

    </div>
  );
}