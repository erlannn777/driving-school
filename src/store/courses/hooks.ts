import {useSelector} from "react-redux";
import {Store} from "../types";
import {ICoursesState} from "./interface/data.interface";

export const useCourses = ():[] => {
    return useSelector((state: Store) => state.courses.courses);
};
