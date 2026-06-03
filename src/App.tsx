import React, { Suspense, lazy, useCallback, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

import { ThemeProvider as CustomThemeProvider } from "./contexts/ThemeContext";
import { ToastProvider } from "./components/ui/Toast";
import Navbar, { NavItem } from "./components/nav/Navbar";
import ScrollProgress from "./components/nav/ScrollProgress";
import ScrollToTop from "./components/nav/ScrollToTop";
import { useActiveSection } from "./hooks/useActiveSection";
import { useScrollFlags } from "./hooks/useScrollFlags";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ProjectsRedirect = lazy(() => import("./pages/ProjectsRedirect"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const WordBaseballPage = lazy(() => import("./pages/WordBaseballPage"));
const GrowthJournalPage = lazy(() => import("./pages/GrowthJournalPage"));

const GlobalStyle = createGlobalStyle`
  body {
    background: ${(p) => p.theme.colors.background};
    color: ${(p) => p.theme.colors.text};
    /* 테마 토글 시 색이 휙 바뀌지 않게 부드럽게 */
    transition:
      background-color ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut},
      color ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut};
  }
`;

const Shell = styled.div`
  min-height: 100vh;
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
`;

const Main = styled.main`
  padding-top: 72px;
  min-height: calc(100vh - 72px);

  @media (max-width: 768px) {
    padding-top: 64px;
    min-height: calc(100vh - 64px);
  }
`;

const RouteFallback = styled.div`
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.textMuted};
  font-size: 0.95rem;
`;

const NAV_ITEMS: NavItem[] = [
  { id: "home", label: "Home", section: "home" },
  { id: "about", label: "About", section: "about" },
  { id: "tech", label: "Stack", section: "tech" },
  { id: "references", label: "References", section: "references" },
  { id: "projects", label: "Projects", section: "projects" },
  { id: "journal", label: "학습 노트", route: "/journal" },
  { id: "contact", label: "Contact", section: "contact" },
];

const HOME_SECTION_IDS = [
  "home",
  "about",
  "tech",
  "references",
  "projects",
  "contact",
];

function AppShell() {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [mobileOpen, setMobileOpen] = useState(false);
  const { scrolled, showTop } = useScrollFlags();
  const activeSection = useActiveSection(HOME_SECTION_IDS, isHome);

  // 현재 활성 nav 항목 id 계산
  const activeNavId = !isHome
    ? location.pathname === "/journal"
      ? "journal"
      : ""
    : activeSection;

  const goSection = useCallback(
    (id: string) => {
      const scroll = () =>
        document
          .getElementById(id)
          ?.scrollIntoView({ behavior: "smooth", block: "start" });
      if (!isHome) {
        navigate("/");
        window.setTimeout(scroll, 80);
      } else {
        scroll();
      }
    },
    [isHome, navigate],
  );

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Shell>
      <a href="#main-content" className="skip-link">
        본문으로 건너뛰기
      </a>

      <ScrollProgress />

      <Navbar
        items={NAV_ITEMS}
        activeId={activeNavId}
        open={mobileOpen}
        setOpen={setMobileOpen}
        isScrolled={scrolled}
        onSection={goSection}
      />

      <Main id="main-content">
        <Suspense
          fallback={<RouteFallback>잠시만 기다려 주세요…</RouteFallback>}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            >
              <Routes location={location}>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/projects" element={<ProjectsRedirect />} />
                <Route path="/journal" element={<GrowthJournalPage />} />
                <Route path="/kwb" element={<WordBaseballPage />} />
                <Route path="/word-baseball" element={<WordBaseballPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </Main>

      <ScrollToTop visible={showTop} onClick={scrollToTop} />
    </Shell>
  );
}

function App() {
  return (
    <CustomThemeProvider>
      <GlobalStyle />
      <ToastProvider>
        <Router>
          <AppShell />
        </Router>
      </ToastProvider>
    </CustomThemeProvider>
  );
}

export default App;
