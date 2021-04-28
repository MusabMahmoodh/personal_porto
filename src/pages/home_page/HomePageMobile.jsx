import React from "react";
import "./HomePageMobile.css";
import { FcOldTimeCamera } from "react-icons/fc";
import { CAMERA_ROUTE } from "../../constants/route_constants/index";
import { useHistory } from "react-router";

import HomePageMain from "../../containers/home_page/home_page_main/HomePageMain";
import HomePageApps from "../../containers/home_page/home_page_apps/HomePageApps";
import NotificationContainer from "../../containers/notifications/NotificationContainer";
import SwipeableViews from "react-swipeable-views";
const HomePageMobile = () => {
  let history = useHistory();
  return (
    <SwipeableViews index={1}>
      <div className="home__page__mobile__notifications">
        <NotificationContainer />
      </div>
      <div className="homepage__mobile">
        <div className="homepage__mobile__top">
          {/* TODO: navigating apps */}
          <SwipeableViews>
            <div className="homepage__main">
              <HomePageMain />
            </div>
            <div className="homepage__apps">
              <HomePageApps />
            </div>
          </SwipeableViews>
        </div>
        <div className="homepage__mobile__bottom">
          <FcOldTimeCamera onClick={() => history.push(CAMERA_ROUTE)} />
        </div>
      </div>
    </SwipeableViews>
  );
};

export default HomePageMobile;
