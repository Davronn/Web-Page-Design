import React from "react";
import "../sass/shop.scss";
import bgSHop from "../assets/shopbg.svg";
import arrow from "../assets/arrow.svg";

function Shop() {
  return (
    <div >
      <div className="Shop">
        <div
          className="head"
          style={{
            backgroundImage: `url(${bgSHop})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="text container">
            <h2>Shop</h2>
            <p>
              <b>Home</b>
              <img src={arrow} alt="" />
              Shop
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;
