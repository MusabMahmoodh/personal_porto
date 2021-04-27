import React, { useEffect, useState } from "react";
import "./MobileTopLeft.css";

import Moment from "react-moment";
import useTimeNow from "../../../../../hooks/useTimeNow";
const MobileTopLeft = () => {
  const timeNow = useTimeNow();

  return (
    <div className="mobile__top__left">
      <Moment format="hh:mm  a">{timeNow}</Moment>
    </div>
  );
};

export default MobileTopLeft;
