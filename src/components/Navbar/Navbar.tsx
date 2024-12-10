import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import NavList from "./NavList";
import { useState } from "react";
// import { useState } from "react";


const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <div className="navbar-placeholder"></div>
      <nav>
        {/* Logo Section */}

        <Link to="/" className="logo">
          <img src={logo} alt="Logo" width={40} />
        </Link>
        <button onClick={toggleMenu} className="menu-toggle">
          {isMenuOpen ? "Close" : "Menu"}
        </button>

        {/* Navigation list */}
        <NavList isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </>
  );
};

export default Navbar;
