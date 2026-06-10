import { test, expect } from "@playwright/test";

test.describe("Growth Journal", () => {
  test("lists automation testing note first", async ({ page }) => {
    await page.goto("/journal");

    const firstArticle = page.locator("article").first();
    await expect(firstArticle.getByRole("heading", { level: 2 })).toContainText(
      "Playwright E2E + QA Dashboard",
    );
  });

  test("lists github heatmap note second", async ({ page }) => {
    await page.goto("/journal");

    const secondArticle = page.locator("article").nth(1);
    await expect(secondArticle.getByRole("heading", { level: 2 })).toContainText(
      "Multi-account GitHub + GitLab heatmap",
    );
  });
});
