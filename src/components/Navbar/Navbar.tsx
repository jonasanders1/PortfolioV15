import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import NavList from "./NavList";
import { useEffect, useState } from "react";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { useTheme } from "../../contexts/ThemeContext";

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { height, width } = useWindowDimensions(); 
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    console.log(height, width)
    
    if (width >= 700) {
      console.log(`Reached width ${width}. Removing menu...`)
      setIsMenuOpen(false)
    }

  }, [height, width])

  return (
    <>
      <div className="navbar-placeholder"></div>
      <nav style={{boxShadow: isMenuOpen ? "none" : ""}}>
        {/* Logo Section */}
        {!isMenuOpen && (
          <>
            <Link to="/" className="logo">
              <img src={logo} alt="Logo" width={width >= 700 ? 40 : 30} />
            </Link>
            
            <button onClick={toggleMenu} className="menu-toggle">
              <span className="material-symbols-rounded list-item-link__icon" style={{ color: theme.text , fontSize: "2rem"}}>
                widgets
              </span>
            </button>
          </>
        )}

        {/* Navigation list */}
        <NavList isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </nav>
    </>
  );
};

export default Navbar;
