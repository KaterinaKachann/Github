import React from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

interface IProps {
  children: JSX.Element;
}

function PrivateRoute() {
  let userid = localStorage.getItem("token") == null ? false : true;
  return userid ? <Outlet/> : <Navigate to="/" />;
}

export default PrivateRoute;
