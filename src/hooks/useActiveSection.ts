import { useEffect, useState } from "react";

/**
 * IntersectionObserver 기반 액티브 섹션 추적.
 * - rootMargin 으로 “화면 중앙” 부근 섹션을 활성으로 잡는다.
 * - 스크롤 이벤트 풀링보다 가볍고 정확하다.
 */
export function useActiveSection(sectionIds: string[], enabled = true): string {
  const [active, setActive] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // 가장 큰 intersectionRatio를 가진 항목을 active 로 선택
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sectionIds, enabled]);

  return active;
}
