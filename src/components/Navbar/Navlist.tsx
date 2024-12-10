import { useTheme } from "../../contexts/ThemeContext";
import NavItem from "./NavItem";

interface NavListProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const NavList: React.FC<NavListProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { toggleTheme } = useTheme();

  return (
    <ul className={isMenuOpen ? "mobile-menu mobile-menu--open" : "mobile-menu"}>
      <NavItem path="/" label="Home" />
      <NavItem path="/about" label="About" />
      <NavItem path="/projects" label="Projects" />
      <NavItem path="/contact" label="Contact" />
      <button className="theme-toggle-btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
      {isMenuOpen && (
        <button onClick={() => setIsMenuOpen(false)} className="close-btn">
          Close
        </button>
      )}
    </ul>
  );
};

export default NavList;
