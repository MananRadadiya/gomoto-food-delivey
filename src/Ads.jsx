// src/Ads.jsx
import React, { useState, useEffect } from 'react';
import './Css/Ads.css';

function Ads({ placement = 'horizontal' }) {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const ads = [
    {
      id: 1,
      title: 'Special Offer!',
      subtitle: 'Get 30% OFF on All Burgers',
      color: '#FF6B35',
      icon: '🍔'
    },
    {
      id: 2,
      title: 'Free Delivery!',
      subtitle: 'On orders above $50',
      color: '#F7931E',
      icon: '🚗'
    },
    {
      id: 3,
      title: 'Members Only',
      subtitle: 'Join Now & Save 20%',
      color: '#C1272D',
      icon: '👑'
    },
    {
      id: 4,
      title: 'Happy Hour!',
      subtitle: '2 for 1 on Selected Items',
      color: '#004B87',
      icon: '🎉'
    },
    {
      id: 5,
      title: 'New Menu!',
      subtitle: 'Try Our Latest Creations',
      color: '#6B2D5C',
      icon: '✨'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prev) => (prev + 1) % ads.length);
    }, 5000); // Change ad every 5 seconds

    return () => clearInterval(interval);
  }, [ads.length]);

  const handleDotClick = (index) => {
    setCurrentAdIndex(index);
  };

  const currentAd = ads[currentAdIndex];

  if (placement === 'horizontal') {
    return (
      <div className="ads-container horizontal animate-slideUp">
        <div className="ad-banner" style={{ backgroundColor: currentAd.color }}>
          <div className="ad-icon animate-bounce">{currentAd.icon}</div>
          <div className="ad-content">
            <h3 className="ad-title">{currentAd.title}</h3>
            <p className="ad-subtitle">{currentAd.subtitle}</p>
          </div>
          <button className="ad-cta animate-glow">Shop Now</button>
        </div>

        <div className="ad-dots">
          {ads.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentAdIndex ? 'active' : ''}`}
              onClick={() => handleDotClick(index)}
            ></span>
          ))}
        </div>
      </div>
    );
  }

  if (placement === 'sidebar') {
    return (
      <div className="ads-container sidebar">
        {ads.slice(0, 2).map((ad) => (
          <div key={ad.id} className="sidebar-ad animate-scaleIn">
            <div className="sidebar-ad-header" style={{ backgroundColor: ad.color }}>
              <span className="sidebar-ad-icon">{ad.icon}</span>
            </div>
            <div className="sidebar-ad-content">
              <h4>{ad.title}</h4>
              <p>{ad.subtitle}</p>
              <button className="sidebar-ad-btn">Learn More</button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return null;
}

export default Ads;
