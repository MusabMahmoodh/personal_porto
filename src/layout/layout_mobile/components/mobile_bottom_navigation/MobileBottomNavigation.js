import React from "react";
import "./MobileBottomNavigation.css";
import { FaSquare, FaRegDotCircle, FaCaretLeft } from "react-icons/fa";

const MobileBottomNavigation = () => {
  return (
    <div className="mobile__bottom__navigation">
      <div className="mobile__bottom__navigation__icon">
        <FaSquare />
      </div>
      <div className="mobile__bottom__navigation__icon">
        <FaRegDotCircle />
      </div>
      <div className="mobile__bottom__navigation__icon">
        <FaCaretLeft />
      </div>
    </div>
  );
};

export default MobileBottomNavigation;
