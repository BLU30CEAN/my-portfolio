import React, { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  HITL_ACTION_KO,
  readHitlRounds,
  subscribeHitlRounds,
  type HitlRound,
} from "../../lib/hitlLog";
import { EVAL_STATS } from "../../data/evalDataset";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  background: ${(p) => p.theme.colors.surface};
  overflow: hidden;
`;

const Kpis = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0.75rem 0.85rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.65rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  flex-shrink: 0;
`;

const Kpi = styled.li`
  font-size: 0.74rem;
  color: ${(p) => p.theme.colors.textMuted};

  strong {
    display: block;
    margin-top: 0.15rem;
    font-size: 1.15rem;
    color: ${(p) => p.theme.colors.text};
  }
`;

const Scroll = styled.div`
  min-height: 0;
  max-height: 16rem;
  overflow-y: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;

  th,
  td {
    padding: 0.5rem 0.75rem;
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
  }

  td {
    color: ${(p) => p.theme.colors.textSecondary};
  }
`;

const Empty = styled.p`
  margin: 0;
  padding: 1.1rem 0.85rem;
  font-size: 0.85rem;
  line-height: 1.55;
  color: ${(p) => p.theme.colors.textMuted};
`;

const MonitorPane: React.FC = () => {
  const [rows, setRows] = useState<HitlRound[]>(() => readHitlRounds());

  useEffect(() => subscribeHitlRounds(() => setRows(readHitlRounds())), []);

  const latest = useMemo(() => rows.slice().reverse().slice(0, 12), [rows]);
  const adopted = rows.filter((r) => r.action === "adopt").length;
  const skipped = rows.filter((r) => r.action === "skip").length;

  return (
    <Wrap>
      <Kpis>
        <Kpi>
          HITL 수행
          <strong>{rows.length}</strong>
        </Kpi>
        <Kpi>
          확정 / 가드레일
          <strong>
            {adopted} / {skipped}
          </strong>
        </Kpi>
        <Kpi>
          eval pass
          <strong>
            {Math.round((EVAL_STATS.pass / EVAL_STATS.eval) * 100)}%
          </strong>
        </Kpi>
      </Kpis>
      <Scroll className="slim-scroll">
        {latest.length === 0 ? (
          <Empty>
            홈 민원 콘솔에서 확정·유보·다시를 누르면 이 세션 관제에 쌓입니다.
            서버로 보내지 않습니다.
          </Empty>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>차</th>
                <th>건</th>
                <th>동작</th>
                <th>메모</th>
              </tr>
            </thead>
            <tbody>
              {latest.map((row) => (
                <tr key={`${row.at}-${row.n}-${row.caseId}`}>
                  <td>{row.n}</td>
                  <td>{row.caseId}</td>
                  <td>{HITL_ACTION_KO[row.action]}</td>
                  <td>{row.note}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </Scroll>
    </Wrap>
  );
};

export default MonitorPane;
