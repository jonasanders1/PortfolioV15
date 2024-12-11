import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

interface NavItemProps {
  path: string;
  label: string;
  icon: string;
}

const NavItem: React.FC<NavItemProps> = ({ path, label, icon }) => {
  const {theme} = useTheme()
  const location = useLocation();
  const isActive = location.pathname === path;

  return (
    <li className="list-item">
      <Link to={path} className={isActive  ? "list-item-link active": "list-item-link"}>
          <span className="material-symbols-rounded list-item-link__icon">{icon}</span>
          {label}
      </Link>
    </li>
  );
};

export default NavItem;
