import { createReducer } from "@reduxjs/toolkit";
import {
  closeSignInForm,
  closeSignUpForm,
  openSignInForm,
  openSignUpForm,
} from "./actions";
import { IUIState } from "./interfaces/data.interface";

export const initialState: IUIState = {
  signInForm: {
    data: null,
    open: false,
  },
  signUpForm: {
    data: null,
    open: false,
  },
};

export default createReducer<IUIState>(initialState, (buiilder) =>
  buiilder
    .addCase(
      openSignInForm,
      (state, { payload }): IUIState => ({
        ...state,
        signInForm: {
          ...state.signInForm,
          open: true,
        },
      })
    )
    .addCase(
      closeSignInForm,
      (state): IUIState => ({
        ...state,
        signInForm: {
          ...state.signInForm,
          open: false,
        },
      })
    )
    .addCase(
      openSignUpForm,
      (state, { payload }): IUIState => ({
        ...state,
        signUpForm: payload,
      })
    )
    .addCase(
      closeSignUpForm,
      (state): IUIState => ({
        ...state,
        signUpForm: {
          ...state.signInForm,
          open: false,
        },
      })
    )
);
