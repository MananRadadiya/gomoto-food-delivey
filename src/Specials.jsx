import React, { useState } from "react";
import { useCart } from "./CartContext";
import "./Css/Specials.css";
import "./Css/animations.css";

import burger1 from "./Images/burger1.jpg";
import pizza from "./Images/pizza_01.jpg";
import sushi from "./Images/sushihiteria.jpg";
import meat from "./Images/meat_01.jpg";

function Specials() {
  const { addToCart } = useCart();
  const [notification, setNotification] = useState('');

  const specialOffers = [
    {
      id: 1,
      name: "Mega Burger Combo",
      originalPrice: "$25.00",
      salePrice: "$15.99",
      discount: "36%",
      img: burger1,
      description: "2 Burgers + Fries + Drink"
    },
    {
      id: 2,
      name: "Pizza Party Pack",
      originalPrice: "$45.00",
      salePrice: "$29.99",
      discount: "33%",
      img: pizza,
      description: "2 Large Pizzas + Sides"
    },
    {
      id: 3,
      name: "Sushi Premium Set",
      originalPrice: "$40.00",
      salePrice: "$24.99",
      discount: "37%",
      img: sushi,
      description: "30 Pieces Assorted Sushi"
    },
    {
      id: 4,
      name: "BBQ Meat Platter",
      originalPrice: "$50.00",
      salePrice: "$32.99",
      discount: "34%",
      img: meat,
      description: "Premium Grilled Meat Selection"
    },
  ];

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.salePrice,
    });
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  return (
    <div className="specials-page">
      {notification && (
        <div className="notification animate-slideDown">
          ✓ {notification}
        </div>
      )}

      {/* Hero Banner */}
      <div className="specials-hero animate-fadeIn">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="animate-slideUp">Special Offers</h1>
          <p className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
            Limited time deals on your favorite meals
          </p>
        </div>
      </div>

      {/* Specials Grid */}
      <section className="specials-section">
        <div className="container">
          <h2 className="section-title animate-slideUp">🔥 Today's Hot Deals</h2>
          
          <div className="specials-grid">
            {specialOffers.map((offer, idx) => (
              <div 
                className="special-card animate-scaleIn"
                key={offer.id}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="special-image-container">
                  <img src={offer.img} alt={offer.name} />
                  <div className="discount-badge animate-pulse">
                    {offer.discount} OFF
                  </div>
                  <div className="special-overlay">
                    <button 
                      className="special-btn animate-glow"
                      onClick={() => handleAddToCart(offer)}
                    >
                      Order Now
                    </button>
                  </div>
                </div>

                <div className="special-content">
                  <h3>{offer.name}</h3>
                  <p className="description">{offer.description}</p>
                  
                  <div className="price-section">
                    <span className="original-price">{offer.originalPrice}</span>
                    <span className="sale-price">{offer.salePrice}</span>
                  </div>

                  <button 
                    className="add-btn"
                    onClick={() => handleAddToCart(offer)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Sale Section */}
      <section className="flash-sale animate-slideUp">
        <div className="container">
          <div className="flash-content">
            <div className="flash-text">
              <h2>⚡ Flash Sale Active Now!</h2>
              <p>Get up to 50% OFF on selected items</p>
              <div className="timer">
                <div className="time-unit">
                  <span>2</span>
                  <p>Hours</p>
                </div>
                <div className="time-unit">
                  <span>15</span>
                  <p>Minutes</p>
                </div>
                <div className="time-unit">
                  <span>30</span>
                  <p>Seconds</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Specials;
