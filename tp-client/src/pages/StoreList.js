import React from "react";
import StoreModel from "../models/store";
import { Link } from "react-router-dom";

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
  render() {
    return (
      <div className="poducts-container">
        <h1>Stores List</h1>
      </div>
    );
  }
}

export default StoreList;
