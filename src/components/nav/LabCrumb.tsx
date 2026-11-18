import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Bar = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  margin-bottom: 1.25rem;
  padding: 0;
  border: none;
  background: transparent;
  font-family: ${(p) => p.theme.typography.fontMono};
  font-size: 0.75rem;
  color: ${(p) => p.theme.colors.textMuted};
  cursor: pointer;

  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

const Here = styled.span`
  color: ${(p) => p.theme.colors.text};
`;

const LabCrumb: React.FC<{ here: string }> = ({ here }) => {
  const navigate = useNavigate();
  return (
    <Bar type="button" onClick={() => navigate("/lab")}>
      실험 <span aria-hidden>/</span> <Here>{here}</Here>
    </Bar>
  );
};

export default LabCrumb;
