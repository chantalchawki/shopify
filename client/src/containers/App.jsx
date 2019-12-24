import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import RegistrationPage from "./Registration/RegistrationPage";
import LoginPage from "./Login/LoginPage";
import LandingPage from "./landingPage/LandingPage";
import AddItem from "./AddItem/AddItem";
import page404 from "./page404/page404";
import EditItem from "./EditItem/EditItem";
import ProfilePage from "./Profile/ProfilePage";
import CheckOutPage from "./CheckOut/CheckOutPage";
import CartPage from "./Cart/CartPage";
import AuthService from "../Services/AuthService";
import PrivateRoute from "../components/PrivateRoute/PrivateRoute";

let axiosDefaults = require("axios/lib/defaults");
// axiosDefaults.baseURL = "http://localhost:62248";
axiosDefaults.baseURL = "https://a0678805.ngrok.io";

AuthService.checkJWT();
window.gapi.load("auth2", () => {
  window.gapi.auth2.init({
    client_id:
      "126151922298-jv8d5mev97sho4qb7ns97qt3hmibampb.apps.googleusercontent.com"
  });
});

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/register" exact component={RegistrationPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={LandingPage} />
          <PrivateRoute path="/addItem" exact component={AddItem} />
          <PrivateRoute path="/cart" exact component={CartPage} />
          <Route path="/page404" exact component={page404} />
          <Route path="/EditItem/:id" exact component={EditItem} />
          <Route path="/Profile" exact component={ProfilePage} />
          <Route path="/checkOut" exact component={CheckOutPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
