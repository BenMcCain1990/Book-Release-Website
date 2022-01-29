import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">Book Title</Link>
      </div>
      <div className="links">
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/explore">Explore</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Nav;
