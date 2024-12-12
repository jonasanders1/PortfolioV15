import React from "react";
import "./CustomButton.css";
import { useTheme } from "../../contexts/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core"; // Import IconDefinition type

interface CustomButtonProps {
  type: "primary" | "secondary";
  hasIcon: boolean;
  icon?: IconDefinition;
  label: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  type,
  hasIcon,
  icon,
  label,
  onClick
}) => {
  const { theme } = useTheme();
  const buttonClass = type === "primary" ? "custom-btn btn-primary" : "custom-btn btn-secondary";

  return (
    <button
      className={buttonClass}
      style={
        type === "primary"
          ? { backgroundColor: theme.primary, color: theme.background }
          : { backgroundColor: theme.background, color: theme.primary }
      }
      onClick={onClick}
    >
      {label}
      {hasIcon && icon && (
        <FontAwesomeIcon icon={icon} className="button-icon" />
      )}
    </button>
  );
};

export default CustomButton;
