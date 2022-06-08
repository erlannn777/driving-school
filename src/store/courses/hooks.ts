import { useSelector } from "react-redux";
import { Store } from "../types";

export const useCourses = (): [] => {
  return useSelector((state: Store) => state.courses.courses);
};

export const useOneCourse = (): [] => {
  return useSelector((state: Store) => state.courses.course);
};

export const useLectures = (): [] => {
  return useSelector((state: Store) => state.courses.lectures);
};

export const useOneLecture = (): {} => {
  return useSelector((state: Store) => state.courses.lecture);
};
