import React from "react";
import "./DesktopTaskBar.css";
import DesktopTaskBarLeft from "../desktop_taskbar_left/DesktopTaskbarLeft";
import DesktopTaskBarRight from "../desktop_taskbar_right/DesktopTaskbarRight";
const DesktopTaskBar = () => {
  return (
    <div className="desktop__task__bar">
      <div className="desktop__task__bar__left">
        <DesktopTaskBarLeft />
      </div>
      <div className="desktop__task__bar__left">
        <DesktopTaskBarRight />
      </div>
    </div>
  );
};

export default DesktopTaskBar;
