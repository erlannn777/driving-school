import {
  fetchCoursesSuccess,
  fetchOneCourseSuccess,
  fetchLecturesSuccess,
  fetchOneLectureSuccess,
  fetchTestSuccess,
} from "./actions";
import { Dispatch } from "@reduxjs/toolkit";
import API, { publicApi } from "../../constants/api";

export const fetchCourses = () => async (dispatch: Dispatch) => {
  try {
    const res: any = await publicApi.get("/Course/GetAllCourses");
    dispatch(fetchCoursesSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchOneCourse = (id: number) => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get(`/Theme/GetAllThemes?courseId=${id}`);
    dispatch(fetchOneCourseSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchLectures = (id: number) => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get(`/Lecture/GetAllLectures?themeId=${id}`);
    dispatch(fetchLecturesSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchOneLecture = (id: number) => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get(`/Lecture/Get?id=${id}`);
    dispatch(fetchOneLectureSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};

export const fetchTest = (id: number) => async (dispatch: Dispatch) => {
  try {
    const res: any = await API.get(`/Test/GetTest?themeId=${id}`);
    dispatch(fetchTestSuccess(res.data));
  } catch (e) {
    console.log(e);
  }
};
