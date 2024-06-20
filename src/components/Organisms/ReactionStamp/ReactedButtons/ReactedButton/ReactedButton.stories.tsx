import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { ReactedButton } from './ReactedButton'
import { REACTION_STAMPS } from '../../model'

type ComponentType = typeof ReactedButton
type Story = StoryObj<ComponentType>

export default {
  component: ReactedButton,
  args: {
    onClick: fn(),
    count: 12,
    isActive: false,
  },
} as Meta<ComponentType>

export const Default: Story = {
  args: {
    stamp: REACTION_STAMPS[0],
  },
}

export const IsActive: Story = {
  args: {
    stamp: REACTION_STAMPS[1],
    isChecked: true,
  },
}
