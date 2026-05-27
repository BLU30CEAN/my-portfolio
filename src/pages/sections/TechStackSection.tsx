import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import techStackCategoriesData from "../../data/techStackCategories.json";

type TechEntry = { name: string; image: string };
type CategoryRow = {
  category: string;
  technologies: readonly TechEntry[];
};

const CATEGORIES: readonly CategoryRow[] =
  techStackCategoriesData as readonly CategoryRow[];

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const Category = styled.div``;

const CatHeader = styled(motion.h3)`
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: ${(p) => p.theme.colors.textMuted};
  margin: 0 0 1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;

  &::before {
    content: "";
    width: 22px;
    height: 2px;
    background: ${(p) => p.theme.colors.gradient};
    border-radius: 2px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(108px, 1fr));
  gap: 0.85rem;

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
    gap: 0.7rem;
  }
`;

const Tile = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  padding: 1rem 0.65rem;
  background: ${(p) => p.theme.colors.surface};
  border-radius: ${(p) => p.theme.radii.md};
  border: 1px solid ${(p) => p.theme.colors.border};
  min-height: 92px;
  cursor: default;
  transition: transform ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut},
    border-color ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut},
    box-shadow ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut};

  &:hover {
    transform: translateY(-3px);
    border-color: ${(p) => p.theme.colors.primary};
    box-shadow: ${(p) => p.theme.shadows.cardHover};
  }

  &:hover .tip {
    opacity: 1;
    transform: translate(-50%, -6px);
  }
`;

const IconBox = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(p) => p.theme.colors.border};

  img {
    width: 28px;
    height: 28px;
    object-fit: contain;
  }
`;

const TileName = styled.div`
  font-size: 0.78rem;
  font-weight: 600;
  color: ${(p) => p.theme.colors.text};
  text-align: center;
  letter-spacing: -0.01em;
`;

const Tip = styled.span`
  position: absolute;
  bottom: 100%;
  left: 50%;
  transform: translate(-50%, 0);
  opacity: 0;
  pointer-events: none;
  background: ${(p) => p.theme.colors.text};
  color: ${(p) => p.theme.colors.background};
  padding: 0.3rem 0.55rem;
  border-radius: 6px;
  font-size: 0.7rem;
  font-weight: 600;
  white-space: nowrap;
  transition: opacity ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut},
    transform ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut};
`;

const Fallback = styled.span`
  font-size: 0.6rem;
  font-weight: 800;
  letter-spacing: -0.06em;
  text-align: center;
  color: ${(p) => p.theme.colors.primary};
  padding: 0 2px;
  word-break: break-word;
`;

function SafeImg({ src, name }: { src: string; name: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return <Fallback>{name.slice(0, 4)}</Fallback>;
  return (
    <img
      src={src}
      alt=""
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}

const TechStackSection: React.FC = () => {
  return (
    <Section id="tech" dotCount={8} dotSeed={3} fullHeight glow>
      <SectionTitle
        eyebrow="Stack"
        title="운용 단계까지 검증된 도구들"
        subtitle="각 도구는 실제 제품에서 트래픽·장애·배포 사이클을 지나본 것만 추렸습니다."
      />

      <Stack>
        {CATEGORIES.map((cat, ci) => (
          <Category key={cat.category}>
            <CatHeader
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.45, delay: ci * 0.05 }}
            >
              {cat.category}
            </CatHeader>
            <Grid>
              {cat.technologies.map((tech, ti) => (
                <Tile
                  key={tech.name}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-15%" }}
                  transition={{ duration: 0.4, delay: ci * 0.04 + ti * 0.03 }}
                >
                  <IconBox>
                    <SafeImg src={tech.image} name={tech.name} />
                  </IconBox>
                  <TileName>{tech.name}</TileName>
                  <Tip className="tip">{tech.name}</Tip>
                </Tile>
              ))}
            </Grid>
          </Category>
        ))}
      </Stack>
    </Section>
  );
};

export default TechStackSection;
