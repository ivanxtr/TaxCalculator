import { test, expect } from '@playwright/experimental-ct-react'
import ErrorUI from '../../components/ErrorUI'

test.use({ viewport: { width: 500, height: 500 } })

test('ErrorUI should appears', async ({ mount }) => {
  const component = await mount(<ErrorUI />)
  await expect(component).toContainText('Something Were Wrong!')
})
