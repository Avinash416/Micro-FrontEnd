import React from "react";
import { Switch, Route, Router } from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import SignIn from "./components/Signin";
import SignUp from "./components/Signup";


const generateClassName = createGenerateClassName({
  productionPrefix: "au",
});

export default ({history, onSignIn}) => {
  return (
    <div>
        {/* //we changed this to Router from BrowserRouter beacuse for navigation inegrtaion work properly we need to use  specific combination for conatiner and other apps 
        //so we decided to use browser router for container and for childrens we used simple memory router
      //simple logic is that container will only run on browser and childrens will run in the container thats why we need to do this */}

      <StylesProvider generateClassName={generateClassName}>
      <Router history={history }> 
          <Switch>
            <Route exact path="/auth/signin">
            <SignIn onSignIn={onSignIn}/>
            </Route>
            <Route exact path="/auth/signup">
              <SignUp onSignIn={onSignIn}/>
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};
