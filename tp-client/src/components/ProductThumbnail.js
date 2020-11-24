import React from "react";
import { Link } from "react-router-dom";

function ProductThumbnail(props) {
  console.log("product thumbnail");
  return (
    <div className="productThumbnail">
      <Link to={`/stores`} className="productThumbnailLink">
        {/* <Link to={`/products/${props.id}`} className="productThumbnailLink"> */}
        <div className="product-image-div">
          <img
            className="productThumbnailImg"
            src={props.image}
            alt={props.name}
          />
        </div>
        <div className="productName">
          <p>{props.name}</p>
        </div>
      </Link>
    </div>
  );
}

export default ProductThumbnail;
