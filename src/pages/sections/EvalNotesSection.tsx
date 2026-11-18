import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Download } from "lucide-react";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import MagneticButton from "../../components/ui/MagneticButton";
import {
  EVAL_GAPS,
  EVAL_STATS,
  HELD_OUT,
  TRAIN_ITEMS,
  downloadEvalJsonl,
} from "../../data/evalDataset";

const Kpis = styled.ul`
  list-style: none;
  margin: 0 0 1.25rem;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.75rem;

  @media (max-width: 720px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

const Kpi = styled.li`
  padding: 1rem 1.05rem 0.95rem;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  background: ${(p) => p.theme.colors.surface};
  box-shadow: ${(p) => p.theme.shadows.card};
`;

const KpiLabel = styled.div`
  font-size: 0.74rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.textMuted};
`;

const KpiValue = styled.div`
  margin-top: 0.3rem;
  font-family: ${(p) => p.theme.typography.fontDisplay};
  font-size: 1.45rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: ${(p) => p.theme.colors.text};
`;

const Split = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.35fr) minmax(16rem, 0.75fr);
  gap: 1rem;
  min-height: 0;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const Pane = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  min-width: 0;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  background: ${(p) => p.theme.colors.surface};
  box-shadow: ${(p) => p.theme.shadows.card};
  overflow: hidden;
`;

const PaneHead = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.5rem;
  padding: 0.75rem 0.9rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  font-size: 0.8rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.textSecondary};
`;

const Scroll = styled.div`
  min-height: 0;
  height: 18rem;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;

  th,
  td {
    padding: 0.55rem 0.75rem;
    border-bottom: 1px solid ${(p) => p.theme.colors.border};
    text-align: left;
    vertical-align: top;
  }

  th {
    position: sticky;
    top: 0;
    background: ${(p) => p.theme.colors.surface};
    color: ${(p) => p.theme.colors.textMuted};
    font-weight: 700;
    z-index: 1;
  }

  td {
    color: ${(p) => p.theme.colors.textSecondary};
  }
`;

const Pass = styled.span<{ $ok: boolean }>`
  font-weight: 700;
  color: ${(p) => (p.$ok ? p.theme.colors.success : p.theme.colors.danger)};
`;

const GapList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.65rem 0.85rem 0.85rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const GapItem = styled.li`
  h3 {
    margin: 0 0 0.2rem;
    font-size: 0.86rem;
    font-weight: 700;
    color: ${(p) => p.theme.colors.text};
  }

  p {
    margin: 0;
    font-size: 0.8rem;
    line-height: 1.55;
    color: ${(p) => p.theme.colors.textSecondary};
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  margin-top: 1.15rem;
`;

const HITL_KO: Record<string, string> = {
  adopt: "확정",
  edit: "수정",
  hold: "유보",
};

const EvalNotesSection: React.FC = () => {
  const navigate = useNavigate();
  const passRate = Math.round((EVAL_STATS.pass / EVAL_STATS.eval) * 100);

  return (
    <Section id="eval">
      <SectionTitle
        eyebrow="LLMOps"
        title="학습과 평가"
        subtitle="train은 HITL 확정·수정본, eval은 헤더 기준 Q/A JSONL입니다. 가드레일이 막으면 LLM을 호출하지 않은 것도 pass로 칩니다."
      />
      <Kpis>
        <Kpi>
          <KpiLabel>train</KpiLabel>
          <KpiValue>{EVAL_STATS.train}</KpiValue>
        </Kpi>
        <Kpi>
          <KpiLabel>eval</KpiLabel>
          <KpiValue>{EVAL_STATS.eval}</KpiValue>
        </Kpi>
        <Kpi>
          <KpiLabel>recorded pass</KpiLabel>
          <KpiValue>{passRate}%</KpiValue>
        </Kpi>
        <Kpi>
          <KpiLabel>HITL 수정</KpiLabel>
          <KpiValue>{EVAL_STATS.edited}</KpiValue>
        </Kpi>
      </Kpis>
      <Split>
        <Pane>
          <PaneHead>
            데이터셋
            <span>
              eval {HELD_OUT.length} · train {TRAIN_ITEMS.length}
            </span>
          </PaneHead>
          <Scroll className="slim-scroll">
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>metric</th>
                  <th>HITL</th>
                  <th>결과</th>
                </tr>
              </thead>
              <tbody>
                {HELD_OUT.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.metric}</td>
                    <td>{HITL_KO[row.hitl]}</td>
                    <td>
                      <Pass $ok={row.pass}>{row.pass ? "pass" : "fail"}</Pass>
                    </td>
                  </tr>
                ))}
                {TRAIN_ITEMS.map((row) => (
                  <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>{row.metric}</td>
                    <td>{HITL_KO[row.hitl]}</td>
                    <td>train</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Scroll>
        </Pane>
        <Pane>
          <PaneHead>다음에 쌓을 세트</PaneHead>
          <GapList>
            {EVAL_GAPS.map((gap) => (
              <GapItem key={gap.title}>
                <h3>{gap.title}</h3>
                <p>{gap.body}</p>
              </GapItem>
            ))}
          </GapList>
        </Pane>
      </Split>
      <Actions>
        <MagneticButton variant="primary" onClick={() => navigate("/llmops-lab")}>
          배치 다시 돌리기 <ArrowRight size={16} />
        </MagneticButton>
        <MagneticButton variant="ghost" strength={8} onClick={() => navigate("/journal")}>
          평가 노트
        </MagneticButton>
        <MagneticButton variant="ghost" strength={8} onClick={downloadEvalJsonl}>
          <Download size={16} /> JSONL
        </MagneticButton>
      </Actions>
    </Section>
  );
};

export default EvalNotesSection;
