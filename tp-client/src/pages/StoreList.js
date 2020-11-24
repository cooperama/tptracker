import React from "react";
import StoreModel from "../models/store";
import { Link } from "react-router-dom";
import StoreCard from "../components/StoreCard";

class StoreList extends React.Component {
  state = {
    stores: [],
  };

  componentDidMount() {
    // API call
    StoreModel.all().then((data) => {
      console.log("data: ", data);
      this.setState({ stores: data.stores });
    });
  }
  renderStores() {
    return this.state.stores.map((store) => {
      return (
        <StoreCard
          key={store._id}
          id={store._id}
          image={store.image}
          location={store.location}
          name={store.name}
        />
      );
    });
  }
  render() {
    return (
      <div className="products-container">
        {/* {this.renderStores()} */}
        <h1>Select a Store</h1>
        <div className="StoreCard">
          <Link to={`/stores/79081320749t69183r`} className="StoreCardLink">
            <div className="store-image-div">
              <img
                className="storeCardImg"
                src="https://1000logos.net/wp-content/uploads/2017/06/target-logo-transparent.png"
                alt="target"
              />
            </div>
            <div className="store-info-div">
              <div className="store-name">
                <h2>Target</h2>
                <p>7566 Chodd Ave, Los Angeles</p>
              </div>
              <div className="more-store-info">
                <p>
                  Cust. Rating: <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                  <i class="fas fa-star"></i>
                </p>
                <p>
                  Wait Time: <i class="fas fa-stopwatch"></i> 10 mins
                </p>
                <p>Store Hours: 8AM - 11PM</p>
              </div>
            </div>
            <div className="distance">
              <p>1.2 Miles</p>
            </div>
            <div></div>
          </Link>
        </div>
      </div>
    );
  }
}

export default StoreList;
