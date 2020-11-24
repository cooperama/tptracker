import React from "react";
import { Link, Redirect } from "react-router-dom";

function StoreCard(props) {
  return (
    <li className="StoreCard">
      <Link to={`/stores/${props.id}`} className="StoreCardLink">
        <img className="storeCardImg" src={props.image} alt={props.name} />
        <h2>{props.name}</h2>
        <h3>{props.location}</h3>
        <div></div>
      </Link>
    </li>
  );
}

export default StoreCard;
