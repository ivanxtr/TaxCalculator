import { test, expect } from '@playwright/experimental-ct-react'
import TaxData from '../../components/TaxData'

test.use({ viewport: { width: 500, height: 500 } })

test('Select should work', async ({ mount, page }) => {
  const component = await mount(<TaxData income={10000} taxes={2000} />)
  await expect(component).toContainText('10000')
  await expect(component).toContainText('2000')
  await component.click()
})
