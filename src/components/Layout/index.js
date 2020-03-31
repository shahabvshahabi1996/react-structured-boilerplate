import React from "react";
import Navbar from "../Navbar";

export default ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="margin-3">{children}</div>
    </>
  );
};
