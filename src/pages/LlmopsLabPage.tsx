import React, { useMemo, useState } from "react";
import styled from "styled-components";
import { GitBranch, ShieldAlert, Table2, Users } from "lucide-react";
import Section from "../components/layout/Section";
import SectionTitle from "../components/ui/SectionTitle";
import FlowCanvasDemo from "../components/llmops-lab/FlowCanvasDemo";
import BatchEvalDemo from "../components/llmops-lab/BatchEvalDemo";
import CoachTour from "../components/llmops-lab/CoachTour";
import {
  FLOW_NODES,
  RBAC_ROLES,
  type RbacRoleId,
} from "../data/llmopsLab";
import { useToast } from "../components/ui/Toast";

const Layout = styled.div`
  display: grid;
  grid-template-columns: minmax(180px, 0.85fr) minmax(0, 1.7fr) minmax(200px, 1fr);
  gap: 0.9rem;
  align-items: stretch;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const Pane = styled.section`
  min-height: 0;
  display: flex;
  flex-direction: column;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  background: ${(p) => p.theme.colors.surface};
  overflow: hidden;
`;

const Head = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.65rem 0.8rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  font-size: 0.78rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.textSecondary};
`;

const Body = styled.div`
  min-height: 0;
  flex: 1;
  overflow-y: auto;
  padding: 0.75rem;
`;

const RoleBtn = styled.button<{ $on: boolean }>`
  display: block;
  width: 100%;
  text-align: left;
  margin-bottom: 0.45rem;
  padding: 0.65rem 0.7rem;
  border-radius: 10px;
  cursor: pointer;
  font: inherit;
  border: 1px solid
    ${(p) => (p.$on ? p.theme.colors.primary : p.theme.colors.border)};
  background: ${(p) =>
    p.$on ? p.theme.colors.primarySoft : p.theme.colors.backgroundElevated};
  color: ${(p) => p.theme.colors.text};

  small {
    display: block;
    margin-top: 0.2rem;
    color: ${(p) => p.theme.colors.textMuted};
    font-size: 0.75rem;
    line-height: 1.45;
  }
`;

const Empty = styled.p`
  margin: 0;
  padding: 1rem 0.2rem;
  color: ${(p) => p.theme.colors.textMuted};
  font-size: 0.88rem;
  line-height: 1.6;
`;

const Toggle = styled.button<{ $on: boolean }>`
  margin-top: 0.75rem;
  width: 100%;
  padding: 0.55rem 0.7rem;
  border-radius: 10px;
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  border: 1px solid
    ${(p) => (p.$on ? p.theme.colors.danger : p.theme.colors.border)};
  background: ${(p) => p.theme.colors.backgroundElevated};
  color: ${(p) => (p.$on ? p.theme.colors.danger : p.theme.colors.text)};
`;

const Chip = styled.span`
  display: inline-block;
  margin-right: 0.35rem;
  margin-bottom: 0.35rem;
  padding: 0.2rem 0.5rem;
  border-radius: 999px;
  font-size: 0.72rem;
  font-weight: 700;
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
`;

const BatchWrap = styled.div`
  margin-top: 1.1rem;
`;

const LlmopsLabPage: React.FC = () => {
  const toast = useToast();
  const [roleId, setRoleId] = useState<RbacRoleId>("platform");
  const [selectedId, setSelectedId] = useState("start");
  const [blocked, setBlocked] = useState(false);

  const role = useMemo(
    () => RBAC_ROLES.find((r) => r.id === roleId) ?? RBAC_ROLES[0],
    [roleId],
  );
  const node = FLOW_NODES.find((n) => n.id === selectedId) ?? FLOW_NODES[0];

  const onBlock = () => {
    if (!role.can.guardrail) return;
    const next = !blocked;
    setBlocked(next);
    toast.info(
      next
        ? "입력 가드레일 차단. LLM, RAG, 출력 가드레일을 건너뜁니다."
        : "가드레일 통과. 하위 블록이 다시 실행됩니다.",
    );
  };

  return (
    <Section id="llmops-lab" dotCount={8} dotSeed={5} glow>
      <CoachTour />
      <SectionTitle
        eyebrow="LLMOps Lab"
        title="모두의 경찰관에서 만든 실행 경로"
        subtitle="가드레일을 켜면 하위 LLM이 멈춥니다. 역할을 바꾸면 배치가 숨습니다. 운영에서 한 판단을 데모 데이터로 재현합니다. 운영 API는 연결하지 않습니다."
      />

      <Layout>
        <Pane data-coach-id="rbac">
          <Head>
            <Users size={14} /> RBAC 프리셋
          </Head>
          <Body>
            {RBAC_ROLES.map((r) => (
              <RoleBtn
                key={r.id}
                type="button"
                $on={roleId === r.id}
                onClick={() => setRoleId(r.id)}
                aria-pressed={roleId === r.id}
              >
                {r.label}
                <small>{r.hint}</small>
              </RoleBtn>
            ))}
            <div style={{ marginTop: "0.75rem" }}>
              <Chip>flow {role.can.flow ? "허용" : "숨김"}</Chip>
              <Chip>guardrail {role.can.guardrail ? "허용" : "숨김"}</Chip>
              <Chip>batch {role.can.batch ? "허용" : "숨김"}</Chip>
              <Chip>catalog {role.can.catalog ? "허용" : "숨김"}</Chip>
            </div>
          </Body>
        </Pane>

        <Pane>
          <Head>
            <GitBranch size={14} /> 에이전트 플로우
          </Head>
          <Body>
            <FlowCanvasDemo
              selectedId={selectedId}
              blocked={blocked}
              onSelect={setSelectedId}
            />
          </Body>
        </Pane>

        <Pane data-coach-id="inspector">
          <Head>
            <ShieldAlert size={14} /> Inspector
          </Head>
          <Body>
            <strong>{node.label}</strong>
            <p
              style={{
                margin: "0.45rem 0 0",
                fontSize: "0.88rem",
                lineHeight: 1.65,
                color: "inherit",
                opacity: 0.82,
              }}
            >
              {node.summary}
            </p>
            {role.can.guardrail ? (
              node.kind === "guardrail" && node.id === "gin" ? (
                <Toggle type="button" $on={blocked} onClick={onBlock}>
                  {blocked ? "차단 해제 (통과)" : "입력 가드레일 차단"}
                </Toggle>
              ) : blocked ? (
                <Empty>입력 가드레일이 하위 실행을 건너뛰는 상태입니다.</Empty>
              ) : (
                <Empty>입력 가드레일 노드를 고르면 차단을 시험할 수 있습니다.</Empty>
              )
            ) : (
              <Empty>이 역할은 가드레일 설정을 바꿀 수 없습니다.</Empty>
            )}
            {!role.can.catalog && (
              <Empty>모델 카탈로그 변경은 플랫폼 관리자만 봅니다.</Empty>
            )}
          </Body>
        </Pane>
      </Layout>

      <BatchWrap>
        <Head as="div" style={{ border: "none", paddingLeft: 0 }}>
          <Table2 size={14} /> 배치 평가
        </Head>
        {role.can.batch ? (
          <BatchEvalDemo />
        ) : (
          <Empty>이 역할은 배치 평가에 접근할 수 없습니다. 운영자 이상으로 바꿔 보세요.</Empty>
        )}
      </BatchWrap>
    </Section>
  );
};

export default LlmopsLabPage;
