import { LucideIcon } from "lucide-react";

export interface Course {
  title: string;
  description: string;
  lessons: string;
  level: string;
  color: string;
  link: string;
  icon: LucideIcon;
}

export interface Benefit {
  title: string;
  description: string;
}

export interface Skill {
  title: string;
}

export interface RoadmapStep {
  step: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}