import React from "react";
import "./Header_dashboard.css";
import v9 from "../../Components/Assets/V9.png"
import { Card } from "antd";

export default function Header_Dashboard() {
  return (
    <div>
      <div className="pt-5 text-center">
        <img src={v9} alt="" className="Ico_log" />
        <p className="dripe_h3">
          Multi-Chain <b> ICO LAUNCH</b>
        </p>
      </div>

     
    </div>
  );
}
