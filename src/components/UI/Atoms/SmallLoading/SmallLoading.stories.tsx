import type { Meta, StoryObj } from '@storybook/react'
import { SmallLoading } from './SmallLoading'

type ComponentType = typeof SmallLoading
type Story = StoryObj<ComponentType>

export default {
  component: SmallLoading,
  args: {
    name: 'hoge',
  },
} as Meta<ComponentType>

export const Primary: Story = {
  args: {
    name: 'primary',
  },
}
