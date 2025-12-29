// src/SecondSection.jsx
import React from "react";
import "./Css/SecondSection.css";
import "./Css/animations.css";
import leftImg from "./Images/sit-photo.jpg";

function SecondSection() {
  return (
    <section className="second-section">
      <div className="container-fluid p-0">
        <div className="row g-0 align-items-stretch">

          {/* LEFT IMAGE */}
          <div className="col-lg-6 second-image">
            <img src={leftImg} alt="Service" className="animate-slideLeft" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="col-lg-6 second-content">
            <div className="content-inner">
              <h2 className="animate-slideUp">
                Sit at Home <br />
                <span>We Will Take Care</span>
              </h2>

              <p className="animate-slideUp" style={{ animationDelay: '0.2s' }}>
                Proin ornare posuere quam ut euismod. Nam eu nunc vitae orci
                ultrices imperdiet ut id ligula. Sed interdum eros eget
                sagittis rutrum.
              </p>

              {/* FEATURES */}
              <div className="features">
                <div className="feature-item animate-scaleIn" style={{ animationDelay: '0.3s' }}>
                  <i className="bi bi-clock"></i>
                  <h6>Fast Delivery<br />in 1 Hour</h6>
                </div>

                <div className="feature-item animate-scaleIn" style={{ animationDelay: '0.4s' }}>
                  <i className="bi bi-phone"></i>
                  <h6>Amazing<br />Mobile App</h6>
                </div>

                <div className="feature-item animate-scaleIn" style={{ animationDelay: '0.5s' }}>
                  <i className="bi bi-geo-alt"></i>
                  <h6>Wide<br />Coverage Map</h6>
                </div>

                <div className="feature-item animate-scaleIn" style={{ animationDelay: '0.6s' }}>
                  <i className="bi bi-person"></i>
                  <h6>More Than<br />150 Couriers</h6>
                </div>
              </div>

              <button className="second-btn animate-glow">Read More</button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default SecondSection;
