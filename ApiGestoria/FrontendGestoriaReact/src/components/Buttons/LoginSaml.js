import React, { Fragment, useEffect, useState } from "react";

export const LoginSaml = () => {
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
  }, [login]);

  function handleClick(e) {
    let sam = "https://localhost:44321/saml";
    window.location.href = sam;
  }

  return (
    <Fragment>
      <h4>Autenticación SAML</h4>
      <button
        className="btn btn-secondary btn-lg"
        type="button"
        onClick={handleClick}
      >
        SAML
      </button>
      {login ? console.log("hola") : null}
    </Fragment>
  );
};
