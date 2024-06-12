import type { Meta, StoryObj } from '@storybook/react'
import { TriggerButton } from './TriggerButton'

type ComponentType = typeof TriggerButton
type Story = StoryObj<ComponentType>

export default {
  component: TriggerButton,
  args: {
    name: 'hoge',
  },
} as Meta<ComponentType>

export const Primary: Story = {
  args: {
    name: 'primary',
  },
}
