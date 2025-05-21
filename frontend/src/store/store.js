import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./usreSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
