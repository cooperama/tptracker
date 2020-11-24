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
          {/* <Link to="/stores/:storeId">SSS</Link>
          <Link to="/products/:productId">PPP</Link> */}
          <Link to="/cart">Cart</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
