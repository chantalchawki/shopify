import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RegistrationPage from "./Registration/RegistrationPage";
import LoginPage from "./Login/LoginPage";

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/register" exact component={RegistrationPage} />
          <Route path="/login" exact component={LoginPage} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
