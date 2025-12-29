import React, { useState } from "react";
import "./Css/Delivery.css";
import "./Css/animations.css";

function Delivery() {
  const [orderInfo, setOrderInfo] = useState({
    address: "",
    phone: "",
    paymentMethod: "card"
  });

  const steps = [
    { num: 1, title: "Place Order", icon: "🛒" },
    { num: 2, title: "Confirm & Pay", icon: "💳" },
    { num: 3, title: "Prepare Food", icon: "👨‍🍳" },
    { num: 4, title: "Out for Delivery", icon: "🚗" },
    { num: 5, title: "Delivered", icon: "✅" },
  ];

  const benefits = [
    { icon: "⚡", title: "Fast Delivery", desc: "30-45 minutes guaranteed" },
    { icon: "🆓", title: "Free Delivery", desc: "Orders above $30" },
    { icon: "🔥", title: "Hot & Fresh", desc: "Always at perfect temperature" },
    { icon: "🌙", title: "24/7 Service", desc: "Order anytime you want" },
    { icon: "💰", title: "Best Prices", desc: "Exclusive delivery deals" },
    { icon: "🛡️", title: "Safe & Secure", desc: "Protected transactions" },
  ];

  return (
    <div className="delivery-page">
      {/* Hero Section */}
      <div className="delivery-hero animate-fadeIn">
        <div className="delivery-overlay"></div>
        <h1 className="animate-slideUp">Fast Food Delivery</h1>
        <p className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
          Hot meals delivered to your door in 30 minutes
        </p>
      </div>

      {/* Delivery Process */}
      <section className="delivery-process">
        <div className="container">
          <h2 className="section-title animate-slideUp">How it Works</h2>
          
          <div className="steps-container">
            {steps.map((step, idx) => (
              <div 
                className="step-item animate-slideUp"
                key={step.num}
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="step-number">
                  <span>{step.num}</span>
                </div>
                <div className="step-icon">{step.icon}</div>
                <p>{step.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="delivery-benefits animate-slideUp">
        <div className="container">
          <h2 className="section-title">Why Order with Us?</h2>
          
          <div className="benefits-grid">
            {benefits.map((benefit, idx) => (
              <div 
                className="benefit-card animate-scaleIn"
                key={idx}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="benefit-icon">{benefit.icon}</div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="order-form-section">
        <div className="container">
          <h2 className="section-title animate-slideUp">Start Your Order</h2>
          
          <div className="form-container animate-slideUp">
            <div className="form-group">
              <label>Delivery Address</label>
              <input 
                type="text" 
                placeholder="Enter your address"
                value={orderInfo.address}
                onChange={(e) => setOrderInfo({...orderInfo, address: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Contact Number</label>
              <input 
                type="tel" 
                placeholder="Enter your phone number"
                value={orderInfo.phone}
                onChange={(e) => setOrderInfo({...orderInfo, phone: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Payment Method</label>
              <select 
                value={orderInfo.paymentMethod}
                onChange={(e) => setOrderInfo({...orderInfo, paymentMethod: e.target.value})}
              >
                <option value="card">Credit/Debit Card</option>
                <option value="cash">Cash on Delivery</option>
                <option value="wallet">Digital Wallet</option>
              </select>
            </div>

            <button className="btn-start-order animate-glow">
              Browse Menu & Order Now →
            </button>
          </div>
        </div>
      </section>

      {/* Delivery Zone Map */}
      <section className="delivery-zone animate-slideUp">
        <div className="container">
          <h2 className="section-title">Delivery Coverage</h2>
          <div className="zone-image">
            <div className="map-placeholder">
              📍 We deliver to all areas within 5km radius
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Delivery;
