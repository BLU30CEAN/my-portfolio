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
    { icon: Users, title: "주요 프로젝트", value: "5개" },
    { icon: TrendingUp, title: "실시간 지연시간", value: "500ms 이하" },
    { icon: Zap, title: "상태 관리", value: "Zustand · Jotai" },
    { icon: Award, title: "배포/문서화", value: "Docker · Swagger" },
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
        "React & TypeScript",
        "React Native",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Shadcn UI",
        "Zustand / Jotai",
      ],
    },
    {
      category: "Backend & AI",
      icon: Brain,
      skills: [
        "Java & Spring Boot",
        "Python & FastAPI",
        "REST API",
        "Swagger 문서화",
        "OpenAI / Claude / ElevenLabs",
      ],
    },
    {
      category: "Mobile & Realtime",
      icon: Smartphone,
      skills: [
        "Android Native",
        "WebView Bridge",
        "WebRTC / WebSocket",
        "오디오 스트리밍",
        "상태 동기화",
      ],
    },
    {
      category: "Database & Cloud",
      icon: Zap,
      skills: [
        "PostgreSQL / MySQL / Redis",
        "AWS EC2 / S3",
        "Docker",
        "Jenkins",
        "Git / Linux",
      ],
    },
  ];

  const timeline = [
    {
      date: "2025.04 - 2026.04",
      title: "유탑소프트 · Convergence Lab",
      description: "AI 기반 LLM 서비스의 Android Native 앱 기능 구현, React(TypeScript) WebView 개발, 실시간 스트리밍과 전역 상태 관리를 담당",
    },
    {
      date: "2024.04 - 2025.04",
      title: "앱인앱 주문채널 신규 구축",
      description: "React(TypeScript) 프론트엔드, Spring Boot·PostgreSQL API, AWS EC2·Jenkins 배포 자동화, JWT 인증, PG/OKPOS 연동",
    },
    {
      date: "2023.01 - 2024.03",
      title: "홈페이지 및 모바일 앱 운영",
      description: "고객/임직원/협력사 3종 앱 유지보수, 기능 추가, JIRA·Confluence 요청 대응, 365일 운영 대응",
    },
    {
      date: "2022.08 - 2022.12",
      title: "SAP U4A ERP QA 모듈 구축",
      description: "ABAP, SAP HANA Cloud 기반 ERP QA 모듈 개발과 보안 규율이 엄격한 환경에서의 협업 경험",
    },
    {
      date: "2021.05 - 2022.04",
      title: "결제 앱 솔루션 개발",
      description: "Java, JSP, Android 네이티브 앱과 NICE PG/VAN 결제 연동 구현",
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
            5년간의 실무 경험을 바탕으로 AI 서비스, 모바일 브리지, 결제/주문 시스템까지
            폭넓게 다뤄온 개발자입니다. 현재는 유탑소프트에서 AI 기반 LLM 서비스의
            Android Native 앱 기능 구현과 React(TypeScript) WebView 개발을 주도하고 있습니다.
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
                <ProjectTitle>AI 인터랙티브 아바타 플랫폼</ProjectTitle>
                <ProjectPeriod>2025.04 - 2026.04</ProjectPeriod>
              </ProjectInfo>
            </ProjectHeader>

            <ProjectDescription>
              OpenAI Whisper(STT) → GPT-4o-mini/Claude 3.5 → ElevenLabs TTS → LiveAvatar 립싱크로
              이어지는 엔드투엔드 AI 파이프라인을 설계·구현했습니다. WebRTC 기반 실시간 스트리밍과
              WebSocket 오디오 전송, 예외 처리와 재시도 전략까지 포함해 운영 안정성을 높였습니다.
            </ProjectDescription>

            <TechStack>
              <TechTag>OpenAI</TechTag>
              <TechTag>ElevenLabs</TechTag>
              <TechTag>LiveKit</TechTag>
              <TechTag>WebRTC</TechTag>
              <TechTag>WebSocket</TechTag>
              <TechTag>React Native</TechTag>
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
