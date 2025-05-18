import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import TokenService from "../shared/lib/TokenService";

export function Redirect() {
  const access = TokenService.getToken();

  if (access) return <Navigate to="/" />;

  return <Outlet />;
}
