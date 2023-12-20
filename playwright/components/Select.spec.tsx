import { test, expect } from '@playwright/experimental-ct-react'
import Select from '../../components/Select'

test.use({ viewport: { width: 500, height: 500 } })

test('Select should work', async ({ mount, page }) => {
  const component = await mount(
    <Select
      callBack={function (taxYear: string): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
  await expect(component).toContainText('Choose a Tax Year')
  await component.click()
})
