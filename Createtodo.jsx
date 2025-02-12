import React, { useState } from "react";

const Createtodo = () => {
  const [count, setCount] = useState(0);
  const [Input, setInput] = useState("");
  const task = ["task1", "task2", "task3"];
  const countT = () => {
    setCount(count + 1);
    console.log("task added", count);
  };
  const handleInput = (event) => {
    setInput(event.target.value);
  };
  return (
    <React.Fragment>
      <h1>tasks : {count}</h1>
      <input type="text" onChange={handleInput}></input>
      <button onClick={countT}>add task</button>
      <h1>input : {Input}</h1>
      <ul>
        {task.map((task) => (
          <li key={task}> {task}</li>
        ))}
      </ul>
    </React.Fragment>
  );
};
export default Createtodo;
