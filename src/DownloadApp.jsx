// src/DownloadApp.jsx
import React from "react";
import "./Css/DownloadApp.css";

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
            <span className="download-subtitle">Mobile App</span>

            <h2 className="download-title">
              Get More With <span>Our Application</span>
            </h2>

            <p className="download-text">
              Nunc pellentesque orci sed tempor pharetra. Morbi molestie
              purus in interdum facilisis. Mauris commodo mi a egestas
              sollicitudin.
            </p>

            <ul className="download-features">
              <li>
                <span>01</span>
                Follow Delivery Status
              </li>
              <li>
                <span>02</span>
                Order From Any Location
              </li>
              <li>
                <span>03</span>
                Get Important Notices
              </li>
            </ul>

            <div className="download-buttons">
              <img src={appStore} alt="App Store" />
              <img src={googlePlay} alt="Google Play" />
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="col-lg-6 col-md-12 text-center">
            <div className="phone-wrapper">
              <img src={phoneImg} alt="Mobile App" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
