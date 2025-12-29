import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Css/SearchBar.css";

const dummyData = [
  "Pizza", "Burger", "Pasta", "French Fries", "Sandwich",
  "Fried Chicken", "Shawarma", "Tacos", "Noodles", "Manchurian",
  "Paneer Tikka", "Biryani", "Samosa", "Dosa", "Idli", "Vada Pav",
  "Momos", "Ice Cream", "Chocolate Cake", "Milkshake",
  "Cold Coffee", "Salad", "Soup", "Garlic Bread",
];

function SearchBar({ close }) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  /* ESC KEY CLOSE */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [close]);

  /* AUTO SEARCH */
  const handleSearch = (value) => {
    setQuery(value);

    if (!value.trim()) return setResults([]);

    const filtered = dummyData.filter((item) =>
      item.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  /* ON CLICK RESULT */
  const handleItemClick = (item) => {
    setQuery(item);
    close();
    navigate("/products");
  };

  /* ON ENTER */
  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && query.trim()) {
      close();
      navigate("/products");
    }
  };

  return (
    <div className="search-wrapper" onClick={close}>
      
      {/* Prevent closing when clicking inside search bar */}
      <div className="search-panel" onClick={(e) => e.stopPropagation()}>
        
        <input
          type="text"
          value={query}
          placeholder="Fast Food, Coffee, Dessert..."
          onChange={(e) => handleSearch(e.target.value)}
          onKeyDown={handleSearchSubmit}
          autoFocus
        />

        <span className="close-search" onClick={close}>
          <i className="ri-close-line"></i>
        </span>
      </div>

      {/* SEARCH RESULTS BELOW PANEL */}
      {results.length > 0 && (
        <div className="search-results" onClick={(e) => e.stopPropagation()}>
          {results.map((item, i) => (
            <div
              key={i}
              className="search-item"
              onClick={() => handleItemClick(item)}
            >
              <i className="ri-search-line"></i> {item}
            </div>
          ))}
        </div>
      )}

      {/* NO RESULT */}
      {query && results.length === 0 && (
        <div className="search-no-result" onClick={(e) => e.stopPropagation()}>
          No results found
        </div>
      )}
    </div>
  );
}

export default SearchBar;
