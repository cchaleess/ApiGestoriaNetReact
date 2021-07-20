import React from "react";
import { LoginAuth0 } from "../Buttons/LoginAuth0Button";
import { LoginGoogle } from "../Buttons/LoginGoogle";
import { LoginSaml } from "../Buttons/LoginSaml";

function Login() {
  return (
    <div class="container text-center">
      <div class="row justify-content-center">
        <div class="col-4">
          <LoginGoogle />
        </div>
        <div class="col-4">
          {" "}
          <LoginSaml />
        </div>
        <div class="col order-1">
          {" "}
          <LoginAuth0 />
        </div>
      </div>
    </div>
  );
}

export default Login;
