import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Home";
import Celebrities from "./Celebrities";

export default function Routes() {
  return (
    <Switch>
      <Route path="/celebrities">
        <Celebrities />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  );
}