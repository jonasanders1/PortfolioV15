import { useTheme } from "../../contexts/ThemeContext";
import "./Divider.css";

interface DividerProps {
  text: string;
}

const Divider: React.FC<DividerProps> = ({ text }) => {
  const { theme } = useTheme();
  return (
    <div className="divider">
      <div
        className="divider-line"
        style={{ backgroundColor: theme.primary }}
      ></div>
      <p className="divider-text" style={{ color: theme.primary }}>
        {text}
      </p>
      <div
        className="divider-line"
        style={{ backgroundColor: theme.primary }}
      ></div>
    </div>
  );
};

export default Divider;
