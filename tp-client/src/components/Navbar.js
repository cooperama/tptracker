import React from "react";
import { Link } from "react-router-dom";

function NavBar(props) {
  return (
    <nav>
      {/* <ul>
        <li className="navLi">
          <Link to="/">Home</Link>
          <Link to="/products">All Products</Link>
          <Link to="/stores">All Stores</Link>
          <Link to="/cart">Cart</Link>
        </li>
      </ul> */}
      <i class="fas fa-chevron-left"></i>
      <h2 className="brand-name">Essentials.</h2>
      <i className="fas fa-shopping-cart"></i>
    </nav>
  );
}

export default NavBar;
