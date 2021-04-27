import React from "react";
import "./HomePageMobile.css";
import { FcOldTimeCamera } from "react-icons/fc";
import { CAMERA_ROUTE } from "../../constants/route_constants/index";
import { useHistory } from "react-router";
const HomePageMobile = () => {
  let history = useHistory();
  return (
    <div className="homepage__mobile">
      <div className="homepage__mobile__top">
        {/* TODO: navigating apps */}
        apps
      </div>
      <div className="homepage__mobile__bottom">
        <FcOldTimeCamera onClick={() => history.push(CAMERA_ROUTE)} />
      </div>
    </div>
  );
};

export default HomePageMobile;
