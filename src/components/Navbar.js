import React from "react";
import Logo from "../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <NavLink to="/Home" className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="logo ArgentBank" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        <NavLink to="/Sign-in" className="main-nav-item">
          <i className="fa fa-user-circle"></i>
          Sign In
        </NavLink>
      </div>
    </nav>
  );
}
