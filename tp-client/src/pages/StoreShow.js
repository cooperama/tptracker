import React from "react";
import StoreModel from "../models/store";
import StoreCard from "../components/StoreCard";

class StoreShow extends React.Component {
  state = {
    store: {},
  };

  componentDidMount() {
    const StoreId = this.props.match.params.id;

    StoreModel.getOne(StoreId).then((data) => {
      this.setState({ store: data.store });
    });
  }

  render() {
    return (
      <div>
        <div className="StoreCardContainer">
          <div className="store-logo">
            <img src="" alt="" />
          </div>
          <input type="text" placeholder="Search items at Target" />
          <div className="product-container">
            <div className="product-image">
              <img
                src="https://www.riteaid.com/shop/media/catalog/product/0/3/037000613244_6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=406&width=406&canvas=406:406"
                alt="charmin"
              />
            </div>
            <div className="product-info">
              <div>
                <p>Charmin Ultra Soft Toilet Paper Mega Rolls - 4 ct</p>
                <p>$5.99</p>
              </div>
              <div>
                <i class="fas fa-plus-circle"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="product-container">
          <div className="product-image">
            <img
              src="https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b3276b05-03d7-4ae7-9839-189f85a7a967.jpg"
              alt="charmin"
            />
          </div>
          <div className="product-info">
            <div>
              <p>Cottonelle Ultra ComfortCare Mega Roll Toilet Paper, 18pk</p>
              <p>$17.99</p>
            </div>
            <div>
              <i class="fas fa-plus-circle"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreShow;
