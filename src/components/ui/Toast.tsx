import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, AlertCircle, Info, XCircle } from "lucide-react";

type ToastKind = "success" | "error" | "info";

type Toast = {
  id: number;
  kind: ToastKind;
  message: string;
};

type ContextValue = {
  show: (message: string, kind?: ToastKind) => void;
  success: (m: string) => void;
  error: (m: string) => void;
  info: (m: string) => void;
};

const ToastContext = createContext<ContextValue | undefined>(undefined);

export const useToast = (): ContextValue => {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used within <ToastProvider>");
  return ctx;
};

const Stack = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  z-index: 11000;
  pointer-events: none;
  max-width: calc(100% - 2rem);
`;

const ToastEl = styled(motion.div)<{ $kind: ToastKind }>`
  pointer-events: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.1rem;
  border-radius: ${(p) => p.theme.radii.md};
  background: ${(p) => p.theme.colors.backgroundElevated};
  color: ${(p) => p.theme.colors.text};
  border: 1px solid
    ${(p) =>
      p.$kind === "success"
        ? p.theme.colors.success
        : p.$kind === "error"
        ? p.theme.colors.danger
        : p.theme.colors.primary};
  box-shadow: ${(p) => p.theme.shadows.cardHover};
  font-size: 0.9rem;
  font-weight: 500;
  min-width: 220px;
  max-width: 360px;

  svg {
    flex-shrink: 0;
    color: ${(p) =>
      p.$kind === "success"
        ? p.theme.colors.success
        : p.$kind === "error"
        ? p.theme.colors.danger
        : p.theme.colors.primary};
  }
`;

const Close = styled.button`
  margin-left: auto;
  background: transparent;
  border: none;
  color: ${(p) => p.theme.colors.textMuted};
  cursor: pointer;
  display: inline-flex;
  padding: 0;

  &:hover {
    color: ${(p) => p.theme.colors.text};
  }
`;

const ICONS: Record<ToastKind, React.ReactElement> = {
  success: <CheckCircle2 size={18} />,
  error: <AlertCircle size={18} />,
  info: <Info size={18} />,
};

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const idRef = useRef(0);

  const dismiss = useCallback((id: number) => {
    setToasts((arr) => arr.filter((t) => t.id !== id));
  }, []);

  const show = useCallback(
    (message: string, kind: ToastKind = "info") => {
      const id = ++idRef.current;
      setToasts((arr) => [...arr, { id, kind, message }]);
      window.setTimeout(() => dismiss(id), 3200);
    },
    [dismiss],
  );

  const value = useMemo<ContextValue>(
    () => ({
      show,
      success: (m: string) => show(m, "success"),
      error: (m: string) => show(m, "error"),
      info: (m: string) => show(m, "info"),
    }),
    [show],
  );

  // 컴포넌트가 SSR 되거나 document 가 없는 환경 보호
  const [portalTarget, setPortalTarget] = useState<HTMLElement | null>(null);
  useEffect(() => {
    setPortalTarget(document.body);
  }, []);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {portalTarget &&
        createPortal(
          <Stack role="region" aria-live="polite" aria-label="알림">
            <AnimatePresence>
              {toasts.map((t) => (
                <ToastEl
                  key={t.id}
                  $kind={t.kind}
                  initial={{ opacity: 0, x: 24, scale: 0.92 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: 24, scale: 0.92 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                >
                  {ICONS[t.kind]}
                  <span>{t.message}</span>
                  <Close
                    aria-label="알림 닫기"
                    onClick={() => dismiss(t.id)}
                  >
                    <XCircle size={16} />
                  </Close>
                </ToastEl>
              ))}
            </AnimatePresence>
          </Stack>,
          portalTarget,
        )}
    </ToastContext.Provider>
  );
};
