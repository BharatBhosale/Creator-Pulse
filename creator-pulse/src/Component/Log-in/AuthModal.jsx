import React, { useState } from "react";
import "./AuthModal.css";

const AuthModal = ({ closeModal, onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // here you can add validation later
    onLogin();      // mark user as logged in (App state)
    closeModal();   // close the modal
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <span className="close-btn" onClick={closeModal}>
          ×
        </span>

        <h2>{isLogin ? "Login" : "Create Account"}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && (
            <input type="text" placeholder="Full Name" required />
          )}

          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Create Account"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "New user?" : "Already have an account?"}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? " Sign Up" : " Login"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthModal;
