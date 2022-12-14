

// ####################################################### #######################################################
// ####################################################### #######################################################

import { IEveryoneAudience } from "../Audiences/Interfaces";

export interface IMinPandoramicProps {
  // [key: string]: string | boolean | number | IEveryoneAudience | any | undefined ;
  //2022-02-17:  Added these for expandoramic mode
  enableExpandoramic: boolean;
  expandoDefault: boolean;
  expandoStyle: any;
  expandoPadding: number;
  expandoAudience: IEveryoneAudience;

}
export const changeExpando : string[] = [ 
  'enableExpandoramic','expandoDefault','expandoStyle', 'expandoPadding', 'expandoAudience',
];