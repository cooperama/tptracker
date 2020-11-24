// from Coding With Basir YouTube tutorial
import React, { Component } from 'react';

function Header(props) {
  return (
    <h1>Shopping Cart</h1>
  )
}

function Footer(props) {
  return (
    <h2>{props.total}</h2>
  )
}

function Items(props) {
  return <table>
  <thead>
    <tr><th>Name</th>
    <th>Count</th>
    <th>Price</th>
    <th>Total</th></tr>
  </thead>
  <tbody>
  {
    props.productItems.map(item =>
    <tr key={item.name}>
    <td>{item.name}</td>
    <td>{item.count}</td>
    <td>{item.price}</td>
    <td>{item.price*item.count}</td>
    </tr>
    )}
    </tbody>
  </table>
}

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: ""
    }
  }
  render() {
    const productItems = [{ name: 'Toilet Paper', count: 3, price: 10 },
    { name: 'Hand Sanitizer', count: 7, price: 3 },
    { name: 'Face Masks', count: 21, price: 8 }
    ];

    return (
      <div className="cart">
        <Header />
        <Items productItems={productItems} />
        <Footer total={productItems.reduce((a, c) => (a+c.price*c.count), 0)} />
      </div>
    )
}
}

export default Cart;
