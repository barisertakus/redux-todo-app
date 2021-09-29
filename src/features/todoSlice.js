import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
    },

    setDone: (state, action) => {
      state.todoList.map((todo) =>
        action.payload === todo.id && todo.done
          ? (todo.done = false)
          : (todo.done = true)
      );
    },
  },
});

export const { saveTodo, setDone } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

export default todoSlice.reducer;
