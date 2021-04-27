import React from "react";
import "./MobileBottomNavigation.css";
import { FaSquare, FaRegDotCircle, FaCaretLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import { RECENT_PAGE_ROUTE } from "../../../../constants/route_constants/index";
const MobileBottomNavigation = () => {
  let history = useHistory();
  return (
    <div className="mobile__bottom__navigation">
      <div
        className="mobile__bottom__navigation__icon"
        onClick={() => history.push(RECENT_PAGE_ROUTE)}>
        <FaSquare />
      </div>
      <div className="mobile__bottom__navigation__icon">
        <FaRegDotCircle />
      </div>
      <div
        className="mobile__bottom__navigation__icon"
        onClick={() => history.goBack()}>
        <FaCaretLeft />
      </div>
    </div>
  );
};

export default MobileBottomNavigation;
