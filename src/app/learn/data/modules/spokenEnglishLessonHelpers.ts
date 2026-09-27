import { LessonBlock } from "../../types";
import { lessonClose } from "./digitalMarketingLessonHelpers";

export { lessonClose };

/** Practice partner used in spoken English examples. */
export const RIYA =
  "Riya — a final-year student in Pune preparing for campus placements and internships";

export function speakingCheck(
  question: string,
  correct: string,
  wrongA: string,
  wrongB: string,
  explain: string,
): Extract<LessonBlock, { type: "check" }> {
  return {
    type: "check",
    question,
    options: [
      { id: "a", label: correct, correct: true },
      { id: "b", label: wrongA, correct: false },
      { id: "c", label: wrongB, correct: false },
    ],
    explain,
  };
}
