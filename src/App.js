import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Input from "./components/Input";
import TodoItem from "./components/TodoItem";
import { resetTodos, selectTodoList } from "./features/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);
  const dispatch = useDispatch();
  const handleReset = () =>{
    dispatch(resetTodos());
  }

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
        <Button style={{marginTop: "15px"}} onClick={handleReset} variant="contained" > Reset </Button>
      </div>
    </div>
  );
}

export default App;
