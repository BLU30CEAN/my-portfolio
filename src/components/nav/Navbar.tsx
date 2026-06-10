import React, { useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";

export type NavItem = {
  id: string;
  label: string;
  /** 홈 내부 섹션 id. journal 같은 별도 라우트면 비워둔다. */
  section?: string;
  /** 별도 라우트로 갈 항목 (e.g. "/journal"). */
  route?: string;
};

type Props = {
  items: NavItem[];
  /** 현재 활성 항목 id */
  activeId: string;
  /** 모바일 메뉴 열려 있는지 */
  open: boolean;
  setOpen: (v: boolean) => void;
  isScrolled: boolean;
  /** 홈 내부 섹션으로 이동 시 호출 */
  onSection: (sectionId: string) => void;
};

const NavWrap = styled.nav<{ $isScrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: ${(p) =>
    p.$isScrolled
      ? `color-mix(in srgb, ${p.theme.colors.background} 85%, transparent)`
      : `color-mix(in srgb, ${p.theme.colors.background} 60%, transparent)`};
  backdrop-filter: saturate(180%) blur(18px);
  -webkit-backdrop-filter: saturate(180%) blur(18px);
  border-bottom: 1px solid
    ${(p) => (p.$isScrolled ? p.theme.colors.borderStrong : "transparent")};
  transition: background ${(p) => p.theme.motion.dur}
      ${(p) => p.theme.motion.easeOut},
    border-color ${(p) => p.theme.motion.dur} ${(p) => p.theme.motion.easeOut};
`;

const Inner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;

  @media (max-width: 768px) {
    padding: 0 1rem;
    height: 64px;
  }
`;

const Logo = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  background: transparent;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: ${(p) => p.theme.radii.md};
  padding: 0.5rem 0.85rem;
  cursor: pointer;
  font-family: inherit;
  color: ${(p) => p.theme.colors.text};
  font-weight: 700;
  letter-spacing: -0.01em;
  transition: border-color ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut},
    background ${(p) => p.theme.motion.durFast}
      ${(p) => p.theme.motion.easeOut};

  &:hover {
    border-color: ${(p) => p.theme.colors.primary};
    background: ${(p) => p.theme.colors.primarySoft};
  }
`;

const LogoMark = styled.span`
  width: 28px;
  height: 28px;
  border-radius: 8px;
  background: ${(p) => p.theme.colors.gradient};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: -0.04em;
`;

const LogoText = styled.span`
  background: ${(p) => p.theme.colors.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 800;
  letter-spacing: -0.02em;
`;

const DesktopLinks = styled.div`
  display: flex;
  gap: 1.4rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

const LinkBtn = styled.button<{ $active: boolean }>`
  position: relative;
  border: none;
  background: transparent;
  font-family: inherit;
  font-size: 0.95rem;
  font-weight: ${(p) => (p.$active ? 600 : 500)};
  color: ${(p) =>
    p.$active ? p.theme.colors.primary : p.theme.colors.text};
  padding: 0.4rem 0.2rem;
  cursor: pointer;
  transition: color ${(p) => p.theme.motion.durFast}
    ${(p) => p.theme.motion.easeOut};

  &:hover {
    color: ${(p) => p.theme.colors.primary};
  }
`;

const LinkUnderline = styled(motion.span)`
  position: absolute;
  left: 0;
  right: 0;
  bottom: -6px;
  height: 2px;
  border-radius: 2px;
  background: ${(p) => p.theme.colors.gradient};
`;

const MobileToggle = styled.button`
  display: none;
  background: transparent;
  border: 1px solid ${(p) => p.theme.colors.border};
  border-radius: 10px;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.text};

  &:hover {
    color: ${(p) => p.theme.colors.primary};
    border-color: ${(p) => p.theme.colors.primary};
  }

  @media (max-width: 768px) {
    display: inline-flex;
  }
`;

const MobilePanel = styled(motion.div)`
  position: fixed;
  top: 64px;
  left: 0;
  right: 0;
  background: ${(p) => p.theme.colors.background};
  border-bottom: 1px solid ${(p) => p.theme.colors.borderStrong};
  padding: 1.25rem 1rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  z-index: 999;
  box-shadow: ${(p) => p.theme.shadows.card};
`;

const MobileLink = styled.button<{ $active: boolean }>`
  appearance: none;
  background: ${(p) =>
    p.$active ? p.theme.colors.primarySoft : "transparent"};
  border: none;
  border-radius: ${(p) => p.theme.radii.md};
  padding: 0.85rem 1rem;
  text-align: left;
  font-family: inherit;
  font-size: 1.05rem;
  font-weight: ${(p) => (p.$active ? 700 : 500)};
  color: ${(p) =>
    p.$active ? p.theme.colors.primary : p.theme.colors.text};
  cursor: pointer;
`;

const Navbar: React.FC<Props> = ({
  items,
  activeId,
  open,
  setOpen,
  isScrolled,
  onSection,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  // ESC 로 모바일 메뉴 닫기
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open, setOpen]);

  // 모바일 메뉴 열릴 때 body 스크롤 잠금
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev || "";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const handleClick = (item: NavItem) => {
    setOpen(false);
    if (item.route) {
      navigate(item.route);
      return;
    }
    if (item.section) {
      onSection(item.section);
    }
  };

  const goHome = () => {
    setOpen(false);
    navigate("/", { state: { scrollTo: "home" } });
  };

  return (
    <NavWrap $isScrolled={isScrolled} aria-label="주요 메뉴">
      <Inner>
        <Logo
          onClick={goHome}
          whileHover={{ y: -1 }}
          whileTap={{ scale: 0.98 }}
          aria-label="홈으로"
        >
          <LogoMark>EJ</LogoMark>
          <LogoText>Portfolio</LogoText>
        </Logo>

        <DesktopLinks>
          {items.map((item) => {
            const active = activeId === item.id;
            return (
              <LinkBtn
                key={item.id}
                $active={active}
                onClick={() => handleClick(item)}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
                {active && (
                  <LinkUnderline
                    layoutId="nav-underline"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                )}
              </LinkBtn>
            );
          })}
          <ThemeToggle />
        </DesktopLinks>

        <MobileToggle
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </MobileToggle>
      </Inner>

      <AnimatePresence>
        {open && (
          <MobilePanel
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            role="dialog"
            aria-modal="true"
          >
            {items.map((item) => {
              const active = activeId === item.id;
              return (
                <MobileLink
                  key={item.id}
                  $active={active}
                  onClick={() => handleClick(item)}
                  aria-current={active ? "page" : undefined}
                >
                  {item.label}
                </MobileLink>
              );
            })}
            <div style={{ marginTop: "0.5rem" }}>
              <ThemeToggle />
            </div>
            {/* unused location to satisfy linter / future use */}
            <span hidden>{location.pathname}</span>
          </MobilePanel>
        )}
      </AnimatePresence>
    </NavWrap>
  );
};

export default Navbar;
