import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

export default ({history}) => {
  return (
    <div>
        {/* //we changed this to Router from BrowserRouter beacuse for navigation inegrtaion work properly we need to use  specific combination for conatiner and other apps 
        //so we decided to use browser router for container and for childrens we used simple memory router
      //simple logic is that container will only run on browser and childrens will run in the container thats why we need to do this */}

      <StylesProvider generateClassName={generateClassName}>
      <Router history={history }> 
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/pricing" component={Pricing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
