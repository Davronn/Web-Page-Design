import React from "react";
import "../sass/cart.scss";
import bgShop from "../assets/shopbg.svg";
function Cart() {
  return (
    <div className="cart">
      <div
        className="head"
        style={{
          backgroundImage: `url(${bgShop})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text container">
          <h2>Shop</h2>
          <div>
            <span className="home_centr">
              <b>Home</b>
            </span>
            Shop
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
