import React from "react";
import styled from "styled-components";
import type { AdminTemplate, AdminTemplateId } from "../../data/adminTemplates";

const Frame = styled.div<{ $variant: AdminTemplateId }>`
  display: grid;
  gap: 6px;
  min-height: 220px;
  padding: 10px;
  border-radius: ${(p) => p.theme.radii.md};
  background: ${(p) => p.theme.colors.backgroundElevated};
  border: 1px solid ${(p) => p.theme.colors.border};
  grid-template-columns: ${(p) =>
    p.$variant === "three-column-ops" ? "0.9fr 1.4fr 1fr" : "0.75fr 1.5fr 1fr"};
`;

const Pane = styled.div<{ $tone?: "accent" | "muted" }>`
  border-radius: 8px;
  border: 1px dashed
    ${(p) =>
      p.$tone === "accent"
        ? p.theme.colors.primary
        : p.theme.colors.borderStrong};
  background: ${(p) =>
    p.$tone === "accent"
      ? p.theme.colors.primarySoft
      : p.theme.colors.surface};
  min-height: 180px;
  padding: 8px;
  font-size: 0.72rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

const KnowHowList = styled.ul`
  margin: 0.75rem 0 0;
  padding-left: 1.1rem;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 0.86rem;
  line-height: 1.55;
`;

const Card = styled.article`
  padding: 1.25rem;
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  box-shadow: ${(p) => p.theme.shadows.card};
`;

const Title = styled.h3`
  margin: 0 0 0.35rem;
  font-size: 1.05rem;
  color: ${(p) => p.theme.colors.text};
`;

const Sub = styled.p`
  margin: 0 0 0.85rem;
  font-size: 0.88rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

type Props = { template: AdminTemplate; active?: boolean };

const TemplatePreview: React.FC<Props> = ({ template, active }) => {
  const v = template.id;
  return (
    <Card style={{ outline: active ? "2px solid var(--bc-cobalt, #0040ff)" : undefined }}>
      <Title>{template.label}</Title>
      <Sub>{template.subtitle}</Sub>
      <Frame $variant={v} aria-hidden>
        {v === "three-column-ops" ? (
          <>
            <Pane>큐 · 필터 고정</Pane>
            <Pane $tone="accent">상세 · AI 결과 · HITL</Pane>
            <Pane>근거 · 설정 · 액션</Pane>
          </>
        ) : (
          <>
            <Pane>RBAC 메뉴</Pane>
            <Pane $tone="accent">카탈로그 · 테이블</Pane>
            <Pane>Inspector · 배포</Pane>
          </>
        )}
      </Frame>
      {template.knowHow.map((block) => (
        <div key={block.title}>
          <Sub style={{ marginTop: "1rem", marginBottom: "0.35rem" }}>
            <strong style={{ color: "inherit" }}>{block.title}</strong>
          </Sub>
          <KnowHowList>
            {block.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </KnowHowList>
        </div>
      ))}
    </Card>
  );
};

export default TemplatePreview;
