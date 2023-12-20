import { test, expect } from '@playwright/experimental-ct-react'
import Input from '../../components/Input'

test.use({ viewport: { width: 500, height: 500 } })

test('Input should work', async ({ mount, page }) => {
  const component = await mount(
    <Input
      callBack={function (amount: number): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
  await expect(component.getByPlaceholder('Annual Income')).toBeVisible()
})
