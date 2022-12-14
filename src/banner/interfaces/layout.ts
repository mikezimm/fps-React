
/**
 * Used for Expandoramic viewing and 
 */

export type IFPSBasicToggleSetting = 'skip' | true | false;


/**
 * Deprecated... replace with IEveryoneAudience
 */
// export type IFPSExpandoAudience = 'Everyone' | 'Site Admins' | 'Site Owners' | 'Page Editors' ;

/**
 * NOTE:  ISupportedHost may need to be deprecated and should be renamed as IPageLayoutType.
 * Supported hosts is the property name in the manifest.json but the values for that do not match up to the PageLayoutType
 */
export type ISupportedHost = "SharePointWebPart"| "TeamsPersonalApp"| "TeamsTab"| "SharePointFullPage" | "SingleWebPartAppPageLayout";

//Added Home as option based on testing on SharePointLists home page.
export type IPageLayoutType = "SharePointWebPart"| "TeamsPersonalApp"| "TeamsTab"| "SharePointFullPage" | "SingleWebPartAppPageLayout" | "Home" ;
