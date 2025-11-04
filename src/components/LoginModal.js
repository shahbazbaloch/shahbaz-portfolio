import React, { useState } from "react";

const LoginModal = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleLoginChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignupChange = (e) => {
    setSignupData({
      ...signupData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    alert(
      "Login functionality would be connected to backend in a live implementation."
    );
    onClose();
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    alert(
      "Sign up functionality would be connected to backend in a live implementation."
    );
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={`modal ${isOpen ? "open" : ""}`}>
      <div className="modal-content">
        <button
          className="close-modal"
          onClick={onClose}>
          &times;
        </button>
        <div className="modal-tabs">
          <button
            className={`tab-btn ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}>
            Login
          </button>
          <button
            className={`tab-btn ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}>
            Sign Up
          </button>
        </div>
        <div
          className={`tab-content ${activeTab === "login" ? "active" : ""}`}
          id="login-tab">
          <h3>Client Login</h3>
          <form onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="login-email">Email</label>
              <input
                type="email"
                id="login-email"
                name="email"
                className="form-control"
                value={loginData.email}
                onChange={handleLoginChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                name="password"
                className="form-control"
                value={loginData.password}
                onChange={handleLoginChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-full">
              Login
            </button>
          </form>
        </div>
        <div
          className={`tab-content ${activeTab === "signup" ? "active" : ""}`}
          id="signup-tab">
          <h3>Create Account</h3>
          <form onSubmit={handleSignupSubmit}>
            <div className="form-group">
              <label htmlFor="signup-name">Full Name</label>
              <input
                type="text"
                id="signup-name"
                name="name"
                className="form-control"
                value={signupData.name}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-email">Email</label>
              <input
                type="email"
                id="signup-email"
                name="email"
                className="form-control"
                value={signupData.email}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-password">Password</label>
              <input
                type="password"
                id="signup-password"
                name="password"
                className="form-control"
                value={signupData.password}
                onChange={handleSignupChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="signup-confirm">Confirm Password</label>
              <input
                type="password"
                id="signup-confirm"
                name="confirmPassword"
                className="form-control"
                value={signupData.confirmPassword}
                onChange={handleSignupChange}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary btn-full">
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
