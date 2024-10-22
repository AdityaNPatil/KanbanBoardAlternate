import React from "react";
import TicketCard from "./TicketCard";
import GroupingSelector from "./GroupingSelector";
import SortingSelector from "./SortingSelector";
import "./KanbanBoard.css";

const KanbanBoard = ({ tickets, users, groupBy, setGroupBy, sortBy, setSortBy }) => {
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const key = ticket[groupBy];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(ticket);
    return acc;
  }, {});

  const sortedKeys = Object.keys(groupedTickets).sort();
  const sortedTickets = sortedKeys.map((key) => {
    const ticketsToSort = groupedTickets[key];
    return ticketsToSort.sort((a, b) => {
      if (sortBy === "priority") {
        return b.priority - a.priority; // descending
      } else {
        return a.title.localeCompare(b.title); // ascending
      }
    });
  });

  return (
    <div className="kanban-board">
      <div style={{display:"flex", width:"95vw" ,justifyContent:"space-between"}}>
      <GroupingSelector setGroupBy={setGroupBy} />
      <SortingSelector setSortBy={setSortBy} />
      </div>
      {sortedKeys.map((key, index) => (
        <div key={index} className="column">
          <h2>{key}</h2>
          {sortedTickets[index].map((ticket) => (
            <TicketCard key={ticket.id} ticket={ticket} users={users} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default KanbanBoard;
