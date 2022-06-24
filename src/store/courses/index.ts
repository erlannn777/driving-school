import {
    fetchCoursesSuccess,
    fetchOneCourseSuccess,
    fetchLecturesSuccess,
    fetchOneLectureSuccess,
    fetchTestSuccess, fetchMenuBtns, fetchMenuBtnsLaval, fetchGrade, fetchAllGrade,
} from "./actions";
import {Dispatch} from "@reduxjs/toolkit";
import API, {publicApi} from "../../constants/api";

export const fetchCourses = () => async (dispatch: Dispatch) => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            const res: any = await publicApi.get("/Course/GetAllCourses");
            dispatch(fetchCoursesSuccess(res.data));
        } else {
            const res: any = await API.get("/Course/GetAllCourses");
            dispatch(fetchCoursesSuccess(res.data));
        }
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

export const getItemExample = () => async (dispatch: Dispatch) => {
    try {
        const res: any = await API.get(`/Button/GetButtonsForLeftMenu`)
        res.data.sections.map((item: any) => {
            if (item.name === "Мои курсы") {
                dispatch(fetchMenuBtns(item))
            } else {
                dispatch(fetchMenuBtnsLaval(item))
            }
        })

    } catch (e) {
        console.log(e)
    }
}
export const getAllGradesByCourse = (href: string) => async (dispatch: Dispatch) => {
    try {
        const res = await API.get(href)
        dispatch(fetchGrade(res.data))
    } catch (e) {
        console.log(e)
    }
}
export const getAllGrades=(href: string) => async (dispatch: Dispatch) => {
    try {
        const res = await API.get(href)
        dispatch(fetchAllGrade(res.data))
    } catch (e) {
        console.log(e)
    }
}

// export const sendTest = (answer: any) => async (dispatch: Dispatch) => {
//   try {
//     const res: any = await API.get(`/Test/GetTest?themeId=${id}`);
//     dispatch(fetchTestSuccess(res.data));
//   } catch (e) {
//     console.log(e);
//   }
// };
