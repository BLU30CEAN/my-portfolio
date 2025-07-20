import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { submitToGoogleSheets } from "../utils/googleSheets";
import { apiClient } from "../utils/api";
import {
  Mail,
  Github,
  Linkedin,
  MessageSquare,
  Send,
  MapPin,
  CheckCircle,
  AlertCircle,
  Code,
  Brain,
  Smartphone,
  Zap,
} from "lucide-react";

const ContactContainer = styled.div`
  min-height: 100vh;
  background: ${(props) => props.theme.colors.background};
  padding: 2rem;
`;

const ThankYouSection = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 20px;
  padding: 3rem 2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 4rem;
  text-align: center;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
`;

const ThankYouTitle = styled.h3`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  background: ${(props) => props.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const ThankYouText = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 2rem;
`;

const ContactContent = styled.div`
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
  text-align: center;
`;

const SectionSubtitle = styled(motion.p)`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 1.2rem;
  margin-bottom: 4rem;
  line-height: 1.6;
  text-align: center;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 4rem;

  @media (max-width: ${(props) => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const ContactInfo = styled.div``;

const ContactCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  margin-bottom: 2rem;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-5px);
  }
`;

const ContactCardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ContactCardContent = styled.div`
  color: ${(props) => props.theme.colors.textSecondary};
  line-height: 1.6;
`;

const ContactLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SocialLink = styled(motion.a)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.background};
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
`;

const ContactForm = styled.form`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${(props) => props.theme.colors.text};
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  border-radius: 10px;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  font-family: inherit;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 2px rgba(0, 212, 255, 0.2);
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.textSecondary};
  }
`;

const SubmitButton = styled(motion.button)`
  background: ${(props) => props.theme.colors.gradient};
  border: none;
  padding: 1rem 2rem;
  border-radius: 50px;
  color: white;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(0, 212, 255, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(0, 212, 255, 0.4);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }
`;

const Message = styled(motion.div)<{ type: "success" | "error" }>`
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: ${(props) =>
    props.type === "success" ? "rgba(0, 255, 0, 0.1)" : "rgba(255, 0, 0, 0.1)"};
  color: ${(props) => (props.type === "success" ? "#00ff00" : "#ff0000")};
  border: 1px solid
    ${(props) => (props.type === "success" ? "#00ff00" : "#ff0000")};
`;

const SkillsSection = styled.div`
  margin-top: 4rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const SkillCard = styled(motion.div)`
  background: ${(props) => props.theme.colors.surface};
  border-radius: 15px;
  padding: 1.5rem;
  border: 1px solid ${(props) => props.theme.colors.border};
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    border-color: ${(props) => props.theme.colors.primary};
    transform: translateY(-5px);
  }
`;

const SkillIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: ${(props) => props.theme.colors.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  color: white;
`;

const SkillTitle = styled.h4`
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 0.5rem;
`;

const SkillDescription = styled.p`
  color: ${(props) => props.theme.colors.textSecondary};
  font-size: 0.9rem;
  line-height: 1.5;
`;

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    if (!formData.name || !formData.email || !formData.message) {
      setMessage({
        type: "error",
        text: "모든 필수 필드를 입력해주세요.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // 서버 API 우선 시도
      const response = await apiClient.submitContact(formData);

      if (response.success) {
        setMessage({
          type: "success",
          text: "메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        // 서버 실패 시 Google Sheets로 폴백
        const contactData = {
          ...formData,
          timestamp: new Date().toISOString(),
        };

        const googleSuccess = await submitToGoogleSheets(contactData);

        if (googleSuccess) {
          setMessage({
            type: "success",
            text: "메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setMessage({
            type: "error",
            text: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
          });
        }
      }
    } catch (error) {
      // 서버 오류 시 Google Sheets로 폴백
      try {
        const contactData = {
          ...formData,
          timestamp: new Date().toISOString(),
        };

        const googleSuccess = await submitToGoogleSheets(contactData);

        if (googleSuccess) {
          setMessage({
            type: "success",
            text: "메시지가 성공적으로 전송되었습니다! 곧 연락드리겠습니다.",
          });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setMessage({
            type: "error",
            text: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
          });
        }
      } catch (googleError) {
        setMessage({
          type: "error",
          text: "전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
        });
      }
    }

    setIsSubmitting(false);
  };

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "React, TypeScript, JavaScript(ES6+), HTML5, CSS3 등 프론트엔드 기술",
    },
    {
      icon: Brain,
      title: "Backend & API",
      description: "Java, JSP, REST API 개발, Spring Framework 활용",
    },
    {
      icon: Smartphone,
      title: "Database & Cloud",
      description: "MySQL, PostgreSQL, Oracle, AWS EC2/S3, 클라우드 인프라",
    },
    {
      icon: Zap,
      title: "DevOps & Tools",
      description: "Jenkins, Git, GitHub/GitLab, Linux, GTM, Datadog",
    },
  ];

  return (
    <ContactContainer>
      <ContactContent>
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
          프로젝트 협업이나 기술 문의가 있으시면 언제든 연락주세요
        </SectionSubtitle>

        <ThankYouSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ThankYouTitle>🙏 감사합니다!</ThankYouTitle>
          <ThankYouText>
            제 포트폴리오를 방문해주셔서 정말 감사합니다. 
            <br />
            4년간의 개발 경험을 바탕으로 사용자 중심의 솔루션을 개발하고 있습니다.
            <br />
            새로운 기술 학습과 문제 해결에 대한 열정을 가지고 있으며,
            <br />
            팀과 함께 성장하는 것을 중요하게 생각합니다.
            <br /><br />
            프로젝트 협업이나 기술 문의가 있으시면 언제든 연락주세요!
          </ThankYouText>
        </ThankYouSection>

        <ContactGrid>
          <ContactInfo>
            <ContactCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <ContactCardTitle>
                <Mail size={20} />
                이메일
              </ContactCardTitle>
              <ContactCardContent>
                <ContactLink href="mailto:contact@ej.dev">
                  contact@ej.dev
                </ContactLink>
                <br />
                업무 시간: 평일 9:00 - 18:00
              </ContactCardContent>
            </ContactCard>

            <ContactCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <ContactCardTitle>
                <MessageSquare size={20} />
                소셜 미디어
              </ContactCardTitle>
              <ContactCardContent>
                프로젝트와 업데이트를 확인하세요
                <SocialLinks>
                  <SocialLink
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </SocialLink>
                  <SocialLink
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin size={20} />
                  </SocialLink>
                </SocialLinks>
              </ContactCardContent>
            </ContactCard>

            <ContactCard
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ContactCardTitle>
                <MapPin size={20} />
                위치
              </ContactCardTitle>
              <ContactCardContent>
                서울특별시, 대한민국
                <br />
                원격 근무 가능
                <br />
                온라인 미팅 선호
              </ContactCardContent>
            </ContactCard>
          </ContactInfo>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <ContactForm onSubmit={handleSubmit}>
              <h3 style={{ marginBottom: "2rem", color: "#ffffff" }}>
                메시지 보내기
              </h3>

              {message && (
                <Message
                  type={message.type}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {message.type === "success" ? (
                    <CheckCircle size={20} />
                  ) : (
                    <AlertCircle size={20} />
                  )}
                  {message.text}
                </Message>
              )}

              <FormGroup>
                <FormLabel>이름 *</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="이름을 입력하세요"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>이메일 *</FormLabel>
                <FormInput
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="이메일을 입력하세요"
                  required
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>제목</FormLabel>
                <FormInput
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="제목을 입력하세요"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>메시지 *</FormLabel>
                <FormTextarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="프로젝트나 협업에 대해 이야기해보세요"
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "전송 중..." : "메시지 보내기"}
                <Send size={20} />
              </SubmitButton>
            </ContactForm>
          </motion.div>
        </ContactGrid>

        <SkillsSection>
          <SectionTitle
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            전문 분야
          </SectionTitle>

          <SkillsGrid>
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <SkillIcon>
                  <skill.icon size={24} />
                </SkillIcon>
                <SkillTitle>{skill.title}</SkillTitle>
                <SkillDescription>{skill.description}</SkillDescription>
              </SkillCard>
            ))}
          </SkillsGrid>
        </SkillsSection>
      </ContactContent>
    </ContactContainer>
  );
}

export default ContactPage;
