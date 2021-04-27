import React, { useEffect, useState } from "react";
import "./MobileTopLeft.css";

import Moment from "react-moment";
import moment from "moment";
const MobileTopLeft = () => {
  const [timeNow, setTimeNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, [timeNow]);

  return (
    <div className="mobile__top__left">
      <Moment format="hh:mm  a">{timeNow}</Moment>
    </div>
  );
};

export default MobileTopLeft;
