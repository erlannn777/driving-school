import {createAction} from "@reduxjs/toolkit";

export const fetchCoursesSuccess = createAction<[]>("ui/fetchCoursesSuccess");
export const fetchOneCourseSuccess = createAction<[]>("ui/fetchOneCourseSuccess");
