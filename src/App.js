import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <div className="app__container">
        <h3>Todo APP</h3>
        <div className="app__todo-container">
          {todoList.map((item, i) => (
            <TodoItem key={i} name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
        <Input />
      </div>
    </div>
  );
}

export default App;
