import { test, expect } from "@playwright/test";

test.describe("Home", () => {
  test("loads hero and main navigation", async ({ page }) => {
    await page.goto("/");

    await expect(page.getByRole("link", { name: "본문으로 건너뛰기" })).toBeVisible();
    await expect(page.getByRole("navigation")).toBeVisible();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  });

  test("exposes engineering and projects sections", async ({ page }) => {
    await page.goto("/");

    await expect(page.locator("#projects")).toBeAttached();
    await expect(page.locator("#engineering")).toBeAttached();
  });

  test("learning banner precedes github section in DOM order", async ({ page }) => {
    await page.goto("/");

    const journalBanner = page.locator("#journal-banner");
    const githubSection = page.locator("#github-activity");

    await expect(journalBanner).toBeAttached();
    await expect(githubSection).toBeAttached();

    const journalBox = await journalBanner.boundingBox();
    const githubBox = await githubSection.boundingBox();
    expect(journalBox).not.toBeNull();
    expect(githubBox).not.toBeNull();
    expect(journalBox!.y).toBeLessThan(githubBox!.y);
  });
});
