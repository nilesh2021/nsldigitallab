import { LearningPath } from "../../types";
import { reactFoundationsPath } from "./reactFoundations";
import { uiUxDesignPath } from "./uiUxDesign";

export const learningPaths: Record<string, LearningPath> = {
  [reactFoundationsPath.slug]: reactFoundationsPath,
  [uiUxDesignPath.slug]: uiUxDesignPath,
};

export { reactFoundationsPath, uiUxDesignPath };
