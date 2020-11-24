import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      <i className="fas fa-chevron-left"></i>
      <h2 className="brand-name">Essentials.</h2>
      <i className="fas fa-shopping-cart"></i>
    </nav>
  );
}

export default NavBar;
