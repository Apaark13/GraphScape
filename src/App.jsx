import React from "react";
import Home from "./Components/home/home";
import Sidebar from "./Components/sidebar/sidebar";
// import Navbar from "./Components/navbar/navbar";
import CalendarPage from "./Components/calendar/calendarPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import "./Components/home.scss"
import "./app.scss";
import Notes from "./Components/notes/notes";
import User from "./Components/user/user";
import Graphs from "./Components/graphs/graphs";
import Documentation from "./Components/documentation/documentation";

const App = () => {


  return (
    <BrowserRouter>
      <div className="app">
        <Sidebar className="sidebar" />
        <div className="content">
          {/* <Navbar className="navbar" /> */}
          <Routes>
            
            <Route path="/" element={<Home />} />
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/notes" element={<Notes />} />
            <Route path="/user" element={<User />} />
            <Route path="/documentation" element={<Documentation />} />
            <Route path="/graphs" element={<Graphs />} />
            <Route/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
