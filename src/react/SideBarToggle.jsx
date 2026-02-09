import React, { useState } from "react";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen((p) => !p);
  }
  return (
    <div className="sidebar" data-testid="sidebar">
      <button className="toggle-btn" data-testid="btn-toggle">
        <span data-testid="icon-menu">-</span>
      </button>
      {isOpen && (
        <nav className="nav-menu" data-testid="nav-menu">
          <ul className="nav-list">
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
            <li className="nav-item"></li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Sidebar;
