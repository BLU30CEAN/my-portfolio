import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { AdminTemplateId } from "../data/adminTemplates";
import {
  recommendFromWizard,
  type WizardAnswers,
} from "../data/adminTemplates";

type State = {
  stepIndex: number;
  answers: WizardAnswers;
  setAnswer: (key: keyof WizardAnswers, value: string | string[]) => void;
  toggleTab: (tabId: string) => void;
  next: () => void;
  prev: () => void;
  reset: () => void;
  recommendedTemplate: () => AdminTemplateId;
};

const initialAnswers: WizardAnswers = { tabs: ["schema", "import", "browse"] };

export const useAdminWizardStore = create<State>()(
  persist(
    (set, get) => ({
      stepIndex: 0,
      answers: initialAnswers,
      setAnswer: (key, value) =>
        set((s) => ({
          answers: {
            ...s.answers,
            [key]: value,
          },
        })),
      toggleTab: (tabId) =>
        set((s) => {
          const tabs = new Set(s.answers.tabs);
          if (tabs.has(tabId)) tabs.delete(tabId);
          else tabs.add(tabId);
          return { answers: { ...s.answers, tabs: [...tabs] } };
        }),
      next: () => set((s) => ({ stepIndex: Math.min(s.stepIndex + 1, 3) })),
      prev: () => set((s) => ({ stepIndex: Math.max(s.stepIndex - 1, 0) })),
      reset: () => set({ stepIndex: 0, answers: initialAnswers }),
      recommendedTemplate: () => recommendFromWizard(get().answers),
    }),
    { name: "admin-wizard-v1" },
  ),
);
