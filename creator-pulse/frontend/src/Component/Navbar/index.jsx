import React, { useState } from "react";
import Sidebar from "../Sidebar";
import "./style.css";

const Navbar = ({
  isLoggedIn,
  setIsBlogVisible,
  setIsLoggedIn,
  navSelection,
  setNavSelection,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleLoginClick = () => {
   
    if (setNavSelection) setNavSelection("LogIn");
    setIsBlogVisible(false);
  };

  const hadleLogoutClick = () => {
    setIsLoggedIn(false);
    setIsBlogVisible(true); 
    if (setNavSelection) setNavSelection("Home"); 
  };

  return (
    <>
      <nav className="navbar">
        <button
          className="menu-toggle"
          aria-label="Open menu"
          onClick={() => setSidebarOpen(true)}
        >
          ☰
        </button>
        <div className="nav-l">
          <span className="icon"><img src="/Image/youtube.png" alt="YouTube Logo" /></span>
          <span className="app-name"><img src="/Image/name.png" alt="website name" /></span>
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

      
      <div
        className={`overlay ${sidebarOpen ? "open" : ""}`}
        onClick={() => setSidebarOpen(false)}
      />

      
      <Sidebar
        mobile
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        navSelection={navSelection}
        setNavSelection={setNavSelection}
      />
    </>
  );
};

export default Navbar;
