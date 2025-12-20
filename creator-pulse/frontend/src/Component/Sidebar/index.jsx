import React from "react";
import "./style.css";

const Sidebar = ({ open, onClose, mobile }) => {
  return (
    <>
      <aside
        className={`sidebar ${mobile ? "mobile-only" : ""} ${
          open ? "open" : ""
        }`}
      >       
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>
        <div className="sidebar-content">
          
          <p>Dashboard</p>
          <p>Analytics</p>
          <p>Settings</p>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
