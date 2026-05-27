import { useEffect, useState } from "react";

/**
 * 스크롤 위치에 따라 두 boolean 플래그를 한 번에 반환.
 * - scrolled: nav 배경 강조용 (50px 이상)
 * - showTop: top 버튼 표시용 (300px 이상)
 *
 * passive listener + rAF throttle 로 부담을 낮춤.
 */
export function useScrollFlags(): { scrolled: boolean; showTop: boolean } {
  const [state, setState] = useState({ scrolled: false, showTop: false });

  useEffect(() => {
    if (typeof window === "undefined") return;

    let raf = 0;
    const tick = () => {
      const y = window.scrollY;
      setState((s) => {
        const scrolled = y > 50;
        const showTop = y > 300;
        if (s.scrolled === scrolled && s.showTop === showTop) return s;
        return { scrolled, showTop };
      });
      raf = 0;
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    tick();
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return state;
}
