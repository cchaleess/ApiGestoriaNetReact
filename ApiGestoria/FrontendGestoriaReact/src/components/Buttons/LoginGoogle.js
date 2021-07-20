import React, { Fragment } from "react";
import GoogleLogin from "react-google-login";

export const LoginGoogle = () => {
  const onSuccess = (res) => {
    localStorage.setItem("loginUserGoogle", res.profileObj.givenName);
  };

  return (
    <Fragment>
      <h4>Autenticación Google</h4>
      <GoogleLogin
        clientId="128507741231-f29fn3id10e5nhoihhvhehvgrr8t44r4.apps.googleusercontent.com"
        buttonText="Google"
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
        onSuccess={onSuccess}
      />
    </Fragment>
  );
};
