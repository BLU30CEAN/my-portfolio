import React, { useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";
import { AlertCircle, Code2, GitCommit } from "lucide-react";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import { useGitHubActivity } from "../../hooks/useGitHubActivity";
import {
  buildHeatmapGrid,
  formatStat,
} from "../../utils/githubContributions";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;
  align-items: start;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatsCards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StatCard = styled(motion.div)`
  padding: 1.25rem 1.4rem;
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  box-shadow: ${(p) => p.theme.shadows.card};
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: border-color ${(p) => p.theme.motion.dur}
    ${(p) => p.theme.motion.easeOut};

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
  }
`;

const StatIcon = styled.div<{ $color: string }>`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${(p) => p.$color};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  flex-shrink: 0;
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const StatValue = styled.div`
  font-size: 1.65rem;
  font-weight: 800;
  color: ${(p) => p.theme.colors.text};
  letter-spacing: -0.03em;
`;

const StatLabel = styled.div`
  font-size: 0.82rem;
  color: ${(p) => p.theme.colors.textMuted};
  font-weight: 600;
`;

const AccountList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.35rem;
`;

const AccountChip = styled.a<{ $pending?: boolean }>`
  font-size: 0.72rem;
  font-weight: 600;
  padding: 0.2rem 0.55rem;
  border-radius: ${(p) => p.theme.radii.pill};
  background: ${(p) =>
    p.$pending ? p.theme.colors.surfaceMuted : p.theme.colors.primarySoft};
  color: ${(p) =>
    p.$pending ? p.theme.colors.textMuted : p.theme.colors.primary};
  border: 1px solid
    ${(p) =>
      p.$pending ? p.theme.colors.border : "transparent"};
  text-decoration: none;

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
  }
`;

const HeatmapCard = styled(motion.div)`
  padding: 1.5rem 1.65rem;
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  box-shadow: ${(p) => p.theme.shadows.card};
`;

const HeatmapTitle = styled.h4`
  font-size: 0.88rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 0.35rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "";
    width: 18px;
    height: 2px;
    background: ${(p) => p.theme.colors.gradient};
  }
`;

const HeatmapCaption = styled.p`
  margin: 0 0 1rem;
  font-size: 0.78rem;
  color: ${(p) => p.theme.colors.textMuted};
  line-height: 1.5;
`;

const HeatmapScroll = styled.div`
  overflow-x: auto;
  margin-bottom: 1rem;
  padding-bottom: 0.25rem;
`;

const HeatmapGrid = styled.div`
  display: flex;
  gap: 3px;
  min-width: min-content;
`;

const HeatmapWeek = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const HeatmapCell = styled(motion.div)<{ $level: number; $empty: boolean }>`
  width: 11px;
  height: 11px;
  border-radius: 2px;
  visibility: ${(p) => (p.$empty ? "hidden" : "visible")};
  background: ${(p) => {
    const levels = [
      `color-mix(in srgb, ${p.theme.colors.border} 40%, transparent)`,
      "#0e4429",
      "#006d32",
      "#26a641",
      "#39d353",
    ];
    return levels[p.$level] || levels[0];
  }};
  cursor: ${(p) => (p.$empty ? "default" : "pointer")};
  transition: transform 0.15s ease;

  &:hover {
    transform: ${(p) => (p.$empty ? "none" : "scale(1.35)")};
  }
`;

const pulse = keyframes`
  0%, 100% { opacity: 0.45; }
  50% { opacity: 0.85; }
`;

const SkeletonCell = styled.div`
  width: 11px;
  height: 11px;
  border-radius: 2px;
  background: ${(p) => p.theme.colors.border};
  animation: ${pulse} 1.2s ease-in-out infinite;
`;

const Legend = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.4rem;
  font-size: 0.72rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

const LegendLabel = styled.span`
  margin-right: 0.3rem;
`;

const LegendCell = styled.div<{ $level: number }>`
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: ${(p) => {
    const levels = [
      `color-mix(in srgb, ${p.theme.colors.border} 40%, transparent)`,
      "#0e4429",
      "#006d32",
      "#26a641",
      "#39d353",
    ];
    return levels[p.$level] || levels[0];
  }};
`;

const ErrorNote = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-top: 0.75rem;
  padding: 0.65rem 0.8rem;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.danger}40;
  background: ${(p) => p.theme.colors.danger}10;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 0.8rem;
  line-height: 1.5;

  svg {
    flex-shrink: 0;
    margin-top: 0.1rem;
    color: ${(p) => p.theme.colors.danger};
  }
`;

const GitHubActivitySection: React.FC = () => {
  const { data, loading, error } = useGitHubActivity();

  const weeks = useMemo(
    () => (data ? buildHeatmapGrid(data.contributions) : []),
    [data],
  );

  const stats = data
    ? [
        {
          icon: GitCommit,
          value: formatStat(data.totalContributions),
          label: "지난 1년 기여 (합산)",
          color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
        {
          icon: Code2,
          value: String(data.totalRepos),
          label: "Public Repositories",
          color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        },
      ]
    : [
        {
          icon: GitCommit,
          value: "—",
          label: "지난 1년 기여 (합산)",
          color: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        },
        {
          icon: Code2,
          value: "—",
          label: "Public Repositories",
          color: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        },
      ];

  return (
    <Section id="github-activity" dotCount={6} dotSeed={6} glow>
      <SectionTitle
        eyebrow="GitHub"
        title="Contribution merge"
        subtitle="GitHub API runtime + GitLab static export. 365-day grid, account-level breakdown."
      />

      <Grid>
        <StatsCards>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StatIcon $color={stat.color}>
                <stat.icon size={22} />
              </StatIcon>
              <StatContent>
                <StatValue>{loading ? "…" : stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
                {index === 0 && data && (
                  <AccountList>
                    {data.perAccount.map((a) => (
                      <AccountChip
                        key={a.login}
                        href={a.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        $pending={a.pending}
                      >
                        {a.login}:{" "}
                        {a.pending ? "export 대기" : a.contributions}
                      </AccountChip>
                    ))}
                  </AccountList>
                )}
              </StatContent>
            </StatCard>
          ))}
        </StatsCards>

        <HeatmapCard
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <HeatmapTitle>지난 1년 활동 히트맵 (계정 합산)</HeatmapTitle>
          <HeatmapCaption>
            GitHub runtime API + GitLab static JSON (`npm run export:gitlab`).
            365-day merge, 4-level cells, issues/MR/push/comments.
          </HeatmapCaption>

          <HeatmapScroll>
            {loading ? (
              <HeatmapGrid>
                {Array.from({ length: 52 }).map((_, w) => (
                  <HeatmapWeek key={w}>
                    {Array.from({ length: 7 }).map((__, d) => (
                      <SkeletonCell key={d} />
                    ))}
                  </HeatmapWeek>
                ))}
              </HeatmapGrid>
            ) : (
              <HeatmapGrid>
                {weeks.map((week, weekIdx) => (
                  <HeatmapWeek key={weekIdx}>
                    {week.map((cell, dayIdx) => (
                      <HeatmapCell
                        key={`${weekIdx}-${dayIdx}`}
                        $level={cell.level}
                        $empty={cell.empty}
                        title={
                          cell.empty
                            ? undefined
                            : `${cell.date}: ${cell.count} contributions`
                        }
                        initial={{ opacity: 0, scale: 0.6 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.15,
                          delay: (weekIdx * 7 + dayIdx) * 0.0008,
                        }}
                      />
                    ))}
                  </HeatmapWeek>
                ))}
              </HeatmapGrid>
            )}
          </HeatmapScroll>

          <Legend>
            <LegendLabel>Less</LegendLabel>
            {[0, 1, 2, 3, 4].map((level) => (
              <LegendCell key={level} $level={level} />
            ))}
            <LegendLabel>More</LegendLabel>
          </Legend>

          {error && (
            <ErrorNote>
              <AlertCircle size={16} aria-hidden />
              <span>
                실시간 데이터를 불러오지 못했습니다. ({error}) 잠시 후
                새로고침해 주세요.
              </span>
            </ErrorNote>
          )}
        </HeatmapCard>
      </Grid>
    </Section>
  );
};

export default GitHubActivitySection;
