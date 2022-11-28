
// ####################################################### #######################################################
// ####################################################### #######################################################

import { IWebpartHistory } from "../WebPartHistory/Interface";
import { ISupportedHost } from "./layout";

export interface IMinBannerUtilityProps {
  // [key: string]: string | ISupportedHost | boolean | IWebpartHistory ;
  uniqueId: string;
  pageLayout: ISupportedHost ;// like SinglePageApp etc... this.context[_pageLayout];

  showRepoLinks: boolean;
  showExport: boolean;

  fpsImportProps: string;

  //ADDED FOR WEBPART HISTORY:
  webpartHistory: IWebpartHistory;

  showTricks: boolean;

}

export const changeBannerUtility : string[] = [ 'showRepoLinks', 'showExport',  ];