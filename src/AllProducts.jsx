// src/AllProducts.jsx
import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Ads from "./Ads";
import "./Css/ALLProducts.css"; // Updated CSS import
import "./Css/animations.css";

// Import images (Make sure paths are correct)
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
  const itemsPerPage = 9;

  // PRODUCT DATA
  const products = [
    // Burgers
    { id: 1, name: "Chicken Burger", price: 16.00, img: burger1, category: "burger" },
    { id: 2, name: "Classic Bacon Hamburger", price: 11.99, img: burger2, category: "burger" },
    { id: 3, name: "Black Gamburger with Fishcake", price: 24.99, img: burger3, category: "burger" },
    { id: 4, name: "Royal Cheeseburger", price: 13.49, img: burger4, category: "burger" },
    { id: 5, name: "Spicy Mexican Burger", price: 15.50, img: burger1, category: "burger" },
    { id: 6, name: "BBQ Pulled Pork", price: 14.99, img: burger2, category: "burger" },
    // Pizzas
    { id: 7, name: "Margarita Pizza", price: 12.99, img: pizza1, category: "pizza" },
    { id: 8, name: "Pepperoni Supreme", price: 18.99, img: pizza2, category: "pizza" },
    { id: 9, name: "Vegetarian Pizza", price: 13.50, img: pizza3, category: "pizza" },
    { id: 10, name: "Buffalo Chicken Pizza", price: 16.50, img: pizza4, category: "pizza" },
    // Sushi
    { id: 11, name: "Vegetable Sushi Roll", price: 9.99, img: sushi1, category: "asian" },
    { id: 12, name: "Salmon Sushi Platter", price: 16.50, img: sushi2, category: "asian" },
    { id: 13, name: "Spicy Tuna Roll", price: 12.99, img: sushi3, category: "asian" },
    { id: 14, name: "Sushi Combo Set", price: 22.99, img: sushihit, category: "asian" },
    // Meat
    { id: 15, name: "Premium Lamb Cuts", price: 30.00, img: meat1, category: "meat" },
    { id: 16, name: "Grilled Chicken Breast", price: 14.50, img: meat2, category: "meat" },
    { id: 17, name: "Turkey Slices Premium", price: 18.20, img: meat3, category: "meat" },
    { id: 18, name: "Spiced Lamb Kebab", price: 16.99, img: meat4, category: "meat" },
    // Extras
    { id: 19, name: "Fish & Chips", price: 13.99, img: burger4, category: "seafood" },
    { id: 20, name: "Crispy Chicken Tenders", price: 11.50, img: burger3, category: "chicken" },
    { id: 21, name: "Caesar Salad", price: 10.99, img: burger1, category: "salad" },
    { id: 22, name: "Greek Salad", price: 9.50, img: burger2, category: "salad" },
    { id: 27, name: "Chocolate Lava Cake", price: 7.99, img: burger2, category: "dessert" },
    { id: 28, name: "Cheesecake Slice", price: 6.99, img: burger4, category: "dessert" },
  ];

  // LOGIC: Filter & Sort
  let filtered = products.filter(p => {
    const matchCategory = filterCategory === 'all' || p.category === filterCategory;
    const matchSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchPrice = p.price <= priceRange;
    return matchCategory && matchSearch && matchPrice;
  });

  if (sortBy === 'low-high') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'high-low') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  // LOGIC: Pagination
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const paginatedProducts = filtered.slice(startIdx, startIdx + itemsPerPage);

  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: `$${product.price.toFixed(2)}`,
    });
    setNotification(`${product.name} added to cart!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
    setCurrentPage(1);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [filterCategory, searchTerm, priceRange]);

  return (
    <div className="all-products-page">

      {/* TOAST NOTIFICATION */}
      {notification && (
        <div className="add-to-cart-notification animate-slideDown">
          <span>✅</span> {notification}
        </div>
      )}

      

      {/* HERO SECTION */}
      <div className="products-hero">
        <h1 className="animate-slideUp">Our Menu</h1>
        <p className="animate-slideUp" style={{ animationDelay: '0.1s' }}>Tasty food delivered to your door</p>
      </div>
      {/* ADS BANNER */}
      <div style={{ maxWidth: '1300px', margin: '0 auto', padding: '0 20px' }}>
        <Ads placement="horizontal" />
      </div>

      {/* MAIN LAYOUT */}
      <div className="products-container">

        {/* SIDEBAR */}
        <aside className="products-sidebar">
          
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
              {['all', 'burger', 'pizza', 'asian', 'meat', 'dessert'].map(cat => (
                <li 
                  key={cat}
                  onClick={() => setFilterCategory(cat)}
                  className={filterCategory === cat ? 'active' : ''}
                >
                  {cat.charAt(0).toUpperCase() + cat.slice(1)}
                  {filterCategory === cat && <span>•</span>}
                </li>
              ))}
            </ul>
          </div>

          {/* Price Filter */}
          <div className="sidebar-box">
            <h3>Price Range</h3>
            <div className="price-filter">
              <input 
                type="range" 
                min="0" 
                max="100" 
                step="1"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
              />
              <div className="price-display">Up to ${priceRange}</div>
            </div>
          </div>

          {/* Tags */}
          <div className="sidebar-box">
            <h3>Popular Tags</h3>
            <div className="tag-list">
              <span onClick={() => setFilterCategory('burger')}>🍔 Burgers</span>
              <span onClick={() => setFilterCategory('pizza')}>🍕 Pizza</span>
              <span onClick={() => setFilterCategory('asian')}>🍜 Asian</span>
              <span onClick={() => setFilterCategory('meat')}>🥩 Meat</span>
              <span onClick={() => setFilterCategory('dessert')}>🍰 Sweet</span>
            </div>
          </div>

          {/* Sidebar Ads */}
          <Ads placement="sidebar" />
        </aside>

        {/* PRODUCTS GRID CONTENT */}
        <div className="products-content">
          
          {/* Top Bar */}
          <div className="products-top-bar">
            <p className="results-count">
              Showing <strong>{startIdx + 1}–{Math.min(startIdx + itemsPerPage, filtered.length)}</strong> of <strong>{filtered.length}</strong> results
            </p>
            <select value={sortBy} onChange={handleSortChange} className="sort-select">
              <option value="default">Sort by: Default</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
          </div>

          {/* Grid */}
          <div className="grid">
            {paginatedProducts.length > 0 ? (
              paginatedProducts.map((p, index) => (
                <div 
                  className="product-card animate-slideUp"
                  key={p.id}
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="product-image-wrapper">
                    <img src={p.img} alt={p.name} />
                    <div className="product-overlay">
                      <button 
                        className="quick-view-btn"
                        onClick={() => handleAddToCart(p)}
                      >
                        Quick Add
                      </button>
                    </div>
                  </div>

                  <h4>{p.name}</h4>
                  <div className="price">${p.price.toFixed(2)}</div>

                  <button 
                    className="add-btn"
                    onClick={() => handleAddToCart(p)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <div className="no-products" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px' }}>
                <h3>No items found</h3>
                <p>Try adjusting your search or filters.</p>
              </div>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination">
              <button 
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                className="prev-btn"
                disabled={currentPage === 1}
              >
                &larr; Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={currentPage === page ? 'active' : ''}
                >
                  {page}
                </button>
              ))}

              <button 
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                className="next-btn"
                disabled={currentPage === totalPages}
              >
                Next &rarr;
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

export default AllProducts;