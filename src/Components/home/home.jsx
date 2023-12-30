import React from "react";
import "./home.scss";
import Navbar from "../navbar/navbar"
import Widgetl from "./widgetl";
import Widget from "./widget";
import Table from "./table"
import Todo from "./todo"
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';

const home = () => {
  return (<>
    {/* // <div className="home">
    //   <Sidebar className="sidebar" />
    //   <div className="content"> */}
        <Navbar className="navbar" Topic='Overview' />
        <div className="widgets">
          <div className="left">
            <h3>Portfolio</h3>
            <Widgetl color='#E8F1F2' />
          </div>
          <div className="right">
            <div className="head">
            <h3>Your Assets</h3>
            <TuneOutlinedIcon className="icon" style={{ stroke: 'currentColor', strokeWidth: 0.4 }}/>
            </div>
            <div className="containwgt">
              <Widget color="#D1F0B1" />
              <Widget color="#CCE3DE" />
              <Widget color="#FCB1A6" />
              <Widget color="#D3BCC0" />
            </div>
          </div>
          <div className="table">
            <Table/>
          </div>
          <div className="todo">
            <h4>Todo List</h4>
            <Todo/>
          </div>
        </div>
        
    {/* //   </div>
    // </div> */}
    </>
  );
};

export default home;
