import React from "react";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TechStackSection from "./sections/TechStackSection";
import ProjectsSection from "./sections/ProjectsSection";
import EngineeringSection from "./sections/EngineeringSection";
import GitHubActivitySection from "./sections/GitHubActivitySection";
import LearningBannerSection from "./sections/LearningBannerSection";
import ReferencesSection from "./sections/ReferencesSection";
import ContactSection from "./sections/ContactSection";
import { useRouteSectionScroll } from "../hooks/useRouteSectionScroll";
import { scrollToHomeSection } from "../utils/homeNavigation";

const HomePage: React.FC = () => {
  const displayName = process.env.REACT_APP_PERSONAL_NAME || "EJ";
  const email =
    process.env.REACT_APP_PERSONAL_EMAIL || "ej.an.company@gmail.com";
  const githubUrl =
    process.env.REACT_APP_GITHUB_URL || "https://github.com/BLU30CEAN";

  const scrollToProjects = () => scrollToHomeSection("projects");

  useRouteSectionScroll({ home: true });

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
      <ProjectsSection />
      <EngineeringSection />
      <LearningBannerSection />
      <GitHubActivitySection />
      <ReferencesSection />
      <ContactSection email={email} />
    </>
  );
};

export default HomePage;
