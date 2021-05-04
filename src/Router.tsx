import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Error404 from "./main/Error404";
import Landing from "./main/Landing";

const Router: React.FC = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" exact>
          <Landing />
        </Route>
        <Route path="*">
          <Error404 />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;
