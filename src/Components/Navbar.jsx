import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex">
      <h1>
        <Link to="/">Navbar</Link>
      </h1>
      <div className="flex">
        <strong>
          <Link to="/login">Login</Link>
        </strong>
        <strong className="nav">
          <Link to="/">Books</Link>
        </strong>
      </div>
    </div>
  );
};
