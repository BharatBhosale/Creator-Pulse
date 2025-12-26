import React from "react";
import "./style.css";

const Sidebar = ({ open, onClose, mobile, navSelection, setNavSelection }) => {
  const navItems = [
    {
      key: "VideoAnalytics",
      label: "Video Analytics",
      icon: <img src="/Image/video.png" alt="Video" />,
    },
    {
      key: "ShortsAnalytics",
      label: "Shorts Analytics",
      icon: <img src="/Image/short-video.png" alt="Shorts" />,
    },
    {
      key: "TrendingTags",
      label: "YouTube SEO Tags",
      icon: <img src="/Image/tag.png" alt="Tags" />,
    },
    {
      key: "Blogs",
      label: "Blogs",
      icon: <img src="/Image/open-book.png" alt="Blogs" />,
    },
  ];

  const handleClick = (key) => {
    console.log("Sidebar click -> key:", key);
    if (setNavSelection) setNavSelection(key);
    if (onClose) onClose();
  };

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
          {navItems.map((item) => (
            <button
              key={item.key}
              aria-label={item.label}
              className={`sidebar-item ${
                navSelection === item.key ? "active-sidebar-item" : ""
              }`}
              onClick={() => handleClick(item.key)}
            >
              <span className="sidebar-icon" aria-hidden>
                {item.icon}
              </span>
              <span className="sidebar-label">{item.label}</span>
            </button>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
