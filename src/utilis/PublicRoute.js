import React from "react";
import { Route, Redirect } from "react-router-dom";
import isLogin from "./isLogin";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  return (
    // restricted = false meaning public route
    // restricted = true meaning restricted route
    <Route
      {...rest}
      render={(props) =>
        !isLogin() ? ( //로그인한 유저가 로그인페이지로 가려는 경우
          <Redirect to="/" /> //로그인했는데 restricted가 있다면 그냥 sales보여준다
        ) : (
          <Component {...props} /> //로그인안했거나, restricted가 없다면 보여주는 페이지.현재는 signup
        )
      }
    />
  );
};

export default PublicRoute;