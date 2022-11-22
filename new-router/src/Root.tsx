import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function Root() {
  return (
    <>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </>
  );
}

export default Root;
