import React, { useEffect, useState } from "react";
import KanbanBoard from "./components/KanbanBoard";
import AddTicketForm from "./components/AddTicketForm";
import "./App.css";

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [groupBy, setGroupBy] = useState("status");
  const [sortBy, setSortBy] = useState("title");

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://api.quicksell.co/v1/internal/frontend-assignment"
      );
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    };

    fetchData();
  }, []);

  const handleAddTicket = (newTicket) => {
    setTickets((prevTickets) => [...prevTickets, newTicket]);
  };

  return (
    <div className="App">
      <h1>Kanban Board</h1>
      <AddTicketForm onAddTicket={handleAddTicket} users={users} />
      <KanbanBoard
        tickets={tickets}
        users={users}
        groupBy={groupBy}
        setGroupBy={setGroupBy}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
    </div>
  );
};

export default App;
