import React, { useEffect, useState } from "react";
import "./app.css";
import Tasksform from "./components/tasksform";
import Taskcolumn from "./components/Taskcolumn";
import Todo from "./assets/Todo.jpeg";
import done from "./assets/Done.png";
import doing from "./assets/star.png";

const oldTasks = localStorage.getItem("Tasks");
console.log(oldTasks);

function App() {
  const [Tasks, setTasks] = useState(JSON.parse(oldTasks) || [0]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(Tasks));
  }, [Tasks]);
  const handleDelete = (taskIndex) => {
    const newTasks = Tasks.filter((task, index) => index !== taskIndex);
    setTasks(newTasks);
  };
  return (
    <div className="app">
      <Tasksform setTasks={setTasks} />
      <main className="app-main">
        <Taskcolumn
          Name="To do"
          title={Todo}
          Tasks={Tasks}
          status="todo"
          handleDelete={handleDelete}
        />
        <Taskcolumn
          Name="Doing"
          title={doing}
          Tasks={Tasks}
          status="doing"
          handleDelete={handleDelete}
        />
        <Taskcolumn
          Name="Done"
          title={done}
          Tasks={Tasks}
          status="done"
          handleDelete={handleDelete}
        />
      </main>
    </div>
  );
}

export default App;
