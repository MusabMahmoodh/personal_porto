import React from "react";
import "./DesktopTaskbarRightIcons.css";
import { FaBatteryEmpty, FaBluetoothB, FaVolumeUp } from "react-icons/fa";
import { MdNetworkWifi } from "react-icons/md";

const DesktopTaskbarRightIcons = () => {
  return (
    <div className="mobile__top__icons">
      <div className="mobile__top__icons-icon">
        <FaBluetoothB />
      </div>
      <div className="mobile__top__icons-icon">
        <FaBatteryEmpty />
      </div>
      <div className="mobile__top__icons-icon">
        <MdNetworkWifi />
      </div>
      <div className="mobile__top__icons-icon">
        <FaVolumeUp />
      </div>
    </div>
  );
};

export default DesktopTaskbarRightIcons;
