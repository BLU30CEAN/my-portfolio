import { test, expect } from "@playwright/test";

test.describe("QA Dashboard", () => {
  test("renders summary metrics from report JSON", async ({ page }) => {
    await page.goto("/qa");

    await expect(page.getByTestId("qa-pass-rate")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("qa-total-tests")).toBeVisible();
    await expect(page.getByTestId("qa-open-defects")).toBeVisible();
    await expect(page.getByTestId("qa-suite-table")).toBeVisible();
    await expect(page.getByTestId("qa-unlock-form")).toBeVisible();
  });

  test("shows defect log section", async ({ page }) => {
    await page.goto("/qa");

    await expect(page.getByTestId("qa-defect-log")).toBeVisible();
    await expect(page.getByTestId("qa-run-history")).toBeVisible();
  });
});
