import { createAction } from "@reduxjs/toolkit";
import exp from "constants";

export const fetchCoursesSuccess = createAction<[]>(
  "courses/fetchCoursesSuccess"
);
export const fetchOneCourseSuccess = createAction<[]>(
  "courses/fetchOneCourseSuccess"
);
export const fetchLecturesSuccess = createAction<[]>(
  "courses/fetchOneLecturesSuccess"
);
export const fetchOneLectureSuccess = createAction<[]>(
  "courses/fetchOneLectureSuccess"
);

export const fetchTestSuccess = createAction<[]>("courses/fetchTestSuccess");
export const fetchMenuBtns = createAction<[]>('courses/fetchMenuBtns');
export const fetchMenuBtnsLaval = createAction<[]>('courses/fetchMenuBtnsLaval')
export const fetchGrade = createAction<[]>('courses/fetchGrade')
export const fetchAllGrade = createAction<[]>('courses/fetchAllGrade')

export const sendTestResultSuccess = createAction<{}>(
  "courses/sendTestResultSuccess"
);

export const clearStateSuccess = createAction<void>(
  "courses/clearStateSuccess"
);

export const clearLecturesSuccess = createAction<void>(
  "courses/clearLecturesSuccess"
);
