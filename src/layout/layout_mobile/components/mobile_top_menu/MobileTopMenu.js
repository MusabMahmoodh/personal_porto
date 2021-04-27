import React from "react";
import "./MobileTopMenu.css";
import MobileTopIcons from "./mobile_top_icons/MobileTopIcons";
import MobileTopLeft from "./mobile_top_left/MobileTopLeft";
const MobileTopMenu = () => {
  return (
    <div className="mobile__top__menu">
      <div className="mobile__top__left">
        <MobileTopLeft />
      </div>
      <div className="mobile__top__right">
        <MobileTopIcons />
      </div>
    </div>
  );
};

export default MobileTopMenu;
