// src/AllProducts.jsx
import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Ads from "./Ads";
import "./Css/ALLProducts.css";
import "./Css/animations.css";

// Import images
import burger1 from "./Images/burger1.jpg";
import burger2 from "./Images/burger2.jpg";
import burger3 from "./Images/burger3.jpg";
import burger4 from "./Images/burger4.jpg";
import pizza1 from "./Images/pizza_01.jpg";
import pizza2 from "./Images/pizza_04.jpg";
import pizza3 from "./Images/pizza_05.jpg";
import pizza4 from "./Images/pizza_06.jpg";
import sushi1 from "./Images/sushi_03.jpg";
import sushi2 from "./Images/sushi_06.jpg";
import sushi3 from "./Images/sushi_07.jpg";
import sushihit from "./Images/sushihiteria.jpg";
import meat1 from "./Images/meat_01.jpg";
import meat2 from "./Images/meat_02.jpg";
import meat3 from "./Images/meat_03.jpg";
import meat4 from "./Images/meat_04.jpg";

function AllProducts() {
  const { addToCart } = useCart();

  const [notification, setNotification] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default');
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState(500);
  const [showSidebar, setShowSidebar] = useState(false);

  const itemsPerPage = 9;

  // PRODUCT DATA
  const products = [
    { id: 1, name: "Chicken Burger", price: 16.00, img: burger1, category: "burger" },
    { id: 2, name: "Classic Bacon Hamburger", price: 11.99, img: burger2, category: "burger" },
    { id: 3, name: "Black Gamburger with Fishcake", price: 24.99, img: burger3, category: "burger" },
    { id: 4, name: "Royal Cheeseburger", price: 13.49, img: burger4, category: "burger" },
    { id: 5, name: "Spicy Mexican Burger", price: 15.50, img: burger1, category: "burger" },
    { id: 6, name: "BBQ Pulled Pork", price: 14.99, img: burger2, category: "burger" },

    { id: 7, name: "Margarita Pizza", price: 12.99, img: pizza1, category: "pizza" },
    { id: 8, name: "Pepperoni Supreme", price: 18.99, img: pizza2, category: "pizza" },
    { id: 9, name: "Vegetarian Pizza", price: 13.50, img: pizza3, category: "pizza" },
    { id: 10, name: "Buffalo Chicken Pizza", price: 16.50, img: pizza4, category: "pizza" },

    { id: 11, name: "Vegetable Sushi Roll", price: 9.99, img: sushi1, category: "asian" },
    { id: 12, name: "Salmon Sushi Platter", price: 16.50, img: sushi2, category: "asian" },
    { id: 13, name: "Spicy Tuna Roll", price: 12.99, img: sushi3, category: "asian" },
    { id: 14, name: "Sushi Combo Set", price: 22.99, img: sushihit, category: "asian" },

    { id: 15, name: "Premium Lamb Cuts", price: 30.00, img: meat1, category: "meat" },
    { id: 16, name: "Grilled Chicken Breast", price: 14.50, img: meat2, category: "meat" },
    { id: 17, name: "Turkey Slices Premium", price: 18.20, img: meat3, category: "meat" },
    { id: 18, name: "Spiced Lamb Kebab", price: 16.99, img: meat4, category: "meat" },
  ];

  // FILTERING
  let filtered = products.filter((p) => {
    const matchCat = filterCategory === "all" || p.category === filterCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPrice = p.price <= priceRange;
    return matchCat && matchSearch && matchPrice;
  });

  if (sortBy === "low-high") filtered.sort((a, b) => a.price - b.price);
  if (sortBy === "high-low") filtered.sort((a, b) => b.price - a.price);

  // PAGINATION
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filtered.slice(startIdx, startIdx + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
  }, [filterCategory, searchTerm, priceRange]);

  return (
    <div className="all-products-page">

      {notification && (
        <div className="add-to-cart-notification animate-slideDown">
          <span>✅</span> {notification}
        </div>
      )}

      <div className="products-hero">
        <h1 className="animate-slideUp">Our Menu</h1>
        <p className="animate-slideUp">Tasty food delivered to your door</p>
      </div>

      <Ads placement="horizontal" />

      {/* FILTER BUTTON (MOBILE) */}
      <button className="mobile-filter-btn" onClick={() => setShowSidebar(true)}>
        ☰ Filters
      </button>

      <div className="products-container">

        {/* SIDEBAR */}
        <aside className={`products-sidebar ${showSidebar ? "show" : ""}`}>

          <button className="close-sidebar" onClick={() => setShowSidebar(false)}>
            ✕
          </button>

          {/* Search */}
          <div className="sidebar-box">
            <h3>Search</h3>
            <input
              type="text"
              placeholder="Search food..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          {/* Categories */}
          <div className="sidebar-box">
            <h3>Categories</h3>
            <ul className="category-list">
              {["all", "burger", "pizza", "asian", "meat"].map((cat) => (
                <li
                  key={cat}
                  onClick={() => {
                    setFilterCategory(cat);
                    setShowSidebar(false);
                  }}
                  className={filterCategory === cat ? "active" : ""}
                >
                  {cat.toUpperCase()}
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div className="sidebar-box">
            <h3>Price Range</h3>
            <input
              type="range"
              min="0"
              max="100"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
            />
            <div className="price-display">Up to ${priceRange}</div>
          </div>

          <Ads placement="sidebar" />

        </aside>

        {/* PRODUCTS SECTION */}
        <div className="products-content">

          <div className="products-top-bar">
            <p>Showing {startIdx + 1}–{Math.min(startIdx + itemsPerPage, filtered.length)} of {filtered.length}</p>

            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
              <option value="default">Default</option>
              <option value="low-high">Low to High</option>
              <option value="high-low">High to Low</option>
            </select>
          </div>

          <div className="grid">
            {paginatedProducts.map((p) => (
              <div className="product-card" key={p.id}>
                <div className="product-image-wrapper">
                  <img src={p.img} />
                </div>
                <h4>{p.name}</h4>
                <div className="price">${p.price.toFixed(2)}</div>
                <button className="add-btn" onClick={() => addToCart(p)}>Add</button>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
}

export default AllProducts;
