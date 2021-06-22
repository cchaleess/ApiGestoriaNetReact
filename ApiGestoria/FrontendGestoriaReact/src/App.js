import React, { useEffect, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Utilities/Navigation";
import Home from "./components/Pages/HomePage";
import Footer from "./components/Utilities/Footer";
import Employee from "./components/Pages/EmployeePage";
import Department from "./components/Pages/DepartmentPage";
import Login from "./components/Pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/employee" component={Employee} />
          <Route path="/department" component={Department} exact />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
