import { useTheme } from "../../contexts/ThemeContext";
import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";
import navlinkArray from "../../utils/navlinks.js";
import useWindowDimensions from "../../hooks/useWindowDimensions.js";
interface NavListProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const NavList: React.FC<NavListProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { theme, toggleTheme } = useTheme();
  const { width } = useWindowDimensions();

  return (
    <ul
      className={isMenuOpen ? "menu-list menu-list-open" : "menu-list"}
      style={{ backgroundColor: theme.background }}
    >
      {isMenuOpen && (
        <button
          onClick={() => setIsMenuOpen(false)}
          className="close-btn"
          style={{ color: theme.text }}
        >
          <span className="material-symbols-rounded list-item-link__icon">
            Close
          </span>
          {"close"}
        </button>
      )}

      {navlinkArray.map(
        (
          link: { path: string; label: string; icon: string },
          index: number
        ) => (
          <NavItem
            key={index}
            path={link.path}
            label={link.label}
            icon={link.icon}
            onClick={() => setIsMenuOpen(false)}
          />
        )
      )}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "0.3rem",
          alignItems: "center",
        }}
      >
        <ThemeToggle toggleTheme={toggleTheme} />
        {<span style={{ display: width >= 700 ? "none" : ""}}>Theme</span>}
      </div>
    </ul>
  );
};

export default NavList;
