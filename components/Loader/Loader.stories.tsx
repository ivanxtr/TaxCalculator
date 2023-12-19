/* eslint-disable no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import Loader from './index'

const meta: Meta<typeof Loader> = {
  component: Loader,
  title: 'General/Loader',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Loader>

export const Default: Story = {
  args: {}
}
