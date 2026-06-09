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
  justify-content: center;
  flex-shrink: 0;
  background: ${(p) => p.theme.colors.primarySoft};
  color: ${(p) => p.theme.colors.primary};
  border: 1px solid transparent;
  border-radius: ${(p) => p.theme.radii.sm};
  padding: 0.45rem;
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
      toast.success("이메일 주소를 복사했습니다.");
    } catch {
      toast.error("복사에 실패했습니다. 주소를 직접 선택해 주세요.");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) {
      toast.info("메시지 내용을 먼저 입력해 주세요.");
      return;
    }
    const ok = await submit();
    if (ok) toast.success("소중한 메시지를 잘 전달받았습니다. 감사합니다.");
  };

  return (
    <Section id="contact" dotCount={8} dotSeed={6} fullHeight glow>
      <SectionTitle
        eyebrow="Contact"
        title="함께 만들어 갈 분을 기다리고 있습니다"
        subtitle="평일엔 24시간, 주말에도 48시간 안에 답변드릴게요."
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
              <Copy size={14} />
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
            정규직 채용을 우선 검토하고 있으며,<br />
            프리랜서·프로젝트 단위 협업도 열어 두고 있습니다.
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
            평일 24시간 이내 답변<br />
            주말·공휴일 48시간 이내 답변
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
        <GbLead>짧은 인사도, 협업 제안도 좋습니다. 편하게 한마디 남겨 주세요.</GbLead>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="이름 (선택)"
            maxLength={20}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Textarea
            placeholder="전하고 싶은 이야기를 자유롭게 적어 주세요…"
            maxLength={200}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Submit type="submit" $disabled={submitting}>
            {submitting ? "보내는 중…" : "메시지 보내기"}
          </Submit>
        </Form>
      </Guestbook>
    </Section>
  );
};

export default ContactSection;
