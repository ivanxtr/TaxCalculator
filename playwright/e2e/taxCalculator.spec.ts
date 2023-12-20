import { test, expect } from '@playwright/test'

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await page.locator('#taxYear').selectOption('2021')
  await page.getByPlaceholder('Annual Income').click()
  await page.getByPlaceholder('Annual Income').fill('20000')
  await page.getByRole('button', { name: 'Submit' }).click()
  await expect(page.getByText('Taxable income$20000We')).toBeVisible()
})
