import React from "react";
import { Link } from "react-router-dom";
import "./NavF.css";

const NavF = () => {
  return (
    <div>
      <span className="link-to">
        <Link to="/">Main page</Link>
      </span>

      <span className="link-to">
        <Link to="/form">Add News </Link>
      </span>
      <span className="link-to">
        <Link to="/list">See all news </Link>
      </span>
    </div>
  );
};

export default NavF;
