import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import "./SortingSelector.css";

const SortingSelector = ({ setSortBy }) => {
  const handleChange = (e) => {
    setSortBy(e.target.value);
  };

  return (
    <div className="sorting-selector">
      <label>
        <FontAwesomeIcon icon={faSort} /> Sort By:
      </label>
      <select onChange={handleChange}>
        <option value="title">Title</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default SortingSelector;
