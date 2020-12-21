import React from "react";

class MyCart extends React.Component {
  state = {
    count: 1,
  };
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
  render() {
    return (
      <div className="my-items">
        <nav className="checkout-nav">
          <i className="fas fa-chevron-left"></i>
          <h2 className="brand-name">Essentials.</h2>
          <div>
            <i className="fas fa-shopping-cart"></i>
            <div className="cart-plus-one">1</div>
          </div>
        </nav>
        <div className="cart-item">
          <h3>My Cart</h3>
          <div>
            <div className="cart-item-image">
              <img
                src="https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_98ca7243-103f-4435-813c-fbb291cfe147.jpg"
                alt="charmin"
              />
            </div>
            <div>
              <div className="cart-item-info">
                <div className="cart-product-info">
                  <p>Charmin Ultra Soft Toilet Paper</p>
                  <p>Mega Rolls - 4 ct</p>
                </div>
                <div className="cart-close">
                  <i class="fas fa-times"></i>
                </div>
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
            </div>
          </div>
        </div>
        <div className="confirm-order">
          <div className="total">
            <p>Subtotal:</p>
            <p>$5.99</p>
          </div>
          <a href="/checkout">
            <button className="confirm-order-btn">Go to Checkout</button>
          </a>
        </div>
      </div>
    );
  }
}

export default MyCart;
