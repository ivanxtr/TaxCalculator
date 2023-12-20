import { test, expect } from '@playwright/experimental-ct-react'
import Button from '../../components/Button'

test.use({ viewport: { width: 500, height: 500 } })

test('Button should work', async ({ mount }) => {
  const component = await mount(<Button />)
  await expect(component).toContainText('Submit')
  await component.click()
})
