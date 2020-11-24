import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      <ul>
        <li className="navLi">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
