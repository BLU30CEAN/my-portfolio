import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  parseRouteSection,
  scrollToPageSection,
  type HomeScrollState,
} from "../utils/homeNavigation";

type Options = {
  /** 홈(/) — navigate state.scrollTo 처리 */
  home?: boolean;
};

/**
 * 라우트 전환 시:
 * - ?section= / ?post= 쿼리 → 해당 id로 스크롤
 * - 홈 + state.scrollTo → 섹션 스크롤
 * - 그 외 → 페이지 상단
 */
export function useRouteSectionScroll(options?: Options) {
  const location = useLocation();

  useEffect(() => {
    const querySection = parseRouteSection(location.search);
    if (querySection) {
      scrollToPageSection(querySection);
      return;
    }

    if (options?.home) {
      const stateSection = (location.state as HomeScrollState | null)?.scrollTo;
      if (stateSection) {
        scrollToPageSection(stateSection);
        return;
      }
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.search, location.state, options?.home]);
}
