import { Button } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Input from "./components/Input";
import TodoList from "./components/TodoList";
import { resetTodos } from "./features/todoSlice";

function App() {

  const dispatch = useDispatch();
  const handleReset = () => {
    dispatch(resetTodos());
  };

  return (
    <div className="app">
      <div className="app__container">
        <h3>Todo APP</h3>
        <div className="app__todo-container">
          <TodoList />
        </div>
        <Input />
        <Button
          onClick={handleReset}
          variant="contained"
          color="error"
        >
          Reset
        </Button>
      </div>
    </div>
  );
}

export default App;
