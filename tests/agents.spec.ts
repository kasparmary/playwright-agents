import { expect, test } from '@playwright/test';

test('agents test', async ({ page }) => {
    await test.step('#Step1: navigate to test agents page', async () => {
    await page.goto('docs/test-agents/');
    });

    await test.step('#Step2: verify the heading of the page', async () => {
    await expect(page.getByRole('heading', { name: 'Playwright Test Agents' })).toBeVisible();
    });

    await test.step('#Step3: Verify the planner link and its functionality', async () => {
      await expect(page.getByRole('heading', { name: '🎭 PlannerDirect link to 🎭' })).toBeVisible();
    });

    await test.step('#Step4: Verify the generator link and its functionality', async () => {
        await page.getByRole('heading', { name: '🎭 GeneratorDirect link to 🎭' }).click();
    });

    await test.step('#Step5: Verify the Healer link and its functionality', async () => {
        await page.getByRole('heading', { name: '🎭 HealerDirect link to 🎭' }).click();
    });

});