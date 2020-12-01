import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import SettingsPage from "./settings";
import KalenderPage from "./kalender";
import ActivityPage from "./activity";
import EngagePage from "./engage";
import ManagePage from "./manage";
import ExplorePage from "./explore";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/engage/activity">
          <ActivityPage />
        </Route>
        <Route path="/engage/kalender">
          <KalenderPage />
        </Route>
        <Route path="/engage">
          <EngagePage />
        </Route>
        <Route path="/manage">
          <ManagePage />
        </Route>
        <Route path="/settings">
          <SettingsPage />
        </Route>
        <Route path="/">
          <ExplorePage/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
