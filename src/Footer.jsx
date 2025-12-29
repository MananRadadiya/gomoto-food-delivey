// src/Footer.jsx
import React from "react";
import "./Css/Footer.css";

// Make sure these paths match your project structure
import leftImg from "./Images/footer-banner.jpg"; 
import logo from "./Images/logo_2x.png";           

const Footer = () => {
  return (
    <footer className="gomoto-footer">

      {/* =========================== 
          CALL TO ACTION (Floating Card)
          =========================== */}
      <div className="footer-cta container">
        <div className="footer-cta-inner">

          {/* LEFT IMAGE */}
          <div className="footer-cta-image">
            <img src={leftImg} alt="Call Center Support" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="footer-cta-content">
            <div className="footer-cta-icon">
              {/* You can replace this emoji with an SVG icon (like FontAwesome) later */}
              📞
            </div>
            
            {/* WRAPPER DIV ADDED FOR FLEX ALIGNMENT */}
            <div className="footer-cta-text">
              <span>Call us to make order now</span>
              <h3>90-500-28-999</h3>
            </div>
          </div>

        </div>
      </div>

      {/* =========================== 
          MAIN FOOTER 
          =========================== */}
      <div className="footer-main">
        <div className="container footer-content-wrapper">

          {/* LOGO */}
          <div className="footer-logo">
            <img src={logo} alt="GoMoto Logo" />
          </div>

          {/* TEXT */}
          <p className="footer-text">
            Etiam consequat sem ullamcorper, euismod metus sit amet,
            tristique justo. Vestibulum mattis, nisi ut faucibus commodo,
            risus ex volutpat.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Instagram">📸</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>

        </div>
      </div>

      {/* =========================== 
          BOTTOM BAR 
          =========================== */}
      <div className="footer-bottom">
        <div className="container">
          <p>
            Like-themes © All Rights Reserved - 2020
            <span> Purchase</span>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;