import React from "react";
import { NavLink } from "react-router-dom";

export default function ConnectedNavbar() {
  return (
    <div>
      <NavLink to="/User" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Tony
      </NavLink>
      <NavLink to="/Home" className="main-nav-item">
        <i className="fa fa-sign-out"></i>
        Sign Out
      </NavLink>
    </div>
  );
}
