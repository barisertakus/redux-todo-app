import { Checkbox } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { setDone } from "../features/todoSlice";
import "./TodoItem.css";

function TodoItem({ name, done, id }) {
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    dispatch(setDone(id));
  };

  return (
    <div className="todoItem">
      <Checkbox checked={done} color="primary" onChange={handleCheck} />
      <p className={done ? "todoItem--done" : undefined}>{name}</p>
    </div>
  );
}

export default TodoItem;
