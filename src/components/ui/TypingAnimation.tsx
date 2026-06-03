import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { animate, stagger, text, createScope, type Scope } from "animejs";

const TypingWrap = styled.div`
  font-family: "Fira Code", "Consolas", monospace;
  font-size: clamp(0.85rem, 1.8vw, 1rem);
  color: ${(p) => p.theme.colors.textSecondary};
  line-height: 1.65;
  padding: 1.25rem 1.5rem;
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  position: relative;
  overflow: hidden;
  min-height: 140px;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: ${(p) => p.theme.colors.gradient};
    opacity: 0.6;
  }
`;

const CodeLine = styled.div<{ $delay?: number }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  opacity: 0;
  
  .keyword {
    color: ${(p) => p.theme.colors.primary};
    font-weight: 600;
  }
  
  .string {
    color: #50fa7b;
  }
  
  .variable {
    color: #8be9fd;
  }
  
  .comment {
    color: ${(p) => p.theme.colors.textMuted};
    font-style: italic;
  }
`;

const Cursor = styled.span`
  display: inline-block;
  width: 8px;
  height: 18px;
  background: ${(p) => p.theme.colors.primary};
  animation: blink 1s infinite;
  margin-left: 2px;
  vertical-align: middle;

  @keyframes blink {
    0%, 49% { opacity: 1; }
    50%, 100% { opacity: 0; }
  }
`;

interface Props {
  /** 타이핑할 코드 라인 배열 */
  lines: Array<{
    text: string;
    delay?: number;
  }>;
  /** 전체 시작 딜레이 (ms) */
  startDelay?: number;
  /** 한 글자당 타이핑 속도 (ms) */
  typingSpeed?: number;
}

/**
 * 코드 타이핑 애니메이션 컴포넌트
 * anime.js v4의 text 모듈을 활용해 실시간 코드 작성하는 느낌 재현
 */
const TypingAnimation: React.FC<Props> = ({
  lines,
  startDelay = 800,
  typingSpeed = 50,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (!rootRef.current) return;

    let scope: Scope | null = null;
    scope = createScope({ root: rootRef.current }).add((self) => {
      const lineElements = rootRef.current!.querySelectorAll<HTMLElement>("[data-code-line]");
      
      let cumulativeDelay = startDelay;

      lineElements.forEach((el, index) => {
        const lineText = lines[index]?.text || "";
        const lineDelay = lines[index]?.delay || 0;
        
        // 라인 페이드인
        animate(el, {
          opacity: 1,
          duration: 200,
          delay: cumulativeDelay,
        });

        // 타이핑 효과 (scrambleText 대신 직접 구현)
        const charSpans = el.querySelectorAll<HTMLSpanElement>("[data-char]");
        charSpans.forEach((char, charIndex) => {
          animate(char, {
            opacity: [0, 1],
            duration: 100,
            delay: cumulativeDelay + 200 + charIndex * typingSpeed,
          });
        });

        cumulativeDelay += 200 + lineText.length * typingSpeed + lineDelay;
      });

      // 모든 타이핑 완료 후 커서 숨김
      setTimeout(() => {
        setShowCursor(false);
      }, cumulativeDelay + 500);
    });

    return () => {
      scope?.revert();
    };
  }, [lines, startDelay, typingSpeed]);

  const parseCodeLine = (line: string) => {
    // 간단한 syntax highlighting
    return line
      .replace(/\b(const|let|var|function|return|import|export|from|async|await)\b/g, '<span class="keyword">$1</span>')
      .replace(/"([^"]+)"|'([^']+)'/g, '<span class="string">"$1$2"</span>')
      .replace(/\b([a-zA-Z_][a-zA-Z0-9_]*)\s*=/g, '<span class="variable">$1</span> =')
      .replace(/\/\/(.+)$/g, '<span class="comment">//$1</span>');
  };

  return (
    <TypingWrap ref={rootRef}>
      {lines.map((line, index) => {
        const parsed = parseCodeLine(line.text);
        return (
          <CodeLine key={index} data-code-line>
            {parsed.split('').map((char, charIndex) => {
              // HTML 태그는 그대로 렌더링
              if (char === '<' || parsed.substring(charIndex).startsWith('<span')) {
                const endIndex = parsed.indexOf('>', charIndex);
                const tag = parsed.substring(charIndex, endIndex + 1);
                const isClosing = tag.startsWith('</');
                
                if (!isClosing) {
                  // Opening tag
                  const className = tag.match(/class="([^"]+)"/)?.[1];
                  const contentEnd = parsed.indexOf('</span>', charIndex);
                  const content = parsed.substring(endIndex + 1, contentEnd);
                  
                  return (
                    <span key={charIndex} className={className}>
                      {content.split('').map((c, ci) => (
                        <span key={ci} data-char style={{ opacity: 0 }}>{c}</span>
                      ))}
                    </span>
                  );
                }
                return null;
              }
              
              // 일반 문자
              if (!parsed.substring(0, charIndex).includes('<span') || 
                  parsed.substring(0, charIndex).split('<span').length === 
                  parsed.substring(0, charIndex).split('</span>').length) {
                return (
                  <span key={charIndex} data-char style={{ opacity: 0 }}>
                    {char}
                  </span>
                );
              }
              
              return null;
            })}
            {index === lines.length - 1 && showCursor && <Cursor />}
          </CodeLine>
        );
      })}
    </TypingWrap>
  );
};

export default TypingAnimation;
