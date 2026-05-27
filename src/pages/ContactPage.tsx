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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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
        text: "필수 항목을 모두 채워 주세요.",
      });
      setIsSubmitting(false);
      return;
    }

    const successText =
      "메시지가 무사히 전달되었습니다. 확인 후 빠르게 답변드리겠습니다.";
    const failureText =
      "전송 중 문제가 발생했습니다. 잠시 후 다시 시도해 주세요.";

    try {
      const response = await apiClient.submitContact(formData);

      if (response.success) {
        setMessage({ type: "success", text: successText });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const contactData = {
          ...formData,
          timestamp: new Date().toISOString(),
        };

        const googleSuccess = await submitToGoogleSheets(contactData);

        if (googleSuccess) {
          setMessage({ type: "success", text: successText });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setMessage({ type: "error", text: failureText });
        }
      }
    } catch (error) {
      try {
        const contactData = {
          ...formData,
          timestamp: new Date().toISOString(),
        };

        const googleSuccess = await submitToGoogleSheets(contactData);

        if (googleSuccess) {
          setMessage({ type: "success", text: successText });
          setFormData({ name: "", email: "", subject: "", message: "" });
        } else {
          setMessage({ type: "error", text: failureText });
        }
      } catch (googleError) {
        setMessage({ type: "error", text: failureText });
      }
    }

    setIsSubmitting(false);
  };

  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description:
        "React, TypeScript, React Native, JavaScript(ES6+), Tailwind CSS, Shadcn UI",
    },
    {
      icon: Brain,
      title: "Backend & AI",
      description: "Java, Spring Boot, Python, FastAPI, REST API, Swagger",
    },
    {
      icon: Smartphone,
      title: "Database & Cloud",
      description: "PostgreSQL, MySQL, Redis, AWS EC2/S3, Docker",
    },
    {
      icon: Zap,
      title: "DevOps & Tools",
      description: "Jenkins, Git, Linux, GTM, Datadog, CI/CD",
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
          프로젝트 협업이나 기술 문의가 있으시면 언제든 편하게 연락 주세요.
        </SectionSubtitle>

        <ThankYouSection
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <ThankYouTitle>진심으로 감사합니다</ThankYouTitle>
          <ThankYouText>
            포트폴리오를 끝까지 살펴봐 주셔서 감사합니다.
            <br />
            웹·모바일·AI를 하나의 흐름으로 엮어 온 5년 차 풀스택 개발자로서,
            <br />
            LLM·실시간 메타휴먼·결제·앱·웹 연동처럼 운영 부담이 큰 도메인을
            <br />
            설계에서 구현, 모니터링까지 한 사람의 책임 안에서 정돈해 왔습니다.
            <br />
            <br />
            낯선 기술을 마주할 때는 공식 문서와 변경 이력에서부터 출발하고,
            <br />
            모르는 영역은 추정 대신 재현 가능한 작은 실험으로 먼저 확인합니다.
            <br />
            화려한 기능을 좇기보다, 운영자가 안심하고 잠들 수 있는 시스템을
            <br />
            만드는 데 시간을 쓰고 싶다는 마음으로 일해 왔습니다.
            <br />
            <br />
            함께 만들어 갈 기회가 있다면 언제든 가벼운 마음으로 연락 주세요.
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
                <ContactLink href="mailto:ej.an.company@gmail.com">
                  ej.an.company@gmail.com
                </ContactLink>
                <br />
                연락 가능 시간: 평일 오전 9시 — 오후 6시
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
                소셜 채널
              </ContactCardTitle>
              <ContactCardContent>
                진행 중인 프로젝트와 최근 작업 흐름은 아래 채널에서 살펴보실 수 있습니다.
                <SocialLinks>
                  <SocialLink
                    href="https://github.com/BLU30CEAN"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </SocialLink>
                  <SocialLink
                    href="https://linkedin.com/in/eunchan"
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
                서울특별시 거주 · 대한민국
                <br />
                원격 근무 가능
                <br />
                온라인 미팅 우선
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
              <p style={{ marginTop: "-1.25rem", marginBottom: "1.5rem", color: "rgba(255,255,255,0.7)", fontSize: "0.95rem", lineHeight: 1.6 }}>
                업무 제안·기술 문의·간단한 인사 모두 환영합니다. 답변은 정중하고
                신속하게 드리겠습니다.
              </p>

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
                <FormLabel>성함 *</FormLabel>
                <FormInput
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="어떻게 불러 드리면 좋을까요?"
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
                  placeholder="회신 받으실 이메일 주소를 적어 주세요"
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
                  placeholder="한 줄로 요약해 주시면 좋습니다 (선택)"
                />
              </FormGroup>

              <FormGroup>
                <FormLabel>메시지 *</FormLabel>
                <FormTextarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="협업·문의 내용을 편하게 적어 주세요"
                  required
                />
              </FormGroup>

              <SubmitButton
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isSubmitting ? "보내는 중..." : "메시지 보내기"}
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
