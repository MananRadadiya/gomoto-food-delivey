// src/App.jsx

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Css/animations.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { CartProvider } from './CartContext';
import Navigation from './Navbar';
import Hero from './Hero';
import Popular from './Popular';
import SecondSection from './SecondSection';
import CafeRestaurant from './CafeRestaurant';
import Testimonials from './Testimonials';
import DownloadApp from './DownloadApp';
import Footer from './Footer';

import Login from './Login';
import Register from './Register';
import AllProducts from './AllProducts';   
import Cart from './Cart';                 
import Checkout from './Checkout';         
import Account from './Account';           
import Blog from './Blog';               
import Contact from './Contact';
import Specials from './Specials';
import Gallery from './Gallery';
import Locations from './Locations';
import Reviews from './Reviews';
import Delivery from './Delivery';         


function App() {
  return (
    <CartProvider>
      <Router>

        {/* ALWAYS VISIBLE NAVBAR */}
        <Navigation />

        {/* ALL ROUTES */}
        <Routes>

          {/* ---------- HOME PAGE ---------- */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Popular />
                <SecondSection />
                <CafeRestaurant />
                <Testimonials />
                <DownloadApp />
              </>
            }
          />

          {/* ---------- LOGIN PAGE ---------- */}
          <Route path="/login" element={<Login />} />

          {/* ---------- REGISTER PAGE ---------- */}
          <Route path="/register" element={<Register />} />

          {/* ---------- ALL PRODUCTS PAGE ---------- */}
          <Route path="/products" element={<AllProducts />} />

          {/* ---------- CART PAGE ---------- */}
          <Route path="/cart" element={<Cart />} />

          {/* ---------- CHECKOUT PAGE ---------- */}
          <Route path="/checkout" element={<Checkout />} />

          {/* ---------- ACCOUNT PAGE ---------- */}
          <Route path="/account" element={<Account />} />

          {/* ---------- BLOG PAGE ---------- */}
          <Route path="/blog" element={<Blog />} />

          {/* ---------- CONTACT PAGE ---------- */}
          <Route path="/contacts" element={<Contact />} />

          {/* ---------- SPECIALS PAGE ---------- */}
          <Route path="/specials" element={<Specials />} />

          {/* ---------- GALLERY PAGE ---------- */}
          <Route path="/gallery" element={<Gallery />} />

          {/* ---------- LOCATIONS PAGE ---------- */}
          <Route path="/locations" element={<Locations />} />

          {/* ---------- REVIEWS PAGE ---------- */}
          <Route path="/reviews" element={<Reviews />} />

          {/* ---------- DELIVERY PAGE ---------- */}
          <Route path="/delivery" element={<Delivery />} />

        </Routes>

        {/* ALWAYS VISIBLE FOOTER */}
        <Footer />

      </Router>
    </CartProvider>
  );
}

export default App;
