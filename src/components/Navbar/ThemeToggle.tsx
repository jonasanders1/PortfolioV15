import "./ThemeToggle.css";
import { useTheme } from "../../contexts/ThemeContext";
interface ThemeToggleProps {
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme }) => {
  const { theme } = useTheme();

  return (
    <div
      className={
        theme === "dark" ? "switch-container dark-mode" : "switch-container"
      }
      onClick={toggleTheme}
    >
      <div
        className={
          theme === "dark" ? "switch dark-mode" : "switch"
        }
      ></div>
    </div>
  );
};

export default ThemeToggle;
