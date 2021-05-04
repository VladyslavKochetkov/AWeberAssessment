import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Error404 from "./main/Error404";
import Landing from "./main/Landing";
import StrictlyCompliant from "./main/StrictlyCompliant";

const Router: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact>
        <Landing />
      </Route>
      <Route path="/strictlyCompliant">
        <StrictlyCompliant />
      </Route>
      <Route path="*">
        <Error404 />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Router;
