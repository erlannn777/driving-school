import {createReducer} from "@reduxjs/toolkit";
import {
    clearLecturesSuccess,
    clearStateSuccess, fetchAllGrade,
    fetchCoursesSuccess, fetchGrade,
    fetchLecturesSuccess, fetchMenuBtns, fetchMenuBtnsLaval,
    fetchOneCourseSuccess,
    fetchOneLectureSuccess,
    fetchTestSuccess,
    sendTestResultSuccess,
} from "./actions";
import {ICoursesState} from "./interface/data.interface";

export const initialState: ICoursesState = {
    courses: [],
    course: [],
    lectures: [],
    lecture: {},
    test: {},
    testResult: [],
    menuCourses: [],
    menuButtons: [],
    grades: [],
    allGrades:[],
};

export default createReducer<ICoursesState>(initialState, (builder) =>
    builder
        .addCase(
            fetchCoursesSuccess,
            (state, {payload}): ICoursesState => ({...state, courses: payload})
        )
        .addCase(
            fetchOneCourseSuccess,
            (state, {payload}): ICoursesState => ({...state, course: payload})
        )
        .addCase(
            fetchLecturesSuccess,
            (state, {payload}): ICoursesState => ({...state, lectures: payload})
        )
        .addCase(
            clearLecturesSuccess,
            (state, {payload}): ICoursesState => ({
                ...state,
                lectures: [],
            })
        )
        .addCase(
            fetchOneLectureSuccess,
            (state, {payload}): ICoursesState => ({...state, lecture: payload})
        )
        .addCase(
            fetchTestSuccess,
            (state, {payload}): ICoursesState => ({...state, test: payload})
        )
        .addCase(sendTestResultSuccess, (state, {payload}) => {
            state.testResult.push(payload);
        })
        .addCase(
            clearStateSuccess,
            (state, {payload}): ICoursesState => ({
                ...initialState,
            })
        )
        .addCase(
            fetchMenuBtns,
            (state, {payload}): ICoursesState => ({...state, menuCourses: payload})
        )
        .addCase(
            fetchMenuBtnsLaval,
            (state, {payload}): ICoursesState => ({...state, menuButtons: payload})
        )
        .addCase(
            fetchGrade,
            (state, {payload}): ICoursesState => ({...state, grades: payload})
        )
        .addCase(
            fetchAllGrade,
            (state, {payload}): ICoursesState => ({...state, allGrades: payload})
        )
);
