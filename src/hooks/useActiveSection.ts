import { useEffect, useRef, useState } from "react";

/**
 * IntersectionObserver 기반 액티브 섹션 추적.
 * - rootMargin 으로 화면 중앙 부근 섹션을 활성으로 잡는다.
 * - 콜백 batch 에 non-intersecting 만 오면 active 가 안 바뀌는 문제를
 *   섹션별 ratio Map 으로 막는다.
 */
export function useActiveSection(sectionIds: string[], enabled = true): string {
  const [active, setActive] = useState(sectionIds[0] ?? "");
  const ratiosRef = useRef<Map<string, number>>(new Map());

  useEffect(() => {
    if (!enabled || typeof window === "undefined") return;

    ratiosRef.current = new Map(sectionIds.map((id) => [id, 0]));

    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);

    if (elements.length === 0) return;

    const pickActive = () => {
      let bestId = sectionIds[0] ?? "";
      let bestRatio = 0;

      for (const id of sectionIds) {
        const ratio = ratiosRef.current.get(id) ?? 0;
        if (ratio > bestRatio) {
          bestRatio = ratio;
          bestId = id;
        }
      }

      if (bestRatio > 0) setActive(bestId);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          ratiosRef.current.set(
            entry.target.id,
            entry.isIntersecting ? entry.intersectionRatio : 0,
          );
        }
        pickActive();
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
