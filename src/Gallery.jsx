import React from "react";
import "./Css/Gallery.css";

function Gallery() {
  const galleryItems = [
    { id: 1, img: "https://media.istockphoto.com/id/860251286/photo/tasty-burgers-on-wooden-table.jpg?s=612x612&w=0&k=20&c=M86vsVtbDtgPz6bzZsbigSvjo8zDzYMvKvnOS6PL90s=", title: "Gourmet Burgers", category: "Burgers" },
    { id: 2, img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/08/7c/f4/50/rock-wood-fired-pizza.jpg?w=900&h=500&s=1", title: "Wood-Fired Pizza", category: "Pizza" },
    { id: 3, img: "https://www.kingdomsushi.com/wp-content/webp-express/webp-images/uploads/DSC00722-1.jpg.webp", title: "Fresh Sushi", category: "Asian" },
    { id: 4, img: "https://storage.googleapis.com/rpmrestaurants_bucket/wp-content/uploads/6fc39c5b-rpm-steak_westholme-strip-2.jpg", title: "Premium Meat", category: "Meat" },
    { id: 5, img: "https://images.squarespace-cdn.com/content/v1/55fd5561e4b0154e882b6538/59c4582f-23f8-450a-ac11-cbe9e76b6bd4/Macros+-+View+2+Rev+A.jpg", title: "Happy Grill Cafe", category: "Ambience" },
    { id: 6, img: "https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/lpwhjzik/1447b960-bab2-4ed9-8042-82207658d45b.jpg", title: "Ribs & Beer", category: "Drinks" },
  ];

  return (
    <div className="gallery-page">
      {/* Hero */}
      <div className="gallery-hero">
        <div className="container">
          <h1>Photo Gallery</h1>
        </div>
      </div>

      {/* Gallery */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, idx) => (
              <div className="gallery-item" key={item.id} style={{ animationDelay: `${idx * 0.1}s` }}>
                <img src={item.img} alt={item.title} loading="lazy" />
                <div className="gallery-overlay-item">
                  <h3>{item.title}</h3>
                  <span className="category">{item.category}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="gallery-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-card"><h2 className="stat-number">500+</h2><p>Happy Customers Daily</p></div>
            <div className="stat-card"><h2 className="stat-number">100+</h2><p>Delicious Dishes</p></div>
            <div className="stat-card"><h2 className="stat-number">15+</h2><p>Years of Experience</p></div>
            <div className="stat-card"><h2 className="stat-number">24/7</h2><p>Order Delivery</p></div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;