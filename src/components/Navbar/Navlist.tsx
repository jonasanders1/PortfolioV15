import { useTheme } from "../../contexts/ThemeContext";
import NavItem from "./NavItem";
import ThemeToggle from "./ThemeToggle";
import navlinkArray from "../../utils/navlinks.js";
import themes from "../../styles/theme.js";
interface NavListProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

const NavList: React.FC<NavListProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  const { toggleTheme } = useTheme();

  return (
    <ul className={isMenuOpen ? "menu-list menu-list-open" : "menu-list"}>
      {isMenuOpen && (
        <button onClick={() => setIsMenuOpen(false)} className="close-btn">
          <span className="material-symbols-rounded list-item-link__icon">
            close
          </span>
        </button>
      )}

      {navlinkArray.map(
        (link: { path: string; label: string }, index: number) => (
          <NavItem key={index} path={link.path} label={link.label} />
        )
      )}
      <ThemeToggle toggleTheme={toggleTheme} />
    </ul>
  );
};

export default NavList;
