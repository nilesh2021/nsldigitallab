import { LearningPath } from "../../types";
import { reactFoundationsPath } from "./reactFoundations";

export const learningPaths: Record<string, LearningPath> = {
  [reactFoundationsPath.slug]: reactFoundationsPath,
};

export { reactFoundationsPath };
