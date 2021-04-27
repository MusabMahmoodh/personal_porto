import React from "react";
import "./MobileTopIcons.css";
import { FaBatteryEmpty, FaBluetoothB } from "react-icons/fa";
import { MdNetworkWifi } from "react-icons/md";

const MobileTopIcons = () => {
  return (
    <div className="mobile__top__icons">
      <div className="mobile__top__icons-icon">
        <FaBluetoothB />
      </div>
      <div className="mobile__top__icons-icon">
        <MdNetworkWifi />
      </div>
      <div className="mobile__top__icons-icon">
        <FaBatteryEmpty />
      </div>
    </div>
  );
};

export default MobileTopIcons;
