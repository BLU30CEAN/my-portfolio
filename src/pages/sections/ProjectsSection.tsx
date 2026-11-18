import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, Github, Ban } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import { PROJECTS, ProjectTab } from "../../data/projects";

const TabBar = styled.div`
  display: flex;
  gap: 1.5rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  margin: 0 0 1.75rem;
`;

const TabBtn = styled.button<{ $active: boolean }>`
  position: relative;
  background: transparent;
  border: none;
  border-bottom: 2px solid
    ${(p) => (p.$active ? p.theme.colors.primary : "transparent")};
  margin-bottom: -1px;
  padding: 0.65rem 0;
  font-family: inherit;
  font-size: 0.92rem;
  font-weight: ${(p) => (p.$active ? 700 : 500)};
  color: ${(p) =>
    p.$active ? p.theme.colors.text : p.theme.colors.textMuted};
  cursor: pointer;
  transition: color ${(p) => p.theme.motion.dur}
    ${(p) => p.theme.motion.easeOut};

  &:hover {
    color: ${(p) => p.theme.colors.text};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Card = styled(motion.article)<{ $featured?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  padding: ${(p) => (p.$featured ? "1.85rem 1.7rem" : "1.4rem 1.35rem")};
  background: ${(p) => p.theme.colors.surface};
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid
    ${(p) =>
      p.$featured ? p.theme.colors.borderStrong : p.theme.colors.border};
  box-shadow: ${(p) => p.theme.shadows.card};
  grid-column: ${(p) => (p.$featured ? "1 / -1" : "auto")};
  transition: border-color ${(p) => p.theme.motion.dur}
      ${(p) => p.theme.motion.easeOut},
    transform ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut};

  &:hover {
    transform: translateY(-2px);
    border-color: ${(p) => p.theme.colors.primary};
  }
`;

const Kicker = styled.span`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.primary};
`;

const Title = styled.h3<{ $featured?: boolean }>`
  font-family: ${(p) => p.theme.typography.fontDisplay};
  font-size: ${(p) => (p.$featured ? "1.45rem" : "1.12rem")};
  font-weight: 700;
  margin: 0;
  color: ${(p) => p.theme.colors.text};
  letter-spacing: -0.03em;
`;

const Desc = styled.p`
  font-size: 0.92rem;
  line-height: 1.7;
  margin: 0;
  color: ${(p) => p.theme.colors.textSecondary};
  max-width: 72ch;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.35rem;
`;

const Tag = styled.span`
  font-family: ${(p) => p.theme.typography.fontMono};
  font-size: 0.7rem;
  padding: 0.22rem 0.5rem;
  border-radius: ${(p) => p.theme.radii.xs};
  border: 1px solid ${(p) => p.theme.colors.border};
  color: ${(p) => p.theme.colors.textSecondary};
`;

const Actions = styled.div`
  display: flex;
  gap: 0.55rem;
  flex-wrap: wrap;
  margin-top: auto;
`;

const ActionBtn = styled.a<{ $disabled?: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.5rem 0.85rem;
  font-size: 0.82rem;
  font-weight: 600;
  border-radius: ${(p) => p.theme.radii.sm};
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: transparent;
  color: ${(p) =>
    p.$disabled ? p.theme.colors.textMuted : p.theme.colors.text};
  text-decoration: none;
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(p) => (p.$disabled ? 0.55 : 1)};

  &:hover {
    ${(p) =>
      !p.$disabled &&
      `
        color: ${p.theme.colors.primary};
        border-color: ${p.theme.colors.primary};
        text-decoration: none;
      `}
  }
`;

type TabDef = { id: ProjectTab; label: string };
const TABS: TabDef[] = [
  { id: "professional", label: "실무 프로젝트" },
  { id: "personal", label: "토이 프로젝트" },
];

const ProjectsSection: React.FC = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState<ProjectTab>("professional");

  const list = useMemo(
    () => PROJECTS.filter((p) => p.tab === active),
    [active],
  );

  return (
    <Section id="projects">
      <SectionTitle
        title="프로젝트"
        subtitle="샘플은 프로젝트마다 나눴습니다. 민원 콘솔, 주문 RCA, 아바타 파이프."
      />

      <TabBar role="tablist" aria-label="프로젝트 카테고리">
        {TABS.map((t) => (
          <TabBtn
            key={t.id}
            role="tab"
            aria-selected={active === t.id}
            $active={active === t.id}
            onClick={() => setActive(t.id)}
          >
            {t.label}
          </TabBtn>
        ))}
      </TabBar>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <Grid>
            {list.map((p, i) => {
              const featured = active === "professional" && i === 0;
              return (
                <Card
                  key={p.title}
                  $featured={featured}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  {featured && <Kicker>대표 작업</Kicker>}
                  <Title $featured={featured}>{p.title}</Title>
                  <Desc>{p.description}</Desc>
                  <Tags>
                    {p.tech.map((t) => (
                      <Tag key={t}>{t}</Tag>
                    ))}
                  </Tags>
                  {p.actions && p.actions.length > 0 && (
                    <Actions>
                      {p.actions.map((a) => {
                        const disabled = a.kind === "disabled";
                        const internal = a.href.startsWith("#/");
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
                            target={
                              disabled || internal ? undefined : "_blank"
                            }
                            rel="noopener noreferrer"
                            $disabled={disabled}
                            aria-disabled={disabled}
                            onClick={(e) => {
                              if (disabled) {
                                e.preventDefault();
                                return;
                              }
                              if (internal) {
                                e.preventDefault();
                                navigate(a.href.slice(1));
                              }
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
              );
            })}
          </Grid>
        </motion.div>
      </AnimatePresence>
    </Section>
  );
};

export default ProjectsSection;
