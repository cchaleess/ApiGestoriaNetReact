import React, { useState, useEffect, Fragment } from "react";
import GoogleLogin from "react-google-login";
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
      <h1> bienvenido a Apigestoria </h1>
      <h1> Su usuario es: {nameUserlogin} </h1>
      <Navigation />
    </Fragment>
  );
}
export default Home;
