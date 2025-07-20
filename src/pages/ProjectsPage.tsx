import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Brain,
  Smartphone,
  Globe,
  Play,
  Users,
  Zap,
  TrendingUp,
  Award,
  CheckCircle,
  X,
  Gamepad2,
  Carrot,
  Video,
  ExternalLink,
  Github,
} from "lucide-react";

const ProjectsContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  padding: 2rem;
`;

const ProjectsContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 2rem;
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

const FilterButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
`;

const FilterButton = styled.button<{ active: boolean }>`
  background: ${(props) =>
    props.active ? props.theme.colors.gradient : "transparent"};
  border: 1px solid
    ${(props) => (props.active ? "transparent" : props.theme.colors.border)};
  color: ${(props) => (props.active ? "white" : props.theme.colors.text)};
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) =>
      props.active ? props.theme.colors.gradient : props.theme.colors.surface};
    transform: translateY(-2px);
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ProjectCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-10px);
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.2);
  }
`;

const ProjectImage = styled.div<{ bgColor: string }>`
  height: 200px;
  background: ${(props) => props.bgColor};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      transparent 30%,
      rgba(255, 255, 255, 0.1) 50%,
      transparent 70%
    );
    transform: translateX(-100%);
    transition: transform 0.6s ease;
  }

  ${ProjectCard}:hover &::before {
    transform: translateX(100%);
  }
`;

const ProjectIcon = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 2rem;
`;

const ProjectContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.text};
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
`;

const TechTag = styled.span`
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.primary};
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

const ProjectStats = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.9rem;
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

const ProjectLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 20px;
  background: transparent;

  &:hover {
    transform: translateX(5px);
    background: ${(props) => props.theme.colors.primary};
    color: white;
  }
`;

const LiveDemoButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.secondary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 20px;
  background: transparent;

  &:hover {
    transform: translateX(5px);
    background: ${(props) => props.theme.colors.secondary};
    color: white;
  }
`;

const Modal = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 20px;
  max-width: 800px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
`;

const ModalHeader = styled.div`
  padding: 2rem 2rem 1rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

const ModalTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
`;

const ModalSubtitle = styled.div`
  color: ${(props) => props.theme.colors.primary};
  font-weight: 500;
`;

const ModalBody = styled.div`
  padding: 2rem;
`;

const ModalDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const FeatureList = styled.div`
  margin-bottom: 2rem;
`;

const FeatureTitle = styled.h4`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const FeatureItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.textSecondary};
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.textSecondary};
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
  }
`;

function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: 1,
      title: "Find Carrot Game",
      description:
        "React와 TypeScript로 개발한 당근 찾기 게임입니다. 클릭으로 숨겨진 당근을 찾아 점수를 얻는 재미있는 웹 게임입니다.",
      category: "game",
      icon: Carrot,
      bgColor: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)",
      tech: [
        "React",
        "TypeScript",
        "Styled Components",
        "Framer Motion",
        "HTML5",
        "CSS3",
      ],
      stats: [
        { icon: Users, label: "게임 완성도", value: "95%" },
        { icon: TrendingUp, label: "사용자 만족도", value: "4.8/5.0" },
      ],
      features: [
        "반응형 게임 인터페이스",
        "애니메이션 효과",
        "점수 시스템",
        "타이머 기능",
        "게임 오버 처리",
        "다시 시작 기능",
      ],
      achievements: [
        "부드러운 애니메이션 구현",
        "모바일 터치 최적화",
        "직관적인 UI/UX",
        "성능 최적화 완료",
      ],
      githubUrl: "https://github.com/BLU30CEAN/find-carrot",
      liveUrl: "https://blu30cean.github.io/find-carrot",
      port: 3000,
    },
    {
      id: 2,
      title: "Netflix Clone",
      description:
        "Netflix의 UI/UX를 참고하여 만든 영화 스트리밍 플랫폼 클론입니다. 영화 정보 표시와 반응형 디자인을 구현했습니다.",
      category: "web",
      icon: Video,
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tech: [
        "React",
        "TypeScript",
        "Styled Components",
        "Framer Motion",
        "HTML5",
        "CSS3",
      ],
      stats: [
        { icon: Users, label: "UI 완성도", value: "90%" },
        { icon: TrendingUp, label: "반응형 지원", value: "100%" },
      ],
      features: [
        "Netflix 스타일 UI",
        "반응형 디자인",
        "영화 카드 호버 효과",
        "헤더 네비게이션",
        "푸터 정보",
        "모바일 최적화",
      ],
      achievements: [
        "Netflix UI 90% 재현",
        "모든 디바이스 지원",
        "부드러운 애니메이션",
        "사용자 친화적 인터페이스",
      ],
      githubUrl: "https://github.com/BLU30CEAN/netflix-clone",
      liveUrl: "https://blu30cean.github.io/netflix-clone",
      port: 3001,
    },
    {
      id: 3,
      title: "Rabris (Tetris Clone)",
      description:
        "클래식 테트리스 게임을 React와 TypeScript로 재구현한 프로젝트입니다. 게임 로직과 키보드 컨트롤을 완벽하게 구현했습니다.",
      category: "game",
      icon: Gamepad2,
      bgColor: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
      tech: [
        "React",
        "TypeScript",
        "Custom Hooks",
        "Game Logic",
        "Keyboard Events",
        "Styled Components",
      ],
      stats: [
        { icon: Users, label: "게임 완성도", value: "98%" },
        { icon: Award, label: "기능 구현", value: "100%" },
      ],
      features: [
        "완전한 테트리스 게임 로직",
        "키보드 컨트롤 (화살표 키)",
        "점수 시스템",
        "레벨 시스템",
        "게임 오버 처리",
        "다시 시작 기능",
      ],
      achievements: [
        "테트리스 게임 로직 100% 구현",
        "부드러운 키보드 컨트롤",
        "직관적인 게임 인터페이스",
        "성능 최적화 완료",
      ],
      githubUrl: "https://github.com/BLU30CEAN/rabris",
      liveUrl: "https://blu30cean.github.io/rabris",
      port: 3002,
    },
    {
      id: 4,
      title: "웹 애플리케이션 개발",
      description:
        "React와 TypeScript를 활용한 대규모 웹 애플리케이션으로, 사용자 친화적인 인터페이스와 고성능을 제공합니다.",
      category: "web",
      icon: Brain,
      bgColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      tech: [
        "React",
        "TypeScript",
        "JavaScript(ES6+)",
        "HTML5",
        "CSS3",
        "Styled Components",
      ],
      stats: [
        { icon: Users, label: "사용자 만족도", value: "4.5/5.0" },
        { icon: TrendingUp, label: "성능 향상", value: "40%" },
      ],
      features: [
        "반응형 웹 디자인",
        "모던 JavaScript 활용",
        "컴포넌트 기반 아키텍처",
        "성능 최적화",
        "접근성 고려",
        "크로스 브라우저 호환성",
      ],
      achievements: [
        "페이지 로딩 속도 50% 개선",
        "사용자 만족도 4.5/5.0 달성",
        "모바일 반응성 100% 지원",
        "브라우저 호환성 99% 달성",
      ],
    },
    {
      id: 2,
      title: "백엔드 API 개발",
      description:
        "Java와 Spring Framework를 활용한 RESTful API 서버 개발 및 데이터베이스 설계 프로젝트입니다.",
      category: "backend",
      icon: Globe,
      bgColor: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      tech: [
        "Java",
        "JSP",
        "Spring Framework",
        "REST API",
        "MySQL",
        "PostgreSQL",
      ],
      stats: [
        { icon: Users, label: "API 호출", value: "1M+/일" },
        { icon: Zap, label: "응답시간", value: "<200ms" },
      ],
      features: [
        "RESTful API 설계",
        "데이터베이스 최적화",
        "서버 사이드 렌더링",
        "보안 인증 시스템",
        "로깅 및 모니터링",
        "성능 튜닝",
      ],
      achievements: [
        "API 응답 속도 60% 개선",
        "데이터베이스 쿼리 최적화",
        "서버 안정성 99.9% 달성",
        "개발 생산성 40% 향상",
      ],
    },
    {
      id: 3,
      title: "클라우드 인프라 구축",
      description:
        "AWS EC2, S3를 활용한 클라우드 인프라 구축 및 DevOps 자동화 프로젝트입니다.",
      category: "cloud",
      icon: Smartphone,
      bgColor: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      tech: ["AWS EC2", "AWS S3", "Jenkins", "Git", "Linux", "MySQL"],
      stats: [
        { icon: Users, label: "서버 가동률", value: "99.9%" },
        { icon: Award, label: "배포 시간", value: "<5분" },
      ],
      features: [
        "AWS EC2 서버 구축",
        "S3 스토리지 관리",
        "Jenkins CI/CD 파이프라인",
        "Git 기반 버전 관리",
        "Linux 서버 관리",
        "모니터링 시스템",
      ],
      achievements: [
        "서버 가동률 99.9% 달성",
        "배포 시간 80% 단축",
        "인프라 비용 30% 절감",
        "운영 효율성 50% 향상",
      ],
    },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <ProjectsContainer>
      <ProjectsContent>
        <SectionTitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          프로젝트
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          프론트엔드부터 백엔드, 클라우드까지 다양한 기술 스택으로 구현한
          프로젝트들입니다
        </SectionSubtitle>

        <FilterButtons>
          <FilterButton
            active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            전체
          </FilterButton>
          <FilterButton
            active={filter === "web"}
            onClick={() => setFilter("web")}
          >
            웹 프로젝트
          </FilterButton>
          <FilterButton
            active={filter === "game"}
            onClick={() => setFilter("game")}
          >
            게임 프로젝트
          </FilterButton>
          <FilterButton
            active={filter === "backend"}
            onClick={() => setFilter("backend")}
          >
            백엔드 프로젝트
          </FilterButton>
          <FilterButton
            active={filter === "cloud"}
            onClick={() => setFilter("cloud")}
          >
            클라우드 프로젝트
          </FilterButton>
        </FilterButtons>

        <ProjectsGrid>
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => setSelectedProject(project)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProjectImage bgColor={project.bgColor}>
                  <ProjectIcon>
                    <project.icon size={40} />
                  </ProjectIcon>
                </ProjectImage>

                <ProjectContent>
                  <ProjectTitle>{project.title}</ProjectTitle>
                  <ProjectDescription>{project.description}</ProjectDescription>

                  <ProjectTech>
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <TechTag key={techIndex}>{tech}</TechTag>
                    ))}
                    {project.tech.length > 4 && (
                      <TechTag>+{project.tech.length - 4}</TechTag>
                    )}
                  </ProjectTech>

                  <ProjectStats>
                    {project.stats.map((stat, statIndex) => (
                      <StatItem key={statIndex}>
                        <stat.icon size={16} />
                        <span>
                          {stat.label}: {stat.value}
                        </span>
                      </StatItem>
                    ))}
                  </ProjectStats>

                  <ProjectLinks>
                    {project.githubUrl && (
                      <ProjectLink 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={16} />
                        GitHub
                      </ProjectLink>
                    )}
                    {project.liveUrl && (
                      <LiveDemoButton 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={16} />
                        라이브 데모
                      </LiveDemoButton>
                    )}
                    <ProjectLink href="#" onClick={(e) => e.stopPropagation()}>
                      <Play size={16} />
                      자세히 보기
                    </ProjectLink>
                  </ProjectLinks>
                </ProjectContent>
              </ProjectCard>
            ))}
          </AnimatePresence>
        </ProjectsGrid>

        <AnimatePresence>
          {selectedProject && (
            <Modal
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <ModalContent
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <CloseButton onClick={() => setSelectedProject(null)}>
                  <X size={20} />
                </CloseButton>

                <ModalHeader>
                  <ModalTitle>{selectedProject.title}</ModalTitle>
                  <ModalSubtitle>주요 프로젝트</ModalSubtitle>
                </ModalHeader>

                <ModalBody>
                  <ModalDescription>
                    {selectedProject.description}
                  </ModalDescription>

                  <FeatureList>
                    <FeatureTitle>주요 기능</FeatureTitle>
                    {selectedProject.features.map(
                      (feature: string, index: number) => (
                        <FeatureItem key={index}>
                          <CheckCircle size={16} color="#00d4ff" />
                          {feature}
                        </FeatureItem>
                      )
                    )}
                  </FeatureList>

                  <FeatureList>
                    <FeatureTitle>주요 성과</FeatureTitle>
                    {selectedProject.achievements.map(
                      (achievement: string, index: number) => (
                        <FeatureItem key={index}>
                          <Award size={16} color="#ff6b6b" />
                          {achievement}
                        </FeatureItem>
                      )
                    )}
                  </FeatureList>

                  <ProjectTech>
                    {selectedProject.tech.map((tech: string, index: number) => (
                      <TechTag key={index}>{tech}</TechTag>
                    ))}
                  </ProjectTech>
                </ModalBody>
              </ModalContent>
            </Modal>
          )}
        </AnimatePresence>
      </ProjectsContent>
    </ProjectsContainer>
  );
}

export default ProjectsPage;
