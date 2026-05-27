import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import { DEV_REFERENCE_ENTRIES } from "../../data/references";

const Lead = styled.p`
  text-align: center;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 0.95rem;
  line-height: 1.7;
  max-width: 56ch;
  margin: -1.25rem auto 2.5rem;

  a {
    color: ${(p) => p.theme.colors.primary};
    font-weight: 600;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(268px, 1fr));
  gap: 0.95rem;
`;

const Card = styled(motion.article)`
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  padding: 1.1rem 1.25rem;
  background: ${(p) => p.theme.colors.surface};
  border-radius: ${(p) => p.theme.radii.md};
  border: 1px solid ${(p) => p.theme.colors.border};
  box-shadow: ${(p) => p.theme.shadows.card};
  transition: border-color ${(p) => p.theme.motion.dur}
      ${(p) => p.theme.motion.easeOut},
    box-shadow ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut},
    transform ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut};

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    box-shadow: ${(p) => p.theme.shadows.cardHover};
    transform: translateY(-3px);
  }
`;

const Top = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.6rem;
`;

const Name = styled.h3`
  font-size: 0.97rem;
  font-weight: 700;
  margin: 0;
  letter-spacing: -0.02em;
  color: ${(p) => p.theme.colors.text};
`;

const Tag = styled.span`
  flex-shrink: 0;
  font-size: 0.65rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
`;

const Anchor = styled.a`
  font-size: 0.82rem;
  color: ${(p) => p.theme.colors.primary};
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  word-break: break-all;
  text-decoration: none;

  svg {
    flex-shrink: 0;
    opacity: 0.75;
  }

  &:hover {
    text-decoration: underline;
    text-underline-offset: 3px;
  }
`;

const Note = styled.p`
  margin: 0;
  font-size: 0.83rem;
  color: ${(p) => p.theme.colors.textSecondary};
  line-height: 1.55;
`;

const Footer = styled.p`
  text-align: center;
  color: ${(p) => p.theme.colors.textMuted};
  font-size: 0.85rem;
  line-height: 1.65;
  margin: 2rem auto 0;
  max-width: 56ch;

  a {
    color: ${(p) => p.theme.colors.primary};
    font-weight: 600;
  }
`;

const ReferencesSection: React.FC = () => {
  return (
    <Section id="references" dotCount={6} dotSeed={5} glow>
      <SectionTitle
        eyebrow="References"
        title="공식 문서를 길잡이로 삼습니다"
        subtitle="원문 스펙과 변경 이력이 명확한 곳만 모았습니다. 구현 근거를 남겨야 할 때 항상 먼저 펼쳐 본 문서들입니다."
      />

      <Lead>
        모은 링크는 모두 원문 스펙·가이드를 직접 관리하는 공식 배포처입니다.
        업계에 떠도는 “요약 블로그”보다, 변경 이력이 또렷한 문서를 먼저
        근거로 삼는 편이 결국 가장 빠른 길이라고 믿어 왔습니다.
      </Lead>

      <Grid>
        {DEV_REFERENCE_ENTRIES.map((ref, ri) => (
          <Card
            key={ref.href}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.42, delay: Math.min(ri * 0.025, 0.32) }}
          >
            <Top>
              <Name>{ref.title}</Name>
              <Tag>{ref.tag}</Tag>
            </Top>
            <Anchor
              href={ref.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${ref.title}, 새 탭에서 열기`}
            >
              {new URL(ref.href).hostname.replace(/^www\./, "")}{" "}
              <ExternalLink size={14} strokeWidth={2} aria-hidden />
            </Anchor>
            <Note>{ref.note}</Note>
          </Card>
        ))}
      </Grid>

      <Footer>
        이 포트폴리오 자체의 구현 근거:&nbsp; 모션은 Framer Motion 계열(
        <a
          href="https://motion.dev/docs/react-motion-component"
          target="_blank"
          rel="noopener noreferrer"
        >
          Motion for React
        </a>
        ), 스타일링은 styled-components(
        <a
          href="https://styled-components.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          공식 문서
        </a>
        )를 따랐습니다.
      </Footer>
    </Section>
  );
};

export default ReferencesSection;
