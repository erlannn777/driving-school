import { createReducer } from "@reduxjs/toolkit";
import {
  clearLecturesSuccess,
  clearStateSuccess,
  fetchCoursesSuccess,
  fetchLecturesSuccess,
  fetchOneCourseSuccess,
  fetchOneLectureSuccess,
  fetchTestSuccess,
  sendTestResultSuccess,
} from "./actions";
import { ICoursesState } from "./interface/data.interface";

export const initialState: ICoursesState = {
  courses: [],
  course: [],
  lectures: [],
  lecture: {},
  test: {},
  testResult: [],
};

export default createReducer<ICoursesState>(initialState, (builder) =>
  builder
    .addCase(
      fetchCoursesSuccess,
      (state, { payload }): ICoursesState => ({ ...state, courses: payload })
    )
    .addCase(
      fetchOneCourseSuccess,
      (state, { payload }): ICoursesState => ({ ...state, course: payload })
    )
    .addCase(
      fetchLecturesSuccess,
      (state, { payload }): ICoursesState => ({ ...state, lectures: payload })
    )
    .addCase(
      clearLecturesSuccess,
      (state, { payload }): ICoursesState => ({
        ...state,
        lectures: [],
      })
    )
    .addCase(
      fetchOneLectureSuccess,
      (state, { payload }): ICoursesState => ({ ...state, lecture: payload })
    )
    .addCase(
      fetchTestSuccess,
      (state, { payload }): ICoursesState => ({ ...state, test: payload })
    )
    .addCase(sendTestResultSuccess, (state, { payload }) => {
      state.testResult.push(payload);
    })
    .addCase(
      clearStateSuccess,
      (state, { payload }): ICoursesState => ({
        ...initialState,
      })
    )
);
