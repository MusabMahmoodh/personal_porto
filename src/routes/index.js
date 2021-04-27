import React from "react";
import { Container } from "react-bootstrap";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Media from "react-media";
import {
  CAMERA_ROUTE,
  HOME_PAGE_ROUTE,
  NOTIFICATION_PAGE_ROUTE,
  RECENT_PAGE_ROUTE,
} from "../constants/route_constants";
import HomePageDesktop from "../pages/home_page/HomePageDesktop";
import HomePageMobile from "../pages/home_page/HomePageMobile";

import DesktopLayout from "../layout/layout_desktop/DesktopLayout";
import MobileLayout from "../layout/layout_mobile/MobileLayout";
import RecentPage from "../pages/recent_page/RecentPage";
import NotificationsPage from "../pages/notifications_page/NotificationsPage";
import Camera from "../apps/camera/Camera";
// import ManagementLayout from "../../layouts/management_layout/ManagementLayout";
function UserRoutes() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Media
            queries={{
              small: "(max-width: 546px)",
              // medium: "(min-width: 600px) and (max-width: 1199px)",
              // large: "(min-width: 576px)",
            }}>
            {(matches) => (
              <>
                {matches.small ? (
                  <MobileLayout>
                    <Route
                      exact
                      path={RECENT_PAGE_ROUTE}
                      component={RecentPage}
                    />
                    <Route
                      exact
                      path={NOTIFICATION_PAGE_ROUTE}
                      component={NotificationsPage}
                    />
                    <Route
                      exact
                      path={HOME_PAGE_ROUTE}
                      component={HomePageMobile}
                    />
                    <Route exact path={CAMERA_ROUTE} component={Camera} />
                  </MobileLayout>
                ) : (
                  <DesktopLayout>
                    <Route
                      exact
                      path={HOME_PAGE_ROUTE}
                      component={HomePageDesktop}
                    />
                    <Route exact path={CAMERA_ROUTE} component={Camera} />
                  </DesktopLayout>
                )}
              </>
            )}
          </Media>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default UserRoutes;
