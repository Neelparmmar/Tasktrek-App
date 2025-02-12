import React from "react";
import "./Tag.css";
const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    HTML: { backgroundColor: "#fda821" },
    CSS: { backgroundColor: "#15d4ca" },
    JAVASCRIPT: { backgroundColor: "#ffd12c" },
    REACT: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      type="button"
      onClick={() => {
        selectTag(tagName);
      }}
    >
      {tagName}
    </button>
  );
};

export default Tag;
