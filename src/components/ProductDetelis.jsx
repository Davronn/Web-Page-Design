import React, { useEffect, useState } from "react";
import "../sass/detelis.scss";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import arrow from "../assets/arrow.svg";

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
