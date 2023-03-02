import React from "react";
import Logo from "../assets/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import UnconnectedNavbar from "./UnconnectedNavbar";
// import ConnectedNavbar from "./ConnectedNavbar";

export default function Navbar() {
  return (
    <nav className="main-nav">
      <NavLink to="/Home" className="main-nav-logo">
        <img className="main-nav-logo-image" src={Logo} alt="logo ArgentBank" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {/* <ConnectedNavbar /> */}
      <UnconnectedNavbar />
    </nav>
  );
}
