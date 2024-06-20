import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ReactedButtons } from './ReactedButtons'
import { REACTION_STAMPS } from '../model'

type ComponentType = typeof ReactedButtons
type Story = StoryObj<ComponentType>

export default {
  component: ReactedButtons,
  args: {
    reactedStamps: [
      { stamp: REACTION_STAMPS[0], count: 12, isChecked: false },
      { stamp: REACTION_STAMPS[5], count: 24, isChecked: true },
    ],
    onClick: fn(),
  },
} as Meta<ComponentType>

export const Default: Story = {}
