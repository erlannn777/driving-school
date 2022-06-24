import {useSelector} from "react-redux";
import {Store} from "../types";

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

export const useTest = (): {} => {
    return useSelector((state: Store) => state.courses.test);
};

export const useTestResult = () => {
    return useSelector((state: Store) => state.courses.testResult);
};

export const useButtonMenu = (): {} => {
    return useSelector((state: Store) => state.courses.menuCourses);
};
export const useButtonMenuLaval = (): {} => {
    return useSelector((state: Store) => state.courses.menuButtons)
}
export const useGrade = (): {} => {
    return useSelector((state: Store) => state.courses.grades)
}
export const useAllGrade = (): {} => {
    return useSelector((state: Store) => state.courses.allGrades)
}