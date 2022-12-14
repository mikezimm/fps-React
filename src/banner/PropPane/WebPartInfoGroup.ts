// was src\Services\PropPane\zReusablePropPane.ts

import {
//  IPropertyPanePage,
//  IPropertyPaneGroup,
//  PropertyPaneLabel,
//  IPropertyPaneLabelProps,
//  PropertyPaneHorizontalRule,
  PropertyPaneTextField, 
  // IPropertyPaneTextFieldProps,
  PropertyPaneLink, 
  // IPropertyPaneLinkProps,
 // PropertyPaneDropdown, IPropertyPaneDropdownProps,
  // IPropertyPaneDropdownOption,
  PropertyPaneToggle,
//  IPropertyPaneConfiguration,
//  PropertyPaneButton,
//  PropertyPaneButtonType,
  PropertyPaneSlider, 
  // IPropertyPaneSliderProps,
} from '@microsoft/sp-property-pane';

// import { PropertyPaneWebPartInformation } from '@pnp/spfx-property-controls/lib/PropertyPaneWebPartInformation';

import { fpsLogo326 } from '../../components/atoms/SVGIcons/fpsLogo326';

import { IRepoLinks } from '../Links/CreateLinks';

/**
 * 
 * @param gitRepoLinks 
 * @param shortDescription 
 * @param PropertyPaneWebPartInformation import { PropertyPaneWebPartInformation } from '@pnp/spfx-property-controls/lib/PropertyPaneWebPartInformation';
 * @returns 
 */
export function WebPartInfoGroup( gitRepoLinks : IRepoLinks, shortDescription: any, PropertyPaneWebPartInformation: any ) {

  let infoGroup = { groupName: 'Web Part Info',
  isCollapsed: true ,
  groupFields: [
    PropertyPaneWebPartInformation({
      description: `<img src='${fpsLogo326}'/>`,
      key: 'webPartInfoId'
    }) ,
    PropertyPaneWebPartInformation({
      description: `<p><i>"If you change the way you look at things, the things you look at change."</i></p>`,
      key: 'webPartInfoId2'
    }) ,
  /*
    PropertyPanePropertyEditor({
      webpart: this,
      key: 'propertyEditor'
    })  ,
  */
    PropertyPaneWebPartInformation({
      description: shortDescription,
      key: 'webPartInfoId3'
    }) ,

    PropertyPaneLink('About Link' , {
      text: 'Github Repo:  ' + gitRepoLinks.desc ,
      href: gitRepoLinks.href,
      target: gitRepoLinks.target,
    }),

    PropertyPaneLink('Issues Link' , {
      text: 'Report Issues:  ' + gitRepoLinks.desc ,
      href: gitRepoLinks.href  + '/issues',
      target: gitRepoLinks.target,
    }),

  ]
  };

  return infoGroup;

}
