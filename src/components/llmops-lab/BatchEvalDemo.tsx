import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { BATCH_HEADERS, BATCH_ROWS } from "../../data/llmopsLab";

const Shell = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 0;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  background: ${(p) => p.theme.colors.surface};
  overflow: hidden;
`;

const Filter = styled.div`
  flex-shrink: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: end;
  padding: 0.75rem 0.85rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 0.72rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.textMuted};
`;

const Select = styled.select`
  min-width: 140px;
  padding: 0.4rem 0.5rem;
  border-radius: 8px;
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.backgroundElevated};
  color: ${(p) => p.theme.colors.text};
  font: inherit;
`;

const Rate = styled.div`
  margin-left: auto;
  font-size: 0.85rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.text};
`;

const Scroll = styled.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  max-height: 240px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 0.8rem;

  th,
  td {
    padding: 0.55rem 0.7rem;
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

const Pass = styled.span<{ $ok: boolean }>`
  color: ${(p) => (p.$ok ? p.theme.colors.success : p.theme.colors.danger)};
  font-weight: 700;
`;

const BatchEvalDemo: React.FC = () => {
  const [qCol, setQCol] = useState<(typeof BATCH_HEADERS)[number]>("question");
  const [aCol, setACol] = useState<(typeof BATCH_HEADERS)[number]>(
    "expected_output",
  );

  const passRate = useMemo(() => {
    const ok = BATCH_ROWS.filter((r) => r.pass).length;
    return Math.round((ok / BATCH_ROWS.length) * 100);
  }, []);

  const cell = (row: (typeof BATCH_ROWS)[number], col: string) => {
    if (col === "question") return row.question;
    if (col === "expected_output") return row.expected;
    if (col === "model_output") return row.output;
    return row.pass ? "pass" : "fail";
  };

  return (
    <Shell data-coach-id="batch">
      <Filter>
        <Field>
          Q 컬럼
          <Select
            value={qCol}
            onChange={(e) =>
              setQCol(e.target.value as (typeof BATCH_HEADERS)[number])
            }
            aria-label="질문 컬럼"
          >
            {BATCH_HEADERS.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </Select>
        </Field>
        <Field>
          A 컬럼
          <Select
            value={aCol}
            onChange={(e) =>
              setACol(e.target.value as (typeof BATCH_HEADERS)[number])
            }
            aria-label="정답 컬럼"
          >
            {BATCH_HEADERS.map((h) => (
              <option key={h} value={h}>
                {h}
              </option>
            ))}
          </Select>
        </Field>
        <Rate aria-live="polite">pass rate {passRate}%</Rate>
      </Filter>
      <Scroll>
        <Table>
          <thead>
            <tr>
              <th>id</th>
              <th>{qCol}</th>
              <th>{aCol}</th>
              <th>결과</th>
            </tr>
          </thead>
          <tbody>
            {BATCH_ROWS.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{cell(row, qCol)}</td>
                <td>{cell(row, aCol)}</td>
                <td>
                  <Pass $ok={row.pass}>{row.pass ? "pass" : "fail"}</Pass>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Scroll>
    </Shell>
  );
};

export default BatchEvalDemo;
