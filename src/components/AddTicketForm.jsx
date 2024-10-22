import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "./AddTicketForm.css";

const AddTicketForm = ({ onAddTicket, users }) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("Todo");
  const [priority, setPriority] = useState(0);
  const [userId, setUserId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      id: `CAM-${Math.random().toString(36).substr(2, 9)}`, // generate a random ID
      title,
      tag: ["Feature Request"],
      userId,
      status,
      priority,
    };
    onAddTicket(newTicket);
    setTitle("");
    setStatus("Todo");
    setPriority(0);
    setUserId("");
  };

  return (
    <form onSubmit={handleSubmit} className="add-ticket-form">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Ticket Title"
        required
      />
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="Todo">Todo</option>
        <option value="In progress">In progress</option>
        <option value="Backlog">Backlog</option>
      </select>
      <select value={priority} onChange={(e) => setPriority(Number(e.target.value))}>
        <option value={0}>No Priority</option>
        <option value={1}>Low</option>
        <option value={2}>Medium</option>
        <option value={3}>High</option>
        <option value={4}>Urgent</option>
      </select>
      <select value={userId} onChange={(e) => setUserId(e.target.value)}>
        <option value="">Select User</option>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
      <button type="submit">
        <FontAwesomeIcon icon={faPlus} /> Add Ticket
      </button>
    </form>
  );
};

export default AddTicketForm;
