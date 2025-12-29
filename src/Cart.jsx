// src/Cart.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import './Css/Cart.css';
import './Css/animations.css';

function Cart() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="cart-page">
        <div className="cart-hero">
          <div className="overlay"></div>
          <h1>Shopping Cart</h1>
          <p>Home / Cart</p>
        </div>

        <div className="cart-empty animate-slideUp">
          <div className="empty-icon">🛒</div>
          <h2>Your Cart is Empty</h2>
          <p>Start shopping to add items to your cart</p>
          <button 
            className="back-to-shop-btn animate-glow"
            onClick={() => navigate('/products')}
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="cart-hero">
        <div className="overlay"></div>
        <h1>Shopping Cart</h1>
        <p>Home / Cart</p>
      </div>

      <div className="cart-container">
        <div className="cart-items-section">
          <h2 className="section-title animate-slideUp">Your Items ({cartItems.length})</h2>

          <div className="cart-items">
            {cartItems.map((item, index) => (
              <div 
                key={item.id} 
                className="cart-item animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="item-image">
                  <div className="placeholder-image">
                    {item.name.charAt(0)}
                  </div>
                </div>

                <div className="item-details">
                  <h3>{item.name}</h3>
                  <p className="item-price">{item.price}</p>
                </div>

                <div className="item-quantity">
                  <button 
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  >
                    −
                  </button>
                  <input 
                    type="number" 
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) || 1)}
                    min="1"
                  />
                  <button 
                    className="qty-btn"
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>

                <div className="item-total">
                  ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                </div>

                <button 
                  className="remove-btn animate-glow"
                  onClick={() => removeFromCart(item.id)}
                >
                  <i className="ri-close-line"></i>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="cart-summary-section animate-slideLeft">
          <div className="cart-summary">
            <h2 className="summary-title">Order Summary</h2>

            <div className="summary-row">
              <span>Subtotal:</span>
              <span>${getTotalPrice()}</span>
            </div>

            <div className="summary-row">
              <span>Shipping:</span>
              <span className="shipping-cost">$0.00</span>
            </div>

            <div className="summary-row">
              <span>Tax (10%):</span>
              <span>${(parseFloat(getTotalPrice()) * 0.1).toFixed(2)}</span>
            </div>

            <div className="summary-row divider">
              <span>Total:</span>
              <span className="total-amount">
                ${(parseFloat(getTotalPrice()) * 1.1).toFixed(2)}
              </span>
            </div>

            <button 
              className="checkout-btn animate-glow"
              onClick={() => navigate('/checkout')}
            >
              Proceed to Checkout
            </button>

            <button 
              className="continue-shopping-btn"
              onClick={() => navigate('/products')}
            >
              Continue Shopping
            </button>

            <button 
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>

            <div className="promo-code">
              <input type="text" placeholder="Promo Code" />
              <button>Apply</button>
            </div>
          </div>

          <div className="shipping-info">
            <h3>✓ Free Shipping</h3>
            <p>On orders over $100</p>
          </div>

          <div className="shipping-info">
            <h3>✓ Fast Delivery</h3>
            <p>Within 24-48 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
