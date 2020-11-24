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
      <div className="poducts-container">
        <h1>Stores List!</h1>
        {this.renderStores()}
      </div>
    );
  }
}

export default StoreList;
