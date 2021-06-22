import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginAuth0 = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <button
      className="btn btn-info btn-lg"
      type="button"
      onClick={() => loginWithRedirect()}
    >
      Auth0
    </button>
  );
};
