import { useSelector } from "react-redux";
import { Store } from "../types";

export const useCourses = (): [] => {
  return useSelector((state: Store) => state.courses.courses);
};
