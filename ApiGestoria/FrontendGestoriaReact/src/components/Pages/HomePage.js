import React, { useState, useEffect, Fragment } from "react";
import { Navigation } from "../Utilities/Navigation";
import DataUserLoginService from "../../Services/DataloginUserService";

function Home() {
  const [nameUserlogin, setnameUserlogin] = useState("");
  useEffect(() => {
    debugger;
    new DataUserLoginService().insertTokenLocalStorage();
    new DataUserLoginService().insertUserloginLocalStorage();
    setnameUserlogin(localStorage.getItem("loginUserGoogle"));
  }, []);

  return (
    <Fragment>
      <h1> Bienvenido a Apigestoria </h1>
      <h4> Su usuario es: {nameUserlogin} </h4>
      <Navigation />
    </Fragment>
  );
}
export default Home;
