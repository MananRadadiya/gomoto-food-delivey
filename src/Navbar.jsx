// src/Navbar.jsx
import React, { useState } from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./Css/Navbar.css";
import "./Css/animations.css";
import logo from "./Images/logo_2x.png";
import SearchBar from "./SearchBar";

function Navigation() {
  const [open, setOpen] = useState(false);
  const { getCartCount } = useCart();
  const navigate = useNavigate();
  const cartCount = getCartCount();

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Navbar expand="lg" className="gomoto-navbar shadow-sm" sticky="top">
      <Container fluid className="px-4">

        {/* LOGO */}
        <Navbar.Brand onClick={handleLogoClick} className="gomoto-logo fw-bold" style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <img
            src={logo}
            alt="GoMoto Logo"
            className="logo-img"
            style={{ height: '45px', width: 'auto', objectFit: 'contain', display: 'block' }}
            onError={(e) => {
              console.error('Logo failed to load:', logo);
              e.target.style.display = 'none';
            }}
          />
          <span className="brand-text" style={{ color: '#FF6B35', fontWeight: '800', letterSpacing: '1px' }}>
            GoMoto
          </span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="gomoto-nav" className="gomoto-toggle" />

        <Navbar.Collapse id="gomoto-nav" className="gomoto-collapse">

          {/* CENTER MENU */}
          <Nav className="ms-auto gomoto-menu gap-3">
            <Nav.Link href="/" className="nav-link-item">
              <i className="ri-home-line"></i> Home
            </Nav.Link>

            <NavDropdown title="📍 Explore" id="explore-dropdown" className="gomoto-dropdown">
              <NavDropdown.Item href="/products">Browse All</NavDropdown.Item>
              <NavDropdown.Item href="/specials">🔥 Hot Deals</NavDropdown.Item>
              <NavDropdown.Item href="/gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="/locations">Our Locations</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/delivery">Delivery Info</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="🍔 Shop" id="shop-dropdown" className="gomoto-dropdown">
              <NavDropdown.Item href="/products">All Products</NavDropdown.Item>
              <NavDropdown.Item href="/cart">View Cart ({cartCount})</NavDropdown.Item>
              <NavDropdown.Item href="/checkout">Checkout</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/account">My Account</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/reviews" className="nav-link-item">
              ⭐ Reviews
            </Nav.Link>

            <Nav.Link href="/blog" className="nav-link-item">
              📰 Blog
            </Nav.Link>

            <Nav.Link href="/contacts" className="nav-link-item">
              📞 Contact
            </Nav.Link>
          </Nav>

          {/* RIGHT SIDE ICONS */}
          <div className="gomoto-icons ms-4 d-flex gap-3 align-items-center">

            {/* SEARCH ICON */}
            <span
              className="search-icon animate-pulse"
              onClick={() => setOpen(!open)}
              title="Search"
            >
              <i className="ri-search-line"></i>
            </span>

            {/* USER ICON */}
            <Nav.Link href="/login" className="nav-icon" title="Login">
              <i className="ri-user-circle-line"></i>
            </Nav.Link>

            {/* CART ICON */}
            <span
              className="nav-icon cart-icon animate-glow"
              onClick={() => navigate('/cart')}
              title="Shopping Cart"
            >
              <i className="ri-shopping-cart-line"></i>
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </span>

          </div>

          {/* SEARCH PANEL */}
          {open && <SearchBar close={() => setOpen(false)} />}


        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
