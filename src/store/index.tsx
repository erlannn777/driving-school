import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ui from "./ui/reducer";
import courses from "./courses/reducer";

const store = configureStore({
  reducer: {
    ui,
    courses
  },
});

export const useAppDispatch = () => useDispatch();

export default store;
