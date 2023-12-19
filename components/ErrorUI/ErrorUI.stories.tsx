/* eslint-disable no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import ErrorUI from './index'

const meta: Meta<typeof ErrorUI> = {
  component: ErrorUI,
  title: 'General/ErrorUI',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof ErrorUI>

export const Default: Story = {
  args: {}
}
