import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ isAuth, ...rest }) => {
  if (!isAuth) {
    return <Redirect to="/" />;
  }
  return <Route {...rest} />;
};

export default PrivateRoute;
