import React from "react";
import SignInForm from "./SignInForm";

export default function SignInContent() {
  return (
    <section className="sign-in-content">
      <i className="fa fa-user-circle sign-in-icon"></i>
      <h1>Sign In</h1>
      <SignInForm />
    </section>
  );
}
