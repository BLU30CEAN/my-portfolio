import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  Code,
  Smartphone,
  Brain,
  Zap,
  TrendingUp,
  Users,
  Award,
  Github,
  Linkedin,
  Mail,
  Database,
  Cloud,
  Server,
} from "lucide-react";

const HomeContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  scroll-snap-type: y mandatory;
  overflow-y: auto;
`;

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding: 2rem;
  scroll-snap-align: start;
  box-sizing: border-box;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(0, 212, 255, 0.1) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const HomeSection = styled(Section)``;
const AboutSection = styled(Section)`
  min-height: 100vh;
  padding: 6rem 0;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const TechStackSection = styled(Section)`
  min-height: 100vh;
  padding: 6rem 0;

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0;
  }
`;

const ProjectsSection = styled(Section)``;
const ContactSection = styled(Section)``;


const FloatingElements = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  overflow: hidden;
`;

const FloatingElement = styled(motion.div)`
  position: absolute;
  width: 4px;
  height: 4px;
  background: ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  opacity: 0.6;
`;

const Content = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;
  z-index: 1;
  box-sizing: border-box;

  @media (max-width: 1024px) {
    gap: 3rem;
    padding: 0 2rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 0 1.5rem;
    max-width: 600px;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
    padding: 0 1rem;
    max-width: 100%;
  }
`;

const TextContent = styled.div`
  flex: 1;
  text-align: left;
  max-width: 600px;

  @media (max-width: 1024px) {
    max-width: 500px;
  }

  @media (max-width: 768px) {
    text-align: center;
    max-width: 100%;
    order: 2;
  }

  @media (max-width: 480px) {
    padding: 0 0.5rem;
  }
`;

const ImageContent = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 1rem;
  }
`;

const ProfileImage = styled(motion.div)`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid rgba(0, 212, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
  position: relative;
  background: ${(props) => props.theme.colors.surface};

  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(135deg, #00d4ff, #4ecdc4, #45b7d1);
    border-radius: 50%;
    z-index: -1;
    animation: rotate 3s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }

  @media (max-width: 1024px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 768px) {
    width: 250px;
    height: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
    height: 200px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  display: block;
  
  &:not([src]), &[src=""], &[src*="undefined"] {
    display: none;
  }
`;

const Greeting = styled(motion.div)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 500;
`;

const Name = styled(motion.h1)`
  font-size: clamp(2.5rem, 6vw, 6rem);
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: clamp(2rem, 8vw, 3rem);
    margin-bottom: 1rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(1.8rem, 7vw, 2.5rem);
  }
`;

const Title = styled(motion.h2)`
  font-size: clamp(1.2rem, 3vw, 2.5rem);
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 2rem;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: clamp(1rem, 4vw, 1.8rem);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: clamp(0.9rem, 3.5vw, 1.5rem);
    margin-bottom: 1rem;
  }
`;

const Description = styled(motion.p)`
  font-size: 1.1rem;
  color: ${(props) => props.theme.colors.textSecondary};
  max-width: 600px;
  margin: 0 0 3rem 0;
  line-height: 1.8;
  text-align: left;
  letter-spacing: 0.02em;

  @media (max-width: 1024px) {
    font-size: 1rem;
    max-width: 500px;
  }

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto 2.5rem;
    font-size: 0.95rem;
    line-height: 1.7;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    line-height: 1.6;
    margin: 0 auto 2rem;
  }
`;

const CTAButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.gradient};
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 3rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 212, 255, 0.4);
  }
`;

const SocialLinks = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    gap: 1.2rem;
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    gap: 1rem;
    margin-bottom: 2.5rem;
  }
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.theme.colors.primary};
    color: white;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 45px;
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
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

const StatsContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 1rem 0;
  text-align: center;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-top: 1rem;
  width: 100%;
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
    max-width: 450px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 280px;
  }
`;

const StatCard = styled(motion.div)`
  text-align: center;
  padding: 1.5rem;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 1.2rem;
  }

  @media (max-width: 480px) {
    padding: 1rem;
  }
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
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

const TechStackContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 0;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1.5rem 0;
  }

  @media (max-width: 480px) {
    padding: 1rem 0;
  }
`;

const TechCategory = styled.div`
  margin-bottom: 4rem;
  
  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2rem;
  }
`;

const CategoryTitle = styled(motion.h3)`
  font-size: 1.5rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  font-weight: 600;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  margin-bottom: 1rem;
  }
`;

const TechStackGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
  width: 100%;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
    gap: 1rem;
    margin-top: 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(auto-fit, minmax(70px, 1fr));
    gap: 0.8rem;
    margin-top: 1rem;
  }
`;

const TechItem = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.8rem;
  padding: 1.5rem 0.8rem;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 15px;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;
  cursor: pointer;
  box-sizing: border-box;
  min-height: 100px;
  justify-content: center;

  &:hover {
    transform: translateY(-3px);
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 8px 25px rgba(0, 212, 255, 0.15);
  }

  @media (max-width: 768px) {
    padding: 1rem 0.5rem;
    min-height: 80px;
    gap: 0.5rem;
  }
`;

const TechIcon = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 12px;
  background: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.colors.border};
  transition: all 0.3s ease;

  img {
    width: 30px;
    height: 30px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    
    img {
      width: 25px;
      height: 25px;
    }
  }
`;

const TechName = styled.div`
  font-size: 0.8rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const ExperienceTimeline = styled.div`
  position: relative;
  margin-top: 4rem;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 2px;
    background: ${(props) => props.theme.colors.primary};
    transform: translateX(-50%);

    @media (max-width: 768px) {
      left: 20px;
    }
  }
`;

const ExperienceItem = styled(motion.div)`
  position: relative;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;

  &:nth-child(odd) {
    flex-direction: row;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 40px;
    }
  }

  &:nth-child(even) {
    flex-direction: row-reverse;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: flex-start;
      margin-left: 40px;
    }
  }
`;

const ExperienceContent = styled.div`
  flex: 1;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  max-width: 500px;

  &:nth-child(odd) {
    margin-right: 3rem;

    @media (max-width: 768px) {
      margin-right: 0;
      margin-top: 1rem;
    }
  }

  &:nth-child(even) {
    margin-left: 3rem;

    @media (max-width: 768px) {
      margin-left: 0;
      margin-top: 1rem;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: ${(props) => props.theme.colors.primary};
    border-radius: 50%;
    transform: translateY(-50%);
  }

  &:nth-child(odd)::before {
    right: -40px;

    @media (max-width: 768px) {
      left: -40px;
      right: auto;
    }
  }

  &:nth-child(even)::before {
    left: -40px;

    @media (max-width: 768px) {
      left: -40px;
    }
  }
`;

const ExperiencePeriod = styled.div`
  font-size: 0.9rem;
  color: ${(props) => props.theme.colors.primary};
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const ExperienceCompany = styled.div`
  font-size: 1.3rem;
  font-weight: 700;
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const ExperiencePosition = styled.div`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: 1rem;
`;

const ExperienceDescription = styled.div`
  font-size: 0.95rem;
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const ExperienceTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const TechTag = styled.span`
  background: ${(props) => props.theme.colors.primary}20;
  color: ${(props) => props.theme.colors.primary};
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
`;

const ProjectTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin: 3rem 0 2rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
  }
`;

const TabButton = styled(motion.button)<{ active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: ${(props) => props.active ? props.theme.colors.primary : 'transparent'};
  color: ${(props) => props.active ? 'white' : props.theme.colors.textSecondary};
  border: 2px solid ${(props) => props.active ? props.theme.colors.primary : props.theme.colors.border};
  border-radius: 15px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${(props) => props.active ? props.theme.colors.primary : props.theme.colors.primary}20;
    border-color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 0.9rem;
  }
`;

const TabIcon = styled.span`
  font-size: 1.2rem;
`;

const TabText = styled.span``;

const ProjectContent = styled.div`
  width: 100%;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.1);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-weight: 600;
`;

const ProjectDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const ProjectTech = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.8rem;
  }
`;

const ProjectButton = styled(motion.button)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;
  justify-content: center;

  &:hover {
    background: ${(props) => props.theme.colors.primary}dd;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const ContactInfo = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
`;

const ContactItem = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 20px;
  padding: 2rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: ${(props) => props.theme.colors.primary};
  }
`;

const ContactItemTitle = styled.h4`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

const ContactItemText = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1rem;
`;

const ContactItemContent = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
`;

const CopyButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.primary};
  border: none;
  border-radius: 8px;
  padding: 0.5rem;
  cursor: pointer;
  font-size: 1rem;
  color: white;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;

  &:hover {
    background: ${(props) => props.theme.colors.primary}dd;
    transform: translateY(-2px);
  }
`;

const Toast = styled(motion.div)`
  position: fixed;
  top: 20px;
  right: 20px;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.primary};
  border-radius: 12px;
  padding: 1rem 1.5rem;
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9rem;
  font-weight: 500;
  z-index: 10000;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  
  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
    left: 10px;
    padding: 0.8rem 1.2rem;
    font-size: 0.8rem;
  }
`;

const ToastIcon = styled.span`
  font-size: 1.2rem;
`;

const ContactCTA = styled(motion.button)`
  background: ${(props) => props.theme.colors.gradient};
  border: none;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 212, 255, 0.4);
  }
`;

const GuestbookSection = styled(motion.div)`
  margin-top: 3rem;
  padding: 2rem;
  background: ${(props) => props.theme.colors.surface};
  border-radius: 20px;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const GuestbookTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.primary};
  text-align: center;
`;

const GuestbookText = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const GuestbookForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const GuestbookInput = styled.input`
  padding: 0.8rem 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const GuestbookTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: 0.9rem;
  min-height: 100px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.1);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const GuestbookButton = styled(motion.button)`
  background: linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%);
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 50px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 107, 107, 0.3);

  &:hover {
    box-shadow: 0 6px 20px rgba(255, 107, 107, 0.4);
  }
`;



const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: calc(3rem + 5vh);
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme.colors.textSecondary};
  cursor: pointer;
  z-index: 10;

  @media (max-width: 768px) {
    bottom: calc(2rem + 5vh);
  }
`;

const ScrollText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
`;

const ScrollIcon = styled(motion.div)`
  width: 30px;
  height: 30px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.primary};
`;

function HomePage() {
  const containerRef = useRef(null);
  const [activeTab, setActiveTab] = useState('professional');
  const [showToast, setShowToast] = useState(false);
  const [guestbookName, setGuestbookName] = useState('');
  const [guestbookMessage, setGuestbookMessage] = useState('');
  const [showGuestbookToast, setShowGuestbookToast] = useState(false);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const stats = [
    { number: "4년", label: "개발 경험", icon: Award },
    { number: "5개", label: "대기업 프로젝트", icon: Users },
    { number: "15+", label: "기술 스택", icon: TrendingUp },
    { number: "AI", label: "최신 기술", icon: Zap },
  ];

  const techStackCategories = [
    {
      category: "프론트엔드",
      technologies: [
        { 
          name: "React", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        { 
          name: "TypeScript", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
        },
        { 
          name: "JavaScript", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        { 
          name: "Node.js", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
      ]
    },
    {
      category: "백엔드",
      technologies: [
        { 
          name: "Java", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        { 
          name: "Spring Boot", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg"
        },
        { 
          name: "Kotlin", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg"
        },
        { 
          name: "Android", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg"
        },
      ]
    },
    {
      category: "서버/인프라",
      technologies: [
        { 
          name: "AWS", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
        },
        { 
          name: "CI/CD", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg"
        },
        { 
          name: "Docker", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg"
        },
        { 
          name: "Linux", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
        },
        { 
          name: "FTP", 
          image: "https://img.icons8.com/color/96/ftp.png"
        },
      ]
    },
    {
      category: "데이터베이스/모니터링",
      technologies: [
        { 
          name: "PostgreSQL", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg"
        },
        { 
          name: "DataDog", 
          image: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDgiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA0OCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQ4IiBoZWlnaHQ9IjQ4IiByeD0iOCIgZmlsbD0iIzYzMkNBQyIvPgo8cGF0aCBkPSJNMTYgMjBIMzJWMjhIMTZWMjBaIiBmaWxsPSJ3aGl0ZSIvPgo8cGF0aCBkPSJNMTggMjJIMzBWMjZIMThWMjJaIiBmaWxsPSIjNjMyQ0FDIi8+Cjwvc3ZnPgo="
        },
        { 
          name: "GTM", 
          image: "https://img.icons8.com/color/96/google-tag-manager.png"
        },
        { 
          name: "GA", 
          image: "https://img.icons8.com/color/96/google-analytics.png"
        },
      ]
    },
    {
      category: "버전 관리",
      technologies: [
        { 
          name: "Git", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        { 
          name: "GitHub", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
        { 
          name: "GitLab", 
          image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg"
        },
      ]
    },
  ];

  const experience = [
    {
      period: "2025.04 ~ 현재",
      company: "AI 기술 스타트업",
      position: "풀스택 개발자",
      description: "AI 음성인식 기반 네이티브 앱 내 웹뷰 개발. React, TypeScript를 활용한 AI 자서전 프로젝트 진행 중. LLM을 통한 음성인식 및 프롬프트 엔지니어링 기술 적용.",
      tech: ["React", "TypeScript", "LLM", "음성인식", "프롬프트 엔지니어링"]
    },
    {
      period: "2024.04 ~ 2025.02",
      company: "IT 솔루션 기업",
      position: "풀스택 개발자",
      description: "대형 유통업체 앱인앱 주문채널 오픈 구축. AWS EC2 서버 환경 구축 및 CI/CD 파이프라인 구축. JWT 토큰 기반 보안 시스템 구현. PG사 연동 및 결제 시스템 개발.",
      tech: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "AWS", "Jenkins", "JWT"]
    },
    {
      period: "2023.01 ~ 2024.03",
      company: "IT 솔루션 기업",
      position: "웹/앱 개발자",
      description: "대형 유통업체 홈페이지 및 모바일 앱 운영. 고객/임직원/협력사 3개 인하우스 앱 운영. JIRA, Confluence를 통한 요청 대응 및 연중무휴 운영.",
      tech: ["Java", "Android", "iOS", "JavaScript", "PostgreSQL", "JIRA"]
    },
    {
      period: "2022.08 ~ 2022.12",
      company: "IT 솔루션 기업",
      position: "SI 개발자",
      description: "대형 제조업체 SAP U4A ERP 구축. Back-Office QA모듈 ERP 제작. ABAP, SAP HANA Cloud 활용한 엔터프라이즈 솔루션 개발.",
      tech: ["ABAP", "SAP HANA", "ERP", "U4A 프레임워크"]
    },
    {
      period: "2021.05 ~ 2022.04",
      company: "결제 솔루션 기업",
      position: "웹/앱 개발자 (수행)",
      description: "결제 앱 솔루션 및 안드로이드 네이티브 앱 개발. Java, JSP를 활용한 관리자 페이지 구축. NICE PG결제, VAN결제 연동 시스템 개발 및 구현.",
      tech: ["Java", "JSP", "Android", "PG결제", "VAN결제", "JavaScript"]
    }
  ];

  const handleGuestbookSubmit = async () => {
    if (!guestbookMessage.trim()) return;

    try {
      const response = await fetch('/api/guestbook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: guestbookName || '익명',
          message: guestbookMessage,
          timestamp: new Date().toISOString(),
        }),
      });

      if (response.ok) {
        setShowGuestbookToast(true);
        setGuestbookName('');
        setGuestbookMessage('');
        setTimeout(() => setShowGuestbookToast(false), 3000);
      } else {
        // 서버 실패 시 로컬 스토리지에 저장
        const guestbookData = {
          name: guestbookName || '익명',
          message: guestbookMessage,
          timestamp: new Date().toISOString(),
        };
        
        const existingData = JSON.parse(localStorage.getItem('guestbook') || '[]');
        existingData.push(guestbookData);
        localStorage.setItem('guestbook', JSON.stringify(existingData));
        
        setShowGuestbookToast(true);
        setGuestbookName('');
        setGuestbookMessage('');
        setTimeout(() => setShowGuestbookToast(false), 3000);
      }
    } catch (error) {
      // 네트워크 오류 시 로컬 스토리지에 저장
      const guestbookData = {
        name: guestbookName || '익명',
        message: guestbookMessage,
        timestamp: new Date().toISOString(),
      };
      
      const existingData = JSON.parse(localStorage.getItem('guestbook') || '[]');
      existingData.push(guestbookData);
      localStorage.setItem('guestbook', JSON.stringify(existingData));
      
      setShowGuestbookToast(true);
      setGuestbookName('');
      setGuestbookMessage('');
      setTimeout(() => setShowGuestbookToast(false), 3000);
    }
  };

  return (
    <HomeContainer ref={containerRef}>
      <AnimatePresence>
        {showToast && (
          <Toast
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            <ToastIcon>✅</ToastIcon>
            이메일이 클립보드에 복사되었습니다!
          </Toast>
        )}
        {showGuestbookToast && (
          <Toast
            initial={{ opacity: 0, x: 300, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 300, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)' }}
          >
            <ToastIcon>💝</ToastIcon>
            방명록이 성공적으로 남겨졌습니다!
          </Toast>
        )}
      </AnimatePresence>
      {/* Home Section */}
      <HomeSection id="home">
        <FloatingElements>
          {[...Array(20)].map((_, i) => (
            <FloatingElement
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </FloatingElements>

        <Content>
          <TextContent>
          <Greeting
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            안녕하세요, 저는
          </Greeting>

          <Name
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {process.env.REACT_APP_PERSONAL_NAME || "EJ"}
          </Name>

          <Title
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
              프론트엔드 개발자
          </Title>

          <Description
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
              4년간의 풀스택 개발 경험을 바탕으로<br />
              React, TypeScript, Spring Boot를 활용한<br />
              확장 가능한 웹 애플리케이션을 개발합니다.
              <br /><br />
              결제 시스템부터 AI 서비스까지,<br />
              다양한 도메인에서의 경험을 바탕으로<br />
              사용자 중심의 솔루션을 개발합니다.
          </Description>

          <CTAButton
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const projectsSection = document.getElementById('projects');
              projectsSection?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            프로젝트 보기 <ArrowRight size={20} />
          </CTAButton>

          <SocialLinks
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <SocialLink
              href={process.env.REACT_APP_GITHUB_URL || "https://github.com/BLU30CEAN"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </SocialLink>
            <SocialLink 
              href={`mailto:${process.env.REACT_APP_PERSONAL_EMAIL || "bigeunjun@naver.com"}`}
            >
              <Mail size={20} />
            </SocialLink>
          </SocialLinks>
          </TextContent>

          <ImageContent>
            <ProfileImage
              initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ scale: 1.05, rotate: 5 }}
            >
              <Image 
                src="/profile.jpg"
                alt={`${process.env.REACT_APP_PERSONAL_NAME || "EJ"} - Frontend Developer`}
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.parentElement!.style.background = 'linear-gradient(135deg, #00d4ff, #4ecdc4)';
                  target.parentElement!.innerHTML = `
                    <div style="
                      display: flex;
                      align-items: center;
                      justify-content: center;
                      width: 100%;
                      height: 100%;
                      color: white;
                      font-size: 3rem;
                      font-weight: bold;
                    ">
                      ${process.env.REACT_APP_PERSONAL_NAME || "EJ"}
                    </div>
                  `;
                }}
              />
            </ProfileImage>
          </ImageContent>
        </Content>
        
        {/* <ScrollIndicator
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          onClick={() => {
            const nextSection = document.querySelector('#about');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ScrollText>더 알아보기</ScrollText>
          <ScrollIcon
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </ScrollIcon>
        </ScrollIndicator> */}
      </HomeSection>

      {/* About Section */}
      <AboutSection id="about">
        <FloatingElements>
          {[...Array(15)].map((_, i) => (
            <FloatingElement
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </FloatingElements>

        <Content>
          <TextContent>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              About Me
            </SectionTitle>

            <Description
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              4년간의 다양한 개발 경험을 통해 프론트엔드부터 백엔드, 인프라까지
              <br />
              전체 개발 생태계를 다루는 풀스택 개발자로 성장했습니다.
              <br /><br />
              결제 시스템부터 AI 서비스까지, 다양한 도메인에서의 경험을 바탕으로
              <br />
              사용자 중심의 솔루션을 개발합니다.
              <br /><br />
              새로운 기술 학습과 문제 해결에 대한 열정을 가지고 있으며,
              <br />
              팀과 함께 성장하는 것을 중요하게 생각합니다.
            </Description>
          </TextContent>

          <StatsContainer>
            <StatsGrid>
              {stats.map((stat, index) => (
                <StatCard
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                >
                  <StatIcon>
                    <stat.icon size={24} />
                  </StatIcon>
                  <StatNumber>{stat.number}</StatNumber>
                  <StatLabel>{stat.label}</StatLabel>
                </StatCard>
              ))}
            </StatsGrid>
          </StatsContainer>
        </Content>
      </AboutSection>

      {/* 기술 스택 섹션 */}
      <TechStackSection>
        <FloatingElements>
          {[...Array(10)].map((_, i) => (
            <FloatingElement
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </FloatingElements>

        <TechStackContainer>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            기술 스택
          </SectionTitle>
          
          {techStackCategories.map((category, categoryIndex) => (
            <TechCategory key={category.category}>
              <CategoryTitle
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
              >
                {category.category}
              </CategoryTitle>
              <TechStackGrid>
                {category.technologies.map((tech, techIndex) => (
                  <TechItem
                    key={tech.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.1) + (techIndex * 0.05) }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <TechIcon>
                      <img src={tech.image} alt={tech.name} />
                    </TechIcon>
                    <TechName>{tech.name}</TechName>
                  </TechItem>
                ))}
              </TechStackGrid>
            </TechCategory>
          ))}
        </TechStackContainer>
      </TechStackSection>



      {/* Projects Section */}
      <ProjectsSection id="projects">
        <FloatingElements>
          {[...Array(10)].map((_, i) => (
            <FloatingElement
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </FloatingElements>

        <Content>
          <TextContent>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
              Projects
          </SectionTitle>

          <SectionSubtitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
              다양한 기술을 활용한 프로젝트들
          </SectionSubtitle>

            <ProjectTabs>
              <TabButton
                active={activeTab === 'professional'}
                onClick={() => setActiveTab('professional')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TabIcon>💼</TabIcon>
                <TabText>실무 프로젝트</TabText>
              </TabButton>
              <TabButton
                active={activeTab === 'personal'}
                onClick={() => setActiveTab('personal')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <TabIcon>🎮</TabIcon>
                <TabText>토이 프로젝트</TabText>
              </TabButton>
            </ProjectTabs>

            <ProjectContent>
              {activeTab === 'professional' && (
                <ProjectsGrid>
                  <ProjectCard
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                    <ProjectTitle>AI 자서전</ProjectTitle>
                    <ProjectDescription>
                      AI 음성인식 기반 네이티브 앱 내 웹뷰 개발. React, TypeScript를 활용한 LLM 기반 음성인식 및 프롬프트 엔지니어링 기술 적용.
                    </ProjectDescription>
                    <ProjectTech>
                      <TechTag>React</TechTag>
                      <TechTag>TypeScript</TechTag>
                      <TechTag>LLM</TechTag>
                      <TechTag>음성인식</TechTag>
                    </ProjectTech>
                  </ProjectCard>

                  <ProjectCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ProjectTitle>앱인앱 주문채널</ProjectTitle>
                    <ProjectDescription>
                      대형 유통업체 앱인앱 주문채널 오픈 구축. AWS EC2 서버 환경 구축 및 CI/CD 파이프라인 구축. JWT 토큰 기반 보안 시스템 구현. DataDog, GTM, GA를 활용한 모니터링 및 분석 시스템 구축.
                    </ProjectDescription>
                    <ProjectTech>
                      <TechTag>React</TechTag>
                      <TechTag>TypeScript</TechTag>
                      <TechTag>Spring Boot</TechTag>
                      <TechTag>AWS</TechTag>
                      <TechTag>DataDog</TechTag>
                      <TechTag>GTM</TechTag>
                      <TechTag>GA</TechTag>
                    </ProjectTech>
                  </ProjectCard>

                  <ProjectCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ProjectTitle>Java Spring Boot API</ProjectTitle>
                    <ProjectDescription>
                      RESTful API 서버 구축 및 마이크로서비스 아키텍처 구현. JPA, Hibernate를 활용한 데이터베이스 설계 및 Spring Security를 통한 인증/인가 시스템 구축.
                    </ProjectDescription>
                    <ProjectTech>
                      <TechTag>Java</TechTag>
                      <TechTag>Spring Boot</TechTag>
                      <TechTag>JPA</TechTag>
                      <TechTag>MySQL</TechTag>
                    </ProjectTech>
                  </ProjectCard>

                  <ProjectCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ProjectTitle>Android 네이티브 앱</ProjectTitle>
                    <ProjectDescription>
                      Java/Kotlin을 활용한 안드로이드 네이티브 앱 개발. MVVM 패턴 적용 및 Room 데이터베이스, Retrofit 네트워킹 라이브러리 활용.
                    </ProjectDescription>
                    <ProjectTech>
                      <TechTag>Java</TechTag>
                      <TechTag>Kotlin</TechTag>
                      <TechTag>Android</TechTag>
                      <TechTag>MVVM</TechTag>
                    </ProjectTech>
                  </ProjectCard>

                  <ProjectCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ProjectTitle>결제 솔루션</ProjectTitle>
                    <ProjectDescription>
                      결제 앱 솔루션 및 안드로이드 네이티브 앱 개발. Java, JSP를 활용한 관리자 페이지 구축. NICE PG결제, VAN결제 연동 시스템 개발.
                    </ProjectDescription>
                    <ProjectTech>
                      <TechTag>Java</TechTag>
                      <TechTag>JSP</TechTag>
                      <TechTag>Android</TechTag>
                      <TechTag>PG결제</TechTag>
                    </ProjectTech>
                  </ProjectCard>

                  <ProjectCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ProjectTitle>AI 상담 어시스턴트</ProjectTitle>
                    <ProjectDescription>
                      LLM 기반 AI 상담 어시스턴트 개발. 실시간 소켓 통신을 통한 대화형 AI 시스템 구축. 프롬프트 엔지니어링을 활용한 자연스러운 대화 구현.
                    </ProjectDescription>
                    <ProjectTech>
                      <TechTag>React</TechTag>
                      <TechTag>TypeScript</TechTag>
                      <TechTag>LLM</TechTag>
                      <TechTag>소켓통신</TechTag>
                      <TechTag>프롬프트엔지니어링</TechTag>
                    </ProjectTech>
                  </ProjectCard>
                </ProjectsGrid>
              )}

              {activeTab === 'personal' && (
                <ProjectsGrid>
                  <ProjectCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ProjectTitle>Find Carrot Game</ProjectTitle>
                    <ProjectDescription>
                      React와 TypeScript를 활용한 인터랙티브 게임 개발. 사용자 경험을 중시한 UI/UX 디자인과 게임 로직 구현. 상태 관리 및 애니메이션 효과 적용.
                    </ProjectDescription>
                    <ProjectTech>
                      <TechTag>React</TechTag>
                      <TechTag>TypeScript</TechTag>
                      <TechTag>Styled Components</TechTag>
                      <TechTag>게임 로직</TechTag>
                    </ProjectTech>
                    <ProjectActions>
                      <ProjectButton
                        onClick={() => window.open('https://blu30cean.github.io/find-carrot', '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🎮 게임하기
                      </ProjectButton>
                      <ProjectButton
                        onClick={() => window.open('https://github.com/yourusername/find-carrot', '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📁 코드보기
                      </ProjectButton>
                    </ProjectActions>
                  </ProjectCard>

                  <ProjectCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ProjectTitle>Netflix Clone</ProjectTitle>
                    <ProjectDescription>
                      Netflix UI를 참고한 스트리밍 서비스 클론 프로젝트. 반응형 디자인과 모던 웹 기술을 활용한 사용자 인터페이스 구현. 영화 데이터 관리 및 카테고리별 분류 시스템.
                    </ProjectDescription>
                    <ProjectTech>
                      <TechTag>React</TechTag>
                      <TechTag>TypeScript</TechTag>
                      <TechTag>Styled Components</TechTag>
                      <TechTag>반응형 디자인</TechTag>
                    </ProjectTech>
                    <ProjectActions>
                      <ProjectButton
                        onClick={() => window.open('https://blu30cean.github.io/netflix-clone', '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🎬 보러가기
                      </ProjectButton>
                      <ProjectButton
                        onClick={() => window.open('https://github.com/yourusername/netflix-clone', '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📁 코드보기
                      </ProjectButton>
                    </ProjectActions>
                  </ProjectCard>

                  <ProjectCard
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <ProjectTitle>Tetris Game</ProjectTitle>
                    <ProjectDescription>
                      클래식 테트리스 게임을 React와 TypeScript로 구현. 게임 상태 관리, 키보드 이벤트 처리, 점수 시스템 등 완전한 게임 로직 구현. 사용자 친화적인 인터페이스와 애니메이션 효과.
                    </ProjectDescription>
                    <ProjectTech>
                      <TechTag>React</TechTag>
                      <TechTag>TypeScript</TechTag>
                      <TechTag>게임 로직</TechTag>
                      <TechTag>상태 관리</TechTag>
                    </ProjectTech>
                    <ProjectActions>
                      <ProjectButton
                        onClick={() => window.open('https://blu30cean.github.io/rabris', '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        🎮 게임하기
                      </ProjectButton>
                      <ProjectButton
                        onClick={() => window.open('https://github.com/yourusername/tetris', '_blank')}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        📁 코드보기
                      </ProjectButton>
                    </ProjectActions>
                  </ProjectCard>
                </ProjectsGrid>
              )}
            </ProjectContent>
          </TextContent>
        </Content>
        
        {/* <ScrollIndicator
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          onClick={() => {
            const nextSection = document.querySelector('#thankyou');
            nextSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ScrollText>더 알아보기</ScrollText>
          <ScrollIcon
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ↓
          </ScrollIcon>
        </ScrollIndicator> */}
      </ProjectsSection>



      {/* Contact Section */}
      <ContactSection id="contact">
        <FloatingElements>
          {[...Array(8)].map((_, i) => (
            <FloatingElement
              key={i}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.6, 1, 0.6],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </FloatingElements>

        <Content>
          <TextContent>
            <SectionTitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Contact
            </SectionTitle>

            <SectionSubtitle
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              함께 성장할 수 있는 기회를 기다리고 있습니다
            </SectionSubtitle>

            <ContactInfo>
              <ContactItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ContactItemTitle>📧 Email</ContactItemTitle>
                <ContactItemContent>
                  <ContactItemText>ej.an.company@gmail.com</ContactItemText>
                </ContactItemContent>
                <CopyButton
                  onClick={() => {
                    navigator.clipboard.writeText('ej.an.company@gmail.com');
                    setShowToast(true);
                    setTimeout(() => setShowToast(false), 2000);
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  📋 복사
                </CopyButton>
              </ContactItem>

              <ContactItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                              <ContactItemTitle>💼 고용 형태</ContactItemTitle>
              <ContactItemText>
                정직원 선호 (프리랜서도 협의 가능)<br />
                프로젝트 기반 협업도 고려
              </ContactItemText>
              </ContactItem>

              <ContactItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ContactItemTitle>🚀 기술 스택</ContactItemTitle>
                <ContactItemText>
                  React, TypeScript, Spring Boot<br />
                  AWS, Docker, PostgreSQL
                </ContactItemText>
              </ContactItem>

              <ContactItem
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <ContactItemTitle>📅 응답 시간</ContactItemTitle>
                <ContactItemText>
                  평일 24시간 이내<br />
                  주말 48시간 이내
                </ContactItemText>
              </ContactItem>
            </ContactInfo>

            <ContactCTA
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = 'mailto:ej.an.company@gmail.com'}
            >
              이메일 보내기 <Mail size={20} />
            </ContactCTA>

            <GuestbookSection
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <GuestbookTitle>💬 방명록</GuestbookTitle>
              <GuestbookText>
                간단한 메시지나 응원의 말씀을 남겨주세요!
              </GuestbookText>
              <GuestbookForm>
                <GuestbookInput 
                  placeholder="이름 (선택사항)"
                  maxLength={20}
                  value={guestbookName}
                  onChange={(e) => setGuestbookName(e.target.value)}
                />
                <GuestbookTextarea 
                  placeholder="메시지를 입력하세요..."
                  maxLength={200}
                  value={guestbookMessage}
                  onChange={(e) => setGuestbookMessage(e.target.value)}
                />
                <GuestbookButton
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleGuestbookSubmit}
                >
                  💝 메시지 남기기
                </GuestbookButton>
              </GuestbookForm>
            </GuestbookSection>
          </TextContent>
        </Content>
      </ContactSection>
    </HomeContainer>
  );
}

export default HomePage;
