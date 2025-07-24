import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../Todo/todoSlice";

export default configureStore({
  reducer: {
    todo: todoSlice,
  },
});
