import React, { Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/HomePage";
import Employee from "./components/Pages/EmployeePage";
import Department from "./components/Pages/DepartmentPage";
import Login from "./components/Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/employee" component={Employee} />
          <Route path="/department" component={Department} exact />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
}
export default App;
