/* eslint-disable no-unused-vars */
import type { Meta, StoryObj } from '@storybook/react'
import Form from './index'

const meta: Meta<typeof Form> = {
  component: Form,
  title: 'General/Form',
  tags: ['autodocs']
}
export default meta
type Story = StoryObj<typeof Form>

export const Default: Story = {
  args: {
    nft: [
      {
        title: 'Okay Bear #1917',
        price: 124,
        img: 'https://arweave.net/rO6eLwXD5dTQNWngf5Jx7rPIuuUdHw_KXbrWP5rL1z0'
      }
    ],
    index: 0,
    style: {}
  }
}
