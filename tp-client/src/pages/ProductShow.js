import React from 'react';
import ProductModel from '../models/product';
import ProductCard from '../components/ProductCard';

class ProductShow extends React.Component {
  state = {
    product: {}
  }

  componentDidMount() {
    const productId = this.props.match.params.id;

    ProductModel.getOne(productId)
      .then((data) => {
        this.setState({ product: data.product });
      });
  }

  render() {
    return(
      <div>
        <h1>see one product</h1>
        <div className="productCardContainer">
          <ProductCard product={this.state.product} />
        </div>
      </div>
    )
  }
}

export default ProductShow;