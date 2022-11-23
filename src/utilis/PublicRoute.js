import React from "react";
import { Route, Navigate } from "react-router-dom";
import isLogin from "./isLogin";

const PublicRoute = ({ children, redirectTo }) => {
  const isAuthenticated = isLogin();

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};

export default PublicRoute;