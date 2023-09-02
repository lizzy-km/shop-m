import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { isAuthSelector } from "../RTK/Services/AuthSlice";

function PrivateRoute(props) {
  const isAuth = useSelector(isAuthSelector);

  return isAuth
    ? <Route {...props} />
    : <Redirect to="/login" />;
}

export default PrivateRoute;
