import React from "react";
import "../sass/header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <nav>
          <img src="logo.svg" alt="logo" />
          <div className="links">
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/shop">
                <li>Shop</li>
              </Link>
              <Link to="/about">
                <li>About</li>
              </Link>
              <Link to="/contact">
                <li>Contact</li>
              </Link>
            </ul>
          </div>
          <div className="icons">
            <img src="person !.svg" alt="" />
            <img src="pusk.svg" alt="" />
            <img src="favoruties.svg" alt="" />
            <img src="shop.svg" alt="" />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
