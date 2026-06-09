import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { Briefcase, Gamepad2, ExternalLink, Github, Ban } from "lucide-react";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import { PROJECTS, ProjectTab } from "../../data/projects";
import ProjectMetricsMini from "../../components/ui/ProjectMetricsMini";

const TabBar = styled.div`
  display: inline-flex;
  position: relative;
  padding: 0.35rem;
  border-radius: 999px;
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  gap: 0.25rem;
  margin: 0 auto 2.5rem;
`;

const TabBarWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const TabBtn = styled.button<{ $active: boolean }>`
  position: relative;
  z-index: 1;
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  background: transparent;
  border: none;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: 600;
  color: ${(p) =>
    p.$active ? "#fff" : p.theme.colors.textSecondary};
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  cursor: pointer;
  transition: color ${(p) => p.theme.motion.dur}
    ${(p) => p.theme.motion.easeOut};
`;

const TabIndicator = styled(motion.span)`
  position: absolute;
  inset: 4px auto 4px 4px;
  width: var(--w, 0);
  border-radius: 999px;
  background: ${(p) => p.theme.colors.gradient};
  z-index: 0;
  box-shadow: ${(p) => p.theme.shadows.button};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.25rem;
`;

const Card = styled(motion.article)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1.65rem;
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  box-shadow: ${(p) => p.theme.shadows.card};
  overflow: hidden;
  transition: border-color ${(p) => p.theme.motion.dur}
      ${(p) => p.theme.motion.easeOut},
    box-shadow ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut},
    transform ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      transparent 50%,
      ${(p) => p.theme.colors.primarySoft} 100%
    );
    opacity: 0;
    transition: opacity ${(p) => p.theme.motion.dur}
      ${(p) => p.theme.motion.easeOut};
    pointer-events: none;
  }

  &:hover {
    transform: translateY(-4px);
    border-color: ${(p) => p.theme.colors.primary};
    box-shadow: ${(p) => p.theme.shadows.cardHover};
  }
  &:hover::before {
    opacity: 1;
  }
`;

const Title = styled.h3`
  font-size: 1.15rem;
  font-weight: 700;
  margin: 0;
  color: ${(p) => p.theme.colors.text};
  letter-spacing: -0.02em;
  position: relative;
  z-index: 1;
`;

const Desc = styled.p`
  font-size: 0.92rem;
  line-height: 1.7;
  margin: 0;
  color: ${(p) => p.theme.colors.textSecondary};
  position: relative;
  z-index: 1;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
  position: relative;
  z-index: 1;
`;

const Tag = styled.span`
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.25rem 0.55rem;
  border-radius: 6px;
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
`;

const Actions = styled.div`
  display: flex;
  gap: 0.6rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
`;

const ActionBtn = styled.a<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.55rem 0.95rem;
  border-radius: ${(p) => p.theme.radii.sm};
  font-size: 0.85rem;
  font-weight: 600;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: transparent;
  color: ${(p) =>
    p.$disabled ? p.theme.colors.textMuted : p.theme.colors.text};
  text-decoration: none;
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(p) => (p.$disabled ? 0.55 : 1)};
  transition: all ${(p) => p.theme.motion.durFast}
    ${(p) => p.theme.motion.easeOut};

  &:hover {
    ${(p) =>
      !p.$disabled &&
      `
        color: #fff;
        background: ${p.theme.colors.gradient};
        border-color: transparent;
        text-decoration: none;
      `}
  }
`;

type TabDef = { id: ProjectTab; label: string; icon: React.ReactNode };
const TABS: TabDef[] = [
  { id: "professional", label: "실무 프로젝트", icon: <Briefcase size={16} /> },
  { id: "personal", label: "토이 프로젝트", icon: <Gamepad2 size={16} /> },
];

const ProjectsSection: React.FC = () => {
  const [active, setActive] = useState<ProjectTab>("professional");

  const list = useMemo(
    () => PROJECTS.filter((p) => p.tab === active),
    [active],
  );

  return (
    <Section id="projects" dotCount={8} dotSeed={4} fullHeight glow>
      <SectionTitle
        eyebrow="Projects"
        title="실서비스에서 검증된 작업들"
        subtitle="React/TypeScript 프론트부터 Java·Python 백엔드, DB, Datadog 관측까지 — 설계부터 배포·모니터링까지 직접 맡아 본 프로젝트입니다."
      />

      <TabBarWrap>
        <TabBar role="tablist" aria-label="프로젝트 카테고리">
          <TabIndicator
            layout
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
            style={{
              left: active === "professional" ? 4 : "calc(50% + 2px)",
              right: active === "professional" ? "calc(50% + 2px)" : 4,
              top: 4,
              bottom: 4,
              width: "auto",
            }}
          />
          {TABS.map((t) => (
            <TabBtn
              key={t.id}
              role="tab"
              aria-selected={active === t.id}
              $active={active === t.id}
              onClick={() => setActive(t.id)}
            >
              {t.icon}
              {t.label}
            </TabBtn>
          ))}
        </TabBar>
      </TabBarWrap>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Grid>
            {list.map((p, i) => (
              <Card
                key={p.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Title>{p.title}</Title>
                <Desc>{p.description}</Desc>
                <Tags>
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </Tags>
                {p.metrics && <ProjectMetricsMini metrics={p.metrics} />}
                {p.actions && p.actions.length > 0 && (
                  <Actions>
                    {p.actions.map((a) => {
                      const disabled = a.kind === "disabled";
                      const isGithub = a.href.includes("github.com");
                      const icon = disabled ? (
                        <Ban size={14} />
                      ) : isGithub ? (
                        <Github size={14} />
                      ) : (
                        <ExternalLink size={14} />
                      );
                      return (
                        <ActionBtn
                          key={a.label}
                          href={disabled ? undefined : a.href}
                          target={disabled ? undefined : "_blank"}
                          rel="noopener noreferrer"
                          $disabled={disabled}
                          aria-disabled={disabled}
                          onClick={(e) => {
                            if (disabled) e.preventDefault();
                          }}
                        >
                          {icon}
                          {a.label}
                        </ActionBtn>
                      );
                    })}
                  </Actions>
                )}
              </Card>
            ))}
          </Grid>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default ProjectsSection;
