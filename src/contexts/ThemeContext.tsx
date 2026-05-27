import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import {
  AppTheme,
  darkTheme,
  lightTheme,
  themeToCssVars,
} from "../theme/tokens";

type ThemeMode = "light" | "dark" | "device";

interface ThemeContextValue {
  mode: ThemeMode;
  setMode: (m: ThemeMode) => void;
  effective: "light" | "dark";
  isDark: boolean;
  toggle: () => void;
}

const STORAGE_KEY = "theme";

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

export const useTheme = (): ThemeContextValue => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within <ThemeProvider>");
  return ctx;
};

/** SSR/CSR 동일하게 안전한 system theme 감지 */
function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined" || !window.matchMedia) return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

function applyCssVars(theme: AppTheme) {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  const vars = themeToCssVars(theme);
  Object.entries(vars).forEach(([k, v]) => root.style.setProperty(k, v));
  root.setAttribute("data-theme", theme.mode);
  root.style.colorScheme = theme.mode;
}

interface ProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ProviderProps> = ({ children }) => {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    if (typeof window === "undefined") return "device";
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return saved === "light" || saved === "dark" || saved === "device"
      ? saved
      : "device";
  });

  const [systemTheme, setSystemTheme] = useState<"light" | "dark">(() =>
    getSystemTheme(),
  );

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setSystemTheme(mq.matches ? "dark" : "light");
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const effective: "light" | "dark" = mode === "device" ? systemTheme : mode;
  const theme = effective === "dark" ? darkTheme : lightTheme;

  useLayoutEffect(() => {
    applyCssVars(theme);
  }, [theme]);

  const setMode = useCallback((next: ThemeMode) => {
    setModeState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private mode 등 무시 */
    }
  }, []);

  const toggle = useCallback(() => {
    setMode(effective === "dark" ? "light" : "dark");
  }, [effective, setMode]);

  const value = useMemo<ThemeContextValue>(
    () => ({ mode, setMode, effective, isDark: effective === "dark", toggle }),
    [mode, setMode, effective, toggle],
  );

  return (
    <ThemeContext.Provider value={value}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
