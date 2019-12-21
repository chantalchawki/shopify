import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RegistrationPage from "./Registration/RegistrationPage";
import LoginPage from "./Login/LoginPage";
import LandingPage from "./landingPage/LandingPage";
import AddItem from "./AddItem/AddItem";
import page404 from "./page404/page404";
import CartPage from "./Cart/CartPage";
import AuthService from "../Services/AuthService";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

AuthService.checkJWT();

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/register" exact component={RegistrationPage} />
          <Route path="/login" exact component={LoginPage} />
          <PrivateRoute path="/" exact component={LandingPage} />
          <PrivateRoute path="/addItem" exact component={AddItem} />
          <PrivateRoute path="/cart" exact component={CartPage} />
          <Route path="/page404" exact component={page404} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
