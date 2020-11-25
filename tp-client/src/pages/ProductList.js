import React from "react";
import ProductModel from "../models/product";
import { Link } from "react-router-dom";
import ProductThumbnail from "../components/ProductThumbnail";
import chips from "../images/Chips.png";
import faceMask from "../images/Face Mask copy.png";
import handSanitizer from "../images/Hand Sanitizer.png";
import tp from "../images/TP.png";
import water from "../images/Water.png";
import wipes from "../images/Wipes.png";

class ProductList extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    // API call
    ProductModel.all().then((data) => {
      console.log("data: ", data);
      this.setState({ products: data.products });
    });
  }
  // renderProducts() {
  //   return this.state.products.map((product) => {
  //     return (
  //       <ProductThumbnail
  //         key={product._id}
  //         image={product.image}
  //         name={product.item}
  //         id={product._id}
  //       />
  //     );
  //   });
  // }
  render() {
    return (
      <div className="product-list-page-div">
        <p className="select-item">Select an Item</p>
        {/* <div className="products-container">{this.renderProducts()}</div> */}
        <div className="products-container">
          <div className="productThumbnail">
            <Link to={`/stores`} className="productThumbnailLink">
              <div className="product-image-div">
                <img
                  className="productThumbnailImg"
                  src={tp}
                  alt="toilet paper"
                />
              </div>
              <div className="productName">
                <p>Toilet Paper</p>
              </div>
            </Link>
          </div>
          <div className="productThumbnail">
            <Link to={`/stores`} className="productThumbnailLink">
              <div className="product-image-div">
                <img className="productThumbnailImg" src={water} alt="water" />
              </div>
              <div className="productName">
                <p>Water</p>
              </div>
            </Link>
          </div>
          <div className="productThumbnail">
            <Link to={`/stores`} className="productThumbnailLink">
              <div className="product-image-div">
                <img
                  className="productThumbnailImg"
                  src={faceMask}
                  alt="faceMask"
                />
              </div>
              <div className="productName">
                <p>Face mask</p>
              </div>
            </Link>
          </div>
          <div className="productThumbnail">
            <Link to={`/stores`} className="productThumbnailLink">
              <div className="product-image-div">
                <img
                  className="productThumbnailImg"
                  src={handSanitizer}
                  alt="handSanitizer"
                />
              </div>
              <div className="productName">
                <p>Hand Sanitizer</p>
              </div>
            </Link>
          </div>
          <div className="productThumbnail">
            <Link to={`/stores`} className="productThumbnailLink">
              <div className="product-image-div">
                <img className="productThumbnailImg" src={chips} alt="chips" />
              </div>
              <div className="productName">
                <p>Flamin' Hot Cheetos</p>
              </div>
            </Link>
          </div>
          <div className="productThumbnail">
            <Link to={`/stores`} className="productThumbnailLink">
              <div className="product-image-div">
                <img className="productThumbnailImg" src={wipes} alt="wipes" />
              </div>
              <div className="productName">
                <p>Wipes</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductList;
