import React from "react";
import "./widget.scss";
import { AreaChart, Area, Tooltip } from "recharts";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";

const data = [
  { date: "Jan", stock: 40371.99 },
  { date: "Feb", stock: 40371.99 },
  { date: "Mar", stock: 80371.99 },
  { date: "Apr", stock: 80371.99 },
  { date: "May", stock: 50371.99 },
  { date: "Jun", stock: 50371.99 },
  { date: "Jul", stock: 80371.99 },
  { date: "Aug", stock: 80371.99 },
  { date: "Sep", stock: 20371.99 },
  { date: "Oct", stock: 20371.99 },
  { date: "Nov", stock: 50371.99 },
  { date: "Dec", stock: 20371.99 },
  { date: "Jan", stock: 40371.99 },
  { date: "Feb", stock: 40371.99 },
  { date: "Mar", stock: 80371.99 },
  { date: "Apr", stock: 80371.99 },
  { date: "May", stock: 50371.99 },
  { date: "Jun", stock: 50371.99 },
  { date: "Jul", stock: 80371.99 },
  { date: "Aug", stock: 80371.99 },
  { date: "Sep", stock: 20371.99 },
  { date: "Oct", stock: 20371.99 },
  { date: "Nov", stock: 50371.99 },
  { date: "Dec", stock: 60371.99 },
];

const widgetl = ({ color }) => {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            background: "#090a0c",
            color: "white",
            padding: "10px 20px",
            borderRadius: "50px",
          }}
        >
          {" "}
          ${payload[0].value}
        </div>
      );
    }
    return null;
  };
  return (
    <div className="widgetl">
      <div className="text">
        <h4>
          $ 27 132.67
          <h6>Portfolio Balance</h6>
        </h4>
        <MoreVertOutlinedIcon
          style={{
            color: color,
            filter: "brightness(60%)",
            alignSelf: "flex-start",
            margin: "5px 0",
          }}
        />
        <div className="bottomtext">
          <h6>1H</h6>
          <h6>24H</h6>
          <h6 className="active">1W</h6>
          <h6>1M</h6>
          <h6>1Y</h6>
          <h6>ALL</h6>
        </div>
      </div>
      <AreaChart
        width={500}
        height={250}
        data={data}
        margin={{
          top: 10,
          right: 0,
          left: 0,
          bottom: 0,
        }}
      >
        {/* <CartesianGrid strokeDasharray="3 3" /> */}
        {/* <XAxis dataKey="date" /> */}

        <Tooltip content={<CustomTooltip />} />

        <Area type="monotone" dataKey="stock" stroke="#B1CED3" fill="#B1CED3" />
      </AreaChart>
    </div>
  );
};

export default widgetl;
