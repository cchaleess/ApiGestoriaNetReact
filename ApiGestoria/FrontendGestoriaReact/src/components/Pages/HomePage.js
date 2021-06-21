import React from "react";
import GoogleLogin from "react-google-login";

function Home() {
  const onSuccess = (res) => {
    localStorage.setItem("loginUserGoogle", res.profileObj.givenName);
  };

  return (
    <div className="text-center">
      <h3 className="m-3 d-flex justify-content-center">Home</h3>
      <div>
        <h3>Autenticación Google</h3>
        <GoogleLogin
          clientId="128507741231-f29fn3id10e5nhoihhvhehvgrr8t44r4.apps.googleusercontent.com"
          buttonText="Google"
          cookiePolicy={"single_host_origin"}
          isSignedIn={true}
          onSuccess={onSuccess}
        />
      </div>
      <h3>Autenticación Auth0</h3>
    </div>
  );
}
export default Home;
