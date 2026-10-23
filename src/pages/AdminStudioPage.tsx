import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Layers, Wand2, Database } from "lucide-react";
import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import TemplatePreview from "../components/admin-studio/TemplatePreview";
import SidebarCatalogDemo from "../components/admin-studio/SidebarCatalogDemo";
import DataHubPanel from "../components/admin-studio/DataHubPanel";
import {
  ADMIN_TEMPLATES,
  WIZARD_STEPS,
  type AdminTemplateId,
} from "../data/adminTemplates";
import { useAdminWizardStore } from "../store/adminWizardStore";

const StudioTabBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
  margin-bottom: 1.75rem;
`;

const StudioTab = styled.button<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 999px;
  padding: 0.55rem 1rem;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  background: ${(p) => (p.$active ? p.theme.colors.primary : p.theme.colors.surface)};
  color: ${(p) => (p.$active ? "#fff" : p.theme.colors.text)};
`;

const Grid2 = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.25rem;
`;

const LiveDemoWrap = styled.div`
  margin-top: 1.75rem;
  padding-top: 1.5rem;
  border-top: 1px solid ${(p) => p.theme.colors.border};
`;

const WizardCard = styled.div`
  max-width: 720px;
  margin: 0 auto;
  padding: 1.5rem;
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  background: ${(p) => p.theme.colors.surface};
  box-shadow: ${(p) => p.theme.shadows.card};
`;

const Option = styled.button<{ $selected: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  margin-top: 0.5rem;
  padding: 0.75rem 0.85rem;
  border-radius: 10px;
  border: 1px solid
    ${(p) => (p.$selected ? p.theme.colors.primary : p.theme.colors.border)};
  background: ${(p) =>
    p.$selected ? p.theme.colors.primarySoft : p.theme.colors.backgroundElevated};
  cursor: pointer;
  font: inherit;
  color: ${(p) => p.theme.colors.text};
`;

const NavRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1.25rem;
  gap: 0.75rem;
`;

type StudioMode = "templates" | "wizard" | "data";

const AdminStudioPage: React.FC = () => {
  const [mode, setMode] = useState<StudioMode>("templates");
  const [pickedTemplate, setPickedTemplate] = useState<AdminTemplateId>(
    "three-column-ops",
  );

  const stepIndex = useAdminWizardStore((s) => s.stepIndex);
  const answers = useAdminWizardStore((s) => s.answers);
  const setAnswer = useAdminWizardStore((s) => s.setAnswer);
  const toggleTab = useAdminWizardStore((s) => s.toggleTab);
  const next = useAdminWizardStore((s) => s.next);
  const prev = useAdminWizardStore((s) => s.prev);
  const recommendedTemplate = useAdminWizardStore((s) => s.recommendedTemplate);

  const step = WIZARD_STEPS[stepIndex];
  const recommended = recommendedTemplate();

  const hubTabs = useMemo(() => {
    const tabs = answers.tabs.length ? answers.tabs : ["schema", "import", "browse"];
    return tabs as ("schema" | "import" | "browse" | "register" | "audit")[];
  }, [answers.tabs]);

  return (
    <Section id="admin-studio" dotCount={8} dotSeed={4} glow>
      <SectionTitle
        eyebrow="Admin Studio"
        title="관리자 페이지 실험실"
        subtitle="개인 포트폴리오용 — A/B 템플릿, 단계별 파이프라인, CSV·Excel DB 허브. FastAPI + PostgreSQL + Docker."
      />

      <StudioTabBar role="tablist" aria-label="Admin Studio modes">
        <StudioTab
          type="button"
          role="tab"
          aria-selected={mode === "templates"}
          $active={mode === "templates"}
          onClick={() => setMode("templates")}
        >
          <Layers size={16} /> 템플릿 A · B
        </StudioTab>
        <StudioTab
          type="button"
          role="tab"
          aria-selected={mode === "wizard"}
          $active={mode === "wizard"}
          onClick={() => setMode("wizard")}
        >
          <Wand2 size={16} /> 구성 파이프라인
        </StudioTab>
        <StudioTab
          type="button"
          role="tab"
          aria-selected={mode === "data"}
          $active={mode === "data"}
          onClick={() => setMode("data")}
        >
          <Database size={16} /> Data Hub
        </StudioTab>
      </StudioTabBar>

      {mode === "templates" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Grid2>
            {ADMIN_TEMPLATES.map((t) => (
              <button
                key={t.id}
                type="button"
                style={{
                  all: "unset",
                  cursor: "pointer",
                  display: "block",
                }}
                onClick={() => setPickedTemplate(t.id)}
              >
                <TemplatePreview
                  template={t}
                  active={pickedTemplate === t.id}
                />
              </button>
            ))}
          </Grid2>
          {pickedTemplate === "sidebar-catalog" ? (
            <LiveDemoWrap>
              <SidebarCatalogDemo />
            </LiveDemoWrap>
          ) : null}
        </motion.div>
      )}

      {mode === "wizard" && step && (
        <WizardCard>
          <p style={{ margin: 0, fontWeight: 700 }}>{step.title}</p>
          <p style={{ margin: "0.35rem 0 0", color: "var(--text-muted,#666)" }}>
            {step.question}
          </p>
          {"multi" in step && step.multi
            ? step.options.map((opt) => (
                <Option
                  key={opt.id}
                  type="button"
                  $selected={answers.tabs.includes(opt.id)}
                  onClick={() => toggleTab(opt.id)}
                >
                  <strong>{opt.label}</strong>
                  <div style={{ fontSize: "0.82rem", opacity: 0.85 }}>
                    {opt.hint}
                  </div>
                </Option>
              ))
            : step.options.map((opt) => {
                const key =
                  step.id === "purpose"
                    ? "purpose"
                    : step.id === "layout"
                      ? "layout"
                      : "data";
                const selected =
                  answers[key as keyof typeof answers] === opt.id;
                return (
                  <Option
                    key={opt.id}
                    type="button"
                    $selected={selected}
                    onClick={() =>
                      setAnswer(key as "purpose" | "layout" | "data", opt.id)
                    }
                  >
                    <strong>{opt.label}</strong>
                    <div style={{ fontSize: "0.82rem", opacity: 0.85 }}>
                      {opt.hint}
                    </div>
                  </Option>
                );
              })}
          <NavRow>
            <StudioTab
              type="button"
              $active={false}
              onClick={prev}
              disabled={stepIndex === 0}
            >
              이전
            </StudioTab>
            {stepIndex < WIZARD_STEPS.length - 1 ? (
              <StudioTab type="button" $active onClick={next}>
                다음
              </StudioTab>
            ) : (
              <StudioTab
                type="button"
                $active
                onClick={() => {
                  setPickedTemplate(recommended);
                  setMode("data");
                }}
              >
                {recommended === "sidebar-catalog" ? "B" : "A"} + Data Hub 적용
              </StudioTab>
            )}
          </NavRow>
          {stepIndex === WIZARD_STEPS.length - 1 && (
            <p style={{ marginTop: "1rem", fontSize: "0.88rem" }}>
              추천 템플릿:{" "}
              <strong>
                {recommended === "sidebar-catalog"
                  ? "B · 사이드바 카탈로그"
                  : "A · 3분할 운영"}
              </strong>{" "}
              · 활성 탭: {hubTabs.join(", ")}
            </p>
          )}
        </WizardCard>
      )}

      {mode === "data" && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <p style={{ textAlign: "center", fontSize: "0.88rem", marginBottom: "1rem" }}>
            선택 template:{" "}
            <strong>
              {pickedTemplate === "sidebar-catalog" ? "B" : "A"}
            </strong>{" "}
            — Docker: <code>docker compose up -d --build</code> 후 API{" "}
            <code>:8000</code>
          </p>
          <DataHubPanel
            enabledTabs={hubTabs}
            layoutHint={pickedTemplate}
          />
        </motion.div>
      )}
    </Section>
  );
};

export default AdminStudioPage;
