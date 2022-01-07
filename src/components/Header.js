import React from "react";
// import Navbar from "./Navbar";
const Header = () => {
  return (
    <div className="banner">
      {/* <Navbar /> */}
      <div className="banner__content">
        <div className="container">
          <div className="banner__text">
            <h3>Pizza Delivery</h3>
            <h1>DOMINO'S</h1>
            <p>
            IndianPizza is all about quality you can trust. As one of the
            original founding Pizza brands and the 3rd largest Pizza
            chain in US.
            </p>
            <div className="banner__btn">
              <a href="" className="btn btn-smart">
                DELIVERY NOW
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
