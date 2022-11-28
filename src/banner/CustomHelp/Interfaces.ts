import { IPropertyFieldGroupOrPerson } from "@mikezimm/fps-js/lib/indexes/PnpSPFxPropControls@3.11.0";

// ####################################################### #######################################################
// ####################################################### #######################################################

import { IEveryoneAudience } from "../Audiences/Interfaces";

export interface IMinCustomHelpProps {
  // [key: string]: string | boolean | IPropertyFieldGroupOrPerson[] | any | undefined ;
  showCustomHelp: boolean;
  fullPanelAudience : IEveryoneAudience;
  
  replacePanelHTML : any;  //This is the jsx sent to panel for User controled information (aka what reader will see when clicking 'info' button)
  
  //These are added for the minimum User Panel component ( which turns into the replacePanelHTML component )
  panelMessageDescription1: string; //
  panelMessageSupport: string;
  panelMessageDocumentation: string;
  panelMessageIfYouStill: string;
  requireDocumentation: boolean;  //Should be adjusted using PreConfiguredPresets if needed on WP or site basis
  documentationLinkDesc: string;
  documentationLinkUrl: string;
  documentationIsValid: boolean;
  requireContacts: boolean; //This is used to throw an error if it is required but there are no contacts.
  supportContacts: IPropertyFieldGroupOrPerson[];
}

export const changeCustomHelp : string[] = [ 'panelMessageDescription1', 'panelMessageSupport', 'panelMessageDocumentation', 'panelMessageIfYouStill',
    'documentationLinkDesc', 'documentationLinkUrl', 'documentationIsValid', 'supportContacts', 'requireDocumentation', 'requireContacts' ];
