import api from "../../constants/api";
import {fetchCoursesSuccess} from "./actions";
import {Dispatch} from "@reduxjs/toolkit";

export const fetchCourses = () =>
    async (dispatch: Dispatch) => {
        try {
            const res: any = await api.get("/Course/GetAllCourses");
            dispatch(fetchCoursesSuccess(res.data))
        } catch (e) {
            console.log(e);
        }
}

export const fetchOneCourse = (id:number) =>
    async (dispatch: Dispatch) => {
        try {
            const res2: any = await api.get(`/Theme/GetAllThemes?courseId=${id}`);
            const res: any = await api.get(`/Course/Get?Id=${id}`);
            console.log(res)
            console.log(res2)

        } catch (e) {
            console.log(e);
        }
    }