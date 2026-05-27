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
  md: "14px",
  lg: "20px",
  xl: "28px",
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
    "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif",
  fontMono:
    "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, Consolas, monospace",
  fluidH1: "clamp(2.5rem, 6vw + 0.5rem, 5.5rem)",
  fluidH2: "clamp(1.85rem, 4vw + 0.4rem, 3rem)",
  fluidH3: "clamp(1.25rem, 2vw + 0.4rem, 1.65rem)",
  fluidBody: "clamp(0.95rem, 0.4vw + 0.85rem, 1.075rem)",
} as const;

const lightColors: ColorTokens = {
  background: "#f4f8fd",
  backgroundElevated: "#ffffff",
  surface: "#ffffff",
  surfaceMuted: "#eef3fa",
  text: "#0b1a2a",
  textSecondary: "#3b5168",
  textMuted: "#6a7e94",
  primary: "#0a6dd6",
  primarySoft: "rgba(10, 109, 214, 0.12)",
  accent: "#19c2ff",
  success: "#1f9d55",
  danger: "#e1473d",
  border: "#dbe6f2",
  borderStrong: "#b8cce0",
  ring: "rgba(10, 109, 214, 0.35)",
  selection: "rgba(10, 109, 214, 0.22)",
  scrollTrack: "transparent",
  scrollThumb: "rgba(10, 109, 214, 0.35)",
  gradient:
    "linear-gradient(135deg, #0a6dd6 0%, #19c2ff 55%, #6cf0ff 100%)",
  gradientSecondary:
    "linear-gradient(135deg, #ff6b6b 0%, #ff9966 100%)",
  meshA: "rgba(25, 194, 255, 0.30)",
  meshB: "rgba(10, 109, 214, 0.18)",
  meshC: "rgba(255, 105, 180, 0.12)",
};

const darkColors: ColorTokens = {
  background: "#04101f",
  backgroundElevated: "#08182a",
  surface: "#0c2238",
  surfaceMuted: "#0f2840",
  text: "#eaf3ff",
  textSecondary: "#a8c4e0",
  textMuted: "#7b96b3",
  primary: "#3cb6ff",
  primarySoft: "rgba(60, 182, 255, 0.16)",
  accent: "#7cf0ff",
  success: "#3ddc97",
  danger: "#ff6a5c",
  border: "rgba(255, 255, 255, 0.08)",
  borderStrong: "rgba(255, 255, 255, 0.18)",
  ring: "rgba(60, 182, 255, 0.45)",
  selection: "rgba(60, 182, 255, 0.30)",
  scrollTrack: "transparent",
  scrollThumb: "rgba(124, 240, 255, 0.30)",
  gradient:
    "linear-gradient(135deg, #3cb6ff 0%, #7cf0ff 60%, #b5ffea 100%)",
  gradientSecondary:
    "linear-gradient(135deg, #ff8a73 0%, #ffc371 100%)",
  meshA: "rgba(60, 182, 255, 0.32)",
  meshB: "rgba(124, 240, 255, 0.18)",
  meshC: "rgba(255, 128, 200, 0.14)",
};

const lightShadows: ShadowTokens = {
  card: "0 1px 2px rgba(11, 26, 42, 0.04), 0 8px 24px rgba(11, 26, 42, 0.06)",
  cardHover:
    "0 2px 6px rgba(11, 26, 42, 0.06), 0 16px 40px rgba(10, 109, 214, 0.12)",
  button: "0 8px 20px rgba(10, 109, 214, 0.28)",
  glow: "0 0 0 4px rgba(10, 109, 214, 0.18)",
};

const darkShadows: ShadowTokens = {
  card: "0 1px 2px rgba(0, 0, 0, 0.25), 0 8px 24px rgba(0, 0, 0, 0.35)",
  cardHover:
    "0 4px 12px rgba(0, 0, 0, 0.4), 0 18px 40px rgba(60, 182, 255, 0.18)",
  button: "0 10px 24px rgba(60, 182, 255, 0.35)",
  glow: "0 0 0 4px rgba(60, 182, 255, 0.32)",
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

/**
 * 테마 → CSS 변수 매핑.
 * <html data-theme="..."> 와 body 양쪽에 주입해 styled가 아닌 일반 CSS에서도 사용 가능하게 한다.
 */
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
