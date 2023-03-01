import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import { Home } from "./pages/Home";
import { SignIn } from "./pages/SignIn";
import { User } from "./pages/User";

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          {/* Page par default */}
          <Route index element={<Home />} />1{/* Routage Pages */}
          <Route path="/Home" element={<Home />} />
          <Route path="/Sign-in" element={<SignIn />} />
          <Route path="/User" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}
