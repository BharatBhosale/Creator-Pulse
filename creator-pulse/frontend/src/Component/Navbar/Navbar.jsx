import React, { useState } from "react";
import AuthModal from "../Log-in/AuthModal"; // 🔁 change path if folder name different
import "./Navbar.css";

const Navbar = ({ isLoggedIn, onLogin, onLogout }) => {
  const [showAuth, setShowAuth] = useState(false);

  const handleLoginClick = () => {
    setShowAuth(true);
  };

  const handleCloseModal = () => {
    setShowAuth(false);
  };

  const handleLoggedInFromModal = () => {
    onLogin();          // tell App user is logged in
    setShowAuth(false); // close modal
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-l">
          <span className="icon">▶</span>
          <span className="app-name">Creator Pulse</span>
        </div>

        <div className="nav-r">
          {!isLoggedIn ? (
            <button className="login-btn" onClick={handleLoginClick}>
              Login
            </button>
          ) : (
            <button className="login-btn" onClick={onLogout}>
              Logout
            </button>
          )}
        </div>
      </nav>

      {/* Show login/signup modal only when not logged in */}
      {!isLoggedIn && showAuth && (
        <AuthModal
          closeModal={handleCloseModal}
          onLogin={handleLoggedInFromModal}
        />
      )}
    </>
  );
};

export default Navbar;
