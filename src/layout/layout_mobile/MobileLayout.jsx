import React from "react";
import MobileTopMenu from "./components/mobile_top_menu/MobileTopMenu.js";
import MobileBottomNavigation from "./components/mobile_bottom_navigation/MobileBottomNavigation";
import "./MobileLayout.css";

import BatteryStatus from "../../utils/BatteryStatus";
const MobileLayout = ({ children }) => {
  BatteryStatus();
  return (
    <div className="mobile__layout">
      <div className="mobile__layout__top">
        <MobileTopMenu />
      </div>
      <div className="mobile__layout__content">{children}</div>
      <div className="mobile__layout__bottom">
        <MobileBottomNavigation />
      </div>
    </div>
  );
};

export default MobileLayout;
