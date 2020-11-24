import React from "react";

export default function Confirmed() {
  return (
    <div>
      <div className="nav-cover"></div>
      <div className="main-content"></div>
      <img
        className="confirmed-image"
        src="https://www.flaticon.com/svg/static/icons/svg/2997/2997154.svg"
        alt="confirmed"
      />
      <div className="confirmation-text">
        <h1>Your order has been confirmed!</h1>
        <p>Please have your confirmation code ready to show at pick-up.</p>
      </div>
      <div className="submain-content">
        <div className="confirmation-code">
          <p>FG766KJ9</p>
        </div>
        <a href="/">
          <button className="back-home-btn">Back to Home</button>
        </a>
      </div>
    </div>
  );
}
