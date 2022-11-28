//Hook and it's props
import { createBasePerformanceInit, 
  startPerformOp, startPerformOpDetail, updatePerformanceEnd,
  updatePerformOpSimple, 
  // startPerformanceInit_ALVFM, startPerformanceInit_SS7, //Deprecating these in future
} from "./components/molecules/Performance/functions";

import { createPerformanceTableVisitor,  } from "./components/molecules/Performance/tables";
import type { ILoadPerformance } from "./components/molecules/Performance/IPerformance";

// export default FPSAgeSliderHook;

export { ILoadPerformance,
  createPerformanceTableVisitor,
  createBasePerformanceInit, 
  startPerformOp, startPerformOpDetail, updatePerformanceEnd,
  updatePerformOpSimple, 
  // startPerformanceInit_ALVFM, startPerformanceInit_SS7, //Deprecating these in future
 };