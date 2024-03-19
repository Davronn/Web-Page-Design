import React, { useEffect, useState } from "react";
import bg from "../assets/headbg.svg";
import range2 from "../assets/rnge 2.svg";
import range3 from "../assets/range3.svg";
import bg2 from "../assets/bg2.svg";

import "../sass/home.scss";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch("http://localhost:3000/cards");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error.massege);
      }
    };
    fetchCard();
  }, []);

  console.log(data);
  return (
    <div className="home">
      <div
        className="bd-img"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="head container">
          <div className="head_info">
            <div className="head_info-text">
              <p className="p1">New Arrival</p>
              <h1>Discover Our New Collection</h1>
              <p className="p2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis.
              </p>
              <Link to="/shop">
                <button>Buy now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="range container">
        <div className="range_text">
          <h2>Browse The Range</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="cards">
          <div className="card">
            <img src={range2} alt="" />
            <p>Dining</p>
          </div>
          <div className="card">
            <img src={range2} alt="" />
            <p>Living</p>
          </div>
          <div className="card">
            <img src={range3} alt="" />
            <p>Badroom</p>
          </div>
        </div>
      </div>
      <div className="ourProducts container">
        <h2>Our Products</h2>
        <div className="cardProducts">
          {data.length > 0 &&
            data.map((item) => (
              <div className="cardProduct" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cardProduct_text">
                  <p className="title">{item.title}</p>
                  <p className="description">{item.description}</p>
                  <span className="prisses">
                    <p className="price">Rp:{item.price}</p>
                    {item.discount && (
                      <p className="discount">Rp: {item.discount}</p>
                    )}
                  </span>
                </div>
                <div className="hovercard">
                  <button>Add to card</button>
                </div>
                {item.circle && <p className="circle"> {item.circle}</p>}
              </div>
            ))}
        </div>
        <button className="show_more">Show more</button>
      </div>
      <div
        className="funiro"
        style={{
          backgroundImage: `url(${bg2})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h3>Share your setup with</h3>
        <h2>#FuniroFurniture</h2>
      </div>
    </div>
  );
}

export default Home;
