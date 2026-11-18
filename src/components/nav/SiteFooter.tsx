import React from "react";
import styled from "styled-components";

const Foot = styled.footer`
  border-top: 1px solid ${(p) => p.theme.colors.border};
  padding: 1.35rem 1.5rem 2rem;
  padding-left: 1.5rem;
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;

const Brand = styled.span`
  font-family: ${(p) => p.theme.typography.fontDisplay};
  font-weight: 700;
  letter-spacing: -0.03em;
`;

const Meta = styled.span`
  font-size: 0.8rem;
  color: ${(p) => p.theme.colors.textMuted};
`;

const SiteFooter: React.FC = () => (
  <Foot>
    <Inner>
      <Brand>EJ Portfolio</Brand>
      <Meta>FastAPI, Spring Boot, LLM</Meta>
    </Inner>
  </Foot>
);

export default SiteFooter;
