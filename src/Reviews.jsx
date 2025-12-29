import React, { useState } from "react";
import "./Css/Reviews.css";
import "./Css/animations.css";

function Reviews() {
  const [reviews] = useState([
    {
      id: 1,
      author: "John Smith",
      rating: 5,
      date: "2024-12-20",
      text: "Amazing food quality and fast delivery! Highly recommended.",
      avatar: "👨‍💼",
      verified: true
    },
    {
      id: 2,
      author: "Sarah Johnson",
      rating: 5,
      date: "2024-12-18",
      text: "Best pizza I've ever had! The customer service is excellent.",
      avatar: "👩‍🦰",
      verified: true
    },
    {
      id: 3,
      author: "Mike Chen",
      rating: 4,
      date: "2024-12-15",
      text: "Great variety of dishes. Food is fresh and delicious.",
      avatar: "👨‍💻",
      verified: true
    },
    {
      id: 4,
      author: "Emma Davis",
      rating: 5,
      date: "2024-12-12",
      text: "Exceptional dining experience. Highly professional staff!",
      avatar: "👩‍🎤",
      verified: true
    },
    {
      id: 5,
      author: "James Wilson",
      rating: 5,
      date: "2024-12-10",
      text: "Perfect burgers and sushi. Will order again very soon.",
      avatar: "👨‍🍳",
      verified: true
    },
    {
      id: 6,
      author: "Lisa Anderson",
      rating: 4,
      date: "2024-12-08",
      text: "Good food and reasonable prices. Worth the visit!",
      avatar: "👩‍💼",
      verified: true
    },
  ]);

  const renderStars = (rating) => {
    return (
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={i < rating ? "filled" : "empty"}>
            ⭐
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="reviews-page">
      {/* Hero Section */}
      <div className="reviews-hero animate-fadeIn">
        <div className="reviews-overlay"></div>
        <h1 className="animate-slideUp">Customer Reviews</h1>
        <p className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
          What our customers are saying
        </p>
      </div>

      {/* Overall Rating */}
      <section className="overall-rating animate-slideUp">
        <div className="container">
          <div className="rating-container">
            <div className="big-rating">
              <h2>4.8</h2>
              <p>out of 5</p>
              <div className="stars-big">⭐⭐⭐⭐⭐</div>
              <p className="total-reviews">Based on 1,247 reviews</p>
            </div>

            <div className="rating-breakdown">
              <div className="rating-bar">
                <span>⭐⭐⭐⭐⭐</span>
                <div className="bar"><div style={{width: '75%'}}></div></div>
                <span>750</span>
              </div>
              <div className="rating-bar">
                <span>⭐⭐⭐⭐</span>
                <div className="bar"><div style={{width: '15%'}}></div></div>
                <span>150</span>
              </div>
              <div className="rating-bar">
                <span>⭐⭐⭐</span>
                <div className="bar"><div style={{width: '8%'}}></div></div>
                <span>80</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-grid">
            {reviews.map((review, idx) => (
              <div 
                className="review-card animate-slideUp"
                key={review.id}
                style={{ animationDelay: `${idx * 0.08}s` }}
              >
                <div className="review-header">
                  <span className="avatar">{review.avatar}</span>
                  <div className="reviewer-info">
                    <h4>{review.author}</h4>
                    {review.verified && <span className="verified">✓ Verified</span>}
                  </div>
                  <span className="date">{review.date}</span>
                </div>

                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>

                <p className="review-text">{review.text}</p>

                <div className="review-actions">
                  <button className="btn-helpful">👍 Helpful</button>
                  <button className="btn-report">⚠️ Report</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="leave-review-cta animate-slideUp">
        <div className="container">
          <h2>Have you eaten with us?</h2>
          <p>Share your experience and help other customers</p>
          <button className="btn-review">Leave a Review</button>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
