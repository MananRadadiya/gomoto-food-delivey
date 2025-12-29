// src/Contact.jsx
import React, { useState } from 'react';
import './Css/Contact.css';
import './Css/animations.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="overlay"></div>
        <h1>Contact Us</h1>
        <p>Home / Contact</p>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info-section animate-slideLeft">
          <h2>Get In Touch</h2>
          
          <div className="info-card">
            <div className="info-icon">📍</div>
            <h3>Address</h3>
            <p>123 Main Street<br/>New York, NY 10001<br/>USA</p>
          </div>

          <div className="info-card">
            <div className="info-icon">☎️</div>
            <h3>Phone</h3>
            <p>+1 (555) 123-4567<br/>+1 (555) 987-6543</p>
          </div>

          <div className="info-card">
            <div className="info-icon">✉️</div>
            <h3>Email</h3>
            <p>info@gomoto.com<br/>support@gomoto.com</p>
          </div>

          <div className="info-card">
            <div className="info-icon">🕐</div>
            <h3>Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM<br/>Saturday - Sunday: 10:00 AM - 5:00 PM</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-section animate-slideRight">
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Send us a Message</h2>

            <div className="form-group">
              <label>Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn animate-glow">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section animate-slideUp">
        <h2>Find Us on Map</h2>
        <div className="map-placeholder">
          <p>📍 Interactive map would be displayed here</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
