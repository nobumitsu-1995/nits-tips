import type { Meta, StoryObj } from '@storybook/react'
import { ReactedButton } from './ReactedButton'

type ComponentType = typeof ReactedButton
type Story = StoryObj<ComponentType>

export default {
  component: ReactedButton,
  args: {
    name: 'hoge',
  },
} as Meta<ComponentType>

export const Primary: Story = {
  args: {
    name: 'primary',
  },
}
