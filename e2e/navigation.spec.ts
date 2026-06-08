import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("opens journal from nav", async ({ page }) => {
    await page.goto("/#/");

    await page.getByRole("button", { name: "Notes" }).click();
    await expect(page).toHaveURL(/#\/journal$/);
    await expect(
      page.getByRole("heading", {
        name: /Playwright E2E \+ QA Dashboard/,
      }),
    ).toBeVisible();
  });

  test("opens QA dashboard route", async ({ page }) => {
    await page.goto("/#/qa");

    await expect(page.getByRole("heading", { name: "QA 대시보드" })).toBeVisible();
    await expect(page.getByTestId("qa-pass-rate")).toBeVisible();
  });
});
