import React from "react";
import "./Css/Locations.css";

// Ensure these paths match your actual project structure
import cafe from "./Images/happy grill cafe.jpg";
import monaco from "./Images/rest monaco img.jpg";
import burgerHouse from "./Images/burger house img.jpg";

function Locations() {
  const locations = [
    {
      id: 1,
      name: "Downtown Branch",
      address: "123 Main Street, City Center",
      phone: "+1 (555) 123-4567",
      hours: "Mon-Sun: 10AM - 11PM",
      image: cafe,
      rating: 4.8,
      reviews: 324
    },
    {
      id: 2,
      name: "Monaco Plaza",
      address: "456 Park Avenue, Monaco Center",
      phone: "+1 (555) 234-5678",
      hours: "Mon-Sun: 10AM - 10PM",
      image: monaco,
      rating: 4.6,
      reviews: 287
    },
    {
      id: 3,
      name: "Burger House",
      address: "789 Oak Street, Riverside",
      phone: "+1 (555) 345-6789",
      hours: "Mon-Sun: 11AM - 11PM",
      image: burgerHouse,
      rating: 4.9,
      reviews: 451
    },
  ];

  return (
    <div className="locations-page">
      {/* Hero Section */}
      <div className="locations-hero">
        {/* The overlay is handled by CSS background-image now */}
        <div className="locations-hero-content animate-fadeIn">
          <h1>Our Locations</h1>
          <p>Find us near you</p>
        </div>
      </div>

      {/* Locations Grid */}
      <section className="locations-section">
        <div className="container">
          <div className="locations-grid">
            {locations.map((location, idx) => (
              <div 
                className="location-card"
                key={location.id}
                // Inline style for staggered animation delay
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                <div className="location-image">
                  <img src={location.image} alt={location.name} loading="lazy" />
                  <div className="rating-badge">
                    <span className="stars">⭐ {location.rating}</span>
                    <p>{location.reviews} reviews</p>
                  </div>
                </div>

                <div className="location-content">
                  <h3>{location.name}</h3>
                  
                  <div className="location-info">
                    <p className="address">
                      📍 {location.address}
                    </p>
                    <p className="phone">
                      📞 {location.phone}
                    </p>
                    <p className="hours">
                      🕐 {location.hours}
                    </p>
                  </div>

                  <button className="btn-visit">
                    Get Directions
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="locations-cta">
        <div className="container">
          <h2>Visit Us Today!</h2>
          <p>Experience our delicious food at any of our convenient locations</p>
          <button className="btn-primary">Book a Table</button>
        </div>
      </section>
    </div>
  );
}

export default Locations;