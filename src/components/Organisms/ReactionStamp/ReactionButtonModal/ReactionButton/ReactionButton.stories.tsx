import type { Meta, StoryObj } from '@storybook/react'
import { ReactionButton } from './ReactionButton'

type ComponentType = typeof ReactionButton
type Story = StoryObj<ComponentType>

export default {
  component: ReactionButton,
  args: {
    name: 'hoge',
  },
} as Meta<ComponentType>

export const Primary: Story = {
  args: {
    name: 'primary',
  },
}
