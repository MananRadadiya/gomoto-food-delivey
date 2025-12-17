// src/Testimonials.jsx
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import "./Css/Testimonials.css";

// 👉 Import your images here
import user1 from "./Images/client1.jpg";
import user2 from "./Images/client2.jpg";
import user3 from "./Images/client3.jpg";
import user4 from "./Images/client4.jpg";

const reviews = [
  {
    text: "Amazing service and super fast delivery. The food arrived hot and fresh. Highly recommended!",
    name: "Patrick Stone",
    role: "Freelancer",
    image: user1,
  },
  {
    text: "GoMoto makes food delivery so easy. Great variety of restaurants and excellent support.",
    name: "Sarah Johnson",
    role: "Entrepreneur",
    image: user2,
  },
  {
    text: "I love how smooth the ordering process is. Definitely my go-to food app now.",
    name: "Michael Lee",
    role: "Designer",
    image: user3,
  },
  {
    text: "Fast, reliable, and affordable. The UI is clean and easy to use. Great job!",
    name: "Emily Brown",
    role: "Marketing Manager",
    image: user4,
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const prevSlide = () => {
    setIndex(index === 0 ? reviews.length - 1 : index - 1);
  };

  const nextSlide = () => {
    setIndex(index === reviews.length - 1 ? 0 : index + 1);
  };

  return (
    <section className="testimonials-section">
      <Container>
        <span className="testimonials-subtitle">Testimonials</span>
        <h2 className="testimonials-title">Why Our Clients Choose Us</h2>

        <div className="quote-icon">“</div>

        <p className="testimonials-text">
          {reviews[index].text}
        </p>

        <div className="testimonial-user">
          <img src={reviews[index].image} alt={reviews[index].name} />
          <h5>{reviews[index].name}</h5>
          <span>{reviews[index].role}</span>
        </div>

        <div className="testimonial-controls">
          <button onClick={prevSlide} aria-label="Previous">←</button>
          <button onClick={nextSlide} aria-label="Next">→</button>
        </div>
      </Container>
    </section>
  );
}

export default Testimonials;
