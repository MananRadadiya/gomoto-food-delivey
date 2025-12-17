import React from "react";
import "./Css/Hero.css";

import bgImage from "./Images/app-bg.png";
import scooterImage from "./Images/slider-courier-mask.png";


import catFast from "./Images/burger icon.png";
import catPizza from "./Images/pizza icon.png";
import catAsian from "./Images/sushi icon.png";
import catMeat from "./Images/meat ico.png";

function Hero() {
  return (
    <section
      className="hero-section"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="row align-items-center">

          {/* LEFT TEXT */}
          <div className="col-lg-6 hero-text">
            <h1>
              Express <br />
              <span>Home Delivery</span>
            </h1>

            <p>
              Curabitur imperdiet varius lacus, id placerat purus
              vulputate non. Fusce in felis vel arcu maximus
              placerat eu ut arcu.
            </p>

            <button className="hero-btn">Read More</button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 hero-image">
            <img src={scooterImage} alt="Delivery Scooter" />
          </div>
        </div>

        {/* CATEGORY CARDS (FIRST SCREENSHOT) */}
        <div className="row hero-categories">
          {[
            { img: catFast, title: "Fastfood" },
            { img: catPizza, title: "Hot Pizza" },
            { img: catAsian, title: "Asian Food" },
            { img: catMeat, title: "Raw Meat" },
          ].map((cat, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="hero-category-card">
                <img src={cat.img} alt={cat.title} />
                <h5>{cat.title}</h5>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Hero;
