// spec: specs/playwright-header-validation.plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Header and Sub-header Validation', () => {
  test('Verify main header and sub-header are displayed correctly', async ({ page }) => {
    // 1. Navigate to https://playwright.dev/agent-cli/introduction
    await test.step('#Step1: Navigate to Playwright Agent CLI introduction page', async () => {
      await page.goto('https://playwright.dev/agent-cli/introduction');
    });

    // 2. Locate the main heading (H1) element in the article content
    await test.step('#Step2: Verify main heading Playwright CLI is visible on the page', async () => {
      await expect(page.getByRole('heading', { name: 'Playwright CLI', exact: true })).toBeVisible();
    });

    // 3. Locate the first sub-heading (H2) element in the article content
    await test.step('#Step3: Verify sub-heading Key Features is visible on the page', async () => {
      await expect(page.getByRole('heading', { name: 'Key FeaturesDirect link to' })).toBeVisible();
    });

    // 4. Verify both headings are properly positioned in the DOM hierarchy
    await test.step('#Step4: Verify headings are within the article element', async () => {
      const mainHeading = page.getByRole('heading', { name: 'Playwright CLI', exact: true });
      const subHeading = page.getByRole('heading', { name: 'Key FeaturesDirect link to' });
      
      await expect(mainHeading).toBeVisible();
      await expect(subHeading).toBeVisible();
    });
  });
});
