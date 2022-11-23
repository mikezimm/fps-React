//Hook and it's props
import FPSAgeSliderHook, { IFPSAgeSliderHookProps } from "./components/atoms/FPSAgeSlider/FPSAgeHook";
//Constants
import { changesAgeSlider, FPSAgeSliderOptions, FPSAgeSliderOptionsOOTB, FPSAgeSliderPresetEverywhere } from "./components/atoms/FPSAgeSlider/FPSAgeTypes";
//Interfaces
import { IFPSAgeSliderWPProps, IFPSAgeSliderProps, IFPSAgeSliderItem } from "./components/atoms/FPSAgeSlider/FPSAgeTypes";
//PropPaneGroup
import{ buildAgeSliderGroup } from './components/atoms/FPSAgeSlider/FPSAgePropPaneGroup';


export default FPSAgeSliderHook;

export { IFPSAgeSliderHookProps, 
  changesAgeSlider, FPSAgeSliderOptions, FPSAgeSliderOptionsOOTB, FPSAgeSliderPresetEverywhere,
  IFPSAgeSliderWPProps, IFPSAgeSliderProps, IFPSAgeSliderItem,
  buildAgeSliderGroup
 };