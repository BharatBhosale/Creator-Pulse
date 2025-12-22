import React, { useState } from "react";
import "./style.css";

const AuthModal = ({
  closeModal,
  onLogin,
  inline = false,
  setIsLoggedIn,
  setNavSelection,
  setIsBlogVisible,
}) => {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // here you can add validation later
    if (onLogin) onLogin();
    if (setIsLoggedIn) setIsLoggedIn(true);
    if (setIsBlogVisible) setIsBlogVisible(true);
    if (setNavSelection) setNavSelection("Home");
    if (!inline && closeModal) closeModal();
  };

  const handleToggle = () => {
    if (inline && setNavSelection) {
      // navigate to Register page when inline
      setNavSelection(isLogin ? "Register" : "LogIn");
    } else {
      setIsLogin(!isLogin);
    }
  };

  if (inline) {
    return (
      <section className="auth-page">
        <div className="modal-box">
          <h2>{isLogin ? "Login" : "Create Account"}</h2>

          <form onSubmit={handleSubmit} className="auth-form">
            {!isLogin && <input type="text" placeholder="Full Name" required />}

            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />

            <button type="submit" className="submit-btn">
              {isLogin ? "Login" : "Create Account"}
            </button>
          </form>

          <p className="toggle-text">
            {isLogin ? "New user?" : "Already have an account?"}
            <button className="link-btn" onClick={handleToggle}>
              {isLogin ? " Sign Up" : " Login"}
            </button>
          </p>
        </div>
      </section>
    );
  }

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <span className="close-btn" onClick={closeModal}>
          ×
        </span>

        <h2>{isLogin ? "Login" : "Create Account"}</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          {!isLogin && <input type="text" placeholder="Full Name" required />}

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
