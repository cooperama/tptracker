import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function ProductCard(props) {
  return (
    <li className="productCard">
      <Link to={`/products/${props.product._id}`} className="productCardLink">
        <img 
          className="productCardImg"
          src={props.product.image}
          alt={props.game.name}
        />
        <h2>{props.product.name}</h2>
        <h3>{props.product.stock}</h3>
        <h3>{props.product.price}</h3>
        <div>
          {/* <Link to={}>Add to Cart</Link> */}
        </div>
      </Link>
    </li>
  )
}

export default ProductCard;