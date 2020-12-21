import React, { Link } from "react";
import ProductModel from "../models/product";
import ProductCard from "../components/ProductCard";

class ProductShow extends React.Component {
  state = {
    product: {},
    count: 0,
    price: 0.0,
  };
  addToCartRef = React.createRef();
  navRef = React.createRef();

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
        const newPrice = 5.99 * newCount;
        return {
          count: newCount,
          price: newPrice,
        };
      }
    });
  };
  addToCount = () => {
    this.setState((prevState) => {
      const newCount = prevState.count + 1;
      const newPrice = 5.99 * newCount;
      return {
        count: newCount,
        price: newPrice,
      };
    });
  };
  addToCartHandler = (e) => {
    e.target.value = "Added to Cart";
    this.navRef.current.classList.remove("display-none");
    // this.addToCartRef.current.classList.remove("display-none");
  };
  render() {
    return (
      <div>
        <nav ref={this.navRef} className="checkout-nav display-none">
          <i className="fas fa-chevron-left"></i>
          <h2 className="brand-name">Essentials.</h2>
          <div>
            <a href="/mycart">
              <i className="fas fa-shopping-cart"></i>
            </a>

            <div className="cart-plus-one">1</div>
          </div>
        </nav>

        <div ref={this.addToCartRef} className="addedToCart display-none">
          1
        </div>
        <div className="productCardContainer">
          {/* <ProductCard product={this.state.product} /> */}
          <div className="product-show-image-container">
            <img
              className="product-show-image"
              src="https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_98ca7243-103f-4435-813c-fbb291cfe147.jpg"
              alt="charmin"
            />
          </div>
          <div className="product-show-title">
            <h2>Charmin Ultra Soft Toilet Paper</h2>
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
              <h3>${this.state.price}</h3>
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
            <span class="stars">
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
            className="add-to-cart-button"
            value="Add to Cart"
          />
        </div>
      </div>
    );
  }
}

export default ProductShow;
