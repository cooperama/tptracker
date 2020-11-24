import React from "react";
import ProductModel from "../models/product";
import ProductCard from "../components/ProductCard";

class ProductShow extends React.Component {
  state = {
    product: {},
    count: 0,
  };
  addToCartRef = React.createRef();

  componentDidMount() {
    const productId = this.props.match.params.id;

    ProductModel.getOne(productId).then((data) => {
      this.setState({ product: data.product });
    });
  }
  takeFromCount = () => {
    this.setState((prevState) => {
      if (prevState.count > 0) {
        const newCount = prevState.count - 1;
        return {
          count: newCount,
        };
      }
    });
  };
  addToCount = () => {
    this.setState((prevState) => {
      const newCount = prevState.count + 1;
      return {
        count: newCount,
      };
    });
  };
  addToCartHandler = (e) => {
    e.target.value = "Added to Cart";
    this.addToCartRef.current.classList.remove("display-none");
  };
  render() {
    return (
      <div>
        <div ref={this.addToCartRef} className="addedToCart display-none">
          1
        </div>
        <div className="productCardContainer">
          {/* <ProductCard product={this.state.product} /> */}
          <div className="product-show-image-container">
            <img
              src="https://www.riteaid.com/shop/media/catalog/product/0/3/037000613244_6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=406&width=406&canvas=406:406"
              alt="charmin"
            />
          </div>
          <div className="product-show-title">
            <p>Charmin Ultra Soft Toilet Paper</p>
            <p>Mega Rolls - 4 ct</p>
          </div>
          <div className="numbers-container">
            <div className="add-to-cart">
              <span onClick={this.takeFromCount}>
                <i className="fas fa-minus"></i>
              </span>
              <div className="count"></div>
              <input type="text" value={this.state.count} />
              <span onClick={this.addToCount}>
                <i className="fas fa-plus"></i>
              </span>
            </div>
            <div className="price">
              <p>$5.99</p>
            </div>
          </div>
          <div className="product-detail">
            <h4>Product Detail</h4>
            <p>
              Charmin Ultra Soft is our softest toilet paper ever so it is
              harder than ever to resist it is 2X more absorbent and you can use
              less versus...
            </p>
            <span>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <div className="product-reviews">
            <h4>Reviews</h4>
            <span>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </span>
            <span>
              <i className="fas fa-chevron-down"></i>
            </span>
          </div>
          <input
            type="button"
            onClick={this.addToCartHandler}
            className="add-to-cart"
            value="Add to Cart"
          />
        </div>
      </div>
    );
  }
}

export default ProductShow;
