// src/CafeRestaurant.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Css/CafeRestaurant.css";
import "./Css/animations.css";

// import your 5 images
import img1 from "./Images/burger house img.jpg";
import img2 from "./Images/rest monaco img.jpg";
import img3 from "./Images/ribs and beer.jpg";
import img4 from "./Images/sushihiteria.jpg";
import img5 from "./Images/happy grill cafe.jpg";

const cafes = [
  {
    title: "Burger House",
    tag: "Burgers",
    img: img1,
  },
  {
    title: "Restaurant Monaco",
    tag: "Restaurant",
    img: img2,
  },
  {
    title: "Ribs and Beer",
    tag: "Pub",
    img: img3,
  },
  {
    title: "Sushiteria",
    tag: "Asian food",
    img: img4,
  },
  {
    title: "Happy Grill Cafe",
    tag: "BBQ",
    img: img5,
  },
];

function CafeRestaurant() {
  return (
    <section className="cafe-section">
      <Container>
        {/* Heading */}
        <div className="text-center mb-5">
          <span className="cafe-subtitle">Our Recommendations</span>
          <h2 className="cafe-title">Cafes & Restaurants</h2>
        </div>

        <Row className="g-4">
          {/* BIG LEFT CARD */}
          <Col lg={6}>
            <div className="cafe-card big-card">
              <span className="badge-tag">{cafes[0].tag}</span>
              <img src={cafes[0].img} alt={cafes[0].title} />
              <div className="card-info">
                <h4>{cafes[0].title}</h4>
                <p>Monday - Saturday · 09:00 - 18:00</p>
              </div>
            </div>
          </Col>

          {/* RIGHT GRID */}
          <Col lg={6}>
            <Row className="g-4">
              {cafes.slice(1).map((item, index) => (
                <Col md={6} key={index}>
                  <div className="cafe-card">
                    <span className="badge-tag">{item.tag}</span>
                    <img src={item.img} alt={item.title} />
                    <div className="card-info">
                      <h5>{item.title}</h5>
                      <p>Monday - Saturday · 09:00 - 18:00</p>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default CafeRestaurant;
