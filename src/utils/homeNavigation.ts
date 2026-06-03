/** 홈(/) 마운트 후 섹션으로 스크롤 — HashRouter에서 id 앵커 대신 사용 */
export function scrollToHomeSection(
  sectionId: string,
  behavior: ScrollBehavior = "smooth",
) {
  const run = () =>
    document
      .getElementById(sectionId)
      ?.scrollIntoView({ behavior, block: "start" });

  window.requestAnimationFrame(() => {
    run();
    window.setTimeout(run, 120);
  });
}

export type HomeScrollState = { scrollTo?: string };
