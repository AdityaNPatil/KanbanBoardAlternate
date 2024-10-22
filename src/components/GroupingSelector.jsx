import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortAmountDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import "./GroupingSelector.css";

const GroupingSelector = ({ setGroupBy }) => {
  const handleChange = (e) => {
    setGroupBy(e.target.value);
  };

  return (
    <div className="grouping-selector">
      <label>
        <FontAwesomeIcon icon={faFilter} /> Group By:
      </label>
      <select onChange={handleChange}>
        <option value="status">Status</option>
        <option value="userId">User</option>
        <option value="priority">Priority</option>
      </select>
    </div>
  );
};

export default GroupingSelector;
