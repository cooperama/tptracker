import React, { Link } from "react";
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
            <img className="target-logo"
              src="https://allvectorlogo.com/img/2016/11/target-logo.png"
              alt="target-logo"
            />
          </div>
          <input className="target-search" type="text" placeholder="Search items at Target" />

          <div className="product-container">
            <div className="tp-image">
              <img
                src="https://www.riteaid.com/shop/media/catalog/product/0/3/037000613244_6.jpg?quality=80&bg-color=255,255,255&fit=bounds&height=406&width=406&canvas=406:406"
                alt="charmin"
              />
            </div>
            <div className="product-info">
              <div className="tp-text">
                <p>Charmin Ultra Soft Toilet Paper Mega Rolls<small> - 4 ct</small></p>
                <p>$5.99</p>
              </div>
              <div>
                <a href="/products/5248d90il21odh927519">
                  <i className="fa fa-plus-circle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="product-container">
            <div className="tp-image">
              <img
                src="https://d2d8wwwkmhfcva.cloudfront.net/800x/d2lnr5mha7bycj.cloudfront.net/product-image/file/large_b3276b05-03d7-4ae7-9839-189f85a7a967.jpg"
                alt="cottonelle"
              />
            </div>
            <div className="product-info">
              <div>
                <p>Cottonelle Ultra ComfortCare Mega Roll Toilet Paper <small>- 18pk</small></p>
                <p>$17.99</p>
              </div>
              <div>
                <a href="/products/showProduct">
                  <i className="fa fa-plus-circle"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StoreShow;
