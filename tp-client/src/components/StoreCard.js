import React from 'react';
import { Link, Redirect } from 'react-router-dom';

function StoreCard(props) {
  return (
    <li className="StoreCard">
      <Link to={`/stores/${props.store._id}`} className="StoreCardLink">
        <img 
          className="storeCardImg"
          src={props.store.image}
          alt={props.game.name}
        />
        <h2>{props.store.name}</h2>
        <h3>{props.store.products}</h3>
        <h3>{props.store.location}</h3>
        <h4>{props.store.weekdays}</h4>
        <h4>{props.store.weekends}</h4>
        <div>
        </div>
      </Link>
    </li>
  )
}

export default StoreCard;