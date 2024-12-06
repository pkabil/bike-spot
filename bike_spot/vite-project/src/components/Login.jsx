import React, { useState } from "react";
import './Login.css';
import HomePage from "./Homepage";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "admin@react.com" && password === "123") {
      setIsLoggedIn(true); 
    } else {
      setError("Invalid email or password.");
    }
  };

  if (isLoggedIn) {
    return <HomePage />;
  }

  return (
    <div className="login-container">
      <h2>LOGIN</h2>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <button type="submit" className="login-button">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
