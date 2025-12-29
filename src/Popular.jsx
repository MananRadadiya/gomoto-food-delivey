import React, { useState, useEffect } from "react";
import "./Css/Popular.css";
import "./Css/animations.css";

// ⭐ IMPORT ALL IMAGES
import burger1 from "./Images/burger1.jpg";
import burger2 from "./Images/burger2.jpg";
import burger3 from "./Images/burger3.jpg";
import burger4 from "./Images/burger4.jpg";

import pizza1 from "./Images/pizza_01.jpg";
import pizza2 from "./Images/pizza_04.jpg";
import pizza3 from "./Images/pizza_05.jpg";
import pizza4 from "./Images/pizza_06.jpg";

import asian1 from "./Images/sushi_03.jpg";
import asian2 from "./Images/sushi_06.jpg";
import asian3 from "./Images/med_store_21.jpg";
import asian4 from "./Images/sushi_07.jpg";

import meat1 from "./Images/meat_01.jpg";
import meat2 from "./Images/meat_02.jpg";
import meat3 from "./Images/meat_03.jpg";
import meat4 from "./Images/meat_04.jpg";


function Popular() {

  // ⭐ Active Tab State
  const [activeTab, setActiveTab] = useState("fastfood");

  // ⭐ Animation Trigger
  useEffect(() => {
    const container = document.querySelector(".popular-products");

    container.classList.remove("animate");

    setTimeout(() => {
      container.classList.add("animate");
    }, 10);
  }, [activeTab]);


  // ⭐ Data for all categories
  const data = {
    fastfood: [
      { img: burger1, title: "Cheeseburger with Salad", price: "$19.00" },
      { img: burger2, title: "Royal Cheeseburger with Bacon", price: "$13.49" },
      { img: burger3, title: "Black Gamburger with Fishcake", price: "$24.99" },
      { img: burger4, title: "Classic Bacon Hamburger", price: "$11.99" },
    ],

    pizza: [
      { img: pizza1, title: "Shrimp & Olive Pizza", price: "$12.49" },
      { img: pizza2, title: "Seafood Pizza", price: "$7.49" },
      { img: pizza3, title: "Thin Cheese Pizza", price: "$16.99" },
      { img: pizza4, title: "Pizza with Mushrooms", price: "$18.99" },
    ],

    asian: [
      { img: asian1, title: "Veg Noodles", price: "$9.99" },
      { img: asian2, title: "Chicken Fried Rice", price: "$11.99" },
      { img: asian3, title: "Manchurian", price: "$8.49" },
      { img: asian4, title: "Chilli Chicken", price: "$12.99" },
    ],

    meat: [
      { img: meat1, title: "Premium Lamb Cuts", price: "$30.00" },
      { img: meat2, title: "Grilled Chicken Breast", price: "$14.50" },
      { img: meat3, title: "Turkey Slices", price: "$18.20" },
      { img: meat4, title: "Spiced Lamb Kebab", price: "$16.99" },
    ],
  };


  return (
    <section className="popular-section">
      <div className="container text-center">

        <span className="popular-sub animate-slideUp">Quick pick</span>
        <h2 className="popular-title animate-slideUp" style={{ animationDelay: '0.1s' }}>Popular Goods</h2>

        {/* ⭐ TABS */}
        <div className="popular-tabs">
          <button
            className={activeTab === "fastfood" ? "active" : ""}
            onClick={() => setActiveTab("fastfood")}
          >
            Fastfood
          </button>

          <button
            className={activeTab === "pizza" ? "active" : ""}
            onClick={() => setActiveTab("pizza")}
          >
            Hot Pizza
          </button>

          <button
            className={activeTab === "asian" ? "active" : ""}
            onClick={() => setActiveTab("asian")}
          >
            Asian Food
          </button>

          <button
            className={activeTab === "meat" ? "active" : ""}
            onClick={() => setActiveTab("meat")}
          >
            Meat & Seafood
          </button>
        </div>

        {/* ⭐ PRODUCT CARDS – animated */}
        <div className="row popular-products animate">
          {data[activeTab].map((item, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="popular-card animate-scaleIn" style={{ animationDelay: `${index * 0.1}s` }}>
                <img src={item.img} alt={item.title} />
                <h5>{item.title}</h5>
                <p className="price">{item.price}</p>
                <button className="animate-glow">Add to cart</button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Popular;
