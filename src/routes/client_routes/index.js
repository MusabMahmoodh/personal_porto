import React from "react";
import { Container } from "react-bootstrap";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Media from "react-media";
import {
  NOTIFICATION_PAGE_ROUTE,
  RECENT_PAGE_ROUTE,
} from "../../constants/route_constants";
import NotificationsPage from "../../pages/notifications_page/NotificationsPage";
import RecentPage from "../../pages/recent_page/RecentPage";
// import ManagementLayout from "../../layouts/management_layout/ManagementLayout";
function UserRoutes() {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Container fluid>
            <Media
              queries={{
                small: "(max-width: 546px)",
                // medium: "(min-width: 600px) and (max-width: 1199px)",
                // large: "(min-width: 576px)",
              }}>
              {(matches) => (
                <>
                  {matches.small ? (
                    <>
                      <Route
                        exact
                        path={NOTIFICATION_PAGE_ROUTE}
                        component={NotificationsPage}
                      />
                      <Route
                        exact
                        path={RECENT_PAGE_ROUTE}
                        component={RecentPage}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </>
              )}
            </Media>
          </Container>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default UserRoutes;
