import React from "react";
import Header from "../Header/Header";
import "../../views/Dashboard/dashboard.css";

const Layout = ({ children }) => {
  return (
    <div>
      <div className="Dashboard_Body">
        <Header />
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
