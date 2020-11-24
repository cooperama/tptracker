import React from "react";
import { Link, Redirect } from "react-router-dom";

function ProductCard(props) {
  return (
    <li className="productCard">
      <Link to={`/products/${props.id}`} className="productCardLink">
        <img
          className="productCardImg"
          // src={props.image}
          alt={props.name}
        />
        <h2>{props.name}</h2>
        <h3>{props.stock}</h3>
        <h3>{props.price}</h3>
        <div>{/* <Link to={}>Add to Cart</Link> */}</div>
      </Link>
    </li>
  );
}

export default ProductCard;
