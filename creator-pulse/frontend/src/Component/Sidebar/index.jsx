import React from "react";
import "./style.css";

const Sidebar = ({ open, onClose }) => {
  return (
    <>
      <aside className={`sidebar ${open ? "open" : ""}`}>
      {/* ✕ close button – will be hidden on desktop via CSS */}
      <button className="close-btn" onClick={onClose}>
        ✕
      </button>

      {/* Your sidebar content here */}
      <div className="sidebar-content">
        {/* example items */}
        <p>Dashboard</p>
        <p>Analytics</p>
        <p>Settings</p>
      </div>
    </aside>
    </>
  );
};

export default Sidebar;
