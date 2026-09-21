import { Code2, Palette, Search, TrendingUp } from "lucide-react";
import { Course } from "../types";

export const courses: Course[] = [
    {
        title: "UI/UX Design",
        description:
            "Master UX research, wireframing, prototyping, Figma, design systems and portfolio creation.",
        icon: Palette,
        lessons: "20+ Lessons",
        level: "Beginner Friendly",
        color: "from-cyan-500 to-sky-500",
    },
    {
        title: "Digital Marketing",
        description:
            "Learn SEO, Google Ads, Meta Ads, Email Marketing, Affiliate Marketing and Analytics.",
        icon: TrendingUp,
        lessons: "25+ Lessons",
        level: "Beginner Friendly",
        color: "from-indigo-500 to-blue-600",
    },
    {
        title: "SEO",
        description:
            "Master keyword research, on-page SEO, technical SEO, local SEO and Google Search Console.",
        icon: Search,
        lessons: "18+ Lessons",
        level: "Beginner Friendly",
        color: "from-emerald-500 to-green-600",
    },
    {
        title: "React Foundations",
        description:
            "Learn JSX, components, props, state, events, lists, and core hooks so you can build real UI.",
        icon: Code2,
        lessons: "10 Modules",
        level: "Beginner → Intermediate",
        link: "/learn/react-foundations",
        color: "from-sky-500 to-violet-600",
    },
];

export default courses;
