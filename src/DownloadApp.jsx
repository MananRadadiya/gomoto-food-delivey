// src/DownloadApp.jsx
import React from "react";
import "./Css/DownloadApp.css";
import "./Css/animations.css";

import phoneImg from "./Images/phone map.png";      
import appStore from "./Images/app-1.png";       
import googlePlay from "./Images/app-2.png";   

const DownloadApp = () => {
  return (
    <section className="download-section">
      <div className="container">
        <div className="row align-items-center">

          {/* LEFT CONTENT */}
          <div className="col-lg-6 col-md-12">
            <span className="download-subtitle animate-slideUp">Mobile App</span>

            <h2 className="download-title animate-slideUp" style={{ animationDelay: '0.1s' }}>
              Get More With <span>Our Application</span>
            </h2>

            <p className="download-text animate-slideUp" style={{ animationDelay: '0.2s' }}>
              Nunc pellentesque orci sed tempor pharetra. Morbi molestie
              purus in interdum facilisis. Mauris commodo mi a egestas
              sollicitudin.
            </p>

            <ul className="download-features">
              <li className="animate-slideLeft" style={{ animationDelay: '0.3s' }}>
                <span>01</span>
                Follow Delivery Status
              </li>
              <li className="animate-slideLeft" style={{ animationDelay: '0.4s' }}>
                <span>02</span>
                Order From Any Location
              </li>
              <li className="animate-slideLeft" style={{ animationDelay: '0.5s' }}>
                <span>03</span>
                Get Important Notices
              </li>
            </ul>

            <div className="download-buttons animate-slideUp" style={{ animationDelay: '0.6s' }}>
              <img src={appStore} alt="App Store" />
              <img src={googlePlay} alt="Google Play" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 text-center">
            <div className="phone-wrapper animate-slideRight">
              <img src={phoneImg} alt="Mobile App" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
