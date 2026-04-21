import { test, expect } from '@playwright/test';

test.describe('Test group', () => {
  test('Playwright MCP Test', async ({ page }) => {
  await test.step('#Step1: navigate to MCP page', async () => {
    await page.goto('docs/getting-started-mcp/');
  });

  await test.step('#Step2: verify the heading of the page', async () => {
    await expect(page.getByRole('heading', { name: 'Playwright MCP' })).toBeVisible();
  });

  await test.step('#Step3: Verify its sub-headings Introduction', async () => {
    await expect(page.getByRole('heading', { name: 'IntroductionDirect link to' })).toBeVisible();
  });

  await test.step('#Step4: Verify its sub-headings prerequisites', async () => {
    await expect(page.getByRole('heading', { name: 'PrerequisitesDirect link to' })).toBeVisible();
  });

  await test.step('#Step5: Verify its sub-headings getting started', async () => {
    await expect(page.getByRole('heading', { name: 'Getting StartedDirect link to' })).toBeVisible();
  });

});
});
