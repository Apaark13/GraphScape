import React from "react";
import "./sidebar.scss";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import LeaderboardOutlinedIcon from "@mui/icons-material/LeaderboardOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import NoteOutlinedIcon from "@mui/icons-material/NoteOutlined";
import StackedBarChartOutlinedIcon from "@mui/icons-material/StackedBarChartOutlined";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();
  const links = [
    { name: 'Home', to: '/', icon: <DashboardOutlinedIcon className="iconlogo" /> },
    { name: 'Calendar', to: '/calendar', icon: <CalendarMonthOutlinedIcon className="iconlogo" /> },
    { name: 'Notes', to: '/notes', icon: <NoteOutlinedIcon className="iconlogo" /> },
    // { name: 'Graphs', to: '/graphs', icon: <LeaderboardOutlinedIcon className="iconlogo" /> },
    { name: 'Documentation', to: '/documentation', icon: <ViewInArOutlinedIcon className="iconlogo" /> },
    { name: 'User', to: '/user', icon: <PersonOutlineOutlinedIcon className="iconlogo" /> },
    // add more links as needed
  ];
  return (
    <div className="sidebar">
      <div className="logo">
        {/* <img src="https://png.pngtree.com/template/20190316/ourmid/pngtree-books-logo-image_79143.jpg" alt="" srcset="" />
         */}
        <StackedBarChartOutlinedIcon className="logoimg" />
      </div>
      <div className="icons">
      {links.map((link, index) => (
        <Link to={link.to} style={{ textDecoration: 'none', color: '#dbd7de' }} key={index}>
          <div className={`icon ${location.pathname === link.to ? 'active' : ''}`}>
            {link.icon}
          </div>
        </Link>
      ))}
        {/* <Link to="/calander" style={{ textDecoration: "none", color: "white" }}>
          <DashboardOutlinedIcon className="icon active" />
        </Link>
        <Link to="/calander" style={{ textDecoration: "none", color: "white" }}>
          <CalendarMonthOutlinedIcon className="icon" />
        </Link>
        <Link to="/notes" style={{ textDecoration: "none", color: "white" }}>
          <NoteOutlinedIcon className="icon" />
        </Link>
        <Link to="/charts" style={{ textDecoration: "none", color: "white" }}>
          <LeaderboardOutlinedIcon className="icon" />
        </Link>
        <Link
          to="/documentation"
          style={{ textDecoration: "none", color: "white" }}
        >
          <ViewInArOutlinedIcon className="icon" />
        </Link>
        <Link to="/user" style={{ textDecoration: "none", color: "white" }}>
          <PersonOutlineOutlinedIcon className="icon" />
        </Link> */}
      </div>
      <div className="logout">
        <LogoutOutlinedIcon className="icon" />
      </div>
    </div>
  );
};

export default Sidebar;
