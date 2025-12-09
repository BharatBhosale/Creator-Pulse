import React, { useState } from "react";
import AuthModal from "../Log-in"; // 🔁 change path if folder name different
import "./style.css";

const Navbar = ({ isLoggedIn, setIsBlogVisible, setIsLoggedIn }) => {
  const [showAuth, setShowAuth] = useState(false);

  const handleLoginClick = () => {
    setIsBlogVisible(false);
    setIsLoggedIn(true); // hide blog when login modal opens
  };

  const handleCloseModal = () => {
    setShowAuth(false);
  };

  const handleLoggedInFromModal = () => {
    // onLogin(); // tell App user is logged in
    // setShowAuth(false); // close modal
  };
  const hadleLogoutClick = () => {
    setIsLoggedIn(false);
    setIsBlogVisible(true); // show blog after logout
  };

  return (
    <>
      <nav className="navbar">
        <button className="menu-toggle">☰</button>
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
            <button className="login-btn" onClick={hadleLogoutClick}>
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
