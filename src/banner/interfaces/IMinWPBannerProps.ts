import { IMinCustomHelpProps } from "../CustomHelp/Interfaces";
import { IMinPandoramicProps } from "../Expando/Interfaces";
import { IMinPageStyleProps } from "../PageStyle/Interfaces";
import { IMinPinMeProps } from "../PinMe/Interfaces";
import { changeBannerTheme, IMinBannerThemeProps } from "../Theme/Interfaces";
import { changeBannerBasics, changeBannerNav, IMinBannerUIProps } from "./IMinBannerUIProps";
import { changeBannerUtility, IMinBannerUtilityProps } from "./IMinBannerUtilityProps";


/**
 * Usage:  export interface FutureMailable extends IMinWPBannerProps {
 */

 export interface IMinWPBannerProps extends 
  IMinBannerUIProps, IMinPinMeProps, IMinPandoramicProps, 
  IMinBannerThemeProps, IMinCustomHelpProps, IMinPageStyleProps, 
  IMinBannerUtilityProps {

}

export const changeBanner : string[] = [ ...changeBannerBasics, ...changeBannerNav, ...changeBannerTheme, ...changeBannerUtility  ];
