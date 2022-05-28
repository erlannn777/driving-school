import { useSelector } from "react-redux";
import { IModal } from "./interfaces/data.interface";
import { Store } from "../types";

export const useSignInForm = (): IModal => {
  return useSelector((state: Store) => state.ui.signInForm);
};

export const useSignUpForm = (): IModal => {
  return useSelector((state: Store) => state.ui.signUpForm);
};
