import React from "react";
import "./Taskcolumn.css";
import Taskcard from "./Taskcard";

const Taskcolumn = ({ Name, title, Tasks, status, handleDelete }) => {
  return (
    <section className="app-section">
      <h2 className="app-name">
        <img className="app-image" src={title} alt="" />
        {Name}
      </h2>
      {Tasks.map(
        (task, index) =>
          task.status === status && (
            <Taskcard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
            />
          )
      )}
    </section>
  );
};

export default Taskcolumn;
