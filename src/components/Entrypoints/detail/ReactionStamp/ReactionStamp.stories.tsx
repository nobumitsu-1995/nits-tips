import type { Meta, StoryObj } from '@storybook/react'
import { ReactionStamp } from './ReactionStamp'

type ComponentType = typeof ReactionStamp
type Story = StoryObj<ComponentType>

export default {
  component: ReactionStamp,
  args: {
    name: 'hoge',
  },
} as Meta<ComponentType>

export const Primary: Story = {
  args: {
    name: 'primary',
  },
}
