/**
 * Design tokens — 한 파일 안에서 라이트/다크 팔레트, 간격, 모션, 타이포를 모두 정의한다.
 * styled-components 테마와 :root CSS 변수 양쪽으로 export 한다.
 */

export type ColorTokens = {
  background: string;
  backgroundElevated: string;
  surface: string;
  surfaceMuted: string;
  text: string;
  textSecondary: string;
  textMuted: string;
  primary: string;
  primarySoft: string;
  accent: string;
  success: string;
  danger: string;
  border: string;
  borderStrong: string;
  ring: string;
  selection: string;
  scrollTrack: string;
  scrollThumb: string;
  gradient: string;
  gradientSecondary: string;
  meshA: string;
  meshB: string;
  meshC: string;
};

export type ShadowTokens = {
  card: string;
  cardHover: string;
  button: string;
  glow: string;
};

const radii = {
  xs: "6px",
  sm: "10px",
  md: "12px",
  lg: "16px",
  xl: "22px",
  pill: "999px",
} as const;

const spacing = {
  "0": "0",
  "1": "0.25rem",
  "2": "0.5rem",
  "3": "0.75rem",
  "4": "1rem",
  "5": "1.25rem",
  "6": "1.5rem",
  "7": "2rem",
  "8": "2.5rem",
  "9": "3rem",
  "10": "4rem",
  "11": "5rem",
  "12": "6rem",
} as const;

const motion = {
  durFast: "0.18s",
  dur: "0.28s",
  durSlow: "0.6s",
  easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
  easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
  spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
} as const;

const breakpoints = {
  mobile: "768px",
  tablet: "1024px",
  desktop: "1200px",
} as const;

const typography = {
  fontFamily:
    "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  fontDisplay:
    "Pretendard, -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
  fontMono:
    "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  fluidH1: "clamp(2.2rem, 4.8vw + 0.4rem, 3.6rem)",
  fluidH2: "clamp(1.45rem, 2.2vw + 0.4rem, 2rem)",
  fluidH3: "clamp(1.05rem, 1.2vw + 0.4rem, 1.25rem)",
  fluidBody: "clamp(0.95rem, 0.25vw + 0.9rem, 1.05rem)",
} as const;

const lightColors: ColorTokens = {
  background: "#f5f7fa",
  backgroundElevated: "#ffffff",
  surface: "#ffffff",
  surfaceMuted: "#eef1f5",
  text: "#1c2430",
  textSecondary: "#4d5b6b",
  textMuted: "#7a8796",
  primary: "#0d7377",
  primarySoft: "rgba(13, 115, 119, 0.12)",
  accent: "#0d7377",
  success: "#0d7377",
  danger: "#b42318",
  border: "#e4e9ef",
  borderStrong: "#c9d3de",
  ring: "rgba(13, 115, 119, 0.32)",
  selection: "rgba(13, 115, 119, 0.16)",
  scrollTrack: "transparent",
  scrollThumb: "rgba(13, 115, 119, 0.32)",
  gradient: "linear-gradient(135deg, #0d7377 0%, #14919b 100%)",
  gradientSecondary: "linear-gradient(135deg, #0d7377 0%, #14919b 100%)",
  meshA: "rgba(13, 115, 119, 0.08)",
  meshB: "rgba(28, 36, 48, 0.04)",
  meshC: "rgba(13, 115, 119, 0.04)",
};

const darkColors: ColorTokens = {
  background: "#111318",
  backgroundElevated: "#181a20",
  surface: "#1a1c22",
  surfaceMuted: "#22252c",
  text: "#f3f4f6",
  textSecondary: "#c4c8d0",
  textMuted: "#8b909a",
  primary: "#5eead4",
  primarySoft: "rgba(94, 234, 212, 0.14)",
  accent: "#2dd4bf",
  success: "#2dd4bf",
  danger: "#f07167",
  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.16)",
  ring: "rgba(45, 212, 191, 0.40)",
  selection: "rgba(45, 212, 191, 0.22)",
  scrollTrack: "transparent",
  scrollThumb: "rgba(243, 244, 246, 0.28)",
  gradient: "linear-gradient(135deg, #2dd4bf 0%, #5eead4 100%)",
  gradientSecondary: "linear-gradient(135deg, #2dd4bf 0%, #5eead4 100%)",
  meshA: "rgba(255, 255, 255, 0.04)",
  meshB: "rgba(45, 212, 191, 0.08)",
  meshC: "rgba(0, 0, 0, 0.2)",
};

const lightShadows: ShadowTokens = {
  card: "0 1px 2px rgba(28, 36, 48, 0.04), 0 10px 28px rgba(28, 36, 48, 0.06)",
  cardHover:
    "0 2px 8px rgba(28, 36, 48, 0.06), 0 16px 32px rgba(13, 115, 119, 0.10)",
  button: "0 8px 18px rgba(13, 115, 119, 0.22)",
  glow: "0 0 0 3px rgba(13, 115, 119, 0.20)",
};

const darkShadows: ShadowTokens = {
  card: "0 1px 2px rgba(0, 0, 0, 0.25), 0 10px 28px rgba(0, 0, 0, 0.28)",
  cardHover:
    "0 4px 12px rgba(0, 0, 0, 0.35), 0 16px 32px rgba(45, 212, 191, 0.12)",
  button: "0 8px 18px rgba(45, 212, 191, 0.22)",
  glow: "0 0 0 3px rgba(45, 212, 191, 0.28)",
};

export type ThemeMode = "light" | "dark";

export type AppTheme = {
  mode: ThemeMode;
  colors: ColorTokens;
  shadows: ShadowTokens;
  radii: typeof radii;
  spacing: typeof spacing;
  motion: typeof motion;
  breakpoints: typeof breakpoints;
  typography: typeof typography;
};

export const lightTheme: AppTheme = {
  mode: "light",
  colors: lightColors,
  shadows: lightShadows,
  radii,
  spacing,
  motion,
  breakpoints,
  typography,
};

export const darkTheme: AppTheme = {
  mode: "dark",
  colors: darkColors,
  shadows: darkShadows,
  radii,
  spacing,
  motion,
  breakpoints,
  typography,
};

export function themeToCssVars(theme: AppTheme): Record<string, string> {
  const c = theme.colors;
  const s = theme.shadows;
  return {
    "--color-bg": c.background,
    "--color-bg-elevated": c.backgroundElevated,
    "--color-surface": c.surface,
    "--color-surface-muted": c.surfaceMuted,
    "--color-text": c.text,
    "--color-text-secondary": c.textSecondary,
    "--color-text-muted": c.textMuted,
    "--color-primary": c.primary,
    "--color-primary-soft": c.primarySoft,
    "--color-accent": c.accent,
    "--color-success": c.success,
    "--color-danger": c.danger,
    "--color-border": c.border,
    "--color-border-strong": c.borderStrong,
    "--color-ring": c.ring,
    "--color-selection": c.selection,
    "--color-scroll-track": c.scrollTrack,
    "--color-scroll-thumb": c.scrollThumb,
    "--gradient-primary": c.gradient,
    "--gradient-secondary": c.gradientSecondary,
    "--mesh-a": c.meshA,
    "--mesh-b": c.meshB,
    "--mesh-c": c.meshC,
    "--shadow-card": s.card,
    "--shadow-card-hover": s.cardHover,
    "--shadow-button": s.button,
    "--shadow-glow": s.glow,
    "--ease-out": theme.motion.easeOut,
    "--ease-in-out": theme.motion.easeInOut,
    "--ease-spring": theme.motion.spring,
    "--dur-fast": theme.motion.durFast,
    "--dur": theme.motion.dur,
    "--dur-slow": theme.motion.durSlow,
  };
}
