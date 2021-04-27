import React from "react";
import Moment from "react-moment";

import "./DesktopTaskbarRight.css";
import useTimeNow from "../../../../hooks/useTimeNow";
import DesktopTaskbarRightIcons from "./desktop_taskbar_icons/DesktopTaskbarRightIcons";
const DesktopTaskbarRight = () => {
  const timeNow = useTimeNow();
  return (
    <div className="desktop__taskbar__right">
      <div className="desktop__taskbar__right__icons">
        <DesktopTaskbarRightIcons />
      </div>
      <div className="desktop__taskbar__right__dateTime">
        <div className="desktop__taskbar__right__dateTime--date">
          {" "}
          <Moment format="hh:mm  a">{timeNow}</Moment>
        </div>
        <div className="desktop__taskbar__right__dateTime--time">
          {" "}
          <Moment format="DD/MM/YYYY">{timeNow}</Moment>
        </div>
      </div>
    </div>
  );
};

export default DesktopTaskbarRight;
