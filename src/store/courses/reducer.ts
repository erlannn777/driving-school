import { createReducer } from "@reduxjs/toolkit";
import {
  fetchCoursesSuccess,
  fetchLecturesSuccess,
  fetchOneCourseSuccess,
  fetchOneLectureSuccess,
  fetchTestSuccess,
} from "./actions";
import { ICoursesState } from "./interface/data.interface";

export const initialState: ICoursesState = {
  courses: [],
  course: [],
  lectures: [],
  lecture: {},
  test: {},
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
      fetchOneLectureSuccess,
      (state, { payload }): ICoursesState => ({ ...state, lecture: payload })
    )
    .addCase(
      fetchTestSuccess,
      (state, { payload }): ICoursesState => ({ ...state, test: payload })
    )
);
