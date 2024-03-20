import React, { useEffect, useState } from "react";
import "../sass/detelis.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function ProductDetelis() {
  const { postId } = useParams();
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);

  const fetchProduct = async (postId) => {
    try {
      const res = await axios.get(`http://localhost:3000/cards/${postId}`);
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
      <div className="container pr_d">
        <Link to={-1}>
          <button>Back</button>
        </Link>
        <div className="detelis">
          <img src={product.image} alt="" />
          <h1>{product.title}</h1>
        </div>
      </div>
    </>
  );
}

export default ProductDetelis;
