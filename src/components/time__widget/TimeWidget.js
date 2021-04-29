import React from "react";
import "./TimeWidget.css";

import Moment from "react-moment";
import useTimeNow from "../../hooks/useTimeNow";

const TimeWidget = () => {
  const timeNow = useTimeNow();

  return (
    <div className="time__widget">
      <div className="time__widget__time">
        <Moment format="hh:mm  ">{timeNow}</Moment>
      </div>
      <div className="time__widget__date">
        <small>
          <Moment format="ddd, MMMM D ">{timeNow}</Moment>
        </small>
      </div>
    </div>
  );
};

export default TimeWidget;
