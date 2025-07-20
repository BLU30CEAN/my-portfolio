import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const ThemeToggleContainer = styled.div`
  position: relative;
`;

const ThemeButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  padding: 0.75rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  transition: all 0.3s ease;
  font-size: 0.9rem;
  font-weight: 500;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }
`;

const Dropdown = styled(motion.div)`
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 12px;
  padding: 0.5rem;
  min-width: 150px;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const ThemeOption = styled.button<{ active: boolean }>`
  width: 100%;
  padding: 0.75rem 1rem;
  background: ${(props) =>
    props.active ? props.theme.colors.primary : "transparent"};
  color: ${(props) => (props.active ? "white" : props.theme.colors.text)};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.active
        ? props.theme.colors.primary
        : props.theme.colors.background};
  }
`;

const getThemeIcon = (theme: string) => {
  switch (theme) {
    case "light":
      return <Sun size={16} />;
    case "dark":
      return <Moon size={16} />;
    case "device":
      return <Monitor size={16} />;
    default:
      return <Sun size={16} />;
  }
};

const getThemeLabel = (theme: string) => {
  switch (theme) {
    case "light":
      return "라이트";
    case "dark":
      return "다크";
    case "device":
      return "시스템";
    default:
      return "라이트";
  }
};

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (newTheme: "light" | "dark" | "device") => {
    setTheme(newTheme);
    setIsOpen(false);
  };

  return (
    <ThemeToggleContainer>
      <ThemeButton
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {getThemeIcon(theme)}
        {getThemeLabel(theme)}
        <ChevronDown size={14} />
      </ThemeButton>

      <AnimatePresence>
        {isOpen && (
          <Dropdown
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <ThemeOption
              active={theme === "light"}
              onClick={() => handleThemeChange("light")}
            >
              <Sun size={16} />
              라이트
            </ThemeOption>
            <ThemeOption
              active={theme === "dark"}
              onClick={() => handleThemeChange("dark")}
            >
              <Moon size={16} />
              다크
            </ThemeOption>
            <ThemeOption
              active={theme === "device"}
              onClick={() => handleThemeChange("device")}
            >
              <Monitor size={16} />
              시스템
            </ThemeOption>
          </Dropdown>
        )}
      </AnimatePresence>
    </ThemeToggleContainer>
  );
};

export default ThemeToggle;
