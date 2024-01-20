import { useState } from "react";
import "./mainn.css";



const Mainn = () => {


  const [Product , setProduct ] = useState(<img src="./src/pr/pr1.jpg" alt="" />)


  const updateimagee1 = ()=>{
    setProduct(<img src="./src/pr/pr1.jpg" alt="" />)

  }
  const updateimagee2 = ()=>{
    
    setProduct(<img src="./src/pr/pr2.jpg" alt="" />)

  }
  const updateimagee3 = ()=>{
    
    setProduct(<img src="./src/pr/pr4.jpg" alt="" />)

  }

  const [lewa7ed , setlewa7ed]= useState(1)

  const za22ide=()=>{
    setlewa7ed(lewa7ed + 1)
  }
  const na9iseee= ()=>{
    setlewa7ed(lewa7ed - 1)
  }



  return (
    <div className="product">
      <div className="info-product">
        <div className="title-product">
          <h1>Meryl Lounge Chair</h1>
        </div>
        <div className="price-starss">
          <div className="price-product">
            <h3>$14.99</h3>
          </div>
          <div className="product-stars">
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
        </div>
        <div className="product-descriptoin">
          <p>
            The gently curved lines accentuated by
            <br />
            sewn details are kind to your body and <br />
            pleasant to look at. Also,
            <br />
            there’s a tilt and height-adjusting that’s built to <br />
            outlast years of ups and downs.{" "}
          </p>
        </div>
        <div className="product-colorr">
          <input id="c-C1BDB3" type="button" />
          <input id="c-58737D" type="button" />
          <input id="c-545454" type="button" />
          <input id="c-CBA5A5" type="button" />
        </div>
        <div className="product-cont-buy">
          <div className="contt">
            <div className="na9is">
              <h3 onClick={na9iseee}>-</h3>
            </div>
            <div className="number">
              <h4>{lewa7ed}</h4>
            </div>
            <div className="za2id">
              <h3 onClick={za22ide}>+</h3>
            </div>
          </div>
          <div className="bottun-add-card">
            <button>Add to cart</button>
          </div>
        </div>
      </div>
      <div className="img-product">
        <div className="img-prens">
          {Product}
        </div>
        <div className="center-img">
          <div className="galery-product">
            <div className="img11" >
              <img src="./src/pr/pr1.jpg" alt=""onClick={updateimagee1} />
            </div>
            <div className="img22" >
              <img src="./src/pr/pr2.jpg" alt=""  onClick={updateimagee2}/>
            </div>
            <div className="img44">
              <img src="./src/pr/pr4.jpg" alt="" onClick={updateimagee3} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mainn;
