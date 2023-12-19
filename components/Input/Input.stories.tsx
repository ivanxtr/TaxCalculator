/* eslint-disable no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import Input from './index'

const meta: Meta<typeof Input> = {
  component: Input,
  title: 'General/Input',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  args: {}
}
