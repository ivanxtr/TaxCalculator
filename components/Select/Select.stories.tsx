/* eslint-disable no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import Select from './index'

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'General/Select',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {}
}
