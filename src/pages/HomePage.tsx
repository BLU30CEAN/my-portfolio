import React from "react";
import { useNavigate } from "react-router-dom";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import TechStackSection from "./sections/TechStackSection";
import ReferencesSection from "./sections/ReferencesSection";
import ProjectsSection from "./sections/ProjectsSection";
import EvalNotesSection from "./sections/EvalNotesSection";
import LearningBannerSection from "./sections/LearningBannerSection";
import ContactSection from "./sections/ContactSection";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const displayName = process.env.REACT_APP_PERSONAL_NAME || "EJ";
  const email =
    process.env.REACT_APP_PERSONAL_EMAIL || "ej.an.company@gmail.com";
  const githubUrl =
    process.env.REACT_APP_GITHUB_URL || "https://github.com/BLU30CEAN";

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <HeroSection
        displayName={displayName}
        githubUrl={githubUrl}
        email={email}
        onPrimary={scrollToProjects}
        onLab={() => navigate("/lab")}
      />
      <AboutSection />
      <TechStackSection />
      <ReferencesSection />
      <ProjectsSection />
      <EvalNotesSection />
      <LearningBannerSection />
      <ContactSection email={email} />
    </>
  );
};

export default HomePage;
