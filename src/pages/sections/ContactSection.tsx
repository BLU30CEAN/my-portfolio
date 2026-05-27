import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Copy, Mail, Briefcase, Cpu, Clock } from "lucide-react";
import Section from "../../components/layout/Section";
import SectionTitle from "../../components/ui/SectionTitle";
import MagneticButton from "../../components/ui/MagneticButton";
import { useToast } from "../../components/ui/Toast";
import { useGuestbook } from "../../hooks/useGuestbook";

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1rem;
  margin-bottom: 2rem;
`;

const InfoCard = styled(motion.div)`
  background: ${(p) => p.theme.colors.surface};
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.lg};
  padding: 1.5rem;
  transition: border-color ${(p) => p.theme.motion.dur}
      ${(p) => p.theme.motion.easeOut},
    transform ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut};

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    transform: translateY(-3px);
  }
`;

const InfoHead = styled.div`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  margin-bottom: 0.55rem;
  color: ${(p) => p.theme.colors.primary};
  font-weight: 700;
  font-size: 1rem;
`;

const InfoBody = styled.p`
  margin: 0;
  color: ${(p) => p.theme.colors.textSecondary};
  font-size: 0.92rem;
  line-height: 1.65;
`;

const EmailRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
`;

const CopyBtn = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
  border: 1px solid transparent;
  border-radius: ${(p) => p.theme.radii.sm};
  padding: 0.4rem 0.65rem;
  font-size: 0.8rem;
  font-weight: 600;
  cursor: pointer;
  transition: all ${(p) => p.theme.motion.durFast}
    ${(p) => p.theme.motion.easeOut};

  &:hover {
    background: ${(p) => p.theme.colors.gradient};
    color: #fff;
  }
`;

const CTAWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 3rem;
`;

const Guestbook = styled(motion.div)`
  margin-top: 1rem;
  padding: 2rem;
  background: ${(p) => p.theme.colors.surface};
  border-radius: ${(p) => p.theme.radii.lg};
  border: 1px solid ${(p) => p.theme.colors.border};
  box-shadow: ${(p) => p.theme.shadows.card};
`;

const GbTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  margin: 0 0 0.4rem;
  color: ${(p) => p.theme.colors.primary};
  text-align: center;
`;

const GbLead = styled.p`
  color: ${(p) => p.theme.colors.textSecondary};
  text-align: center;
  margin: 0 0 1.25rem;
  font-size: 0.92rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const Input = styled.input`
  padding: 0.75rem 0.9rem;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.md};
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  font-size: 0.92rem;
  font-family: inherit;
  transition: all ${(p) => p.theme.motion.durFast}
    ${(p) => p.theme.motion.easeOut};

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.colors.primary};
    box-shadow: 0 0 0 3px ${(p) => p.theme.colors.ring};
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.textMuted};
  }
`;

const Textarea = styled.textarea`
  padding: 0.85rem 0.9rem;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.md};
  background: ${(p) => p.theme.colors.background};
  color: ${(p) => p.theme.colors.text};
  font-size: 0.92rem;
  min-height: 110px;
  resize: vertical;
  font-family: inherit;
  transition: all ${(p) => p.theme.motion.durFast}
    ${(p) => p.theme.motion.easeOut};

  &:focus {
    outline: none;
    border-color: ${(p) => p.theme.colors.primary};
    box-shadow: 0 0 0 3px ${(p) => p.theme.colors.ring};
  }

  &::placeholder {
    color: ${(p) => p.theme.colors.textMuted};
  }
`;

const Submit = styled.button<{ $disabled: boolean }>`
  align-self: flex-end;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  background: ${(p) => p.theme.colors.gradient};
  color: #fff;
  border: none;
  padding: 0.7rem 1.3rem;
  border-radius: ${(p) => p.theme.radii.pill};
  font-size: 0.92rem;
  font-weight: 700;
  cursor: ${(p) => (p.$disabled ? "not-allowed" : "pointer")};
  opacity: ${(p) => (p.$disabled ? 0.6 : 1)};
  box-shadow: ${(p) => p.theme.shadows.button};
  font-family: inherit;

  &:hover {
    filter: ${(p) => (p.$disabled ? "none" : "brightness(1.05)")};
  }
`;

const ContactSection: React.FC<{ email: string }> = ({ email }) => {
  const toast = useToast();
  const { name, setName, message, setMessage, submitting, submit } =
    useGuestbook();

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      toast.success("이메일이 클립보드에 복사되었습니다.");
    } catch {
      toast.error("복사에 실패했습니다. 직접 선택해주세요.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.info("메시지를 입력해주세요.");
      return;
    }
    const ok = await submit();
    if (ok) toast.success("방명록이 성공적으로 남겨졌습니다.");
  };

  return (
    <Section id="contact" dotCount={8} dotSeed={6} fullHeight glow>
      <SectionTitle
        eyebrow="Contact"
        title="함께 만들고 싶다면"
        subtitle="평일 24시간, 주말 48시간 안에 답변드립니다."
      />

      <InfoGrid>
        <InfoCard
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45 }}
        >
          <InfoHead>
            <Mail size={18} /> Email
          </InfoHead>
          <EmailRow>
            <InfoBody>{email}</InfoBody>
            <CopyBtn onClick={copyEmail} aria-label="이메일 복사">
              <Copy size={14} /> 복사
            </CopyBtn>
          </EmailRow>
        </InfoCard>

        <InfoCard
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <InfoHead>
            <Briefcase size={18} /> 고용 형태
          </InfoHead>
          <InfoBody>
            정직원 선호 (프리랜서도 협의 가능)<br />
            프로젝트 기반 협업도 고려
          </InfoBody>
        </InfoCard>

        <InfoCard
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: 0.16 }}
        >
          <InfoHead>
            <Cpu size={18} /> 기술 스택
          </InfoHead>
          <InfoBody>
            React, TypeScript, React Native, Spring Boot, Python, FastAPI,
            AWS, Docker, PostgreSQL
          </InfoBody>
        </InfoCard>

        <InfoCard
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.45, delay: 0.24 }}
        >
          <InfoHead>
            <Clock size={18} /> 응답 시간
          </InfoHead>
          <InfoBody>
            평일 24시간 이내<br />
            주말 48시간 이내
          </InfoBody>
        </InfoCard>
      </InfoGrid>

      <CTAWrap>
        <MagneticButton
          onClick={() => (window.location.href = `mailto:${email}`)}
        >
          이메일 보내기 <Mail size={18} />
        </MagneticButton>
      </CTAWrap>

      <Guestbook
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.5 }}
      >
        <GbTitle>방명록</GbTitle>
        <GbLead>간단한 메시지나 응원의 말씀을 남겨주세요.</GbLead>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="이름 (선택)"
            maxLength={20}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            placeholder="메시지를 입력하세요…"
            maxLength={200}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Submit type="submit" $disabled={submitting}>
            {submitting ? "전송 중…" : "메시지 남기기"}
          </Submit>
        </Form>
      </Guestbook>
    </Section>
  );
};

export default ContactSection;
