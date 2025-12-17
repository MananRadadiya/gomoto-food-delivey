// src/Footer.jsx
import React from "react";
import "./Css/Footer.css";

import leftImg from "./Images/footer-banner.jpg"; 
import logo from "./Images/logo.png";           

const Footer = () => {
  return (
    <footer className="gomoto-footer">

      {/* CALL TO ACTION */}
      <div className="footer-cta container">
        <div className="footer-cta-inner">

          {/* LEFT IMAGE */}
          <div className="footer-cta-image">
            <img src={leftImg} alt="Support" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="footer-cta-content">
            <div className="footer-cta-icon">
              📞
            </div>
            <div>
              <span>Call us to make order now</span>
              <h3>90-500-28-999</h3>
            </div>
          </div>

        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="footer-main">
        <div className="container text-center">

          <div className="footer-logo">
            <img src={logo} alt="GoMoto" />
          </div>

          <p className="footer-text">
            Etiam consequat sem ullamcorper, euismod metus sit amet,
            tristique justo. Vestibulum mattis, nisi ut faucibus commodo.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">
            <a href="#">🐦</a>
            <a href="#">📘</a>
            <a href="#">📸</a>
            <a href="#">▶️</a>
          </div>

        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="footer-bottom">
        <p>
          Like-themes © All Rights Reserved - 2020
          <span> Purchase</span>
        </p>
      </div>

    </footer>
  );
};

export default Footer;
