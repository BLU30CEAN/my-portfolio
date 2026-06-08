import { test, expect } from "@playwright/test";

test.describe("Growth Journal", () => {
  test("lists automation testing note first", async ({ page }) => {
    await page.goto("/#/journal");

    const firstArticle = page.locator("article").first();
    await expect(firstArticle.getByRole("heading", { level: 2 })).toContainText(
      "Playwright로 포트폴리오 QA 파이프라인 구축",
    );
  });

  test("lists github heatmap note second", async ({ page }) => {
    await page.goto("/#/journal");

    const secondArticle = page.locator("article").nth(1);
    await expect(secondArticle.getByRole("heading", { level: 2 })).toContainText(
      "여러 GitHub 계정의 contribution을 하나의 히트맵으로",
    );
  });
});
