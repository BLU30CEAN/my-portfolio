import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  User,
  Briefcase,
  MessageSquare,
  ChevronUp,
  Menu,
  X,
  Heart,
  Code,
} from "lucide-react";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider as CustomThemeProvider } from "./contexts/ThemeContext";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
    background: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    overflow-x: hidden;
    transition: all 0.3s ease;
  }

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${(props) => props.theme.colors.surface};
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.border};
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${(props) => props.theme.colors.primary};
  }
`;



const AppContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
`;

const Navigation = styled.nav<{ $isScrolled: boolean; $activeSection: string }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(props) => {
    if (props.$isScrolled) {
      // 스크롤된 상태에서는 더 진한 배경
      return `${props.theme.colors.background}ee`;
    }
    // 초기 상태에서는 더 투명한 배경
    return `${props.theme.colors.background}dd`;
  }};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${(props) => {
    if (props.$isScrolled) {
      return props.theme.colors.primary;
    }
    return props.theme.colors.border;
  }};
  box-shadow: ${(props) => {
    if (props.$isScrolled) {
      return `0 4px 20px rgba(0, 212, 255, 0.15)`;
    }
    return 'none';
  }};
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 70px;
  }

  @media (max-width: 480px) {
    padding: 0 0.75rem;
    height: 65px;
  }
`;

const Logo = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  border-radius: 16px;
  background: rgba(0, 212, 255, 0.08);
  border: 1px solid rgba(0, 212, 255, 0.15);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(0, 212, 255, 0.12);
    border-color: rgba(0, 212, 255, 0.3);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(0, 212, 255, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    padding: 0.6rem 1rem;
    gap: 0.6rem;
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    padding: 0.5rem 0.8rem;
    gap: 0.5rem;
  }
`;

const LogoIcon = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 8px;
  background: ${(props) => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  color: white;
  font-weight: 800;

  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
    font-size: 1rem;
  }

  @media (max-width: 480px) {
    width: 26px;
    height: 26px;
    font-size: 0.9rem;
  }
`;

const LogoText = styled.span`
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled(motion.button)<{ $isActive: boolean }>`
  color: ${(props) => props.$isActive ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  font-weight: ${(props) => props.$isActive ? '600' : '500'};
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  background: none;
  border: none;
  font-size: 1rem;
  font-family: inherit;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: ${(props) => props.theme.colors.gradient};
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 80px;
  left: 0;
  right: 0;
  background: ${(props) => `${props.theme.colors.background}ee`};
  backdrop-filter: blur(20px);
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  z-index: 999;

  @media (max-width: 768px) {
    top: 70px;
    padding: 1.5rem;
  }

  @media (max-width: 480px) {
    top: 65px;
    padding: 1rem;
  }
`;

const MobileNavLink = styled(motion.button)<{ $isActive: boolean }>`
  color: ${(props) => props.$isActive ? props.theme.colors.primary : props.theme.colors.text};
  text-decoration: none;
  font-weight: ${(props) => props.$isActive ? '600' : '500'};
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background: none;
  border: none;
  text-align: left;
  font-family: inherit;
  position: relative;

  &:hover {
    color: ${(props) => props.theme.colors.primary};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: ${(props) => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: ${(props) => props.theme.colors.gradient};
    transition: width 0.3s ease;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

const ScrollToTop = styled(motion.button)`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.gradient};
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 212, 255, 0.4);
  }

  @media (max-width: 768px) {
    bottom: 1.5rem;
    right: 1.5rem;
    width: 45px;
    height: 45px;
  }

  @media (max-width: 480px) {
    bottom: 1rem;
    right: 1rem;
    width: 40px;
    height: 40px;
  }
`;

const MainContent = styled.main`
  padding-top: 80px;
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding-top: 70px;
    min-height: calc(100vh - 70px);
  }

  @media (max-width: 480px) {
    padding-top: 65px;
    min-height: calc(100vh - 65px);
  }
`;

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
      setIsScrolled(window.scrollY > 50);
      
      // 스크롤 위치에 따른 활성 섹션 감지
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

        const navItems = [
        { name: "Home", id: "home", icon: Home },
        { name: "About", id: "about", icon: User },
        { name: "Projects", id: "projects", icon: Briefcase },
      
        { name: "Contact", id: "contact", icon: MessageSquare },
      ];

  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <Router>
        <AppContainer>
            <Navigation $isScrolled={isScrolled} $activeSection={activeSection}>
              <NavContainer>
                <Logo
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    if (window.location.hash === '' || window.location.hash === '#/') {
                      // 이미 홈페이지에 있으면 맨 위로 스크롤
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } else {
                      // 다른 페이지에 있으면 홈으로 이동
                      window.location.href = '/';
                    }
                  }}
                >
                  <LogoIcon>EJ</LogoIcon>
                  <LogoText>Portfolio</LogoText>
                </Logo>

                <NavLinks>
                  <NavLink
                    $isActive={activeSection === 'home'}
                    onClick={() => {
                      const homeSection = document.getElementById('home');
                      homeSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    $isActive={activeSection === 'about'}
                    onClick={() => {
                      const aboutSection = document.getElementById('about');
                      aboutSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    About
                  </NavLink>
                  <NavLink
                    $isActive={activeSection === 'projects'}
                    onClick={() => {
                      const projectsSection = document.getElementById('projects');
                      projectsSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Projects
                  </NavLink>
                  <NavLink
                    $isActive={activeSection === 'contact'}
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      contactSection?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Contact
                  </NavLink>
                  <ThemeToggle />
                </NavLinks>

                <MobileMenuButton
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </MobileMenuButton>
              </NavContainer>

              <AnimatePresence>
                {isMobileMenuOpen && (
                  <MobileMenu
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <MobileNavLink
                      $isActive={activeSection === 'home'}
                      onClick={() => {
                        const homeSection = document.getElementById('home');
                        homeSection?.scrollIntoView({ behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Home
                    </MobileNavLink>
                    <MobileNavLink
                      $isActive={activeSection === 'about'}
                      onClick={() => {
                        const aboutSection = document.getElementById('about');
                        aboutSection?.scrollIntoView({ behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      About
                    </MobileNavLink>
                    <MobileNavLink
                      $isActive={activeSection === 'projects'}
                      onClick={() => {
                        const projectsSection = document.getElementById('projects');
                        projectsSection?.scrollIntoView({ behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Projects
                    </MobileNavLink>
                    <MobileNavLink
                      $isActive={activeSection === 'contact'}
                      onClick={() => {
                        const contactSection = document.getElementById('contact');
                        contactSection?.scrollIntoView({ behavior: 'smooth' });
                        setIsMobileMenuOpen(false);
                      }}
                      whileHover={{ x: 10 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Contact
                    </MobileNavLink>
                  </MobileMenu>
                )}
              </AnimatePresence>
            </Navigation>

            <MainContent>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </MainContent>

            <AnimatePresence>
              {showScrollToTop && (
                <ScrollToTop
                  onClick={scrollToTop}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronUp size={20} />
                </ScrollToTop>
              )}
            </AnimatePresence>
          </AppContainer>
        </Router>
    </CustomThemeProvider>
  );
}

export default App;
