import { LearningPath } from "../../types";
import { digitalMarketingFoundationsPath } from "./digitalMarketingFoundations";
import { reactFoundationsPath } from "./reactFoundations";
import { spokenEnglishCommunicationPath } from "./spokenEnglishCommunication";
import { uiUxDesignPath } from "./uiUxDesign";

export const learningPaths: Record<string, LearningPath> = {
  [reactFoundationsPath.slug]: reactFoundationsPath,
  [uiUxDesignPath.slug]: uiUxDesignPath,
  [digitalMarketingFoundationsPath.slug]: digitalMarketingFoundationsPath,
  [spokenEnglishCommunicationPath.slug]: spokenEnglishCommunicationPath,
};

export {
  digitalMarketingFoundationsPath,
  reactFoundationsPath,
  spokenEnglishCommunicationPath,
  uiUxDesignPath,
};
