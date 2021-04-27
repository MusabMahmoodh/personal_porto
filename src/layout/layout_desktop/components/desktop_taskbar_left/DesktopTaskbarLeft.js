import React from "react";
import { CgMenuGridO } from "react-icons/cg";
import "./DesktopTaskBarLeft.css";
const DesktopTaskbarLeft = () => {
  return (
    <div className="desktop__taskbar__left">
      <div className="desktop__taskbar__left__icon">
        <CgMenuGridO />
      </div>
    </div>
  );
};

export default DesktopTaskbarLeft;
