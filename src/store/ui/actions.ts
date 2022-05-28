import { createAction } from "@reduxjs/toolkit";
import { IModal } from "./interfaces/data.interface";

export const openSignInForm = createAction<IModal>("ui/openSignIn");
export const closeSignInForm = createAction<void>("ui/closeSignIn");
export const openSignUpForm = createAction<IModal>("ui/openSignUp");
export const closeSignUpForm = createAction<void>("ui/closeSignUp");
