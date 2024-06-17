import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ReactionButton } from './ReactionButton'
import { REACTION_STAMPS } from '../../model'

type ComponentType = typeof ReactionButton
type Story = StoryObj<ComponentType>

export default {
  component: ReactionButton,
  args: {
    isReacted: false,
    stamp: REACTION_STAMPS[0],
    handleClick: fn(),
  },
} as Meta<ComponentType>

export const Default: Story = {}
