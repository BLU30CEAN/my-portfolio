import type { NavigateFunction } from "react-router-dom";

export type HomeScrollState = { scrollTo?: string };

const NAV_OFFSET_PX = 88;
const MAX_SCROLL_ATTEMPTS = 40;
const SCROLL_RETRY_MS = 50;

/** BrowserRouter + DOM id 앵커 스크롤 (고정 nav 보정, lazy mount 재시도) */
export function scrollToPageSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
) {
  const run = (attempt = 0) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const top =
        el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET_PX;
      window.scrollTo({ top: Math.max(0, top), behavior });
      return;
    }
    if (attempt < MAX_SCROLL_ATTEMPTS) {
      window.setTimeout(() => run(attempt + 1), SCROLL_RETRY_MS);
    }
  };

  window.requestAnimationFrame(() => run(0));
}

/** @deprecated scrollToPageSection 과 동일 — 홈 섹션용 별칭 */
export function scrollToHomeSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
) {
  scrollToPageSection(sectionId, behavior);
}

export function navigateToHomeSection(
  navigate: NavigateFunction,
  sectionId: string,
) {
  navigate("/", { state: { scrollTo: sectionId } });
}

export function parseRouteSection(search: string): string | null {
  const params = new URLSearchParams(search);
  return params.get("section") || params.get("post");
}
