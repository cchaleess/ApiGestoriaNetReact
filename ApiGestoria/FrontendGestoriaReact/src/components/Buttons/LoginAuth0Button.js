import React, { useState, Fragment } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutAuth0 } from "./LogoutAuth0Button";

export const LoginAuth0 = () => {
  const { loginWithRedirect } = useAuth0();
  const [login] = useState(false);

  return (
    <Fragment>
      <h4>Autenticación Auth0</h4>
      {!login ? (
        <button
          className="btn btn-info btn-lg"
          type="button"
          onClick={() => loginWithRedirect()}
        >
          Auth0
        </button>
      ) : (
        <LogoutAuth0 />
      )}
    </Fragment>
  );
};
