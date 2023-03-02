import React from "react";
import { NavLink } from "react-router-dom";

export default function UnconnectedNavbar() {
  return (
    <div>
      <NavLink to="/Sign-in" className="main-nav-item">
        <i className="fa fa-user-circle"></i>
        Sign In
      </NavLink>
    </div>
  );
}
