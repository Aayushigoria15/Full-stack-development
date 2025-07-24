import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: ["ayushi", "xyz", "abc"],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (data, index) => index !== action.payload
      );
    },
    editTodo: (state, action) => {},
  },
});

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
