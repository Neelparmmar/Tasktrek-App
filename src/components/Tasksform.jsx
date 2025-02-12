import React, { useState } from "react";
import "./Tasksform.css";
import Tag from "./Tag";

const Tasksform = ({ setTasks }) => {
  const [Taskdata, setTaskdata] = useState({
    task: "",
    status: "todo",
    tags: [], // Updated to "tags" instead of "tag" for consistency
  });

  const checkTag = (tag) => {
    return Taskdata.tags.includes(tag);
  };

  const handleTask = (e) => {
    const { name, value } = e.target;
    setTaskdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(Taskdata);
    setTasks((prev) => [...prev, Taskdata]);
    setTaskdata({
      task: "",
      status: "todo",
      tags: [],
    }); // Reset form after submission
  };

  const selectTag = (tag) => {
    if (Taskdata.tags.includes(tag)) {
      const filteredTags = Taskdata.tags.filter((item) => item !== tag);
      setTaskdata((prev) => ({
        ...prev,
        tags: filteredTags,
      }));
    } else {
      setTaskdata((prev) => ({
        ...prev,
        tags: [...prev.tags, tag],
      }));
    }
  };

  return (
    <header className="app-header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={Taskdata.task} // Bind the value to state
          className="task-input"
          placeholder="Enter new task"
          onChange={handleTask}
        />

        <div className="task-bottom-line">
          <div>
            <Tag
              tagName="HTML"
              selectTag={selectTag}
              selected={checkTag("HTML")}
            />
            <Tag
              tagName="CSS"
              selectTag={selectTag}
              selected={checkTag("CSS")}
            />
            <Tag
              tagName="JAVASCRIPT"
              selectTag={selectTag}
              selected={checkTag("JAVASCRIPT")}
            />
            <Tag
              tagName="REACT"
              selectTag={selectTag}
              selected={checkTag("REACT")}
            />
          </div>
          <div>
            <select
              className="task-status"
              name="status"
              value={Taskdata.status} // Bind the value to state
              onChange={handleTask}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>
            <button className="task-submit" type="submit">
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Tasksform;
