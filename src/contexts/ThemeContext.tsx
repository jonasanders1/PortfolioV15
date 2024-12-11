import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import themes from "../styles/theme";

type Theme = "light" | "dark";

type ThemeContextType = {
  toggleTheme: () => void;
  theme: typeof themes["light"];
  themeName: "light" | "dark";
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme") as Theme | null;
    return savedTheme || "light"; // Default to "light" if no saved theme
  });

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  };

  const currentTheme = themes[themeName];

  return (
    <ThemeContext.Provider
      value={{ toggleTheme, theme: currentTheme, themeName }}
    >
      <StyledThemeProvider theme={currentTheme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
