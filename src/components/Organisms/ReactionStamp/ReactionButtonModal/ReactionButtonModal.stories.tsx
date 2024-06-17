import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ReactionButtonModal } from './ReactionButtonModal'

type ComponentType = typeof ReactionButtonModal
type Story = StoryObj<ComponentType>

export default {
  component: ReactionButtonModal,
  args: {
    reactedStampId: [1, 2, 5],
    onClick: fn(),
  },
} as Meta<ComponentType>

export const Default: Story = {}
