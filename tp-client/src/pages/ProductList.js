import React from "react";
import ProductModel from "../models/product";
import { Link } from "react-router-dom";

class ProductList extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    ProductModel.all().then((data) => {
      console.log("data: ", data);
      this.setState({ products: data.products });
    });
  }
  render() {
    return <div>Products List</div>;
  }
}

export default ProductList;
