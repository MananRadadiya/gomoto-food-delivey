// src/Account.jsx
import React, { useState } from 'react';
import './Css/Account.css';
import './Css/animations.css';

function Account() {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 (555) 123-4567',
    address: '123 Main Street',
    city: 'New York',
    state: 'NY',
    zipCode: '10001'
  });

  const [orderHistory] = useState([
    {
      id: 1,
      orderNumber: 'ORD001',
      date: '2025-12-20',
      total: '$45.99',
      status: 'Delivered',
      items: 3
    },
    {
      id: 2,
      orderNumber: 'ORD002',
      date: '2025-12-18',
      total: '$32.50',
      status: 'Delivered',
      items: 2
    },
    {
      id: 3,
      orderNumber: 'ORD003',
      date: '2025-12-15',
      total: '$67.25',
      status: 'Delivered',
      items: 5
    }
  ]);

  return (
    <div className="account-page">
      <div className="account-hero">
        <div className="overlay"></div>
        <h1>My Account</h1>
        <p>Home / Account</p>
      </div>

      <div className="account-container">
        <div className="account-tabs animate-slideUp">
          <button
            className={`tab-btn ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            Profile Information
          </button>
          <button
            className={`tab-btn ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            Order History
          </button>
          <button
            className={`tab-btn ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            Settings
          </button>
        </div>

        <div className="account-content">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="tab-content animate-slideUp">
              <h2>Profile Information</h2>
              <div className="profile-info">
                <div className="info-group">
                  <label>Full Name</label>
                  <p>{profileData.name}</p>
                </div>
                <div className="info-group">
                  <label>Email</label>
                  <p>{profileData.email}</p>
                </div>
                <div className="info-group">
                  <label>Phone</label>
                  <p>{profileData.phone}</p>
                </div>
                <div className="info-group">
                  <label>Address</label>
                  <p>{profileData.address}</p>
                </div>
                <div className="info-group">
                  <label>City</label>
                  <p>{profileData.city}</p>
                </div>
                <div className="info-group">
                  <label>State</label>
                  <p>{profileData.state}</p>
                </div>
                <div className="info-group">
                  <label>Zip Code</label>
                  <p>{profileData.zipCode}</p>
                </div>
              </div>
              <button className="edit-btn animate-glow">Edit Profile</button>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div className="tab-content animate-slideUp">
              <h2>Order History</h2>
              <div className="orders-list">
                {orderHistory.map((order, index) => (
                  <div 
                    key={order.id} 
                    className="order-card animate-slideUp"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="order-header">
                      <div>
                        <h4>{order.orderNumber}</h4>
                        <p>{order.date}</p>
                      </div>
                      <div className={`order-status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </div>
                    </div>
                    <div className="order-details">
                      <span>{order.items} items</span>
                      <span>{order.total}</span>
                    </div>
                    <button className="view-btn">View Details</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="tab-content animate-slideUp">
              <h2>Account Settings</h2>
              <div className="settings-list">
                <div className="setting-item">
                  <div>
                    <h4>Email Notifications</h4>
                    <p>Receive updates about your orders</p>
                  </div>
                  <input type="checkbox" defaultChecked />
                </div>
                <div className="setting-item">
                  <div>
                    <h4>SMS Notifications</h4>
                    <p>Get SMS updates about deliveries</p>
                  </div>
                  <input type="checkbox" />
                </div>
                <div className="setting-item">
                  <div>
                    <h4>Newsletter</h4>
                    <p>Subscribe to our newsletter for offers</p>
                  </div>
                  <input type="checkbox" defaultChecked />
                </div>
              </div>
              <button className="save-btn animate-glow">Save Settings</button>
              <button className="logout-btn">Logout</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Account;
