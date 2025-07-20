import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Code,
  Database,
  Cloud,
  Server,
  GitBranch,
  Monitor,
  Zap,
  Shield,
  Globe,
  Smartphone,
} from "lucide-react";

const SkillIconsContainer = styled.section`
  padding: 6rem 2rem;
  background: ${(props) => props.theme.colors.surface};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  text-align: center;
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  text-align: center;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.2rem;
  margin-bottom: 4rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const SkillCategory = styled(motion.div)`
  text-align: center;
`;

const CategoryTitle = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 600;
`;

const IconsRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
`;

const SkillIcon = styled(motion.div)`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.background};
  border: 2px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
  transition: all 0.3s ease;
  cursor: pointer;
  position: relative;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.3);
  }

  &::before {
    content: attr(data-tooltip);
    position: absolute;
    bottom: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: ${(props) => props.theme.colors.primary};
    color: white;
    padding: 0.5rem 0.75rem;
    border-radius: 8px;
    font-size: 0.8rem;
    white-space: nowrap;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 10;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    border: 4px solid transparent;
    border-top-color: ${(props) => props.theme.colors.primary};
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  &:hover::before,
  &:hover::after {
    opacity: 1;
    visibility: visible;
  }
`;

const SkillName = styled.div`
  font-size: 0.8rem;
  margin-top: 0.5rem;
  color: ${(props) => props.theme.colors.textSecondary};
  font-weight: 500;
`;

const StatsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 4rem;
`;

const StatCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.background};
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-5px);
  }
`;

const StatNumber = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1rem;
`;

const skillData = {
  frontend: {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "React", icon: Code, color: "#61DAFB" },
      { name: "TypeScript", icon: Code, color: "#3178C6" },
      { name: "JavaScript", icon: Code, color: "#F7DF1E" },
      { name: "HTML5", icon: Globe, color: "#E34F26" },
      { name: "CSS3", icon: Globe, color: "#1572B6" },
    ],
  },
  backend: {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Java", icon: Server, color: "#ED8B00" },
      { name: "JSP", icon: Server, color: "#FF6F61" },
      { name: "REST API", icon: Server, color: "#00D4FF" },
      { name: "Spring", icon: Server, color: "#6DB33F" },
    ],
  },
  database: {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", icon: Database, color: "#4479A1" },
      { name: "PostgreSQL", icon: Database, color: "#336791" },
      { name: "Oracle", icon: Database, color: "#F80000" },
    ],
  },
  cloud: {
    title: "Cloud & DevOps",
    icon: Cloud,
    skills: [
      { name: "AWS EC2", icon: Cloud, color: "#FF9900" },
      { name: "AWS S3", icon: Cloud, color: "#FF9900" },
      { name: "Jenkins", icon: Zap, color: "#D24939" },
      { name: "Git", icon: GitBranch, color: "#F05032" },
      { name: "Linux", icon: Monitor, color: "#FCC624" },
    ],
  },
  tools: {
    title: "Tools & Monitoring",
    icon: Shield,
    skills: [
      { name: "GTM", icon: Shield, color: "#4285F4" },
      { name: "Datadog", icon: Shield, color: "#632CA6" },
      { name: "GitHub", icon: GitBranch, color: "#181717" },
      { name: "GitLab", icon: GitBranch, color: "#FC6D26" },
    ],
  },
};

const stats = [
  { number: "4+", label: "Years Experience" },
  { number: "15+", label: "Technologies" },
  { number: "10+", label: "Projects" },
  { number: "99%", label: "Success Rate" },
];

const SkillIcons: React.FC = () => {
  return (
    <SkillIconsContainer>
      <Container>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          기술 스택
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          프론트엔드부터 백엔드, 클라우드까지 다양한 기술을 활용합니다
        </SectionSubtitle>

        <SkillsGrid>
          {Object.entries(skillData).map(([key, category], index) => (
            <SkillCategory
              key={key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <CategoryTitle>{category.title}</CategoryTitle>
              <IconsRow>
                {category.skills.map((skill, skillIndex) => (
                  <SkillIcon
                    key={skill.name}
                    data-tooltip={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    style={{ color: skill.color }}
                  >
                    <skill.icon size={24} />
                  </SkillIcon>
                ))}
              </IconsRow>
            </SkillCategory>
          ))}
        </SkillsGrid>

        <StatsSection>
          {stats.map((stat, index) => (
            <StatCard
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatCard>
          ))}
        </StatsSection>
      </Container>
    </SkillIconsContainer>
  );
};

export default SkillIcons;
