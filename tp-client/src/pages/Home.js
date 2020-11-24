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
      <div className="homepage">
        <div className="nav-cover"></div>
        <div className="map-image">
          <img src={backgroundImage} alt="background image" />
        </div>
        <div className="main-content">
          <div className="welcome">
            <h1>
              Welcome to <span className="brand-name-home">Essentials.</span>
            </h1>
            {/* <form className="zipcode-form-input" action=""> */}
            <div className="zipcode-form-input">
              <label htmlFor="zipcode">Enter your Zipcode</label>
              <div className="zipcode-input-line">
                <input
                  type="text"
                  name="zipcode"
                  id="zipcode"
                  onChange={this.searchHandler}
                  placeholder="Zipcode"
                />
                <Link to="/products">
                  <i className="fas fa-angle-right"></i>
                </Link>
              </div>
            </div>
            {/* </form> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
