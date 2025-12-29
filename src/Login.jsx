import React from "react";
import "./Css/Login.css";
import { Link } from "react-router-dom"; 
import heroBg from "./Images/INNER_header_02.jpg";

function Login() {
  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="overlay"></div>

      <div className="login-box">
        <h2>My Account</h2>

        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" />
          </div>

          <button type="submit" className="login-btn">Login</button>
        </form>

        <p className="no-account-text">
          Don't have an account?{" "}
          <Link to="/register" className="signup-link">Create one</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
