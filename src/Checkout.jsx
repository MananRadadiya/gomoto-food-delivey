// src/Checkout.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Css/Checkout.css';
import './Css/animations.css';

function Checkout() {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (cartItems.length === 0 && !orderPlaced) {
    return (
      <div className="checkout-empty">
        <h2>Your cart is empty!</h2>
        <p>Add some items before checking out</p>
        <button onClick={() => navigate('/products')} className="back-btn">
          Back to Shop
        </button>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrderPlaced(true);
  };

  if (orderPlaced) {
    return (
      <div className="checkout-page">
        <div className="checkout-hero">
          <div className="overlay"></div>
          <h1>Order Confirmed</h1>
          <p>Thank you for your purchase!</p>
        </div>

        <div className="order-confirmation animate-slideUp">
          <div className="confirmation-icon">✓</div>
          <h2>Order Successfully Placed!</h2>
          
          <div className="confirmation-details">
            <p><strong>Order Number:</strong> #ORD{Math.floor(Math.random() * 100000)}</p>
            <p><strong>Customer:</strong> {formData.firstName} {formData.lastName}</p>
            <p><strong>Email:</strong> {formData.email}</p>
            <p><strong>Total Amount:</strong> ${(parseFloat(getTotalPrice()) * 1.1).toFixed(2)}</p>
            <p><strong>Estimated Delivery:</strong> 2-3 Business Days</p>
          </div>

          <div className="confirmation-message">
            <p>A confirmation email has been sent to <strong>{formData.email}</strong></p>
            <p>You can track your order status in your account.</p>
          </div>

          <div className="confirmation-actions">
            <button 
              onClick={() => {
                clearCart();
                navigate('/');
              }}
              className="home-btn animate-glow"
            >
              Back to Home
            </button>
            <button 
              onClick={() => navigate('/products')}
              className="shop-btn"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-hero">
        <div className="overlay"></div>
        <h1>Checkout</h1>
        <p>Home / Checkout</p>
      </div>

      <div className="checkout-container">
        <div className="checkout-form-section">
          <form onSubmit={handleSubmit} className="checkout-form animate-slideUp">
            <h2>Delivery Information</h2>

            <div className="form-group-row">
              <div className="form-group">
                <label>First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group-row">
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
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label>Address *</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label>City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>State *</label>
                <input
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Zip Code *</label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <h2 style={{ marginTop: '30px' }}>Payment Information</h2>

            <div className="form-group">
              <label>Card Number *</label>
              <input
                type="text"
                name="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={formData.cardNumber}
                onChange={handleChange}
                maxLength="19"
                required
              />
            </div>

            <div className="form-group-row">
              <div className="form-group">
                <label>Expiry Date *</label>
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  value={formData.expiry}
                  onChange={handleChange}
                  maxLength="5"
                  required
                />
              </div>
              <div className="form-group">
                <label>CVV *</label>
                <input
                  type="text"
                  name="cvv"
                  placeholder="123"
                  value={formData.cvv}
                  onChange={handleChange}
                  maxLength="3"
                  required
                />
              </div>
            </div>

            <button type="submit" className="place-order-btn animate-glow">
              Place Order
            </button>
          </form>
        </div>

        <div className="checkout-summary-section animate-slideLeft">
          <div className="order-summary">
            <h2>Order Summary</h2>

            <div className="summary-items">
              {cartItems.map((item) => (
                <div key={item.id} className="summary-item">
                  <div className="summary-item-info">
                    <h4>{item.name}</h4>
                    <p>Qty: {item.quantity}</p>
                  </div>
                  <div className="summary-item-price">
                    ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                  </div>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="total-row">
                <span>Subtotal:</span>
                <span>${getTotalPrice()}</span>
              </div>
              <div className="total-row">
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
              <div className="total-row">
                <span>Tax (10%):</span>
                <span>${(parseFloat(getTotalPrice()) * 0.1).toFixed(2)}</span>
              </div>
              <div className="total-row final">
                <span>Total:</span>
                <span>${(parseFloat(getTotalPrice()) * 1.1).toFixed(2)}</span>
              </div>
            </div>

            <div className="security-badge">
              <i className="ri-shield-check-line"></i>
              Secure Checkout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
