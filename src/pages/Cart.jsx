import React from "react";
import "../sass/cart.scss";
import bgShop from "../assets/shopbg.svg";
import Footer2 from "../components/Footer2";
import arrow from "../assets/arrow.svg"
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
          <h2>Cart</h2>
          <div>
            <span className="home_centr">
              <b>Home</b>
            </span>
            <img src={arrow} alt="" />
            Cart
          </div>
        </div>
      </div>
      <Footer2/>
    </div>
  );
}

export default Cart;
