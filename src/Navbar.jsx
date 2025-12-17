// src/Navbar.jsx
import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./Css/Navbar.css";
import logo from "./Images/logo_2x.png";

function Navigation() {
  return (
    <Navbar expand="xl" className="gomoto-navbar" variant="dark" sticky="top">
      <Container fluid="xl" className="gomoto-container">

        {/* LOGO */}
        <Navbar.Brand href="/" className="gomoto-logo">
          <img src={logo} alt="GoMoto" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="gomoto-nav" className="gomoto-toggle" />

        <Navbar.Collapse id="gomoto-nav" className="gomoto-collapse">

          {/* CENTER MENU */}
          <Nav className="gomoto-menu">

            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown
              title="About Us"
              id="about-dropdown"
              align="center"
              className="gomoto-dropdown"
            >
              <NavDropdown.Item href="/about/Testimonial">
                Testimonial
              </NavDropdown.Item>
              <NavDropdown.Item href="/about/FQA">
                FQA
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown
              title="Catalog"
              id="catalog-dropdown"
              align="center"
              className="gomoto-dropdown"
            >
              <NavDropdown.Item href="/catalog/bikes">
                Bikes
              </NavDropdown.Item>
              <NavDropdown.Item href="/catalog/scooters">
                Scooters
              </NavDropdown.Item>
              <NavDropdown.Item href="/catalog/accessories">
                Accessories
              </NavDropdown.Item>
              <NavDropdown.Item href="/catalog/spare-parts">
                Spare Parts
              </NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="/contacts">Contacts</Nav.Link>

          </Nav>

          {/* RIGHT ICONS */}
          <div className="gomoto-icons">
            <span className="phone">📞 0905-456-987-3</span>
            <span className="icon">👤</span>
            <span className="icon cart">
              🛒 <span className="count">0</span>
            </span>
            <span className="icon">🔍</span>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
