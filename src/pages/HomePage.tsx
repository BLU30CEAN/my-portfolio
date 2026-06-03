import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TechStackSection from "./sections/TechStackSection";
import ReferencesSection from "./sections/ReferencesSection";
import ProjectsSection from "./sections/ProjectsSection";
import GitHubActivitySection from "./sections/GitHubActivitySection";
import LearningBannerSection from "./sections/LearningBannerSection";
import ContactSection from "./sections/ContactSection";
import {
  scrollToHomeSection,
  type HomeScrollState,
} from "../utils/homeNavigation";

const HomePage: React.FC = () => {
  const location = useLocation();
  const displayName = process.env.REACT_APP_PERSONAL_NAME || "EJ";
  const email =
    process.env.REACT_APP_PERSONAL_EMAIL || "ej.an.company@gmail.com";
  const githubUrl =
    process.env.REACT_APP_GITHUB_URL || "https://github.com/BLU30CEAN";

  const scrollToProjects = () => scrollToHomeSection("projects");

  useEffect(() => {
    const target = (location.state as HomeScrollState | null)?.scrollTo;
    if (target) scrollToHomeSection(target);
  }, [location.state]);

  return (
    <>
      <HeroSection
        displayName={displayName}
        githubUrl={githubUrl}
        email={email}
        onPrimary={scrollToProjects}
      />
      <AboutSection />
      <TechStackSection />
      <ReferencesSection />
      <ProjectsSection />
      <GitHubActivitySection />
      <LearningBannerSection />
      <ContactSection email={email} />
    </>
  );
};

export default HomePage;
