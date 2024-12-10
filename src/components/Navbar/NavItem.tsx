import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

interface NavItemProps {
  path: string; 
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ path, label }) => {
  const location = useLocation();
  const isActive = location.pathname === path; 

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={path}>{label}</Link>
    </li>
  );
};

export default NavItem;
