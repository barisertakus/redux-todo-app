import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { saveTodo } from "../features/todoSlice";
import "./Input.css";
function Input() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log("Adding " + input)

    dispatch(saveTodo({
      item: input,
      done: false,
      id: Date.now()
    }))
  };

  const handleChange = (e) =>{
    setInput(e.target.value);
  }

  return (
    <div className="input">
      <input type="text" value={input} onChange={handleChange} />
      <button onClick={addTodo}>Add</button>
    </div>
  );
}

export default Input;
