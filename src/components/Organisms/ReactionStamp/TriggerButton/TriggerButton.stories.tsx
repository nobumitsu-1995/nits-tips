import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { TriggerButton } from './TriggerButton'

type ComponentType = typeof TriggerButton
type Story = StoryObj<ComponentType>

export default {
  component: TriggerButton,
  args: {
    onClick: fn(),
  },
} as Meta<ComponentType>

export const Default: Story = {}
