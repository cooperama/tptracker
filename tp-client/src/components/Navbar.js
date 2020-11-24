import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      <ul>
        <li className="navLi">
          <Link to="/">Home</Link>
          <Link to="/products">All Products</Link>
          <Link to="/stores">All Stores</Link>
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
      <span>
        <i className="fas fa-shopping-cart"></i>
      </span>
    </nav>
  );
}

export default NavBar;
