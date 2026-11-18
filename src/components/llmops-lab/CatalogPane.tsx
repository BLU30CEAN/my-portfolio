import React from "react";
import styled from "styled-components";
import { MODEL_CATALOG, PROMPT_CATALOG } from "../../data/modelCatalog";

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  gap: 0.85rem;
  min-height: 0;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`;

const Pane = styled.div`
  min-height: 0;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  background: ${(p) => p.theme.colors.surface};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Head = styled.div`
  flex-shrink: 0;
  padding: 0.7rem 0.85rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};
  font-size: 0.78rem;
  font-weight: 700;
  color: ${(p) => p.theme.colors.textSecondary};
`;

const Scroll = styled.div`
  min-height: 0;
  max-height: 18rem;
  overflow-y: auto;
  padding: 0.7rem 0.85rem;
`;

const Row = styled.article`
  margin-bottom: 0.85rem;
  padding-bottom: 0.75rem;
  border-bottom: 1px solid ${(p) => p.theme.colors.border};

  &:last-child {
    margin-bottom: 0;
    border-bottom: none;
    padding-bottom: 0;
  }
`;

const Name = styled.h3`
  margin: 0 0 0.2rem;
  font-size: 0.92rem;
  font-weight: 700;
`;

const Meta = styled.div`
  font-family: ${(p) => p.theme.typography.fontMono};
  font-size: 0.72rem;
  color: ${(p) => p.theme.colors.primary};
  margin-bottom: 0.3rem;
`;

const Note = styled.p`
  margin: 0;
  font-size: 0.8rem;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.textSecondary};
`;

const CatalogPane: React.FC = () => {
  return (
    <Wrap>
      <Pane>
        <Head>모델 카탈로그</Head>
        <Scroll className="slim-scroll">
          {MODEL_CATALOG.map((m) => (
            <Row key={m.id}>
              <Name>{m.name}</Name>
              <Meta>
                {m.serving} · {m.role}
                {m.live ? " · 이 페이지에서 호출" : " · 운영만"}
              </Meta>
              <Note>{m.note}</Note>
            </Row>
          ))}
        </Scroll>
      </Pane>
      <Pane>
        <Head>프롬프트 · 가드레일</Head>
        <Scroll className="slim-scroll">
          {PROMPT_CATALOG.map((p) => (
            <Row key={p.id}>
              <Name>{p.name}</Name>
              <Meta>
                {p.id} · {p.version}
              </Meta>
              <Note>{p.use}</Note>
            </Row>
          ))}
        </Scroll>
      </Pane>
    </Wrap>
  );
};

export default CatalogPane;
