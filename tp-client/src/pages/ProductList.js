import React from "react";
import ProductModel from "../models/product";
import { Link } from "react-router-dom";
import ProductThumbnail from "../components/ProductThumbnail";

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
  renderProducts() {
    return this.state.products.map((product) => {
      return (
        <ProductThumbnail
          key={product._id}
          image={product.image}
          name={product.item}
          id={product._id}
        />
      );
    });
  }
  render() {
    return (
      <div className="poducts-container">
        <h1>Products List</h1>
        {this.renderProducts()}
      </div>
    );
  }
}

export default ProductList;
