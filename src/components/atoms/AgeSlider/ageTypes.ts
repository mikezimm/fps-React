
export const changesAgeSlider: string[] = [ 'AgeIsVisible', 'AgeColumnName', 'AgeColumnTitle', 'AgeDefault', ];

export interface IAgeSliderWPProps {
  AgeIsVisible: boolean;
  AgeColumnName: string;
  AgeColumnTitle: string;
  AgeDefault: number; //Should be index of AgeSliderOption
}

export interface IAgeSliderProps extends IAgeSliderWPProps {
  onChange: any; // returns the current value (value: number, ) => this._searchForItems( this.state.searchText, this.state.searchMeta, this.state.searchMeta.length, 'age', value )
  disabled?: boolean;
}

//NOTE:  THIS NEEDS TO MATCH IPropertyPaneDropdownOption
// import { IPropertyPaneDropdownOption, } from '@microsoft/sp-property-pane';

export interface IAgeSliderItem {
  key: string | number; // Used for prop pane group
  maxAge: number; // number of days to show from today
  text: string; // text: matching prop for PropPane Group.  value label to show on slider
}

export const AgeSliderOptions: IAgeSliderItem[] = [
  {  key: 0, maxAge: 1,  text: 'The past day', },
  {  key: 1, maxAge: 7,  text: 'The past week', },
  {  key: 2, maxAge: 31,  text: 'The past month', },
  {  key: 3, maxAge: 92,  text: 'The past 3 months', },
  {  key: 4, maxAge: 365,  text: 'The past year', },
  {  key: 5, maxAge: 365*100,  text: 'All ages', },
];

// This is the array the hook uses for text IF the column is Modified or Created to better match SharePoint OOTB
export const AgeSliderOptionsOOTB: IAgeSliderItem[] = [
  {  key: 0, maxAge: 1,  text: 'in the last day', },
  {  key: 1, maxAge: 7,  text: 'in last 7 days', },
  {  key: 2, maxAge: 31,  text: 'in last 30 days', },
  {  key: 3, maxAge: 92,  text: 'in last 3 months', },
  {  key: 4, maxAge: 365,  text: 'in last year', },
  {  key: 5, maxAge: 365*100,  text: 'All ages', },
];

export const FPSAgeSliderPresetEverywhere: IAgeSliderWPProps = {
  AgeIsVisible: true,
  AgeColumnName: 'Modified',
  AgeColumnTitle: 'Modified',
  AgeDefault: ( AgeSliderOptions.length -1 ), //Should be index of AgeSliderOption
}