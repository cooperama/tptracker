import React, { Component } from 'react';

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