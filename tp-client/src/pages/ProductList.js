import React from "react";
import ProductModel from "../models/product";
import { Link } from "react-router-dom";

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
  render() {
    return (
      <div className="poducts-container">
        <h1>Products List</h1>
      </div>
    );
  }
}

export default ProductList;
