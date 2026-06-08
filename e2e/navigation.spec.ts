import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("opens journal from nav", async ({ page }) => {
    await page.goto("/#/");

    await page.getByRole("button", { name: "연구 노트" }).click();
    await expect(page).toHaveURL(/#\/journal$/);
    await expect(
      page.getByRole("heading", {
        name: /Playwright로 포트폴리오 QA 파이프라인 구축/,
      }),
    ).toBeVisible();
  });

  test("opens QA dashboard route", async ({ page }) => {
    await page.goto("/#/qa");

    await expect(page.getByRole("heading", { name: "QA 대시보드" })).toBeVisible();
    await expect(page.getByText("Playwright E2E 실행 리포트")).toBeVisible();
  });
});
