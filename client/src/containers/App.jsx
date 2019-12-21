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

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/register" exact component={RegistrationPage} />
          <Route path="/login" exact component={LoginPage} />
          <Route path="/" exact component={LandingPage} />
          <Route path="/addItem" exact component={AddItem} />
          <Route path="/cart" exact component={CartPage} />
          <Route path="/page404" exact component={page404} />
          <Route path="/EditItem" exact component={EditItem} />
          <Route path="/ProfilePage" exact component={ProfilePage} />
          <Route path="/checkOut" exact component={CheckOutPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
