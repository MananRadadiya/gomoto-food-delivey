import React from "react";
import "./Css/Login.css"; 
import { Link } from "react-router-dom";
import heroBg from "./Images/INNER_header_02.jpg";

function Register() {
  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="overlay"></div>

      <div className="login-box">
        <h2>Create Account</h2>

        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" />
          </div>

          <button type="submit" className="login-btn">Register</button>
        </form>

        <p className="no-account-text">
          Already have an account?{" "}
          <Link to="/login" className="signup-link">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
