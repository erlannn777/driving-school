import { createAction } from "@reduxjs/toolkit";

export const fetchCoursesSuccess = createAction<[]>(
  "courses/fetchCoursesSuccess"
);
export const fetchOneCourseSuccess = createAction<[]>(
  "courses/fetchOneCourseSuccess"
);
