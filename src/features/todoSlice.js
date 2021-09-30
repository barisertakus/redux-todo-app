import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: JSON.parse(localStorage.getItem("todoList")) || []
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    saveTodo: (state, action) => {
      state.todoList.push(action.payload);
      updateLocalStorage(state.todoList)
    },

    setDone: (state, action) => {
      state.todoList.map(
        (todo) =>
          action.payload === todo.id
            ? todo.done
              ? (todo.done = false)
              : (todo.done = true)
            : todo // do nothing
      );
      updateLocalStorage(state.todoList)
    },

    resetTodos: (state, action) => {
      state.todoList = [];
      localStorage.removeItem("todoList");
    },
  },
});

export const { saveTodo, setDone, resetTodos } = todoSlice.actions;

export const selectTodoList = (state) => state.todos.todoList;

const updateLocalStorage = (todoList) => {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}

export default todoSlice.reducer;
