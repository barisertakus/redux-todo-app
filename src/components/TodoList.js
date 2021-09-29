import React from "react";
import { useSelector } from "react-redux";
import { selectTodoList } from "../features/todoSlice";
import TodoItem from "./TodoItem";

function TodoList() {
  const todoList = useSelector(selectTodoList);

  return todoList.map((item, i) => (
    <TodoItem key={i} name={item.item} done={item.done} id={item.id} />
  ));
}

export default TodoList;
