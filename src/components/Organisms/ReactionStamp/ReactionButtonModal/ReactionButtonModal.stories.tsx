import type { Meta, StoryObj } from '@storybook/react'
import { ReactionButtonModal } from './ReactionButtonModal'

type ComponentType = typeof ReactionButtonModal
type Story = StoryObj<ComponentType>

export default {
  component: ReactionButtonModal,
  args: {
    name: 'hoge',
  },
} as Meta<ComponentType>

export const Primary: Story = {
  args: {
    name: 'primary',
  },
}
