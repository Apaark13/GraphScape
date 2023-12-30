import React from "react";
import "./widget.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import CurrencyBitcoinOutlinedIcon from "@mui/icons-material/CurrencyBitcoinOutlined";

const widget = ({ color }) => {
  return (
    <div className="widget" style={{ backgroundColor: color }}>
      <div className="top">
        <div className="text">
          <h4>1.25 BTC</h4>
          <h5 style={{ color: color, filter: "brightness(30%)" }}>$ 2048.04</h5>
        </div>
        {/* changing color of icon */}
        <MoreVertOutlinedIcon
          style={{
            color: color,
            filter: "brightness(60%)",
            alignSelf: "flex-start",
            padding: "5px 0",
          }}
        />
      </div>
      <div className="bottom">
        <h6 style={{ color: color, filter: "brightness(100%)" }}>
          <CurrencyBitcoinOutlinedIcon className="icon" />{" "}
        </h6>
        <h6 style={{ color: color, filter: "brightness(50%)" }}>+0.14%</h6>
      </div>
    </div>
  );
};

export default widget;
