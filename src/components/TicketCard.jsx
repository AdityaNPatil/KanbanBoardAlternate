import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faUser } from "@fortawesome/free-solid-svg-icons";
import "./TicketCard.css";

const TicketCard = ({ ticket, users }) => {
  const assignedUser = users.find((user) => user.id === ticket.userId);

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 4:
        return "red";
      case 3:
        return "orange";
      case 2:
        return "yellow";
      case 1:
        return "lightgreen";
      case 0:
        return "lightgray";
      default:
        return "white";
    }
  };

  return (
    <div className="ticket-card" style={{ borderLeftColor: getPriorityColor(ticket.priority) }}>
      <h4>{ticket.title}</h4>
      <p>
        <FontAwesomeIcon icon={faFlag} /> Tags: {ticket.tag.join(", ")}
      </p>
      <p>
        <FontAwesomeIcon icon={faUser} /> Assigned to: {assignedUser ? assignedUser.name : "Unassigned"}
      </p>
      <p>Status: {ticket.status}</p>
      <p>Priority: {ticket.priority}</p>
    </div>
  );
};

export default TicketCard;
