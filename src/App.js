import React from "react";
import LoginForm from "./Components/LoginForm/LoginForm";
import Register from "./Components/Register/Register";
import ForgetPassword from "./Components/ForgetPassword/ForgetPassword";
import DropDown from './Components/Dropdown/Dropdown'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <LoginForm />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/forgetPassword">
          <ForgetPassword />
        </Route>
        <Route path="/dropdown" >
          <DropDown/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
