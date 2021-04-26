import React from "react";
import { Container } from "react-bootstrap";

import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect,
} from "react-router-dom";
import Media from "react-media";
import { HOME_PAGE_ROUTE } from "../constants/route_constants";
import HomePageDesktop from "../pages/home_page/HomePageDesktop";
import HomePageMobile from "../pages/home_page/HomePageMobile";
import ClientRoutes from "./client_routes/index";
import DesktopLayout from "../layout/layout_desktop/DesktopLayout";
import MobileLayout from "../layout/layout_mobile/MobileLayout";
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
                    <ClientRoutes />
                    <Route
                      exact
                      path={HOME_PAGE_ROUTE}
                      component={HomePageMobile}
                    />
                  </MobileLayout>
                ) : (
                  <DesktopLayout>
                    <ClientRoutes />
                    <Route
                      exact
                      path={HOME_PAGE_ROUTE}
                      component={HomePageDesktop}
                    />
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
