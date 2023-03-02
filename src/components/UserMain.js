import React from "react";
import UserAccount from "./UserAccount";
import UserName from "./UserName";

export default function UserMain() {
  return (
    <main className="main bg-dark">
      <UserName />
      <h2 className="sr-only">Accounts</h2>
      <UserAccount />
    </main>
  );
}
