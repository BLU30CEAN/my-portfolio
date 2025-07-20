import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Brain,
  Code,
  Smartphone,
  Zap,
  Users,
  TrendingUp,
  Award,
  CheckCircle,
} from "lucide-react";

const AboutContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  padding: 2rem;
`;

const AboutContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
`;

const Section = styled.section`
  margin-bottom: 6rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 1rem;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const SectionSubtitle = styled(motion.p)`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.2rem;
  margin-bottom: 3rem;
  line-height: 1.6;
`;

const ProjectCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 20px;
  padding: 3rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 3rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-5px);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
`;

const ProjectIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 15px;
  background: ${(props) => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const ProjectInfo = styled.div``;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;

const ProjectPeriod = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2rem;
  font-size: 1.1rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 2rem;
`;

const TechTag = styled.span`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const AchievementsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

const AchievementCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.background};
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const AchievementIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  flex-shrink: 0;
`;

const AchievementContent = styled.div``;

const AchievementTitle = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.25rem;
`;

const AchievementValue = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-size: 0.9rem;
`;

const SkillsSection = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const SkillCategory = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 15px;
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const SkillCategoryTitle = styled.h4`
  font-size: 1.3rem;
  margin-bottom: 1.5rem;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const Timeline = styled.div`
  position: relative;
  padding-left: 2rem;
  margin-top: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${(props) => props.theme.colors.gradient};
  }
`;

const TimelineItem = styled(motion.div)`
  position: relative;
  margin-bottom: 2rem;
  padding-left: 2rem;

  &::before {
    content: "";
    position: absolute;
    left: -0.5rem;
    top: 0.5rem;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(props) => props.theme.colors.primary};
    border: 3px solid ${(props) => props.theme.colors.background};
  }
`;

const TimelineDate = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.div`
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.25rem;
`;

const TimelineDescription = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

function AboutPage() {
  const achievements = [
    { icon: Users, title: "사용자 만족도", value: "4.5/5.0" },
    { icon: TrendingUp, title: "인터뷰 완료율", value: "90%" },
    { icon: Zap, title: "성능 향상", value: "40%" },
    { icon: Award, title: "앱 스토어 평점", value: "4.8점" },
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
        "React & TypeScript",
        "JavaScript (ES6+)",
        "HTML5 & CSS3",
        "Styled Components",
        "Responsive Design",
      ],
    },
    {
      category: "Backend & API",
      icon: Brain,
      skills: [
        "Java & JSP",
        "REST API 개발",
        "Spring Framework",
        "서버 사이드 렌더링",
        "API 설계 및 구현",
      ],
    },
    {
      category: "Database & Cloud",
      icon: Smartphone,
      skills: [
        "MySQL, PostgreSQL, Oracle",
        "AWS EC2 서버 구축",
        "AWS S3 스토리지",
        "데이터베이스 설계",
        "클라우드 인프라 관리",
      ],
    },
  ];

  const timeline = [
    {
      date: "2024.01 - 2024.12",
      title: "AI 인터뷰 플랫폼 고도화",
      description: "LLM 기반 지능형 인터뷰 시스템 구축 및 성능 최적화",
    },
    {
      date: "2023.01 - 2023.12",
      title: "AI 인터뷰 플랫폼 개발",
      description: "실시간 음성 인터뷰 시스템 및 크로스 플랫폼 솔루션 구현",
    },
    {
      date: "2022.01 - 2022.12",
      title: "웹 애플리케이션 개발",
      description: "React 기반 대규모 웹 애플리케이션 개발 및 유지보수",
    },
    {
      date: "2021.01 - 2021.12",
      title: "프론트엔드 개발 시작",
      description: "React 생태계 학습 및 첫 프로젝트 참여",
    },
  ];

  return (
    <AboutContainer>
      <AboutContent>
        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            About Me
          </SectionTitle>

          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            4년간의 프론트엔드 개발 경험을 바탕으로 AI 기술과의 융합을 통해
            혁신적인 사용자 경험을 창출하는 개발자입니다. 특히 AI 인터뷰 플랫폼
            개발을 통해 LLM 기반 실시간 음성 인터랙션 시스템을 구축한 경험이
            있습니다.
          </SectionSubtitle>
        </Section>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            주요 프로젝트
          </SectionTitle>

          <ProjectCard
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProjectHeader>
              <ProjectIcon>
                <Brain size={28} />
              </ProjectIcon>
              <ProjectInfo>
                <ProjectTitle>AI 인터뷰 플랫폼 개발</ProjectTitle>
                <ProjectPeriod>2023.01 - 2024.12</ProjectPeriod>
              </ProjectInfo>
            </ProjectHeader>

            <ProjectDescription>
              React와 TypeScript를 활용한 대규모 웹 애플리케이션을 개발했습니다.
              사용자 친화적인 인터페이스와 고성능을 제공하며, 반응형 디자인과
              모던 JavaScript를 활용하여 최적화된 사용자 경험을 구현했습니다.
            </ProjectDescription>

            <TechStack>
              <TechTag>React</TechTag>
              <TechTag>TypeScript</TechTag>
              <TechTag>JavaScript(ES6+)</TechTag>
              <TechTag>HTML5</TechTag>
              <TechTag>CSS3</TechTag>
              <TechTag>Styled Components</TechTag>
              <TechTag>Responsive Design</TechTag>
            </TechStack>

            <AchievementsGrid>
              {achievements.map((achievement, index) => (
                <AchievementCard
                  key={achievement.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <AchievementIcon>
                    <achievement.icon size={20} />
                  </AchievementIcon>
                  <AchievementContent>
                    <AchievementTitle>{achievement.title}</AchievementTitle>
                    <AchievementValue>{achievement.value}</AchievementValue>
                  </AchievementContent>
                </AchievementCard>
              ))}
            </AchievementsGrid>
          </ProjectCard>
        </Section>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            기술 스택
          </SectionTitle>

          <SkillsSection>
            {skills.map((skillCategory, index) => (
              <SkillCategory
                key={skillCategory.category}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <SkillCategoryTitle>
                  <skillCategory.icon size={20} />
                  {skillCategory.category}
                </SkillCategoryTitle>
                <SkillList>
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <SkillItem key={skill}>
                      <CheckCircle size={16} color="#00d4ff" />
                      {skill}
                    </SkillItem>
                  ))}
                </SkillList>
              </SkillCategory>
            ))}
          </SkillsSection>
        </Section>

        <Section>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            경력 타임라인
          </SectionTitle>

          <Timeline>
            {timeline.map((item, index) => (
              <TimelineItem
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineItem>
            ))}
          </Timeline>
        </Section>
      </AboutContent>
    </AboutContainer>
  );
}

export default AboutPage;
