import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import ui from "./ui/reducer";

const store = configureStore({
  reducer: {
    ui,
  },
});

export const useAppDispatch = () => useDispatch();

export default store;
