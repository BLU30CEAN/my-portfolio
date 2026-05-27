import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

const Wrap = styled.div`
  position: relative;
`;

const Trigger = styled(motion.button)`
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.md};
  padding: 0.55rem 0.85rem;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  color: ${(p) => p.theme.colors.text};
  font-size: 0.88rem;
  font-weight: 600;
  font-family: inherit;
  transition: border-color ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut},
    background ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut};

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary};
  }
`;

const Menu = styled(motion.ul)`
  position: absolute;
  top: calc(100% + 8px);
  right: 0;
  list-style: none;
  margin: 0;
  padding: 0.4rem;
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.md};
  min-width: 168px;
  box-shadow: ${(p) => p.theme.shadows.cardHover};
  z-index: 1100;
`;

const Item = styled.li``;

const Option = styled.button<{ $active: boolean }>`
  width: 100%;
  appearance: none;
  background: ${(p) =>
    p.$active ? p.theme.colors.primarySoft : "transparent"};
  color: ${(p) =>
    p.$active ? p.theme.colors.primary : p.theme.colors.text};
  border: none;
  border-radius: ${(p) => p.theme.radii.sm};
  padding: 0.55rem 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-family: inherit;
  font-size: 0.88rem;
  cursor: pointer;
  text-align: left;

  &:hover {
    background: ${(p) => p.theme.colors.primarySoft};
    color: ${(p) => p.theme.colors.primary};
  }
`;

const ICONS = {
  light: <Sun size={16} />,
  dark: <Moon size={16} />,
  device: <Monitor size={16} />,
} as const;

const LABELS = { light: "라이트", dark: "다크", device: "시스템" } as const;

const ThemeToggle: React.FC = () => {
  const { mode, setMode } = useTheme();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <Wrap ref={wrapRef}>
      <Trigger
        whileTap={{ scale: 0.96 }}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label={`테마: ${LABELS[mode]}`}
      >
        {ICONS[mode]}
        {LABELS[mode]}
        <ChevronDown size={14} />
      </Trigger>

      <AnimatePresence>
        {open && (
          <Menu
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.97 }}
            transition={{ duration: 0.16, ease: "easeOut" }}
          >
            {(Object.keys(LABELS) as (keyof typeof LABELS)[]).map((m) => (
              <Item key={m}>
                <Option
                  role="menuitemradio"
                  aria-checked={mode === m}
                  $active={mode === m}
                  onClick={() => {
                    setMode(m);
                    setOpen(false);
                  }}
                >
                  {ICONS[m]}
                  {LABELS[m]}
                </Option>
              </Item>
            ))}
          </Menu>
        )}
      </AnimatePresence>
    </Wrap>
  );
};

export default ThemeToggle;
