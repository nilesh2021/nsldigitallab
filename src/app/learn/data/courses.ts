import { Palette, Search, TrendingUp } from "lucide-react";
import { Course } from "../types";

export const courses: Course[] = [


    {
        title: "UI/UX Design",
        description:
            "Master UX research, wireframing, prototyping, Figma, design systems and portfolio creation.",
        icon: Palette,
        lessons: "20+ Lessons",
        level: "Beginner Friendly",
        link: "/learn/ui-ux-design",
        color: "from-cyan-500 to-sky-500",
    },
    {
        title: "Digital Marketing",
        description:
            "Learn SEO, Google Ads, Meta Ads, Email Marketing, Affiliate Marketing and Analytics.",
        icon: TrendingUp,
        lessons: "25+ Lessons",
        level: "Beginner Friendly",
        link: "/learn/digital-marketing",
        color: "from-indigo-500 to-blue-600",
    },
    {
        title: "SEO",
        description:
            "Master keyword research, on-page SEO, technical SEO, local SEO and Google Search Console.",
        icon: Search,
        lessons: "18+ Lessons",
        level: "Beginner Friendly",
        link: "/learn/seo",
        color: "from-emerald-500 to-green-600",
    },

];

export default courses