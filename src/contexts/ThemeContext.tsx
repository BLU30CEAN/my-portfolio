import React, { createContext, useContext, useState, useEffect } from "react";
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from "styled-components";

// 테마 타입 확장
declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      surface: string;
      text: string;
      textSecondary: string;
      primary: string;
      secondary: string;
      border: string;
      gradient: string;
    };
    shadows: {
      card: string;
      button: string;
    };
  }
}

type ThemeType = "light" | "dark" | "device";

interface ThemeContextType {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

// 테마 색상 정의 - Blue Ocean 컨셉
const lightTheme = {
  colors: {
    background: "#f0f8ff", // Alice Blue
    surface: "#ffffff",
    text: "#1a1a1a",
    textSecondary: "#666666",
    primary: "#0066cc", // Deep Blue
    secondary: "#ff6b6b",
    border: "#e0e0e0",
    gradient: "linear-gradient(135deg, #0066cc, #0099ff, #66b3ff)",
  },
  shadows: {
    card: "0 4px 20px rgba(0, 102, 204, 0.1)",
    button: "0 4px 20px rgba(0, 102, 204, 0.3)",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px",
  },
};

const darkTheme = {
  colors: {
    background: "#001a33", // Deep Ocean Blue
    surface: "#002b4d", // Ocean Surface
    text: "#ffffff",
    textSecondary: "#b3d9ff", // Light Blue Text
    primary: "#0099ff", // Ocean Blue
    secondary: "#ff6b6b",
    border: "#004080", // Deep Blue Border
    gradient: "linear-gradient(135deg, #0099ff, #66b3ff, #99ccff)",
  },
  shadows: {
    card: "0 4px 20px rgba(0, 153, 255, 0.2)",
    button: "0 4px 20px rgba(0, 153, 255, 0.4)",
  },
  breakpoints: {
    mobile: "768px",
    tablet: "1024px",
    desktop: "1200px",
  },
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const saved = localStorage.getItem("theme");
    return (saved as ThemeType) || "device";
  });

  const [isDark, setIsDark] = useState(false);

  const getSystemTheme = () => {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const getEffectiveTheme = () => {
    return theme === "device" ? getSystemTheme() : theme;
  };

  const currentTheme = getEffectiveTheme() === "dark" ? darkTheme : lightTheme;

  useEffect(() => {
    localStorage.setItem("theme", theme);
    setIsDark(getEffectiveTheme() === "dark");

    // 시스템 테마 변경 감지
    if (theme === "device") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => {
        setIsDark(getEffectiveTheme() === "dark");
      };
      
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      <StyledThemeProvider theme={currentTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
