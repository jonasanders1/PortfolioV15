import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  path: string;
  label: string;
  // icon: string;
}

const NavItem: React.FC<NavItemProps> = ({ path, label }) => {
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <li className={isActive ? "list-item active" : "list-item"}>
      <Link to={path} className="list-item-link">
          <span className="material-symbols-rounded list-item-link__icon">home</span>
          {label}
      </Link>
    </li>
  );
};

export default NavItem;
