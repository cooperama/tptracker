import React from "react";
import { Link } from "react-router-dom";
import ProductModel from "../models/product";

class Home extends React.Component {
  state = {
    search: "",
  };
  submitClickHandler = (e) => {
    e.preventDefault();
    ProductModel.all().then((data) => {
      // this.props.history.push("/products");
    });
  };
  render() {
    return (
      <div>
        <form action="">
          <div className="form-input">
            <label htmlFor="zipcode">Enter Zip Code</label>
            <input
              type="text"
              name="zipcode"
              id="zipcode"
              onChange={this.searchHandler}
            />
          </div>
        </form>
        <Link to="/products">Continue</Link>
      </div>
    );
  }
}

export default Home;
