import { createAction } from "@reduxjs/toolkit";

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
