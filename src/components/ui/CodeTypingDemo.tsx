import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useTheme } from "../../contexts/ThemeContext";

const Terminal = styled(motion.div)`
  font-family: "Fira Code", "Consolas", "Monaco", monospace;
  font-size: clamp(0.8rem, 1.6vw, 0.92rem);
  background: ${(p) =>
    p.theme.mode === "light"
      ? `color-mix(in srgb, ${p.theme.colors.surfaceMuted} 88%, ${p.theme.colors.text} 4%)`
      : `linear-gradient(
    135deg,
    ${p.theme.colors.surface} 0%,
    ${`color-mix(in srgb, ${p.theme.colors.surface} 95%, ${p.theme.colors.primary})`} 100%
  )`};
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  border-radius: ${(p) => p.theme.radii.lg};
  padding: 1rem 1.25rem;
  position: relative;
  overflow: hidden;
  box-shadow: ${(p) => p.theme.shadows.card};
  min-height: 160px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 32px;
    background: ${(p) => `color-mix(in srgb, ${p.theme.colors.text} 5%, transparent)`};
    border-bottom: 1px solid ${(p) => p.theme.colors.border};
  }
`;

const Dots = styled.div`
  position: absolute;
  top: 10px;
  left: 12px;
  display: flex;
  gap: 6px;
  z-index: 2;

  span {
    width: 11px;
    height: 11px;
    border-radius: 50%;

    &:nth-child(1) {
      background: #ff5f57;
    }
    &:nth-child(2) {
      background: #febc2e;
    }
    &:nth-child(3) {
      background: #28c840;
    }
  }
`;

const Title = styled.div`
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 0.7rem;
  color: ${(p) => p.theme.colors.textMuted};
  font-weight: 600;
  z-index: 2;
`;

const CodeContent = styled.div`
  margin-top: 40px;
  line-height: 1.7;
  position: relative;
`;

const Line = styled.div<{ $visible: boolean }>`
  opacity: ${(p) => (p.$visible ? 1 : 0)};
  transform: translateX(${(p) => (p.$visible ? "0" : "-8px")});
  transition: opacity 0.3s ease, transform 0.3s ease;
  margin-bottom: 0.35rem;
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
`;

const Prompt = styled.span`
  flex-shrink: 0;
  color: ${(p) => p.theme.colors.success};
  user-select: none;
  line-height: 1.7;
`;

const CodeText = styled.span`
  flex: 1;
  min-width: 0;
  word-break: break-word;
  white-space: pre-wrap;
  color: ${(p) => p.theme.colors.textSecondary};
`;

const Keyword = styled.span`
  color: ${(p) => p.theme.colors.primary};
  font-weight: 700;
`;

const Plain = styled.span`
  color: ${(p) => p.theme.colors.textSecondary};
`;

const TechSpan = styled.span<{ $color: string }>`
  color: ${(p) => p.$color};
  font-weight: 600;
`;

const StringLit = styled.span`
  color: ${(p) => p.theme.colors.textMuted};
`;

const Comment = styled.span`
  color: ${(p) => p.theme.colors.textMuted};
  font-style: italic;
`;

const CursorBlink = styled.span<{ $show: boolean }>`
  display: ${(p) => (p.$show ? "inline-block" : "none")};
  width: 8px;
  height: 1em;
  background: ${(p) => p.theme.colors.primary};
  margin-left: 2px;
  vertical-align: text-bottom;
  animation: blink 1s infinite;

  @keyframes blink {
    0%,
    50% {
      opacity: 1;
    }
    51%,
    100% {
      opacity: 0;
    }
  }
`;

interface CodeLine {
  raw: string;
  delay?: number;
}

interface Props {
  title?: string;
  lines: CodeLine[];
  typingSpeed?: number;
  startDelay?: number;
}

type TokenKind = "keyword" | "tech" | "string" | "comment" | "plain";

interface Token {
  kind: TokenKind;
  value: string;
  techColor?: string;
}

/** 라이트/다크 각각 대비 확보한 브랜드 톤 */
const TECH_PALETTE: Record<string, { light: string; dark: string }> = {
  React: { light: "#0a7ea4", dark: "#61dafb" },
  TypeScript: { light: "#1f6fbf", dark: "#79beff" },
  "Next.js": { light: "#1a2332", dark: "#e2e8f0" },
  "Spring Boot": { light: "#4d8c3a", dark: "#77dd66" },
  FastAPI: { light: "#0d9488", dark: "#5eead4" },
  PostgreSQL: { light: "#2b6cb0", dark: "#7eb6e8" },
  OpenAI: { light: "#0d8f6f", dark: "#74eaca" },
  "LLM Orchestration": { light: "#6d28d9", dark: "#c4b5fd" },
  WebRTC: { light: "#c2410c", dark: "#fdba74" },
  AWS: { light: "#b45309", dark: "#fbbf24" },
  Docker: { light: "#1d6fd4", dark: "#7cc4ff" },
  Jenkins: { light: "#b91c1c", dark: "#fca5a5" },
  Datadog: { light: "#5b21b6", dark: "#c4b5fd" },
};

const KEYWORDS = new Set([
  "const",
  "let",
  "var",
  "function",
  "return",
  "import",
  "export",
  "from",
  "async",
  "await",
  "class",
  "interface",
  "type",
]);

function tokenize(code: string, isDark: boolean): Token[] {
  const tokens: Token[] = [];
  let i = 0;

  while (i < code.length) {
    if (code.startsWith("//", i)) {
      tokens.push({ kind: "comment", value: code.slice(i) });
      break;
    }

    const ch = code[i];
    if (ch === '"' || ch === "'") {
      let j = i + 1;
      while (j < code.length && code[j] !== ch) j++;
      const literal = code.slice(i, j + 1);
      const inner = code.slice(i + 1, j);
      const palette = TECH_PALETTE[inner];

      if (palette) {
        tokens.push({
          kind: "tech",
          value: literal,
          techColor: isDark ? palette.dark : palette.light,
        });
      } else {
        tokens.push({ kind: "string", value: literal });
      }
      i = j + 1;
      continue;
    }

    if (/[a-zA-Z_$]/.test(ch)) {
      let j = i;
      while (j < code.length && /[\w$]/.test(code[j])) j++;
      const word = code.slice(i, j);
      tokens.push({
        kind: KEYWORDS.has(word) ? "keyword" : "plain",
        value: word,
      });
      i = j;
      continue;
    }

    tokens.push({ kind: "plain", value: ch });
    i++;
  }

  return tokens;
}

function renderTokens(tokens: Token[]): React.ReactNode {
  return tokens.map((t, idx) => {
    switch (t.kind) {
      case "keyword":
        return <Keyword key={idx}>{t.value}</Keyword>;
      case "tech":
        return (
          <TechSpan key={idx} $color={t.techColor ?? "inherit"}>
            {t.value}
          </TechSpan>
        );
      case "string":
        return <StringLit key={idx}>{t.value}</StringLit>;
      case "comment":
        return <Comment key={idx}>{t.value}</Comment>;
      default:
        return <Plain key={idx}>{t.value}</Plain>;
    }
  });
}

const CodeTypingDemo: React.FC<Props> = ({
  title = "skill-showcase.ts",
  lines,
  typingSpeed = 60,
  startDelay = 600,
}) => {
  const { isDark } = useTheme();
  const linesRef = useRef(lines);
  linesRef.current = lines;

  const [charCounts, setCharCounts] = useState<number[]>(() =>
    lines.map(() => 0),
  );
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const source = linesRef.current;
    setCharCounts(source.map(() => 0));
    setCurrentLine(0);
    setShowCursor(true);

    let cancelled = false;

    const schedule = (fn: () => void, ms: number) => {
      timeoutRef.current = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const typeLine = (lineIndex: number, delay: number) => {
      schedule(() => {
        setCurrentLine(lineIndex);
        const raw = source[lineIndex]?.raw ?? "";
        let count = 0;

        const typeChar = () => {
          if (cancelled) return;

          count += 1;
          setCharCounts((prev) => {
            const next = [...prev];
            next[lineIndex] = count;
            return next;
          });

          if (count < raw.length) {
            schedule(typeChar, typingSpeed);
          } else {
            const nextLine = lineIndex + 1;
            if (nextLine >= source.length) {
              setShowCursor(false);
              return;
            }
            setCurrentLine(nextLine);
            const nextDelay = source[lineIndex]?.delay ?? 300;
            typeLine(nextLine, nextDelay);
          }
        };

        typeChar();
      }, delay);
    };

    typeLine(0, startDelay);

    return () => {
      cancelled = true;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [lines, typingSpeed, startDelay]);

  return (
    <Terminal
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Dots>
        <span />
        <span />
        <span />
      </Dots>
      <Title>{title}</Title>

      <CodeContent>
        {lines.map((line, index) => {
          const count = charCounts[index] ?? 0;
          const visible = count > 0;
          const slice = line.raw.slice(0, count);
          const isCurrent = showCursor && currentLine === index;
          const isDone = count >= line.raw.length;

          return (
            <Line key={`${index}-${line.raw}`} $visible={visible}>
              <Prompt aria-hidden>→</Prompt>
              <CodeText>
                {isDone
                  ? renderTokens(tokenize(line.raw, isDark))
                  : slice}
                {isCurrent && <CursorBlink $show />}
              </CodeText>
            </Line>
          );
        })}
      </CodeContent>
    </Terminal>
  );
};

export default CodeTypingDemo;
