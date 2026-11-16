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
    { icon: Zap, title: "상태/서버캐시", value: "TanStack Query, Zustand" },
    { icon: Award, title: "배포/문서화", value: "Docker, Swagger" },
  ];

  const skills = [
    {
      category: "Frontend Development",
      icon: Code,
      skills: [
        "React & TypeScript",
        "Next.js (App Router 예: word-baseball)",
        "React Native, Expo EAS",
        "Tailwind CSS, Radix(shadcn 패턴)",
        "React Flow (에이전트 플로우 캔버스)",
        "Zustand",
        "TanStack Query",
        "i18next",
      ],
    },
    {
      category: "Backend & AI",
      icon: Brain,
      skills: [
        "Java 21, Spring Boot 4, Maven",
        "MyBatis (XML Mapper), MySQL",
        "Spring Security, Batch, Quartz",
        "Python, FastAPI, LangGraph, Langfuse",
        "vLLM, RAG, MCP, RBAC",
        "OpenAI / ElevenLabs / LiveAvatar / LiveKit",
        "pydub, multipart, JWT",
      ],
    },
    {
      category: "Mobile & Realtime",
      icon: Smartphone,
      skills: [
        "React Native 0.83 / React 19",
        "LiveKit (Room, Track)",
        "WebSocket Custom Mode",
        "RN WebView",
        "Firebase (FCM), Notifee",
        "오디오 녹음, 스트리밍 패턴",
        "SSE/REST와 TanStack 동기화",
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
      date: "2026.07 - 재직중",
      title: "씨에스리  AI엔지니어링팀",
      description:
        "공공AX '모두의 경찰관'에서 Next.js 16 LLMOps 콘솔과 FastAPI 에이전트 플로우 실행 엔진을 전담 개발했습니다. React Flow DAG 캔버스, 가드레일, 배치 평가, RBAC 프리셋, Langfuse 트레이싱, RAG 모니터링, Docker/NCloud 환경 분리를 같은 저장소에서 운영 수준으로 다듬었습니다.",
    },
    {
      date: "2025.04 - 2026.06",
      title: "유탑소프트  Convergence Lab",
      description:
        "React Native 앱에서 TanStack Query, Zustand, LiveKit, LiveAvatar 세션과 WebSocket, Firebase(FCM), WebView 오디오 파이프라인을 맡았습니다. 포털 레인에서는 Spring Boot 4(Java 21), MyBatis, Batch/Quartz, Thymeleaf, FastAPI 보조 레인에서는 multipart STT와 pydub PCM 처리를 함께 다뤘습니다.",
    },
    {
      date: "2024.04 - 2025.04",
      title: "앱인앱 주문채널 신규 구축",
      description:
        "React(TypeScript) 프론트엔드와 Spring Boot, PostgreSQL API를 설계하고, AWS EC2, Jenkins 배포 자동화, JWT 인증, NICE Payments, OKPOS 결제 연동을 직접 구현했습니다.",
    },
    {
      date: "2023.01 - 2024.03",
      title: "홈페이지 및 모바일 앱 운영",
      description:
        "고객, 임직원, 협력사 3종 앱을 유지보수하며 기능 개선과 JIRA, Confluence 요청에 대응했고, 서비스 중단 없는 운영 안정성을 함께 책임졌습니다.",
    },
    {
      date: "2022.08 - 2022.12",
      title: "SAP U4A ERP QA 모듈 구축",
      description:
        "ABAP과 SAP HANA Cloud 기반의 ERP QA 모듈을 개발하며, 보안 규율이 엄격한 환경에서의 협업 경험을 쌓았습니다.",
    },
    {
      date: "2021.05 - 2022.04",
      title: "결제 앱 솔루션 개발",
      description:
        "Java, JSP, Android 네이티브 앱을 기반으로 NICE PG, VAN 결제 연동을 구현했습니다.",
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
            FastAPI, Spring Boot로 생성형 AI와 주문/결제를 고객 환경에서 돌린
            백엔드 개발자입니다. 장애가 나면 로그와 DB를 같은 키로 맞추고,
            온프레에서는 추론 서빙과 에이전트 조합을 나눠 다음 구축이 같은
            런북을 타게 만듭니다.
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
                <Code size={28} />
              </ProjectIcon>
              <ProjectInfo>
                <ProjectTitle>모두의 경찰관 LLMOps 플랫폼</ProjectTitle>
                <ProjectPeriod>2026.07 - 재직중</ProjectPeriod>
              </ProjectInfo>
            </ProjectHeader>

            <ProjectDescription>
              온프레미스 전제. 추론은 vLLM, 에이전트는 DAG. 가드레일 차단 시
              하위 LLM 미호출. FastAPI 실행 엔진, RAG, 배치 평가, Docker 환경
              분리, 설치 런북을 직접 짰습니다. LLMOps 랩에서 같은 판단을
              재현합니다.
            </ProjectDescription>

            <TechStack>
              <TechTag>Next.js 16</TechTag>
              <TechTag>React Flow</TechTag>
              <TechTag>FastAPI</TechTag>
              <TechTag>LangGraph</TechTag>
              <TechTag>Langfuse</TechTag>
              <TechTag>vLLM</TechTag>
              <TechTag>RAG</TechTag>
              <TechTag>RBAC</TechTag>
            </TechStack>
          </ProjectCard>

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
                <ProjectTitle>
                  AI 인터랙티브 메타휴먼 아바타 플랫폼
                </ProjectTitle>
                <ProjectPeriod>2025.04 - 2026.06</ProjectPeriod>
              </ProjectInfo>
            </ProjectHeader>

            <ProjectDescription>
              HeyGen, LiveAvatar 같은 실시간 AI 아바타 API와 연동해 Whisper STT,
              GPT-4o-mini(Claude 3.5), ElevenLabs TTS, 립싱크를 잇는 파이프라인을
              설계했습니다. 채팅, 음성에 가까운 상태 흐름에 화상통화 영역의
              WebRTC, WebSocket 오디오 패턴을 얹고, 예외 처리와 재시도 전략으로
              운영 단계의 안정성을 끌어 올렸습니다.
            </ProjectDescription>

            <TechStack>
              <TechTag>HeyGen</TechTag>
              <TechTag>LiveAvatar</TechTag>
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
