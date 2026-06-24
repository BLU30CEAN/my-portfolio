import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import Section from "../../components/layout/Section";
import MagneticButton from "../../components/ui/MagneticButton";
import CodeTypingDemo from "../../components/ui/CodeTypingDemo";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.1rem;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

const Eyebrow = styled(motion.span)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: ${(p) => p.theme.colors.primarySoft};
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  color: ${(p) => p.theme.colors.primary};
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  width: max-content;
`;

const Pulse = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${(p) => p.theme.colors.success};
  box-shadow: 0 0 0 4px ${(p) => p.theme.colors.success}30;
`;

const Name = styled(motion.h1)`
  font-size: ${(p) => p.theme.typography.fluidH1};
  font-weight: 800;
  letter-spacing: -0.045em;
  line-height: 1.02;
  margin: 0;
  background: ${(p) => p.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const Role = styled(motion.h2)`
  font-size: clamp(1.1rem, 2.3vw, 1.65rem);
  color: ${(p) => p.theme.colors.text};
  margin: 0;
  font-weight: 600;
  letter-spacing: -0.01em;

  span.muted {
    color: ${(p) => p.theme.colors.textMuted};
    font-weight: 500;
  }
`;

const SkillChips = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Chip = styled.span`
  font-size: 0.72rem;
  font-weight: 700;
  padding: 0.3rem 0.65rem;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.textSecondary};
  letter-spacing: -0.01em;
`;

const Description = styled(motion.p)`
  font-size: ${(p) => p.theme.typography.fluidBody};
  color: ${(p) => p.theme.colors.textSecondary};
  line-height: 1.78;
  margin: 0.75rem 0 1.25rem;
  max-width: 56ch;

  @media (max-width: 960px) {
    margin-left: auto;
    margin-right: auto;
  }

  strong {
    color: ${(p) => p.theme.colors.text};
    font-weight: 700;
  }
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  align-items: center;

  @media (max-width: 960px) {
    justify-content: center;
  }
`;

const Socials = styled(motion.div)`
  display: flex;
  gap: 0.7rem;
  margin-top: 0.5rem;
`;

const Social = styled.a`
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  transition: all ${(p) => p.theme.motion.durFast}
    ${(p) => p.theme.motion.easeOut};

  &:hover {
    color: #fff;
    background: ${(p) => p.theme.colors.gradient};
    border-color: transparent;
    transform: translateY(-2px);
    text-decoration: none;
  }
`;

/* ---- 프로필 카드 (커서 추적 그라디언트 + 3D tilt) ---- */

const ProfileWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProfileCard = styled(motion.div)`
  position: relative;
  width: min(360px, 80vw);
  aspect-ratio: 1 / 1;
  border-radius: ${(p) => p.theme.radii.xl};
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  box-shadow: ${(p) => p.theme.shadows.cardHover};
  overflow: hidden;
  perspective: 800px;
`;

const ProfileGlow = styled(motion.div)`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    140px 140px at var(--mx, 50%) var(--my, 50%),
    ${(p) => p.theme.colors.primary}55,
    transparent 70%
  );
  mix-blend-mode: screen;
  z-index: 2;
`;

const ProfileInner = styled(motion.div)`
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: inherit;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const ProfileInitials = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${(p) => p.theme.colors.gradient};
  color: #fff;
  font-size: clamp(3.5rem, 9vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.05em;
`;

const Badge = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 3;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.4rem 0.7rem;
  border-radius: 999px;
  background: ${(p) =>
    `color-mix(in srgb, ${p.theme.colors.backgroundElevated} 80%, transparent)`};
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  backdrop-filter: blur(6px);
  color: ${(p) => p.theme.colors.text};
  font-size: 0.78rem;
  font-weight: 600;
`;

type Props = {
  displayName: string;
  githubUrl: string;
  email: string;
  onPrimary: () => void;
};

const HERO_CHIPS = [
  "Java / Spring Boot",
  "PostgreSQL / JWT",
  "NICE PG / OKPOS",
  "Python / FastAPI",
  "Datadog",
  "React / TypeScript",
];

const TECH_STACK_LINES = [
  { raw: 'const backend = ["Spring Boot", "FastAPI", "PostgreSQL", "MyBatis"];', delay: 400 },
  { raw: 'const payment = ["NICE PG", "OKPOS", "JWT", "Swagger"];', delay: 400 },
  { raw: 'const observability = ["Datadog", "GA", "GTM"];', delay: 400 },
  { raw: 'const frontend = ["React", "TypeScript", "React Native"];', delay: 400 },
  { raw: 'const testing = ["Playwright", "Jest", "Testing Library"];', delay: 400 },
  { raw: 'const ai = ["OpenAI", "LLM Orchestration", "WebRTC"];', delay: 400 },
  { raw: '// 주문/결제 E2E API부터 운영 RCA까지', delay: 0 },
];

const HeroSection: React.FC<Props> = ({
  displayName,
  githubUrl,
  email,
  onPrimary,
}) => {
  const reduced = useReducedMotion();
  const [imgFailed, setImgFailed] = useState(false);

  const initials = useMemo(() => {
    const parts = displayName.trim().split(/\s+/);
    return (
      (parts[0]?.charAt(0) ?? "?") + (parts[1]?.charAt(0) ?? "")
    ).toUpperCase();
  }, [displayName]);

  // 카드 위 마우스 추적 → 3D tilt + radial glow
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const springRX = useSpring(rx, { stiffness: 120, damping: 14 });
  const springRY = useSpring(ry, { stiffness: 120, damping: 14 });
  const rotateX = useTransform(springRX, [-1, 1], ["8deg", "-8deg"]);
  const rotateY = useTransform(springRY, [-1, 1], ["-8deg", "8deg"]);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - r.left) / r.width;
    const ny = (e.clientY - r.top) / r.height;
    rx.set(ny * 2 - 1);
    ry.set(nx * 2 - 1);
    e.currentTarget.style.setProperty("--mx", `${nx * 100}%`);
    e.currentTarget.style.setProperty("--my", `${ny * 100}%`);
  };
  const onLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <Section id="home" dotCount={18} dotSeed={1} fullHeight glow>
      <Grid>
        <Text>
          <Eyebrow
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Pulse />
            Available for hire
          </Eyebrow>

          <Name
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
          >
            {displayName}
          </Name>

          <Role
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            Full-Stack / <span className="muted">AI Service Engineer</span>
          </Role>

          <SkillChips
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.16 }}
            aria-label="핵심 기술"
          >
            {HERO_CHIPS.map((chip) => (
              <Chip key={chip}>{chip}</Chip>
            ))}
          </SkillChips>

          <Description
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
          >
            웹·모바일·AI를 한 제품 안에서 이어 붙여 온 5년 차 풀스택
            개발자입니다. 기능 구현보다{" "}
            <strong>사용자 시나리오 전체를 먼저 그리고</strong>, 해피 패스보다{" "}
            <strong>엣지 케이스</strong>를 먼저 챙기는 편입니다. 그 습관이 B2C
            주문 <strong>2,800+/day</strong>, AI p95 <strong>1.2s</strong>, E2E{" "}
            <strong>9/9</strong> 같은 숫자로 이어졌습니다. 잘 모르는 영역은
            추정하지 않고, <strong>문서를 읽고 작은 실험</strong>부터
            진행합니다.
          </Description>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
            style={{ marginTop: '1.25rem' }}
          >
            <CodeTypingDemo
              title="my-tech-stack.ts"
              typingSpeed={45}
              startDelay={1200}
              lines={TECH_STACK_LINES}
            />
          </motion.div>

          <Actions
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <MagneticButton variant="primary" onClick={onPrimary}>
              프로젝트 보기 <ArrowRight size={18} />
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              onClick={() => {
                window.location.href = `mailto:${email}`;
              }}
            >
              <Mail size={16} /> 이메일 보내기
            </MagneticButton>
          </Actions>

          <Socials
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Social href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} />
            </Social>
            <Social href={`mailto:${email}`} aria-label="Email">
              <Mail size={18} />
            </Social>
          </Socials>
        </Text>

        <ProfileWrap>
          <ProfileCard
            initial={{ opacity: 0, scale: 0.92, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            onMouseMove={onMove}
            onMouseLeave={onLeave}
            style={{ transformStyle: "preserve-3d" }}
          >
            <ProfileGlow />
            <ProfileInner style={{ rotateX, rotateY }}>
              {!imgFailed ? (
                <ProfileImg
                  src="/profile.jpg"
                  alt={`${displayName} 프로필`}
                  onError={() => setImgFailed(true)}
                />
              ) : (
                <ProfileInitials>{initials || "EJ"}</ProfileInitials>
              )}
            </ProfileInner>
            <Badge>
              <Pulse /> 운영까지 함께하는 풀스택
            </Badge>
          </ProfileCard>
        </ProfileWrap>
      </Grid>
    </Section>
  );
};

export default HeroSection;
