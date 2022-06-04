import { IUIState } from "./ui/interfaces/data.interface";
import {ICoursesState} from "./courses/interface/data.interface";

export interface Store {
  ui: IUIState;
  courses:ICoursesState;
}
