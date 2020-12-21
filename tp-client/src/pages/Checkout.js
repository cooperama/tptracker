import React, { useState } from "react";

export default function Checkout() {
  const [ccnum, setccnum] = useState("**** **** **** 4747");
  // const ccInputChange = (e) => {
  //   e.target.value = null;
  // };
  return (
    <div>
      <nav className="checkout-nav">
        <i className="fas fa-chevron-left"></i>
        <h2 className="brand-name">Essentials.</h2>
        <div></div>
      </nav>
      <div className="payment-form">
        <div className="payment-method">
          <div className="payment-top">
            <label htmlFor="ccn">Payment method</label>
            <a href="#">CHANGE</a>
          </div>
          <div className="payment-bottom">
            <p>
              <i class="far fa-credit-card"></i>
            </p>
            <p>**** **** **** 4747</p>
          </div>
        </div>
        <div className="delivery-address">
          <div className="delivery-top">
            <label htmlFor="address">Delivery address</label>
            <a href="#">CHANGE</a>
          </div>
          <div className="delivery-bottom">
            <div className="home-icon">
              <i class="fas fa-home"></i>
            </div>
            <div className="address">
              <p>Karen Robertson</p>
              <p>543 Norman Ave Los Angeles, CA</p>
              <p>98039</p>
            </div>
          </div>
        </div>
        <div className="delivery-options">
          <p>Delivery options</p>
          <div className="pick-up-btn-selected">
            <p>
              <span className="icon">
                <i class="fas fa-walking"></i>
              </span>
              <span>Pick up</span>
            </p>
            <p className="checked">
              <i class="fas fa-check"></i>
            </p>
          </div>
          <div className="delivery-btn">
            <p>
              <span className="icon">
                <i class="fas fa-car"></i>
              </span>
              <span>Delivery</span>
            </p>
          </div>
        </div>
      </div>
      <div className="confirm-order">
        <div className="total">
          <p>Total:</p>
          <p>$6.42</p>
        </div>
        <a href="/confirmed">
          <button className="confirm-order-btn">Confirm Order</button>
        </a>
      </div>
    </div>
  );
}
