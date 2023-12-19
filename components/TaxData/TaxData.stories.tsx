/* eslint-disable no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import TaxData from './index'

const meta: Meta<typeof TaxData> = {
  component: TaxData,
  title: 'General/TaxData',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof TaxData>

export const Default: Story = {
  args: {}
}
