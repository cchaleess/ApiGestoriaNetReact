import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutAuth0 = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="btn btn-danger btn-lg"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Logout
    </button>
  );
};
