import React from "react";
import "../sass/footer.scss";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer">
      <div className="line"></div>
        <div className="container">
          <div className="footer_text">
            <div className="text">
              <h2>Funiro.</h2>
              <p>400 University Drive Suite 200 Coral <br></br> Gables, <br></br> FL 33134 USA</p>
            </div>
            <div className="links">
              <p>Links</p>
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
            <div className="support">
              <p>Help</p>
              <ul>
                <li>Payment Options</li>
                <li>Returns</li>
                <li>Praviy Policies</li>
              </ul>
            </div>
            <div className="newsletter">
              <p>Newsletter</p>
              <input type="email" placeholder="Enter Your Email Address" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
          <div className="line"></div>
          <p  className="footer_end-t">2023 furino. All rights reverved</p>
          
        </div>
      
    </div>
  );
}

export default Footer;
