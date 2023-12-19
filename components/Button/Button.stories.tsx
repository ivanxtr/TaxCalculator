/* eslint-disable no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import Button from './index'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'General/Button',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {}
}

export const Disabled: Story = {
  args: {
    isDisabled: true
  }
}
