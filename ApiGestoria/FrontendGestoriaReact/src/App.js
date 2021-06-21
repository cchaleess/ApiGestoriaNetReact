import React, { useEffect, Fragment } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Navigation } from "./components/Utilities/Navigation";
import Home from "./components/Pages/HomePage";
import Footer from "./components/Utilities/Footer";
import Employee from "./components/Pages/EmployeePage";
import Department from "./components/Pages/DepartmentPage";

function App() {

  useEffect(() => { 
    localStorage.setItem(
      "token",
      window.location.pathname
        .split("&")[0]
        .substring(7, window.location.pathname.split("&")[0].length)
    );

    localStorage.setItem(
      "userLoginSAML",
      window.location.pathname
        .split("&")[1]
        .substring(9, window.location.pathname.split("&")[1].length)
    );
  });

  const fecha = new Date().getFullYear();

  return (
    <BrowserRouter>
      <div className="container">
        <h3 className="m-3 d-flex justify-content-center">
          API NETCORE - SQL SERVER - REACTJS
        </h3>
        <Navigation />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/employee" component={Employee} />
          <Route path="/department" component={Department} exact />
        </Switch>
      </div>

    </BrowserRouter>
  );
}
export default App;
