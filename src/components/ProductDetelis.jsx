import React, { useEffect, useState } from "react";
import "../sass/detelis.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import arrow from "../assets/arrow.svg";
import rating from "../assets/reating.svg";

function ProductDetelis() {
  const { postId } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const fetchProduct = async (postId) => {
    try {
      const res = await axios.get(`http://localhost:3000/shop/${postId}`);
      const data = await res.data;
      console.log(data);
      setProduct(data);
    } catch (error) {
      setError(error);
      console.log(error.message);
    } finally {
    }
  };

  useEffect(() => {
    fetchProduct(postId);
  }, [postId]);

  return (
    <>
      <div className="detelis">
        <div className="info">
          <div className="container">
            <div className="info_text ">
              <Link to="/">
                <p className="opacity">Home</p>
              </Link>
              <img src={arrow} alt="" />
              <Link to="/shop">
                <p className="opacity">Shop</p>
              </Link>
              <img src={arrow} alt="" />
              <div className="line"></div>
              <p>{product.title}</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="product_detal">
            <div className="product_detal-imgs">
              <div className="imgg-line">
                <img src={product.image} alt={product.title} />
                <img src={product.image} alt={product.title} />
                <img src={product.image} alt={product.title} />
                <img src={product.image} alt={product.title} />
              </div>
              <img className="img" src={product.image} alt="" />
            </div>
            <div className="product_detal-text">
              <h1>{product.title}</h1>
              <p className="price">Rp:{product.price}</p>
              <div className="imgg">
                <img src={rating} alt="" />
                <div className="line"></div>
                <p>5 Customer Review</p>
              </div>
              <p className="lorem">
                Setting the bar as one of the loudest speakers in its class, the
                Kilburn is a compact, stout-hearted hero with a well-balanced
                audio which boasts a clear midrange and extended highs for a
                sound.
              </p>
              <div className="size">
                <p className="opacity">Size</p>
                <div className="size-line">
                  <p className="size_box">S</p>
                  <p className="size_box">M</p>
                  <p className="size_box">L</p>
                  <p className="size_box">XL</p>
                </div>
              </div>
              <button>Add to card</button>
              <div className="linee"></div>
              <div className="share">
                <div className="share_text">
                  <p className="titul">SKU</p>
                  <p>:  SS001</p>
                </div>
                <div className="share_text">
                  <p className="titul">Category</p>
                  <p>: {product.category}</p>
                </div>
                <div className="share_text">
                  <p className="titul">Tags</p>
                  <p>: {product.category}, Home, Shop</p>
                </div>
                <div className="share_text">
                  <p className="titul">Share</p>
                  <p>:</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="scrolto">
        <h1>Scroll👆🏻</h1>
      </div>
    </>
  );
}

export default ProductDetelis;
