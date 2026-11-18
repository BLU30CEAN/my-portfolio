import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail } from "lucide-react";
import Section from "../../components/layout/Section";
import MagneticButton from "../../components/ui/MagneticButton";
import HitlDesk from "../../components/ui/HitlDesk";

const Grid = styled.div`
  display: grid;
  grid-template-columns: minmax(16rem, 0.72fr) minmax(0, 1.28fr);
  gap: 2rem;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.95rem;
`;

const Name = styled(motion.h1)`
  font-size: ${(p) => p.theme.typography.fluidH1};
  font-weight: 800;
  letter-spacing: -0.03em;
  line-height: 1.08;
  margin: 0;
  color: ${(p) => p.theme.colors.text};
`;

const Role = styled(motion.p)`
  margin: 0;
  font-size: clamp(1rem, 1.8vw, 1.15rem);
  color: ${(p) => p.theme.colors.textSecondary};
`;

const Description = styled(motion.p)`
  font-size: ${(p) => p.theme.typography.fluidBody};
  color: ${(p) => p.theme.colors.textSecondary};
  line-height: 1.75;
  margin: 0;
  max-width: 46ch;
`;

const Proof = styled(motion.ul)`
  list-style: none;
  margin: 0.15rem 0 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
`;

const ProofItem = styled.li`
  font-size: 0.88rem;
  line-height: 1.5;
  color: ${(p) => p.theme.colors.text};
  padding-left: 0.85rem;
  border-left: 2px solid ${(p) => p.theme.colors.primary};
`;

const Actions = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.65rem;
  align-items: center;
`;

const Socials = styled(motion.div)`
  display: flex;
  gap: 0.5rem;
`;

const Social = styled.a`
  width: 40px;
  height: 40px;
  border-radius: ${(p) => p.theme.radii.md};
  border: 1px solid ${(p) => p.theme.colors.borderStrong};
  background: ${(p) => p.theme.colors.surface};
  color: ${(p) => p.theme.colors.text};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    color: ${(p) => p.theme.colors.primary};
  }
`;

const DeskWrap = styled(motion.div)`
  min-width: 0;
`;

type Props = {
  displayName: string;
  githubUrl: string;
  email: string;
  onPrimary: () => void;
  onLab: () => void;
};

const HeroSection: React.FC<Props> = ({
  displayName,
  githubUrl,
  email,
  onPrimary,
  onLab,
}) => {
  return (
    <Section id="home" glow>
      <Grid>
        <Text>
          <Name
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            {displayName}
          </Name>
          <Role
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            FastAPI, Spring Boot
          </Role>
          <Description
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
          >
            LLM API와 에이전트 플로우를 만듭니다. 민원 콘솔은 로컬 Ollama로
            초안을 만들고, 확정은 담당자가 합니다.
          </Description>
          <Proof
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <ProofItem>
              결제 후 주문이 비던 버그: Datadog, API 로그, DB를 같은 request
              id로 맞춰 고침
            </ProofItem>
            <ProofItem>
              모두의 경찰관: vLLM 서빙, 에이전트는 DAG. 가드레일이 막으면 LLM
              API를 호출하지 않음
            </ProofItem>
          </Proof>
          <Actions
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
          >
            <MagneticButton variant="primary" onClick={onPrimary}>
              프로젝트 보기 <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton variant="ghost" strength={8} onClick={onLab}>
              실험 보기
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              strength={8}
              onClick={() => {
                window.location.href = `mailto:${email}`;
              }}
            >
              <Mail size={16} /> 이메일
            </MagneticButton>
          </Actions>
          <Socials
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Social
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github size={16} />
            </Social>
            <Social href={`mailto:${email}`} aria-label="Email">
              <Mail size={16} />
            </Social>
          </Socials>
        </Text>

        <DeskWrap
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.18, duration: 0.5 }}
        >
          <HitlDesk />
        </DeskWrap>
      </Grid>
    </Section>
  );
};

export default HeroSection;
