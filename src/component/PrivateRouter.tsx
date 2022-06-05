import React from "react";
import { Navigate, Outlet } from "react-router-dom";



function PrivateRoute() {
  let userid = localStorage.getItem("token") == null ? false : true;
  return userid ? <Outlet/> : <Navigate to="/" />;
}

export default PrivateRoute;
