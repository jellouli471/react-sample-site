import "./shop.css";
import Header from "../header/header";
import { useEffect, useState } from "react";

export default function Shop() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  console.log(product);

  return (
    <div>
      <div className="haeder-shop">
        <Header />
      </div>
      <div className="row-cards">
        {product.map((item) => (
          <div className="main-card" key={item.id}>
            <div className="image-title">
              <div className="image">
              <img src={item.images[0]} alt="" />
              </div>
              <div className="title-price">
                <div className="title">
                  <h1>{item.title}</h1>
                </div>
                <div className="price">
                  <h3>$ {item.price}</h3>
                </div>
              </div>
            </div>
            <div className="addfv-buy">
              <div className="add-fv">
                <button>
                  more
                </button>
              </div>
              <div className="button-buy">
                <button>buy</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
