import { reactFoundationsModule01 } from "../modules/reactFoundationsModule01";
import { reactFoundationsModule02 } from "../modules/reactFoundationsModule02";
import { reactFoundationsModule03 } from "../modules/reactFoundationsModule03";
import { reactFoundationsModule04 } from "../modules/reactFoundationsModule04";
import { reactFoundationsModule05 } from "../modules/reactFoundationsModule05";
import { reactFoundationsModule06 } from "../modules/reactFoundationsModule06";
import { reactFoundationsModule07 } from "../modules/reactFoundationsModule07";
import { reactFoundationsModule08 } from "../modules/reactFoundationsModule08";
import { reactFoundationsModule09 } from "../modules/reactFoundationsModule09";
import { reactFoundationsModule10 } from "../modules/reactFoundationsModule10";
import { uiUxDesignModule01 } from "../modules/uiUxDesignModule01";
import { uiUxDesignModule02 } from "../modules/uiUxDesignModule02";
import { uiUxDesignModule03 } from "../modules/uiUxDesignModule03";
import { uiUxDesignModule04 } from "../modules/uiUxDesignModule04";
import { uiUxDesignModule05 } from "../modules/uiUxDesignModule05";
import { uiUxDesignModule06 } from "../modules/uiUxDesignModule06";
import { uiUxDesignModule07 } from "../modules/uiUxDesignModule07";
import { uiUxDesignModule08 } from "../modules/uiUxDesignModule08";
import { uiUxDesignModule09 } from "../modules/uiUxDesignModule09";
import { uiUxDesignModule10 } from "../modules/uiUxDesignModule10";
import { buildCourseCatalog } from "../../progress/catalog";
import { CourseCatalog } from "../../progress/types";

export const reactFoundationsCatalog = buildCourseCatalog([
  reactFoundationsModule01,
  reactFoundationsModule02,
  reactFoundationsModule03,
  reactFoundationsModule04,
  reactFoundationsModule05,
  reactFoundationsModule06,
  reactFoundationsModule07,
  reactFoundationsModule08,
  reactFoundationsModule09,
  reactFoundationsModule10,
]);

export const uiUxDesignCatalog = buildCourseCatalog([
  uiUxDesignModule01,
  uiUxDesignModule02,
  uiUxDesignModule03,
  uiUxDesignModule04,
  uiUxDesignModule05,
  uiUxDesignModule06,
  uiUxDesignModule07,
  uiUxDesignModule08,
  uiUxDesignModule09,
  uiUxDesignModule10,
]);

export const courseCatalogs: Record<string, CourseCatalog> = {
  [reactFoundationsCatalog.pathSlug]: reactFoundationsCatalog,
  [uiUxDesignCatalog.pathSlug]: uiUxDesignCatalog,
};

export function getCourseCatalog(pathSlug: string) {
  return courseCatalogs[pathSlug];
}
