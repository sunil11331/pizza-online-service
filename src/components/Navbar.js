import React from "react";
import { Link } from "react-router-dom";
import { BsFillBagFill } from "react-icons/bs";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__text">
        <div className="logo">
          <img src="/img/dominos-logo.png" alt="logo" />
        </div>
        <ul className="navbar__ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/menu">Menu</Link>
          </li> */}
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          {/* <li>
            <Link to="/prices">Menu</Link>
          </li> */}
          <li>
            <Link to="/cart">
              <BsFillBagFill />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
