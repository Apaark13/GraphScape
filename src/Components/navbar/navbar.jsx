import React from "react";
import "./navbar.scss";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import avatar from "../crocodile.png";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const navbar = ({Topic}) => {
  return (
    <div className="navbar">
      <h2>{Topic}</h2>
      <div className="option">
        <SearchOutlinedIcon className="icon" />
        <NotificationsOutlinedIcon className="icon" />
        <div className="user">
          <img src={avatar} alt="" srcset="" />
          <h3>Apaar</h3>
          <KeyboardArrowDownOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default navbar;
