import { useState } from "react";

type Job = {
  id: number;
  title: string;
  location: string;
  experience: string;
  type: string;
  status: "Open" | "Closed";
};

type JobFormProps = {
  onAddJob: (job: Job) => void;
};

export default function JobForm({ onAddJob }: JobFormProps) {

  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [type, setType] = useState("Full Time");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!title || !location || !experience) {
      alert("Please fill all fields.");
      return;
    }

    onAddJob({
      id: Date.now(),
      title,
      location,
      experience,
      type,
      status: "Open",
    });

    setTitle("");
    setLocation("");
    setExperience("");
    setType("Full Time");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow"
    >
      <h2 className="mb-6 text-2xl font-bold">
        Add New Job
      </h2>

      <div className="grid gap-4 md:grid-cols-2">

        <input
          className="rounded-lg border p-3"
          placeholder="Job Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="rounded-lg border p-3"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          className="rounded-lg border p-3"
          placeholder="Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        />

        <select
          className="rounded-lg border p-3"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Internship</option>
        </select>

      </div>

      <button
        className="mt-6 rounded-lg bg-cyan-600 px-6 py-3 font-semibold text-white"
      >
        Save Job
      </button>

    </form>
  );
}