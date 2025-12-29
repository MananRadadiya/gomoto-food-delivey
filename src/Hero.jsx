import React from "react";
import { useNavigate } from "react-router-dom";
import "./Css/Hero.css";
// import "./Css/animations.css"; // Styles are now merged into Hero.css for simplicity

// Images
import bgImage from "./Images/app-bg.png"; // Ensure this is used or removed
import scooterImage from "./Images/slider-courier-mask.png";
import catFast from "./Images/burger icon.png";
import catPizza from "./Images/pizza icon.png";
import catAsian from "./Images/sushi icon.png";
import catMeat from "./Images/meat ico.png";

function Hero() {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/products');
  };

  const handleWatchDemo = () => {
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleCategoryClick = (category) => {
    // Navigate with state or query param so you can filter on the next page
    navigate(`/products?category=${category}`);
  };

  const categories = [
    { img: catFast, title: "Fastfood" },
    { img: catPizza, title: "Pizza" },
    { img: catAsian, title: "Asian" },
    { img: catMeat, title: "Meat" },
  ];

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>

      <div className="hero-container">
        
        {/* LEFT: TEXT CONTENT */}
        <div className="hero-content">
          <div className="hero-badge animate-slideUp">
            🚀 Fastest Delivery in Town
          </div>

          <h1 className="animate-slideUp" style={{ animationDelay: '0.1s' }}>
            Order Food <br />
            <span className="highlight">Get it Hot!</span>
          </h1>

          <p className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Fresh food delivered to your doorstep in 30 minutes or less. 
            Order from 500+ restaurants with exclusive discounts.
          </p>

          <div className="hero-cta animate-slideUp" style={{ animationDelay: '0.3s' }}>
            <button className="hero-btn hero-btn-primary" onClick={handleOrderNow}>
              <i className="ri-shopping-bag-line"></i> Order Now
            </button>
            <button className="hero-btn hero-btn-secondary" onClick={handleWatchDemo}>
              <i className="ri-play-circle-line"></i> Watch Demo
            </button>
          </div>

          <div className="hero-stats animate-slideUp" style={{ animationDelay: '0.4s' }}>
            <div className="stat">
              <h3>500+</h3>
              <p>Restaurants</p>
            </div>
            <div className="stat">
              <h3>30K+</h3>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h3>4.8★</h3>
              <p>Rating</p>
            </div>
          </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="hero-image-wrapper animate-slideRight" style={{ animationDelay: '0.3s' }}>
          <div className="floating-card">
            <img src={scooterImage} alt="Delivery Scooter" className="floating-image" />
          </div>
        </div>

      </div>

      {/* BOTTOM: CATEGORIES */}
      {/* Moved outside the grid to span full width below, or keep inside if preferred */}
      <div className="hero-categories-container">
        <div className="hero-categories">
          {categories.map((cat, idx) => (
            <button 
              key={idx}
              onClick={() => handleCategoryClick(cat.title)}
              className="category-card animate-scaleIn" 
              style={{ animationDelay: `${0.5 + (idx * 0.1)}s` }}
            >
              <img src={cat.img} alt={cat.title} />
              <span>{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Hero;