import React from "react";
import { NavLink } from "react-router-dom";

export default function SignInContent() {
  return (
    <section className="sign-in-content">
      <form>
        <i class="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <div className="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div className="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div className="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        <NavLink to="/User" className="main-nav-item">
          <button className="sign-in-button">Sign In</button>
        </NavLink>
      </form>
    </section>
  );
}
