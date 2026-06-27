export interface Job {
  id: number;
  title: string;
  location: string;
  experience: string;
  type: string;
  status: "Open" | "Closed";
}

export const jobs: Job[] = [
  {
    id: 1,
    title: "UI/UX Designer",
    location: "Remote",
    experience: "2+ Years",
    type: "Full Time",
    status: "Open",
  },
  {
    id: 2,
    title: "React Developer",
    location: "Remote",
    experience: "1+ Years",
    type: "Full Time",
    status: "Open",
  },
  {
    id: 3,
    title: "SEO Executive",
    location: "Remote",
    experience: "Fresher",
    type: "Internship",
    status: "Open",
  },
   {
    id: 4,
     title: "WordPress Developer",
  location: "Remote",
  experience: "2+ Years",
  type: "Full Time",
  status: "Open",
  }
];