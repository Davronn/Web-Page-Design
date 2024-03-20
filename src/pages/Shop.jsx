import { useEffect, useState } from "react";
import "../sass/shop.scss";
import bgSHop from "../assets/shopbg.svg";
import arrow from "../assets/arrow.svg";
import filterimg from "../assets/filter.svg";
import filter2 from "../assets/filter2.svg";
import filter3 from "../assets/filter3.svg";
import Footer2 from "../components/Footer2";
import { useNavigate } from "react-router-dom";

function Shop() {
  const navigte = useNavigate()
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await fetch("http://localhost:3000/shop");
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
    <div>
      <div className="shop">
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
            <div>
              <span className="home_centr">
                <b>Home</b>
              </span>
              <img src={arrow} alt="" />
              Shop
            </div>
          </div>
        </div>
        <div className="filter">
          <div className="container">
            <div className="filter_data">
              <div className="data1">
                <img src={filterimg} alt="" />
                <img src={filter2} alt="" />
                <img src={filter3} alt="" />
                <p>Showing 1–16 of 32 results</p>
              </div>
              <div className="data2">
                <p>Show</p>
                <input className="in1" type="num" placeholder="16" />
                <p>Short by</p>
                <input className="in2" type="text" placeholder="Default" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
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
                    <button onClick={()=>navigte(`/${item.id}`)}>Add to card</button>
                  </div>
                  {item.circle && <p className="circle"> {item.circle}</p>}
                </div>
              ))}
          </div>
        </div>
        <div>
          <Footer2 />
        </div>
      </div>
    </div>
  );
}

export default Shop;
