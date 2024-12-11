import "./ThemeToggle.css";
import { useTheme } from "../../contexts/ThemeContext";
interface ThemeToggleProps {
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme }) => {
  const { themeName, theme } = useTheme();

  return (
    <div
      className={
        themeName === "dark" ? "switch-container dark-mode" : "switch-container"

      }
      style={{backgroundColor: theme.primary}}
      onClick={toggleTheme}
    >
      <div
        className={
          themeName === "dark" ? "switch dark-mode" : "switch"
        }
      ></div>
    </div>
  );
};

export default ThemeToggle;
