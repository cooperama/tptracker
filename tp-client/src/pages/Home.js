import React from "react";
import { Link } from "react-router-dom";
import ProductModel from "../models/product";
import backgroundImage from "../map-background.png";

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
        <div className="main-content">
          <h1>
            Welcome to <span className="brand-name">Essentials.</span>
          </h1>
          <form action="">
            <div className="form-input">
              <label htmlFor="zipcode">Enter your Zipcode</label>
              <input
                type="text"
                name="zipcode"
                id="zipcode"
                onChange={this.searchHandler}
                placeholder="Zipcode"
              />
            </div>
          </form>
          <Link to="/products">
            <i class="fas fa-angle-right"></i>
          </Link>
        </div>
        <div className="map-image">
          <img src={backgroundImage} alt="background image" />
        </div>
      </div>
    );
  }
}

export default Home;
