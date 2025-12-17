import React from "react";
import "./Css/Popular.css";

// YOU will import images here
import burger1 from "./Images/burger1.jpg";
import burger2 from "./Images/burger2.jpg";
import burger3 from "./Images/burger3.jpg";
import burger4 from "./Images/burger4.jpg";

function Popular() {
  return (
    <section className="popular-section">
      <div className="container text-center">

        <span className="popular-sub">Quick pick</span>
        <h2 className="popular-title">Popular Goods</h2>

        {/* TABS */}
        <div className="popular-tabs">
          <button className="active">Fastfood</button>
          <button>Hot Pizza</button>
          <button>Asian Food</button>
          <button>Raw Meat</button>
        </div>

        {/* PRODUCTS */}
        <div className="row popular-products">
          {[
            { img: burger1, title: "Cheeseburger with Salad", price: "$19.00" },
            { img: burger2, title: "Royal Cheeseburger with Bacon", price: "$13.49" },
            { img: burger3, title: "Black Gamburger with Fishcake", price: "$24.99" },
            { img: burger4, title: "Classic Bacon Hamburger", price: "$11.99" },
          ].map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="popular-card">
                <img src={item.img} alt={item.title} />
                <h5>{item.title}</h5>
                <p className="price">{item.price}</p>
                <button>Add to cart</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Popular;
