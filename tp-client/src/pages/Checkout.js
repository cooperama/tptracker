import React from "react";

<<<<<<< HEAD
export default function Checkout() {
  return (
    <div>
      <div className="payment-form">
        <div className="payment-method">
          <div className="payment-top">
            <p>Payment method</p>
            <a href="#">CHANGE</a>
          </div>
          <div className="payment-bottom">
            <p>
              <i class="far fa-credit-card"></i>**** **** **** 4747
            </p>
          </div>
        </div>
        <div className="delivery-address">
          <div className="delivery-top">
            <p>Delivery address</p>
            <a href="#">CHANGE</a>
          </div>
          <div className="delivery-bottom">
            <div className="icon">
              <i class="fas fa-home"></i>
            </div>
            <div className="address">
              <p>Louie Robertson</p>
              <p>543 Norman Ave Los Angeles, CA</p>
              <p>98039</p>
            </div>
          </div>
          <div className="delivery-options">
            <div className="pick-up-btn-selected">
              <p>
                <i class="fas fa-walking"></i>Pick up
                <i class="fas fa-check"></i>
              </p>
            </div>
            <div className="delivery-btn">
              <p>
                <i class="fas fa-car"></i>Delivery
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="confirm-order">
        <div className="total">
          <p>Total:</p>
          <p>$5.99</p>
        </div>
        <button className="confirm-order-btn">Confirm Order</button>
      </div>
    </div>
  );
}
=======
class Checkout extends React.Component {
  render() {
    return (
      <div>
        <h1>Checkout</h1>
        <div className="input">
          <input
            type="text"
            placeholder="Cardholder Name"
            required
            /><br/>
          <input
            type="text"
            placeholder="Card Number"
            required
            /><br/>
          <input
            type="text"
            placeholder="Billing Address"
            required
            /><br/>
          <input
            type="submit" placeholder="Submit"
            />
          </div>

      </div>
    )
  }
}

export default Checkout;
>>>>>>> da5aa81556aa3b4b1651afd23c449c218a4f3062
