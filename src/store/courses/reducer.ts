import {createReducer} from "@reduxjs/toolkit";
import {fetchCoursesSuccess} from "./actions";
import {ICoursesState} from "./interface/data.interface";
 export const initialState:ICoursesState = {
     courses: []
 }

 export default createReducer<ICoursesState>(initialState, (builder) =>
     builder
         .addCase(
             fetchCoursesSuccess,
             (state, { payload }): ICoursesState => ({...state, courses: payload})
         )
 )
