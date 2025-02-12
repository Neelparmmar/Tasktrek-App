import React from "react";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";
import "./Taskcard.css";

const Taskcard = ({ title, tags, handleDelete, index }) => {
  return (
    <article className="task-card">
      <p className="task-text">{title}</p>
      <div className="task-bottom-line">
        <div className="task-left">
          {tags &&
            tags.map((tag, index) => (
              <Tag key={index} tagName={tag} selected />
            ))}
        </div>
        <div className="task-delete" onClick={() => handleDelete(index)}>
          <img src={deleteIcon} alt="" className="delete-icon" />
        </div>
      </div>
    </article>
  );
};

export default Taskcard;
