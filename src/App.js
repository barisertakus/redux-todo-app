import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

const todoList = [{
  item: "todo",
  done: false,
  id: Date.now()
},
{
  item: "todo2",
  done: false,
  id: Date.now()
},
{
  item: "todo3",
  done: false,
  id: Date.now()
},
{
  item: "todo4",
  done: false,
  id: Date.now()
}]

function App() {
  return (
    <div className="app">
      <div class="app__container">
        <div class="app__todo--container">
        {
          todoList.map(item=>(
            <TodoItem name={item.item}
            done={item.done}
            id={item.id}
            />
          ))
        
        }
        </div>
      </div>
      <Input />
    </div>
  );
}

export default App;
