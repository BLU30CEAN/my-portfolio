import React, { useMemo, useState } from "react";
import styled from "styled-components";
import LabCrumb from "../../components/nav/LabCrumb";
import {
  ORDER_STATUS_KO,
  ORDER_TICKETS,
  RCA_BY_REQUEST,
  type OrderTicket,
} from "../../data/orderDesk";
import { useToast } from "../../components/ui/Toast";

const Skin = styled.div`
  --pos-bg: #f4eee4;
  --pos-surface: #fffaf3;
  --pos-ink: #2a2118;
  --pos-muted: #7a6a58;
  --pos-line: #e4d5c4;
  --pos-accent: #c45c26;
  --pos-danger: #9b1c1c;
  --pos-ok: #3f6b3a;
  min-height: calc(100vh - 72px);
  padding: 1.5rem 1.25rem 3rem;
  background: var(--pos-bg);
  color: var(--pos-ink);
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const CrumbSlot = styled.div`
  button {
    color: var(--pos-muted);
  }
`;

const Title = styled.h1`
  margin: 0 0 0.35rem;
  font-size: clamp(1.45rem, 2.4vw, 1.85rem);
  letter-spacing: -0.03em;
`;

const Lead = styled.p`
  margin: 0 0 1.25rem;
  max-width: 62ch;
  font-size: 0.95rem;
  line-height: 1.65;
  color: var(--pos-muted);
`;

const Desk = styled.div`
  display: grid;
  grid-template-columns: minmax(14rem, 0.8fr) minmax(0, 1.2fr) minmax(16rem, 1fr);
  min-height: min(32rem, calc(100dvh - 14rem));
  border: 1px solid var(--pos-line);
  background: var(--pos-surface);
  overflow: hidden;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Col = styled.section`
  display: flex;
  flex-direction: column;
  min-width: 0;
  min-height: 0;
  border-right: 1px solid var(--pos-line);

  &:last-child {
    border-right: none;
  }
`;

const Head = styled.div`
  flex-shrink: 0;
  padding: 0.65rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 800;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-bottom: 1px solid var(--pos-line);
`;

const Filter = styled.div`
  flex-shrink: 0;
  padding: 0.55rem 0.7rem;
  border-bottom: 1px solid var(--pos-line);
`;

const Search = styled.input`
  width: 100%;
  box-sizing: border-box;
  padding: 0.4rem 0.5rem;
  border: 1px solid var(--pos-line);
  background: #fff;
  color: var(--pos-ink);
  font: inherit;
  font-size: 0.85rem;
`;

const Scroll = styled.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
`;

const RowBtn = styled.button<{ $on: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  padding: 0.7rem 0.8rem;
  border: none;
  border-bottom: 1px solid var(--pos-line);
  background: ${(p) => (p.$on ? "rgba(196, 92, 38, 0.12)" : "transparent")};
  color: inherit;
  font: inherit;
  cursor: pointer;
`;

const Id = styled.div`
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 0.72rem;
  color: var(--pos-accent);
`;

const Body = styled.div`
  padding: 0.85rem;
  font-size: 0.9rem;
  line-height: 1.55;
`;

const Stock = styled.span<{ $zero: boolean }>`
  font-family: "JetBrains Mono", ui-monospace, monospace;
  font-size: 0.78rem;
  color: ${(p) => (p.$zero ? "var(--pos-danger)" : "var(--pos-ok)")};
`;

const Status = styled.div<{ $bad: boolean }>`
  margin: 0 0 0.75rem;
  font-weight: 800;
  color: ${(p) => (p.$bad ? "var(--pos-danger)" : "var(--pos-ok)")};
`;

const Act = styled.button`
  margin-top: 0.75rem;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--pos-accent);
  background: var(--pos-accent);
  color: #fff;
  font: inherit;
  font-size: 0.82rem;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.45;
    cursor: not-allowed;
  }
`;

const Log = styled.article`
  margin-bottom: 0.85rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid var(--pos-line);
  font-size: 0.8rem;
  line-height: 1.5;

  strong {
    display: block;
    font-size: 0.72rem;
    color: var(--pos-accent);
  }
`;

const Caption = styled.p`
  margin: 0.75rem 0 0;
  font-size: 0.78rem;
  color: var(--pos-muted);
`;

const OrderDeskPage: React.FC = () => {
  const toast = useToast();
  const [q, setQ] = useState("");
  const [id, setId] = useState(ORDER_TICKETS[0].id);
  const [fixed, setFixed] = useState<Record<string, boolean>>({});

  const list = useMemo(() => {
    const key = q.trim();
    if (!key) return ORDER_TICKETS;
    return ORDER_TICKETS.filter(
      (row) =>
        row.id.indexOf(key) >= 0 ||
        row.table.toLowerCase().indexOf(key.toLowerCase()) >= 0,
    );
  }, [q]);

  const ticket: OrderTicket =
    ORDER_TICKETS.find((row) => row.id === id) ?? ORDER_TICKETS[0];
  const rca = RCA_BY_REQUEST[ticket.requestId] || [];
  const repaired = Boolean(fixed[ticket.id]);
  const status = repaired ? "paid" : ticket.status;

  return (
    <Skin>
      <Inner>
        <CrumbSlot>
          <LabCrumb here="주문 채널" />
        </CrumbSlot>
        <Title>앱인앱 주문 데스크</Title>
        <Lead>
          결제 승인 후 주문이 비던 건을 같은 request id로 맞춘 화면입니다. PG는
          붙이지 않았습니다. 재고 0이면 라인에 표시만 합니다.
        </Lead>
        <Desk aria-label="주문 데스크">
          <Col>
            <Head>주문 큐</Head>
            <Filter>
              <Search
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="주문번호·테이블"
                aria-label="주문 검색"
              />
            </Filter>
            <Scroll className="slim-scroll" role="listbox" aria-label="주문 목록">
              {list.length === 0 ? (
                <Body>검색과 맞는 주문이 없습니다.</Body>
              ) : (
                list.map((row) => (
                  <RowBtn
                    key={row.id}
                    type="button"
                    $on={row.id === ticket.id}
                    role="option"
                    aria-selected={row.id === ticket.id}
                    onClick={() => setId(row.id)}
                  >
                    <Id>
                      {row.id} · {row.table}
                    </Id>
                    <div>
                      {ORDER_STATUS_KO[fixed[row.id] ? "paid" : row.status]}
                    </div>
                  </RowBtn>
                ))
              )}
            </Scroll>
          </Col>
          <Col>
            <Head>주문 · 재고</Head>
            <Scroll className="slim-scroll">
              <Body>
                <Status $bad={status === "paid-empty"}>
                  {ORDER_STATUS_KO[status]}
                </Status>
                <div>
                  request id{" "}
                  <Id as="span">{ticket.requestId}</Id>
                </div>
                {ticket.paidAt ? <div>결제 {ticket.paidAt}</div> : null}
                {ticket.lines.map((line) => (
                  <p key={line.sku}>
                    {line.name} × {line.qty}{" "}
                    <Stock $zero={line.stock === 0}>
                      재고 {line.stock}
                      {line.stock === 0 ? " 품절" : ""}
                    </Stock>
                  </p>
                ))}
                <Act
                  type="button"
                  disabled={status !== "paid-empty"}
                  onClick={() => {
                    setFixed((prev) => ({ ...prev, [ticket.id]: true }));
                    toast.success("주문 행을 결제 콜백과 맞춰 보정했습니다.");
                  }}
                >
                  주문 보정
                </Act>
              </Body>
            </Scroll>
          </Col>
          <Col>
            <Head>RCA · 같은 request id</Head>
            <Scroll className="slim-scroll">
              <Body>
                {rca.map((line) => (
                  <Log key={`${line.source}-${line.at}`}>
                    <strong>
                      {line.source} · {line.at}
                    </strong>
                    {line.body}
                  </Log>
                ))}
              </Body>
            </Scroll>
          </Col>
        </Desk>
        <Caption>
          Datadog, API 로그, DB를 같은 request id로 본 재현입니다. 실제 결제
          원장은 없습니다.
        </Caption>
      </Inner>
    </Skin>
  );
};

export default OrderDeskPage;
