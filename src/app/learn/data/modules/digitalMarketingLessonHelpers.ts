import { LessonBlock } from "../../types";

/** Reusable lesson tail: mistake, takeaway, tip, exercise, check */
export function lessonClose(opts: {
  mistake: string;
  takeaway: string;
  tip: string;
  exerciseTitle?: string;
  exerciseSteps: string[];
  check: Extract<LessonBlock, { type: "check" }>;
}): LessonBlock[] {
  return [
    { type: "p", text: `**Common beginner mistake:** ${opts.mistake}` },
    { type: "p", text: `**Key takeaway:** ${opts.takeaway}` },
    { type: "tip", text: opts.tip },
    {
      type: "exercise",
      title: opts.exerciseTitle ?? "Try it yourself",
      steps: opts.exerciseSteps,
    },
    opts.check,
  ];
}

export const BRIGHTBREW =
  "BrightBrew — a small café near office parks that wants more weekday lunch orders";
