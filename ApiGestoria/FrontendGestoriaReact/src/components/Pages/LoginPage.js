import React, { useEffect, useState } from "react";
import GoogleLogin from "react-google-login";
import { LoginAuth0 } from "../Buttons/LoginAuth0Button";
import { LogoutAuth0 } from "../Buttons/LogoutAuth0Button";
import { Profile } from "../Utilities/Profile";
import { useAuth0 } from "@auth0/auth0-react";

const onSuccess = (res) => {
  localStorage.setItem("loginUserGoogle", res.profileObj.givenName);
};

function Login() {
  const { isAuthenticated } = useAuth0();

  const [login, setLogin] = useState(false);

  useEffect(() => {
    if (login) {
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
      setLogin(true);
    } else {
      console.log("No esta logeado");
    }
  });

  function handleClick(e) {
    let sam = "https://localhost:44321/saml";
    window.location.href = sam;
  }

  return (
    <div className="text-center">
      <div>
        <h3>Login Google</h3>
        <GoogleLogin
          clientId="128507741231-f29fn3id10e5nhoihhvhehvgrr8t44r4.apps.googleusercontent.com"
          buttonText="Google"
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          onSuccess={onSuccess}
        />
      </div>

      <h3>Login SAML</h3>
      <button
        className="btn btn-secondary btn-lg"
        type="button"
        onClick={handleClick}
      >
        SAML
      </button>
      {login ? console.log("hola") : null}

      <div>
        <h3>Login Auth0</h3>
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutAuth0 />
          </>
        ) : (
          <LoginAuth0 />
        )}
        {"  "}
      </div>
    </div>
  );
}

export default Login;
